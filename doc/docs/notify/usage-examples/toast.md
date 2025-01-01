---
sidebar_position: 2
sidebar_label: 'Toast'
---

# Toast

Toast Notification adalah salah satu cara untuk menampilkan notifikasi yang muncul di sudut layar dan hilang secara otomatis setelah beberapa detik. Biasanya digunakan untuk pesan singkat seperti pemberitahuan sukses, informasi, atau peringatan.

### Menampilkan Toast

Untuk menampilkan toast, cukup panggil metode toast() dengan parameter jenis notifikasi, seperti `success`, `info`, `warning`, `error`, atau jenis lainnya, sesuai dengan pesan yang ingin ditampilkan.

```js
notify.toast('success');
```

### Kustomisasi Title
Anda bisa menyesuaikan **title** notifikasi Toast untuk menampilkan pesan yang lebih spesifik atau sesuai konteks. Cukup berikan objek dengan properti `title` yang diinginkan.

```js
notify.toast({ title: 'Sukses Pak!' }, 'success');
```

### Kustomisasi Message
Anda juga bisa menyesuaikan **message** notifikasi Toast untuk menampilkan pesan yang lebih spesifik atau sesuai konteks. Cukup berikan objek dengan properti `message` yang diinginkan.

```js
notify.toast({ message: 'Iampact berhasil dibuat!' }, 'success');
```

### Konfigurasi Lokal Toast
Anda dapat mengonfigurasi notifikasi Toast secara lokal untuk menyesuaikan tampilan dan perilakunya. Misalnya, Anda bisa mengubah waktu tampil notifikasi dengan mengatur properti `timer`. Berikut adalah contoh cara melakukannya:

```js
notify.toast({
    title: 'Sukses Pak!',
    message: 'Iampact berhasil dibuat',
    config: { timer: 1000 },
}, 'success');
```

Pada properti `config`, disana anda dapat menyesuaikan seluruh konfigurasi yang ada pada library sweetalert, seperti `position` menjadi **top-start** atau menonaktifkan progres timer dengan `timerProgressBar`.

```js
notify.toast({
    title: 'Warning Pak!',
    message: 'Ada sesuatu yang perlu dicek!',
    config: {
        timer: 5000,
        position: 'top-start',
        timerProgressBar: false
    },
}, 'warning');
```

### Konfigurasi Global Toast
Anda dapat mengonfigurasi notifikasi Toast secara global, dimana dengan satu kali config akan berlaku untuk semua toast, terkecualikan toast yang di panggil dan di config ulang spesifik di pemanggilan toast seperti di atas pada properti `config`.

```js
notify.toast.config({
  timer: 1000,
  position: 'top-start'
});
```

:::info
Dengan menggunakan konfigurasi global seperti contoh di atas, setiap pemanggilan `toast` yang tidak dikonfigurasi ulang saat pemanggilan (misalnya: `notify.toast('success')`) akan menampilkan **title** "Berhasil Pak!", karena sudah diset di konfigurasi global untuk toast. Untuk penjelasan lebih lanjut mengenai konfigurasi global, cek lebih detail di [Customization](../customization).
:::
