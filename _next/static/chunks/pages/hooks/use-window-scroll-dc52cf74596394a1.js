(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3130],{50564:function(n,o,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-window-scroll",function(){return e(32266)}])},32266:function(n,o,e){"use strict";e.r(o),e.d(o,{default:function(){return w}});var t=e(24246),r=e(71670),i=e(3916),c=e(30289),l=e(27378),s=e(34642),u=e(22971),Text=e(26569),d=e(8671);let f=`
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
`,p={type:"code",code:f,component:function(){let[n,o]=(0,s.b)();return l.createElement(u.Z,{justify:"center"},l.createElement(Text.x,null,"Scroll position x: ",n.x,", y: ",n.y),l.createElement(d.z,{onClick:()=>o({y:0})},"Scroll to top"))}},a=(0,i.A)(c.us.useWindowScroll);function m(n){let o={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...n.components},{Demo:e}=o;return e||function(n,o){throw Error("Expected "+(o?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"use-window-scroll"})," returns current scroll position and a function to scroll smoothly to given position:"]}),"\n",(0,t.jsx)(e,{data:p}),"\n",(0,t.jsx)(o.h2,{id:"definition",children:"Definition"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"function useWindowScroll(): readonly [\n  { x: number; y: number },\n  (position: { x?: number; y?: number }) => void,\n];\n"})})]})}function w(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(a,{...n,children:(0,t.jsx)(m,{...n})})}},34642:function(n,o,e){"use strict";e.d(o,{b:function(){return l}});var t=e(27378),r=e(56617);function i(){return"undefined"!=typeof window?{x:window.pageXOffset,y:window.pageYOffset}:{x:0,y:0}}function c({x:n,y:o}){if("undefined"!=typeof window){let e={behavior:"smooth"};"number"==typeof n&&(e.left=n),"number"==typeof o&&(e.top=o),window.scrollTo(e)}}function l(){let[n,o]=(0,t.useState)({x:0,y:0});return(0,r.s)("scroll",()=>o(i())),(0,r.s)("resize",()=>o(i())),(0,t.useEffect)(()=>{o(i())},[]),[n,c]}}},function(n){n.O(0,[370,5819,2775,9774,2888,179],function(){return n(n.s=50564)}),_N_E=n.O()}]);