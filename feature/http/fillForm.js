export function fillForm(data, param = {}) {
    const { expect } = param;
    const keys = Object.keys(data).filter(key => !expect?.includes(key));
    keys.forEach(key => {
        $(`[name=${key}]`).val(data[key]).trigger('change');
    });
}