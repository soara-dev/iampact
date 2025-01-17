class Datatables {
  constructor(config = {}) {
    this.instance = null;
    this.el = config.el || "";
    this.url = config.url || "";
    this.columns = config.columns || [];
    this.dataFilter = this.#loadFilter(config.filters) || {};
    this.#search(config.search);
    this.#filters(config.filters);
    this.#export(config.export);
  }

  init() {
    this.instance = $(this.el).DataTable({
      processing: true,
      serverSide: true,
      responsive: true,
      ajax: {
        url: this.url,
        type: "GET",
        data: (d) => {
          return $.extend({}, d, this.dataFilter);
        },
      },
      order: [],
      columns: this.columns,
    });
    return this.instance;
  }

  #search(el) {
    if (!el) return console.error(`Iampact: Search element not found!`);
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
    return param.forEach((item) => {
      const { el, name, event = "change" } = item;
      $(document).on(event, el, (e) => {
        this.dataFilter[name] = e.target.value;
        this.reload();
      });
    });
  }

  #export(param) {
    const { el } = param;
    this.#loadExport(param);
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
    return param.reduce((acc, item) => {
      $(item.el).val(item.val).trigger("change");
      acc[item.name] = item.val || "";
      return acc;
    }, {});
  }

  #loadExport(param) {
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
        return {
          title: title,
          extend: dataExtends[dataExport],
          action: this.#handleExportAction,
          exportOptions: {
            columns: filteredColumns,
          },
          ...param[dataExport],
        };
      })
      .get();

    $.extend($.fn.dataTable.defaults, { buttons: dataButtons });
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
  create(el = "", config) {
    return new Datatables({ el, ...config }).init();
  },
};
