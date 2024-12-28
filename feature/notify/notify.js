import { global, globalToast, globalSwal, globalConfirm } from "./config";

class Notify {
  constructor() {
    Object.assign(this, { global, globalToast, globalSwal, globalConfirm });
  }

  // This function should be moved to a utility formatter
  #ucFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  config(config = {}, type = "") {
    const targetConfig = type ? `global${this.#ucFirst(type)}` : "global";
    this[targetConfig] = { ...this[targetConfig], ...config };
  }

  #buildConfig(param, status, type) {
    const defaultTitle = this.#ucFirst(status);
    const { title = defaultTitle, config } = param;
    const { message, ...globalConfig } = this.global;
    const text = param.message ?? message[status] ?? message;

    const requestConfig = {
      ...globalConfig,
      ...this[`global${this.#ucFirst(type)}`],
      ...config,
    };

    return { title, text, config: requestConfig };
  }

  toast(param, status) {
    const { title, text, config } = this.#buildConfig(param, status, "toast");
    const Toast = Swal.mixin(config);
    Toast.fire({ title, text, icon: status });
  }

  swal(param, status) {
    const { title, text, config } = this.#buildConfig(param, status, "swal");
    Swal.fire({ title, text, icon: status, ...config });
  }

  confirm(param) {
    return new Promise((resolve) => {
      Swal.fire({ ...this.globalConfirm, ...param }).then((result) => {
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

export default notifyInstance;
