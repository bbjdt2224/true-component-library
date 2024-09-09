import { r as registerInstance, h, H as Host, g as getElement } from './index-d781eb2f.js';
import { r as removeButtonFocus } from './button-common-6d6d30b6.js';

const textButtonCss = ":host{display:inline-flex;--padding:2px 4px;--min-width:max-content;--align-items:baseline;--slot-end-gap:0;--slot-start-gap:0;--color:var(--color-brand-primary-blue);--color-disabled:var(--color-tertiary)}:host button{cursor:pointer;appearance:none;border:0;padding:0;background-color:transparent;font-family:var(--app-font-family);width:100%;min-width:var(--min-width);color:var(--color);padding:var(--padding);border-radius:2px;display:inline-flex;align-items:var(--align-items)}:host button[disabled]{cursor:not-allowed}:host button:focus{outline:0}:host button::-moz-focus-inner{border:0}:host button:focus:not([disabled]):not(:active){box-shadow:0 0 0 2px var(--color-true-primary-blue)}:host button true-text-base{color:var(--color)}:host button .content{border-bottom:1px solid transparent;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;margin-right:var(--slot-end-gap);margin-left:var(--slot-start-gap)}:host(.activated:not([disabled])) button:active .content,:host(.activated:not([disabled])) button:focus .content,:host(.activated:not([disabled])) button:hover .content{border-color:currentColor}@media (any-hover: hover){:host(:hover:not([disabled])) button:active .content,:host(:hover:not([disabled])) button:focus .content,:host(:hover:not([disabled])) button:hover .content{border-color:currentColor}}:host([type=secondary]){--color:var(--color-secondary);--color-disabled:var(--color-tertiary)}:host([type=tertiary]){--color:var(--color-tertiary);--color-disabled:var(--color-tertiary)}:host([type=brand]){--color:var(--color-custom-brand-accent);--color-disabled:var(--color-custom-brand-accent)}:host([disabled]){--color:var(--color-disabled)}a{all:unset;max-width:100%}";

const TextButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.disabled = false;
    this.type = 'primary';
    this.size = 's';
    this.weight = 'medium';
    this.location = undefined;
    this.newTab = undefined;
    this.focusable = true;
  }
  componentDidLoad() {
    // Removes issue where router link adds tab index and steals focus from the button
    this.host.removeAttribute('tabindex');
  }
  renderText() {
    const textBase = (h("true-text-base", { class: 'content', weight: this.weight, size: this.size }, h("slot", null)));
    if (this.location) {
      return (h("a", { href: this.location, target: this.newTab ? 'blank' : '' }, textBase));
    }
    else {
      return textBase;
    }
  }
  render() {
    return (h(Host, { "aria-disabled": this.disabled ? 'true' : null, class: {
        'ion-activatable': true
      } }, h("button", { disabled: this.disabled, onClick: e => removeButtonFocus(e), type: 'button', tabindex: this.focusable ? 0 : -1 }, h("slot", { name: 'start' }), this.renderText(), h("slot", { name: 'end' }))));
  }
  get host() { return getElement(this); }
};
TextButton.style = textButtonCss;

export { TextButton as true_text_button };

//# sourceMappingURL=true-text-button.entry.js.map