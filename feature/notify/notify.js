import { global, globalToast, globalSwal, globalConfirm } from "./config";

class Notify {
  constructor() {
    Object.assign(this, { global, globalToast, globalSwal, globalConfirm });
  }

  // This function should be moved to a utility formatter
  #ucFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // prettier-ignore
  #deepMerge(target, source) {
    return Object.entries(source).reduce((acc, [key, value]) => {
      acc[key] = value && typeof value === "object"
        ? this.#deepMerge(acc[key] || {}, value)
        : value;
      return acc;
    }, { ...target });
  }

  config(config = {}, type = "") {
    const targetConfig = type ? `global${this.#ucFirst(type)}` : "global";
    this[targetConfig] = this.#deepMerge(this[targetConfig], config);
  }

  #buildConfig(param, status, type) {
    if (typeof param === "string") {
      status = param;
      param = {};
    }

    const { title: globalTitle, message, ...globalConfig } = this.global;
    const defaultTitle = globalTitle[status] || this.#ucFirst(status);
    const { title = defaultTitle, config } = param || {};
    const text = param?.message || message[status] || "";

    const requestConfig = {
      ...globalConfig,
      ...this[`global${this.#ucFirst(type)}`],
      ...config,
    };

    return { title, text, config: requestConfig, status };
  }

  toast(param, status) {
    // prettier-ignore
    const { title, text, config, status: newStatus } = this.#buildConfig(param, status, "toast");
    const Toast = Swal.mixin(config);
    Toast.fire({ title, text, icon: newStatus });
  }

  swal(param, status) {
    // prettier-ignore
    const { title, text, config, status: newStatus } = this.#buildConfig(param, status, "swal");
    Swal.fire({ title, text, icon: newStatus, ...config });
  }

  confirm(param) {
    // prettier-ignore
    const { title, text, config } = this.#buildConfig(param, '', "confirm");
    return new Promise((resolve) => {
      Swal.fire({ title, text, ...config }).then((result) => {
        resolve(result.isConfirmed);
      });
    });
  }
}

const notifyInstance = new Notify();

// prettier-ignore
const configure = (type) => (config = {}) => { notifyInstance.config(config, type) };
notifyInstance.toast.config = configure("toast");
notifyInstance.swal.config = configure("swal");
notifyInstance.confirm.config = configure("confirm");

export default notifyInstance;
