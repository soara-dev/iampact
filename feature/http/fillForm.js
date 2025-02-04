export function fillForm(data, param = {}) {
    const { except, callback } = param;
    const keys = Object.keys(data).filter(key => !except?.includes(key));
    keys.forEach(key => {
        $(`[name=${key}]`).val(data[key]).trigger('change');
    });
    setTimeout(() => {
        if (callback) callback();
    }, 300);
}