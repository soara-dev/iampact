---
sidebar_position: 5
sidebar_label: "API Reference"
---

# Referensi API

Dokumentasi / Referensi API untuk modul Notify yang telah ditentukan.

<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Tipe</th>
      <th>Deskripsi</th>
      <th>Argumen</th>
      <th>Default</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><small>`swal`</small></td>
      <td><small>`function`</small></td>
      <td><small>Digunakan untuk memanggil notifikasi swal.</small></td>
      <td><small>`params`, `status`</small></td>
      <td><small>`-`</small></td>
    </tr>
    <tr>
      <td><small>`toast`</small></td>
      <td><small>`function`</small></td>
      <td><small>Digunakan untuk memanggil notifikasi toast.</small></td>
      <td><small>`params`, `status`</small></td>
      <td><small>`-`</small></td>
    </tr>
    <tr>
      <td><small>`confirm`</small></td>
      <td><small>`function`</small></td>
      <td><small>Digunakan untuk memanggil dialog confirm.</small></td>
      <td><small>`params`</small></td>
      <td><small>`-`</small></td>
    </tr>
    <tr>
      <td><small>`config`</small></td>
      <td><small>`function`</small></td>
      <td><small>Digunakan untuk melakukan global config.</small></td>
      <td><small>`params`</small></td>
      <td><small>`{...}`</small></td>
    </tr>
    <tr>
      <td><small>`toast.config`</small></td>
      <td><small>`function`</small></td>
      <td><small>Digunakan untuk melakukan spesifik global config toast.</small></td>
      <td><small>`params`</small></td>
      <td><small>`{...}`</small></td>
    </tr>
    <tr>
      <td><small>`swal.config`</small></td>
      <td><small>`function`</small></td>
      <td><small>Digunakan untuk melakukan spesifik global config swal.</small></td>
      <td><small>`params`</small></td>
      <td><small>`{}`</small></td>
    </tr>
    <tr>
      <td><small>`confirm.config`</small></td>
      <td><small>`function`</small></td>
      <td><small>Digunakan untuk melakukan spesifik global config confirm.</small></td>
      <td><small>`params`</small></td>
      <td><small>`{...}`</small></td>
    </tr>
  </tbody>
</table>

:::warning
Default global config dan spesifik global config bisa dilihat dibawah.
:::

### Default Global Config

```js
title: {
    error: "",
    success: "",
    warning: "",
},
message: {
    error: "Oops! Something went wrong",
    success: "Action performed successfully",
    warning: "This action needs attention",
}
```

### Default Spesifik Global Config Toast

```js
toast: true,
timer: 3000,
position: "top-end",
showConfirmButton: false,
timerProgressBar: true,
didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
}
```

### Default Spesifik Global Config Swal

```js
{}
```

### Default Spesifik Global Config Confirm

```js
title: "Are you sure?",
text: "You won't be able to revert this!",
icon: "warning",
showCancelButton: true,
confirmButtonColor: "#3085d6",
cancelButtonColor: "#d33",
confirmButtonText: "Yes, delete it!",
```
