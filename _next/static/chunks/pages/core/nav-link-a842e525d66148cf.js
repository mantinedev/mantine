(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1938],{84605:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var i=(0,n(54764).Z)("chevron-right","IconChevronRight",[["path",{d:"M9 6l6 6l-6 6",key:"svg-0"}]])},88037:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/nav-link",function(){return n(29569)}])},29569:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return B}});var i=n(24246),l=n(71670),r=n(3916),a=n(30289),o=n(27378),c=n(58675),s=n(92082),d=n(83453),m=n(96739),h=n(6231),v=n(56589),p=n(50332),u=n(19397),f=n(1189),g=n(4184),k={root:"m-f0824112",description:"m-57492dcc",section:"m-690090b5",label:"m-1f6ac4c4",body:"m-f07af9d2",children:"m-e17b862f",chevron:"m-1fd8a00b"};let b={},y=(0,d.Z)((e,{variant:t,color:n,childrenOffset:i})=>{let l=e.variantColorResolver({color:n||e.primaryColor,theme:e,variant:t||"light"});return{root:{"--nl-bg":n||t?l.background:void 0,"--nl-hover":n||t?l.hover:void 0,"--nl-color":n||t?l.color:void 0},children:{"--nl-offset":(0,s.bG)(i)}}}),E=(0,p.b)((e,t)=>{let n=(0,m.w)("NavLink",b,e),{classNames:i,className:l,style:r,styles:a,unstyled:s,vars:d,opened:p,defaultOpened:E,onChange:N,children:S,onClick:x,active:L,disabled:z,leftSection:I,rightSection:w,label:C,description:A,disableRightSectionRotation:j,noWrap:F,childrenOffset:M,...Z}=n,R=(0,h.y)({name:"NavLink",props:n,classes:k,className:l,style:r,classNames:i,styles:a,unstyled:s,vars:d,varsResolver:y}),[O,_]=(0,c.C)({value:p,defaultValue:E,finalValue:!1,onChange:N}),D=!!S;return o.createElement(o.Fragment,null,o.createElement(u.k,{...R("root"),component:"a",ref:t,onClick:e=>{D?(e.preventDefault(),x?.(e),_(!O)):x?.(e)},unstyled:s,mod:{disabled:z,active:L,expanded:O},...Z},I&&o.createElement(v.x,{component:"span",...R("section"),mod:{position:"left"}},I),o.createElement(v.x,{...R("body"),mod:{"no-wrap":F}},o.createElement(v.x,{component:"span",...R("label")},C),o.createElement(v.x,{component:"span",mod:{active:L},...R("description")},A)),(D||w)&&o.createElement(v.x,{...R("section"),component:"span",mod:{rotate:O&&!j,position:"right"}},D?w||o.createElement(f.Q,{...R("chevron")}):w)),o.createElement(g.U,{in:O},o.createElement("div",{...R("children")},S)))});E.classes=k,E.displayName="@mantine/core/NavLink";var N=n(73988),S=n(54764),x=(0,S.Z)("home-2","IconHome2",[["path",{d:"M5 12l-2 0l9 -9l9 9l-2 0",key:"svg-0"}],["path",{d:"M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7",key:"svg-1"}],["path",{d:"M10 12h4v4h-4z",key:"svg-2"}]]),L=(0,S.Z)("gauge","IconGauge",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-1"}],["path",{d:"M13.41 10.59l2.59 -2.59",key:"svg-2"}],["path",{d:"M7 12a5 5 0 0 1 5 -5",key:"svg-3"}]]),z=n(84605),I=(0,S.Z)("circle-off","IconCircleOff",[["path",{d:"M20.042 16.045a9 9 0 0 0 -12.087 -12.087m-2.318 1.677a9 9 0 1 0 12.725 12.73",key:"svg-0"}],["path",{d:"M3 3l18 18",key:"svg-1"}]]),w=(0,S.Z)("activity","IconActivity",[["path",{d:"M3 12h4l3 8l4 -16l3 8h4",key:"svg-0"}]]);let C=`
import { Badge, NavLink } from '@mantine/core';
import { IconHome2, IconGauge, IconChevronRight, IconActivity, IconCircleOff } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <NavLink label="With icon" leftSection={<IconHome2 size="1rem" stroke={1.5} />} />
      <NavLink
        label="With right section"
        leftSection={<IconGauge size="1rem" stroke={1.5} />}
        rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
      />
      <NavLink label="Disabled" leftSection={<IconCircleOff size="1rem" stroke={1.5} />} disabled />
      <NavLink
        label="With description"
        description="Additional information"
        leftSection={
          <Badge size="xs" variant="filled" color="red" w={16} h={16} p={0}>
            3
          </Badge>
        }
      />
      <NavLink
        label="Active subtle"
        leftSection={<IconActivity size="1rem" stroke={1.5} />}
        rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
        variant="subtle"
        active
      />
      <NavLink
        label="Active light"
        leftSection={<IconActivity size="1rem" stroke={1.5} />}
        rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
        active
      />
      <NavLink
        label="Active filled"
        leftSection={<IconActivity size="1rem" stroke={1.5} />}
        rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
        variant="filled"
        active
      />
    </>
  );
}
`,A={type:"code",centered:!0,maxWidth:240,component:function(){return o.createElement(o.Fragment,null,o.createElement(E,{label:"With icon",leftSection:o.createElement(x,{size:"1rem",stroke:1.5})}),o.createElement(E,{label:"With right section",leftSection:o.createElement(L,{size:"1rem",stroke:1.5}),rightSection:o.createElement(z.Z,{size:"0.8rem",stroke:1.5,className:"mantine-rotate-rtl"})}),o.createElement(E,{label:"Disabled",leftSection:o.createElement(I,{size:"1rem",stroke:1.5}),disabled:!0}),o.createElement(E,{label:"With description",description:"Additional information",leftSection:o.createElement(N.C,{size:"xs",variant:"filled",color:"red",w:16,h:16,p:0},"3")}),o.createElement(E,{label:"Active subtle",leftSection:o.createElement(w,{size:"1rem",stroke:1.5}),rightSection:o.createElement(z.Z,{size:"0.8rem",stroke:1.5,className:"mantine-rotate-rtl"}),variant:"subtle",active:!0}),o.createElement(E,{label:"Active light",leftSection:o.createElement(w,{size:"1rem",stroke:1.5}),rightSection:o.createElement(z.Z,{size:"0.8rem",stroke:1.5,className:"mantine-rotate-rtl"}),active:!0}),o.createElement(E,{label:"Active filled",leftSection:o.createElement(w,{size:"1rem",stroke:1.5}),rightSection:o.createElement(z.Z,{size:"0.8rem",stroke:1.5,className:"mantine-rotate-rtl"}),variant:"filled",active:!0}))},code:C};var j=(0,S.Z)("fingerprint","IconFingerprint",[["path",{d:"M18.9 7a8 8 0 0 1 1.1 5v1a6 6 0 0 0 .8 3",key:"svg-0"}],["path",{d:"M8 11a4 4 0 0 1 8 0v1a10 10 0 0 0 2 6",key:"svg-1"}],["path",{d:"M12 11v2a14 14 0 0 0 2.5 8",key:"svg-2"}],["path",{d:"M8 15a18 18 0 0 0 1.8 6",key:"svg-3"}],["path",{d:"M4.9 19a22 22 0 0 1 -.9 -7v-1a8 8 0 0 1 12 -6.95",key:"svg-4"}]]),F=n(22971);let M=`
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
`,Z=[{icon:L,label:"Dashboard",description:"Item with description"},{icon:j,label:"Security",rightSection:o.createElement(z.Z,{size:"1rem",stroke:1.5})},{icon:w,label:"Activity"}],R={type:"configurator",component:function(e){let[t,n]=(0,o.useState)(0),i=Z.map((i,l)=>o.createElement(E,{key:i.label,active:l===t,label:i.label,description:i.description,rightSection:i.rightSection,icon:o.createElement(i.icon,{size:"1rem",stroke:1.5}),onClick:()=>n(l),...e}));return o.createElement(F.Z,{justify:"center"},o.createElement(v.x,{w:220},i))},code:M,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"variant",type:"segmented",data:[{value:"subtle",label:"Subtle"},{value:"light",label:"Light"},{value:"filled",label:"Filled"}],libraryValue:"light",initialValue:"light"}]},O=`
import { NavLink } from '@mantine/core';
import { IconGauge, IconFingerprint } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <NavLink
        label="First parent link"
        leftSection={<IconGauge size="1rem" stroke={1.5} />}
        childrenOffset={28}
      >
        <NavLink label="First child link" />
        <NavLink label="Second child link" />
        <NavLink label="Nested parent link" childrenOffset={28}>
          <NavLink label="First child link" />
          <NavLink label="Second child link" />
          <NavLink label="Third child link" />
        </NavLink>
      </NavLink>

      <NavLink
        label="Second parent link"
        leftSection={<IconFingerprint size="1rem" stroke={1.5} />}
        childrenOffset={28}
        defaultOpened
      >
        <NavLink label="First child link" />
        <NavLink label="Second child link" />
        <NavLink label="Third child link" />
      </NavLink>
    </>
  );
}
`,_={type:"code",centered:!0,maxWidth:240,component:function(){return o.createElement(o.Fragment,null,o.createElement(E,{label:"First parent link",leftSection:o.createElement(L,{size:"1rem",stroke:1.5}),childrenOffset:28},o.createElement(E,{label:"First child link"}),o.createElement(E,{label:"Second child link"}),o.createElement(E,{label:"Nested parent link",childrenOffset:28},o.createElement(E,{label:"First child link"}),o.createElement(E,{label:"Second child link"}),o.createElement(E,{label:"Third child link"}))),o.createElement(E,{label:"Second parent link",leftSection:o.createElement(j,{size:"1rem",stroke:1.5}),childrenOffset:28,defaultOpened:!0},o.createElement(E,{label:"First child link"}),o.createElement(E,{label:"Second child link"}),o.createElement(E,{label:"Third child link"})))},code:O},D=(0,r.A)(a.us.NavLink);function T(e){let t={code:"code",h2:"h2",p:"p",...(0,l.a)(),...e.components},{Demo:n,GetElementRef:r,Polymorphic:a}=t;return n||G("Demo",!0),r||G("GetElementRef",!0),a||G("Polymorphic",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(n,{data:A}),"\n",(0,i.jsx)(t.h2,{id:"active",children:"Active"}),"\n",(0,i.jsxs)(t.p,{children:["Set ",(0,i.jsx)(t.code,{children:"active"})," prop to add active styles to ",(0,i.jsx)(t.code,{children:"NavLink"}),". You can customize active styles with ",(0,i.jsx)(t.code,{children:"color"})," and ",(0,i.jsx)(t.code,{children:"variant"})," props:"]}),"\n",(0,i.jsx)(n,{data:R}),"\n",(0,i.jsx)(t.h2,{id:"nested-navlinks",children:"Nested NavLinks"}),"\n",(0,i.jsxs)(t.p,{children:["To create nested links put ",(0,i.jsx)(t.code,{children:"NavLink"})," as children of another ",(0,i.jsx)(t.code,{children:"NavLink"}),":"]}),"\n",(0,i.jsx)(n,{data:_}),"\n",(0,i.jsx)(a,{defaultElement:"a",changeToElement:"button",component:"NavLink",withNext:!0}),"\n",(0,i.jsx)(r,{component:"NavLink",refType:"a"})]})}function B(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,i.jsx)(D,{...e,children:(0,i.jsx)(T,{...e})})}function G(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1189:function(e,t,n){"use strict";n.d(t,{Q:function(){return r}});var i=n(27378),l=n(71078);function r({style:e,size:t=16,...n}){return i.createElement("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{...e,width:(0,l.h)(t),height:(0,l.h)(t),display:"block"},...n},i.createElement("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}r.displayName="@mantine/core/AccordionChevron"},73988:function(e,t,n){"use strict";n.d(t,{C:function(){return p}});var i=n(27378),l=n(92082),r=n(83453),a=n(89738),o=n(96739),c=n(6231),s=n(56589),d=n(50332),m={root:"m-347db0ec","root--dot":"m-fbd81e3d",label:"m-5add502a",section:"m-91fdda9b"};let h={},v=(0,r.Z)((e,{radius:t,color:n,gradient:i,variant:r,size:o})=>{let c=e.variantColorResolver({color:n||e.primaryColor,theme:e,gradient:i,variant:r||"filled"});return{root:{"--badge-height":(0,l.ap)(o,"badge-height"),"--badge-padding-x":(0,l.ap)(o,"badge-padding-x"),"--badge-fz":(0,l.ap)(o,"badge-fz"),"--badge-radius":void 0===t?void 0:(0,l.H5)(t),"--badge-bg":n||r?c.background:void 0,"--badge-color":n||r?c.color:void 0,"--badge-bd":n||r?c.border:void 0,"--badge-dot-color":"dot"===r?(0,a.p)(n,e):void 0}}}),p=(0,d.b)((e,t)=>{let n=(0,o.w)("Badge",h,e),{classNames:l,className:r,style:a,styles:d,unstyled:p,vars:u,radius:f,color:g,gradient:k,leftSection:b,rightSection:y,children:E,variant:N,fullWidth:S,...x}=n,L=(0,c.y)({name:"Badge",props:n,classes:m,className:r,style:a,classNames:l,styles:d,unstyled:p,vars:u,varsResolver:v});return i.createElement(s.x,{variant:N,mod:{block:S},...L("root",{variant:N}),ref:t,...x},b&&i.createElement("span",{...L("section"),"data-position":"left"},b),i.createElement("span",{...L("label")},E),y&&i.createElement("span",{...L("section"),"data-position":"right"},y))});p.classes=m,p.displayName="@mantine/core/Badge"},4184:function(e,t,n){"use strict";n.d(t,{U:function(){return f}});var i=n(27378),l=n(82269),r=n(2256),a=n(96739),o=n(48649),c=n(56589),s=n(20410),d=n(31542),m=n(82591),h=n(72840);function v(e){return e?.current?e.current.scrollHeight:"auto"}let p="undefined"!=typeof window&&window.requestAnimationFrame,u={transitionDuration:200,transitionTimingFunction:"ease",animateOpacity:!0},f=(0,s.d)((e,t)=>{let{children:n,in:s,transitionDuration:f,transitionTimingFunction:g,style:k,onTransitionEnd:b,animateOpacity:y,...E}=(0,a.w)("Collapse",u,e),N=(0,r.rZ)(),S=(0,l.J)(),x=!!N.respectReducedMotion&&S,L=x?0:f,z=function({transitionDuration:e,transitionTimingFunction:t="ease",onTransitionEnd:n=()=>{},opened:l}){let r=(0,i.useRef)(null),a={display:"none",height:0,overflow:"hidden"},[o,c]=(0,i.useState)(l?{}:a),s=e=>{(0,d.flushSync)(()=>c(e))},u=e=>{s(t=>({...t,...e}))};function f(n){let i=e||function(e){if(!e||"string"==typeof e)return 0;let t=e/36;return Math.round((4+15*t**.25+t/5)*10)}(n);return{transition:`height ${i}ms ${t}`}}(0,m.l)(()=>{"function"==typeof p&&(l?p(()=>{u({willChange:"height",display:"block",overflow:"hidden"}),p(()=>{let e=v(r);u({...f(e),height:e})})}):p(()=>{let e=v(r);u({...f(e),willChange:"height",height:e}),p(()=>u({height:0,overflow:"hidden"}))}))},[l]);let g=e=>{if(e.target===r.current&&"height"===e.propertyName){if(l){let e=v(r);e===o.height?s({}):u({height:e}),n()}else 0===o.height&&(s(a),n())}};return function({style:e={},refKey:t="ref",...n}={}){let i=n[t];return{"aria-hidden":!l,...n,[t]:(0,h.lq)(r,i),onTransitionEnd:g,style:{boxSizing:"border-box",...e,...o}}}}({opened:s,transitionDuration:L,transitionTimingFunction:g,onTransitionEnd:b});return 0===L?s?i.createElement(c.x,{...E},n):null:i.createElement(c.x,{...z({style:(0,o.c)(k,N),ref:t,...E})},i.createElement("div",{style:{opacity:s||!y?1:0,transition:y?`opacity ${L}ms ${g}`:"none"}},n))});f.displayName="@mantine/core/Collapse"}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=88037)}),_N_E=e.O()}]);