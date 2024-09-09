import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './text-base.js';

const labelCss = ":host{display:block;--color:var(--color-tertiary)}:host true-text-base{--text-color:var(--color);--text-transform:uppercase !important;--letter-spacing:1px}";

const Label = /*@__PURE__*/ proxyCustomElement(class Label extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.color = undefined;
    this.maxLines = undefined;
  }
  render() {
    return (h("true-text-base", { size: "xs", weight: 'medium', maxLines: this.maxLines, color: this.color }, h("slot", null)));
  }
  static get style() { return labelCss; }
}, [1, "true-label", {
    "color": [513],
    "maxLines": [513, "max-lines"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["true-label", "true-text-base"];
  components.forEach(tagName => { switch (tagName) {
    case "true-label":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Label);
      }
      break;
    case "true-text-base":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const TrueLabel = Label;
const defineCustomElement = defineCustomElement$1;

export { TrueLabel, defineCustomElement };

//# sourceMappingURL=true-label.js.map