---
sidebar_position: 4
---

# Http Api

Digunakan untuk membuat instance baru dari kelas `Http` dengan konfigurasi yang telah ditentukan.

| Parameter      | Tipe       | Deskripsi                                                                     | Default    |
| -------------- | ---------- | ----------------------------------------------------------------------------- | ---------- |
| `baseUrl`      | `string`   | URL dasar yang akan digunakan untuk permintaan.                               | `""`       |
| `onBeforeSend` | `function` | Callback yang dipanggil sebelum permintaan dikirim.                           | `() => {}` |
| `onSuccess`    | `function` | Callback yang dipanggil ketika permintaan berhasil.                           | `() => {}` |
| `onError`      | `function` | Callback yang dipanggil ketika permintaan gagal.                              | `() => {}` |
| `onComplete`   | `function` | Callback yang dipanggil setelah permintaan selesai.                           | `() => {}` |
| `data`         | `FormData` | Data yang akan dikirimkan dalam permintaan.                                   | `null`     |
| `method`       | `string`   | Metode permintaan yang akan digunakan. `GET`, `POST`, `PUT`, `PATCH`,`DELETE` | `"GET"`    |
