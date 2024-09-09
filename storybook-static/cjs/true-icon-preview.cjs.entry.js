'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b8804b03.js');

const iconPreviewCss = ":host{display:flex;align-items:center;flex-direction:column;overflow:scroll;height:90vh;position:relative;--color-primary:black;width:100%;min-width:850px}.icons{display:grid;grid-template-columns:repeat(auto-fill, minmax(70px, 1fr));grid-auto-rows:minmax(70px, auto);grid-gap:0.5em;padding-bottom:60px;margin-left:auto;margin-right:auto;width:80%}.svg-btn{display:flex;align-items:center}.icon{display:flex;align-items:center;justify-content:center;border-radius:8px;font-size:16px;border:2px solid transparent;animation-name:shadowOut;animation-duration:0.3s;animation-fill-mode:forwards}.icon:active,.icon:focus{outline:0}.icon:hover,.icon:focus{animation-name:shadowIn;animation-duration:0.3s;animation-fill-mode:forwards}.icon.active{background-color:rgb(236, 240, 246)}true-icon{user-select:none;pointer-events:none}.search-input{width:630px}.search-input true-icon.search{position:absolute;transform:translate(100%, 150%)}.search-input .clear-btn{position:absolute;right:0;appearance:none;top:20px;border-radius:9999px;background:var(--abbott-color-dark-gray-offset);border-color:transparent;-webkit-appearance:none;font-size:10px;width:22px;height:22px;display:flex;align-items:center;transform:translateX(-100%);cursor:pointer;transition:all 0.3s;opacity:0;pointer-events:none}.search-input .clear-btn:hover{background:var(--abbott-color-light-gray)}.search-input .clear-btn.visible{opacity:1;pointer-events:all}@keyframes shadowIn{0%{box-shadow:0}100%{box-shadow:0 3px 6px 0 rgba(0, 0, 0, 0.1), 0 1px 3px 0 rgba(0, 0, 0, 0.08)}}@keyframes shadowOut{0%{box-shadow:0 3px 6px 0 rgba(0, 0, 0, 0.1), 0 1px 3px 0 rgba(0, 0, 0, 0.08)}100%{box-shadow:0}}.toast-bar{left:0;bottom:0;padding:12px 0;width:100%;transform:translateY(100%);visibility:hidden}.toast-bar.active{transition:all 0.3s;transform:translateY(-20px);visibility:visible;position:sticky}.toast-bar-inner{margin:20px;padding:10px;border-radius:8px;display:flex;align-items:center;justify-content:space-between;background-color:white;box-shadow:0 16px 32px 0 rgba(0, 0, 0, 0.1), 0 8px 16px 0 rgba(0, 0, 0, 0.08)}.toast-bar .selected-icon{margin-left:20px}.toast-bar .actions{display:flex;align-items:flex-end;padding-right:20px}.toast-bar .download-btn{display:flex;align-items:center;margin-left:20px}.toast-bar .download-btn true-icon{margin-right:20px}.toast-bar code{overflow-x:auto;position:relative;box-sizing:border-box;display:flex;align-items:center;font-size:14px;line-height:14px;height:32px;padding:0 12px;cursor:text;overflow:hidden;background:#363E49;border-radius:4px;color:var(--color-white)}.toast-bar code .yellow{color:#E5DB63}.toast-bar code .green{color:#96E500}.toast-bar code .blue{color:#46D8EE}.toast-bar code span{white-space:nowrap;pointer-events:none}.placeholder{display:flex;align-items:center;justify-content:center}input{transition:box-shadow 0.3s;font-size:16px;line-height:22px;padding:20px 50px;background-color:var(--color-white);box-shadow:0 3px 6px 0 rgba(0, 0, 0, 0.1), 0 1px 3px 0 rgba(0, 0, 0, 0.08);width:100%;font-weight:400;border:0;outline:0;border-radius:6px;box-sizing:border-box;display:block;-webkit-appearance:none;margin-bottom:20px}";

const IconPreview = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
      return (index.h("div", { class: 'placeholder' }, index.h("true-heading", { large: true }, "No results for \"", this.searchText, "\"")));
    }
  }
  renderIcons() {
    const icons = [];
    this.icons.split(',').forEach(icon => {
      if (icon.includes(this.searchText.toLowerCase())) {
        icons.push(index.h("button", { type: 'button', class: {
            icon: true,
            active: this.selectedIcon === icon
          }, onClick: this.iconSelected }, index.h("true-icon", { name: icon })));
      }
    });
    // Causes a re-render of the component
    this.displayPlaceholder = icons.length === 0;
    return icons;
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: 'search-input' }, index.h("true-icon", { class: 'search', color: 'primary', name: 'search' }), index.h("input", { type: 'text', autofocus: true, ref: ref => this.inputElement = ref, onKeyUp: this.searchIcons, placeholder: 'Search icons...' }), index.h("button", { class: {
        'clear-btn': true,
        visible: this.searchText.length > 0
      }, onClick: this.clearSearch }, index.h("true-icon", { name: 'x' }))), index.h("div", { class: 'icons' }, this.renderIcons()), this.renderPlaceholder(), index.h("div", { class: {
        'toast-bar': true,
        active: this.selectedIcon != null
      } }, index.h("div", { class: 'toast-bar-inner' }, index.h("true-text", { class: 'selected-icon' }, this.selectedIcon), index.h("div", { class: 'actions' }, index.h("div", null, index.h("true-subtext", { color: 'primary' }, "WEB COMPONENT CODE"), index.h("code", { onMouseOver: this.codeMouseOver, onMouseLeave: this.codeMouseLeave, onClick: this.copyToClipboard }, index.h("span", { class: 'hover-highlight' }, "<", index.h("span", { class: 'blue' }, "true-icon"), "\u00A0", index.h("span", { class: 'green' }, "name"), "=", index.h("span", { class: 'yellow' }, "\"", this.selectedIcon, "\""), "></", index.h("span", { class: 'blue' }, "true-icon"), ">"))), index.h("div", { class: 'download-btn' }, index.h("true-icon", { color: 'primary', name: this.selectedIcon }), index.h("true-button", { color: 'brand-primary-blue', onClick: this.openSvg }, index.h("div", { class: 'svg-btn' }, index.h("svg", { width: '20px', height: '20px', viewBox: '0 0 32 32' }, index.h("path", { d: 'M26 12.469h-5.712v-8.469h-8.575v8.469h-5.713l10 9.881 10-9.881zM6 25.175v2.825h20v-2.825h-20z' })), "SVG"))))))));
  }
};
IconPreview.style = iconPreviewCss;

exports.true_icon_preview = IconPreview;

//# sourceMappingURL=true-icon-preview.cjs.entry.js.map