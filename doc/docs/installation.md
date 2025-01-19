---
sidebar_position: 2
sidebar_label: "Instalation"
---

# Instalasi

Untuk menggunakan Iampact, Anda perlu menyertakan beberapa dependensi berikut di dalam file HTML Anda. Berikut adalah langkah-langkahnya:

### Langkah Awal

1. **jQuery**: Diperlukan untuk sebagian besar fungsi.

    ```html
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    ```

2. **SweetAlert2**: Untuk menampilkan popup dan notifikasi pada module `Notify`.

    ```html
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    ```

3. **DataTables**: Untuk membuat tabel interaktif dan responsif pada module `Tables`.

    ```html
    <script src="https://cdn.datatables.net/1.11.5/js/jquery.dataTables.min.js"></script>
    <script src="https://cdn.datatables.net/1.11.5/js/dataTables.bootstrap5.min.js"></script>
    <script src="https://cdn.datatables.net/responsive/2.2.9/js/dataTables.responsive.min.js"></script>
    ```

4. **DataTables Export (Opsional)**: Untuk ekspor tabel ke format tertentu pada module `Tables`.

    ```html
    <script src="https://cdn.datatables.net/buttons/3.2.0/js/dataTables.buttons.js"></script>
    <script src="https://cdn.datatables.net/buttons/3.2.0/js/buttons.dataTables.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/pdfmake.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/vfs_fonts.js"></script>
    <script src="https://cdn.datatables.net/buttons/3.2.0/js/buttons.html5.min.js"></script>
    ```

5. **Iampact**: Sertakan library utama setelah dependensi lain.

    ```html
    <script src="https://iam-starterpack.iamevent.my.id/dist/main.js"></script>
    ```

### Contoh Minimum

Berikut adalah contoh HTML dasar untuk memulai dengan Iampact. Pada contoh ini, hanya tiga dependensi utama yang disertakan: **jQuery**, **SweetAlert2**, dan **Iampact**. Anda bisa menggunakan kode ini untuk memulai dengan cepat.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Iampact</title>
</head>
<body>
  <h1>Welcome to Iampact</h1>

  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
  <script src="https://iam-starterpack.iamevent.my.id/dist/main.js"></script>
</body>
</html>

```

:::info
Pada contoh di atas, kita menyertakan **jQuery** karena banyak fungsi Iampact yang bergantung padanya, **SweetAlert2** untuk notifikasi dan popup, dan **Iampact** itu sendiri untuk memanfaatkan seluruh fungsionalitas.

Apabila Anda akan menggunakan module **Tables**, seperti untuk menampilkan tabel interaktif, Anda perlu menambahkan **DataTables**. Jika Anda ingin menggunakan fitur **Export** untuk mengekspor data tabel ke format seperti `Excel` atau `PDF`, Anda juga harus menambahkan dependensi tambahan tersebut.
:::
