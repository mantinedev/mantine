(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3087],{1798:(t,e,a)=>{"use strict";a.d(e,{A:()=>n});let n=(0,a(41495).A)("outline","license","License",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},6620:(t,e,a)=>{"use strict";a.d(e,{A:()=>n});let n=(0,a(41495).A)("outline","code","Code",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},6892:(t,e,a)=>{"use strict";a.d(e,{A:()=>n});let n=(0,a(41495).A)("outline","pencil","Pencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},23550:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>p});var n=a(6029),s=a(16285),i=a(55729),r=a(61087),o=a(45208),u=a(23862);let d={type:"code",component:function(){let[t,e]=(0,i.useState)(""),a=(0,u.P)(t=>{t.forEach(t=>{"attributes"===t.type&&"data-mutation"===t.attributeName&&t.target instanceof HTMLElement&&e(t.target.dataset.mutation||"")})},{attributes:!0,attributeFilter:["data-mutation"]});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.$,{ref:a,onClick:t=>{t.currentTarget.dataset.mutation=Math.random().toFixed(3)},children:"Click to change to data-mutation attribute"}),(0,n.jsxs)(o.E,{mt:10,size:"sm",children:["Last detected mutation: ",t||"Not mutated yet"]})]})},code:`
import { useState } from 'react';
import { Button, Text } from '@mantine/core';
import { useMutationObserver } from '@mantine/hooks';

function Demo() {
  const [lastMutation, setLastMutation] = useState('');

  const ref = useMutationObserver<HTMLButtonElement>(
    (mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-mutation') {
          mutation.target instanceof HTMLElement &&
            setLastMutation(mutation.target.dataset.mutation || '');
        }
      });
    },
    {
      attributes: true,
      attributeFilter: ['data-mutation'],
    }
  );

  return (
    <>
      <Button
        ref={ref}
        onClick={(event) => {
          event.currentTarget.dataset.mutation = Math.random().toFixed(3);
        }}
      >
        Click to change to data-mutation attribute
      </Button>
      <Text mt={10} size="sm">
        Last detected mutation: {lastMutation || 'Not mutated yet'}
      </Text>
    </>
  );
}
`};var l=a(75734),h=a(38547),c=a(5262);let m=(0,h.P)(c.XZ.useMutationObserver);function g(t){let e={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...t.components},{Demo:a}=e;return a||function(t,e){throw Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.code,{children:"use-mutation-observer"})," is a wrapper for the ",(0,n.jsx)(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver",children:"MutationObserver"}),".\nIt allows subscribing changes being made to the DOM tree."]}),"\n",(0,n.jsx)(a,{data:d}),"\n",(0,n.jsx)(e.h2,{id:"target-element",children:"Target element"}),"\n",(0,n.jsxs)(e.p,{children:["If you cannot pass ",(0,n.jsx)(e.code,{children:"ref"})," to the target element, you can pass a function to resolve\nthe target element as a third argument."]}),"\n",(0,n.jsx)(a,{data:l.i}),"\n",(0,n.jsx)(e.h2,{id:"definition",children:"Definition"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-tsx",children:"function useMutationObserver<Element extends HTMLElement>(\n  callback: MutationCallback,\n  options: MutationObserverInit,\n  target?: HTMLElement | (() => HTMLElement) | null\n): RefObject<Element>;\n"})})]})}function p(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(m,{...t,children:(0,n.jsx)(g,{...t})})}},24583:(t,e,a)=>{"use strict";a.d(e,{A:()=>n});let n=(0,a(41495).A)("outline","arrow-left","ArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},34891:(t,e,a)=>{"use strict";a.d(e,{A:()=>n});let n=(0,a(41495).A)("outline","adjustments","Adjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},41949:(t,e,a)=>{"use strict";a.d(e,{A:()=>n});let n=(0,a(41495).A)("outline","calendar","Calendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},48409:(t,e,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-mutation-observer",function(){return a(23550)}])},65433:(t,e,a)=>{"use strict";a.d(e,{A:()=>n});let n=(0,a(41495).A)("outline","switch-2","Switch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},75734:(t,e,a)=>{"use strict";a.d(e,{i:()=>u});var n=a(6029),s=a(55729),i=a(45208),r=a(35885),o=a(23862);let u={type:"code",component:function(){let[t,e]=(0,s.useState)("");return(0,o.P)(t=>{t.forEach(t=>{"attributes"===t.type&&"dir"===t.attributeName&&t.target instanceof HTMLElement&&e(t.target.getAttribute("dir")||"")})},{attributes:!0,attributeFilter:["dir"]},()=>document.documentElement),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i.E,{children:["Press ",(0,n.jsx)(r.u,{children:"Ctrl"})," + ",(0,n.jsx)(r.u,{children:"Shift"})," + ",(0,n.jsx)(r.u,{children:"L"})," to change direction"]}),(0,n.jsxs)(i.E,{mt:10,children:["Direction was changed to: ",t||"Not changed yet"]})]})},code:`
import { useState } from 'react';
import { Kbd, Text } from '@mantine/core';
import { useMutationObserver } from '@mantine/hooks';

function Demo() {
  const [lastMutation, setLastMutation] = useState('');

  useMutationObserver(
    (mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'dir') {
          mutation.target instanceof HTMLElement &&
            setLastMutation(mutation.target.getAttribute('dir') || '');
        }
      });
    },
    {
      attributes: true,
      attributeFilter: ['dir'],
    },
    () => document.documentElement
  );

  return (
    <>
      <Text>
        Press <Kbd>Ctrl</Kbd> + <Kbd>Shift</Kbd> + <Kbd>L</Kbd> to change direction
      </Text>

      <Text mt={10}>Direction was changed to: {lastMutation || 'Not changed yet'}</Text>
    </>
  );
}
`}},84276:(t,e,a)=>{"use strict";a.d(e,{A:()=>n});let n=(0,a(41495).A)("outline","file-text","FileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},88992:(t,e,a)=>{"use strict";a.d(e,{A:()=>n});let n=(0,a(41495).A)("outline","arrow-right","ArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])}},t=>{t.O(0,[38547,90636,46593,38792],()=>t(t.s=48409)),_N_E=t.O()}]);