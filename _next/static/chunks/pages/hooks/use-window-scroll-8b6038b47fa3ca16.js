(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[41557],{1405:(o,e,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-window-scroll",function(){return n(18421)}])},18421:(o,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>a});var t=n(31085),r=n(71184),i=n(56051),l=n(93065),s=n(52022),c=n(63319);let u={type:"code",code:`
import { useWindowScroll } from '@mantine/hooks';
import { Button, Text, Group } from '@mantine/core';

function Demo() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Group justify="center">
      <Text>
        Scroll position x: {scroll.x}, y: {scroll.y}
      </Text>
      <Button onClick={() => scrollTo({ y: 0 })}>Scroll to top</Button>
    </Group>
  );
}
`,component:function(){let[o,e]=(0,c.l)();return(0,t.jsxs)(i.Y,{justify:"center",children:[(0,t.jsxs)(l.E,{children:["Scroll position x: ",o.x,", y: ",o.y]}),(0,t.jsx)(s.$,{onClick:()=>e({y:0}),children:"Scroll to top"})]})}};var d=n(85954),p=n(38215);let f=(0,d.P)(p.XZ.useWindowScroll);function x(o){let e={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...o.components},{Demo:n}=e;return n||function(o,e){throw Error("Expected "+(e?"component":"object")+" `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"use-window-scroll"})," returns current scroll position and a function to scroll smoothly to given position:"]}),"\n",(0,t.jsx)(n,{data:u}),"\n",(0,t.jsx)(e.h2,{id:"definition",children:"Definition"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-tsx",children:"function useWindowScroll(): readonly [\n  { x: number; y: number },\n  (position: { x?: number; y?: number }) => void,\n];\n"})})]})}function a(){let o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(f,{...o,children:(0,t.jsx)(x,{...o})})}},63319:(o,e,n)=>{"use strict";n.d(e,{l:()=>s});var t=n(14041),r=n(93739);function i(){return"undefined"!=typeof window?{x:window.pageXOffset,y:window.pageYOffset}:{x:0,y:0}}function l({x:o,y:e}){if("undefined"!=typeof window){let n={behavior:"smooth"};"number"==typeof o&&(n.left=o),"number"==typeof e&&(n.top=e),window.scrollTo(n)}}function s(){let[o,e]=(0,t.useState)({x:0,y:0});return(0,r.M)("scroll",()=>e(i())),(0,r.M)("resize",()=>e(i())),(0,t.useEffect)(()=>{e(i())},[]),[o,l]}}},o=>{var e=e=>o(o.s=e);o.O(0,[67456,39699,68831,90636,46593,38792],()=>e(1405)),_N_E=o.O()}]);