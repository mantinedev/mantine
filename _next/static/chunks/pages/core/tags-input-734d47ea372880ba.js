(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6887],{33507:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var a=(0,n(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var a=(0,n(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var a=(0,n(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var a=(0,n(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var a=(0,n(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var a=(0,n(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var a=(0,n(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},95080:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/tags-input",function(){return n(68761)}])},68761:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return eb}});var a=n(85893),r=n(11151),o=n(19905),l=n(9904),i=n(67294),s=n(5200);let c=`
import { TagsInput } from '@mantine/core';

function Demo() {
  return <TagsInput label="Press Enter to submit a tag" placeholder="Enter tag" />;
}
`,d={type:"code",component:function(){return i.createElement(s.B,{label:"Press Enter to submit a tag",placeholder:"Enter tag"})},code:c,maxWidth:340,centered:!0},u=`
import { TagsInput } from '@mantine/core';

function Demo() {
  return (
    <TagsInput
      label="Press Enter to submit a tag"
      placeholder="Enter tag"
      defaultValue={['React']}
      clearable
    />
  );
}
`,p={type:"code",component:function(){return i.createElement(s.B,{label:"Press Enter to submit a tag",placeholder:"Enter tag",defaultValue:["React"],clearable:!0})},code:u,maxWidth:340,centered:!0},h=`
import { TagsInput } from '@mantine/core';

function Demo() {
  return (
    <TagsInput
      label="Press Enter to submit a tag"
      description="Add up to 3 tags"
      placeholder="Enter tag"
      maxTags={3}
      defaultValue={['first', 'second']}
    />
  );
}
`,m={type:"code",component:function(){return i.createElement(s.B,{label:"Press Enter to submit a tag",description:"Add up to 3 tags",placeholder:"Enter tag",maxTags:3,defaultValue:["first","second"]})},code:h,maxWidth:340,centered:!0},g=`
import { TagsInput } from '@mantine/core';

function Demo() {
  return (
    <TagsInput
      label="Press Enter to submit a tag"
      placeholder="Duplicates are allowed"
      allowDuplicates
    />
  );
}

`,b={type:"code",component:function(){return i.createElement(s.B,{label:"Press Enter to submit a tag",placeholder:"Duplicates are allowed",allowDuplicates:!0})},code:g,maxWidth:340,centered:!0},f=`
import { TagsInput } from '@mantine/core';

function Demo() {
  return (
    <TagsInput
      label="Press Enter to submit a tag"
      placeholder="Enter tag"
      splitChars={[',', ' ', '|']}
    />
  );
}
`,y={type:"code",component:function(){return i.createElement(s.B,{label:"Press Enter to submit a tag",placeholder:"Enter tag",splitChars:[","," ","|"]})},code:f,maxWidth:340,centered:!0};var x=n(6430);let v=`
import { TagsInput, ComboboxItem, OptionsFilter } from '@mantine/core';

const optionsFilter: OptionsFilter = ({ options, search }) => {
  const splittedSearch = search.toLowerCase().trim().split(' ');
  return (options as ComboboxItem[]).filter((option) => {
    const words = option.label.toLowerCase().trim().split(' ');
    return splittedSearch.every((searchWord) => words.some((word) => word.includes(searchWord)));
  });
};

function Demo() {
  return (
    <TagsInput
      label="What countries have you visited?"
      placeholder="Pick value or enter anything"
      data={['Great Britain', 'Russian Federation', 'United States']}
      filter={optionsFilter}
    />
  );
}
`,j=({options:e,search:t})=>{let n=t.toLowerCase().trim().split(" ");return e.filter(e=>{let t=e.label.toLowerCase().trim().split(" ");return n.every(e=>t.some(t=>t.includes(e)))})},w={type:"code",component:function(){return i.createElement(s.B,{label:"What countries have you visited?",placeholder:"Pick value or enter anything",data:["Great Britain","Russian Federation","United States"],filter:j})},code:v,maxWidth:340,centered:!0},I=`
import { TagsInput, ComboboxItem, OptionsFilter } from '@mantine/core';

const optionsFilter: OptionsFilter = ({ options, search }) => {
  const filtered = (options as ComboboxItem[]).filter((option) =>
    option.label.toLowerCase().trim().includes(search.toLowerCase().trim())
  );

  filtered.sort((a, b) => a.label.localeCompare(b.label));
  return filtered;
};

function Demo() {
  return (
    <TagsInput
      label="Your favorite libraries"
      placeholder="Pick value or enter anything"
      data={['4 \u2013 React', '1 \u2013 Angular', '3 \u2013 Vue', '2 \u2013 Svelte']}
      filter={optionsFilter}
    />
  );
}
`,T=({options:e,search:t})=>{let n=e.filter(e=>e.label.toLowerCase().trim().includes(t.toLowerCase().trim()));return n.sort((e,t)=>e.label.localeCompare(t.label)),n},E={type:"code",component:function(){return i.createElement(s.B,{label:"Your favorite libraries",placeholder:"Pick value or enter anything",data:["4 – React","1 – Angular","3 – Vue","2 – Svelte"],filter:T})},code:I,maxWidth:340,centered:!0},V=`
import { TagsInput } from '@mantine/core';

const largeData = Array(100_000)
  .fill(0)
  .map((_, index) => \`Option \${index}\`);

function Demo() {
  return (
    <TagsInput
      label="100 000 options tags input"
      placeholder="Use limit to optimize performance"
      limit={5}
      data={largeData}
    />
  );
}
`,k=Array(1e5).fill(0).map((e,t)=>`Option ${t}`),D={type:"code",component:function(){return i.createElement(s.B,{label:"100 000 options tags input",placeholder:"Use limit to optimize performance",limit:5,data:k})},code:V,maxWidth:340,centered:!0},S=`
import { TagsInput } from '@mantine/core';

const data = Array(100)
  .fill(0)
  .map((_, index) => \`Option \${index}\`);

function Demo() {
  return (
    <>
      <TagsInput
        label="With scroll area (default)"
        placeholder="Pick value or enter anything"
        data={data}
        maxDropdownHeight={200}
      />

      <TagsInput
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
`,A=Array(100).fill(0).map((e,t)=>`Option ${t}`),O={type:"code",component:function(){return i.createElement(i.Fragment,null,i.createElement(s.B,{label:"With scroll area (default)",placeholder:"Pick value or enter anything",data:A,maxDropdownHeight:200}),i.createElement(s.B,{label:"With native scroll",placeholder:"Pick value or enter anything",data:A,withScrollArea:!1,styles:{dropdown:{maxHeight:200,overflowY:"auto"}},mt:"md"}))},code:S,maxWidth:340,centered:!0},M=`
import { TagsInput } from '@mantine/core';

function Demo() {
  return (
    <TagsInput
      label="Enter tags"
      placeholder="Enter tags"
      data={[
        { group: 'Frontend', items: ['React', 'Angular'] },
        { group: 'Backend', items: ['Express', 'Django'] },
      ]}
    />
  );
}
`,P={type:"code",component:function(){return i.createElement(s.B,{label:"Enter tags",placeholder:"Enter tags",data:[{group:"Frontend",items:["React","Angular"]},{group:"Backend",items:["Express","Django"]}]})},code:M,maxWidth:340,centered:!0},W=`
import { TagsInput } from '@mantine/core';

function Demo() {
  return (
    <TagsInput
      label="Enter tags"
      placeholder="Some tags are disabled"
      data={[
        { value: 'react', label: 'React' },
        { value: 'ng', label: 'Angular' },
        { value: 'vue', label: 'Vue', disabled: true },
        { value: 'svelte', label: 'Svelte', disabled: true },
      ]}
    />
  );
}
`,C={type:"code",component:function(){return i.createElement(s.B,{label:"Enter tags",placeholder:"Some tags are disabled",data:[{value:"react",label:"React"},{value:"ng",label:"Angular"},{value:"vue",label:"Vue",disabled:!0},{value:"svelte",label:"Svelte",disabled:!0}]})},code:W,maxWidth:340,centered:!0};var B=n(88005),F=Object.defineProperty,R=Object.defineProperties,Z=Object.getOwnPropertyDescriptors,_=Object.getOwnPropertySymbols,z=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable,N=(e,t,n)=>t in e?F(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Y=(e,t)=>{for(var n in t||(t={}))z.call(t,n)&&N(e,n,t[n]);if(_)for(var n of _(t))L.call(t,n)&&N(e,n,t[n]);return e},H=(e,t)=>R(e,Z(t));let U=`
import { TagsInput } from '@mantine/core';


function Demo() {
  return (
    <TagsInput
      {{props}}
      placeholder="TagsInput placeholder"
      value={['First', 'Second']}
      data={['React', 'Angular', 'Vue', 'Svelte']}
    />
  );
}
`,G={type:"configurator",component:function(e){return i.createElement(s.B,H(Y({},e),{placeholder:"TagsInput placeholder",value:["First","Second"],data:["React","Angular","Vue","Svelte"]}))},code:U,centered:!0,maxWidth:340,controls:B.pc},$=`
import { TagsInput } from '@mantine/core';

function Demo() {
  return (
    <TagsInput
      label="Read only"
      placeholder="Enter tag"
      readOnly
      defaultValue={['First', 'Second']}
    />
  );
}
`,X={type:"code",component:function(){return i.createElement(s.B,{label:"Read only",placeholder:"Enter tag",readOnly:!0,defaultValue:["First","Second"]})},code:$,maxWidth:340,centered:!0},q=`
import { TagsInput } from '@mantine/core';

function Demo() {
  return (
    <TagsInput
      label="Disabled"
      placeholder="Enter tag"
      disabled
      defaultValue={['First', 'Second']}
    />
  );
}
`,J={type:"code",component:function(){return i.createElement(s.B,{label:"Disabled",placeholder:"Enter tag",disabled:!0,defaultValue:["First","Second"]})},code:q,maxWidth:340,centered:!0},K=`
import { TagsInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <TagsInput
        label="Boolean error"
        placeholder="Boolean error"
        error
        defaultValue={['React', 'Angular']}
      />
      <TagsInput
        mt="md"
        label="With error message"
        placeholder="With error message"
        error="Invalid name"
        defaultValue={['React', 'Angular']}
      />
    </>
  );
}
`,Q={type:"code",component:function(){return i.createElement(i.Fragment,null,i.createElement(s.B,{label:"Boolean error",placeholder:"Boolean error",error:!0,defaultValue:["React","Angular"]}),i.createElement(s.B,{mt:"md",label:"With error message",placeholder:"With error message",error:"Invalid name",defaultValue:["React","Angular"]}))},maxWidth:340,centered:!0,code:K};var ee=n(93693),et=n(72622),en=n(7024),ea=Object.defineProperty,er=Object.defineProperties,eo=Object.getOwnPropertyDescriptors,el=Object.getOwnPropertySymbols,ei=Object.prototype.hasOwnProperty,es=Object.prototype.propertyIsEnumerable,ec=(e,t,n)=>t in e?ea(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ed=(e,t)=>{for(var n in t||(t={}))ei.call(t,n)&&ec(e,n,t[n]);if(el)for(var n of el(t))es.call(t,n)&&ec(e,n,t[n]);return e},eu=(e,t)=>er(e,eo(t));let ep=`
import { IconAt } from '@tabler/icons-react';
import { TagsInput, rem } from '@mantine/core';

function Demo() {
  return (
    <TagsInput
     {{props}}
      leftSection={<IconAt style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
      label="TagsInput"
      description="Description"
      error="Error"
      placeholder="TagsInput"
      defaultValue={['First', 'Second']}
      data={['React', 'Angular']}
    />
  );
}
`,eh={type:"styles-api",data:en.h,component:function(e){return i.createElement(s.B,eu(ed({},e),{dropdownOpened:!0,leftSection:i.createElement(ee.Z,{style:{width:(0,et.h)(18),height:(0,et.h)(18)},stroke:1.5}),withAsterisk:!0,label:"TagsInput",description:"Description",placeholder:"TagsInput",defaultValue:["First","Second"],data:[{group:"Frontend",items:["React","Angular"]},{group:"Backend",items:["Node","Django"]}]}))},code:ep,centered:!0,maxWidth:340},em=(0,o.A)(l.us.TagsInput);function eg(e){let t=Object.assign({h2:"h2",p:"p",code:"code",a:"a",pre:"pre",ul:"ul",li:"li"},(0,r.ah)(),e.components),{ComboboxDisclaimer:n,Demo:o,ComboboxData:l,ComboboxFiltering:i,ComboboxLargeData:s,ComboboxProps:c,InputFeatures:u,StylesApiSelectors:h,GetElementRef:g,InputAccessibility:f}=t;return l||ef("ComboboxData",!0),n||ef("ComboboxDisclaimer",!0),i||ef("ComboboxFiltering",!0),s||ef("ComboboxLargeData",!0),c||ef("ComboboxProps",!0),o||ef("Demo",!0),g||ef("GetElementRef",!0),f||ef("InputAccessibility",!0),u||ef("InputFeatures",!0),h||ef("StylesApiSelectors",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n,{component:"TagsInput"}),"\n",(0,a.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"TagsInput"})," provides a way to enter multiple values. It can be used with suggestions or without them.\n",(0,a.jsx)(t.code,{children:"TagsInput"})," is similar to ",(0,a.jsx)(t.a,{href:"/core/multi-select",children:"MultiSelect"}),", but it allows entering custom values."]}),"\n",(0,a.jsx)(o,{data:d}),"\n",(0,a.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"TagsInput"})," value must be an array of strings, other types are not supported.\n",(0,a.jsx)(t.code,{children:"onChange"})," function is called with an array of strings as a single argument."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { TagsInput } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState<string[]>([]);\n  return <TagsInput data={[]} value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,a.jsx)(t.h2,{id:"clearable",children:"Clearable"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:"clearable"})," prop to display the clear button in the right section. The button is not displayed\nwhen:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"The component does not have a value"}),"\n",(0,a.jsx)(t.li,{children:"The component is disabled"}),"\n",(0,a.jsx)(t.li,{children:"The component is read only"}),"\n"]}),"\n",(0,a.jsx)(o,{data:p}),"\n",(0,a.jsx)(t.h2,{id:"max-selected-values",children:"Max selected values"}),"\n",(0,a.jsxs)(t.p,{children:["You can limit the number of selected values with ",(0,a.jsx)(t.code,{children:"maxTags"})," prop. This will not allow adding more values\nonce the limit is reached."]}),"\n",(0,a.jsx)(o,{data:m}),"\n",(0,a.jsx)(t.h2,{id:"allow-duplicates",children:"Allow duplicates"}),"\n",(0,a.jsxs)(t.p,{children:["By default ",(0,a.jsx)(t.code,{children:"TagsInput"})," does not allow to add duplicate values, but you can change this behavior by\nsetting ",(0,a.jsx)(t.code,{children:"allowDuplicates"})," prop. Value is considered duplicate if it is already present in the ",(0,a.jsx)(t.code,{children:"value"})," array,\nregardless of the case and trailing whitespace."]}),"\n",(0,a.jsx)(o,{data:b}),"\n",(0,a.jsx)(t.h2,{id:"split-chars",children:"Split chars"}),"\n",(0,a.jsxs)(t.p,{children:["By default, ",(0,a.jsx)(t.code,{children:"TagsInput"})," splits values by comma (",(0,a.jsx)(t.code,{children:","}),"), you can change this behavior by setting\n",(0,a.jsx)(t.code,{children:"splitChars"})," prop to an array of strings. All values from ",(0,a.jsx)(t.code,{children:"splitChars"})," cannot be included in the final value.\nValues are also splitted on paste."]}),"\n",(0,a.jsxs)(t.p,{children:["Example of splitting by ",(0,a.jsx)(t.code,{children:","}),", ",(0,a.jsx)(t.code,{children:"|"})," and space:"]}),"\n",(0,a.jsx)(o,{data:y}),"\n",(0,a.jsx)(t.h2,{id:"with-suggestions",children:"With suggestions"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"TagsInput"})," can be used with suggestions, it will render suggestions list under input and allow to select\nsuggestions with keyboard or mouse. Note that user is not limited to suggestions, it is still possible to\nenter custom values. If you want to allow values only from suggestions, use ",(0,a.jsx)(t.a,{href:"/core/multi-select",children:"MultiSelect"})," component instead."]}),"\n",(0,a.jsx)(o,{data:x.a}),"\n",(0,a.jsx)(l,{component:"TagsInput"}),"\n",(0,a.jsx)(i,{component:"TagsInput"}),"\n",(0,a.jsx)(o,{data:w}),"\n",(0,a.jsx)(t.h2,{id:"sort-options",children:"Sort options"}),"\n",(0,a.jsxs)(t.p,{children:["By default, options are sorted by their position in the data array. You can change this behavior\nwith ",(0,a.jsx)(t.code,{children:"filter"})," function:"]}),"\n",(0,a.jsx)(o,{data:E}),"\n",(0,a.jsx)(s,{component:"TagsInput"}),"\n",(0,a.jsx)(o,{data:D}),"\n",(0,a.jsx)(t.h2,{id:"scrollable-dropdown",children:"Scrollable dropdown"}),"\n",(0,a.jsxs)(t.p,{children:["By default, the options list is wrapped with ",(0,a.jsx)(t.a,{href:"/core/scroll-area",children:"ScrollArea.Autosize"}),".\nYou can control dropdown max-height with ",(0,a.jsx)(t.code,{children:"maxDropdownHeight"})," prop if you do not change the default settings."]}),"\n",(0,a.jsxs)(t.p,{children:["If you want to use native scrollbars, set ",(0,a.jsx)(t.code,{children:"withScrollArea={false}"}),". Note that in this case,\nyou will need to change dropdown styles with ",(0,a.jsx)(t.a,{href:"/styles/styles-api",children:"Styles API"}),"."]}),"\n",(0,a.jsx)(o,{data:O}),"\n",(0,a.jsx)(t.h2,{id:"group-options",children:"Group options"}),"\n",(0,a.jsx)(o,{data:P}),"\n",(0,a.jsx)(t.h2,{id:"disabled-options",children:"Disabled options"}),"\n",(0,a.jsxs)(t.p,{children:["When option is disabled, it cannot be selected and is ignored in keyboard navigation.\nNote that user can still enter disabled option as a value. If you want to prohibit certain values,\nuse controlled component and filter them out in ",(0,a.jsx)(t.code,{children:"onChange"})," function."]}),"\n",(0,a.jsx)(o,{data:C}),"\n",(0,a.jsx)(c,{component:"TagsInput"}),"\n",(0,a.jsx)(t.h2,{id:"input-props",children:"Input props"}),"\n",(0,a.jsx)(u,{component:"TagsInput",element:"input"}),"\n",(0,a.jsx)(o,{data:G}),"\n",(0,a.jsx)(t.h2,{id:"read-only",children:"Read only"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:"readOnly"})," to make the input read only. When ",(0,a.jsx)(t.code,{children:"readOnly"})," is set,\n",(0,a.jsx)(t.code,{children:"TagsInput"})," will not show suggestions and will not call ",(0,a.jsx)(t.code,{children:"onChange"})," function."]}),"\n",(0,a.jsx)(o,{data:X}),"\n",(0,a.jsx)(t.h2,{id:"disabled",children:"Disabled"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:"disabled"})," to disable the input. When ",(0,a.jsx)(t.code,{children:"disabled"})," is set,\nuser cannot interact with the input and ",(0,a.jsx)(t.code,{children:"TagsInput"})," will not show suggestions."]}),"\n",(0,a.jsx)(o,{data:J}),"\n",(0,a.jsx)(t.h2,{id:"error-state",children:"Error state"}),"\n",(0,a.jsx)(o,{data:Q}),"\n",(0,a.jsx)(h,{component:"TagsInput"}),"\n",(0,a.jsx)(o,{data:eh}),"\n",(0,a.jsx)(g,{component:"TagsInput",refType:"input"}),"\n",(0,a.jsx)(f,{component:"TagsInput"})]})}var eb=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(em,Object.assign({},e,{children:(0,a.jsx)(eg,e)}))};function ef(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},93693:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var a=(0,n(54764).Z)("at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},88005:function(e,t,n){"use strict";n.d(t,{Mt:function(){return a},nW:function(){return r},pc:function(){return o}});let a=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],r=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],o=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]}},function(e){e.O(0,[8992,178,4391,6430,9774,2888,179],function(){return e(e.s=95080)}),_N_E=e.O()}]);