/*! For license information please see components-basic-app-loading-spinner-loading-spinner-mdx.fa2bbb33.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunktrue_components=self.webpackChunktrue_components||[]).push([[176,3125],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/basic-app/loading-spinner/loading-spinner.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>loading_spinner});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),loading_spinner_stories=__webpack_require__("./src/components/basic-app/loading-spinner/loading-spinner.stories.ts");const styles_namespaceObject="| Variable            | Default Value  |\r\n| ------------------- | -------------- |\r\n| --stroke-color      | `currentColor` |\r\n| --path-color        | `none`         |\r\n| --path-opacity      | `1`            |\r\n| --background-color  | `none`         |\r\n| --background-shadow | `none`         |\r\n";function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{of:loading_spinner_stories}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"loading-spinner",children:"Loading Spinner"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Infinantly spinning loader"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(dist.Ed,{of:loading_spinner_stories}),"\n",(0,jsx_runtime.jsx)(dist.fQ,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"css-variables",children:"CSS Variables"}),"\n",(0,jsx_runtime.jsx)(dist.UG,{children:styles_namespaceObject})]})}const loading_spinner=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./src/components/basic-app/loading-spinner/loading-spinner.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"App Basics/Loading Spinner",component:"true-loading-spinner",args:{size:"m",loaderColor:"custom-brand-accent",pathColor:"tertiary"},argTypes:{size:{type:"string",description:"Size of the loader",options:["s","m","l","xl"],control:{type:"select"},disable:!0,table:{defaultValue:{summary:"m"},type:{summary:"s | m | l | xl"}}},loaderColor:{type:"string",description:"Color of the loader",options:["primary","secondary","tertiary","destructive","brand-primary-blue","brand-primary-green","brand-primary-red","neutral-100","custom-brand-accent"],control:{type:"select"},disable:!0,table:{defaultValue:{summary:"custom-brand-accent"},type:{summary:"primary | secondary | tertiary | destructive | brand-primary-blue | brand-primary-green | brand-primary-red | neutral-100 | custom-brand-accent"}}},pathColor:{type:"string",description:"Color of the path the loader follows",options:["primary","secondary","tertiary"],control:{type:"select"},disable:!0,table:{defaultValue:{summary:"tertiary"},type:{summary:"primary | secondary | tertiary"}}}}},Default={};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);