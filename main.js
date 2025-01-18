import http from "./feature/http/http";
import datatables from "./feature/datatables/datatables";
import * as formatter from "./feature/formatter/formatter";
import notify from "./feature/notify/notify";
import validate from "./feature/http/validate";

const iampact = {
  http: {
    create: http.create,
    request: http.request,
    validate,
  },
  datatables,
  formatter,
  notify,
};

window.iampact = iampact;
