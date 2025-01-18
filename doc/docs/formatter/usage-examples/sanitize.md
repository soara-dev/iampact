---
sidebar_position: 6
sidebar_label: 'Sanitize'
---

# Sanitize

Fungsi `sanitize` digunakan untuk membersihkan teks dengan menghapus karakter-karakter khusus atau simbol yang tidak diinginkan, sehingga menghasilkan string yang lebih bersih dan aman untuk diproses atau ditampilkan.

### Implementasi Sanitize

Fungsi `sanitize` sangat berguna ketika Anda perlu membersihkan teks yang mengandung karakter-karakter yang tidak diinginkan, seperti simbol, tanda baca, atau karakter yang bisa menyebabkan masalah dalam pemrosesan atau tampilan teks.

```js
const { sanitize } = iampact.formatter;
```

```js
sanitize("Hello#% @iampact 123"); // result: Hello iampact 123
```

Pada contoh di atas, fungsi `sanitize` akan menghapus karakter-karakter khusus seperti `#% @` dan menghasilkan string yang bersih yaitu **"Hello iampact 123"**. Fungsi ini sangat berguna untuk membersihkan input pengguna atau teks yang tidak terformat dengan benar, memastikan teks yang aman dan bersih sebelum diproses lebih lanjut.
