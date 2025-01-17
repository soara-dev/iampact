---
sidebar_position: 2
sidebar_label: 'Filters'
---

# Filters

Properti `filters` memungkinkan Anda untuk menambahkan filter kustom pada datatables. Filter ini memudahkan Anda untuk menghubungkan elemen HTML dengan datatables untuk menyaring data sesuai dengan pilihan pengguna, tanpa perlu menulis logika tambahan secara manual.


### Implementasi Filters

Untuk menambahkan filter pada datatables, Anda cukup menggunakan properti `filters` dengan memberikan selector elemen input yang digunakan untuk menyaring data. Anda dapat menggunakan berbagai jenis elemen HTML sesuai kebutuhan.

```html
<select id="status" class="form-control">
    <option value="" selected>Pilih Semua</option>
    <option value="aktif">Aktif</option>
    <option value="tidak-aktif">Tidak Aktif</option>
</select>
```

```js {4}
datatables.create('#countriesTable', {
    url: 'http://localhost:8000/countries',
    columns: columns,
    filters: [{ name: 'status', el: '#status' }]
});
```
