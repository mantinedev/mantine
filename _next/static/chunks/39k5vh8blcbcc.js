(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var r=Object.defineProperty;e.s(["__exportAll",0,(e,o)=>{let t={};for(var n in e)r(t,n,{get:e[n],enumerable:!0});return o||r(t,Symbol.toStringTag,{value:"Module"}),t}])},141806,e=>{"use strict";var r=e.i(433512),o=e.i(481178),t=e.i(44091),n=e.i(391466),a=e.i(956449),s=e.i(232471),d={group:"m_11def92b",root:"m_f85678b6",image:"m_11f8ac07",placeholder:"m_104cd71f"},i=e.i(275519),l=e.i(191788),c=e.i(391398);let u=(0,l.createContext)({withinGroup:!1}),p=(0,o.createVarsResolver)((e,{spacing:o})=>({group:{"--ag-spacing":(0,r.getSpacing)(o)}})),v=(0,i.factory)(e=>{let r=(0,t.useProps)("AvatarGroup",null,e),{classNames:o,className:a,style:i,styles:l,unstyled:v,vars:h,spacing:m,attributes:x,...C}=r;return(0,c.jsx)(u,{value:{withinGroup:!0},children:(0,c.jsx)(s.Box,{...(0,n.useStyles)({name:"AvatarGroup",classes:d,props:r,className:a,style:i,classNames:o,styles:l,unstyled:v,attributes:x,vars:h,varsResolver:p,rootSelector:"group"})("group"),...C})})});function h(e){return(0,c.jsx)("svg",{...e,"data-avatar-placeholder-icon":!0,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,c.jsx)("path",{d:"M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}v.classes=d,v.varsResolver=p,v.displayName="@mantine/core/AvatarGroup";let m=["blue","cyan","grape","green","indigo","lime","orange","pink","red","teal","violet"],x=(0,o.createVarsResolver)((e,{size:o,radius:t,variant:n,gradient:a,color:s,autoContrast:d,name:i,allowedInitialsColors:l})=>{let c="initials"===s&&"string"==typeof i?function(e,r=m){return r[Math.abs(function(e){let r=0;for(let o=0;o<e.length;o+=1)r=(r<<5)-r+e.charCodeAt(o)|0;return r}(e))%r.length]}(i,l):s,u=e.variantColorResolver({color:c||"gray",theme:e,gradient:a,variant:n||"light",autoContrast:d});return{root:{"--avatar-size":(0,r.getSize)(o,"avatar-size"),"--avatar-radius":void 0===t?void 0:(0,r.getRadius)(t),"--avatar-bg":c||n?u.background:void 0,"--avatar-color":c||n?u.color:void 0,"--avatar-bd":c||n?u.border:void 0}}}),C=(0,a.polymorphicFactory)(e=>{let r=(0,t.useProps)("Avatar",null,e),{classNames:o,className:a,style:i,styles:p,unstyled:v,vars:m,src:C,alt:g,radius:w,color:H,gradient:f,imageProps:j,children:y,autoContrast:T,mod:D,name:b,allowedInitialsColors:G,attributes:P,...z}=r,A=(0,l.use)(u),[B,R]=(0,l.useState)(!C),E=(0,n.useStyles)({name:"Avatar",props:r,classes:d,className:a,style:i,classNames:o,styles:p,unstyled:v,attributes:P,vars:m,varsResolver:x});return(0,l.useEffect)(()=>R(!C),[C]),(0,c.jsx)(s.Box,{...E("root"),mod:[{"within-group":A.withinGroup},D],...z,children:B||!C?(0,c.jsx)("span",{...E("placeholder"),title:g,children:y||"string"==typeof b&&function(e,r=2){let o=e.split(" ");return 1===o.length?e.slice(0,r).toUpperCase():o.map(e=>e[0]).slice(0,r).join("").toUpperCase()}(b)||(0,c.jsx)(h,{})}):(0,c.jsx)("img",{...j,...E("image"),src:C,alt:g,onError:e=>{R(!0),j?.onError?.(e)}})})});C.classes=d,C.varsResolver=x,C.displayName="@mantine/core/Avatar",C.Group=v,e.s(["Avatar",0,C],141806)},369974,e=>{"use strict";var r=e.i(44091),o=e.i(392862);let[t,n]=(0,e.i(386179).createSafeContext)("HoverCard component was not found in the tree");var a=e.i(191788),s=e.i(391398),d=e.i(458272);let i=(0,a.createContext)({withinGroup:!1}),l={openDelay:0,closeDelay:0};function c(e){let{openDelay:o,closeDelay:t,children:n}=(0,r.useProps)("HoverCardGroup",l,e);return(0,s.jsx)(i,{value:{withinGroup:!0},children:(0,s.jsx)(d.FloatingDelayGroup,{delay:{open:o,close:t},children:n})})}c.displayName="@mantine/core/HoverCardGroup",c.extend=e=>e;var u=e.i(334816);function p(e){let{children:t,onMouseEnter:d,onMouseLeave:l,...c}=(0,r.useProps)("HoverCardDropdown",null,e),p=n();if((0,a.use)(i).withinGroup&&p.getFloatingProps&&p.floating){let e=p.getFloatingProps();return(0,s.jsx)(o.Popover.Dropdown,{ref:p.floating,...e,onMouseEnter:(0,u.createEventHandler)(d,e.onMouseEnter),onMouseLeave:(0,u.createEventHandler)(l,e.onMouseLeave),...c,children:t})}let v=(0,u.createEventHandler)(d,p.openDropdown),h=(0,u.createEventHandler)(l,p.closeDropdown);return(0,s.jsx)(o.Popover.Dropdown,{onMouseEnter:v,onMouseLeave:h,...c,children:t})}p.displayName="@mantine/core/HoverCardDropdown";var v=e.i(275825),h=e.i(409703),m=e.i(332977);let x={refProp:"ref"};function C(e){let{children:t,refProp:d,eventPropsWrapperName:l,...c}=(0,r.useProps)("HoverCardTarget",x,e),p=(0,h.getSingleElementChild)(t);if(!p)throw Error("HoverCard.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");let C=n(),g=(0,a.use)(i),w=(0,m.useMergedRef)((0,v.getRefProp)(p),C.assignTarget);if(g.withinGroup&&C.getReferenceProps&&C.reference){let e=C.getReferenceProps();return(0,s.jsx)(o.Popover.Target,{refProp:d,...c,children:(0,a.cloneElement)(p,l?{[l]:{...e,ref:C.reference}}:{...e,ref:C.reference})})}let H={onMouseEnter:(0,u.createEventHandler)(p.props.onMouseEnter,C.openDropdown),onMouseLeave:(0,u.createEventHandler)(p.props.onMouseLeave,C.closeDropdown)},f={...l?{[l]:H}:H,ref:w};return(0,s.jsx)(o.Popover.Target,{refProp:d,...c,children:(0,a.cloneElement)(p,f)})}C.displayName="@mantine/core/HoverCardTarget";var g=e.i(107315);let w={openDelay:0,closeDelay:150,initiallyOpened:!1};function H(e){let{children:n,onOpen:l,onClose:c,openDelay:u,closeDelay:p,initiallyOpened:v,...h}=(0,r.useProps)("HoverCard",w,e),m=function(e){let[r,o]=(0,a.useState)(e.defaultOpened),t="boolean"==typeof e.opened?e.opened:r,n=(0,a.use)(i).withinGroup,s=(0,g.useId)(),l=(0,a.useRef)(-1),c=(0,a.useRef)(-1),u=(0,a.useRef)(null),p=(0,a.useCallback)(e=>{u.current=e},[]),v=(0,a.useCallback)(()=>{window.clearTimeout(l.current),window.clearTimeout(c.current)},[]),h=(0,a.useCallback)(r=>{o(r),r?(w(s),e.onOpen?.()):e.onClose?.()},[s,e.onOpen,e.onClose]),{context:m,refs:x}=(0,d.useFloating)({open:t,onOpenChange:h}),{delay:C,setCurrentId:w}=(0,d.useDelayGroup)(m,{id:s}),{getReferenceProps:H,getFloatingProps:f}=(0,d.useInteractions)([(0,d.useHover)(m,{enabled:!0,delay:n?C:{open:e.openDelay,close:e.closeDelay}}),(0,d.useRole)(m,{role:"dialog"}),(0,d.useDismiss)(m,{enabled:n})]),j=(0,a.useCallback)(()=>{n||(v(),0===e.openDelay||void 0===e.openDelay?h(!0):l.current=window.setTimeout(()=>h(!0),e.openDelay))},[n,v,e.openDelay,h]),y=(0,a.useCallback)(()=>{n||(v(),0===e.closeDelay||void 0===e.closeDelay?h(!1):c.current=window.setTimeout(()=>h(!1),e.closeDelay))},[n,v,e.closeDelay,h]),T=(0,a.useRef)(h);return T.current=h,(0,a.useEffect)(()=>()=>v(),[v]),(0,a.useEffect)(()=>{if(!t||n||"u"<typeof IntersectionObserver)return;let e=u.current;if(!e)return;let r=new IntersectionObserver(()=>{e.isConnected&&0!==e.getClientRects().length||(v(),T.current(!1))});return r.observe(e),()=>r.disconnect()},[t,n,v]),{opened:t,reference:x.setReference,floating:x.setFloating,assignTarget:p,getReferenceProps:H,getFloatingProps:f,openDropdown:j,closeDropdown:y}}({openDelay:u,closeDelay:p,defaultOpened:v,onOpen:l,onClose:c});return(0,s.jsx)(t,{value:{openDropdown:m.openDropdown,closeDropdown:m.closeDropdown,assignTarget:m.assignTarget,getReferenceProps:m.getReferenceProps,getFloatingProps:m.getFloatingProps,reference:m.reference,floating:m.floating},children:(0,s.jsx)(o.Popover,{...h,opened:m.opened,__staticSelector:"HoverCard",children:n})})}H.displayName="@mantine/core/HoverCard",H.Target=C,H.Dropdown=p,H.Group=c,H.extend=e=>e,e.s(["HoverCard",0,H],369974)},720761,e=>{"use strict";var r=e.i(648863),o=e.i(79897),t=e.i(141806),n=e.i(725695),a=e.i(369974),s=e.i(671640),d=e.i(883364),i=e.i(391398);function l({children:e}){return(0,i.jsxs)(a.HoverCard,{width:320,shadow:"md",withArrow:!0,openDelay:200,closeDelay:400,children:[(0,i.jsx)(a.HoverCard.Target,{children:e}),(0,i.jsxs)(a.HoverCard.Dropdown,{children:[(0,i.jsxs)(n.Group,{children:[(0,i.jsx)(t.Avatar,{src:"https://avatars.githubusercontent.com/u/79146003?s=200&v=4",radius:"xl"}),(0,i.jsxs)(s.Stack,{gap:5,children:[(0,i.jsx)(d.Text,{size:"sm",fw:700,style:{lineHeight:1},children:"Mantine"}),(0,i.jsx)(o.Anchor,{href:"https://x.com/mantinedev",c:"dimmed",size:"xs",style:{lineHeight:1},children:"@mantinedev"})]})]}),(0,i.jsx)(d.Text,{size:"sm",mt:"md",children:"Customizable React components and hooks library with focus on usability, accessibility and developer experience"}),(0,i.jsxs)(n.Group,{mt:"md",gap:"xl",children:[(0,i.jsxs)(d.Text,{size:"sm",children:[(0,i.jsx)("b",{children:"0"})," Following"]}),(0,i.jsxs)(d.Text,{size:"sm",children:[(0,i.jsx)("b",{children:"1,174"})," Followers"]})]})]})]})}let c={type:"code",component:function(){return(0,i.jsx)(n.Group,{justify:"center",children:(0,i.jsx)(l,{children:(0,i.jsx)(t.Avatar,{src:"https://avatars.githubusercontent.com/u/79146003?s=200&v=4",radius:"xl"})})})},code:`
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
`};var u=e.i(485108);let p={type:"code",component:function(){return(0,i.jsx)(n.Group,{justify:"center",children:(0,i.jsxs)(a.HoverCard,{width:280,shadow:"md",children:[(0,i.jsx)(a.HoverCard.Target,{children:(0,i.jsx)(u.Button,{children:"Hover to reveal the card"})}),(0,i.jsx)(a.HoverCard.Dropdown,{children:(0,i.jsx)(d.Text,{size:"sm",children:"Hover card is revealed when user hovers over target element, it will be hidden once mouse is not over both target and dropdown elements"})})]})})},code:`
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

`},v={type:"code",component:function(){return(0,i.jsxs)(n.Group,{justify:"center",children:[(0,i.jsxs)(a.HoverCard,{shadow:"md",openDelay:1e3,children:[(0,i.jsx)(a.HoverCard.Target,{children:(0,i.jsx)(u.Button,{children:"1000ms open delay"})}),(0,i.jsx)(a.HoverCard.Dropdown,{children:(0,i.jsx)(d.Text,{size:"sm",children:"Opened with 1000ms delay"})})]}),(0,i.jsxs)(a.HoverCard,{shadow:"md",closeDelay:1e3,children:[(0,i.jsx)(a.HoverCard.Target,{children:(0,i.jsx)(u.Button,{children:"1000ms close delay"})}),(0,i.jsx)(a.HoverCard.Dropdown,{children:(0,i.jsx)(d.Text,{size:"sm",children:"Will close with 1000ms delay"})})]})]})},code:`
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
`},h={type:"code",component:function(){return(0,i.jsx)(a.HoverCard.Group,{openDelay:500,closeDelay:100,children:(0,i.jsxs)(n.Group,{justify:"center",children:[(0,i.jsxs)(a.HoverCard,{shadow:"md",children:[(0,i.jsx)(a.HoverCard.Target,{children:(0,i.jsx)(u.Button,{children:"First"})}),(0,i.jsx)(a.HoverCard.Dropdown,{children:(0,i.jsx)(d.Text,{size:"sm",children:"First hover card content"})})]}),(0,i.jsxs)(a.HoverCard,{shadow:"md",children:[(0,i.jsx)(a.HoverCard.Target,{children:(0,i.jsx)(u.Button,{children:"Second"})}),(0,i.jsx)(a.HoverCard.Dropdown,{children:(0,i.jsx)(d.Text,{size:"sm",children:"Second hover card content"})})]}),(0,i.jsxs)(a.HoverCard,{shadow:"md",children:[(0,i.jsx)(a.HoverCard.Target,{children:(0,i.jsx)(u.Button,{children:"Third"})}),(0,i.jsx)(a.HoverCard.Dropdown,{children:(0,i.jsx)(d.Text,{size:"sm",children:"Third hover card content"})})]})]})})},code:`
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
`};var m=(0,r.__exportAll)({delay:()=>v,group:()=>h,profile:()=>c,usage:()=>p});e.s(["HoverCardDemos",0,m],720761)},104264,e=>{"use strict";var r=e.i(391398),o=e.i(38856),t=e.i(720761);e.i(603441);var n=e.i(62558);e.i(457450);var a=e.i(418026);let s=(0,n.Layout)(a.MDX_DATA.HoverCard);function d(e){let n={code:"code",h2:"h2",p:"p",...(0,o.useMDXComponents)(),...e.components},{Demo:a,TargetComponent:s}=n;return a||i("Demo",!0),s||i("TargetComponent",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(a,{data:t.HoverCardDemos.usage}),"\n",(0,r.jsx)(n.h2,{id:"delays",children:"Delays"}),"\n",(0,r.jsxs)(n.p,{children:["Set open and close delays in ms with the ",(0,r.jsx)(n.code,{children:"openDelay"})," and ",(0,r.jsx)(n.code,{children:"closeDelay"})," props:"]}),"\n",(0,r.jsx)(a,{data:t.HoverCardDemos.delay}),"\n",(0,r.jsx)(n.h2,{id:"hovercard-delay-group",children:"HoverCard delay group"}),"\n",(0,r.jsxs)(n.p,{children:["Use the ",(0,r.jsx)(n.code,{children:"HoverCard.Group"})," component to sync open and close delays of multiple ",(0,r.jsx)(n.code,{children:"HoverCard"})," components:"]}),"\n",(0,r.jsx)(a,{data:t.HoverCardDemos.group}),"\n",(0,r.jsx)(n.h2,{id:"with-interactive-elements",children:"With interactive elements"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"HoverCard"})," is displayed only when the mouse is over the target element or dropdown.\nYou can use anchors and buttons within dropdowns, using inputs is not recommended:"]}),"\n",(0,r.jsx)(a,{data:t.HoverCardDemos.profile}),"\n",(0,r.jsx)(s,{component:"HoverCard"}),"\n",(0,r.jsx)(n.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"HoverCard"})," is ignored by screen readers and cannot be activated with the keyboard. Use it to display only additional information\nthat is not required to understand the context."]})]})}function i(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}e.s(["default",0,function(e={}){return(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})})}])},136492,(e,r,o)=>{let t="/core/hover-card";(window.__NEXT_P=window.__NEXT_P||[]).push([t,()=>e.r(104264)]),r.hot&&r.hot.dispose(function(){window.__NEXT_P.push([t])})},648761,e=>{e.v(r=>Promise.all(["static/chunks/22379_btw709h.js"].map(r=>e.l(r))).then(()=>r(493594)))},828805,e=>{e.v(r=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(r=>e.l(r))).then(()=>r(879466)))}]);