(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[84939],{8474:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/indicator",function(){return n(98152)}])},98152:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return z}});var r=n(52322),a=n(45392),i=n(77566),o=n(47100);let s=`
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
`,d={type:"configurator",component:function(t){return(0,r.jsx)(i.z,{...t,children:(0,r.jsx)(o.q,{size:"lg",radius:"sm",src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"})})},code:s,centered:!0,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"position",type:"select",data:[{value:"top-start",label:"top-start"},{value:"top-center",label:"top-center"},{value:"top-end",label:"top-end"},{value:"middle-start",label:"middle-start"},{value:"middle-center",label:"middle-center"},{value:"middle-end",label:"middle-end"},{value:"bottom-start",label:"bottom-start"},{value:"bottom-center",label:"bottom-center"},{value:"bottom-end",label:"bottom-end"}],initialValue:"top-end",libraryValue:"top-end"},{prop:"radius",type:"size",initialValue:"xl",libraryValue:"xl"},{prop:"size",type:"number",initialValue:10,libraryValue:10,step:1,min:6,max:30},{prop:"disabled",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"withBorder",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"processing",type:"boolean",initialValue:!1,libraryValue:!1}]},l=`
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
`,c={type:"code",component:function(){return(0,r.jsx)(i.z,{inline:!0,label:"New",size:16,children:(0,r.jsx)(o.q,{size:"lg",radius:"sm",src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"})})},code:l},u=`
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
`,m={type:"code",component:function(){return(0,r.jsx)(i.z,{inline:!0,size:16,offset:7,position:"bottom-end",color:"red",withBorder:!0,children:(0,r.jsx)(o.q,{size:"lg",radius:"xl",src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png"})})},code:u},p=`
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
`,v={type:"code",component:function(){return(0,r.jsx)(i.z,{inline:!0,processing:!0,color:"red",size:12,children:(0,r.jsx)(o.q,{size:"lg",radius:"sm",src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png"})})},code:p,centered:!0};var h=n(65438),g=n(17115),b=n(3900);let f=`
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
`,x={type:"code",component:function(){let[t,{toggle:e}]=(0,b.q)();return(0,r.jsxs)(h.K,{align:"center",children:[(0,r.jsx)(i.z,{inline:!0,disabled:!t,color:"red",size:12,children:(0,r.jsx)(o.q,{size:"lg",radius:"sm",src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png"})}),(0,r.jsx)(g.z,{onClick:e,children:"Toggle indicator"})]})},code:f,centered:!0};var j=n(79016),w=n(33638);let y=(0,j.A)(w.us.Indicator);function C(t){let e={code:"code",h2:"h2",p:"p",...(0,a.a)(),...t.components},{Demo:n}=e;return n||function(t,e){throw Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n,{data:d}),"\n",(0,r.jsx)(e.h2,{id:"inline",children:"Inline"}),"\n",(0,r.jsxs)(e.p,{children:["When the target element has a fixed width, set ",(0,r.jsx)(e.code,{children:"inline"})," prop to add ",(0,r.jsx)(e.code,{children:"display: inline-block;"})," styles to\nIndicator container. Alternatively, you can set width and height with ",(0,r.jsx)(e.code,{children:"style"})," prop if you still want the root\nelement to keep ",(0,r.jsx)(e.code,{children:"display: block"}),"."]}),"\n",(0,r.jsx)(n,{data:c}),"\n",(0,r.jsx)(e.h2,{id:"offset",children:"Offset"}),"\n",(0,r.jsxs)(e.p,{children:["Set ",(0,r.jsx)(e.code,{children:"offset"})," to change indicator position. It is useful when Indicator component is\nused with children that have border-radius:"]}),"\n",(0,r.jsx)(n,{data:m}),"\n",(0,r.jsx)(e.h2,{id:"processing-animation",children:"Processing animation"}),"\n",(0,r.jsx)(n,{data:v}),"\n",(0,r.jsx)(e.h2,{id:"disabled",children:"Disabled"}),"\n",(0,r.jsxs)(e.p,{children:["Set ",(0,r.jsx)(e.code,{children:"disabled"})," to hide the indicator:"]}),"\n",(0,r.jsx)(n,{data:x})]})}function z(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(y,{...t,children:(0,r.jsx)(C,{...t})})}},47100:function(t,e,n){"use strict";n.d(e,{q:function(){return w}});var r=n(52322),a=n(2784),i=n(91482),o=n(11200),s=n(38483),d=n(46690),l=n(28559),c=n(33502),u=n(82027);let m=(0,a.createContext)(null),p=m.Provider;var v={group:"m_11def92b",root:"m_f85678b6",image:"m_11f8ac07",placeholder:"m_104cd71f"};let h={},g=(0,o.Z)((t,{spacing:e})=>({group:{"--ag-spacing":(0,i.bG)(e)}})),b=(0,u.d)((t,e)=>{let n=(0,s.w)("AvatarGroup",h,t),{classNames:a,className:i,style:o,styles:c,unstyled:u,vars:m,spacing:b,...f}=n,x=(0,d.y)({name:"AvatarGroup",classes:v,props:n,className:i,style:o,classNames:a,styles:c,unstyled:u,vars:m,varsResolver:g,rootSelector:"group"});return(0,r.jsx)(p,{value:!0,children:(0,r.jsx)(l.x,{ref:e,...x("group"),...f})})});function f(t){return(0,r.jsx)("svg",{...t,"data-avatar-placeholder-icon":!0,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}b.classes=v,b.displayName="@mantine/core/AvatarGroup";let x={},j=(0,o.Z)((t,{size:e,radius:n,variant:r,gradient:a,color:o,autoContrast:s})=>{let d=t.variantColorResolver({color:o||"gray",theme:t,gradient:a,variant:r||"light",autoContrast:s});return{root:{"--avatar-size":(0,i.ap)(e,"avatar-size"),"--avatar-radius":void 0===n?void 0:(0,i.H5)(n),"--avatar-bg":o||r?d.background:void 0,"--avatar-color":o||r?d.color:void 0,"--avatar-bd":o||r?d.border:void 0}}}),w=(0,c.b)((t,e)=>{let n=(0,s.w)("Avatar",x,t),{classNames:i,className:o,style:c,styles:u,unstyled:p,vars:h,src:g,alt:b,radius:w,color:y,gradient:C,imageProps:z,children:I,autoContrast:_,mod:k,...A}=n,V=function(){let t=(0,a.useContext)(m);return{withinGroup:!!t}}(),[E,N]=(0,a.useState)(!g),D=(0,d.y)({name:"Avatar",props:n,classes:v,className:o,style:c,classNames:i,styles:u,unstyled:p,vars:h,varsResolver:j});return(0,a.useEffect)(()=>N(!g),[g]),(0,r.jsx)(l.x,{...D("root"),mod:[{"within-group":V.withinGroup},k],ref:e,...A,children:E?(0,r.jsx)("span",{...D("placeholder"),title:b,children:I||(0,r.jsx)(f,{})}):(0,r.jsx)("img",{...z,...D("image"),src:g,alt:b,onError:t=>{N(!0),z?.onError?.(t)}})})});w.classes=v,w.displayName="@mantine/core/Avatar",w.Group=b},77566:function(t,e,n){"use strict";n.d(e,{z:function(){return b}});var r=n(52322),a=n(58898);n(2784);var i=n(91482),o=n(11200),s=n(13588),d=n(39568),l=n(90006),c=n(38483),u=n(46690),m=n(28559),p=n(82027),v={root:"m_e5262200",indicator:"m_760d1fb1",processing:"m_885901b1"};let h={position:"top-end",offset:0,inline:!1,withBorder:!1,disabled:!1,processing:!1},g=(0,o.Z)((t,{color:e,position:n,offset:r,size:o,radius:c,zIndex:u,autoContrast:m})=>({root:{"--indicator-color":e?(0,s.p)(e,t):void 0,"--indicator-text-color":(0,l.o)(m,t)?(0,d.R)({color:e,theme:t}):void 0,"--indicator-size":(0,a.h)(o),"--indicator-radius":void 0===c?void 0:(0,i.H5)(c),"--indicator-z-index":u?.toString(),...function(t="top-end",e=0){let n={"--indicator-top":void 0,"--indicator-bottom":void 0,"--indicator-left":void 0,"--indicator-right":void 0,"--indicator-translate-x":void 0,"--indicator-translate-y":void 0},r=(0,a.h)(e),[i,o]=t.split("-");return"top"===i&&(n["--indicator-top"]=r,n["--indicator-translate-y"]="-50%"),"middle"===i&&(n["--indicator-top"]="50%",n["--indicator-translate-y"]="-50%"),"bottom"===i&&(n["--indicator-bottom"]=r,n["--indicator-translate-y"]="50%"),"start"===o&&(n["--indicator-left"]=r,n["--indicator-translate-x"]="-50%"),"center"===o&&(n["--indicator-left"]="50%",n["--indicator-translate-x"]="-50%"),"end"===o&&(n["--indicator-right"]=r,n["--indicator-translate-x"]="50%"),n}(n,r)}})),b=(0,p.d)((t,e)=>{let n=(0,c.w)("Indicator",h,t),{classNames:a,className:i,style:o,styles:s,unstyled:d,vars:l,children:p,position:b,offset:f,inline:x,label:j,radius:w,color:y,withBorder:C,disabled:z,processing:I,zIndex:_,autoContrast:k,mod:A,...V}=n,E=(0,u.y)({name:"Indicator",classes:v,props:n,className:i,style:o,classNames:a,styles:s,unstyled:d,vars:l,varsResolver:g});return(0,r.jsxs)(m.x,{ref:e,...E("root"),mod:[{inline:x},A],...V,children:[!z&&(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(m.x,{mod:{"with-label":!!j,"with-border":C,processing:I},...E("indicator"),children:j})}),p]})});b.classes=v,b.displayName="@mantine/core/Indicator"},3900:function(t,e,n){"use strict";n.d(e,{q:function(){return a}});var r=n(2784);function a(t=!1,e){let{onOpen:n,onClose:a}=e||{},[i,o]=(0,r.useState)(t),s=(0,r.useCallback)(()=>{o(t=>t||(n?.(),!0))},[n]),d=(0,r.useCallback)(()=>{o(t=>t?(a?.(),!1):t)},[a]),l=(0,r.useCallback)(()=>{i?d():s()},[d,s,i]);return[i,{open:s,close:d,toggle:l}]}}},function(t){t.O(0,[57938,17454,47747,49774,92888,40179],function(){return t(t.s=8474)}),_N_E=t.O()}]);