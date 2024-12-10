(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[93130],{93337:function(o,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-window-scroll",function(){return e(2050)}])},2050:function(o,n,e){"use strict";e.r(n),e.d(n,{default:function(){return a}});var t=e(52322),r=e(45392),i=e(93010),c=e(8582),s=e(39629),l=e(46928);let u={type:"code",code:`
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
`,component:function(){let[o,n]=(0,l.b)();return(0,t.jsxs)(i.Z,{justify:"center",children:[(0,t.jsxs)(c.x,{children:["Scroll position x: ",o.x,", y: ",o.y]}),(0,t.jsx)(s.z,{onClick:()=>n({y:0}),children:"Scroll to top"})]})}};var d=e(25071),f=e(15019);let p=(0,d.A)(f.us.useWindowScroll);function x(o){let n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...o.components},{Demo:e}=n;return e||function(o,n){throw Error("Expected "+(n?"component":"object")+" `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"use-window-scroll"})," returns current scroll position and a function to scroll smoothly to given position:"]}),"\n",(0,t.jsx)(e,{data:u}),"\n",(0,t.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"function useWindowScroll(): readonly [\n  { x: number; y: number },\n  (position: { x?: number; y?: number }) => void,\n];\n"})})]})}function a(){let o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(p,{...o,children:(0,t.jsx)(x,{...o})})}},46928:function(o,n,e){"use strict";e.d(n,{b:function(){return s}});var t=e(2784),r=e(65695);function i(){return"undefined"!=typeof window?{x:window.pageXOffset,y:window.pageYOffset}:{x:0,y:0}}function c({x:o,y:n}){if("undefined"!=typeof window){let e={behavior:"smooth"};"number"==typeof o&&(e.left=o),"number"==typeof n&&(e.top=n),window.scrollTo(e)}}function s(){let[o,n]=(0,t.useState)({x:0,y:0});return(0,r.s)("scroll",()=>n(i())),(0,r.s)("resize",()=>n(i())),(0,t.useEffect)(()=>{n(i())},[]),[o,c]}}},function(o){o.O(0,[61177,66748,11340,92888,49774,40179],function(){return o(o.s=93337)}),_N_E=o.O()}]);