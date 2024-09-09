export function trySubmitForm(isSubmit: boolean, element: Element) {
    if (isSubmit === true) {
        const formEl = element.closest('form');
        if (formEl) {
            formEl.dispatchEvent(new CustomEvent('submit', { cancelable: true }))
        }
    }
}

export function removeButtonFocus(event: Event) {
    try {
        (((event.target as Element).closest('button')) as HTMLButtonElement).blur();
    }
    catch {
        // error
    }
}