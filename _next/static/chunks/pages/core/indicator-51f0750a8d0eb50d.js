(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[90739],{60103:(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/indicator",function(){return a(61167)}])},61167:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>f});var r=a(31085),n=a(71184),i=a(16715),o=a(86658);let s={type:"configurator",component:function(e){return(0,r.jsx)(i.C,{...e,children:(0,r.jsx)(o.e,{size:"lg",radius:"sm",src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"})})},code:`
import { Indicator, Avatar } from '@mantine/core';

function Demo() {
  return (
    <Indicator{{props}}>
      <Avatar
        size="lg"
        radius="sm"
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
      />
    </Indicator>
  );
}
`,centered:!0,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"position",type:"select",data:[{value:"top-start",label:"top-start"},{value:"top-center",label:"top-center"},{value:"top-end",label:"top-end"},{value:"middle-start",label:"middle-start"},{value:"middle-center",label:"middle-center"},{value:"middle-end",label:"middle-end"},{value:"bottom-start",label:"bottom-start"},{value:"bottom-center",label:"bottom-center"},{value:"bottom-end",label:"bottom-end"}],initialValue:"top-end",libraryValue:"top-end"},{prop:"radius",type:"size",initialValue:"xl",libraryValue:"xl"},{prop:"size",type:"number",initialValue:10,libraryValue:10,step:1,min:6,max:30},{prop:"disabled",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"withBorder",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"processing",type:"boolean",initialValue:!1,libraryValue:!1}]},d={type:"code",component:function(){return(0,r.jsx)(i.C,{inline:!0,label:"New",size:16,children:(0,r.jsx)(o.e,{size:"lg",radius:"sm",src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"})})},code:`
import { Avatar, Indicator } from '@mantine/core';

function Demo() {
  return (
    <Indicator inline label="New" size={16}>
      <Avatar
        size="lg"
        radius="sm"
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
      />
    </Indicator>
  );
}
`},l={type:"code",component:function(){return(0,r.jsx)(i.C,{inline:!0,size:16,offset:7,position:"bottom-end",color:"red",withBorder:!0,children:(0,r.jsx)(o.e,{size:"lg",radius:"xl",src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png"})})},code:`
import { Avatar, Indicator } from '@mantine/core';

function Demo() {
  return (
    <Indicator inline size={16} offset={7} position="bottom-end" color="red" withBorder>
      <Avatar
        size="lg"
        radius="xl"
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png"
      />
    </Indicator>
  );
}
`},c={type:"code",component:function(){return(0,r.jsx)(i.C,{inline:!0,processing:!0,color:"red",size:12,children:(0,r.jsx)(o.e,{size:"lg",radius:"sm",src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png"})})},code:`
import { Avatar, Indicator } from '@mantine/core';

function Demo() {
  return (
    <Indicator inline processing color="red" size={12}>
      <Avatar
        size="lg"
        radius="sm"
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png"
      />
    </Indicator>
  );
}
`,centered:!0};var p=a(75390),v=a(52022),u=a(92051);let h={type:"code",component:function(){let[e,{toggle:t}]=(0,u.j)();return(0,r.jsxs)(p.B,{align:"center",children:[(0,r.jsx)(i.C,{inline:!0,disabled:!e,color:"red",size:12,children:(0,r.jsx)(o.e,{size:"lg",radius:"sm",src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png"})}),(0,r.jsx)(v.$,{onClick:t,children:"Toggle indicator"})]})},code:`
import { useDisclosure } from '@mantine/hooks';
import { Avatar, Indicator, Button, Stack } from '@mantine/core';

function Demo() {
  const [visible, { toggle }] = useDisclosure();

  return (
    <Stack align="center">
      <Indicator inline disabled={!visible} color="red" size={12}>
        <Avatar
          size="lg"
          radius="sm"
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png"
        />
      </Indicator>
      <Button onClick={toggle}>Toggle indicator</Button>
    </Stack>
  );
}
`,centered:!0};var m=a(18675),g=a(20017);let y=(0,m.P)(g.XZ.Indicator);function b(e){let t={code:"code",h2:"h2",p:"p",...(0,n.R)(),...e.components},{Demo:a}=t;return a||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(a,{data:s}),"\n",(0,r.jsx)(t.h2,{id:"inline",children:"Inline"}),"\n",(0,r.jsxs)(t.p,{children:["When the target element has a fixed width, set ",(0,r.jsx)(t.code,{children:"inline"})," prop to add ",(0,r.jsx)(t.code,{children:"display: inline-block;"})," styles to\nIndicator container. Alternatively, you can set width and height with ",(0,r.jsx)(t.code,{children:"style"})," prop if you still want the root\nelement to keep ",(0,r.jsx)(t.code,{children:"display: block"}),"."]}),"\n",(0,r.jsx)(a,{data:d}),"\n",(0,r.jsx)(t.h2,{id:"offset",children:"Offset"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"offset"})," to change indicator position. It is useful when Indicator component is\nused with children that have border-radius:"]}),"\n",(0,r.jsx)(a,{data:l}),"\n",(0,r.jsx)(t.h2,{id:"processing-animation",children:"Processing animation"}),"\n",(0,r.jsx)(a,{data:c}),"\n",(0,r.jsx)(t.h2,{id:"disabled",children:"Disabled"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"disabled"})," to hide the indicator:"]}),"\n",(0,r.jsx)(a,{data:h})]})}function f(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(y,{...e,children:(0,r.jsx)(b,{...e})})}},87186:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});var r=(0,a(73366).A)("outline","adjustments","IconAdjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},80502:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});var r=(0,a(73366).A)("outline","arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},89689:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});var r=(0,a(73366).A)("outline","arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},61584:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});var r=(0,a(73366).A)("outline","calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},91133:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});var r=(0,a(73366).A)("outline","code","IconCode",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},11749:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});var r=(0,a(73366).A)("outline","file-text","IconFileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},89843:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});var r=(0,a(73366).A)("outline","license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},9613:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});var r=(0,a(73366).A)("outline","pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},55764:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});var r=(0,a(73366).A)("outline","switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},86658:(e,t,a)=>{"use strict";a.d(t,{e:()=>x});var r=a(31085),n=a(14041),i=a(33450),o=a(7098),s=a(29686),d=a(69564),l=a(34056),c=a(2453),p=a(6754);let v=(0,n.createContext)(null),u=v.Provider;var h={group:"m_11def92b",root:"m_f85678b6",image:"m_11f8ac07",placeholder:"m_104cd71f"};let m=(0,o.V)((e,{spacing:t})=>({group:{"--ag-spacing":(0,i.GY)(t)}})),g=(0,p.P9)((e,t)=>{let a=(0,s.Y)("AvatarGroup",null,e),{classNames:n,className:i,style:o,styles:c,unstyled:p,vars:v,spacing:g,attributes:y,...b}=a,f=(0,d.I)({name:"AvatarGroup",classes:h,props:a,className:i,style:o,classNames:n,styles:c,unstyled:p,attributes:y,vars:v,varsResolver:m,rootSelector:"group"});return(0,r.jsx)(u,{value:!0,children:(0,r.jsx)(l.a,{ref:t,...f("group"),...b})})});function y(e){return(0,r.jsx)("svg",{...e,"data-avatar-placeholder-icon":!0,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}g.classes=h,g.displayName="@mantine/core/AvatarGroup";let b=["blue","cyan","grape","green","indigo","lime","orange","pink","red","teal","violet"],f=(0,o.V)((e,{size:t,radius:a,variant:r,gradient:n,color:o,autoContrast:s,name:d,allowedInitialsColors:l})=>{let c="initials"===o&&"string"==typeof d?function(e,t=b){let a=Math.abs(function(e){let t=0;for(let a=0;a<e.length;a+=1)t=(t<<5)-t+e.charCodeAt(a)|0;return t}(e))%t.length;return t[a]}(d,l):o,p=e.variantColorResolver({color:c||"gray",theme:e,gradient:n,variant:r||"light",autoContrast:s});return{root:{"--avatar-size":(0,i.YC)(t,"avatar-size"),"--avatar-radius":void 0===a?void 0:(0,i.nJ)(a),"--avatar-bg":c||r?p.background:void 0,"--avatar-color":c||r?p.color:void 0,"--avatar-bd":c||r?p.border:void 0}}}),x=(0,c.v)((e,t)=>{let a=(0,s.Y)("Avatar",null,e),{classNames:i,className:o,style:c,styles:p,unstyled:u,vars:m,src:g,alt:b,radius:x,color:k,gradient:j,imageProps:w,children:M,autoContrast:C,mod:A,name:I,allowedInitialsColors:z,attributes:_,...V}=a,D={withinGroup:!!(0,n.useContext)(v)},[E,N]=(0,n.useState)(!g),S=(0,d.I)({name:"Avatar",props:a,classes:h,className:o,style:c,classNames:i,styles:p,unstyled:u,attributes:_,vars:m,varsResolver:f});return(0,n.useEffect)(()=>N(!g),[g]),(0,r.jsx)(l.a,{...S("root"),mod:[{"within-group":D.withinGroup},A],ref:t,...V,children:E||!g?(0,r.jsx)("span",{...S("placeholder"),title:b,children:M||"string"==typeof I&&function(e,t=2){let a=e.split(" ");return 1===a.length?e.slice(0,t).toUpperCase():a.map(e=>e[0]).slice(0,t).join("").toUpperCase()}(I)||(0,r.jsx)(y,{})}):(0,r.jsx)("img",{...w,...S("image"),src:g,alt:b,onError:e=>{N(!0),w?.onError?.(e)}})})});x.classes=h,x.displayName="@mantine/core/Avatar",x.Group=g},16715:(e,t,a)=>{"use strict";a.d(t,{C:()=>y});var r=a(31085),n=a(39735);a(14041);var i=a(33450),o=a(7098),s=a(51606),d=a(3702),l=a(62554),c=a(29686),p=a(69564),v=a(34056),u=a(6754),h={root:"m_e5262200",indicator:"m_760d1fb1",processing:"m_885901b1"};let m={position:"top-end",offset:0},g=(0,o.V)((e,{color:t,position:a,offset:r,size:o,radius:c,zIndex:p,autoContrast:v})=>({root:{"--indicator-color":t?(0,s.r)(t,e):void 0,"--indicator-text-color":(0,l.v)(v,e)?(0,d.w)({color:t,theme:e,autoContrast:v}):void 0,"--indicator-size":(0,n.D)(o),"--indicator-radius":void 0===c?void 0:(0,i.nJ)(c),"--indicator-z-index":p?.toString(),...function(e="top-end",t=0){let a={"--indicator-top":void 0,"--indicator-bottom":void 0,"--indicator-left":void 0,"--indicator-right":void 0,"--indicator-translate-x":void 0,"--indicator-translate-y":void 0},r=(0,n.D)(t),[i,o]=e.split("-");return"top"===i&&(a["--indicator-top"]=r,a["--indicator-translate-y"]="-50%"),"middle"===i&&(a["--indicator-top"]="50%",a["--indicator-translate-y"]="-50%"),"bottom"===i&&(a["--indicator-bottom"]=r,a["--indicator-translate-y"]="50%"),"start"===o&&(a["--indicator-left"]=r,a["--indicator-translate-x"]="-50%"),"center"===o&&(a["--indicator-left"]="50%",a["--indicator-translate-x"]="-50%"),"end"===o&&(a["--indicator-right"]=r,a["--indicator-translate-x"]="50%"),a}(a,r)}})),y=(0,u.P9)((e,t)=>{let a=(0,c.Y)("Indicator",m,e),{classNames:n,className:i,style:o,styles:s,unstyled:d,vars:l,children:u,position:y,offset:b,inline:f,label:x,radius:k,color:j,withBorder:w,disabled:M,processing:C,zIndex:A,autoContrast:I,mod:z,attributes:_,...V}=a,D=(0,p.I)({name:"Indicator",classes:h,props:a,className:i,style:o,classNames:n,styles:s,unstyled:d,attributes:_,vars:l,varsResolver:g});return(0,r.jsxs)(v.a,{ref:t,...D("root"),mod:[{inline:f},z],...V,children:[!M&&(0,r.jsx)(v.a,{mod:{"with-label":!!x,"with-border":w,processing:C},...D("indicator"),children:x}),u]})});y.classes=h,y.displayName="@mantine/core/Indicator"}},e=>{var t=t=>e(e.s=t);e.O(0,[18675,90636,46593,38792],()=>t(60103)),_N_E=e.O()}]);