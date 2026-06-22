(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var n=Object.defineProperty;e.s(["__exportAll",0,(e,t)=>{let o={};for(var i in e)n(o,i,{get:e[i],enumerable:!0});return t||n(o,Symbol.toStringTag,{value:"Module"}),o}])},315881,e=>{"use strict";var n=e.i(648863),t=e.i(485108),o=e.i(725695),i=e.i(391398),r=e.i(579560),s=e.i(191788);function a(e,n,t,o){for(let o=e+1;o<n;o+=1)if(!t(o))return o;if(o){for(let n=0;n<e;n+=1)if(!t(n))return n}return e}function l(e,n,t,o){for(let n=e-1;n>=0;n-=1)if(!t(n))return n;if(o){for(let o=n-1;o>e;o-=1)if(!t(o))return o}return e}function d(e,n){for(let t=0;t<e;t+=1)if(!n(t))return t;return 0}function c(e,n){for(let t=e-1;t>=0;t-=1)if(!n(t))return t;return 0}let u=()=>!1;function m(e){let{total:n,orientation:t="horizontal",loop:o=!0,dir:i="ltr",activateOnFocus:m=!1,columns:h,focusedIndex:p,initialIndex:x,onFocusChange:f,isItemDisabled:g=u}=e,v=(0,s.useRef)(new Map),b="number"==typeof h&&h>0,[I,k]=(0,r.useUncontrolled)({value:p,defaultValue:void 0!==x?x:d(n,g),finalValue:0,onChange:f});(0,s.useEffect)(()=>{0!==n&&(I>=n?k(c(n,g)):g(I)&&k(d(n,g)))},[n,I,g]);let j=(0,s.useCallback)(e=>{k(e);let n=v.current.get(e);n&&(n.focus(),m&&n.click())},[m,k]),y=(0,s.useCallback)((e,t)=>{let o=Math.floor(t/h),r=t%h,s=Math.ceil(n/h),a=null,l="rtl"===i;switch(e.key){case"ArrowRight":{let e=l?r-1:r+1;if(e>=0&&e<h&&o*h+e<n){let n=o*h+e;g(n)||(a=n)}break}case"ArrowLeft":{let e=l?r+1:r-1;if(e>=0&&e<h&&o*h+e<n){let n=o*h+e;g(n)||(a=n)}break}case"ArrowDown":for(let e=o+1;e<s;e+=1){let t=e*h+r;if(t<n&&!g(t)){a=t;break}}break;case"ArrowUp":for(let e=o-1;e>=0;e-=1){let t=e*h+r;if(t<n&&!g(t)){a=t;break}}break;case"Home":if(e.ctrlKey)a=d(n,g);else{let e=o*h;for(let t=e;t<e+h&&t<n;t+=1)if(!g(t)){a=t;break}}break;case"End":if(e.ctrlKey)a=c(n,g);else{let e=o*h,t=Math.min(e+h,n)-1;for(let n=t;n>=e;n-=1)if(!g(n)){a=n;break}}}null!==a&&a!==t&&(e.preventDefault(),e.stopPropagation(),j(a))},[n,h,i,g,j]),w=(0,s.useCallback)((e,r)=>{let s="rtl"===i,u=null;switch(e.key){case"ArrowRight":("horizontal"===t||"both"===t)&&(u=s?l(r,n,g,o):a(r,n,g,o));break;case"ArrowLeft":("horizontal"===t||"both"===t)&&(u=s?a(r,n,g,o):l(r,n,g,o));break;case"ArrowDown":("vertical"===t||"both"===t)&&(u=a(r,n,g,o));break;case"ArrowUp":("vertical"===t||"both"===t)&&(u=l(r,n,g,o));break;case"Home":u=d(n,g);break;case"End":u=c(n,g)}null!==u&&u!==r&&(e.preventDefault(),e.stopPropagation(),j(u))},[n,t,o,i,g,j]);return{getItemProps:(0,s.useCallback)(e=>{let{index:n,onClick:t,onKeyDown:o}=e;return{tabIndex:n===I?0:-1,ref:e=>{e?v.current.set(n,e):v.current.delete(n)},onKeyDown:e=>{o?.(e),e.defaultPrevented||(b?y(e,n):w(e,n))},onClick:e=>{t?.(e),k(n)}}},[I,b,y,w,k]),focusedIndex:I,setFocusedIndex:k}}let h=["Bold","Italic","Underline","Strikethrough","Code"],p={type:"code",component:function(){let{getItemProps:e}=m({total:h.length,orientation:"horizontal",loop:!0});return(0,i.jsx)(o.Group,{gap:"xs",children:h.map((n,o)=>(0,i.jsx)(t.Button,{variant:"default",...e({index:o}),children:n},n))})},code:`
import { Button, Group } from '@mantine/core';
import { useRovingIndex } from '@mantine/hooks';

const items = ['Bold', 'Italic', 'Underline', 'Strikethrough', 'Code'];

function Demo() {
  const { getItemProps } = useRovingIndex({
    total: items.length,
    orientation: 'horizontal',
    loop: true,
  });

  return (
    <Group gap="xs">
      {items.map((item, index) => (
        <Button key={item} variant="default" {...getItemProps({ index })}>
          {item}
        </Button>
      ))}
    </Group>
  );
}
`};var x=e.i(671640),f=e.i(284629);let g=["General","Account","Security","Notifications","Privacy"],v={type:"code",component:function(){let{getItemProps:e,focusedIndex:n}=m({total:g.length,orientation:"vertical",loop:!0});return(0,i.jsx)(x.Stack,{gap:4,w:200,children:g.map((t,o)=>(0,i.jsx)(f.UnstyledButton,{...e({index:o}),p:"xs",style:{borderRadius:"var(--mantine-radius-sm)",backgroundColor:n===o?"var(--mantine-color-blue-light)":void 0},children:t},t))})},code:`
import { Stack, UnstyledButton } from '@mantine/core';
import { useRovingIndex } from '@mantine/hooks';

const items = ['General', 'Account', 'Security', 'Notifications', 'Privacy'];

function Demo() {
  const { getItemProps, focusedIndex } = useRovingIndex({
    total: items.length,
    orientation: 'vertical',
    loop: true,
  });

  return (
    <Stack gap={4} w={200}>
      {items.map((item, index) => (
        <UnstyledButton
          key={item}
          {...getItemProps({ index })}
          p="xs"
          style={{
            borderRadius: 'var(--mantine-radius-sm)',
            backgroundColor:
              focusedIndex === index
                ? 'var(--mantine-color-blue-light)'
                : undefined,
          }}
        >
          {item}
        </UnstyledButton>
      ))}
    </Stack>
  );
}
`};var b=e.i(140763);let I={type:"code",component:function(){let{getItemProps:e,focusedIndex:n}=m({total:9,columns:3});return(0,i.jsx)(b.SimpleGrid,{cols:3,w:300,spacing:"xs",children:Array.from({length:9},(t,o)=>(0,i.jsxs)(f.UnstyledButton,{...e({index:o}),p:"md",ta:"center",style:{borderRadius:"var(--mantine-radius-sm)",border:"1px solid var(--mantine-color-default-border)",backgroundColor:n===o?"var(--mantine-color-blue-light)":void 0},children:["Cell ",o+1]},o))})},code:`
import { SimpleGrid, UnstyledButton } from '@mantine/core';
import { useRovingIndex } from '@mantine/hooks';

function Demo() {
  const total = 9;
  const columns = 3;

  const { getItemProps, focusedIndex } = useRovingIndex({
    total,
    columns,
  });

  return (
    <SimpleGrid cols={columns} w={300} spacing="xs">
      {Array.from({ length: total }, (_, index) => (
        <UnstyledButton
          key={index}
          {...getItemProps({ index })}
          p="md"
          ta="center"
          style={{
            borderRadius: 'var(--mantine-radius-sm)',
            border: '1px solid var(--mantine-color-default-border)',
            backgroundColor:
              focusedIndex === index
                ? 'var(--mantine-color-blue-light)'
                : undefined,
          }}
        >
          Cell {index + 1}
        </UnstyledButton>
      ))}
    </SimpleGrid>
  );
}
`},k=`
import { Button, Group } from '@mantine/core';
import { useRovingIndex } from '@mantine/hooks';

const items = ['Cut', 'Copy', 'Paste', 'Delete', 'Select All'];
const disabledIndices = new Set([1, 3]);

function Demo() {
  const { getItemProps } = useRovingIndex({
    total: items.length,
    orientation: 'horizontal',
    loop: true,
    isItemDisabled: (index) => disabledIndices.has(index),
  });

  return (
    <Group gap="xs">
      {items.map((item, index) => (
        <Button
          key={item}
          variant="default"
          disabled={disabledIndices.has(index)}
          {...getItemProps({ index })}
        >
          {item}
        </Button>
      ))}
    </Group>
  );
}
`,j=["Cut","Copy","Paste","Delete","Select All"],y=new Set([1,3]),w={type:"code",component:function(){let{getItemProps:e}=m({total:j.length,orientation:"horizontal",loop:!0,isItemDisabled:e=>y.has(e)});return(0,i.jsx)(o.Group,{gap:"xs",children:j.map((n,o)=>(0,i.jsx)(t.Button,{variant:"default",disabled:y.has(o),...e({index:o}),children:n},n))})},code:k};var R=e.i(37541);let C=["First","Second","Third","Fourth","Fifth"],U={type:"code",component:function(){let[e,n]=(0,s.useState)(!0),{getItemProps:r}=m({total:C.length,orientation:"horizontal",loop:e});return(0,i.jsxs)(x.Stack,{children:[(0,i.jsx)(R.Checkbox,{label:"Loop navigation",checked:e,onChange:e=>n(e.currentTarget.checked)}),(0,i.jsx)(o.Group,{gap:"xs",children:C.map((e,n)=>(0,i.jsx)(t.Button,{variant:"default",...r({index:n}),children:e},e))})]})},code:`
import { useState } from 'react';
import { Button, Checkbox, Group, Stack } from '@mantine/core';
import { useRovingIndex } from '@mantine/hooks';

const items = ['First', 'Second', 'Third', 'Fourth', 'Fifth'];

function Demo() {
  const [loop, setLoop] = useState(true);
  const { getItemProps } = useRovingIndex({
    total: items.length,
    orientation: 'horizontal',
    loop,
  });

  return (
    <Stack>
      <Checkbox
        label="Loop navigation"
        checked={loop}
        onChange={(event) => setLoop(event.currentTarget.checked)}
      />
      <Group gap="xs">
        {items.map((item, index) => (
          <Button key={item} variant="default" {...getItemProps({ index })}>
            {item}
          </Button>
        ))}
      </Group>
    </Stack>
  );
}
`};var D=(0,n.__exportAll)({disabled:()=>w,grid:()=>I,loop:()=>U,usage:()=>p,vertical:()=>v});e.s(["UseRovingIndexDemos",0,D],315881)},898377,e=>{"use strict";var n=e.i(391398),t=e.i(38856),o=e.i(315881);e.i(603441);var i=e.i(62558);e.i(457450);var r=e.i(418026);let s=(0,i.Layout)(r.MDX_DATA.useRovingIndex);function a(e){let i={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.useMDXComponents)(),...e.components},{Demo:r}=i;return r||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"use-roving-index"})," implements the ",(0,n.jsx)(i.a,{href:"https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_roving_tabindex",children:"roving tabindex"})," keyboard navigation pattern.\nIn a group of focusable elements, only one element has ",(0,n.jsx)(i.code,{children:"tabIndex={0}"})," (can be reached with Tab key),\nwhile all others have ",(0,n.jsx)(i.code,{children:"tabIndex={-1}"}),". Arrow keys move focus between items in the group."]}),"\n",(0,n.jsx)(r,{data:o.UseRovingIndexDemos.usage}),"\n",(0,n.jsx)(i.h2,{id:"orientation",children:"Orientation"}),"\n",(0,n.jsxs)(i.p,{children:["Set ",(0,n.jsx)(i.code,{children:"orientation"})," to control which arrow keys are used for navigation:"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"'horizontal'"})," (default) – ArrowLeft/ArrowRight"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"'vertical'"})," – ArrowUp/ArrowDown"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"'both'"})," – all four arrow keys"]}),"\n"]}),"\n",(0,n.jsx)(r,{data:o.UseRovingIndexDemos.vertical}),"\n",(0,n.jsx)(i.h2,{id:"grid-navigation",children:"Grid navigation"}),"\n",(0,n.jsxs)(i.p,{children:["Set ",(0,n.jsx)(i.code,{children:"columns"})," to enable 2D grid navigation. ArrowLeft/ArrowRight navigate within a row,\nArrowUp/ArrowDown navigate across rows preserving the column position.\nNavigation stops at grid boundaries. Use Ctrl+Home/Ctrl+End to jump to the first/last item in the grid,\nand Home/End to jump to the first/last item in the current row."]}),"\n",(0,n.jsx)(r,{data:o.UseRovingIndexDemos.grid}),"\n",(0,n.jsx)(i.h2,{id:"disabled-items",children:"Disabled items"}),"\n",(0,n.jsxs)(i.p,{children:["Use ",(0,n.jsx)(i.code,{children:"isItemDisabled"})," callback to mark items as disabled. Disabled items are skipped during\nkeyboard navigation. If the initially focused item is disabled, the first non-disabled item\nreceives focus instead."]}),"\n",(0,n.jsx)(r,{data:o.UseRovingIndexDemos.disabled}),"\n",(0,n.jsx)(i.h2,{id:"loop",children:"Loop"}),"\n",(0,n.jsxs)(i.p,{children:["By default, navigation wraps around at boundaries (",(0,n.jsx)(i.code,{children:"loop"})," is ",(0,n.jsx)(i.code,{children:"true"}),").\nSet ",(0,n.jsx)(i.code,{children:"loop={false}"})," to stop at the first and last items."]}),"\n",(0,n.jsx)(r,{data:o.UseRovingIndexDemos.loop}),"\n",(0,n.jsx)(i.h2,{id:"controlled-mode",children:"Controlled mode"}),"\n",(0,n.jsxs)(i.p,{children:["Use ",(0,n.jsx)(i.code,{children:"focusedIndex"})," and ",(0,n.jsx)(i.code,{children:"onFocusChange"})," to control the focused index externally:"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { useRovingIndex } from '@mantine/hooks';\n\nfunction Demo() {\n  const [focusedIndex, setFocusedIndex] = useState(0);\n  const { getItemProps } = useRovingIndex({\n    total: 5,\n    focusedIndex,\n    onFocusChange: setFocusedIndex,\n  });\n\n  // ...\n}\n"})}),"\n",(0,n.jsx)(i.h2,{id:"activateonfocus",children:"activateOnFocus"}),"\n",(0,n.jsxs)(i.p,{children:["Set ",(0,n.jsx)(i.code,{children:"activateOnFocus"})," to ",(0,n.jsx)(i.code,{children:"true"})," to automatically click items when they receive focus\nvia keyboard navigation. This is useful for tab-like interfaces where focus and selection\nshould be synchronized:"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-tsx",children:"import { useRovingIndex } from '@mantine/hooks';\n\nfunction Demo() {\n  const { getItemProps } = useRovingIndex({\n    total: 5,\n    activateOnFocus: true,\n  });\n\n  // ...\n}\n"})}),"\n",(0,n.jsx)(i.h2,{id:"rtl-support",children:"RTL support"}),"\n",(0,n.jsxs)(i.p,{children:["Set ",(0,n.jsx)(i.code,{children:'dir="rtl"'})," to swap ArrowLeft/ArrowRight behavior for right-to-left layouts:"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-tsx",children:"import { useRovingIndex } from '@mantine/hooks';\n\nfunction Demo() {\n  const { getItemProps } = useRovingIndex({\n    total: 5,\n    dir: 'rtl',\n  });\n\n  // ...\n}\n"})}),"\n",(0,n.jsx)(i.h2,{id:"definition",children:"Definition"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-tsx",children:"export interface UseRovingIndexInput {\n  /** Total number of items in the group */\n  total: number;\n\n  /** Which arrow keys navigate, `'horizontal'` by default */\n  orientation?: 'horizontal' | 'vertical' | 'both';\n\n  /** Whether navigation wraps at boundaries, `true` by default */\n  loop?: boolean;\n\n  /** Text direction, `'ltr'` by default */\n  dir?: 'rtl' | 'ltr';\n\n  /** Whether to click element when it receives focus via keyboard, `false` by default */\n  activateOnFocus?: boolean;\n\n  /** Number of columns for grid (2D) navigation. When set, enables grid mode */\n  columns?: number;\n\n  /** Controlled focused index */\n  focusedIndex?: number;\n\n  /** Initial focused index for uncontrolled mode, first non-disabled item by default */\n  initialIndex?: number;\n\n  /** Called when focused index changes */\n  onFocusChange?: (index: number) => void;\n\n  /** Function to check if item at given index is disabled, `() => false` by default */\n  isItemDisabled?: (index: number) => boolean;\n}\n\nexport interface UseRovingIndexGetItemPropsInput {\n  /** Index of the item in the group */\n  index: number;\n\n  /** Called when item is clicked */\n  onClick?: React.MouseEventHandler;\n\n  /** Called when keydown event fires on item */\n  onKeyDown?: React.KeyboardEventHandler;\n}\n\nexport interface UseRovingIndexReturnValue {\n  /** Get props to spread on each navigable item */\n  getItemProps: (options: UseRovingIndexGetItemPropsInput) => {\n    tabIndex: 0 | -1;\n    onKeyDown: React.KeyboardEventHandler;\n    onClick: React.MouseEventHandler;\n    ref: React.RefCallback<HTMLElement>;\n  };\n\n  /** Currently focused index */\n  focusedIndex: number;\n\n  /** Programmatically set focused index */\n  setFocusedIndex: (index: number) => void;\n}\n\nfunction useRovingIndex(input: UseRovingIndexInput): UseRovingIndexReturnValue;\n"})}),"\n",(0,n.jsx)(i.h2,{id:"exported-types",children:"Exported types"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"UseRovingIndexInput"}),", ",(0,n.jsx)(i.code,{children:"UseRovingIndexGetItemPropsInput"})," and ",(0,n.jsx)(i.code,{children:"UseRovingIndexReturnValue"})," types are exported\nfrom the ",(0,n.jsx)(i.code,{children:"@mantine/hooks"})," package; you can import them in your application:"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-tsx",children:"import type {\n  UseRovingIndexInput,\n  UseRovingIndexGetItemPropsInput,\n  UseRovingIndexReturnValue,\n} from '@mantine/hooks';\n"})})]})}e.s(["default",0,function(e={}){return(0,n.jsx)(s,{...e,children:(0,n.jsx)(a,{...e})})}])},562984,(e,n,t)=>{let o="/hooks/use-roving-index";(window.__NEXT_P=window.__NEXT_P||[]).push([o,()=>e.r(898377)]),n.hot&&n.hot.dispose(function(){window.__NEXT_P.push([o])})},648761,e=>{e.v(n=>Promise.all(["static/chunks/22379_btw709h.js"].map(n=>e.l(n))).then(()=>n(493594)))},828805,e=>{e.v(n=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(n=>e.l(n))).then(()=>n(879466)))}]);