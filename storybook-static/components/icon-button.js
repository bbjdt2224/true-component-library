import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { r as removeButtonFocus } from './button-common.js';
import { d as defineCustomElement$3 } from './icon.js';
import { d as defineCustomElement$2 } from './subtext.js';
import { d as defineCustomElement$1 } from './text-base.js';

const iconButtonCss = ":host{--size:40px;--icon-font-size:calc(var(--size) / 2);--background-opacity:1;--border-radius:50%;border-radius:var(--border-radius);--icon-color:var(--color-primary);--bg-color:var(--bg-color-tertiary);--color-hover:var(--color-primary);--bg-color-hover:var(--bg-hover-tertiary);--color-disabled:var(--color-tertiary);--bg-color-disabled:var(--bg-color-tertiary);--color-toggle:var(--bg-color-primary);--bg-color-toggle:var(--color-secondary);display:inline-flex;align-items:center;justify-content:center;position:relative}:host .overlay{position:absolute;top:0;bottom:0;left:0;right:0;border-radius:var(--border-radius);background-color:rgba(0, 0, 0, 0.15);z-index:2;cursor:pointer}:host button{cursor:pointer;appearance:none;border:0;padding:0;background-color:transparent;font-family:var(--app-font-family);display:inline-flex;align-items:center;justify-content:center;position:relative;border-radius:var(--border-radius);overflow:hidden;width:var(--size);height:var(--size);color:var(--color);transition:color 100ms ease-in-out}:host button[disabled]{cursor:not-allowed}:host button:focus{outline:0}:host button::-moz-focus-inner{border:0}:host button:focus:not([disabled]):not(:active){box-shadow:0 0 0 2px var(--color-true-primary-blue)}:host button .background{position:absolute;top:0;right:0;bottom:0;left:0;background-color:var(--bg-color);opacity:var(--background-opacity);transition:background-color 100ms ease-in-out, opacity 100ms ease-in-out;border-radius:var(--border-radius)}:host button true-icon{--width:var(--icon-width);--height:var(--icon-height);position:absolute;transition:transform 0.1s ease-in-out;font-size:var(--icon-font-size);--color:var(--icon-color)}:host .badge{background-color:var(--color-custom-brand-accent);height:calc(var(--size) / 2);width:calc(var(--size) / 2);border-radius:calc(var(--size) / 2);border:2px solid var(--bg-color-secondary);position:absolute;top:calc(var(--size) / 8 * -1);right:calc(var(--size) / 8 * -1);display:flex;align-items:center;justify-content:center}:host([size=xs]){--size:24px}:host([size=s]){--size:32px}:host([size=l]){--size:56px}:host([size=xl]){--size:60px}:host([type=primary]){--icon-color:var(--color-secondary);--bg-color:var(--bg-color-secondary);--color-hover:var(--color-secondary);--bg-color-hover:var(--bg-hover-secondary);--color-disabled:var(--color-tertiary);--bg-color-disabled:var(--bg-color-tertiary);--color-toggle:var(--bg-color-primary);--bg-color-toggle:var(--color-secondary)}:host([type=primary][shadow]){--icon-color:var(--color-secondary);--bg-color:var(--bg-color-secondary);--color-hover:var(--color-primary);--bg-color-hover:var(--bg-color-secondary)}:host([type=primary][shadow]) button{box-shadow:var(--box-shadow-key-low)}:host([flip=h]) true-icon{transform:scale(-1, 1)}:host([flip=v]) true-icon{transform:scale(1, -1)}:host(.activated:not([toggled])){--background-opacity:1 !important}:host(.activated:not([toggled])) button:not([disabled]){--icon-color:var(--color-hover);--bg-color:var(--bg-color-hover)}@media (any-hover: hover){:host(:hover:not([toggled])){--background-opacity:1 !important}:host(:hover:not([toggled])) button:not([disabled]){--icon-color:var(--color-hover);--bg-color:var(--bg-color-hover)}}:host([disabled]){--background-opacity:1 !important}:host([disabled]) button{box-shadow:none !important;--icon-color:var(--color-disabled);--bg-color:var(--bg-color-disabled)}:host([toggled]:not([disabled])){--background-opacity:1 !important;--icon-color:var(--color-toggle);--bg-color:var(--bg-color-toggle)}";

const IconButton = /*@__PURE__*/ proxyCustomElement(class IconButton extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.icon = undefined;
    this.type = 'secondary';
    this.disabled = false;
    this.toggled = false;
    this.tabindex = 0;
    this.size = 'm';
    this.shadow = false;
    this.badge = undefined;
    this.hasOverlay = undefined;
    this.flip = undefined;
  }
  renderBadge() {
    if (this.badge) {
      return (h("div", { class: "badge" }, h("true-subtext", { color: "neutral-100" }, this.badge)));
    }
  }
  render() {
    return (h(Host, { "aria-disabled": this.disabled ? 'true' : null, class: {
        'ion-activatable': true,
      } }, this.hasOverlay ? h("div", { class: "overlay" }) : null, h("button", { tabindex: this.tabindex, disabled: this.disabled, onClick: e => removeButtonFocus(e) }, h("div", { class: "background" }), h("true-icon", { name: this.icon })), this.renderBadge()));
  }
  static get style() { return iconButtonCss; }
}, [1, "true-icon-button", {
    "icon": [1025],
    "type": [513],
    "disabled": [516],
    "toggled": [516],
    "tabindex": [2],
    "size": [513],
    "shadow": [516],
    "badge": [1026],
    "hasOverlay": [516, "has-overlay"],
    "flip": [513]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["true-icon-button", "true-icon", "true-subtext", "true-text-base"];
  components.forEach(tagName => { switch (tagName) {
    case "true-icon-button":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, IconButton);
      }
      break;
    case "true-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "true-subtext":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
    case "true-text-base":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { IconButton as I, defineCustomElement as d };

//# sourceMappingURL=icon-button.js.map