(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[87304],{20519:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-radial-move",function(){return t(73012)}])},73012:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return u}});var o=t(52322),r=t(45392),i=t(47984),s=t(54078),a=t(15019);let l=(0,s.A)(a.us.useRadialMove);function c(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"use-radial-move"})," hook can be used to create custom radial sliders, for example ",(0,o.jsx)(n.a,{href:"/core/angle-slider",children:"AngleSlider"}),"\ncomponent is based on this hook. It works similar to ",(0,o.jsx)(n.a,{href:"/hooks/use-move",children:"use-move"})," hook."]}),"\n",(0,o.jsx)(n.p,{children:"Example of creating custom radial slider:"}),"\n",(0,o.jsx)(t,{data:i.W}),"\n",(0,o.jsx)(n.h2,{id:"hook-options",children:"Hook options"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"use-radial-move"})," hook accepts 2 arguments:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"A callback function that is called when the value changes"}),"\n",(0,o.jsx)(n.li,{children:"An option object described below"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"export interface UseRadialMoveOptions {\n  /** Number by which value is incremented/decremented with mouse and touch events, `0.01` by default */\n  step?: number;\n\n  /** Called in `onMouseUp` and `onTouchEnd` events with the current value */\n  onChangeEnd?: (value: number) => void;\n\n  /** Called in `onMouseDown` and `onTouchStart` events */\n  onScrubStart?: () => void;\n\n  /** Called in `onMouseUp` and `onTouchEnd` events */\n  onScrubEnd?: () => void;\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"function useRadialMove<T extends HTMLElement = HTMLDivElement>(\n  onChange: (value: number) => void,\n  options?: UseRadialMoveOptions\n): {\n  ref: React.RefObject<T>;\n  active: boolean;\n};\n"})})]})}function u(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(l,{...e,children:(0,o.jsx)(c,{...e})})}},47984:function(e,n,t){"use strict";t.d(n,{W:function(){return a}});var o=t(52322),r=t(2784),i=t(28559),s=t(28994);let a={type:"code",component:function(){let[e,n]=(0,r.useState)(115),{ref:t}=(0,s.M)(n);return(0,o.jsxs)(i.x,{className:"m_7cf02604",ref:t,style:{"--angle":`${e}deg`},children:[(0,o.jsxs)("div",{className:"m_2146908f",children:[e,"\xb0"]}),(0,o.jsx)("div",{className:"m_212db0f4"})]})},code:[{fileName:"Demo.tsx",code:`
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
}`,language:"scss"}],centered:!0}},28994:function(e,n,t){"use strict";t.d(n,{M:function(){return s},w:function(){return i}});var o=t(2784),r=t(82692);function i(e,n){var t,o;let i=(0,r.u)(e,0,360),s=Math.ceil(i/n);return t=s>=i/n?s*n==360?0:s*n:Math.round(i/n)*n,o=n.toString().split(".")[1]?.length||0,parseFloat(t.toFixed(o))}function s(e,{step:n=.01,onChangeEnd:t,onScrubStart:r,onScrubEnd:s}={}){let a=(0,o.useRef)(null),l=(0,o.useRef)(!1),[c,u]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{l.current=!0},[]),(0,o.useEffect)(()=>{let o=(o,r=!1)=>{if(a.current){a.current.style.userSelect="none";let s=i(function(e,n){let t=function(e){let n=e.getBoundingClientRect();return[n.left+n.width/2,n.top+n.height/2]}(n);return 360-(180/Math.PI*Math.atan2(e[0]-t[0],e[1]-t[1])+180)}([o.clientX,o.clientY],a.current),n||1);e(s),r&&t?.(s)}},l=()=>{r?.(),u(!0),document.addEventListener("mousemove",h,!1),document.addEventListener("mouseup",m,!1),document.addEventListener("touchmove",v,{passive:!1}),document.addEventListener("touchend",f,!1)},c=()=>{s?.(),u(!1),document.removeEventListener("mousemove",h,!1),document.removeEventListener("mouseup",m,!1),document.removeEventListener("touchmove",v,!1),document.removeEventListener("touchend",f,!1)},d=e=>{l(),o(e)},h=e=>{o(e)},m=e=>{o(e,!0),c()},v=e=>{e.preventDefault(),o(e.touches[0])},f=e=>{o(e.changedTouches[0],!0),c()},p=e=>{e.preventDefault(),l(),o(e.touches[0])};return a.current?.addEventListener("mousedown",d),a.current?.addEventListener("touchstart",p,{passive:!1}),()=>{a.current&&(a.current.removeEventListener("mousedown",d),a.current.removeEventListener("touchstart",p))}},[e]),{ref:a,active:c}}}},function(e){e.O(0,[61177,66748,61639,92888,49774,40179],function(){return e(e.s=20519)}),_N_E=e.O()}]);