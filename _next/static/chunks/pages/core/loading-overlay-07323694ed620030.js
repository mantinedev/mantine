(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9705],{33507:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var o=(0,r(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var o=(0,r(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var o=(0,r(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var o=(0,r(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var o=(0,r(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var o=(0,r(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var o=(0,r(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},59862:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/loading-overlay",function(){return r(13205)}])},13205:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return k}});var o=r(85893),n=r(11151),a=r(19905),i=r(9904),c=r(67294),s=r(81110),l=r(17286),u=r(16262),d=r(14469),p=r(12177),v=r(79734);let h=`
import { useDisclosure } from '@mantine/hooks';
import { LoadingOverlay, Button, Group, Box } from '@mantine/core';

function Demo() {
  const [visible, { toggle }] = useDisclosure(false);

  // Note that position: relative is required
  return (
    <>
      <Box pos="relative">
        <LoadingOverlay visible={visible} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} />
        {/* ...other content */}
      </Box>

      <Group position="center">
        <Button onClick={toggle}>Toggle overlay</Button>
      </Group>
    </>
  );
}`,f={centered:!0,maxWidth:400,dimmed:!0,type:"code",code:h,component:function(){let[e,{toggle:t}]=(0,p.q)(!1);return c.createElement(c.Fragment,null,c.createElement(s.x,{pos:"relative"},c.createElement(l.f,{visible:e,zIndex:1e3,overlayProps:{radius:"sm",blur:2}}),c.createElement(v._,{noSubmit:!0})),c.createElement(u.Z,{justify:"center",mt:"xl"},c.createElement(d.z,{onClick:t},"Toggle overlay")))}},g=`
import { useDisclosure } from '@mantine/hooks';
import { LoadingOverlay, Button, Group, Box } from '@mantine/core';

function Demo() {
  const [visible, { toggle }] = useDisclosure(true);

  // Note that position: relative is required
  return (
    <>
      <Box pos="relative">
        <LoadingOverlay
          visible={visible}
          zIndex={1000}
          overlayProps={{ radius: 'sm', blur: 2 }}
          loaderProps={{ color: 'pink', type: 'bars' }}
        />
        {/* ...other content */}
      </Box>

      <Group position="center">
        <Button onClick={toggle}>Toggle overlay</Button>
      </Group>
    </>
  );
}`,y={centered:!0,maxWidth:400,dimmed:!0,type:"code",code:g,component:function(){let[e,{toggle:t}]=(0,p.q)(!0);return c.createElement(c.Fragment,null,c.createElement(s.x,{pos:"relative"},c.createElement(l.f,{visible:e,zIndex:1e3,overlayProps:{radius:"sm",blur:2},loaderProps:{color:"pink",type:"bars"}}),c.createElement(v._,{noSubmit:!0})),c.createElement(u.Z,{justify:"center",mt:"xl"},c.createElement(d.z,{onClick:t},"Toggle overlay")))}},m=(0,a.A)(i.us.LoadingOverlay);function b(e){let t=Object.assign({h2:"h2",p:"p",code:"code",a:"a"},(0,n.ah)(),e.components),{Demo:r}=t;return r||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"LoadingOverlay"})," renders an overlay with a loader over the parent element with relative position.\nIt is usually used to indicate loading state of forms.\nNote that elements under overlay are still focusable with keyboard, remember to add additional logic to handle this case."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"LoadingOverlay"})," rendering is controlled by ",(0,o.jsx)(t.code,{children:"visible"})," prop:"]}),"\n",(0,o.jsx)(r,{data:f}),"\n",(0,o.jsx)(t.h2,{id:"loader-props",children:"Loader props"}),"\n",(0,o.jsxs)(t.p,{children:["You can pass props down to the ",(0,o.jsx)(t.a,{href:"/core/loader",children:"Loader"})," component with ",(0,o.jsx)(t.code,{children:"loaderProps"}),":"]}),"\n",(0,o.jsx)(r,{data:y})]})}var k=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(m,Object.assign({},e,{children:(0,o.jsx)(b,e)}))}},93693:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var o=(0,r(54764).Z)("at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},38956:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var o=(0,r(54764).Z)("lock","IconLock",[["path",{d:"M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z",key:"svg-0"}],["path",{d:"M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0",key:"svg-1"}],["path",{d:"M8 11v-4a4 4 0 1 1 8 0v4",key:"svg-2"}]])},66471:function(e){"use strict";e.exports=function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){if(t.constructor!==r.constructor)return!1;if(Array.isArray(t)){if((o=t.length)!=r.length)return!1;for(n=o;0!=n--;)if(!e(t[n],r[n]))return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();if((o=(a=Object.keys(t)).length)!==Object.keys(r).length)return!1;for(n=o;0!=n--;)if(!Object.prototype.hasOwnProperty.call(r,a[n]))return!1;for(n=o;0!=n--;){var o,n,a,i=a[n];if(!e(t[i],r[i]))return!1}return!0}return t!=t&&r!=r}},28380:function(e,t,r){"use strict";function o(e,t,r){"object"==typeof r.value&&(r.value=n(r.value)),r.enumerable&&!r.get&&!r.set&&r.configurable&&r.writable&&"__proto__"!==t?e[t]=r.value:Object.defineProperty(e,t,r)}function n(e){if("object"!=typeof e)return e;var t,r,a,i=0,c=Object.prototype.toString.call(e);if("[object Object]"===c?a=Object.create(e.__proto__||null):"[object Array]"===c?a=Array(e.length):"[object Set]"===c?(a=new Set,e.forEach(function(e){a.add(n(e))})):"[object Map]"===c?(a=new Map,e.forEach(function(e,t){a.set(n(t),n(e))})):"[object Date]"===c?a=new Date(+e):"[object RegExp]"===c?a=RegExp(e.source,e.flags):"[object DataView]"===c?a=new e.constructor(n(e.buffer)):"[object ArrayBuffer]"===c?a=e.slice(0):"Array]"===c.slice(-6)&&(a=new e.constructor(e)),a){for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)o(a,r[i],Object.getOwnPropertyDescriptor(e,r[i]));for(i=0,r=Object.getOwnPropertyNames(e);i<r.length;i++)Object.hasOwnProperty.call(a,t=r[i])&&a[t]===e[t]||o(a,t,Object.getOwnPropertyDescriptor(e,t))}return a||e}r.d(t,{Y:function(){return n}})}},function(e){e.O(0,[8992,178,9814,6346,9774,2888,179],function(){return e(e.s=59862)}),_N_E=e.O()}]);