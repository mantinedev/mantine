(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[75089],{27372:function(e,t,o){"use strict";o.d(t,{Z:function(){return n}});var n=(0,o(99882).Z)("align-center","IconAlignCenter",[["path",{d:"M4 6l16 0",key:"svg-0"}],["path",{d:"M8 12l8 0",key:"svg-1"}],["path",{d:"M6 18l12 0",key:"svg-2"}]])},24596:function(e,t,o){"use strict";o.d(t,{Z:function(){return n}});var n=(0,o(99882).Z)("align-justified","IconAlignJustified",[["path",{d:"M4 6l16 0",key:"svg-0"}],["path",{d:"M4 12l16 0",key:"svg-1"}],["path",{d:"M4 18l12 0",key:"svg-2"}]])},16968:function(e,t,o){"use strict";o.d(t,{Z:function(){return n}});var n=(0,o(99882).Z)("align-left","IconAlignLeft",[["path",{d:"M4 6l16 0",key:"svg-0"}],["path",{d:"M4 12l10 0",key:"svg-1"}],["path",{d:"M4 18l14 0",key:"svg-2"}]])},93816:function(e,t,o){"use strict";o.d(t,{Z:function(){return n}});var n=(0,o(99882).Z)("align-right","IconAlignRight",[["path",{d:"M4 6l16 0",key:"svg-0"}],["path",{d:"M10 12l10 0",key:"svg-1"}],["path",{d:"M6 18l14 0",key:"svg-2"}]])},35661:function(e,t,o){"use strict";o.d(t,{Z:function(){return n}});var n=(0,o(99882).Z)("at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},21042:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/select",function(){return o(72016)}])},72016:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return ey}});var n=o(52322),r=o(45392),l=o(79649);let a=`
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
`,i={type:"code",component:function(){return(0,n.jsx)(l.P,{label:"Your favorite library",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"]})},code:a,maxWidth:340,centered:!0},c=`
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
`,d={type:"code",component:function(){return(0,n.jsx)(l.P,{label:"Your favorite library",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],defaultValue:"React",clearable:!0})},code:c,maxWidth:340,centered:!0},s=`
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
`,u={type:"code",component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.P,{label:"Option can NOT be deselected",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],defaultValue:"React",allowDeselect:!1}),(0,n.jsx)(l.P,{label:"Option can be deselected",description:"This is default behavior, click 'React' in the dropdown",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],defaultValue:"React",allowDeselect:!0,mt:"md"})]})},code:s,maxWidth:340,centered:!0},p=`
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
`,h={type:"code",component:function(){return(0,n.jsx)(l.P,{label:"Your favorite library",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],searchable:!0})},code:p,maxWidth:340,centered:!0},m=`
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
`,f={type:"code",component:function(){return(0,n.jsx)(l.P,{label:"Your favorite library",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],searchable:!0,nothingFoundMessage:"Nothing found..."})},code:m,maxWidth:340,centered:!0},b=`
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
`,x={type:"configurator",component:function(e){return(0,n.jsx)(l.P,{...e,data:["React","Angular","Svelte","Vue"],dropdownOpened:!0,pb:150,label:"Control check icon",placeholder:"Pick value",defaultValue:"React"})},code:b,centered:!0,maxWidth:340,controls:[{type:"boolean",prop:"withCheckIcon",initialValue:!0,libraryValue:!0},{type:"segmented",prop:"checkIconPosition",initialValue:"left",libraryValue:null,data:["left","right"]}]},g=`
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
`,v=({options:e,search:t})=>{let o=t.toLowerCase().trim().split(" ");return e.filter(e=>{let t=e.label.toLowerCase().trim().split(" ");return o.every(e=>t.some(t=>t.includes(e)))})},j={type:"code",component:function(){return(0,n.jsx)(l.P,{label:"Your country",placeholder:"Pick value",data:["Great Britain","Russian Federation","United States"],filter:v,searchable:!0})},code:g,maxWidth:340,centered:!0},y=`
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
`,S=({options:e,search:t})=>{let o=e.filter(e=>e.label.toLowerCase().trim().includes(t.toLowerCase().trim()));return o.sort((e,t)=>e.label.localeCompare(t.label)),o},w={type:"code",component:function(){return(0,n.jsx)(l.P,{label:"Your favorite library",placeholder:"Pick value",data:["4 – React","1 – Angular","3 – Vue","2 – Svelte"],filter:S,nothingFoundMessage:"Nothing found...",searchable:!0})},code:y,maxWidth:340,centered:!0},P=`
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
`,k=Array(1e5).fill(0).map((e,t)=>`Option ${t}`),V={type:"code",component:function(){return(0,n.jsx)(l.P,{label:"100 000 options autocomplete",placeholder:"Use limit to optimize performance",limit:5,data:k,searchable:!0})},code:P,maxWidth:340,centered:!0};var A=o(94091);let D=`
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
`,R=Array(100).fill(0).map((e,t)=>`Option ${t}`),C={type:"code",component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.P,{label:"With scroll area (default)",placeholder:"Pick value",data:R,maxDropdownHeight:200}),(0,n.jsx)(l.P,{label:"With native scroll",placeholder:"Pick value",data:R,withScrollArea:!1,styles:{dropdown:{maxHeight:200,overflowY:"auto"}},mt:"md"})]})},code:D,maxWidth:340,centered:!0},I=`
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
`,O={type:"code",component:function(){return(0,n.jsx)(l.P,{label:"Your favorite library",placeholder:"Pick value",data:[{group:"Frontend",items:["React","Angular"]},{group:"Backend",items:["Express","Django"]}]})},code:I,maxWidth:340,centered:!0},Y=`
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
`,W={type:"code",component:function(){return(0,n.jsx)(l.P,{label:"Your favorite library",placeholder:"Pick value",data:[{value:"react",label:"React"},{value:"ng",label:"Angular"},{value:"vue",label:"Vue",disabled:!0},{value:"svelte",label:"Svelte",disabled:!0}]})},code:Y,maxWidth:340,centered:!0};var F=o(50205),N=o(17115);let T=`
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
`,E={type:"code",code:T,centered:!0,component:function(){return(0,n.jsxs)(F.J,{width:300,position:"bottom",withArrow:!0,shadow:"md",children:[(0,n.jsx)(F.J.Target,{children:(0,n.jsx)(N.z,{children:"Toggle popover"})}),(0,n.jsx)(F.J.Dropdown,{children:(0,n.jsx)(l.P,{label:"Your favorite library",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],comboboxProps:{withinPortal:!1}})})]})}};var M=o(3900);let B=`
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
`,Z={type:"code",component:function(){let[e,{toggle:t}]=(0,M.q)();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(N.z,{onClick:t,mb:"md",children:"Toggle dropdown"}),(0,n.jsx)(l.P,{label:"Your favorite library",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],dropdownOpened:e})]})},code:B,maxWidth:340,centered:!0},_=`
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
`,z={type:"code",component:function(){return(0,n.jsx)(l.P,{label:"Your favorite library",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],comboboxProps:{position:"top",middlewares:{flip:!1,shift:!1}}})},code:_,maxWidth:340,centered:!0};var L={dropdown:"m_f33bcc41",input:"m_37973d9a"};let G=`.dropdown {
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
`,J=`
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
`,$={type:"code",component:function(){return(0,n.jsx)(l.P,{label:"Your favorite library",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],classNames:L,comboboxProps:{position:"bottom",middlewares:{flip:!1,shift:!1},offset:0}})},code:[{fileName:"Demo.tsx",code:J,language:"tsx"},{fileName:"Demo.module.css",code:G,language:"scss"}],maxWidth:340,centered:!0},q=`
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
`,H={type:"code",component:function(){return(0,n.jsx)(l.P,{label:"Your favorite library",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],comboboxProps:{transitionProps:{transition:"pop",duration:200}}})},code:q,maxWidth:340,centered:!0},U=`
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
`,X={type:"code",component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.P,{label:"Zero padding",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],comboboxProps:{dropdownPadding:0}}),(0,n.jsx)(l.P,{mt:"md",label:"10px padding",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],comboboxProps:{dropdownPadding:10}})]})},code:U,maxWidth:340,centered:!0},K=`
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
`,Q={type:"code",component:function(){return(0,n.jsx)(l.P,{label:"Your favorite library",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],comboboxProps:{shadow:"md"}})},code:K,maxWidth:340,centered:!0};var ee=o(93323),et=o(58898);let eo=`
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
`,en={type:"code",component:function(){let e=(0,n.jsx)(ee.Z,{style:{width:(0,et.h)(16),height:(0,et.h)(16)}});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.P,{data:["React","Angular","Vue"],leftSectionPointerEvents:"none",leftSection:e,label:"Your favorite library",placeholder:"Your favorite library"}),(0,n.jsx)(l.P,{mt:"md",data:["React","Angular","Vue"],rightSectionPointerEvents:"none",rightSection:e,label:"Your favorite library",placeholder:"Your favorite library"})]})},maxWidth:340,centered:!0,code:eo};var er=o(76528);let el=`
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
`,ea={type:"configurator",component:function(e){return(0,n.jsx)(l.P,{...e,placeholder:"Select placeholder",data:["React","Angular","Vue","Svelte"]})},code:el,centered:!0,maxWidth:340,controls:er.pc},ei=`
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
`,ec={type:"code",component:function(){return(0,n.jsx)(l.P,{label:"Your favorite library",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],readOnly:!0})},code:ei,maxWidth:340,centered:!0},ed=`
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
`,es={type:"code",component:function(){return(0,n.jsx)(l.P,{label:"Your favorite library",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],disabled:!0})},code:ed,maxWidth:340,centered:!0},eu=`
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
`,ep={type:"code",component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.P,{label:"Boolean error",placeholder:"Boolean error",error:!0,data:["React","Angular","Vue","Svelte"]}),(0,n.jsx)(l.P,{mt:"md",label:"With error message",placeholder:"With error message",error:"Invalid name",data:["React","Angular","Vue","Svelte"]})]})},maxWidth:340,centered:!0,code:eu};var eh=o(35661),em=o(40099);let ef=`
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
`,eb={type:"styles-api",data:em.i,component:function(e){return(0,n.jsx)(l.P,{...e,dropdownOpened:!0,leftSection:(0,n.jsx)(eh.Z,{style:{width:(0,et.h)(18),height:(0,et.h)(18)},stroke:1.5}),withAsterisk:!0,label:"Select",description:"Description",placeholder:"Select",data:[{group:"Frontend",items:["React","Angular"]},{group:"Backend",items:["Node","Django"]}]})},code:ef,centered:!0,maxWidth:340};var ex=o(79016),eg=o(33638);let ev=(0,ex.A)(eg.us.Select);function ej(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components},{ComboboxData:o,ComboboxDisclaimer:l,ComboboxFiltering:a,ComboboxLargeData:c,ComboboxProps:s,Demo:p,GetElementRef:m,InputAccessibility:b,InputFeatures:g,InputSections:v,StylesApiSelectors:y}=t;return o||eS("ComboboxData",!0),l||eS("ComboboxDisclaimer",!0),a||eS("ComboboxFiltering",!0),c||eS("ComboboxLargeData",!0),s||eS("ComboboxProps",!0),p||eS("Demo",!0),m||eS("GetElementRef",!0),b||eS("InputAccessibility",!0),g||eS("InputFeatures",!0),v||eS("InputSections",!0),y||eS("StylesApiSelectors",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l,{component:"Select"}),"\n",(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Select"})," allows capturing user input based on suggestions from the list.\nUnlike ",(0,n.jsx)(t.a,{href:"/core/autocomplete/",children:"Autocomplete"}),", ",(0,n.jsx)(t.code,{children:"Select"})," does not allow entering custom values."]}),"\n",(0,n.jsx)(p,{data:i}),"\n",(0,n.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Select"})," value must be a string, other types are not supported.\n",(0,n.jsx)(t.code,{children:"onChange"})," function is called with a string value as a single argument."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Select } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState<string | null>('');\n  return <Select data={[]} value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"onchange-handler",children:"onChange handler"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"onChange"})," is called with two arguments:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"value"})," - string value of the selected option"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"option"})," – selected option object"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"If you prefer object format in state, use second argument of onChange handler:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { ComboboxItem, Select } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState<ComboboxItem | null>(null);\n  return (\n    <Select\n      data={[{ value: 'react', label: 'React library' }]}\n      value={value ? value.value : null}\n      onChange={(_value, option) => setValue(option)}\n    />\n  );\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"clearable",children:"Clearable"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"clearable"})," prop to display the clear button in the right section. The button is not displayed\nwhen:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"The component does not have a value"}),"\n",(0,n.jsx)(t.li,{children:"The component is disabled"}),"\n",(0,n.jsx)(t.li,{children:"The component is read only"}),"\n"]}),"\n",(0,n.jsx)(p,{data:d}),"\n",(0,n.jsx)(t.h2,{id:"allow-deselect",children:"Allow deselect"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"allowDeselect"})," prop determines whether the value should be deselected when user clicks on the selected option.\nBy default, ",(0,n.jsx)(t.code,{children:"allowDeselect"})," is ",(0,n.jsx)(t.code,{children:"true"}),":"]}),"\n",(0,n.jsx)(p,{data:u}),"\n",(0,n.jsx)(t.h2,{id:"searchable",children:"Searchable"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"searchable"})," prop to allow filtering options by user input:"]}),"\n",(0,n.jsx)(p,{data:h}),"\n",(0,n.jsx)(t.h2,{id:"controlled-search-value",children:"Controlled search value"}),"\n",(0,n.jsxs)(t.p,{children:["You can control search value with ",(0,n.jsx)(t.code,{children:"searchValue"})," and ",(0,n.jsx)(t.code,{children:"onSearchChange"})," props:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Select } from '@mantine/core';\n\nfunction Demo() {\n  const [searchValue, setSearchValue] = useState('');\n  return (\n    <Select\n      searchable\n      searchValue={searchValue}\n      onSearchChange={setSearchValue}\n      data={[]}\n    />\n  );\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"nothing-found",children:"Nothing found"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"nothingFoundMessage"})," prop to display given message when no options match search query.\nIf ",(0,n.jsx)(t.code,{children:"nothingFoundMessage"})," is not set, ",(0,n.jsx)(t.code,{children:"Select"})," dropdown will be hidden when no options match search query.\nThe message is not displayed when trimmed search query is empty."]}),"\n",(0,n.jsx)(p,{data:f}),"\n",(0,n.jsx)(t.h2,{id:"checked-option-icon",children:"Checked option icon"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"checkIconPosition"})," prop to ",(0,n.jsx)(t.code,{children:"left"})," or ",(0,n.jsx)(t.code,{children:"right"})," to control position of check icon in active option.\nTo remove the check icon, set ",(0,n.jsx)(t.code,{children:"withCheckIcon={false}"}),"."]}),"\n",(0,n.jsx)(p,{data:x}),"\n",(0,n.jsx)(o,{component:"Select"}),"\n",(0,n.jsx)(a,{component:"Select"}),"\n",(0,n.jsx)(p,{data:j}),"\n",(0,n.jsx)(t.h2,{id:"sort-options",children:"Sort options"}),"\n",(0,n.jsxs)(t.p,{children:["By default, options are sorted by their position in the data array. You can change this behavior\nwith ",(0,n.jsx)(t.code,{children:"filter"})," function:"]}),"\n",(0,n.jsx)(p,{data:w}),"\n",(0,n.jsx)(c,{component:"Select"}),"\n",(0,n.jsx)(p,{data:V}),"\n",(0,n.jsx)(t.h2,{id:"renderoption",children:"renderOption"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"renderOption"})," callback allows you to customize option rendering. It is called with option object and\nchecked state. The function must return a React node."]}),"\n",(0,n.jsx)(p,{data:A.z}),"\n",(0,n.jsx)(t.h2,{id:"scrollable-dropdown",children:"Scrollable dropdown"}),"\n",(0,n.jsxs)(t.p,{children:["By default, the options list is wrapped with ",(0,n.jsx)(t.a,{href:"/core/scroll-area",children:"ScrollArea.Autosize"}),".\nYou can control dropdown max-height with ",(0,n.jsx)(t.code,{children:"maxDropdownHeight"})," prop if you do not change the default settings."]}),"\n",(0,n.jsxs)(t.p,{children:["If you want to use native scrollbars, set ",(0,n.jsx)(t.code,{children:"withScrollArea={false}"}),". Note that in this case,\nyou will need to change dropdown styles with ",(0,n.jsx)(t.a,{href:"/styles/styles-api",children:"Styles API"}),"."]}),"\n",(0,n.jsx)(p,{data:C}),"\n",(0,n.jsx)(t.h2,{id:"group-options",children:"Group options"}),"\n",(0,n.jsx)(p,{data:O}),"\n",(0,n.jsx)(t.h2,{id:"disabled-options",children:"Disabled options"}),"\n",(0,n.jsx)(t.p,{children:"When option is disabled, it cannot be selected and is ignored in keyboard navigation."}),"\n",(0,n.jsx)(p,{data:W}),"\n",(0,n.jsx)(s,{component:"Select"}),"\n",(0,n.jsx)(t.h2,{id:"inside-popover",children:"Inside Popover"}),"\n",(0,n.jsxs)(t.p,{children:["To use ",(0,n.jsx)(t.code,{children:"Select"})," inside popover, you need to set ",(0,n.jsx)(t.code,{children:"withinPortal: false"}),":"]}),"\n",(0,n.jsx)(p,{data:E}),"\n",(0,n.jsx)(t.h2,{id:"control-dropdown-opened-state",children:"Control dropdown opened state"}),"\n",(0,n.jsxs)(t.p,{children:["You can control dropdown opened state with ",(0,n.jsx)(t.code,{children:"dropdownOpened"})," prop. Additionally,\nyou can use ",(0,n.jsx)(t.code,{children:"onDropdownClose"})," and ",(0,n.jsx)(t.code,{children:"onDropdownOpen"})," to listen to dropdown opened state changes."]}),"\n",(0,n.jsx)(p,{data:Z}),"\n",(0,n.jsx)(t.h2,{id:"dropdown-position",children:"Dropdown position"}),"\n",(0,n.jsxs)(t.p,{children:["By default, the dropdown is displayed below the input if there is enough space; otherwise it is displayed above the input.\nYou can change this behavior by setting ",(0,n.jsx)(t.code,{children:"position"})," and ",(0,n.jsx)(t.code,{children:"middlewares"})," props, which are passed down to the\nunderlying ",(0,n.jsx)(t.a,{href:"/core/popover",children:"Popover"})," component."]}),"\n",(0,n.jsx)(t.p,{children:"Example of dropdown that is always displayed above the input:"}),"\n",(0,n.jsx)(p,{data:z}),"\n",(0,n.jsx)(t.h2,{id:"dropdown-offset",children:"Dropdown offset"}),"\n",(0,n.jsxs)(t.p,{children:["To change dropdown offset, set ",(0,n.jsx)(t.code,{children:"offset"})," prop in ",(0,n.jsx)(t.code,{children:"comboboxProps"}),":"]}),"\n",(0,n.jsx)(p,{data:$}),"\n",(0,n.jsx)(t.h2,{id:"dropdown-animation",children:"Dropdown animation"}),"\n",(0,n.jsxs)(t.p,{children:["By default, dropdown animations are disabled. To enable them, you can set ",(0,n.jsx)(t.code,{children:"transitionProps"}),",\nwhich will be passed down to the underlying ",(0,n.jsx)(t.a,{href:"/core/transition",children:"Transition"})," component."]}),"\n",(0,n.jsx)(p,{data:H}),"\n",(0,n.jsx)(t.h2,{id:"dropdown-padding",children:"Dropdown padding"}),"\n",(0,n.jsx)(p,{data:X}),"\n",(0,n.jsx)(t.h2,{id:"dropdown-shadow",children:"Dropdown shadow"}),"\n",(0,n.jsx)(p,{data:Q}),"\n",(0,n.jsx)(v,{component:"Select"}),"\n",(0,n.jsx)(p,{data:en}),"\n",(0,n.jsx)(t.h2,{id:"input-props",children:"Input props"}),"\n",(0,n.jsx)(g,{component:"Select",element:"input"}),"\n",(0,n.jsx)(p,{data:ea}),"\n",(0,n.jsx)(t.h2,{id:"read-only",children:"Read only"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"readOnly"})," to make the input read only. When ",(0,n.jsx)(t.code,{children:"readOnly"})," is set,\n",(0,n.jsx)(t.code,{children:"Select"})," will not show suggestions and will not call ",(0,n.jsx)(t.code,{children:"onChange"})," function."]}),"\n",(0,n.jsx)(p,{data:ec}),"\n",(0,n.jsx)(t.h2,{id:"disabled",children:"Disabled"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"disabled"})," to disable the input. When ",(0,n.jsx)(t.code,{children:"disabled"})," is set,\nuser cannot interact with the input and ",(0,n.jsx)(t.code,{children:"Select"})," will not show suggestions."]}),"\n",(0,n.jsx)(p,{data:es}),"\n",(0,n.jsx)(t.h2,{id:"error-state",children:"Error state"}),"\n",(0,n.jsx)(p,{data:ep}),"\n",(0,n.jsx)(y,{component:"Select"}),"\n",(0,n.jsx)(p,{data:eb}),"\n",(0,n.jsx)(m,{component:"Select",refType:"input"}),"\n",(0,n.jsx)(b,{component:"Select"}),"\n",(0,n.jsxs)(t.p,{children:["To set ",(0,n.jsx)(t.code,{children:"aria-label"})," on the clear button, use ",(0,n.jsx)(t.code,{children:"clearButtonProps"}),". Note that it is required\nonly when ",(0,n.jsx)(t.code,{children:"clearable"})," is set."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { Select } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Select\n      data={[]}\n      clearable\n      clearButtonProps={{\n        'aria-label': 'Clear input',\n      }}\n    />\n  );\n}\n"})})]})}function ey(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(ev,{...e,children:(0,n.jsx)(ej,{...e})})}function eS(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},94091:function(e,t,o){"use strict";o.d(t,{z:function(){return f}});var n=o(52322),r=o(16968),l=o(27372),a=o(93816),i=o(24596),c=o(92856),d=o(93010),s=o(79649);let u=`
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
`,p={stroke:1.5,color:"currentColor",opacity:.6,size:18},h={left:(0,n.jsx)(r.Z,{...p}),center:(0,n.jsx)(l.Z,{...p}),right:(0,n.jsx)(a.Z,{...p}),justify:(0,n.jsx)(i.Z,{...p})},m=({option:e,checked:t})=>(0,n.jsxs)(d.Z,{flex:"1",gap:"xs",children:[h[e.value],e.label,t&&(0,n.jsx)(c.Z,{style:{marginInlineStart:"auto"},...p})]}),f={type:"code",component:function(){return(0,n.jsx)(s.P,{label:"Select with renderOption",placeholder:"Select text align",data:[{value:"left",label:"Left"},{value:"center",label:"Center"},{value:"right",label:"Right"},{value:"justify",label:"Justify"}],renderOption:m})},code:u,centered:!0,maxWidth:340,defaultExpanded:!1}},76528:function(e,t,o){"use strict";o.d(t,{Mt:function(){return n},nW:function(){return r},pc:function(){return l}});let n=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],r=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],l=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]},66958:function(e,t,o){"use strict";o.d(t,{r:function(){return s}});var n=o(52322),r=o(40489),l=o(40284),a=o(38405),i=o(61324),c=o(36186),d=o(61271);function Option({data:e,withCheckIcon:t,value:o,checkIconPosition:a,unstyled:s,renderOption:u}){if(!(0,c.f)(e)){var p;let c=(p=e.value,Array.isArray(o)?o.includes(p):o===p),h=t&&c&&(0,n.jsx)(l.n,{className:d.Z.optionsDropdownCheckIcon}),m=(0,n.jsxs)(n.Fragment,{children:["left"===a&&h,(0,n.jsx)("span",{children:e.label}),"right"===a&&h]});return(0,n.jsx)(i.h.Option,{value:e.value,disabled:e.disabled,className:(0,r.Z)({[d.Z.optionsDropdownOption]:!s}),"data-reverse":"right"===a||void 0,"data-checked":c||void 0,"aria-selected":c,active:c,children:"function"==typeof u?u({option:e,checked:c}):m})}let h=e.items.map(e=>(0,n.jsx)(Option,{data:e,value:o,unstyled:s,withCheckIcon:t,checkIconPosition:a,renderOption:u},e.value));return(0,n.jsx)(i.h.Group,{label:e.group,children:h})}function s({data:e,hidden:t,hiddenWhenEmpty:o,filter:r,search:l,limit:d,maxDropdownHeight:s,withScrollArea:u=!0,filterOptions:p=!0,withCheckIcon:h=!1,value:m,checkIconPosition:f,nothingFoundMessage:b,unstyled:x,labelId:g,renderOption:v,scrollAreaProps:j,"aria-label":y}){!function e(t,o=new Set){if(Array.isArray(t))for(let n of t)if((0,c.f)(n))e(n.items,o);else{if(void 0===n.value)throw Error("[@mantine/core] Each option must have value property");if("string"!=typeof n.value)throw Error(`[@mantine/core] Option value must be a string, other data formats are not supported, got ${typeof n.value}`);if(o.has(n.value))throw Error(`[@mantine/core] Duplicate options are not supported. Option with value "${n.value}" was provided more than once`);o.add(n.value)}}(e);let S="string"==typeof l,w=S?(r||function e({options:t,search:o,limit:n}){let r=o.trim().toLowerCase(),l=[];for(let a=0;a<t.length;a+=1){let i=t[a];if(l.length===n)break;(0,c.f)(i)&&l.push({group:i.group,items:e({options:i.items,search:o,limit:n-l.length})}),!(0,c.f)(i)&&i.label.toLowerCase().includes(r)&&l.push(i)}return l})({options:e,search:p?l:"",limit:d??1/0}):e,P=function(e){if(0===e.length)return!0;for(let t of e)if(!("group"in t)||t.items.length>0)return!1;return!0}(w),k=w.map(e=>(0,n.jsx)(Option,{data:e,withCheckIcon:h,value:m,checkIconPosition:f,unstyled:x,renderOption:v},(0,c.f)(e)?e.group:e.value));return(0,n.jsx)(i.h.Dropdown,{hidden:t||o&&P,children:(0,n.jsxs)(i.h.Options,{labelledBy:g,"aria-label":y,children:[u?(0,n.jsx)(a.x.Autosize,{mah:s??220,type:"scroll",scrollbarSize:"var(--combobox-padding)",offsetScrollbars:"y",...j,children:k}):k,P&&b&&(0,n.jsx)(i.h.Empty,{children:b})]})})}},36186:function(e,t,o){"use strict";function n(e){return"group"in e}o.d(t,{f:function(){return n}})},77606:function(e,t,o){"use strict";o.d(t,{g:function(){return function e(t){return t.reduce((t,o)=>"group"in o?{...t,...e(o.items)}:(t[o.value]=o,t),{})}}})},79649:function(e,t,o){"use strict";o.d(t,{P:function(){return x}});var n=o(52322),r=o(2784),l=o(66178),a=o(9341),i=o(51477),c=o(38483),d=o(82027),s=o(29995),u=o(77606),p=o(61324),h=o(66958),m=o(56237),f=o(73063);let b={searchable:!1,withCheckIcon:!0,allowDeselect:!0,checkIconPosition:"left"},x=(0,d.d)((e,t)=>{let o=(0,c.w)("Select",b,e),{classNames:d,styles:x,unstyled:g,vars:v,dropdownOpened:j,defaultDropdownOpened:y,onDropdownClose:S,onDropdownOpen:w,onFocus:P,onBlur:k,onClick:V,onChange:A,data:D,value:R,defaultValue:C,selectFirstOptionOnChange:I,onOptionSubmit:O,comboboxProps:Y,readOnly:W,disabled:F,filter:N,limit:T,withScrollArea:E,maxDropdownHeight:M,size:B,searchable:Z,rightSection:_,checkIconPosition:z,withCheckIcon:L,nothingFoundMessage:G,name:J,form:$,searchValue:q,defaultSearchValue:H,onSearchChange:U,allowDeselect:X,error:K,rightSectionPointerEvents:Q,id:ee,clearable:et,clearButtonProps:eo,hiddenInputProps:en,renderOption:er,onClear:el,autoComplete:ea,scrollAreaProps:ei,...ec}=o,ed=(0,r.useMemo)(()=>(0,s.R)(D),[D]),es=(0,r.useMemo)(()=>(0,u.g)(ed),[ed]),eu=(0,l.M)(ee),[ep,eh,em]=(0,a.C)({value:R,defaultValue:C,finalValue:null,onChange:A}),ef="string"==typeof ep?es[ep]:void 0,[eb,ex]=(0,a.C)({value:q,defaultValue:H,finalValue:ef?ef.label:"",onChange:U}),eg=(0,m.K)({opened:j,defaultOpened:y,onDropdownOpen:()=>{w?.(),eg.updateSelectedOptionIndex("active",{scrollIntoView:!0})},onDropdownClose:()=>{S?.(),eg.resetSelectedOption()}}),{resolvedClassNames:ev,resolvedStyles:ej}=(0,i.h)({props:o,styles:x,classNames:d});(0,r.useEffect)(()=>{I&&eg.selectFirstOption()},[I,ep]),(0,r.useEffect)(()=>{null===R&&ex(""),"string"==typeof R&&ef&&ex(ef.label)},[R,ef]);let ey=et&&!!ep&&!F&&!W&&(0,n.jsx)(p.h.ClearButton,{size:B,...eo,onClear:()=>{eh(null,null),ex(""),el?.()}});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(p.h,{store:eg,__staticSelector:"Select",classNames:ev,styles:ej,unstyled:g,readOnly:W,onOptionSubmit:e=>{O?.(e);let t=X&&es[e].value===ep?null:es[e],o=t?t.value:null;eh(o,t),em||ex("string"==typeof o&&t?.label||""),eg.closeDropdown()},size:B,...Y,children:[(0,n.jsx)(p.h.Target,{targetType:Z?"input":"button",autoComplete:ea,children:(0,n.jsx)(f.M,{id:eu,ref:t,rightSection:_||ey||(0,n.jsx)(p.h.Chevron,{size:B,error:K,unstyled:g}),rightSectionPointerEvents:Q||(ey?"all":"none"),...ec,size:B,__staticSelector:"Select",disabled:F,readOnly:W||!Z,value:eb,onChange:e=>{ex(e.currentTarget.value),eg.openDropdown(),I&&eg.selectFirstOption()},onFocus:e=>{Z&&eg.openDropdown(),P?.(e)},onBlur:e=>{Z&&eg.closeDropdown(),ex(null!=ep&&es[ep]?.label||""),k?.(e)},onClick:e=>{Z?eg.openDropdown():eg.toggleDropdown(),V?.(e)},classNames:ev,styles:ej,unstyled:g,pointer:!Z,error:K})}),(0,n.jsx)(h.r,{data:ed,hidden:W||F,filter:N,search:eb,limit:T,hiddenWhenEmpty:!Z||!G,withScrollArea:E,maxDropdownHeight:M,filterOptions:Z&&ef?.label!==eb,value:ep,checkIconPosition:z,withCheckIcon:L,nothingFoundMessage:G,unstyled:g,labelId:ec.label?`${eu}-label`:void 0,"aria-label":ec.label?void 0:ec["aria-label"],renderOption:er,scrollAreaProps:ei})]}),(0,n.jsx)(p.h.HiddenInput,{value:ep,name:J,form:$,disabled:F,...en})]})});x.classes={...f.M.classes,...p.h.classes},x.displayName="@mantine/core/Select"},3900:function(e,t,o){"use strict";o.d(t,{q:function(){return r}});var n=o(2784);function r(e=!1,t){let{onOpen:o,onClose:r}=t||{},[l,a]=(0,n.useState)(e),i=(0,n.useCallback)(()=>{a(e=>e||(o?.(),!0))},[o]),c=(0,n.useCallback)(()=>{a(e=>e?(r?.(),!1):e)},[r]),d=(0,n.useCallback)(()=>{l?c():i()},[c,i,l]);return[l,{open:i,close:c,toggle:d}]}}},function(e){e.O(0,[57938,17454,47747,61324,49774,92888,40179],function(){return e(e.s=21042)}),_N_E=e.O()}]);