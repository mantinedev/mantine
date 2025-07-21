(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[39678],{99125:(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/textarea",function(){return r(46127)}])},46127:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>y});var a=r(31085),n=r(71184),i=r(71054);let o={type:"configurator",component:function(e){return(0,a.jsx)(i.T,{...e,placeholder:"Input placeholder"})},code:`
import { Textarea } from '@mantine/core';


function Demo() {
  return (
    <Textarea
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
`,centered:!0,maxWidth:340,controls:r(23232).$7},l={type:"code",code:`
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

`,component:function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.T,{placeholder:"Autosize with no rows limit",label:"Autosize with no rows limit",autosize:!0,minRows:2}),(0,a.jsx)(i.T,{label:"Autosize with 4 rows max",placeholder:"Autosize with 4 rows max",autosize:!0,minRows:2,maxRows:4,mt:"md"})]})},maxWidth:340,centered:!0},s={type:"code",code:`
import { Textarea } from '@mantine/core';

function Demo() {
  return <Textarea resize="vertical" label="Disabled" placeholder="Your comment" />;
}
`,component:function(){return(0,a.jsx)(i.T,{resize:"vertical",label:"Disabled",placeholder:"Your comment"})},centered:!0,maxWidth:340},d={type:"code",component:function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.T,{label:"Boolean error",placeholder:"Boolean error",error:!0}),(0,a.jsx)(i.T,{mt:"md",label:"With error message",placeholder:"With error message",error:"Invalid name"})]})},maxWidth:340,centered:!0,code:`
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
`},u={type:"code",code:`
import { Textarea } from '@mantine/core';

function Demo() {
  return <Textarea label="Disabled" placeholder="Your comment" disabled />;
}
`,component:function(){return(0,a.jsx)(i.T,{label:"Disabled",placeholder:"Your comment",disabled:!0})},centered:!0,maxWidth:340};var c=r(32653),p=r(68572);let h=`
import { IconAt } from '@tabler/icons-react';
import { Textarea } from '@mantine/core';

function Demo() {
  return (
    <Textarea
      label="Label"
      placeholder="Textarea"
      description="Description"
      error="Error"
      withAsterisk
      leftSection={<IconAt size={18} />}
      autosize
      {{props}}
    />
  );
}
`,m={type:"styles-api",data:p.f,component:function(e){return(0,a.jsx)(i.T,{label:"Label",placeholder:"Textarea",description:"Description",error:"Error",withAsterisk:!0,leftSection:(0,a.jsx)(c.A,{size:18}),autosize:!0,...e})},code:h,centered:!0,maxWidth:340};var v=r(18675),f=r(20017);let g=(0,v.P)(f.XZ.Textarea);function x(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.R)(),...e.components},{Demo:r,GetElementRef:i,InputAccessibility:c,InputFeatures:p,StylesApiSelectors:h}=t;return r||b("Demo",!0),i||b("GetElementRef",!0),c||b("InputAccessibility",!0),p||b("InputFeatures",!0),h||b("StylesApiSelectors",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(p,{component:"Textarea",element:"textarea"}),"\n",(0,a.jsx)(r,{data:o}),"\n",(0,a.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Textarea } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState('');\n  return (\n    <Textarea\n      value={value}\n      onChange={(event) => setValue(event.currentTarget.value)}\n    />\n  );\n}\n"})}),"\n",(0,a.jsx)(t.h2,{id:"autosize",children:"Autosize"}),"\n",(0,a.jsxs)(t.p,{children:["Autosize textarea uses ",(0,a.jsx)(t.a,{href:"https://www.npmjs.com/package/react-textarea-autosize",children:"react-textarea-autosize"})," package.\nTextarea height will grow until maxRows are reached or indefinitely if maxRows not set."]}),"\n",(0,a.jsx)(r,{data:l}),"\n",(0,a.jsx)(t.h2,{id:"enable-resize",children:"Enable resize"}),"\n",(0,a.jsxs)(t.p,{children:["By default, ",(0,a.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/resize",children:"resize"})," is ",(0,a.jsx)(t.code,{children:"none"}),",\nto enable it set ",(0,a.jsx)(t.code,{children:"resize"})," prop to ",(0,a.jsx)(t.code,{children:"vertical"})," or ",(0,a.jsx)(t.code,{children:"both"}),":"]}),"\n",(0,a.jsx)(r,{data:s}),"\n",(0,a.jsx)(t.h2,{id:"error-state",children:"Error state"}),"\n",(0,a.jsx)(r,{data:d}),"\n",(0,a.jsx)(t.h2,{id:"disabled-state",children:"Disabled state"}),"\n",(0,a.jsx)(r,{data:u}),"\n",(0,a.jsx)(h,{component:"Textarea"}),"\n",(0,a.jsx)(r,{data:m}),"\n",(0,a.jsx)(i,{component:"Textarea",refType:"textarea"}),"\n",(0,a.jsx)(c,{component:"Textarea"})]})}function y(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(g,{...e,children:(0,a.jsx)(x,{...e})})}function b(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},87186:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});var a=(0,r(73366).A)("outline","adjustments","IconAdjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},80502:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});var a=(0,r(73366).A)("outline","arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},89689:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});var a=(0,r(73366).A)("outline","arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},32653:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});var a=(0,r(73366).A)("outline","at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},61584:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});var a=(0,r(73366).A)("outline","calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},91133:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});var a=(0,r(73366).A)("outline","code","IconCode",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},11749:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});var a=(0,r(73366).A)("outline","file-text","IconFileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},89843:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});var a=(0,r(73366).A)("outline","license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},9613:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});var a=(0,r(73366).A)("outline","pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},55764:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});var a=(0,r(73366).A)("outline","switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},23232:(e,t,r)=>{"use strict";r.d(t,{$7:()=>i,l$:()=>a,wQ:()=>n});let a=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],n=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],i=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]},71054:(e,t,r)=>{"use strict";r.d(t,{T:()=>V});var a=r(31085);function n(){return(n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var i=r(14041),o=i.useLayoutEffect,l=function(e){var t=i.useRef(e);return o(function(){t.current=e}),t},s=function(e,t){if("function"==typeof e){e(t);return}e.current=t};let d=function(e,t){var r=(0,i.useRef)();return(0,i.useCallback)(function(a){e.current=a,r.current&&s(r.current,null),r.current=t,t&&s(t,a)},[t])};var u={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0",display:"block"},c=function(e){Object.keys(u).forEach(function(t){e.style.setProperty(t,u[t],"important")})},p=null,h=function(e,t){var r=e.scrollHeight;return"border-box"===t.sizingStyle.boxSizing?r+t.borderSize:r-t.paddingSize},m=function(){},v=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak","wordSpacing","scrollbarGutter"],f=!!document.documentElement.currentStyle,g=function(e){var t=window.getComputedStyle(e);if(null===t)return null;var r=v.reduce(function(e,r){return e[r]=t[r],e},{}),a=r.boxSizing;if(""===a)return null;f&&"border-box"===a&&(r.width=parseFloat(r.width)+parseFloat(r.borderRightWidth)+parseFloat(r.borderLeftWidth)+parseFloat(r.paddingRight)+parseFloat(r.paddingLeft)+"px");var n=parseFloat(r.paddingBottom)+parseFloat(r.paddingTop),i=parseFloat(r.borderBottomWidth)+parseFloat(r.borderTopWidth);return{sizingStyle:r,paddingSize:n,borderSize:i}};function x(e,t,r){var a=l(r);i.useLayoutEffect(function(){var r=function(e){return a.current(e)};if(e)return e.addEventListener(t,r),function(){return e.removeEventListener(t,r)}},[])}var y=function(e,t){x(document.body,"reset",function(r){e.current.form===r.target&&t(r)})},b=function(e){x(window,"resize",e)},w=function(e){x(document.fonts,"loadingdone",e)},k=["cacheMeasurements","maxRows","minRows","onChange","onHeightChange"],z=i.forwardRef(function(e,t){var r=e.cacheMeasurements,a=e.maxRows,o=e.minRows,l=e.onChange,s=void 0===l?m:l,u=e.onHeightChange,v=void 0===u?m:u,f=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,k),x=void 0!==f.value,z=i.useRef(null),j=d(z,t),A=i.useRef(0),T=i.useRef(),M=function(){var e,t,n,i,l,s,d,u,m,f,x,y=z.current,b=r&&T.current?T.current:g(y);if(b){T.current=b;var w=(e=y.value||y.placeholder||"x",void 0===(t=o)&&(t=1),void 0===(n=a)&&(n=1/0),p||((p=document.createElement("textarea")).setAttribute("tabindex","-1"),p.setAttribute("aria-hidden","true"),c(p)),null===p.parentNode&&document.body.appendChild(p),i=b.paddingSize,l=b.borderSize,d=(s=b.sizingStyle).boxSizing,Object.keys(s).forEach(function(e){p.style[e]=s[e]}),c(p),p.value=e,u=h(p,b),p.value=e,u=h(p,b),p.value="x",f=(m=p.scrollHeight-i)*t,"border-box"===d&&(f=f+i+l),u=Math.max(f,u),x=m*n,"border-box"===d&&(x=x+i+l),[u=Math.min(x,u),m]),k=w[0],j=w[1];A.current!==k&&(A.current=k,y.style.setProperty("height",k+"px","important"),v(k,{rowHeight:j}))}};return i.useLayoutEffect(M),y(z,function(){if(!x){var e=z.current.value;requestAnimationFrame(function(){var t=z.current;t&&e!==t.value&&M()})}}),b(M),w(M),i.createElement("textarea",n({},f,{onChange:function(e){x||M(),s(e)},ref:j}))}),j=r(24808),A=r(29686),T=r(6754),M=r(87059);let V=(0,T.P9)((e,t)=>{let{autosize:r,maxRows:n,minRows:i,__staticSelector:o,resize:l,...s}=(0,A.Y)("Textarea",null,e),d=r&&"test"!==(0,j._)();return(0,a.jsx)(M.O,{component:d?z:"textarea",ref:t,...s,__staticSelector:o||"Textarea",multiline:!0,"data-no-overflow":r&&void 0===n||void 0,__vars:{"--input-resize":l},...d?{maxRows:n,minRows:i}:{}})});V.classes=M.O.classes,V.displayName="@mantine/core/Textarea"}},e=>{var t=t=>e(e.s=t);e.O(0,[18675,90636,46593,38792],()=>t(99125)),_N_E=e.O()}]);