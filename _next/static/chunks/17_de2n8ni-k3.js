(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,n)=>{let o={};for(var a in e)t(o,a,{get:e[a],enumerable:!0});return n||t(o,Symbol.toStringTag,{value:"Module"}),o}])},200814,e=>{"use strict";var t=e.i(852361),n=e.i(191788);function o(e,n){var o,a;let r=(0,t.clamp)(e,0,360),s=Math.ceil(r/n),i=Math.round(r/n);return o=s>=r/n?s*n==360?0:s*n:i*n,a=n.toString().split(".")[1]?.length||0,parseFloat(o.toFixed(a))}e.s(["normalizeRadialValue",0,o,"useRadialMove",0,function(e,{step:t=.01,onChangeEnd:a,onScrubStart:r,onScrubEnd:s}={}){let[i,l]=(0,n.useState)(!1),d=(0,n.useRef)(null);return(0,n.useEffect)(()=>()=>{d.current?.()},[]),{ref:(0,n.useCallback)(n=>{let i=(r,s=!1)=>{if(n){var i;let l,d;n.style.userSelect="none";let c=o((i=[r.clientX,r.clientY],360-(180/Math.PI*Math.atan2(i[0]-(d=[(l=n.getBoundingClientRect()).left+l.width/2,l.top+l.height/2])[0],i[1]-d[1])+180)),t||1);e(c),s&&a?.(c)}},c=()=>{r?.(),l(!0),document.addEventListener("mousemove",v,!1),document.addEventListener("mouseup",h,!1),document.addEventListener("touchmove",p,{passive:!1}),document.addEventListener("touchend",f,!1)},u=()=>{s?.(),l(!1),document.removeEventListener("mousemove",v,!1),document.removeEventListener("mouseup",h,!1),document.removeEventListener("touchmove",p,!1),document.removeEventListener("touchend",f,!1)},m=e=>{c(),i(e)},v=e=>{i(e)},h=e=>{i(e,!0),u()},p=e=>{e.preventDefault(),i(e.touches[0])},f=e=>{i(e.changedTouches[0],!0),u()},g=e=>{e.preventDefault(),c(),i(e.touches[0])};return n?.addEventListener("mousedown",m),n?.addEventListener("touchstart",g,{passive:!1}),d.current=()=>{document.removeEventListener("mousemove",v,!1),document.removeEventListener("mouseup",h,!1),document.removeEventListener("touchmove",p,!1),document.removeEventListener("touchend",f,!1)},()=>{n&&(n.removeEventListener("mousedown",m),n.removeEventListener("touchstart",g))}},[e]),active:i}}])},883537,e=>{"use strict";var t=e.i(648863),n=e.i(191788),o=e.i(232471),a=e.i(391398),r=e.i(200814);let s={type:"code",component:function(){let[e,t]=(0,n.useState)(115),{ref:s}=(0,r.useRadialMove)(t);return(0,a.jsxs)(o.Box,{className:"m_7cf02604",ref:s,style:{"--angle":`${e}deg`},children:[(0,a.jsxs)("div",{className:"m_2146908f",children:[e,"°"]}),(0,a.jsx)("div",{className:"m_212db0f4"})]})},code:[{fileName:"Demo.tsx",code:`
import { useState } from 'react';
import { Box } from '@mantine/core';
import { useRadialMove } from '@mantine/hooks';
import classes from './Demo.module.css';

function Demo() {
  const [value, setValue] = useState(115);
  const { ref } = useRadialMove(setValue);

  return (
    <Box className={classes.root} ref={ref} style={{ '--angle': \`\${value}deg\` }}>
      <div className={classes.value}>{value}\xb0</div>
      <div className={classes.thumb} />
    </Box>
  );
}
`,language:"tsx"},{fileName:"Demo.module.css",code:`.root {
  position: relative;
  width: 160px;
  height: 160px;
  border-radius: 160px;
  display: flex;
  align-items: center;
  justify-content: center;

  --empty-color: light-dark(var(--mantine-color-gray-2), var(--mantine-color-dark-6));
  --filled-color: light-dark(var(--mantine-color-blue-6), var(--mantine-color-blue-8));

  background-image: conic-gradient(
    var(--filled-color) 0deg,
    var(--filled-color) var(--angle, 0deg),
    var(--empty-color) var(--angle, 0deg)
  );
}

.value {
  background-color: var(--mantine-color-body);
  width: 132px;
  height: 132px;
  border-radius: 132px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.thumb {
  position: absolute;
  width: 14px;
  height: 160px;
  transform: rotate(var(--angle, 0deg));

  &::before {
    content: '';
    position: absolute;
    width: 14px;
    height: 14px;
    background-color: light-dark(var(--mantine-color-white), var(--filled-color));
    border: 2px solid light-dark(var(--filled-color), var(--mantine-color-white));
    border-radius: 50%;
    left: 50%;
    transform: translateX(-50%);
  }
}`,language:"scss"}],centered:!0};var i=(0,t.__exportAll)({usage:()=>s});e.s(["UseRadialMoveDemos",0,i],883537)},28010,e=>{"use strict";var t=e.i(391398),n=e.i(38856),o=e.i(883537);e.i(603441);var a=e.i(62558);e.i(457450);var r=e.i(418026);let s=(0,a.Layout)(r.MDX_DATA.useRadialMove);function i(e){let a={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.useMDXComponents)(),...e.components},{Demo:r}=a;return r||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(a.p,{children:["The ",(0,t.jsx)(a.code,{children:"use-radial-move"})," hook can be used to create custom radial sliders. For example, the ",(0,t.jsx)(a.a,{href:"/core/angle-slider",children:"AngleSlider"}),"\ncomponent is based on this hook. It works similarly to the ",(0,t.jsx)(a.a,{href:"/hooks/use-move",children:"use-move"})," hook."]}),"\n",(0,t.jsx)(a.p,{children:"Example of creating a custom radial slider:"}),"\n",(0,t.jsx)(r,{data:o.UseRadialMoveDemos.usage}),"\n",(0,t.jsx)(a.h2,{id:"definition",children:"Definition"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-tsx",children:"interface UseRadialMoveOptions {\n  /** Number by which value is incremented/decremented with mouse and touch events, `0.01` by default */\n  step?: number;\n\n  /** Called in `onMouseUp` and `onTouchEnd` events with the current value */\n  onChangeEnd?: (value: number) => void;\n\n  /** Called in `onMouseDown` and `onTouchStart` events */\n  onScrubStart?: () => void;\n\n  /** Called in `onMouseUp` and `onTouchEnd` events */\n  onScrubEnd?: () => void;\n}\n\ninterface UseRadialMoveReturnValue<T extends HTMLElement = any> {\n  /** Ref to be passed to the element that should be used for radial move */\n  ref: React.RefCallback<T | null>;\n\n  /** Indicates whether the radial move is active */\n  active: boolean;\n}\n\nfunction useRadialMove<T extends HTMLElement = HTMLDivElement>(\n  onChange: (value: number) => void,\n  options?: UseRadialMoveOptions,\n): UseRadialMoveReturnValue<T>;\n"})}),"\n",(0,t.jsx)(a.h2,{id:"exported-types",children:"Exported types"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"UseRadialMoveOptions"})," and ",(0,t.jsx)(a.code,{children:"UseRadialMoveReturnValue"})," types are exported from the ",(0,t.jsx)(a.code,{children:"@mantine/hooks"})," package;\nyou can import them in your application:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-tsx",children:"import type { UseRadialMoveOptions, UseRadialMoveReturnValue } from '@mantine/hooks';\n"})})]})}e.s(["default",0,function(e={}){return(0,t.jsx)(s,{...e,children:(0,t.jsx)(i,{...e})})}])},454480,(e,t,n)=>{let o="/hooks/use-radial-move";(window.__NEXT_P=window.__NEXT_P||[]).push([o,()=>e.r(28010)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([o])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);