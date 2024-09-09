import { getAssetPath } from "@stencil/core";
let CACHED_MAP;
export const getIconMap = () => {
  if (!CACHED_MAP) {
    const win = window;
    win.Hiveicons = win.Hiveicons || {};
    CACHED_MAP = win.Hiveicons.map = win.Hiveicons.map || new Map();
  }
  return CACHED_MAP;
};
export const addIcons = (icons) => {
  const map = getIconMap();
  Object.keys(icons).forEach(name => {
    map.set(name, icons[name]);
  });
};
export const getUrl = (i) => {
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
  return getAssetPath(`icons/${name}.svg`);
};
export const getName = (name) => {
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
export const getSrc = (src) => {
  if (isStr(src)) {
    src = src.trim();
    if (isSrc(src)) {
      return src;
    }
  }
  return null;
};
export const isSrc = (str) => {
  return str.length > 0 && /(\/|\.)/.test(str);
};
export const isStr = (val) => typeof val === 'string';
//# sourceMappingURL=utils.js.map
