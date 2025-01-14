(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[35454],{29774:function(t,i,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/highlight",function(){return e(15068)}])},15068:function(t,i,e){"use strict";e.r(i),e.d(i,{default:function(){return p}});var n=e(52322),h=e(45392),r=e(52286);let o={type:"configurator",component:function(t){return(0,n.jsx)(r.y,{maw:400,mx:"auto",...t})},code:`
import { Highlight } from '@mantine/core';

function Demo() {
  return (
    <Highlight{{props}}>
      {{children}}
    </Highlight>
  );
}
`,centered:!0,maxWidth:"100%",controls:[{prop:"color",type:"color",initialValue:"yellow",libraryValue:"yellow"},{prop:"highlight",type:"string",initialValue:"this",libraryValue:null},{prop:"children",type:"string",initialValue:"Highlight This, definitely THIS and also this!",libraryValue:null}]},l={type:"code",code:`
import { Highlight } from '@mantine/core';

function Demo() {
  return <Highlight highlight={['this', 'that']}>Highlight this and also that</Highlight>;
}
`,component:function(){return(0,n.jsx)(r.y,{highlight:["this","that"],children:"Highlight this and also that"})}},a={type:"code",code:`
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
`,component:function(){return(0,n.jsx)(r.y,{ta:"center",highlight:["highlighted","default"],highlightStyles:{backgroundImage:"linear-gradient(45deg, var(--mantine-color-cyan-5), var(--mantine-color-indigo-5))",fontWeight:700,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"You can change styles of highlighted part if you do not like default styles"})}},g={type:"code",code:`
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

`,centered:!0,component:function(){return(0,n.jsx)(r.y,{component:"a",href:"https://mantine.dev",target:"_blank",highlight:"mantine",fw:500,c:"var(--mantine-color-anchor)",children:"Mantine website"})}};var s=e(54078),c=e(15019);let d=(0,s.A)(c.us.Highlight);function u(t){let i={a:"a",code:"code",h2:"h2",p:"p",...(0,h.a)(),...t.components},{Demo:e}=i;return e||function(t,i){throw Error("Expected "+(i?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(i.p,{children:"Use Highlight component to highlight a substring in a given string with a mark tag."}),"\n",(0,n.jsxs)(i.p,{children:["Pass the main string as children to Highlight component and string part that should be highlighted to ",(0,n.jsx)(i.code,{children:"highlight"})," prop.\nIf the main string does not include ",(0,n.jsx)(i.code,{children:"highlight"})," part, it will be ignored.\n",(0,n.jsx)(i.code,{children:"Highlight"})," ignores trailing whitespace and highlights all matched characters sequences."]}),"\n",(0,n.jsx)(e,{data:o}),"\n",(0,n.jsx)(i.h2,{id:"highlight-multiple-substrings",children:"Highlight multiple substrings"}),"\n",(0,n.jsx)(i.p,{children:"To highlight multiple substrings, provide an array of values:"}),"\n",(0,n.jsx)(e,{data:l}),"\n",(0,n.jsx)(i.h2,{id:"change-highlight-styles",children:"Change highlight styles"}),"\n",(0,n.jsxs)(i.p,{children:["Default ",(0,n.jsx)(i.a,{href:"/core/mark/",children:"Mark"})," styles can be overwritten with ",(0,n.jsx)(i.code,{children:"highlightStyles"})," prop, it accepts either a function with a subscription to theme\nor an object with styles:"]}),"\n",(0,n.jsx)(e,{data:a}),"\n",(0,n.jsx)(i.h2,{id:"text-props",children:"Text props"}),"\n",(0,n.jsxs)(i.p,{children:["Highlight is based on ",(0,n.jsx)(i.a,{href:"/core/text/",children:"Text"})," component, all its props are available:"]}),"\n",(0,n.jsx)(e,{data:g})]})}function p(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(d,{...t,children:(0,n.jsx)(u,{...t})})}}},function(t){t.O(0,[61177,66748,61639,92888,49774,40179],function(){return t(t.s=29774)}),_N_E=t.O()}]);