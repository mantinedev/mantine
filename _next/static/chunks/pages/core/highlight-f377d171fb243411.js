(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5454],{33507:function(t,e,i){"use strict";i.d(e,{Z:function(){return n}});var n=(0,i(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(t,e,i){"use strict";i.d(e,{Z:function(){return n}});var n=(0,i(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(t,e,i){"use strict";i.d(e,{Z:function(){return n}});var n=(0,i(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(t,e,i){"use strict";i.d(e,{Z:function(){return n}});var n=(0,i(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(t,e,i){"use strict";i.d(e,{Z:function(){return n}});var n=(0,i(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(t,e,i){"use strict";i.d(e,{Z:function(){return n}});var n=(0,i(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(t,e,i){"use strict";i.d(e,{Z:function(){return n}});var n=(0,i(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},21918:function(t,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/highlight",function(){return i(8986)}])},8986:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return H}});var n=i(85893),h=i(11151),r=i(19905),a=i(9904),o=i(67294),l=i(62401),s=Object.defineProperty,g=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(t,e,i)=>e in t?s(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,u=(t,e)=>{for(var i in e||(e={}))c.call(e,i)&&p(t,i,e[i]);if(g)for(var i of g(e))d.call(e,i)&&p(t,i,e[i]);return t};let f=`
import { Highlight } from '@mantine/core';

function Demo() {
  return (
    <Highlight{{props}}>
      {{children}}
    </Highlight>
  );
}
`,y={type:"configurator",component:function(t){return o.createElement(l.y,u({maw:400,mx:"auto"},t))},code:f,centered:!0,maxWidth:"100%",controls:[{prop:"color",type:"color",initialValue:"yellow",libraryValue:"yellow"},{prop:"highlight",type:"string",initialValue:"this",libraryValue:null},{prop:"children",type:"string",initialValue:"Highlight This, definitely THIS and also this!",libraryValue:null}]},m=`
import { Highlight } from '@mantine/core';

function Demo() {
  return <Highlight highlight={['this', 'that']}>Highlight this and also that</Highlight>;
}
`,v={type:"code",code:m,component:function(){return o.createElement(l.y,{highlight:["this","that"]},"Highlight this and also that")}},k=`
import { Highlight } from '@mantine/core';

function Demo() {
  return (
    <Highlight
      ta="center"
      highlight={['highlighted', 'default']}
      highlightStyles={{
        backgroundImage:
          'linear-gradient(45deg, var(--mantine-color-cyan-5), var(--mantine-color-indigo-5))',
        fontWeight: 700,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
    >
      You can change styles of highlighted part if you do not like default styles
    </Highlight>
  );
}
`,b={type:"code",code:k,component:function(){return o.createElement(l.y,{ta:"center",highlight:["highlighted","default"],highlightStyles:{backgroundImage:"linear-gradient(45deg, var(--mantine-color-cyan-5), var(--mantine-color-indigo-5))",fontWeight:700,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}},"You can change styles of highlighted part if you do not like default styles")}},x=`
import { Highlight } from '@mantine/core';

function Demo() {
  return (
    <Highlight
      component="a"
      href="https://mantine.dev"
      target="_blank"
      highlight="mantine"
      fw={500}
      c="var(--mantine-color-anchor)"
    >
      Mantine website
    </Highlight>
  );
}

`,j={type:"code",code:x,centered:!0,component:function(){return o.createElement(l.y,{component:"a",href:"https://mantine.dev",target:"_blank",highlight:"mantine",fw:500,c:"var(--mantine-color-anchor)"},"Mantine website")}},w=(0,r.A)(a.us.Highlight);function M(t){let e=Object.assign({h2:"h2",p:"p",code:"code",a:"a"},(0,h.ah)(),t.components),{Demo:i}=e;return i||function(t,e){throw Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(e.p,{children:"Use Highlight component to highlight a substring in a given string with a mark tag."}),"\n",(0,n.jsxs)(e.p,{children:["Pass the main string as children to Highlight component and string part that should be highlighted to ",(0,n.jsx)(e.code,{children:"highlight"})," prop.\nIf the main string does not include ",(0,n.jsx)(e.code,{children:"highlight"})," part, it will be ignored.\n",(0,n.jsx)(e.code,{children:"Highlight"})," ignores trailing whitespace and highlights all matched characters sequences."]}),"\n",(0,n.jsx)(i,{data:y}),"\n",(0,n.jsx)(e.h2,{id:"highlight-multiple-substrings",children:"Highlight multiple substrings"}),"\n",(0,n.jsx)(e.p,{children:"To highlight multiple substrings, provide an array of values:"}),"\n",(0,n.jsx)(i,{data:v}),"\n",(0,n.jsx)(e.h2,{id:"change-highlight-styles",children:"Change highlight styles"}),"\n",(0,n.jsxs)(e.p,{children:["Default ",(0,n.jsx)(e.a,{href:"/core/mark/",children:"Mark"})," styles can be overwritten with ",(0,n.jsx)(e.code,{children:"highlightStyles"})," prop, it accepts either a function with a subscription to theme\nor an object with styles:"]}),"\n",(0,n.jsx)(i,{data:b}),"\n",(0,n.jsx)(e.h2,{id:"text-props",children:"Text props"}),"\n",(0,n.jsxs)(e.p,{children:["Highlight is based on ",(0,n.jsx)(e.a,{href:"/core/text/",children:"Text"})," component, all its props are available:"]}),"\n",(0,n.jsx)(i,{data:j})]})}var H=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(w,Object.assign({},t,{children:(0,n.jsx)(M,t)}))}}},function(t){t.O(0,[8992,178,9774,2888,179],function(){return t(t.s=21918)}),_N_E=t.O()}]);