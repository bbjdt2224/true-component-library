import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './text-base.js';

const headerCss = ":host{display:block;--color:var(--color-primary)}:host true-text-base{--line-height:initial;--text-color:var(--color)}:host([size=h1]) true-text-base{--line-height:52px}:host([size=h3]) true-text-base{--line-height:32px}";

const Text = /*@__PURE__*/ proxyCustomElement(class Text extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.sizeMap = {
      h1: 'xxxl',
      h2: 'xxl',
      h3: 'xl',
      h4: 'l',
    };
    this.size = 'h1';
    this.weight = 'medium';
    this.color = undefined;
    this.maxLines = undefined;
  }
  render() {
    return (h("true-text-base", { size: this.sizeMap[this.size], weight: this.weight, maxLines: this.maxLines, color: this.color }, h("slot", null)));
  }
  static get style() { return headerCss; }
}, [1, "true-header", {
    "size": [513],
    "weight": [513],
    "color": [513],
    "maxLines": [513, "max-lines"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["true-header", "true-text-base"];
  components.forEach(tagName => { switch (tagName) {
    case "true-header":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Text);
      }
      break;
    case "true-text-base":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const TrueHeader = Text;
const defineCustomElement = defineCustomElement$1;

export { TrueHeader, defineCustomElement };

//# sourceMappingURL=true-header.js.map