(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,o)=>{let n={};for(var r in e)t(n,r,{get:e[r],enumerable:!0});return o||t(n,Symbol.toStringTag,{value:"Module"}),n}])},67219,e=>{"use strict";var t=e.i(191788),o=e.i(171481);let n=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208.49,120.49a12,12,0,0,1-17,0L140,69V216a12,12,0,0,1-24,0V69L64.49,120.49a12,12,0,0,1-17-17l72-72a12,12,0,0,1,17,0l72,72A12,12,0,0,1,208.49,120.49Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M200,112H56l72-72Z",opacity:"0.2"}),t.createElement("path",{d:"M205.66,106.34l-72-72a8,8,0,0,0-11.32,0l-72,72A8,8,0,0,0,56,120h64v96a8,8,0,0,0,16,0V120h64a8,8,0,0,0,5.66-13.66ZM75.31,104,128,51.31,180.69,104Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M207.39,115.06A8,8,0,0,1,200,120H136v96a8,8,0,0,1-16,0V120H56a8,8,0,0,1-5.66-13.66l72-72a8,8,0,0,1,11.32,0l72,72A8,8,0,0,1,207.39,115.06Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M204.24,116.24a6,6,0,0,1-8.48,0L134,54.49V216a6,6,0,0,1-12,0V54.49L60.24,116.24a6,6,0,0,1-8.48-8.48l72-72a6,6,0,0,1,8.48,0l72,72A6,6,0,0,1,204.24,116.24Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M205.66,117.66a8,8,0,0,1-11.32,0L136,59.31V216a8,8,0,0,1-16,0V59.31L61.66,117.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0l72,72A8,8,0,0,1,205.66,117.66Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M202.83,114.83a4,4,0,0,1-5.66,0L132,49.66V216a4,4,0,0,1-8,0V49.66L58.83,114.83a4,4,0,0,1-5.66-5.66l72-72a4,4,0,0,1,5.66,0l72,72A4,4,0,0,1,202.83,114.83Z"}))]]),r=t.forwardRef((e,r)=>t.createElement(o.default,{ref:r,...e,weights:n}));r.displayName="ArrowUpIcon",e.s(["ArrowUpIcon",0,r],67219)},994454,e=>{"use strict";var t=e.i(133613),o=e.i(191788);function n(){return{x:window.scrollX,y:window.scrollY}}function r({x:e,y:t}){{let o={behavior:"smooth"};"number"==typeof e&&(o.left=e),"number"==typeof t&&(o.top=t),window.scrollTo(o)}}e.s(["useWindowScroll",0,function(){let[e,l]=(0,o.useState)({x:0,y:0});return(0,t.useWindowEvent)("scroll",()=>l(n()),{passive:!0}),(0,t.useWindowEvent)("resize",()=>l(n()),{passive:!0}),(0,o.useEffect)(()=>{l(n())},[]),[e,r]}])},775712,e=>{"use strict";var t=e.i(391398),o=e.i(38856),n=e.i(648863),r=e.i(67219),l=e.i(976550),i=e.i(485108),a=e.i(883364),s=e.i(34515),c=e.i(994454);let u={type:"code",code:`
import { ArrowUpIcon } from '@phosphor-icons/react';
import { useWindowScroll } from '@mantine/hooks';
import { Affix, Button, Text, Transition } from '@mantine/core';

function Demo() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
      <Text ta="center">Affix is located at the bottom of the screen, scroll to see it</Text>
      <Affix position={{ bottom: 20, left: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              leftSection={<ArrowUpIcon size={16} />}
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
            >
              Scroll to top
            </Button>
          )}
        </Transition>
      </Affix>
    </>
  );
}
`,component:function(){let[e,o]=(0,c.useWindowScroll)();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.Text,{ta:"center",children:"Affix is located at the bottom of the screen, scroll to see it"}),(0,t.jsx)(l.Affix,{position:{bottom:20,left:20},children:(0,t.jsx)(s.Transition,{transition:"slide-up",mounted:e.y>0,children:e=>(0,t.jsx)(i.Button,{leftSection:(0,t.jsx)(r.ArrowUpIcon,{size:16}),style:e,onClick:()=>o({y:0}),children:"Scroll to top"})})})]})}};var d=(0,n.__exportAll)({usage:()=>u});e.i(603441);var p=e.i(62558);e.i(457450);var m=e.i(418026);let f=(0,p.Layout)(m.MDX_DATA.Affix);function h(e){let n={a:"a",code:"code",h2:"h2",p:"p",...(0,o.useMDXComponents)(),...e.components},{Demo:r}=n;return r||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Affix"})," renders a div element with a fixed position inside the ",(0,t.jsx)(n.a,{href:"/core/portal",children:"Portal"})," component.\nUse it to display elements fixed at any position on the screen, for example, scroll to top button:"]}),"\n",(0,t.jsx)(r,{data:d.usage})]})}e.s(["default",0,function(e={}){return(0,t.jsx)(f,{...e,children:(0,t.jsx)(h,{...e})})}],775712)},559898,(e,t,o)=>{let n="/core/affix";(window.__NEXT_P=window.__NEXT_P||[]).push([n,()=>e.r(775712)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([n])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);