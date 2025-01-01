---
sidebar_position: 2
sidebar_label: "Getting Started"
---

# Panduan Awal

Untuk mulai menggunakan **Notify** di aplikasi Anda, ikuti langkah-langkah sederhana berikut:

### Inisialisasi

Pastikan Anda sudah mengintegrasikan **Iampact** ke dalam proyek Anda. Jika belum, Anda bisa memulai dengan mengunduh atau menginstal Iampact.

```js
const { notify } = iam.utils;
```

### Contoh Penggunaan

Notify dirancang agar sangat mudah digunakan, dengan pengaturan default untuk `title` dan `message` yang dapat langsung dipakai. Anda dapat menggunakan notifikasi dengan sangat ringkas tanpa perlu konfigurasi yang rumit. Namun, jika Anda membutuhkan pengaturan yang lebih spesifik, Notify menyediakan dua cara konfigurasi: secara `global` dan `lokal`.

```js
notify.toast("success");
```
