(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3045],{21297:(e,r,o)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/hover-card",function(){return o(28964)}])},28964:(e,r,o)=>{"use strict";o.r(r),o.d(r,{default:()=>C});var t=o(31085),n=o(71184),a=o(56051),s=o(88633),d=o(52022),l=o(93065);let i={type:"code",component:function(){return(0,t.jsx)(a.Y,{justify:"center",children:(0,t.jsxs)(s.j,{width:280,shadow:"md",children:[(0,t.jsx)(s.j.Target,{children:(0,t.jsx)(d.$,{children:"Hover to reveal the card"})}),(0,t.jsx)(s.j.Dropdown,{children:(0,t.jsx)(l.E,{size:"sm",children:"Hover card is revealed when user hovers over target element, it will be hidden once mouse is not over both target and dropdown elements"})})]})})},code:`
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

`},c={type:"code",component:function(){return(0,t.jsxs)(a.Y,{justify:"center",children:[(0,t.jsxs)(s.j,{shadow:"md",openDelay:1e3,children:[(0,t.jsx)(s.j.Target,{children:(0,t.jsx)(d.$,{children:"1000ms open delay"})}),(0,t.jsx)(s.j.Dropdown,{children:(0,t.jsx)(l.E,{size:"sm",children:"Opened with 1000ms delay"})})]}),(0,t.jsxs)(s.j,{shadow:"md",closeDelay:1e3,children:[(0,t.jsx)(s.j.Target,{children:(0,t.jsx)(d.$,{children:"1000ms close delay"})}),(0,t.jsx)(s.j.Dropdown,{children:(0,t.jsx)(l.E,{size:"sm",children:"Will close with 1000ms delay"})})]})]})},code:`
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
`};var p=o(78683),h=o(86658),v=o(75390),u=o(12129);function m({children:e}){return(0,t.jsxs)(s.j,{width:320,shadow:"md",withArrow:!0,openDelay:200,closeDelay:400,children:[(0,t.jsx)(s.j.Target,{children:e}),(0,t.jsxs)(s.j.Dropdown,{children:[(0,t.jsxs)(a.Y,{children:[(0,t.jsx)(h.e,{src:"https://avatars.githubusercontent.com/u/79146003?s=200&v=4",radius:"xl"}),(0,t.jsxs)(v.B,{gap:5,children:[(0,t.jsx)(l.E,{size:"sm",fw:700,style:{lineHeight:1},children:"Mantine"}),(0,t.jsx)(u.M,{href:"https://x.com/mantinedev",c:"dimmed",size:"xs",style:{lineHeight:1},children:"@mantinedev"})]})]}),(0,t.jsx)(l.E,{size:"sm",mt:"md",children:"Customizable React components and hooks library with focus on usability, accessibility and developer experience"}),(0,t.jsxs)(a.Y,{mt:"md",gap:"xl",children:[(0,t.jsxs)(l.E,{size:"sm",children:[(0,t.jsx)("b",{children:"0"})," Following"]}),(0,t.jsxs)(l.E,{size:"sm",children:[(0,t.jsx)("b",{children:"1,174"})," Followers"]})]})]})]})}let g={type:"code",component:function(){return(0,t.jsx)(a.Y,{justify:"center",children:(0,t.jsx)(m,{children:(0,t.jsx)(h.e,{src:"https://avatars.githubusercontent.com/u/79146003?s=200&v=4",radius:"xl"})})})},code:`
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
`};var x=o(18675),y=o(20017);let j=(0,x.P)(y.XZ.HoverCard);function w(e){let r={code:"code",h2:"h2",p:"p",...(0,n.R)(),...e.components},{Demo:o,TargetComponent:a}=r;return o||f("Demo",!0),a||f("TargetComponent",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(o,{data:i}),"\n",(0,t.jsx)(r.h2,{id:"delays",children:"Delays"}),"\n",(0,t.jsxs)(r.p,{children:["Set open and close delays in ms with ",(0,t.jsx)(r.code,{children:"openDelay"})," and ",(0,t.jsx)(r.code,{children:"closeDelay"})," props:"]}),"\n",(0,t.jsx)(o,{data:c}),"\n",(0,t.jsx)(r.h2,{id:"hovercard-delay-group",children:"HoverCard delay group"}),"\n",(0,t.jsxs)(r.p,{children:["Use ",(0,t.jsx)(r.code,{children:"HoverCard.Group"})," component to sync open and close delays of multiple ",(0,t.jsx)(r.code,{children:"HoverCard"})," components:"]}),"\n",(0,t.jsx)(o,{data:p.O}),"\n",(0,t.jsx)(r.h2,{id:"with-interactive-elements",children:"With interactive elements"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"HoverCard"})," is displayed only when the mouse is over the target element or dropdown,\nyou can use anchors and buttons within dropdowns, using inputs is not recommended:"]}),"\n",(0,t.jsx)(o,{data:g}),"\n",(0,t.jsx)(a,{component:"HoverCard"}),"\n",(0,t.jsx)(r.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"HoverCard"})," is ignored by screen readers and cannot be activated with keyboard, use it to display only additional information\nthat is not required to understand the context."]})]})}function C(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(j,{...e,children:(0,t.jsx)(w,{...e})})}function f(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},87186:(e,r,o)=>{"use strict";o.d(r,{A:()=>t});var t=(0,o(73366).A)("outline","adjustments","IconAdjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},80502:(e,r,o)=>{"use strict";o.d(r,{A:()=>t});var t=(0,o(73366).A)("outline","arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},89689:(e,r,o)=>{"use strict";o.d(r,{A:()=>t});var t=(0,o(73366).A)("outline","arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},61584:(e,r,o)=>{"use strict";o.d(r,{A:()=>t});var t=(0,o(73366).A)("outline","calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},91133:(e,r,o)=>{"use strict";o.d(r,{A:()=>t});var t=(0,o(73366).A)("outline","code","IconCode",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},11749:(e,r,o)=>{"use strict";o.d(r,{A:()=>t});var t=(0,o(73366).A)("outline","file-text","IconFileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},89843:(e,r,o)=>{"use strict";o.d(r,{A:()=>t});var t=(0,o(73366).A)("outline","license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},9613:(e,r,o)=>{"use strict";o.d(r,{A:()=>t});var t=(0,o(73366).A)("outline","pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},55764:(e,r,o)=>{"use strict";o.d(r,{A:()=>t});var t=(0,o(73366).A)("outline","switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},78683:(e,r,o)=>{"use strict";o.d(r,{O:()=>l});var t=o(31085),n=o(88633),a=o(56051),s=o(52022),d=o(93065);let l={type:"code",component:function(){return(0,t.jsx)(n.j.Group,{openDelay:500,closeDelay:100,children:(0,t.jsxs)(a.Y,{justify:"center",children:[(0,t.jsxs)(n.j,{shadow:"md",children:[(0,t.jsx)(n.j.Target,{children:(0,t.jsx)(s.$,{children:"First"})}),(0,t.jsx)(n.j.Dropdown,{children:(0,t.jsx)(d.E,{size:"sm",children:"First hover card content"})})]}),(0,t.jsxs)(n.j,{shadow:"md",children:[(0,t.jsx)(n.j.Target,{children:(0,t.jsx)(s.$,{children:"Second"})}),(0,t.jsx)(n.j.Dropdown,{children:(0,t.jsx)(d.E,{size:"sm",children:"Second hover card content"})})]}),(0,t.jsxs)(n.j,{shadow:"md",children:[(0,t.jsx)(n.j.Target,{children:(0,t.jsx)(s.$,{children:"Third"})}),(0,t.jsx)(n.j.Dropdown,{children:(0,t.jsx)(d.E,{size:"sm",children:"Third hover card content"})})]})]})})},code:`
import { HoverCard, Button, Text, Group } from '@mantine/core';

function Demo() {
  return (
    <HoverCard.Group openDelay={500} closeDelay={100}>
      <Group justify="center">
        <HoverCard shadow="md">
          <HoverCard.Target>
            <Button>First</Button>
          </HoverCard.Target>
          <HoverCard.Dropdown>
            <Text size="sm">First hover card content</Text>
          </HoverCard.Dropdown>
        </HoverCard>

        <HoverCard shadow="md">
          <HoverCard.Target>
            <Button>Second</Button>
          </HoverCard.Target>
          <HoverCard.Dropdown>
            <Text size="sm">Second hover card content</Text>
          </HoverCard.Dropdown>
        </HoverCard>

        <HoverCard shadow="md">
          <HoverCard.Target>
            <Button>Third</Button>
          </HoverCard.Target>
          <HoverCard.Dropdown>
            <Text size="sm">Third hover card content</Text>
          </HoverCard.Dropdown>
        </HoverCard>
      </Group>
    </HoverCard.Group>
  );
}
`}},86658:(e,r,o)=>{"use strict";o.d(r,{e:()=>w});var t=o(31085),n=o(14041),a=o(33450),s=o(7098),d=o(29686),l=o(69564),i=o(34056),c=o(2453),p=o(6754);let h=(0,n.createContext)(null),v=h.Provider;var u={group:"m_11def92b",root:"m_f85678b6",image:"m_11f8ac07",placeholder:"m_104cd71f"};let m=(0,s.V)((e,{spacing:r})=>({group:{"--ag-spacing":(0,a.GY)(r)}})),g=(0,p.P9)((e,r)=>{let o=(0,d.Y)("AvatarGroup",null,e),{classNames:n,className:a,style:s,styles:c,unstyled:p,vars:h,spacing:g,attributes:x,...y}=o,j=(0,l.I)({name:"AvatarGroup",classes:u,props:o,className:a,style:s,classNames:n,styles:c,unstyled:p,attributes:x,vars:h,varsResolver:m,rootSelector:"group"});return(0,t.jsx)(v,{value:!0,children:(0,t.jsx)(i.a,{ref:r,...j("group"),...y})})});function x(e){return(0,t.jsx)("svg",{...e,"data-avatar-placeholder-icon":!0,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}g.classes=u,g.displayName="@mantine/core/AvatarGroup";let y=["blue","cyan","grape","green","indigo","lime","orange","pink","red","teal","violet"],j=(0,s.V)((e,{size:r,radius:o,variant:t,gradient:n,color:s,autoContrast:d,name:l,allowedInitialsColors:i})=>{let c="initials"===s&&"string"==typeof l?function(e,r=y){let o=Math.abs(function(e){let r=0;for(let o=0;o<e.length;o+=1)r=(r<<5)-r+e.charCodeAt(o)|0;return r}(e))%r.length;return r[o]}(l,i):s,p=e.variantColorResolver({color:c||"gray",theme:e,gradient:n,variant:t||"light",autoContrast:d});return{root:{"--avatar-size":(0,a.YC)(r,"avatar-size"),"--avatar-radius":void 0===o?void 0:(0,a.nJ)(o),"--avatar-bg":c||t?p.background:void 0,"--avatar-color":c||t?p.color:void 0,"--avatar-bd":c||t?p.border:void 0}}}),w=(0,c.v)((e,r)=>{let o=(0,d.Y)("Avatar",null,e),{classNames:a,className:s,style:c,styles:p,unstyled:v,vars:m,src:g,alt:y,radius:w,color:C,gradient:f,imageProps:H,children:T,autoContrast:D,mod:M,name:k,allowedInitialsColors:b,attributes:A,...G}=o,E={withinGroup:!!(0,n.useContext)(h)},[z,B]=(0,n.useState)(!g),_=(0,l.I)({name:"Avatar",props:o,classes:u,className:s,style:c,classNames:a,styles:p,unstyled:v,attributes:A,vars:m,varsResolver:j});return(0,n.useEffect)(()=>B(!g),[g]),(0,t.jsx)(i.a,{..._("root"),mod:[{"within-group":E.withinGroup},M],ref:r,...G,children:z||!g?(0,t.jsx)("span",{..._("placeholder"),title:y,children:T||"string"==typeof k&&function(e,r=2){let o=e.split(" ");return 1===o.length?e.slice(0,r).toUpperCase():o.map(e=>e[0]).slice(0,r).join("").toUpperCase()}(k)||(0,t.jsx)(x,{})}):(0,t.jsx)("img",{...H,..._("image"),src:g,alt:y,onError:e=>{B(!0),H?.onError?.(e)}})})});w.classes=u,w.displayName="@mantine/core/Avatar",w.Group=g},88633:(e,r,o)=>{"use strict";o.d(r,{j:()=>f});var t=o(31085),n=o(14041),a=o(29686),s=o(35764);let[d,l]=(0,o(59852).F)("HoverCard component was not found in the tree");var i=o(82050);let c=(0,n.createContext)(!1),p=c.Provider,h=()=>(0,n.useContext)(c);function v(e){let{children:r,onMouseEnter:o,onMouseLeave:n,...d}=(0,a.Y)("HoverCardDropdown",null,e),c=l();if(h()&&c.getFloatingProps&&c.floating){let e=c.getFloatingProps();return(0,t.jsx)(s.A.Dropdown,{ref:c.floating,...e,onMouseEnter:(0,i.T)(o,e.onMouseEnter),onMouseLeave:(0,i.T)(n,e.onMouseLeave),...d,children:r})}let p=(0,i.T)(o,c.openDropdown),v=(0,i.T)(n,c.closeDropdown);return(0,t.jsx)(s.A.Dropdown,{onMouseEnter:p,onMouseLeave:v,...d,children:r})}v.displayName="@mantine/core/HoverCardDropdown";var u=o(87968);let m={openDelay:0,closeDelay:0};function g(e){let{openDelay:r,closeDelay:o,children:n}=(0,a.Y)("HoverCardGroup",m,e);return(0,t.jsx)(p,{value:!0,children:(0,t.jsx)(u.T3,{delay:{open:r,close:o},children:n})})}g.displayName="@mantine/core/HoverCardGroup",g.extend=e=>e;var x=o(40880);let y={refProp:"ref"},j=(0,n.forwardRef)((e,r)=>{let{children:o,refProp:d,eventPropsWrapperName:c,...p}=(0,a.Y)("HoverCardTarget",y,e);if(!(0,x.v)(o))throw Error("HoverCard.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");let v=l();if(h()&&v.getReferenceProps&&v.reference){let e=v.getReferenceProps();return(0,t.jsx)(s.A.Target,{refProp:d,ref:r,...p,children:(0,n.cloneElement)(o,c?{[c]:{...e,ref:v.reference}}:{...e,ref:v.reference})})}let u={onMouseEnter:(0,i.T)(o.props.onMouseEnter,v.openDropdown),onMouseLeave:(0,i.T)(o.props.onMouseLeave,v.closeDropdown)};return(0,t.jsx)(s.A.Target,{refProp:d,ref:r,...p,children:(0,n.cloneElement)(o,c?{[c]:u}:u)})});j.displayName="@mantine/core/HoverCardTarget";var w=o(97567);let C={openDelay:0,closeDelay:150,initiallyOpened:!1};function f(e){let{children:r,onOpen:o,onClose:l,openDelay:i,closeDelay:c,initiallyOpened:p,...v}=(0,a.Y)("HoverCard",C,e),m=function(e){let[r,o]=(0,n.useState)(e.defaultOpened),t="boolean"==typeof e.opened?e.opened:r,a=h(),s=(0,w.B)(),d=(0,n.useRef)(-1),l=(0,n.useRef)(-1),i=(0,n.useCallback)(()=>{window.clearTimeout(d.current),window.clearTimeout(l.current)},[]),c=(0,n.useCallback)(r=>{o(r),r?(g(s),e.onOpen?.()):e.onClose?.()},[s,e.onOpen,e.onClose]),{context:p,refs:v}=(0,u.we)({open:t,onOpenChange:c}),{delay:m,setCurrentId:g}=(0,u.ck)(p,{id:s}),{getReferenceProps:x,getFloatingProps:y}=(0,u.bv)([(0,u.Mk)(p,{enabled:!0,delay:a?m:{open:e.openDelay,close:e.closeDelay}}),(0,u.It)(p,{role:"dialog"}),(0,u.s9)(p,{enabled:void 0===e.opened})]),j=(0,n.useCallback)(()=>{a||(i(),0===e.openDelay||void 0===e.openDelay?c(!0):d.current=window.setTimeout(()=>c(!0),e.openDelay))},[a,i,e.openDelay,c]),C=(0,n.useCallback)(()=>{a||(i(),0===e.closeDelay||void 0===e.closeDelay?c(!1):l.current=window.setTimeout(()=>c(!1),e.closeDelay))},[a,i,e.closeDelay,c]);return(0,n.useEffect)(()=>()=>i(),[i]),{opened:t,reference:v.setReference,floating:v.setFloating,getReferenceProps:x,getFloatingProps:y,openDropdown:j,closeDropdown:C}}({openDelay:i,closeDelay:c,defaultOpened:p,onOpen:o,onClose:l});return(0,t.jsx)(d,{value:{openDropdown:m.openDropdown,closeDropdown:m.closeDropdown,getReferenceProps:m.getReferenceProps,getFloatingProps:m.getFloatingProps,reference:m.reference,floating:m.floating},children:(0,t.jsx)(s.A,{...v,opened:m.opened,__staticSelector:"HoverCard",children:r})})}f.displayName="@mantine/core/HoverCard",f.Target=j,f.Dropdown=v,f.Group=g,f.extend=e=>e}},e=>{var r=r=>e(e.s=r);e.O(0,[18675,90636,46593,38792],()=>r(21297)),_N_E=e.O()}]);