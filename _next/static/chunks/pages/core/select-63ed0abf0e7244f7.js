(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[75089],{93693:function(e,t,o){"use strict";o.d(t,{Z:function(){return n}});var n=(0,o(54764).Z)("at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},76623:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/select",function(){return o(16129)}])},16129:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return eS}});var n=o(24246),r=o(71670),l=o(27378),a=o(2570);let i=`
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
`,c={type:"code",component:function(){return l.createElement(a.P,{label:"Your favorite library",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"]})},code:i,maxWidth:340,centered:!0},d=`
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
`,s={type:"code",component:function(){return l.createElement(a.P,{label:"Your favorite library",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],defaultValue:"React",clearable:!0})},code:d,maxWidth:340,centered:!0},u=`
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
`,p={type:"code",component:function(){return l.createElement(l.Fragment,null,l.createElement(a.P,{label:"Option can NOT be deselected",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],defaultValue:"React",allowDeselect:!1}),l.createElement(a.P,{label:"Option can be deselected",description:"This is default behavior, click 'React' in the dropdown",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],defaultValue:"React",allowDeselect:!0,mt:"md"}))},code:u,maxWidth:340,centered:!0},h=`
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
`,m={type:"code",component:function(){return l.createElement(a.P,{label:"Your favorite library",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],searchable:!0})},code:h,maxWidth:340,centered:!0},f=`
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
`,b={type:"code",component:function(){return l.createElement(a.P,{label:"Your favorite library",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],searchable:!0,nothingFoundMessage:"Nothing found..."})},code:f,maxWidth:340,centered:!0},v=`
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
`,g={type:"configurator",component:function(e){return l.createElement(a.P,{...e,data:["React","Angular","Svelte","Vue"],dropdownOpened:!0,pb:150,label:"Control check icon",placeholder:"Pick value",defaultValue:"React"})},code:v,centered:!0,maxWidth:340,controls:[{type:"boolean",prop:"withCheckIcon",initialValue:!0,libraryValue:!0},{type:"segmented",prop:"checkIconPosition",initialValue:"left",libraryValue:null,data:["left","right"]}]},x=`
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
`,y=({options:e,search:t})=>{let o=t.toLowerCase().trim().split(" ");return e.filter(e=>{let t=e.label.toLowerCase().trim().split(" ");return o.every(e=>t.some(t=>t.includes(e)))})},S={type:"code",component:function(){return l.createElement(a.P,{label:"Your country",placeholder:"Pick value",data:["Great Britain","Russian Federation","United States"],filter:y,searchable:!0})},code:x,maxWidth:340,centered:!0},w=`
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
`,j=({options:e,search:t})=>{let o=e.filter(e=>e.label.toLowerCase().trim().includes(t.toLowerCase().trim()));return o.sort((e,t)=>e.label.localeCompare(t.label)),o},P={type:"code",component:function(){return l.createElement(a.P,{label:"Your favorite library",placeholder:"Pick value",data:["4 – React","1 – Angular","3 – Vue","2 – Svelte"],filter:j,nothingFoundMessage:"Nothing found...",searchable:!0})},code:w,maxWidth:340,centered:!0},V=`
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
`,k=Array(1e5).fill(0).map((e,t)=>`Option ${t}`),E={type:"code",component:function(){return l.createElement(a.P,{label:"100 000 options autocomplete",placeholder:"Use limit to optimize performance",limit:5,data:k,searchable:!0})},code:V,maxWidth:340,centered:!0},A=`
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
`,D=Array(100).fill(0).map((e,t)=>`Option ${t}`),R={type:"code",component:function(){return l.createElement(l.Fragment,null,l.createElement(a.P,{label:"With scroll area (default)",placeholder:"Pick value",data:D,maxDropdownHeight:200}),l.createElement(a.P,{label:"With native scroll",placeholder:"Pick value",data:D,withScrollArea:!1,styles:{dropdown:{maxHeight:200,overflowY:"auto"}},mt:"md"}))},code:A,maxWidth:340,centered:!0},C=`
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
`,Y={type:"code",component:function(){return l.createElement(a.P,{label:"Your favorite library",placeholder:"Pick value",data:[{group:"Frontend",items:["React","Angular"]},{group:"Backend",items:["Express","Django"]}]})},code:C,maxWidth:340,centered:!0},O=`
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
`,W={type:"code",component:function(){return l.createElement(a.P,{label:"Your favorite library",placeholder:"Pick value",data:[{value:"react",label:"React"},{value:"ng",label:"Angular"},{value:"vue",label:"Vue",disabled:!0},{value:"svelte",label:"Svelte",disabled:!0}]})},code:O,maxWidth:340,centered:!0};var I=o(63433),F=o(8671);let N=`
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
`,T={type:"code",code:N,centered:!0,component:function(){return l.createElement(I.J,{width:300,position:"bottom",withArrow:!0,shadow:"md"},l.createElement(I.J.Target,null,l.createElement(F.z,null,"Toggle popover")),l.createElement(I.J.Dropdown,null,l.createElement(a.P,{label:"Your favorite library",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],comboboxProps:{withinPortal:!1}})))}};var B=o(87921);let _=`
import { Select, Button } from '@mantine/core';

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
`,z={type:"code",component:function(){let[e,{toggle:t}]=(0,B.q)();return l.createElement(l.Fragment,null,l.createElement(F.z,{onClick:t,mb:"md"},"Toggle dropdown"),l.createElement(a.P,{label:"Your favorite library",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],dropdownOpened:e}))},code:_,maxWidth:340,centered:!0},M=`
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
`,L={type:"code",component:function(){return l.createElement(a.P,{label:"Your favorite library",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],comboboxProps:{position:"top",middlewares:{flip:!1,shift:!1}}})},code:M,maxWidth:340,centered:!0};var Z={dropdown:"m-f33bcc41",input:"m-37973d9a"};let $=`.dropdown {
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
`,q=`
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
`,U={type:"code",component:function(){return l.createElement(a.P,{label:"Your favorite library",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],classNames:Z,comboboxProps:{position:"bottom",middlewares:{flip:!1,shift:!1},offset:0}})},code:[{fileName:"Demo.tsx",code:q,language:"tsx"},{fileName:"Demo.module.css",code:$,language:"scss"}],maxWidth:340,centered:!0},G=`
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
`,H={type:"code",component:function(){return l.createElement(a.P,{label:"Your favorite library",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],comboboxProps:{transitionProps:{transition:"pop",duration:200}}})},code:G,maxWidth:340,centered:!0},J=`
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
`,X={type:"code",component:function(){return l.createElement(l.Fragment,null,l.createElement(a.P,{label:"Zero padding",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],comboboxProps:{dropdownPadding:0}}),l.createElement(a.P,{mt:"md",label:"10px padding",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],comboboxProps:{dropdownPadding:10}}))},code:J,maxWidth:340,centered:!0},K=`
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
`,Q={type:"code",component:function(){return l.createElement(a.P,{label:"Your favorite library",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],comboboxProps:{shadow:"md"}})},code:K,maxWidth:340,centered:!0};var ee=o(94503),et=o(71078);let eo=`
import { Select, rem } from '@mantine/core';
import { IconComponents } from '@tabler/icons-react';

function Demo() {
  const icon = <IconComponents style={{ width: rem(16), height: rem(16) }} />;
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
`,en={type:"code",component:function(){let e=l.createElement(ee.Z,{style:{width:(0,et.h)(16),height:(0,et.h)(16)}});return l.createElement(l.Fragment,null,l.createElement(a.P,{data:["React","Angular","Vue"],leftSectionPointerEvents:"none",leftSection:e,label:"Your favorite library",placeholder:"Your favorite library"}),l.createElement(a.P,{mt:"md",data:["React","Angular","Vue"],rightSectionPointerEvents:"none",rightSection:e,label:"Your favorite library",placeholder:"Your favorite library"}))},maxWidth:340,centered:!0,code:eo};var er=o(77481);let el=`
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
`,ea={type:"configurator",component:function(e){return l.createElement(a.P,{...e,placeholder:"Select placeholder",data:["React","Angular","Vue","Svelte"]})},code:el,centered:!0,maxWidth:340,controls:er.pc},ei=`
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
`,ec={type:"code",component:function(){return l.createElement(a.P,{label:"Your favorite library",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],readOnly:!0})},code:ei,maxWidth:340,centered:!0},ed=`
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
`,es={type:"code",component:function(){return l.createElement(a.P,{label:"Your favorite library",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],disabled:!0})},code:ed,maxWidth:340,centered:!0},eu=`
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
`,ep={type:"code",component:function(){return l.createElement(l.Fragment,null,l.createElement(a.P,{label:"Boolean error",placeholder:"Boolean error",error:!0,data:["React","Angular","Vue","Svelte"]}),l.createElement(a.P,{mt:"md",label:"With error message",placeholder:"With error message",error:"Invalid name",data:["React","Angular","Vue","Svelte"]}))},maxWidth:340,centered:!0,code:eu};var eh=o(93693),em=o(61309);let ef=`
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
`,eb={type:"styles-api",data:em.i,component:function(e){return l.createElement(a.P,{...e,dropdownOpened:!0,leftSection:l.createElement(eh.Z,{style:{width:(0,et.h)(18),height:(0,et.h)(18)},stroke:1.5}),withAsterisk:!0,label:"Select",description:"Description",placeholder:"Select",data:[{group:"Frontend",items:["React","Angular"]},{group:"Backend",items:["Node","Django"]}]})},code:ef,centered:!0,maxWidth:340};var ev=o(3916),eg=o(54568);let ex=(0,ev.A)(eg.us.Select);function ey(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components},{ComboboxData:o,ComboboxDisclaimer:l,ComboboxFiltering:a,ComboboxLargeData:i,ComboboxProps:d,Demo:u,GetElementRef:h,InputAccessibility:f,InputFeatures:v,InputSections:x,StylesApiSelectors:y}=t;return o||ew("ComboboxData",!0),l||ew("ComboboxDisclaimer",!0),a||ew("ComboboxFiltering",!0),i||ew("ComboboxLargeData",!0),d||ew("ComboboxProps",!0),u||ew("Demo",!0),h||ew("GetElementRef",!0),f||ew("InputAccessibility",!0),v||ew("InputFeatures",!0),x||ew("InputSections",!0),y||ew("StylesApiSelectors",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l,{component:"Select"}),"\n",(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Select"})," allows capturing user input based on suggestions from the list.\nUnlike ",(0,n.jsx)(t.a,{href:"/core/autocomplete/",children:"Autocomplete"}),", ",(0,n.jsx)(t.code,{children:"Select"})," does not allow entering custom values."]}),"\n",(0,n.jsx)(u,{data:c}),"\n",(0,n.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Select"})," value must be a string, other types are not supported.\n",(0,n.jsx)(t.code,{children:"onChange"})," function is called with a string value as a single argument."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Select } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState<string | null>('');\n  return <Select data={[]} value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"onchange-handler",children:"onChange handler"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"onChange"})," is called with two arguments:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"value"})," - string value of the selected option"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"option"})," – selected option object"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"If you prefer object format in state, use second argument of onChange handler:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { ComboboxItem, Select } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState<ComboboxItem | null>(null);\n  return (\n    <Select\n      data={[{ value: 'react', label: 'React library' }]}\n      value={value ? value.value : null}\n      onChange={(_value, option) => setValue(option)}\n    />\n  );\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"clearable",children:"Clearable"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"clearable"})," prop to display the clear button in the right section. The button is not displayed\nwhen:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"The component does not have a value"}),"\n",(0,n.jsx)(t.li,{children:"The component is disabled"}),"\n",(0,n.jsx)(t.li,{children:"The component is read only"}),"\n"]}),"\n",(0,n.jsx)(u,{data:s}),"\n",(0,n.jsx)(t.h2,{id:"allow-deselect",children:"Allow deselect"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"allowDeselect"})," prop determines whether the value should be deselected when user clicks on the selected option.\nBy default, ",(0,n.jsx)(t.code,{children:"allowDeselect"})," is ",(0,n.jsx)(t.code,{children:"true"}),":"]}),"\n",(0,n.jsx)(u,{data:p}),"\n",(0,n.jsx)(t.h2,{id:"searchable",children:"Searchable"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"searchable"})," prop to allow filtering options by user input:"]}),"\n",(0,n.jsx)(u,{data:m}),"\n",(0,n.jsx)(t.h2,{id:"controlled-search-value",children:"Controlled search value"}),"\n",(0,n.jsxs)(t.p,{children:["You can control search value with ",(0,n.jsx)(t.code,{children:"searchValue"})," and ",(0,n.jsx)(t.code,{children:"onSearchChange"})," props:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Select } from '@mantine/core';\n\nfunction Demo() {\n  const [searchValue, setSearchValue] = useState('');\n  return (\n    <Select\n      searchable\n      searchValue={searchValue}\n      onSearchChange={setSearchValue}\n      data={[]}\n    />\n  );\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"nothing-found",children:"Nothing found"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"nothingFoundMessage"})," prop to display given message when no options match search query.\nIf ",(0,n.jsx)(t.code,{children:"nothingFoundMessage"})," is not set, ",(0,n.jsx)(t.code,{children:"Select"})," dropdown will be hidden when no options match search query.\nThe message is not displayed when trimmed search query is empty."]}),"\n",(0,n.jsx)(u,{data:b}),"\n",(0,n.jsx)(t.h2,{id:"checked-option-icon",children:"Checked option icon"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"checkIconPosition"})," prop to ",(0,n.jsx)(t.code,{children:"left"})," or ",(0,n.jsx)(t.code,{children:"right"})," to control position of check icon in active option.\nTo remove the check icon, set ",(0,n.jsx)(t.code,{children:"withCheckIcon={false}"}),"."]}),"\n",(0,n.jsx)(u,{data:g}),"\n",(0,n.jsx)(o,{component:"Select"}),"\n",(0,n.jsx)(a,{component:"Select"}),"\n",(0,n.jsx)(u,{data:S}),"\n",(0,n.jsx)(t.h2,{id:"sort-options",children:"Sort options"}),"\n",(0,n.jsxs)(t.p,{children:["By default, options are sorted by their position in the data array. You can change this behavior\nwith ",(0,n.jsx)(t.code,{children:"filter"})," function:"]}),"\n",(0,n.jsx)(u,{data:P}),"\n",(0,n.jsx)(i,{component:"Select"}),"\n",(0,n.jsx)(u,{data:E}),"\n",(0,n.jsx)(t.h2,{id:"scrollable-dropdown",children:"Scrollable dropdown"}),"\n",(0,n.jsxs)(t.p,{children:["By default, the options list is wrapped with ",(0,n.jsx)(t.a,{href:"/core/scroll-area",children:"ScrollArea.Autosize"}),".\nYou can control dropdown max-height with ",(0,n.jsx)(t.code,{children:"maxDropdownHeight"})," prop if you do not change the default settings."]}),"\n",(0,n.jsxs)(t.p,{children:["If you want to use native scrollbars, set ",(0,n.jsx)(t.code,{children:"withScrollArea={false}"}),". Note that in this case,\nyou will need to change dropdown styles with ",(0,n.jsx)(t.a,{href:"/styles/styles-api",children:"Styles API"}),"."]}),"\n",(0,n.jsx)(u,{data:R}),"\n",(0,n.jsx)(t.h2,{id:"group-options",children:"Group options"}),"\n",(0,n.jsx)(u,{data:Y}),"\n",(0,n.jsx)(t.h2,{id:"disabled-options",children:"Disabled options"}),"\n",(0,n.jsx)(t.p,{children:"When option is disabled, it cannot be selected and is ignored in keyboard navigation."}),"\n",(0,n.jsx)(u,{data:W}),"\n",(0,n.jsx)(d,{component:"Select"}),"\n",(0,n.jsx)(t.h2,{id:"inside-popover",children:"Inside Popover"}),"\n",(0,n.jsxs)(t.p,{children:["To use ",(0,n.jsx)(t.code,{children:"Select"})," inside popover, you need to set ",(0,n.jsx)(t.code,{children:"withinPortal: false"}),":"]}),"\n",(0,n.jsx)(u,{data:T}),"\n",(0,n.jsx)(t.h2,{id:"control-dropdown-opened-state",children:"Control dropdown opened state"}),"\n",(0,n.jsxs)(t.p,{children:["You can control dropdown opened state with ",(0,n.jsx)(t.code,{children:"dropdownOpened"})," prop. Additionally,\nyou can use ",(0,n.jsx)(t.code,{children:"onDropdownClose"})," and ",(0,n.jsx)(t.code,{children:"onDropdownOpen"})," to listen to dropdown opened state changes."]}),"\n",(0,n.jsx)(u,{data:z}),"\n",(0,n.jsx)(t.h2,{id:"dropdown-position",children:"Dropdown position"}),"\n",(0,n.jsxs)(t.p,{children:["By default, the dropdown is displayed below the input if there is enough space; otherwise it is displayed above the input.\nYou can change this behavior by setting ",(0,n.jsx)(t.code,{children:"position"})," and ",(0,n.jsx)(t.code,{children:"middlewares"})," props, which are passed down to the\nunderlying ",(0,n.jsx)(t.a,{href:"/core/popover",children:"Popover"})," component."]}),"\n",(0,n.jsx)(t.p,{children:"Example of dropdown that is always displayed above the input:"}),"\n",(0,n.jsx)(u,{data:L}),"\n",(0,n.jsx)(t.h2,{id:"dropdown-offset",children:"Dropdown offset"}),"\n",(0,n.jsxs)(t.p,{children:["To change dropdown offset, set ",(0,n.jsx)(t.code,{children:"offset"})," prop in ",(0,n.jsx)(t.code,{children:"comboboxProps"}),":"]}),"\n",(0,n.jsx)(u,{data:U}),"\n",(0,n.jsx)(t.h2,{id:"dropdown-animation",children:"Dropdown animation"}),"\n",(0,n.jsxs)(t.p,{children:["By default, dropdown animations are disabled. To enable them, you can set ",(0,n.jsx)(t.code,{children:"transitionProps"}),",\nwhich will be passed down to the underlying ",(0,n.jsx)(t.a,{href:"/core/transition",children:"Transition"})," component."]}),"\n",(0,n.jsx)(u,{data:H}),"\n",(0,n.jsx)(t.h2,{id:"dropdown-padding",children:"Dropdown padding"}),"\n",(0,n.jsx)(u,{data:X}),"\n",(0,n.jsx)(t.h2,{id:"dropdown-shadow",children:"Dropdown shadow"}),"\n",(0,n.jsx)(u,{data:Q}),"\n",(0,n.jsx)(x,{component:"Select"}),"\n",(0,n.jsx)(u,{data:en}),"\n",(0,n.jsx)(t.h2,{id:"input-props",children:"Input props"}),"\n",(0,n.jsx)(v,{component:"Select",element:"input"}),"\n",(0,n.jsx)(u,{data:ea}),"\n",(0,n.jsx)(t.h2,{id:"read-only",children:"Read only"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"readOnly"})," to make the input read only. When ",(0,n.jsx)(t.code,{children:"readOnly"})," is set,\n",(0,n.jsx)(t.code,{children:"Select"})," will not show suggestions and will not call ",(0,n.jsx)(t.code,{children:"onChange"})," function."]}),"\n",(0,n.jsx)(u,{data:ec}),"\n",(0,n.jsx)(t.h2,{id:"disabled",children:"Disabled"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"disabled"})," to disable the input. When ",(0,n.jsx)(t.code,{children:"disabled"})," is set,\nuser cannot interact with the input and ",(0,n.jsx)(t.code,{children:"Select"})," will not show suggestions."]}),"\n",(0,n.jsx)(u,{data:es}),"\n",(0,n.jsx)(t.h2,{id:"error-state",children:"Error state"}),"\n",(0,n.jsx)(u,{data:ep}),"\n",(0,n.jsx)(y,{component:"Select"}),"\n",(0,n.jsx)(u,{data:eb}),"\n",(0,n.jsx)(h,{component:"Select",refType:"input"}),"\n",(0,n.jsx)(f,{component:"Select"}),"\n",(0,n.jsxs)(t.p,{children:["To set ",(0,n.jsx)(t.code,{children:"aria-label"})," on the clear button, use ",(0,n.jsx)(t.code,{children:"clearButtonProps"}),". Note that it is required\nonly when ",(0,n.jsx)(t.code,{children:"clearable"})," is set."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { Select } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Select\n      data={[]}\n      clearable\n      clearButtonProps={{\n        'aria-label': 'Clear input',\n      }}\n    />\n  );\n}\n"})})]})}function eS(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(ex,{...e,children:(0,n.jsx)(ey,{...e})})}function ew(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},77481:function(e,t,o){"use strict";o.d(t,{Mt:function(){return n},nW:function(){return r},pc:function(){return l}});let n=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],r=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],l=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]},81097:function(e,t,o){"use strict";o.d(t,{r:function(){return u}});var n=o(27378),r=o(40624),l=o(38765),a=o(49849),i=o(45608),c=o(61777),d=o(62443);function s(e,t){return Array.isArray(e)?e.includes(t):e===t}function Option({data:e,withCheckIcon:t,value:o,checkIconPosition:a,unstyled:u}){if(!(0,c.f)(e)){let c=t&&s(o,e.value)&&n.createElement(l.n,{className:d.Z.optionsDropdownCheckIcon});return n.createElement(i.h.Option,{value:e.value,disabled:e.disabled,className:(0,r.Z)({[d.Z.optionsDropdownOption]:!u}),"data-reverse":"right"===a||void 0,"data-checked":s(o,e.value)||void 0,"aria-selected":s(o,e.value)},"left"===a&&c,n.createElement("span",null,e.label),"right"===a&&c)}let p=e.items.map(e=>n.createElement(Option,{data:e,value:o,key:e.value,unstyled:u,withCheckIcon:t,checkIconPosition:a}));return n.createElement(i.h.Group,{label:e.group},p)}function u({data:e,hidden:t,hiddenWhenEmpty:o,filter:r,search:l,limit:d,maxDropdownHeight:s,withScrollArea:u=!0,filterOptions:p=!0,withCheckIcon:h=!1,value:m,checkIconPosition:f,nothingFoundMessage:b,unstyled:v,labelId:g}){!function e(t,o=new Set){if(Array.isArray(t))for(let n of t)if((0,c.f)(n))e(n.items,o);else{if(void 0===n.value)throw Error("[@mantine/core] Each option must have value property");if("string"!=typeof n.value)throw Error(`[@mantine/core] Option value must be a string, other data formats are not supported, got ${typeof n.value}`);if(o.has(n.value))throw Error(`[@mantine/core] Duplicate options are not supported. Option with value "${n.value}" was provided more than once`);o.add(n.value)}}(e);let x="string"==typeof l,y=x?(r||function e({options:t,search:o,limit:n}){let r=o.trim().toLowerCase(),l=[];for(let a=0;a<t.length;a+=1){let i=t[a];if(l.length===n)break;(0,c.f)(i)&&l.push({group:i.group,items:e({options:i.items,search:o,limit:n-l.length})}),!(0,c.f)(i)&&i.label.toLowerCase().includes(r)&&l.push(i)}return l})({options:e,search:p?l:"",limit:d??1/0}):e,S=function(e){if(0===e.length)return!0;for(let t of e)if(!("group"in t)||t.items.length>0)return!1;return!0}(y),w=y.map(e=>n.createElement(Option,{data:e,key:(0,c.f)(e)?e.group:e.value,withCheckIcon:h,value:m,checkIconPosition:f,unstyled:v}));return n.createElement(i.h.Dropdown,{hidden:t||o&&S},n.createElement(i.h.Options,{labelledBy:g},u?n.createElement(a.x.Autosize,{mah:s??220,type:"scroll",scrollbarSize:"var(--_combobox-padding)",offsetScrollbars:"y"},w):w,S&&b&&n.createElement(i.h.Empty,null,b)))}},61777:function(e,t,o){"use strict";function n(e){return"group"in e}o.d(t,{f:function(){return n}})},38099:function(e,t,o){"use strict";o.d(t,{g:function(){return function e(t){return t.reduce((t,o)=>"group"in o?{...t,...e(o.items)}:(t[o.value]=o,t),{})}}})},2570:function(e,t,o){"use strict";o.d(t,{P:function(){return b}});var n=o(27378),r=o(31002),l=o(58675),a=o(5564),i=o(96739),c=o(20410),d=o(2161),s=o(38099),u=o(45608),p=o(81097),h=o(54526),m=o(23163);let f={searchable:!1,withCheckIcon:!0,allowDeselect:!0,checkIconPosition:"left"},b=(0,c.d)((e,t)=>{let o=(0,i.w)("Select",f,e),{classNames:c,styles:b,unstyled:v,vars:g,dropdownOpened:x,defaultDropdownOpened:y,onDropdownClose:S,onDropdownOpen:w,onFocus:j,onBlur:P,onClick:V,onChange:k,data:E,value:A,defaultValue:D,selectFirstOptionOnChange:R,onOptionSubmit:C,comboboxProps:Y,readOnly:O,disabled:W,filter:I,limit:F,withScrollArea:N,maxDropdownHeight:T,size:B,searchable:_,rightSection:z,checkIconPosition:M,withCheckIcon:L,nothingFoundMessage:Z,name:$,form:q,searchValue:U,defaultSearchValue:G,onSearchChange:H,allowDeselect:J,error:X,rightSectionPointerEvents:K,id:Q,clearable:ee,clearButtonProps:et,hiddenInputProps:eo,...en}=o,er=(0,n.useMemo)(()=>(0,d.R)(E),[E]),el=(0,n.useMemo)(()=>(0,s.g)(er),[er]),ea=(0,r.M)(Q),[ei,ec]=(0,l.C)({value:A,defaultValue:D,finalValue:null,onChange:k}),ed="string"==typeof ei?el[ei]:void 0,[es,eu]=(0,l.C)({value:U,defaultValue:G,finalValue:ed?ed.label:"",onChange:H}),ep=(0,h.K)({opened:x,defaultOpened:y,onDropdownOpen:w,onDropdownClose:()=>{S?.(),ep.resetSelectedOption()}}),{resolvedClassNames:eh,resolvedStyles:em}=(0,a.h)({props:o,styles:b,classNames:c});(0,n.useEffect)(()=>{R&&ep.selectFirstOption()},[R,ei]),(0,n.useEffect)(()=>{null===A&&eu(""),"string"==typeof A&&ed&&eu(ed.label)},[A,ed]);let ef=ee&&!!ei&&!W&&!O&&n.createElement(u.h.ClearButton,{size:B,...et,onClear:()=>{ec(null,null),eu("")}});return n.createElement(n.Fragment,null,n.createElement(u.h,{store:ep,__staticSelector:"Select",classNames:eh,styles:em,unstyled:v,readOnly:O,onOptionSubmit:e=>{C?.(e);let t=J&&el[e].value===ei?null:el[e],o=t?t.value:null;ec(o,t),eu("string"==typeof o&&t?.label||""),ep.closeDropdown()},size:B,...Y},n.createElement(u.h.Target,{targetType:_?"input":"button"},n.createElement(m.M,{id:ea,ref:t,rightSection:z||ef||n.createElement(u.h.Chevron,{size:B,error:X,unstyled:v}),rightSectionPointerEvents:K||(ef?"all":"none"),...en,size:B,__staticSelector:"Select",disabled:W,readOnly:O||!_,value:es,onChange:e=>{eu(e.currentTarget.value),ep.openDropdown(),R&&ep.selectFirstOption()},onFocus:e=>{_&&ep.openDropdown(),j?.(e)},onBlur:e=>{_&&ep.closeDropdown(),eu(null!=ei&&el[ei]?.label||""),P?.(e)},onClick:e=>{_?ep.openDropdown():ep.toggleDropdown(),V?.(e)},classNames:eh,styles:em,unstyled:v,pointer:!_,error:X})),n.createElement(p.r,{data:er,hidden:O||W,filter:I,search:es,limit:F,hiddenWhenEmpty:!_||!Z,withScrollArea:N,maxDropdownHeight:T,filterOptions:_&&ed?.label!==es,value:ei,checkIconPosition:M,withCheckIcon:L,nothingFoundMessage:Z,unstyled:v,labelId:`${ea}-label`})),n.createElement("input",{type:"hidden",name:$,value:ei||"",form:q,disabled:W,...eo}))});b.classes={...m.M.classes,...u.h.classes},b.displayName="@mantine/core/Select"},87921:function(e,t,o){"use strict";o.d(t,{q:function(){return r}});var n=o(27378);function r(e=!1,t){let{onOpen:o,onClose:r}=t||{},[l,a]=(0,n.useState)(e),i=(0,n.useCallback)(()=>{a(e=>e||(o?.(),!0))},[o]),c=(0,n.useCallback)(()=>{a(e=>e?(r?.(),!1):e)},[r]),d=(0,n.useCallback)(()=>{l?c():i()},[c,i,l]);return[l,{open:i,close:c,toggle:d}]}}},function(e){e.O(0,[30370,15819,2775,45608,49774,92888,40179],function(){return e(e.s=76623)}),_N_E=e.O()}]);