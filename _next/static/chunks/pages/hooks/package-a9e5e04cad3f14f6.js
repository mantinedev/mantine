(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[22301],{1798:(e,a,t)=>{"use strict";t.d(a,{A:()=>s});let s=(0,t(41495).A)("outline","license","License",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},2485:(e,a,t)=>{"use strict";t.d(a,{A:()=>s});let s=(0,t(41495).A)("outline","grip-vertical","GripVertical",[["path",{d:"M9 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-0"}],["path",{d:"M9 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-1"}],["path",{d:"M9 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-2"}],["path",{d:"M15 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-3"}],["path",{d:"M15 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-4"}],["path",{d:"M15 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-5"}]])},6620:(e,a,t)=>{"use strict";t.d(a,{A:()=>s});let s=(0,t(41495).A)("outline","code","Code",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},6892:(e,a,t)=>{"use strict";t.d(a,{A:()=>s});let s=(0,t(41495).A)("outline","pencil","Pencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},24583:(e,a,t)=>{"use strict";t.d(a,{A:()=>s});let s=(0,t(41495).A)("outline","arrow-left","ArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},34891:(e,a,t)=>{"use strict";t.d(a,{A:()=>s});let s=(0,t(41495).A)("outline","adjustments","Adjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},36549:(e,a,t)=>{"use strict";t.d(a,{x:()=>r});var s=t(6029),i=t(55729),l=t(2485),n=t(24854),o=t(38744),d={root:"m_1e8dea5f",track:"m_b34cb76e",filled:"m_9decab9f",empty:"m_b2774b70",thumb:"m_b34877f9",label:"m_b2d44517"};let r={type:"code",component:function(){let[e,a]=(0,i.useState)(.3),{ref:t}=(0,n.f)(({x:e})=>a((0,o.q)(e,.1,.9))),r=e<.2||e>.8;return(0,s.jsx)("div",{className:d.root,children:(0,s.jsxs)("div",{className:d.track,ref:t,children:[(0,s.jsx)("div",{className:d.filled,style:{width:`calc(${100*e}% - var(--thumb-width) / 2 - var(--thumb-offset) / 2)`},children:(0,s.jsx)("span",{className:d.label,"data-floating":r||void 0,"data-filled":!0,children:(100*e).toFixed(0)})}),(0,s.jsx)("div",{className:d.empty,style:{width:`calc(${(1-e)*100}% - var(--thumb-width) / 2 - var(--thumb-offset) / 2)`},children:(0,s.jsx)("span",{className:d.label,"data-floating":r||void 0,children:((1-e)*100).toFixed(0)})}),(0,s.jsx)("div",{className:d.thumb,style:{left:`calc(${100*e}% - var(--thumb-width) / 2)`},children:(0,s.jsx)(l.A,{stroke:1.5})})]})})},code:[{fileName:"Demo.tsx",code:`
import { useState } from 'react';
import { IconGripVertical } from '@tabler/icons-react';
import { clamp, useMove } from '@mantine/hooks';
import classes from './Demo.module.css';

function Demo() {
  const [value, setValue] = useState(0.3);
  const { ref } = useMove(({ x }) => setValue(clamp(x, 0.1, 0.9)));
  const labelFloating = value < 0.2 || value > 0.8;

  return (
    <div className={classes.root}>
      <div className={classes.track} ref={ref}>
        <div
          className={classes.filled}
          style={{
            width: \`calc(\${value * 100}% - var(--thumb-width) / 2 - var(--thumb-offset) / 2)\`,
          }}
        >
          <span className={classes.label} data-floating={labelFloating || undefined} data-filled>
            {(value * 100).toFixed(0)}
          </span>
        </div>

        <div
          className={classes.empty}
          style={{
            width: \`calc(\${(1 - value) * 100}% - var(--thumb-width) / 2 - var(--thumb-offset) / 2)\`,
          }}
        >
          <span className={classes.label} data-floating={labelFloating || undefined}>
            {((1 - value) * 100).toFixed(0)}
          </span>
        </div>

        <div
          className={classes.thumb}
          style={{ left: \`calc(\${value * 100}% - var(--thumb-width) / 2)\` }}
        >
          <IconGripVertical stroke={1.5} />
        </div>
      </div>
    </div>
  );
}
`,language:"tsx"},{fileName:"Demo.module.css",code:`
.root {
  padding-top: 20px;
}

.track {
  --thumb-width: 20px;
  --thumb-offset: 10px;

  position: relative;
  height: 60px;
  display: flex;
}

.filled {
  height: 100%;
  margin-right: calc(var(--thumb-offset) / 2 + var(--thumb-width) / 2);
  border-radius: var(--mantine-radius-md);
  background-color: var(--mantine-color-blue-filled);
  display: flex;
  align-items: center;
  padding-inline: 10px;
}

.empty {
  height: 100%;
  margin-left: calc(var(--thumb-offset) / 2 + var(--thumb-width) / 2);
  border-radius: var(--mantine-radius-md);
  background-color: var(--mantine-color-gray-1);
  display: flex;
  align-items: center;
  padding-inline: 10px;
  justify-content: flex-end;

  @mixin dark {
    background-color: var(--mantine-color-dark-6);
  }
}

.thumb {
  position: absolute;
  background-color: var(--mantine-color-white);
  border: 1px solid var(--mantine-color-gray-2);
  border-radius: var(--mantine-radius-md);
  height: 100%;
  width: var(--thumb-width);
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--mantine-color-gray-5);

  @mixin dark {
    background-color: var(--mantine-color-dark-6);
    border-color: var(--mantine-color-dark-4);
    color: var(--mantine-color-dark-0);
  }
}

.label {
  font-size: var(--mantine-font-size-xl);
  font-weight: 700;
  transition:
    transform 100ms ease,
    color 100ms ease;

  &[data-filled] {
    color: var(--mantine-color-white);
  }

  &[data-floating] {
    transform: translateY(-44px) translateX(-10px);
    color: var(--mantine-color-black);

    &:not([data-filled]) {
      transform: translateY(-44px) translateX(10px);
    }

    @mixin dark {
      color: var(--mantine-color-white);
    }
  }
}
`,language:"scss"}],maxWidth:500,centered:!0}},41949:(e,a,t)=>{"use strict";t.d(a,{A:()=>s});let s=(0,t(41495).A)("outline","calendar","Calendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},65433:(e,a,t)=>{"use strict";t.d(a,{A:()=>s});let s=(0,t(41495).A)("outline","switch-2","Switch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},79770:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>c});var s=t(6029),i=t(16285),l=t(36549),n=t(38547),o=t(5262);let d=(0,n.P)(o.XZ.HooksPackage);function r(e){let a={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",...(0,i.R)(),...e.components},{Demo:t,InstallScript:n}=a;return t||h("Demo",!0),n||h("InstallScript",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h1,{id:"mantine-hooks",children:"Mantine hooks"}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.a,{href:"https://www.npmjs.com/package/@mantine/hooks",children:(0,s.jsx)(a.img,{src:"https://img.shields.io/npm/dm/@mantine/hooks",alt:"npm"})})}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.a,{href:"https://www.npmjs.com/package/@mantine/hooks",children:"@mantine/hooks"})," package\nprovides more than 70 hooks to build custom components. ",(0,s.jsx)(a.code,{children:"@mantine/hooks"}),"\npackage is used internally in most of other ",(0,s.jsx)(a.code,{children:"@mantine/*"})," packages –\nit is required to be installed in your project to use Mantine components."]}),"\n",(0,s.jsx)(a.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(n,{packages:"@mantine/hooks"}),"\n",(0,s.jsx)(a.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.code,{children:"@mantine/hooks"})," package can be used in any web React application, state\nmanagement hooks (like ",(0,s.jsx)(a.a,{href:"/hooks/use-pagination",children:"use-pagination"})," or ",(0,s.jsx)(a.a,{href:"/hooks/use-queue",children:"use-queue"}),")\nare also compatible with React Native. The package can be used even if you\ndo not use Mantine components or other Mantine libraries – it is standalone\nand does not have any dependencies except React."]}),"\n",(0,s.jsxs)(a.p,{children:["Example of using ",(0,s.jsx)(a.a,{href:"/hooks/use-move",children:"use-move"})," hook to create a custom slider:"]}),"\n",(0,s.jsx)(t,{data:l.x,demoProps:{defaultExpanded:!1}}),"\n",(0,s.jsx)(a.h2,{id:"license",children:"License"}),"\n",(0,s.jsx)(a.p,{children:"MIT"})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,s.jsx)(d,{...e,children:(0,s.jsx)(r,{...e})})}function h(e,a){throw Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},84276:(e,a,t)=>{"use strict";t.d(a,{A:()=>s});let s=(0,t(41495).A)("outline","file-text","FileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},88992:(e,a,t)=>{"use strict";t.d(a,{A:()=>s});let s=(0,t(41495).A)("outline","arrow-right","ArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},98493:(e,a,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/package",function(){return t(79770)}])}},e=>{e.O(0,[38547,90636,46593,38792],()=>e(e.s=98493)),_N_E=e.O()}]);