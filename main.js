import httpInstance from "./feature/http";
import notify from "./feature/notify/notify";
import { validate } from "./feature/validate";

const iam = {
  http: {
    create: httpInstance.create,
    request: httpInstance.request,
    validate,
  },
  utils: {
    notify,
  },
};

window.iam = iam;
