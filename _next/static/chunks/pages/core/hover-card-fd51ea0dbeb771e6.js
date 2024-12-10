(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[69258],{79481:function(e,r,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/hover-card",function(){return o(78934)}])},78934:function(e,r,o){"use strict";o.r(r),o.d(r,{default:function(){return x}});var t=o(52322),n=o(45392),s=o(93010),a=o(68852),i=o(39629),d=o(8582);let l={type:"code",component:function(){return(0,t.jsx)(s.Z,{justify:"center",children:(0,t.jsxs)(a.z,{width:280,shadow:"md",children:[(0,t.jsx)(a.z.Target,{children:(0,t.jsx)(i.z,{children:"Hover to reveal the card"})}),(0,t.jsx)(a.z.Dropdown,{children:(0,t.jsx)(d.x,{size:"sm",children:"Hover card is revealed when user hovers over target element, it will be hidden once mouse is not over both target and dropdown elements"})})]})})},code:`
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

`},c={type:"code",component:function(){return(0,t.jsxs)(s.Z,{justify:"center",children:[(0,t.jsxs)(a.z,{shadow:"md",openDelay:1e3,children:[(0,t.jsx)(a.z.Target,{children:(0,t.jsx)(i.z,{children:"1000ms open delay"})}),(0,t.jsx)(a.z.Dropdown,{children:(0,t.jsx)(d.x,{size:"sm",children:"Opened with 1000ms delay"})})]}),(0,t.jsxs)(a.z,{shadow:"md",closeDelay:1e3,children:[(0,t.jsx)(a.z.Target,{children:(0,t.jsx)(i.z,{children:"1000ms close delay"})}),(0,t.jsx)(a.z.Dropdown,{children:(0,t.jsx)(d.x,{size:"sm",children:"Will close with 1000ms delay"})})]})]})},code:`
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
`};var u=o(10680),h=o(25071),p=o(15019);let m=(0,h.A)(p.us.HoverCard);function v(e){let r={code:"code",h2:"h2",p:"p",...(0,n.a)(),...e.components},{Demo:o,TargetComponent:s}=r;return o||w("Demo",!0),s||w("TargetComponent",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(o,{data:l}),"\n",(0,t.jsx)(r.h2,{id:"delays",children:"Delays"}),"\n",(0,t.jsxs)(r.p,{children:["Set open and close delays in ms with ",(0,t.jsx)(r.code,{children:"openDelay"})," and ",(0,t.jsx)(r.code,{children:"closeDelay"})," props:"]}),"\n",(0,t.jsx)(o,{data:c}),"\n",(0,t.jsx)(r.h2,{id:"with-interactive-elements",children:"With interactive elements"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"HoverCard"})," is displayed only when the mouse is over the target element or dropdown,\nyou can use anchors and buttons within dropdowns, using inputs is not recommended:"]}),"\n",(0,t.jsx)(o,{data:u.N}),"\n",(0,t.jsx)(s,{component:"HoverCard"}),"\n",(0,t.jsx)(r.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"HoverCard"})," is ignored by screen readers and cannot be activated with keyboard, use it to display only additional information\nthat is not required to understand the context."]})]})}function x(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(m,{...e,children:(0,t.jsx)(v,{...e})})}function w(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},10680:function(e,r,o){"use strict";o.d(r,{N:function(){return u},m:function(){return c}});var t=o(52322),n=o(68852),s=o(93010),a=o(82067),i=o(65438),d=o(8582),l=o(71873);function c({children:e}){return(0,t.jsxs)(n.z,{width:320,shadow:"md",withArrow:!0,openDelay:200,closeDelay:400,children:[(0,t.jsx)(n.z.Target,{children:e}),(0,t.jsxs)(n.z.Dropdown,{children:[(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(a.q,{src:"https://avatars.githubusercontent.com/u/79146003?s=200&v=4",radius:"xl"}),(0,t.jsxs)(i.K,{gap:5,children:[(0,t.jsx)(d.x,{size:"sm",fw:700,style:{lineHeight:1},children:"Mantine"}),(0,t.jsx)(l.e,{href:"https://x.com/mantinedev",c:"dimmed",size:"xs",style:{lineHeight:1},children:"@mantinedev"})]})]}),(0,t.jsx)(d.x,{size:"sm",mt:"md",children:"Customizable React components and hooks library with focus on usability, accessibility and developer experience"}),(0,t.jsxs)(s.Z,{mt:"md",gap:"xl",children:[(0,t.jsxs)(d.x,{size:"sm",children:[(0,t.jsx)("b",{children:"0"})," Following"]}),(0,t.jsxs)(d.x,{size:"sm",children:[(0,t.jsx)("b",{children:"1,174"})," Followers"]})]})]})]})}let u={type:"code",component:function(){return(0,t.jsx)(s.Z,{justify:"center",children:(0,t.jsx)(c,{children:(0,t.jsx)(a.q,{src:"https://avatars.githubusercontent.com/u/79146003?s=200&v=4",radius:"xl"})})})},code:`
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
`}},82067:function(e,r,o){"use strict";o.d(r,{q:function(){return H}});var t=o(52322),n=o(2784),s=o(91482),a=o(11200),i=o(38483),d=o(46690),l=o(28559),c=o(33502),u=o(82027);let h=(0,n.createContext)(null),p=h.Provider;var m={group:"m_11def92b",root:"m_f85678b6",image:"m_11f8ac07",placeholder:"m_104cd71f"};let v={},x=(0,a.Z)((e,{spacing:r})=>({group:{"--ag-spacing":(0,s.bG)(r)}})),w=(0,u.d5)((e,r)=>{let o=(0,i.w)("AvatarGroup",v,e),{classNames:n,className:s,style:a,styles:c,unstyled:u,vars:h,spacing:w,...C}=o,f=(0,d.y)({name:"AvatarGroup",classes:m,props:o,className:s,style:a,classNames:n,styles:c,unstyled:u,vars:h,varsResolver:x,rootSelector:"group"});return(0,t.jsx)(p,{value:!0,children:(0,t.jsx)(l.x,{ref:r,...f("group"),...C})})});function C(e){return(0,t.jsx)("svg",{...e,"data-avatar-placeholder-icon":!0,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}function f(e,r=2){let o=e.split(" ");return 1===o.length?e.slice(0,r).toUpperCase():o.map(e=>e[0]).slice(0,r).join("").toUpperCase()}w.classes=m,w.displayName="@mantine/core/AvatarGroup";let g=["blue","cyan","grape","green","indigo","lime","orange","pink","red","teal","violet"],j={},y=(0,a.Z)((e,{size:r,radius:o,variant:t,gradient:n,color:a,autoContrast:i,name:d,allowedInitialsColors:l})=>{let c="initials"===a&&"string"==typeof d?function(e,r=g){let o=Math.abs(function(e){let r=0;for(let o=0;o<e.length;o+=1)r=(r<<5)-r+e.charCodeAt(o)|0;return r}(f(e)))%r.length;return r[o]}(d,l):a,u=e.variantColorResolver({color:c||"gray",theme:e,gradient:n,variant:t||"light",autoContrast:i});return{root:{"--avatar-size":(0,s.ap)(r,"avatar-size"),"--avatar-radius":void 0===o?void 0:(0,s.H5)(o),"--avatar-bg":c||t?u.background:void 0,"--avatar-color":c||t?u.color:void 0,"--avatar-bd":c||t?u.border:void 0}}}),H=(0,c.b)((e,r)=>{let o=(0,i.w)("Avatar",j,e),{classNames:s,className:a,style:c,styles:u,unstyled:p,vars:v,src:x,alt:w,radius:g,color:H,gradient:b,imageProps:D,children:T,autoContrast:z,mod:G,name:_,allowedInitialsColors:k,...A}=o,E={withinGroup:!!(0,n.useContext)(h)},[M,N]=(0,n.useState)(!x),Z=(0,d.y)({name:"Avatar",props:o,classes:m,className:a,style:c,classNames:s,styles:u,unstyled:p,vars:v,varsResolver:y});return(0,n.useEffect)(()=>N(!x),[x]),(0,t.jsx)(l.x,{...Z("root"),mod:[{"within-group":E.withinGroup},G],ref:r,...A,children:M?(0,t.jsx)("span",{...Z("placeholder"),title:w,children:T||"string"==typeof _&&f(_)||(0,t.jsx)(C,{})}):(0,t.jsx)("img",{...D,...Z("image"),src:x,alt:w,onError:e=>{N(!0),D?.onError?.(e)}})})});H.classes=m,H.displayName="@mantine/core/Avatar",H.Group=w},68852:function(e,r,o){"use strict";o.d(r,{z:function(){return C}});var t=o(52322),n=o(3900),s=o(2784),a=o(38483),i=o(39461),d=o(26972);let[l,c]=(0,o(89106).R)("HoverCard component was not found in the tree");var u=o(98498);let h={};function p(e){let{children:r,onMouseEnter:o,onMouseLeave:n,...s}=(0,a.w)("HoverCardDropdown",h,e),i=c(),l=(0,u.x)(o,i.openDropdown),p=(0,u.x)(n,i.closeDropdown);return(0,t.jsx)(d.J.Dropdown,{onMouseEnter:l,onMouseLeave:p,...s,children:r})}p.displayName="@mantine/core/HoverCardDropdown";var m=o(98399);let v={refProp:"ref"},x=(0,s.forwardRef)((e,r)=>{let{children:o,refProp:n,eventPropsWrapperName:i,...l}=(0,a.w)("HoverCardTarget",v,e);if(!(0,m.k)(o))throw Error("HoverCard.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");let h=c(),p={onMouseEnter:(0,u.x)(o.props.onMouseEnter,h.openDropdown),onMouseLeave:(0,u.x)(o.props.onMouseLeave,h.closeDropdown)};return(0,t.jsx)(d.J.Target,{refProp:n,ref:r,...l,children:(0,s.cloneElement)(o,i?{[i]:p}:p)})});x.displayName="@mantine/core/HoverCardTarget";let w={openDelay:0,closeDelay:150,initiallyOpened:!1};function C(e){let{children:r,onOpen:o,onClose:s,openDelay:c,closeDelay:u,initiallyOpened:h,...p}=(0,a.w)("HoverCard",w,e),[m,{open:v,close:x}]=(0,n.q)(h,{onClose:s,onOpen:o}),{openDropdown:C,closeDropdown:f}=(0,i.U)({open:v,close:x,openDelay:c,closeDelay:u});return(0,t.jsx)(l,{value:{openDropdown:C,closeDropdown:f},children:(0,t.jsx)(d.J,{...p,opened:m,__staticSelector:"HoverCard",children:r})})}C.displayName="@mantine/core/HoverCard",C.Target=x,C.Dropdown=p,C.extend=e=>e},3900:function(e,r,o){"use strict";o.d(r,{q:function(){return n}});var t=o(2784);function n(e=!1,r){let{onOpen:o,onClose:n}=r||{},[s,a]=(0,t.useState)(e),i=(0,t.useCallback)(()=>{a(e=>e||(o?.(),!0))},[o]),d=(0,t.useCallback)(()=>{a(e=>e?(n?.(),!1):e)},[n]),l=(0,t.useCallback)(()=>{s?d():i()},[d,i,s]);return[s,{open:i,close:d,toggle:l}]}}},function(e){e.O(0,[61177,66748,11340,92888,49774,40179],function(){return e(e.s=79481)}),_N_E=e.O()}]);