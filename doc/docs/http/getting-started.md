---
sidebar_position: 2
sidebar_label: "Getting Started"
---

# Pandual Awal

### Inisialisasi

Pastikan Anda sudah mengintegrasikan **Iampact** ke dalam proyek Anda. Jika belum, Anda bisa memulai dengan mengunduh atau menginstal Iampact.

```js
const { http } = iampact
```

### Contoh Penggunaan
Cara penggunan Http hanya perlu mengisi beberapa parameter yang sudah di sediakan serta dapat di sesuaikan konfigurasinya menggunakan `global` ataupun `lokal`.

```js
http.request({
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

:::info
Pada modul `http`, properti `method` secara default bernilai `GET`. Oleh karena itu, Anda dapat mengabaikan properti ini jika ingin menggunakan metode `GET`. Lebih lengkap bisa cek [Referensi API Http](api-reference.md).
:::
