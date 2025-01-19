---
sidebar_position: 1
sidebar_label: 'Search'
---

# Search

Properti `search` memungkinkan Anda untuk menambahkan fitur pencarian khusus ke **tables** dengan cara yang sederhana. Anda hanya perlu menyebutkan elemen HTML (seperti input field) yang akan digunakan untuk pencarian, tanpa perlu menulis logika event listener secara manual.

### Implementasi Search

Untuk mengaktifkan fitur pencarian kustom pada **tables**, cukup gunakan properti `search` dengan memberikan selector elemen input yang akan digunakan untuk pencarian.

```html
<input type="text" id="search" class="form-control" placeholder="Search data">
```

```js {4}
tables.create('#countriesTable', {
    url: 'http://localhost:8000/countries',
    columns: columns,
    search: '#search'
});
```
