---
sidebar_position: 2
sidebar_label: "Getting Started"
---

# Panduan Awal

Untuk mulai menggunakan **Datatables** di aplikasi Anda, ikuti langkah-langkah sederhana berikut:

### Inisialisasi

Pastikan Anda sudah mengintegrasikan **Iampact** ke dalam proyek Anda. Jika belum, Anda bisa memulai dengan mengunduh atau menginstal Iampact.

```js
const { datatables } = iampact;
```

### Contoh Penggunaan

Datatables dirancang agar sangat mudah digunakan, dengan dua property `url` dan `columns` saja Anda sudah dapat menampilkan datatables dengan metode pengambil ajax yang pada code aslinya memerlukan penulisan yang cukup panjang.

```html
<div class="table-responsive">
    <table class="w-100 table" id="countriesTable"></table>
</div>
```

```js
const columns = [{
    data: 'DT_RowIndex',
    name: 'DT_RowIndex',
    title: 'No',
    orderable: false,
    searchable: false,
    width: '50px',
}, {
    data: 'name',
    title: 'Name'
}];

datatables.create('#countriesTable', {
    url: 'http://localhost:8000/countries',
    columns: columns
});
```
