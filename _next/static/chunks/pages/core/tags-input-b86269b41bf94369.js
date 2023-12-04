(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6887],{93693:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var a=(0,n(54764).Z)("at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},42259:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/tags-input",function(){return n(30568)}])},30568:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return eb}});var a=n(24246),o=n(71670),r=n(3916),l=n(30289),i=n(27378),s=n(16161);let d=`
import { TagsInput } from '@mantine/core';

function Demo() {
  return <TagsInput label="Press Enter to submit a tag" placeholder="Enter tag" />;
}
`,c={type:"code",component:function(){return i.createElement(s.B,{label:"Press Enter to submit a tag",placeholder:"Enter tag"})},code:d,maxWidth:340,centered:!0},u=`
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
`,x={type:"code",component:function(){return i.createElement(s.B,{label:"Press Enter to submit a tag",placeholder:"Enter tag",splitChars:[","," ","|"]})},code:f,maxWidth:340,centered:!0};var y=n(16584);let v=`
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
`,P=Array(1e5).fill(0).map((e,t)=>`Option ${t}`),S={type:"code",component:function(){return i.createElement(s.B,{label:"100 000 options tags input",placeholder:"Use limit to optimize performance",limit:5,data:P})},code:V,maxWidth:340,centered:!0},D=`
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
`,A=Array(100).fill(0).map((e,t)=>`Option ${t}`),B={type:"code",component:function(){return i.createElement(i.Fragment,null,i.createElement(s.B,{label:"With scroll area (default)",placeholder:"Pick value or enter anything",data:A,maxDropdownHeight:200}),i.createElement(s.B,{label:"With native scroll",placeholder:"Pick value or enter anything",data:A,withScrollArea:!1,styles:{dropdown:{maxHeight:200,overflowY:"auto"}},mt:"md"}))},code:D,maxWidth:340,centered:!0},k=`
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
`,C={type:"code",component:function(){return i.createElement(s.B,{label:"Enter tags",placeholder:"Enter tags",data:[{group:"Frontend",items:["React","Angular"]},{group:"Backend",items:["Express","Django"]}]})},code:k,maxWidth:340,centered:!0},R=`
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
`,W={type:"code",component:function(){return i.createElement(s.B,{label:"Enter tags",placeholder:"Some tags are disabled",data:[{value:"react",label:"React"},{value:"ng",label:"Angular"},{value:"vue",label:"Vue",disabled:!0},{value:"svelte",label:"Svelte",disabled:!0}]})},code:R,maxWidth:340,centered:!0};var F=n(63433),Y=n(8671);let O=`
import { Popover, Button, TagsInput } from '@mantine/core';

function Demo() {
  return (
    <Popover width={300} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <TagsInput
          label="Your favorite library"
          placeholder="Pick value or enter anything"
          data={['React', 'Angular', 'Vue', 'Svelte']}
          comboboxProps={{ withinPortal: false }}
        />
      </Popover.Dropdown>
    </Popover>
  );
}
`,_={type:"code",code:O,centered:!0,component:function(){return i.createElement(F.J,{width:300,position:"bottom",withArrow:!0,shadow:"md"},i.createElement(F.J.Target,null,i.createElement(Y.z,null,"Toggle popover")),i.createElement(F.J.Dropdown,null,i.createElement(s.B,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],comboboxProps:{withinPortal:!1}})))}};var z=n(87921);let N=`
import { TagsInput, Button } from '@mantine/core';

function Demo() {
  const [dropdownOpened, { toggle }] = useDisclosure();
  return (
    <>
      <Button onClick={toggle} mb="md">
        Toggle dropdown
      </Button>

      <TagsInput
        label="Your favorite library"
        placeholder="Pick value or enter anything"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        dropdownOpened={dropdownOpened}
      />
    </>
  );
}
`,L={type:"code",component:function(){let[e,{toggle:t}]=(0,z.q)();return i.createElement(i.Fragment,null,i.createElement(Y.z,{onClick:t,mb:"md"},"Toggle dropdown"),i.createElement(s.B,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],dropdownOpened:e}))},code:N,maxWidth:340,centered:!0},M=`
import { TagsInput } from '@mantine/core';

function Demo() {
  return (
    <TagsInput
      label="Your favorite library"
      placeholder="Pick value or enter anything"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      comboboxProps={{ position: 'top', middlewares: { flip: false, shift: false } }}
    />
  );
}
`,Z={type:"code",component:function(){return i.createElement(s.B,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],comboboxProps:{position:"top",middlewares:{flip:!1,shift:!1}}})},code:M,maxWidth:340,centered:!0},H=`
import { TagsInput } from '@mantine/core';

function Demo() {
  return (
    <TagsInput
      label="Your favorite library"
      placeholder="Pick value or enter anything"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      comboboxProps={{ transitionProps: { transition: 'pop', duration: 200 } }}
    />
  );
}
`,U={type:"code",component:function(){return i.createElement(s.B,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],comboboxProps:{transitionProps:{transition:"pop",duration:200}}})},code:H,maxWidth:340,centered:!0},G=`
import { TagsInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <TagsInput
        label="Zero padding"
        placeholder="Pick value or enter anything"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        comboboxProps={{ dropdownPadding: 0 }}
      />
      <TagsInput
        mt="md"
        label="10px padding"
        placeholder="Pick value or enter anything"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        comboboxProps={{ dropdownPadding: 10 }}
      />
    </>
  );
}
`,$={type:"code",component:function(){return i.createElement(i.Fragment,null,i.createElement(s.B,{label:"Zero padding",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],comboboxProps:{dropdownPadding:0}}),i.createElement(s.B,{mt:"md",label:"10px padding",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],comboboxProps:{dropdownPadding:10}}))},code:G,maxWidth:340,centered:!0},q=`
import { TagsInput } from '@mantine/core';

function Demo() {
  return (
    <TagsInput
      label="Your favorite library"
      placeholder="Pick value or enter anything"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      comboboxProps={{ shadow: 'md' }}
    />
  );
}
`,J={type:"code",component:function(){return i.createElement(s.B,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],comboboxProps:{shadow:"md"}})},code:q,maxWidth:340,centered:!0};var X=n(71078),K=n(94503);let Q=`
import { TagsInput, rem } from '@mantine/core';
import { IconComponents } from '@tabler/icons-react';

function Demo() {
  const icon = <IconComponents style={{ width: rem(16), height: rem(16) }} />;
  return (
    <>
      <TagsInput
        data={['React', 'Angular', 'Vue']}
        leftSectionPointerEvents="none"
        leftSection={icon}
        label="Your favorite library"
        placeholder="Your favorite library"
      />
      <TagsInput
        mt="md"
        data={['React', 'Angular', 'Vue']}
        rightSectionPointerEvents="none"
        rightSection={icon}
        label="Your favorite library"
        placeholder="Your favorite library"
      />
    </>
  );
}
`,ee={type:"code",component:function(){let e=i.createElement(K.Z,{style:{width:(0,X.h)(16),height:(0,X.h)(16)}});return i.createElement(i.Fragment,null,i.createElement(s.B,{data:["React","Angular","Vue"],leftSectionPointerEvents:"none",leftSection:e,label:"Your favorite library",placeholder:"Your favorite library"}),i.createElement(s.B,{mt:"md",data:["React","Angular","Vue"],rightSectionPointerEvents:"none",rightSection:e,label:"Your favorite library",placeholder:"Your favorite library"}))},maxWidth:340,centered:!0,code:Q};var et=n(77481);let en=`
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
`,ea={type:"configurator",component:function(e){return i.createElement(s.B,{...e,placeholder:"TagsInput placeholder",value:["First","Second"],data:["React","Angular","Vue","Svelte"]})},code:en,centered:!0,maxWidth:340,controls:et.pc},eo=`
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
`,er={type:"code",component:function(){return i.createElement(s.B,{label:"Read only",placeholder:"Enter tag",readOnly:!0,defaultValue:["First","Second"]})},code:eo,maxWidth:340,centered:!0},el=`
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
`,ei={type:"code",component:function(){return i.createElement(s.B,{label:"Disabled",placeholder:"Enter tag",disabled:!0,defaultValue:["First","Second"]})},code:el,maxWidth:340,centered:!0},es=`
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
`,ed={type:"code",component:function(){return i.createElement(i.Fragment,null,i.createElement(s.B,{label:"Boolean error",placeholder:"Boolean error",error:!0,defaultValue:["React","Angular"]}),i.createElement(s.B,{mt:"md",label:"With error message",placeholder:"With error message",error:"Invalid name",defaultValue:["React","Angular"]}))},maxWidth:340,centered:!0,code:es};var ec=n(93693),eu=n(73811);let ep=`
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
`,eh={type:"styles-api",data:eu.h,component:function(e){return i.createElement(s.B,{...e,dropdownOpened:!0,leftSection:i.createElement(ec.Z,{style:{width:(0,X.h)(18),height:(0,X.h)(18)},stroke:1.5}),withAsterisk:!0,label:"TagsInput",description:"Description",placeholder:"TagsInput",defaultValue:["First","Second"],data:[{group:"Frontend",items:["React","Angular"]},{group:"Backend",items:["Node","Django"]}]})},code:ep,centered:!0,maxWidth:340},em=(0,r.A)(l.us.TagsInput);function eg(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components},{ComboboxData:n,ComboboxDisclaimer:r,ComboboxFiltering:l,ComboboxLargeData:i,ComboboxProps:s,Demo:d,GetElementRef:u,InputAccessibility:h,InputFeatures:g,InputSections:f,StylesApiSelectors:v}=t;return n||ef("ComboboxData",!0),r||ef("ComboboxDisclaimer",!0),l||ef("ComboboxFiltering",!0),i||ef("ComboboxLargeData",!0),s||ef("ComboboxProps",!0),d||ef("Demo",!0),u||ef("GetElementRef",!0),h||ef("InputAccessibility",!0),g||ef("InputFeatures",!0),f||ef("InputSections",!0),v||ef("StylesApiSelectors",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r,{component:"TagsInput"}),"\n",(0,a.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"TagsInput"})," provides a way to enter multiple values. It can be used with suggestions or without them.\n",(0,a.jsx)(t.code,{children:"TagsInput"})," is similar to ",(0,a.jsx)(t.a,{href:"/core/multi-select",children:"MultiSelect"}),", but it allows entering custom values."]}),"\n",(0,a.jsx)(d,{data:c}),"\n",(0,a.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"TagsInput"})," value must be an array of strings, other types are not supported.\n",(0,a.jsx)(t.code,{children:"onChange"})," function is called with an array of strings as a single argument."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { TagsInput } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState<string[]>([]);\n  return <TagsInput data={[]} value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,a.jsx)(t.h2,{id:"controlled-search-value",children:"Controlled search value"}),"\n",(0,a.jsxs)(t.p,{children:["You can control search value with ",(0,a.jsx)(t.code,{children:"searchValue"})," and ",(0,a.jsx)(t.code,{children:"onSearchChange"})," props:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { TagsInput } from '@mantine/core';\n\nfunction Demo() {\n  const [searchValue, setSearchValue] = useState('');\n  return (\n    <TagsInput\n      searchValue={searchValue}\n      onSearchChange={setSearchValue}\n      data={[]}\n    />\n  );\n}\n"})}),"\n",(0,a.jsx)(t.h2,{id:"clearable",children:"Clearable"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:"clearable"})," prop to display the clear button in the right section. The button is not displayed\nwhen:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"The component does not have a value"}),"\n",(0,a.jsx)(t.li,{children:"The component is disabled"}),"\n",(0,a.jsx)(t.li,{children:"The component is read only"}),"\n"]}),"\n",(0,a.jsx)(d,{data:p}),"\n",(0,a.jsx)(t.h2,{id:"max-selected-values",children:"Max selected values"}),"\n",(0,a.jsxs)(t.p,{children:["You can limit the number of selected values with ",(0,a.jsx)(t.code,{children:"maxTags"})," prop. This will not allow adding more values\nonce the limit is reached."]}),"\n",(0,a.jsx)(d,{data:m}),"\n",(0,a.jsx)(t.h2,{id:"allow-duplicates",children:"Allow duplicates"}),"\n",(0,a.jsxs)(t.p,{children:["By default ",(0,a.jsx)(t.code,{children:"TagsInput"})," does not allow to add duplicate values, but you can change this behavior by\nsetting ",(0,a.jsx)(t.code,{children:"allowDuplicates"})," prop. Value is considered duplicate if it is already present in the ",(0,a.jsx)(t.code,{children:"value"})," array,\nregardless of the case and trailing whitespace."]}),"\n",(0,a.jsx)(d,{data:b}),"\n",(0,a.jsx)(t.h2,{id:"split-chars",children:"Split chars"}),"\n",(0,a.jsxs)(t.p,{children:["By default, ",(0,a.jsx)(t.code,{children:"TagsInput"})," splits values by comma (",(0,a.jsx)(t.code,{children:","}),"), you can change this behavior by setting\n",(0,a.jsx)(t.code,{children:"splitChars"})," prop to an array of strings. All values from ",(0,a.jsx)(t.code,{children:"splitChars"})," cannot be included in the final value.\nValues are also splitted on paste."]}),"\n",(0,a.jsxs)(t.p,{children:["Example of splitting by ",(0,a.jsx)(t.code,{children:","}),", ",(0,a.jsx)(t.code,{children:"|"})," and space:"]}),"\n",(0,a.jsx)(d,{data:x}),"\n",(0,a.jsx)(t.h2,{id:"with-suggestions",children:"With suggestions"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"TagsInput"})," can be used with suggestions, it will render suggestions list under input and allow to select\nsuggestions with keyboard or mouse. Note that user is not limited to suggestions, it is still possible to\nenter custom values. If you want to allow values only from suggestions, use ",(0,a.jsx)(t.a,{href:"/core/multi-select",children:"MultiSelect"})," component instead."]}),"\n",(0,a.jsx)(d,{data:y.a}),"\n",(0,a.jsx)(n,{component:"TagsInput"}),"\n",(0,a.jsx)(l,{component:"TagsInput"}),"\n",(0,a.jsx)(d,{data:w}),"\n",(0,a.jsx)(t.h2,{id:"sort-options",children:"Sort options"}),"\n",(0,a.jsxs)(t.p,{children:["By default, options are sorted by their position in the data array. You can change this behavior\nwith ",(0,a.jsx)(t.code,{children:"filter"})," function:"]}),"\n",(0,a.jsx)(d,{data:E}),"\n",(0,a.jsx)(i,{component:"TagsInput"}),"\n",(0,a.jsx)(d,{data:S}),"\n",(0,a.jsx)(t.h2,{id:"scrollable-dropdown",children:"Scrollable dropdown"}),"\n",(0,a.jsxs)(t.p,{children:["By default, the options list is wrapped with ",(0,a.jsx)(t.a,{href:"/core/scroll-area",children:"ScrollArea.Autosize"}),".\nYou can control dropdown max-height with ",(0,a.jsx)(t.code,{children:"maxDropdownHeight"})," prop if you do not change the default settings."]}),"\n",(0,a.jsxs)(t.p,{children:["If you want to use native scrollbars, set ",(0,a.jsx)(t.code,{children:"withScrollArea={false}"}),". Note that in this case,\nyou will need to change dropdown styles with ",(0,a.jsx)(t.a,{href:"/styles/styles-api",children:"Styles API"}),"."]}),"\n",(0,a.jsx)(d,{data:B}),"\n",(0,a.jsx)(t.h2,{id:"group-options",children:"Group options"}),"\n",(0,a.jsx)(d,{data:C}),"\n",(0,a.jsx)(t.h2,{id:"disabled-options",children:"Disabled options"}),"\n",(0,a.jsxs)(t.p,{children:["When option is disabled, it cannot be selected and is ignored in keyboard navigation.\nNote that user can still enter disabled option as a value. If you want to prohibit certain values,\nuse controlled component and filter them out in ",(0,a.jsx)(t.code,{children:"onChange"})," function."]}),"\n",(0,a.jsx)(d,{data:W}),"\n",(0,a.jsx)(s,{component:"TagsInput"}),"\n",(0,a.jsx)(t.h2,{id:"inside-popover",children:"Inside Popover"}),"\n",(0,a.jsxs)(t.p,{children:["To use ",(0,a.jsx)(t.code,{children:"TagsInput"})," inside popover, you need to set ",(0,a.jsx)(t.code,{children:"withinPortal: false"}),":"]}),"\n",(0,a.jsx)(d,{data:_}),"\n",(0,a.jsx)(t.h2,{id:"control-dropdown-opened-state",children:"Control dropdown opened state"}),"\n",(0,a.jsxs)(t.p,{children:["You can control dropdown opened state with ",(0,a.jsx)(t.code,{children:"dropdownOpened"})," prop. Additionally,\nyou can use ",(0,a.jsx)(t.code,{children:"onDropdownClose"})," and ",(0,a.jsx)(t.code,{children:"onDropdownOpen"})," to listen to dropdown opened state changes."]}),"\n",(0,a.jsx)(d,{data:L}),"\n",(0,a.jsx)(t.h2,{id:"dropdown-position",children:"Dropdown position"}),"\n",(0,a.jsxs)(t.p,{children:["By default, the dropdown is displayed below the input if there is enough space; otherwise it is displayed above the input.\nYou can change this behavior by setting ",(0,a.jsx)(t.code,{children:"position"})," and ",(0,a.jsx)(t.code,{children:"middlewares"})," props, which are passed down to the\nunderlying ",(0,a.jsx)(t.a,{href:"/core/popover",children:"Popover"})," component."]}),"\n",(0,a.jsx)(t.p,{children:"Example of dropdown that is always displayed above the input:"}),"\n",(0,a.jsx)(d,{data:Z}),"\n",(0,a.jsx)(t.h2,{id:"dropdown-animation",children:"Dropdown animation"}),"\n",(0,a.jsxs)(t.p,{children:["By default, dropdown animations are disabled. To enable them, you can set ",(0,a.jsx)(t.code,{children:"transitionProps"}),",\nwhich will be passed down to the underlying ",(0,a.jsx)(t.a,{href:"/core/transition",children:"Transition"})," component."]}),"\n",(0,a.jsx)(d,{data:U}),"\n",(0,a.jsx)(t.h2,{id:"dropdown-padding",children:"Dropdown padding"}),"\n",(0,a.jsx)(d,{data:$}),"\n",(0,a.jsx)(t.h2,{id:"dropdown-shadow",children:"Dropdown shadow"}),"\n",(0,a.jsx)(d,{data:J}),"\n",(0,a.jsx)(f,{component:"TagsInput"}),"\n",(0,a.jsx)(d,{data:ee}),"\n",(0,a.jsx)(t.h2,{id:"input-props",children:"Input props"}),"\n",(0,a.jsx)(g,{component:"TagsInput",element:"input"}),"\n",(0,a.jsx)(d,{data:ea}),"\n",(0,a.jsx)(t.h2,{id:"read-only",children:"Read only"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:"readOnly"})," to make the input read only. When ",(0,a.jsx)(t.code,{children:"readOnly"})," is set,\n",(0,a.jsx)(t.code,{children:"TagsInput"})," will not show suggestions and will not call ",(0,a.jsx)(t.code,{children:"onChange"})," function."]}),"\n",(0,a.jsx)(d,{data:er}),"\n",(0,a.jsx)(t.h2,{id:"disabled",children:"Disabled"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:"disabled"})," to disable the input. When ",(0,a.jsx)(t.code,{children:"disabled"})," is set,\nuser cannot interact with the input and ",(0,a.jsx)(t.code,{children:"TagsInput"})," will not show suggestions."]}),"\n",(0,a.jsx)(d,{data:ei}),"\n",(0,a.jsx)(t.h2,{id:"error-state",children:"Error state"}),"\n",(0,a.jsx)(d,{data:ed}),"\n",(0,a.jsx)(v,{component:"TagsInput"}),"\n",(0,a.jsx)(d,{data:eh}),"\n",(0,a.jsx)(u,{component:"TagsInput",refType:"input"}),"\n",(0,a.jsx)(h,{component:"TagsInput"}),"\n",(0,a.jsxs)(t.p,{children:["To set ",(0,a.jsx)(t.code,{children:"aria-label"})," on the clear button, use ",(0,a.jsx)(t.code,{children:"clearButtonProps"}),". Note that it is required\nonly when ",(0,a.jsx)(t.code,{children:"clearable"})," is set."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { TagsInput } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <TagsInput\n      data={[]}\n      clearable\n      clearButtonProps={{\n        'aria-label': 'Clear input',\n      }}\n    />\n  );\n}\n"})})]})}function eb(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(em,{...e,children:(0,a.jsx)(eg,{...e})})}function ef(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},77481:function(e,t,n){"use strict";n.d(t,{Mt:function(){return a},nW:function(){return o},pc:function(){return r}});let a=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],o=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],r=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]},87921:function(e,t,n){"use strict";n.d(t,{q:function(){return o}});var a=n(27378);function o(e=!1,t){let{onOpen:n,onClose:o}=t||{},[r,l]=(0,a.useState)(e),i=(0,a.useCallback)(()=>{l(e=>e||(n?.(),!0))},[n]),s=(0,a.useCallback)(()=>{l(e=>e?(o?.(),!1):e)},[o]),d=(0,a.useCallback)(()=>{r?s():i()},[s,i,r]);return[r,{open:i,close:s,toggle:d}]}}},function(e){e.O(0,[370,5819,2775,5608,6584,9774,2888,179],function(){return e(e.s=42259)}),_N_E=e.O()}]);