(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var n=Object.defineProperty;e.s(["__exportAll",0,(e,t)=>{let r={};for(var o in e)n(r,o,{get:e[o],enumerable:!0});return t||n(r,Symbol.toStringTag,{value:"Module"}),r}])},722757,e=>{"use strict";var n=e.i(391398),t=e.i(38856),r=e.i(648863),o=e.i(232471),l=e.i(485108),i=e.i(725695),c=e.i(470743),s=e.i(883364),a=e.i(133613),u=e.i(779861),d=e.i(191788);function h({duration:e=1250,axis:n="y",onScrollFinish:t,onScrollCancel:r,easing:o=f,offset:l=0,cancelable:i=!0,isList:c=!1}={}){let s=(0,d.useRef)(0),x=(0,d.useRef)(0),m=(0,d.useRef)(!1),[p,g]=(0,d.useState)(!1),j=(0,d.useRef)(null),w=(0,d.useRef)(null),b=(0,u.useReducedMotion)(),y=()=>{s.current&&(cancelAnimationFrame(s.current),s.current=0,g(!1))},v=(0,d.useCallback)(({alignment:i="start"}={})=>{m.current=!1,s.current&&y();let a=function({axis:e,parent:n}){if(!n&&"u"<typeof document)return 0;let t="y"===e?"scrollTop":"scrollLeft";if(n)return n[t];let{body:r,documentElement:o}=document;return r[t]+o[t]}({parent:j.current,axis:n})??0,u=function({axis:e,target:n,parent:t,alignment:r,offset:o,isList:l}){if(!n||!t&&"u"<typeof document)return 0;let i=!!t,c=(t||document.body).getBoundingClientRect(),s=n.getBoundingClientRect(),a=e=>s[e]-c[e];if("y"===e){let e=a("top");if(0===e)return 0;if("start"===r){let n=e-o;return n<=!l*s.height||!l?n:0}let n=i?c.height:window.innerHeight;if("end"===r){let t=e+o-n+s.height;return t>=-s.height*!l||!l?t:0}return"center"===r?e-n/2+s.height/2:0}if("x"===e){let e=a("left");if(0===e)return 0;if("start"===r){let n=e-o;return n<=s.width||!l?n:0}let n=i?c.width:window.innerWidth;if("end"===r){let t=e+o-n+s.width;return t>=-s.width||!l?t:0}if("center"===r)return e-n/2+s.width/2}return 0}({parent:j.current,target:w.current,axis:n,alignment:i,offset:l,isList:c})-(j.current?0:a);g(!0),!function l(){0===x.current&&(x.current=performance.now());let i=performance.now()-x.current,c=b||0===e?1:i/e,d=a+u*o(c);(function({axis:e,parent:n,distance:t}){if(!n&&"u"<typeof document)return;let r="y"===e?"scrollTop":"scrollLeft";if(n)n[r]=t;else{let{body:e,documentElement:n}=document;e[r]=t,n[r]=t}})({parent:j.current,axis:n,distance:d}),!m.current&&c<1?s.current=requestAnimationFrame(l):(m.current?"function"==typeof r&&r():"function"==typeof t&&t(),x.current=0,s.current=0,g(!1),y())}()},[n,e,o,c,l,t,r,b]),T=()=>{i&&(m.current=!0)};return(0,a.useWindowEvent)("wheel",T,{passive:!0}),(0,a.useWindowEvent)("touchmove",T,{passive:!0}),(0,d.useEffect)(()=>y,[]),{scrollableRef:j,targetRef:w,scrollIntoView:v,cancel:y,scrolling:p}}function f(e){return e<.5?2*e*e:-1+(4-2*e)*e}let x={type:"code",code:`
import { useScrollIntoView } from '@mantine/hooks';
import { Button, Text, Group, Paper, Box } from '@mantine/core';

function Demo() {
  const { scrollIntoView, targetRef, scrollableRef } = useScrollIntoView<
    HTMLDivElement,
    HTMLDivElement
  >({ axis: 'x' });

  return (
    <Group justify="center">
      <Paper ref={scrollableRef} h={150} w={300} style={{ overflowX: 'scroll' }}>
        <Box pl={260} pr={450}>
          <Paper
            ref={targetRef}
            p="md"
            style={{
              backgroundColor: 'var(--mantine-color-blue-light)',
              width: 'max-content',
            }}
          >
            <Text>Scroll me into view</Text>
          </Paper>
        </Box>
      </Paper>
      <Button onClick={() => scrollIntoView()}>Scroll to target</Button>
    </Group>
  );
}
`,component:function(){let{scrollIntoView:e,targetRef:t,scrollableRef:r}=h({axis:"x"});return(0,n.jsxs)(i.Group,{justify:"center",children:[(0,n.jsx)(c.Paper,{ref:r,h:150,w:300,style:{overflowX:"scroll"},children:(0,n.jsx)(o.Box,{pl:260,pr:450,children:(0,n.jsx)(c.Paper,{ref:t,p:"md",style:{backgroundColor:"var(--mantine-color-blue-light)",width:"max-content"},children:(0,n.jsx)(s.Text,{children:"Scroll me into view"})})})}),(0,n.jsx)(l.Button,{onClick:()=>e(),children:"Scroll to target"})]})}},m={type:"code",code:`
import { useScrollIntoView } from '@mantine/hooks';
import { Button, Text, Group, Paper, Box } from '@mantine/core';

function Demo() {
  const { scrollIntoView, targetRef, scrollableRef } = useScrollIntoView<
    HTMLDivElement,
    HTMLDivElement
  >();

  return (
    <Group justify="center">
      <Paper ref={scrollableRef} h={300} style={{ overflowY: 'scroll', flex: 1 }}>
        <Box pt={260} pb={450}>
          <Paper
            ref={targetRef}
            p="xl"
            style={{
              backgroundColor: 'var(--mantine-color-blue-light)',
              width: '100%',
            }}
          >
            <Text>Scroll me into view</Text>
          </Paper>
        </Box>
      </Paper>
      <Button onClick={() => scrollIntoView()}>Scroll to target</Button>
    </Group>
  );
}
`,component:function(){let{scrollIntoView:e,targetRef:t,scrollableRef:r}=h();return(0,n.jsxs)(i.Group,{justify:"center",children:[(0,n.jsx)(c.Paper,{ref:r,h:300,style:{overflowY:"scroll",flex:1},children:(0,n.jsx)(o.Box,{pt:260,pb:450,children:(0,n.jsx)(c.Paper,{ref:t,p:"xl",style:{backgroundColor:"var(--mantine-color-blue-light)",width:"100%"},children:(0,n.jsx)(s.Text,{children:"Scroll me into view"})})})}),(0,n.jsx)(l.Button,{onClick:()=>e(),children:"Scroll to target"})]})}},p={type:"code",code:`
import { useScrollIntoView } from '@mantine/hooks';
import { Button, Text, Group, Box } from '@mantine/core';

function Demo() {
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
    offset: 60,
  });

  return (
    <Group justify="center">
      <Button
        onClick={() =>
          scrollIntoView({
            alignment: 'center',
          })
        }
      >
        Scroll to target
      </Button>
      <Box
        style={{
          width: '100%',
          height: '50vh',
          backgroundColor: 'var(--mantine-color-blue-light)',
        }}
      />
      <Text ref={targetRef}>Hello there</Text>
    </Group>
  );
}
`,component:function(){let{scrollIntoView:e,targetRef:t}=h({offset:60});return(0,n.jsxs)(i.Group,{justify:"center",children:[(0,n.jsx)(l.Button,{onClick:()=>e({alignment:"center"}),children:"Scroll to target"}),(0,n.jsx)(o.Box,{style:{width:"100%",height:"50vh",backgroundColor:"var(--mantine-color-blue-light)"}}),(0,n.jsx)(s.Text,{ref:t,children:"Hello there"})]})}};var g=(0,r.__exportAll)({axis:()=>x,parent:()=>m,usage:()=>p});e.i(603441);var j=e.i(62558);e.i(457450);var w=e.i(418026);let b=(0,j.Layout)(w.MDX_DATA.useScrollIntoView);function y(e){let r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.useMDXComponents)(),...e.components},{Demo:o}=r;return o||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"use-scroll-into-view"})," hook handles scroll behavior for any scrollable element. Basic usage works the same way as ",(0,n.jsx)(r.code,{children:"element.scrollIntoView()"}),".\nThe hook adjusts the scrolling animation with respect to the ",(0,n.jsx)(r.code,{children:"reduced-motion"})," user preference."]}),"\n",(0,n.jsx)(o,{data:g.usage}),"\n",(0,n.jsx)(r.h2,{id:"api",children:"API"}),"\n",(0,n.jsx)(r.p,{children:"The hook is configured with a settings object:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"onScrollFinish"})," – function that will be called after the scroll animation"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"onScrollCancel"})," – function that will be called when the scroll animation is canceled by user interaction"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"easing"})," – custom math easing function"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"duration"})," - duration of the scroll animation in milliseconds"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"axis"})," - axis of the scroll"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"cancelable"})," - indicator if the animation may be interrupted by user scrolling"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"offset"})," - additional distance between the nearest edge and the element"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"isList"})," - indicator that prevents content jumping in scrolling lists with multiple targets, for example Select, Carousel"]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"The hook returns an object with:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"scrollIntoView"})," – function that starts the scroll animation"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"cancel"})," – function that stops the scroll animation"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"scrolling"})," – boolean indicating whether a scroll animation is in progress"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"targetRef"})," - ref of the target HTML node"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"scrollableRef"})," - ref of the scrollable parent HTML element; if not used, the document element will be used"]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["The returned ",(0,n.jsx)(r.code,{children:"scrollIntoView"})," function accepts a single optional argument ",(0,n.jsx)(r.code,{children:"alignment"})," - optional target element alignment relative to the parent based on the current axis."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-tsx",children:"import { useScrollIntoView } from '@mantine/hooks';\n\nconst { scrollIntoView } = useScrollIntoView();\n\nscrollIntoView({ alignment: 'center' });\n"})}),"\n",(0,n.jsx)(r.h2,{id:"easing",children:"Easing"}),"\n",(0,n.jsxs)(r.p,{children:["The hook accept custom ",(0,n.jsx)(r.code,{children:"easing"})," math function to control the flow of animation.\nIt takes ",(0,n.jsx)(r.code,{children:"t"})," argument, which is a number between ",(0,n.jsx)(r.code,{children:"0"})," and ",(0,n.jsx)(r.code,{children:"1"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["Default easing is ",(0,n.jsx)(r.code,{children:"easeInOutQuad"})," - more info ",(0,n.jsx)(r.a,{href:"https://easings.net/#easeInOutQuad",children:"here"}),".\nYou can find other popular examples on ",(0,n.jsx)(r.a,{href:"https://easings.net/",children:"easings.net"})]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-tsx",children:"import { useScrollIntoView } from '@mantine/hooks';\n\nuseScrollIntoView({\n  easing: (t) => (t < 0.5 ? 16 * t ** 5 : 1 - (-2 * t + 2) ** 5 / 2), // easeInOutQuint\n});\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parent-node",children:"Parent node"}),"\n",(0,n.jsx)(o,{data:g.parent}),"\n",(0,n.jsx)(r.h2,{id:"scroll-x-axis",children:"Scroll X axis"}),"\n",(0,n.jsx)(o,{data:g.axis}),"\n",(0,n.jsx)(r.h2,{id:"definition",children:"Definition"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-tsx",children:"interface UseScrollIntoViewAnimation {\n  /** Target element alignment relatively to parent based on current axis */\n  alignment?: 'start' | 'end' | 'center';\n}\n\ninterface UseScrollIntoViewOptions {\n  /** Callback fired after scroll */\n  onScrollFinish?: () => void;\n\n  /** Callback fired when scroll animation is canceled by user interaction */\n  onScrollCancel?: () => void;\n\n  /** Duration of scroll in milliseconds */\n  duration?: number;\n\n  /** Axis of scroll */\n  axis?: 'x' | 'y';\n\n  /** Custom mathematical easing function */\n  easing?: (t: number) => number;\n\n  /** Additional distance between nearest edge and element */\n  offset?: number;\n\n  /** Indicator if animation may be interrupted by user scrolling */\n  cancelable?: boolean;\n\n  /** Prevents content jumping in scrolling lists with multiple targets */\n  isList?: boolean;\n}\n\nexport interface UseScrollIntoViewReturnValue<\n  Target extends HTMLElement = any,\n  Parent extends HTMLElement | null = null,\n> {\n  scrollableRef: React.RefObject<Parent | null>;\n  targetRef: React.RefObject<Target | null>;\n  scrollIntoView: (params?: UseScrollIntoViewAnimation) => void;\n  cancel: () => void;\n  scrolling: boolean;\n}\n\nfunction useScrollIntoView<\n  Target extends HTMLElement = any,\n  Parent extends HTMLElement | null = null\n>(\n  options?: UseScrollIntoViewOptions,\n): UseScrollIntoViewReturnValue<Target, Parent>\n"})}),"\n",(0,n.jsx)(r.h2,{id:"exported-types",children:"Exported types"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"UseScrollIntoViewOptions"})," and ",(0,n.jsx)(r.code,{children:"UseScrollIntoViewReturnValue"})," types are exported from the ",(0,n.jsx)(r.code,{children:"@mantine/hooks"})," package;\nyou can import them in your application:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-tsx",children:"import type { UseScrollIntoViewOptions, UseScrollIntoViewReturnValue } from '@mantine/hooks';\n"})})]})}e.s(["default",0,function(e={}){return(0,n.jsx)(b,{...e,children:(0,n.jsx)(y,{...e})})}],722757)},2339,(e,n,t)=>{let r="/hooks/use-scroll-into-view";(window.__NEXT_P=window.__NEXT_P||[]).push([r,()=>e.r(722757)]),n.hot&&n.hot.dispose(function(){window.__NEXT_P.push([r])})},648761,e=>{e.v(n=>Promise.all(["static/chunks/22379_btw709h.js"].map(n=>e.l(n))).then(()=>n(493594)))},828805,e=>{e.v(n=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(n=>e.l(n))).then(()=>n(879466)))}]);