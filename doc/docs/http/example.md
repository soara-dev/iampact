---
sidebar_position: 1
---

# Contoh Penggunaan

Penggunaan method get

```js
iam.request({
  method: "GET",
  url: "https://jsonplaceholder.typicode.com/posts",
  onBeforeSend: function (res) {
    // Do something
  },
  onSuccess: function (res) {
    // Do something
  },
  onError: function (res) {
    // Do something
  },
  onComplete: function () {
    // Do something
  },
});
```
