(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3045],{21297:(e,r,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/hover-card",function(){return t(28964)}])},28964:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>w});var o=t(31085),n=t(71184),a=t(56051),s=t(71979),d=t(52022),i=t(93065);let l={type:"code",component:function(){return(0,o.jsx)(a.Y,{justify:"center",children:(0,o.jsxs)(s.j,{width:280,shadow:"md",children:[(0,o.jsx)(s.j.Target,{children:(0,o.jsx)(d.$,{children:"Hover to reveal the card"})}),(0,o.jsx)(s.j.Dropdown,{children:(0,o.jsx)(i.E,{size:"sm",children:"Hover card is revealed when user hovers over target element, it will be hidden once mouse is not over both target and dropdown elements"})})]})})},code:`
import { HoverCard, Button, Text, Group } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <HoverCard width={280} shadow="md">
        <HoverCard.Target>
          <Button>Hover to reveal the card</Button>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Text size="sm">
            Hover card is revealed when user hovers over target element, it will be hidden once
            mouse is not over both target and dropdown elements
          </Text>
        </HoverCard.Dropdown>
      </HoverCard>
    </Group>
  );
}

`},c={type:"code",component:function(){return(0,o.jsxs)(a.Y,{justify:"center",children:[(0,o.jsxs)(s.j,{shadow:"md",openDelay:1e3,children:[(0,o.jsx)(s.j.Target,{children:(0,o.jsx)(d.$,{children:"1000ms open delay"})}),(0,o.jsx)(s.j.Dropdown,{children:(0,o.jsx)(i.E,{size:"sm",children:"Opened with 1000ms delay"})})]}),(0,o.jsxs)(s.j,{shadow:"md",closeDelay:1e3,children:[(0,o.jsx)(s.j.Target,{children:(0,o.jsx)(d.$,{children:"1000ms close delay"})}),(0,o.jsx)(s.j.Dropdown,{children:(0,o.jsx)(i.E,{size:"sm",children:"Will close with 1000ms delay"})})]})]})},code:`
import { HoverCard, Button, Text, Group } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <HoverCard shadow="md" openDelay={1000}>
        <HoverCard.Target>
          <Button>1000ms open delay</Button>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Text size="sm">Opened with 1000ms delay</Text>
        </HoverCard.Dropdown>
      </HoverCard>

      <HoverCard shadow="md" closeDelay={1000}>
        <HoverCard.Target>
          <Button>1000ms close delay</Button>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Text size="sm">Will close with 1000ms delay</Text>
        </HoverCard.Dropdown>
      </HoverCard>
    </Group>
  );
}
`};var h=t(86658),v=t(75390),p=t(12129);function u({children:e}){return(0,o.jsxs)(s.j,{width:320,shadow:"md",withArrow:!0,openDelay:200,closeDelay:400,children:[(0,o.jsx)(s.j.Target,{children:e}),(0,o.jsxs)(s.j.Dropdown,{children:[(0,o.jsxs)(a.Y,{children:[(0,o.jsx)(h.e,{src:"https://avatars.githubusercontent.com/u/79146003?s=200&v=4",radius:"xl"}),(0,o.jsxs)(v.B,{gap:5,children:[(0,o.jsx)(i.E,{size:"sm",fw:700,style:{lineHeight:1},children:"Mantine"}),(0,o.jsx)(p.M,{href:"https://x.com/mantinedev",c:"dimmed",size:"xs",style:{lineHeight:1},children:"@mantinedev"})]})]}),(0,o.jsx)(i.E,{size:"sm",mt:"md",children:"Customizable React components and hooks library with focus on usability, accessibility and developer experience"}),(0,o.jsxs)(a.Y,{mt:"md",gap:"xl",children:[(0,o.jsxs)(i.E,{size:"sm",children:[(0,o.jsx)("b",{children:"0"})," Following"]}),(0,o.jsxs)(i.E,{size:"sm",children:[(0,o.jsx)("b",{children:"1,174"})," Followers"]})]})]})]})}let m={type:"code",component:function(){return(0,o.jsx)(a.Y,{justify:"center",children:(0,o.jsx)(u,{children:(0,o.jsx)(h.e,{src:"https://avatars.githubusercontent.com/u/79146003?s=200&v=4",radius:"xl"})})})},code:`
import { HoverCard, Avatar, Text, Group, Anchor, Stack } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <HoverCard width={320} shadow="md" withArrow openDelay={200} closeDelay={400}>
        <HoverCard.Target>
          <Avatar src="https://avatars.githubusercontent.com/u/79146003?s=200&v=4" radius="xl" />
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Group>
            <Avatar src="https://avatars.githubusercontent.com/u/79146003?s=200&v=4" radius="xl" />
            <Stack gap={5}>
              <Text size="sm" fw={700} style={{ lineHeight: 1 }}>
                Mantine
              </Text>
              <Anchor
                href="https://x.com/mantinedev"
                c="dimmed"
                size="xs"
                style={{ lineHeight: 1 }}
              >
                @mantinedev
              </Anchor>
            </Stack>
          </Group>

          <Text size="sm" mt="md">
            Customizable React components and hooks library with focus on usability, accessibility
            and developer experience
          </Text>

          <Group mt="md" gap="xl">
            <Text size="sm">
              <b>0</b> Following
            </Text>
            <Text size="sm">
              <b>1,174</b> Followers
            </Text>
          </Group>
        </HoverCard.Dropdown>
      </HoverCard>
    </Group>
  );
}
`};var g=t(18675),x=t(20017);let y=(0,g.P)(x.XZ.HoverCard);function j(e){let r={code:"code",h2:"h2",p:"p",...(0,n.R)(),...e.components},{Demo:t,TargetComponent:a}=r;return t||C("Demo",!0),a||C("TargetComponent",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(t,{data:l}),"\n",(0,o.jsx)(r.h2,{id:"delays",children:"Delays"}),"\n",(0,o.jsxs)(r.p,{children:["Set open and close delays in ms with ",(0,o.jsx)(r.code,{children:"openDelay"})," and ",(0,o.jsx)(r.code,{children:"closeDelay"})," props:"]}),"\n",(0,o.jsx)(t,{data:c}),"\n",(0,o.jsx)(r.h2,{id:"with-interactive-elements",children:"With interactive elements"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.code,{children:"HoverCard"})," is displayed only when the mouse is over the target element or dropdown,\nyou can use anchors and buttons within dropdowns, using inputs is not recommended:"]}),"\n",(0,o.jsx)(t,{data:m}),"\n",(0,o.jsx)(a,{component:"HoverCard"}),"\n",(0,o.jsx)(r.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.code,{children:"HoverCard"})," is ignored by screen readers and cannot be activated with keyboard, use it to display only additional information\nthat is not required to understand the context."]})]})}function w(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(y,{...e,children:(0,o.jsx)(j,{...e})})}function C(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},87186:(e,r,t)=>{"use strict";t.d(r,{A:()=>o});var o=(0,t(73366).A)("outline","adjustments","IconAdjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},80502:(e,r,t)=>{"use strict";t.d(r,{A:()=>o});var o=(0,t(73366).A)("outline","arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},89689:(e,r,t)=>{"use strict";t.d(r,{A:()=>o});var o=(0,t(73366).A)("outline","arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},61584:(e,r,t)=>{"use strict";t.d(r,{A:()=>o});var o=(0,t(73366).A)("outline","calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},91133:(e,r,t)=>{"use strict";t.d(r,{A:()=>o});var o=(0,t(73366).A)("outline","code","IconCode",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},11749:(e,r,t)=>{"use strict";t.d(r,{A:()=>o});var o=(0,t(73366).A)("outline","file-text","IconFileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},89843:(e,r,t)=>{"use strict";t.d(r,{A:()=>o});var o=(0,t(73366).A)("outline","license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},9613:(e,r,t)=>{"use strict";t.d(r,{A:()=>o});var o=(0,t(73366).A)("outline","pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},55764:(e,r,t)=>{"use strict";t.d(r,{A:()=>o});var o=(0,t(73366).A)("outline","switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},86658:(e,r,t)=>{"use strict";t.d(r,{e:()=>f});var o=t(31085),n=t(14041),a=t(33450),s=t(7098),d=t(29686),i=t(69564),l=t(34056),c=t(2453),h=t(6754);let v=(0,n.createContext)(null),p=v.Provider;var u={group:"m_11def92b",root:"m_f85678b6",image:"m_11f8ac07",placeholder:"m_104cd71f"};let m={},g=(0,s.V)((e,{spacing:r})=>({group:{"--ag-spacing":(0,a.GY)(r)}})),x=(0,h.P9)((e,r)=>{let t=(0,d.Y)("AvatarGroup",m,e),{classNames:n,className:a,style:s,styles:c,unstyled:h,vars:v,spacing:x,...y}=t,j=(0,i.I)({name:"AvatarGroup",classes:u,props:t,className:a,style:s,classNames:n,styles:c,unstyled:h,vars:v,varsResolver:g,rootSelector:"group"});return(0,o.jsx)(p,{value:!0,children:(0,o.jsx)(l.a,{ref:r,...j("group"),...y})})});function y(e){return(0,o.jsx)("svg",{...e,"data-avatar-placeholder-icon":!0,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}x.classes=u,x.displayName="@mantine/core/AvatarGroup";let j=["blue","cyan","grape","green","indigo","lime","orange","pink","red","teal","violet"],w={},C=(0,s.V)((e,{size:r,radius:t,variant:o,gradient:n,color:s,autoContrast:d,name:i,allowedInitialsColors:l})=>{let c="initials"===s&&"string"==typeof i?function(e,r=j){let t=Math.abs(function(e){let r=0;for(let t=0;t<e.length;t+=1)r=(r<<5)-r+e.charCodeAt(t)|0;return r}(e))%r.length;return r[t]}(i,l):s,h=e.variantColorResolver({color:c||"gray",theme:e,gradient:n,variant:o||"light",autoContrast:d});return{root:{"--avatar-size":(0,a.YC)(r,"avatar-size"),"--avatar-radius":void 0===t?void 0:(0,a.nJ)(t),"--avatar-bg":c||o?h.background:void 0,"--avatar-color":c||o?h.color:void 0,"--avatar-bd":c||o?h.border:void 0}}}),f=(0,c.v)((e,r)=>{let t=(0,d.Y)("Avatar",w,e),{classNames:a,className:s,style:c,styles:h,unstyled:p,vars:m,src:g,alt:x,radius:j,color:f,gradient:M,imageProps:k,children:H,autoContrast:b,mod:T,name:A,allowedInitialsColors:D,...z}=t,E={withinGroup:!!(0,n.useContext)(v)},[G,_]=(0,n.useState)(!g),Y=(0,i.I)({name:"Avatar",props:t,classes:u,className:s,style:c,classNames:a,styles:h,unstyled:p,vars:m,varsResolver:C});return(0,n.useEffect)(()=>_(!g),[g]),(0,o.jsx)(l.a,{...Y("root"),mod:[{"within-group":E.withinGroup},T],ref:r,...z,children:G||!g?(0,o.jsx)("span",{...Y("placeholder"),title:x,children:H||"string"==typeof A&&function(e,r=2){let t=e.split(" ");return 1===t.length?e.slice(0,r).toUpperCase():t.map(e=>e[0]).slice(0,r).join("").toUpperCase()}(A)||(0,o.jsx)(y,{})}):(0,o.jsx)("img",{...k,...Y("image"),src:g,alt:x,onError:e=>{_(!0),k?.onError?.(e)}})})});f.classes=u,f.displayName="@mantine/core/Avatar",f.Group=x},71979:(e,r,t)=>{"use strict";t.d(r,{j:()=>y});var o=t(31085),n=t(92051),a=t(14041),s=t(29686),d=t(26424),i=t(35764);let[l,c]=(0,t(59852).F)("HoverCard component was not found in the tree");var h=t(82050);let v={};function p(e){let{children:r,onMouseEnter:t,onMouseLeave:n,...a}=(0,s.Y)("HoverCardDropdown",v,e),d=c(),l=(0,h.T)(t,d.openDropdown),p=(0,h.T)(n,d.closeDropdown);return(0,o.jsx)(i.A.Dropdown,{onMouseEnter:l,onMouseLeave:p,...a,children:r})}p.displayName="@mantine/core/HoverCardDropdown";var u=t(40880);let m={refProp:"ref"},g=(0,a.forwardRef)((e,r)=>{let{children:t,refProp:n,eventPropsWrapperName:d,...l}=(0,s.Y)("HoverCardTarget",m,e);if(!(0,u.v)(t))throw Error("HoverCard.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");let v=c(),p={onMouseEnter:(0,h.T)(t.props.onMouseEnter,v.openDropdown),onMouseLeave:(0,h.T)(t.props.onMouseLeave,v.closeDropdown)};return(0,o.jsx)(i.A.Target,{refProp:n,ref:r,...l,children:(0,a.cloneElement)(t,d?{[d]:p}:p)})});g.displayName="@mantine/core/HoverCardTarget";let x={openDelay:0,closeDelay:150,initiallyOpened:!1};function y(e){let{children:r,onOpen:t,onClose:a,openDelay:c,closeDelay:h,initiallyOpened:v,...p}=(0,s.Y)("HoverCard",x,e),[u,{open:m,close:g}]=(0,n.j)(v,{onClose:a,onOpen:t}),{openDropdown:y,closeDropdown:j}=(0,d.K)({open:m,close:g,openDelay:c,closeDelay:h});return(0,o.jsx)(l,{value:{openDropdown:y,closeDropdown:j},children:(0,o.jsx)(i.A,{...p,opened:u,__staticSelector:"HoverCard",children:r})})}y.displayName="@mantine/core/HoverCard",y.Target=g,y.Dropdown=p,y.extend=e=>e}},e=>{var r=r=>e(e.s=r);e.O(0,[18675,90636,46593,38792],()=>r(21297)),_N_E=e.O()}]);