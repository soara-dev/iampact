---
sidebar_position: 4
sidebar_label: "Customization"
---

# Kustomisasi

Pada bagian ini, Anda dapat mengatur konfigurasi **global** pada lifecycle hooks yang akan dijalankan untuk setiap permintaan (request) yang dilakukan. Berikut adalah contoh penggunaan konfigurasi **global** pada lifecycle hooks:

```js
const { http, notify } = iampact;

const app = http.create({
    onSuccess: function(res) {
        notify.toast({
            message: res.message
        }, 'success');
    },
    onError: function(err) {
        const res = err.responseJSON;
        if (err.status === 422) {
            notify.toast({ message: res.message }, 'error');
            http.validate(res); // Menampilkan pesan error pada inputan yang di validasi
        }
    }
})
```

Setelah melakukan konfigurasi **global** pada `http`, Anda dapat menggunakan instance `http` yang telah dikustomisasi ini setiap kali melakukan permintaan. Berikut adalah contoh penggunaan instance tersebut:

```js
app.request({
    method: "POST",
    url: "/posts",
    onSuccess: function (res) {
        // Do something
    },
})
```

:::warning
Jika Anda telah mengatur konfigurasi **global** pada lifecycle hooks, tetapi juga mengatur konfigurasi **lokal** pada lifecycle hooks saat membuat permintaan, maka konfigurasi **lokal** akan **menggantikan** (override) konfigurasi **global**.
:::
