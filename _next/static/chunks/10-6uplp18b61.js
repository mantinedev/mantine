(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var r=Object.defineProperty;e.s(["__exportAll",0,(e,o)=>{let n={};for(var l in e)r(n,l,{get:e[l],enumerable:!0});return o||r(n,Symbol.toStringTag,{value:"Module"}),n}])},462138,e=>{"use strict";var r=e.i(779177),o=e.i(391398);function n({style:e,size:l=16,...t}){return(0,o.jsx)("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{...e,width:(0,r.rem)(l),height:(0,r.rem)(l),display:"block"},...t,children:(0,o.jsx)("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}n.displayName="@mantine/core/AccordionChevron",e.s(["AccordionChevron",0,n])},257177,e=>{"use strict";var r=e.i(433512),o=e.i(481178),n=e.i(317477),l=e.i(44091),t=e.i(391466),a=e.i(956449),i=e.i(232471),c={root:"m_347db0ec","root--dot":"m_fbd81e3d",label:"m_5add502a",section:"m_91fdda9b"},s=e.i(391398);let d=(0,o.createVarsResolver)((e,{radius:o,color:l,gradient:t,variant:a,size:i,autoContrast:c,circle:s})=>{let d=e.variantColorResolver({color:l||e.primaryColor,theme:e,gradient:t,variant:a||"filled",autoContrast:c});return{root:{"--badge-height":(0,r.getSize)(i,"badge-height"),"--badge-padding-x":(0,r.getSize)(i,"badge-padding-x"),"--badge-fz":(0,r.getSize)(i,"badge-fz"),"--badge-radius":s||void 0===o?void 0:(0,r.getRadius)(o),"--badge-bg":l||a?d.background:void 0,"--badge-color":l||a?d.color:void 0,"--badge-bd":l||a?d.border:void 0,"--badge-dot-color":"dot"===a?(0,n.getThemeColor)(l,e):void 0}}}),u=(0,a.polymorphicFactory)(e=>{let r=(0,l.useProps)("Badge",null,e),{classNames:o,className:n,style:a,styles:u,unstyled:g,vars:h,radius:m,color:p,gradient:f,leftSection:x,rightSection:b,children:S,variant:v,fullWidth:j,autoContrast:y,circle:w,mod:B,attributes:C,...k}=r,A=(0,t.useStyles)({name:"Badge",props:r,classes:c,className:n,style:a,classNames:o,styles:u,unstyled:g,attributes:C,vars:h,varsResolver:d});return(0,s.jsxs)(i.Box,{variant:v,mod:[{block:j,circle:w,"with-right-section":!!b,"with-left-section":!!x},B],...A("root",{variant:v}),...k,children:[x&&(0,s.jsx)("span",{...A("section"),"data-position":"left",children:x}),(0,s.jsx)("span",{...A("label"),children:S}),b&&(0,s.jsx)("span",{...A("section"),"data-position":"right",children:b})]})});u.classes=c,u.varsResolver=d,u.displayName="@mantine/core/Badge",e.s(["Badge",0,u],257177)},417693,412563,e=>{"use strict";var r=e.i(779177),o=e.i(481178),n=e.i(317477),l=e.i(44091),t=e.i(391466),a=e.i(275519),i=e.i(232471),c=e.i(284629),s=e.i(462138),d={root:"m_bc8f275",container:"m_ee44dece",content:"m_53e4f606",chevron:"m_47754fc8",control:"m_53e526ea"},u=e.i(191788);function g(e={}){let{scrollAmount:r=200,draggable:o=!0,onScrollStateChange:n}=e,l=(0,u.useRef)(null),[t,a]=(0,u.useState)(!1),[i,c]=(0,u.useState)(!1),[s,d]=(0,u.useState)(!1),h=(0,u.useRef)(!1),m=(0,u.useRef)(!1),p=(0,u.useRef)(0),f=(0,u.useRef)(0),x=(0,u.useRef)(n);x.current=n;let b=(0,u.useCallback)(()=>{let e=l.current;if(e){let r,o,{scrollLeft:n,scrollWidth:l,clientWidth:t}=e;"rtl"===getComputedStyle(e).direction?(r=n<-1,o=n>-(l-t)+1):(r=n>1,o=n<l-t-1),a(r),c(o),x.current?.({canScrollStart:r,canScrollEnd:o})}},[]);(0,u.useEffect)(()=>{b();let e=l.current;if(e){e.addEventListener("scroll",b);let r=new ResizeObserver(b);return r.observe(e),()=>{e.removeEventListener("scroll",b),r.disconnect()}}},[b]);let S=(0,u.useCallback)(e=>{let o=l.current;if(o){let n="rtl"===getComputedStyle(o).direction,l="end"===e?r:-r;o.scrollBy({left:n?-l:l,behavior:"smooth"})}},[r]),v=(0,u.useCallback)(()=>S("start"),[S]),j=(0,u.useCallback)(()=>S("end"),[S]),y=(0,u.useCallback)(e=>{if(!o)return;let r=l.current;r&&(h.current=!0,m.current=!1,d(!0),p.current=e.pageX-r.offsetLeft,f.current=r.scrollLeft,r.style.cursor="grabbing",r.style.userSelect="none")},[o]),w=(0,u.useCallback)(e=>{if(!h.current)return;e.preventDefault();let r=l.current;if(r){let o=e.pageX-r.offsetLeft-p.current;Math.abs(o)>5&&(m.current=!0),r.scrollLeft=f.current-o}},[]),B=(0,u.useCallback)(()=>{let e=m.current;h.current=!1,m.current=!1,d(!1);let r=l.current;if(r&&(r.style.cursor="",r.style.userSelect="",e)){let e=o=>{o.stopPropagation(),o.preventDefault(),r.removeEventListener("click",e,!0)};r.addEventListener("click",e,!0)}},[]),C=(0,u.useCallback)(()=>{h.current&&B()},[B]);return{ref:(0,u.useCallback)(e=>{l.current=e,e&&b()},[b]),canScrollStart:t,canScrollEnd:i,scrollStart:v,scrollEnd:j,isDragging:s,dragHandlers:{onMouseDown:y,onMouseMove:w,onMouseUp:B,onMouseLeave:C}}}e.s(["useScroller",0,g],412563);var h=e.i(391398);let m={scrollAmount:200,draggable:!0},p=(0,o.createVarsResolver)((e,{controlSize:o,edgeGradientColor:l})=>({root:{"--scroller-control-size":(0,r.rem)(o),"--scroller-background-color":l?(0,n.getThemeColor)(l,e):void 0}})),f=(0,a.factory)(e=>{let r=(0,l.useProps)("Scroller",m,e),{classNames:o,className:n,style:a,styles:u,unstyled:f,vars:x,children:b,scrollAmount:S,controlSize:v,edgeGradientColor:j,startControlProps:y,endControlProps:w,startControlIcon:B,endControlIcon:C,showStartControl:k,showEndControl:A,draggable:G,mod:z,ref:R,attributes:E,..._}=r,D=(0,t.useStyles)({name:"Scroller",classes:d,props:r,className:n,style:a,classNames:o,styles:u,unstyled:f,vars:x,varsResolver:p,attributes:E}),T=g({scrollAmount:S,draggable:G}),L=k||T.canScrollStart,U=A||T.canScrollEnd;return(0,h.jsxs)(i.Box,{...D("root"),ref:R,mod:z,..._,children:[(0,h.jsx)(c.UnstyledButton,{...D("control"),onClick:T.scrollStart,"data-position":"start","data-hidden":!L||void 0,"aria-label":"Scroll left",tabIndex:L?0:-1,...y,children:B||(0,h.jsx)(s.AccordionChevron,{...D("chevron")})}),(0,h.jsx)("div",{...D("container"),ref:T.ref,role:"presentation","data-draggable":G||void 0,...T.dragHandlers,children:(0,h.jsx)("div",{...D("content"),children:b})}),(0,h.jsx)(c.UnstyledButton,{...D("control"),onClick:T.scrollEnd,"data-position":"end","data-hidden":!U||void 0,"aria-label":"Scroll right",tabIndex:U?0:-1,...w,children:C||(0,h.jsx)(s.AccordionChevron,{...D("chevron")})})]})});f.classes=d,f.varsResolver=p,f.displayName="@mantine/core/Scroller",e.s(["Scroller",0,f],417693)},520226,e=>{"use strict";var r=e.i(648863),o=e.i(257177),n=e.i(725695),l=e.i(417693),t=e.i(391398);let a={type:"code",component:function(){return(0,t.jsx)(l.Scroller,{children:(0,t.jsx)(n.Group,{gap:"xs",wrap:"nowrap",children:Array.from({length:20}).map((e,r)=>(0,t.jsxs)(o.Badge,{variant:"light",size:"lg",miw:"fit-content",children:["Badge ",r+1]},r))})})},code:`
import { Badge, Group, Scroller } from '@mantine/core';

function Demo() {
  return (
    <Scroller>
      <Group gap="xs" wrap="nowrap">
        {Array.from({ length: 20 }).map((_, index) => (
          <Badge key={index} variant="light" size="lg">
            Badge {index + 1}
          </Badge>
        ))}
      </Group>
    </Scroller>
  );
}
`,maxWidth:500},i={type:"code",component:function(){return(0,t.jsx)(l.Scroller,{scrollAmount:300,children:(0,t.jsx)(n.Group,{gap:"xs",wrap:"nowrap",children:Array.from({length:30}).map((e,r)=>(0,t.jsxs)(o.Badge,{variant:"light",size:"lg",miw:"fit-content",children:["Badge ",r+1]},r))})})},code:`
import { Badge, Group, Scroller } from '@mantine/core';

function Demo() {
  return (
    <Scroller scrollAmount={300}>
      <Group gap="xs" wrap="nowrap">
        {Array.from({ length: 30 }).map((_, index) => (
          <Badge key={index} variant="light" size="lg" miw="fit-content">
            Badge {index + 1}
          </Badge>
        ))}
      </Group>
    </Scroller>
  );
}
`,centered:!0,maxWidth:500},c={type:"code",component:function(){return(0,t.jsx)(l.Scroller,{controlSize:"xl",children:(0,t.jsx)(n.Group,{gap:"xs",wrap:"nowrap",children:Array.from({length:20}).map((e,r)=>(0,t.jsxs)(o.Badge,{variant:"light",size:"lg",miw:"fit-content",children:["Badge ",r+1]},r))})})},code:`
import { Badge, Group, Scroller } from '@mantine/core';

function Demo() {
  return (
    <Scroller controlSize="xl">
      <Group gap="xs" wrap="nowrap">
        {Array.from({ length: 20 }).map((_, index) => (
          <Badge key={index} variant="light" size="lg" miw="fit-content">
            Badge {index + 1}
          </Badge>
        ))}
      </Group>
    </Scroller>
  );
}
`,centered:!0,maxWidth:500};var s=e.i(943311),d=e.i(858508);let u={type:"code",component:function(){return(0,t.jsx)(l.Scroller,{startControlIcon:(0,t.jsx)(s.ArrowLeftIcon,{size:16}),endControlIcon:(0,t.jsx)(d.ArrowRightIcon,{size:16}),children:(0,t.jsx)(n.Group,{gap:"xs",wrap:"nowrap",children:Array.from({length:20}).map((e,r)=>(0,t.jsxs)(o.Badge,{variant:"light",size:"lg",miw:"fit-content",children:["Badge ",r+1]},r))})})},code:`
import { ArrowLeftIcon, ArrowRightIcon } from '@phosphor-icons/react';
import { Badge, Group, Scroller } from '@mantine/core';

function Demo() {
  return (
    <Scroller
      startControlIcon={<ArrowLeftIcon size={16} />}
      endControlIcon={<ArrowRightIcon size={16} />}
    >
      <Group gap="xs" wrap="nowrap">
        {Array.from({ length: 20 }).map((_, index) => (
          <Badge key={index} variant="light" size="lg" miw="fit-content">
            Badge {index + 1}
          </Badge>
        ))}
      </Group>
    </Scroller>
  );
}
`,centered:!0,maxWidth:500},g={type:"code",component:function(){return(0,t.jsx)(l.Scroller,{draggable:!0,children:(0,t.jsx)(n.Group,{gap:"xs",wrap:"nowrap",children:Array.from({length:20}).map((e,r)=>(0,t.jsxs)(o.Badge,{variant:"light",size:"lg",miw:"fit-content",children:["Badge ",r+1]},r))})})},code:`
import { Badge, Group, Scroller } from '@mantine/core';

function Demo() {
  return (
    <Scroller draggable>
      <Group gap="xs" wrap="nowrap">
        {Array.from({ length: 20 }).map((_, index) => (
          <Badge key={index} variant="light" size="lg" miw="fit-content">
            Badge {index + 1}
          </Badge>
        ))}
      </Group>
    </Scroller>
  );
}
`,centered:!0,maxWidth:500};var h=(0,r.__exportAll)({controlSize:()=>c,customIcons:()=>u,draggable:()=>g,scrollAmount:()=>i,usage:()=>a});e.s(["ScrollerDemos",0,h],520226)},813916,e=>{"use strict";var r=e.i(648863),o=e.i(232471),n=e.i(485108),l=e.i(725695),t=e.i(391398),a=e.i(412563);let i={type:"code",code:`
import { Box, Button, Group } from '@mantine/core';
import { useScroller } from '@mantine/hooks';

function Demo() {
  const scroller = useScroller();

  return (
    <Box>
      <Group mb="md">
        <Button
          onClick={scroller.scrollStart}
          disabled={!scroller.canScrollStart}
          variant="default"
          size="xs"
        >
          ← Scroll left
        </Button>
        <Button
          onClick={scroller.scrollEnd}
          disabled={!scroller.canScrollEnd}
          variant="default"
          size="xs"
        >
          Scroll right →
        </Button>
      </Group>

      <div
        ref={scroller.ref}
        {...scroller.dragHandlers}
        style={{
          overflow: 'auto',
          cursor: scroller.isDragging ? 'grabbing' : 'grab',
        }}
      >
        <Group wrap="nowrap" gap="md">
          {Array.from({ length: 20 }).map((_, index) => (
            <Box
              key={index}
              style={{
                minWidth: 100,
                height: 80,
                backgroundColor: 'var(--mantine-color-blue-filled)',
                borderRadius: 'var(--mantine-radius-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 500,
              }}
            >
              {index + 1}
            </Box>
          ))}
        </Group>
      </div>
    </Box>
  );
}
`,component:function(){let e=(0,a.useScroller)();return(0,t.jsxs)(o.Box,{children:[(0,t.jsxs)(l.Group,{mb:"md",children:[(0,t.jsx)(n.Button,{onClick:e.scrollStart,disabled:!e.canScrollStart,variant:"default",size:"xs",children:"← Scroll left"}),(0,t.jsx)(n.Button,{onClick:e.scrollEnd,disabled:!e.canScrollEnd,variant:"default",size:"xs",children:"Scroll right →"})]}),(0,t.jsx)("div",{ref:e.ref,...e.dragHandlers,style:{overflow:"auto",cursor:e.isDragging?"grabbing":"grab"},children:(0,t.jsx)(l.Group,{wrap:"nowrap",gap:"md",children:Array.from({length:20}).map((e,r)=>(0,t.jsx)(o.Box,{style:{minWidth:100,height:80,backgroundColor:"var(--mantine-color-blue-filled)",borderRadius:"var(--mantine-radius-md)",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontWeight:500},children:r+1},r))})})]})}};var c=e.i(883364);let s={type:"code",code:`
import { Box, Button, Group, Text } from '@mantine/core';
import { useScroller } from '@mantine/hooks';

function Demo() {
  const scroller = useScroller({ scrollAmount: 400 });

  return (
    <Box>
      <Group mb="md" justify="space-between">
        <Group>
          <Button
            onClick={scroller.scrollStart}
            disabled={!scroller.canScrollStart}
            variant="default"
            size="xs"
          >
            ← Scroll left
          </Button>
          <Button
            onClick={scroller.scrollEnd}
            disabled={!scroller.canScrollEnd}
            variant="default"
            size="xs"
          >
            Scroll right →
          </Button>
        </Group>
        <Text size="sm" c="dimmed">scrollAmount: 400px</Text>
      </Group>

      <div
        ref={scroller.ref}
        {...scroller.dragHandlers}
        style={{
          overflow: 'auto',
          cursor: scroller.isDragging ? 'grabbing' : 'grab',
        }}
      >
        <Group wrap="nowrap" gap="md">
          {Array.from({ length: 20 }).map((_, index) => (
            <Box
              key={index}
              style={{
                minWidth: 100,
                height: 80,
                backgroundColor: 'var(--mantine-color-blue-filled)',
                borderRadius: 'var(--mantine-radius-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 500,
              }}
            >
              {index + 1}
            </Box>
          ))}
        </Group>
      </div>
    </Box>
  );
}
`,component:function(){let e=(0,a.useScroller)({scrollAmount:400});return(0,t.jsxs)(o.Box,{children:[(0,t.jsxs)(l.Group,{mb:"md",justify:"space-between",children:[(0,t.jsxs)(l.Group,{children:[(0,t.jsx)(n.Button,{onClick:e.scrollStart,disabled:!e.canScrollStart,variant:"default",size:"xs",children:"← Scroll left"}),(0,t.jsx)(n.Button,{onClick:e.scrollEnd,disabled:!e.canScrollEnd,variant:"default",size:"xs",children:"Scroll right →"})]}),(0,t.jsx)(c.Text,{size:"sm",c:"dimmed",children:"scrollAmount: 400px"})]}),(0,t.jsx)("div",{ref:e.ref,...e.dragHandlers,style:{overflow:"auto",cursor:e.isDragging?"grabbing":"grab"},children:(0,t.jsx)(l.Group,{wrap:"nowrap",gap:"md",children:Array.from({length:20}).map((e,r)=>(0,t.jsx)(o.Box,{style:{minWidth:100,height:80,backgroundColor:"var(--mantine-color-blue-filled)",borderRadius:"var(--mantine-radius-md)",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontWeight:500},children:r+1},r))})})]})}},d={type:"code",code:`
import { Box, Button, Group, Text } from '@mantine/core';
import { useScroller } from '@mantine/hooks';

function Demo() {
  const scroller = useScroller({ draggable: false });

  return (
    <Box>
      <Group mb="md" justify="space-between">
        <Group>
          <Button
            onClick={scroller.scrollStart}
            disabled={!scroller.canScrollStart}
            variant="default"
            size="xs"
          >
            ← Scroll left
          </Button>
          <Button
            onClick={scroller.scrollEnd}
            disabled={!scroller.canScrollEnd}
            variant="default"
            size="xs"
          >
            Scroll right →
          </Button>
        </Group>
        <Text size="sm" c="dimmed">draggable: false</Text>
      </Group>

      <div
        ref={scroller.ref}
        style={{
          overflow: 'auto',
        }}
      >
        <Group wrap="nowrap" gap="md">
          {Array.from({ length: 20 }).map((_, index) => (
            <Box
              key={index}
              style={{
                minWidth: 100,
                height: 80,
                backgroundColor: 'var(--mantine-color-blue-filled)',
                borderRadius: 'var(--mantine-radius-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 500,
              }}
            >
              {index + 1}
            </Box>
          ))}
        </Group>
      </div>
    </Box>
  );
}
`,component:function(){let e=(0,a.useScroller)({draggable:!1});return(0,t.jsxs)(o.Box,{children:[(0,t.jsxs)(l.Group,{mb:"md",justify:"space-between",children:[(0,t.jsxs)(l.Group,{children:[(0,t.jsx)(n.Button,{onClick:e.scrollStart,disabled:!e.canScrollStart,variant:"default",size:"xs",children:"← Scroll left"}),(0,t.jsx)(n.Button,{onClick:e.scrollEnd,disabled:!e.canScrollEnd,variant:"default",size:"xs",children:"Scroll right →"})]}),(0,t.jsx)(c.Text,{size:"sm",c:"dimmed",children:"draggable: false"})]}),(0,t.jsx)("div",{ref:e.ref,style:{overflow:"auto"},children:(0,t.jsx)(l.Group,{wrap:"nowrap",gap:"md",children:Array.from({length:20}).map((e,r)=>(0,t.jsx)(o.Box,{style:{minWidth:100,height:80,backgroundColor:"var(--mantine-color-blue-filled)",borderRadius:"var(--mantine-radius-md)",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontWeight:500},children:r+1},r))})})]})}};var u=(0,r.__exportAll)({draggable:()=>d,scrollAmount:()=>s,usage:()=>i});e.s(["UseScrollerDemos",0,u],813916)},806804,e=>{"use strict";var r=e.i(391398),o=e.i(38856),n=e.i(520226),l=e.i(813916);e.i(603441);var t=e.i(62558);e.i(457450);var a=e.i(418026);let i=(0,t.Layout)(a.MDX_DATA.useScroller);function c(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.useMDXComponents)(),...e.components},{Demo:a}=t;return a||function(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"use-scroller"})," hook manages horizontal scroll behavior for a container element.\nIt provides scroll state (whether content can be scrolled in either direction),\nscroll functions, and drag-to-scroll functionality."]}),"\n",(0,r.jsx)(a,{data:l.UseScrollerDemos.usage}),"\n",(0,r.jsx)(t.h2,{id:"scroll-amount",children:"Scroll amount"}),"\n",(0,r.jsxs)(t.p,{children:["Use ",(0,r.jsx)(t.code,{children:"scrollAmount"})," option to control how many pixels the content scrolls\nwhen ",(0,r.jsx)(t.code,{children:"scrollStart"})," or ",(0,r.jsx)(t.code,{children:"scrollEnd"})," functions are called. Default value is ",(0,r.jsx)(t.code,{children:"200"}),":"]}),"\n",(0,r.jsx)(a,{data:l.UseScrollerDemos.scrollAmount}),"\n",(0,r.jsx)(t.h2,{id:"draggable",children:"Draggable"}),"\n",(0,r.jsxs)(t.p,{children:["Use ",(0,r.jsx)(t.code,{children:"draggable"})," option to enable or disable drag-to-scroll functionality.\nWhen ",(0,r.jsx)(t.code,{children:"draggable"})," is ",(0,r.jsx)(t.code,{children:"true"})," (default), users can click and drag to scroll the content:"]}),"\n",(0,r.jsx)(a,{data:l.UseScrollerDemos.draggable}),"\n",(0,r.jsx)(t.h2,{id:"scroller-component",children:"Scroller component"}),"\n",(0,r.jsxs)(t.p,{children:["If you prefer component API, you can use ",(0,r.jsx)(t.a,{href:"/core/scroller",children:"Scroller"})," component.\nIt provides the same functionality with additional styling and control button features."]}),"\n",(0,r.jsx)(a,{data:n.ScrollerDemos.usage}),"\n",(0,r.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"function useScroller<T extends HTMLElement = HTMLDivElement>(\n  options?: UseScrollerOptions\n): UseScrollerReturnValue<T>;\n\ninterface UseScrollerOptions {\n  /** Amount of pixels to scroll when calling scroll functions, `200` by default */\n  scrollAmount?: number;\n\n  /** Determines whether content can be scrolled by dragging with mouse, `true` by default */\n  draggable?: boolean;\n\n  /** Called when scroll state changes (canScrollStart or canScrollEnd) */\n  onScrollStateChange?: (state: UseScrollerScrollState) => void;\n}\n\ninterface UseScrollerScrollState {\n  /** Whether content can be scrolled towards the start (left in LTR, right in RTL) */\n  canScrollStart: boolean;\n\n  /** Whether content can be scrolled towards the end (right in LTR, left in RTL) */\n  canScrollEnd: boolean;\n}\n\ninterface UseScrollerReturnValue<T extends HTMLElement = HTMLDivElement> {\n  /** Ref callback to attach to the scrollable container element */\n  ref: RefCallback<T | null>;\n\n  /** Whether content can be scrolled towards the start */\n  canScrollStart: boolean;\n\n  /** Whether content can be scrolled towards the end */\n  canScrollEnd: boolean;\n\n  /** Scrolls towards the start direction */\n  scrollStart: () => void;\n\n  /** Scrolls towards the end direction */\n  scrollEnd: () => void;\n\n  /** `true` if the user is currently dragging the content */\n  isDragging: boolean;\n\n  /** Props to spread on the scrollable container for drag functionality */\n  dragHandlers: {\n    onMouseDown: (e: React.MouseEvent) => void;\n    onMouseMove: (e: React.MouseEvent) => void;\n    onMouseUp: () => void;\n    onMouseLeave: () => void;\n  };\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"exported-types",children:"Exported types"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"UseScrollerOptions"}),", ",(0,r.jsx)(t.code,{children:"UseScrollerReturnValue"})," and ",(0,r.jsx)(t.code,{children:"UseScrollerScrollState"})," types are exported from the ",(0,r.jsx)(t.code,{children:"@mantine/hooks"})," package;\nyou can import them in your application:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import type {\n  UseScrollerOptions,\n  UseScrollerReturnValue,\n  UseScrollerScrollState,\n} from '@mantine/hooks';\n"})})]})}e.s(["default",0,function(e={}){return(0,r.jsx)(i,{...e,children:(0,r.jsx)(c,{...e})})}])},723876,(e,r,o)=>{let n="/hooks/use-scroller";(window.__NEXT_P=window.__NEXT_P||[]).push([n,()=>e.r(806804)]),r.hot&&r.hot.dispose(function(){window.__NEXT_P.push([n])})},648761,e=>{e.v(r=>Promise.all(["static/chunks/22379_btw709h.js"].map(r=>e.l(r))).then(()=>r(493594)))},828805,e=>{e.v(r=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(r=>e.l(r))).then(()=>r(879466)))}]);