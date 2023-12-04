(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4634],{87500:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-scroll-into-view",function(){return t(24629)}])},24629:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return R}});var r=t(24246),l=t(71670),o=t(3916),i=t(30289),c=t(27378),s=t(82269),a=t(56617);let u=e=>e<.5?2*e*e:-1+(4-2*e)*e,d=({axis:e,target:n,parent:t,alignment:r,offset:l,isList:o})=>{if(!n||!t&&"undefined"==typeof document)return 0;let i=!!t,c=t||document.body,s=c.getBoundingClientRect(),a=n.getBoundingClientRect(),u=e=>a[e]-s[e];if("y"===e){let e=u("top");if(0===e)return 0;if("start"===r){let n=e-l,t=n<=a.height*(o?0:1)||!o;return t?n:0}let n=i?s.height:window.innerHeight;if("end"===r){let t=e+l-n+a.height,r=t>=-a.height*(o?0:1)||!o;return r?t:0}return"center"===r?e-n/2+a.height/2:0}if("x"===e){let e=u("left");if(0===e)return 0;if("start"===r){let n=e-l,t=n<=a.width||!o;return t?n:0}let n=i?s.width:window.innerWidth;if("end"===r){let t=e+l-n+a.width,r=t>=-a.width||!o;return r?t:0}if("center"===r)return e-n/2+a.width/2}return 0},h=({axis:e,parent:n})=>{if(!n&&"undefined"==typeof document)return 0;let t="y"===e?"scrollTop":"scrollLeft";if(n)return n[t];let{body:r,documentElement:l}=document;return r[t]+l[t]},f=({axis:e,parent:n,distance:t})=>{if(!n&&"undefined"==typeof document)return;let r="y"===e?"scrollTop":"scrollLeft";if(n)n[r]=t;else{let{body:e,documentElement:n}=document;e[r]=t,n[r]=t}};function m({duration:e=1250,axis:n="y",onScrollFinish:t,easing:r=u,offset:l=0,cancelable:o=!0,isList:i=!1}={}){let m=(0,c.useRef)(0),x=(0,c.useRef)(0),p=(0,c.useRef)(!1),g=(0,c.useRef)(null),j=(0,c.useRef)(null),w=(0,s.J)(),b=()=>{m.current&&cancelAnimationFrame(m.current)},v=(0,c.useCallback)(({alignment:o="start"}={})=>{p.current=!1,m.current&&b();let c=h({parent:g.current,axis:n})??0,s=d({parent:g.current,target:j.current,axis:n,alignment:o,offset:l,isList:i})-(g.current?0:c);!function l(){0===x.current&&(x.current=performance.now());let o=performance.now(),i=o-x.current,a=w||0===e?1:i/e,u=c+s*r(a);f({parent:g.current,axis:n,distance:u}),!p.current&&a<1?m.current=requestAnimationFrame(l):("function"==typeof t&&t(),x.current=0,m.current=0,b())}()},[n,e,r,i,l,t,w]),y=()=>{o&&(p.current=!0)};return(0,a.s)("wheel",y,{passive:!0}),(0,a.s)("touchmove",y,{passive:!0}),(0,c.useEffect)(()=>b,[]),{scrollableRef:g,targetRef:j,scrollIntoView:v,cancel:b}}var x=t(22971),p=t(8671),g=t(56589),Text=t(26569);let j=`
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
`,w={type:"code",code:j,component:function(){let{scrollIntoView:e,targetRef:n}=m({offset:60});return c.createElement(x.Z,{justify:"center"},c.createElement(p.z,{onClick:()=>e({alignment:"center"})},"Scroll to target"),c.createElement(g.x,{style:{width:"100%",height:"50vh",backgroundColor:"var(--mantine-color-blue-light)"}}),c.createElement(Text.x,{ref:n},"Hello there"))}};var b=t(98477);let v=`
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
`,y={type:"code",code:v,component:function(){let{scrollIntoView:e,targetRef:n,scrollableRef:t}=m();return c.createElement(x.Z,{justify:"center"},c.createElement(b.X,{ref:t,h:300,style:{overflowY:"scroll",flex:1}},c.createElement(g.x,{pt:260,pb:450},c.createElement(b.X,{ref:n,p:"xl",style:{backgroundColor:"var(--mantine-color-blue-light)",width:"100%"}},c.createElement(Text.x,null,"Scroll me into view")))),c.createElement(p.z,{onClick:()=>e()},"Scroll to target"))}},E=`
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
`,k={type:"code",code:E,component:function(){let{scrollIntoView:e,targetRef:n,scrollableRef:t}=m({axis:"x"});return c.createElement(x.Z,{justify:"center"},c.createElement(b.X,{ref:t,h:150,w:300,style:{overflowX:"scroll"}},c.createElement(g.x,{pl:260,pr:450},c.createElement(b.X,{ref:n,p:"md",style:{backgroundColor:"var(--mantine-color-blue-light)",width:"max-content"}},c.createElement(Text.x,null,"Scroll me into view")))),c.createElement(p.z,{onClick:()=>e()},"Scroll to target"))}},T=(0,o.A)(i.us.useScrollIntoView);function I(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"use-scroll-into-view"})," handles scroll behavior for any scrollable element. Basic usage works the same way as ",(0,r.jsx)(n.code,{children:"element.scrollIntoView()"}),".\nHook adjusts scrolling animation with respect to the ",(0,r.jsx)(n.code,{children:"reduced-motion"})," user preference."]}),"\n",(0,r.jsx)(t,{data:w}),"\n",(0,r.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,r.jsx)(n.p,{children:"The hook is configured with settings object:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"onScrollFinish"})," – function that will be called after scroll animation"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"easing"})," – custom math easing function"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"duration"})," - duration of scroll animation in milliseconds"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"axis"})," - axis of scroll"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"cancelable"})," - indicator if animation may be interrupted by user scrolling"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"offset"})," - additional distance between the nearest edge and element"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"isList"})," - indicator that prevents content jumping in scrolling lists with multiple targets, for example Select, Carousel"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Hook returns an object with:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"scrollIntoView"})," – function that starts scroll animation"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"cancel"})," – function that stops scroll animation"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"targetRef"})," - ref of target HTML node"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"scrollableRef"})," - ref of scrollable parent HTML element, if not used document element will be used"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Returned ",(0,r.jsx)(n.code,{children:"scrollIntoView"})," function accepts single optional argument ",(0,r.jsx)(n.code,{children:"alignment"})," - optional target element alignment relatively to parent based on current axis."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"scrollIntoView({ alignment: 'center' });\n"})}),"\n",(0,r.jsx)(n.h2,{id:"easing",children:"Easing"}),"\n",(0,r.jsxs)(n.p,{children:["The hook accept custom ",(0,r.jsx)(n.code,{children:"easing"})," math function to control the flow of animation.\nIt takes ",(0,r.jsx)(n.code,{children:"t"})," argument, which is a number between ",(0,r.jsx)(n.code,{children:"0"})," and ",(0,r.jsx)(n.code,{children:"1"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Default easing is ",(0,r.jsx)(n.code,{children:"easeInOutQuad"})," - more info ",(0,r.jsx)(n.a,{href:"https://easings.net/#easeInOutQuad",children:"here"}),".\nYou can find other popular examples on ",(0,r.jsx)(n.a,{href:"https://easings.net/",children:"easings.net"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"useScrollIntoView({\n  target: someDomElement,\n  easing: (t) =>\n    t < 0.5 ? 16 * Math.pow(t, 5) : 1 - Math.pow(-2 * x + 2, 5) / 2, // easeInOutQuint\n});\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parent-node",children:"Parent node"}),"\n",(0,r.jsx)(t,{data:y}),"\n",(0,r.jsx)(n.h2,{id:"scroll-x-axis",children:"Scroll X axis"}),"\n",(0,r.jsx)(t,{data:k}),"\n",(0,r.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"function useScrollIntoView<\n  Target extends HTMLElement,\n  Parent extends HTMLElement | null = null\n>({\n  onScrollFinish?: () => void;\n  duration?: number;\n  axis?: 'x' | 'y';\n  easing?: (t: number) => number;\n  offset?: number;\n  cancelable?: boolean;\n  isList?: boolean;\n}): {\n  targetRef: MutableRefObject<Target>;\n  scrollableRef: MutableRefObject<Parent>;\n  scrollIntoView: ({\n    alignment?: 'start' | 'end' | 'center';\n  }) => void;\n  cancel: () => void;\n};\n"})})]})}function R(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(T,{...e,children:(0,r.jsx)(I,{...e})})}}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=87500)}),_N_E=e.O()}]);