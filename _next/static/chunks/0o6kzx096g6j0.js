(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,o)=>{let r={};for(var a in e)t(r,a,{get:e[a],enumerable:!0});return o||t(r,Symbol.toStringTag,{value:"Module"}),r}])},207043,e=>{"use strict";var t=e.i(481178),o=e.i(44091),r=e.i(391466),a=e.i(275519),i=e.i(232471),n={root:"m_71ac47fc"},s=e.i(391398);let c=(0,t.createVarsResolver)((e,{ratio:t})=>({root:{"--ar-ratio":t?.toString()}})),l=(0,a.factory)(e=>{let t=(0,o.useProps)("AspectRatio",null,e),{classNames:a,className:l,style:d,styles:m,unstyled:u,vars:p,ratio:h,attributes:g,...x}=t;return(0,s.jsx)(i.Box,{...(0,r.useStyles)({name:"AspectRatio",classes:n,props:t,className:l,style:d,classNames:a,styles:m,unstyled:u,attributes:g,vars:p,varsResolver:c})("root"),...x})});l.classes=n,l.varsResolver=c,l.displayName="@mantine/core/AspectRatio",e.s(["AspectRatio",0,l],207043)},43661,e=>{"use strict";var t=e.i(391398),o=e.i(38856),r=e.i(648863),a=e.i(191788),i=e.i(207043),n=e.i(485108),s=e.i(476273);let c={type:"code",code:`
import { useState } from 'react';
import { Button, Overlay, AspectRatio } from '@mantine/core';

function Demo() {
  const [visible, setVisible] = useState(true);
  return (
    <>
      <AspectRatio ratio={16 / 9} maw={400} mx="auto" pos="relative">
        <img
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png"
          alt="Demo"
        />
        {visible && <Overlay color="#000" backgroundOpacity={0.85} />}
      </AspectRatio>
      <Button onClick={() => setVisible((v) => !v)} fullWidth maw={200} mx="auto" mt="xl">
        Toggle overlay
      </Button>
    </>
  );
}
`,component:function(){let[e,o]=(0,a.useState)(!0);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.AspectRatio,{ratio:16/9,maw:400,mx:"auto",pos:"relative",children:[(0,t.jsx)("img",{src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png",alt:"Demo"}),e&&(0,t.jsx)(s.Overlay,{color:"#000",backgroundOpacity:.85})]}),(0,t.jsx)(n.Button,{onClick:()=>o(e=>!e),fullWidth:!0,maw:200,mx:"auto",mt:"xl",children:"Toggle overlay"})]})}},l={type:"code",code:`
import { useState } from 'react';
import { Button, Overlay, AspectRatio } from '@mantine/core';

function Demo() {
  const [visible, setVisible] = useState(true);
  return (
    <>
      <AspectRatio ratio={16 / 9} maw={400} mx="auto" pos="relative">
        <img
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
          alt="Demo"
        />
        {visible && (
          <Overlay
            gradient="linear-gradient(145deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 100%)"
            opacity={0.85}
          />
        )}
      </AspectRatio>
      <Button onClick={() => setVisible((v) => !v)} fullWidth maw={200} mx="auto" mt="xl">
        Toggle overlay
      </Button>
    </>
  );
}
`,component:function(){let[e,o]=(0,a.useState)(!0);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.AspectRatio,{ratio:16/9,maw:400,mx:"auto",pos:"relative",children:[(0,t.jsx)("img",{src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png",alt:"Demo"}),e&&(0,t.jsx)(s.Overlay,{gradient:"linear-gradient(145deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 100%)",opacity:.85})]}),(0,t.jsx)(n.Button,{onClick:()=>o(e=>!e),fullWidth:!0,maw:200,mx:"auto",mt:"xl",children:"Toggle overlay"})]})}},d={type:"configurator",component:function(e){return(0,t.jsxs)(i.AspectRatio,{ratio:16/9,maw:400,mx:"auto",pos:"relative",children:[(0,t.jsx)("img",{src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png",alt:"Demo"}),(0,t.jsx)(s.Overlay,{color:"#000",backgroundOpacity:.35,...e})]})},code:`
import { Overlay, AspectRatio } from '@mantine/core';

function Demo() {
  return (
    <AspectRatio ratio={16 / 9} maw={400} mx="auto" pos="relative">
      <img
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png"
        alt="Demo"
      />
      <Overlay color="#000" backgroundOpacity={0.35}{{props}} />
    </AspectRatio>
  );
}
`,controls:[{type:"number",prop:"blur",initialValue:15,libraryValue:null,min:0,max:30}]};var m=(0,r.__exportAll)({blur:()=>d,gradient:()=>l,usage:()=>c});e.i(603441);var u=e.i(62558);e.i(457450);var p=e.i(418026);let h=(0,u.Layout)(p.MDX_DATA.Overlay);function g(e){let r={a:"a",code:"code",h2:"h2",p:"p",...(0,o.useMDXComponents)(),...e.components},{Demo:a,Polymorphic:i}=r;return a||x("Demo",!0),i||x("Polymorphic",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"Overlay"})," takes 100% of the width and height of the parent container or viewport if the ",(0,t.jsx)(r.code,{children:"fixed"})," prop is set.\nSet the ",(0,t.jsx)(r.code,{children:"color"})," and ",(0,t.jsx)(r.code,{children:"backgroundOpacity"})," props to change the ",(0,t.jsx)(r.code,{children:"Overlay"})," background-color. Note that the ",(0,t.jsx)(r.code,{children:"backgroundOpacity"})," prop\ndoes not change the CSS opacity property; it changes the background-color. For example, if you set\n",(0,t.jsx)(r.code,{children:'color="#000"'})," and ",(0,t.jsx)(r.code,{children:"backgroundOpacity={0.85}"}),", the background-color will be ",(0,t.jsx)(r.code,{children:"rgba(0, 0, 0, 0.85)"}),":"]}),"\n",(0,t.jsx)(a,{data:m.usage}),"\n",(0,t.jsx)(r.h2,{id:"gradient",children:"Gradient"}),"\n",(0,t.jsxs)(r.p,{children:["Set the ",(0,t.jsx)(r.code,{children:"gradient"})," prop to use background-image instead of background-color. When the ",(0,t.jsx)(r.code,{children:"gradient"})," prop is set,\nthe ",(0,t.jsx)(r.code,{children:"color"})," and ",(0,t.jsx)(r.code,{children:"backgroundOpacity"})," props are ignored."]}),"\n",(0,t.jsx)(a,{data:m.gradient}),"\n",(0,t.jsx)(r.h2,{id:"blur",children:"Blur"}),"\n",(0,t.jsxs)(r.p,{children:["Set the ",(0,t.jsx)(r.code,{children:"blur"})," prop to add ",(0,t.jsx)(r.code,{children:"backdrop-filter: blur({value})"})," styles.\nNote that ",(0,t.jsx)(r.code,{children:"backdrop-filter"})," ",(0,t.jsx)(r.a,{href:"https://caniuse.com/css-backdrop-filter",children:"is not supported in all browsers"}),"."]}),"\n",(0,t.jsx)(a,{data:m.blur}),"\n",(0,t.jsx)(i,{defaultElement:"div",changeToElement:"a",component:"Overlay",withNext:!0})]})}function x(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}e.s(["default",0,function(e={}){return(0,t.jsx)(h,{...e,children:(0,t.jsx)(g,{...e})})}],43661)},413279,(e,t,o)=>{let r="/core/overlay";(window.__NEXT_P=window.__NEXT_P||[]).push([r,()=>e.r(43661)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([r])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);