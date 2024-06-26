(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[97966],{97249:function(e,r,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/avatar",function(){return a(63638)}])},63638:function(e,r,a){"use strict";a.r(r),a.d(r,{default:function(){return C}});var t=a(52322),n=a(45392),o=a(9379),i=a(93010),l=a(82067),s=a(10404);let c={type:"code",code:`
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

`,component:function(){return(0,t.jsxs)(i.Z,{justify:"center",children:[(0,t.jsx)(l.q,{src:s.aY[0],alt:"it's me"}),(0,t.jsx)(l.q,{radius:"xl"}),(0,t.jsx)(l.q,{color:"cyan",radius:"xl",children:"MK"}),(0,t.jsx)(l.q,{color:"blue",radius:"sm",children:(0,t.jsx)(o.Z,{size:"1.5rem"})})]})}};var d=a(35974);let u={type:"code",component:function(){let e=s.R5.map(e=>(0,t.jsx)(l.q,{name:e,color:"initials",allowedInitialsColors:["blue","red"]},e));return(0,t.jsx)(i.Z,{children:e})},code:`
import { Avatar, Group } from '@mantine/core';

${s.$y}

function Demo() {
  const avatars = names.map((name) => (
    <Avatar key={name} name={name} color="initials" allowedInitialsColors={['blue', 'red']} />
  ));
  return <Group>{avatars}</Group>;
}
`,centered:!0},p={type:"code",code:`
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

`,component:function(){return(0,t.jsxs)(i.Z,{justify:"center",children:[(0,t.jsx)(l.q,{src:null,alt:"no image here"}),(0,t.jsx)(l.q,{src:null,alt:"no image here",color:"indigo"}),(0,t.jsx)(l.q,{src:null,alt:"no image here",color:"red",children:"VR"}),(0,t.jsx)(l.q,{color:"blue",radius:"xl",children:(0,t.jsx)(o.Z,{size:"1.5rem"})})]})}};var h=a(50327);let m=`
import { Avatar } from '@mantine/core';

function Demo() {
  return <Avatar{{props}} />;
}
`,v={type:"configurator",component:l.q,centered:!0,code:m,controls:[h.d_,{prop:"radius",type:"size",initialValue:"sm",libraryValue:"100%"},{prop:"size",type:"size",initialValue:"md",libraryValue:"md"},{prop:"color",type:"color",initialValue:"gray",libraryValue:"gray"},{prop:"src",type:"string",initialValue:"",libraryValue:null}]},x={type:"code",centered:!0,code:`
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
`,component:function(){return(0,t.jsxs)(l.q.Group,{children:[(0,t.jsx)(l.q,{src:s.aY[0]}),(0,t.jsx)(l.q,{src:s.aY[1]}),(0,t.jsx)(l.q,{src:s.aY[2]}),(0,t.jsx)(l.q,{children:"+5"})]})}};var f=a(893);let g={type:"code",centered:!0,code:`
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
`,component:function(){return(0,t.jsx)(f.u.Group,{openDelay:300,closeDelay:100,children:(0,t.jsxs)(l.q.Group,{spacing:"sm",children:[(0,t.jsx)(f.u,{label:"Salazar Troop",withArrow:!0,children:(0,t.jsx)(l.q,{src:s.aY[0],radius:"xl"})}),(0,t.jsx)(f.u,{label:"Bandit Crimes",withArrow:!0,children:(0,t.jsx)(l.q,{src:s.aY[1],radius:"xl"})}),(0,t.jsx)(f.u,{label:"Jane Rata",withArrow:!0,children:(0,t.jsx)(l.q,{src:s.aY[2],radius:"xl"})}),(0,t.jsx)(f.u,{withArrow:!0,label:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{children:"John Outcast"}),(0,t.jsx)("div",{children:"Levi Capitan"})]}),children:(0,t.jsx)(l.q,{radius:"xl",children:"+2"})})]})})}},j={type:"code",centered:!0,code:`
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
`,component:function(){return(0,t.jsx)(l.q,{component:"a",href:"https://github.com/rtivital",target:"_blank",src:s.aY[0],alt:"it's me"})}};var A=a(25071),y=a(15019);let b=(0,A.A)(y.us.Avatar);function w(e){let r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...e.components},{Demo:a,Polymorphic:o}=r;return a||_("Demo",!0),o||_("Polymorphic",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(a,{data:c}),"\n",(0,t.jsx)(r.h2,{id:"initials",children:"Initials"}),"\n",(0,t.jsxs)(r.p,{children:["To display initials instead of the default placeholder, set ",(0,t.jsx)(r.code,{children:"name"})," prop\nto the name of the person, for example, ",(0,t.jsx)(r.code,{children:'name="John Doe"'}),". If the name\nis set, you can use ",(0,t.jsx)(r.code,{children:'color="initials"'})," to generate color based on the name:"]}),"\n",(0,t.jsx)(a,{data:d.e}),"\n",(0,t.jsx)(r.h2,{id:"allowed-initials-colors",children:"Allowed initials colors"}),"\n",(0,t.jsxs)(r.p,{children:["By default, all colors from the default theme are allowed for initials, you can restrict them\nby providing ",(0,t.jsx)(r.code,{children:"allowedInitialsColors"})," prop with an array of colors. Note that the default colors\narray does not include custom colors defined in the theme, you need to provide them manually\nif needed."]}),"\n",(0,t.jsx)(a,{data:u}),"\n",(0,t.jsx)(r.h2,{id:"placeholder",children:"Placeholder"}),"\n",(0,t.jsxs)(r.p,{children:["If the image cannot be loaded or not provided, ",(0,t.jsx)(r.code,{children:"Avatar"})," will display a placeholder instead. By default,\nplaceholder is an icon, but it can be changed to any React node:"]}),"\n",(0,t.jsx)(a,{data:p}),"\n",(0,t.jsx)(r.h2,{id:"variants",children:"Variants"}),"\n",(0,t.jsx)(a,{data:v}),"\n",(0,t.jsx)(r.h2,{id:"avatargroup",children:"Avatar.Group"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"Avatar.Group"})," component combines multiple avatars into a stack:"]}),"\n",(0,t.jsx)(a,{data:x}),"\n",(0,t.jsxs)(r.p,{children:["Note that you must not wrap child ",(0,t.jsx)(r.code,{children:"Avatar"})," components with any additional elements,\nbut you can use wrap ",(0,t.jsx)(r.code,{children:"Avatar"})," with components that do not render any HTML elements\nin the current tree, for example ",(0,t.jsx)(r.a,{href:"/core/tooltip",children:"Tooltip"}),"."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-tsx",children:'import { Avatar } from \'@mantine/core\';\n\n// Will not work correctly\nfunction Demo() {\n  return (\n    <Avatar.Group spacing="sm">\n      <div>\n        <Avatar src="image.png" radius="xl" />\n      </div>\n      <Avatar src="image.png" radius="xl" />\n      <Avatar src="image.png" radius="xl" />\n      <Avatar radius="xl">+5</Avatar>\n    </Avatar.Group>\n  );\n}\n'})}),"\n",(0,t.jsxs)(r.p,{children:["Example of usage with ",(0,t.jsx)(r.a,{href:"/core/tooltip/",children:"Tooltip"}),":"]}),"\n",(0,t.jsx)(a,{data:g}),"\n",(0,t.jsx)(o,{defaultElement:"div",changeToElement:"button",component:"Avatar",withNext:!0}),"\n",(0,t.jsx)(a,{data:j}),"\n",(0,t.jsxs)(r.p,{children:["You can combine it with ",(0,t.jsx)(r.a,{href:"/core/tooltip/",children:"Tooltip"})," or ",(0,t.jsx)(r.a,{href:"/core/popover/",children:"Popover"})," to show additional information on hover"]}),"\n",(0,t.jsx)(a,{data:g}),"\n",(0,t.jsx)(r.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,t.jsxs)(r.p,{children:["Avatar renders ",(0,t.jsx)(r.code,{children:"<img />"})," HTML element. Set ",(0,t.jsx)(r.code,{children:"alt"})," prop to describe image,\nit is also used as ",(0,t.jsx)(r.code,{children:"title"})," attribute for avatar placeholder when the image cannot be loaded."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-tsx",children:'import { Avatar } from \'@mantine/core\';\n\nfunction NotOk() {\n  // Not ok, no alt for image\n  return <Avatar src="./image.png" />;\n}\n\nfunction Ok() {\n  // Ok, alt is set on <img /> tag\n  return <Avatar src="./image.png" alt="Rob Johnson" />;\n}\n\nfunction Ehh() {\n  // Ehh, title is not required, but still recommended\n  return <Avatar>RJ</Avatar>;\n}\n\nfunction OkPlaceholder() {\n  // Ok, title is set on placeholder\n  return <Avatar alt="Rob Johnson">RJ</Avatar>;\n}\n'})})]})}function C(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(b,{...e,children:(0,t.jsx)(w,{...e})})}function _(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},9379:function(e,r,a){"use strict";a.d(r,{Z:function(){return t}});/**
 * @license @tabler/icons-react v3.3.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var t=(0,a(73681).Z)("outline","star","IconStar",[["path",{d:"M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z",key:"svg-0"}]])},35974:function(e,r,a){"use strict";a.d(r,{e:function(){return l}});var t=a(52322),n=a(82067),o=a(93010),i=a(10404);let l={type:"code",component:function(){let e=i.R5.map(e=>(0,t.jsx)(n.q,{name:e,color:"initials"},e));return(0,t.jsx)(o.Z,{children:e})},code:`
import { Avatar, Group } from '@mantine/core';

${i.$y}

function Demo() {
  const avatars = names.map((name) => <Avatar key={name} name={name} color="initials" />);
  return <Group>{avatars}</Group>;
}
`,centered:!0}},10404:function(e,r,a){"use strict";a.d(r,{$y:function(){return o},R5:function(){return n},aY:function(){return t}});let t=["https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png","https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png","https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png"],n=["John Doe","Jane Mol","Alex Lump","Sarah Condor","Mike Johnson","Kate Kok","Tom Smith"],o=`const names = [
  'John Doe',
  'Jane Mol',
  'Alex Lump',
  'Sarah Condor',
  'Mike Johnson',
  'Kate Kok',
  'Tom Smith',
];`},50327:function(e,r,a){"use strict";a.d(r,{cH:function(){return t},d_:function(){return n}});let t={type:"select",prop:"variant",data:["default","filled","light","outline","subtle","transparent","white"],initialValue:"filled",libraryValue:"__none__"},n={type:"select",prop:"variant",data:["filled","light","outline","transparent","white","default"],initialValue:"filled",libraryValue:"__none__"}},82067:function(e,r,a){"use strict";a.d(r,{q:function(){return w}});var t=a(52322),n=a(2784),o=a(91482),i=a(11200),l=a(38483),s=a(46690),c=a(28559),d=a(33502),u=a(82027);let p=(0,n.createContext)(null),h=p.Provider;var m={group:"m_11def92b",root:"m_f85678b6",image:"m_11f8ac07",placeholder:"m_104cd71f"};let v={},x=(0,i.Z)((e,{spacing:r})=>({group:{"--ag-spacing":(0,o.bG)(r)}})),f=(0,u.d)((e,r)=>{let a=(0,l.w)("AvatarGroup",v,e),{classNames:n,className:o,style:i,styles:d,unstyled:u,vars:p,spacing:f,...g}=a,j=(0,s.y)({name:"AvatarGroup",classes:m,props:a,className:o,style:i,classNames:n,styles:d,unstyled:u,vars:p,varsResolver:x,rootSelector:"group"});return(0,t.jsx)(h,{value:!0,children:(0,t.jsx)(c.x,{ref:r,...j("group"),...g})})});function g(e){return(0,t.jsx)("svg",{...e,"data-avatar-placeholder-icon":!0,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}function j(e,r=2){let a=e.split(" ");return 1===a.length?e.slice(0,r).toUpperCase():a.map(e=>e[0]).slice(0,r).join("").toUpperCase()}f.classes=m,f.displayName="@mantine/core/AvatarGroup";let A=["blue","cyan","grape","green","indigo","lime","orange","pink","red","teal","violet"],y={},b=(0,i.Z)((e,{size:r,radius:a,variant:t,gradient:n,color:i,autoContrast:l,name:s,allowedInitialsColors:c})=>{let d="initials"===i&&"string"==typeof s?function(e,r=A){let a=Math.abs(function(e){let r=0;for(let a=0;a<e.length;a+=1)r=(r<<5)-r+e.charCodeAt(a)|0;return r}(j(e)))%r.length;return r[a]}(s,c):i,u=e.variantColorResolver({color:d||"gray",theme:e,gradient:n,variant:t||"light",autoContrast:l});return{root:{"--avatar-size":(0,o.ap)(r,"avatar-size"),"--avatar-radius":void 0===a?void 0:(0,o.H5)(a),"--avatar-bg":d||t?u.background:void 0,"--avatar-color":d||t?u.color:void 0,"--avatar-bd":d||t?u.border:void 0}}}),w=(0,d.b)((e,r)=>{let a=(0,l.w)("Avatar",y,e),{classNames:o,className:i,style:d,styles:u,unstyled:h,vars:v,src:x,alt:f,radius:A,color:w,gradient:C,imageProps:_,children:G,autoContrast:k,mod:q,name:T,allowedInitialsColors:D,...R}=a,V={withinGroup:!!(0,n.useContext)(p)},[E,J]=(0,n.useState)(!x),M=(0,s.y)({name:"Avatar",props:a,classes:m,className:i,style:d,classNames:o,styles:u,unstyled:h,vars:v,varsResolver:b});return(0,n.useEffect)(()=>J(!x),[x]),(0,t.jsx)(c.x,{...M("root"),mod:[{"within-group":V.withinGroup},q],ref:r,...R,children:E?(0,t.jsx)("span",{...M("placeholder"),title:f,children:G||"string"==typeof T&&j(T)||(0,t.jsx)(g,{})}):(0,t.jsx)("img",{..._,...M("image"),src:x,alt:f,onError:e=>{J(!0),_?.onError?.(e)}})})});w.classes=m,w.displayName="@mantine/core/Avatar",w.Group=f}},function(e){e.O(0,[61177,66748,11340,92888,49774,40179],function(){return e(e.s=97249)}),_N_E=e.O()}]);