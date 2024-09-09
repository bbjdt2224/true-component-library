import { h, Host } from "@stencil/core";
export class IconPreview {
  constructor() {
    this.iconSelected = (ev) => {
      const icon = ev.target;
      const iconEl = icon.querySelector('true-icon');
      if (this.selectedIcon === iconEl.attributes.getNamedItem('name').value) {
        this.selectedIcon = undefined;
      }
      else {
        this.selectedIcon = iconEl.attributes.getNamedItem('name').value;
      }
    };
    this.copyToClipboard = () => {
      if (window.getSelection) {
        const selection = window.getSelection();
        if (selection) {
          document.execCommand('copy');
        }
      }
    };
    this.codeMouseOver = (ev) => {
      const text = ev.target.querySelector('span');
      if (window.getSelection) {
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);
      }
    };
    this.codeMouseLeave = () => {
      if (window.getSelection) {
        const selection = window.getSelection();
        selection.removeAllRanges();
      }
    };
    this.openSvg = () => {
      const host = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '');
      window.open(`${host}/true-components/icons/${this.selectedIcon}.svg`, '_blank');
    };
    this.searchIcons = () => {
      this.searchText = this.inputElement.value;
    };
    this.clearSearch = () => {
      this.searchText = '';
      this.inputElement.value = '';
    };
    this.icons = undefined;
    this.selectedIcon = undefined;
    this.searchText = '';
    this.displayPlaceholder = false;
  }
  componentDidLoad() {
    this.inputElement.focus();
  }
  renderPlaceholder() {
    if (this.displayPlaceholder && this.searchText.length > 0) {
      return (h("div", { class: 'placeholder' }, h("true-heading", { large: true }, "No results for \"", this.searchText, "\"")));
    }
  }
  renderIcons() {
    const icons = [];
    this.icons.split(',').forEach(icon => {
      if (icon.includes(this.searchText.toLowerCase())) {
        icons.push(h("button", { type: 'button', class: {
            icon: true,
            active: this.selectedIcon === icon
          }, onClick: this.iconSelected }, h("true-icon", { name: icon })));
      }
    });
    // Causes a re-render of the component
    this.displayPlaceholder = icons.length === 0;
    return icons;
  }
  render() {
    return (h(Host, null, h("div", { class: 'search-input' }, h("true-icon", { class: 'search', color: 'primary', name: 'search' }), h("input", { type: 'text', autofocus: true, ref: ref => this.inputElement = ref, onKeyUp: this.searchIcons, placeholder: 'Search icons...' }), h("button", { class: {
        'clear-btn': true,
        visible: this.searchText.length > 0
      }, onClick: this.clearSearch }, h("true-icon", { name: 'x' }))), h("div", { class: 'icons' }, this.renderIcons()), this.renderPlaceholder(), h("div", { class: {
        'toast-bar': true,
        active: this.selectedIcon != null
      } }, h("div", { class: 'toast-bar-inner' }, h("true-text", { class: 'selected-icon' }, this.selectedIcon), h("div", { class: 'actions' }, h("div", null, h("true-subtext", { color: 'primary' }, "WEB COMPONENT CODE"), h("code", { onMouseOver: this.codeMouseOver, onMouseLeave: this.codeMouseLeave, onClick: this.copyToClipboard }, h("span", { class: 'hover-highlight' }, "<", h("span", { class: 'blue' }, "true-icon"), "\u00A0", h("span", { class: 'green' }, "name"), "=", h("span", { class: 'yellow' }, "\"", this.selectedIcon, "\""), "></", h("span", { class: 'blue' }, "true-icon"), ">"))), h("div", { class: 'download-btn' }, h("true-icon", { color: 'primary', name: this.selectedIcon }), h("true-button", { color: 'brand-primary-blue', onClick: this.openSvg }, h("div", { class: 'svg-btn' }, h("svg", { width: '20px', height: '20px', viewBox: '0 0 32 32' }, h("path", { d: 'M26 12.469h-5.712v-8.469h-8.575v8.469h-5.713l10 9.881 10-9.881zM6 25.175v2.825h20v-2.825h-20z' })), "SVG"))))))));
  }
  static get is() { return "true-icon-preview"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["icon-preview.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["icon-preview.css"]
    };
  }
  static get properties() {
    return {
      "icons": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "icons",
        "reflect": false
      }
    };
  }
  static get states() {
    return {
      "selectedIcon": {},
      "searchText": {},
      "displayPlaceholder": {}
    };
  }
}
//# sourceMappingURL=icon-preview.js.map
