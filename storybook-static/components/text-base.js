import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const textBaseCss = ":host{display:block;--max-lines:initial;--line-height:initial;--font-weight:400;--font-size:var(--m-font-size);--font-family:var(--app-font-family);--letter-spacing:initial;--text-color:var(--color-primary);--text-transform:none;align-items:center;color:var(--text-color, currentColor);font-variant-numeric:var(--font-variant-numeric)}:host span{font-size:var(--font-size);font-weight:var(--font-weight);font-family:var(--app-font-family);letter-spacing:var(--letter-spacing);line-height:var(--line-height);text-transform:var(--text-transform);align-items:center;display:block;overflow:hidden;text-overflow:ellipsis;-webkit-font-smoothing:antialiased}:host(.loaded){transition:color 0.2s ease-in-out}:host{--xxxl-font-size:40px}:host([size=xxxl]){--font-size:var(--xxxl-font-size) !important}:host{--xxl-font-size:32px}:host([size=xxl]){--font-size:var(--xxl-font-size) !important}:host{--xl-font-size:24px}:host([size=xl]){--font-size:var(--xl-font-size) !important}:host{--l-font-size:20px}:host([size=l]){--font-size:var(--l-font-size) !important}:host{--m-font-size:16px}:host([size=m]){--font-size:var(--m-font-size) !important}:host{--s-font-size:14px}:host([size=s]){--font-size:var(--s-font-size) !important}:host{--xs-font-size:12px}:host([size=xs]){--font-size:var(--xs-font-size) !important}:host{--xxs-font-size:10px}:host([size=xxs]){--font-size:var(--xxs-font-size) !important}:host([weight=extra-bold]){--font-weight:800 !important}:host([weight=bold]){--font-weight:700 !important}:host([weight=medium]){--font-weight:500 !important}:host([weight=regular]){--font-weight:400 !important}:host([max-lines]) span{overflow:hidden;text-overflow:ellipsis;word-break:break-word;visibility:visible;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:var(--max-lines)}";

const TextBase = /*@__PURE__*/ proxyCustomElement(class TextBase extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.size = 'm';
    this.color = undefined;
    this.weight = undefined;
    this.maxLines = undefined;
    this.loaded = undefined;
  }
  componentDidLoad() {
    // Set loaded to true so colors are correct
    requestAnimationFrame(() => {
      this.loaded = true;
    });
  }
  render() {
    const style = {};
    if (this.maxLines != null) {
      style['--max-lines'] = this.maxLines;
    }
    if (this.color) {
      style['--text-color'] = `var(--color-${this.color})`;
    }
    return (h(Host, { style: style, class: this.loaded ? 'loaded' : '' }, h("span", null, h("slot", null))));
  }
  static get style() { return textBaseCss; }
}, [1, "true-text-base", {
    "size": [513],
    "color": [513],
    "weight": [513],
    "maxLines": [513, "max-lines"],
    "loaded": [32]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["true-text-base"];
  components.forEach(tagName => { switch (tagName) {
    case "true-text-base":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, TextBase);
      }
      break;
  } });
}

export { TextBase as T, defineCustomElement as d };

//# sourceMappingURL=text-base.js.map