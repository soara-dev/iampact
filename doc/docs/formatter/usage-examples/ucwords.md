---
sidebar_position: 2
sidebar_label: 'ucWords'
---

# ucWords

Fungsi `ucWords` digunakan untuk mengubah huruf pertama dari setiap kata dalam sebuah string menjadi huruf kapital, sementara sisa karakter lainnya tetap dalam bentuk aslinya.

### Implementasi ucWords

Fungsi `ucWords` sangat berguna ketika Anda ingin memastikan bahwa setiap kata dalam sebuah kalimat atau judul dimulai dengan huruf kapital, seperti pada nama, judul artikel, atau kalimat penting lainnya.

```js
const { ucWords } = iampact.formatter;
```

```js
ucWords("hello iampact") // result: Hello Iampact
```

Pada contoh di atas, fungsi `ucWords` akan mengubah huruf pertama dari setiap kata dalam string **"hello iampact"** menjadi kapital, sehingga hasilnya menjadi **"Hello Iampact"**. Fungsi ini memastikan setiap kata dimulai dengan huruf kapital, yang sangat berguna untuk format teks seperti nama, judul, dan kalimat lainnya.
