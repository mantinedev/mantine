(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3478],{33507:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var o=(0,r(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var o=(0,r(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var o=(0,r(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var o=(0,r(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var o=(0,r(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var o=(0,r(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var o=(0,r(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},82769:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/autocomplete",function(){return r(86077)}])},86077:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return ei}});var o=r(85893),n=r(11151),a=r(19905),l=r(9904),i=r(67294),c=r(99371);let s=`
import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <Autocomplete
      label="Your favorite library"
      placeholder="Pick value or enter anything"
      data={['React', 'Angular', 'Vue', 'Svelte']}
    />
  );
}
`,u={type:"code",component:function(){return i.createElement(c.F,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"]})},code:s,maxWidth:340,centered:!0},p=`
import { Autocomplete, ComboboxItem, OptionsFilter } from '@mantine/core';

const optionsFilter: OptionsFilter = ({ options, search }) => {
  const splittedSearch = search.toLowerCase().trim().split(' ');
  return (options as ComboboxItem[]).filter((option) => {
    const words = option.label.toLowerCase().trim().split(' ');
    return splittedSearch.every((searchWord) => words.some((word) => word.includes(searchWord)));
  });
};

function Demo() {
  return (
    <Autocomplete
      label="Your country"
      placeholder="Pick value or enter anything"
      data={['Great Britain', 'Russian Federation', 'United States']}
      filter={optionsFilter}
    />
  );
}
`,d=({options:e,search:t})=>{let r=t.toLowerCase().trim().split(" ");return e.filter(e=>{let t=e.label.toLowerCase().trim().split(" ");return r.every(e=>t.some(t=>t.includes(e)))})},m={type:"code",component:function(){return i.createElement(c.F,{label:"Your country",placeholder:"Pick value or enter anything",data:["Great Britain","Russian Federation","United States"],filter:d})},code:p,maxWidth:340,centered:!0},h=`
import { Autocomplete, ComboboxItem, OptionsFilter } from '@mantine/core';

const optionsFilter: OptionsFilter = ({ options, search }) => {
  const filtered = (options as ComboboxItem[]).filter((option) =>
    option.label.toLowerCase().trim().includes(search.toLowerCase().trim())
  );

  filtered.sort((a, b) => a.label.localeCompare(b.label));
  return filtered;
};

function Demo() {
  return (
    <Autocomplete
      label="Your favorite library"
      placeholder="Pick value or enter anything"
      data={['4 \u2013 React', '1 \u2013 Angular', '3 \u2013 Vue', '2 \u2013 Svelte']}
      filter={optionsFilter}
    />
  );
}
`,f=({options:e,search:t})=>{let r=e.filter(e=>e.label.toLowerCase().trim().includes(t.toLowerCase().trim()));return r.sort((e,t)=>e.label.localeCompare(t.label)),r},y={type:"code",component:function(){return i.createElement(c.F,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["4 – React","1 – Angular","3 – Vue","2 – Svelte"],filter:f})},code:h,maxWidth:340,centered:!0},b=`
import { Autocomplete } from '@mantine/core';

const largeData = Array(100_000)
  .fill(0)
  .map((_, index) => \`Option \${index}\`);

function Demo() {
  return (
    <Autocomplete
      label="100 000 options autocomplete"
      placeholder="Use limit to optimize performance"
      limit={5}
      data={largeData}
    />
  );
}
`,g=Array(1e5).fill(0).map((e,t)=>`Option ${t}`),v={type:"code",component:function(){return i.createElement(c.F,{label:"100 000 options autocomplete",placeholder:"Use limit to optimize performance",limit:5,data:g})},code:b,maxWidth:340,centered:!0},w=`
import { Autocomplete } from '@mantine/core';

const data = Array(100)
  .fill(0)
  .map((_, index) => \`Option \${index}\`);

function Demo() {
  return (
    <>
      <Autocomplete
        label="With scroll area (default)"
        placeholder="Pick value or enter anything"
        data={data}
        maxDropdownHeight={200}
      />

      <Autocomplete
        label="With native scroll"
        placeholder="Pick value or enter anything"
        data={data}
        withScrollArea={false}
        styles={{ dropdown: { maxHeight: 200, overflowY: 'auto' } }}
        mt="md"
      />
    </>
  );
}
`,x=Array(100).fill(0).map((e,t)=>`Option ${t}`),A={type:"code",component:function(){return i.createElement(i.Fragment,null,i.createElement(c.F,{label:"With scroll area (default)",placeholder:"Pick value or enter anything",data:x,maxDropdownHeight:200}),i.createElement(c.F,{label:"With native scroll",placeholder:"Pick value or enter anything",data:x,withScrollArea:!1,styles:{dropdown:{maxHeight:200,overflowY:"auto"}},mt:"md"}))},code:w,maxWidth:340,centered:!0},j=`
import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <Autocomplete
      label="Your favorite library"
      placeholder="Pick value or enter anything"
      data={[
        { group: 'Frontend', items: ['React', 'Angular'] },
        { group: 'Backend', items: ['Express', 'Django'] },
      ]}
    />
  );
}
`,k={type:"code",component:function(){return i.createElement(c.F,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:[{group:"Frontend",items:["React","Angular"]},{group:"Backend",items:["Express","Django"]}]})},code:j,maxWidth:340,centered:!0},O=`
import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <Autocomplete
      label="Your favorite library"
      placeholder="Pick value or enter anything"
      data={[
        { value: 'react', label: 'React' },
        { value: 'ng', label: 'Angular' },
        { value: 'vue', label: 'Vue', disabled: true },
        { value: 'svelte', label: 'Svelte', disabled: true },
      ]}
    />
  );
}
`,V={type:"code",component:function(){return i.createElement(c.F,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:[{value:"react",label:"React"},{value:"ng",label:"Angular"},{value:"vue",label:"Vue",disabled:!0},{value:"svelte",label:"Svelte",disabled:!0}]})},code:O,maxWidth:340,centered:!0};var E=r(88005),S=Object.defineProperty,D=Object.defineProperties,P=Object.getOwnPropertyDescriptors,F=Object.getOwnPropertySymbols,C=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable,M=(e,t,r)=>t in e?S(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,W=(e,t)=>{for(var r in t||(t={}))C.call(t,r)&&M(e,r,t[r]);if(F)for(var r of F(t))I.call(t,r)&&M(e,r,t[r]);return e},R=(e,t)=>D(e,P(t));let Z=`
import { Autocomplete } from '@mantine/core';


function Demo() {
  return (
    <Autocomplete
      {{props}}
      placeholder="Autocomplete placeholder"
      data={['React', 'Angular', 'Vue', 'Svelte']}
    />
  );
}
`,_={type:"configurator",component:function(e){return i.createElement(c.F,R(W({},e),{placeholder:"Autocomplete placeholder",data:["React","Angular","Vue","Svelte"]}))},code:Z,centered:!0,maxWidth:340,controls:E.pc},Y=`
import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <Autocomplete
      label="Your favorite library"
      placeholder="Pick value or enter anything"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      readOnly
    />
  );
}
`,z={type:"code",component:function(){return i.createElement(c.F,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],readOnly:!0})},code:Y,maxWidth:340,centered:!0},N=`
import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <Autocomplete
      label="Your favorite library"
      placeholder="Pick value or enter anything"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      disabled
    />
  );
}
`,B={type:"code",component:function(){return i.createElement(c.F,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],disabled:!0})},code:N,maxWidth:340,centered:!0},L=`
import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <>
      <Autocomplete
        label="Boolean error"
        placeholder="Boolean error"
        error
        data={['React', 'Angular', 'Vue', 'Svelte']}
      />
      <Autocomplete
        mt="md"
        label="With error message"
        placeholder="With error message"
        error="Invalid name"
        data={['React', 'Angular', 'Vue', 'Svelte']}
      />
    </>
  );
}
`,$={type:"code",component:function(){return i.createElement(i.Fragment,null,i.createElement(c.F,{label:"Boolean error",placeholder:"Boolean error",error:!0,data:["React","Angular","Vue","Svelte"]}),i.createElement(c.F,{mt:"md",label:"With error message",placeholder:"With error message",error:"Invalid name",data:["React","Angular","Vue","Svelte"]}))},maxWidth:340,centered:!0,code:L};var H=r(93693),G=r(72622),T=r(92865),U=Object.defineProperty,X=Object.defineProperties,K=Object.getOwnPropertyDescriptors,q=Object.getOwnPropertySymbols,J=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable,ee=(e,t,r)=>t in e?U(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,et=(e,t)=>{for(var r in t||(t={}))J.call(t,r)&&ee(e,r,t[r]);if(q)for(var r of q(t))Q.call(t,r)&&ee(e,r,t[r]);return e},er=(e,t)=>X(e,K(t));let eo=`
import { IconAt } from '@tabler/icons-react';
import { Autocomplete, rem } from '@mantine/core';

function Demo() {
  return (
    <Autocomplete
     {{props}}
      leftSection={<IconAt style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
      label="Autocomplete"
      description="Description"
      error="Error"
      placeholder="Autocomplete"
      data={['React', 'Angular']}
    />
  );
}
`,en={type:"styles-api",data:T.I,component:function(e){return i.createElement(c.F,er(et({},e),{dropdownOpened:!0,leftSection:i.createElement(H.Z,{style:{width:(0,G.h)(18),height:(0,G.h)(18)},stroke:1.5}),withAsterisk:!0,label:"Autocomplete",description:"Description",placeholder:"Autocomplete",data:[{group:"Frontend",items:["React","Angular"]},{group:"Backend",items:["Node","Django"]}]}))},code:eo,centered:!0,maxWidth:340},ea=(0,a.A)(l.us.Autocomplete);function el(e){let t=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre",a:"a"},(0,n.ah)(),e.components),{ComboboxDisclaimer:r,Demo:a,ComboboxData:l,ComboboxFiltering:i,ComboboxLargeData:c,ComboboxProps:s,InputFeatures:p,StylesApiSelectors:d,GetElementRef:h,InputAccessibility:f}=t;return l||ec("ComboboxData",!0),r||ec("ComboboxDisclaimer",!0),i||ec("ComboboxFiltering",!0),c||ec("ComboboxLargeData",!0),s||ec("ComboboxProps",!0),a||ec("Demo",!0),h||ec("GetElementRef",!0),f||ec("InputAccessibility",!0),p||ec("InputFeatures",!0),d||ec("StylesApiSelectors",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r,{component:"Autocomplete"}),"\n",(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"Autocomplete"})," provides user a list of suggestions based on the input,\nhowever user is not limited to suggestions and can type anything."]}),"\n",(0,o.jsx)(a,{data:u}),"\n",(0,o.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"Autocomplete"})," value must be a string, other types are not supported.\n",(0,o.jsx)(t.code,{children:"onChange"})," function is called with a string value as a single argument."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Autocomplete } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState('');\n  return <Autocomplete data={[]} value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,o.jsx)(l,{component:"Autocomplete"}),"\n",(0,o.jsx)(i,{component:"Autocomplete"}),"\n",(0,o.jsx)(a,{data:m}),"\n",(0,o.jsx)(t.h2,{id:"sort-options",children:"Sort options"}),"\n",(0,o.jsxs)(t.p,{children:["By default, options are sorted by their position in the data array. You can change this behavior\nwith ",(0,o.jsx)(t.code,{children:"filter"})," function:"]}),"\n",(0,o.jsx)(a,{data:y}),"\n",(0,o.jsx)(c,{component:"Autocomplete"}),"\n",(0,o.jsx)(a,{data:v}),"\n",(0,o.jsx)(t.h2,{id:"scrollable-dropdown",children:"Scrollable dropdown"}),"\n",(0,o.jsxs)(t.p,{children:["By default, the options list is wrapped with ",(0,o.jsx)(t.a,{href:"/core/scroll-area",children:"ScrollArea.Autosize"}),".\nYou can control dropdown max-height with ",(0,o.jsx)(t.code,{children:"maxDropdownHeight"})," prop if you do not change the default settings."]}),"\n",(0,o.jsxs)(t.p,{children:["If you want to use native scrollbars, set ",(0,o.jsx)(t.code,{children:"withScrollArea={false}"}),". Note that in this case,\nyou will need to change dropdown styles with ",(0,o.jsx)(t.a,{href:"/styles/styles-api",children:"Styles API"}),"."]}),"\n",(0,o.jsx)(a,{data:A}),"\n",(0,o.jsx)(t.h2,{id:"group-options",children:"Group options"}),"\n",(0,o.jsx)(a,{data:k}),"\n",(0,o.jsx)(t.h2,{id:"disabled-options",children:"Disabled options"}),"\n",(0,o.jsx)(t.p,{children:"When option is disabled, it cannot be selected and is ignored in keyboard navigation."}),"\n",(0,o.jsx)(a,{data:V}),"\n",(0,o.jsx)(s,{component:"Autocomplete"}),"\n",(0,o.jsx)(t.h2,{id:"input-props",children:"Input props"}),"\n",(0,o.jsx)(p,{component:"Autocomplete",element:"input"}),"\n",(0,o.jsx)(a,{data:_}),"\n",(0,o.jsx)(t.h2,{id:"read-only",children:"Read only"}),"\n",(0,o.jsxs)(t.p,{children:["Set ",(0,o.jsx)(t.code,{children:"readOnly"})," to make the input read only. When ",(0,o.jsx)(t.code,{children:"readOnly"})," is set,\n",(0,o.jsx)(t.code,{children:"Autocomplete"})," will not show suggestions and will not call ",(0,o.jsx)(t.code,{children:"onChange"})," function."]}),"\n",(0,o.jsx)(a,{data:z}),"\n",(0,o.jsx)(t.h2,{id:"disabled",children:"Disabled"}),"\n",(0,o.jsxs)(t.p,{children:["Set ",(0,o.jsx)(t.code,{children:"disabled"})," to disable the input. When ",(0,o.jsx)(t.code,{children:"disabled"})," is set,\nuser cannot interact with the input and ",(0,o.jsx)(t.code,{children:"Autocomplete"})," will not show suggestions."]}),"\n",(0,o.jsx)(a,{data:B}),"\n",(0,o.jsx)(t.h2,{id:"error-state",children:"Error state"}),"\n",(0,o.jsx)(a,{data:$}),"\n",(0,o.jsx)(d,{component:"Autocomplete"}),"\n",(0,o.jsx)(a,{data:en}),"\n",(0,o.jsx)(h,{component:"Autocomplete",refType:"input"}),"\n",(0,o.jsx)(f,{component:"Autocomplete"})]})}var ei=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(ea,Object.assign({},e,{children:(0,o.jsx)(el,e)}))};function ec(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},93693:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var o=(0,r(54764).Z)("at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},99371:function(e,t,r){"use strict";r.d(t,{F:function(){return V}});var o=r(67294),n=r(9779),a=r(643),l=r(7995),i=r(98897),c=r(16658),s=r(28816),u=r(84391),p=r(70097),d=r(16683),m=r(3154),h=r(30370),f=Object.defineProperty,y=Object.defineProperties,b=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable,x=(e,t,r)=>t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,A=(e,t)=>{for(var r in t||(t={}))v.call(t,r)&&x(e,r,t[r]);if(g)for(var r of g(t))w.call(t,r)&&x(e,r,t[r]);return e},j=(e,t)=>y(e,b(t)),k=(e,t)=>{var r={};for(var o in e)v.call(e,o)&&0>t.indexOf(o)&&(r[o]=e[o]);if(null!=e&&g)for(var o of g(e))0>t.indexOf(o)&&w.call(e,o)&&(r[o]=e[o]);return r};let O={},V=(0,m.d)((e,t)=>{let r=(0,h.w)("Autocomplete",O,e),{classNames:m,styles:f,unstyled:y,vars:b,dropdownOpened:g,defaultDropdownOpened:v,onDropdownClose:w,onDropdownOpen:x,onFocus:V,onBlur:E,onClick:S,onChange:D,data:P,value:F,defaultValue:C,selectFirstOptionOnChange:I,onOptionSubmit:M,comboboxProps:W,readOnly:R,disabled:Z,filter:_,limit:Y,withScrollArea:z,maxDropdownHeight:N,size:B,id:L}=r,$=k(r,["classNames","styles","unstyled","vars","dropdownOpened","defaultDropdownOpened","onDropdownClose","onDropdownOpen","onFocus","onBlur","onClick","onChange","data","value","defaultValue","selectFirstOptionOnChange","onOptionSubmit","comboboxProps","readOnly","disabled","filter","limit","withScrollArea","maxDropdownHeight","size","id"]),H=(0,n.M)(L),G=(0,l.R)(P),T=(0,i.g)(G),[U,X]=(0,a.C)({value:F,defaultValue:C,finalValue:"",onChange:D}),K=(0,c.K)({opened:g,defaultOpened:v,onDropdownOpen:x,onDropdownClose:()=>{null==w||w(),K.resetSelectedOption()}}),{resolvedClassNames:q,resolvedStyles:J}=(0,s.h)({props:r,styles:f,classNames:m});return(0,o.useEffect)(()=>{I&&K.selectFirstOption()},[I,U]),o.createElement(u.h,A({store:K,__staticSelector:"Autocomplete",classNames:q,styles:J,unstyled:y,readOnly:R,onOptionSubmit:e=>{null==M||M(e),X(T[e].label),K.closeDropdown()},size:B},W),o.createElement(u.h.Target,null,o.createElement(p.M,j(A({ref:t},$),{size:B,__staticSelector:"Autocomplete",disabled:Z,readOnly:R,value:U,onChange:e=>{X(e.currentTarget.value),K.openDropdown(),I&&K.selectFirstOption()},onFocus:e=>{K.openDropdown(),null==V||V(e)},onBlur:e=>{K.closeDropdown(),null==E||E(e)},onClick:e=>{K.openDropdown(),null==S||S(e)},classNames:q,styles:J,unstyled:y,id:H}))),o.createElement(d.r,{data:G,hidden:R||Z,filter:_,search:U,limit:Y,hiddenWhenEmpty:!0,withScrollArea:z,maxDropdownHeight:N,unstyled:y,labelId:`${H}-label`}))});V.classes=A(A({},p.M.classes),u.h.classes),V.displayName="@mantine/core/Autocomplete"},16683:function(e,t,r){"use strict";r.d(t,{r:function(){return d}});var o=r(67294),n=r(40624),a=r(18094),l=r(84391),i=r(23560),c=r(77331),s=r(38238);function u(e,t){return Array.isArray(e)?e.includes(t):e===t}function p({data:e,withCheckIcon:t,value:r,checkIconPosition:a,unstyled:d}){if(!(0,i.f)(e)){let i=t&&u(r,e.value)&&o.createElement(s.n,{className:c.Z.optionsDropdownCheckIcon});return o.createElement(l.h.Option,{value:e.value,disabled:e.disabled,className:(0,n.Z)({[c.Z.optionsDropdownOption]:!d}),"data-reverse":"right"===a||void 0,"data-checked":u(r,e.value)||void 0,"aria-selected":u(r,e.value)},"left"===a&&i,e.label,"right"===a&&i)}let m=e.items.map(e=>o.createElement(p,{data:e,key:e.value,unstyled:d}));return o.createElement(l.h.Group,{label:e.group},m)}function d({data:e,hidden:t,hiddenWhenEmpty:r,filter:n,search:s,limit:u,maxDropdownHeight:d,withScrollArea:m=!0,filterOptions:h=!0,withCheckIcon:f=!1,value:y,checkIconPosition:b,nothingFoundMessage:g,unstyled:v,labelId:w}){!function e(t,r=new Set){if(Array.isArray(t))for(let o of t)if((0,i.f)(o))e(o.items,r);else{if(void 0===o.value)throw Error("[@mantine/core] Each option must have value property");if("string"!=typeof o.value)throw Error(`[@mantine/core] Option value must be a string, other data formats are not supported, got ${typeof o.value}`);if(r.has(o.value))throw Error(`[@mantine/core] Duplicate options are not supported. Option with value "${o.value}" was provided more than once`);r.add(o.value)}}(e);let x="string"==typeof s?(n||function e({options:t,search:r,limit:o}){let n=r.trim().toLowerCase(),a=[];for(let l=0;l<t.length;l+=1){let c=t[l];if(a.length===o)break;(0,i.f)(c)&&a.push({group:c.group,items:e({options:c.items,search:r,limit:o-a.length})}),!(0,i.f)(c)&&c.label.toLowerCase().includes(n)&&a.push(c)}return a})({options:e,search:h?s:"",limit:null!=u?u:1/0}):e,A=function(e){if(0===e.length)return!0;for(let t of e)if(!("group"in t)||t.items.length>0)return!1;return!0}(x),j=x.map(e=>o.createElement(p,{data:e,key:(0,i.f)(e)?e.group:e.value,withCheckIcon:f,value:y,checkIconPosition:b,unstyled:v}));return o.createElement(l.h.Dropdown,{hidden:t||r&&A},o.createElement(l.h.Options,{labelledBy:w},m?o.createElement(a.x.Autosize,{mah:null!=d?d:220,type:"scroll",scrollbarSize:"var(--_combobox-padding)",offsetScrollbars:"y",className:c.Z.optionsDropdownScrollArea},j):j,A&&g&&o.createElement(l.h.Empty,null,g)))}},23560:function(e,t,r){"use strict";function o(e){return"group"in e}r.d(t,{f:function(){return o}})},98897:function(e,t,r){"use strict";r.d(t,{g:function(){return function e(t){return t.reduce((t,r)=>"group"in r?c(c({},t),e(r.items)):(t[r.value]=r,t),{})}}});var o=Object.defineProperty,n=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,i=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))a.call(t,r)&&i(e,r,t[r]);if(n)for(var r of n(t))l.call(t,r)&&i(e,r,t[r]);return e}},88005:function(e,t,r){"use strict";r.d(t,{Mt:function(){return o},nW:function(){return n},pc:function(){return a}});let o=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],n=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],a=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]}},function(e){e.O(0,[8992,178,4391,9774,2888,179],function(){return e(e.s=82769)}),_N_E=e.O()}]);