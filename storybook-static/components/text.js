import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$1 } from './text-base.js';

const textCss = ":host{display:block;--color:var(--color-primary);--text-line-height:26px}:host true-text-base{--line-height:var(--text-line-height);--text-color:var(--color)}";

const Text = /*@__PURE__*/ proxyCustomElement(class Text extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.weight = 'regular';
    this.color = undefined;
    this.maxLines = undefined;
  }
  render() {
    return (h("true-text-base", { size: "m", weight: this.weight, maxLines: this.maxLines, color: this.color }, h("slot", null)));
  }
  static get style() { return textCss; }
}, [1, "true-text", {
    "weight": [513],
    "color": [513],
    "maxLines": [513, "max-lines"]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["true-text", "true-text-base"];
  components.forEach(tagName => { switch (tagName) {
    case "true-text":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Text);
      }
      break;
    case "true-text-base":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { Text as T, defineCustomElement as d };

//# sourceMappingURL=text.js.map