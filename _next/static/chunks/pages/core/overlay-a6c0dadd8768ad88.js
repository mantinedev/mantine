(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[783],{647:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/overlay",function(){return o(41463)}])},41463:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return y}});var n=o(24246),r=o(71670),a=o(3916),i=o(30289),c=o(27378),l=o(1146),s=o(7118),m=o(8671);let d=`
import { useState } from 'react';
import { Button, Overlay, AspectRatio } from '@mantine/core';

function Demo() {
  const [visible, setVisible] = useState(true);
  return (
    <>
      <AspectRatio ratio={16 / 9} maw={400} mx="auto">
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
`,u={type:"code",code:d,component:function(){let[e,t]=(0,c.useState)(!0);return c.createElement(c.Fragment,null,c.createElement(l.o,{ratio:16/9,maw:400,mx:"auto"},c.createElement("img",{src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png",alt:"Demo"}),e&&c.createElement(s.a,{color:"#000",backgroundOpacity:.85})),c.createElement(m.z,{onClick:()=>t(e=>!e),fullWidth:!0,maw:200,mx:"auto",mt:"xl"},"Toggle overlay"))}},p=`
import { useState } from 'react';
import { Button, Overlay, AspectRatio } from '@mantine/core';

function Demo() {
  const [visible, setVisible] = useState(true);
  return (
    <>
      <AspectRatio ratio={16 / 9} maw={400} mx="auto">
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
`,g={type:"code",code:p,component:function(){let[e,t]=(0,c.useState)(!0);return c.createElement(c.Fragment,null,c.createElement(l.o,{ratio:16/9,maw:400,mx:"auto"},c.createElement("img",{src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png",alt:"Demo"}),e&&c.createElement(s.a,{gradient:"linear-gradient(145deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 100%)",opacity:.85})),c.createElement(m.z,{onClick:()=>t(e=>!e),fullWidth:!0,maw:200,mx:"auto",mt:"xl"},"Toggle overlay"))}},h=`
import { Overlay, AspectRatio } from '@mantine/core';

function Demo() {
  return (
    <AspectRatio ratio={16 / 9} maw={400} mx="auto">
      <img
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png"
        alt="Demo"
      />
      <Overlay color="#000" backgroundOpacity={0.35}{{props}} />
    </AspectRatio>
  );
}
`,b={type:"configurator",component:function(e){return c.createElement(l.o,{ratio:16/9,maw:400,mx:"auto"},c.createElement("img",{src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png",alt:"Demo"}),c.createElement(s.a,{color:"#000",backgroundOpacity:.35,...e}))},code:h,controls:[{type:"number",prop:"blur",initialValue:15,libraryValue:null,min:0,max:30}]},x=(0,a.A)(i.us.Overlay);function f(e){let t={a:"a",code:"code",h2:"h2",p:"p",...(0,r.a)(),...e.components},{Demo:o,Polymorphic:a}=t;return o||v("Demo",!0),a||v("Polymorphic",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Overlay"})," takes 100% of width and height of parent container or viewport if ",(0,n.jsx)(t.code,{children:"fixed"})," prop is set.\nSet ",(0,n.jsx)(t.code,{children:"color"})," and ",(0,n.jsx)(t.code,{children:"backgroundOpacity"})," props to change ",(0,n.jsx)(t.code,{children:"Overlay"})," background-color. Note that ",(0,n.jsx)(t.code,{children:"backgroundOpacity"})," prop\ndoes not change CSS opacity property, it changes background-color. For example, if you set\n",(0,n.jsx)(t.code,{children:'color="#000"'})," and ",(0,n.jsx)(t.code,{children:"backgroundOpacity={0.85}"})," background-color will be ",(0,n.jsx)(t.code,{children:"rgba(0, 0, 0, 0.85)"}),":"]}),"\n",(0,n.jsx)(o,{data:u}),"\n",(0,n.jsx)(t.h2,{id:"gradient",children:"Gradient"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"gradient"})," prop to use background-image instead of background-color. When ",(0,n.jsx)(t.code,{children:"gradient"})," prop is set,\n",(0,n.jsx)(t.code,{children:"color"})," and ",(0,n.jsx)(t.code,{children:"backgroundOpacity"})," props are ignored."]}),"\n",(0,n.jsx)(o,{data:g}),"\n",(0,n.jsx)(t.h2,{id:"blur",children:"Blur"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"blur"})," prop to add ",(0,n.jsx)(t.code,{children:"backdrop-filter: blur({value})"})," styles.\nNote that ",(0,n.jsx)(t.code,{children:"backdrop-filter"})," ",(0,n.jsx)(t.a,{href:"https://caniuse.com/css-backdrop-filter",children:"is not supported in all browsers"}),"."]}),"\n",(0,n.jsx)(o,{data:b}),"\n",(0,n.jsx)(a,{defaultElement:"div",changeToElement:"a",component:"Overlay",withNext:!0})]})}function y(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(x,{...e,children:(0,n.jsx)(f,{...e})})}function v(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1146:function(e,t,o){"use strict";o.d(t,{o:function(){return u}});var n=o(27378),r=o(83453),a=o(96739),i=o(6231),c=o(56589),l=o(20410),s={root:"m-71ac47fc"};let m={},d=(0,r.Z)((e,{ratio:t})=>({root:{"--ar-ratio":t?.toString()}})),u=(0,l.d)((e,t)=>{let o=(0,a.w)("AspectRatio",m,e),{classNames:r,className:l,style:u,styles:p,unstyled:g,vars:h,ratio:b,...x}=o,f=(0,i.y)({name:"AspectRatio",classes:s,props:o,className:l,style:u,classNames:r,styles:p,unstyled:g,vars:h,varsResolver:d});return n.createElement(c.x,{ref:t,...f("root"),...x})});u.classes=s,u.displayName="@mantine/core/AspectRatio"}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=647)}),_N_E=e.O()}]);