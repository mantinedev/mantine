(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[82608],{641:(e,t,o)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/overlay",function(){return o(69276)}])},69276:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>x});var r=o(31085),a=o(71184),n=o(14041),i=o(60543),c=o(51629),s=o(52022);let l={type:"code",code:`
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
`,component:function(){let[e,t]=(0,n.useState)(!0);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i.g,{ratio:16/9,maw:400,mx:"auto",pos:"relative",children:[(0,r.jsx)("img",{src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png",alt:"Demo"}),e&&(0,r.jsx)(c.h,{color:"#000",backgroundOpacity:.85})]}),(0,r.jsx)(s.$,{onClick:()=>t(e=>!e),fullWidth:!0,maw:200,mx:"auto",mt:"xl",children:"Toggle overlay"})]})}},d={type:"code",code:`
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
`,component:function(){let[e,t]=(0,n.useState)(!0);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i.g,{ratio:16/9,maw:400,mx:"auto",pos:"relative",children:[(0,r.jsx)("img",{src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png",alt:"Demo"}),e&&(0,r.jsx)(c.h,{gradient:"linear-gradient(145deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 100%)",opacity:.85})]}),(0,r.jsx)(s.$,{onClick:()=>t(e=>!e),fullWidth:!0,maw:200,mx:"auto",mt:"xl",children:"Toggle overlay"})]})}},m={type:"configurator",component:function(e){return(0,r.jsxs)(i.g,{ratio:16/9,maw:400,mx:"auto",pos:"relative",children:[(0,r.jsx)("img",{src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png",alt:"Demo"}),(0,r.jsx)(c.h,{color:"#000",backgroundOpacity:.35,...e})]})},code:`
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
`,controls:[{type:"number",prop:"blur",initialValue:15,libraryValue:null,min:0,max:30}]};var p=o(85954),u=o(38215);let g=(0,p.P)(u.XZ.Overlay);function h(e){let t={a:"a",code:"code",h2:"h2",p:"p",...(0,a.R)(),...e.components},{Demo:o,Polymorphic:n}=t;return o||b("Demo",!0),n||b("Polymorphic",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Overlay"})," takes 100% of width and height of parent container or viewport if ",(0,r.jsx)(t.code,{children:"fixed"})," prop is set.\nSet ",(0,r.jsx)(t.code,{children:"color"})," and ",(0,r.jsx)(t.code,{children:"backgroundOpacity"})," props to change ",(0,r.jsx)(t.code,{children:"Overlay"})," background-color. Note that ",(0,r.jsx)(t.code,{children:"backgroundOpacity"})," prop\ndoes not change CSS opacity property, it changes background-color. For example, if you set\n",(0,r.jsx)(t.code,{children:'color="#000"'})," and ",(0,r.jsx)(t.code,{children:"backgroundOpacity={0.85}"})," background-color will be ",(0,r.jsx)(t.code,{children:"rgba(0, 0, 0, 0.85)"}),":"]}),"\n",(0,r.jsx)(o,{data:l}),"\n",(0,r.jsx)(t.h2,{id:"gradient",children:"Gradient"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"gradient"})," prop to use background-image instead of background-color. When ",(0,r.jsx)(t.code,{children:"gradient"})," prop is set,\n",(0,r.jsx)(t.code,{children:"color"})," and ",(0,r.jsx)(t.code,{children:"backgroundOpacity"})," props are ignored."]}),"\n",(0,r.jsx)(o,{data:d}),"\n",(0,r.jsx)(t.h2,{id:"blur",children:"Blur"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"blur"})," prop to add ",(0,r.jsx)(t.code,{children:"backdrop-filter: blur({value})"})," styles.\nNote that ",(0,r.jsx)(t.code,{children:"backdrop-filter"})," ",(0,r.jsx)(t.a,{href:"https://caniuse.com/css-backdrop-filter",children:"is not supported in all browsers"}),"."]}),"\n",(0,r.jsx)(o,{data:m}),"\n",(0,r.jsx)(n,{defaultElement:"div",changeToElement:"a",component:"Overlay",withNext:!0})]})}function x(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(g,{...e,children:(0,r.jsx)(h,{...e})})}function b(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},60543:(e,t,o)=>{"use strict";o.d(t,{g:()=>p});var r=o(31085);o(14041);var a=o(7098),n=o(29686),i=o(69564),c=o(34056),s=o(6754),l={root:"m_71ac47fc"};let d={},m=(0,a.V)((e,{ratio:t})=>({root:{"--ar-ratio":t?.toString()}})),p=(0,s.P9)((e,t)=>{let o=(0,n.Y)("AspectRatio",d,e),{classNames:a,className:s,style:p,styles:u,unstyled:g,vars:h,ratio:x,...b}=o,j=(0,i.I)({name:"AspectRatio",classes:l,props:o,className:s,style:p,classNames:a,styles:u,unstyled:g,vars:h,varsResolver:m});return(0,r.jsx)(c.a,{ref:t,...j("root"),...b})});p.classes=l,p.displayName="@mantine/core/AspectRatio"}},e=>{var t=t=>e(e.s=t);e.O(0,[67456,39699,68831,90636,46593,38792],()=>t(641)),_N_E=e.O()}]);