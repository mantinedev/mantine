(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9258],{33507:function(e,r,t){"use strict";t.d(r,{Z:function(){return n}});var n=(0,t(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,r,t){"use strict";t.d(r,{Z:function(){return n}});var n=(0,t(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,r,t){"use strict";t.d(r,{Z:function(){return n}});var n=(0,t(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,r,t){"use strict";t.d(r,{Z:function(){return n}});var n=(0,t(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,r,t){"use strict";t.d(r,{Z:function(){return n}});var n=(0,t(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,r,t){"use strict";t.d(r,{Z:function(){return n}});var n=(0,t(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,r,t){"use strict";t.d(r,{Z:function(){return n}});var n=(0,t(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},79163:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/hover-card",function(){return t(41499)}])},41499:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return g}});var n=t(85893),o=t(11151),a=t(19905),l=t(9904),s=t(67294),i=t(16262),c=t(92209),d=t(14469),u=t(72039);let p=`
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

`,v={type:"code",component:function(){return s.createElement(i.Z,{justify:"center"},s.createElement(c.z,{width:280,shadow:"md"},s.createElement(c.z.Target,null,s.createElement(d.z,null,"Hover to reveal the card")),s.createElement(c.z.Dropdown,null,s.createElement(u.x,{size:"sm"},"Hover card is revealed when user hovers over target element, it will be hidden once mouse is not over both target and dropdown elements"))))},code:p},m=`
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
`,h={type:"code",component:function(){return s.createElement(i.Z,{justify:"center"},s.createElement(c.z,{shadow:"md",openDelay:1e3},s.createElement(c.z.Target,null,s.createElement(d.z,null,"1000ms open delay")),s.createElement(c.z.Dropdown,null,s.createElement(u.x,{size:"sm"},"Opened with 1000ms delay"))),s.createElement(c.z,{shadow:"md",closeDelay:1e3},s.createElement(c.z.Target,null,s.createElement(d.z,null,"1000ms close delay")),s.createElement(c.z.Dropdown,null,s.createElement(u.x,{size:"sm"},"Will close with 1000ms delay"))))},code:m};var f=t(93338);let y=(0,a.A)(l.us.HoverCard);function w(e){let r=Object.assign({h2:"h2",p:"p",code:"code"},(0,o.ah)(),e.components),{Demo:t,TargetComponent:a}=r;return t||b("Demo",!0),a||b("TargetComponent",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t,{data:v}),"\n",(0,n.jsx)(r.h2,{id:"delays",children:"Delays"}),"\n",(0,n.jsxs)(r.p,{children:["Set open and close delays in ms with ",(0,n.jsx)(r.code,{children:"openDelay"})," and ",(0,n.jsx)(r.code,{children:"closeDelay"})," props:"]}),"\n",(0,n.jsx)(t,{data:h}),"\n",(0,n.jsx)(r.h2,{id:"with-interactive-elements",children:"With interactive elements"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"HoverCard"})," is displayed only when the mouse is over the target element or dropdown,\nyou can use anchors and buttons within dropdowns, using inputs is not recommended:"]}),"\n",(0,n.jsx)(t,{data:f.N}),"\n",(0,n.jsx)(a,{component:"HoverCard"}),"\n",(0,n.jsx)(r.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"HoverCard"})," is ignored by screen readers and cannot be activated with keyboard, use it to display only additional information\nthat is not required to understand the context."]})]})}var g=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(y,Object.assign({},e,{children:(0,n.jsx)(w,e)}))};function b(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},66740:function(e,r,t){"use strict";t.d(r,{q:function(){return W}});var n=t(67294);let o=(0,n.createContext)(null),a=o.Provider;var l={root:"m-f85678b6",image:"m-11f8ac07",placeholder:"m-104cd71f",group:"m-11def92b"},s=t(3154),i=t(30370),c=t(86109),d=t(81110),u=t(8586),p=t(48468),v=Object.defineProperty,m=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,y=(e,r,t)=>r in e?v(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,w=(e,r)=>{for(var t in r||(r={}))h.call(r,t)&&y(e,t,r[t]);if(m)for(var t of m(r))f.call(r,t)&&y(e,t,r[t]);return e},g=(e,r)=>{var t={};for(var n in e)h.call(e,n)&&0>r.indexOf(n)&&(t[n]=e[n]);if(null!=e&&m)for(var n of m(e))0>r.indexOf(n)&&f.call(e,n)&&(t[n]=e[n]);return t};let b={},C=(0,u.Z)((e,{spacing:r})=>({group:{"--ag-spacing":(0,p.bG)(r)}})),x=(0,s.d)((e,r)=>{let t=(0,i.w)("AvatarGroup",b,e),{classNames:o,className:s,style:u,styles:p,unstyled:v,vars:m,spacing:h}=t,f=g(t,["classNames","className","style","styles","unstyled","vars","spacing"]),y=(0,c.y)({name:"AvatarGroup",classes:l,props:t,className:s,style:u,classNames:o,styles:p,unstyled:v,vars:m,varsResolver:C,rootSelector:"group"});return n.createElement(a,{value:!0},n.createElement(d.x,w(w({ref:r},y("group")),f)))});x.classes=l,x.displayName="@mantine/core/AvatarGroup";var E=Object.defineProperty,O=Object.defineProperties,j=Object.getOwnPropertyDescriptors,H=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable,M=(e,r,t)=>r in e?E(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,z=(e,r)=>{for(var t in r||(r={}))k.call(r,t)&&M(e,t,r[t]);if(H)for(var t of H(r))D.call(r,t)&&M(e,t,r[t]);return e},T=(e,r)=>O(e,j(r));function P(e){return n.createElement("svg",T(z({},e),{"data-avatar-placeholder-icon":!0,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"}),n.createElement("path",{d:"M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}var Z=t(70405),G=Object.defineProperty,A=Object.defineProperties,N=Object.getOwnPropertyDescriptors,S=Object.getOwnPropertySymbols,_=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable,B=(e,r,t)=>r in e?G(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,R=(e,r)=>{for(var t in r||(r={}))_.call(r,t)&&B(e,t,r[t]);if(S)for(var t of S(r))I.call(r,t)&&B(e,t,r[t]);return e},q=(e,r)=>A(e,N(r)),F=(e,r)=>{var t={};for(var n in e)_.call(e,n)&&0>r.indexOf(n)&&(t[n]=e[n]);if(null!=e&&S)for(var n of S(e))0>r.indexOf(n)&&I.call(e,n)&&(t[n]=e[n]);return t};let L={},J=(0,u.Z)((e,{size:r,radius:t,variant:n,gradient:o,color:a})=>{let l=e.variantColorResolver({color:a||"gray",theme:e,gradient:o,variant:n||"light"});return{root:{"--avatar-size":(0,p.ap)(r,"avatar-size"),"--avatar-radius":void 0===t?void 0:(0,p.H5)(t),"--avatar-bg":a||n?l.background:void 0,"--avatar-color":a||n?l.color:void 0,"--avatar-bd":a||n?l.border:void 0}}}),W=(0,Z.b)((e,r)=>{let t=(0,i.w)("Avatar",L,e),{classNames:a,className:s,style:u,styles:p,unstyled:v,vars:m,src:h,alt:f,radius:y,color:w,gradient:g,imageProps:b,children:C}=t,x=F(t,["classNames","className","style","styles","unstyled","vars","src","alt","radius","color","gradient","imageProps","children"]),E=function(){let e=(0,n.useContext)(o);return{withinGroup:!!e}}(),[O,j]=(0,n.useState)(!h),H=(0,c.y)({name:"Avatar",props:t,classes:l,className:s,style:u,classNames:a,styles:p,unstyled:v,vars:m,varsResolver:J});return(0,n.useEffect)(()=>j(!h),[h]),n.createElement(d.x,R(q(R({},H("root")),{mod:{"within-group":E.withinGroup},ref:r}),x),O?n.createElement("span",q(R({},H("placeholder")),{title:f}),C||n.createElement(P,null)):n.createElement("img",q(R(R({},b),H("image")),{src:h,alt:f,onError:e=>{var r;j(!0),null==(r=null==b?void 0:b.onError)||r.call(b,e)}})))});W.classes=l,W.displayName="@mantine/core/Avatar",W.Group=x},92209:function(e,r,t){"use strict";t.d(r,{z:function(){return q}});var n=t(67294),o=t(12177),a=t(45763);let[l,s]=(0,a.R)("HoverCard component was not found in the tree");var i=t(35070),c=t(84131),d=t(30370),u=Object.defineProperty,p=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,h=(e,r,t)=>r in e?u(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,f=(e,r)=>{for(var t in r||(r={}))v.call(r,t)&&h(e,t,r[t]);if(p)for(var t of p(r))m.call(r,t)&&h(e,t,r[t]);return e},y=(e,r)=>{var t={};for(var n in e)v.call(e,n)&&0>r.indexOf(n)&&(t[n]=e[n]);if(null!=e&&p)for(var n of p(e))0>r.indexOf(n)&&m.call(e,n)&&(t[n]=e[n]);return t};let w={};function g(e){let r=(0,d.w)("HoverCardDropdown",w,e),{children:t,onMouseEnter:o,onMouseLeave:a}=r,l=y(r,["children","onMouseEnter","onMouseLeave"]),u=s(),p=(0,i.x)(o,u.openDropdown),v=(0,i.x)(a,u.closeDropdown);return n.createElement(c.J.Dropdown,f({onMouseEnter:p,onMouseLeave:v},l),t)}g.displayName="@mantine/core/HoverCardDropdown";var b=t(12322),C=Object.defineProperty,x=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,j=(e,r,t)=>r in e?C(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,H=(e,r)=>{for(var t in r||(r={}))E.call(r,t)&&j(e,t,r[t]);if(x)for(var t of x(r))O.call(r,t)&&j(e,t,r[t]);return e},k=(e,r)=>{var t={};for(var n in e)E.call(e,n)&&0>r.indexOf(n)&&(t[n]=e[n]);if(null!=e&&x)for(var n of x(e))0>r.indexOf(n)&&O.call(e,n)&&(t[n]=e[n]);return t};let D={refProp:"ref"},M=(0,n.forwardRef)((e,r)=>{let t=(0,d.w)("HoverCardTarget",D,e),{children:o,refProp:a}=t,l=k(t,["children","refProp"]);if(!(0,b.k)(o))throw Error("HoverCard.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");let u=s(),p=(0,i.x)(o.props.onMouseEnter,u.openDropdown),v=(0,i.x)(o.props.onMouseLeave,u.closeDropdown);return n.createElement(c.J.Target,H({refProp:a,ref:r},l),(0,n.cloneElement)(o,{onMouseEnter:p,onMouseLeave:v}))});M.displayName="@mantine/core/HoverCardTarget";var z=t(1395),T=Object.defineProperty,P=Object.defineProperties,Z=Object.getOwnPropertyDescriptors,G=Object.getOwnPropertySymbols,A=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable,S=(e,r,t)=>r in e?T(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,_=(e,r)=>{for(var t in r||(r={}))A.call(r,t)&&S(e,t,r[t]);if(G)for(var t of G(r))N.call(r,t)&&S(e,t,r[t]);return e},I=(e,r)=>P(e,Z(r)),B=(e,r)=>{var t={};for(var n in e)A.call(e,n)&&0>r.indexOf(n)&&(t[n]=e[n]);if(null!=e&&G)for(var n of G(e))0>r.indexOf(n)&&N.call(e,n)&&(t[n]=e[n]);return t};let R={openDelay:0,closeDelay:150,initiallyOpened:!1};function q(e){let r=(0,d.w)("HoverCard",R,e),{children:t,onOpen:a,onClose:s,openDelay:i,closeDelay:u,initiallyOpened:p}=r,v=B(r,["children","onOpen","onClose","openDelay","closeDelay","initiallyOpened"]),[m,{open:h,close:f}]=(0,o.q)(p,{onClose:s,onOpen:a}),{openDropdown:y,closeDropdown:w}=(0,z.U)({open:h,close:f,openDelay:i,closeDelay:u});return n.createElement(l,{value:{openDropdown:y,closeDropdown:w}},n.createElement(c.J,I(_({},v),{opened:m,__staticSelector:"HoverCard"}),t))}q.displayName="@mantine/core/HoverCard",q.Target=M,q.Dropdown=g},93338:function(e,r,t){"use strict";t.d(r,{N:function(){return p},m:function(){return u}});var n=t(67294),o=t(92209),a=t(16262),l=t(66740),s=t(75253),i=t(72039),c=t(67585);let d=`
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
`;function u({children:e}){return n.createElement(o.z,{width:320,shadow:"md",withArrow:!0,openDelay:200,closeDelay:400},n.createElement(o.z.Target,null,e),n.createElement(o.z.Dropdown,null,n.createElement(a.Z,null,n.createElement(l.q,{src:"https://avatars.githubusercontent.com/u/79146003?s=200&v=4",radius:"xl"}),n.createElement(s.K,{gap:5},n.createElement(i.x,{size:"sm",fw:700,style:{lineHeight:1}},"Mantine"),n.createElement(c.e,{href:"https://twitter.com/mantinedev",c:"dimmed",size:"xs",style:{lineHeight:1}},"@mantinedev"))),n.createElement(i.x,{size:"sm",mt:"md"},"Customizable React components and hooks library with focus on usability, accessibility and developer experience"),n.createElement(a.Z,{mt:"md",gap:"xl"},n.createElement(i.x,{size:"sm"},n.createElement("b",null,"0")," Following"),n.createElement(i.x,{size:"sm"},n.createElement("b",null,"1,174")," Followers"))))}let p={type:"code",component:function(){return n.createElement(a.Z,{justify:"center"},n.createElement(u,null,n.createElement(l.q,{src:"https://avatars.githubusercontent.com/u/79146003?s=200&v=4",radius:"xl"})))},code:d}},12177:function(e,r,t){"use strict";t.d(r,{q:function(){return o}});var n=t(67294);function o(e=!1,r){let{onOpen:t,onClose:o}=r||{},[a,l]=(0,n.useState)(e),s=(0,n.useCallback)(()=>{l(e=>e||(null==t||t(),!0))},[t]),i=(0,n.useCallback)(()=>{l(e=>e?(null==o||o(),!1):e)},[o]),c=(0,n.useCallback)(()=>{a?i():s()},[i,s,a]);return[a,{open:s,close:i,toggle:c}]}}},function(e){e.O(0,[8992,178,9774,2888,179],function(){return e(e.s=79163)}),_N_E=e.O()}]);