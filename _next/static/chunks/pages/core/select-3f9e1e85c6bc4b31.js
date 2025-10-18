(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[54136],{1002:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>K});var n=o(6029),l=o(16285),r=o(61492);let a={type:"code",component:function(){return(0,n.jsx)(r.l,{label:"Your favorite library",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"]})},code:`
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
`,maxWidth:340,centered:!0};var i=o(51736),c=o(2226);let d={type:"code",component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.l,{label:"Option can NOT be deselected",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],defaultValue:"React",allowDeselect:!1}),(0,n.jsx)(r.l,{label:"Option can be deselected",description:"This is default behavior, click 'React' in the dropdown",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],defaultValue:"React",allowDeselect:!0,mt:"md"})]})},code:`
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
`,maxWidth:340,centered:!0},s={type:"code",component:function(){return(0,n.jsx)(r.l,{label:"Your favorite library",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],searchable:!0})},code:`
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
`,maxWidth:340,centered:!0},u={type:"code",component:function(){return(0,n.jsx)(r.l,{label:"Your favorite library",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],searchable:!0,nothingFoundMessage:"Nothing found..."})},code:`
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
`,maxWidth:340,centered:!0},p={type:"configurator",component:function(e){return(0,n.jsx)(r.l,{...e,data:["React","Angular","Svelte","Vue"],dropdownOpened:!0,pb:150,label:"Control check icon",placeholder:"Pick value",defaultValue:"React",comboboxProps:{hideDetached:!1}})},code:`
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
`,centered:!0,maxWidth:340,controls:[{type:"boolean",prop:"withCheckIcon",initialValue:!0,libraryValue:!0},{type:"segmented",prop:"checkIconPosition",initialValue:"left",libraryValue:null,data:["left","right"]}]},h=({options:e,search:t})=>{let o=t.toLowerCase().trim().split(" ");return e.filter(e=>{let t=e.label.toLowerCase().trim().split(" ");return o.every(e=>t.some(t=>t.includes(e)))})},m={type:"code",component:function(){return(0,n.jsx)(r.l,{label:"Your country",placeholder:"Pick value",data:["Great Britain","Russian Federation","United States"],filter:h,searchable:!0})},code:`
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
`,maxWidth:340,centered:!0},b=({options:e,search:t})=>{let o=e.filter(e=>e.label.toLowerCase().trim().includes(t.toLowerCase().trim()));return o.sort((e,t)=>e.label.localeCompare(t.label)),o},x={type:"code",component:function(){return(0,n.jsx)(r.l,{label:"Your favorite library",placeholder:"Pick value",data:["4 – React","1 – Angular","3 – Vue","2 – Svelte"],filter:b,nothingFoundMessage:"Nothing found...",searchable:!0})},code:`
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
`,maxWidth:340,centered:!0},f=`
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
`,g=Array(1e5).fill(0).map((e,t)=>`Option ${t}`),v={type:"code",component:function(){return(0,n.jsx)(r.l,{label:"100 000 options autocomplete",placeholder:"Use limit to optimize performance",limit:5,data:g,searchable:!0})},code:f,maxWidth:340,centered:!0};var j=o(40654);let y=`
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
`,S=Array(100).fill(0).map((e,t)=>`Option ${t}`),w={type:"code",component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.l,{label:"With scroll area (default)",placeholder:"Pick value",data:S,maxDropdownHeight:200}),(0,n.jsx)(r.l,{label:"With native scroll",placeholder:"Pick value",data:S,withScrollArea:!1,styles:{dropdown:{maxHeight:200,overflowY:"auto"}},mt:"md"})]})},code:y,maxWidth:340,centered:!0},A={type:"code",component:function(){return(0,n.jsx)(r.l,{label:"Your favorite library",placeholder:"Pick value",data:[{group:"Frontend",items:["React","Angular"]},{group:"Backend",items:["Express","Django"]}]})},code:`
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
`,maxWidth:340,centered:!0},k={type:"code",component:function(){return(0,n.jsx)(r.l,{label:"Your favorite library",placeholder:"Pick value",data:[{value:"react",label:"React"},{value:"ng",label:"Angular"},{value:"vue",label:"Vue",disabled:!0},{value:"svelte",label:"Svelte",disabled:!0}]})},code:`
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
`,maxWidth:340,centered:!0};var P=o(17598),V=o(61087);let R={type:"code",code:`
import { Popover, Button, Select } from '@mantine/core';

function Demo() {
  return (
    <Popover width={300} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Select
          label="Your favorite library"
          placeholder="Pick value"
          data={['React', 'Angular', 'Vue', 'Svelte']}
          comboboxProps={{ withinPortal: false }}
        />
      </Popover.Dropdown>
    </Popover>
  );
}
`,centered:!0,component:function(){return(0,n.jsxs)(P.A,{width:300,position:"bottom",withArrow:!0,shadow:"md",children:[(0,n.jsx)(P.A.Target,{children:(0,n.jsx)(V.$,{children:"Toggle popover"})}),(0,n.jsx)(P.A.Dropdown,{children:(0,n.jsx)(r.l,{label:"Your favorite library",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],comboboxProps:{withinPortal:!1}})})]})}};var D=o(66438);let C={type:"code",component:function(){let[e,{toggle:t}]=(0,D.j)();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(V.$,{onClick:t,mb:"md",children:"Toggle dropdown"}),(0,n.jsx)(r.l,{label:"Your favorite library",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],dropdownOpened:e})]})},code:`
import { Select, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [dropdownOpened, { toggle }] = useDisclosure();
  return (
    <>
      <Button onClick={toggle} mb="md">
        Toggle dropdown
      </Button>

      <Select
        label="Your favorite library"
        placeholder="Pick value"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        dropdownOpened={dropdownOpened}
      />
    </>
  );
}
`,maxWidth:340,centered:!0},Y={type:"code",component:function(){return(0,n.jsx)(r.l,{label:"Your favorite library",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],comboboxProps:{position:"top",middlewares:{flip:!1,shift:!1}}})},code:`
import { Select } from '@mantine/core';

function Demo() {
  return (
    <Select
      label="Your favorite library"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      comboboxProps={{ position: 'top', middlewares: { flip: false, shift: false } }}
    />
  );
}
`,maxWidth:340,centered:!0},I={type:"code",component:function(){return(0,n.jsx)(r.l,{label:"Your favorite library",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],comboboxProps:{width:200,position:"bottom-start"}})},code:`
import { Select } from '@mantine/core';

function Demo() {
  return (
    <Select
      label="Your favorite library"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      comboboxProps={{ width: 200, position: 'bottom-start' }}
    />
  );
}
`,maxWidth:340,centered:!0};var O={dropdown:"m_f33bcc41",input:"m_37973d9a"};let W={type:"code",component:function(){return(0,n.jsx)(r.l,{label:"Your favorite library",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],classNames:O,comboboxProps:{position:"bottom",middlewares:{flip:!1,shift:!1},offset:0}})},code:[{fileName:"Demo.tsx",code:`
import { Select } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Select
      label="Your favorite library"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      classNames={classes}
      comboboxProps={{ position: 'bottom', middlewares: { flip: false, shift: false }, offset: 0 }}
    />
  );
}
`,language:"tsx"},{fileName:"Demo.module.css",code:`.dropdown {
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  border-color: light-dark(var(--mantine-color-gray-4), var(--mantine-color-dark-4));
  border-top: 0;
}

.input {
  transition: none;

  &[data-expanded] {
    border-color: light-dark(var(--mantine-color-gray-4), var(--mantine-color-dark-4));
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
}
`,language:"scss"}],maxWidth:340,centered:!0},F={type:"code",component:function(){return(0,n.jsx)(r.l,{label:"Your favorite library",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],comboboxProps:{transitionProps:{transition:"pop",duration:200}}})},code:`
import { Select } from '@mantine/core';

function Demo() {
  return (
    <Select
      label="Your favorite library"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      comboboxProps={{ transitionProps: { transition: 'pop', duration: 200 } }}
    />
  );
}
`,maxWidth:340,centered:!0},T={type:"code",component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.l,{label:"Zero padding",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],comboboxProps:{dropdownPadding:0}}),(0,n.jsx)(r.l,{mt:"md",label:"10px padding",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],comboboxProps:{dropdownPadding:10}})]})},code:`
import { Select } from '@mantine/core';

function Demo() {
  return (
    <>
      <Select
        label="Zero padding"
        placeholder="Pick value"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        comboboxProps={{ dropdownPadding: 0 }}
      />
      <Select
        mt="md"
        label="10px padding"
        placeholder="Pick value"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        comboboxProps={{ dropdownPadding: 10 }}
      />
    </>
  );
}
`,maxWidth:340,centered:!0},z={type:"code",component:function(){return(0,n.jsx)(r.l,{label:"Your favorite library",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],comboboxProps:{shadow:"md"}})},code:`
import { Select } from '@mantine/core';

function Demo() {
  return (
    <Select
      label="Your favorite library"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      comboboxProps={{ shadow: 'md' }}
    />
  );
}
`,maxWidth:340,centered:!0};var B=o(39527);let N={type:"code",component:function(){let e=(0,n.jsx)(B.A,{size:16});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.l,{data:["React","Angular","Vue"],leftSectionPointerEvents:"none",leftSection:e,label:"Your favorite library",placeholder:"Your favorite library"}),(0,n.jsx)(r.l,{mt:"md",data:["React","Angular","Vue"],rightSectionPointerEvents:"none",rightSection:e,label:"Your favorite library",placeholder:"Your favorite library"})]})},maxWidth:340,centered:!0,code:`
import { Select } from '@mantine/core';
import { IconComponents } from '@tabler/icons-react';

function Demo() {
  const icon = <IconComponents size={16} />;
  return (
    <>
      <Select
        data={['React', 'Angular', 'Vue']}
        leftSectionPointerEvents="none"
        leftSection={icon}
        label="Your favorite library"
        placeholder="Your favorite library"
      />
      <Select
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
`};var M=o(55661);let E={type:"configurator",component:function(e){return(0,n.jsx)(r.l,{...e,placeholder:"Select placeholder",data:["React","Angular","Vue","Svelte"]})},code:`
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
`,centered:!0,maxWidth:340,controls:M.$7},_={type:"code",component:function(){return(0,n.jsx)(r.l,{label:"Your favorite library",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],readOnly:!0})},code:`
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
`,maxWidth:340,centered:!0},L={type:"code",component:function(){return(0,n.jsx)(r.l,{label:"Your favorite library",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],disabled:!0})},code:`
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
`,maxWidth:340,centered:!0},$={type:"code",component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.l,{label:"Boolean error",placeholder:"Boolean error",error:!0,data:["React","Angular","Vue","Svelte"]}),(0,n.jsx)(r.l,{mt:"md",label:"With error message",placeholder:"With error message",error:"Invalid name",data:["React","Angular","Vue","Svelte"]})]})},maxWidth:340,centered:!0,code:`
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
`};var U=o(8268),G=o(48147);let H=`
import { IconAt } from '@tabler/icons-react';
import { Select } from '@mantine/core';

function Demo() {
  return (
    <Select
     {{props}}
      leftSection={<IconAt size={18} stroke={1.5} />}
      label="Select"
      description="Description"
      error="Error"
      placeholder="Select"
      data={['React', 'Angular']}
    />
  );
}
`,J={type:"styles-api",data:G.R,component:function(e){return(0,n.jsx)(r.l,{...e,dropdownOpened:!0,leftSection:(0,n.jsx)(U.A,{size:18,stroke:1.5}),withAsterisk:!0,label:"Select",description:"Description",placeholder:"Select",comboboxProps:{hideDetached:!1},data:[{group:"Frontend",items:["React","Angular"]},{group:"Backend",items:["Node","Django"]}]})},code:H,centered:!0,maxWidth:340};var q=o(38547),X=o(5262);let Z=(0,q.P)(X.XZ.Select);function Q(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components},{ComboboxData:o,ComboboxDisclaimer:r,ComboboxFiltering:h,ComboboxLargeData:b,ComboboxProps:f,Demo:g,GetElementRef:y,InputAccessibility:S,InputFeatures:P,InputSections:V,StylesApiSelectors:D}=t;return o||ee("ComboboxData",!0),r||ee("ComboboxDisclaimer",!0),h||ee("ComboboxFiltering",!0),b||ee("ComboboxLargeData",!0),f||ee("ComboboxProps",!0),g||ee("Demo",!0),y||ee("GetElementRef",!0),S||ee("InputAccessibility",!0),P||ee("InputFeatures",!0),V||ee("InputSections",!0),D||ee("StylesApiSelectors",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r,{component:"Select"}),"\n",(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Select"})," allows capturing user input based on suggestions from the list.\nUnlike ",(0,n.jsx)(t.a,{href:"/core/autocomplete/",children:"Autocomplete"}),", ",(0,n.jsx)(t.code,{children:"Select"})," does not allow entering custom values."]}),"\n",(0,n.jsx)(g,{data:a}),"\n",(0,n.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Select"})," value must be a string, other types are not supported.\n",(0,n.jsx)(t.code,{children:"onChange"})," function is called with a string value as a single argument."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Select } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState<string | null>('');\n  return <Select data={[]} value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"onchange-handler",children:"onChange handler"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"onChange"})," is called with two arguments:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"value"})," - string value of the selected option"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"option"})," – selected option object"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"If you prefer object format in state, use second argument of onChange handler:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { ComboboxItem, Select } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState<ComboboxItem | null>(null);\n  return (\n    <Select\n      data={[{ value: 'react', label: 'React library' }]}\n      value={value ? value.value : null}\n      onChange={(_value, option) => setValue(option)}\n    />\n  );\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"autoselectonblur",children:"autoSelectOnBlur"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"autoSelectOnBlur"})," prop to automatically select the highlighted option when the input loses focus.\nTo see this feature in action: select an option with up/down arrows, then click outside the input:"]}),"\n",(0,n.jsx)(g,{data:i.Y}),"\n",(0,n.jsx)(t.h2,{id:"clearable",children:"Clearable"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"clearable"})," prop to display the clear button in the right section. The button is not displayed\nwhen:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"The component does not have a value"}),"\n",(0,n.jsx)(t.li,{children:"The component is disabled"}),"\n",(0,n.jsx)(t.li,{children:"The component is read only"}),"\n"]}),"\n",(0,n.jsx)(g,{data:c.U}),"\n",(0,n.jsx)(t.h2,{id:"allow-deselect",children:"Allow deselect"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"allowDeselect"})," prop determines whether the value should be deselected when user clicks on the selected option.\nBy default, ",(0,n.jsx)(t.code,{children:"allowDeselect"})," is ",(0,n.jsx)(t.code,{children:"true"}),":"]}),"\n",(0,n.jsx)(g,{data:d}),"\n",(0,n.jsx)(t.h2,{id:"searchable",children:"Searchable"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"searchable"})," prop to allow filtering options by user input:"]}),"\n",(0,n.jsx)(g,{data:s}),"\n",(0,n.jsx)(t.h2,{id:"controlled-search-value",children:"Controlled search value"}),"\n",(0,n.jsxs)(t.p,{children:["You can control search value with ",(0,n.jsx)(t.code,{children:"searchValue"})," and ",(0,n.jsx)(t.code,{children:"onSearchChange"})," props:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Select } from '@mantine/core';\n\nfunction Demo() {\n  const [searchValue, setSearchValue] = useState('');\n  return (\n    <Select\n      searchable\n      searchValue={searchValue}\n      onSearchChange={setSearchValue}\n      data={[]}\n    />\n  );\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"nothing-found",children:"Nothing found"}),"\n",(0,n.jsxs)(t.p,{children:["Set the ",(0,n.jsx)(t.code,{children:"nothingFoundMessage"})," prop to display a given message when no options match the search query\nor there is no data available. If the ",(0,n.jsx)(t.code,{children:"nothingFoundMessage"})," prop is not set, the ",(0,n.jsx)(t.code,{children:"Select"})," dropdown will be hidden."]}),"\n",(0,n.jsx)(g,{data:u}),"\n",(0,n.jsx)(t.h2,{id:"checked-option-icon",children:"Checked option icon"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"checkIconPosition"})," prop to ",(0,n.jsx)(t.code,{children:"left"})," or ",(0,n.jsx)(t.code,{children:"right"})," to control position of check icon in active option.\nTo remove the check icon, set ",(0,n.jsx)(t.code,{children:"withCheckIcon={false}"}),"."]}),"\n",(0,n.jsx)(g,{data:p}),"\n",(0,n.jsx)(o,{component:"Select"}),"\n",(0,n.jsx)(h,{component:"Select"}),"\n",(0,n.jsx)(g,{data:m}),"\n",(0,n.jsx)(t.h2,{id:"sort-options",children:"Sort options"}),"\n",(0,n.jsxs)(t.p,{children:["By default, options are sorted by their position in the data array. You can change this behavior\nwith ",(0,n.jsx)(t.code,{children:"filter"})," function:"]}),"\n",(0,n.jsx)(g,{data:x}),"\n",(0,n.jsx)(b,{component:"Select"}),"\n",(0,n.jsx)(g,{data:v}),"\n",(0,n.jsx)(t.h2,{id:"renderoption",children:"renderOption"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"renderOption"})," callback allows you to customize option rendering. It is called with option object and\nchecked state. The function must return a React node."]}),"\n",(0,n.jsx)(g,{data:j.w}),"\n",(0,n.jsx)(t.h2,{id:"scrollable-dropdown",children:"Scrollable dropdown"}),"\n",(0,n.jsxs)(t.p,{children:["By default, the options list is wrapped with ",(0,n.jsx)(t.a,{href:"/core/scroll-area",children:"ScrollArea.Autosize"}),".\nYou can control dropdown max-height with ",(0,n.jsx)(t.code,{children:"maxDropdownHeight"})," prop if you do not change the default settings."]}),"\n",(0,n.jsxs)(t.p,{children:["If you want to use native scrollbars, set ",(0,n.jsx)(t.code,{children:"withScrollArea={false}"}),". Note that in this case,\nyou will need to change dropdown styles with ",(0,n.jsx)(t.a,{href:"/styles/styles-api",children:"Styles API"}),"."]}),"\n",(0,n.jsx)(g,{data:w}),"\n",(0,n.jsx)(t.h2,{id:"group-options",children:"Group options"}),"\n",(0,n.jsx)(g,{data:A}),"\n",(0,n.jsx)(t.h2,{id:"disabled-options",children:"Disabled options"}),"\n",(0,n.jsx)(t.p,{children:"When option is disabled, it cannot be selected and is ignored in keyboard navigation."}),"\n",(0,n.jsx)(g,{data:k}),"\n",(0,n.jsx)(f,{component:"Select"}),"\n",(0,n.jsx)(t.h2,{id:"inside-popover",children:"Inside Popover"}),"\n",(0,n.jsxs)(t.p,{children:["To use ",(0,n.jsx)(t.code,{children:"Select"})," inside popover, you need to set ",(0,n.jsx)(t.code,{children:"withinPortal: false"}),":"]}),"\n",(0,n.jsx)(g,{data:R}),"\n",(0,n.jsx)(t.h2,{id:"control-dropdown-opened-state",children:"Control dropdown opened state"}),"\n",(0,n.jsxs)(t.p,{children:["You can control dropdown opened state with ",(0,n.jsx)(t.code,{children:"dropdownOpened"})," prop. Additionally,\nyou can use ",(0,n.jsx)(t.code,{children:"onDropdownClose"})," and ",(0,n.jsx)(t.code,{children:"onDropdownOpen"})," to listen to dropdown opened state changes."]}),"\n",(0,n.jsx)(g,{data:C}),"\n",(0,n.jsx)(t.h2,{id:"dropdown-position",children:"Dropdown position"}),"\n",(0,n.jsxs)(t.p,{children:["By default, the dropdown is displayed below the input if there is enough space; otherwise it is displayed above the input.\nYou can change this behavior by setting ",(0,n.jsx)(t.code,{children:"position"})," and ",(0,n.jsx)(t.code,{children:"middlewares"})," props, which are passed down to the\nunderlying ",(0,n.jsx)(t.a,{href:"/core/popover",children:"Popover"})," component."]}),"\n",(0,n.jsx)(t.p,{children:"Example of dropdown that is always displayed above the input:"}),"\n",(0,n.jsx)(g,{data:Y}),"\n",(0,n.jsx)(t.h2,{id:"dropdown-width",children:"Dropdown width"}),"\n",(0,n.jsxs)(t.p,{children:["To change dropdown width, set ",(0,n.jsx)(t.code,{children:"width"})," prop in ",(0,n.jsx)(t.code,{children:"comboboxProps"}),". By default,\ndropdown width is equal to the input width."]}),"\n",(0,n.jsx)(g,{data:I}),"\n",(0,n.jsx)(t.h2,{id:"dropdown-offset",children:"Dropdown offset"}),"\n",(0,n.jsxs)(t.p,{children:["To change dropdown offset, set ",(0,n.jsx)(t.code,{children:"offset"})," prop in ",(0,n.jsx)(t.code,{children:"comboboxProps"}),":"]}),"\n",(0,n.jsx)(g,{data:W}),"\n",(0,n.jsx)(t.h2,{id:"prevent-horizontal-infinite-scrolling",children:"Prevent horizontal infinite scrolling"}),"\n",(0,n.jsxs)(t.p,{children:["If you experience horizontal infinite scrolling in the dropdown, set the ",(0,n.jsx)(t.code,{children:"shift"})," middleware ",(0,n.jsx)(t.code,{children:"padding"})," to ",(0,n.jsx)(t.code,{children:"0"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { Select } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Select\n      data={['React', 'Angular', 'Vue']}\n      comboboxProps={{\n        middlewares: {\n          shift: { padding: 0 }\n        }\n      }}\n    />\n  );\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"dropdown-animation",children:"Dropdown animation"}),"\n",(0,n.jsxs)(t.p,{children:["By default, dropdown animations are disabled. To enable them, you can set ",(0,n.jsx)(t.code,{children:"transitionProps"}),",\nwhich will be passed down to the underlying ",(0,n.jsx)(t.a,{href:"/core/transition",children:"Transition"})," component."]}),"\n",(0,n.jsx)(g,{data:F}),"\n",(0,n.jsx)(t.h2,{id:"dropdown-padding",children:"Dropdown padding"}),"\n",(0,n.jsx)(g,{data:T}),"\n",(0,n.jsx)(t.h2,{id:"dropdown-shadow",children:"Dropdown shadow"}),"\n",(0,n.jsx)(g,{data:z}),"\n",(0,n.jsx)(V,{component:"Select"}),"\n",(0,n.jsx)(g,{data:N}),"\n",(0,n.jsx)(t.h2,{id:"input-props",children:"Input props"}),"\n",(0,n.jsx)(P,{component:"Select",element:"input"}),"\n",(0,n.jsx)(g,{data:E}),"\n",(0,n.jsx)(t.h2,{id:"read-only",children:"Read only"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"readOnly"})," to make the input read only. When ",(0,n.jsx)(t.code,{children:"readOnly"})," is set,\n",(0,n.jsx)(t.code,{children:"Select"})," will not show suggestions and will not call ",(0,n.jsx)(t.code,{children:"onChange"})," function."]}),"\n",(0,n.jsx)(g,{data:_}),"\n",(0,n.jsx)(t.h2,{id:"disabled",children:"Disabled"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"disabled"})," to disable the input. When ",(0,n.jsx)(t.code,{children:"disabled"})," is set,\nuser cannot interact with the input and ",(0,n.jsx)(t.code,{children:"Select"})," will not show suggestions."]}),"\n",(0,n.jsx)(g,{data:L}),"\n",(0,n.jsx)(t.h2,{id:"error-state",children:"Error state"}),"\n",(0,n.jsx)(g,{data:$}),"\n",(0,n.jsx)(D,{component:"Select"}),"\n",(0,n.jsx)(g,{data:J}),"\n",(0,n.jsx)(y,{component:"Select",refType:"input"}),"\n",(0,n.jsx)(S,{component:"Select"}),"\n",(0,n.jsxs)(t.p,{children:["To set ",(0,n.jsx)(t.code,{children:"aria-label"})," on the clear button, use ",(0,n.jsx)(t.code,{children:"clearButtonProps"}),". Note that it is required\nonly when ",(0,n.jsx)(t.code,{children:"clearable"})," is set."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { Select } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Select\n      data={[]}\n      clearable\n      clearButtonProps={{\n        'aria-label': 'Clear input',\n      }}\n    />\n  );\n}\n"})})]})}function K(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(Z,{...e,children:(0,n.jsx)(Q,{...e})})}function ee(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},2226:(e,t,o)=>{"use strict";o.d(t,{U:()=>r});var n=o(6029),l=o(61492);let r={type:"code",component:function(){return(0,n.jsx)(l.l,{label:"Your favorite library",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],defaultValue:"React",clearable:!0})},code:`
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
`,maxWidth:340,centered:!0}},8268:(e,t,o)=>{"use strict";o.d(t,{A:()=>n});let n=(0,o(41495).A)("outline","at","At",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},33111:(e,t,o)=>{"use strict";o.d(t,{A:()=>n});let n=(0,o(41495).A)("outline","align-center","AlignCenter",[["path",{d:"M4 6l16 0",key:"svg-0"}],["path",{d:"M8 12l8 0",key:"svg-1"}],["path",{d:"M6 18l12 0",key:"svg-2"}]])},39527:(e,t,o)=>{"use strict";o.d(t,{A:()=>n});let n=(0,o(41495).A)("outline","components","Components",[["path",{d:"M3 12l3 3l3 -3l-3 -3z",key:"svg-0"}],["path",{d:"M15 12l3 3l3 -3l-3 -3z",key:"svg-1"}],["path",{d:"M9 6l3 3l3 -3l-3 -3z",key:"svg-2"}],["path",{d:"M9 18l3 3l3 -3l-3 -3z",key:"svg-3"}]])},40654:(e,t,o)=>{"use strict";o.d(t,{w:()=>b});var n=o(6029),l=o(55843),r=o(33111),a=o(41591),i=o(77869),c=o(90515),d=o(57414),s=o(61492);let u=`
import {
  IconAlignCenter,
  IconAlignJustified,
  IconAlignLeft,
  IconAlignRight,
  IconCheck,
} from '@tabler/icons-react';
import { Group, Select, SelectProps } from '@mantine/core';

const iconProps = {
  stroke: 1.5,
  color: 'currentColor',
  opacity: 0.6,
  size: 18,
};

const icons: Record<string, React.ReactNode> = {
  left: <IconAlignLeft {...iconProps} />,
  center: <IconAlignCenter {...iconProps} />,
  right: <IconAlignRight {...iconProps} />,
  justify: <IconAlignJustified {...iconProps} />,
};

const renderSelectOption: SelectProps['renderOption'] = ({ option, checked }) => (
  <Group flex="1" gap="xs">
    {icons[option.value]}
    {option.label}
    {checked && <IconCheck style={{ marginInlineStart: 'auto' }} {...iconProps} />}
  </Group>
);

function Demo() {
  return (
    <Select
      label="Select with renderOption"
      placeholder="Select text align"
      data={[
        { value: 'left', label: 'Left' },
        { value: 'center', label: 'Center' },
        { value: 'right', label: 'Right' },
        { value: 'justify', label: 'Justify' },
      ]}
      renderOption={renderSelectOption}
    />
  );
}
`,p={stroke:1.5,color:"currentColor",opacity:.6,size:18},h={left:(0,n.jsx)(l.A,{...p}),center:(0,n.jsx)(r.A,{...p}),right:(0,n.jsx)(a.A,{...p}),justify:(0,n.jsx)(i.A,{...p})},m=({option:e,checked:t})=>(0,n.jsxs)(d.Y,{flex:"1",gap:"xs",children:[h[e.value],e.label,t&&(0,n.jsx)(c.A,{style:{marginInlineStart:"auto"},...p})]}),b={type:"code",component:function(){return(0,n.jsx)(s.l,{label:"Select with renderOption",placeholder:"Select text align",data:[{value:"left",label:"Left"},{value:"center",label:"Center"},{value:"right",label:"Right"},{value:"justify",label:"Justify"}],renderOption:m})},code:u,centered:!0,maxWidth:340,defaultExpanded:!1}},41591:(e,t,o)=>{"use strict";o.d(t,{A:()=>n});let n=(0,o(41495).A)("outline","align-right","AlignRight",[["path",{d:"M4 6l16 0",key:"svg-0"}],["path",{d:"M10 12l10 0",key:"svg-1"}],["path",{d:"M6 18l14 0",key:"svg-2"}]])},55661:(e,t,o)=>{"use strict";o.d(t,{$7:()=>r,l$:()=>n,wQ:()=>l});let n=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],l=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],r=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]},55843:(e,t,o)=>{"use strict";o.d(t,{A:()=>n});let n=(0,o(41495).A)("outline","align-left","AlignLeft",[["path",{d:"M4 6l16 0",key:"svg-0"}],["path",{d:"M4 12l10 0",key:"svg-1"}],["path",{d:"M4 18l14 0",key:"svg-2"}]])},77869:(e,t,o)=>{"use strict";o.d(t,{A:()=>n});let n=(0,o(41495).A)("outline","align-justified","AlignJustified",[["path",{d:"M4 6l16 0",key:"svg-0"}],["path",{d:"M4 12l16 0",key:"svg-1"}],["path",{d:"M4 18l12 0",key:"svg-2"}]])},98257:(e,t,o)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/select",function(){return o(1002)}])}},e=>{e.O(0,[38547,2061,48537,90636,46593,38792],()=>e(e.s=98257)),_N_E=e.O()}]);