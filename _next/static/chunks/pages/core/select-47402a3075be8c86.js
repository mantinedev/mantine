(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5089],{33507:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var l=(0,r(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var l=(0,r(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var l=(0,r(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var l=(0,r(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var l=(0,r(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var l=(0,r(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var l=(0,r(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},36307:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/select",function(){return r(56821)}])},56821:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return eP}});var l=r(85893),n=r(11151),a=r(19905),o=r(9904),i=r(67294),c=r(60818);let s=`
import { Select } from '@mantine/core';

function Demo() {
  return (
    <Select
      label="Your favorite library"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
    />
  );
}
`,d={type:"code",component:function(){return i.createElement(c.P,{label:"Your favorite library",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"]})},code:s,maxWidth:340,centered:!0},u=`
import { Select } from '@mantine/core';

function Demo() {
  return (
    <Select
      label="Your favorite library"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      defaultValue="React"
      clearable
    />
  );
}
`,p={type:"code",component:function(){return i.createElement(c.P,{label:"Your favorite library",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],defaultValue:"React",clearable:!0})},code:u,maxWidth:340,centered:!0},h=`
import { Select } from '@mantine/core';

function Demo() {
  return (
    <>
      <Select
        label="Option can NOT be deselected"
        placeholder="Pick value"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        defaultValue="React"
        allowDeselect={false}
      />

      <Select
        label="Option can be deselected"
        description="This is default behavior, click 'React' in the dropdown"
        placeholder="Pick value"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        defaultValue="React"
        allowDeselect
        mt="md"
      />
    </>
  );
}
`,m={type:"code",component:function(){return i.createElement(i.Fragment,null,i.createElement(c.P,{label:"Option can NOT be deselected",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],defaultValue:"React",allowDeselect:!1}),i.createElement(c.P,{label:"Option can be deselected",description:"This is default behavior, click 'React' in the dropdown",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],defaultValue:"React",allowDeselect:!0,mt:"md"}))},code:h,maxWidth:340,centered:!0},f=`
import { Select } from '@mantine/core';

function Demo() {
  return (
    <Select
      label="Your favorite library"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      searchable
    />
  );
}
`,b={type:"code",component:function(){return i.createElement(c.P,{label:"Your favorite library",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],searchable:!0})},code:f,maxWidth:340,centered:!0},v=`
import { Select } from '@mantine/core';

function Demo() {
  return (
    <Select
      label="Your favorite library"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      searchable
      nothingFoundMessage="Nothing found..."
    />
  );
}
`,y={type:"code",component:function(){return i.createElement(c.P,{label:"Your favorite library",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],searchable:!0,nothingFoundMessage:"Nothing found..."})},code:v,maxWidth:340,centered:!0};var g=Object.defineProperty,S=Object.defineProperties,x=Object.getOwnPropertyDescriptors,w=Object.getOwnPropertySymbols,j=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,O=(e,t,r)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,P=(e,t)=>{for(var r in t||(t={}))j.call(t,r)&&O(e,r,t[r]);if(w)for(var r of w(t))k.call(t,r)&&O(e,r,t[r]);return e},V=(e,t)=>S(e,x(t));let E=`
import { Select } from '@mantine/core';


function Demo() {
  return (
    <Select
      {{props}}
      data={['React', 'Angular', 'Svelte', 'Vue']}
      dropdownOpened
      pb={150}
      label="Control check icon"
      placeholder="Pick value"
      defaultValue="React"
    />
  );
}
`,A={type:"configurator",component:function(e){return i.createElement(c.P,V(P({},e),{data:["React","Angular","Svelte","Vue"],dropdownOpened:!0,pb:150,label:"Control check icon",placeholder:"Pick value",defaultValue:"React"}))},code:E,centered:!0,maxWidth:340,controls:[{type:"boolean",prop:"withCheckIcon",initialValue:!0,libraryValue:!0},{type:"segmented",prop:"checkIconPosition",initialValue:"left",libraryValue:null,data:["left","right"]}]},D=`
import { Select, ComboboxItem, OptionsFilter } from '@mantine/core';

const optionsFilter: OptionsFilter = ({ options, search }) => {
  const splittedSearch = search.toLowerCase().trim().split(' ');
  return (options as ComboboxItem[]).filter((option) => {
    const words = option.label.toLowerCase().trim().split(' ');
    return splittedSearch.every((searchWord) => words.some((word) => word.includes(searchWord)));
  });
};

function Demo() {
  return (
    <Select
      label="Your country"
      placeholder="Pick value"
      data={['Great Britain', 'Russian Federation', 'United States']}
      filter={optionsFilter}
      searchable
    />
  );
}
`,C=({options:e,search:t})=>{let r=t.toLowerCase().trim().split(" ");return e.filter(e=>{let t=e.label.toLowerCase().trim().split(" ");return r.every(e=>t.some(t=>t.includes(e)))})},R={type:"code",component:function(){return i.createElement(c.P,{label:"Your country",placeholder:"Pick value",data:["Great Britain","Russian Federation","United States"],filter:C,searchable:!0})},code:D,maxWidth:340,centered:!0},I=`
import { Select, ComboboxItem, OptionsFilter } from '@mantine/core';

const optionsFilter: OptionsFilter = ({ options, search }) => {
  const filtered = (options as ComboboxItem[]).filter((option) =>
    option.label.toLowerCase().trim().includes(search.toLowerCase().trim())
  );

  filtered.sort((a, b) => a.label.localeCompare(b.label));
  return filtered;
};

function Demo() {
  return (
    <Select
      label="Your favorite library"
      placeholder="Pick value"
      data={['4 \u2013 React', '1 \u2013 Angular', '3 \u2013 Vue', '2 \u2013 Svelte']}
      filter={optionsFilter}
      nothingFoundMessage="Nothing found..."
      searchable
    />
  );
}
`,M=({options:e,search:t})=>{let r=e.filter(e=>e.label.toLowerCase().trim().includes(t.toLowerCase().trim()));return r.sort((e,t)=>e.label.localeCompare(t.label)),r},F={type:"code",component:function(){return i.createElement(c.P,{label:"Your favorite library",placeholder:"Pick value",data:["4 – React","1 – Angular","3 – Vue","2 – Svelte"],filter:M,nothingFoundMessage:"Nothing found...",searchable:!0})},code:I,maxWidth:340,centered:!0},W=`
import { Select } from '@mantine/core';

const largeData = Array(100_000)
  .fill(0)
  .map((_, index) => \`Option \${index}\`);

function Demo() {
  return (
    <Select
      label="100 000 options autocomplete"
      placeholder="Use limit to optimize performance"
      limit={5}
      data={largeData}
      searchable
    />
  );
}
`,Y=Array(1e5).fill(0).map((e,t)=>`Option ${t}`),N={type:"code",component:function(){return i.createElement(c.P,{label:"100 000 options autocomplete",placeholder:"Use limit to optimize performance",limit:5,data:Y,searchable:!0})},code:W,maxWidth:340,centered:!0},Z=`
import { Select } from '@mantine/core';

const data = Array(100)
  .fill(0)
  .map((_, index) => \`Option \${index}\`);

function Demo() {
  return (
    <>
      <Select
        label="With scroll area (default)"
        placeholder="Pick value"
        data={data}
        maxDropdownHeight={200}
      />

      <Select
        label="With native scroll"
        placeholder="Pick value"
        data={data}
        withScrollArea={false}
        styles={{ dropdown: { maxHeight: 200, overflowY: 'auto' } }}
        mt="md"
      />
    </>
  );
}
`,_=Array(100).fill(0).map((e,t)=>`Option ${t}`),B={type:"code",component:function(){return i.createElement(i.Fragment,null,i.createElement(c.P,{label:"With scroll area (default)",placeholder:"Pick value",data:_,maxDropdownHeight:200}),i.createElement(c.P,{label:"With native scroll",placeholder:"Pick value",data:_,withScrollArea:!1,styles:{dropdown:{maxHeight:200,overflowY:"auto"}},mt:"md"}))},code:Z,maxWidth:340,centered:!0},T=`
import { Select } from '@mantine/core';

function Demo() {
  return (
    <Select
      label="Your favorite library"
      placeholder="Pick value"
      data={[
        { group: 'Frontend', items: ['React', 'Angular'] },
        { group: 'Backend', items: ['Express', 'Django'] },
      ]}
    />
  );
}
`,z={type:"code",component:function(){return i.createElement(c.P,{label:"Your favorite library",placeholder:"Pick value",data:[{group:"Frontend",items:["React","Angular"]},{group:"Backend",items:["Express","Django"]}]})},code:T,maxWidth:340,centered:!0},L=`
import { Select } from '@mantine/core';

function Demo() {
  return (
    <Select
      label="Your favorite library"
      placeholder="Pick value"
      data={[
        { value: 'react', label: 'React' },
        { value: 'ng', label: 'Angular' },
        { value: 'vue', label: 'Vue', disabled: true },
        { value: 'svelte', label: 'Svelte', disabled: true },
      ]}
    />
  );
}
`,$={type:"code",component:function(){return i.createElement(c.P,{label:"Your favorite library",placeholder:"Pick value",data:[{value:"react",label:"React"},{value:"ng",label:"Angular"},{value:"vue",label:"Vue",disabled:!0},{value:"svelte",label:"Svelte",disabled:!0}]})},code:L,maxWidth:340,centered:!0};var H=r(88005),U=Object.defineProperty,G=Object.defineProperties,q=Object.getOwnPropertyDescriptors,X=Object.getOwnPropertySymbols,K=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable,Q=(e,t,r)=>t in e?U(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,ee=(e,t)=>{for(var r in t||(t={}))K.call(t,r)&&Q(e,r,t[r]);if(X)for(var r of X(t))J.call(t,r)&&Q(e,r,t[r]);return e},et=(e,t)=>G(e,q(t));let er=`
import { Select } from '@mantine/core';


function Demo() {
  return (
    <Select
      {{props}}
      placeholder="Select placeholder"
      data={['React', 'Angular', 'Vue', 'Svelte']}
    />
  );
}
`,el={type:"configurator",component:function(e){return i.createElement(c.P,et(ee({},e),{placeholder:"Select placeholder",data:["React","Angular","Vue","Svelte"]}))},code:er,centered:!0,maxWidth:340,controls:H.pc},en=`
import { Select } from '@mantine/core';

function Demo() {
  return (
    <Select
      label="Your favorite library"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      readOnly
    />
  );
}
`,ea={type:"code",component:function(){return i.createElement(c.P,{label:"Your favorite library",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],readOnly:!0})},code:en,maxWidth:340,centered:!0},eo=`
import { Select } from '@mantine/core';

function Demo() {
  return (
    <Select
      label="Your favorite library"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      disabled
    />
  );
}
`,ei={type:"code",component:function(){return i.createElement(c.P,{label:"Your favorite library",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],disabled:!0})},code:eo,maxWidth:340,centered:!0},ec=`
import { Select } from '@mantine/core';

function Demo() {
  return (
    <>
      <Select
        label="Boolean error"
        placeholder="Boolean error"
        error
        data={['React', 'Angular', 'Vue', 'Svelte']}
      />
      <Select
        mt="md"
        label="With error message"
        placeholder="With error message"
        error="Invalid name"
        data={['React', 'Angular', 'Vue', 'Svelte']}
      />
    </>
  );
}
`,es={type:"code",component:function(){return i.createElement(i.Fragment,null,i.createElement(c.P,{label:"Boolean error",placeholder:"Boolean error",error:!0,data:["React","Angular","Vue","Svelte"]}),i.createElement(c.P,{mt:"md",label:"With error message",placeholder:"With error message",error:"Invalid name",data:["React","Angular","Vue","Svelte"]}))},maxWidth:340,centered:!0,code:ec};var ed=r(93693),eu=r(72622),ep=r(85541),eh=Object.defineProperty,em=Object.defineProperties,ef=Object.getOwnPropertyDescriptors,eb=Object.getOwnPropertySymbols,ev=Object.prototype.hasOwnProperty,ey=Object.prototype.propertyIsEnumerable,eg=(e,t,r)=>t in e?eh(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,eS=(e,t)=>{for(var r in t||(t={}))ev.call(t,r)&&eg(e,r,t[r]);if(eb)for(var r of eb(t))ey.call(t,r)&&eg(e,r,t[r]);return e},ex=(e,t)=>em(e,ef(t));let ew=`
import { IconAt } from '@tabler/icons-react';
import { Select, rem } from '@mantine/core';

function Demo() {
  return (
    <Select
     {{props}}
      leftSection={<IconAt style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
      label="Select"
      description="Description"
      error="Error"
      placeholder="Select"
      data={['React', 'Angular']}
    />
  );
}
`,ej={type:"styles-api",data:ep.i,component:function(e){return i.createElement(c.P,ex(eS({},e),{dropdownOpened:!0,leftSection:i.createElement(ed.Z,{style:{width:(0,eu.h)(18),height:(0,eu.h)(18)},stroke:1.5}),withAsterisk:!0,label:"Select",description:"Description",placeholder:"Select",data:[{group:"Frontend",items:["React","Angular"]},{group:"Backend",items:["Node","Django"]}]}))},code:ew,centered:!0,maxWidth:340},ek=(0,a.A)(o.us.Select);function eO(e){let t=Object.assign({h2:"h2",p:"p",code:"code",a:"a",pre:"pre",ul:"ul",li:"li"},(0,n.ah)(),e.components),{ComboboxDisclaimer:r,Demo:a,ComboboxData:o,ComboboxFiltering:i,ComboboxLargeData:c,ComboboxProps:s,InputFeatures:u,StylesApiSelectors:h,GetElementRef:f,InputAccessibility:v}=t;return o||eV("ComboboxData",!0),r||eV("ComboboxDisclaimer",!0),i||eV("ComboboxFiltering",!0),c||eV("ComboboxLargeData",!0),s||eV("ComboboxProps",!0),a||eV("Demo",!0),f||eV("GetElementRef",!0),v||eV("InputAccessibility",!0),u||eV("InputFeatures",!0),h||eV("StylesApiSelectors",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r,{component:"Select"}),"\n",(0,l.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.code,{children:"Select"})," allows capturing user input based on suggestions from the list.\nUnlike ",(0,l.jsx)(t.a,{href:"/core/autocomplete/",children:"Autocomplete"}),", ",(0,l.jsx)(t.code,{children:"Select"})," does not allow entering custom values."]}),"\n",(0,l.jsx)(a,{data:d}),"\n",(0,l.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.code,{children:"Select"})," value must be a string, other types are not supported.\n",(0,l.jsx)(t.code,{children:"onChange"})," function is called with a string value as a single argument."]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Select } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState('');\n  return <Select data={[]} value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,l.jsx)(t.h2,{id:"clearable",children:"Clearable"}),"\n",(0,l.jsxs)(t.p,{children:["Set ",(0,l.jsx)(t.code,{children:"clearable"})," prop to display the clear button in the right section. The button is not displayed\nwhen:"]}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"The component does not have a value"}),"\n",(0,l.jsx)(t.li,{children:"The component is disabled"}),"\n",(0,l.jsx)(t.li,{children:"The component is read only"}),"\n"]}),"\n",(0,l.jsx)(a,{data:p}),"\n",(0,l.jsx)(t.h2,{id:"allow-deselect",children:"Allow deselect"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.code,{children:"allowDeselect"})," prop determines whether the value should be deselected when user clicks on the selected option.\nBy default, ",(0,l.jsx)(t.code,{children:"allowDeselect"})," is ",(0,l.jsx)(t.code,{children:"true"}),":"]}),"\n",(0,l.jsx)(a,{data:m}),"\n",(0,l.jsx)(t.h2,{id:"searchable",children:"Searchable"}),"\n",(0,l.jsxs)(t.p,{children:["Set ",(0,l.jsx)(t.code,{children:"searchable"})," prop to allow filtering options by user input:"]}),"\n",(0,l.jsx)(a,{data:b}),"\n",(0,l.jsx)(t.h2,{id:"nothing-found",children:"Nothing found"}),"\n",(0,l.jsxs)(t.p,{children:["Set ",(0,l.jsx)(t.code,{children:"nothingFoundMessage"})," prop to display given message when no options match search query.\nIf ",(0,l.jsx)(t.code,{children:"nothingFoundMessage"})," is not set, ",(0,l.jsx)(t.code,{children:"Select"})," dropdown will be hidden when no options match search query.\nThe message is not displayed when trimmed search query is empty."]}),"\n",(0,l.jsx)(a,{data:y}),"\n",(0,l.jsx)(t.h2,{id:"checked-option-icon",children:"Checked option icon"}),"\n",(0,l.jsxs)(t.p,{children:["Set ",(0,l.jsx)(t.code,{children:"checkIconPosition"})," prop to ",(0,l.jsx)(t.code,{children:"left"})," or ",(0,l.jsx)(t.code,{children:"right"})," to control position of check icon in active option.\nTo remove the check icon, set ",(0,l.jsx)(t.code,{children:"withCheckIcon={false}"}),"."]}),"\n",(0,l.jsx)(a,{data:A}),"\n",(0,l.jsx)(o,{component:"Select"}),"\n",(0,l.jsx)(i,{component:"Select"}),"\n",(0,l.jsx)(a,{data:R}),"\n",(0,l.jsx)(t.h2,{id:"sort-options",children:"Sort options"}),"\n",(0,l.jsxs)(t.p,{children:["By default, options are sorted by their position in the data array. You can change this behavior\nwith ",(0,l.jsx)(t.code,{children:"filter"})," function:"]}),"\n",(0,l.jsx)(a,{data:F}),"\n",(0,l.jsx)(c,{component:"Select"}),"\n",(0,l.jsx)(a,{data:N}),"\n",(0,l.jsx)(t.h2,{id:"scrollable-dropdown",children:"Scrollable dropdown"}),"\n",(0,l.jsxs)(t.p,{children:["By default, the options list is wrapped with ",(0,l.jsx)(t.a,{href:"/core/scroll-area",children:"ScrollArea.Autosize"}),".\nYou can control dropdown max-height with ",(0,l.jsx)(t.code,{children:"maxDropdownHeight"})," prop if you do not change the default settings."]}),"\n",(0,l.jsxs)(t.p,{children:["If you want to use native scrollbars, set ",(0,l.jsx)(t.code,{children:"withScrollArea={false}"}),". Note that in this case,\nyou will need to change dropdown styles with ",(0,l.jsx)(t.a,{href:"/styles/styles-api",children:"Styles API"}),"."]}),"\n",(0,l.jsx)(a,{data:B}),"\n",(0,l.jsx)(t.h2,{id:"group-options",children:"Group options"}),"\n",(0,l.jsx)(a,{data:z}),"\n",(0,l.jsx)(t.h2,{id:"disabled-options",children:"Disabled options"}),"\n",(0,l.jsx)(t.p,{children:"When option is disabled, it cannot be selected and is ignored in keyboard navigation."}),"\n",(0,l.jsx)(a,{data:$}),"\n",(0,l.jsx)(s,{component:"Select"}),"\n",(0,l.jsx)(t.h2,{id:"input-props",children:"Input props"}),"\n",(0,l.jsx)(u,{component:"Select",element:"input"}),"\n",(0,l.jsx)(a,{data:el}),"\n",(0,l.jsx)(t.h2,{id:"read-only",children:"Read only"}),"\n",(0,l.jsxs)(t.p,{children:["Set ",(0,l.jsx)(t.code,{children:"readOnly"})," to make the input read only. When ",(0,l.jsx)(t.code,{children:"readOnly"})," is set,\n",(0,l.jsx)(t.code,{children:"Select"})," will not show suggestions and will not call ",(0,l.jsx)(t.code,{children:"onChange"})," function."]}),"\n",(0,l.jsx)(a,{data:ea}),"\n",(0,l.jsx)(t.h2,{id:"disabled",children:"Disabled"}),"\n",(0,l.jsxs)(t.p,{children:["Set ",(0,l.jsx)(t.code,{children:"disabled"})," to disable the input. When ",(0,l.jsx)(t.code,{children:"disabled"})," is set,\nuser cannot interact with the input and ",(0,l.jsx)(t.code,{children:"Select"})," will not show suggestions."]}),"\n",(0,l.jsx)(a,{data:ei}),"\n",(0,l.jsx)(t.h2,{id:"error-state",children:"Error state"}),"\n",(0,l.jsx)(a,{data:es}),"\n",(0,l.jsx)(h,{component:"Select"}),"\n",(0,l.jsx)(a,{data:ej}),"\n",(0,l.jsx)(f,{component:"Select",refType:"input"}),"\n",(0,l.jsx)(v,{component:"Select"})]})}var eP=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,l.jsx)(ek,Object.assign({},e,{children:(0,l.jsx)(eO,e)}))};function eV(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},93693:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var l=(0,r(54764).Z)("at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},16683:function(e,t,r){"use strict";r.d(t,{r:function(){return p}});var l=r(67294),n=r(40624),a=r(18094),o=r(84391),i=r(23560),c=r(77331),s=r(38238);function d(e,t){return Array.isArray(e)?e.includes(t):e===t}function u({data:e,withCheckIcon:t,value:r,checkIconPosition:a,unstyled:p}){if(!(0,i.f)(e)){let i=t&&d(r,e.value)&&l.createElement(s.n,{className:c.Z.optionsDropdownCheckIcon});return l.createElement(o.h.Option,{value:e.value,disabled:e.disabled,className:(0,n.Z)({[c.Z.optionsDropdownOption]:!p}),"data-reverse":"right"===a||void 0,"data-checked":d(r,e.value)||void 0,"aria-selected":d(r,e.value)},"left"===a&&i,e.label,"right"===a&&i)}let h=e.items.map(e=>l.createElement(u,{data:e,value:r,key:e.value,unstyled:p,withCheckIcon:t,checkIconPosition:a}));return l.createElement(o.h.Group,{label:e.group},h)}function p({data:e,hidden:t,hiddenWhenEmpty:r,filter:n,search:s,limit:d,maxDropdownHeight:p,withScrollArea:h=!0,filterOptions:m=!0,withCheckIcon:f=!1,value:b,checkIconPosition:v,nothingFoundMessage:y,unstyled:g,labelId:S}){!function e(t,r=new Set){if(Array.isArray(t))for(let l of t)if((0,i.f)(l))e(l.items,r);else{if(void 0===l.value)throw Error("[@mantine/core] Each option must have value property");if("string"!=typeof l.value)throw Error(`[@mantine/core] Option value must be a string, other data formats are not supported, got ${typeof l.value}`);if(r.has(l.value))throw Error(`[@mantine/core] Duplicate options are not supported. Option with value "${l.value}" was provided more than once`);r.add(l.value)}}(e);let x="string"==typeof s?(n||function e({options:t,search:r,limit:l}){let n=r.trim().toLowerCase(),a=[];for(let o=0;o<t.length;o+=1){let c=t[o];if(a.length===l)break;(0,i.f)(c)&&a.push({group:c.group,items:e({options:c.items,search:r,limit:l-a.length})}),!(0,i.f)(c)&&c.label.toLowerCase().includes(n)&&a.push(c)}return a})({options:e,search:m?s:"",limit:null!=d?d:1/0}):e,w=function(e){if(0===e.length)return!0;for(let t of e)if(!("group"in t)||t.items.length>0)return!1;return!0}(x),j=x.map(e=>l.createElement(u,{data:e,key:(0,i.f)(e)?e.group:e.value,withCheckIcon:f,value:b,checkIconPosition:v,unstyled:g}));return l.createElement(o.h.Dropdown,{hidden:t||r&&w},l.createElement(o.h.Options,{labelledBy:S},h?l.createElement(a.x.Autosize,{mah:null!=p?p:220,type:"scroll",scrollbarSize:"var(--_combobox-padding)",offsetScrollbars:"y",className:c.Z.optionsDropdownScrollArea},j):j,w&&y&&l.createElement(o.h.Empty,null,y)))}},23560:function(e,t,r){"use strict";function l(e){return"group"in e}r.d(t,{f:function(){return l}})},98897:function(e,t,r){"use strict";r.d(t,{g:function(){return function e(t){return t.reduce((t,r)=>"group"in r?c(c({},t),e(r.items)):(t[r.value]=r,t),{})}}});var l=Object.defineProperty,n=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,i=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))a.call(t,r)&&i(e,r,t[r]);if(n)for(var r of n(t))o.call(t,r)&&i(e,r,t[r]);return e}},60818:function(e,t,r){"use strict";r.d(t,{P:function(){return P}});var l=r(67294),n=r(9779),a=r(643),o=r(7995),i=r(98897),c=r(16658),s=r(84391),d=r(70097),u=r(16683),p=r(3154),h=r(30370),m=r(28816),f=Object.defineProperty,b=Object.defineProperties,v=Object.getOwnPropertyDescriptors,y=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable,x=(e,t,r)=>t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,w=(e,t)=>{for(var r in t||(t={}))g.call(t,r)&&x(e,r,t[r]);if(y)for(var r of y(t))S.call(t,r)&&x(e,r,t[r]);return e},j=(e,t)=>b(e,v(t)),k=(e,t)=>{var r={};for(var l in e)g.call(e,l)&&0>t.indexOf(l)&&(r[l]=e[l]);if(null!=e&&y)for(var l of y(e))0>t.indexOf(l)&&S.call(e,l)&&(r[l]=e[l]);return r};let O={searchable:!1,withCheckIcon:!0,allowDeselect:!0,checkIconPosition:"left"},P=(0,p.d)((e,t)=>{let r=(0,h.w)("Select",O,e),{classNames:p,styles:f,unstyled:b,vars:v,dropdownOpened:y,defaultDropdownOpened:g,onDropdownClose:S,onDropdownOpen:x,onFocus:P,onBlur:V,onClick:E,onChange:A,data:D,value:C,defaultValue:R,selectFirstOptionOnChange:I,onOptionSubmit:M,comboboxProps:F,readOnly:W,disabled:Y,filter:N,limit:Z,withScrollArea:_,maxDropdownHeight:B,size:T,searchable:z,rightSection:L,checkIconPosition:$,withCheckIcon:H,nothingFoundMessage:U,name:G,form:q,searchValue:X,defaultSearchValue:K,onSearchChange:J,allowDeselect:Q,error:ee,rightSectionPointerEvents:et,id:er,clearable:el,clearButtonProps:en,hiddenInputProps:ea}=r,eo=k(r,["classNames","styles","unstyled","vars","dropdownOpened","defaultDropdownOpened","onDropdownClose","onDropdownOpen","onFocus","onBlur","onClick","onChange","data","value","defaultValue","selectFirstOptionOnChange","onOptionSubmit","comboboxProps","readOnly","disabled","filter","limit","withScrollArea","maxDropdownHeight","size","searchable","rightSection","checkIconPosition","withCheckIcon","nothingFoundMessage","name","form","searchValue","defaultSearchValue","onSearchChange","allowDeselect","error","rightSectionPointerEvents","id","clearable","clearButtonProps","hiddenInputProps"]),ei=(0,l.useMemo)(()=>(0,o.R)(D),[D]),ec=(0,l.useMemo)(()=>(0,i.g)(ei),[ei]),es=(0,n.M)(er),[ed,eu]=(0,a.C)({value:C,defaultValue:R,finalValue:null,onChange:A}),ep=ed?ec[ed]:void 0,[eh,em]=(0,a.C)({value:X,defaultValue:K,finalValue:ep?ep.label:"",onChange:J}),ef=(0,c.K)({opened:y,defaultOpened:g,onDropdownOpen:x,onDropdownClose:()=>{null==S||S(),ef.resetSelectedOption()}}),{resolvedClassNames:eb,resolvedStyles:ev}=(0,m.h)({props:r,styles:f,classNames:p});(0,l.useEffect)(()=>{I&&ef.selectFirstOption()},[I,ed]),(0,l.useEffect)(()=>{null===C&&em(""),"string"==typeof C&&ep&&em(ep.label)},[C,ep]);let ey=el&&!!ed&&!Y&&!W&&l.createElement(s.h.ClearButton,j(w({size:T},en),{onClear:()=>{eu(null),em("")}}));return l.createElement(l.Fragment,null,l.createElement(s.h,w({store:ef,__staticSelector:"Select",classNames:eb,styles:ev,unstyled:b,readOnly:W,onOptionSubmit:e=>{null==M||M(e);let t=Q&&ec[e].value===ed?null:ec[e].value;eu(t),em(t?ec[e].label:""),ef.closeDropdown()},size:T},F),l.createElement(s.h.Target,{targetType:z?"input":"button"},l.createElement(d.M,j(w({id:es,ref:t,rightSection:L||ey||l.createElement(s.h.Chevron,{size:T,error:ee,unstyled:b}),rightSectionPointerEvents:et||ey?"all":"none"},eo),{size:T,__staticSelector:"Select",disabled:Y,readOnly:W||!z,value:eh,onChange:e=>{em(e.currentTarget.value),ef.openDropdown(),I&&ef.selectFirstOption()},onFocus:e=>{z&&ef.openDropdown(),null==P||P(e)},onBlur:e=>{z&&ef.closeDropdown(),em(ed?ec[ed].label:""),null==V||V(e)},onClick:e=>{z?ef.openDropdown():ef.toggleDropdown(),null==E||E(e)},classNames:eb,styles:ev,unstyled:b,pointer:!z,error:ee}))),l.createElement(u.r,{data:ei,hidden:W||Y,filter:N,search:eh,limit:Z,hiddenWhenEmpty:!z||!U,withScrollArea:_,maxDropdownHeight:B,filterOptions:z&&(null==ep?void 0:ep.label)!==eh,value:ed,checkIconPosition:$,withCheckIcon:H,nothingFoundMessage:U,unstyled:b,labelId:`${es}-label`})),l.createElement("input",w({type:"hidden",name:G,value:ed||"",form:q,disabled:Y},ea)))});P.classes=w(w({},d.M.classes),s.h.classes),P.displayName="@mantine/core/Select"},88005:function(e,t,r){"use strict";r.d(t,{Mt:function(){return l},nW:function(){return n},pc:function(){return a}});let l=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],n=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],a=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]}},function(e){e.O(0,[8992,178,4391,9774,2888,179],function(){return e(e.s=36307)}),_N_E=e.O()}]);