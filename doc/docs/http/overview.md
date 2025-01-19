---
sidebar_position: 1
sidebar_label: "Overview"
---

# Ringkasan

### Apa itu Http?

**Http** adalah salah satu module dari Iampact yang dirancang untuk menangani permintaan HTTP di aplikasi Anda. Dengan `Http`, Anda dapat mengirim permintaan ke server dan menangani respons yang diterima. Module ini memungkinkan Anda untuk mengatur konfigurasi default, menambahkan header, dan menangani respons dengan mudah.

Komponen ini menggunakan library ajax sebagai basisnya, tetapi telah disederhanakan agar lebih mudah digunakan dan dapat disesuaikan dengan kebutuhan Anda. Tidak perlu lagi menulis kode permintaan HTTP secara manual—cukup gunakan metode yang telah disediakan oleh `Http`.


### Keunggulan Http

- **Sederhana**: API yang mudah dipahami, memungkinkan Anda mengirim permintaan HTTP hanya dengan beberapa baris kode.
- **Konsisten**: Semua permintaan HTTP code yang konsisten di seluruh aplikasi.
- **Kemudahan Penggunaan**: Anda dapat menyesuaikan konfigurasi default, menambahkan header, dan menangani respons dengan mudah.

### Kapan Menggunakan Http?

Http akan sangat berguna dalam situasi berikut:
- Mengirim permintaan ke server untuk mengambil atau menyimpan data.
- Menangani respons dari server, seperti menampilkan data atau menampilkan pesan kesalahan.
- Ingin menambahkan konfigurasi default untuk setiap permintaan yang dilakukan.

<!--
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
``` -->
