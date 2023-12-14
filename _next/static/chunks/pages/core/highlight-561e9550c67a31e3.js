(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5454],{55255:function(t,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/highlight",function(){return i(4521)}])},4521:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return b}});var n=i(24246),h=i(71670),r=i(27378),o=i(26853);let l=`
import { Highlight } from '@mantine/core';

function Demo() {
  return (
    <Highlight{{props}}>
      {{children}}
    </Highlight>
  );
}
`,a={type:"configurator",component:function(t){return r.createElement(o.y,{maw:400,mx:"auto",...t})},code:l,centered:!0,maxWidth:"100%",controls:[{prop:"color",type:"color",initialValue:"yellow",libraryValue:"yellow"},{prop:"highlight",type:"string",initialValue:"this",libraryValue:null},{prop:"children",type:"string",initialValue:"Highlight This, definitely THIS and also this!",libraryValue:null}]},g=`
import { Highlight } from '@mantine/core';

function Demo() {
  return <Highlight highlight={['this', 'that']}>Highlight this and also that</Highlight>;
}
`,c={type:"code",code:g,component:function(){return r.createElement(o.y,{highlight:["this","that"]},"Highlight this and also that")}},s=`
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
`,d={type:"code",code:s,component:function(){return r.createElement(o.y,{ta:"center",highlight:["highlighted","default"],highlightStyles:{backgroundImage:"linear-gradient(45deg, var(--mantine-color-cyan-5), var(--mantine-color-indigo-5))",fontWeight:700,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}},"You can change styles of highlighted part if you do not like default styles")}},u=`
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

`,p={type:"code",code:u,centered:!0,component:function(){return r.createElement(o.y,{component:"a",href:"https://mantine.dev",target:"_blank",highlight:"mantine",fw:500,c:"var(--mantine-color-anchor)"},"Mantine website")}};var m=i(3916),f=i(30289);let y=(0,m.A)(f.us.Highlight);function x(t){let e={a:"a",code:"code",h2:"h2",p:"p",...(0,h.a)(),...t.components},{Demo:i}=e;return i||function(t,e){throw Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(e.p,{children:"Use Highlight component to highlight a substring in a given string with a mark tag."}),"\n",(0,n.jsxs)(e.p,{children:["Pass the main string as children to Highlight component and string part that should be highlighted to ",(0,n.jsx)(e.code,{children:"highlight"})," prop.\nIf the main string does not include ",(0,n.jsx)(e.code,{children:"highlight"})," part, it will be ignored.\n",(0,n.jsx)(e.code,{children:"Highlight"})," ignores trailing whitespace and highlights all matched characters sequences."]}),"\n",(0,n.jsx)(i,{data:a}),"\n",(0,n.jsx)(e.h2,{id:"highlight-multiple-substrings",children:"Highlight multiple substrings"}),"\n",(0,n.jsx)(e.p,{children:"To highlight multiple substrings, provide an array of values:"}),"\n",(0,n.jsx)(i,{data:c}),"\n",(0,n.jsx)(e.h2,{id:"change-highlight-styles",children:"Change highlight styles"}),"\n",(0,n.jsxs)(e.p,{children:["Default ",(0,n.jsx)(e.a,{href:"/core/mark/",children:"Mark"})," styles can be overwritten with ",(0,n.jsx)(e.code,{children:"highlightStyles"})," prop, it accepts either a function with a subscription to theme\nor an object with styles:"]}),"\n",(0,n.jsx)(i,{data:d}),"\n",(0,n.jsx)(e.h2,{id:"text-props",children:"Text props"}),"\n",(0,n.jsxs)(e.p,{children:["Highlight is based on ",(0,n.jsx)(e.a,{href:"/core/text/",children:"Text"})," component, all its props are available:"]}),"\n",(0,n.jsx)(i,{data:p})]})}function b(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(y,{...t,children:(0,n.jsx)(x,{...t})})}}},function(t){t.O(0,[370,5819,2775,9774,2888,179],function(){return t(t.s=55255)}),_N_E=t.O()}]);