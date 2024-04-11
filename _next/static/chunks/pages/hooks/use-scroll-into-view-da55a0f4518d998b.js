(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[64634],{83575:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-scroll-into-view",function(){return t(1311)}])},1311:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return k}});var r=t(52322),l=t(45392),o=t(2784),i=t(93010),c=t(17115),s=t(28559),Text=t(8582),a=t(98045),u=t(65695);let d=e=>e<.5?2*e*e:-1+(4-2*e)*e,h=({axis:e,target:n,parent:t,alignment:r,offset:l,isList:o})=>{if(!n||!t&&"undefined"==typeof document)return 0;let i=!!t,c=t||document.body,s=c.getBoundingClientRect(),a=n.getBoundingClientRect(),u=e=>a[e]-s[e];if("y"===e){let e=u("top");if(0===e)return 0;if("start"===r){let n=e-l,t=n<=a.height*(o?0:1)||!o;return t?n:0}let n=i?s.height:window.innerHeight;if("end"===r){let t=e+l-n+a.height,r=t>=-a.height*(o?0:1)||!o;return r?t:0}return"center"===r?e-n/2+a.height/2:0}if("x"===e){let e=u("left");if(0===e)return 0;if("start"===r){let n=e-l,t=n<=a.width||!o;return t?n:0}let n=i?s.width:window.innerWidth;if("end"===r){let t=e+l-n+a.width,r=t>=-a.width||!o;return r?t:0}if("center"===r)return e-n/2+a.width/2}return 0},f=({axis:e,parent:n})=>{if(!n&&"undefined"==typeof document)return 0;let t="y"===e?"scrollTop":"scrollLeft";if(n)return n[t];let{body:r,documentElement:l}=document;return r[t]+l[t]},m=({axis:e,parent:n,distance:t})=>{if(!n&&"undefined"==typeof document)return;let r="y"===e?"scrollTop":"scrollLeft";if(n)n[r]=t;else{let{body:e,documentElement:n}=document;e[r]=t,n[r]=t}};function x({duration:e=1250,axis:n="y",onScrollFinish:t,easing:r=d,offset:l=0,cancelable:i=!0,isList:c=!1}={}){let s=(0,o.useRef)(0),x=(0,o.useRef)(0),p=(0,o.useRef)(!1),g=(0,o.useRef)(null),w=(0,o.useRef)(null),j=(0,a.J)(),b=()=>{s.current&&cancelAnimationFrame(s.current)},y=(0,o.useCallback)(({alignment:o="start"}={})=>{p.current=!1,s.current&&b();let i=f({parent:g.current,axis:n})??0,a=h({parent:g.current,target:w.current,axis:n,alignment:o,offset:l,isList:c})-(g.current?0:i);!function l(){0===x.current&&(x.current=performance.now());let o=performance.now(),c=o-x.current,u=j||0===e?1:c/e,d=i+a*r(u);m({parent:g.current,axis:n,distance:d}),!p.current&&u<1?s.current=requestAnimationFrame(l):("function"==typeof t&&t(),x.current=0,s.current=0,b())}()},[n,e,r,c,l,t,j]),v=()=>{i&&(p.current=!0)};return(0,u.s)("wheel",v,{passive:!0}),(0,u.s)("touchmove",v,{passive:!0}),(0,o.useEffect)(()=>b,[]),{scrollableRef:g,targetRef:w,scrollIntoView:y,cancel:b}}let p=`
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
`,g={type:"code",code:p,component:function(){let{scrollIntoView:e,targetRef:n}=x({offset:60});return o.createElement(i.Z,{justify:"center"},o.createElement(c.z,{onClick:()=>e({alignment:"center"})},"Scroll to target"),o.createElement(s.x,{style:{width:"100%",height:"50vh",backgroundColor:"var(--mantine-color-blue-light)"}}),o.createElement(Text.x,{ref:n},"Hello there"))}};var w=t(1198);let j=`
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
`,b={type:"code",code:j,component:function(){let{scrollIntoView:e,targetRef:n,scrollableRef:t}=x();return o.createElement(i.Z,{justify:"center"},o.createElement(w.X,{ref:t,h:300,style:{overflowY:"scroll",flex:1}},o.createElement(s.x,{pt:260,pb:450},o.createElement(w.X,{ref:n,p:"xl",style:{backgroundColor:"var(--mantine-color-blue-light)",width:"100%"}},o.createElement(Text.x,null,"Scroll me into view")))),o.createElement(c.z,{onClick:()=>e()},"Scroll to target"))}},y=`
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
`,v={type:"code",code:y,component:function(){let{scrollIntoView:e,targetRef:n,scrollableRef:t}=x({axis:"x"});return o.createElement(i.Z,{justify:"center"},o.createElement(w.X,{ref:t,h:150,w:300,style:{overflowX:"scroll"}},o.createElement(s.x,{pl:260,pr:450},o.createElement(w.X,{ref:n,p:"md",style:{backgroundColor:"var(--mantine-color-blue-light)",width:"max-content"}},o.createElement(Text.x,null,"Scroll me into view")))),o.createElement(c.z,{onClick:()=>e()},"Scroll to target"))}};var I=t(79016),E=t(33638);let S=(0,I.A)(E.us.useScrollIntoView);function T(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"use-scroll-into-view"})," handles scroll behavior for any scrollable element. Basic usage works the same way as ",(0,r.jsx)(n.code,{children:"element.scrollIntoView()"}),".\nHook adjusts scrolling animation with respect to the ",(0,r.jsx)(n.code,{children:"reduced-motion"})," user preference."]}),"\n",(0,r.jsx)(t,{data:g}),"\n",(0,r.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,r.jsx)(n.p,{children:"The hook is configured with settings object:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"onScrollFinish"})," – function that will be called after scroll animation"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"easing"})," – custom math easing function"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"duration"})," - duration of scroll animation in milliseconds"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"axis"})," - axis of scroll"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"cancelable"})," - indicator if animation may be interrupted by user scrolling"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"offset"})," - additional distance between the nearest edge and element"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"isList"})," - indicator that prevents content jumping in scrolling lists with multiple targets, for example Select, Carousel"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Hook returns an object with:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"scrollIntoView"})," – function that starts scroll animation"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"cancel"})," – function that stops scroll animation"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"targetRef"})," - ref of target HTML node"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"scrollableRef"})," - ref of scrollable parent HTML element, if not used document element will be used"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Returned ",(0,r.jsx)(n.code,{children:"scrollIntoView"})," function accepts single optional argument ",(0,r.jsx)(n.code,{children:"alignment"})," - optional target element alignment relatively to parent based on current axis."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { useScrollIntoView } from '@mantine/hooks';\n\nconst { scrollIntoView } = useScrollIntoView();\n\nscrollIntoView({ alignment: 'center' });\n"})}),"\n",(0,r.jsx)(n.h2,{id:"easing",children:"Easing"}),"\n",(0,r.jsxs)(n.p,{children:["The hook accept custom ",(0,r.jsx)(n.code,{children:"easing"})," math function to control the flow of animation.\nIt takes ",(0,r.jsx)(n.code,{children:"t"})," argument, which is a number between ",(0,r.jsx)(n.code,{children:"0"})," and ",(0,r.jsx)(n.code,{children:"1"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Default easing is ",(0,r.jsx)(n.code,{children:"easeInOutQuad"})," - more info ",(0,r.jsx)(n.a,{href:"https://easings.net/#easeInOutQuad",children:"here"}),".\nYou can find other popular examples on ",(0,r.jsx)(n.a,{href:"https://easings.net/",children:"easings.net"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { useScrollIntoView } from '@mantine/hooks';\n\nuseScrollIntoView({\n  easing: (t) => (t < 0.5 ? 16 * t ** 5 : 1 - (-2 * t + 2) ** 5 / 2), // easeInOutQuint\n});\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parent-node",children:"Parent node"}),"\n",(0,r.jsx)(t,{data:b}),"\n",(0,r.jsx)(n.h2,{id:"scroll-x-axis",children:"Scroll X axis"}),"\n",(0,r.jsx)(t,{data:v}),"\n",(0,r.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"interface ScrollIntoViewAnimation {\n  /** target element alignment relatively to parent based on current axis */\n  alignment?: 'start' | 'end' | 'center';\n}\n\ninterface ScrollIntoViewParams {\n  /** callback fired after scroll */\n  onScrollFinish?: () => void;\n\n  /** duration of scroll in milliseconds */\n  duration?: number;\n\n  /** axis of scroll */\n  axis?: 'x' | 'y';\n\n  /** custom mathematical easing function */\n  easing?: (t: number) => number;\n\n  /** additional distance between nearest edge and element */\n  offset?: number;\n\n  /** indicator if animation may be interrupted by user scrolling */\n  cancelable?: boolean;\n\n  /** prevents content jumping in scrolling lists with multiple targets */\n  isList?: boolean;\n}\n\ninterface ScrollIntoViewReturnType<\n  Target extends HTMLElement,\n  Parent extends HTMLElement | null = null,\n> {\n  scrollableRef: React.MutableRefObject<Parent>;\n  targetRef: React.MutableRefObject<Target>;\n  scrollIntoView: (params?: ScrollIntoViewAnimation) => void;\n  cancel: () => void;\n}\n\nfunction useScrollIntoView<\n  Target extends HTMLElement,\n  Parent extends HTMLElement | null = null,\n>({\n  duration,\n  axis,\n  onScrollFinish,\n  easing,\n  offset,\n  cancelable,\n  isList,\n}?: ScrollIntoViewParams): ScrollIntoViewReturnType<Target, Parent>;\n"})})]})}function k(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(S,{...e,children:(0,r.jsx)(T,{...e})})}}},function(e){e.O(0,[57938,17454,47747,49774,92888,40179],function(){return e(e.s=83575)}),_N_E=e.O()}]);