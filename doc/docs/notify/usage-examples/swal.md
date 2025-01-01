---
sidebar_position: 1
sidebar_label: 'Swal'
---

# Swal

Swal adalah cara untuk menampilkan dialog interaktif yang menarik, seperti pesan peringatan, konfirmasi, atau informasi dengan desain yang modern. Dialog Swal tidak hilang secara otomatis, tetapi membutuhkan tindakan pengguna, seperti menekan tombol, untuk menutupnya.

### Menampilkan Swal

Untuk menampilkan swal, cukup panggil metode swal() dengan parameter jenis notifikasi, seperti `success`, `info`, `warning`, `error` atau jenis lainnya, sesuai dengan pesan yang ingin ditampilkan.

```js
notify.swal('success');
```

### Kustomisasi Title
Anda bisa menyesuaikan **title** notifikasi Swal untuk menampilkan pesan yang lebih spesifik atau sesuai konteks. Cukup berikan objek dengan properti `title` yang diinginkan.

```js
notify.swal({ title: 'Sukses Pak!' }, 'success');
```

### Kustomisasi Message
Anda juga bisa menyesuaikan **message** notifikasi Swal untuk menampilkan pesan yang lebih spesifik atau sesuai konteks. Cukup berikan objek dengan properti `message` yang diinginkan.

```js
notify.swal({ message: 'Iampact berhasil dibuat!' }, 'success');
```

### Konfigurasi Lokal Swal
Anda dapat mengonfigurasi notifikasi Swal secara lokal untuk menyesuaikan tampilan dan perilakunya. Misalnya, Anda bisa menambahkan element html di bawah dengan properti `footer`. Berikut adalah contoh cara melakukannya:

```js
notify.swal({
    title: 'Sukses Pak!',
    message: 'Iampact berhasil dibuat',
    config: { footer: '<a href="#">Why do I have this issue?</a>' },
}, 'success');
```

Pada properti `config`, Anda dapat menyesuaikan berbagai pengaturan yang tersedia di **SweetAlert**. Misalnya, Anda bisa mengaktifkan opsi **draggable** untuk membuat notifikasi dapat dipindah-pindah dengan menariknya, atau mengganti teks tombol konfirmasi menggunakan properti `confirmButtonText`.

```js
notify.swal({
    title: 'Warning Pak!',
    message: 'Ada sesuatu yang perlu dicek!',
    config: {
        draggable: true,
        confirmButtonText: "Gas Hapus!"
    },
}, 'error');
```

### Konfigurasi Global Swal
Anda dapat mengonfigurasi notifikasi Swal secara global, dimana dengan satu kali config akan berlaku untuk semua swal, terkecualikan swal yang di panggil dan di config ulang spesifik di pemanggilan swal seperti di atas pada properti `config`.

```js
notify.swal.config({
    showConfirmButton: false
});
```

:::info
Dengan menggunakan konfigurasi global seperti contoh di atas, setiap pemanggilan `swal` yang tidak dikonfigurasi ulang saat pemanggilan (misalnya: `notify.swal('success')`) tidak akan menampilkan **tombol konfirmasi**, karena sudah diset di konfigurasi global untuk swal. Untuk penjelasan lebih lanjut mengenai konfigurasi global, cek lebih detail di [Customization](../customization).
:::
