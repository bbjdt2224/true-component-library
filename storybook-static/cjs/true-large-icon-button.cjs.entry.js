'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b8804b03.js');

const largeIconButtonCss = ":host{--space-around:4px;--text-spacing:8px;display:flex;flex-direction:column;align-items:center;text-align:center;width:calc(var(--button-size) + var(--space-around) * 2);overflow:hidden;--button-text-color:var(--color-primary)}:host true-icon-button{padding:var(--space-around);padding-bottom:calc(var(--text-spacing) - var(--space-around))}:host true-icon-button{--color-toggle:var(--color-accent);--bg-color-toggle:var(--bg-color-accent)}:host true-text-base{color:var(--button-text-color)}:host([type=primary]){--button-text-color:var(--color-accent)}:host([type=primary]) true-icon-button{--icon-color:var(--color-accent);--bg-color:var(--bg-color-accent);--color-hover:var(--color-accent);--bg-color-hover:var(--bg-hover-accent);--color-disabled:var(--color-tertiary);--bg-color-disabled:var(--bg-color-tertiary);--color-toggle:var(--color-accent);--bg-color-toggle:var(--bg-color-accent)}:host([disabled]){--button-text-color:var(--color-tertiary)}";

const LargeIconButton = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.icon = undefined;
    this.type = 'secondary';
    this.disabled = false;
  }
  render() {
    return (index.h(index.Host, { "aria-disabled": this.disabled ? 'true' : null }, index.h("true-icon-button", { size: 'xl', type: this.type, icon: this.icon, disabled: this.disabled }), index.h("true-text-base", { weight: 'medium', size: 's' }, index.h("slot", null))));
  }
};
LargeIconButton.style = largeIconButtonCss;

exports.true_large_icon_button = LargeIconButton;

//# sourceMappingURL=true-large-icon-button.cjs.entry.js.map