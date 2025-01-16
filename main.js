import httpInstance from "./feature/http";
import notify from "./feature/notify/notify";
import { validate } from "./feature/validate";
import datatables from "./feature/datatables";

const iam = {
  http: {
    create: httpInstance.create,
    request: httpInstance.request,
    validate,
  },
  utils: {
    notify,
    datatables,
  },
};

window.iam = iam;
