import httpInstance from "./feature/http";
import notify from "./feature/notify/notify";
import validate from "./feature/validate";

const iam = {
  create: httpInstance.create,
  request: httpInstance.request,
  utils: {
    notify,
    validate,
  },
};

window.iam = iam;
