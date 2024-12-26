class Http {
  constructor(config = {}) {
    this.baseUrl = config.baseUrl || "";
    this.onSuccess = config.onSuccess || (() => {});
    this.onError = config.onError || (() => {});
    this.onBeforeSend = config.onBeforeSend || (() => {});
    this.onComplete = config.onComplete || (() => {});
  }

  create(param) {
    return new Http({
      baseUrl: param.baseUrl,
      onSuccess: param.onSuccess,
      onError: param.onError,
      onBeforeSend: param.onBeforeSend,
      onComplete: param.onComplete,
    });
  }

  request(param) {
    const { url, method, data, onSuccess, onError, onBeforeSend, onComplete } =
      param;

    const requestConfig = {
      url: this.baseUrl ? this.baseUrl + url : url,
      method: method || "GET",
      data: data || {},
      onBeforeSend: onBeforeSend || this.onBeforeSend || (() => {}),
      onSuccess: onSuccess || this.onSuccess || (() => {}),
      onError: onError || this.onError || (() => {}),
      onComplete: onComplete || this.onComplete || (() => {}),
    };

    return $.ajax({
      url: requestConfig.url,
      method: requestConfig.method,
      data: requestConfig.data,
      contentType: false,
      processData: false,
      async: false,
      beforeSend: function (xhr) {
        requestConfig.onBeforeSend(xhr);
      },
      success: function (res) {
        requestConfig.onSuccess(res);
      },
      error: function (err) {
        requestConfig.onError(err);
      },
      complete: function () {
        requestConfig.onComplete();
      },
    });
  }
}

const httpInstance = new Http();

export default httpInstance;
