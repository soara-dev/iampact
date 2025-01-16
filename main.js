import httpInstance from "./feature/http";
import notify from "./feature/notify/notify";
import { validate } from "./feature/validate";
import datatables from "./feature/datatables";

const iam = {
  create: httpInstance.create,
  request: httpInstance.request,
  utils: {
    notify,
    validate,
    datatables,
  },
};

window.iam = iam;
