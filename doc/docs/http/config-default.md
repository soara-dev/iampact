---
sidebar_position: 3
---

# Config Default

Pada konfigurasi http yang digunakan akan menjadi konfigurasi default untuk setiap request yang dilakukan. konfigurasi ini tidak bersifat wajib. Berikut adalah konfigurasi yang dapat digunakan:

```js
const { validate } = iam.utils;

const app = iam.create({
  onBeforeSend: function (res) {
    // Do something
  },
  onSuccess: function (res) {
    // Do something
  },
  onError: function (res) {
    // Do something
    validate(res.responseJSON); // Validation on error
  },
  onComplete: function () {
    // Do something
  },
});
```
