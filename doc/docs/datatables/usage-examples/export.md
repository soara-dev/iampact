---
sidebar_position: 3
sidebar_label: 'Export'
---

# Export

Fitur `export` memungkinkan Anda untuk mengekspor data dari datatables ke berbagai format, seperti `pdf`, `excel`, `csv`, serta `copy` dan `print`. Anda dapat menyesuaikan kolom yang ingin diekspor dan mengonfigurasi berbagai opsi, seperti judul, orientasi PDF, dan pengaturan lainnya pada masing-masing format.


### Inisialisasi
Pastikan sebelum menggunakan fitur `export`, Anda telah menginisialisasi datatables export terlebih dahulu.

```html
<script src="https://cdn.datatables.net/buttons/3.2.0/js/dataTables.buttons.js"></script>
<script src="https://cdn.datatables.net/buttons/3.2.0/js/buttons.dataTables.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/pdfmake.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/vfs_fonts.js"></script>
<script src="https://cdn.datatables.net/buttons/3.2.0/js/buttons.html5.min.js"></script>
```

### Implementasi Export

Untuk menambahkan fitur ekspor pada datatables, Anda dapat menggunakan properti `export` dengan menentukan elemen tombol, nama file (title) yang akan digunakan dalam ekspor, serta kolom yang akan diekspor.

Pastikan pada elemen tombol export yang dibuat terdapat child dengan atribut `data-export` yang memiliki value format yang diinginkan, seperti `excel`, `pdf`, atau `csv`.

```html
<div id="export" class="dropdown">
    <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown"
        aria-haspopup="true" aria-expanded="false">
        Export
    </button>
    <div class="dropdown-menu">
        <a class="dropdown-item" href="#" data-export="excel">Excel</a>
        <a class="dropdown-item" href="#" data-export="pdf">PDF</a>
        <a class="dropdown-item" href="#" data-export="csv">CSV</a>
    </div>
</div>
```

```js {4}
datatables.create('#countriesTable', {
    url: actionURL,
    columns: columns,
    export: { el: '#export', title: 'Countries', columns: [0, 1] }
});
```

### Export Semua Kolom

Pada beberapa kasus, Anda mungkin ingin mengekspor semua kolom yang ada di dalam datatables tanpa harus menyebutkan kolom satu per satu. Untuk itu, Anda dapat meninggalkan properti `columns` pada konfigurasi ekspor. Ini memungkinkan Anda untuk mengekspor seluruh data dalam tabel dengan cara yang lebih sederhana dan efisien.

```js {4}
datatables.create('#countriesTable', {
    url: actionURL,
    columns: columns,
    export: { el: '#export', title: 'Countries' }
});
```

### Export Kecuali Kolom Tertentu

Pada beberapa kasus, Anda mungkin ingin mengekspor semua kolom dari datatables kecuali kolom-kolom tertentu. Anda dapat menggunakan properti `except` untuk mengecualikan kolom dengan indeks yang ditentukan.

```js {4}
datatables.create('#countriesTable', {
    url: actionURL,
    columns: columns,
    export: { el: '#export', title: 'Countries', except: [3] }
});
```
