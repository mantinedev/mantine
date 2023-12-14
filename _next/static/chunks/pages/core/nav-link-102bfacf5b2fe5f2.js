(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1938],{84605:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var i=(0,r(54764).Z)("chevron-right","IconChevronRight",[["path",{d:"M9 6l6 6l-6 6",key:"svg-0"}]])},88037:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/nav-link",function(){return r(29569)}])},29569:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return T}});var i=r(24246),n=r(71670),o=r(27378),l=r(54764),a=(0,l.Z)("home-2","IconHome2",[["path",{d:"M5 12l-2 0l9 -9l9 9l-2 0",key:"svg-0"}],["path",{d:"M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7",key:"svg-1"}],["path",{d:"M10 12h4v4h-4z",key:"svg-2"}]]),c=(0,l.Z)("gauge","IconGauge",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-1"}],["path",{d:"M13.41 10.59l2.59 -2.59",key:"svg-2"}],["path",{d:"M7 12a5 5 0 0 1 5 -5",key:"svg-3"}]]),s=r(84605),d=(0,l.Z)("circle-off","IconCircleOff",[["path",{d:"M20.042 16.045a9 9 0 0 0 -12.087 -12.087m-2.318 1.677a9 9 0 1 0 12.725 12.73",key:"svg-0"}],["path",{d:"M3 3l18 18",key:"svg-1"}]]),f=(0,l.Z)("activity","IconActivity",[["path",{d:"M3 12h4l3 8l4 -16l3 8h4",key:"svg-0"}]]),h=r(58675),u=r(92082),m=r(83453),v=r(96739),p=r(6231),g=r(56589),k=r(50332),b=r(1189),y=r(4184),E=r(19397),N={root:"m-f0824112",description:"m-57492dcc",section:"m-690090b5",label:"m-1f6ac4c4",body:"m-f07af9d2",children:"m-e17b862f",chevron:"m-1fd8a00b"};let S={},x=(0,m.Z)((e,{variant:t,color:r,childrenOffset:i})=>{let n=e.variantColorResolver({color:r||e.primaryColor,theme:e,variant:t||"light"});return{root:{"--nl-bg":r||t?n.background:void 0,"--nl-hover":r||t?n.hover:void 0,"--nl-color":r||t?n.color:void 0},children:{"--nl-offset":(0,u.bG)(i)}}}),q=(0,k.b)((e,t)=>{let r=(0,v.w)("NavLink",S,e),{classNames:i,className:n,style:l,styles:a,unstyled:c,vars:s,opened:d,defaultOpened:f,onChange:u,children:m,onClick:k,active:q,disabled:L,leftSection:w,rightSection:z,label:I,description:C,disableRightSectionRotation:A,noWrap:j,childrenOffset:F,onKeyDown:M,...Z}=r,R=(0,p.y)({name:"NavLink",props:r,classes:N,className:n,style:l,classNames:i,styles:a,unstyled:c,vars:s,varsResolver:x}),[O,D]=(0,h.C)({value:d,defaultValue:f,finalValue:!1,onChange:u}),_=!!m;return o.createElement(o.Fragment,null,o.createElement(E.k,{...R("root"),component:"a",ref:t,onClick:e=>{k?.(e),_&&(e.preventDefault(),D(!O))},onKeyDown:e=>{M?.(e),"Space"===e.nativeEvent.code&&_&&(e.preventDefault(),D(!O))},unstyled:c,mod:{disabled:L,active:q,expanded:O},...Z},w&&o.createElement(g.x,{component:"span",...R("section"),mod:{position:"left"}},w),o.createElement(g.x,{...R("body"),mod:{"no-wrap":j}},o.createElement(g.x,{component:"span",...R("label")},I),o.createElement(g.x,{component:"span",mod:{active:q},...R("description")},C)),(_||z)&&o.createElement(g.x,{...R("section"),component:"span",mod:{rotate:O&&!A,position:"right"}},_?z||o.createElement(b.Q,{...R("chevron")}):z)),o.createElement(y.U,{in:O},o.createElement("div",{...R("children")},m)))});q.classes=N,q.displayName="@mantine/core/NavLink";var L=r(73988);let w=`
import { Badge, NavLink } from '@mantine/core';
import { IconHome2, IconGauge, IconChevronRight, IconActivity, IconCircleOff } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <NavLink
        href="#required-for-focus"
        label="With icon"
        leftSection={<IconHome2 size="1rem" stroke={1.5} />}
      />
      <NavLink
        href="#required-for-focus"
        label="With right section"
        leftSection={<IconGauge size="1rem" stroke={1.5} />}
        rightSection={
          <IconChevronRight size="0.8rem" stroke={1.5} className="mantine-rotate-rtl" />
        }
      />
      <NavLink
        href="#required-for-focus"
        label="Disabled"
        leftSection={<IconCircleOff size="1rem" stroke={1.5} />}
        disabled
      />
      <NavLink
        href="#required-for-focus"
        label="With description"
        description="Additional information"
        leftSection={
          <Badge size="xs" variant="filled" color="red" w={16} h={16} p={0}>
            3
          </Badge>
        }
      />
      <NavLink
        href="#required-for-focus"
        label="Active subtle"
        leftSection={<IconActivity size="1rem" stroke={1.5} />}
        rightSection={
          <IconChevronRight size="0.8rem" stroke={1.5} className="mantine-rotate-rtl" />
        }
        variant="subtle"
        active
      />
      <NavLink
        href="#required-for-focus"
        label="Active light"
        leftSection={<IconActivity size="1rem" stroke={1.5} />}
        rightSection={
          <IconChevronRight size="0.8rem" stroke={1.5} className="mantine-rotate-rtl" />
        }
        active
      />
      <NavLink
        href="#required-for-focus"
        label="Active filled"
        leftSection={<IconActivity size="1rem" stroke={1.5} />}
        rightSection={
          <IconChevronRight size="0.8rem" stroke={1.5} className="mantine-rotate-rtl" />
        }
        variant="filled"
        active
      />
    </>
  );
}
`,z={type:"code",centered:!0,maxWidth:240,component:function(){return o.createElement(o.Fragment,null,o.createElement(q,{href:"#required-for-focus",label:"With icon",leftSection:o.createElement(a,{size:"1rem",stroke:1.5})}),o.createElement(q,{href:"#required-for-focus",label:"With right section",leftSection:o.createElement(c,{size:"1rem",stroke:1.5}),rightSection:o.createElement(s.Z,{size:"0.8rem",stroke:1.5,className:"mantine-rotate-rtl"})}),o.createElement(q,{href:"#required-for-focus",label:"Disabled",leftSection:o.createElement(d,{size:"1rem",stroke:1.5}),disabled:!0}),o.createElement(q,{href:"#required-for-focus",label:"With description",description:"Additional information",leftSection:o.createElement(L.C,{size:"xs",variant:"filled",color:"red",w:16,h:16,p:0},"3")}),o.createElement(q,{href:"#required-for-focus",label:"Active subtle",leftSection:o.createElement(f,{size:"1rem",stroke:1.5}),rightSection:o.createElement(s.Z,{size:"0.8rem",stroke:1.5,className:"mantine-rotate-rtl"}),variant:"subtle",active:!0}),o.createElement(q,{href:"#required-for-focus",label:"Active light",leftSection:o.createElement(f,{size:"1rem",stroke:1.5}),rightSection:o.createElement(s.Z,{size:"0.8rem",stroke:1.5,className:"mantine-rotate-rtl"}),active:!0}),o.createElement(q,{href:"#required-for-focus",label:"Active filled",leftSection:o.createElement(f,{size:"1rem",stroke:1.5}),rightSection:o.createElement(s.Z,{size:"0.8rem",stroke:1.5,className:"mantine-rotate-rtl"}),variant:"filled",active:!0}))},code:w};var I=(0,l.Z)("fingerprint","IconFingerprint",[["path",{d:"M18.9 7a8 8 0 0 1 1.1 5v1a6 6 0 0 0 .8 3",key:"svg-0"}],["path",{d:"M8 11a4 4 0 0 1 8 0v1a10 10 0 0 0 2 6",key:"svg-1"}],["path",{d:"M12 11v2a14 14 0 0 0 2.5 8",key:"svg-2"}],["path",{d:"M8 15a18 18 0 0 0 1.8 6",key:"svg-3"}],["path",{d:"M4.9 19a22 22 0 0 1 -.9 -7v-1a8 8 0 0 1 12 -6.95",key:"svg-4"}]]),C=r(22971);let A=`
import { useState } from 'react';
import { IconGauge, IconFingerprint, IconActivity, IconChevronRight } from '@tabler/icons-react';
import { Box, NavLink } from '@mantine/core';

const data = [
  { icon: IconGauge, label: 'Dashboard', description: 'Item with description' },
  {
    icon: IconFingerprint,
    label: 'Security',
    rightSection: <IconChevronRight size="1rem" stroke={1.5} />,
  },
  { icon: IconActivity, label: 'Activity' },
];

function Demo() {
  const [active, setActive] = useState(0);

  const items = data.map((item, index) => (
    <NavLink
      href="#required-for-focus"
      key={item.label}
      active={index === active}
      label={item.label}
      description={item.description}
      rightSection={item.rightSection}
      icon={<item.icon size="1rem" stroke={1.5} />}
      onClick={() => setActive(index)}
      {{props}}
    />
  ));

  return <Box w={220}>{items}</Box>;
}
`,j=[{icon:c,label:"Dashboard",description:"Item with description"},{icon:I,label:"Security",rightSection:o.createElement(s.Z,{size:"1rem",stroke:1.5})},{icon:f,label:"Activity"}],F={type:"configurator",component:function(e){let[t,r]=(0,o.useState)(0),i=j.map((i,n)=>o.createElement(q,{href:"#required-for-focus",key:i.label,active:n===t,label:i.label,description:i.description,rightSection:i.rightSection,icon:o.createElement(i.icon,{size:"1rem",stroke:1.5}),onClick:()=>r(n),...e}));return o.createElement(C.Z,{justify:"center"},o.createElement(g.x,{w:220},i))},code:A,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"variant",type:"segmented",data:[{value:"subtle",label:"Subtle"},{value:"light",label:"Light"},{value:"filled",label:"Filled"}],libraryValue:"light",initialValue:"light"}]},M=`
import { NavLink } from '@mantine/core';
import { IconGauge, IconFingerprint } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <NavLink
        href="#required-for-focus"
        label="First parent link"
        leftSection={<IconGauge size="1rem" stroke={1.5} />}
        childrenOffset={28}
      >
        <NavLink href="#required-for-focus" label="First child link" />
        <NavLink label="Second child link" href="#required-for-focus" />
        <NavLink label="Nested parent link" childrenOffset={28} href="#required-for-focus">
          <NavLink label="First child link" href="#required-for-focus" />
          <NavLink label="Second child link" href="#required-for-focus" />
          <NavLink label="Third child link" href="#required-for-focus" />
        </NavLink>
      </NavLink>

      <NavLink
        href="#required-for-focus"
        label="Second parent link"
        leftSection={<IconFingerprint size="1rem" stroke={1.5} />}
        childrenOffset={28}
        defaultOpened
      >
        <NavLink label="First child link" href="#required-for-focus" />
        <NavLink label="Second child link" href="#required-for-focus" />
        <NavLink label="Third child link" href="#required-for-focus" />
      </NavLink>
    </>
  );
}
`,Z={type:"code",centered:!0,maxWidth:240,component:function(){return o.createElement(o.Fragment,null,o.createElement(q,{href:"#required-for-focus",label:"First parent link",leftSection:o.createElement(c,{size:"1rem",stroke:1.5}),childrenOffset:28},o.createElement(q,{href:"#required-for-focus",label:"First child link"}),o.createElement(q,{label:"Second child link",href:"#required-for-focus"}),o.createElement(q,{label:"Nested parent link",childrenOffset:28,href:"#required-for-focus"},o.createElement(q,{label:"First child link",href:"#required-for-focus"}),o.createElement(q,{label:"Second child link",href:"#required-for-focus"}),o.createElement(q,{label:"Third child link",href:"#required-for-focus"}))),o.createElement(q,{href:"#required-for-focus",label:"Second parent link",leftSection:o.createElement(I,{size:"1rem",stroke:1.5}),childrenOffset:28,defaultOpened:!0},o.createElement(q,{label:"First child link",href:"#required-for-focus"}),o.createElement(q,{label:"Second child link",href:"#required-for-focus"}),o.createElement(q,{label:"Third child link",href:"#required-for-focus"})))},code:M};var R=r(3916),O=r(30289);let D=(0,R.A)(O.us.NavLink);function _(e){let t={code:"code",h2:"h2",p:"p",...(0,n.a)(),...e.components},{Demo:r,GetElementRef:o,Polymorphic:l}=t;return r||B("Demo",!0),o||B("GetElementRef",!0),l||B("Polymorphic",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(r,{data:z}),"\n",(0,i.jsx)(t.h2,{id:"active",children:"Active"}),"\n",(0,i.jsxs)(t.p,{children:["Set ",(0,i.jsx)(t.code,{children:"active"})," prop to add active styles to ",(0,i.jsx)(t.code,{children:"NavLink"}),". You can customize active styles with ",(0,i.jsx)(t.code,{children:"color"})," and ",(0,i.jsx)(t.code,{children:"variant"})," props:"]}),"\n",(0,i.jsx)(r,{data:F}),"\n",(0,i.jsx)(t.h2,{id:"nested-navlinks",children:"Nested NavLinks"}),"\n",(0,i.jsxs)(t.p,{children:["To create nested links put ",(0,i.jsx)(t.code,{children:"NavLink"})," as children of another ",(0,i.jsx)(t.code,{children:"NavLink"}),":"]}),"\n",(0,i.jsx)(r,{data:Z}),"\n",(0,i.jsx)(l,{defaultElement:"a",changeToElement:"button",component:"NavLink",withNext:!0}),"\n",(0,i.jsx)(o,{component:"NavLink",refType:"a"})]})}function T(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,i.jsx)(D,{...e,children:(0,i.jsx)(_,{...e})})}function B(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1189:function(e,t,r){"use strict";r.d(t,{Q:function(){return o}});var i=r(27378),n=r(71078);function o({style:e,size:t=16,...r}){return i.createElement("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{...e,width:(0,n.h)(t),height:(0,n.h)(t),display:"block"},...r},i.createElement("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}o.displayName="@mantine/core/AccordionChevron"},73988:function(e,t,r){"use strict";r.d(t,{C:function(){return m}});var i=r(27378),n=r(92082),o=r(83453),l=r(89738),a=r(96739),c=r(6231),s=r(56589),d=r(50332),f={root:"m-347db0ec","root--dot":"m-fbd81e3d",label:"m-5add502a",section:"m-91fdda9b"};let h={},u=(0,o.Z)((e,{radius:t,color:r,gradient:i,variant:o,size:a})=>{let c=e.variantColorResolver({color:r||e.primaryColor,theme:e,gradient:i,variant:o||"filled"});return{root:{"--badge-height":(0,n.ap)(a,"badge-height"),"--badge-padding-x":(0,n.ap)(a,"badge-padding-x"),"--badge-fz":(0,n.ap)(a,"badge-fz"),"--badge-radius":void 0===t?void 0:(0,n.H5)(t),"--badge-bg":r||o?c.background:void 0,"--badge-color":r||o?c.color:void 0,"--badge-bd":r||o?c.border:void 0,"--badge-dot-color":"dot"===o?(0,l.p)(r,e):void 0}}}),m=(0,d.b)((e,t)=>{let r=(0,a.w)("Badge",h,e),{classNames:n,className:o,style:l,styles:d,unstyled:m,vars:v,radius:p,color:g,gradient:k,leftSection:b,rightSection:y,children:E,variant:N,fullWidth:S,...x}=r,q=(0,c.y)({name:"Badge",props:r,classes:f,className:o,style:l,classNames:n,styles:d,unstyled:m,vars:v,varsResolver:u});return i.createElement(s.x,{variant:N,mod:{block:S},...q("root",{variant:N}),ref:t,...x},b&&i.createElement("span",{...q("section"),"data-position":"left"},b),i.createElement("span",{...q("label")},E),y&&i.createElement("span",{...q("section"),"data-position":"right"},y))});m.classes=f,m.displayName="@mantine/core/Badge"},4184:function(e,t,r){"use strict";r.d(t,{U:function(){return p}});var i=r(27378),n=r(82269),o=r(2256),l=r(96739),a=r(48649),c=r(56589),s=r(20410),d=r(31542),f=r(82591),h=r(72840);function u(e){return e?.current?e.current.scrollHeight:"auto"}let m="undefined"!=typeof window&&window.requestAnimationFrame,v={transitionDuration:200,transitionTimingFunction:"ease",animateOpacity:!0},p=(0,s.d)((e,t)=>{let{children:r,in:s,transitionDuration:p,transitionTimingFunction:g,style:k,onTransitionEnd:b,animateOpacity:y,...E}=(0,l.w)("Collapse",v,e),N=(0,o.rZ)(),S=(0,n.J)(),x=!!N.respectReducedMotion&&S,q=x?0:p,L=function({transitionDuration:e,transitionTimingFunction:t="ease",onTransitionEnd:r=()=>{},opened:n}){let o=(0,i.useRef)(null),l={display:"none",height:0,overflow:"hidden"},[a,c]=(0,i.useState)(n?{}:l),s=e=>{(0,d.flushSync)(()=>c(e))},v=e=>{s(t=>({...t,...e}))};function p(r){let i=e||function(e){if(!e||"string"==typeof e)return 0;let t=e/36;return Math.round((4+15*t**.25+t/5)*10)}(r);return{transition:`height ${i}ms ${t}`}}(0,f.l)(()=>{"function"==typeof m&&(n?m(()=>{v({willChange:"height",display:"block",overflow:"hidden"}),m(()=>{let e=u(o);v({...p(e),height:e})})}):m(()=>{let e=u(o);v({...p(e),willChange:"height",height:e}),m(()=>v({height:0,overflow:"hidden"}))}))},[n]);let g=e=>{if(e.target===o.current&&"height"===e.propertyName){if(n){let e=u(o);e===a.height?s({}):v({height:e}),r()}else 0===a.height&&(s(l),r())}};return function({style:e={},refKey:t="ref",...r}={}){let i=r[t];return{"aria-hidden":!n,...r,[t]:(0,h.lq)(o,i),onTransitionEnd:g,style:{boxSizing:"border-box",...e,...a}}}}({opened:s,transitionDuration:q,transitionTimingFunction:g,onTransitionEnd:b});return 0===q?s?i.createElement(c.x,{...E},r):null:i.createElement(c.x,{...L({style:(0,a.c)(k,N),ref:t,...E})},i.createElement("div",{style:{opacity:s||!y?1:0,transition:y?`opacity ${q}ms ${g}`:"none"}},r))});p.displayName="@mantine/core/Collapse"}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=88037)}),_N_E=e.O()}]);