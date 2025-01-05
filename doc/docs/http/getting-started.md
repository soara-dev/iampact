---
sidebar_position: 2
sidebar_label: "Getting Started"
---

# Pandual Awal

### Inisialisasi

Pastikan Anda sudah mengintegrasikan **Iampact** ke dalam proyek Anda. Jika belum, Anda bisa memulai dengan mengunduh atau menginstal Iampact.

```js
const { request } = iam.http
```

### Contoh Penggunaan
Cara penggunan Http hanya perlu mengisi beberapa parameter yang sudah di sediakan serta dapat di sesuaikan konfigurasinya menggunakan `global` ataupun `lokal`.

```js
request({
  method: "GET",
  url: "https://jsonplaceholder.typicode.com/posts",
  onSuccess: function (res) {
    // Do something
  },
  onError: function (res) {
    // Do something
  },
});
```