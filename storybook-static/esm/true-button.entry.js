import { r as registerInstance, h, H as Host, g as getElement } from './index-d781eb2f.js';
import { t as trySubmitForm, r as removeButtonFocus } from './button-common-6d6d30b6.js';

const buttonCss = ":host{--height:32px;--font-size:14px;--font-weight:500;--padding:0 20px;--border-radius:16px;--min-width:max-content;--button-transition:100ms ease-in-out;--text-align:center;--border-width:0px;--color:var(--color-neutral-100);--bg-color:var(--color-custom-brand-accent);--border-color:transparent;--color-hover:var(--color-custom-brand-accent-contrast);--bg-color-hover:var(--color-custom-brand-accent-shade);--border-color-hover:transparent;--color-disabled:var(--color-tertiary);--bg-color-disabled:var(--bg-color-primary);--border-color-disabled:transparent;display:inline-block;position:relative}:host .overlay{position:absolute;top:0;bottom:0;left:0;right:0;background-color:rgba(0, 0, 0, 0.15);border-radius:var(--border-radius);z-index:2;cursor:pointer}:host button{cursor:pointer;appearance:none;border:0;padding:0;background-color:transparent;font-family:var(--app-font-family);width:100%;min-width:var(--min-width);height:100%;font-size:var(--font-size);font-weight:var(--font-weight);height:var(--height);background-color:var(--bg-color);border:var(--border-width) solid var(--border-color);padding:var(--padding);border-radius:var(--border-radius);position:relative;text-align:var(--text-align);transition:background-color var(--button-transition), border var(--button-transition), color var(--button-transition)}:host button[disabled]{cursor:not-allowed}:host button:focus{outline:0}:host button::-moz-focus-inner{border:0}:host button:focus:not([disabled]):not(:active){box-shadow:0 0 0 2px var(--color-true-primary-blue)}:host button true-text-base{--text-color:var(--color)}:host([type=secondary]){--border-width:2px;--color:var(--color-secondary);--bg-color:transparent;--border-color:var(--bg-color-tertiary);--color-hover:var(--color-primary);--bg-color-hover:transparent;--border-color-hover:var(--bg-hover-tertiary);--color-disabled:var(--color-tertiary);--bg-color-disabled:transparent;--border-color-disabled:var(--bg-color-tertiary)}:host([type=danger]){--color:var(--color-neutral-100);--bg-color:var(--color-true-primary-red);--border-color:var(--color-true-primary-red);--color-hover:var(--color-true-primary-red-contrast);--bg-color-hover:var(--color-true-primary-red-shade);--border-color-hover:transparent;--color-disabled:var(--color-tertiary);--bg-color-disabled:var(--bg-color-primary);--border-color-disabled:transparent}:host(.activated) button:not([disabled]){--color:var(--color-hover);--bg-color:var(--bg-color-hover);--border-color:var(--border-color-hover)}@media (any-hover: hover){:host(:hover) button:not([disabled]){--color:var(--color-hover);--bg-color:var(--bg-color-hover);--border-color:var(--border-color-hover)}}:host([disabled]) button{--color:var(--color-disabled);--bg-color:var(--bg-color-disabled);--border-color:var(--border-color-disabled)}";

const Button = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.type = 'primary';
    this.textSize = 's';
    this.submit = false;
    this.disabled = false;
    this.textAlign = 'center';
    this.hasOverlay = undefined;
  }
  hostClick(event) {
    if (this.disabled) {
      event.preventDefault();
      return;
    }
    trySubmitForm(this.submit, this.element);
  }
  render() {
    return (h(Host, { style: {
        '--text-align': this.textAlign
      }, "aria-disabled": this.disabled ? 'true' : null }, this.hasOverlay ? h("div", { class: 'overlay' }) : null, h("button", { disabled: this.disabled, onClick: e => removeButtonFocus(e), type: this.submit === true ? 'submit' : 'button' }, h("true-text-base", { size: this.textSize, weight: 'medium' }, h("slot", null)), h("slot", { name: 'end' }))));
  }
  get element() { return getElement(this); }
};
Button.style = buttonCss;

export { Button as true_button };

//# sourceMappingURL=true-button.entry.js.map