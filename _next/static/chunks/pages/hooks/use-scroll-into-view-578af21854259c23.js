(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[85285],{95199:(e,n,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-scroll-into-view",function(){return t(41886)}])},41886:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>k});var r=t(31085),l=t(71184),o=t(56051),i=t(52022),s=t(34056),c=t(93065),a=t(14041),d=t(56447),h=t(93739);function u({duration:e=1250,axis:n="y",onScrollFinish:t,easing:r=p,offset:l=0,cancelable:o=!0,isList:i=!1}={}){let s=(0,a.useRef)(0),c=(0,a.useRef)(0),f=(0,a.useRef)(!1),m=(0,a.useRef)(null),x=(0,a.useRef)(null),g=(0,d.I)(),v=()=>{s.current&&cancelAnimationFrame(s.current)},j=(0,a.useCallback)(({alignment:o="start"}={})=>{f.current=!1,s.current&&v();let a=function({axis:e,parent:n}){if(!n&&"undefined"==typeof document)return 0;let t="y"===e?"scrollTop":"scrollLeft";if(n)return n[t];let{body:r,documentElement:l}=document;return r[t]+l[t]}({parent:m.current,axis:n})??0,d=function({axis:e,target:n,parent:t,alignment:r,offset:l,isList:o}){if(!n||!t&&"undefined"==typeof document)return 0;let i=!!t,s=(t||document.body).getBoundingClientRect(),c=n.getBoundingClientRect(),a=e=>c[e]-s[e];if("y"===e){let e=a("top");if(0===e)return 0;if("start"===r){let n=e-l;return n<=c.height*(o?0:1)||!o?n:0}let n=i?s.height:window.innerHeight;if("end"===r){let t=e+l-n+c.height;return t>=-c.height*(o?0:1)||!o?t:0}return"center"===r?e-n/2+c.height/2:0}if("x"===e){let e=a("left");if(0===e)return 0;if("start"===r){let n=e-l;return n<=c.width||!o?n:0}let n=i?s.width:window.innerWidth;if("end"===r){let t=e+l-n+c.width;return t>=-c.width||!o?t:0}if("center"===r)return e-n/2+c.width/2}return 0}({parent:m.current,target:x.current,axis:n,alignment:o,offset:l,isList:i})-(m.current?0:a);!function l(){0===c.current&&(c.current=performance.now());let o=performance.now()-c.current,i=g||0===e?1:o/e,h=a+d*r(i);(function({axis:e,parent:n,distance:t}){if(!n&&"undefined"==typeof document)return;let r="y"===e?"scrollTop":"scrollLeft";if(n)n[r]=t;else{let{body:e,documentElement:n}=document;e[r]=t,n[r]=t}})({parent:m.current,axis:n,distance:h}),!f.current&&i<1?s.current=requestAnimationFrame(l):("function"==typeof t&&t(),c.current=0,s.current=0,v())}()},[n,e,r,i,l,t,g]),w=()=>{o&&(f.current=!0)};return(0,h.M)("wheel",w,{passive:!0}),(0,h.M)("touchmove",w,{passive:!0}),(0,a.useEffect)(()=>v,[]),{scrollableRef:m,targetRef:x,scrollIntoView:j,cancel:v}}function p(e){return e<.5?2*e*e:-1+(4-2*e)*e}let f={type:"code",code:`
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
`,component:function(){let{scrollIntoView:e,targetRef:n}=u({offset:60});return(0,r.jsxs)(o.Y,{justify:"center",children:[(0,r.jsx)(i.$,{onClick:()=>e({alignment:"center"}),children:"Scroll to target"}),(0,r.jsx)(s.a,{style:{width:"100%",height:"50vh",backgroundColor:"var(--mantine-color-blue-light)"}}),(0,r.jsx)(c.E,{ref:n,children:"Hello there"})]})}};var m=t(58120);let x={type:"code",code:`
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
`,component:function(){let{scrollIntoView:e,targetRef:n,scrollableRef:t}=u();return(0,r.jsxs)(o.Y,{justify:"center",children:[(0,r.jsx)(m.t,{ref:t,h:300,style:{overflowY:"scroll",flex:1},children:(0,r.jsx)(s.a,{pt:260,pb:450,children:(0,r.jsx)(m.t,{ref:n,p:"xl",style:{backgroundColor:"var(--mantine-color-blue-light)",width:"100%"},children:(0,r.jsx)(c.E,{children:"Scroll me into view"})})})}),(0,r.jsx)(i.$,{onClick:()=>e(),children:"Scroll to target"})]})}},g={type:"code",code:`
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
`,component:function(){let{scrollIntoView:e,targetRef:n,scrollableRef:t}=u({axis:"x"});return(0,r.jsxs)(o.Y,{justify:"center",children:[(0,r.jsx)(m.t,{ref:t,h:150,w:300,style:{overflowX:"scroll"},children:(0,r.jsx)(s.a,{pl:260,pr:450,children:(0,r.jsx)(m.t,{ref:n,p:"md",style:{backgroundColor:"var(--mantine-color-blue-light)",width:"max-content"},children:(0,r.jsx)(c.E,{children:"Scroll me into view"})})})}),(0,r.jsx)(i.$,{onClick:()=>e(),children:"Scroll to target"})]})}};var v=t(18675),j=t(20017);let w=(0,v.P)(j.XZ.useScrollIntoView);function y(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"use-scroll-into-view"})," handles scroll behavior for any scrollable element. Basic usage works the same way as ",(0,r.jsx)(n.code,{children:"element.scrollIntoView()"}),".\nHook adjusts scrolling animation with respect to the ",(0,r.jsx)(n.code,{children:"reduced-motion"})," user preference."]}),"\n",(0,r.jsx)(t,{data:f}),"\n",(0,r.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,r.jsx)(n.p,{children:"The hook is configured with settings object:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"onScrollFinish"})," – function that will be called after scroll animation"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"easing"})," – custom math easing function"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"duration"})," - duration of scroll animation in milliseconds"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"axis"})," - axis of scroll"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"cancelable"})," - indicator if animation may be interrupted by user scrolling"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"offset"})," - additional distance between the nearest edge and element"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"isList"})," - indicator that prevents content jumping in scrolling lists with multiple targets, for example Select, Carousel"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Hook returns an object with:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"scrollIntoView"})," – function that starts scroll animation"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"cancel"})," – function that stops scroll animation"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"targetRef"})," - ref of target HTML node"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"scrollableRef"})," - ref of scrollable parent HTML element, if not used document element will be used"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Returned ",(0,r.jsx)(n.code,{children:"scrollIntoView"})," function accepts single optional argument ",(0,r.jsx)(n.code,{children:"alignment"})," - optional target element alignment relatively to parent based on current axis."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { useScrollIntoView } from '@mantine/hooks';\n\nconst { scrollIntoView } = useScrollIntoView();\n\nscrollIntoView({ alignment: 'center' });\n"})}),"\n",(0,r.jsx)(n.h2,{id:"easing",children:"Easing"}),"\n",(0,r.jsxs)(n.p,{children:["The hook accept custom ",(0,r.jsx)(n.code,{children:"easing"})," math function to control the flow of animation.\nIt takes ",(0,r.jsx)(n.code,{children:"t"})," argument, which is a number between ",(0,r.jsx)(n.code,{children:"0"})," and ",(0,r.jsx)(n.code,{children:"1"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Default easing is ",(0,r.jsx)(n.code,{children:"easeInOutQuad"})," - more info ",(0,r.jsx)(n.a,{href:"https://easings.net/#easeInOutQuad",children:"here"}),".\nYou can find other popular examples on ",(0,r.jsx)(n.a,{href:"https://easings.net/",children:"easings.net"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { useScrollIntoView } from '@mantine/hooks';\n\nuseScrollIntoView({\n  easing: (t) => (t < 0.5 ? 16 * t ** 5 : 1 - (-2 * t + 2) ** 5 / 2), // easeInOutQuint\n});\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parent-node",children:"Parent node"}),"\n",(0,r.jsx)(t,{data:x}),"\n",(0,r.jsx)(n.h2,{id:"scroll-x-axis",children:"Scroll X axis"}),"\n",(0,r.jsx)(t,{data:g}),"\n",(0,r.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"interface UseScrollIntoViewAnimation {\n  /** Target element alignment relatively to parent based on current axis */\n  alignment?: 'start' | 'end' | 'center';\n}\n\ninterface UseScrollIntoViewOptions {\n  /** Callback fired after scroll */\n  onScrollFinish?: () => void;\n\n  /** Duration of scroll in milliseconds */\n  duration?: number;\n\n  /** Axis of scroll */\n  axis?: 'x' | 'y';\n\n  /** Custom mathematical easing function */\n  easing?: (t: number) => number;\n\n  /** Additional distance between nearest edge and element */\n  offset?: number;\n\n  /** Indicator if animation may be interrupted by user scrolling */\n  cancelable?: boolean;\n\n  /** Prevents content jumping in scrolling lists with multiple targets */\n  isList?: boolean;\n}\n\nexport interface UseScrollIntoViewReturnValue<\n  Target extends HTMLElement = any,\n  Parent extends HTMLElement | null = null,\n> {\n  scrollableRef: React.RefObject<Parent | null>;\n  targetRef: React.RefObject<Target | null>;\n  scrollIntoView: (params?: UseScrollIntoViewAnimation) => void;\n  cancel: () => void;\n}\n\nfunction useScrollIntoView<\n  Target extends HTMLElement = any,\n  Parent extends HTMLElement | null = null\n>(\n  options?: UseScrollIntoViewOptions,\n): UseScrollIntoViewReturnValue<Target, Parent>\n"})}),"\n",(0,r.jsx)(n.h2,{id:"exported-types",children:"Exported types"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"UseScrollIntoViewOptions"})," and ",(0,r.jsx)(n.code,{children:"UseScrollIntoViewReturnValue"})," types are exported from ",(0,r.jsx)(n.code,{children:"@mantine/hooks"})," package,\nyou can import them in your application:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import type { UseScrollIntoViewOptions, UseScrollIntoViewReturnValue } from '@mantine/hooks';\n"})})]})}function k(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(w,{...e,children:(0,r.jsx)(y,{...e})})}},87186:(e,n,t)=>{"use strict";t.d(n,{A:()=>r});var r=(0,t(73366).A)("outline","adjustments","IconAdjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},80502:(e,n,t)=>{"use strict";t.d(n,{A:()=>r});var r=(0,t(73366).A)("outline","arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},89689:(e,n,t)=>{"use strict";t.d(n,{A:()=>r});var r=(0,t(73366).A)("outline","arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},61584:(e,n,t)=>{"use strict";t.d(n,{A:()=>r});var r=(0,t(73366).A)("outline","calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},91133:(e,n,t)=>{"use strict";t.d(n,{A:()=>r});var r=(0,t(73366).A)("outline","code","IconCode",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},11749:(e,n,t)=>{"use strict";t.d(n,{A:()=>r});var r=(0,t(73366).A)("outline","file-text","IconFileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},89843:(e,n,t)=>{"use strict";t.d(n,{A:()=>r});var r=(0,t(73366).A)("outline","license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},9613:(e,n,t)=>{"use strict";t.d(n,{A:()=>r});var r=(0,t(73366).A)("outline","pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},55764:(e,n,t)=>{"use strict";t.d(n,{A:()=>r});var r=(0,t(73366).A)("outline","switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])}},e=>{var n=n=>e(e.s=n);e.O(0,[18675,90636,46593,38792],()=>n(95199)),_N_E=e.O()}]);