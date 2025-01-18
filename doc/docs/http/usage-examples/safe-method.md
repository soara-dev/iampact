---
sidebar_position: 1
sidebar_label: 'Safe Methods'
---

# Safe Methods

Pada saat melakukan request ke server, kita hanya menginginkan data yang diperlukan tanpa ada manipulasi data. Method Safe diantaranya adalah `'GET'`, `'HEAD'`, `'OPTIONS'`, dan `'TRACE'`. Method ini tidak mengubah data di server, sehingga disebut sebagai **safe methods**.

### Melakukan Request

Untuk melakukan request, Anda dapat menggunakan cara dibawah ini dengan beberapa parameter yang telah di sediakan yang dapat di lihat pada [referensi http](../api-reference.md).
```js
http.request({
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/posts",
    onSuccess: function (res) {
        // Do something
    },
})
```

:::info
Pada modul `http`, properti `method` secara default bernilai `GET`. Oleh karena itu, Anda dapat mengabaikan properti ini jika ingin menggunakan metode `GET`. Lebih lengkap bisa cek [Referensi API Http](../api-reference.md).
:::

### Menambahkan Query Parameter

Pada saat melakukan request, terkadang kita membutuhkan **query parameter** untuk mendapatkan data yang diinginkan. Berikut adalah contoh penggunaan query parameter pada saat melakukan request.
```js
http.request({
    url: "https://jsonplaceholder.typicode.com/posts",
    data: {
        page:1,
        limit: 10,
        order: "desc",
    },
})
```

### Lifecycle Hooks

Saat melakukan request, terdapat beberapa **lifecycle hooks** yang dapat digunakan untuk menangani request. Berikut adalah contoh penggunaan **lifecycle hooks** pada saat melakukan request.
- `onBeforeSend` : Fungsi ini akan dijalankan sebelum request dikirim ke server. digunakan untuk menampilkan loading spinner atau menampilkan pesan loading.
- `onSuccess` : Fungsi ini akan dijalankan ketika request berhasil. digunakan untuk melakukan aksi setelah request berhasil.
- `onError` : Fungsi ini akan dijalankan ketika request gagal. digunakan untuk menampilkan pesan error.
- `onComplate` : Fungsi ini akan dijalankan setelah request selesai. digunakan untuk menutup loading spinner atau melakukan aksi setelah request selesai.
```js
http.request({
    url: "https://jsonplaceholder.typicode.com/posts",
    onBeforeSend: function () {
        // Do something
    },
    onSuccess: function (res) {
        // Do something
    },
    onError: function (err) {
        // Do something
    },
    onComplate: function () {
        // Do something
    },
})
```

:::warning
Jika telah melakukan konfigurasi **global** pada lifecycle hooks dan melakukan konfigurasi **local** pada lifecycle hooks, maka konfigurasi **local** akan melakukan **override** pada konfigurasi **global**.
:::
