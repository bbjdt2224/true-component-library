function trySubmitForm(isSubmit, element) {
  if (isSubmit === true) {
    const formEl = element.closest('form');
    if (formEl) {
      formEl.dispatchEvent(new CustomEvent('submit', { cancelable: true }));
    }
  }
}
function removeButtonFocus(event) {
  try {
    (event.target.closest('button')).blur();
  }
  catch (_a) {
    // error
  }
}

export { removeButtonFocus as r, trySubmitForm as t };

//# sourceMappingURL=button-common-6d6d30b6.js.map