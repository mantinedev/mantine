(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[84939],{8474:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/indicator",function(){return n(4521)}])},4521:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return x}});var r=n(52322),i=n(45392),a=n(77566),o=n(82067);let s={type:"configurator",component:function(t){return(0,r.jsx)(a.z,{...t,children:(0,r.jsx)(o.q,{size:"lg",radius:"sm",src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"})})},code:`
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
`,centered:!0,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"position",type:"select",data:[{value:"top-start",label:"top-start"},{value:"top-center",label:"top-center"},{value:"top-end",label:"top-end"},{value:"middle-start",label:"middle-start"},{value:"middle-center",label:"middle-center"},{value:"middle-end",label:"middle-end"},{value:"bottom-start",label:"bottom-start"},{value:"bottom-center",label:"bottom-center"},{value:"bottom-end",label:"bottom-end"}],initialValue:"top-end",libraryValue:"top-end"},{prop:"radius",type:"size",initialValue:"xl",libraryValue:"xl"},{prop:"size",type:"number",initialValue:10,libraryValue:10,step:1,min:6,max:30},{prop:"disabled",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"withBorder",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"processing",type:"boolean",initialValue:!1,libraryValue:!1}]},l={type:"code",component:function(){return(0,r.jsx)(a.z,{inline:!0,label:"New",size:16,children:(0,r.jsx)(o.q,{size:"lg",radius:"sm",src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"})})},code:`
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
`},d={type:"code",component:function(){return(0,r.jsx)(a.z,{inline:!0,size:16,offset:7,position:"bottom-end",color:"red",withBorder:!0,children:(0,r.jsx)(o.q,{size:"lg",radius:"xl",src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png"})})},code:`
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
`},c={type:"code",component:function(){return(0,r.jsx)(a.z,{inline:!0,processing:!0,color:"red",size:12,children:(0,r.jsx)(o.q,{size:"lg",radius:"sm",src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png"})})},code:`
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
`,centered:!0};var u=n(65438),p=n(39629),m=n(3900);let h={type:"code",component:function(){let[t,{toggle:e}]=(0,m.q)();return(0,r.jsxs)(u.K,{align:"center",children:[(0,r.jsx)(a.z,{inline:!0,disabled:!t,color:"red",size:12,children:(0,r.jsx)(o.q,{size:"lg",radius:"sm",src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png"})}),(0,r.jsx)(p.z,{onClick:e,children:"Toggle indicator"})]})},code:`
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
`,centered:!0};var v=n(25071),g=n(15019);let b=(0,v.A)(g.us.Indicator);function f(t){let e={code:"code",h2:"h2",p:"p",...(0,i.a)(),...t.components},{Demo:n}=e;return n||function(t,e){throw Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n,{data:s}),"\n",(0,r.jsx)(e.h2,{id:"inline",children:"Inline"}),"\n",(0,r.jsxs)(e.p,{children:["When the target element has a fixed width, set ",(0,r.jsx)(e.code,{children:"inline"})," prop to add ",(0,r.jsx)(e.code,{children:"display: inline-block;"})," styles to\nIndicator container. Alternatively, you can set width and height with ",(0,r.jsx)(e.code,{children:"style"})," prop if you still want the root\nelement to keep ",(0,r.jsx)(e.code,{children:"display: block"}),"."]}),"\n",(0,r.jsx)(n,{data:l}),"\n",(0,r.jsx)(e.h2,{id:"offset",children:"Offset"}),"\n",(0,r.jsxs)(e.p,{children:["Set ",(0,r.jsx)(e.code,{children:"offset"})," to change indicator position. It is useful when Indicator component is\nused with children that have border-radius:"]}),"\n",(0,r.jsx)(n,{data:d}),"\n",(0,r.jsx)(e.h2,{id:"processing-animation",children:"Processing animation"}),"\n",(0,r.jsx)(n,{data:c}),"\n",(0,r.jsx)(e.h2,{id:"disabled",children:"Disabled"}),"\n",(0,r.jsxs)(e.p,{children:["Set ",(0,r.jsx)(e.code,{children:"disabled"})," to hide the indicator:"]}),"\n",(0,r.jsx)(n,{data:h})]})}function x(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(b,{...t,children:(0,r.jsx)(f,{...t})})}},82067:function(t,e,n){"use strict";n.d(e,{q:function(){return C}});var r=n(52322),i=n(2784),a=n(91482),o=n(11200),s=n(38483),l=n(46690),d=n(28559),c=n(33502),u=n(82027);let p=(0,i.createContext)(null),m=p.Provider;var h={group:"m_11def92b",root:"m_f85678b6",image:"m_11f8ac07",placeholder:"m_104cd71f"};let v={},g=(0,o.Z)((t,{spacing:e})=>({group:{"--ag-spacing":(0,a.bG)(e)}})),b=(0,u.d5)((t,e)=>{let n=(0,s.w)("AvatarGroup",v,t),{classNames:i,className:a,style:o,styles:c,unstyled:u,vars:p,spacing:b,...f}=n,x=(0,l.y)({name:"AvatarGroup",classes:h,props:n,className:a,style:o,classNames:i,styles:c,unstyled:u,vars:p,varsResolver:g,rootSelector:"group"});return(0,r.jsx)(m,{value:!0,children:(0,r.jsx)(d.x,{ref:e,...x("group"),...f})})});function f(t){return(0,r.jsx)("svg",{...t,"data-avatar-placeholder-icon":!0,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}function x(t,e=2){let n=t.split(" ");return 1===n.length?t.slice(0,e).toUpperCase():n.map(t=>t[0]).slice(0,e).join("").toUpperCase()}b.classes=h,b.displayName="@mantine/core/AvatarGroup";let j=["blue","cyan","grape","green","indigo","lime","orange","pink","red","teal","violet"],w={},y=(0,o.Z)((t,{size:e,radius:n,variant:r,gradient:i,color:o,autoContrast:s,name:l,allowedInitialsColors:d})=>{let c="initials"===o&&"string"==typeof l?function(t,e=j){let n=Math.abs(function(t){let e=0;for(let n=0;n<t.length;n+=1)e=(e<<5)-e+t.charCodeAt(n)|0;return e}(x(t)))%e.length;return e[n]}(l,d):o,u=t.variantColorResolver({color:c||"gray",theme:t,gradient:i,variant:r||"light",autoContrast:s});return{root:{"--avatar-size":(0,a.ap)(e,"avatar-size"),"--avatar-radius":void 0===n?void 0:(0,a.H5)(n),"--avatar-bg":c||r?u.background:void 0,"--avatar-color":c||r?u.color:void 0,"--avatar-bd":c||r?u.border:void 0}}}),C=(0,c.b)((t,e)=>{let n=(0,s.w)("Avatar",w,t),{classNames:a,className:o,style:c,styles:u,unstyled:m,vars:v,src:g,alt:b,radius:j,color:C,gradient:z,imageProps:I,children:k,autoContrast:A,mod:_,name:V,allowedInitialsColors:E,...N}=n,D={withinGroup:!!(0,i.useContext)(p)},[S,q]=(0,i.useState)(!g),B=(0,l.y)({name:"Avatar",props:n,classes:h,className:o,style:c,classNames:a,styles:u,unstyled:m,vars:v,varsResolver:y});return(0,i.useEffect)(()=>q(!g),[g]),(0,r.jsx)(d.x,{...B("root"),mod:[{"within-group":D.withinGroup},_],ref:e,...N,children:S?(0,r.jsx)("span",{...B("placeholder"),title:b,children:k||"string"==typeof V&&x(V)||(0,r.jsx)(f,{})}):(0,r.jsx)("img",{...I,...B("image"),src:g,alt:b,onError:t=>{q(!0),I?.onError?.(t)}})})});C.classes=h,C.displayName="@mantine/core/Avatar",C.Group=b},77566:function(t,e,n){"use strict";n.d(e,{z:function(){return b}});var r=n(52322),i=n(58898);n(2784);var a=n(91482),o=n(11200),s=n(13588),l=n(39568),d=n(90006),c=n(38483),u=n(46690),p=n(28559),m=n(82027),h={root:"m_e5262200",indicator:"m_760d1fb1",processing:"m_885901b1"};let v={position:"top-end",offset:0,inline:!1,withBorder:!1,disabled:!1,processing:!1},g=(0,o.Z)((t,{color:e,position:n,offset:r,size:o,radius:c,zIndex:u,autoContrast:p})=>({root:{"--indicator-color":e?(0,s.p)(e,t):void 0,"--indicator-text-color":(0,d.o)(p,t)?(0,l.R)({color:e,theme:t,autoContrast:p}):void 0,"--indicator-size":(0,i.h)(o),"--indicator-radius":void 0===c?void 0:(0,a.H5)(c),"--indicator-z-index":u?.toString(),...function(t="top-end",e=0){let n={"--indicator-top":void 0,"--indicator-bottom":void 0,"--indicator-left":void 0,"--indicator-right":void 0,"--indicator-translate-x":void 0,"--indicator-translate-y":void 0},r=(0,i.h)(e),[a,o]=t.split("-");return"top"===a&&(n["--indicator-top"]=r,n["--indicator-translate-y"]="-50%"),"middle"===a&&(n["--indicator-top"]="50%",n["--indicator-translate-y"]="-50%"),"bottom"===a&&(n["--indicator-bottom"]=r,n["--indicator-translate-y"]="50%"),"start"===o&&(n["--indicator-left"]=r,n["--indicator-translate-x"]="-50%"),"center"===o&&(n["--indicator-left"]="50%",n["--indicator-translate-x"]="-50%"),"end"===o&&(n["--indicator-right"]=r,n["--indicator-translate-x"]="50%"),n}(n,r)}})),b=(0,m.d5)((t,e)=>{let n=(0,c.w)("Indicator",v,t),{classNames:i,className:a,style:o,styles:s,unstyled:l,vars:d,children:m,position:b,offset:f,inline:x,label:j,radius:w,color:y,withBorder:C,disabled:z,processing:I,zIndex:k,autoContrast:A,mod:_,...V}=n,E=(0,u.y)({name:"Indicator",classes:h,props:n,className:a,style:o,classNames:i,styles:s,unstyled:l,vars:d,varsResolver:g});return(0,r.jsxs)(p.x,{ref:e,...E("root"),mod:[{inline:x},_],...V,children:[!z&&(0,r.jsx)(p.x,{mod:{"with-label":!!j,"with-border":C,processing:I},...E("indicator"),children:j}),m]})});b.classes=h,b.displayName="@mantine/core/Indicator"},3900:function(t,e,n){"use strict";n.d(e,{q:function(){return i}});var r=n(2784);function i(t=!1,e){let{onOpen:n,onClose:i}=e||{},[a,o]=(0,r.useState)(t),s=(0,r.useCallback)(()=>{o(t=>t||(n?.(),!0))},[n]),l=(0,r.useCallback)(()=>{o(t=>t?(i?.(),!1):t)},[i]),d=(0,r.useCallback)(()=>{a?l():s()},[l,s,a]);return[a,{open:s,close:l,toggle:d}]}}},function(t){t.O(0,[61177,66748,11340,92888,49774,40179],function(){return t(t.s=8474)}),_N_E=t.O()}]);