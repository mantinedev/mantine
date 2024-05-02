(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[93130],{93337:function(n,o,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-window-scroll",function(){return e(2050)}])},2050:function(n,o,e){"use strict";e.r(o),e.d(o,{default:function(){return a}});var t=e(52322),r=e(45392),i=e(93010),Text=e(8582),s=e(17115),c=e(46928);let l=`
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
`,u={type:"code",code:l,component:function(){let[n,o]=(0,c.b)();return(0,t.jsxs)(i.Z,{justify:"center",children:[(0,t.jsxs)(Text.x,{children:["Scroll position x: ",n.x,", y: ",n.y]}),(0,t.jsx)(s.z,{onClick:()=>o({y:0}),children:"Scroll to top"})]})}};var d=e(79016),f=e(33638);let p=(0,d.A)(f.us.useWindowScroll);function x(n){let o={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...n.components},{Demo:e}=o;return e||function(n,o){throw Error("Expected "+(o?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"use-window-scroll"})," returns current scroll position and a function to scroll smoothly to given position:"]}),"\n",(0,t.jsx)(e,{data:u}),"\n",(0,t.jsx)(o.h2,{id:"definition",children:"Definition"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"function useWindowScroll(): readonly [\n  { x: number; y: number },\n  (position: { x?: number; y?: number }) => void,\n];\n"})})]})}function a(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(p,{...n,children:(0,t.jsx)(x,{...n})})}},46928:function(n,o,e){"use strict";e.d(o,{b:function(){return c}});var t=e(2784),r=e(65695);function i(){return"undefined"!=typeof window?{x:window.pageXOffset,y:window.pageYOffset}:{x:0,y:0}}function s({x:n,y:o}){if("undefined"!=typeof window){let e={behavior:"smooth"};"number"==typeof n&&(e.left=n),"number"==typeof o&&(e.top=o),window.scrollTo(e)}}function c(){let[n,o]=(0,t.useState)({x:0,y:0});return(0,r.s)("scroll",()=>o(i())),(0,r.s)("resize",()=>o(i())),(0,t.useEffect)(()=>{o(i())},[]),[n,s]}}},function(n){n.O(0,[57938,17454,47747,49774,92888,40179],function(){return n(n.s=93337)}),_N_E=n.O()}]);