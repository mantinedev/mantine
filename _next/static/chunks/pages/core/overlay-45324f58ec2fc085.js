(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[82608],{1798:(e,t,a)=>{"use strict";a.d(t,{A:()=>o});let o=(0,a(41495).A)("outline","license","License",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},6620:(e,t,a)=>{"use strict";a.d(t,{A:()=>o});let o=(0,a(41495).A)("outline","code","Code",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},6892:(e,t,a)=>{"use strict";a.d(t,{A:()=>o});let o=(0,a(41495).A)("outline","pencil","Pencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},24583:(e,t,a)=>{"use strict";a.d(t,{A:()=>o});let o=(0,a(41495).A)("outline","arrow-left","ArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},34891:(e,t,a)=>{"use strict";a.d(t,{A:()=>o});let o=(0,a(41495).A)("outline","adjustments","Adjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},37352:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>v});var o=a(6029),r=a(16285),s=a(55729),n=a(69898),i=a(70421),l=a(61087);let c={type:"code",code:`
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
`,component:function(){let[e,t]=(0,s.useState)(!0);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.g,{ratio:16/9,maw:400,mx:"auto",pos:"relative",children:[(0,o.jsx)("img",{src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png",alt:"Demo"}),e&&(0,o.jsx)(i.h,{color:"#000",backgroundOpacity:.85})]}),(0,o.jsx)(l.$,{onClick:()=>t(e=>!e),fullWidth:!0,maw:200,mx:"auto",mt:"xl",children:"Toggle overlay"})]})}},d={type:"code",code:`
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
`,component:function(){let[e,t]=(0,s.useState)(!0);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.g,{ratio:16/9,maw:400,mx:"auto",pos:"relative",children:[(0,o.jsx)("img",{src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png",alt:"Demo"}),e&&(0,o.jsx)(i.h,{gradient:"linear-gradient(145deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 100%)",opacity:.85})]}),(0,o.jsx)(l.$,{onClick:()=>t(e=>!e),fullWidth:!0,maw:200,mx:"auto",mt:"xl",children:"Toggle overlay"})]})}},p={type:"configurator",component:function(e){return(0,o.jsxs)(n.g,{ratio:16/9,maw:400,mx:"auto",pos:"relative",children:[(0,o.jsx)("img",{src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png",alt:"Demo"}),(0,o.jsx)(i.h,{color:"#000",backgroundOpacity:.35,...e})]})},code:`
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
`,controls:[{type:"number",prop:"blur",initialValue:15,libraryValue:null,min:0,max:30}]};var h=a(38547),g=a(5262);let u=(0,h.P)(g.XZ.Overlay);function m(e){let t={a:"a",code:"code",h2:"h2",p:"p",...(0,r.R)(),...e.components},{Demo:a,Polymorphic:s}=t;return a||y("Demo",!0),s||y("Polymorphic",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"Overlay"})," takes 100% of width and height of parent container or viewport if ",(0,o.jsx)(t.code,{children:"fixed"})," prop is set.\nSet ",(0,o.jsx)(t.code,{children:"color"})," and ",(0,o.jsx)(t.code,{children:"backgroundOpacity"})," props to change ",(0,o.jsx)(t.code,{children:"Overlay"})," background-color. Note that ",(0,o.jsx)(t.code,{children:"backgroundOpacity"})," prop\ndoes not change CSS opacity property, it changes background-color. For example, if you set\n",(0,o.jsx)(t.code,{children:'color="#000"'})," and ",(0,o.jsx)(t.code,{children:"backgroundOpacity={0.85}"})," background-color will be ",(0,o.jsx)(t.code,{children:"rgba(0, 0, 0, 0.85)"}),":"]}),"\n",(0,o.jsx)(a,{data:c}),"\n",(0,o.jsx)(t.h2,{id:"gradient",children:"Gradient"}),"\n",(0,o.jsxs)(t.p,{children:["Set ",(0,o.jsx)(t.code,{children:"gradient"})," prop to use background-image instead of background-color. When ",(0,o.jsx)(t.code,{children:"gradient"})," prop is set,\n",(0,o.jsx)(t.code,{children:"color"})," and ",(0,o.jsx)(t.code,{children:"backgroundOpacity"})," props are ignored."]}),"\n",(0,o.jsx)(a,{data:d}),"\n",(0,o.jsx)(t.h2,{id:"blur",children:"Blur"}),"\n",(0,o.jsxs)(t.p,{children:["Set ",(0,o.jsx)(t.code,{children:"blur"})," prop to add ",(0,o.jsx)(t.code,{children:"backdrop-filter: blur({value})"})," styles.\nNote that ",(0,o.jsx)(t.code,{children:"backdrop-filter"})," ",(0,o.jsx)(t.a,{href:"https://caniuse.com/css-backdrop-filter",children:"is not supported in all browsers"}),"."]}),"\n",(0,o.jsx)(a,{data:p}),"\n",(0,o.jsx)(s,{defaultElement:"div",changeToElement:"a",component:"Overlay",withNext:!0})]})}function v(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(u,{...e,children:(0,o.jsx)(m,{...e})})}function y(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},41949:(e,t,a)=>{"use strict";a.d(t,{A:()=>o});let o=(0,a(41495).A)("outline","calendar","Calendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},65433:(e,t,a)=>{"use strict";a.d(t,{A:()=>o});let o=(0,a(41495).A)("outline","switch-2","Switch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},69898:(e,t,a)=>{"use strict";a.d(t,{g:()=>p});var o=a(6029);a(55729);var r=a(33987),s=a(38919),n=a(15583),i=a(76320),l=a(8411),c={root:"m_71ac47fc"};let d=(0,r.V)((e,{ratio:t})=>({root:{"--ar-ratio":t?.toString()}})),p=(0,l.P9)((e,t)=>{let a=(0,s.Y)("AspectRatio",null,e),{classNames:r,className:l,style:p,styles:h,unstyled:g,vars:u,ratio:m,attributes:v,...y}=a,x=(0,n.I)({name:"AspectRatio",classes:c,props:a,className:l,style:p,classNames:r,styles:h,unstyled:g,attributes:v,vars:u,varsResolver:d});return(0,o.jsx)(i.a,{ref:t,...x("root"),...y})});p.classes=c,p.displayName="@mantine/core/AspectRatio"},76013:(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/overlay",function(){return a(37352)}])},84276:(e,t,a)=>{"use strict";a.d(t,{A:()=>o});let o=(0,a(41495).A)("outline","file-text","FileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},88992:(e,t,a)=>{"use strict";a.d(t,{A:()=>o});let o=(0,a(41495).A)("outline","arrow-right","ArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])}},e=>{e.O(0,[38547,90636,46593,38792],()=>e(e.s=76013)),_N_E=e.O()}]);