export function fillForm(data, param = {}) {
    const { except } = param;
    const keys = Object.keys(data).filter(key => !except?.includes(key));
    keys.forEach(key => {
        $(`[name=${key}]`).val(data[key]).trigger('change');
    });
}