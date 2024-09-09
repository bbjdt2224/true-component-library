import { r as registerInstance, h, g as getElement } from './index-d781eb2f.js';
import { t as trySubmitForm } from './button-common-6d6d30b6.js';

const largeButtonCss = ":host{display:inline-flex;--button-transition:100ms ease-in-out;--icon-bubble-size:40px;--side-padding:31px;--top-bottom-padding:0;--icon-color:var(--color-neutral-100)}true-button{--height:60px;--font-size:16px;--padding:var(--top-bottom-padding)\n      calc(var(--side-padding) + var(--icon-bubble-size))\n      var(--top-bottom-padding)\n      var(--side-padding);--border-radius:30px;--font-weight:bold;--min-width:calc(100% - var(--icon-bubble-size));width:100%}.icon-bubble{width:var(--icon-bubble-size);height:var(--icon-bubble-size);display:flex;align-items:center;justify-content:center;position:absolute;right:10px;top:10px;background-color:var(--color-custom-brand-accent-shade);--width:18px;transition:background-color var(--button-transition);border-radius:999rem}.icon-bubble true-icon{color:var(--icon-color)}:host([type=secondary]){--icon-color:var(--color-secondary)}:host([type=secondary]) true-button{--color:var(--color-secondary);--color-hover:var(--color-primary);--color-disabled:var(--color-tertiary);--bg-color:var(--bg-color-secondary);--bg-color-hover:var(--bg-hover-secondary);--bg-color-disabled:var(--bg-color-primary);--border-width:0px;--border-color:transparent;--border-color-hover:transparent;--border-color-disabled:transparent}:host([type=secondary]) .icon-bubble{background-color:var(--bg-hover-secondary)}:host([disabled]){--icon-color:var(--color-tertiary)}:host([disabled]) .icon-bubble{background-color:var(--bg-color-tertiary)}:host(:not([text-align=left])){width:100%}:host(:not([text-align=left])) true-button{--padding:var(--top-bottom-padding)\n      calc(var(--side-padding) + var(--icon-bubble-size))}";

const LargeButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.icon = undefined;
    this.type = 'primary';
    this.submit = false;
    this.disabled = false;
    this.busy = false;
    this.textAlign = 'center';
  }
  hostClick(event) {
    if (this.disabled) {
      event.preventDefault();
      return;
    }
    if (!this.busy) {
      trySubmitForm(this.submit, this.element);
    }
  }
  render() {
    return (h("true-button", { textSize: 'm', submit: this.submit, disabled: this.disabled, type: this.type, textAlign: this.textAlign }, h("slot", null), h("div", { class: 'icon-bubble', slot: 'end' }, this.busy ?
      h("true-loading-spinner", { size: 'l' }) :
      h("true-icon", { name: this.icon }))));
  }
  get element() { return getElement(this); }
};
LargeButton.style = largeButtonCss;

export { LargeButton as true_large_button };

//# sourceMappingURL=true-large-button.entry.js.map