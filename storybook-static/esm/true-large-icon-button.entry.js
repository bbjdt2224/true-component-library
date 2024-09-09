import { r as registerInstance, h, H as Host } from './index-d781eb2f.js';

const largeIconButtonCss = ":host{--space-around:4px;--text-spacing:8px;display:flex;flex-direction:column;align-items:center;text-align:center;width:calc(var(--button-size) + var(--space-around) * 2);overflow:hidden;--button-text-color:var(--color-primary)}:host true-icon-button{padding:var(--space-around);padding-bottom:calc(var(--text-spacing) - var(--space-around))}:host true-icon-button{--color-toggle:var(--color-accent);--bg-color-toggle:var(--bg-color-accent)}:host true-text-base{color:var(--button-text-color)}:host([type=primary]){--button-text-color:var(--color-accent)}:host([type=primary]) true-icon-button{--icon-color:var(--color-accent);--bg-color:var(--bg-color-accent);--color-hover:var(--color-accent);--bg-color-hover:var(--bg-hover-accent);--color-disabled:var(--color-tertiary);--bg-color-disabled:var(--bg-color-tertiary);--color-toggle:var(--color-accent);--bg-color-toggle:var(--bg-color-accent)}:host([disabled]){--button-text-color:var(--color-tertiary)}";

const LargeIconButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.icon = undefined;
    this.type = 'secondary';
    this.disabled = false;
  }
  render() {
    return (h(Host, { "aria-disabled": this.disabled ? 'true' : null }, h("true-icon-button", { size: 'xl', type: this.type, icon: this.icon, disabled: this.disabled }), h("true-text-base", { weight: 'medium', size: 's' }, h("slot", null))));
  }
};
LargeIconButton.style = largeIconButtonCss;

export { LargeIconButton as true_large_icon_button };

//# sourceMappingURL=true-large-icon-button.entry.js.map