---
sidebar_position: 4
sidebar_label: "Customization"
---

# Kustomisasi

### Global Config

Global Config adalah konfigurasi umum yang berlaku untuk semua metode `swal`, `toast`, dan `confirm`. Salah satu properti yang dapat diatur adalah `width`.

```js
notify.config({ width: 800 });
```

:::info
Konfigurasi ini akan membuat semua notifikasi (`swal`, `toast`, dan `confirm`) memiliki lebar `800px`.
:::

### Spesifik Global Config
Spesifik Global Config memiliki prioritas lebih tinggi dibandingkan Global Config. Jika width diatur menjadi `800px` pada Global Config, namun diatur menjadi `700px` pada Spesifik Global Config, maka aturan Spesifik Global Config akan berlaku, yaitu `700px`.

```js
notify.toast.config({ width: 500 });
```

:::info
Konfigurasi ini akan membuat toast memiliki lebar `500px`, sedangkan swal dan confirm tetap mengikuti Global Config dengan lebar `800px`.
:::

### Lokal Config
Lokal Config adalah konfigurasi yang diterapkan langsung saat notify dipanggil. Konfigurasi ini memiliki prioritas tertinggi. Misalnya, pada Spesifik Global Config, lebar toast diatur menjadi `500px`. Namun, jika Lokal Config diatur menjadi `700px`, maka khusus untuk toast tersebut, lebar akan berubah menjadi `700px`.

```js
notify.toast({
    config: { width: 700 }
}, "info");
```

:::info
Konfigurasi ini akan membuat toast memiliki lebar `700px`, sedangkan toast lainnya yang dieksekusi tanpa Lokal Config akan tetap mengikuti Spesifik Global Config, yaitu `500px`.
:::
