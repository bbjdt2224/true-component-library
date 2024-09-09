import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$5 } from './icon.js';
import { d as defineCustomElement$4 } from './icon-button.js';
import { d as defineCustomElement$3 } from './subtext.js';
import { d as defineCustomElement$2 } from './text-base.js';

const largeIconButtonCss = ":host{--space-around:4px;--text-spacing:8px;display:flex;flex-direction:column;align-items:center;text-align:center;width:calc(var(--button-size) + var(--space-around) * 2);overflow:hidden;--button-text-color:var(--color-primary)}:host true-icon-button{padding:var(--space-around);padding-bottom:calc(var(--text-spacing) - var(--space-around))}:host true-icon-button{--color-toggle:var(--color-accent);--bg-color-toggle:var(--bg-color-accent)}:host true-text-base{color:var(--button-text-color)}:host([type=primary]){--button-text-color:var(--color-accent)}:host([type=primary]) true-icon-button{--icon-color:var(--color-accent);--bg-color:var(--bg-color-accent);--color-hover:var(--color-accent);--bg-color-hover:var(--bg-hover-accent);--color-disabled:var(--color-tertiary);--bg-color-disabled:var(--bg-color-tertiary);--color-toggle:var(--color-accent);--bg-color-toggle:var(--bg-color-accent)}:host([disabled]){--button-text-color:var(--color-tertiary)}";

const LargeIconButton = /*@__PURE__*/ proxyCustomElement(class LargeIconButton extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.icon = undefined;
    this.type = 'secondary';
    this.disabled = false;
  }
  render() {
    return (h(Host, { "aria-disabled": this.disabled ? 'true' : null }, h("true-icon-button", { size: 'xl', type: this.type, icon: this.icon, disabled: this.disabled }), h("true-text-base", { weight: 'medium', size: 's' }, h("slot", null))));
  }
  static get style() { return largeIconButtonCss; }
}, [1, "true-large-icon-button", {
    "icon": [1025],
    "type": [513],
    "disabled": [516]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["true-large-icon-button", "true-icon", "true-icon-button", "true-subtext", "true-text-base"];
  components.forEach(tagName => { switch (tagName) {
    case "true-large-icon-button":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, LargeIconButton);
      }
      break;
    case "true-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "true-icon-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "true-subtext":
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

const TrueLargeIconButton = LargeIconButton;
const defineCustomElement = defineCustomElement$1;

export { TrueLargeIconButton, defineCustomElement };

//# sourceMappingURL=true-large-icon-button.js.map