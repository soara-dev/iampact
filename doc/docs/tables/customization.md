---
sidebar_position: 4
sidebar_label: "Customization"
---

# Kustomisasi

### Format Config

Format Global adalah konfigurasi umum yang berlaku untuk masing-masing format ekspor, seperti `excel`, `csv`, `pdf`, dan lainnya. Anda dapat menyesuaikan berbagai pengaturan seperti **title**, **orientation** *untuk pdf*, **exportOptions**, dan **customize** untuk kustomisasi file ekspor sesuai kebutuhan.

```js
tables.create('#countriesTable', {
    url: actionURL,
    columns: columns,
    export: {
        el: '#export',
        title: 'Countries',
        except: [3],
        excel: {
            title: 'Custom Title Excel',
        },
        pdf: {
            orientation: 'landscape',
            exportOptions: {
                format: {
                    body: function(data, row, column, node) {
                        return data + "#";
                    },
                },
            },
        }
    }
});
```

:::info
Anda dapat mengatur configurasi format `excel`, `csv`, `pdf`, `copy`, dan `print`.
:::
