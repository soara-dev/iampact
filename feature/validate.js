export default function validate(res) {
  const errors = res.errors || [];

  const allValidate = $("[validate]");
  allValidate.removeClass("is-invalid");
  allValidate.next(".invalid-feedback").remove();

  $.each(errors, function (index, error) {
    const element = $(`[validate="${index}"]`);
    element.addClass("is-invalid");
    element.after(`<div class="invalid-feedback">${error}</div>`);
  });
}
