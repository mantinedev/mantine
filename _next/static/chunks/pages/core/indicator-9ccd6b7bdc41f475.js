(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[84939],{74576:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/indicator",function(){return n(73834)}])},73834:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j}});var a=n(24246),r=n(71670),i=n(27378),o=n(87121),l=n(30770);let c=`
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
`,s={type:"configurator",component:function(e){return i.createElement(o.z,{...e},i.createElement(l.q,{size:"lg",radius:"sm",src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"}))},code:c,centered:!0,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"position",type:"select",data:[{value:"top-start",label:"top-start"},{value:"top-center",label:"top-center"},{value:"top-end",label:"top-end"},{value:"middle-start",label:"middle-start"},{value:"middle-center",label:"middle-center"},{value:"middle-end",label:"middle-end"},{value:"bottom-start",label:"bottom-start"},{value:"bottom-center",label:"bottom-center"},{value:"bottom-end",label:"bottom-end"}],initialValue:"top-end",libraryValue:"top-end"},{prop:"radius",type:"size",initialValue:"xl",libraryValue:"xl"},{prop:"size",type:"number",initialValue:10,libraryValue:10,step:1,min:6,max:30},{prop:"disabled",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"withBorder",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"processing",type:"boolean",initialValue:!1,libraryValue:!1}]},d=`
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
`,u={type:"code",component:function(){return i.createElement(o.z,{inline:!0,label:"New",size:16},i.createElement(l.q,{size:"lg",radius:"sm",src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"}))},code:d},m=`
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
`,p={type:"code",component:function(){return i.createElement(o.z,{inline:!0,size:16,offset:7,position:"bottom-end",color:"red",withBorder:!0},i.createElement(l.q,{size:"lg",radius:"xl",src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png"}))},code:m},v=`
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
`,h={type:"code",component:function(){return i.createElement(o.z,{inline:!0,processing:!0,color:"red",size:12},i.createElement(l.q,{size:"lg",radius:"sm",src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png"}))},code:v,centered:!0};var g=n(27884),b=n(8671),f=n(87921);let x=`
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
`,w={type:"code",component:function(){let[e,{toggle:t}]=(0,f.q)();return i.createElement(g.K,{align:"center"},i.createElement(o.z,{inline:!0,disabled:!e,color:"red",size:12},i.createElement(l.q,{size:"lg",radius:"sm",src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png"})),i.createElement(b.z,{onClick:t},"Toggle indicator"))},code:x,centered:!0};var y=n(3916),C=n(54568);let E=(0,y.A)(C.us.Indicator);function z(e){let t={code:"code",h2:"h2",p:"p",...(0,r.a)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(n,{data:s}),"\n",(0,a.jsx)(t.h2,{id:"inline",children:"Inline"}),"\n",(0,a.jsxs)(t.p,{children:["When the target element has a fixed width, set ",(0,a.jsx)(t.code,{children:"inline"})," prop to add ",(0,a.jsx)(t.code,{children:"display: inline-block;"})," styles to\nIndicator container. Alternatively, you can set width and height with ",(0,a.jsx)(t.code,{children:"style"})," prop if you still want the root\nelement to keep ",(0,a.jsx)(t.code,{children:"display: block"}),"."]}),"\n",(0,a.jsx)(n,{data:u}),"\n",(0,a.jsx)(t.h2,{id:"offset",children:"Offset"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:"offset"})," to change indicator position. It is useful when Indicator component is\nused with children that have border-radius:"]}),"\n",(0,a.jsx)(n,{data:p}),"\n",(0,a.jsx)(t.h2,{id:"processing-animation",children:"Processing animation"}),"\n",(0,a.jsx)(n,{data:h}),"\n",(0,a.jsx)(t.h2,{id:"disabled",children:"Disabled"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:"disabled"})," to hide the indicator:"]}),"\n",(0,a.jsx)(n,{data:w})]})}function j(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(E,{...e,children:(0,a.jsx)(z,{...e})})}},30770:function(e,t,n){"use strict";n.d(t,{q:function(){return w}});var a=n(27378),r=n(92082),i=n(83453),o=n(96739),l=n(6231),c=n(56589),s=n(50332),d=n(20410);let u=(0,a.createContext)(null),m=u.Provider;var p={group:"m-11def92b",root:"m-f85678b6",image:"m-11f8ac07",placeholder:"m-104cd71f"};let v={},h=(0,i.Z)((e,{spacing:t})=>({group:{"--ag-spacing":(0,r.bG)(t)}})),g=(0,d.d)((e,t)=>{let n=(0,o.w)("AvatarGroup",v,e),{classNames:r,className:i,style:s,styles:d,unstyled:u,vars:g,spacing:b,...f}=n,x=(0,l.y)({name:"AvatarGroup",classes:p,props:n,className:i,style:s,classNames:r,styles:d,unstyled:u,vars:g,varsResolver:h,rootSelector:"group"});return a.createElement(m,{value:!0},a.createElement(c.x,{ref:t,...x("group"),...f}))});function b(e){return a.createElement("svg",{...e,"data-avatar-placeholder-icon":!0,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{d:"M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}g.classes=p,g.displayName="@mantine/core/AvatarGroup";let f={},x=(0,i.Z)((e,{size:t,radius:n,variant:a,gradient:i,color:o,autoContrast:l})=>{let c=e.variantColorResolver({color:o||"gray",theme:e,gradient:i,variant:a||"light",autoContrast:l});return{root:{"--avatar-size":(0,r.ap)(t,"avatar-size"),"--avatar-radius":void 0===n?void 0:(0,r.H5)(n),"--avatar-bg":o||a?c.background:void 0,"--avatar-color":o||a?c.color:void 0,"--avatar-bd":o||a?c.border:void 0}}}),w=(0,s.b)((e,t)=>{let n=(0,o.w)("Avatar",f,e),{classNames:r,className:i,style:s,styles:d,unstyled:m,vars:v,src:h,alt:g,radius:w,color:y,gradient:C,imageProps:E,children:z,autoContrast:j,mod:I,...k}=n,A=function(){let e=(0,a.useContext)(u);return{withinGroup:!!e}}(),[V,_]=(0,a.useState)(!h),N=(0,l.y)({name:"Avatar",props:n,classes:p,className:i,style:s,classNames:r,styles:d,unstyled:m,vars:v,varsResolver:x});return(0,a.useEffect)(()=>_(!h),[h]),a.createElement(c.x,{...N("root"),mod:[{"within-group":A.withinGroup},I],ref:t,...k},V?a.createElement("span",{...N("placeholder"),title:g},z||a.createElement(b,null)):a.createElement("img",{...E,...N("image"),src:h,alt:g,onError:e=>{_(!0),E?.onError?.(e)}}))});w.classes=p,w.displayName="@mantine/core/Avatar",w.Group=g},87121:function(e,t,n){"use strict";n.d(t,{z:function(){return b}});var a=n(27378),r=n(71078),i=n(92082),o=n(83453),l=n(89738),c=n(34121),s=n(55357),d=n(96739),u=n(6231),m=n(56589),p=n(20410),v={root:"m-e5262200",indicator:"m-760d1fb1",processing:"m-885901b1"};let h={position:"top-end",offset:0,inline:!1,withBorder:!1,disabled:!1,processing:!1},g=(0,o.Z)((e,{color:t,position:n,offset:a,size:o,radius:d,zIndex:u,autoContrast:m})=>({root:{"--indicator-color":t?(0,l.p)(t,e):void 0,"--indicator-text-color":(0,s.o)(m,e)?(0,c.R)({color:t,theme:e}):void 0,"--indicator-size":(0,r.h)(o),"--indicator-radius":void 0===d?void 0:(0,i.H5)(d),"--indicator-z-index":u?.toString(),...function(e="top-end",t=0){let n={"--indicator-top":void 0,"--indicator-bottom":void 0,"--indicator-left":void 0,"--indicator-right":void 0,"--indicator-translate-x":void 0,"--indicator-translate-y":void 0},a=(0,r.h)(t),[i,o]=e.split("-");return"top"===i&&(n["--indicator-top"]=a,n["--indicator-translate-y"]="-50%"),"middle"===i&&(n["--indicator-top"]="50%",n["--indicator-translate-y"]="-50%"),"bottom"===i&&(n["--indicator-bottom"]=a,n["--indicator-translate-y"]="50%"),"start"===o&&(n["--indicator-left"]=a,n["--indicator-translate-x"]="-50%"),"center"===o&&(n["--indicator-left"]="50%",n["--indicator-translate-x"]="-50%"),"end"===o&&(n["--indicator-right"]=a,n["--indicator-translate-x"]="50%"),n}(n,a)}})),b=(0,p.d)((e,t)=>{let n=(0,d.w)("Indicator",h,e),{classNames:r,className:i,style:o,styles:l,unstyled:c,vars:s,children:p,position:b,offset:f,inline:x,label:w,radius:y,color:C,withBorder:E,disabled:z,processing:j,zIndex:I,autoContrast:k,mod:A,...V}=n,_=(0,u.y)({name:"Indicator",classes:v,props:n,className:i,style:o,classNames:r,styles:l,unstyled:c,vars:s,varsResolver:g});return a.createElement(m.x,{ref:t,..._("root"),mod:[{inline:x},A],...V},!z&&a.createElement(a.Fragment,null,a.createElement(m.x,{mod:{"with-label":!!w,"with-border":E,processing:j},..._("indicator")},w)),p)});b.classes=v,b.displayName="@mantine/core/Indicator"},87921:function(e,t,n){"use strict";n.d(t,{q:function(){return r}});var a=n(27378);function r(e=!1,t){let{onOpen:n,onClose:r}=t||{},[i,o]=(0,a.useState)(e),l=(0,a.useCallback)(()=>{o(e=>e||(n?.(),!0))},[n]),c=(0,a.useCallback)(()=>{o(e=>e?(r?.(),!1):e)},[r]),s=(0,a.useCallback)(()=>{i?c():l()},[c,l,i]);return[i,{open:l,close:c,toggle:s}]}}},function(e){e.O(0,[30370,15819,2775,49774,92888,40179],function(){return e(e.s=74576)}),_N_E=e.O()}]);