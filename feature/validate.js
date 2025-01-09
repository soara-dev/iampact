export function clearValidate() {
  const allValidate = $("[validate]");
  allValidate.removeClass("is-invalid");
  allValidate.next(".invalid-feedback").remove();
}

export function validate(res) {
  clearValidate();
  const errors = res.errors || [];
  $.each(errors, function (index, error) {
    const element = $(`[validate="${index}"]`);
    element.addClass("is-invalid");
    element.after(`<div class="invalid-feedback">${error}</div>`);
  });
}
