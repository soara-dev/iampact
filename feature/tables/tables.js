import deepMerge from "../../helpers/deepMerge";

class Tables {
  constructor(config = {}) {
    this.instance = null;
    this.el = config.el || "";
    this.url = config.url || "";
    this.columns = config.columns || [];
    this.dataFilter = this.#loadFilter(config.filters) || {};
    this.data = config.data || {};
    this.initComplete = config.initComplete || (() => {});
    this.drawCallback = config.drawCallback || (() => {});
    this.buttons = this.#loadExport(config.export) || {};
    this.lengthMenu = config.lengthMenu || [
      [10, 25, 50, 100],
      [10, 25, 50, 100],
    ];
    this.#search(config.search);
    this.#filters(config.filters);
    this.#export(config.export);
  }

  init() {
    this.instance = $(this.el).DataTable({
      processing: true,
      serverSide: true,
      responsive: false,
      ajax: {
        url: this.url,
        type: "GET",
        data: (d) => {
          return $.extend({}, d, this.dataFilter, this.data);
        },
      },
      initComplete: () => {
        const params = {
          el: this.el,
          instance: this.instance,
          columns: this.columns,
          data: this.data,
        };
        this.initComplete(params);
      },
      drawCallback: () => {
        const params = {
          el: this.el,
          instance: this.instance,
          columns: this.columns,
          data: this.data,
        };
        this.drawCallback(params);
      },
      order: [],
      columns: this.columns,
      buttons: this.buttons,
      lengthMenu: this.lengthMenu,
    });
    return this;
  }

  #search(el) {
    if (!el) return;
    let debounceTimeout, previousValue;
    $(document).on("keyup", el, (e) => {
      clearTimeout(debounceTimeout);
      debounceTimeout = setTimeout(() => {
        const currentValue = e.target.value;
        if (currentValue !== previousValue) {
          this.instance.search(currentValue).draw();
          previousValue = currentValue;
        }
      }, 300);
    });
  }

  #filters(param) {
    if (!param) return;
    return param.forEach((item) => {
      const { el, name, event = "change" } = item;
      $(document).on(event, el, (e) => {
        this.dataFilter[name] = e.target.value;
        this.reload();
      });
    });
  }

  #export(param) {
    if (!param) return;
    const { el } = param;
    $(document).on("click", `${el} [data-export]`, (e) => {
      e.preventDefault();
      const exportType = $(e.currentTarget).data("export");
      this.instance.buttons(`.buttons-${exportType}`).trigger();
    });
  }

  reload() {
    this.instance.ajax.reload();
  }

  #loadFilter(param) {
    if (!param) return;
    return param.reduce((acc, item) => {
      $(item.el).val(item.val).trigger("change");
      acc[item.name] = item.val || "";
      return acc;
    }, {});
  }

  #loadExport(param) {
    if (!param) return;
    const { el, title, columns = ":visible", except = [] } = param;

    const dataExtends = {
      copy: "copyHtml5",
      excel: "excelHtml5",
      csv: "csvHtml5",
      pdf: "pdfHtml5",
      print: "print",
    };

    const filteredColumns = except
      ? this.columns
          .map((_, index) => index)
          .filter((_, index) => !except.includes(index))
      : columns;

    const dataButtons = $(`${el} [data-export]`)
      .map((_, e) => {
        const dataExport = $(e).data("export");
        const baseConfig = {
          title: title,
          extend: dataExtends[dataExport],
          action: this.#handleExportAction,
          exportOptions: {
            columns: filteredColumns,
          },
        };
        return deepMerge(baseConfig, param[dataExport] || {});
      })
      .get();

    return dataButtons;
  }

  #handleExportAction(e, dt, button, config) {
    var self = this;
    var oldStart = dt.settings()[0]._iDisplayStart;
    dt.one("preXhr", function (e, s, data) {
      data.start = 0;
      data.length = 2147483647;
      dt.one("preDraw", function (e, settings) {
        if (button[0].className.indexOf("buttons-copy") >= 0) {
          $.fn.dataTable.ext.buttons.copyHtml5.action.call(
            self,
            e,
            dt,
            button,
            config
          );
        } else if (button[0].className.indexOf("buttons-excel") >= 0) {
          $.fn.dataTable.ext.buttons.excelHtml5.available(dt, config)
            ? $.fn.dataTable.ext.buttons.excelHtml5.action.call(
                self,
                e,
                dt,
                button,
                config
              )
            : $.fn.dataTable.ext.buttons.excelFlash.action.call(
                self,
                e,
                dt,
                button,
                config
              );
        } else if (button[0].className.indexOf("buttons-csv") >= 0) {
          $.fn.dataTable.ext.buttons.csvHtml5.available(dt, config)
            ? $.fn.dataTable.ext.buttons.csvHtml5.action.call(
                self,
                e,
                dt,
                button,
                config
              )
            : $.fn.dataTable.ext.buttons.csvFlash.action.call(
                self,
                e,
                dt,
                button,
                config
              );
        } else if (button[0].className.indexOf("buttons-pdf") >= 0) {
          $.fn.dataTable.ext.buttons.pdfHtml5.available(dt, config)
            ? $.fn.dataTable.ext.buttons.pdfHtml5.action.call(
                self,
                e,
                dt,
                button,
                config
              )
            : $.fn.dataTable.ext.buttons.pdfFlash.action.call(
                self,
                e,
                dt,
                button,
                config
              );
        } else if (button[0].className.indexOf("buttons-print") >= 0) {
          $.fn.dataTable.ext.buttons.print.action(e, dt, button, config);
        }
        dt.one("preXhr", function (e, s, data) {
          settings._iDisplayStart = oldStart;
          data.start = oldStart;
        });
        setTimeout(dt.ajax.reload, 0);
        return false;
      });
    });
    dt.ajax.reload();
  }
}

export default {
  config(config = {}) {
    this.globalConfig = config;
  },

  create(el = "", config) {
    return new Tables({ el, ...this.globalConfig, ...config }).init();
  },
};
