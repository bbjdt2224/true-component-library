import { r as registerInstance, h } from './index-d781eb2f.js';

const labelCss = ":host{display:block;--color:var(--color-tertiary)}:host true-text-base{--text-color:var(--color);--text-transform:uppercase !important;--letter-spacing:1px}";

const Label = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.color = undefined;
    this.maxLines = undefined;
  }
  render() {
    return (h("true-text-base", { size: "xs", weight: 'medium', maxLines: this.maxLines, color: this.color }, h("slot", null)));
  }
};
Label.style = labelCss;

export { Label as true_label };

//# sourceMappingURL=true-label.entry.js.map