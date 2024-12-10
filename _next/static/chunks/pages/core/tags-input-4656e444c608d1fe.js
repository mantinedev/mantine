(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[46887],{21194:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/tags-input",function(){return n(15081)}])},15081:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return X}});var o=n(52322),a=n(45392),r=n(77413);let i={type:"code",component:function(){return(0,o.jsx)(r.B,{label:"Press Enter to submit a tag",placeholder:"Enter tag"})},code:`
import { TagsInput } from '@mantine/core';

function Demo() {
  return <TagsInput label="Press Enter to submit a tag" placeholder="Enter tag" />;
}
`,maxWidth:340,centered:!0},l={type:"code",component:function(){return(0,o.jsx)(r.B,{label:"Press Enter to submit a tag",placeholder:"Enter tag",defaultValue:["React"],clearable:!0})},code:`
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
`,maxWidth:340,centered:!0},s={type:"code",component:function(){return(0,o.jsx)(r.B,{label:"Press Enter to submit a tag",description:"Add up to 3 tags",placeholder:"Enter tag",maxTags:3,defaultValue:["first","second"]})},code:`
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
`,maxWidth:340,centered:!0};var d=n(31561);let c={type:"code",component:function(){return(0,o.jsx)(r.B,{label:"Press Enter to submit a tag",placeholder:"Duplicates are allowed",allowDuplicates:!0})},code:`
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

`,maxWidth:340,centered:!0},u={type:"code",component:function(){return(0,o.jsx)(r.B,{label:"Press Enter to submit a tag",placeholder:"Enter tag",splitChars:[","," ","|"]})},code:`
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
`,maxWidth:340,centered:!0};var p=n(80703);let h=({options:e,search:t})=>{let n=t.toLowerCase().trim().split(" ");return e.filter(e=>{let t=e.label.toLowerCase().trim().split(" ");return n.every(e=>t.some(t=>t.includes(e)))})},m={type:"code",component:function(){return(0,o.jsx)(r.B,{label:"What countries have you visited?",placeholder:"Pick value or enter anything",data:["Great Britain","Russian Federation","United States"],filter:h})},code:`
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
`,maxWidth:340,centered:!0},g=({options:e,search:t})=>{let n=e.filter(e=>e.label.toLowerCase().trim().includes(t.toLowerCase().trim()));return n.sort((e,t)=>e.label.localeCompare(t.label)),n},x={type:"code",component:function(){return(0,o.jsx)(r.B,{label:"Your favorite libraries",placeholder:"Pick value or enter anything",data:["4 – React","1 – Angular","3 – Vue","2 – Svelte"],filter:g})},code:`
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
`,maxWidth:340,centered:!0},b=`
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
`,f=Array(1e5).fill(0).map((e,t)=>`Option ${t}`),j={type:"code",component:function(){return(0,o.jsx)(r.B,{label:"100 000 options tags input",placeholder:"Use limit to optimize performance",limit:5,data:f})},code:b,maxWidth:340,centered:!0};var y=n(19970);let v=`
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
`,w=Array(100).fill(0).map((e,t)=>`Option ${t}`),T={type:"code",component:function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.B,{label:"With scroll area (default)",placeholder:"Pick value or enter anything",data:w,maxDropdownHeight:200}),(0,o.jsx)(r.B,{label:"With native scroll",placeholder:"Pick value or enter anything",data:w,withScrollArea:!1,styles:{dropdown:{maxHeight:200,overflowY:"auto"}},mt:"md"})]})},code:v,maxWidth:340,centered:!0},I={type:"code",component:function(){return(0,o.jsx)(r.B,{label:"Enter tags",placeholder:"Enter tags",data:[{group:"Frontend",items:["React","Angular"]},{group:"Backend",items:["Express","Django"]}]})},code:`
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
`,maxWidth:340,centered:!0},V={type:"code",component:function(){return(0,o.jsx)(r.B,{label:"Enter tags",placeholder:"Some tags are disabled",data:[{value:"React"},{value:"Angular"},{value:"Vue",disabled:!0},{value:"Svelte",disabled:!0}]})},code:`
import { TagsInput } from '@mantine/core';

function Demo() {
  return (
    <TagsInput
      label="Enter tags"
      placeholder="Some tags are disabled"
      data={[
        { value: 'React' },
        { value: 'Angular' },
        { value: 'Vue', disabled: true },
        { value: 'Svelte', disabled: true },
      ]}
    />
  );
}
`,maxWidth:340,centered:!0};var P=n(26972),S=n(39629);let B={type:"code",code:`
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
`,centered:!0,component:function(){return(0,o.jsxs)(P.J,{width:300,position:"bottom",withArrow:!0,shadow:"md",children:[(0,o.jsx)(P.J.Target,{children:(0,o.jsx)(S.z,{children:"Toggle popover"})}),(0,o.jsx)(P.J.Dropdown,{children:(0,o.jsx)(r.B,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],comboboxProps:{withinPortal:!1}})})]})}};var A=n(3900);let D={type:"code",component:function(){let[e,{toggle:t}]=(0,A.q)();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(S.z,{onClick:t,mb:"md",children:"Toggle dropdown"}),(0,o.jsx)(r.B,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],dropdownOpened:e})]})},code:`
import { TagsInput, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

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
`,maxWidth:340,centered:!0},k={type:"code",component:function(){return(0,o.jsx)(r.B,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],comboboxProps:{position:"top",middlewares:{flip:!1,shift:!1}}})},code:`
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
`,maxWidth:340,centered:!0},E={type:"code",component:function(){return(0,o.jsx)(r.B,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],comboboxProps:{transitionProps:{transition:"pop",duration:200}}})},code:`
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
`,maxWidth:340,centered:!0},R={type:"code",component:function(){return(0,o.jsx)(r.B,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],comboboxProps:{width:200,position:"bottom-start"}})},code:`
import { TagsInput } from '@mantine/core';

function Demo() {
  return (
    <TagsInput
      label="Your favorite library"
      placeholder="Pick value or enter anything"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      comboboxProps={{ width: 200, position: 'bottom-start' }}
    />
  );
}
`,maxWidth:340,centered:!0},C={type:"code",component:function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.B,{label:"Zero padding",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],comboboxProps:{dropdownPadding:0}}),(0,o.jsx)(r.B,{mt:"md",label:"10px padding",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],comboboxProps:{dropdownPadding:10}})]})},code:`
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
`,maxWidth:340,centered:!0},W={type:"code",component:function(){return(0,o.jsx)(r.B,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],comboboxProps:{shadow:"md"}})},code:`
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
`,maxWidth:340,centered:!0};var F=n(43300),O=n(58898);let Y={type:"code",component:function(){let e=(0,o.jsx)(F.Z,{style:{width:(0,O.h)(16),height:(0,O.h)(16)}});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.B,{data:["React","Angular","Vue"],leftSectionPointerEvents:"none",leftSection:e,label:"Your favorite library",placeholder:"Your favorite library"}),(0,o.jsx)(r.B,{mt:"md",data:["React","Angular","Vue"],rightSectionPointerEvents:"none",rightSection:e,label:"Your favorite library",placeholder:"Your favorite library"})]})},maxWidth:340,centered:!0,code:`
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
`},z={type:"configurator",component:function(e){return(0,o.jsx)(r.B,{...e,placeholder:"TagsInput placeholder",value:["First","Second"],data:["React","Angular","Vue","Svelte"]})},code:`
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
`,centered:!0,maxWidth:340,controls:n(76528).pc},N={type:"code",component:function(){return(0,o.jsx)(r.B,{label:"Read only",placeholder:"Enter tag",readOnly:!0,defaultValue:["First","Second"]})},code:`
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
`,maxWidth:340,centered:!0},_={type:"code",component:function(){return(0,o.jsx)(r.B,{label:"Disabled",placeholder:"Enter tag",disabled:!0,defaultValue:["First","Second"]})},code:`
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
`,maxWidth:340,centered:!0},G={type:"code",component:function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.B,{label:"Boolean error",placeholder:"Boolean error",error:!0,defaultValue:["React","Angular"]}),(0,o.jsx)(r.B,{mt:"md",label:"With error message",placeholder:"With error message",error:"Invalid name",defaultValue:["React","Angular"]})]})},maxWidth:340,centered:!0,code:`
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
`};var L=n(89868),H=n(27431);let Z=`
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
`,M={type:"styles-api",data:H.h,component:function(e){return(0,o.jsx)(r.B,{...e,dropdownOpened:!0,leftSection:(0,o.jsx)(L.Z,{style:{width:(0,O.h)(18),height:(0,O.h)(18)},stroke:1.5}),withAsterisk:!0,label:"TagsInput",description:"Description",placeholder:"TagsInput",defaultValue:["First","Second"],data:[{group:"Frontend",items:["React","Angular"]},{group:"Backend",items:["Node","Django"]}]})},code:Z,centered:!0,maxWidth:340};var U=n(25071),q=n(15019);let $=(0,U.A)(q.us.TagsInput);function J(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components},{ComboboxData:n,ComboboxDisclaimer:r,ComboboxFiltering:h,ComboboxLargeData:g,ComboboxProps:b,Demo:f,GetElementRef:v,InputAccessibility:w,InputFeatures:P,InputSections:S,StylesApiSelectors:A}=t;return n||K("ComboboxData",!0),r||K("ComboboxDisclaimer",!0),h||K("ComboboxFiltering",!0),g||K("ComboboxLargeData",!0),b||K("ComboboxProps",!0),f||K("Demo",!0),v||K("GetElementRef",!0),w||K("InputAccessibility",!0),P||K("InputFeatures",!0),S||K("InputSections",!0),A||K("StylesApiSelectors",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r,{component:"TagsInput"}),"\n",(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"TagsInput"})," provides a way to enter multiple values. It can be used with suggestions or without them.\n",(0,o.jsx)(t.code,{children:"TagsInput"})," is similar to ",(0,o.jsx)(t.a,{href:"/core/multi-select",children:"MultiSelect"}),", but it allows entering custom values."]}),"\n",(0,o.jsx)(f,{data:i}),"\n",(0,o.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"TagsInput"})," value must be an array of strings, other types are not supported.\n",(0,o.jsx)(t.code,{children:"onChange"})," function is called with an array of strings as a single argument."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { TagsInput } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState<string[]>([]);\n  return <TagsInput data={[]} value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"controlled-search-value",children:"Controlled search value"}),"\n",(0,o.jsxs)(t.p,{children:["You can control search value with ",(0,o.jsx)(t.code,{children:"searchValue"})," and ",(0,o.jsx)(t.code,{children:"onSearchChange"})," props:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { TagsInput } from '@mantine/core';\n\nfunction Demo() {\n  const [searchValue, setSearchValue] = useState('');\n  return (\n    <TagsInput\n      searchValue={searchValue}\n      onSearchChange={setSearchValue}\n      data={[]}\n    />\n  );\n}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"clearable",children:"Clearable"}),"\n",(0,o.jsxs)(t.p,{children:["Set ",(0,o.jsx)(t.code,{children:"clearable"})," prop to display the clear button in the right section. The button is not displayed\nwhen:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"The component does not have a value"}),"\n",(0,o.jsx)(t.li,{children:"The component is disabled"}),"\n",(0,o.jsx)(t.li,{children:"The component is read only"}),"\n"]}),"\n",(0,o.jsx)(f,{data:l}),"\n",(0,o.jsx)(t.h2,{id:"max-selected-values",children:"Max selected values"}),"\n",(0,o.jsxs)(t.p,{children:["You can limit the number of selected values with ",(0,o.jsx)(t.code,{children:"maxTags"})," prop. This will not allow adding more values\nonce the limit is reached."]}),"\n",(0,o.jsx)(f,{data:s}),"\n",(0,o.jsx)(t.h2,{id:"accept-value-on-blur",children:"Accept value on blur"}),"\n",(0,o.jsxs)(t.p,{children:["By default, if the user types a value and blurs the input, the value is added to the list.\nYou can change this behavior by setting ",(0,o.jsx)(t.code,{children:"acceptValueOnBlur"})," to ",(0,o.jsx)(t.code,{children:"false"}),". In this case, the value is added\nonly when the user presses ",(0,o.jsx)(t.code,{children:"Enter"})," or clicks on a suggestion."]}),"\n",(0,o.jsx)(f,{data:d.Y}),"\n",(0,o.jsx)(t.h2,{id:"allow-duplicates",children:"Allow duplicates"}),"\n",(0,o.jsxs)(t.p,{children:["By default ",(0,o.jsx)(t.code,{children:"TagsInput"})," does not allow to add duplicate values, but you can change this behavior by\nsetting ",(0,o.jsx)(t.code,{children:"allowDuplicates"})," prop. Value is considered duplicate if it is already present in the ",(0,o.jsx)(t.code,{children:"value"})," array,\nregardless of the case and trailing whitespace."]}),"\n",(0,o.jsx)(f,{data:c}),"\n",(0,o.jsx)(t.h2,{id:"split-chars",children:"Split chars"}),"\n",(0,o.jsxs)(t.p,{children:["By default, ",(0,o.jsx)(t.code,{children:"TagsInput"})," splits values by comma (",(0,o.jsx)(t.code,{children:","}),"), you can change this behavior by setting\n",(0,o.jsx)(t.code,{children:"splitChars"})," prop to an array of strings. All values from ",(0,o.jsx)(t.code,{children:"splitChars"})," cannot be included in the final value.\nValues are also splitted on paste."]}),"\n",(0,o.jsxs)(t.p,{children:["Example of splitting by ",(0,o.jsx)(t.code,{children:","}),", ",(0,o.jsx)(t.code,{children:"|"})," and space:"]}),"\n",(0,o.jsx)(f,{data:u}),"\n",(0,o.jsx)(t.h2,{id:"with-suggestions",children:"With suggestions"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"TagsInput"})," can be used with suggestions, it will render suggestions list under input and allow to select\nsuggestions with keyboard or mouse. Note that user is not limited to suggestions, it is still possible to\nenter custom values. If you want to allow values only from suggestions, use ",(0,o.jsx)(t.a,{href:"/core/multi-select",children:"MultiSelect"})," component instead."]}),"\n",(0,o.jsx)(f,{data:p.a}),"\n",(0,o.jsx)(n,{component:"TagsInput"}),"\n",(0,o.jsx)(h,{component:"TagsInput"}),"\n",(0,o.jsx)(f,{data:m}),"\n",(0,o.jsx)(t.h2,{id:"sort-options",children:"Sort options"}),"\n",(0,o.jsxs)(t.p,{children:["By default, options are sorted by their position in the data array. You can change this behavior\nwith ",(0,o.jsx)(t.code,{children:"filter"})," function:"]}),"\n",(0,o.jsx)(f,{data:x}),"\n",(0,o.jsx)(g,{component:"TagsInput"}),"\n",(0,o.jsx)(f,{data:j}),"\n",(0,o.jsx)(t.h2,{id:"renderoption",children:"renderOption"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"renderOption"})," callback allows you to customize option rendering. It is called with option object.\nThe function must return a React node."]}),"\n",(0,o.jsx)(f,{data:y.z}),"\n",(0,o.jsx)(t.h2,{id:"scrollable-dropdown",children:"Scrollable dropdown"}),"\n",(0,o.jsxs)(t.p,{children:["By default, the options list is wrapped with ",(0,o.jsx)(t.a,{href:"/core/scroll-area",children:"ScrollArea.Autosize"}),".\nYou can control dropdown max-height with ",(0,o.jsx)(t.code,{children:"maxDropdownHeight"})," prop if you do not change the default settings."]}),"\n",(0,o.jsxs)(t.p,{children:["If you want to use native scrollbars, set ",(0,o.jsx)(t.code,{children:"withScrollArea={false}"}),". Note that in this case,\nyou will need to change dropdown styles with ",(0,o.jsx)(t.a,{href:"/styles/styles-api",children:"Styles API"}),"."]}),"\n",(0,o.jsx)(f,{data:T}),"\n",(0,o.jsx)(t.h2,{id:"group-options",children:"Group options"}),"\n",(0,o.jsx)(f,{data:I}),"\n",(0,o.jsx)(t.h2,{id:"disabled-options",children:"Disabled options"}),"\n",(0,o.jsxs)(t.p,{children:["When option is disabled, it cannot be selected and is ignored in keyboard navigation.\nNote that user can still enter disabled option as a value. If you want to prohibit certain values,\nuse controlled component and filter them out in ",(0,o.jsx)(t.code,{children:"onChange"})," function."]}),"\n",(0,o.jsx)(f,{data:V}),"\n",(0,o.jsx)(b,{component:"TagsInput"}),"\n",(0,o.jsx)(t.h2,{id:"inside-popover",children:"Inside Popover"}),"\n",(0,o.jsxs)(t.p,{children:["To use ",(0,o.jsx)(t.code,{children:"TagsInput"})," inside popover, you need to set ",(0,o.jsx)(t.code,{children:"withinPortal: false"}),":"]}),"\n",(0,o.jsx)(f,{data:B}),"\n",(0,o.jsx)(t.h2,{id:"control-dropdown-opened-state",children:"Control dropdown opened state"}),"\n",(0,o.jsxs)(t.p,{children:["You can control dropdown opened state with ",(0,o.jsx)(t.code,{children:"dropdownOpened"})," prop. Additionally,\nyou can use ",(0,o.jsx)(t.code,{children:"onDropdownClose"})," and ",(0,o.jsx)(t.code,{children:"onDropdownOpen"})," to listen to dropdown opened state changes."]}),"\n",(0,o.jsx)(f,{data:D}),"\n",(0,o.jsx)(t.h2,{id:"dropdown-position",children:"Dropdown position"}),"\n",(0,o.jsxs)(t.p,{children:["By default, the dropdown is displayed below the input if there is enough space; otherwise it is displayed above the input.\nYou can change this behavior by setting ",(0,o.jsx)(t.code,{children:"position"})," and ",(0,o.jsx)(t.code,{children:"middlewares"})," props, which are passed down to the\nunderlying ",(0,o.jsx)(t.a,{href:"/core/popover",children:"Popover"})," component."]}),"\n",(0,o.jsx)(t.p,{children:"Example of dropdown that is always displayed above the input:"}),"\n",(0,o.jsx)(f,{data:k}),"\n",(0,o.jsx)(t.h2,{id:"dropdown-animation",children:"Dropdown animation"}),"\n",(0,o.jsxs)(t.p,{children:["By default, dropdown animations are disabled. To enable them, you can set ",(0,o.jsx)(t.code,{children:"transitionProps"}),",\nwhich will be passed down to the underlying ",(0,o.jsx)(t.a,{href:"/core/transition",children:"Transition"})," component."]}),"\n",(0,o.jsx)(f,{data:E}),"\n",(0,o.jsx)(t.h2,{id:"dropdown-width",children:"Dropdown width"}),"\n",(0,o.jsxs)(t.p,{children:["To change dropdown width, set ",(0,o.jsx)(t.code,{children:"width"})," prop in ",(0,o.jsx)(t.code,{children:"comboboxProps"}),". By default,\ndropdown width is equal to the input width."]}),"\n",(0,o.jsx)(f,{data:R}),"\n",(0,o.jsx)(t.h2,{id:"dropdown-padding",children:"Dropdown padding"}),"\n",(0,o.jsx)(f,{data:C}),"\n",(0,o.jsx)(t.h2,{id:"dropdown-shadow",children:"Dropdown shadow"}),"\n",(0,o.jsx)(f,{data:W}),"\n",(0,o.jsx)(S,{component:"TagsInput"}),"\n",(0,o.jsx)(f,{data:Y}),"\n",(0,o.jsx)(t.h2,{id:"input-props",children:"Input props"}),"\n",(0,o.jsx)(P,{component:"TagsInput",element:"input"}),"\n",(0,o.jsx)(f,{data:z}),"\n",(0,o.jsx)(t.h2,{id:"read-only",children:"Read only"}),"\n",(0,o.jsxs)(t.p,{children:["Set ",(0,o.jsx)(t.code,{children:"readOnly"})," to make the input read only. When ",(0,o.jsx)(t.code,{children:"readOnly"})," is set,\n",(0,o.jsx)(t.code,{children:"TagsInput"})," will not show suggestions and will not call ",(0,o.jsx)(t.code,{children:"onChange"})," function."]}),"\n",(0,o.jsx)(f,{data:N}),"\n",(0,o.jsx)(t.h2,{id:"disabled",children:"Disabled"}),"\n",(0,o.jsxs)(t.p,{children:["Set ",(0,o.jsx)(t.code,{children:"disabled"})," to disable the input. When ",(0,o.jsx)(t.code,{children:"disabled"})," is set,\nuser cannot interact with the input and ",(0,o.jsx)(t.code,{children:"TagsInput"})," will not show suggestions."]}),"\n",(0,o.jsx)(f,{data:_}),"\n",(0,o.jsx)(t.h2,{id:"error-state",children:"Error state"}),"\n",(0,o.jsx)(f,{data:G}),"\n",(0,o.jsx)(A,{component:"TagsInput"}),"\n",(0,o.jsx)(f,{data:M}),"\n",(0,o.jsx)(v,{component:"TagsInput",refType:"input"}),"\n",(0,o.jsx)(w,{component:"TagsInput"}),"\n",(0,o.jsxs)(t.p,{children:["To set ",(0,o.jsx)(t.code,{children:"aria-label"})," on the clear button, use ",(0,o.jsx)(t.code,{children:"clearButtonProps"}),". Note that it is required\nonly when ",(0,o.jsx)(t.code,{children:"clearable"})," is set."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { TagsInput } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <TagsInput\n      data={[]}\n      clearable\n      clearButtonProps={{\n        'aria-label': 'Clear input',\n      }}\n    />\n  );\n}\n"})})]})}function X(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)($,{...e,children:(0,o.jsx)(J,{...e})})}function K(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},89868:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(73681).Z)("outline","at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},31561:function(e,t,n){"use strict";n.d(t,{Y:function(){return r}});var o=n(52322),a=n(77413);let r={type:"code",component:function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.B,{label:"Value IS accepted on blur",placeholder:"Enter text, then blur the field",data:["React","Angular","Svelte"],acceptValueOnBlur:!0}),(0,o.jsx)(a.B,{label:"Value IS NOT accepted on blur",placeholder:"Enter text, then blur the field",data:["React","Angular","Svelte"],acceptValueOnBlur:!1,mt:"md"})]})},code:`
import { TagsInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <TagsInput
        label="Value IS accepted on blur"
        placeholder="Enter text, then blur the field"
        data={['React', 'Angular', 'Svelte']}
        acceptValueOnBlur
      />
      <TagsInput
        label="Value IS NOT accepted on blur"
        placeholder="Enter text, then blur the field"
        data={['React', 'Angular', 'Svelte']}
        acceptValueOnBlur={false}
        mt="md"
      />
    </>
  );
}
`,maxWidth:340,centered:!0}},80703:function(e,t,n){"use strict";n.d(t,{a:function(){return r}});var o=n(52322),a=n(77413);let r={type:"code",component:function(){return(0,o.jsx)(a.B,{label:"Press Enter to submit a tag",placeholder:"Pick tag from list",data:["React","Angular","Svelte"]})},code:`
import { TagsInput } from '@mantine/core';

function Demo() {
  return (
    <TagsInput
      label="Press Enter to submit a tag"
      placeholder="Pick tag from list"
      data={['React', 'Angular', 'Svelte']}
    />
  );
}
`,maxWidth:340,centered:!0}},19970:function(e,t,n){"use strict";n.d(t,{z:function(){return d}});var o=n(52322),a=n(93010),r=n(8582),i=n(77413);let l={Apples:{emoji:"\uD83C\uDF4E",description:"Crisp and juicy snacking delight"},Bread:{emoji:"\uD83C\uDF5E",description:"Freshly baked daily essential"},Bananas:{emoji:"\uD83C\uDF4C",description:"Perfect for a healthy breakfast"},Eggs:{emoji:"\uD83E\uDD5A",description:"Versatile protein source for cooking"},Broccoli:{emoji:"\uD83E\uDD66",description:"Nutrient-rich green vegetable"}},s=({option:e})=>(0,o.jsxs)(a.Z,{children:[(0,o.jsx)(r.x,{span:!0,fz:24,children:l[e.value].emoji}),(0,o.jsxs)("div",{children:[(0,o.jsx)(r.x,{children:e.value}),(0,o.jsx)(r.x,{size:"xs",opacity:.5,children:l[e.value].description})]})]}),d={type:"code",component:function(){return(0,o.jsx)(i.B,{data:["Apples","Bread","Bananas","Eggs","Broccoli"],renderOption:s,label:"Groceries",placeholder:"Pick tag from list or type to add new",maxDropdownHeight:300})},code:`
import { Group, TagsInput, TagsInputProps, Text } from '@mantine/core';

const data: Record<string, { emoji: string; description: string }> = {
  Apples: {
    emoji: '\u{1F34E}',
    description: 'Crisp and juicy snacking delight',
  },
  Bread: {
    emoji: '\u{1F35E}',
    description: 'Freshly baked daily essential',
  },
  Bananas: {
    emoji: '\u{1F34C}',
    description: 'Perfect for a healthy breakfast',
  },
  Eggs: {
    emoji: '\u{1F95A}',
    description: 'Versatile protein source for cooking',
  },
  Broccoli: {
    emoji: '\u{1F966}',
    description: 'Nutrient-rich green vegetable',
  },
};

const renderTagsInputOption: TagsInputProps['renderOption'] = ({ option }) => (
  <Group>
    <Text span fz={24}>
      {data[option.value].emoji}
    </Text>
    <div>
      <Text>{option.value}</Text>
      <Text size="xs" opacity={0.5}>
        {data[option.value].description}
      </Text>
    </div>
  </Group>
);

function Demo() {
  return (
    <TagsInput
      data={['Apples', 'Bread', 'Bananas', 'Eggs', 'Broccoli']}
      renderOption={renderTagsInputOption}
      label="Groceries"
      placeholder="Pick tag from list or type to add new"
      maxDropdownHeight={300}
    />
  );
}
`,centered:!0,maxWidth:340,defaultExpanded:!1}},76528:function(e,t,n){"use strict";n.d(t,{Mt:function(){return o},nW:function(){return a},pc:function(){return r}});let o=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],a=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],r=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]},3900:function(e,t,n){"use strict";n.d(t,{q:function(){return a}});var o=n(2784);function a(e=!1,t){let{onOpen:n,onClose:a}=t||{},[r,i]=(0,o.useState)(e),l=(0,o.useCallback)(()=>{i(e=>e||(n?.(),!0))},[n]),s=(0,o.useCallback)(()=>{i(e=>e?(a?.(),!1):e)},[a]),d=(0,o.useCallback)(()=>{r?s():l()},[s,l,r]);return[r,{open:l,close:s,toggle:d}]}}},function(e){e.O(0,[61177,66748,11340,61324,77413,92888,49774,40179],function(){return e(e.s=21194)}),_N_E=e.O()}]);