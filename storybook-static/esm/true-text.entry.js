import { r as registerInstance, h } from './index-d781eb2f.js';

const textCss = ":host{display:block;--color:var(--color-primary);--text-line-height:26px}:host true-text-base{--line-height:var(--text-line-height);--text-color:var(--color)}";

const Text = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.weight = 'regular';
    this.color = undefined;
    this.maxLines = undefined;
  }
  render() {
    return (h("true-text-base", { size: "m", weight: this.weight, maxLines: this.maxLines, color: this.color }, h("slot", null)));
  }
};
Text.style = textCss;

export { Text as true_text };

//# sourceMappingURL=true-text.entry.js.map