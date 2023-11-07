(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7966],{33507:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var a=(0,r(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var a=(0,r(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var a=(0,r(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var a=(0,r(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var a=(0,r(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var a=(0,r(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var a=(0,r(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},23285:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/avatar",function(){return r(73405)}])},73405:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return O}});var a=r(85893),n=r(11151),o=r(19905),l=r(9904),i=r(67294),c=r(48112),s=r(16262),u=r(66740);let d=`
import { Avatar } from '@mantine/core';
import { IconStar } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      {/* With image */}
      <Avatar src="avatar.png" alt="it's me" />

      {/* Default placeholder */}
      <Avatar radius="xl" />

      {/* Letters with xl radius */}
      <Avatar color="cyan" radius="xl">MK</Avatar>

      {/* Custom placeholder icon */}
      <Avatar color="blue" radius="sm">
        <IconStar size="1.5rem" />
      </Avatar>
    </>
  );
}

`,p={type:"code",code:d,component:function(){return i.createElement(s.Z,{justify:"center"},i.createElement(u.q,{src:"https://avatars.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4",alt:"it's me"}),i.createElement(u.q,{radius:"xl"}),i.createElement(u.q,{color:"cyan",radius:"xl"},"MK"),i.createElement(u.q,{color:"blue",radius:"sm"},i.createElement(c.Z,{size:"1.5rem"})))}},m=`
import { Avatar } from '@mantine/core';
import { IconStar } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      {/* Default placeholder */}
      <Avatar src={null} alt="no image here" />

      {/* Default placeholder with custom color */}
      <Avatar src={null} alt="no image here" color="indigo" />

      {/* Placeholder with initials */}
      <Avatar src={null} alt="Vitaly Rtishchev" color="red">VR</Avatar>

      {/* Placeholder with custom icon */}
      <Avatar color="blue" radius="xl">
        <IconStar size="1.5rem" />
      </Avatar>
    </>
  );
}

`,v={type:"code",code:m,component:function(){return i.createElement(s.Z,{justify:"center"},i.createElement(u.q,{src:null,alt:"no image here"}),i.createElement(u.q,{src:null,alt:"no image here",color:"indigo"}),i.createElement(u.q,{src:null,alt:"no image here",color:"red"},"VR"),i.createElement(u.q,{color:"blue",radius:"xl"},i.createElement(c.Z,{size:"1.5rem"})))}};var h=r(99009);let f=`
import { Avatar } from '@mantine/core';

function Demo() {
  return <Avatar{{props}} />;
}
`,g={type:"configurator",component:u.q,centered:!0,code:f,controls:[h.d_,{prop:"radius",type:"size",initialValue:"sm",libraryValue:"100%"},{prop:"size",type:"size",initialValue:"md",libraryValue:"md"},{prop:"color",type:"color",initialValue:"gray",libraryValue:"gray"},{prop:"src",type:"string",initialValue:"",libraryValue:null}]},y=`
import { Avatar } from '@mantine/core';

function Demo() {
  return (
    <Avatar.Group>
      <Avatar src="image.png" />
      <Avatar src="image.png" />
      <Avatar src="image.png" />
      <Avatar>+5</Avatar>
    </Avatar.Group>
  );
}
`,b={type:"code",centered:!0,code:y,component:function(){return i.createElement(u.q.Group,null,i.createElement(u.q,{src:"https://avatars.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"}),i.createElement(u.q,{src:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"}),i.createElement(u.q,{src:"https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"}),i.createElement(u.q,null,"+5"))}};var x=r(46842);let w=`
import { Avatar, Tooltip } from '@mantine/core';

function Demo() {
  return (
    <Tooltip.Group openDelay={300} closeDelay={100}>
      <Avatar.Group spacing="sm">
        <Tooltip label="Salazar Troop" withArrow>
          <Avatar src="image.png" radius="xl" />
        </Tooltip>
        <Tooltip label="Bandit Crimes" withArrow>
          <Avatar src="image.png" radius="xl" />
        </Tooltip>
        <Tooltip label="Jane Rata" withArrow>
          <Avatar src="image.png" radius="xl" />
        </Tooltip>
        <Tooltip
          withArrow
          label={
            <>
              <div>John Outcast</div>
              <div>Levi Capitan</div>
            </>
          }
        >
          <Avatar radius="xl">+2</Avatar>
        </Tooltip>
      </Avatar.Group>
    </Tooltip.Group>
  );
}
`,A={type:"code",centered:!0,code:w,component:function(){return i.createElement(x.u.Group,{openDelay:300,closeDelay:100},i.createElement(u.q.Group,{spacing:"sm"},i.createElement(x.u,{label:"Salazar Troop",withArrow:!0},i.createElement(u.q,{src:"https://avatars.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4",radius:"xl"})),i.createElement(x.u,{label:"Bandit Crimes",withArrow:!0},i.createElement(u.q,{src:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80",radius:"xl"})),i.createElement(x.u,{label:"Jane Rata",withArrow:!0},i.createElement(u.q,{src:"https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80",radius:"xl"})),i.createElement(x.u,{withArrow:!0,label:i.createElement(i.Fragment,null,i.createElement("div",null,"John Outcast"),i.createElement("div",null,"Levi Capitan"))},i.createElement(u.q,{radius:"xl"},"+2"))))}},j=`
import { Avatar } from '@mantine/core';

function Demo() {
  return (
    <Avatar
      component="a"
      href="https://github.com/rtivital"
      target="_blank"
      src="avatar.png"
      alt="it's me"
    />
  );
}
`,E={type:"code",centered:!0,code:j,component:function(){return i.createElement(u.q,{component:"a",href:"https://github.com/rtivital",target:"_blank",src:"https://avatars.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4",alt:"it's me"})}},M=(0,o.A)(l.us.Avatar);function k(e){let t=Object.assign({h2:"h2",p:"p",code:"code",a:"a",pre:"pre"},(0,n.ah)(),e.components),{Demo:r,Polymorphic:o}=t;return r||C("Demo",!0),o||C("Polymorphic",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(r,{data:p}),"\n",(0,a.jsx)(t.h2,{id:"placeholder",children:"Placeholder"}),"\n",(0,a.jsxs)(t.p,{children:["If the image cannot be loaded or not provided, ",(0,a.jsx)(t.code,{children:"Avatar"})," will display a placeholder instead. By default,\nplaceholder is an icon, but it can be changed to any React node:"]}),"\n",(0,a.jsx)(r,{data:v}),"\n",(0,a.jsx)(t.h2,{id:"variants",children:"Variants"}),"\n",(0,a.jsx)(r,{data:g}),"\n",(0,a.jsx)(t.h2,{id:"avatargroup",children:"Avatar.Group"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"Avatar.Group"})," component combines multiple avatars into a stack:"]}),"\n",(0,a.jsx)(r,{data:b}),"\n",(0,a.jsxs)(t.p,{children:["Note that you must not wrap child ",(0,a.jsx)(t.code,{children:"Avatar"})," components with any additional elements,\nbut you can use wrap ",(0,a.jsx)(t.code,{children:"Avatar"})," with components that do not render any HTML elements\nin the current tree, for example ",(0,a.jsx)(t.a,{href:"/core/tooltip",children:"Tooltip"}),"."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:'import { Avatar } from \'@mantine/core\';\n\n// Will not work correctly\nfunction Demo() {\n  return (\n    <Avatar.Group spacing="sm">\n      <div>\n        <Avatar src="image.png" radius="xl" />\n      </div>\n      <Avatar src="image.png" radius="xl" />\n      <Avatar src="image.png" radius="xl" />\n      <Avatar radius="xl">+5</Avatar>\n    </Avatar.Group>\n  );\n}\n'})}),"\n",(0,a.jsxs)(t.p,{children:["Example of usage with ",(0,a.jsx)(t.a,{href:"/core/tooltip/",children:"Tooltip"}),":"]}),"\n",(0,a.jsx)(r,{data:A}),"\n",(0,a.jsx)(o,{defaultElement:"div",changeToElement:"button",component:"Avatar",withNext:!0}),"\n",(0,a.jsx)(r,{data:E}),"\n",(0,a.jsxs)(t.p,{children:["You can combine it with ",(0,a.jsx)(t.a,{href:"/core/tooltip/",children:"Tooltip"})," or ",(0,a.jsx)(t.a,{href:"/core/popover/",children:"Popover"})," to show additional information on hover"]}),"\n",(0,a.jsx)(r,{data:A}),"\n",(0,a.jsx)(t.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,a.jsxs)(t.p,{children:["Avatar renders ",(0,a.jsx)(t.code,{children:"<img />"})," HTML element. Set ",(0,a.jsx)(t.code,{children:"alt"})," prop to describe image,\nit is also used as ",(0,a.jsx)(t.code,{children:"title"})," attribute for avatar placeholder when the image cannot be loaded."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:'import { Avatar } from \'@mantine/core\';\n\nfunction NotOk() {\n  // Not ok, no alt for image\n  return <Avatar src="./image.png" />;\n}\n\nfunction Ok() {\n  // Ok, alt is set on <img /> tag\n  return <Avatar src="./image.png" alt="Rob Johnson" />;\n}\n\nfunction Ehh() {\n  // Ehh, title is not required, but still recommended\n  return <Avatar>RJ</Avatar>;\n}\n\nfunction OkPlaceholder() {\n  // Ok, title is set on placeholder\n  return <Avatar alt="Rob Johnson">RJ</Avatar>;\n}\n'})})]})}var O=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(M,Object.assign({},e,{children:(0,a.jsx)(k,e)}))};function C(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},48112:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var a=(0,r(54764).Z)("star","IconStar",[["path",{d:"M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z",key:"svg-0"}]])},66740:function(e,t,r){"use strict";r.d(t,{q:function(){return W}});var a=r(67294);let n=(0,a.createContext)(null),o=n.Provider;var l={root:"m-f85678b6",image:"m-11f8ac07",placeholder:"m-104cd71f",group:"m-11def92b"},i=r(3154),c=r(30370),s=r(86109),u=r(81110),d=r(8586),p=r(48468),m=Object.defineProperty,v=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,g=(e,t,r)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,y=(e,t)=>{for(var r in t||(t={}))h.call(t,r)&&g(e,r,t[r]);if(v)for(var r of v(t))f.call(t,r)&&g(e,r,t[r]);return e},b=(e,t)=>{var r={};for(var a in e)h.call(e,a)&&0>t.indexOf(a)&&(r[a]=e[a]);if(null!=e&&v)for(var a of v(e))0>t.indexOf(a)&&f.call(e,a)&&(r[a]=e[a]);return r};let x={},w=(0,d.Z)((e,{spacing:t})=>({group:{"--ag-spacing":(0,p.bG)(t)}})),A=(0,i.d)((e,t)=>{let r=(0,c.w)("AvatarGroup",x,e),{classNames:n,className:i,style:d,styles:p,unstyled:m,vars:v,spacing:h}=r,f=b(r,["classNames","className","style","styles","unstyled","vars","spacing"]),g=(0,s.y)({name:"AvatarGroup",classes:l,props:r,className:i,style:d,classNames:n,styles:p,unstyled:m,vars:v,varsResolver:w,rootSelector:"group"});return a.createElement(o,{value:!0},a.createElement(u.x,y(y({ref:t},g("group")),f)))});A.classes=l,A.displayName="@mantine/core/AvatarGroup";var j=Object.defineProperty,E=Object.defineProperties,M=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,G=(e,t,r)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,D=(e,t)=>{for(var r in t||(t={}))O.call(t,r)&&G(e,r,t[r]);if(k)for(var r of k(t))C.call(t,r)&&G(e,r,t[r]);return e},Z=(e,t)=>E(e,M(t));function q(e){return a.createElement("svg",Z(D({},e),{"data-avatar-placeholder-icon":!0,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"}),a.createElement("path",{d:"M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}var P=r(70405),_=Object.defineProperty,T=Object.defineProperties,V=Object.getOwnPropertyDescriptors,N=Object.getOwnPropertySymbols,H=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable,R=(e,t,r)=>t in e?_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,S=(e,t)=>{for(var r in t||(t={}))H.call(t,r)&&R(e,r,t[r]);if(N)for(var r of N(t))I.call(t,r)&&R(e,r,t[r]);return e},z=(e,t)=>T(e,V(t)),B=(e,t)=>{var r={};for(var a in e)H.call(e,a)&&0>t.indexOf(a)&&(r[a]=e[a]);if(null!=e&&N)for(var a of N(e))0>t.indexOf(a)&&I.call(e,a)&&(r[a]=e[a]);return r};let J={},L=(0,d.Z)((e,{size:t,radius:r,variant:a,gradient:n,color:o})=>{let l=e.variantColorResolver({color:o||"gray",theme:e,gradient:n,variant:a||"light"});return{root:{"--avatar-size":(0,p.ap)(t,"avatar-size"),"--avatar-radius":void 0===r?void 0:(0,p.H5)(r),"--avatar-bg":o||a?l.background:void 0,"--avatar-color":o||a?l.color:void 0,"--avatar-bd":o||a?l.border:void 0}}}),W=(0,P.b)((e,t)=>{let r=(0,c.w)("Avatar",J,e),{classNames:o,className:i,style:d,styles:p,unstyled:m,vars:v,src:h,alt:f,radius:g,color:y,gradient:b,imageProps:x,children:w}=r,A=B(r,["classNames","className","style","styles","unstyled","vars","src","alt","radius","color","gradient","imageProps","children"]),j=function(){let e=(0,a.useContext)(n);return{withinGroup:!!e}}(),[E,M]=(0,a.useState)(!h),k=(0,s.y)({name:"Avatar",props:r,classes:l,className:i,style:d,classNames:o,styles:p,unstyled:m,vars:v,varsResolver:L});return(0,a.useEffect)(()=>M(!h),[h]),a.createElement(u.x,S(z(S({},k("root")),{mod:{"within-group":j.withinGroup},ref:t}),A),E?a.createElement("span",z(S({},k("placeholder")),{title:f}),w||a.createElement(q,null)):a.createElement("img",z(S(S({},x),k("image")),{src:h,alt:f,onError:e=>{var t;M(!0),null==(t=null==x?void 0:x.onError)||t.call(x,e)}})))});W.classes=l,W.displayName="@mantine/core/Avatar",W.Group=A},99009:function(e,t,r){"use strict";r.d(t,{cH:function(){return a},d_:function(){return n}});let a={type:"select",prop:"variant",data:["default","filled","light","outline","subtle","transparent","white"],initialValue:"filled",libraryValue:"__none__"},n={type:"select",prop:"variant",data:["filled","light","outline","transparent","white","default"],initialValue:"filled",libraryValue:"__none__"}}},function(e){e.O(0,[8992,178,9774,2888,179],function(){return e(e.s=23285)}),_N_E=e.O()}]);