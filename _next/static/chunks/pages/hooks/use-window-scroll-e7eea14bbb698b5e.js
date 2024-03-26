(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[93130],{93337:function(n,o,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-window-scroll",function(){return e(2050)}])},2050:function(n,o,e){"use strict";e.r(o),e.d(o,{default:function(){return w}});var t=e(52322),r=e(45392),i=e(2784),c=e(93010),Text=e(8582),l=e(17115),s=e(46928);let u=`
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
`,d={type:"code",code:u,component:function(){let[n,o]=(0,s.b)();return i.createElement(c.Z,{justify:"center"},i.createElement(Text.x,null,"Scroll position x: ",n.x,", y: ",n.y),i.createElement(l.z,{onClick:()=>o({y:0})},"Scroll to top"))}};var f=e(79016),p=e(33638);let a=(0,f.A)(p.us.useWindowScroll);function m(n){let o={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...n.components},{Demo:e}=o;return e||function(n,o){throw Error("Expected "+(o?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"use-window-scroll"})," returns current scroll position and a function to scroll smoothly to given position:"]}),"\n",(0,t.jsx)(e,{data:d}),"\n",(0,t.jsx)(o.h2,{id:"definition",children:"Definition"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"function useWindowScroll(): readonly [\n  { x: number; y: number },\n  (position: { x?: number; y?: number }) => void,\n];\n"})})]})}function w(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(a,{...n,children:(0,t.jsx)(m,{...n})})}},46928:function(n,o,e){"use strict";e.d(o,{b:function(){return l}});var t=e(2784),r=e(65695);function i(){return"undefined"!=typeof window?{x:window.pageXOffset,y:window.pageYOffset}:{x:0,y:0}}function c({x:n,y:o}){if("undefined"!=typeof window){let e={behavior:"smooth"};"number"==typeof n&&(e.left=n),"number"==typeof o&&(e.top=o),window.scrollTo(e)}}function l(){let[n,o]=(0,t.useState)({x:0,y:0});return(0,r.s)("scroll",()=>o(i())),(0,r.s)("resize",()=>o(i())),(0,t.useEffect)(()=>{o(i())},[]),[n,c]}}},function(n){n.O(0,[57938,17454,47747,49774,92888,40179],function(){return n(n.s=93337)}),_N_E=n.O()}]);