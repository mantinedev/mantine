(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4634],{33507:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},47191:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-scroll-into-view",function(){return n(17221)}])},17221:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return R}});var r=n(85893),l=n(11151),o=n(19905),i=n(9904),c=n(67294),s=n(34223),a=n(37662);let u=e=>e<.5?2*e*e:-1+(4-2*e)*e,d=({axis:e,target:t,parent:n,alignment:r,offset:l,isList:o})=>{if(!t||!n&&"undefined"==typeof document)return 0;let i=!!n,c=n||document.body,s=c.getBoundingClientRect(),a=t.getBoundingClientRect(),u=e=>a[e]-s[e];if("y"===e){let e=u("top");if(0===e)return 0;if("start"===r){let t=e-l,n=t<=a.height*(o?0:1)||!o;return n?t:0}let t=i?s.height:window.innerHeight;if("end"===r){let n=e+l-t+a.height,r=n>=-a.height*(o?0:1)||!o;return r?n:0}return"center"===r?e-t/2+a.height/2:0}if("x"===e){let e=u("left");if(0===e)return 0;if("start"===r){let t=e-l,n=t<=a.width||!o;return n?t:0}let t=i?s.width:window.innerWidth;if("end"===r){let n=e+l-t+a.width,r=n>=-a.width||!o;return r?n:0}if("center"===r)return e-t/2+a.width/2}return 0},h=({axis:e,parent:t})=>{if(!t&&"undefined"==typeof document)return 0;let n="y"===e?"scrollTop":"scrollLeft";if(t)return t[n];let{body:r,documentElement:l}=document;return r[n]+l[n]},f=({axis:e,parent:t,distance:n})=>{if(!t&&"undefined"==typeof document)return;let r="y"===e?"scrollTop":"scrollLeft";if(t)t[r]=n;else{let{body:e,documentElement:t}=document;e[r]=n,t[r]=n}};function p({duration:e=1250,axis:t="y",onScrollFinish:n,easing:r=u,offset:l=0,cancelable:o=!0,isList:i=!1}={}){let p=(0,c.useRef)(0),m=(0,c.useRef)(0),g=(0,c.useRef)(!1),x=(0,c.useRef)(null),v=(0,c.useRef)(null),w=(0,s.J)(),j=()=>{p.current&&cancelAnimationFrame(p.current)},y=(0,c.useCallback)(({alignment:o="start"}={})=>{var c;g.current=!1,p.current&&j();let s=null!=(c=h({parent:x.current,axis:t}))?c:0,a=d({parent:x.current,target:v.current,axis:t,alignment:o,offset:l,isList:i})-(x.current?0:s);!function l(){0===m.current&&(m.current=performance.now());let o=performance.now(),i=o-m.current,c=w||0===e?1:i/e,u=s+a*r(c);f({parent:x.current,axis:t,distance:u}),!g.current&&c<1?p.current=requestAnimationFrame(l):("function"==typeof n&&n(),m.current=0,p.current=0,j())}()},[t,e,r,i,l,n,w]),k=()=>{o&&(g.current=!0)};return(0,a.s)("wheel",k,{passive:!0}),(0,a.s)("touchmove",k,{passive:!0}),(0,c.useEffect)(()=>j,[]),{scrollableRef:x,targetRef:v,scrollIntoView:y,cancel:j}}var m=n(16262),g=n(14469),x=n(81110),v=n(72039);let w=`
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
`,j={type:"code",code:w,component:function(){let{scrollIntoView:e,targetRef:t}=p({offset:60});return c.createElement(m.Z,{justify:"center"},c.createElement(g.z,{onClick:()=>e({alignment:"center"})},"Scroll to target"),c.createElement(x.x,{style:{width:"100%",height:"50vh",backgroundColor:"var(--mantine-color-blue-light)"}}),c.createElement(v.x,{ref:t},"Hello there"))}};var y=n(93384);let k=`
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
`,b={type:"code",code:k,component:function(){let{scrollIntoView:e,targetRef:t,scrollableRef:n}=p();return c.createElement(m.Z,{justify:"center"},c.createElement(y.X,{ref:n,h:300,style:{overflowY:"scroll",flex:1}},c.createElement(x.x,{pt:260,pb:450},c.createElement(y.X,{ref:t,p:"xl",style:{backgroundColor:"var(--mantine-color-blue-light)",width:"100%"}},c.createElement(v.x,null,"Scroll me into view")))),c.createElement(g.z,{onClick:()=>e()},"Scroll to target"))}},M=`
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
`,E={type:"code",code:M,component:function(){let{scrollIntoView:e,targetRef:t,scrollableRef:n}=p({axis:"x"});return c.createElement(m.Z,{justify:"center"},c.createElement(y.X,{ref:n,h:150,w:300,style:{overflowX:"scroll"}},c.createElement(x.x,{pl:260,pr:450},c.createElement(y.X,{ref:t,p:"md",style:{backgroundColor:"var(--mantine-color-blue-light)",width:"max-content"}},c.createElement(v.x,null,"Scroll me into view")))),c.createElement(g.z,{onClick:()=>e()},"Scroll to target"))}},I=(0,o.A)(i.us.useScrollIntoView);function T(e){let t=Object.assign({h2:"h2",p:"p",code:"code",ul:"ul",li:"li",pre:"pre",a:"a"},(0,l.ah)(),e.components),{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"use-scroll-into-view"})," handles scroll behavior for any scrollable element. Basic usage works the same way as ",(0,r.jsx)(t.code,{children:"element.scrollIntoView()"}),".\nHook adjusts scrolling animation with respect to the ",(0,r.jsx)(t.code,{children:"reduced-motion"})," user preference."]}),"\n",(0,r.jsx)(n,{data:j}),"\n",(0,r.jsx)(t.h2,{id:"api",children:"API"}),"\n",(0,r.jsx)(t.p,{children:"The hook is configured with settings object:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"onScrollFinish"})," – function that will be called after scroll animation"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"easing"})," – custom math easing function"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"duration"})," - duration of scroll animation in milliseconds"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"axis"})," - axis of scroll"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"cancelable"})," - indicator if animation may be interrupted by user scrolling"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"offset"})," - additional distance between the nearest edge and element"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"isList"})," - indicator that prevents content jumping in scrolling lists with multiple targets, for example Select, Carousel"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Hook returns an object with:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"scrollIntoView"})," – function that starts scroll animation"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"cancel"})," – function that stops scroll animation"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"targetRef"})," - ref of target HTML node"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"scrollableRef"})," - ref of scrollable parent HTML element, if not used document element will be used"]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Returned ",(0,r.jsx)(t.code,{children:"scrollIntoView"})," function accepts single optional argument ",(0,r.jsx)(t.code,{children:"alignment"})," - optional target element alignment relatively to parent based on current axis."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"scrollIntoView({ alignment: 'center' });\n"})}),"\n",(0,r.jsx)(t.h2,{id:"easing",children:"Easing"}),"\n",(0,r.jsxs)(t.p,{children:["The hook accept custom ",(0,r.jsx)(t.code,{children:"easing"})," math function to control the flow of animation.\nIt takes ",(0,r.jsx)(t.code,{children:"t"})," argument, which is a number between ",(0,r.jsx)(t.code,{children:"0"})," and ",(0,r.jsx)(t.code,{children:"1"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["Default easing is ",(0,r.jsx)(t.code,{children:"easeInOutQuad"})," - more info ",(0,r.jsx)(t.a,{href:"https://easings.net/#easeInOutQuad",children:"here"}),".\nYou can find other popular examples on ",(0,r.jsx)(t.a,{href:"https://easings.net/",children:"easings.net"})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"useScrollIntoView({\n  target: someDomElement,\n  easing: (t) => (t < 0.5 ? 16 * Math.pow(t, 5) : 1 - Math.pow(-2 * x + 2, 5) / 2), // easeInOutQuint\n});\n"})}),"\n",(0,r.jsx)(t.h2,{id:"parent-node",children:"Parent node"}),"\n",(0,r.jsx)(n,{data:b}),"\n",(0,r.jsx)(t.h2,{id:"scroll-x-axis",children:"Scroll X axis"}),"\n",(0,r.jsx)(n,{data:E}),"\n",(0,r.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"function useScrollIntoView<\n  Target extends HTMLElement,\n  Parent extends HTMLElement | null = null\n>({\n  onScrollFinish?: () => void;\n  duration?: number;\n  axis?: 'x' | 'y';\n  easing?: (t: number) => number;\n  offset?: number;\n  cancelable?: boolean;\n  isList?: boolean;\n}): {\n  targetRef: MutableRefObject<Target>;\n  scrollableRef: MutableRefObject<Parent>;\n  scrollIntoView: ({\n    alignment?: 'start' | 'end' | 'center';\n  }) => void;\n  cancel: () => void;\n};\n"})})]})}var R=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(I,Object.assign({},e,{children:(0,r.jsx)(T,e)}))}}},function(e){e.O(0,[8992,178,9774,2888,179],function(){return e(e.s=47191)}),_N_E=e.O()}]);