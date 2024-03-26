(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[88075],{58375:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-mutation-observer",function(){return n(66380)}])},66380:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return b}});var a=n(52322),r=n(45392),o=n(2784),i=n(17115),Text=n(8582),u=n(96339);let s=`
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
`,c={type:"code",component:function(){let[t,e]=(0,o.useState)(""),n=(0,u.I)(t=>{t.forEach(t=>{"attributes"===t.type&&"dir"===t.attributeName&&t.target instanceof HTMLElement&&e(t.target.dataset.mutation||"")})},{attributes:!0,attributeFilter:["data-mutation"]});return o.createElement(o.Fragment,null,o.createElement(i.z,{ref:n,onClick:t=>{t.currentTarget.dataset.mutation=Math.random().toFixed(3)}},"Click to change to data-mutation attribute"),o.createElement(Text.x,{mt:10,size:"sm"},"Last detected mutation: ",t||"Not mutated yet"))},code:s};var m=n(50636),l=n(79016),d=n(33638);let f=(0,l.A)(d.us.useMutationObserver);function h(t){let e={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...t.components},{Demo:n}=e;return n||function(t,e){throw Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.code,{children:"use-mutation-observer"})," is a wrapper for the ",(0,a.jsx)(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver",children:"MutationObserver"}),".\nIt allows subscribing changes being made to the DOM tree."]}),"\n",(0,a.jsx)(n,{data:c}),"\n",(0,a.jsx)(e.h2,{id:"target-element",children:"Target element"}),"\n",(0,a.jsxs)(e.p,{children:["If you cannot pass ",(0,a.jsx)(e.code,{children:"ref"})," to the target element, you can pass a function to resolve\nthe target element as a third argument."]}),"\n",(0,a.jsx)(n,{data:m.i}),"\n",(0,a.jsx)(e.h2,{id:"definition",children:"Definition"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-tsx",children:"function useMutationObserver<Element extends HTMLElement>(\n  callback: MutationCallback,\n  options: MutationObserverInit,\n  target?: HTMLElement | (() => HTMLElement) | null\n): RefObject<Element>;\n"})})]})}function b(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(f,{...t,children:(0,a.jsx)(h,{...t})})}},50636:function(t,e,n){"use strict";n.d(e,{i:function(){return s}});var a=n(2784),r=n(8582),o=n(83795),i=n(96339);let u=`
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
`,s={type:"code",component:function(){let[t,e]=(0,a.useState)("");return(0,i.I)(t=>{t.forEach(t=>{"attributes"===t.type&&"dir"===t.attributeName&&t.target instanceof HTMLElement&&e(t.target.getAttribute("dir")||"")})},{attributes:!0,attributeFilter:["dir"]},()=>document.documentElement),a.createElement(a.Fragment,null,a.createElement(r.x,null,"Press ",a.createElement(o.T,null,"Ctrl")," + ",a.createElement(o.T,null,"Shift")," + ",a.createElement(o.T,null,"L")," to change direction"),a.createElement(r.x,{mt:10},"Direction was changed to: ",t||"Not changed yet"))},code:u}}},function(t){t.O(0,[57938,17454,47747,49774,92888,40179],function(){return t(t.s=58375)}),_N_E=t.O()}]);