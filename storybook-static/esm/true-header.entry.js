import { r as registerInstance, h } from './index-d781eb2f.js';

const headerCss = ":host{display:block;--color:var(--color-primary)}:host true-text-base{--line-height:initial;--text-color:var(--color)}:host([size=h1]) true-text-base{--line-height:52px}:host([size=h3]) true-text-base{--line-height:32px}";

const Text = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
};
Text.style = headerCss;

export { Text as true_header };

//# sourceMappingURL=true-header.entry.js.map