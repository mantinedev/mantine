(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,t=>{"use strict";var e=Object.defineProperty;t.s(["__exportAll",0,(t,n)=>{let a={};for(var o in t)e(a,o,{get:t[o],enumerable:!0});return n||e(a,Symbol.toStringTag,{value:"Module"}),a}])},4795,t=>{"use strict";var e=t.i(648863),n=t.i(191788),a=t.i(485108),o=t.i(883364),r=t.i(391398),i=t.i(721438);let s={type:"code",component:function(){let[t,e]=(0,n.useState)("");return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Button,{ref:(0,i.useMutationObserver)(t=>{t.forEach(t=>{"attributes"===t.type&&"data-mutation"===t.attributeName&&t.target instanceof HTMLElement&&e(t.target.dataset.mutation||"")})},{attributes:!0,attributeFilter:["data-mutation"]}),onClick:t=>{t.currentTarget.dataset.mutation=Math.random().toFixed(3)},children:"Click to change to data-mutation attribute"}),(0,r.jsxs)(o.Text,{mt:10,size:"sm",children:["Last detected mutation: ",t||"Not mutated yet"]})]})},code:`
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
`};var u=t.i(488557);let c={type:"code",component:function(){let[t,e]=(0,n.useState)("");return(0,i.useMutationObserverTarget)(t=>{t.forEach(t=>{"attributes"===t.type&&"dir"===t.attributeName&&t.target instanceof HTMLElement&&e(t.target.getAttribute("dir")||"")})},{attributes:!0,attributeFilter:["dir"]},()=>document.documentElement),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.Text,{children:["Press ",(0,r.jsx)(u.Kbd,{children:"Ctrl"})," + ",(0,r.jsx)(u.Kbd,{children:"Shift"})," + ",(0,r.jsx)(u.Kbd,{children:"L"})," to change direction"]}),(0,r.jsxs)(o.Text,{mt:10,children:["Direction was changed to: ",t||"Not changed yet"]})]})},code:`
import { useState } from 'react';
import { Kbd, Text } from '@mantine/core';
import { useMutationObserverTarget } from '@mantine/hooks';

function Demo() {
  const [lastMutation, setLastMutation] = useState('');

  useMutationObserverTarget(
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
`};var m=(0,e.__exportAll)({target:()=>c,usage:()=>s});t.s(["UseMutationObserverDemos",0,m],4795)},322540,t=>{"use strict";var e=t.i(391398),n=t.i(38856),a=t.i(4795);t.i(603441);var o=t.i(62558);t.i(457450);var r=t.i(418026);let i=(0,o.Layout)(r.MDX_DATA.useMutationObserver);function s(t){let o={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.useMDXComponents)(),...t.components},{Demo:r}=o;return r||function(t,e){throw Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,e.jsxs)(o.p,{children:["The ",(0,e.jsx)(o.code,{children:"use-mutation-observer"})," hook is a wrapper for the ",(0,e.jsx)(o.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver",children:"MutationObserver"}),".\nIt allows you to subscribe to changes being made to the DOM tree."]}),"\n",(0,e.jsx)(r,{data:a.UseMutationObserverDemos.usage}),"\n",(0,e.jsx)(o.h2,{id:"target-element",children:"Target element"}),"\n",(0,e.jsxs)(o.p,{children:["If you cannot pass a ",(0,e.jsx)(o.code,{children:"ref"})," to the target element, you can pass a function to resolve\nthe target element as the third argument."]}),"\n",(0,e.jsx)(r,{data:a.UseMutationObserverDemos.target}),"\n",(0,e.jsx)(o.h2,{id:"definition",children:"Definition"}),"\n",(0,e.jsx)(o.pre,{children:(0,e.jsx)(o.code,{className:"language-tsx",children:"function useMutationObserver<T extends HTMLElement>(\n  callback: MutationCallback,\n  options: MutationObserverInit\n): React.RefCallback<T | null>;\n\nfunction useMutationObserverTarget(\n  callback: MutationCallback,\n  options: MutationObserverInit,\n  target?: HTMLElement | (() => HTMLElement) | null\n): void;\n"})})]})}t.s(["default",0,function(t={}){return(0,e.jsx)(i,{...t,children:(0,e.jsx)(s,{...t})})}])},452248,(t,e,n)=>{let a="/hooks/use-mutation-observer";(window.__NEXT_P=window.__NEXT_P||[]).push([a,()=>t.r(322540)]),e.hot&&e.hot.dispose(function(){window.__NEXT_P.push([a])})},648761,t=>{t.v(e=>Promise.all(["static/chunks/22379_btw709h.js"].map(e=>t.l(e))).then(()=>e(493594)))},828805,t=>{t.v(e=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(e=>t.l(e))).then(()=>e(879466)))}]);