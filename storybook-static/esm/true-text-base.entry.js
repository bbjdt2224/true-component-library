import { r as registerInstance, h, H as Host } from './index-d781eb2f.js';

const textBaseCss = ":host{display:block;--max-lines:initial;--line-height:initial;--font-weight:400;--font-size:var(--m-font-size);--font-family:var(--app-font-family);--letter-spacing:initial;--text-color:var(--color-primary);--text-transform:none;align-items:center;color:var(--text-color, currentColor);font-variant-numeric:var(--font-variant-numeric)}:host span{font-size:var(--font-size);font-weight:var(--font-weight);font-family:var(--app-font-family);letter-spacing:var(--letter-spacing);line-height:var(--line-height);text-transform:var(--text-transform);align-items:center;display:block;overflow:hidden;text-overflow:ellipsis;-webkit-font-smoothing:antialiased}:host(.loaded){transition:color 0.2s ease-in-out}:host{--xxxl-font-size:40px}:host([size=xxxl]){--font-size:var(--xxxl-font-size) !important}:host{--xxl-font-size:32px}:host([size=xxl]){--font-size:var(--xxl-font-size) !important}:host{--xl-font-size:24px}:host([size=xl]){--font-size:var(--xl-font-size) !important}:host{--l-font-size:20px}:host([size=l]){--font-size:var(--l-font-size) !important}:host{--m-font-size:16px}:host([size=m]){--font-size:var(--m-font-size) !important}:host{--s-font-size:14px}:host([size=s]){--font-size:var(--s-font-size) !important}:host{--xs-font-size:12px}:host([size=xs]){--font-size:var(--xs-font-size) !important}:host{--xxs-font-size:10px}:host([size=xxs]){--font-size:var(--xxs-font-size) !important}:host([weight=extra-bold]){--font-weight:800 !important}:host([weight=bold]){--font-weight:700 !important}:host([weight=medium]){--font-weight:500 !important}:host([weight=regular]){--font-weight:400 !important}:host([max-lines]) span{overflow:hidden;text-overflow:ellipsis;word-break:break-word;visibility:visible;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:var(--max-lines)}";

const TextBase = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.size = 'm';
    this.color = undefined;
    this.weight = undefined;
    this.maxLines = undefined;
    this.loaded = undefined;
  }
  componentDidLoad() {
    // Set loaded to true so colors are correct
    requestAnimationFrame(() => {
      this.loaded = true;
    });
  }
  render() {
    const style = {};
    if (this.maxLines != null) {
      style['--max-lines'] = this.maxLines;
    }
    if (this.color) {
      style['--text-color'] = `var(--color-${this.color})`;
    }
    return (h(Host, { style: style, class: this.loaded ? 'loaded' : '' }, h("span", null, h("slot", null))));
  }
};
TextBase.style = textBaseCss;

export { TextBase as true_text_base };

//# sourceMappingURL=true-text-base.entry.js.map