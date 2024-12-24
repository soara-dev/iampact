class Http {
  constructor(config = {}) {
    this.baseUrl = config.baseUrl || "";
    this.onSuccess = config.onSuccess || (() => {});
    this.onError = config.onError || (() => {});
  }

  create(param) {
    return new Http({
      baseUrl: param.baseUrl || this.baseUrl,
      onSuccess: param.onSuccess || this.onSuccess,
      onError: param.onError || this.onError,
    });
  }

  request(param) {
    const { url, method, data, onSuccess, onError } = param;

    const requestConfig = {
      url: this.baseUrl ? this.baseUrl + url : url,
      method: method || "GET",
      data: data || {},
      onSuccess: onSuccess || this.onSuccess || (() => {}),
      onError: onError || this.onError || (() => {}),
    };

    return $.ajax({
      url: requestConfig.url,
      method: requestConfig.method,
      data: requestConfig.data,
      success: function (res) {
        requestConfig.onSuccess(res);
      },
      error: function (err) {
        requestConfig.onError(err);
      },
    });
  }
}

const httpInstance = new Http();

export default httpInstance;
