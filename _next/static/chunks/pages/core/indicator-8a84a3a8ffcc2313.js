(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[90739],{60103:(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/indicator",function(){return r(61167)}])},61167:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>x});var a=r(31085),n=r(71184),i=r(16715),o=r(86658);let s={type:"configurator",component:function(e){return(0,a.jsx)(i.C,{...e,children:(0,a.jsx)(o.e,{size:"lg",radius:"sm",src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"})})},code:`
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
`,centered:!0,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"position",type:"select",data:[{value:"top-start",label:"top-start"},{value:"top-center",label:"top-center"},{value:"top-end",label:"top-end"},{value:"middle-start",label:"middle-start"},{value:"middle-center",label:"middle-center"},{value:"middle-end",label:"middle-end"},{value:"bottom-start",label:"bottom-start"},{value:"bottom-center",label:"bottom-center"},{value:"bottom-end",label:"bottom-end"}],initialValue:"top-end",libraryValue:"top-end"},{prop:"radius",type:"size",initialValue:"xl",libraryValue:"xl"},{prop:"size",type:"number",initialValue:10,libraryValue:10,step:1,min:6,max:30},{prop:"disabled",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"withBorder",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"processing",type:"boolean",initialValue:!1,libraryValue:!1}]},l={type:"code",component:function(){return(0,a.jsx)(i.C,{inline:!0,label:"New",size:16,children:(0,a.jsx)(o.e,{size:"lg",radius:"sm",src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"})})},code:`
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
`},d={type:"code",component:function(){return(0,a.jsx)(i.C,{inline:!0,size:16,offset:7,position:"bottom-end",color:"red",withBorder:!0,children:(0,a.jsx)(o.e,{size:"lg",radius:"xl",src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png"})})},code:`
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
`},c={type:"code",component:function(){return(0,a.jsx)(i.C,{inline:!0,processing:!0,color:"red",size:12,children:(0,a.jsx)(o.e,{size:"lg",radius:"sm",src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png"})})},code:`
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
`,centered:!0};var u=r(75390),m=r(52022),p=r(92051);let v={type:"code",component:function(){let[e,{toggle:t}]=(0,p.j)();return(0,a.jsxs)(u.B,{align:"center",children:[(0,a.jsx)(i.C,{inline:!0,disabled:!e,color:"red",size:12,children:(0,a.jsx)(o.e,{size:"lg",radius:"sm",src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png"})}),(0,a.jsx)(m.$,{onClick:t,children:"Toggle indicator"})]})},code:`
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
`,centered:!0};var h=r(85954),g=r(38215);let b=(0,h.P)(g.XZ.Indicator);function f(e){let t={code:"code",h2:"h2",p:"p",...(0,n.R)(),...e.components},{Demo:r}=t;return r||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(r,{data:s}),"\n",(0,a.jsx)(t.h2,{id:"inline",children:"Inline"}),"\n",(0,a.jsxs)(t.p,{children:["When the target element has a fixed width, set ",(0,a.jsx)(t.code,{children:"inline"})," prop to add ",(0,a.jsx)(t.code,{children:"display: inline-block;"})," styles to\nIndicator container. Alternatively, you can set width and height with ",(0,a.jsx)(t.code,{children:"style"})," prop if you still want the root\nelement to keep ",(0,a.jsx)(t.code,{children:"display: block"}),"."]}),"\n",(0,a.jsx)(r,{data:l}),"\n",(0,a.jsx)(t.h2,{id:"offset",children:"Offset"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:"offset"})," to change indicator position. It is useful when Indicator component is\nused with children that have border-radius:"]}),"\n",(0,a.jsx)(r,{data:d}),"\n",(0,a.jsx)(t.h2,{id:"processing-animation",children:"Processing animation"}),"\n",(0,a.jsx)(r,{data:c}),"\n",(0,a.jsx)(t.h2,{id:"disabled",children:"Disabled"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:"disabled"})," to hide the indicator:"]}),"\n",(0,a.jsx)(r,{data:v})]})}function x(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(b,{...e,children:(0,a.jsx)(f,{...e})})}},86658:(e,t,r)=>{"use strict";r.d(t,{e:()=>w});var a=r(31085),n=r(14041),i=r(33450),o=r(7098),s=r(29686),l=r(69564),d=r(34056),c=r(2453),u=r(6754);let m=(0,n.createContext)(null),p=m.Provider;var v={group:"m_11def92b",root:"m_f85678b6",image:"m_11f8ac07",placeholder:"m_104cd71f"};let h={},g=(0,o.V)((e,{spacing:t})=>({group:{"--ag-spacing":(0,i.GY)(t)}})),b=(0,u.P9)((e,t)=>{let r=(0,s.Y)("AvatarGroup",h,e),{classNames:n,className:i,style:o,styles:c,unstyled:u,vars:m,spacing:b,...f}=r,x=(0,l.I)({name:"AvatarGroup",classes:v,props:r,className:i,style:o,classNames:n,styles:c,unstyled:u,vars:m,varsResolver:g,rootSelector:"group"});return(0,a.jsx)(p,{value:!0,children:(0,a.jsx)(d.a,{ref:t,...x("group"),...f})})});function f(e){return(0,a.jsx)("svg",{...e,"data-avatar-placeholder-icon":!0,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{d:"M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}b.classes=v,b.displayName="@mantine/core/AvatarGroup";let x=["blue","cyan","grape","green","indigo","lime","orange","pink","red","teal","violet"],j={},C=(0,o.V)((e,{size:t,radius:r,variant:a,gradient:n,color:o,autoContrast:s,name:l,allowedInitialsColors:d})=>{let c="initials"===o&&"string"==typeof l?function(e,t=x){let r=Math.abs(function(e){let t=0;for(let r=0;r<e.length;r+=1)t=(t<<5)-t+e.charCodeAt(r)|0;return t}(e))%t.length;return t[r]}(l,d):o,u=e.variantColorResolver({color:c||"gray",theme:e,gradient:n,variant:a||"light",autoContrast:s});return{root:{"--avatar-size":(0,i.YC)(t,"avatar-size"),"--avatar-radius":void 0===r?void 0:(0,i.nJ)(r),"--avatar-bg":c||a?u.background:void 0,"--avatar-color":c||a?u.color:void 0,"--avatar-bd":c||a?u.border:void 0}}}),w=(0,c.v)((e,t)=>{let r=(0,s.Y)("Avatar",j,e),{classNames:i,className:o,style:c,styles:u,unstyled:p,vars:h,src:g,alt:b,radius:x,color:w,gradient:y,imageProps:I,children:z,autoContrast:k,mod:_,name:A,allowedInitialsColors:V,...D}=r,E={withinGroup:!!(0,n.useContext)(m)},[N,B]=(0,n.useState)(!g),S=(0,l.I)({name:"Avatar",props:r,classes:v,className:o,style:c,classNames:i,styles:u,unstyled:p,vars:h,varsResolver:C});return(0,n.useEffect)(()=>B(!g),[g]),(0,a.jsx)(d.a,{...S("root"),mod:[{"within-group":E.withinGroup},_],ref:t,...D,children:N?(0,a.jsx)("span",{...S("placeholder"),title:b,children:z||"string"==typeof A&&function(e,t=2){let r=e.split(" ");return 1===r.length?e.slice(0,t).toUpperCase():r.map(e=>e[0]).slice(0,t).join("").toUpperCase()}(A)||(0,a.jsx)(f,{})}):(0,a.jsx)("img",{...I,...S("image"),src:g,alt:b,onError:e=>{B(!0),I?.onError?.(e)}})})});w.classes=v,w.displayName="@mantine/core/Avatar",w.Group=b},16715:(e,t,r)=>{"use strict";r.d(t,{C:()=>b});var a=r(31085),n=r(39735);r(14041);var i=r(33450),o=r(7098),s=r(51606),l=r(3702),d=r(62554),c=r(29686),u=r(69564),m=r(34056),p=r(6754),v={root:"m_e5262200",indicator:"m_760d1fb1",processing:"m_885901b1"};let h={position:"top-end",offset:0,inline:!1,withBorder:!1,disabled:!1,processing:!1},g=(0,o.V)((e,{color:t,position:r,offset:a,size:o,radius:c,zIndex:u,autoContrast:m})=>({root:{"--indicator-color":t?(0,s.r)(t,e):void 0,"--indicator-text-color":(0,d.v)(m,e)?(0,l.w)({color:t,theme:e,autoContrast:m}):void 0,"--indicator-size":(0,n.D)(o),"--indicator-radius":void 0===c?void 0:(0,i.nJ)(c),"--indicator-z-index":u?.toString(),...function(e="top-end",t=0){let r={"--indicator-top":void 0,"--indicator-bottom":void 0,"--indicator-left":void 0,"--indicator-right":void 0,"--indicator-translate-x":void 0,"--indicator-translate-y":void 0},a=(0,n.D)(t),[i,o]=e.split("-");return"top"===i&&(r["--indicator-top"]=a,r["--indicator-translate-y"]="-50%"),"middle"===i&&(r["--indicator-top"]="50%",r["--indicator-translate-y"]="-50%"),"bottom"===i&&(r["--indicator-bottom"]=a,r["--indicator-translate-y"]="50%"),"start"===o&&(r["--indicator-left"]=a,r["--indicator-translate-x"]="-50%"),"center"===o&&(r["--indicator-left"]="50%",r["--indicator-translate-x"]="-50%"),"end"===o&&(r["--indicator-right"]=a,r["--indicator-translate-x"]="50%"),r}(r,a)}})),b=(0,p.P9)((e,t)=>{let r=(0,c.Y)("Indicator",h,e),{classNames:n,className:i,style:o,styles:s,unstyled:l,vars:d,children:p,position:b,offset:f,inline:x,label:j,radius:C,color:w,withBorder:y,disabled:I,processing:z,zIndex:k,autoContrast:_,mod:A,...V}=r,D=(0,u.I)({name:"Indicator",classes:v,props:r,className:i,style:o,classNames:n,styles:s,unstyled:l,vars:d,varsResolver:g});return(0,a.jsxs)(m.a,{ref:t,...D("root"),mod:[{inline:x},A],...V,children:[!I&&(0,a.jsx)(m.a,{mod:{"with-label":!!j,"with-border":y,processing:z},...D("indicator"),children:j}),p]})});b.classes=v,b.displayName="@mantine/core/Indicator"},92051:(e,t,r)=>{"use strict";r.d(t,{j:()=>n});var a=r(14041);function n(e=!1,t){let{onOpen:r,onClose:i}=t||{},[o,s]=(0,a.useState)(e),l=(0,a.useCallback)(()=>{s(e=>e||(r?.(),!0))},[r]),d=(0,a.useCallback)(()=>{s(e=>e?(i?.(),!1):e)},[i]),c=(0,a.useCallback)(()=>{o?d():l()},[d,l,o]);return[o,{open:l,close:d,toggle:c}]}}},e=>{var t=t=>e(e.s=t);e.O(0,[67456,39699,68831,90636,46593,38792],()=>t(60103)),_N_E=e.O()}]);