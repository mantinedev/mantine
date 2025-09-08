(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[90739],{795:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>f});var r=a(6029),i=a(16285),n=a(69013),o=a(92305);let s={type:"configurator",component:function(e){return(0,r.jsx)(n.C,{...e,children:(0,r.jsx)(o.e,{size:"lg",radius:"sm",src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"})})},code:`
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
`,centered:!0,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"position",type:"select",data:[{value:"top-start",label:"top-start"},{value:"top-center",label:"top-center"},{value:"top-end",label:"top-end"},{value:"middle-start",label:"middle-start"},{value:"middle-center",label:"middle-center"},{value:"middle-end",label:"middle-end"},{value:"bottom-start",label:"bottom-start"},{value:"bottom-center",label:"bottom-center"},{value:"bottom-end",label:"bottom-end"}],initialValue:"top-end",libraryValue:"top-end"},{prop:"radius",type:"size",initialValue:"xl",libraryValue:"xl"},{prop:"size",type:"number",initialValue:10,libraryValue:10,step:1,min:6,max:30},{prop:"disabled",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"withBorder",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"processing",type:"boolean",initialValue:!1,libraryValue:!1}]},l={type:"code",component:function(){return(0,r.jsx)(n.C,{inline:!0,label:"New",size:16,children:(0,r.jsx)(o.e,{size:"lg",radius:"sm",src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"})})},code:`
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
`},d={type:"code",component:function(){return(0,r.jsx)(n.C,{inline:!0,size:16,offset:7,position:"bottom-end",color:"red",withBorder:!0,children:(0,r.jsx)(o.e,{size:"lg",radius:"xl",src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png"})})},code:`
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
`},c={type:"code",component:function(){return(0,r.jsx)(n.C,{inline:!0,processing:!0,color:"red",size:12,children:(0,r.jsx)(o.e,{size:"lg",radius:"sm",src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png"})})},code:`
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
`,centered:!0};var p=a(72139),u=a(61087),v=a(66438);let h={type:"code",component:function(){let[e,{toggle:t}]=(0,v.j)();return(0,r.jsxs)(p.B,{align:"center",children:[(0,r.jsx)(n.C,{inline:!0,disabled:!e,color:"red",size:12,children:(0,r.jsx)(o.e,{size:"lg",radius:"sm",src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png"})}),(0,r.jsx)(u.$,{onClick:t,children:"Toggle indicator"})]})},code:`
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
`,centered:!0};var m=a(38547),g=a(5262);let y=(0,m.P)(g.XZ.Indicator);function b(e){let t={code:"code",h2:"h2",p:"p",...(0,i.R)(),...e.components},{Demo:a}=t;return a||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(a,{data:s}),"\n",(0,r.jsx)(t.h2,{id:"inline",children:"Inline"}),"\n",(0,r.jsxs)(t.p,{children:["When the target element has a fixed width, set ",(0,r.jsx)(t.code,{children:"inline"})," prop to add ",(0,r.jsx)(t.code,{children:"display: inline-block;"})," styles to\nIndicator container. Alternatively, you can set width and height with ",(0,r.jsx)(t.code,{children:"style"})," prop if you still want the root\nelement to keep ",(0,r.jsx)(t.code,{children:"display: block"}),"."]}),"\n",(0,r.jsx)(a,{data:l}),"\n",(0,r.jsx)(t.h2,{id:"offset",children:"Offset"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"offset"})," to change indicator position. It is useful when Indicator component is\nused with children that have border-radius:"]}),"\n",(0,r.jsx)(a,{data:d}),"\n",(0,r.jsx)(t.h2,{id:"processing-animation",children:"Processing animation"}),"\n",(0,r.jsx)(a,{data:c}),"\n",(0,r.jsx)(t.h2,{id:"disabled",children:"Disabled"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"disabled"})," to hide the indicator:"]}),"\n",(0,r.jsx)(a,{data:h})]})}function f(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(y,{...e,children:(0,r.jsx)(b,{...e})})}},1798:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(41495).A)("outline","license","License",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},6620:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(41495).A)("outline","code","Code",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},6892:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(41495).A)("outline","pencil","Pencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},24583:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(41495).A)("outline","arrow-left","ArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},34891:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(41495).A)("outline","adjustments","Adjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},41949:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(41495).A)("outline","calendar","Calendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},65433:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(41495).A)("outline","switch-2","Switch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},69013:(e,t,a)=>{"use strict";a.d(t,{C:()=>y});var r=a(6029),i=a(26082);a(55729);var n=a(14163),o=a(33987),s=a(21351),l=a(70151),d=a(58563),c=a(38919),p=a(15583),u=a(76320),v=a(8411),h={root:"m_e5262200",indicator:"m_760d1fb1",processing:"m_885901b1"};let m={position:"top-end",offset:0},g=(0,o.V)((e,{color:t,position:a,offset:r,size:o,radius:c,zIndex:p,autoContrast:u})=>({root:{"--indicator-color":t?(0,s.r)(t,e):void 0,"--indicator-text-color":(0,d.v)(u,e)?(0,l.w)({color:t,theme:e,autoContrast:u}):void 0,"--indicator-size":(0,i.D)(o),"--indicator-radius":void 0===c?void 0:(0,n.nJ)(c),"--indicator-z-index":p?.toString(),...function(e="top-end",t=0){let a={"--indicator-top":void 0,"--indicator-bottom":void 0,"--indicator-left":void 0,"--indicator-right":void 0,"--indicator-translate-x":void 0,"--indicator-translate-y":void 0},r=(0,i.D)(t),[n,o]=e.split("-");return"top"===n&&(a["--indicator-top"]=r,a["--indicator-translate-y"]="-50%"),"middle"===n&&(a["--indicator-top"]="50%",a["--indicator-translate-y"]="-50%"),"bottom"===n&&(a["--indicator-bottom"]=r,a["--indicator-translate-y"]="50%"),"start"===o&&(a["--indicator-left"]=r,a["--indicator-translate-x"]="-50%"),"center"===o&&(a["--indicator-left"]="50%",a["--indicator-translate-x"]="-50%"),"end"===o&&(a["--indicator-right"]=r,a["--indicator-translate-x"]="50%"),a}(a,r)}})),y=(0,v.P9)((e,t)=>{let a=(0,c.Y)("Indicator",m,e),{classNames:i,className:n,style:o,styles:s,unstyled:l,vars:d,children:v,position:y,offset:b,inline:f,label:x,radius:k,color:j,withBorder:w,disabled:M,processing:C,zIndex:A,autoContrast:z,mod:I,attributes:_,...V}=a,D=(0,p.I)({name:"Indicator",classes:h,props:a,className:n,style:o,classNames:i,styles:s,unstyled:l,attributes:_,vars:d,varsResolver:g});return(0,r.jsxs)(u.a,{ref:t,...D("root"),mod:[{inline:f},I],...V,children:[!M&&(0,r.jsx)(u.a,{mod:{"with-label":!!x,"with-border":w,processing:C},...D("indicator"),children:x}),v]})});y.classes=h,y.displayName="@mantine/core/Indicator"},84276:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(41495).A)("outline","file-text","FileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},88992:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(41495).A)("outline","arrow-right","ArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},92305:(e,t,a)=>{"use strict";a.d(t,{e:()=>x});var r=a(6029),i=a(55729),n=a(14163),o=a(33987),s=a(38919),l=a(15583),d=a(76320),c=a(82500),p=a(8411);let u=(0,i.createContext)(null),v=u.Provider;var h={group:"m_11def92b",root:"m_f85678b6",image:"m_11f8ac07",placeholder:"m_104cd71f"};let m=(0,o.V)((e,{spacing:t})=>({group:{"--ag-spacing":(0,n.GY)(t)}})),g=(0,p.P9)((e,t)=>{let a=(0,s.Y)("AvatarGroup",null,e),{classNames:i,className:n,style:o,styles:c,unstyled:p,vars:u,spacing:g,attributes:y,...b}=a,f=(0,l.I)({name:"AvatarGroup",classes:h,props:a,className:n,style:o,classNames:i,styles:c,unstyled:p,attributes:y,vars:u,varsResolver:m,rootSelector:"group"});return(0,r.jsx)(v,{value:!0,children:(0,r.jsx)(d.a,{ref:t,...f("group"),...b})})});function y(e){return(0,r.jsx)("svg",{...e,"data-avatar-placeholder-icon":!0,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}g.classes=h,g.displayName="@mantine/core/AvatarGroup";let b=["blue","cyan","grape","green","indigo","lime","orange","pink","red","teal","violet"],f=(0,o.V)((e,{size:t,radius:a,variant:r,gradient:i,color:o,autoContrast:s,name:l,allowedInitialsColors:d})=>{let c="initials"===o&&"string"==typeof l?function(e,t=b){let a=Math.abs(function(e){let t=0;for(let a=0;a<e.length;a+=1)t=(t<<5)-t+e.charCodeAt(a)|0;return t}(e))%t.length;return t[a]}(l,d):o,p=e.variantColorResolver({color:c||"gray",theme:e,gradient:i,variant:r||"light",autoContrast:s});return{root:{"--avatar-size":(0,n.YC)(t,"avatar-size"),"--avatar-radius":void 0===a?void 0:(0,n.nJ)(a),"--avatar-bg":c||r?p.background:void 0,"--avatar-color":c||r?p.color:void 0,"--avatar-bd":c||r?p.border:void 0}}}),x=(0,c.v)((e,t)=>{let a=(0,s.Y)("Avatar",null,e),{classNames:n,className:o,style:c,styles:p,unstyled:v,vars:m,src:g,alt:b,radius:x,color:k,gradient:j,imageProps:w,children:M,autoContrast:C,mod:A,name:z,allowedInitialsColors:I,attributes:_,...V}=a,D={withinGroup:!!(0,i.useContext)(u)},[E,N]=(0,i.useState)(!g),S=(0,l.I)({name:"Avatar",props:a,classes:h,className:o,style:c,classNames:n,styles:p,unstyled:v,attributes:_,vars:m,varsResolver:f});return(0,i.useEffect)(()=>N(!g),[g]),(0,r.jsx)(d.a,{...S("root"),mod:[{"within-group":D.withinGroup},A],ref:t,...V,children:E||!g?(0,r.jsx)("span",{...S("placeholder"),title:b,children:M||"string"==typeof z&&function(e,t=2){let a=e.split(" ");return 1===a.length?e.slice(0,t).toUpperCase():a.map(e=>e[0]).slice(0,t).join("").toUpperCase()}(z)||(0,r.jsx)(y,{})}):(0,r.jsx)("img",{...w,...S("image"),src:g,alt:b,onError:e=>{N(!0),w?.onError?.(e)}})})});x.classes=h,x.displayName="@mantine/core/Avatar",x.Group=g},94335:(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/indicator",function(){return a(795)}])}},e=>{e.O(0,[38547,90636,46593,38792],()=>e(e.s=94335)),_N_E=e.O()}]);