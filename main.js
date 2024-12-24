import validate from "./feature/validate";
import httpInstance from "./feature/http";

const iam = {
  create: httpInstance.create,
  request: httpInstance.request,
  utils: {
    validate,
  },
};

window.iam = iam;
