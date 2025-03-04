export function clearValidate() {
  const allValidate = $("[validate]");
  allValidate.removeClass("is-invalid");
  allValidate.next(".invalid-feedback").remove();
}

export function validate(res) {
  clearValidate();
  const errors = res.errors || [];
  $.each(errors, function (index, error) {
    const split = index.split(".");
    if (split.length == 1) {
      const element = $(`[validate="${index}"]`);
      element.addClass("is-invalid");
      element.after(`<div class="invalid-feedback">${error}</div>`);
    } else {
      const baseSelector = split.slice(0, -1).join(".");
      const index = split[split.length - 1];
      const element = $(`[validate="${baseSelector}.*"]`);
      element.eq(index).addClass("is-invalid");
      element.eq(index).after(`<div class="invalid-feedback">${error}</div>`);
    }
  });
}
