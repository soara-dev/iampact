---
sidebar_position: 1
sidebar_label: "Overview"
---

# Ringkasan

### Apa itu Notify?

**Notify** adalah salah satu modul dari Iampact yang dirancang untuk menangani notifikasi atau pemberitahuan di aplikasi Anda. Dengan `Notify`, Anda dapat menampilkan pesan kepada pengguna dalam berbagai situasi, seperti saat proses berhasil, terjadi kesalahan, atau untuk meminta konfirmasi tindakan.

Komponen ini menggunakan library Swal **(SweetAlert)** sebagai basisnya, tetapi telah disederhanakan agar lebih mudah digunakan dan dapat disesuaikan dengan kebutuhan Anda. Tidak perlu lagi menulis kode notifikasi secara manual—cukup gunakan metode yang telah disediakan oleh `Notify`.

### Keunggulan Notify

- **Sederhana**: API yang mudah dipahami, memungkinkan Anda menampilkan notifikasi hanya dengan satu baris kode.
- **Seragam**: Semua notifikasi memiliki gaya dan tampilan yang konsisten di seluruh aplikasi.
- **Kustomisasi Mudah**: Anda dapat menyesuaikan pesan, ikon, tombol, dan durasi notifikasi dengan mudah.
- **Integrasi yang Baik**: Dapat digunakan bersama modul lain seperti Http, sehingga notifikasi otomatis muncul berdasarkan hasil AJAX.

### Kapan Menggunakan Notify?

Notify sangat berguna dalam situasi berikut:

- Menampilkan pesan sukses setelah data berhasil diproses.
- Memberi tahu pengguna jika terjadi kesalahan (seperti gagal validasi).
- Meminta konfirmasi dari pengguna sebelum tindakan penting, seperti menghapus data.
