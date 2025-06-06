(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6104],{25249:(e,t,i)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/nav-link",function(){return i(59546)}])},59546:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>T});var r=i(31085),n=i(71184),o=i(73366),a=(0,o.A)("outline","home-2","IconHome2",[["path",{d:"M5 12l-2 0l9 -9l9 9l-2 0",key:"svg-0"}],["path",{d:"M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7",key:"svg-1"}],["path",{d:"M10 12h4v4h-4z",key:"svg-2"}]]),l=i(41299),s=i(65815),c=(0,o.A)("outline","circle-off","IconCircleOff",[["path",{d:"M20.042 16.045a9 9 0 0 0 -12.087 -12.087m-2.318 1.677a9 9 0 1 0 12.725 12.73",key:"svg-0"}],["path",{d:"M3 3l18 18",key:"svg-1"}]]),d=(0,o.A)("outline","activity","IconActivity",[["path",{d:"M3 12h4l3 8l4 -16l3 8h4",key:"svg-0"}]]),h=i(82307),f=i(14041),v=i(33450),u=i(7098),p=i(29686),k=i(69564),g=i(34056),m=i(2453),b=i(76076),x=i(60333),y=i(33970),j={root:"m_f0824112",description:"m_57492dcc",section:"m_690090b5",label:"m_1f6ac4c4",body:"m_f07af9d2",children:"m_e17b862f",chevron:"m_1fd8a00b"};let A={},N=(0,u.V)((e,{variant:t,color:i,childrenOffset:r,autoContrast:n})=>{let o=e.variantColorResolver({color:i||e.primaryColor,theme:e,variant:t||"light",autoContrast:n});return{root:{"--nl-bg":i||t?o.background:void 0,"--nl-hover":i||t?o.hover:void 0,"--nl-color":i||t?o.color:void 0},children:{"--nl-offset":(0,v.GY)(r)}}}),M=(0,m.v)((e,t)=>{let i=(0,p.Y)("NavLink",A,e),{classNames:n,className:o,style:a,styles:l,unstyled:s,vars:c,opened:d,defaultOpened:f,onChange:v,children:u,onClick:m,active:M,disabled:S,leftSection:I,rightSection:L,label:q,description:z,disableRightSectionRotation:w,noWrap:C,childrenOffset:_,onKeyDown:F,autoContrast:R,mod:D,...E}=i,O=(0,k.I)({name:"NavLink",props:i,classes:j,className:o,style:a,classNames:n,styles:l,unstyled:s,vars:c,varsResolver:N}),[T,W]=(0,h.Z)({value:d,defaultValue:f,finalValue:!1,onChange:v}),B=!!u;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(y.N,{...O("root"),component:"a",ref:t,onClick:e=>{m?.(e),B&&(e.preventDefault(),W(!T))},onKeyDown:e=>{F?.(e),"Space"===e.nativeEvent.code&&B&&(e.preventDefault(),W(!T))},unstyled:s,mod:[{disabled:S,active:M,expanded:T},D],...E,children:[I&&(0,r.jsx)(g.a,{component:"span",...O("section"),mod:{position:"left"},children:I}),(0,r.jsxs)(g.a,{...O("body"),mod:{"no-wrap":C},children:[(0,r.jsx)(g.a,{component:"span",...O("label"),children:q}),(0,r.jsx)(g.a,{component:"span",mod:{active:M},...O("description"),children:z})]}),(B||void 0!==L)&&(0,r.jsx)(g.a,{...O("section"),component:"span",mod:{rotate:T&&!w,position:"right"},children:B?void 0!==L?L:(0,r.jsx)(b.U,{...O("chevron")}):L})]}),B&&(0,r.jsx)(x.S,{in:T,...O("collapse"),children:(0,r.jsx)("div",{...O("children"),children:u})})]})});M.classes=j,M.displayName="@mantine/core/NavLink";var S=i(76644);let I={type:"code",centered:!0,maxWidth:240,component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(M,{href:"#required-for-focus",label:"With icon",leftSection:(0,r.jsx)(a,{size:16,stroke:1.5})}),(0,r.jsx)(M,{href:"#required-for-focus",label:"With right section",leftSection:(0,r.jsx)(l.A,{size:16,stroke:1.5}),rightSection:(0,r.jsx)(s.A,{size:12,stroke:1.5,className:"mantine-rotate-rtl"})}),(0,r.jsx)(M,{href:"#required-for-focus",label:"Disabled",leftSection:(0,r.jsx)(c,{size:16,stroke:1.5}),disabled:!0}),(0,r.jsx)(M,{href:"#required-for-focus",label:"With description",description:"Additional information",leftSection:(0,r.jsx)(S.E,{size:"xs",color:"red",circle:!0,children:"3"})}),(0,r.jsx)(M,{href:"#required-for-focus",label:"Active subtle",leftSection:(0,r.jsx)(d,{size:16,stroke:1.5}),rightSection:(0,r.jsx)(s.A,{size:12,stroke:1.5,className:"mantine-rotate-rtl"}),variant:"subtle",active:!0}),(0,r.jsx)(M,{href:"#required-for-focus",label:"Active light",leftSection:(0,r.jsx)(d,{size:16,stroke:1.5}),rightSection:(0,r.jsx)(s.A,{size:12,stroke:1.5,className:"mantine-rotate-rtl"}),active:!0}),(0,r.jsx)(M,{href:"#required-for-focus",label:"Active filled",leftSection:(0,r.jsx)(d,{size:16,stroke:1.5}),rightSection:(0,r.jsx)(s.A,{size:12,stroke:1.5,className:"mantine-rotate-rtl"}),variant:"filled",active:!0})]})},code:`
import { Badge, NavLink } from '@mantine/core';
import { IconHome2, IconGauge, IconChevronRight, IconActivity, IconCircleOff } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <NavLink
        href="#required-for-focus"
        label="With icon"
        leftSection={<IconHome2 size={16} stroke={1.5} />}
      />
      <NavLink
        href="#required-for-focus"
        label="With right section"
        leftSection={<IconGauge size={16} stroke={1.5} />}
        rightSection={
          <IconChevronRight size={12} stroke={1.5} className="mantine-rotate-rtl" />
        }
      />
      <NavLink
        href="#required-for-focus"
        label="Disabled"
        leftSection={<IconCircleOff size={16} stroke={1.5} />}
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
        leftSection={<IconActivity size={16} stroke={1.5} />}
        rightSection={
          <IconChevronRight size={12} stroke={1.5} className="mantine-rotate-rtl" />
        }
        variant="subtle"
        active
      />
      <NavLink
        href="#required-for-focus"
        label="Active light"
        leftSection={<IconActivity size={16} stroke={1.5} />}
        rightSection={
          <IconChevronRight size={12} stroke={1.5} className="mantine-rotate-rtl" />
        }
        active
      />
      <NavLink
        href="#required-for-focus"
        label="Active filled"
        leftSection={<IconActivity size={16} stroke={1.5} />}
        rightSection={
          <IconChevronRight size={12} stroke={1.5} className="mantine-rotate-rtl" />
        }
        variant="filled"
        active
      />
    </>
  );
}
`};var L=i(92854),q=i(56051);let z=`
import { useState } from 'react';
import { IconGauge, IconFingerprint, IconActivity, IconChevronRight } from '@tabler/icons-react';
import { Box, NavLink } from '@mantine/core';

const data = [
  { icon: IconGauge, label: 'Dashboard', description: 'Item with description' },
  {
    icon: IconFingerprint,
    label: 'Security',
    rightSection: <IconChevronRight size={16} stroke={1.5} />,
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
      leftSection={<item.icon size={16} stroke={1.5} />}
      onClick={() => setActive(index)}
      {{props}}
    />
  ));

  return <Box w={220}>{items}</Box>;
}
`,w=[{icon:l.A,label:"Dashboard",description:"Item with description"},{icon:L.A,label:"Security",rightSection:(0,r.jsx)(s.A,{size:16,stroke:1.5,className:"mantine-rotate-rtl"})},{icon:d,label:"Activity"}],C={type:"configurator",component:function(e){let[t,i]=(0,f.useState)(0),n=w.map((n,o)=>(0,r.jsx)(M,{href:"#required-for-focus",active:o===t,label:n.label,description:n.description,rightSection:n.rightSection,leftSection:(0,r.jsx)(n.icon,{size:16,stroke:1.5}),onClick:()=>i(o),...e},n.label));return(0,r.jsx)(q.Y,{justify:"center",children:(0,r.jsx)(g.a,{w:220,children:n})})},code:z,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"variant",type:"segmented",data:[{value:"subtle",label:"Subtle"},{value:"light",label:"Light"},{value:"filled",label:"Filled"}],libraryValue:"light",initialValue:"light"}]},_={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(M,{color:"lime.4",variant:"filled",active:!0,label:"Default"}),(0,r.jsx)(M,{color:"lime.4",variant:"filled",active:!0,autoContrast:!0,label:"Auto contrast"})]})},code:`
import { NavLink } from '@mantine/core';

function Demo() {
  return (
    <>
      <NavLink color="lime.4" variant="filled" active label="Default" />
      <NavLink color="lime.4" variant="filled" active autoContrast label="Auto contrast" />
    </>
  );
}
`,centered:!0,maxWidth:300},F={type:"code",centered:!0,maxWidth:240,component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(M,{href:"#required-for-focus",label:"First parent link",leftSection:(0,r.jsx)(l.A,{size:16,stroke:1.5}),childrenOffset:28,children:[(0,r.jsx)(M,{href:"#required-for-focus",label:"First child link"}),(0,r.jsx)(M,{label:"Second child link",href:"#required-for-focus"}),(0,r.jsxs)(M,{label:"Nested parent link",childrenOffset:28,href:"#required-for-focus",children:[(0,r.jsx)(M,{label:"First child link",href:"#required-for-focus"}),(0,r.jsx)(M,{label:"Second child link",href:"#required-for-focus"}),(0,r.jsx)(M,{label:"Third child link",href:"#required-for-focus"})]})]}),(0,r.jsxs)(M,{href:"#required-for-focus",label:"Second parent link",leftSection:(0,r.jsx)(L.A,{size:16,stroke:1.5}),childrenOffset:28,defaultOpened:!0,children:[(0,r.jsx)(M,{label:"First child link",href:"#required-for-focus"}),(0,r.jsx)(M,{label:"Second child link",href:"#required-for-focus"}),(0,r.jsx)(M,{label:"Third child link",href:"#required-for-focus"})]})]})},code:`
import { NavLink } from '@mantine/core';
import { IconGauge, IconFingerprint } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <NavLink
        href="#required-for-focus"
        label="First parent link"
        leftSection={<IconGauge size={16} stroke={1.5} />}
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
        leftSection={<IconFingerprint size={16} stroke={1.5} />}
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
`};var R=i(18675),D=i(20017);let E=(0,R.P)(D.XZ.NavLink);function O(e){let t={a:"a",code:"code",h2:"h2",p:"p",...(0,n.R)(),...e.components},{AutoContrast:i,Demo:o,GetElementRef:a,Polymorphic:l}=t;return i||W("AutoContrast",!0),o||W("Demo",!0),a||W("GetElementRef",!0),l||W("Polymorphic",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(o,{data:I}),"\n",(0,r.jsx)(t.h2,{id:"active",children:"Active"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"active"})," prop to add active styles to ",(0,r.jsx)(t.code,{children:"NavLink"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["Note that if you're using a React Router ",(0,r.jsx)(t.code,{children:"NavLink"})," inside ",(0,r.jsx)(t.code,{children:"renderRoot"}),", the active styles will be based on the\n",(0,r.jsxs)(t.a,{href:"https://reactrouter.com/en/main/components/nav-link#aria-current",children:[(0,r.jsx)(t.code,{children:"aria-current"})," attribute that's set by React Router"]}),"\nso you won't need to explicitly set the ",(0,r.jsx)(t.code,{children:"active"})," prop."]}),"\n",(0,r.jsxs)(t.p,{children:["You can customize active styles with ",(0,r.jsx)(t.code,{children:"color"})," and ",(0,r.jsx)(t.code,{children:"variant"})," props:"]}),"\n",(0,r.jsx)(o,{data:C}),"\n",(0,r.jsx)(i,{component:"NavLink"}),"\n",(0,r.jsx)(o,{data:_}),"\n",(0,r.jsx)(t.h2,{id:"nested-navlinks",children:"Nested NavLinks"}),"\n",(0,r.jsxs)(t.p,{children:["To create nested links put ",(0,r.jsx)(t.code,{children:"NavLink"})," as children of another ",(0,r.jsx)(t.code,{children:"NavLink"}),":"]}),"\n",(0,r.jsx)(o,{data:F}),"\n",(0,r.jsx)(l,{defaultElement:"a",changeToElement:"button",component:"NavLink",withNext:!0}),"\n",(0,r.jsx)(a,{component:"NavLink",refType:"a"})]})}function T(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(E,{...e,children:(0,r.jsx)(O,{...e})})}function W(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},87186:(e,t,i)=>{"use strict";i.d(t,{A:()=>r});var r=(0,i(73366).A)("outline","adjustments","IconAdjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},80502:(e,t,i)=>{"use strict";i.d(t,{A:()=>r});var r=(0,i(73366).A)("outline","arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},89689:(e,t,i)=>{"use strict";i.d(t,{A:()=>r});var r=(0,i(73366).A)("outline","arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},61584:(e,t,i)=>{"use strict";i.d(t,{A:()=>r});var r=(0,i(73366).A)("outline","calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},65815:(e,t,i)=>{"use strict";i.d(t,{A:()=>r});var r=(0,i(73366).A)("outline","chevron-right","IconChevronRight",[["path",{d:"M9 6l6 6l-6 6",key:"svg-0"}]])},91133:(e,t,i)=>{"use strict";i.d(t,{A:()=>r});var r=(0,i(73366).A)("outline","code","IconCode",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},11749:(e,t,i)=>{"use strict";i.d(t,{A:()=>r});var r=(0,i(73366).A)("outline","file-text","IconFileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},92854:(e,t,i)=>{"use strict";i.d(t,{A:()=>r});var r=(0,i(73366).A)("outline","fingerprint","IconFingerprint",[["path",{d:"M18.9 7a8 8 0 0 1 1.1 5v1a6 6 0 0 0 .8 3",key:"svg-0"}],["path",{d:"M8 11a4 4 0 0 1 8 0v1a10 10 0 0 0 2 6",key:"svg-1"}],["path",{d:"M12 11v2a14 14 0 0 0 2.5 8",key:"svg-2"}],["path",{d:"M8 15a18 18 0 0 0 1.8 6",key:"svg-3"}],["path",{d:"M4.9 19a22 22 0 0 1 -.9 -7v-1a8 8 0 0 1 12 -6.95",key:"svg-4"}]])},41299:(e,t,i)=>{"use strict";i.d(t,{A:()=>r});var r=(0,i(73366).A)("outline","gauge","IconGauge",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-1"}],["path",{d:"M13.41 10.59l2.59 -2.59",key:"svg-2"}],["path",{d:"M7 12a5 5 0 0 1 5 -5",key:"svg-3"}]])},89843:(e,t,i)=>{"use strict";i.d(t,{A:()=>r});var r=(0,i(73366).A)("outline","license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},9613:(e,t,i)=>{"use strict";i.d(t,{A:()=>r});var r=(0,i(73366).A)("outline","pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},55764:(e,t,i)=>{"use strict";i.d(t,{A:()=>r});var r=(0,i(73366).A)("outline","switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},76644:(e,t,i)=>{"use strict";i.d(t,{E:()=>u});var r=i(31085);i(14041);var n=i(33450),o=i(7098),a=i(51606),l=i(29686),s=i(69564),c=i(34056),d=i(2453),h={root:"m_347db0ec","root--dot":"m_fbd81e3d",label:"m_5add502a",section:"m_91fdda9b"};let f={},v=(0,o.V)((e,{radius:t,color:i,gradient:r,variant:o,size:l,autoContrast:s})=>{let c=e.variantColorResolver({color:i||e.primaryColor,theme:e,gradient:r,variant:o||"filled",autoContrast:s});return{root:{"--badge-height":(0,n.YC)(l,"badge-height"),"--badge-padding-x":(0,n.YC)(l,"badge-padding-x"),"--badge-fz":(0,n.YC)(l,"badge-fz"),"--badge-radius":void 0===t?void 0:(0,n.nJ)(t),"--badge-bg":i||o?c.background:void 0,"--badge-color":i||o?c.color:void 0,"--badge-bd":i||o?c.border:void 0,"--badge-dot-color":"dot"===o?(0,a.r)(i,e):void 0}}}),u=(0,d.v)((e,t)=>{let i=(0,l.Y)("Badge",f,e),{classNames:n,className:o,style:a,styles:d,unstyled:u,vars:p,radius:k,color:g,gradient:m,leftSection:b,rightSection:x,children:y,variant:j,fullWidth:A,autoContrast:N,circle:M,mod:S,...I}=i,L=(0,s.I)({name:"Badge",props:i,classes:h,className:o,style:a,classNames:n,styles:d,unstyled:u,vars:p,varsResolver:v});return(0,r.jsxs)(c.a,{variant:j,mod:[{block:A,circle:M,"with-right-section":!!x,"with-left-section":!!b},S],...L("root",{variant:j}),ref:t,...I,children:[b&&(0,r.jsx)("span",{...L("section"),"data-position":"left",children:b}),(0,r.jsx)("span",{...L("label"),children:y}),x&&(0,r.jsx)("span",{...L("section"),"data-position":"right",children:x})]})});u.classes=h,u.displayName="@mantine/core/Badge"},60333:(e,t,i)=>{"use strict";i.d(t,{S:()=>g});var r=i(31085),n=i(56447),o=i(14041),a=i(92408),l=i(29686),s=i(74022),c=i(34056),d=i(6754),h=i(43144),f=i(68323),v=i(34321);function u(e){return e?.current?e.current.scrollHeight:"auto"}let p="undefined"!=typeof window&&window.requestAnimationFrame,k={transitionDuration:200,transitionTimingFunction:"ease",animateOpacity:!0},g=(0,d.P9)((e,t)=>{let{children:i,in:d,transitionDuration:g,transitionTimingFunction:m,style:b,onTransitionEnd:x,animateOpacity:y,...j}=(0,l.Y)("Collapse",k,e),A=(0,a.xd)(),N=(0,n.I)(),M=A.respectReducedMotion&&N?0:g,S=function({transitionDuration:e,transitionTimingFunction:t="ease",onTransitionEnd:i=()=>{},opened:r}){let n=(0,o.useRef)(null),a={height:0,overflow:"hidden"},[l,s]=(0,o.useState)(r?{}:a),c=e=>{(0,h.flushSync)(()=>s(e))},d=e=>{c(t=>({...t,...e}))};function k(i){let r=e||function(e){if(!e||"string"==typeof e)return 0;let t=e/36;return Math.round((4+15*t**.25+t/5)*10)}(i);return{transition:`height ${r}ms ${t}, opacity ${r}ms ${t}`}}(0,f.C)(()=>{"function"==typeof p&&(r?p(()=>{d({willChange:"height",display:"block",overflow:"hidden"}),p(()=>{let e=u(n);d({...k(e),height:e})})}):p(()=>{let e=u(n);d({...k(e),willChange:"height",height:e}),p(()=>d({height:0,overflow:"hidden"}))}))},[r]);let g=e=>{if(e.target===n.current&&"height"===e.propertyName){if(r){let e=u(n);e===l.height?c({}):d({height:e}),i()}else 0===l.height&&(c(a),i())}};return function({style:e={},refKey:t="ref",...i}={}){let a=i[t],s={"aria-hidden":!r,...i,[t]:(0,v.Px)(n,a),onTransitionEnd:g,style:{boxSizing:"border-box",...e,...l}};return o.version.startsWith("18")?r||(s.inert=""):s.inert=!r,s}}({opened:d,transitionDuration:M,transitionTimingFunction:m,onTransitionEnd:x});return 0===M?d?(0,r.jsx)(c.a,{...j,children:i}):null:(0,r.jsx)(c.a,{...S({style:{opacity:d||!y?1:0,transition:y?`opacity ${M}ms ${m}`:"none",...(0,s.X)(b,A)},ref:t,...j}),children:i})});g.displayName="@mantine/core/Collapse"}},e=>{var t=t=>e(e.s=t);e.O(0,[18675,90636,46593,38792],()=>t(25249)),_N_E=e.O()}]);