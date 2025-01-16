import httpInstance from "./feature/http/http";
import notify from "./feature/notify/notify";
import validate from "./feature/http/validate";
import datatables from "./feature/datatables/datatables";

const iam = {
  http: {
    create: httpInstance.create,
    request: httpInstance.request,
    validate,
  },
  datatables,
  notify,
  // utils: {
  // },
};

window.iam = iam;
