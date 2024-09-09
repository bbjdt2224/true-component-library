import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { t as trySubmitForm } from './button-common.js';
import { d as defineCustomElement$5 } from './button.js';
import { d as defineCustomElement$4 } from './icon.js';
import { d as defineCustomElement$3 } from './loading-spinner.js';
import { d as defineCustomElement$2 } from './text-base.js';

const largeButtonCss = ":host{display:inline-flex;--button-transition:100ms ease-in-out;--icon-bubble-size:40px;--side-padding:31px;--top-bottom-padding:0;--icon-color:var(--color-neutral-100)}true-button{--height:60px;--font-size:16px;--padding:var(--top-bottom-padding)\n      calc(var(--side-padding) + var(--icon-bubble-size))\n      var(--top-bottom-padding)\n      var(--side-padding);--border-radius:30px;--font-weight:bold;--min-width:calc(100% - var(--icon-bubble-size));width:100%}.icon-bubble{width:var(--icon-bubble-size);height:var(--icon-bubble-size);display:flex;align-items:center;justify-content:center;position:absolute;right:10px;top:10px;background-color:var(--color-custom-brand-accent-shade);--width:18px;transition:background-color var(--button-transition);border-radius:999rem}.icon-bubble true-icon{color:var(--icon-color)}:host([type=secondary]){--icon-color:var(--color-secondary)}:host([type=secondary]) true-button{--color:var(--color-secondary);--color-hover:var(--color-primary);--color-disabled:var(--color-tertiary);--bg-color:var(--bg-color-secondary);--bg-color-hover:var(--bg-hover-secondary);--bg-color-disabled:var(--bg-color-primary);--border-width:0px;--border-color:transparent;--border-color-hover:transparent;--border-color-disabled:transparent}:host([type=secondary]) .icon-bubble{background-color:var(--bg-hover-secondary)}:host([disabled]){--icon-color:var(--color-tertiary)}:host([disabled]) .icon-bubble{background-color:var(--bg-color-tertiary)}:host(:not([text-align=left])){width:100%}:host(:not([text-align=left])) true-button{--padding:var(--top-bottom-padding)\n      calc(var(--side-padding) + var(--icon-bubble-size))}";

const LargeButton = /*@__PURE__*/ proxyCustomElement(class LargeButton extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
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
  get element() { return this; }
  static get style() { return largeButtonCss; }
}, [1, "true-large-button", {
    "icon": [1],
    "type": [513],
    "submit": [4],
    "disabled": [516],
    "busy": [4],
    "textAlign": [513, "text-align"]
  }, [[0, "click", "hostClick"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["true-large-button", "true-button", "true-icon", "true-loading-spinner", "true-text-base"];
  components.forEach(tagName => { switch (tagName) {
    case "true-large-button":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, LargeButton);
      }
      break;
    case "true-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "true-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "true-loading-spinner":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "true-text-base":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const TrueLargeButton = LargeButton;
const defineCustomElement = defineCustomElement$1;

export { TrueLargeButton, defineCustomElement };

//# sourceMappingURL=true-large-button.js.map