(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[872],{4244:function(e,t,r){Promise.resolve().then(r.bind(r,2177)),Promise.resolve().then(r.bind(r,4643))},2177:function(e,t,r){"use strict";let n,a;r.d(t,{Label:function(){return p}});var s=r(7027),i=r(8845),l=r(3101),o=i.forwardRef((e,t)=>(0,s.jsx)(l.WV.label,{...e,ref:t,onMouseDown:t=>{var r;t.target.closest("button, input, select, textarea")||(null===(r=e.onMouseDown)||void 0===r||r.call(e,t),!t.defaultPrevented&&t.detail>1&&t.preventDefault())}}));o.displayName="Label";let c=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,u=function(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=function e(t){var r,n,a="";if("string"==typeof t||"number"==typeof t)a+=t;else if("object"==typeof t){if(Array.isArray(t))for(r=0;r<t.length;r++)t[r]&&(n=e(t[r]))&&(a&&(a+=" "),a+=n);else for(r in t)t[r]&&(a&&(a+=" "),a+=r)}return a}(e))&&(n&&(n+=" "),n+=t);return n};var d=r(4361);let f=(n="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",e=>{var t;if((null==a?void 0:a.variants)==null)return u(n,null==e?void 0:e.class,null==e?void 0:e.className);let{variants:r,defaultVariants:s}=a,i=Object.keys(r).map(t=>{let n=null==e?void 0:e[t],a=null==s?void 0:s[t];if(null===n)return null;let i=c(n)||c(a);return r[t][i]}),l=e&&Object.entries(e).reduce((e,t)=>{let[r,n]=t;return void 0===n||(e[r]=n),e},{});return u(n,i,null==a?void 0:null===(t=a.compoundVariants)||void 0===t?void 0:t.reduce((e,t)=>{let{class:r,className:n,...a}=t;return Object.entries(a).every(e=>{let[t,r]=e;return Array.isArray(r)?r.includes({...s,...l}[t]):({...s,...l})[t]===r})?[...e,r,n]:e},[]),null==e?void 0:e.class,null==e?void 0:e.className)}),p=i.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,s.jsx)(o,{ref:t,className:(0,d.cn)(f(),r),...n})});p.displayName=o.displayName},4643:function(e,t,r){"use strict";r.d(t,{Switch:function(){return x}});var n=r(7027),a=r(8845),s=r(2412),i=r(9400),l=r(6332),o=r(8360),c=r(3080),u=r(3101),d="Switch",[f,p]=(0,l.b)(d),[v,b]=f(d),h=a.forwardRef((e,t)=>{let{__scopeSwitch:r,name:l,checked:c,defaultChecked:d,required:f,disabled:p,value:b="on",onCheckedChange:h,...m}=e,[k,w]=a.useState(null),x=(0,i.e)(t,e=>w(e)),N=a.useRef(!1),j=!k||!!k.closest("form"),[z=!1,E]=(0,o.T)({prop:c,defaultProp:d,onChange:h});return(0,n.jsxs)(v,{scope:r,checked:z,disabled:p,children:[(0,n.jsx)(u.WV.button,{type:"button",role:"switch","aria-checked":z,"aria-required":f,"data-state":g(z),"data-disabled":p?"":void 0,disabled:p,value:b,...m,ref:x,onClick:(0,s.M)(e.onClick,e=>{E(e=>!e),j&&(N.current=e.isPropagationStopped(),N.current||e.stopPropagation())})}),j&&(0,n.jsx)(y,{control:k,bubbles:!N.current,name:l,value:b,checked:z,required:f,disabled:p,style:{transform:"translateX(-100%)"}})]})});h.displayName=d;var m="SwitchThumb",k=a.forwardRef((e,t)=>{let{__scopeSwitch:r,...a}=e,s=b(m,r);return(0,n.jsx)(u.WV.span,{"data-state":g(s.checked),"data-disabled":s.disabled?"":void 0,...a,ref:t})});k.displayName=m;var y=e=>{let{control:t,checked:r,bubbles:s=!0,...i}=e,l=a.useRef(null),o=function(e){let t=a.useRef({value:e,previous:e});return a.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}(r),u=(0,c.t)(t);return a.useEffect(()=>{let e=l.current,t=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"checked").set;if(o!==r&&t){let n=new Event("click",{bubbles:s});t.call(e,r),e.dispatchEvent(n)}},[o,r,s]),(0,n.jsx)("input",{type:"checkbox","aria-hidden":!0,defaultChecked:r,...i,tabIndex:-1,ref:l,style:{...e.style,...u,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function g(e){return e?"checked":"unchecked"}var w=r(4361);let x=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(h,{className:(0,w.cn)("peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-zinc-900 data-[state=unchecked]:bg-zinc-200 dark:focus-visible:ring-zinc-300 dark:focus-visible:ring-offset-zinc-950 dark:data-[state=checked]:bg-zinc-50 dark:data-[state=unchecked]:bg-zinc-800",r),...a,ref:t,children:(0,n.jsx)(k,{className:(0,w.cn)("pointer-events-none block h-4 w-4 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0 dark:bg-zinc-950")})})});x.displayName=h.displayName},4361:function(e,t,r){"use strict";r.d(t,{cn:function(){return s}});var n=r(2372),a=r(1864);function s(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,a.m6)((0,n.W)(t))}}},function(e){e.O(0,[772,493,348,744],function(){return e(e.s=4244)}),_N_E=e.O()}]);