(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1938],{2769:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var i=(0,r(99882).Z)("chevron-right","IconChevronRight",[["path",{d:"M9 6l6 6l-6 6",key:"svg-0"}]])},71091:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var i=(0,r(99882).Z)("fingerprint","IconFingerprint",[["path",{d:"M18.9 7a8 8 0 0 1 1.1 5v1a6 6 0 0 0 .8 3",key:"svg-0"}],["path",{d:"M8 11a4 4 0 0 1 8 0v1a10 10 0 0 0 2 6",key:"svg-1"}],["path",{d:"M12 11v2a14 14 0 0 0 2.5 8",key:"svg-2"}],["path",{d:"M8 15a18 18 0 0 0 1.8 6",key:"svg-3"}],["path",{d:"M4.9 19a22 22 0 0 1 -.9 -7v-1a8 8 0 0 1 12 -6.95",key:"svg-4"}]])},69888:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/nav-link",function(){return r(37391)}])},37391:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return G}});var i=r(52322),n=r(45392),o=r(2784),a=r(99882),l=(0,a.Z)("home-2","IconHome2",[["path",{d:"M5 12l-2 0l9 -9l9 9l-2 0",key:"svg-0"}],["path",{d:"M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7",key:"svg-1"}],["path",{d:"M10 12h4v4h-4z",key:"svg-2"}]]),c=(0,a.Z)("gauge","IconGauge",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-1"}],["path",{d:"M13.41 10.59l2.59 -2.59",key:"svg-2"}],["path",{d:"M7 12a5 5 0 0 1 5 -5",key:"svg-3"}]]),s=r(2769),d=(0,a.Z)("circle-off","IconCircleOff",[["path",{d:"M20.042 16.045a9 9 0 0 0 -12.087 -12.087m-2.318 1.677a9 9 0 1 0 12.725 12.73",key:"svg-0"}],["path",{d:"M3 3l18 18",key:"svg-1"}]]),f=(0,a.Z)("activity","IconActivity",[["path",{d:"M3 12h4l3 8l4 -16l3 8h4",key:"svg-0"}]]),u=r(9341),m=r(91482),h=r(11200),v=r(38483),p=r(62378),k=r(28559),g=r(33502),b=r(46752),y=r(15271),E=r(63409),N={root:"m-f0824112",description:"m-57492dcc",section:"m-690090b5",label:"m-1f6ac4c4",body:"m-f07af9d2",children:"m-e17b862f",chevron:"m-1fd8a00b"};let S={},x=(0,h.Z)((e,{variant:t,color:r,childrenOffset:i,autoContrast:n})=>{let o=e.variantColorResolver({color:r||e.primaryColor,theme:e,variant:t||"light",autoContrast:n});return{root:{"--nl-bg":r||t?o.background:void 0,"--nl-hover":r||t?o.hover:void 0,"--nl-color":r||t?o.color:void 0},children:{"--nl-offset":(0,m.bG)(i)}}}),L=(0,g.b)((e,t)=>{let r=(0,v.w)("NavLink",S,e),{classNames:i,className:n,style:a,styles:l,unstyled:c,vars:s,opened:d,defaultOpened:f,onChange:m,children:h,onClick:g,active:L,disabled:q,leftSection:C,rightSection:z,label:I,description:w,disableRightSectionRotation:A,noWrap:j,childrenOffset:F,onKeyDown:Z,autoContrast:M,mod:D,...R}=r,O=(0,p.y)({name:"NavLink",props:r,classes:N,className:n,style:a,classNames:i,styles:l,unstyled:c,vars:s,varsResolver:x}),[_,T]=(0,u.C)({value:d,defaultValue:f,finalValue:!1,onChange:m}),B=!!h;return o.createElement(o.Fragment,null,o.createElement(E.k,{...O("root"),component:"a",ref:t,onClick:e=>{g?.(e),B&&(e.preventDefault(),T(!_))},onKeyDown:e=>{Z?.(e),"Space"===e.nativeEvent.code&&B&&(e.preventDefault(),T(!_))},unstyled:c,mod:[{disabled:q,active:L,expanded:_},D],...R},C&&o.createElement(k.x,{component:"span",...O("section"),mod:{position:"left"}},C),o.createElement(k.x,{...O("body"),mod:{"no-wrap":j}},o.createElement(k.x,{component:"span",...O("label")},I),o.createElement(k.x,{component:"span",mod:{active:L},...O("description")},w)),(B||z)&&o.createElement(k.x,{...O("section"),component:"span",mod:{rotate:_&&!A,position:"right"}},B?z||o.createElement(b.Q,{...O("chevron")}):z)),o.createElement(y.U,{in:_,...O("collapse")},o.createElement("div",{...O("children")},h)))});L.classes=N,L.displayName="@mantine/core/NavLink";var q=r(32581);let C=`
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
          <Badge size="xs" color="red" circle>
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
`,z={type:"code",centered:!0,maxWidth:240,component:function(){return o.createElement(o.Fragment,null,o.createElement(L,{href:"#required-for-focus",label:"With icon",leftSection:o.createElement(l,{size:"1rem",stroke:1.5})}),o.createElement(L,{href:"#required-for-focus",label:"With right section",leftSection:o.createElement(c,{size:"1rem",stroke:1.5}),rightSection:o.createElement(s.Z,{size:"0.8rem",stroke:1.5,className:"mantine-rotate-rtl"})}),o.createElement(L,{href:"#required-for-focus",label:"Disabled",leftSection:o.createElement(d,{size:"1rem",stroke:1.5}),disabled:!0}),o.createElement(L,{href:"#required-for-focus",label:"With description",description:"Additional information",leftSection:o.createElement(q.C,{size:"xs",color:"red",circle:!0},"3")}),o.createElement(L,{href:"#required-for-focus",label:"Active subtle",leftSection:o.createElement(f,{size:"1rem",stroke:1.5}),rightSection:o.createElement(s.Z,{size:"0.8rem",stroke:1.5,className:"mantine-rotate-rtl"}),variant:"subtle",active:!0}),o.createElement(L,{href:"#required-for-focus",label:"Active light",leftSection:o.createElement(f,{size:"1rem",stroke:1.5}),rightSection:o.createElement(s.Z,{size:"0.8rem",stroke:1.5,className:"mantine-rotate-rtl"}),active:!0}),o.createElement(L,{href:"#required-for-focus",label:"Active filled",leftSection:o.createElement(f,{size:"1rem",stroke:1.5}),rightSection:o.createElement(s.Z,{size:"0.8rem",stroke:1.5,className:"mantine-rotate-rtl"}),variant:"filled",active:!0}))},code:C};var I=r(71091),w=r(93010);let A=`
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
      leftSection={<item.icon size="1rem" stroke={1.5} />}
      onClick={() => setActive(index)}
      {{props}}
    />
  ));

  return <Box w={220}>{items}</Box>;
}
`,j=[{icon:c,label:"Dashboard",description:"Item with description"},{icon:I.Z,label:"Security",rightSection:o.createElement(s.Z,{size:"1rem",stroke:1.5})},{icon:f,label:"Activity"}],F={type:"configurator",component:function(e){let[t,r]=(0,o.useState)(0),i=j.map((i,n)=>o.createElement(L,{href:"#required-for-focus",key:i.label,active:n===t,label:i.label,description:i.description,rightSection:i.rightSection,leftSection:o.createElement(i.icon,{size:"1rem",stroke:1.5}),onClick:()=>r(n),...e}));return o.createElement(w.Z,{justify:"center"},o.createElement(k.x,{w:220},i))},code:A,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"variant",type:"segmented",data:[{value:"subtle",label:"Subtle"},{value:"light",label:"Light"},{value:"filled",label:"Filled"}],libraryValue:"light",initialValue:"light"}]},Z=`
import { NavLink } from '@mantine/core';

function Demo() {
  return (
    <>
      <NavLink color="lime.4" variant="filled" active label="Default" />
      <NavLink color="lime.4" variant="filled" active autoContrast label="Auto contrast" />
    </>
  );
}
`,M={type:"code",component:function(){return o.createElement(o.Fragment,null,o.createElement(L,{color:"lime.4",variant:"filled",active:!0,label:"Default"}),o.createElement(L,{color:"lime.4",variant:"filled",active:!0,autoContrast:!0,label:"Auto contrast"}))},code:Z,centered:!0,maxWidth:300},D=`
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
`,R={type:"code",centered:!0,maxWidth:240,component:function(){return o.createElement(o.Fragment,null,o.createElement(L,{href:"#required-for-focus",label:"First parent link",leftSection:o.createElement(c,{size:"1rem",stroke:1.5}),childrenOffset:28},o.createElement(L,{href:"#required-for-focus",label:"First child link"}),o.createElement(L,{label:"Second child link",href:"#required-for-focus"}),o.createElement(L,{label:"Nested parent link",childrenOffset:28,href:"#required-for-focus"},o.createElement(L,{label:"First child link",href:"#required-for-focus"}),o.createElement(L,{label:"Second child link",href:"#required-for-focus"}),o.createElement(L,{label:"Third child link",href:"#required-for-focus"}))),o.createElement(L,{href:"#required-for-focus",label:"Second parent link",leftSection:o.createElement(I.Z,{size:"1rem",stroke:1.5}),childrenOffset:28,defaultOpened:!0},o.createElement(L,{label:"First child link",href:"#required-for-focus"}),o.createElement(L,{label:"Second child link",href:"#required-for-focus"}),o.createElement(L,{label:"Third child link",href:"#required-for-focus"})))},code:D};var O=r(79016),_=r(33638);let T=(0,O.A)(_.us.NavLink);function B(e){let t={code:"code",h2:"h2",p:"p",...(0,n.a)(),...e.components},{AutoContrast:r,Demo:o,GetElementRef:a,Polymorphic:l}=t;return r||W("AutoContrast",!0),o||W("Demo",!0),a||W("GetElementRef",!0),l||W("Polymorphic",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(o,{data:z}),"\n",(0,i.jsx)(t.h2,{id:"active",children:"Active"}),"\n",(0,i.jsxs)(t.p,{children:["Set ",(0,i.jsx)(t.code,{children:"active"})," prop to add active styles to ",(0,i.jsx)(t.code,{children:"NavLink"}),". You can customize active styles with ",(0,i.jsx)(t.code,{children:"color"})," and ",(0,i.jsx)(t.code,{children:"variant"})," props:"]}),"\n",(0,i.jsx)(o,{data:F}),"\n",(0,i.jsx)(r,{component:"NavLink"}),"\n",(0,i.jsx)(o,{data:M}),"\n",(0,i.jsx)(t.h2,{id:"nested-navlinks",children:"Nested NavLinks"}),"\n",(0,i.jsxs)(t.p,{children:["To create nested links put ",(0,i.jsx)(t.code,{children:"NavLink"})," as children of another ",(0,i.jsx)(t.code,{children:"NavLink"}),":"]}),"\n",(0,i.jsx)(o,{data:R}),"\n",(0,i.jsx)(l,{defaultElement:"a",changeToElement:"button",component:"NavLink",withNext:!0}),"\n",(0,i.jsx)(a,{component:"NavLink",refType:"a"})]})}function G(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,i.jsx)(T,{...e,children:(0,i.jsx)(B,{...e})})}function W(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},46752:function(e,t,r){"use strict";r.d(t,{Q:function(){return o}});var i=r(2784),n=r(58898);function o({style:e,size:t=16,...r}){return i.createElement("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{...e,width:(0,n.h)(t),height:(0,n.h)(t),display:"block"},...r},i.createElement("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}o.displayName="@mantine/core/AccordionChevron"},32581:function(e,t,r){"use strict";r.d(t,{C:function(){return h}});var i=r(2784),n=r(91482),o=r(11200),a=r(13588),l=r(38483),c=r(62378),s=r(28559),d=r(33502),f={root:"m-347db0ec","root--dot":"m-fbd81e3d",label:"m-5add502a",section:"m-91fdda9b"};let u={},m=(0,o.Z)((e,{radius:t,color:r,gradient:i,variant:o,size:l,autoContrast:c})=>{let s=e.variantColorResolver({color:r||e.primaryColor,theme:e,gradient:i,variant:o||"filled",autoContrast:c});return{root:{"--badge-height":(0,n.ap)(l,"badge-height"),"--badge-padding-x":(0,n.ap)(l,"badge-padding-x"),"--badge-fz":(0,n.ap)(l,"badge-fz"),"--badge-radius":void 0===t?void 0:(0,n.H5)(t),"--badge-bg":r||o?s.background:void 0,"--badge-color":r||o?s.color:void 0,"--badge-bd":r||o?s.border:void 0,"--badge-dot-color":"dot"===o?(0,a.p)(r,e):void 0}}}),h=(0,d.b)((e,t)=>{let r=(0,l.w)("Badge",u,e),{classNames:n,className:o,style:a,styles:d,unstyled:h,vars:v,radius:p,color:k,gradient:g,leftSection:b,rightSection:y,children:E,variant:N,fullWidth:S,autoContrast:x,circle:L,mod:q,...C}=r,z=(0,c.y)({name:"Badge",props:r,classes:f,className:o,style:a,classNames:n,styles:d,unstyled:h,vars:v,varsResolver:m});return i.createElement(s.x,{variant:N,mod:[{block:S,circle:L},q],...z("root",{variant:N}),ref:t,...C},b&&i.createElement("span",{...z("section"),"data-position":"left"},b),i.createElement("span",{...z("label")},E),y&&i.createElement("span",{...z("section"),"data-position":"right"},y))});h.classes=f,h.displayName="@mantine/core/Badge"},15271:function(e,t,r){"use strict";r.d(t,{U:function(){return p}});var i=r(2784),n=r(98045),o=r(68755),a=r(38483),l=r(6178),c=r(28559),s=r(82027),d=r(28316),f=r(71978),u=r(70837);function m(e){return e?.current?e.current.scrollHeight:"auto"}let h="undefined"!=typeof window&&window.requestAnimationFrame,v={transitionDuration:200,transitionTimingFunction:"ease",animateOpacity:!0},p=(0,s.d)((e,t)=>{let{children:r,in:s,transitionDuration:p,transitionTimingFunction:k,style:g,onTransitionEnd:b,animateOpacity:y,...E}=(0,a.w)("Collapse",v,e),N=(0,o.rZ)(),S=(0,n.J)(),x=!!N.respectReducedMotion&&S,L=x?0:p,q=function({transitionDuration:e,transitionTimingFunction:t="ease",onTransitionEnd:r=()=>{},opened:n}){let o=(0,i.useRef)(null),a={display:"none",height:0,overflow:"hidden"},[l,c]=(0,i.useState)(n?{}:a),s=e=>{(0,d.flushSync)(()=>c(e))},v=e=>{s(t=>({...t,...e}))};function p(r){let i=e||function(e){if(!e||"string"==typeof e)return 0;let t=e/36;return Math.round((4+15*t**.25+t/5)*10)}(r);return{transition:`height ${i}ms ${t}, opacity ${i}ms ${t}`}}(0,f.l)(()=>{"function"==typeof h&&(n?h(()=>{v({willChange:"height",display:"block",overflow:"hidden"}),h(()=>{let e=m(o);v({...p(e),height:e})})}):h(()=>{let e=m(o);v({...p(e),willChange:"height",height:e}),h(()=>v({height:0,overflow:"hidden"}))}))},[n]);let k=e=>{if(e.target===o.current&&"height"===e.propertyName){if(n){let e=m(o);e===l.height?s({}):v({height:e}),r()}else 0===l.height&&(s(a),r())}};return function({style:e={},refKey:t="ref",...r}={}){let i=r[t];return{"aria-hidden":!n,...r,[t]:(0,u.lq)(o,i),onTransitionEnd:k,style:{boxSizing:"border-box",...e,...l}}}}({opened:s,transitionDuration:L,transitionTimingFunction:k,onTransitionEnd:b});return 0===L?s?i.createElement(c.x,{...E},r):null:i.createElement(c.x,{...q({style:{opacity:s||!y?1:0,transition:y?`opacity ${L}ms ${k}`:"none",...(0,l.c)(g,N)},ref:t,...E})},r)});p.displayName="@mantine/core/Collapse"}},function(e){e.O(0,[57938,17454,47747,49774,92888,40179],function(){return e(e.s=69888)}),_N_E=e.O()}]);