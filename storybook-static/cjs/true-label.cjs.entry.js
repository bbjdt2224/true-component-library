'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b8804b03.js');

const labelCss = ":host{display:block;--color:var(--color-tertiary)}:host true-text-base{--text-color:var(--color);--text-transform:uppercase !important;--letter-spacing:1px}";

const Label = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.color = undefined;
    this.maxLines = undefined;
  }
  render() {
    return (index.h("true-text-base", { size: "xs", weight: 'medium', maxLines: this.maxLines, color: this.color }, index.h("slot", null)));
  }
};
Label.style = labelCss;

exports.true_label = Label;

//# sourceMappingURL=true-label.cjs.entry.js.map