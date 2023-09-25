(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[705],{33507:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},80656:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/textarea",function(){return r(21901)}])},21901:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return D}});var n=r(85893),a=r(11151),o=r(19905),i=r(9904),l=r(67294),s=r(97590),u=r(88005),c=Object.defineProperty,d=Object.defineProperties,p=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,g=(e,t,r)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,y=(e,t)=>{for(var r in t||(t={}))f.call(t,r)&&g(e,r,t[r]);if(h)for(var r of h(t))m.call(t,r)&&g(e,r,t[r]);return e},b=(e,t)=>d(e,p(t));let v=`
import { Textarea } from '@mantine/core';


function Demo() {
  return (
    <Textarea
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
`,x={type:"configurator",component:function(e){return l.createElement(s.g,b(y({},e),{placeholder:"Input placeholder"}))},code:v,centered:!0,maxWidth:340,controls:u.pc},w=`
import { Textarea } from '@mantine/core';

function Demo() {
  return (
    <>
      <Textarea
        placeholder="Autosize with no rows limit"
        label="Autosize with no rows limit"
        autosize
        minRows={2}
      />

      <Textarea
        label="Autosize with 4 rows max"
        placeholder="Autosize with 4 rows max"
        autosize
        minRows={2}
        maxRows={4}
      />
    </>
  );
}

`,j={type:"code",code:w,component:function(){return l.createElement(l.Fragment,null,l.createElement(s.g,{placeholder:"Autosize with no rows limit",label:"Autosize with no rows limit",autosize:!0,minRows:2}),l.createElement(s.g,{label:"Autosize with 4 rows max",placeholder:"Autosize with 4 rows max",autosize:!0,minRows:2,maxRows:4,mt:"md"}))},maxWidth:340,centered:!0},z=`
import { Textarea } from '@mantine/core';

function Demo() {
  return (
    <>
      <Textarea label="Boolean error" placeholder="Boolean error" error />
      <Textarea
        mt="md"
        label="With error message"
        placeholder="With error message"
        error="Invalid name"
      />
    </>
  );
}
`,k={type:"code",component:function(){return l.createElement(l.Fragment,null,l.createElement(s.g,{label:"Boolean error",placeholder:"Boolean error",error:!0}),l.createElement(s.g,{mt:"md",label:"With error message",placeholder:"With error message",error:"Invalid name"}))},maxWidth:340,centered:!0,code:z};var O=r(81110);let E=`
import { Textarea } from '@mantine/core';

function Demo() {
  return <Textarea disabled/>;
}
`,M={type:"code",code:E,component:function(){return l.createElement(O.x,{maw:320,mx:"auto"},l.createElement(s.g,{label:"Disabled",placeholder:"Your comment",disabled:!0}))}};var V=r(72622),T=r(93693),S=r(36632),R=Object.defineProperty,I=Object.getOwnPropertySymbols,A=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable,W=(e,t,r)=>t in e?R(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Z=(e,t)=>{for(var r in t||(t={}))A.call(t,r)&&W(e,r,t[r]);if(I)for(var r of I(t))P.call(t,r)&&W(e,r,t[r]);return e};let _=`
import { IconAt } from '@tabler/icons-react';
import { Textarea, rem } from '@mantine/core';

function Demo() {
  return (
    <Textarea
      label="Label"
      placeholder="Textarea"
      description="Description"
      error="Error"
      withAsterisk
      leftSection={<IconAt style={{ width: rem(18), height: rem(18) }} />}
      autosize
      {{props}}
    />
  );
}
`,F={type:"styles-api",data:S.g,component:function(e){return l.createElement(s.g,Z({label:"Label",placeholder:"Textarea",description:"Description",error:"Error",withAsterisk:!0,leftSection:l.createElement(T.Z,{style:{width:(0,V.h)(18),height:(0,V.h)(18)}}),autosize:!0},e))},code:_,centered:!0,maxWidth:340},L=(0,o.A)(i.us.Textarea);function C(e){let t=Object.assign({h2:"h2",p:"p",a:"a",pre:"pre",code:"code"},(0,a.ah)(),e.components),{InputFeatures:r,Demo:o,StylesApiSelectors:i,GetElementRef:l,InputAccessibility:s}=t;return o||B("Demo",!0),l||B("GetElementRef",!0),s||B("InputAccessibility",!0),r||B("InputFeatures",!0),i||B("StylesApiSelectors",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(r,{component:"Textarea",element:"textarea"}),"\n",(0,n.jsx)(o,{data:x}),"\n",(0,n.jsx)(t.h2,{id:"autosize",children:"Autosize"}),"\n",(0,n.jsxs)(t.p,{children:["Autosize textarea uses ",(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/react-textarea-autosize",children:"react-textarea-autosize"})," package.\nTextarea height will grow until maxRows are reached or indefinitely if maxRows not set."]}),"\n",(0,n.jsx)(o,{data:j}),"\n",(0,n.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Textarea } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState('');\n  return <Textarea value={value} onChange={(event) => setValue(event.currentTarget.value)} />;\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"error-state",children:"Error state"}),"\n",(0,n.jsx)(o,{data:k}),"\n",(0,n.jsx)(t.h2,{id:"disabled-state",children:"Disabled state"}),"\n",(0,n.jsx)(o,{data:M}),"\n",(0,n.jsx)(i,{component:"Textarea"}),"\n",(0,n.jsx)(o,{data:F}),"\n",(0,n.jsx)(l,{component:"Textarea",refType:"textarea"}),"\n",(0,n.jsx)(s,{component:"Textarea"})]})}var D=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(L,Object.assign({},e,{children:(0,n.jsx)(C,e)}))};function B(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},93693:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(54764).Z)("at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},97590:function(e,t,r){"use strict";r.d(t,{g:function(){return Z}});var n=r(67294);function a(){return(a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var o=n.useLayoutEffect,i=function(e){var t=n.useRef(e);return o(function(){t.current=e}),t},l=function(e,t){if("function"==typeof e){e(t);return}e.current=t},s=function(e,t){var r=(0,n.useRef)();return(0,n.useCallback)(function(n){e.current=n,r.current&&l(r.current,null),r.current=t,t&&l(t,n)},[t])},u={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0"},c=function(e){Object.keys(u).forEach(function(t){e.style.setProperty(t,u[t],"important")})},d=null,p=function(e,t){var r=e.scrollHeight;return"border-box"===t.sizingStyle.boxSizing?r+t.borderSize:r-t.paddingSize},h=function(){},f=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak"],m=!!document.documentElement.currentStyle,g=function(e){var t=window.getComputedStyle(e);if(null===t)return null;var r=f.reduce(function(e,r){return e[r]=t[r],e},{}),n=r.boxSizing;if(""===n)return null;m&&"border-box"===n&&(r.width=parseFloat(r.width)+parseFloat(r.borderRightWidth)+parseFloat(r.borderLeftWidth)+parseFloat(r.paddingRight)+parseFloat(r.paddingLeft)+"px");var a=parseFloat(r.paddingBottom)+parseFloat(r.paddingTop),o=parseFloat(r.borderBottomWidth)+parseFloat(r.borderTopWidth);return{sizingStyle:r,paddingSize:a,borderSize:o}};function y(e,t,r){var a=i(r);n.useLayoutEffect(function(){var r=function(e){return a.current(e)};if(e)return e.addEventListener(t,r),function(){return e.removeEventListener(t,r)}},[])}var b=function(e){y(window,"resize",e)},v=function(e){y(document.fonts,"loadingdone",e)},x=["cacheMeasurements","maxRows","minRows","onChange","onHeightChange"],w=n.forwardRef(function(e,t){var r=e.cacheMeasurements,o=e.maxRows,i=e.minRows,l=e.onChange,u=void 0===l?h:l,f=e.onHeightChange,m=void 0===f?h:f,y=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,x),w=void 0!==y.value,j=n.useRef(null),z=s(j,t),k=n.useRef(0),O=n.useRef(),E=function(){var e,t,n,a,l,s,u,h,f,y,b,v=j.current,x=r&&O.current?O.current:g(v);if(x){O.current=x;var w=(e=v.value||v.placeholder||"x",void 0===(t=i)&&(t=1),void 0===(n=o)&&(n=1/0),d||((d=document.createElement("textarea")).setAttribute("tabindex","-1"),d.setAttribute("aria-hidden","true"),c(d)),null===d.parentNode&&document.body.appendChild(d),a=x.paddingSize,l=x.borderSize,u=(s=x.sizingStyle).boxSizing,Object.keys(s).forEach(function(e){d.style[e]=s[e]}),c(d),d.value=e,h=p(d,x),d.value=e,h=p(d,x),d.value="x",y=(f=d.scrollHeight-a)*t,"border-box"===u&&(y=y+a+l),h=Math.max(y,h),b=f*n,"border-box"===u&&(b=b+a+l),[h=Math.min(b,h),f]),z=w[0],E=w[1];k.current!==z&&(k.current=z,v.style.setProperty("height",z+"px","important"),m(z,{rowHeight:E}))}};return n.useLayoutEffect(E),b(E),v(E),n.createElement("textarea",a({},y,{onChange:function(e){w||E(),u(e)},ref:z}))}),j=r(70097),z=r(3154),k=r(30370),O=Object.defineProperty,E=Object.defineProperties,M=Object.getOwnPropertyDescriptors,V=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable,R=(e,t,r)=>t in e?O(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,I=(e,t)=>{for(var r in t||(t={}))T.call(t,r)&&R(e,r,t[r]);if(V)for(var r of V(t))S.call(t,r)&&R(e,r,t[r]);return e},A=(e,t)=>E(e,M(t)),P=(e,t)=>{var r={};for(var n in e)T.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&V)for(var n of V(e))0>t.indexOf(n)&&S.call(e,n)&&(r[n]=e[n]);return r};let W={},Z=(0,z.d)((e,t)=>{let r=(0,k.w)("Textarea",W,e),{autosize:a,maxRows:o,minRows:i,__staticSelector:l}=r,s=P(r,["autosize","maxRows","minRows","__staticSelector"]);return n.createElement(j.M,I(A(I({component:a?w:"textarea",ref:t},s),{__staticSelector:l||"Textarea",multiline:!0,"data-no-overflow":a&&void 0===o||void 0}),a?{maxRows:o,minRows:i}:{}))});Z.classes=j.M.classes,Z.displayName="@mantine/core/Textarea"},88005:function(e,t,r){"use strict";r.d(t,{Mt:function(){return n},nW:function(){return a},pc:function(){return o}});let n=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],a=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],o=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]}},function(e){e.O(0,[8992,178,9774,2888,179],function(){return e(e.s=80656)}),_N_E=e.O()}]);