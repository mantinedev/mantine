(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[38896],{68413:(t,e,i)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/highlight",function(){return i(42015)}])},42015:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>u});var h=i(31085),n=i(71184),a=i(83731);let l={type:"configurator",component:function(t){return(0,h.jsx)(a.f,{maw:400,mx:"auto",...t})},code:`
import { Highlight } from '@mantine/core';

function Demo() {
  return (
    <Highlight{{props}}>
      {{children}}
    </Highlight>
  );
}
`,centered:!0,maxWidth:"100%",controls:[{prop:"color",type:"color",initialValue:"yellow",libraryValue:"yellow"},{prop:"highlight",type:"string",initialValue:"this",libraryValue:null},{prop:"children",type:"string",initialValue:"Highlight This, definitely THIS and also this!",libraryValue:null}]},r={type:"code",code:`
import { Highlight } from '@mantine/core';

function Demo() {
  return <Highlight highlight={['this', 'that']}>Highlight this and also that</Highlight>;
}
`,component:function(){return(0,h.jsx)(a.f,{highlight:["this","that"],children:"Highlight this and also that"})}},o={type:"code",code:`
import { Highlight } from '@mantine/core';

function Demo() {
  return (
    <Highlight
      ta="center"
      highlight={['highlighted', 'default']}
      highlightStyles={{
        backgroundImage:
          'linear-gradient(45deg, var(--mantine-color-cyan-5), var(--mantine-color-indigo-5))',
        fontWeight: 700,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
    >
      You can change styles of highlighted part if you do not like default styles
    </Highlight>
  );
}
`,component:function(){return(0,h.jsx)(a.f,{ta:"center",highlight:["highlighted","default"],highlightStyles:{backgroundImage:"linear-gradient(45deg, var(--mantine-color-cyan-5), var(--mantine-color-indigo-5))",fontWeight:700,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"You can change styles of highlighted part if you do not like default styles"})}},s={type:"code",code:`
import { Highlight } from '@mantine/core';

function Demo() {
  return (
    <Highlight
      component="a"
      href="https://mantine.dev"
      target="_blank"
      highlight="mantine"
      fw={500}
      c="var(--mantine-color-anchor)"
    >
      Mantine website
    </Highlight>
  );
}

`,centered:!0,component:function(){return(0,h.jsx)(a.f,{component:"a",href:"https://mantine.dev",target:"_blank",highlight:"mantine",fw:500,c:"var(--mantine-color-anchor)",children:"Mantine website"})}};var g=i(18675),d=i(20017);let c=(0,g.P)(d.XZ.Highlight);function p(t){let e={a:"a",code:"code",h2:"h2",p:"p",...(0,n.R)(),...t.components},{Demo:i}=e;return i||function(t,e){throw Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,h.jsx)(e.p,{children:"Use Highlight component to highlight a substring in a given string with a mark tag."}),"\n",(0,h.jsxs)(e.p,{children:["Pass the main string as children to Highlight component and string part that should be highlighted to ",(0,h.jsx)(e.code,{children:"highlight"})," prop.\nIf the main string does not include ",(0,h.jsx)(e.code,{children:"highlight"})," part, it will be ignored.\n",(0,h.jsx)(e.code,{children:"Highlight"})," ignores trailing whitespace and highlights all matched characters sequences."]}),"\n",(0,h.jsx)(i,{data:l}),"\n",(0,h.jsx)(e.h2,{id:"highlight-multiple-substrings",children:"Highlight multiple substrings"}),"\n",(0,h.jsx)(e.p,{children:"To highlight multiple substrings, provide an array of values:"}),"\n",(0,h.jsx)(i,{data:r}),"\n",(0,h.jsx)(e.h2,{id:"change-highlight-styles",children:"Change highlight styles"}),"\n",(0,h.jsxs)(e.p,{children:["Default ",(0,h.jsx)(e.a,{href:"/core/mark/",children:"Mark"})," styles can be overwritten with ",(0,h.jsx)(e.code,{children:"highlightStyles"})," prop, it accepts either a function with a subscription to theme\nor an object with styles:"]}),"\n",(0,h.jsx)(i,{data:o}),"\n",(0,h.jsx)(e.h2,{id:"text-props",children:"Text props"}),"\n",(0,h.jsxs)(e.p,{children:["Highlight is based on ",(0,h.jsx)(e.a,{href:"/core/text/",children:"Text"})," component, all its props are available:"]}),"\n",(0,h.jsx)(i,{data:s})]})}function u(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,h.jsx)(c,{...t,children:(0,h.jsx)(p,{...t})})}},87186:(t,e,i)=>{"use strict";i.d(e,{A:()=>h});var h=(0,i(73366).A)("outline","adjustments","IconAdjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},80502:(t,e,i)=>{"use strict";i.d(e,{A:()=>h});var h=(0,i(73366).A)("outline","arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},89689:(t,e,i)=>{"use strict";i.d(e,{A:()=>h});var h=(0,i(73366).A)("outline","arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},61584:(t,e,i)=>{"use strict";i.d(e,{A:()=>h});var h=(0,i(73366).A)("outline","calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},91133:(t,e,i)=>{"use strict";i.d(e,{A:()=>h});var h=(0,i(73366).A)("outline","code","IconCode",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},11749:(t,e,i)=>{"use strict";i.d(e,{A:()=>h});var h=(0,i(73366).A)("outline","file-text","IconFileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},89843:(t,e,i)=>{"use strict";i.d(e,{A:()=>h});var h=(0,i(73366).A)("outline","license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},9613:(t,e,i)=>{"use strict";i.d(e,{A:()=>h});var h=(0,i(73366).A)("outline","pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},55764:(t,e,i)=>{"use strict";i.d(e,{A:()=>h});var h=(0,i(73366).A)("outline","switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])}},t=>{var e=e=>t(t.s=e);t.O(0,[18675,90636,46593,38792],()=>e(68413)),_N_E=t.O()}]);