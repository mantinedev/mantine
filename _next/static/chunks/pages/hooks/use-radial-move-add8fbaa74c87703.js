(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[44294],{1798:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});let a=(0,n(41495).A)("outline","license","License",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},6620:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});let a=(0,n(41495).A)("outline","code","Code",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},6892:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});let a=(0,n(41495).A)("outline","pencil","Pencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},24583:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});let a=(0,n(41495).A)("outline","arrow-left","ArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},34891:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});let a=(0,n(41495).A)("outline","adjustments","Adjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},39181:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-radial-move",function(){return n(53165)}])},41949:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});let a=(0,n(41495).A)("outline","calendar","Calendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},53165:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>c});var a=n(6029),o=n(16285),s=n(60140),r=n(38547),l=n(5262);let d=(0,r.P)(l.XZ.useRadialMove);function i(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"use-radial-move"})," hook can be used to create custom radial sliders, for example ",(0,a.jsx)(t.a,{href:"/core/angle-slider",children:"AngleSlider"}),"\ncomponent is based on this hook. It works similar to ",(0,a.jsx)(t.a,{href:"/hooks/use-move",children:"use-move"})," hook."]}),"\n",(0,a.jsx)(t.p,{children:"Example of creating custom radial slider:"}),"\n",(0,a.jsx)(n,{data:s.P}),"\n",(0,a.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"interface UseRadialMoveOptions {\n  /** Number by which value is incremented/decremented with mouse and touch events, `0.01` by default */\n  step?: number;\n\n  /** Called in `onMouseUp` and `onTouchEnd` events with the current value */\n  onChangeEnd?: (value: number) => void;\n\n  /** Called in `onMouseDown` and `onTouchStart` events */\n  onScrubStart?: () => void;\n\n  /** Called in `onMouseUp` and `onTouchEnd` events */\n  onScrubEnd?: () => void;\n}\n\ninterface UseRadialMoveReturnValue<T extends HTMLElement = any> {\n  /** Ref to be passed to the element that should be used for radial move */\n  ref: React.RefCallback<T | null>;\n\n  /** Indicates whether the radial move is active */\n  active: boolean;\n}\n\nfunction useRadialMove<T extends HTMLElement = HTMLDivElement>(\n  onChange: (value: number) => void,\n  options?: UseRadialMoveOptions,\n): UseRadialMoveReturnValue<T>;\n"})}),"\n",(0,a.jsx)(t.h2,{id:"exported-types",children:"Exported types"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"UseRadialMoveOptions"})," and ",(0,a.jsx)(t.code,{children:"UseRadialMoveReturnValue"})," types are exported from ",(0,a.jsx)(t.code,{children:"@mantine/hooks"})," package,\nyou can import them in your application:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import type { UseRadialMoveOptions, UseRadialMoveReturnValue } from '@mantine/hooks';\n"})})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(d,{...e,children:(0,a.jsx)(i,{...e})})}},56302:(e,t,n)=>{"use strict";n.d(t,{R:()=>r,i:()=>s});var a=n(55729),o=n(38744);function s(e,t){var n,a;let s=(0,o.q)(e,0,360),r=Math.ceil(s/t),l=Math.round(s/t);return n=r>=s/t?r*t==360?0:r*t:l*t,a=t.toString().split(".")[1]?.length||0,parseFloat(n.toFixed(a))}function r(e,{step:t=.01,onChangeEnd:n,onScrubStart:o,onScrubEnd:l}={}){let d=(0,a.useRef)(!1),[i,c]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{d.current=!0},[]),{ref:(0,a.useCallback)(a=>{let r=(o,r=!1)=>{if(a){a.style.userSelect="none";let l=s(function(e,t){let n=function(e){let t=e.getBoundingClientRect();return[t.left+t.width/2,t.top+t.height/2]}(t);return 360-(180/Math.PI*Math.atan2(e[0]-n[0],e[1]-n[1])+180)}([o.clientX,o.clientY],a),t||1);e(l),r&&n?.(l)}},d=()=>{o?.(),c(!0),document.addEventListener("mousemove",h,!1),document.addEventListener("mouseup",v,!1),document.addEventListener("touchmove",p,{passive:!1}),document.addEventListener("touchend",m,!1)},i=()=>{l?.(),c(!1),document.removeEventListener("mousemove",h,!1),document.removeEventListener("mouseup",v,!1),document.removeEventListener("touchmove",p,!1),document.removeEventListener("touchend",m,!1)},u=e=>{d(),r(e)},h=e=>{r(e)},v=e=>{r(e,!0),i()},p=e=>{e.preventDefault(),r(e.touches[0])},m=e=>{r(e.changedTouches[0],!0),i()},g=e=>{e.preventDefault(),d(),r(e.touches[0])};return a?.addEventListener("mousedown",u),a?.addEventListener("touchstart",g,{passive:!1}),()=>{a&&(a.removeEventListener("mousedown",u),a.removeEventListener("touchstart",g))}},[e]),active:i}}},60140:(e,t,n)=>{"use strict";n.d(t,{P:()=>d});var a=n(6029),o=n(55729),s=n(76320),r=n(56302),l={root:"m_7cf02604",value:"m_2146908f",thumb:"m_212db0f4"};let d={type:"code",component:function(){let[e,t]=(0,o.useState)(115),{ref:n}=(0,r.R)(t);return(0,a.jsxs)(s.a,{className:l.root,ref:n,style:{"--angle":`${e}deg`},children:[(0,a.jsxs)("div",{className:l.value,children:[e,"\xb0"]}),(0,a.jsx)("div",{className:l.thumb})]})},code:[{fileName:"Demo.tsx",code:`
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
}`,language:"scss"}],centered:!0}},65433:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});let a=(0,n(41495).A)("outline","switch-2","Switch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},84276:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});let a=(0,n(41495).A)("outline","file-text","FileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},88992:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});let a=(0,n(41495).A)("outline","arrow-right","ArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])}},e=>{e.O(0,[38547,90636,46593,38792],()=>e(e.s=39181)),_N_E=e.O()}]);