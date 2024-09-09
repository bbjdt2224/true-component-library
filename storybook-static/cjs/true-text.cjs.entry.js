'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b8804b03.js');

const textCss = ":host{display:block;--color:var(--color-primary);--text-line-height:26px}:host true-text-base{--line-height:var(--text-line-height);--text-color:var(--color)}";

const Text = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.weight = 'regular';
    this.color = undefined;
    this.maxLines = undefined;
  }
  render() {
    return (index.h("true-text-base", { size: "m", weight: this.weight, maxLines: this.maxLines, color: this.color }, index.h("slot", null)));
  }
};
Text.style = textCss;

exports.true_text = Text;

//# sourceMappingURL=true-text.cjs.entry.js.map