---
sidebar_position: 4
sidebar_label: "Customization"
---

# Kustomisasi
Pada bagian kustomisasi ini, anda dapat mengatur konfigurasi global pada lifecycle hooks yang akan dijalankan pada setiap request yang dilakukan. Berikut adalah contoh penggunaan konfigurasi global pada lifecycle hooks.

```js
const { notify } = iam.utils;
const { http, validate } = iam.http;
const http = http.create({
    onSuccess: function(res) {
        notify.toast({
            message: res.message
        }, 'success');
    },
    onError: function(err) {
        const res = err.responseJSON;
        if (err.status === 422) {
            notify.toast({ message: res.message }, 'error');
            validate(res); // Menampilkan pesan error pada inputan yang di validasi
        }
    }
})
```

Jika telah dilakukan konfigurasi **global** pada http, anda dapat memanggil http pada setiap request yang dilakukan. Berikut adalah contoh penggunaan http pada saat melakukan request.

```js
http.request({
    method: "POST",
    url: "/posts",
    onSuccess: function (res) {
        // Do something
    },
})
```

:::warning
Jika telah melakukan konfigurasi **global** pada lifecycle hooks dan melakukan konfigurasi **local** pada lifecycle hooks, maka konfigurasi **local** akan melakukan **override** pada konfigurasi **global**.
:::
