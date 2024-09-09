import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$1 } from './text-base.js';

const subtextCss = ":host{display:block;--color:var(--color-primary)}:host true-text-base{--line-height:20px;--text-color:var(--color)}";

const Subtext = /*@__PURE__*/ proxyCustomElement(class Subtext extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.weight = 'regular';
    this.color = undefined;
    this.maxLines = undefined;
  }
  render() {
    return (h("true-text-base", { size: "s", weight: this.weight, maxLines: this.maxLines, color: this.color }, h("slot", null)));
  }
  static get style() { return subtextCss; }
}, [1, "true-subtext", {
    "weight": [513],
    "color": [513],
    "maxLines": [513, "max-lines"]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["true-subtext", "true-text-base"];
  components.forEach(tagName => { switch (tagName) {
    case "true-subtext":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Subtext);
      }
      break;
    case "true-text-base":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { Subtext as S, defineCustomElement as d };

//# sourceMappingURL=subtext.js.map