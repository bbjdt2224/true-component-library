import{a as t,r as i,h as s,H as n,g as e}from"./p-36df07cd.js";let o;const r=()=>{if(!o){const t=window;t.Hiveicons=t.Hiveicons||{};o=t.Hiveicons.map=t.Hiveicons.map||new Map}return o};const c=t=>{let i=h(t.name);if(i){return l(i)}return null};const l=i=>{const s=r().get(i);if(s){return s}return t(`icons/${i}.svg`)};const h=t=>{if(a(t)){t=t.toLowerCase()}if(!a(t)||t.trim()===""){return null}const i=t.replace(/[a-z]|-|\d/gi,"");if(i!==""){return null}return t};const a=t=>typeof t==="string";const f=t=>{if(t){const i=document.createElement("div");i.innerHTML=t;for(let t=i.childNodes.length-1;t>=0;t--){if(i.childNodes[t].nodeName.toLowerCase()!=="svg"){i.removeChild(i.childNodes[t])}}const s=i.firstElementChild;if(s&&s.nodeName.toLowerCase()==="svg"){s.setAttribute("class","s-ion-icon");if(u(s)){return i.innerHTML}}}return""};const u=t=>{if(t.nodeType===1){if(t.nodeName.toLowerCase()==="script"){return false}for(let i=0;i<t.attributes.length;i++){const s=t.attributes[i].value;if(a(s)&&s.toLowerCase().indexOf("on")===0){return false}}for(let i=0;i<t.childNodes.length;i++){if(!u(t.childNodes[i])){return false}}}return true};const d=new Map;const p=t=>{let i=d.get(t);if(!i){i=fetch(t).then((t=>{if(t.status<=299){return t.text()}return Promise.resolve(null)})).then((t=>f(t)));d.set(t,i)}return i};const m=":host{--color:currentColor;display:inline-block;width:1em;min-width:1em;height:1em;min-height:1em;contain:strict;box-sizing:content-box !important;--transition-speed:.2s}:host([size=xxs]){font-size:10px !important}:host([size=xs]){font-size:12px !important}:host([size=s]){font-size:16px !important}:host([size=m]){font-size:20px !important}:host([size=l]){font-size:24px !important}:host([size=xl]){font-size:48px !important}.icon-inner,svg{display:flex;justify-content:center;align-items:center;flex-shrink:0;width:100%;min-width:100%;height:100%;min-height:100%}svg{transition:fill var(--transition-speed) ease-in-out;fill:var(--color)}";const g=class{constructor(t){i(this,t);this.svgContent=undefined;this.isVisible=false;this.defaultLabel=undefined;this.name=undefined;this.size=undefined;this.color=undefined;this.lazy=false}connectedCallback(){this.waitUntilVisible(this.el,"50px",(()=>{this.isVisible=true;this.loadIcon()}))}disconnectedCallback(){if(this.io){this.io.disconnect();this.io=undefined}}waitUntilVisible(t,i,s){if(this.lazy&&typeof window!=="undefined"&&window.IntersectionObserver){const n=this.io=new window.IntersectionObserver((t=>{if(t[0].isIntersecting){n.disconnect();this.io=undefined;s()}}),{rootMargin:i});n.observe(t)}else{s()}}loadIcon(){if(this.isVisible){const t=c(this);if(t){p(t).then((t=>this.svgContent=t))}}if(!this.defaultLabel){const t=h(this.name);if(t){this.defaultLabel=t.replace("ios-","").replace("md-","").replace(/\-/g," ")}}}render(){const t={};if(this.color){t["--color"]=`var(--color-${this.color})`}return s(n,{role:"img",style:t},this.svgContent?s("div",{class:"icon-inner",innerHTML:this.svgContent}):s("div",{class:"icon-inner"}))}static get assetsDirs(){return["icons"]}get el(){return e(this)}static get watchers(){return{name:["loadIcon"]}}};g.style=m;const x=":host{display:block;--color:var(--color-primary)}:host true-text-base{--line-height:20px;--text-color:var(--color)}";const w=class{constructor(t){i(this,t);this.weight="regular";this.color=undefined;this.maxLines=undefined}render(){return s("true-text-base",{size:"s",weight:this.weight,maxLines:this.maxLines,color:this.color},s("slot",null))}};w.style=x;export{g as true_icon,w as true_subtext};
//# sourceMappingURL=p-346042f4.entry.js.map