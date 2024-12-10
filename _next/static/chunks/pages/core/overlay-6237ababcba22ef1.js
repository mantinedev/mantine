(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[10783],{67838:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/overlay",function(){return o(25840)}])},25840:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return x}});var r=o(52322),n=o(45392),a=o(2784),i=o(98814),c=o(87170),s=o(39629);let l={type:"code",code:`
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
`,component:function(){let[e,t]=(0,a.useState)(!0);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i.o,{ratio:16/9,maw:400,mx:"auto",pos:"relative",children:[(0,r.jsx)("img",{src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png",alt:"Demo"}),e&&(0,r.jsx)(c.a,{color:"#000",backgroundOpacity:.85})]}),(0,r.jsx)(s.z,{onClick:()=>t(e=>!e),fullWidth:!0,maw:200,mx:"auto",mt:"xl",children:"Toggle overlay"})]})}},d={type:"code",code:`
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
`,component:function(){let[e,t]=(0,a.useState)(!0);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i.o,{ratio:16/9,maw:400,mx:"auto",pos:"relative",children:[(0,r.jsx)("img",{src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png",alt:"Demo"}),e&&(0,r.jsx)(c.a,{gradient:"linear-gradient(145deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 100%)",opacity:.85})]}),(0,r.jsx)(s.z,{onClick:()=>t(e=>!e),fullWidth:!0,maw:200,mx:"auto",mt:"xl",children:"Toggle overlay"})]})}},m={type:"configurator",component:function(e){return(0,r.jsxs)(i.o,{ratio:16/9,maw:400,mx:"auto",pos:"relative",children:[(0,r.jsx)("img",{src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png",alt:"Demo"}),(0,r.jsx)(c.a,{color:"#000",backgroundOpacity:.35,...e})]})},code:`
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
`,controls:[{type:"number",prop:"blur",initialValue:15,libraryValue:null,min:0,max:30}]};var u=o(25071),p=o(15019);let g=(0,u.A)(p.us.Overlay);function h(e){let t={a:"a",code:"code",h2:"h2",p:"p",...(0,n.a)(),...e.components},{Demo:o,Polymorphic:a}=t;return o||b("Demo",!0),a||b("Polymorphic",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Overlay"})," takes 100% of width and height of parent container or viewport if ",(0,r.jsx)(t.code,{children:"fixed"})," prop is set.\nSet ",(0,r.jsx)(t.code,{children:"color"})," and ",(0,r.jsx)(t.code,{children:"backgroundOpacity"})," props to change ",(0,r.jsx)(t.code,{children:"Overlay"})," background-color. Note that ",(0,r.jsx)(t.code,{children:"backgroundOpacity"})," prop\ndoes not change CSS opacity property, it changes background-color. For example, if you set\n",(0,r.jsx)(t.code,{children:'color="#000"'})," and ",(0,r.jsx)(t.code,{children:"backgroundOpacity={0.85}"})," background-color will be ",(0,r.jsx)(t.code,{children:"rgba(0, 0, 0, 0.85)"}),":"]}),"\n",(0,r.jsx)(o,{data:l}),"\n",(0,r.jsx)(t.h2,{id:"gradient",children:"Gradient"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"gradient"})," prop to use background-image instead of background-color. When ",(0,r.jsx)(t.code,{children:"gradient"})," prop is set,\n",(0,r.jsx)(t.code,{children:"color"})," and ",(0,r.jsx)(t.code,{children:"backgroundOpacity"})," props are ignored."]}),"\n",(0,r.jsx)(o,{data:d}),"\n",(0,r.jsx)(t.h2,{id:"blur",children:"Blur"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"blur"})," prop to add ",(0,r.jsx)(t.code,{children:"backdrop-filter: blur({value})"})," styles.\nNote that ",(0,r.jsx)(t.code,{children:"backdrop-filter"})," ",(0,r.jsx)(t.a,{href:"https://caniuse.com/css-backdrop-filter",children:"is not supported in all browsers"}),"."]}),"\n",(0,r.jsx)(o,{data:m}),"\n",(0,r.jsx)(a,{defaultElement:"div",changeToElement:"a",component:"Overlay",withNext:!0})]})}function x(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(g,{...e,children:(0,r.jsx)(h,{...e})})}function b(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},98814:function(e,t,o){"use strict";o.d(t,{o:function(){return u}});var r=o(52322);o(2784);var n=o(11200),a=o(38483),i=o(46690),c=o(28559),s=o(82027),l={root:"m_71ac47fc"};let d={},m=(0,n.Z)((e,{ratio:t})=>({root:{"--ar-ratio":t?.toString()}})),u=(0,s.d5)((e,t)=>{let o=(0,a.w)("AspectRatio",d,e),{classNames:n,className:s,style:u,styles:p,unstyled:g,vars:h,ratio:x,...b}=o,j=(0,i.y)({name:"AspectRatio",classes:l,props:o,className:s,style:u,classNames:n,styles:p,unstyled:g,vars:h,varsResolver:m});return(0,r.jsx)(c.x,{ref:t,...j("root"),...b})});u.classes=l,u.displayName="@mantine/core/AspectRatio"}},function(e){e.O(0,[61177,66748,11340,92888,49774,40179],function(){return e(e.s=67838)}),_N_E=e.O()}]);