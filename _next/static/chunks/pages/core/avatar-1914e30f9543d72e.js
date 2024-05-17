(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[97966],{97249:function(a,r,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/avatar",function(){return e(44017)}])},44017:function(a,r,e){"use strict";e.r(r),e.d(r,{default:function(){return b}});var t=e(52322),n=e(45392),o=e(9379),i=e(93010),l=e(47100);let s={type:"code",code:`
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

`,component:function(){return(0,t.jsxs)(i.Z,{justify:"center",children:[(0,t.jsx)(l.q,{src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png",alt:"it's me"}),(0,t.jsx)(l.q,{radius:"xl"}),(0,t.jsx)(l.q,{color:"cyan",radius:"xl",children:"MK"}),(0,t.jsx)(l.q,{color:"blue",radius:"sm",children:(0,t.jsx)(o.Z,{size:"1.5rem"})})]})}},c={type:"code",code:`
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

`,component:function(){return(0,t.jsxs)(i.Z,{justify:"center",children:[(0,t.jsx)(l.q,{src:null,alt:"no image here"}),(0,t.jsx)(l.q,{src:null,alt:"no image here",color:"indigo"}),(0,t.jsx)(l.q,{src:null,alt:"no image here",color:"red",children:"VR"}),(0,t.jsx)(l.q,{color:"blue",radius:"xl",children:(0,t.jsx)(o.Z,{size:"1.5rem"})})]})}};var d=e(50327);let u=`
import { Avatar } from '@mantine/core';

function Demo() {
  return <Avatar{{props}} />;
}
`,p={type:"configurator",component:l.q,centered:!0,code:u,controls:[d.d_,{prop:"radius",type:"size",initialValue:"sm",libraryValue:"100%"},{prop:"size",type:"size",initialValue:"md",libraryValue:"md"},{prop:"color",type:"color",initialValue:"gray",libraryValue:"gray"},{prop:"src",type:"string",initialValue:"",libraryValue:null}]},m={type:"code",centered:!0,code:`
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
`,component:function(){return(0,t.jsxs)(l.q.Group,{children:[(0,t.jsx)(l.q,{src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png"}),(0,t.jsx)(l.q,{src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"}),(0,t.jsx)(l.q,{src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png"}),(0,t.jsx)(l.q,{children:"+5"})]})}};var h=e(893);let v={type:"code",centered:!0,code:`
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
`,component:function(){return(0,t.jsx)(h.u.Group,{openDelay:300,closeDelay:100,children:(0,t.jsxs)(l.q.Group,{spacing:"sm",children:[(0,t.jsx)(h.u,{label:"Salazar Troop",withArrow:!0,children:(0,t.jsx)(l.q,{src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png",radius:"xl"})}),(0,t.jsx)(h.u,{label:"Bandit Crimes",withArrow:!0,children:(0,t.jsx)(l.q,{src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png",radius:"xl"})}),(0,t.jsx)(h.u,{label:"Jane Rata",withArrow:!0,children:(0,t.jsx)(l.q,{src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png",radius:"xl"})}),(0,t.jsx)(h.u,{withArrow:!0,label:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{children:"John Outcast"}),(0,t.jsx)("div",{children:"Levi Capitan"})]}),children:(0,t.jsx)(l.q,{radius:"xl",children:"+2"})})]})})}},x={type:"code",centered:!0,code:`
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
`,component:function(){return(0,t.jsx)(l.q,{component:"a",href:"https://github.com/rtivital",target:"_blank",src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png",alt:"it's me"})}};var g=e(25071),f=e(15019);let j=(0,g.A)(f.us.Avatar);function A(a){let r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...a.components},{Demo:e,Polymorphic:o}=r;return e||w("Demo",!0),o||w("Polymorphic",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(e,{data:s}),"\n",(0,t.jsx)(r.h2,{id:"placeholder",children:"Placeholder"}),"\n",(0,t.jsxs)(r.p,{children:["If the image cannot be loaded or not provided, ",(0,t.jsx)(r.code,{children:"Avatar"})," will display a placeholder instead. By default,\nplaceholder is an icon, but it can be changed to any React node:"]}),"\n",(0,t.jsx)(e,{data:c}),"\n",(0,t.jsx)(r.h2,{id:"variants",children:"Variants"}),"\n",(0,t.jsx)(e,{data:p}),"\n",(0,t.jsx)(r.h2,{id:"avatargroup",children:"Avatar.Group"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"Avatar.Group"})," component combines multiple avatars into a stack:"]}),"\n",(0,t.jsx)(e,{data:m}),"\n",(0,t.jsxs)(r.p,{children:["Note that you must not wrap child ",(0,t.jsx)(r.code,{children:"Avatar"})," components with any additional elements,\nbut you can use wrap ",(0,t.jsx)(r.code,{children:"Avatar"})," with components that do not render any HTML elements\nin the current tree, for example ",(0,t.jsx)(r.a,{href:"/core/tooltip",children:"Tooltip"}),"."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-tsx",children:'import { Avatar } from \'@mantine/core\';\n\n// Will not work correctly\nfunction Demo() {\n  return (\n    <Avatar.Group spacing="sm">\n      <div>\n        <Avatar src="image.png" radius="xl" />\n      </div>\n      <Avatar src="image.png" radius="xl" />\n      <Avatar src="image.png" radius="xl" />\n      <Avatar radius="xl">+5</Avatar>\n    </Avatar.Group>\n  );\n}\n'})}),"\n",(0,t.jsxs)(r.p,{children:["Example of usage with ",(0,t.jsx)(r.a,{href:"/core/tooltip/",children:"Tooltip"}),":"]}),"\n",(0,t.jsx)(e,{data:v}),"\n",(0,t.jsx)(o,{defaultElement:"div",changeToElement:"button",component:"Avatar",withNext:!0}),"\n",(0,t.jsx)(e,{data:x}),"\n",(0,t.jsxs)(r.p,{children:["You can combine it with ",(0,t.jsx)(r.a,{href:"/core/tooltip/",children:"Tooltip"})," or ",(0,t.jsx)(r.a,{href:"/core/popover/",children:"Popover"})," to show additional information on hover"]}),"\n",(0,t.jsx)(e,{data:v}),"\n",(0,t.jsx)(r.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,t.jsxs)(r.p,{children:["Avatar renders ",(0,t.jsx)(r.code,{children:"<img />"})," HTML element. Set ",(0,t.jsx)(r.code,{children:"alt"})," prop to describe image,\nit is also used as ",(0,t.jsx)(r.code,{children:"title"})," attribute for avatar placeholder when the image cannot be loaded."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-tsx",children:'import { Avatar } from \'@mantine/core\';\n\nfunction NotOk() {\n  // Not ok, no alt for image\n  return <Avatar src="./image.png" />;\n}\n\nfunction Ok() {\n  // Ok, alt is set on <img /> tag\n  return <Avatar src="./image.png" alt="Rob Johnson" />;\n}\n\nfunction Ehh() {\n  // Ehh, title is not required, but still recommended\n  return <Avatar>RJ</Avatar>;\n}\n\nfunction OkPlaceholder() {\n  // Ok, title is set on placeholder\n  return <Avatar alt="Rob Johnson">RJ</Avatar>;\n}\n'})})]})}function b(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(j,{...a,children:(0,t.jsx)(A,{...a})})}function w(a,r){throw Error("Expected "+(r?"component":"object")+" `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}},9379:function(a,r,e){"use strict";e.d(r,{Z:function(){return t}});/**
 * @license @tabler/icons-react v3.3.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var t=(0,e(73681).Z)("outline","star","IconStar",[["path",{d:"M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z",key:"svg-0"}]])},50327:function(a,r,e){"use strict";e.d(r,{cH:function(){return t},d_:function(){return n}});let t={type:"select",prop:"variant",data:["default","filled","light","outline","subtle","transparent","white"],initialValue:"filled",libraryValue:"__none__"},n={type:"select",prop:"variant",data:["filled","light","outline","transparent","white","default"],initialValue:"filled",libraryValue:"__none__"}},47100:function(a,r,e){"use strict";e.d(r,{q:function(){return b}});var t=e(52322),n=e(2784),o=e(91482),i=e(11200),l=e(38483),s=e(46690),c=e(28559),d=e(33502),u=e(82027);let p=(0,n.createContext)(null),m=p.Provider;var h={group:"m_11def92b",root:"m_f85678b6",image:"m_11f8ac07",placeholder:"m_104cd71f"};let v={},x=(0,i.Z)((a,{spacing:r})=>({group:{"--ag-spacing":(0,o.bG)(r)}})),g=(0,u.d)((a,r)=>{let e=(0,l.w)("AvatarGroup",v,a),{classNames:n,className:o,style:i,styles:d,unstyled:u,vars:p,spacing:g,...f}=e,j=(0,s.y)({name:"AvatarGroup",classes:h,props:e,className:o,style:i,classNames:n,styles:d,unstyled:u,vars:p,varsResolver:x,rootSelector:"group"});return(0,t.jsx)(m,{value:!0,children:(0,t.jsx)(c.x,{ref:r,...j("group"),...f})})});function f(a){return(0,t.jsx)("svg",{...a,"data-avatar-placeholder-icon":!0,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}g.classes=h,g.displayName="@mantine/core/AvatarGroup";let j={},A=(0,i.Z)((a,{size:r,radius:e,variant:t,gradient:n,color:i,autoContrast:l})=>{let s=a.variantColorResolver({color:i||"gray",theme:a,gradient:n,variant:t||"light",autoContrast:l});return{root:{"--avatar-size":(0,o.ap)(r,"avatar-size"),"--avatar-radius":void 0===e?void 0:(0,o.H5)(e),"--avatar-bg":i||t?s.background:void 0,"--avatar-color":i||t?s.color:void 0,"--avatar-bd":i||t?s.border:void 0}}}),b=(0,d.b)((a,r)=>{let e=(0,l.w)("Avatar",j,a),{classNames:o,className:i,style:d,styles:u,unstyled:m,vars:v,src:x,alt:g,radius:b,color:w,gradient:y,imageProps:C,children:_,autoContrast:q,mod:T,...G}=e,k={withinGroup:!!(0,n.useContext)(p)},[V,D]=(0,n.useState)(!x),E=(0,s.y)({name:"Avatar",props:e,classes:h,className:i,style:d,classNames:o,styles:u,unstyled:m,vars:v,varsResolver:A});return(0,n.useEffect)(()=>D(!x),[x]),(0,t.jsx)(c.x,{...E("root"),mod:[{"within-group":k.withinGroup},T],ref:r,...G,children:V?(0,t.jsx)("span",{...E("placeholder"),title:g,children:_||(0,t.jsx)(f,{})}):(0,t.jsx)("img",{...C,...E("image"),src:x,alt:g,onError:a=>{D(!0),C?.onError?.(a)}})})});b.classes=h,b.displayName="@mantine/core/Avatar",b.Group=g}},function(a){a.O(0,[61177,66748,11340,92888,49774,40179],function(){return a(a.s=97249)}),_N_E=a.O()}]);