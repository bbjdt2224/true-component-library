'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b8804b03.js');

let CACHED_MAP;
const getIconMap = () => {
  if (!CACHED_MAP) {
    const win = window;
    win.Hiveicons = win.Hiveicons || {};
    CACHED_MAP = win.Hiveicons.map = win.Hiveicons.map || new Map();
  }
  return CACHED_MAP;
};
const getUrl = (i) => {
  let url = getName(i.name);
  if (url) {
    return getNamedUrl(url);
  }
  return null;
};
const getNamedUrl = (name) => {
  const url = getIconMap().get(name);
  if (url) {
    return url;
  }
  return index.getAssetPath(`icons/${name}.svg`);
};
const getName = (name) => {
  if (isStr(name)) {
    name = name.toLowerCase();
  }
  if (!isStr(name) || name.trim() === '') {
    return null;
  }
  // only allow alpha characters and dash
  const invalidChars = name.replace(/[a-z]|-|\d/gi, '');
  if (invalidChars !== '') {
    return null;
  }
  return name;
};
const isStr = (val) => typeof val === 'string';

const validateContent = (svgContent) => {
  if (svgContent) {
    const div = document.createElement('div');
    div.innerHTML = svgContent;
    // setup this way to ensure it works on our buddy IE
    for (let i = div.childNodes.length - 1; i >= 0; i--) {
      if (div.childNodes[i].nodeName.toLowerCase() !== 'svg') {
        div.removeChild(div.childNodes[i]);
      }
    }
    // must only have 1 root element
    const svgElm = div.firstElementChild;
    if (svgElm && svgElm.nodeName.toLowerCase() === 'svg') {
      svgElm.setAttribute('class', 's-ion-icon');
      // root element must be an svg
      // lets double check we've got valid elements
      // do not allow scripts
      if (isValid(svgElm)) {
        return div.innerHTML;
      }
    }
  }
  return '';
};
const isValid = (elm) => {
  if (elm.nodeType === 1) {
    if (elm.nodeName.toLowerCase() === 'script') {
      return false;
    }
    for (let i = 0; i < elm.attributes.length; i++) {
      const val = elm.attributes[i].value;
      if (isStr(val) && val.toLowerCase().indexOf('on') === 0) {
        return false;
      }
    }
    for (let i = 0; i < elm.childNodes.length; i++) {
      if (!isValid(elm.childNodes[i])) {
        return false;
      }
    }
  }
  return true;
};

const requests = new Map();
const getSvgContent = (url) => {
  // see if we already have a request for this url
  let req = requests.get(url);
  if (!req) {
    // we don't already have a request
    req = fetch(url).then(rsp => {
      if (rsp.status <= 299) {
        return rsp.text();
      }
      return Promise.resolve(null);
    }).then(svgContent => validateContent(svgContent));
    // cache for the same requests
    requests.set(url, req);
  }
  return req;
};

const iconCss = ":host{--color:currentColor;display:inline-block;width:1em;min-width:1em;height:1em;min-height:1em;contain:strict;box-sizing:content-box !important;--transition-speed:.2s}:host([size=xxs]){font-size:10px !important}:host([size=xs]){font-size:12px !important}:host([size=s]){font-size:16px !important}:host([size=m]){font-size:20px !important}:host([size=l]){font-size:24px !important}:host([size=xl]){font-size:48px !important}.icon-inner,svg{display:flex;justify-content:center;align-items:center;flex-shrink:0;width:100%;min-width:100%;height:100%;min-height:100%}svg{transition:fill var(--transition-speed) ease-in-out;fill:var(--color)}";

const Icon = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.svgContent = undefined;
    this.isVisible = false;
    this.defaultLabel = undefined;
    this.name = undefined;
    this.size = undefined;
    this.color = undefined;
    this.lazy = false;
  }
  connectedCallback() {
    // purposely do not return the promise here because loading
    // the svg file should not hold up loading the app
    // only load the svg if it's visible
    this.waitUntilVisible(this.el, '50px', () => {
      this.isVisible = true;
      this.loadIcon();
    });
  }
  disconnectedCallback() {
    if (this.io) {
      this.io.disconnect();
      this.io = undefined;
    }
  }
  waitUntilVisible(el, rootMargin, cb) {
    if (this.lazy && typeof window !== 'undefined' && window.IntersectionObserver) {
      const io = this.io = new window.IntersectionObserver((data) => {
        if (data[0].isIntersecting) {
          io.disconnect();
          this.io = undefined;
          cb();
        }
      }, { rootMargin });
      io.observe(el);
    }
    else {
      // browser doesn't support IntersectionObserver
      // so just fallback to always show it
      cb();
    }
  }
  loadIcon() {
    if (this.isVisible) {
      const url = getUrl(this);
      if (url) {
        getSvgContent(url)
          .then(svgContent => this.svgContent = svgContent);
      }
    }
    if (!this.defaultLabel) {
      const label = getName(this.name);
      // user did not provide a label
      // come up with the label based on the icon name
      if (label) {
        this.defaultLabel = label
          .replace('ios-', '')
          .replace('md-', '')
          .replace(/\-/g, ' ');
      }
    }
  }
  render() {
    const style = {};
    if (this.color) {
      style['--color'] = `var(--color-${this.color})`;
    }
    return (index.h(index.Host, { role: 'img', style: style }, ((this.svgContent)
      ? index.h("div", { class: 'icon-inner', innerHTML: this.svgContent })
      : index.h("div", { class: 'icon-inner' }))));
  }
  static get assetsDirs() { return ["icons"]; }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "name": ["loadIcon"]
  }; }
};
Icon.style = iconCss;

const subtextCss = ":host{display:block;--color:var(--color-primary)}:host true-text-base{--line-height:20px;--text-color:var(--color)}";

const Subtext = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.weight = 'regular';
    this.color = undefined;
    this.maxLines = undefined;
  }
  render() {
    return (index.h("true-text-base", { size: "s", weight: this.weight, maxLines: this.maxLines, color: this.color }, index.h("slot", null)));
  }
};
Subtext.style = subtextCss;

exports.true_icon = Icon;
exports.true_subtext = Subtext;

//# sourceMappingURL=true-icon_2.cjs.entry.js.map