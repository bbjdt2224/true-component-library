/*! For license information please see components-typography-label-label-mdx.fbc86872.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunktrue_components=self.webpackChunktrue_components||[]).push([[6260,3340],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/typography/label/label.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>label});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),label_stories=__webpack_require__("./src/components/typography/label/label.stories.tsx");const styles_namespaceObject="| Variable | Default Value      |\r\n| -------- | ------------------ |\r\n| --color  | `--color-tertiary` |\r\n";function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{of:label_stories}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"label",children:"Label"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"All capital text for labels"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"example",children:"Example"}),"\n",(0,jsx_runtime.jsx)(dist.sq,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(dist.ZX,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"css-variables",children:"CSS Variables"}),"\n",(0,jsx_runtime.jsx)(dist.UG,{children:styles_namespaceObject})]})}const label=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./src/components/typography/label/label.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Colors:()=>Colors,Default:()=>Default,MaxLines:()=>MaxLines,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var lit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit/index.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Typography/Label",component:"true-label"},Default={render:args=>lit__WEBPACK_IMPORTED_MODULE_0__.dy`<true-label color=${args.color} maxLines=${args.maxLines}>Cross valley and plain to steal coins from Saudi mint.</true-label>`,args:{color:"tertiary",maxLines:""},argTypes:{color:{type:"string",description:"The color of the text",options:["primary","secondary","tertiary","custom-brand-accent","true-primary-blue","true-primary-green","true-primary-red","neutral-100"],control:{type:"select"},table:{defaultValue:{summary:"tertiary"},type:{summary:"primary | secondary | tertiary | custom-brand-accent | true-primary-blue | true-primary-green | true-primary-red | neutral-100"}}},maxLines:{name:"max-lines",type:"string",description:"Maximum lines of text before truncation (webkit only)"}}},Colors={render:()=>lit__WEBPACK_IMPORTED_MODULE_0__.dy`
        <true-label color="primary">Primary</true-label>
        <true-label color="secondary">Secondary</true-label>
        <true-label color="tertiary">Tertiary</true-label>
        <true-label color="custom-brand-accent">Custom Brand</true-label>
        <true-label color="true-primary-blue">Blue</true-label>
        <true-label color="true-primary-green">Green</true-label>
        <true-label color="true-primary-red">Red</true-label>
        <true-label color="neutral-100">Neutral 100</true-label>
    `,decorators:[story=>lit__WEBPACK_IMPORTED_MODULE_0__.dy`<div class='v-flex'">${story()}</div>`]},MaxLines={render:()=>lit__WEBPACK_IMPORTED_MODULE_0__.dy`<true-label max-lines='1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</true-label>`,decorators:[story=>lit__WEBPACK_IMPORTED_MODULE_0__.dy`<div style="width: 300px">${story()}</div>`]};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: args => html`<true-label color=${args.color} maxLines=${args.maxLines}>Cross valley and plain to steal coins from Saudi mint.</true-label>`,\n  args: {\n    color: 'tertiary',\n    maxLines: ''\n  },\n  argTypes: {\n    color: {\n      type: 'string',\n      description: 'The color of the text',\n      options: ['primary', 'secondary', 'tertiary', 'custom-brand-accent', 'true-primary-blue', 'true-primary-green', 'true-primary-red', 'neutral-100'],\n      control: {\n        type: 'select'\n      },\n      table: {\n        defaultValue: {\n          summary: 'tertiary'\n        },\n        type: {\n          summary: 'primary | secondary | tertiary | custom-brand-accent | true-primary-blue | true-primary-green | true-primary-red | neutral-100'\n        }\n      }\n    },\n    maxLines: {\n      name: 'max-lines',\n      type: 'string',\n      description: 'Maximum lines of text before truncation (webkit only)'\n    }\n  }\n}",...Default.parameters?.docs?.source}}},Colors.parameters={...Colors.parameters,docs:{...Colors.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n        <true-label color="primary">Primary</true-label>\n        <true-label color="secondary">Secondary</true-label>\n        <true-label color="tertiary">Tertiary</true-label>\n        <true-label color="custom-brand-accent">Custom Brand</true-label>\n        <true-label color="true-primary-blue">Blue</true-label>\n        <true-label color="true-primary-green">Green</true-label>\n        <true-label color="true-primary-red">Red</true-label>\n        <true-label color="neutral-100">Neutral 100</true-label>\n    `,\n  decorators: [story => html`<div class=\'v-flex\'">${story()}</div>`]\n}',...Colors.parameters?.docs?.source}}},MaxLines.parameters={...MaxLines.parameters,docs:{...MaxLines.parameters?.docs,source:{originalSource:"{\n  render: () => html`<true-label max-lines='1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</true-label>`,\n  decorators: [story => html`<div style=\"width: 300px\">${story()}</div>`]\n}",...MaxLines.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Colors","MaxLines"]},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);