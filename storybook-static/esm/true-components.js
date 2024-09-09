import { p as promiseResolve, b as bootstrapLazy } from './index-d781eb2f.js';
export { s as setNonce } from './index-d781eb2f.js';

/*
 Stencil Client Patch Browser v4.7.1 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["true-icon-preview",[[1,"true-icon-preview",{"icons":[1025],"selectedIcon":[32],"searchText":[32],"displayPlaceholder":[32]}]]],["true-large-button",[[1,"true-large-button",{"icon":[1],"type":[513],"submit":[4],"disabled":[516],"busy":[4],"textAlign":[513,"text-align"]},[[0,"click","hostClick"]]]]],["true-large-icon-button",[[1,"true-large-icon-button",{"icon":[1025],"type":[513],"disabled":[516]}]]],["true-header",[[1,"true-header",{"size":[513],"weight":[513],"color":[513],"maxLines":[513,"max-lines"]}]]],["true-label",[[1,"true-label",{"color":[513],"maxLines":[513,"max-lines"]}]]],["true-text-button",[[1,"true-text-button",{"disabled":[516],"type":[513],"size":[1],"weight":[1],"location":[1],"newTab":[516,"new-tab"],"focusable":[1028]}]]],["my-component",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]],["true-icon-button",[[1,"true-icon-button",{"icon":[1025],"type":[513],"disabled":[516],"toggled":[516],"tabindex":[2],"size":[513],"shadow":[516],"badge":[1026],"hasOverlay":[516,"has-overlay"],"flip":[513]}]]],["true-text",[[1,"true-text",{"weight":[513],"color":[513],"maxLines":[513,"max-lines"]}]]],["true-loading-spinner",[[1,"true-loading-spinner",{"size":[513],"loaderColor":[1,"loader-color"],"pathColor":[1,"path-color"]}]]],["true-text-base",[[1,"true-text-base",{"size":[513],"color":[513],"weight":[513],"maxLines":[513,"max-lines"],"loaded":[32]}]]],["true-button",[[1,"true-button",{"type":[513],"textSize":[513,"text-size"],"submit":[4],"disabled":[1540],"textAlign":[513,"text-align"],"hasOverlay":[516,"has-overlay"]},[[0,"click","hostClick"]]]]],["true-icon_2",[[1,"true-subtext",{"weight":[513],"color":[513],"maxLines":[513,"max-lines"]}],[1,"true-icon",{"defaultLabel":[1537,"default-label"],"name":[513],"size":[513],"color":[1],"lazy":[4],"svgContent":[32],"isVisible":[32]},null,{"name":["loadIcon"]}]]]], options);
});

//# sourceMappingURL=true-components.js.map