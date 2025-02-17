(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3087],{80777:(t,e,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-mutation-observer",function(){return n(47244)}])},47244:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>f});var a=n(31085),r=n(71184),i=n(14041),o=n(52022),s=n(93065),u=n(79971);let c={type:"code",component:function(){let[t,e]=(0,i.useState)(""),n=(0,u.P)(t=>{t.forEach(t=>{"attributes"===t.type&&"dir"===t.attributeName&&t.target instanceof HTMLElement&&e(t.target.dataset.mutation||"")})},{attributes:!0,attributeFilter:["data-mutation"]});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.$,{ref:n,onClick:t=>{t.currentTarget.dataset.mutation=Math.random().toFixed(3)},children:"Click to change to data-mutation attribute"}),(0,a.jsxs)(s.E,{mt:10,size:"sm",children:["Last detected mutation: ",t||"Not mutated yet"]})]})},code:`
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
`};var d=n(99363),m=n(85954),l=n(38215);let h=(0,m.P)(l.XZ.useMutationObserver);function b(t){let e={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...t.components},{Demo:n}=e;return n||function(t,e){throw Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.code,{children:"use-mutation-observer"})," is a wrapper for the ",(0,a.jsx)(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver",children:"MutationObserver"}),".\nIt allows subscribing changes being made to the DOM tree."]}),"\n",(0,a.jsx)(n,{data:c}),"\n",(0,a.jsx)(e.h2,{id:"target-element",children:"Target element"}),"\n",(0,a.jsxs)(e.p,{children:["If you cannot pass ",(0,a.jsx)(e.code,{children:"ref"})," to the target element, you can pass a function to resolve\nthe target element as a third argument."]}),"\n",(0,a.jsx)(n,{data:d.i}),"\n",(0,a.jsx)(e.h2,{id:"definition",children:"Definition"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-tsx",children:"function useMutationObserver<Element extends HTMLElement>(\n  callback: MutationCallback,\n  options: MutationObserverInit,\n  target?: HTMLElement | (() => HTMLElement) | null\n): RefObject<Element>;\n"})})]})}function f(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(h,{...t,children:(0,a.jsx)(b,{...t})})}},99363:(t,e,n)=>{"use strict";n.d(e,{i:()=>u});var a=n(31085),r=n(14041),i=n(93065),o=n(9082),s=n(79971);let u={type:"code",component:function(){let[t,e]=(0,r.useState)("");return(0,s.P)(t=>{t.forEach(t=>{"attributes"===t.type&&"dir"===t.attributeName&&t.target instanceof HTMLElement&&e(t.target.getAttribute("dir")||"")})},{attributes:!0,attributeFilter:["dir"]},()=>document.documentElement),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(i.E,{children:["Press ",(0,a.jsx)(o.u,{children:"Ctrl"})," + ",(0,a.jsx)(o.u,{children:"Shift"})," + ",(0,a.jsx)(o.u,{children:"L"})," to change direction"]}),(0,a.jsxs)(i.E,{mt:10,children:["Direction was changed to: ",t||"Not changed yet"]})]})},code:`
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
`}}},t=>{var e=e=>t(t.s=e);t.O(0,[67456,39699,68831,90636,46593,38792],()=>e(80777)),_N_E=t.O()}]);