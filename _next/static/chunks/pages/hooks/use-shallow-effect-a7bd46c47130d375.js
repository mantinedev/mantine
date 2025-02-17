(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[55899],{70639:(e,n,l)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-shallow-effect",function(){return l(27518)}])},27518:(e,n,l)=>{"use strict";l.r(n),l.d(n,{default:()=>o});var s=l(31085),i=l(71184),c=l(85954),a=l(38215);let r=(0,c.P)(a.XZ.useShallowEffect);function t(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"use-shallow-effect"})," works exactly like ",(0,s.jsx)(n.code,{children:"useEffect"}),", but performs shallow dependencies comparison instead of referential comparison:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import { useEffect } from 'react';\nimport { useShallowEffect } from '@mantine/hooks';\n\n// Will be called on each render\nuseEffect(() => {}, [{ a: 1 }]);\n\n// Will be called only once\nuseShallowEffect(() => {}, [{ a: 1 }]);\n"})}),"\n",(0,s.jsx)(n.p,{children:"Hook works with primitive values, arrays and objects:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import { useShallowEffect } from '@mantine/hooks';\n\n// Primitive values are handled like in useEffect\nuseShallowEffect(() => {}, [1, 2, 3]);\n\n// Arrays with primitive values will not trigger callback\nuseShallowEffect(() => {}, [[1], [2], [3]]);\n\n// Objects with primitive values will not trigger callback\nuseShallowEffect(() => {}, [{ a: 1 }, { b: 2 }]);\n\n// Arrays with objects will trigger callback since values are not shallow equal\nuseShallowEffect(() => {}, [[{ a: 1 }], [{ b: 2 }]]);\n"})}),"\n",(0,s.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"function useShallowEffect(\n  cb: () => void,\n  dependencies?: React.DependencyList\n): void;\n"})})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,s.jsx)(r,{...e,children:(0,s.jsx)(t,{...e})})}}},e=>{var n=n=>e(e.s=n);e.O(0,[67456,39699,68831,90636,46593,38792],()=>n(70639)),_N_E=e.O()}]);