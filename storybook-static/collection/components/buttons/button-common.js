export function trySubmitForm(isSubmit, element) {
  if (isSubmit === true) {
    const formEl = element.closest('form');
    if (formEl) {
      formEl.dispatchEvent(new CustomEvent('submit', { cancelable: true }));
    }
  }
}
export function removeButtonFocus(event) {
  try {
    (event.target.closest('button')).blur();
  }
  catch (_a) {
    // error
  }
}
//# sourceMappingURL=button-common.js.map
