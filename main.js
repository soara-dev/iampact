import * as formatter from "./feature/formatter/formatter";
import http from "./feature/http/http";
import notify from "./feature/notify/notify";
import tables from "./feature/tables/tables";
import validate from "./feature/http/validate";

const iampact = {
  http: {
    create: http.create,
    request: http.request,
    validate,
  },
  formatter,
  notify,
  tables,
};

window.iampact = iampact;
