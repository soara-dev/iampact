---
sidebar_position: 3
sidebar_label: 'Confirm'
---

# Confirm

Confirm adalah dialog konfirmasi yang digunakan untuk meminta keputusan dari pengguna. Biasanya digunakan untuk tindakan penting seperti menghapus atau mengonfirmasi aksi lainnya. Dialog ini menampilkan dua pilihan: `OK` dan `Cancel`.

### Menampilkan Confirm

Untuk menampilkan dialog konfirmasi, cukup panggil metode confirm(). Anda dapat menggunakan chain .then() untuk mendapatkan respons apakah pengguna memilih `OK` atau `Cancel`.

```js
const isDeleted = notify.confirm();
isDeleted.then((res) => console.log(res));
```

### Kustomisasi Tombol Konfirmasi
Anda dapat menyesuaikan teks pada tombol konfirmasi sesuai dengan kebutuhan. Cukup berikan objek dengan properti `confirmButtonText` yang diinginkan.

```js
const isDeleted = notify.confirm({ confirmButtonText: "Lanjutkan" });
```

### Konfigurasi Global Confirm
Anda dapat mengonfigurasi notifikasi Confirm secara global, dimana dengan satu kali config akan berlaku untuk semua confirm, terkecualikan confirm yang di panggil dan di config ulang spesifik di pemanggilan confirm seperti di atas pada properti `config`.

```js
notify.confirm.config({
    confirmButtonColor: "#213555",
    cancelButtonColor: "#D8C4B6",
});
```

:::info
Dengan menggunakan konfigurasi global seperti contoh di atas, setiap pemanggilan `confirm` yang tidak dikonfigurasi ulang saat pemanggilan (misalnya: `notify.confirm()`) maka `confirmButtonColor` akan berwarna `#213555` dan `cancelButtonColor` akan berwarna `#D8C4B6`, karena sudah diset di konfigurasi global untuk confirm. Untuk penjelasan lebih lanjut mengenai konfigurasi global, cek lebih detail di [Customization](../customization).
:::
