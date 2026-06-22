(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var i=Object.defineProperty;e.s(["__exportAll",0,(e,t)=>{let h={};for(var n in e)i(h,n,{get:e[n],enumerable:!0});return t||i(h,Symbol.toStringTag,{value:"Module"}),h}])},94922,e=>{"use strict";var i=e.i(648863),t=e.i(754067),h=e.i(671640),n=e.i(883364),s=e.i(391398);let l={type:"code",code:`
import { Highlight, Stack, Text } from '@mantine/core';

function Demo() {
  return (
    <Stack gap="md">
      <div>
        <Text size="sm" fw={500} mb={5}>
          With accent-insensitive matching (default)
        </Text>
        <Highlight highlight="cafe">We visited caf\xe9 and cafe.</Highlight>
      </div>

      <div>
        <Text size="sm" fw={500} mb={5}>
          {'With accent-sensitive matching (accentInsensitive={false})'}
        </Text>
        <Highlight highlight="cafe" accentInsensitive={false}>
          We visited caf\xe9 and cafe.
        </Highlight>
      </div>
    </Stack>
  );
}
`,component:function(){return(0,s.jsxs)(h.Stack,{gap:"md",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)(n.Text,{size:"sm",fw:500,mb:5,children:"With accent-insensitive matching (default)"}),(0,s.jsx)(t.Highlight,{highlight:"cafe",children:"We visited café and cafe."})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(n.Text,{size:"sm",fw:500,mb:5,children:"With accent-sensitive matching (accentInsensitive={false})"}),(0,s.jsx)(t.Highlight,{highlight:"cafe",accentInsensitive:!1,children:"We visited café and cafe."})]})]})}},r={type:"code",code:`
import { Highlight, Stack, Text } from '@mantine/core';

function Demo() {
  return (
    <Stack gap="md">
      <div>
        <Text size="sm" fw={500} mb={5}>
          With case-insensitive matching (default)
        </Text>
        <Highlight highlight="this">Highlight This, definitely THIS and also this!</Highlight>
      </div>

      <div>
        <Text size="sm" fw={500} mb={5}>
          {'With case-sensitive matching (caseInsensitive={false})'}
        </Text>
        <Highlight highlight="this" caseInsensitive={false}>
          Highlight This, definitely THIS and also this!
        </Highlight>
      </div>
    </Stack>
  );
}
`,component:function(){return(0,s.jsxs)(h.Stack,{gap:"md",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)(n.Text,{size:"sm",fw:500,mb:5,children:"With case-insensitive matching (default)"}),(0,s.jsx)(t.Highlight,{highlight:"this",children:"Highlight This, definitely THIS and also this!"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(n.Text,{size:"sm",fw:500,mb:5,children:"With case-sensitive matching (caseInsensitive={false})"}),(0,s.jsx)(t.Highlight,{highlight:"this",caseInsensitive:!1,children:"Highlight This, definitely THIS and also this!"})]})]})}},c={type:"code",code:`
import { Highlight } from '@mantine/core';

function Demo() {
  return (
    <Highlight
      highlight={[
        { text: 'error', color: 'red' },
        { text: 'warning', color: 'yellow' },
        { text: 'success', color: 'green' },
      ]}
    >
      Error: Invalid input. Warning: Check this field. Success: All tests passed.
    </Highlight>
  );
}
`,component:function(){return(0,s.jsx)(t.Highlight,{highlight:[{text:"error",color:"red"},{text:"warning",color:"yellow"},{text:"success",color:"green"}],children:"Error: Invalid input. Warning: Check this field. Success: All tests passed."})}},o={type:"code",code:`
import { Highlight } from '@mantine/core';

function Demo() {
  return <Highlight highlight={['this', 'that']}>Highlight this and also that</Highlight>;
}
`,component:function(){return(0,s.jsx)(t.Highlight,{highlight:["this","that"],children:"Highlight this and also that"})}},a={type:"code",code:`
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

`,centered:!0,component:function(){return(0,s.jsx)(t.Highlight,{component:"a",href:"https://mantine.dev",target:"_blank",highlight:"mantine",fw:500,c:"var(--mantine-color-anchor)",children:"Mantine website"})}},g={type:"code",code:`
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
`,component:function(){return(0,s.jsx)(t.Highlight,{ta:"center",highlight:["highlighted","default"],highlightStyles:{backgroundImage:"linear-gradient(45deg, var(--mantine-color-cyan-5), var(--mantine-color-indigo-5))",fontWeight:700,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"You can change styles of highlighted part if you do not like default styles"})}},d={type:"configurator",component:function(e){return(0,s.jsx)(t.Highlight,{maw:400,mx:"auto",...e})},code:`
import { Highlight } from '@mantine/core';

function Demo() {
  return (
    <Highlight{{props}}>
      {{children}}
    </Highlight>
  );
}
`,centered:!0,maxWidth:"100%",controls:[{prop:"color",type:"color",initialValue:"yellow",libraryValue:"yellow"},{prop:"highlight",type:"string",initialValue:"this",libraryValue:null},{prop:"children",type:"string",initialValue:"Highlight This, definitely THIS and also this!",libraryValue:null}]},m={type:"code",code:`
import { Highlight, Stack, Text } from '@mantine/core';

function Demo() {
  return (
    <Stack gap="md">
      <div>
        <Text size="sm" fw={500} mb={5}>
          With whole word matching (wholeWord={'{'}true{'}'})
        </Text>
        <Highlight highlight="the" wholeWord>
          The theme is there
        </Highlight>
      </div>

      <div>
        <Text size="sm" fw={500} mb={5}>
          Without whole word matching (default)
        </Text>
        <Highlight highlight="the">The theme is there</Highlight>
      </div>
    </Stack>
  );
}
`,component:function(){return(0,s.jsxs)(h.Stack,{gap:"md",children:[(0,s.jsxs)("div",{children:[(0,s.jsxs)(n.Text,{size:"sm",fw:500,mb:5,children:["With whole word matching (wholeWord=","{","true","}",")"]}),(0,s.jsx)(t.Highlight,{highlight:"the",wholeWord:!0,children:"The theme is there"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(n.Text,{size:"sm",fw:500,mb:5,children:"Without whole word matching (default)"}),(0,s.jsx)(t.Highlight,{highlight:"the",children:"The theme is there"})]})]})}};var x=(0,i.__exportAll)({accentInsensitive:()=>l,caseInsensitive:()=>r,colors:()=>c,multiple:()=>o,props:()=>a,styles:()=>g,usage:()=>d,wholeword:()=>m});e.s(["HighlightDemos",0,x],94922)},63378,e=>{"use strict";var i=e.i(391398),t=e.i(38856),h=e.i(94922);e.i(603441);var n=e.i(62558);e.i(457450);var s=e.i(418026);let l=(0,n.Layout)(s.MDX_DATA.Highlight);function r(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.useMDXComponents)(),...e.components},{Demo:s}=n;return s||function(e,i){throw Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsxs)(n.p,{children:["Use the Highlight component to highlight substrings within text using the HTML ",(0,i.jsx)(n.code,{children:"<mark>"})," element."]}),"\n",(0,i.jsxs)(n.p,{children:["Pass the text as children and specify which substring(s) to highlight with the ",(0,i.jsx)(n.code,{children:"highlight"})," prop.\nMatching is ",(0,i.jsx)(n.strong,{children:"case-insensitive"})," and ",(0,i.jsx)(n.strong,{children:"accent-insensitive"})," by default, and highlights all occurrences\nof the matched substring. Use the ",(0,i.jsx)(n.code,{children:"caseInsensitive"})," and ",(0,i.jsx)(n.code,{children:"accentInsensitive"})," props to opt out."]}),"\n",(0,i.jsx)(s,{data:h.HighlightDemos.usage}),"\n",(0,i.jsx)(n.h2,{id:"matching-behavior",children:"Matching behavior"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Case-insensitive"}),": 'hello' matches 'Hello', 'HELLO', 'hElLo', etc. (controlled by ",(0,i.jsx)(n.code,{children:"caseInsensitive"}),", defaults to ",(0,i.jsx)(n.code,{children:"true"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Accent-insensitive"}),": 'cafe' matches 'café', 'cafè', 'CAFÉ', etc. (controlled by ",(0,i.jsx)(n.code,{children:"accentInsensitive"}),", defaults to ",(0,i.jsx)(n.code,{children:"true"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"All occurrences"}),": Every instance of the matched substring is highlighted"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Special characters"}),": Regex special characters like ",(0,i.jsx)(n.code,{children:"["}),", ",(0,i.jsx)(n.code,{children:"]"}),", ",(0,i.jsx)(n.code,{children:"("}),", ",(0,i.jsx)(n.code,{children:")"})," are automatically escaped and treated as literal text"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Whitespace"}),": Leading and trailing whitespace in highlight strings is trimmed and ignored"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Empty strings"}),": Empty or whitespace-only highlight strings are ignored"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"case-sensitive-matching",children:"Case-sensitive matching"}),"\n",(0,i.jsxs)(n.p,{children:["Set ",(0,i.jsx)(n.code,{children:"caseInsensitive={false}"})," to only match substrings with the same casing as the highlight term:"]}),"\n",(0,i.jsx)(s,{data:h.HighlightDemos.caseInsensitive}),"\n",(0,i.jsx)(n.h2,{id:"accent-sensitive-matching",children:"Accent-sensitive matching"}),"\n",(0,i.jsxs)(n.p,{children:["Set ",(0,i.jsx)(n.code,{children:"accentInsensitive={false}"})," to require accented characters in the text to match the highlight term exactly:"]}),"\n",(0,i.jsx)(s,{data:h.HighlightDemos.accentInsensitive}),"\n",(0,i.jsx)(n.h2,{id:"highlight-multiple-substrings",children:"Highlight multiple substrings"}),"\n",(0,i.jsx)(n.p,{children:"To highlight multiple substrings, provide an array of values.\nWhen multiple substrings are provided, longer matches take precedence to avoid partial overlaps."}),"\n",(0,i.jsx)(s,{data:h.HighlightDemos.multiple}),"\n",(0,i.jsx)(n.h2,{id:"custom-colors-per-term",children:"Custom colors per term"}),"\n",(0,i.jsxs)(n.p,{children:["You can assign different colors to different highlighted terms by providing an array of objects with ",(0,i.jsx)(n.code,{children:"text"})," and ",(0,i.jsx)(n.code,{children:"color"})," properties:"]}),"\n",(0,i.jsx)(s,{data:h.HighlightDemos.colors}),"\n",(0,i.jsx)(n.h2,{id:"whole-word-matching",children:"Whole word matching"}),"\n",(0,i.jsxs)(n.p,{children:["Use the ",(0,i.jsx)(n.code,{children:"wholeWord"})," prop to match only complete words. When enabled, 'the' will not match 'there' or 'theme':"]}),"\n",(0,i.jsx)(s,{data:h.HighlightDemos.wholeword}),"\n",(0,i.jsx)(n.h2,{id:"change-highlight-styles",children:"Change highlight styles"}),"\n",(0,i.jsxs)(n.p,{children:["Default ",(0,i.jsx)(n.a,{href:"/core/mark/",children:"Mark"})," styles can be overwritten with the ",(0,i.jsx)(n.code,{children:"highlightStyles"})," prop,\nwhich accepts either an object with styles or a function that receives the theme as a parameter and returns styles:"]}),"\n",(0,i.jsx)(s,{data:h.HighlightDemos.styles}),"\n",(0,i.jsx)(n.h2,{id:"text-props",children:"Text props"}),"\n",(0,i.jsxs)(n.p,{children:["Highlight is based on the ",(0,i.jsx)(n.a,{href:"/core/text/",children:"Text"})," component - all Text props except ",(0,i.jsx)(n.code,{children:"color"})," are available.\nUse the ",(0,i.jsx)(n.code,{children:"color"})," prop to change the highlight background color, not the text color."]}),"\n",(0,i.jsx)(s,{data:h.HighlightDemos.props})]})}e.s(["default",0,function(e={}){return(0,i.jsx)(l,{...e,children:(0,i.jsx)(r,{...e})})}])},152723,(e,i,t)=>{let h="/core/highlight";(window.__NEXT_P=window.__NEXT_P||[]).push([h,()=>e.r(63378)]),i.hot&&i.hot.dispose(function(){window.__NEXT_P.push([h])})},648761,e=>{e.v(i=>Promise.all(["static/chunks/22379_btw709h.js"].map(i=>e.l(i))).then(()=>i(493594)))},828805,e=>{e.v(i=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(i=>e.l(i))).then(()=>i(879466)))}]);