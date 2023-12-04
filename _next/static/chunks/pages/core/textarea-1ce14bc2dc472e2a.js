(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[705],{93693:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(54764).Z)("at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},3849:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/textarea",function(){return r(70767)}])},70767:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return j}});var n=r(24246),a=r(71670),i=r(3916),o=r(30289),l=r(27378),u=r(59655),s=r(77481);let c=`
import { Textarea } from '@mantine/core';


function Demo() {
  return (
    <Textarea
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
`,d={type:"configurator",component:function(e){return l.createElement(u.g,{...e,placeholder:"Input placeholder"})},code:c,centered:!0,maxWidth:340,controls:s.pc},p=`
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

`,m={type:"code",code:p,component:function(){return l.createElement(l.Fragment,null,l.createElement(u.g,{placeholder:"Autosize with no rows limit",label:"Autosize with no rows limit",autosize:!0,minRows:2}),l.createElement(u.g,{label:"Autosize with 4 rows max",placeholder:"Autosize with 4 rows max",autosize:!0,minRows:2,maxRows:4,mt:"md"}))},maxWidth:340,centered:!0},h=`
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
`,f={type:"code",component:function(){return l.createElement(l.Fragment,null,l.createElement(u.g,{label:"Boolean error",placeholder:"Boolean error",error:!0}),l.createElement(u.g,{mt:"md",label:"With error message",placeholder:"With error message",error:"Invalid name"}))},maxWidth:340,centered:!0,code:h};var x=r(56589);let b=`
import { Textarea } from '@mantine/core';

function Demo() {
  return <Textarea disabled/>;
}
`,g={type:"code",code:b,component:function(){return l.createElement(x.x,{maw:320,mx:"auto"},l.createElement(u.g,{label:"Disabled",placeholder:"Your comment",disabled:!0}))}};var y=r(71078),w=r(93693),v=r(76475);let z=`
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
`,V={type:"styles-api",data:v.g,component:function(e){return l.createElement(u.g,{label:"Label",placeholder:"Textarea",description:"Description",error:"Error",withAsterisk:!0,leftSection:l.createElement(w.Z,{style:{width:(0,y.h)(18),height:(0,y.h)(18)}}),autosize:!0,...e})},code:z,centered:!0,maxWidth:340},T=(0,i.A)(o.us.Textarea);function E(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components},{Demo:r,GetElementRef:i,InputAccessibility:o,InputFeatures:l,StylesApiSelectors:u}=t;return r||S("Demo",!0),i||S("GetElementRef",!0),o||S("InputAccessibility",!0),l||S("InputFeatures",!0),u||S("StylesApiSelectors",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(l,{component:"Textarea",element:"textarea"}),"\n",(0,n.jsx)(r,{data:d}),"\n",(0,n.jsx)(t.h2,{id:"autosize",children:"Autosize"}),"\n",(0,n.jsxs)(t.p,{children:["Autosize textarea uses ",(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/react-textarea-autosize",children:"react-textarea-autosize"})," package.\nTextarea height will grow until maxRows are reached or indefinitely if maxRows not set."]}),"\n",(0,n.jsx)(r,{data:m}),"\n",(0,n.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Textarea } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState('');\n  return (\n    <Textarea\n      value={value}\n      onChange={(event) => setValue(event.currentTarget.value)}\n    />\n  );\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"error-state",children:"Error state"}),"\n",(0,n.jsx)(r,{data:f}),"\n",(0,n.jsx)(t.h2,{id:"disabled-state",children:"Disabled state"}),"\n",(0,n.jsx)(r,{data:g}),"\n",(0,n.jsx)(u,{component:"Textarea"}),"\n",(0,n.jsx)(r,{data:V}),"\n",(0,n.jsx)(i,{component:"Textarea",refType:"textarea"}),"\n",(0,n.jsx)(o,{component:"Textarea"})]})}function j(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(T,{...e,children:(0,n.jsx)(E,{...e})})}function S(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},77481:function(e,t,r){"use strict";r.d(t,{Mt:function(){return n},nW:function(){return a},pc:function(){return i}});let n=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],a=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],i=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]},59655:function(e,t,r){"use strict";r.d(t,{g:function(){return j}});var n=r(27378);function a(){return(a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var i=n.useLayoutEffect,o=function(e){var t=n.useRef(e);return i(function(){t.current=e}),t},l=function(e,t){if("function"==typeof e){e(t);return}e.current=t},u=function(e,t){var r=(0,n.useRef)();return(0,n.useCallback)(function(n){e.current=n,r.current&&l(r.current,null),r.current=t,t&&l(t,n)},[t])},s={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0"},c=function(e){Object.keys(s).forEach(function(t){e.style.setProperty(t,s[t],"important")})},d=null,p=function(e,t){var r=e.scrollHeight;return"border-box"===t.sizingStyle.boxSizing?r+t.borderSize:r-t.paddingSize},m=function(){},h=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak"],f=!!document.documentElement.currentStyle,x=function(e){var t=window.getComputedStyle(e);if(null===t)return null;var r=h.reduce(function(e,r){return e[r]=t[r],e},{}),n=r.boxSizing;if(""===n)return null;f&&"border-box"===n&&(r.width=parseFloat(r.width)+parseFloat(r.borderRightWidth)+parseFloat(r.borderLeftWidth)+parseFloat(r.paddingRight)+parseFloat(r.paddingLeft)+"px");var a=parseFloat(r.paddingBottom)+parseFloat(r.paddingTop),i=parseFloat(r.borderBottomWidth)+parseFloat(r.borderTopWidth);return{sizingStyle:r,paddingSize:a,borderSize:i}};function b(e,t,r){var a=o(r);n.useLayoutEffect(function(){var r=function(e){return a.current(e)};if(e)return e.addEventListener(t,r),function(){return e.removeEventListener(t,r)}},[])}var g=function(e){b(window,"resize",e)},y=function(e){b(document.fonts,"loadingdone",e)},w=["cacheMeasurements","maxRows","minRows","onChange","onHeightChange"],v=n.forwardRef(function(e,t){var r=e.cacheMeasurements,i=e.maxRows,o=e.minRows,l=e.onChange,s=void 0===l?m:l,h=e.onHeightChange,f=void 0===h?m:h,b=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,w),v=void 0!==b.value,z=n.useRef(null),V=u(z,t),T=n.useRef(0),E=n.useRef(),j=function(){var e,t,n,a,l,u,s,m,h,b,g,y=z.current,w=r&&E.current?E.current:x(y);if(w){E.current=w;var v=(e=y.value||y.placeholder||"x",void 0===(t=o)&&(t=1),void 0===(n=i)&&(n=1/0),d||((d=document.createElement("textarea")).setAttribute("tabindex","-1"),d.setAttribute("aria-hidden","true"),c(d)),null===d.parentNode&&document.body.appendChild(d),a=w.paddingSize,l=w.borderSize,s=(u=w.sizingStyle).boxSizing,Object.keys(u).forEach(function(e){d.style[e]=u[e]}),c(d),d.value=e,m=p(d,w),d.value=e,m=p(d,w),d.value="x",b=(h=d.scrollHeight-a)*t,"border-box"===s&&(b=b+a+l),m=Math.max(b,m),g=h*n,"border-box"===s&&(g=g+a+l),[m=Math.min(g,m),h]),V=v[0],j=v[1];T.current!==V&&(T.current=V,y.style.setProperty("height",V+"px","important"),f(V,{rowHeight:j}))}};return n.useLayoutEffect(j),g(j),y(j),n.createElement("textarea",a({},b,{onChange:function(e){v||j(),s(e)},ref:V}))}),z=r(96739),V=r(20410),T=r(23163);let E={},j=(0,V.d)((e,t)=>{let{autosize:r,maxRows:a,minRows:i,__staticSelector:o,...l}=(0,z.w)("Textarea",E,e);return n.createElement(T.M,{component:r?v:"textarea",ref:t,...l,__staticSelector:o||"Textarea",multiline:!0,"data-no-overflow":r&&void 0===a||void 0,...r?{maxRows:a,minRows:i}:{}})});j.classes=T.M.classes,j.displayName="@mantine/core/Textarea"}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=3849)}),_N_E=e.O()}]);