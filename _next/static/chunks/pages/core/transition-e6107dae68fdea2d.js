(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2275],{33507:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},59331:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/transition",function(){return n(92834)}])},92834:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Z}});var r=n(85893),o=n(11151),i=n(19905),a=n(9904),s=n(93254),c=n(67294),l=n(72641),d=n(81110),p=n(14469),u=n(56338),h=n(93384),f=Object.defineProperty,m=Object.defineProperties,y=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,k=(e,t,n)=>t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,j=(e,t)=>{for(var n in t||(t={}))v.call(t,n)&&k(e,n,t[n]);if(g)for(var n of g(t))b.call(t,n)&&k(e,n,t[n]);return e},x=(e,t)=>m(e,y(t));let O=`
import { useState } from 'react';
import { useClickOutside } from '@mantine/hooks';
import { Transition, Paper, Button, Box } from '@mantine/core';

const scaleY = {
  in: { opacity: 1, transform: 'scaleY(1)' },
  out: { opacity: 0, transform: 'scaleY(0)' },
  common: { transformOrigin: 'top' },
  transitionProperty: 'transform, opacity',
};

function Demo() {
  const [opened, setOpened] = useState(false);
  const clickOutsideRef = useClickOutside(() => setOpened(false));

  return (
    <Box
      maw={200}
      pos="relative"
      style={{ display: 'flex', justifyContent: 'center', margin: 'auto' }}
    >
      <Button onClick={() => setOpened(true)}>Open dropdown</Button>
      <Transition
        mounted={opened}
        transition={scaleY}
        duration={200}
        timingFunction="ease"
        keepMounted
      >
        {(transitionStyle) => (
          <Paper
            shadow="md"
            p="xl"
            h={120}
            pos="absolute"
            top={0}
            left={0}
            right={0}
            ref={clickOutsideRef}
            style={{ ...transitionStyle, zIndex: 1 }}
          >
            Dropdown
          </Paper>
        )}
      </Transition>
    </Box>
  );
}`,w={in:{opacity:1,transform:"scaleY(1)"},out:{opacity:0,transform:"scaleY(0)"},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},M={type:"code",code:O,component:function(){let[e,t]=(0,c.useState)(!1),n=(0,l.O)(()=>t(!1));return c.createElement(d.x,{maw:200,pos:"relative",style:{display:"flex",justifyContent:"center",margin:"auto"}},c.createElement(p.z,{onClick:()=>t(!0)},"Open dropdown"),c.createElement(u.u,{mounted:e,transition:w,duration:200,timingFunction:"ease",keepMounted:!0},e=>c.createElement(h.X,{shadow:"md",p:"xl",h:120,pos:"absolute",top:0,left:0,right:0,ref:n,style:x(j({},e),{zIndex:1})},"Dropdown")))}},P=(0,i.A)(a.us.Transition);function E(e){let t=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre",ul:"ul",li:"li"},(0,o.ah)(),e.components),{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"premade-transitions",children:"Premade transitions"}),"\n",(0,r.jsx)(t.p,{children:"Mantine includes several premade transitions:"}),"\n",(0,r.jsx)(n,{data:s.p}),"\n",(0,r.jsxs)(t.p,{children:["To use one of them set ",(0,r.jsx)(t.code,{children:"transition"})," property to one of these values:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'import { Transition } from \'@mantine/core\';\n\nfunction Demo({ opened }: { opened: boolean }) {\n  return (\n    <Transition mounted={opened} transition="fade" duration={400} timingFunction="ease">\n      {(styles) => <div style={styles}>Your modal</div>}\n    </Transition>\n  );\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"custom-transitions",children:"Custom transitions"}),"\n",(0,r.jsxs)(t.p,{children:["You can create your own transition. ",(0,r.jsx)(t.code,{children:"transition"})," is an object with 4 properties:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"in"})," – styles for mounted state"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"out"})," – styles for unmounted state"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"common"})," (optional) – styles for both mounted and unmounted states"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"transitionProperty"})," – properties which participate in transition"]}),"\n"]}),"\n",(0,r.jsx)(n,{data:M})]})}var Z=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(P,Object.assign({},e,{children:(0,r.jsx)(E,e)}))}},28931:function(e,t,n){"use strict";n.d(t,{C:function(){return w}});var r=n(67294),o={root:"m-347db0ec","root--dot":"m-fbd81e3d",label:"m-5add502a",section:"m-91fdda9b"},i=n(70405),a=n(30370),s=n(86109),c=n(81110),l=n(8586),d=n(48468),p=n(40184),u=Object.defineProperty,h=Object.defineProperties,f=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t)=>{for(var n in t||(t={}))y.call(t,n)&&v(e,n,t[n]);if(m)for(var n of m(t))g.call(t,n)&&v(e,n,t[n]);return e},k=(e,t)=>h(e,f(t)),j=(e,t)=>{var n={};for(var r in e)y.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&m)for(var r of m(e))0>t.indexOf(r)&&g.call(e,r)&&(n[r]=e[r]);return n};let x={},O=(0,l.Z)((e,{radius:t,color:n,gradient:r,variant:o,size:i})=>{let a=e.variantColorResolver({color:n||e.primaryColor,theme:e,gradient:r,variant:o||"filled"});return{root:{"--badge-height":(0,d.ap)(i,"badge-height"),"--badge-padding-x":(0,d.ap)(i,"badge-padding-x"),"--badge-fz":(0,d.ap)(i,"badge-fz"),"--badge-radius":void 0===t?void 0:(0,d.H5)(t),"--badge-bg":n||o?a.background:void 0,"--badge-color":n||o?a.color:void 0,"--badge-bd":n||o?a.border:void 0,"--badge-dot-color":"dot"===o?(0,p.p)(n,e):void 0}}}),w=(0,i.b)((e,t)=>{let n=(0,a.w)("Badge",x,e),{classNames:i,className:l,style:d,styles:p,unstyled:u,vars:h,radius:f,color:m,gradient:y,leftSection:g,rightSection:v,children:w,variant:M,fullWidth:P}=n,E=j(n,["classNames","className","style","styles","unstyled","vars","radius","color","gradient","leftSection","rightSection","children","variant","fullWidth"]),Z=(0,s.y)({name:"Badge",props:n,classes:o,className:l,style:d,classNames:i,styles:p,unstyled:u,vars:h,varsResolver:O});return r.createElement(c.x,b(k(b({variant:M,mod:{block:P}},Z("root",{variant:M})),{ref:t}),E),g&&r.createElement("span",k(b({},Z("section")),{"data-position":"left"}),g),r.createElement("span",b({},Z("label")),w),v&&r.createElement("span",k(b({},Z("section")),{"data-position":"right"}),v))});w.classes=o,w.displayName="@mantine/core/Badge"},93254:function(e,t,n){"use strict";n.d(t,{p:function(){return l}});var r=n(67294),o=n(88313),i=n(14533),a=n(46842),s=n(28931),c=n(16262);let l={type:"code",component:function(){let e=(0,o.X)(i.p).map(e=>r.createElement(a.u,{key:e,label:e,transitionProps:{transition:e,duration:300}},r.createElement(s.C,{variant:"light"},e)));return r.createElement(c.Z,{justify:"center",style:{cursor:"default"}},e)}}}},function(e){e.O(0,[8992,178,9774,2888,179],function(){return e(e.s=59331)}),_N_E=e.O()}]);