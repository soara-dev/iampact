---
sidebar_position: 2
sidebar_label: 'Unsafe Methods'
---

# Unsafe Methods

Pada saat melakukan request ke server, kita ingin melakukan manipulasi data di server. Method Unsafe diantaranya adalah `'POST'`, `'PUT'`, `'PATCH'`, dan `'DELETE'`. Method ini mengubah data di server, sehingga disebut sebagai **unsafe methods**. 

### Melakukan Request
Untuk melakukan request, Anda dapat menggunakan cara dibawah ini dengan beberapa parameter yang telah di sediakan yang dapat di lihat pada [referensi http](../api-reference.md)
```js
request({
    method: "POST",
    url: "https://jsonplaceholder.typicode.com/posts",
    data: {
        title: "foo",
        category: "bar"
    }
    onSuccess: function (res) {
        // Do something
    },
})
```

### Mengirim Form Data
Pada saat melakukan request, terkadang kita membutuhkan **form data** untuk menghandle request yang menggunakan **form data**. Berikut adalah contoh penggunaan **form data** pada saat melakukan request.
```js
request({
    url: "https://jsonplaceholder.typicode.com/posts",
    data: new FormData($form),
})
```

### Menambahkan Redirect
Pengguna dapat menambahkan parameter `redirect` untuk melakukan redirect ke halaman lain pada saat request dinyatakan sukses. Berikut adalah contoh penggunaan parameter `redirect` pada saat melakukan request.
```js
request({
    url: "https://jsonplaceholder.typicode.com/posts",
    redirect: "https://example.com",
})
```

### Menambahkan Reload
Pengguna dapat menambahkan parameter `reload` untuk melakukan reload halaman pada saat request dinyatakan sukses. Berikut adalah contoh penggunaan parameter `reload` pada saat melakukan request.
```js
request({
    url: "https://jsonplaceholder.typicode.com/posts",
    withReload: true,
})
```

### Lifecycle Hooks
Saat melakukan request, terdapat beberapa **lifecycle hooks** yang dapat digunakan untuk menangani request. Berikut adalah contoh penggunaan **lifecycle hooks** pada saat melakukan request.
- `onBeforeSend` : Fungsi ini akan dijalankan sebelum request dikirim ke server. digunakan untuk menampilkan loading spinner atau menampilkan pesan loading.
- `onSuccess` : Fungsi ini akan dijalankan ketika request berhasil. digunakan untuk melakukan aksi setelah request berhasil.
- `onError` : Fungsi ini akan dijalankan ketika request gagal. digunakan untuk menampilkan pesan error. 
- `onComplate` : Fungsi ini akan dijalankan setelah request selesai. digunakan untuk menutup loading spinner atau melakukan aksi setelah request selesai.
```js
request({
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