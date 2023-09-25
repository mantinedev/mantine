(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[783],{33507:function(e,t,o){"use strict";o.d(t,{Z:function(){return r}});var r=(0,o(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,t,o){"use strict";o.d(t,{Z:function(){return r}});var r=(0,o(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,t,o){"use strict";o.d(t,{Z:function(){return r}});var r=(0,o(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,t,o){"use strict";o.d(t,{Z:function(){return r}});var r=(0,o(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,t,o){"use strict";o.d(t,{Z:function(){return r}});var r=(0,o(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,t,o){"use strict";o.d(t,{Z:function(){return r}});var r=(0,o(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,t,o){"use strict";o.d(t,{Z:function(){return r}});var r=(0,o(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},77266:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/overlay",function(){return o(68629)}])},68629:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return O}});var r=o(85893),a=o(11151),n=o(19905),i=o(9904),c=o(67294),l=o(47185),s=o(9065),d=o(14469);let u=`
import { useState } from 'react';
import { Button, Overlay, AspectRatio } from '@mantine/core';

function Demo() {
  const [visible, setVisible] = useState(true);
  return (
    <>
      <AspectRatio ratio={16 / 9} maw={400} mx="auto">
        <img
          src="https://images.unsplash.com/photo-1618359057154-e21ae64350b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
          alt="Demo"
        />
        {visible && <Overlay color="#000" backgroundOpacity={0.85} />}
      </AspectRatio>
      <Button onClick={() => setVisible((v) => !v)} fullWidth maw={200} mx="auto" mt="xl">
        Toggle overlay
      </Button>
    </>
  );
}
`,p={type:"code",code:u,component:function(){let[e,t]=(0,c.useState)(!0);return c.createElement(c.Fragment,null,c.createElement(l.o,{ratio:16/9,maw:400,mx:"auto"},c.createElement("img",{src:"https://images.unsplash.com/photo-1618359057154-e21ae64350b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",alt:"Demo"}),e&&c.createElement(s.a,{color:"#000",backgroundOpacity:.85})),c.createElement(d.z,{onClick:()=>t(e=>!e),fullWidth:!0,maw:200,mx:"auto",mt:"xl"},"Toggle overlay"))}},f=`
import { useState } from 'react';
import { Button, Overlay, AspectRatio } from '@mantine/core';

function Demo() {
  const [visible, setVisible] = useState(true);
  return (
    <>
      <AspectRatio ratio={16 / 9} maw={400} mx="auto">
        <img
          src="https://images.unsplash.com/photo-1618359057154-e21ae64350b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
          alt="Demo"
        />
        {visible && (
          <Overlay
            gradient="linear-gradient(145deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 100%)"
            opacity={0.85}
          />
        )}
      </AspectRatio>
      <Button onClick={() => setVisible((v) => !v)} fullWidth maw={200} mx="auto" mt="xl">
        Toggle overlay
      </Button>
    </>
  );
}
`,h={type:"code",code:f,component:function(){let[e,t]=(0,c.useState)(!0);return c.createElement(c.Fragment,null,c.createElement(l.o,{ratio:16/9,maw:400,mx:"auto"},c.createElement("img",{src:"https://images.unsplash.com/photo-1618359057154-e21ae64350b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",alt:"Demo"}),e&&c.createElement(s.a,{gradient:"linear-gradient(145deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 100%)",opacity:.85})),c.createElement(d.z,{onClick:()=>t(e=>!e),fullWidth:!0,maw:200,mx:"auto",mt:"xl"},"Toggle overlay"))}};var m=Object.defineProperty,g=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,b=(e,t,o)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,v=(e,t)=>{for(var o in t||(t={}))y.call(t,o)&&b(e,o,t[o]);if(g)for(var o of g(t))x.call(t,o)&&b(e,o,t[o]);return e};let w=`
import { Overlay, AspectRatio } from '@mantine/core';

function Demo() {
  return (
    <AspectRatio ratio={16 / 9} maw={400} mx="auto">
      <img
        src="https://images.unsplash.com/photo-1618359057154-e21ae64350b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
        alt="Demo"
      />
      <Overlay color="#000" backgroundOpacity={0.35}{{props}} />
    </AspectRatio>
  );
}
`,k={type:"configurator",component:function(e){return c.createElement(l.o,{ratio:16/9,maw:400,mx:"auto"},c.createElement("img",{src:"https://images.unsplash.com/photo-1618359057154-e21ae64350b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",alt:"Demo"}),c.createElement(s.a,v({color:"#000",backgroundOpacity:.35},e)))},code:w,controls:[{type:"number",prop:"blur",initialValue:15,libraryValue:null,min:0,max:30}]},j=(0,n.A)(i.us.Overlay);function M(e){let t=Object.assign({h2:"h2",p:"p",code:"code",a:"a"},(0,a.ah)(),e.components),{Demo:o,Polymorphic:n}=t;return o||E("Demo",!0),n||E("Polymorphic",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Overlay"})," takes 100% of width and height of parent container or viewport if ",(0,r.jsx)(t.code,{children:"fixed"})," prop is set.\nSet ",(0,r.jsx)(t.code,{children:"color"})," and ",(0,r.jsx)(t.code,{children:"backgroundOpacity"})," props to change ",(0,r.jsx)(t.code,{children:"Overlay"})," background-color. Note that ",(0,r.jsx)(t.code,{children:"backgroundOpacity"})," prop\ndoes not change CSS opacity property, it changes background-color. For example, if you set\n",(0,r.jsx)(t.code,{children:'color="#000"'})," and ",(0,r.jsx)(t.code,{children:"backgroundOpacity={0.85}"})," background-color will be ",(0,r.jsx)(t.code,{children:"rgba(0, 0, 0, 0.85)"}),":"]}),"\n",(0,r.jsx)(o,{data:p}),"\n",(0,r.jsx)(t.h2,{id:"gradient",children:"Gradient"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"gradient"})," prop to use background-image instead of background-color. When ",(0,r.jsx)(t.code,{children:"gradient"})," prop is set,\n",(0,r.jsx)(t.code,{children:"color"})," and ",(0,r.jsx)(t.code,{children:"backgroundOpacity"})," props are ignored."]}),"\n",(0,r.jsx)(o,{data:h}),"\n",(0,r.jsx)(t.h2,{id:"blur",children:"Blur"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"blur"})," prop to add ",(0,r.jsx)(t.code,{children:"backdrop-filter: blur({value})"})," styles.\nNote that ",(0,r.jsx)(t.code,{children:"backdrop-filter"})," ",(0,r.jsx)(t.a,{href:"https://caniuse.com/css-backdrop-filter",children:"is not supported in all browsers"}),"."]}),"\n",(0,r.jsx)(o,{data:k}),"\n",(0,r.jsx)(n,{defaultElement:"div",changeToElement:"a",component:"Overlay",withNext:!0})]})}var O=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(j,Object.assign({},e,{children:(0,r.jsx)(M,e)}))};function E(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},47185:function(e,t,o){"use strict";o.d(t,{o:function(){return b}});var r=o(67294),a={root:"m-71ac47fc"},n=o(3154),i=o(30370),c=o(86109),l=o(81110),s=o(8586),d=Object.defineProperty,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,h=(e,t,o)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,m=(e,t)=>{for(var o in t||(t={}))p.call(t,o)&&h(e,o,t[o]);if(u)for(var o of u(t))f.call(t,o)&&h(e,o,t[o]);return e},g=(e,t)=>{var o={};for(var r in e)p.call(e,r)&&0>t.indexOf(r)&&(o[r]=e[r]);if(null!=e&&u)for(var r of u(e))0>t.indexOf(r)&&f.call(e,r)&&(o[r]=e[r]);return o};let y={},x=(0,s.Z)((e,{ratio:t})=>({root:{"--ar-ratio":null==t?void 0:t.toString()}})),b=(0,n.d)((e,t)=>{let o=(0,i.w)("AspectRatio",y,e),{classNames:n,className:s,style:d,styles:u,unstyled:p,vars:f,ratio:h}=o,b=g(o,["classNames","className","style","styles","unstyled","vars","ratio"]),v=(0,c.y)({name:"AspectRatio",classes:a,props:o,className:s,style:d,classNames:n,styles:u,unstyled:p,vars:f,varsResolver:x});return r.createElement(l.x,m(m({ref:t},v("root")),b))});b.classes=a,b.displayName="@mantine/core/AspectRatio"}},function(e){e.O(0,[8992,178,9774,2888,179],function(){return e(e.s=77266)}),_N_E=e.O()}]);