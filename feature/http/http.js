import { clearValidate } from "./validate";

class Http {
  constructor(config = {}) {
    this.baseUrl = config.baseUrl || "";
    this.onSuccess = config.onSuccess || (() => {});
    this.onError = config.onError || (() => {});
    this.onBeforeSend = config.onBeforeSend || (() => {});
    this.onComplete = config.onComplete || (() => {});
    this.withReload = config.withReload || false;
    this.redirectTo = config.redirectTo || "";
  }

  create(param) {
    return new Http({
      baseUrl: param.baseUrl,
      onSuccess: param.onSuccess,
      onError: param.onError,
      onBeforeSend: param.onBeforeSend,
      onComplete: param.onComplete,
      withReload: param.withReload,
      redirectTo: param.redirectTo,
    });
  }

  request(param) {
    const {
      url,
      method,
      data,
      onSuccess,
      onError,
      onBeforeSend,
      onComplete,
      withReload,
      redirectTo,
    } = param;

    const requestConfig = {
      url: this.baseUrl ? this.baseUrl + url : url,
      method: method || "GET",
      data: data || {},
      onBeforeSend: onBeforeSend || this.onBeforeSend || (() => {}),
      onSuccess: onSuccess || this.onSuccess || (() => {}),
      onError: onError || this.onError || (() => {}),
      onComplete: onComplete || this.onComplete || (() => {}),
      withReload: withReload || this.withReload,
      redirectTo: redirectTo || this.redirectTo,
    };

    const isFormData = data instanceof FormData;
    const ajaxConfig = {
      url: requestConfig.url,
      method: requestConfig.method,
      data: requestConfig.data,
      contentType: false,
      processData: false,
      beforeSend: function (xhr) {
        requestConfig.onBeforeSend(xhr);
      },
      success: function (res) {
        clearValidate();
        requestConfig.onSuccess(res);
        if (requestConfig.withReload) {
          window.location.href = requestConfig.redirectTo;
          return;
        }

        if (requestConfig.redirectTo) {
          window.location.href = requestConfig.redirectTo;
          return;
        }
      },
      error: function (err) {
        requestConfig.onError(err);
      },
      complete: function () {
        requestConfig.onComplete();
      },
    };

    if (!isFormData) {
      delete ajaxConfig.contentType;
      delete ajaxConfig.processData;
    }

    return $.ajax(ajaxConfig);
  }
}

const httpInstance = new Http();

export default httpInstance;
