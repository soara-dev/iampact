---
sidebar_position: 5
sidebar_label: 'Truncate'
---

# Truncate

Fungsi `truncate` digunakan untuk memotong sebuah string menjadi panjang tertentu dan menambahkan tanda elipsis (`...`) jika string tersebut lebih panjang dari batas yang ditentukan.

### Implementasi Truncate

Fungsi `truncate` sangat berguna ketika Anda ingin membatasi panjang teks yang ditampilkan, misalnya untuk menampilkan cuplikan teks atau ringkasan yang tidak terlalu panjang, dengan tetap memberi tahu pengguna bahwa ada lebih banyak konten.

```js
const { truncate } = iampact.formatter;
```

```js
truncate("Hello iampact akan membantu proses development anda.", 13); // result: Hello iampact...
```

Pada contoh di atas, fungsi `truncate` akan memotong string **"Hello iampact akan membantu proses development anda."** menjadi **"Hello iampact..."**, dengan memotong teks pada posisi 13 karakter dan menambahkan tanda elipsis (`...`). Fungsi ini sangat berguna untuk memformat teks dalam UI agar tidak terlalu panjang dan tetap terlihat rapi.
