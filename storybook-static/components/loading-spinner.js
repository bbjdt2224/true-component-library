import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const loadingSpinnerCss = ":host{--stroke-color:currentColor;--path-color:none;--path-opacity:1;--background-color:none;--background-shadow:none;position:relative;display:flex;justify-content:center;align-items:center}:host::before{content:\"\";position:absolute;background-color:var(--background-color);top:0;left:0;right:0;bottom:0;border-radius:50%;opacity:var(--background-opacity);box-shadow:var(--background-shadow)}:host svg{transform:rotate(-90deg);padding:5px;animation:spin 3s infinite linear}:host .background{stroke:var(--path-color)}:host .loader{stroke:var(--stroke-color);animation:dash 2s infinite}@keyframes spin{from{transform:rotate(-90deg)}to{transform:rotate(269deg)}}@keyframes dash{from{stroke-dashoffset:var(--positive-circumference)}to{stroke-dashoffset:var(--negative-circumference)}}";

const LoadingSpinner = /*@__PURE__*/ proxyCustomElement(class LoadingSpinner extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    // Sizes are not yet defined. Matching current for the component
    this.sizeMap = {
      s: 14,
      m: 16,
      l: 18,
      xl: 50
    };
    this.strokeSizeMap = {
      s: 2,
      m: 2,
      l: 2,
      xl: 4
    };
    this.size = 'm';
    this.loaderColor = 'custom-brand-accent';
    this.pathColor = 'tertiary';
  }
  // calculate radius of svg
  get radius() {
    return (this.sizeNumber / 2) - (this.strokeWidth / 2);
  }
  // calculate circumference of circle
  get circumference() {
    return (2 * Math.PI * this.radius);
  }
  get sizeNumber() {
    return this.sizeMap[this.size];
  }
  get strokeWidth() {
    return this.strokeSizeMap[this.size];
  }
  render() {
    // set host style
    const style = {
      height: `${this.size}px`,
      width: `${this.size}px`,
      '--positive-circumference': `${(this.circumference - 1)}`,
      '--negative-circumference': `${(-this.circumference + 1)}`
    };
    if (this.loaderColor) {
      style['--stroke-color'] = `var(--color-${this.loaderColor})`;
    }
    if (this.pathColor) {
      style['--path-color'] = `var(--bg-color-${this.pathColor})`;
    }
    return (h(Host, { style: style }, h("svg", { width: this.sizeNumber, height: this.sizeNumber, viewBox: `0 0 ${this.sizeNumber} ${this.sizeNumber}` }, h("circle", { class: 'background', cx: this.sizeNumber / 2, cy: this.sizeNumber / 2, r: this.radius, fill: 'none', "stroke-width": this.strokeWidth }), h("circle", { class: 'loader', cx: this.sizeNumber / 2, cy: this.sizeNumber / 2, r: this.radius, fill: 'none', "stroke-width": this.strokeWidth, "stroke-dasharray": this.circumference, "stroke-linecap": 'round' }))));
  }
  static get style() { return loadingSpinnerCss; }
}, [1, "true-loading-spinner", {
    "size": [513],
    "loaderColor": [1, "loader-color"],
    "pathColor": [1, "path-color"]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["true-loading-spinner"];
  components.forEach(tagName => { switch (tagName) {
    case "true-loading-spinner":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, LoadingSpinner);
      }
      break;
  } });
}

export { LoadingSpinner as L, defineCustomElement as d };

//# sourceMappingURL=loading-spinner.js.map