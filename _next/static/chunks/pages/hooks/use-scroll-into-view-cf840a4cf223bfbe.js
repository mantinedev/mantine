(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[64634],{83575:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-scroll-into-view",function(){return t(1311)}])},1311:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return T}});var r=t(52322),l=t(45392),o=t(93010),i=t(39629),c=t(28559),s=t(8582),a=t(2784),d=t(98045),u=t(65695);let h=e=>e<.5?2*e*e:-1+(4-2*e)*e,f=({axis:e,target:n,parent:t,alignment:r,offset:l,isList:o})=>{if(!n||!t&&"undefined"==typeof document)return 0;let i=!!t,c=(t||document.body).getBoundingClientRect(),s=n.getBoundingClientRect(),a=e=>s[e]-c[e];if("y"===e){let e=a("top");if(0===e)return 0;if("start"===r){let n=e-l;return n<=s.height*(o?0:1)||!o?n:0}let n=i?c.height:window.innerHeight;if("end"===r){let t=e+l-n+s.height;return t>=-s.height*(o?0:1)||!o?t:0}return"center"===r?e-n/2+s.height/2:0}if("x"===e){let e=a("left");if(0===e)return 0;if("start"===r){let n=e-l;return n<=s.width||!o?n:0}let n=i?c.width:window.innerWidth;if("end"===r){let t=e+l-n+s.width;return t>=-s.width||!o?t:0}if("center"===r)return e-n/2+s.width/2}return 0},x=({axis:e,parent:n})=>{if(!n&&"undefined"==typeof document)return 0;let t="y"===e?"scrollTop":"scrollLeft";if(n)return n[t];let{body:r,documentElement:l}=document;return r[t]+l[t]},m=({axis:e,parent:n,distance:t})=>{if(!n&&"undefined"==typeof document)return;let r="y"===e?"scrollTop":"scrollLeft";if(n)n[r]=t;else{let{body:e,documentElement:n}=document;e[r]=t,n[r]=t}};function p({duration:e=1250,axis:n="y",onScrollFinish:t,easing:r=h,offset:l=0,cancelable:o=!0,isList:i=!1}={}){let c=(0,a.useRef)(0),s=(0,a.useRef)(0),p=(0,a.useRef)(!1),g=(0,a.useRef)(null),j=(0,a.useRef)(null),w=(0,d.J)(),b=()=>{c.current&&cancelAnimationFrame(c.current)},y=(0,a.useCallback)(({alignment:o="start"}={})=>{p.current=!1,c.current&&b();let a=x({parent:g.current,axis:n})??0,d=f({parent:g.current,target:j.current,axis:n,alignment:o,offset:l,isList:i})-(g.current?0:a);!function l(){0===s.current&&(s.current=performance.now());let o=performance.now()-s.current,i=w||0===e?1:o/e,u=a+d*r(i);m({parent:g.current,axis:n,distance:u}),!p.current&&i<1?c.current=requestAnimationFrame(l):("function"==typeof t&&t(),s.current=0,c.current=0,b())}()},[n,e,r,i,l,t,w]),v=()=>{o&&(p.current=!0)};return(0,u.s)("wheel",v,{passive:!0}),(0,u.s)("touchmove",v,{passive:!0}),(0,a.useEffect)(()=>b,[]),{scrollableRef:g,targetRef:j,scrollIntoView:y,cancel:b}}let g={type:"code",code:`
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
`,component:function(){let{scrollIntoView:e,targetRef:n}=p({offset:60});return(0,r.jsxs)(o.Z,{justify:"center",children:[(0,r.jsx)(i.z,{onClick:()=>e({alignment:"center"}),children:"Scroll to target"}),(0,r.jsx)(c.x,{style:{width:"100%",height:"50vh",backgroundColor:"var(--mantine-color-blue-light)"}}),(0,r.jsx)(s.x,{ref:n,children:"Hello there"})]})}};var j=t(1198);let w={type:"code",code:`
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
`,component:function(){let{scrollIntoView:e,targetRef:n,scrollableRef:t}=p();return(0,r.jsxs)(o.Z,{justify:"center",children:[(0,r.jsx)(j.X,{ref:t,h:300,style:{overflowY:"scroll",flex:1},children:(0,r.jsx)(c.x,{pt:260,pb:450,children:(0,r.jsx)(j.X,{ref:n,p:"xl",style:{backgroundColor:"var(--mantine-color-blue-light)",width:"100%"},children:(0,r.jsx)(s.x,{children:"Scroll me into view"})})})}),(0,r.jsx)(i.z,{onClick:()=>e(),children:"Scroll to target"})]})}},b={type:"code",code:`
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
`,component:function(){let{scrollIntoView:e,targetRef:n,scrollableRef:t}=p({axis:"x"});return(0,r.jsxs)(o.Z,{justify:"center",children:[(0,r.jsx)(j.X,{ref:t,h:150,w:300,style:{overflowX:"scroll"},children:(0,r.jsx)(c.x,{pl:260,pr:450,children:(0,r.jsx)(j.X,{ref:n,p:"md",style:{backgroundColor:"var(--mantine-color-blue-light)",width:"max-content"},children:(0,r.jsx)(s.x,{children:"Scroll me into view"})})})}),(0,r.jsx)(i.z,{onClick:()=>e(),children:"Scroll to target"})]})}};var y=t(54078),v=t(15019);let I=(0,y.A)(v.us.useScrollIntoView);function S(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"use-scroll-into-view"})," handles scroll behavior for any scrollable element. Basic usage works the same way as ",(0,r.jsx)(n.code,{children:"element.scrollIntoView()"}),".\nHook adjusts scrolling animation with respect to the ",(0,r.jsx)(n.code,{children:"reduced-motion"})," user preference."]}),"\n",(0,r.jsx)(t,{data:g}),"\n",(0,r.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,r.jsx)(n.p,{children:"The hook is configured with settings object:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"onScrollFinish"})," – function that will be called after scroll animation"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"easing"})," – custom math easing function"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"duration"})," - duration of scroll animation in milliseconds"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"axis"})," - axis of scroll"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"cancelable"})," - indicator if animation may be interrupted by user scrolling"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"offset"})," - additional distance between the nearest edge and element"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"isList"})," - indicator that prevents content jumping in scrolling lists with multiple targets, for example Select, Carousel"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Hook returns an object with:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"scrollIntoView"})," – function that starts scroll animation"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"cancel"})," – function that stops scroll animation"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"targetRef"})," - ref of target HTML node"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"scrollableRef"})," - ref of scrollable parent HTML element, if not used document element will be used"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Returned ",(0,r.jsx)(n.code,{children:"scrollIntoView"})," function accepts single optional argument ",(0,r.jsx)(n.code,{children:"alignment"})," - optional target element alignment relatively to parent based on current axis."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { useScrollIntoView } from '@mantine/hooks';\n\nconst { scrollIntoView } = useScrollIntoView();\n\nscrollIntoView({ alignment: 'center' });\n"})}),"\n",(0,r.jsx)(n.h2,{id:"easing",children:"Easing"}),"\n",(0,r.jsxs)(n.p,{children:["The hook accept custom ",(0,r.jsx)(n.code,{children:"easing"})," math function to control the flow of animation.\nIt takes ",(0,r.jsx)(n.code,{children:"t"})," argument, which is a number between ",(0,r.jsx)(n.code,{children:"0"})," and ",(0,r.jsx)(n.code,{children:"1"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Default easing is ",(0,r.jsx)(n.code,{children:"easeInOutQuad"})," - more info ",(0,r.jsx)(n.a,{href:"https://easings.net/#easeInOutQuad",children:"here"}),".\nYou can find other popular examples on ",(0,r.jsx)(n.a,{href:"https://easings.net/",children:"easings.net"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { useScrollIntoView } from '@mantine/hooks';\n\nuseScrollIntoView({\n  easing: (t) => (t < 0.5 ? 16 * t ** 5 : 1 - (-2 * t + 2) ** 5 / 2), // easeInOutQuint\n});\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parent-node",children:"Parent node"}),"\n",(0,r.jsx)(t,{data:w}),"\n",(0,r.jsx)(n.h2,{id:"scroll-x-axis",children:"Scroll X axis"}),"\n",(0,r.jsx)(t,{data:b}),"\n",(0,r.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"interface ScrollIntoViewAnimation {\n  /** target element alignment relatively to parent based on current axis */\n  alignment?: 'start' | 'end' | 'center';\n}\n\ninterface ScrollIntoViewParams {\n  /** callback fired after scroll */\n  onScrollFinish?: () => void;\n\n  /** duration of scroll in milliseconds */\n  duration?: number;\n\n  /** axis of scroll */\n  axis?: 'x' | 'y';\n\n  /** custom mathematical easing function */\n  easing?: (t: number) => number;\n\n  /** additional distance between nearest edge and element */\n  offset?: number;\n\n  /** indicator if animation may be interrupted by user scrolling */\n  cancelable?: boolean;\n\n  /** prevents content jumping in scrolling lists with multiple targets */\n  isList?: boolean;\n}\n\ninterface ScrollIntoViewReturnType<\n  Target extends HTMLElement,\n  Parent extends HTMLElement | null = null,\n> {\n  scrollableRef: React.MutableRefObject<Parent>;\n  targetRef: React.MutableRefObject<Target>;\n  scrollIntoView: (params?: ScrollIntoViewAnimation) => void;\n  cancel: () => void;\n}\n\nfunction useScrollIntoView<\n  Target extends HTMLElement,\n  Parent extends HTMLElement | null = null,\n>({\n  duration,\n  axis,\n  onScrollFinish,\n  easing,\n  offset,\n  cancelable,\n  isList,\n}?: ScrollIntoViewParams): ScrollIntoViewReturnType<Target, Parent>;\n"})})]})}function T(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(I,{...e,children:(0,r.jsx)(S,{...e})})}}},function(e){e.O(0,[61177,66748,61639,92888,49774,40179],function(){return e(e.s=83575)}),_N_E=e.O()}]);