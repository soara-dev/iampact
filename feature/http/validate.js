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
      const element = $(`[validate="${split[0]}.*"]`);
      const index = split[1];
      element.eq(index).addClass("is-invalid");
      element.eq(index).after(`<div class="invalid-feedback">${error}</div>`);
    }
  });
}
