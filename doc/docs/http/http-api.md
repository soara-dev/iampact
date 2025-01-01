---
sidebar_position: 4
---

# Http Api

Digunakan untuk membuat instance baru dari kelas `Http` dengan konfigurasi yang telah ditentukan.

<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Tipe</th>
      <th>Deskripsi</th>
      <th>Default</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><small><code>baseUrl</code></small></td>
      <td><small><code>string | null</code></small></td>
      <td><small>URL dasar yang akan digunakan untuk permintaan.</small></td>
      <td><small><code>null</code></small></td>
    </tr>
    <tr>
      <td><small><code>onBeforeSend</code></small></td>
      <td><small><code>function</code></small></td>
      <td><small>Callback yang dipanggil sebelum permintaan dikirim.</small></td>
      <td><small><code>() => {}</code></small></td>
    </tr>
    <tr>
      <td><small><code>onSuccess</code></small></td>
      <td><small><code>function</code></small></td>
      <td><small>Callback yang dipanggil ketika permintaan berhasil.</small></td>
      <td><small><code>() => {}</code></small></td>
    </tr>
    <tr>
      <td><small><code>onError</code></small></td>
      <td><small><code>function</code></small></td>
      <td><small>Callback yang dipanggil ketika permintaan gagal.</small></td>
      <td><small><code>() => {}</code></small></td>
    </tr>
    <tr>
      <td><small><code>onComplete</code></small></td>
      <td><small><code>function</code></small></td>
      <td><small>Callback yang dipanggil setelah permintaan selesai.</small></td>
      <td><small><code>() => {}</code></small></td>
    </tr>
    <tr>
      <td><small><code>data</code></small></td>
      <td><small><code>FormData | object</code></small></td>
      <td><small>Data yang akan dikirimkan dalam permintaan.</small></td>
      <td><small><code>`{}`</code></small></td>
    </tr>
    <tr>
      <td><small><code>method</code></small></td>
      <td><small><code>'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'</code></small></td>
      <td><small>Metode permintaan yang akan digunakan.</small></td>
      <td><small><code>'GET'</code></small></td>
    </tr>
  </tbody>
</table>
