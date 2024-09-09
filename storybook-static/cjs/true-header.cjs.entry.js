'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b8804b03.js');

const headerCss = ":host{display:block;--color:var(--color-primary)}:host true-text-base{--line-height:initial;--text-color:var(--color)}:host([size=h1]) true-text-base{--line-height:52px}:host([size=h3]) true-text-base{--line-height:32px}";

const Text = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    return (index.h("true-text-base", { size: this.sizeMap[this.size], weight: this.weight, maxLines: this.maxLines, color: this.color }, index.h("slot", null)));
  }
};
Text.style = headerCss;

exports.true_header = Text;

//# sourceMappingURL=true-header.cjs.entry.js.map