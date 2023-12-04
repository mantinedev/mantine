(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9258],{86680:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/hover-card",function(){return r(44990)}])},44990:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var n=r(24246),o=r(71670),a=r(3916),l=r(30289),s=r(27378),i=r(22971),d=r(38266),c=r(8671),Text=r(26569);let u=`
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

`,m={type:"code",component:function(){return s.createElement(i.Z,{justify:"center"},s.createElement(d.z,{width:280,shadow:"md"},s.createElement(d.z.Target,null,s.createElement(c.z,null,"Hover to reveal the card")),s.createElement(d.z.Dropdown,null,s.createElement(Text.x,{size:"sm"},"Hover card is revealed when user hovers over target element, it will be hidden once mouse is not over both target and dropdown elements"))))},code:u},p=`
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
`,v={type:"code",component:function(){return s.createElement(i.Z,{justify:"center"},s.createElement(d.z,{shadow:"md",openDelay:1e3},s.createElement(d.z.Target,null,s.createElement(c.z,null,"1000ms open delay")),s.createElement(d.z.Dropdown,null,s.createElement(Text.x,{size:"sm"},"Opened with 1000ms delay"))),s.createElement(d.z,{shadow:"md",closeDelay:1e3},s.createElement(d.z.Target,null,s.createElement(c.z,null,"1000ms close delay")),s.createElement(d.z.Dropdown,null,s.createElement(Text.x,{size:"sm"},"Will close with 1000ms delay"))))},code:p};var h=r(96597);let w=(0,a.A)(l.us.HoverCard);function C(e){let t={code:"code",h2:"h2",p:"p",...(0,o.a)(),...e.components},{Demo:r,TargetComponent:a}=t;return r||x("Demo",!0),a||x("TargetComponent",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(r,{data:m}),"\n",(0,n.jsx)(t.h2,{id:"delays",children:"Delays"}),"\n",(0,n.jsxs)(t.p,{children:["Set open and close delays in ms with ",(0,n.jsx)(t.code,{children:"openDelay"})," and ",(0,n.jsx)(t.code,{children:"closeDelay"})," props:"]}),"\n",(0,n.jsx)(r,{data:v}),"\n",(0,n.jsx)(t.h2,{id:"with-interactive-elements",children:"With interactive elements"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"HoverCard"})," is displayed only when the mouse is over the target element or dropdown,\nyou can use anchors and buttons within dropdowns, using inputs is not recommended:"]}),"\n",(0,n.jsx)(r,{data:h.N}),"\n",(0,n.jsx)(a,{component:"HoverCard"}),"\n",(0,n.jsx)(t.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"HoverCard"})," is ignored by screen readers and cannot be activated with keyboard, use it to display only additional information\nthat is not required to understand the context."]})]})}function f(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(w,{...e,children:(0,n.jsx)(C,{...e})})}function x(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},96597:function(e,t,r){"use strict";r.d(t,{N:function(){return m},m:function(){return u}});var n=r(27378),o=r(38266),a=r(22971),l=r(30770),s=r(27884),i=r(26569),d=r(9136);let c=`
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
                href="https://twitter.com/mantinedev"
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
`;function u({children:e}){return n.createElement(o.z,{width:320,shadow:"md",withArrow:!0,openDelay:200,closeDelay:400},n.createElement(o.z.Target,null,e),n.createElement(o.z.Dropdown,null,n.createElement(a.Z,null,n.createElement(l.q,{src:"https://avatars.githubusercontent.com/u/79146003?s=200&v=4",radius:"xl"}),n.createElement(s.K,{gap:5},n.createElement(i.x,{size:"sm",fw:700,style:{lineHeight:1}},"Mantine"),n.createElement(d.e,{href:"https://twitter.com/mantinedev",c:"dimmed",size:"xs",style:{lineHeight:1}},"@mantinedev"))),n.createElement(i.x,{size:"sm",mt:"md"},"Customizable React components and hooks library with focus on usability, accessibility and developer experience"),n.createElement(a.Z,{mt:"md",gap:"xl"},n.createElement(i.x,{size:"sm"},n.createElement("b",null,"0")," Following"),n.createElement(i.x,{size:"sm"},n.createElement("b",null,"1,174")," Followers"))))}let m={type:"code",component:function(){return n.createElement(a.Z,{justify:"center"},n.createElement(u,null,n.createElement(l.q,{src:"https://avatars.githubusercontent.com/u/79146003?s=200&v=4",radius:"xl"})))},code:c}},30770:function(e,t,r){"use strict";r.d(t,{q:function(){return g}});var n=r(27378),o=r(92082),a=r(83453),l=r(96739),s=r(6231),i=r(56589),d=r(50332),c=r(20410);let u=(0,n.createContext)(null),m=u.Provider;var p={root:"m-f85678b6",image:"m-11f8ac07",placeholder:"m-104cd71f",group:"m-11def92b"};let v={},h=(0,a.Z)((e,{spacing:t})=>({group:{"--ag-spacing":(0,o.bG)(t)}})),w=(0,c.d)((e,t)=>{let r=(0,l.w)("AvatarGroup",v,e),{classNames:o,className:a,style:d,styles:c,unstyled:u,vars:w,spacing:C,...f}=r,x=(0,s.y)({name:"AvatarGroup",classes:p,props:r,className:a,style:d,classNames:o,styles:c,unstyled:u,vars:w,varsResolver:h,rootSelector:"group"});return n.createElement(m,{value:!0},n.createElement(i.x,{ref:t,...x("group"),...f}))});function C(e){return n.createElement("svg",{...e,"data-avatar-placeholder-icon":!0,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.createElement("path",{d:"M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}w.classes=p,w.displayName="@mantine/core/AvatarGroup";let f={},x=(0,a.Z)((e,{size:t,radius:r,variant:n,gradient:a,color:l})=>{let s=e.variantColorResolver({color:l||"gray",theme:e,gradient:a,variant:n||"light"});return{root:{"--avatar-size":(0,o.ap)(t,"avatar-size"),"--avatar-radius":void 0===r?void 0:(0,o.H5)(r),"--avatar-bg":l||n?s.background:void 0,"--avatar-color":l||n?s.color:void 0,"--avatar-bd":l||n?s.border:void 0}}}),g=(0,d.b)((e,t)=>{let r=(0,l.w)("Avatar",f,e),{classNames:o,className:a,style:d,styles:c,unstyled:m,vars:v,src:h,alt:w,radius:g,color:y,gradient:E,imageProps:H,children:b,...D}=r,T=function(){let e=(0,n.useContext)(u);return{withinGroup:!!e}}(),[z,j]=(0,n.useState)(!h),G=(0,s.y)({name:"Avatar",props:r,classes:p,className:a,style:d,classNames:o,styles:c,unstyled:m,vars:v,varsResolver:x});return(0,n.useEffect)(()=>j(!h),[h]),n.createElement(i.x,{...G("root"),mod:{"within-group":T.withinGroup},ref:t,...D},z?n.createElement("span",{...G("placeholder"),title:w},b||n.createElement(C,null)):n.createElement("img",{...H,...G("image"),src:h,alt:w,onError:e=>{j(!0),H?.onError?.(e)}}))});g.classes=p,g.displayName="@mantine/core/Avatar",g.Group=w},38266:function(e,t,r){"use strict";r.d(t,{z:function(){return f}});var n=r(27378),o=r(87921),a=r(96739),l=r(91531),s=r(63433),i=r(71656);let[d,c]=(0,i.R)("HoverCard component was not found in the tree");var u=r(41664);let m={};function p(e){let{children:t,onMouseEnter:r,onMouseLeave:o,...l}=(0,a.w)("HoverCardDropdown",m,e),i=c(),d=(0,u.x)(r,i.openDropdown),p=(0,u.x)(o,i.closeDropdown);return n.createElement(s.J.Dropdown,{onMouseEnter:d,onMouseLeave:p,...l},t)}p.displayName="@mantine/core/HoverCardDropdown";var v=r(513);let h={refProp:"ref"},w=(0,n.forwardRef)((e,t)=>{let{children:r,refProp:o,eventPropsWrapperName:l,...i}=(0,a.w)("HoverCardTarget",h,e);if(!(0,v.k)(r))throw Error("HoverCard.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");let d=c(),m=(0,u.x)(r.props.onMouseEnter,d.openDropdown),p=(0,u.x)(r.props.onMouseLeave,d.closeDropdown),w={onMouseEnter:m,onMouseLeave:p};return n.createElement(s.J.Target,{refProp:o,ref:t,...i},(0,n.cloneElement)(r,l?{[l]:w}:w))});w.displayName="@mantine/core/HoverCardTarget";let C={openDelay:0,closeDelay:150,initiallyOpened:!1};function f(e){let{children:t,onOpen:r,onClose:i,openDelay:c,closeDelay:u,initiallyOpened:m,...p}=(0,a.w)("HoverCard",C,e),[v,{open:h,close:w}]=(0,o.q)(m,{onClose:i,onOpen:r}),{openDropdown:f,closeDropdown:x}=(0,l.U)({open:h,close:w,openDelay:c,closeDelay:u});return n.createElement(d,{value:{openDropdown:f,closeDropdown:x}},n.createElement(s.J,{...p,opened:v,__staticSelector:"HoverCard"},t))}f.displayName="@mantine/core/HoverCard",f.Target=w,f.Dropdown=p,f.extend=e=>e},87921:function(e,t,r){"use strict";r.d(t,{q:function(){return o}});var n=r(27378);function o(e=!1,t){let{onOpen:r,onClose:o}=t||{},[a,l]=(0,n.useState)(e),s=(0,n.useCallback)(()=>{l(e=>e||(r?.(),!0))},[r]),i=(0,n.useCallback)(()=>{l(e=>e?(o?.(),!1):e)},[o]),d=(0,n.useCallback)(()=>{a?i():s()},[i,s,a]);return[a,{open:s,close:i,toggle:d}]}}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=86680)}),_N_E=e.O()}]);