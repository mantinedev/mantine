(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[15920],{9165:(e,n,i)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-media-query",function(){return i(53092)}])},53092:(e,n,i)=>{"use strict";i.r(n),i.d(n,{default:()=>m});var a=i(31085),o=i(71184),t=i(39735),r=i(76644),d=i(80955);let s={type:"code",code:`
import { Badge } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

function Demo() {
  const matches = useMediaQuery('(min-width: ${(0,t.em)(900)})');

  return (
    <Badge color={matches ? 'teal' : 'red'} variant="filled">
      Breakpoint {matches ? 'matches' : 'does not match'}
    </Badge>
  );
}`,component:function(){let e=(0,d.U)(`(min-width: ${(0,t.em)(900)})`);return(0,a.jsxs)(r.E,{color:e?"teal":"red",variant:"filled",children:["Breakpoint ",e?"matches":"does not match"]})},centered:!0};var c=i(85954),l=i(38215);let h=(0,c.P)(l.XZ.useMediaQuery);function u(e){let n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components},{Demo:i}=n;return i||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"use-media-query"})," subscribes to media queries.\nIt receives a media query as an argument and returns ",(0,a.jsx)(n.code,{children:"true"})," if the given media query matches the current state.\nThe hook relies on ",(0,a.jsx)(n.code,{children:"window.matchMedia()"})," ",(0,a.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia",children:"API"}),"\nand will return ",(0,a.jsx)(n.code,{children:"false"})," if the API is not available, unless an initial value is provided in the second argument."]}),"\n",(0,a.jsxs)(n.p,{children:["Resize browser window to trigger ",(0,a.jsx)(n.code,{children:"window.matchMedia"})," event:"]}),"\n",(0,a.jsx)(i,{data:s}),"\n",(0,a.jsx)(n.h2,{id:"server-side-rendering",children:"Server Side Rendering"}),"\n",(0,a.jsxs)(n.p,{children:["During server side rendering the hook will always return ",(0,a.jsx)(n.code,{children:"false"})," as ",(0,a.jsx)(n.code,{children:"window.matchMedia"})," api is not available,\nif that is not a desired behavior, you can override the initial value:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import { useMediaQuery } from '@mantine/hooks';\n\nfunction Demo() {\n  // Set initial value in second argument and getInitialValueInEffect option to false\n  const matches = useMediaQuery('(max-width: 40em)', true, {\n    getInitialValueInEffect: false,\n  });\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"usemediaqueryoptions-type",children:"UseMediaQueryOptions type"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"@mantine/hooks"})," package exports ",(0,a.jsx)(n.code,{children:"UseMediaQueryOptions"})," type – a type of the second argument of ",(0,a.jsx)(n.code,{children:"useMediaQuery"})," hook."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import { useMediaQuery, UseMediaQueryOptions } from '@mantine/hooks';\n\nconst options: UseMediaQueryOptions = {\n  getInitialValueInEffect: false,\n};\n\nconst matches = useMediaQuery('(max-width: 40em)', true, options);\n"})}),"\n",(0,a.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"function useMediaQuery(\n  query: string,\n  initialValue?: boolean,\n  options?: {\n    getInitialValueInEffect: boolean;\n  }\n): boolean;\n"})})]})}function m(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(h,{...e,children:(0,a.jsx)(u,{...e})})}},76644:(e,n,i)=>{"use strict";i.d(n,{E:()=>p});var a=i(31085);i(14041);var o=i(33450),t=i(7098),r=i(51606),d=i(29686),s=i(69564),c=i(34056),l=i(2453),h={root:"m_347db0ec","root--dot":"m_fbd81e3d",label:"m_5add502a",section:"m_91fdda9b"};let u={},m=(0,t.V)((e,{radius:n,color:i,gradient:a,variant:t,size:d,autoContrast:s})=>{let c=e.variantColorResolver({color:i||e.primaryColor,theme:e,gradient:a,variant:t||"filled",autoContrast:s});return{root:{"--badge-height":(0,o.YC)(d,"badge-height"),"--badge-padding-x":(0,o.YC)(d,"badge-padding-x"),"--badge-fz":(0,o.YC)(d,"badge-fz"),"--badge-radius":void 0===n?void 0:(0,o.nJ)(n),"--badge-bg":i||t?c.background:void 0,"--badge-color":i||t?c.color:void 0,"--badge-bd":i||t?c.border:void 0,"--badge-dot-color":"dot"===t?(0,r.r)(i,e):void 0}}}),p=(0,l.v)((e,n)=>{let i=(0,d.Y)("Badge",u,e),{classNames:o,className:t,style:r,styles:l,unstyled:p,vars:g,radius:f,color:x,gradient:b,leftSection:j,rightSection:v,children:y,variant:w,fullWidth:k,autoContrast:M,circle:_,mod:E,...I}=i,Q=(0,s.I)({name:"Badge",props:i,classes:h,className:t,style:r,classNames:o,styles:l,unstyled:p,vars:g,varsResolver:m});return(0,a.jsxs)(c.a,{variant:w,mod:[{block:k,circle:_,"with-right-section":!!v,"with-left-section":!!j},E],...Q("root",{variant:w}),ref:n,...I,children:[j&&(0,a.jsx)("span",{...Q("section"),"data-position":"left",children:j}),(0,a.jsx)("span",{...Q("label"),children:y}),v&&(0,a.jsx)("span",{...Q("section"),"data-position":"right",children:v})]})});p.classes=h,p.displayName="@mantine/core/Badge"}},e=>{var n=n=>e(e.s=n);e.O(0,[67456,39699,68831,90636,46593,38792],()=>n(9165)),_N_E=e.O()}]);