'use strict';

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

exports.removeButtonFocus = removeButtonFocus;
exports.trySubmitForm = trySubmitForm;

//# sourceMappingURL=button-common-8f68da32.js.map