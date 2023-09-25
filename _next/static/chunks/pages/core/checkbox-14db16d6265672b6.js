(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1639],{33507:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},34840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/checkbox",function(){return n(31114)}])},31114:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Q}});var r=n(85893),a=n(11151),c=n(19905),o=n(9904),l=n(67294),i=n(19286),s=Object.defineProperty,d=Object.defineProperties,h=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&m(e,n,t[n]);if(u)for(var n of u(t))b.call(t,n)&&m(e,n,t[n]);return e},f=(e,t)=>d(e,h(t));let v=`
import { Checkbox } from '@mantine/core';


function Demo() {
  return (
    <Checkbox
      defaultChecked
      {{props}}
    />
  );
}
`,y={type:"configurator",component:e=>l.createElement(i.X,f(k({},e),{defaultChecked:!0})),code:v,centered:!0,controls:[{prop:"labelPosition",type:"segmented",data:[{value:"right",label:"Right"},{value:"left",label:"Left"}],initialValue:"right",libraryValue:"right"},{prop:"label",type:"string",initialValue:"I agree to sell my privacy",libraryValue:""},{prop:"description",type:"string",initialValue:"",libraryValue:""},{prop:"error",type:"string",initialValue:"",libraryValue:""},{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"radius",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"size",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"disabled",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"indeterminate",type:"boolean",initialValue:!1,libraryValue:!1}]};var x=n(75253);let g=`
import { Checkbox } from '@mantine/core';

function Demo() {
  return (
    <>
      <Checkbox />
      <Checkbox indeterminate />
      <Checkbox checked indeterminate />
      <Checkbox checked />
      <Checkbox disabled />
      <Checkbox disabled checked />
      <Checkbox disabled indeterminate />
    </>
  );
}
`,C={type:"code",component:function(){return l.createElement(x.K,null,l.createElement(i.X,{checked:!1,onChange:()=>{},label:"Default checkbox"}),l.createElement(i.X,{checked:!1,onChange:()=>{},indeterminate:!0,label:"Indeterminate checkbox"}),l.createElement(i.X,{checked:!0,onChange:()=>{},indeterminate:!0,label:"Indeterminate checked checkbox"}),l.createElement(i.X,{checked:!0,onChange:()=>{},label:"Checked checkbox"}),l.createElement(i.X,{disabled:!0,label:"Disabled checkbox"}),l.createElement(i.X,{disabled:!0,checked:!0,onChange:()=>{},label:"Disabled checked checkbox"}),l.createElement(i.X,{disabled:!0,indeterminate:!0,label:"Disabled indeterminate checkbox"}))},code:g};var j=n(54764),O=(0,j.Z)("radioactive","IconRadioactive",[["path",{d:"M13.5 14.6l3 5.19a9 9 0 0 0 4.5 -7.79h-6a3 3 0 0 1 -1.5 2.6",key:"svg-0"}],["path",{d:"M13.5 9.4l3 -5.19a9 9 0 0 0 -9 0l3 5.19a3 3 0 0 1 3 0",key:"svg-1"}],["path",{d:"M10.5 14.6l-3 5.19a9 9 0 0 1 -4.5 -7.79h6a3 3 0 0 0 1.5 2.6",key:"svg-2"}]]),E=(0,j.Z)("biohazard","IconBiohazard",[["path",{d:"M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-0"}],["path",{d:"M11.939 14c0 .173 .048 .351 .056 .533l0 .217a4.75 4.75 0 0 1 -4.533 4.745l-.217 0m-4.75 -4.75a4.75 4.75 0 0 1 7.737 -3.693m6.513 8.443a4.75 4.75 0 0 1 -4.69 -5.503l-.06 0m1.764 -2.944a4.75 4.75 0 0 1 7.731 3.477l0 .217m-11.195 -3.813a4.75 4.75 0 0 1 -1.828 -7.624l.164 -.172m6.718 0a4.75 4.75 0 0 1 -1.665 7.798",key:"svg-1"}]]),w=Object.defineProperty,I=Object.getOwnPropertySymbols,M=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable,P=(e,t,n)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,S=(e,t)=>{for(var n in t||(t={}))M.call(t,n)&&P(e,n,t[n]);if(I)for(var n of I(t))V.call(t,n)&&P(e,n,t[n]);return e},X=(e,t)=>{var n={};for(var r in e)M.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&I)for(var r of I(e))0>t.indexOf(r)&&V.call(e,r)&&(n[r]=e[r]);return n};let R=`
import { Checkbox, CheckboxProps } from '@mantine/core';
import { IconBiohazard, IconRadioactive } from '@tabler/icons-react';

const CheckboxIcon: CheckboxProps['icon'] = ({ indeterminate, ...others }) =>
  indeterminate ? <IconRadioactive {...others} /> : <IconBiohazard {...others} />;

function Demo() {
  return (
    <>
      <Checkbox icon={CheckboxIcon} label="Custom icon" defaultChecked />
      <Checkbox icon={CheckboxIcon} label="Custom icon: indeterminate" indeterminate mt="sm" />
    </>
  );
}
`,Z=e=>{var{indeterminate:t}=e,n=X(e,["indeterminate"]);return t?l.createElement(O,S({},n)):l.createElement(E,S({},n))},D={type:"code",component:function(){return l.createElement(l.Fragment,null,l.createElement(i.X,{icon:Z,label:"Custom icon",defaultChecked:!0}),l.createElement(i.X,{icon:Z,label:"Custom icon: indeterminate",indeterminate:!0,mt:"sm"}))},code:R};var _=n(2300),G=n(67585);let A=`
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
`,N={type:"code",component:function(){return l.createElement(i.X,{label:l.createElement(l.Fragment,null,"I accept"," ",l.createElement(G.e,{href:"https://mantine.dev",target:"_blank",inherit:!0},"terms and conditions"))})},code:A};var L=n(16262),z=Object.defineProperty,T=Object.getOwnPropertySymbols,B=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable,W=(e,t,n)=>t in e?z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,K=(e,t)=>{for(var n in t||(t={}))B.call(t,n)&&W(e,n,t[n]);if(T)for(var n of T(t))F.call(t,n)&&W(e,n,t[n]);return e};let U=`
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
`,q={type:"configurator",component:function(e){return l.createElement(i.X.Group,K({defaultValue:["react"]},e),l.createElement(L.Z,{mt:"xs"},l.createElement(i.X,{value:"react",label:"React"}),l.createElement(i.X,{value:"svelte",label:"Svelte"}),l.createElement(i.X,{value:"ng",label:"Angular"}),l.createElement(i.X,{value:"vue",label:"Vue"})))},code:U,centered:!0,maxWidth:"100%",controls:[{prop:"label",type:"string",initialValue:"Select your favorite frameworks/libraries",libraryValue:""},{prop:"description",type:"string",initialValue:"This is anonymous",libraryValue:""},{prop:"error",type:"string",initialValue:"",libraryValue:""},{prop:"withAsterisk",type:"boolean",initialValue:!0,libraryValue:!1}]},H=(0,c.A)(o.us.Checkbox);function J(e){let t=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre"},(0,a.ah)(),e.components),{Demo:n,GetElementRef:c}=t;return n||Y("Demo",!0),c||Y("GetElementRef",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n,{data:y}),"\n",(0,r.jsx)(t.h2,{id:"states",children:"States"}),"\n",(0,r.jsx)(n,{data:C}),"\n",(0,r.jsx)(t.h2,{id:"replace-icon",children:"Replace icon"}),"\n",(0,r.jsx)(n,{data:D}),"\n",(0,r.jsx)(t.h2,{id:"indeterminate-state",children:"Indeterminate state"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Checkbox"})," supports indeterminate state. When ",(0,r.jsx)(t.code,{children:"indeterminate"})," prop is true,\n",(0,r.jsx)(t.code,{children:"checked"})," prop is ignored:"]}),"\n",(0,r.jsx)(n,{data:_.N,demoProps:{toggle:!0}}),"\n",(0,r.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Checkbox } from '@mantine/core';\n\nfunction Demo() {\n  const [checked, setChecked] = useState(false);\n  return (\n    <Checkbox checked={checked} onChange={(event) => setChecked(event.currentTarget.checked)} />\n  );\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"label-with-link",children:"Label with link"}),"\n",(0,r.jsx)(n,{data:N}),"\n",(0,r.jsx)(t.h2,{id:"checkboxgroup",children:"Checkbox.Group"}),"\n",(0,r.jsx)(n,{data:q}),"\n",(0,r.jsx)(t.h2,{id:"controlled-checkboxgroup",children:"Controlled Checkbox.Group"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'import { useState } from \'react\';\nimport { Checkbox } from \'@mantine/core\';\n\nfunction Demo() {\n  const [value, setValue] = useState<string[]>([]);\n\n  return (\n    <Checkbox.Group value={value} onChange={setValue}>\n      <Checkbox value="react" label="React" />\n      <Checkbox value="svelte" label="Svelte" />\n    </Checkbox.Group>\n  );\n}\n'})}),"\n",(0,r.jsx)(c,{component:"Checkbox",refType:"input"}),"\n",(0,r.jsx)(t.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"aria-label"})," or ",(0,r.jsx)(t.code,{children:"label"})," prop to make checkbox accessible:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'import { Checkbox } from \'@mantine/core\';\n\n// Not ok, input is not labeled\nfunction Bad() {\n  return <Checkbox />;\n}\n\n// Ok, input is labelled by aria-label\nfunction GoodAriaLabel() {\n  return <Checkbox aria-label="My checkbox" />;\n}\n\n// Ok, input is labelled by label element\nfunction GoodLabel() {\n  return <Checkbox label="My checkbox" />;\n}\n'})})]})}var Q=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(H,Object.assign({},e,{children:(0,r.jsx)(J,e)}))};function Y(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},2300:function(e,t,n){"use strict";n.d(t,{N:function(){return I}});var r=n(67294),a=n(97718),c=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&h(e,n,t[n]);if(i)for(var n of i(t))d.call(t,n)&&h(e,n,t[n]);return e},p=(e,t)=>o(e,l(t)),b=n(19286),m=n(81110),k=Object.defineProperty,f=Object.defineProperties,v=Object.getOwnPropertyDescriptors,y=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,C=(e,t,n)=>t in e?k(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,j=(e,t)=>{for(var n in t||(t={}))x.call(t,n)&&C(e,n,t[n]);if(y)for(var n of y(t))g.call(t,n)&&C(e,n,t[n]);return e},O=(e,t)=>f(e,v(t));let E=`
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
`,w=[{label:"Receive email notifications",checked:!1,key:(0,a.k)()},{label:"Receive sms notifications",checked:!1,key:(0,a.k)()},{label:"Receive push notifications",checked:!1,key:(0,a.k)()}],I={type:"code",code:E,component:function(){let[e,t]=function(e=[]){let[t,n]=(0,r.useState)(e),a=(...e)=>n(t=>[...t,...e]),c=(...e)=>n(t=>[...e,...t]),o=(e,...t)=>n(n=>[...n.slice(0,e),...t,...n.slice(e)]),l=e=>n(t=>t.map((t,n)=>e(t,n))),i=(...e)=>n(t=>t.filter((t,n)=>!e.includes(n))),s=()=>n(e=>{let t=[...e];return t.pop(),t}),d=()=>n(e=>{let t=[...e];return t.shift(),t}),h=({from:e,to:t})=>n(n=>{let r=[...n],a=n[e];return r.splice(e,1),r.splice(t,0,a),r}),b=(e,t)=>n(n=>{let r=[...n];return r[e]=t,r}),m=(e,t,r)=>n(n=>{let a=[...n];return a[e]=p(u({},a[e]),{[t]:r}),a}),k=(e,t)=>n(n=>n.map((n,r)=>e(n,r)?t(n,r):n)),f=e=>{n(t=>t.filter(e))};return[t,{setState:n,append:a,prepend:c,insert:o,pop:s,shift:d,apply:l,applyWhere:k,remove:i,reorder:h,setItem:b,setItemProp:m,filter:f}]}(w),n=e.every(e=>e.checked),a=e.some(e=>e.checked)&&!n,c=e.map((e,n)=>r.createElement(b.X,{mt:"xs",ml:33,label:e.label,key:e.key,checked:e.checked,onChange:e=>t.setItemProp(n,"checked",e.currentTarget.checked)}));return r.createElement(m.x,{maw:400,mx:"auto"},r.createElement(b.X,{checked:n,indeterminate:a,label:"Receive all notifications",onChange:()=>t.setState(e=>e.map(e=>O(j({},e),{checked:!n})))}),c)}}}},function(e){e.O(0,[8992,178,9774,2888,179],function(){return e(e.s=34840)}),_N_E=e.O()}]);