(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var o=Object.defineProperty;e.s(["__exportAll",0,(e,a)=>{let t={};for(var r in e)o(t,r,{get:e[r],enumerable:!0});return a||o(t,Symbol.toStringTag,{value:"Module"}),t}])},462138,e=>{"use strict";var o=e.i(779177),a=e.i(391398);function t({style:e,size:r=16,...i}){return(0,a.jsx)("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{...e,width:(0,o.rem)(r),height:(0,o.rem)(r),display:"block"},...i,children:(0,a.jsx)("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}t.displayName="@mantine/core/AccordionChevron",e.s(["AccordionChevron",0,t])},257177,e=>{"use strict";var o=e.i(433512),a=e.i(481178),t=e.i(317477),r=e.i(44091),i=e.i(391466),n=e.i(956449),l=e.i(232471),c={root:"m_347db0ec","root--dot":"m_fbd81e3d",label:"m_5add502a",section:"m_91fdda9b"},s=e.i(391398);let d=(0,a.createVarsResolver)((e,{radius:a,color:r,gradient:i,variant:n,size:l,autoContrast:c,circle:s})=>{let d=e.variantColorResolver({color:r||e.primaryColor,theme:e,gradient:i,variant:n||"filled",autoContrast:c});return{root:{"--badge-height":(0,o.getSize)(l,"badge-height"),"--badge-padding-x":(0,o.getSize)(l,"badge-padding-x"),"--badge-fz":(0,o.getSize)(l,"badge-fz"),"--badge-radius":s||void 0===a?void 0:(0,o.getRadius)(a),"--badge-bg":r||n?d.background:void 0,"--badge-color":r||n?d.color:void 0,"--badge-bd":r||n?d.border:void 0,"--badge-dot-color":"dot"===n?(0,t.getThemeColor)(r,e):void 0}}}),m=(0,n.polymorphicFactory)(e=>{let o=(0,r.useProps)("Badge",null,e),{classNames:a,className:t,style:n,styles:m,unstyled:u,vars:h,radius:p,color:b,gradient:x,leftSection:k,rightSection:f,children:v,variant:C,fullWidth:g,autoContrast:y,circle:j,mod:R,attributes:S,...A}=o,w=(0,i.useStyles)({name:"Badge",props:o,classes:c,className:t,style:n,classNames:a,styles:m,unstyled:u,attributes:S,vars:h,varsResolver:d});return(0,s.jsxs)(l.Box,{variant:C,mod:[{block:g,circle:j,"with-right-section":!!f,"with-left-section":!!k},R],...w("root",{variant:C}),...A,children:[k&&(0,s.jsx)("span",{...w("section"),"data-position":"left",children:k}),(0,s.jsx)("span",{...w("label"),children:v}),f&&(0,s.jsx)("span",{...w("section"),"data-position":"right",children:f})]})});m.classes=c,m.varsResolver=d,m.displayName="@mantine/core/Badge",e.s(["Badge",0,m],257177)},530514,e=>{"use strict";e.s(["createTheme",0,function(e){return e}])},604531,e=>{"use strict";var o=e.i(648863),a=e.i(232471),t=e.i(883364),r=e.i(391398),i=e.i(56206);function n({className:e,children:o,...l}){return(0,r.jsx)(a.Box,{className:(0,i.default)("m_a4dc100e",e),...l,children:(0,r.jsx)(t.Text,{className:"m_f6c78959",children:o})})}let l=[,,,,,].fill(0).map((e,o)=>(0,r.jsx)(n,{children:o+1},o));var c=e.i(140763);let s={type:"configurator",component:function(e){return(0,r.jsx)(c.SimpleGrid,{...e,id:"grid-configurator",children:l})},code:`
import { SimpleGrid } from '@mantine/core';

function Demo() {
  return (
    <SimpleGrid{{props}}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </SimpleGrid>
  )
}
`,controls:[{prop:"cols",type:"number",initialValue:3,min:1,max:6,step:1,libraryValue:"__"},{prop:"spacing",type:"size",initialValue:"md",libraryValue:"md"},{prop:"verticalSpacing",type:"size",initialValue:"md",libraryValue:"md"}]},d={type:"code",component:function(){return(0,r.jsx)(c.SimpleGrid,{cols:{base:1,sm:2,lg:5},spacing:{base:10,sm:"xl"},verticalSpacing:{base:"md",sm:"xl"},children:l})},code:`
import { SimpleGrid } from '@mantine/core';

function Demo() {
  return (
    <SimpleGrid
      cols={{ base: 1, sm: 2, lg: 5 }}
      spacing={{ base: 10, sm: 'xl' }}
      verticalSpacing={{ base: 'md', sm: 'xl' }}
    >
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </SimpleGrid>
  );
}
`},m={type:"code",component:function(){return(0,r.jsx)("div",{style:{resize:"horizontal",overflow:"hidden",maxWidth:"100%"},children:(0,r.jsx)(c.SimpleGrid,{type:"container",cols:{base:1,"300px":2,"500px":5},spacing:{base:10,"300px":"xl"},children:l})})},code:`
import { SimpleGrid } from '@mantine/core';

function Demo() {
  return (
    // Wrapper div is added for demonstration purposes only,
    // it is not required in real projects
    <div style={{ resize: 'horizontal', overflow: 'hidden', maxWidth: '100%' }}>
      <SimpleGrid
        type="container"
        cols={{ base: 1, '300px': 2, '500px': 5 }}
        spacing={{ base: 10, '300px': 'xl' }}
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </SimpleGrid>
    </div>
  );
}
`},u={type:"code",component:function(){return(0,r.jsx)(c.SimpleGrid,{minColWidth:"200px",children:l})},code:`
import { SimpleGrid } from '@mantine/core';

function Demo() {
  return (
    <SimpleGrid minColWidth="200px">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </SimpleGrid>
  );
}
`};var h=e.i(671640);let p=`
import { SimpleGrid } from '@mantine/core';

function Demo() {
  return (
    <>
      {/* auto-fill: empty tracks are preserved, items do not stretch */}
      <SimpleGrid minColWidth="200px" autoFlow="auto-fill">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </SimpleGrid>

      {/* auto-fit: empty tracks are collapsed, items stretch to fill the row */}
      <SimpleGrid minColWidth="200px" autoFlow="auto-fit">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </SimpleGrid>
    </>
  );
}
`,b=[,,,].fill(0).map((e,o)=>(0,r.jsx)(n,{children:o+1},o)),x={type:"code",component:function(){return(0,r.jsxs)(h.Stack,{children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(t.Text,{mb:"xs",fw:500,children:"auto-fill"}),(0,r.jsx)(c.SimpleGrid,{minColWidth:"200px",autoFlow:"auto-fill",children:b})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)(t.Text,{mb:"xs",fw:500,children:"auto-fit"}),(0,r.jsx)(c.SimpleGrid,{minColWidth:"200px",autoFlow:"auto-fit",children:b})]})]})},code:p},k={type:"code",component:function(){return(0,r.jsx)(c.SimpleGrid,{cols:3,autoRows:"minmax(100px, auto)",children:l})},code:`
import { SimpleGrid } from '@mantine/core';

function Demo() {
  return (
    <SimpleGrid cols={3} autoRows="minmax(100px, auto)">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </SimpleGrid>
  );
}
`};var f=(0,o.__exportAll)({autoFlow:()=>x,autoRows:()=>k,container:()=>m,minColWidth:()=>u,responsive:()=>d,usage:()=>s});e.s(["SimpleGridDemos",0,f],604531)},975419,e=>{"use strict";var o=e.i(648863),a=e.i(37541),t=e.i(391398);let r={type:"configurator",component:e=>(0,t.jsx)(a.Checkbox,{...e,defaultChecked:!0}),code:`
import { Checkbox } from '@mantine/core';


function Demo() {
  return (
    <Checkbox
      defaultChecked
      {{props}}
    />
  );
}
`,centered:!0,controls:[{prop:"labelPosition",type:"segmented",data:[{value:"right",label:"Right"},{value:"left",label:"Left"}],initialValue:"right",libraryValue:"right"},{prop:"label",type:"string",initialValue:"I agree to sell my privacy",libraryValue:""},{prop:"description",type:"string",initialValue:"",libraryValue:""},{prop:"error",type:"string",initialValue:"",libraryValue:""},{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"variant",type:"segmented",data:[{value:"filled",label:"Filled"},{value:"outline",label:"Outline"}],initialValue:"filled",libraryValue:"filled"},{prop:"radius",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"size",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"disabled",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"indeterminate",type:"boolean",initialValue:!1,libraryValue:!1}]};var i=e.i(232471),n=e.i(57807),l=e.i(191788);let c=`
import { useListState, randomId } from '@mantine/hooks';
import { Checkbox } from '@mantine/core';

const initialValues = [
  { label: 'Receive email notifications', checked: false, key: randomId() },
  { label: 'Receive sms notifications', checked: false, key: randomId() },
  { label: 'Receive push notifications', checked: false, key: randomId() },
];

export function IndeterminateCheckbox() {
  const [values, handlers] = useListState(initialValues);

  const allChecked = values.every((value) => value.checked);
  const indeterminate = values.some((value) => value.checked) && !allChecked;

  const items = values.map((value, index) => (
    <Checkbox
      mt="xs"
      ml={33}
      label={value.label}
      key={value.key}
      checked={value.checked}
      onChange={(event) => handlers.setItemProp(index, 'checked', event.currentTarget.checked)}
    />
  ));

  return (
    <>
      <Checkbox
        checked={allChecked}
        indeterminate={indeterminate}
        label="Receive all notifications"
        onChange={() =>
          handlers.setState((current) =>
            current.map((value) => ({ ...value, checked: !allChecked }))
          )
        }
      />
      {items}
    </>
  );
}
`,s=[{label:"Receive email notifications",checked:!1,key:(0,n.randomId)()},{label:"Receive sms notifications",checked:!1,key:(0,n.randomId)()},{label:"Receive push notifications",checked:!1,key:(0,n.randomId)()}],d={type:"code",code:c,component:function(){let[e,o]=function(e=[]){let[o,a]=(0,l.useState)(e),t=(0,l.useCallback)((...e)=>a(o=>[...o,...e]),[]),r=(0,l.useCallback)((...e)=>a(o=>[...e,...o]),[]),i=(0,l.useCallback)((e,...o)=>a(a=>[...a.slice(0,e),...o,...a.slice(e)]),[]),n=(0,l.useCallback)(e=>a(o=>o.map((o,a)=>e(o,a))),[]),c=(0,l.useCallback)((...e)=>a(o=>o.filter((o,a)=>!e.includes(a))),[]),s=(0,l.useCallback)(()=>a(e=>{let o=[...e];return o.pop(),o}),[]),d=(0,l.useCallback)(()=>a(e=>{let o=[...e];return o.shift(),o}),[]),m=(0,l.useCallback)(({from:e,to:o})=>a(a=>{let t=[...a],r=a[e];return t.splice(e,1),t.splice(o,0,r),t}),[]),u=(0,l.useCallback)(({from:e,to:o})=>a(a=>{let t=[...a],r=t[e],i=t[o];return t.splice(o,1,r),t.splice(e,1,i),t}),[]),h=(0,l.useCallback)((e,o)=>a(a=>{let t=[...a];return t[e]=o,t}),[]),p=(0,l.useCallback)((e,o,t)=>a(a=>{let r=[...a];return r[e]={...r[e],[o]:t},r}),[]),b=(0,l.useCallback)((e,o)=>a(a=>a.map((a,t)=>e(a,t)?o(a,t):a)),[]),x=(0,l.useCallback)(e=>{a(o=>o.filter(e))},[]);return[o,(0,l.useMemo)(()=>({setState:a,append:t,prepend:r,insert:i,pop:s,shift:d,apply:n,applyWhere:b,remove:c,reorder:m,swap:u,setItem:h,setItemProp:p,filter:x}),[])]}(s),r=e.every(e=>e.checked),n=e.some(e=>e.checked)&&!r,c=e.map((e,r)=>(0,t.jsx)(a.Checkbox,{mt:"xs",ml:33,label:e.label,checked:e.checked,onChange:e=>o.setItemProp(r,"checked",e.currentTarget.checked)},e.key));return(0,t.jsxs)(i.Box,{maw:400,mx:"auto",children:[(0,t.jsx)(a.Checkbox,{checked:r,indeterminate:n,label:"Receive all notifications",onChange:()=>o.setState(e=>e.map(e=>({...e,checked:!r})))}),c]})}};var m=e.i(671640);let u={type:"code",component:function(){return(0,t.jsxs)(m.Stack,{children:[(0,t.jsx)(a.Checkbox,{checked:!1,onChange:()=>{},label:"Default checkbox"}),(0,t.jsx)(a.Checkbox,{checked:!1,onChange:()=>{},indeterminate:!0,label:"Indeterminate checkbox"}),(0,t.jsx)(a.Checkbox,{checked:!0,onChange:()=>{},label:"Checked checkbox"}),(0,t.jsx)(a.Checkbox,{checked:!0,variant:"outline",onChange:()=>{},label:"Outline checked checkbox"}),(0,t.jsx)(a.Checkbox,{variant:"outline",onChange:()=>{},indeterminate:!0,label:"Outline indeterminate checkbox"}),(0,t.jsx)(a.Checkbox,{disabled:!0,label:"Disabled checkbox"}),(0,t.jsx)(a.Checkbox,{disabled:!0,checked:!0,onChange:()=>{},label:"Disabled checked checkbox"}),(0,t.jsx)(a.Checkbox,{disabled:!0,indeterminate:!0,label:"Disabled indeterminate checkbox"})]})},code:`
import { Checkbox, Stack } from '@mantine/core';

function Demo() {
  return (
    <Stack>
      <Checkbox checked={false} onChange={() => {}} label="Default checkbox" />
      <Checkbox checked={false} onChange={() => {}} indeterminate label="Indeterminate checkbox" />
      <Checkbox checked onChange={() => {}} label="Checked checkbox" />
      <Checkbox checked variant="outline" onChange={() => {}} label="Outline checked checkbox" />
      <Checkbox
        variant="outline"
        onChange={() => {}}
        indeterminate
        label="Outline indeterminate checkbox"
      />
      <Checkbox disabled label="Disabled checkbox" />
      <Checkbox disabled checked onChange={() => {}} label="Disabled checked checkbox" />
      <Checkbox disabled indeterminate label="Disabled indeterminate checkbox" />
    </Stack>
  );
}
`};var h=e.i(171481);let p=new Map([["bold",l.createElement(l.Fragment,null,l.createElement("path",{d:"M188.26,100.55c-.37-.71-.76-1.42-1.16-2.11a64,64,0,0,0-29.55-81.29,12,12,0,1,0-11.1,21.28A39.91,39.91,0,0,1,168,73.92c0,1-.05,2-.13,3a67.79,67.79,0,0,0-79.74,0c-.08-1-.13-2-.13-3a39.92,39.92,0,0,1,21.55-35.5A12,12,0,1,0,98.46,17.14,64,64,0,0,0,68.89,98.45c-.4.7-.78,1.39-1.15,2.1A64.08,64.08,0,0,0,12,164a12,12,0,0,0,24,0,40,40,0,0,1,24.18-36.73c-.11,1.56-.18,3.14-.18,4.73a68.12,68.12,0,0,0,41.63,62.68,40,40,0,0,1-47.16,3,12,12,0,1,0-12.94,20.21A63.95,63.95,0,0,0,128,201.24a63.95,63.95,0,0,0,86.47,16.69,12,12,0,1,0-12.94-20.21,40,40,0,0,1-47.16-3A68.12,68.12,0,0,0,196,132c0-1.59-.07-3.17-.18-4.73A40,40,0,0,1,220,164a12,12,0,0,0,24,0A64.08,64.08,0,0,0,188.26,100.55ZM128,88a43.85,43.85,0,0,1,30.23,12.07,39.93,39.93,0,0,1-60.46,0A43.81,43.81,0,0,1,128,88ZM84,132a44.35,44.35,0,0,1,.57-7.06,40,40,0,0,1,30.18,49A44.08,44.08,0,0,1,84,132Zm57.25,42a40,40,0,0,1,30.18-49,44,44,0,0,1-30.18,49Z"}))],["duotone",l.createElement(l.Fragment,null,l.createElement("path",{d:"M184,132a56,56,0,1,1-56-56A56,56,0,0,1,184,132Z",opacity:"0.2"}),l.createElement("path",{d:"M185.68,104.28q-1.4-2.88-3.06-5.6a60,60,0,0,0-26.92-78,8,8,0,0,0-7.4,14.19A44,44,0,0,1,170.72,84.4a63.85,63.85,0,0,0-85.46,0A44,44,0,0,1,107.7,34.87a8,8,0,1,0-7.4-14.19,60,60,0,0,0-26.93,78,62.59,62.59,0,0,0-3.05,5.58A60.07,60.07,0,0,0,16,164a8,8,0,0,0,16,0,44.09,44.09,0,0,1,32.89-42.58A63.94,63.94,0,0,0,109,193.11a44,44,0,0,1-56.65,8,8,8,0,1,0-8.62,13.47A60,60,0,0,0,126.74,196l1.26,0,1.26,0a60,60,0,0,0,83.05,18.59,8,8,0,1,0-8.62-13.47,44,44,0,0,1-56.65-8,63.94,63.94,0,0,0,44.07-71.69A44.09,44.09,0,0,1,224,164a8,8,0,0,0,16,0A60.07,60.07,0,0,0,185.68,104.28ZM128,84a47.91,47.91,0,0,1,35.56,15.79,44,44,0,0,1-71.13,0A47.89,47.89,0,0,1,128,84Zm.12,49.92-.12.2-.12-.2h.24ZM80,132a47.6,47.6,0,0,1,1.44-11.65,44,44,0,0,1,36,58.46A48.07,48.07,0,0,1,80,132Zm58.57,46.81a44,44,0,0,1,36-58.46,48,48,0,0,1-36,58.46Z"}))],["fill",l.createElement(l.Fragment,null,l.createElement("path",{d:"M239.83,159.58a60.09,60.09,0,0,0-54.17-55.31,61.63,61.63,0,0,0-3-5.59,59.94,59.94,0,0,0-26.82-77.93l-.14-.08a8.1,8.1,0,0,0-1.14-.48h0a8,8,0,0,0-6.21,14.69l.07,0C149.6,35.57,168,45.73,168,68a40,40,0,0,1-2,12.53,63.83,63.83,0,0,0-76,0A40,40,0,0,1,88,68c0-22.35,18.53-32.51,19.65-33.1l0,0a8,8,0,0,0-7.33-14.22l-.15.08a60,60,0,0,0-26.85,78c-1.1,1.8-2.12,3.66-3,5.57a60.11,60.11,0,0,0-54.15,55.32,35.86,35.86,0,0,0-.14,4.87A8,8,0,0,0,32,164c0-1.36.07-2.71.19-4,.73-6.25,4.06-19.08,18.64-27.49a39.83,39.83,0,0,1,13.32-4.81c-.1,1.43-.16,2.88-.16,4.34a64.09,64.09,0,0,0,39,58.91,39.81,39.81,0,0,1-12.15,10.84c-19.07,11-36.88.36-38.39-.58l-.12-.08a8,8,0,0,0-8.71,13.42l.24.15A59.95,59.95,0,0,0,126.74,196c.42,0,.83,0,1.25,0s.84,0,1.27,0a60,60,0,0,0,82.89,18.69l.23-.15a8,8,0,0,0-8.71-13.42l-.12.08c-1.51.94-19.32,11.59-38.39.58A39.84,39.84,0,0,1,153,190.9,64.09,64.09,0,0,0,192,132c0-1.46-.07-2.9-.16-4.33a39.84,39.84,0,0,1,13.33,4.8c14.47,8.35,17.86,21.06,18.63,27.32.13,1.39.2,2.79.2,4.21a8,8,0,0,0,16,.46A36,36,0,0,0,239.83,159.58Zm-130.1,16.8A48.08,48.08,0,0,1,80,132c0-1.27.07-2.53.17-3.78l1,.25a40,40,0,0,1,28.54,47.91ZM128,134.11l-.11-.19h.22ZM128,108A39.91,39.91,0,0,1,98.07,94.51a47.84,47.84,0,0,1,59.84,0A39.88,39.88,0,0,1,128,108Zm18.29,68.37a39.9,39.9,0,0,1,29.55-48.13c.1,1.24.16,2.49.16,3.76A48.07,48.07,0,0,1,146.28,176.37Z"}))],["light",l.createElement(l.Fragment,null,l.createElement("path",{d:"M184.35,106.18a61.77,61.77,0,0,0-4-7.33,58,58,0,0,0-25.58-76.38,6,6,0,1,0-5.54,10.64,46,46,0,0,1,22.51,55,61.89,61.89,0,0,0-87.5,0,46,46,0,0,1,22.53-55,6,6,0,0,0-5.54-10.64A58,58,0,0,0,75.64,98.87a60.67,60.67,0,0,0-4,7.31A58.06,58.06,0,0,0,18,164a6,6,0,0,0,12,0,46.08,46.08,0,0,1,37.43-45.19,61.95,61.95,0,0,0,45,73.21,46,46,0,0,1-61.2,10.75,6,6,0,0,0-6.48,10.11,58,58,0,0,0,80.9-18.94c.77,0,1.55.06,2.34.06s1.57,0,2.34-.06a58,58,0,0,0,80.9,18.94,6,6,0,0,0-6.48-10.11A46,46,0,0,1,143.56,192a61.95,61.95,0,0,0,45-73.21A46.08,46.08,0,0,1,226,164a6,6,0,0,0,12,0A58.06,58.06,0,0,0,184.35,106.18ZM128,82a49.87,49.87,0,0,1,38.09,17.67,46,46,0,0,1-76.19,0A49.86,49.86,0,0,1,128,82Zm3.8,49.79a56.82,56.82,0,0,0-3.8,6.56,58.24,58.24,0,0,0-3.79-6.56c1.25.08,2.51.13,3.78.13S130.54,131.87,131.8,131.79ZM78,132a49.68,49.68,0,0,1,2-13.82A46.06,46.06,0,0,1,122,164a45.59,45.59,0,0,1-3.32,17.12A50.07,50.07,0,0,1,78,132Zm59.32,49.12A45.59,45.59,0,0,1,134,164a46.06,46.06,0,0,1,42-45.82,50,50,0,0,1-38.72,62.94Z"}))],["regular",l.createElement(l.Fragment,null,l.createElement("path",{d:"M185.68,104.28q-1.4-2.88-3.06-5.6a60,60,0,0,0-26.92-78,8,8,0,0,0-7.4,14.19A44,44,0,0,1,170.72,84.4a63.85,63.85,0,0,0-85.46,0A44,44,0,0,1,107.7,34.87a8,8,0,1,0-7.4-14.19,60,60,0,0,0-26.93,78,62.59,62.59,0,0,0-3.05,5.58A60.07,60.07,0,0,0,16,164a8,8,0,0,0,16,0,44.09,44.09,0,0,1,32.89-42.58A63.94,63.94,0,0,0,109,193.11a44,44,0,0,1-56.65,8,8,8,0,1,0-8.62,13.47A60,60,0,0,0,126.74,196l1.26,0,1.26,0a60,60,0,0,0,83.05,18.59,8,8,0,1,0-8.62-13.47,44,44,0,0,1-56.65-8,63.94,63.94,0,0,0,44.07-71.69A44.09,44.09,0,0,1,224,164a8,8,0,0,0,16,0A60.07,60.07,0,0,0,185.68,104.28ZM128,84a47.91,47.91,0,0,1,35.56,15.79,44,44,0,0,1-71.13,0A47.89,47.89,0,0,1,128,84Zm.12,49.92-.12.2-.12-.2h.24ZM80,132a47.6,47.6,0,0,1,1.44-11.65,44,44,0,0,1,36,58.46A48.07,48.07,0,0,1,80,132Zm58.57,46.81a44,44,0,0,1,36-58.46,48,48,0,0,1-36,58.46Z"}))],["thin",l.createElement(l.Fragment,null,l.createElement("path",{d:"M183,108.08A60.22,60.22,0,0,0,178.06,99a56,56,0,0,0-24.21-74.73,4,4,0,1,0-3.7,7.09,48,48,0,0,1,22.37,60.49,59.91,59.91,0,0,0-89.05,0,48,48,0,0,1,22.38-60.5,4,4,0,0,0-3.7-7.1A56,56,0,0,0,77.93,99,60.85,60.85,0,0,0,73,108.08,56.07,56.07,0,0,0,20,164a4,4,0,0,0,8,0,48.06,48.06,0,0,1,42.08-47.62,60,60,0,0,0,45.75,74.38,48,48,0,0,1-65.67,13.7,4,4,0,1,0-4.32,6.73,56,56,0,0,0,78.69-19.3c1.15.07,2.3.11,3.47.11s2.32,0,3.47-.11a56,56,0,0,0,78.69,19.3,4,4,0,1,0-4.32-6.73,48,48,0,0,1-65.67-13.7,60,60,0,0,0,45.75-74.38A48.06,48.06,0,0,1,228,164a4,4,0,0,0,8,0A56.07,56.07,0,0,0,183,108.08Zm-8.75.21c-.79.08-1.56.19-2.34.3.5-.63,1-1.28,1.46-1.93C173.69,107.2,174,107.74,174.26,108.29ZM128,80a51.93,51.93,0,0,1,40.57,19.52,48,48,0,0,1-81.15,0A51.94,51.94,0,0,1,128,80Zm8.07,49.33A56.11,56.11,0,0,0,128,143.25a55.87,55.87,0,0,0-8.07-13.91,56.43,56.43,0,0,0,8.06.58A55.29,55.29,0,0,0,136.07,129.33Zm-52-20.74c-.77-.11-1.54-.22-2.32-.3q.42-.81.87-1.62C83.08,107.32,83.56,108,84.06,108.59ZM76,132a51.78,51.78,0,0,1,2.51-15.93,48,48,0,0,1,41.39,67.3A52.08,52.08,0,0,1,76,132Zm60.1,51.37a48,48,0,0,1,41.39-67.3,52,52,0,0,1-41.39,67.3Z"}))]]),b=l.forwardRef((e,o)=>l.createElement(h.default,{ref:o,...e,weights:p}));b.displayName="BiohazardIcon";let x=new Map([["bold",l.createElement(l.Fragment,null,l.createElement("path",{d:"M128,112a16,16,0,1,1-16,16A16,16,0,0,1,128,112ZM96,128a12,12,0,0,0-12-12H44.47a83.88,83.88,0,0,1,31.2-54.11L95.38,96a12,12,0,1,0,20.78-12l-22-38a20,20,0,0,0-28.87-6.34,107.85,107.85,0,0,0-45.26,78.4,20.22,20.22,0,0,0,5.21,15.43A20,20,0,0,0,40,140H84A12,12,0,0,0,96,128Zm139.92-9.94a107.81,107.81,0,0,0-45.26-78.39A20,20,0,0,0,161.79,46L139.84,84a12,12,0,0,0,20.78,12l19.71-34.13A83.88,83.88,0,0,1,211.53,116H172a12,12,0,0,0,0,24h44a20,20,0,0,0,14.71-6.51A20.22,20.22,0,0,0,235.92,118.06ZM160.4,160.11a12,12,0,0,0-20.79,12L159.19,206a84.33,84.33,0,0,1-62.38,0l19.58-33.91a12,12,0,0,0-20.79-12l-21.82,37.8a20,20,0,0,0,8.91,28.15,108.24,108.24,0,0,0,90.62,0,20,20,0,0,0,8.91-28.15Z"}))],["duotone",l.createElement(l.Fragment,null,l.createElement("path",{d:"M92,128H40a8.1,8.1,0,0,1-8-8.86A95.94,95.94,0,0,1,72.27,49.47,8,8,0,0,1,83.82,52l26,44.94A36,36,0,0,0,92,128Zm54,31.18a36,36,0,0,1-36,0L84.17,203.91a8,8,0,0,0,3.56,11.26,96.24,96.24,0,0,0,80.54,0,8,8,0,0,0,3.56-11.26Zm78-40a95.94,95.94,0,0,0-40.24-69.67A8,8,0,0,0,172.18,52L146.23,97A36,36,0,0,1,164,126.12c0,.62.05,1.23.05,1.85l52,0A8.1,8.1,0,0,0,224,119.14Z",opacity:"0.2"}),l.createElement("path",{d:"M116,128a12,12,0,1,1,12,12A12,12,0,0,1,116,128Zm-16,0a8,8,0,0,0-8-8l-51.93,0a.19.19,0,0,1-.07-.16A87.83,87.83,0,0,1,76.89,56l26,45a8,8,0,1,0,13.86-8L90.75,48a16,16,0,0,0-23.1-5.07,103.83,103.83,0,0,0-43.58,75.49,16.21,16.21,0,0,0,4.17,12.37A16,16,0,0,0,40,136H92A8,8,0,0,0,100,128Zm131.93-9.58a103.83,103.83,0,0,0-43.58-75.49A16,16,0,0,0,165.25,48L139.3,93a8,8,0,0,0,13.86,8l26-45A87.87,87.87,0,0,1,216,119.86c0,.07,0,.12,0,.14H164a8,8,0,0,0,0,16h52a16,16,0,0,0,11.76-5.21A16.21,16.21,0,0,0,231.93,118.42Zm-79,36.76a8,8,0,1,0-13.86,8l25.84,44.73a88.22,88.22,0,0,1-73.81,0l25.83-44.73a8,8,0,1,0-13.86-8L77.25,199.91a16,16,0,0,0,7.12,22.52,104.24,104.24,0,0,0,87.26,0,16,16,0,0,0,7.12-22.52Z"}))],["fill",l.createElement(l.Fragment,null,l.createElement("path",{d:"M116,128a12,12,0,1,1,12,12A12,12,0,0,1,116,128Zm-15.78,3.51A29,29,0,0,1,100,128a28,28,0,0,1,16.94-25.73,4,4,0,0,0,1.87-5.66L90.75,48a16,16,0,0,0-23.1-5.07,103.83,103.83,0,0,0-43.58,75.49,16.21,16.21,0,0,0,4.17,12.37A16,16,0,0,0,40,136H96.26A4,4,0,0,0,100.22,131.51Zm131.71-13.09a103.83,103.83,0,0,0-43.58-75.49A16,16,0,0,0,165.25,48L137.19,96.61a4,4,0,0,0,1.87,5.66A28,28,0,0,1,156,128a29,29,0,0,1-.22,3.51,4,4,0,0,0,4,4.49H216a16,16,0,0,0,11.76-5.21A16.21,16.21,0,0,0,231.93,118.42ZM150.8,151.48a4,4,0,0,0-5.91-1.15,28,28,0,0,1-33.78,0,4,4,0,0,0-5.91,1.15L77.25,199.91a16,16,0,0,0,7.12,22.52,104.24,104.24,0,0,0,87.26,0,16,16,0,0,0,7.12-22.52Z"}))],["light",l.createElement(l.Fragment,null,l.createElement("path",{d:"M92,134H40a13.94,13.94,0,0,1-10.28-4.56,14.17,14.17,0,0,1-3.66-10.84,101.81,101.81,0,0,1,42.75-74A14,14,0,0,1,89,49l26,45a6,6,0,0,1-10.4,6L78.62,55a2,2,0,0,0-2.88-.65A89.83,89.83,0,0,0,38,119.68a2.13,2.13,0,0,0,.57,1.67A1.88,1.88,0,0,0,40,122H92a6,6,0,0,1,0,12Zm137.94-15.4a101.81,101.81,0,0,0-42.75-74A14,14,0,0,0,167,49L141,94a6,6,0,0,0,10.4,6L177.38,55a2,2,0,0,1,2.88-.65A89.83,89.83,0,0,1,218,119.68a2.13,2.13,0,0,1-.57,1.67A1.88,1.88,0,0,1,216,122H164a6,6,0,0,0,0,12h52a13.94,13.94,0,0,0,10.28-4.56A14.17,14.17,0,0,0,229.94,118.6ZM151.2,156.18a6,6,0,1,0-10.39,6l25.82,44.73a2,2,0,0,1-.88,2.82,90.29,90.29,0,0,1-75.5,0,2,2,0,0,1-.88-2.82l25.82-44.73a6,6,0,1,0-10.39-6L79,200.91a14,14,0,0,0,6.23,19.71,102.29,102.29,0,0,0,85.58,0A14,14,0,0,0,177,200.91ZM128,138a10,10,0,1,0-10-10A10,10,0,0,0,128,138Z"}))],["regular",l.createElement(l.Fragment,null,l.createElement("path",{d:"M92,136H40a16,16,0,0,1-11.76-5.21,16.21,16.21,0,0,1-4.17-12.37A103.83,103.83,0,0,1,67.65,42.93,16,16,0,0,1,90.75,48l26,45a8,8,0,1,1-13.86,8L76.89,56A87.83,87.83,0,0,0,40,119.86a.19.19,0,0,0,.07.16L92,120a8,8,0,0,1,0,16Zm139.93-17.58a103.83,103.83,0,0,0-43.58-75.49A16,16,0,0,0,165.25,48L139.3,93a8,8,0,0,0,13.86,8l26-45A87.87,87.87,0,0,1,216,119.86c0,.07,0,.12,0,.14H164a8,8,0,0,0,0,16h52a16,16,0,0,0,11.76-5.21A16.21,16.21,0,0,0,231.93,118.42Zm-79,36.76a8,8,0,1,0-13.86,8l25.84,44.73a88.22,88.22,0,0,1-73.81,0l25.83-44.73a8,8,0,1,0-13.86-8L77.25,199.91a16,16,0,0,0,7.12,22.52,104.24,104.24,0,0,0,87.26,0,16,16,0,0,0,7.12-22.52ZM128,140a12,12,0,1,0-12-12A12,12,0,0,0,128,140Z"}))],["thin",l.createElement(l.Fragment,null,l.createElement("path",{d:"M92,132H40a12,12,0,0,1-8.81-3.91,12.2,12.2,0,0,1-3.14-9.31A99.82,99.82,0,0,1,70,46.2,12,12,0,0,1,87.29,50l25.94,45a4,4,0,0,1-6.92,4L80.36,54a4,4,0,0,0-5.78-1.27A91.83,91.83,0,0,0,36,119.5a4.2,4.2,0,0,0,1.08,3.2A3.9,3.9,0,0,0,40,124H92a4,4,0,0,1,0,8Zm136-13.22A99.82,99.82,0,0,0,186,46.2,12,12,0,0,0,168.72,50L142.77,95a4,4,0,0,0,6.92,4L175.64,54a4,4,0,0,1,5.78-1.27A91.83,91.83,0,0,1,220,119.5a4.2,4.2,0,0,1-1.08,3.2A3.9,3.9,0,0,1,216,124H164a4,4,0,0,0,0,8h52a12,12,0,0,0,8.81-3.91A12.2,12.2,0,0,0,228,118.78Zm-78.48,38.4a4,4,0,0,0-6.93,4l25.82,44.73a4,4,0,0,1,.35,3.22,3.9,3.9,0,0,1-2.12,2.41,92.24,92.24,0,0,1-77.18,0,3.9,3.9,0,0,1-2.12-2.41,4,4,0,0,1,.35-3.22l25.82-44.73a4,4,0,0,0-6.93-4L80.71,201.91a12,12,0,0,0,5.34,16.89,100.24,100.24,0,0,0,83.9,0,12,12,0,0,0,5.34-16.89ZM128,136a8,8,0,1,0-8-8A8,8,0,0,0,128,136Z"}))]]),k=l.forwardRef((e,o)=>l.createElement(h.default,{ref:o,...e,weights:x}));k.displayName="RadioactiveIcon";let f=({indeterminate:e,...o})=>e?(0,t.jsx)(k,{...o}):(0,t.jsx)(b,{...o}),v={type:"code",component:function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.Checkbox,{icon:f,label:"Custom icon",defaultChecked:!0}),(0,t.jsx)(a.Checkbox,{icon:f,label:"Custom icon: indeterminate",indeterminate:!0,mt:"sm"})]})},code:`
import { Checkbox, CheckboxIconComponent } from '@mantine/core';
import { BiohazardIcon, RadioactiveIcon } from '@phosphor-icons/react';

const CheckboxIcon: CheckboxIconComponent = ({ indeterminate, ...others }) =>
  indeterminate ? <RadioactiveIcon {...others} /> : <BiohazardIcon {...others} />;

function Demo() {
  return (
    <>
      <Checkbox icon={CheckboxIcon} label="Custom icon" defaultChecked />
      <Checkbox icon={CheckboxIcon} label="Custom icon: indeterminate" indeterminate mt="sm" />
    </>
  );
}
`};var C=e.i(725695);let g={type:"configurator",component:function(e){return(0,t.jsx)(a.Checkbox.Group,{defaultValue:["react"],...e,children:(0,t.jsxs)(C.Group,{mt:"xs",children:[(0,t.jsx)(a.Checkbox,{value:"react",label:"React"}),(0,t.jsx)(a.Checkbox,{value:"svelte",label:"Svelte"}),(0,t.jsx)(a.Checkbox,{value:"ng",label:"Angular"}),(0,t.jsx)(a.Checkbox,{value:"vue",label:"Vue"})]})})},code:`
import { Checkbox, Group } from '@mantine/core';


function Demo() {
  return (
    <Checkbox.Group
      defaultValue={['react']}
      {{props}}
    >
      <Group mt="xs">
        <Checkbox value="react" label="React" />
        <Checkbox value="svelte" label="Svelte" />
        <Checkbox value="ng" label="Angular" />
        <Checkbox value="vue" label="Vue" />
      </Group>
    </Checkbox.Group>
  );
}
`,centered:!0,maxWidth:"100%",controls:[{prop:"label",type:"string",initialValue:"Select your favorite frameworks/libraries",libraryValue:""},{prop:"description",type:"string",initialValue:"This is anonymous",libraryValue:""},{prop:"error",type:"string",initialValue:"",libraryValue:""},{prop:"withAsterisk",type:"boolean",initialValue:!0,libraryValue:!1}]};var y=e.i(79897);let j={type:"code",component:function(){return(0,t.jsx)(a.Checkbox,{label:(0,t.jsxs)(t.Fragment,{children:["I accept"," ",(0,t.jsx)(y.Anchor,{href:"https://mantine.dev",target:"_blank",inherit:!0,children:"terms and conditions"})]})})},code:`
import { Checkbox, Anchor } from '@mantine/core';

function Demo() {
  return (
    <Checkbox
      label={
        <>
          I accept{' '}
          <Anchor href="https://mantine.dev" target="_blank" inherit>
            terms and conditions
          </Anchor>
        </>
      }
    />
  );
}
`};var R="m_2cb8989f",S="m_69ff5ed7",A="m_cf98ad9f",w=e.i(883364);let G={type:"code",centered:!0,maxWidth:320,component:function(){let[e,o]=(0,l.useState)(!1);return(0,t.jsx)(a.Checkbox.Card,{className:R,checked:e,onClick:()=>o(e=>!e),children:(0,t.jsxs)(C.Group,{wrap:"nowrap",align:"flex-start",children:[(0,t.jsx)(a.Checkbox.Indicator,{}),(0,t.jsxs)("div",{children:[(0,t.jsx)(w.Text,{className:S,children:"mantine/core"}),(0,t.jsx)(w.Text,{className:A,children:"Core components library: inputs, buttons, overlays, etc."})]})]})})},defaultExpanded:!1,code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { useState } from 'react';
import { Checkbox, Group, Text } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox.Card
      className={classes.root}
      checked={checked}
      onClick={() => setChecked((c) => !c)}
    >
      <Group wrap="nowrap" align="flex-start">
        <Checkbox.Indicator />

        <div>
          <Text className={classes.label}>mantine/core</Text>
          <Text className={classes.description}>
            Core components library: inputs, buttons, overlays, etc.
          </Text>
        </div>
      </Group>
    </Checkbox.Card>
  );
}
`},{fileName:"Demo.module.css",language:"scss",code:`.root {
  position: relative;
  padding: var(--mantine-spacing-md);
  transition: border-color 150ms ease;

  &[data-checked] {
    border-color: var(--mantine-primary-color-filled);
  }

  @mixin hover {
    @mixin light {
      background-color: var(--mantine-color-gray-0);
    }

    @mixin dark {
      background-color: var(--mantine-color-dark-6);
    }
  }
}

.label {
  font-weight: 600;
  font-size: var(--mantine-font-size-sm);
  line-height: 1.3;
  color: var(--mantine-color-bright);
}

.description {
  margin-top: 4px;
  color: var(--mantine-color-dimmed);
  font-size: var(--mantine-font-size-xs);
}
`}]};var V=e.i(529755);let D=`
import { Checkbox } from '@mantine/core';

function Demo() {
  return (
    <Checkbox
      label="Checkbox"
      description="Checkbox description"
      error="Checkbox error"
      defaultChecked
     {{props}}
    />
  );
}
`,T={type:"styles-api",data:V.CheckboxStylesApi,component:function(e){return(0,t.jsx)(a.Checkbox,{label:"Checkbox",description:"Checkbox description",error:"Checkbox error",defaultChecked:!0,...e})},code:D,centered:!0};var I={root:"m_43bfb50c"};let N={type:"code",component:function(){let[e,o]=(0,l.useState)(!1);return(0,t.jsx)(a.Checkbox,{classNames:I,label:"Checkbox button",checked:e,onChange:e=>o(e.currentTarget.checked),wrapperProps:{onClick:()=>o(e=>!e)}})},centered:!0,defaultExpanded:!1,code:[{fileName:"Demo.tsx",code:`
import { useState } from 'react';
import { Checkbox } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox
      classNames={classes}
      label="Checkbox button"
      checked={checked}
      onChange={(event) => setChecked(event.currentTarget.checked)}
      wrapperProps={{
        onClick: () => setChecked((c) => !c),
      }}
    />
  );
}
`,language:"tsx"},{fileName:"Demo.module.css",code:`
.root {
  border: 1px solid light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-4));
  padding: var(--mantine-spacing-xs) var(--mantine-spacing-sm);
  border-radius: var(--mantine-radius-md);
  font-weight: 600;
  transition:
    color 100ms ease,
    background-color 100ms ease,
    border-color 100ms ease;
  cursor: pointer;

  &[data-checked] {
    background-color: var(--mantine-color-blue-filled);
    border-color: var(--mantine-color-blue-filled);
    color: var(--mantine-color-white);
  }

  & * {
    pointer-events: none;
    user-select: none;
  }
}
`,language:"scss"}]},z={type:"code",component:function(){return(0,t.jsx)(a.Checkbox,{defaultChecked:!0,color:"lime.4",iconColor:"dark.8",size:"md",label:"Bright lime checkbox"})},code:`
import { Checkbox } from '@mantine/core';

function Demo() {
  return (
    <Checkbox
      defaultChecked
      color="lime.4"
      iconColor="dark.8"
      size="md"
      label="Bright lime checkbox"
    />
  );
}
`,centered:!0};var Z=e.i(431868);let E={type:"code",component:function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(Z.Tooltip,{label:"Checkbox with tooltip",children:(0,t.jsx)(a.Checkbox,{label:"Tooltip on checkbox only"})}),(0,t.jsx)(Z.Tooltip,{label:"Checkbox with tooltip",refProp:"rootRef",children:(0,t.jsx)(a.Checkbox,{label:"Tooltip the entire element",mt:"md"})})]})},code:`
import { Tooltip, Checkbox } from '@mantine/core';

function Demo() {
  return (
    <>
      <Tooltip label="Checkbox with tooltip">
        <Checkbox label="Tooltip on checkbox only" />
      </Tooltip>

      <Tooltip label="Checkbox with tooltip" refProp="rootRef">
        <Checkbox label="Tooltip the entire element" mt="md" />
      </Tooltip>
    </>
  );
}
`,centered:!0};var M=e.i(951254),F=e.i(530514);let _=`.root {
  --checkbox-size-xxl: 42px;
  --checkbox-size-xxs: 14px;

  &[data-size='xxl'] {
    .label {
      font-size: 22px;
      line-height: 40px;
    }
  }

  &[data-size='xxs'] {
    .label {
      font-size: 10px;
      line-height: 14px;
    }
  }
}
`,L=`
import { MantineProvider, Checkbox, createTheme } from '@mantine/core';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    Checkbox: Checkbox.extend({ classNames: classes }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Checkbox size="xxs" label="Extra small checkbox" />
      <Checkbox size="xxl" label="Extra large checkbox" mt="md" />
    </MantineProvider>
  );
}
`,P=(0,F.createTheme)({components:{Checkbox:a.Checkbox.extend({classNames:{root:"m_4308addd",label:"m_1db1f159"}})}}),B={type:"code",centered:!0,component:function(){return(0,t.jsxs)(M.MantineThemeProvider,{theme:P,children:[(0,t.jsx)(a.Checkbox,{size:"xxs",label:"Extra small checkbox"}),(0,t.jsx)(a.Checkbox,{size:"xxl",label:"Extra large checkbox",mt:"md"})]})},code:[{fileName:"Demo.tsx",code:L,language:"tsx"},{fileName:"Demo.module.css",code:_,language:"scss"}]},W=[{name:"mantine/core",description:"Core components library: inputs, buttons, overlays, etc."},{name:"mantine/hooks",description:"Collection of reusable hooks for React applications."},{name:"mantine/notifications",description:"Notifications system"}],H={type:"code",centered:!0,maxWidth:320,component:function(){let[e,o]=(0,l.useState)([]),r=W.map(e=>(0,t.jsx)(a.Checkbox.Card,{className:R,value:e.name,children:(0,t.jsxs)(C.Group,{wrap:"nowrap",align:"flex-start",children:[(0,t.jsx)(a.Checkbox.Indicator,{}),(0,t.jsxs)("div",{children:[(0,t.jsx)(w.Text,{className:S,children:e.name}),(0,t.jsx)(w.Text,{className:A,children:e.description})]})]})},e.name));return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.Checkbox.Group,{value:e,onChange:o,label:"Pick packages to install",description:"Choose all packages that you will need in your application",children:(0,t.jsx)(m.Stack,{pt:"md",gap:"xs",children:r})}),(0,t.jsxs)(w.Text,{fz:"xs",mt:"md",children:["CurrentValue: ",e.join(", ")||"–"]})]})},defaultExpanded:!1,code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { useState } from 'react';
import { Checkbox, Group, Stack, Text } from '@mantine/core';
import classes from './Demo.module.css';

const data = [
  {
    name: 'mantine/core',
    description: 'Core components library: inputs, buttons, overlays, etc.',
  },
  { name: 'mantine/hooks', description: 'Collection of reusable hooks for React applications.' },
  { name: 'mantine/notifications', description: 'Notifications system' },
];

function Demo() {
  const [value, setValue] = useState<string[]>([]);

  const cards = data.map((item) => (
    <Checkbox.Card className={classes.root} value={item.name} key={item.name}>
      <Group wrap="nowrap" align="flex-start">
        <Checkbox.Indicator />
        <div>
          <Text className={classes.label}>{item.name}</Text>
          <Text className={classes.description}>{item.description}</Text>
        </div>
      </Group>
    </Checkbox.Card>
  ));

  return (
    <>
      <Checkbox.Group
        value={value}
        onChange={setValue}
        label="Pick packages to install"
        description="Choose all packages that you will need in your application"
      >
        <Stack pt="md" gap="xs">
          {cards}
        </Stack>
      </Checkbox.Group>

      <Text fz="xs" mt="md">
        CurrentValue: {value.join(', ') || '–'}
      </Text>
    </>
  );
}
`},{fileName:"Demo.module.css",language:"scss",code:`.root {
  position: relative;
  padding: var(--mantine-spacing-md);
  transition: border-color 150ms ease;

  &[data-checked] {
    border-color: var(--mantine-primary-color-filled);
  }

  @mixin hover {
    @mixin light {
      background-color: var(--mantine-color-gray-0);
    }

    @mixin dark {
      background-color: var(--mantine-color-dark-6);
    }
  }
}

.label {
  font-weight: 600;
  font-size: var(--mantine-font-size-sm);
  line-height: 1.3;
  color: var(--mantine-color-bright);
}

.description {
  margin-top: 4px;
  color: var(--mantine-color-dimmed);
  font-size: var(--mantine-font-size-xs);
}
`}]},O={type:"code",component:function(){return(0,t.jsxs)(C.Group,{children:[(0,t.jsx)(a.Checkbox.Indicator,{}),(0,t.jsx)(a.Checkbox.Indicator,{checked:!0}),(0,t.jsx)(a.Checkbox.Indicator,{indeterminate:!0}),(0,t.jsx)(a.Checkbox.Indicator,{disabled:!0}),(0,t.jsx)(a.Checkbox.Indicator,{disabled:!0,checked:!0}),(0,t.jsx)(a.Checkbox.Indicator,{disabled:!0,indeterminate:!0})]})},code:`
import { Checkbox, Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Checkbox.Indicator />
      <Checkbox.Indicator checked />
      <Checkbox.Indicator indeterminate />
      <Checkbox.Indicator disabled />
      <Checkbox.Indicator disabled checked />
      <Checkbox.Indicator disabled indeterminate />
    </Group>
  );
}
`},q={type:"code",component:function(){return(0,t.jsxs)(m.Stack,{children:[(0,t.jsx)(a.Checkbox,{checked:!0,label:"regular checkbox",size:"lg",color:"lime.4",onChange:()=>{}}),(0,t.jsx)(a.Checkbox,{autoContrast:!0,checked:!0,label:"autoContrast checkbox",size:"lg",color:"lime.4",onChange:()=>{}})]})},code:`
import { Checkbox, Stack } from '@mantine/core';

function Demo() {
  return (
    <Stack>
      <Checkbox checked label="regular checkbox" size="lg" color="lime.4" />
      <Checkbox autoContrast checked label="autoContrast checkbox" size="lg" color="lime.4" />
    </Stack>
  );
}
`,centered:!0},U={type:"code",component:function(){return(0,t.jsxs)(m.Stack,{children:[(0,t.jsx)(a.Checkbox,{label:"With boolean error",error:!0}),(0,t.jsx)(a.Checkbox,{label:"With error message",error:"Must be checked"}),(0,t.jsx)(a.Checkbox,{label:"With error message",error:"No error styles",withErrorStyles:!1})]})},code:`
import { Checkbox, Stack } from '@mantine/core';

function Demo() {
  return (
    <Stack>
      <Checkbox label="With boolean error" error />
      <Checkbox label="With error message" error="Must be checked" />
      <Checkbox label="With error message" error="No error styles" withErrorStyles={false} />
    </Stack>
  );
}
`,centered:!0};var X=e.i(485108),Y=e.i(387703),K=e.i(582498);let J={type:"code",component:function(){let e=(0,K.useForm)({mode:"uncontrolled",initialValues:{terms:!1},validate:{terms:(0,Y.isNotEmpty)("You must accept terms and conditions")}});return(0,t.jsxs)("form",{onSubmit:e.onSubmit(e=>console.log(e)),children:[(0,t.jsx)(a.Checkbox,{label:"I accept the terms and conditions",...e.getInputProps("terms",{type:"checkbox"})},e.key("terms")),(0,t.jsx)(X.Button,{type:"submit",mt:"md",children:"Submit"})]})},code:`
import { Button, Checkbox } from '@mantine/core';
import { isNotEmpty, useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { terms: false },
    validate: {
      terms: isNotEmpty('You must accept terms and conditions'),
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Checkbox
        label="I accept the terms and conditions"
        key={form.key('terms')}
        {...form.getInputProps('terms', { type: 'checkbox' })}
      />

      <Button type="submit" mt="md">
        Submit
      </Button>
    </form>
  );
}
`,maxWidth:340,centered:!0};var Q=e.i(638895);let $={type:"code",component:function(){let e=(0,K.useForm)({mode:"uncontrolled",initialValues:{frameworks:[]},validate:{frameworks:(0,Q.hasLength)({min:1},"Select at least one framework")}});return(0,t.jsxs)("form",{onSubmit:e.onSubmit(e=>console.log(e)),children:[(0,l.createElement)(a.Checkbox.Group,{...e.getInputProps("frameworks"),key:e.key("frameworks"),label:"Select your favorite frameworks/libraries",withAsterisk:!0},(0,t.jsxs)(C.Group,{my:5,children:[(0,t.jsx)(a.Checkbox,{value:"react",label:"React"}),(0,t.jsx)(a.Checkbox,{value:"svelte",label:"Svelte"}),(0,t.jsx)(a.Checkbox,{value:"ng",label:"Angular"}),(0,t.jsx)(a.Checkbox,{value:"vue",label:"Vue"})]})),(0,t.jsx)(X.Button,{type:"submit",mt:"md",children:"Submit"})]})},code:`
import { Button, Checkbox, Group } from '@mantine/core';
import { hasLength, useForm } from '@mantine/form';

interface FormValues {
  frameworks: string[];
}

function Demo() {
  const form = useForm<FormValues>({
    mode: 'uncontrolled',
    initialValues: { frameworks: [] },
    validate: {
      frameworks: hasLength({ min: 1 }, 'Select at least one framework'),
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Checkbox.Group
        {...form.getInputProps('frameworks')}
        key={form.key('frameworks')}
        label="Select your favorite frameworks/libraries"
        withAsterisk
      >
        <Group my={5}>
          <Checkbox value="react" label="React" />
          <Checkbox value="svelte" label="Svelte" />
          <Checkbox value="ng" label="Angular" />
          <Checkbox value="vue" label="Vue" />
        </Group>
      </Checkbox.Group>

      <Button type="submit" mt="md">
        Submit
      </Button>
    </form>
  );
}
`},ee={type:"code",component:function(){return(0,t.jsx)(a.Checkbox.Group,{defaultValue:["react"],maxSelectedValues:2,children:(0,t.jsxs)(C.Group,{children:[(0,t.jsx)(a.Checkbox,{value:"react",label:"React"}),(0,t.jsx)(a.Checkbox,{value:"svelte",label:"Svelte"}),(0,t.jsx)(a.Checkbox,{value:"ng",label:"Angular"}),(0,t.jsx)(a.Checkbox,{value:"vue",label:"Vue"})]})})},code:`
import { Checkbox, Group } from '@mantine/core';

function Demo() {
  return (
    <Checkbox.Group defaultValue={['react']} maxSelectedValues={2}>
      <Group>
        <Checkbox value="react" label="React" />
        <Checkbox value="svelte" label="Svelte" />
        <Checkbox value="ng" label="Angular" />
        <Checkbox value="vue" label="Vue" />
      </Group>
    </Checkbox.Group>
  );
}
`},eo={type:"code",component:function(){return(0,t.jsx)(a.Checkbox.Group,{disabled:!0,label:"Select your favorite frameworks/libraries",description:"This is anonymous",children:(0,t.jsxs)(m.Stack,{mt:"xs",children:[(0,t.jsx)(a.Checkbox,{value:"react",label:"React"}),(0,t.jsx)(a.Checkbox,{value:"svelte",label:"Svelte"}),(0,t.jsx)(a.Checkbox,{value:"angular",label:"Angular"}),(0,t.jsx)(a.Checkbox,{value:"vue",label:"Vue"})]})})},code:`
import { Checkbox } from '@mantine/core';

function Demo() {
  return (
    <Checkbox.Group disabled>
      <Stack>
        <Checkbox value="react" label="React" />
        <Checkbox value="svelte" label="Svelte" />
        <Checkbox value="angular" label="Angular" />
        <Checkbox value="vue" label="Vue" />
      </Stack>
    </Checkbox.Group>
  );
}
`,centered:!0};var ea=(0,o.__exportAll)({anchor:()=>j,autoContrast:()=>q,card:()=>G,cardGroup:()=>H,configurator:()=>r,customSize:()=>B,customize:()=>N,error:()=>U,groupConfigurator:()=>g,groupDisabled:()=>eo,groupWithUseForm:()=>$,icon:()=>v,iconColor:()=>z,indeterminate:()=>d,indicator:()=>O,maxSelectedValues:()=>ee,states:()=>u,stylesApi:()=>T,tooltip:()=>E,withUseForm:()=>J});e.s(["CheckboxDemos",0,ea],975419)},96783,e=>{"use strict";var o=e.i(648863),a=e.i(725695),t=e.i(690920),r=e.i(391398);let i={type:"configurator",component:function(e){return(0,r.jsx)(t.Radio.Group,{defaultValue:"react",name:"favoriteFramework",...e,children:(0,r.jsxs)(a.Group,{mt:"xs",children:[(0,r.jsx)(t.Radio,{value:"react",label:"React"}),(0,r.jsx)(t.Radio,{value:"svelte",label:"Svelte"}),(0,r.jsx)(t.Radio,{value:"ng",label:"Angular"}),(0,r.jsx)(t.Radio,{value:"vue",label:"Vue"})]})})},centered:!0,code:`
import { Radio, Group } from '@mantine/core';


function Demo() {
  return (
    <Radio.Group
      name="favoriteFramework"
      {{props}}
    >
      <Group mt="xs">
        <Radio value="react" label="React" />
        <Radio value="svelte" label="Svelte" />
        <Radio value="ng" label="Angular" />
        <Radio value="vue" label="Vue" />
      </Group>
    </Radio.Group>
  );
}
`,controls:[{prop:"label",type:"string",initialValue:"Select your favorite framework/library",libraryValue:""},{prop:"description",type:"string",initialValue:"This is anonymous",libraryValue:""},{prop:"error",type:"string",initialValue:"",libraryValue:""},{prop:"withAsterisk",type:"boolean",initialValue:!0,libraryValue:!1}]},n={type:"configurator",component:function(e){return(0,r.jsx)(t.Radio.Group,{name:"demo",defaultValue:"react",children:(0,r.jsx)(t.Radio,{value:"react",...e})})},code:`
import { Radio } from '@mantine/core';


function Demo() {
  return (
    <Radio
      {{props}}
    />
  );
}
`,centered:!0,controls:[{prop:"labelPosition",type:"segmented",data:[{value:"right",label:"Right"},{value:"left",label:"Left"}],initialValue:"right",libraryValue:"right"},{prop:"label",type:"string",initialValue:"I cannot be unchecked",libraryValue:""},{prop:"description",type:"string",initialValue:"",libraryValue:""},{prop:"error",type:"string",initialValue:"",libraryValue:""},{prop:"size",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"variant",type:"segmented",data:[{value:"filled",label:"Filled"},{value:"outline",label:"Outline"}],initialValue:"filled",libraryValue:"filled"}]},l={type:"code",centered:!0,component:function(){return(0,r.jsx)(t.Radio.Group,{disabled:!0,name:"favoriteFramework",label:"Select your favorite framework/library",description:"This is anonymous",children:(0,r.jsxs)(a.Group,{mt:"xs",children:[(0,r.jsx)(t.Radio,{label:"React",value:"react"}),(0,r.jsx)(t.Radio,{label:"Angular",value:"nu"}),(0,r.jsx)(t.Radio,{label:"Svelte",value:"sv"})]})})},code:`
import { Radio, Group } from '@mantine/core';

function Demo() {
  return (
    <Radio.Group
      disabled
      name="favoriteFramework"
      label="Select your favorite framework/library"
      description="This is anonymous"
    >
      <Group mt="xs">
        <Radio label="React" value="react" />
        <Radio label="Angular" value="nu" />
        <Radio label="Svelte" value="sv" />
      </Group>
    </Radio.Group>
  );
}
`};var c=e.i(956031);let s={type:"code",centered:!0,component:function(){return(0,r.jsx)(t.Radio,{icon:c.CheckIcon,label:"Custom check icon",name:"check",value:"check",defaultChecked:!0})},code:`
import { Radio, CheckIcon } from '@mantine/core';

function Demo() {
  return (
    <Radio icon={CheckIcon} label="Custom check icon" name="check" value="check" defaultChecked />
  );
}
`},d={type:"code",centered:!0,component:function(){return(0,r.jsx)(t.Radio,{iconColor:"dark.8",color:"lime.4",label:"Custom icon color",name:"check",value:"check",defaultChecked:!0})},code:`
import { Radio } from '@mantine/core';

function Demo() {
  return (
    <Radio
      iconColor="dark.8"
      color="lime.4"
      label="Custom icon color"
      name="check"
      value="check"
      defaultChecked
    />
  );
}
`};var m=e.i(277991);let u=`
import { Radio } from '@mantine/core';

function Demo() {
  return (
    <Radio
      label="Radio"
      description="Radio description"
      error="Radio error"
      defaultChecked
     {{props}}
    />
  );
}
`,h={type:"styles-api",data:m.RadioStylesApi,component:function(e){return(0,r.jsx)(t.Radio,{label:"Radio",description:"Radio description",error:"Radio error",defaultChecked:!0,...e})},code:u,centered:!0};var p=e.i(431868);let b={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(p.Tooltip,{label:"Radio with tooltip",children:(0,r.jsx)(t.Radio,{label:"Tooltip on radio only"})}),(0,r.jsx)(p.Tooltip,{label:"Radio with tooltip",refProp:"rootRef",children:(0,r.jsx)(t.Radio,{label:"Tooltip the entire element",mt:"md"})})]})},code:`
import { Tooltip, Radio } from '@mantine/core';

function Demo() {
  return (
    <>
      <Tooltip label="Radio with tooltip">
        <Radio label="Tooltip on radio only" />
      </Tooltip>

      <Tooltip label="Radio with tooltip" refProp="rootRef">
        <Radio label="Tooltip the entire element" mt="md" />
      </Tooltip>
    </>
  );
}
`,centered:!0};var x=e.i(671640);let k={type:"code",component:function(){return(0,r.jsxs)(x.Stack,{children:[(0,r.jsx)(t.Radio,{checked:!1,onChange:()=>{},label:"Default radio"}),(0,r.jsx)(t.Radio,{checked:!0,onChange:()=>{},label:"Checked radio"}),(0,r.jsx)(t.Radio,{checked:!0,variant:"outline",onChange:()=>{},label:"Outline checked radio"}),(0,r.jsx)(t.Radio,{disabled:!0,label:"Disabled radio"}),(0,r.jsx)(t.Radio,{disabled:!0,checked:!0,onChange:()=>{},label:"Disabled checked radio"})]})},code:`
import { Radio, Stack } from '@mantine/core';

function Demo() {
  return (
    <Stack>
      <Radio checked={false} onChange={() => {}} label="Default radio" />
      <Radio checked onChange={() => {}} label="Checked radio" />
      <Radio checked variant="outline" onChange={() => {}} label="Outline checked radio" />
      <Radio disabled label="Disabled radio" />
      <Radio disabled checked onChange={() => {}} label="Disabled checked radio" />
    </Stack>
  );
}
`};var f="m_6fb185a7",v="m_862412cf",C="m_7b348797",g=e.i(191788),y=e.i(883364);let j={type:"code",centered:!0,maxWidth:320,component:function(){let[e,o]=(0,g.useState)(!1);return(0,r.jsx)(t.Radio.Card,{className:f,checked:e,onClick:()=>o(e=>!e),children:(0,r.jsxs)(a.Group,{wrap:"nowrap",align:"flex-start",children:[(0,r.jsx)(t.Radio.Indicator,{}),(0,r.jsxs)("div",{children:[(0,r.jsx)(y.Text,{className:v,children:"@mantine/core"}),(0,r.jsx)(y.Text,{className:C,children:"Core components library: inputs, buttons, overlays, etc."})]})]})})},defaultExpanded:!1,code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { useState } from 'react';
import { Radio, Group, Text } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  const [checked, setChecked] = useState(false);

  return (
    <Radio.Card
      className={classes.root}
      checked={checked}
      onClick={() => setChecked((c) => !c)}
    >
      <Group wrap="nowrap" align="flex-start">
        <Radio.Indicator />
        <div>
          <Text className={classes.label}>@mantine/core</Text>
          <Text className={classes.description}>
            Core components library: inputs, buttons, overlays, etc.
          </Text>
        </div>
      </Group>
    </Radio.Card>
  );
}
`},{fileName:"Demo.module.css",language:"scss",code:`.root {
  position: relative;
  padding: var(--mantine-spacing-md);
  transition: border-color 150ms ease;

  &[data-checked] {
    border-color: var(--mantine-primary-color-filled);
  }

  @mixin hover {
    @mixin light {
      background-color: var(--mantine-color-gray-0);
    }

    @mixin dark {
      background-color: var(--mantine-color-dark-6);
    }
  }
}

.label {
  font-family: var(--mantine-font-family-monospace);
  font-weight: bold;
  font-size: var(--mantine-font-size-md);
  line-height: 1.3;
  color: var(--mantine-color-bright);
}

.description {
  margin-top: 8px;
  color: var(--mantine-color-dimmed);
  font-size: var(--mantine-font-size-xs);
}
`}]},R=[{name:"@mantine/core",description:"Core components library: inputs, buttons, overlays, etc."},{name:"@mantine/hooks",description:"Collection of reusable hooks for React applications."},{name:"@mantine/notifications",description:"Notifications system"}],S={type:"code",centered:!0,maxWidth:320,component:function(){let[e,o]=(0,g.useState)(null),i=R.map(e=>(0,r.jsx)(t.Radio.Card,{className:f,value:e.name,children:(0,r.jsxs)(a.Group,{wrap:"nowrap",align:"flex-start",children:[(0,r.jsx)(t.Radio.Indicator,{}),(0,r.jsxs)("div",{children:[(0,r.jsx)(y.Text,{className:v,children:e.name}),(0,r.jsx)(y.Text,{className:C,children:e.description})]})]})},e.name));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.Radio.Group,{value:e,onChange:o,label:"Pick one package to install",description:"Choose a package that you will need in your application",children:(0,r.jsx)(x.Stack,{pt:"md",gap:"xs",children:i})}),(0,r.jsxs)(y.Text,{fz:"xs",mt:"md",children:["CurrentValue: ",e||"–"]})]})},defaultExpanded:!1,code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { useState } from 'react';
import { Radio, Group, Stack, Text } from '@mantine/core';
import classes from './Demo.module.css';

const data = [
  {
    name: '@mantine/core',
    description: 'Core components library: inputs, buttons, overlays, etc.',
  },
  { name: '@mantine/hooks', description: 'Collection of reusable hooks for React applications.' },
  { name: '@mantine/notifications', description: 'Notifications system' },
];

function Demo() {
  const [value, setValue] = useState<string | null>(null);

  const cards = data.map((item) => (
    <Radio.Card className={classes.root} value={item.name} key={item.name}>
      <Group wrap="nowrap" align="flex-start">
        <Radio.Indicator />
        <div>
          <Text className={classes.label}>{item.name}</Text>
          <Text className={classes.description}>{item.description}</Text>
        </div>
      </Group>
    </Radio.Card>
  ));

  return (
    <>
      <Radio.Group
        value={value}
        onChange={setValue}
        label="Pick one package to install"
        description="Choose a package that you will need in your application"
      >
        <Stack pt="md" gap="xs">
          {cards}
        </Stack>
      </Radio.Group>

      <Text fz="xs" mt="md">
        CurrentValue: {value || '–'}
      </Text>
    </>
  );
}
`},{fileName:"Demo.module.css",language:"scss",code:`.root {
  position: relative;
  padding: var(--mantine-spacing-md);
  transition: border-color 150ms ease;

  &[data-checked] {
    border-color: var(--mantine-primary-color-filled);
  }

  @mixin hover {
    @mixin light {
      background-color: var(--mantine-color-gray-0);
    }

    @mixin dark {
      background-color: var(--mantine-color-dark-6);
    }
  }
}

.label {
  font-family: var(--mantine-font-family-monospace);
  font-weight: bold;
  font-size: var(--mantine-font-size-md);
  line-height: 1.3;
  color: var(--mantine-color-bright);
}

.description {
  margin-top: 8px;
  color: var(--mantine-color-dimmed);
  font-size: var(--mantine-font-size-xs);
}
`}]},A={type:"code",component:function(){return(0,r.jsxs)(a.Group,{children:[(0,r.jsx)(t.Radio.Indicator,{}),(0,r.jsx)(t.Radio.Indicator,{checked:!0}),(0,r.jsx)(t.Radio.Indicator,{disabled:!0}),(0,r.jsx)(t.Radio.Indicator,{disabled:!0,checked:!0})]})},code:`
import { Radio, Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Radio.Indicator />
      <Radio.Indicator checked />
      <Radio.Indicator disabled />
      <Radio.Indicator disabled checked />
    </Group>
  );
}
`},w={type:"code",centered:!0,component:function(){return(0,r.jsxs)(a.Group,{children:[(0,r.jsx)(t.Radio,{checked:!0,disabled:!0,label:"React",value:"react"}),(0,r.jsx)(t.Radio,{disabled:!0,label:"Angular",value:"nu"}),(0,r.jsx)(t.Radio,{disabled:!0,label:"Svelte",value:"sv"})]})},code:`
import { Radio, Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Radio checked disabled label="React" value="react" />
      <Radio disabled label="Angular" value="nu" />
      <Radio disabled label="Svelte" value="sv" />
    </Group>
  );
}
`};var G=(0,o.__exportAll)({card:()=>j,cardGroup:()=>S,configurator:()=>n,disabled:()=>w,groupConfigurator:()=>i,groupDisabled:()=>l,icon:()=>s,iconColor:()=>d,indicator:()=>A,states:()=>k,stylesApi:()=>h,tooltip:()=>b});e.s(["RadioDemos",0,G],96783)},813788,e=>{"use strict";var o=e.i(391398),a=e.i(38856),t=e.i(975419),r=e.i(822633),i=e.i(96783),n=e.i(604531),l=e.i(83967);e.i(603441);var c=e.i(62558);e.i(457450);var s=e.i(418026);let d=(0,c.Layout)(s.MDX_DATA.Changelog7100);function m(e){let c={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.useMDXComponents)(),...e.components},{Demo:s}=c;return s||function(e,o){throw Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c.h2,{id:"tree-component",children:"Tree component"}),"\n",(0,o.jsxs)(c.p,{children:["New ",(0,o.jsx)(c.a,{href:"/core/tree",children:"Tree"})," component:"]}),"\n",(0,o.jsx)(s,{data:l.TreeDemos.files}),"\n",(0,o.jsx)(c.h2,{id:"formgetinputnode",children:"form.getInputNode"}),"\n",(0,o.jsxs)(c.p,{children:["New ",(0,o.jsx)(c.code,{children:"form.getInputNode(path)"})," handler returns input DOM node for the given field path.\nForm example, it can be used to focus input on form submit if there is an error:"]}),"\n",(0,o.jsx)(s,{data:r.FormDemos.focusError}),"\n",(0,o.jsx)(c.h2,{id:"container-queries-in-simplegrid",children:"Container queries in SimpleGrid"}),"\n",(0,o.jsxs)(c.p,{children:["You can now use ",(0,o.jsx)(c.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries",children:"container queries"}),"\nin ",(0,o.jsx)(c.a,{href:"/core/simple-grid",children:"SimpleGrid"})," component. With container queries, grid columns and spacing\nwill be adjusted based on the container width, not the viewport width."]}),"\n",(0,o.jsx)(c.p,{children:"Example of using container queries. To see how the grid changes, resize the root element\nof the demo with the resize handle located at the bottom right corner of the demo:"}),"\n",(0,o.jsx)(s,{data:n.SimpleGridDemos.container}),"\n",(0,o.jsx)(c.h2,{id:"checkbox-and-radio-indicators",children:"Checkbox and Radio indicators"}),"\n",(0,o.jsxs)(c.p,{children:["New ",(0,o.jsx)(c.a,{href:"/core/checkbox/#checkboxindicator",children:"Checkbox.Indicator"})," and ",(0,o.jsx)(c.a,{href:"/core/radio/#radioindicator",children:"Radio.Indicator"}),"\ncomponents look exactly the same as ",(0,o.jsx)(c.code,{children:"Checkbox"})," and ",(0,o.jsx)(c.code,{children:"Radio"})," components, but they do not\nhave any semantic meaning, they are just visual representations of checkbox and radio states."]}),"\n",(0,o.jsxs)(c.p,{children:[(0,o.jsx)(c.code,{children:"Checkbox.Indicator"})," component:"]}),"\n",(0,o.jsx)(s,{data:t.CheckboxDemos.indicator}),"\n",(0,o.jsxs)(c.p,{children:[(0,o.jsx)(c.code,{children:"Radio.Indicator"})," component:"]}),"\n",(0,o.jsx)(s,{data:i.RadioDemos.indicator}),"\n",(0,o.jsx)(c.h2,{id:"checkbox-and-radio-cards",children:"Checkbox and Radio cards"}),"\n",(0,o.jsxs)(c.p,{children:["New ",(0,o.jsx)(c.a,{href:"/core/checkbox/#checkboxcard-component",children:"Checkbox.Card"})," and ",(0,o.jsx)(c.a,{href:"/core/radio/#radiocard-component",children:"Radio.Card"}),"\ncomponents can be used as replacements for ",(0,o.jsx)(c.code,{children:"Checkbox"})," and ",(0,o.jsx)(c.code,{children:"Radio"})," to build custom cards/buttons/etc.\nthat work as checkboxes and radios. Components are accessible by default and support the same\nkeyboard interactions as ",(0,o.jsx)(c.code,{children:'input[type="checkbox"]'})," and ",(0,o.jsx)(c.code,{children:'input[type="radio"]'}),"."]}),"\n",(0,o.jsxs)(c.p,{children:[(0,o.jsx)(c.code,{children:"Checkbox.Card"})," component:"]}),"\n",(0,o.jsx)(s,{data:t.CheckboxDemos.card}),"\n",(0,o.jsxs)(c.p,{children:[(0,o.jsx)(c.code,{children:"Checkbox.Card"})," component with ",(0,o.jsx)(c.code,{children:"Checkbox.Group"}),":"]}),"\n",(0,o.jsx)(s,{data:t.CheckboxDemos.cardGroup}),"\n",(0,o.jsxs)(c.p,{children:[(0,o.jsx)(c.code,{children:"Radio.Card"})," component:"]}),"\n",(0,o.jsx)(s,{data:i.RadioDemos.card}),"\n",(0,o.jsxs)(c.p,{children:[(0,o.jsx)(c.code,{children:"Radio.Card"})," component with ",(0,o.jsx)(c.code,{children:"Radio.Group"}),":"]}),"\n",(0,o.jsx)(s,{data:i.RadioDemos.cardGroup}),"\n",(0,o.jsx)(c.h2,{id:"bd-style-prop",children:"bd style prop"}),"\n",(0,o.jsxs)(c.p,{children:["New ",(0,o.jsx)(c.a,{href:"/styles/style-props/",children:"bd style prop"})," can be used to set ",(0,o.jsx)(c.code,{children:"border"})," CSS property.\nIt is available in all components that support style props."]}),"\n",(0,o.jsx)(c.p,{children:"Border width value is automatically converted to rem. For border color you can reference\ntheme colors similar to other style props:"}),"\n",(0,o.jsx)(c.pre,{children:(0,o.jsx)(c.code,{className:"language-tsx",children:"import { Box } from '@mantine/core';\n\nfunction Demo() {\n  return <Box bd=\"1px solid red.5\" />;\n}\n"})})]})}e.s(["default",0,function(e={}){return(0,o.jsx)(d,{...e,children:(0,o.jsx)(m,{...e})})}])},760705,(e,o,a)=>{let t="/changelog/7-10-0";(window.__NEXT_P=window.__NEXT_P||[]).push([t,()=>e.r(813788)]),o.hot&&o.hot.dispose(function(){window.__NEXT_P.push([t])})},648761,e=>{e.v(o=>Promise.all(["static/chunks/22379_btw709h.js"].map(o=>e.l(o))).then(()=>o(493594)))},828805,e=>{e.v(o=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(o=>e.l(o))).then(()=>o(879466)))}]);