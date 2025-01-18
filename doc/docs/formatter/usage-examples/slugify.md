---
sidebar_position: 3
sidebar_label: 'Slugify'
---

# Slugify

Fungsi `slugify` digunakan untuk mengubah sebuah string menjadi format slug yang ramah URL, biasanya dengan mengonversi spasi menjadi tanda hubung (`-`), menghapus karakter khusus, dan mengubah semua huruf menjadi huruf kecil.

### Implementasi Slugify

Fungsi `slugify` sangat berguna ketika Anda ingin mengubah teks menjadi format URL yang bersih dan dapat dibaca, misalnya untuk judul artikel atau nama kategori.

```js
const { slugify } = iampact.formatter;
```

```js
slugify("hello iampact") // result: hello-iampact
```

Pada contoh di atas, fungsi `slugify` akan mengubah string **"hello iampact"** menjadi format slug yang aman untuk URL, dengan mengubah spasi menjadi tanda hubung (`-`) dan mengubah semua huruf menjadi huruf kecil, sehingga hasilnya menjadi **"hello-iampact"**. Fungsi ini sangat berguna untuk membuat URL atau identifier yang mudah dibaca dan digunakan dalam sistem berbasis web.
