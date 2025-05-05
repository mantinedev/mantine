(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[11200],{76017:(e,t,o)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/multi-select",function(){return o(29953)}])},29953:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>ea});var a=o(31085),r=o(71184),n=o(62988);let l={type:"code",component:function(){return(0,a.jsx)(n.K,{label:"Your favorite libraries",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"]})},code:`
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
    />
  );
}
`,maxWidth:340,centered:!0},i={type:"code",component:function(){return(0,a.jsx)(n.K,{label:"Your favorite libraries",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],defaultValue:["React"],clearable:!0})},code:`
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      defaultValue={['React']}
      clearable
    />
  );
}
`,maxWidth:340,centered:!0},c={type:"code",component:function(){return(0,a.jsx)(n.K,{label:"Your favorite libraries",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],searchable:!0})},code:`
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      searchable
    />
  );
}
`,maxWidth:340,centered:!0},s={type:"code",component:function(){return(0,a.jsx)(n.K,{label:"Your favorite libraries",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],searchable:!0,nothingFoundMessage:"Nothing found..."})},code:`
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      searchable
      nothingFoundMessage="Nothing found..."
    />
  );
}
`,maxWidth:340,centered:!0},d={type:"configurator",component:function(e){return(0,a.jsx)(n.K,{...e,data:["React","Angular","Svelte","Vue"],dropdownOpened:!0,pb:150,label:"Control check icon",placeholder:"Pick value",defaultValue:["React"]})},code:`
import { MultiSelect } from '@mantine/core';


function Demo() {
  return (
    <MultiSelect
      {{props}}
      data={['React', 'Angular', 'Svelte', 'Vue']}
      dropdownOpened
      pb={150}
      label="Control check icon"
      placeholder="Pick value"
      defaultValue={["React"]}
    />
  );
}
`,centered:!0,maxWidth:340,controls:[{type:"boolean",prop:"withCheckIcon",initialValue:!0,libraryValue:!0},{type:"segmented",prop:"checkIconPosition",initialValue:"left",libraryValue:null,data:["left","right"]}]},u={type:"code",component:function(){return(0,a.jsx)(n.K,{label:"Your favorite libraries",placeholder:"Select up to 2 libraries",data:["React","Angular","Vue","Svelte"],maxValues:2})},code:`
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Select up to 2 libraries"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      maxValues={2}
    />
  );
}
`,maxWidth:340,centered:!0},p={type:"code",component:function(){return(0,a.jsx)(n.K,{label:"Your favorite libraries",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],hidePickedOptions:!0})},code:`
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      hidePickedOptions
    />
  );
}
`,maxWidth:340,centered:!0},h=({options:e,search:t})=>{let o=t.toLowerCase().trim().split(" ");return e.filter(e=>{let t=e.label.toLowerCase().trim().split(" ");return o.every(e=>t.some(t=>t.includes(e)))})},m={type:"code",component:function(){return(0,a.jsx)(n.K,{label:"What countries have you visited?",placeholder:"Pick values",data:["Great Britain","Russian Federation","United States"],filter:h,searchable:!0})},code:`
import { MultiSelect, ComboboxItem, OptionsFilter } from '@mantine/core';

const optionsFilter: OptionsFilter = ({ options, search }) => {
  const splittedSearch = search.toLowerCase().trim().split(' ');
  return (options as ComboboxItem[]).filter((option) => {
    const words = option.label.toLowerCase().trim().split(' ');
    return splittedSearch.every((searchWord) => words.some((word) => word.includes(searchWord)));
  });
};

function Demo() {
  return (
    <MultiSelect
      label="What countries have you visited?"
      placeholder="Pick values"
      data={['Great Britain', 'Russian Federation', 'United States']}
      filter={optionsFilter}
      searchable
    />
  );
}
`,maxWidth:340,centered:!0},v=({options:e,search:t})=>{let o=e.filter(e=>e.label.toLowerCase().trim().includes(t.toLowerCase().trim()));return o.sort((e,t)=>e.label.localeCompare(t.label)),o},b={type:"code",component:function(){return(0,a.jsx)(n.K,{label:"Your favorite libraries",placeholder:"Pick values",data:["4 – React","1 – Angular","3 – Vue","2 – Svelte"],filter:v,searchable:!0})},code:`
import { MultiSelect, ComboboxItem, OptionsFilter } from '@mantine/core';

const optionsFilter: OptionsFilter = ({ options, search }) => {
  const filtered = (options as ComboboxItem[]).filter((option) =>
    option.label.toLowerCase().trim().includes(search.toLowerCase().trim())
  );

  filtered.sort((a, b) => a.label.localeCompare(b.label));
  return filtered;
};

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick values"
      data={['4 \u2013 React', '1 \u2013 Angular', '3 \u2013 Vue', '2 \u2013 Svelte']}
      filter={optionsFilter}
      searchable
    />
  );
}
`,maxWidth:340,centered:!0},g=`
import { MultiSelect } from '@mantine/core';

const largeData = Array(100_000)
  .fill(0)
  .map((_, index) => \`Option \${index}\`);

function Demo() {
  return (
    <MultiSelect
      label="100 000 options autocomplete"
      placeholder="Use limit to optimize performance"
      limit={5}
      data={largeData}
      searchable
    />
  );
}
`,x=Array(1e5).fill(0).map((e,t)=>`Option ${t}`),f={type:"code",component:function(){return(0,a.jsx)(n.K,{label:"100 000 options autocomplete",placeholder:"Use limit to optimize performance",limit:5,data:x,searchable:!0})},code:g,maxWidth:340,centered:!0};var j=o(56051),y=o(86658),S=o(93065);let w={"Emily Johnson":{image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png",email:"emily92@gmail.com"},"Ava Rodriguez":{image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png",email:"ava_rose@gmail.com"},"Olivia Chen":{image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png",email:"livvy_globe@gmail.com"},"Ethan Barnes":{image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png",email:"ethan_explorer@gmail.com"},"Mason Taylor":{image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png",email:"mason_musician@gmail.com"}},M=({option:e})=>(0,a.jsxs)(j.Y,{gap:"sm",children:[(0,a.jsx)(y.e,{src:w[e.value].image,size:36,radius:"xl"}),(0,a.jsxs)("div",{children:[(0,a.jsx)(S.E,{size:"sm",children:e.value}),(0,a.jsx)(S.E,{size:"xs",opacity:.5,children:w[e.value].email})]})]}),k={type:"code",component:function(){return(0,a.jsx)(n.K,{data:["Emily Johnson","Ava Rodriguez","Olivia Chen","Ethan Barnes","Mason Taylor"],renderOption:M,maxDropdownHeight:300,label:"Employees of the month",placeholder:"Search for employee",hidePickedOptions:!0,searchable:!0})},code:`
import { MultiSelect, MultiSelectProps, Avatar, Group, Text } from '@mantine/core';

const usersData: Record<string, { image: string; email: string }> = {
  'Emily Johnson': {
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png',
    email: 'emily92@gmail.com',
  },
  'Ava Rodriguez': {
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png',
    email: 'ava_rose@gmail.com',
  },
  'Olivia Chen': {
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png',
    email: 'livvy_globe@gmail.com',
  },
  'Ethan Barnes': {
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png',
    email: 'ethan_explorer@gmail.com',
  },
  'Mason Taylor': {
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png',
    email: 'mason_musician@gmail.com',
  },
};

const renderMultiSelectOption: MultiSelectProps['renderOption'] = ({ option }) => (
  <Group gap="sm">
    <Avatar src={usersData[option.value].image} size={36} radius="xl" />
    <div>
      <Text size="sm">{option.value}</Text>
      <Text size="xs" opacity={0.5}>
        {usersData[option.value].email}
      </Text>
    </div>
  </Group>
);

function Demo() {
  return (
    <MultiSelect
      data={['Emily Johnson', 'Ava Rodriguez', 'Olivia Chen', 'Ethan Barnes', 'Mason Taylor']}
      renderOption={renderMultiSelectOption}
      maxDropdownHeight={300}
      label="Employees of the month"
      placeholder="Search for employee"
    />
  );
}
`,centered:!0,maxWidth:340,defaultExpanded:!1},A=`
import { MultiSelect } from '@mantine/core';

const data = Array(100)
  .fill(0)
  .map((_, index) => \`Option \${index}\`);

function Demo() {
  return (
    <>
      <MultiSelect
        label="With scroll area (default)"
        placeholder="Pick value"
        data={data}
        maxDropdownHeight={200}
      />

      <MultiSelect
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
`,V=Array(100).fill(0).map((e,t)=>`Option ${t}`),P={type:"code",component:function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.K,{label:"With scroll area (default)",placeholder:"Pick value",data:V,maxDropdownHeight:200}),(0,a.jsx)(n.K,{label:"With native scroll",placeholder:"Pick value",data:V,withScrollArea:!1,styles:{dropdown:{maxHeight:200,overflowY:"auto"}},mt:"md"})]})},code:A,maxWidth:340,centered:!0},R={type:"code",component:function(){return(0,a.jsx)(n.K,{label:"Your favorite libraries",placeholder:"Pick value",data:[{group:"Frontend",items:["React","Angular"]},{group:"Backend",items:["Express","Django"]}]})},code:`
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={[
        { group: 'Frontend', items: ['React', 'Angular'] },
        { group: 'Backend', items: ['Express', 'Django'] },
      ]}
    />
  );
}
`,maxWidth:340,centered:!0},D={type:"code",component:function(){return(0,a.jsx)(n.K,{label:"Your favorite libraries",placeholder:"Pick value",data:[{value:"react",label:"React"},{value:"ng",label:"Angular"},{value:"vue",label:"Vue",disabled:!0},{value:"svelte",label:"Svelte",disabled:!0}]})},code:`
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
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
`,maxWidth:340,centered:!0};var Y=o(35764),C=o(52022);let W={type:"code",code:`
import { Popover, Button, MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <Popover width={300} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <MultiSelect
          label="Your favorite libraries"
          placeholder="Pick values"
          data={['React', 'Angular', 'Vue', 'Svelte']}
          comboboxProps={{ withinPortal: false }}
        />
      </Popover.Dropdown>
    </Popover>
  );
}
`,centered:!0,component:function(){return(0,a.jsxs)(Y.A,{width:300,position:"bottom",withArrow:!0,shadow:"md",children:[(0,a.jsx)(Y.A.Target,{children:(0,a.jsx)(C.$,{children:"Toggle popover"})}),(0,a.jsx)(Y.A.Dropdown,{children:(0,a.jsx)(n.K,{label:"Your favorite libraries",placeholder:"Pick values",data:["React","Angular","Vue","Svelte"],comboboxProps:{withinPortal:!1}})})]})}};var I=o(92051);let O={type:"code",component:function(){let[e,{toggle:t}]=(0,I.j)();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(C.$,{onClick:t,mb:"md",children:"Toggle dropdown"}),(0,a.jsx)(n.K,{label:"Your favorite library",placeholder:"Pick values",data:["React","Angular","Vue","Svelte"],dropdownOpened:e})]})},code:`
import { MultiSelect, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [dropdownOpened, { toggle }] = useDisclosure();
  return (
    <>
      <Button onClick={toggle} mb="md">
        Toggle dropdown
      </Button>

      <MultiSelect
        label="Your favorite library"
        placeholder="Pick values"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        dropdownOpened={dropdownOpened}
      />
    </>
  );
}
`,maxWidth:340,centered:!0},T={type:"code",component:function(){return(0,a.jsx)(n.K,{label:"Your favorite libraries",placeholder:"Pick values",data:["React","Angular","Vue","Svelte"],comboboxProps:{position:"top",middlewares:{flip:!1,shift:!1}}})},code:`
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick values"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      comboboxProps={{ position: 'top', middlewares: { flip: false, shift: false } }}
    />
  );
}
`,maxWidth:340,centered:!0},z={type:"code",component:function(){return(0,a.jsx)(n.K,{label:"Your favorite libraries",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],comboboxProps:{width:200,position:"bottom-start"}})},code:`
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      comboboxProps={{ width: 200, position: 'bottom-start' }}
    />
  );
}
`,maxWidth:340,centered:!0};var K={dropdown:"m_a9824888",input:"m_f5487eb3"};let E={type:"code",component:function(){return(0,a.jsx)(n.K,{label:"Your favorite library",placeholder:"Pick values",data:["React","Angular","Vue","Svelte"],classNames:K,comboboxProps:{position:"bottom",middlewares:{flip:!1,shift:!1},offset:0}})},code:[{fileName:"Demo.tsx",code:`
import { MultiSelect } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite library"
      placeholder="Pick values"
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
`,language:"scss"}],maxWidth:340,centered:!0},B={type:"code",component:function(){return(0,a.jsx)(n.K,{label:"Your favorite libraries",placeholder:"Pick values",data:["React","Angular","Vue","Svelte"],comboboxProps:{transitionProps:{transition:"pop",duration:200}}})},code:`
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick values"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      comboboxProps={{ transitionProps: { transition: 'pop', duration: 200 } }}
    />
  );
}
`,maxWidth:340,centered:!0},F={type:"code",component:function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.K,{label:"Zero padding",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],comboboxProps:{dropdownPadding:0}}),(0,a.jsx)(n.K,{mt:"md",label:"10px padding",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],comboboxProps:{dropdownPadding:10}})]})},code:`
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <>
      <MultiSelect
        label="Zero padding"
        placeholder="Pick value or enter anything"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        comboboxProps={{ dropdownPadding: 0 }}
      />
      <MultiSelect
        mt="md"
        label="10px padding"
        placeholder="Pick value or enter anything"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        comboboxProps={{ dropdownPadding: 10 }}
      />
    </>
  );
}
`,maxWidth:340,centered:!0},_={type:"code",component:function(){return(0,a.jsx)(n.K,{label:"Your favorite libraries",placeholder:"Pick values",data:["React","Angular","Vue","Svelte"],comboboxProps:{shadow:"md"}})},code:`
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick values"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      comboboxProps={{ shadow: 'md' }}
    />
  );
}
`,maxWidth:340,centered:!0};var N=o(30838);let L={type:"code",component:function(){let e=(0,a.jsx)(N.A,{size:16});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.K,{data:["React","Angular","Vue"],leftSectionPointerEvents:"none",leftSection:e,label:"Your favorite libraries",placeholder:"Your favorite libraries"}),(0,a.jsx)(n.K,{mt:"md",data:["React","Angular","Vue"],rightSectionPointerEvents:"none",rightSection:e,label:"Your favorite libraries",placeholder:"Your favorite libraries"})]})},maxWidth:340,centered:!0,code:`
import { MultiSelect } from '@mantine/core';
import { IconComponents } from '@tabler/icons-react';

function Demo() {
  const icon = <IconComponents size={16} />;
  return (
    <>
      <MultiSelect
        data={['React', 'Angular', 'Vue']}
        leftSectionPointerEvents="none"
        leftSection={icon}
        label="Your favorite libraries"
        placeholder="Your favorite libraries"
      />
      <MultiSelect
        mt="md"
        data={['React', 'Angular', 'Vue']}
        rightSectionPointerEvents="none"
        rightSection={icon}
        label="Your favorite libraries"
        placeholder="Your favorite libraries"
      />
    </>
  );
}
`},$={type:"configurator",component:function(e){return(0,a.jsx)(n.K,{...e,placeholder:"MultiSelect placeholder",data:["React","Angular","Vue","Svelte"]})},code:`
import { MultiSelect } from '@mantine/core';


function Demo() {
  return (
    <MultiSelect
      {{props}}
      placeholder="MultiSelect placeholder"
      data={['React', 'Angular', 'Vue', 'Svelte']}
    />
  );
}
`,centered:!0,maxWidth:340,controls:o(23232).$7},H={type:"code",component:function(){return(0,a.jsx)(n.K,{label:"Your favorite libraries",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],readOnly:!0})},code:`
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      readOnly
    />
  );
}
`,maxWidth:340,centered:!0},G={type:"code",component:function(){return(0,a.jsx)(n.K,{label:"Your favorite libraries",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],disabled:!0})},code:`
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      disabled
    />
  );
}
`,maxWidth:340,centered:!0},U={type:"code",component:function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.K,{label:"Boolean error",placeholder:"Boolean error",error:!0,data:["React","Angular","Vue","Svelte"]}),(0,a.jsx)(n.K,{mt:"md",label:"With error message",placeholder:"With error message",error:"Invalid name",data:["React","Angular","Vue","Svelte"]})]})},maxWidth:340,centered:!0,code:`
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <>
      <MultiSelect
        label="Boolean error"
        placeholder="Boolean error"
        error
        data={['React', 'Angular', 'Vue', 'Svelte']}
      />
      <MultiSelect
        mt="md"
        label="With error message"
        placeholder="With error message"
        error="Invalid name"
        data={['React', 'Angular', 'Vue', 'Svelte']}
      />
    </>
  );
}
`};var J=o(32653),q=o(88825);let X=`
import { IconAt } from '@tabler/icons-react';
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
     {{props}}
      leftSection={<IconAt size={18} stroke={1.5} />}
      label="MultiSelect"
      description="Description"
      error="Error"
      placeholder="MultiSelect"
      defaultValue={['React', 'Angular']}
      data={[
        { group: 'Frontend', items: ['React', 'Angular'] },
        { group: 'Backend', items: ['Node', 'Django'] },
      ]}
    />
  );
}
`,Z={type:"styles-api",data:q.U,component:function(e){return(0,a.jsx)(n.K,{...e,dropdownOpened:!0,leftSection:(0,a.jsx)(J.A,{size:18,stroke:1.5}),withAsterisk:!0,label:"MultiSelect",description:"Description",placeholder:"MultiSelect",defaultValue:["React","Angular"],data:[{group:"Frontend",items:["React","Angular"]},{group:"Backend",items:["Node","Django"]}]})},code:X,centered:!0,maxWidth:340};var Q=o(18675),ee=o(20017);let et=(0,Q.P)(ee.XZ.MultiSelect);function eo(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components},{ComboboxData:o,ComboboxDisclaimer:n,ComboboxFiltering:h,ComboboxLargeData:v,ComboboxProps:g,Demo:x,GetElementRef:j,InputAccessibility:y,InputFeatures:S,InputSections:w,StylesApiSelectors:M}=t;return o||er("ComboboxData",!0),n||er("ComboboxDisclaimer",!0),h||er("ComboboxFiltering",!0),v||er("ComboboxLargeData",!0),g||er("ComboboxProps",!0),x||er("Demo",!0),j||er("GetElementRef",!0),y||er("InputAccessibility",!0),S||er("InputFeatures",!0),w||er("InputSections",!0),M||er("StylesApiSelectors",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n,{component:"MultiSelect"}),"\n",(0,a.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"MultiSelect"})," provides a way to enter multiple values.\n",(0,a.jsx)(t.code,{children:"MultiSelect"})," is similar to ",(0,a.jsx)(t.a,{href:"/core/tags-input",children:"TagsInput"}),", but it does not allow entering custom values."]}),"\n",(0,a.jsx)(x,{data:l}),"\n",(0,a.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"MultiSelect"})," value must be an array of strings, other types are not supported.\n",(0,a.jsx)(t.code,{children:"onChange"})," function is called with an array of strings as a single argument."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { MultiSelect } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState<string[]>([]);\n  return <MultiSelect data={[]} value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,a.jsx)(t.h2,{id:"clearable",children:"Clearable"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:"clearable"})," prop to display the clear button in the right section. The button is not displayed\nwhen:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"The component does not have a value"}),"\n",(0,a.jsx)(t.li,{children:"The component is disabled"}),"\n",(0,a.jsx)(t.li,{children:"The component is read only"}),"\n"]}),"\n",(0,a.jsx)(x,{data:i}),"\n",(0,a.jsx)(t.h2,{id:"searchable",children:"Searchable"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:"searchable"})," prop to allow filtering options by user input:"]}),"\n",(0,a.jsx)(x,{data:c}),"\n",(0,a.jsx)(t.h2,{id:"controlled-search-value",children:"Controlled search value"}),"\n",(0,a.jsxs)(t.p,{children:["You can control search value with ",(0,a.jsx)(t.code,{children:"searchValue"})," and ",(0,a.jsx)(t.code,{children:"onSearchChange"})," props:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { MultiSelect } from '@mantine/core';\n\nfunction Demo() {\n  const [searchValue, setSearchValue] = useState('');\n  return (\n    <MultiSelect\n      searchable\n      searchValue={searchValue}\n      onSearchChange={setSearchValue}\n      data={[]}\n    />\n  );\n}\n"})}),"\n",(0,a.jsx)(t.h2,{id:"nothing-found",children:"Nothing found"}),"\n",(0,a.jsxs)(t.p,{children:["Set the ",(0,a.jsx)(t.code,{children:"nothingFoundMessage"})," prop to display a given message when no options match the search query\nor there is no data available. If the ",(0,a.jsx)(t.code,{children:"nothingFoundMessage"})," prop is not set, the ",(0,a.jsx)(t.code,{children:"MultiSelect"})," dropdown will be hidden."]}),"\n",(0,a.jsx)(x,{data:s}),"\n",(0,a.jsx)(t.h2,{id:"checked-option-icon",children:"Checked option icon"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:"checkIconPosition"})," prop to ",(0,a.jsx)(t.code,{children:"left"})," or ",(0,a.jsx)(t.code,{children:"right"})," to control position of check icon in active option.\nTo remove the check icon, set ",(0,a.jsx)(t.code,{children:"withCheckIcon={false}"}),"."]}),"\n",(0,a.jsx)(x,{data:d}),"\n",(0,a.jsx)(t.h2,{id:"max-selected-values",children:"Max selected values"}),"\n",(0,a.jsxs)(t.p,{children:["You can limit the number of selected values with ",(0,a.jsx)(t.code,{children:"maxValues"})," prop. This will not allow adding more values\nonce the limit is reached."]}),"\n",(0,a.jsx)(x,{data:u}),"\n",(0,a.jsx)(t.h2,{id:"hide-selected-options",children:"Hide selected options"}),"\n",(0,a.jsxs)(t.p,{children:["To remove selected options from the list of available options, set ",(0,a.jsx)(t.code,{children:"hidePickedOptions"})," prop:"]}),"\n",(0,a.jsx)(x,{data:p}),"\n",(0,a.jsx)(o,{component:"MultiSelect"}),"\n",(0,a.jsx)(h,{component:"MultiSelect"}),"\n",(0,a.jsx)(x,{data:m}),"\n",(0,a.jsx)(t.h2,{id:"sort-options",children:"Sort options"}),"\n",(0,a.jsxs)(t.p,{children:["By default, options are sorted by their position in the data array. You can change this behavior\nwith ",(0,a.jsx)(t.code,{children:"filter"})," function:"]}),"\n",(0,a.jsx)(x,{data:b}),"\n",(0,a.jsx)(v,{component:"MultiSelect"}),"\n",(0,a.jsx)(x,{data:f}),"\n",(0,a.jsx)(t.h2,{id:"renderoption",children:"renderOption"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"renderOption"})," callback allows you to customize option rendering. It is called with option object and\nchecked state. The function must return a React node."]}),"\n",(0,a.jsx)(x,{data:k}),"\n",(0,a.jsx)(t.h2,{id:"scrollable-dropdown",children:"Scrollable dropdown"}),"\n",(0,a.jsxs)(t.p,{children:["By default, the options list is wrapped with ",(0,a.jsx)(t.a,{href:"/core/scroll-area",children:"ScrollArea.Autosize"}),".\nYou can control dropdown max-height with ",(0,a.jsx)(t.code,{children:"maxDropdownHeight"})," prop if you do not change the default settings."]}),"\n",(0,a.jsxs)(t.p,{children:["If you want to use native scrollbars, set ",(0,a.jsx)(t.code,{children:"withScrollArea={false}"}),". Note that in this case,\nyou will need to change dropdown styles with ",(0,a.jsx)(t.a,{href:"/styles/styles-api",children:"Styles API"}),"."]}),"\n",(0,a.jsx)(x,{data:P}),"\n",(0,a.jsx)(t.h2,{id:"group-options",children:"Group options"}),"\n",(0,a.jsx)(x,{data:R}),"\n",(0,a.jsx)(t.h2,{id:"disabled-options",children:"Disabled options"}),"\n",(0,a.jsxs)(t.p,{children:["When option is disabled, it cannot be selected and is ignored in keyboard navigation.\nNote that user can still enter disabled option as a value. If you want to prohibit certain values,\nuse controlled component and filter them out in ",(0,a.jsx)(t.code,{children:"onChange"})," function."]}),"\n",(0,a.jsx)(x,{data:D}),"\n",(0,a.jsx)(g,{component:"MultiSelect"}),"\n",(0,a.jsx)(t.h2,{id:"inside-popover",children:"Inside Popover"}),"\n",(0,a.jsxs)(t.p,{children:["To use ",(0,a.jsx)(t.code,{children:"MultiSelect"})," inside popover, you need to set ",(0,a.jsx)(t.code,{children:"withinPortal: false"}),":"]}),"\n",(0,a.jsx)(x,{data:W}),"\n",(0,a.jsx)(t.h2,{id:"control-dropdown-opened-state",children:"Control dropdown opened state"}),"\n",(0,a.jsxs)(t.p,{children:["You can control dropdown opened state with ",(0,a.jsx)(t.code,{children:"dropdownOpened"})," prop. Additionally,\nyou can use ",(0,a.jsx)(t.code,{children:"onDropdownClose"})," and ",(0,a.jsx)(t.code,{children:"onDropdownOpen"})," to listen to dropdown opened state changes."]}),"\n",(0,a.jsx)(x,{data:O}),"\n",(0,a.jsx)(t.h2,{id:"dropdown-position",children:"Dropdown position"}),"\n",(0,a.jsxs)(t.p,{children:["By default, the dropdown is displayed below the input if there is enough space; otherwise it is displayed above the input.\nYou can change this behavior by setting ",(0,a.jsx)(t.code,{children:"position"})," and ",(0,a.jsx)(t.code,{children:"middlewares"})," props, which are passed down to the\nunderlying ",(0,a.jsx)(t.a,{href:"/core/popover",children:"Popover"})," component."]}),"\n",(0,a.jsx)(t.p,{children:"Example of dropdown that is always displayed above the input:"}),"\n",(0,a.jsx)(x,{data:T}),"\n",(0,a.jsx)(t.h2,{id:"dropdown-width",children:"Dropdown width"}),"\n",(0,a.jsxs)(t.p,{children:["To change dropdown width, set ",(0,a.jsx)(t.code,{children:"width"})," prop in ",(0,a.jsx)(t.code,{children:"comboboxProps"}),". By default,\ndropdown width is equal to the input width."]}),"\n",(0,a.jsx)(x,{data:z}),"\n",(0,a.jsx)(t.h2,{id:"dropdown-offset",children:"Dropdown offset"}),"\n",(0,a.jsxs)(t.p,{children:["To change dropdown offset, set ",(0,a.jsx)(t.code,{children:"offset"})," prop in ",(0,a.jsx)(t.code,{children:"comboboxProps"}),":"]}),"\n",(0,a.jsx)(x,{data:E}),"\n",(0,a.jsx)(t.h2,{id:"dropdown-animation",children:"Dropdown animation"}),"\n",(0,a.jsxs)(t.p,{children:["By default, dropdown animations are disabled. To enable them, you can set ",(0,a.jsx)(t.code,{children:"transitionProps"}),",\nwhich will be passed down to the underlying ",(0,a.jsx)(t.a,{href:"/core/transition",children:"Transition"})," component."]}),"\n",(0,a.jsx)(x,{data:B}),"\n",(0,a.jsx)(t.h2,{id:"dropdown-padding",children:"Dropdown padding"}),"\n",(0,a.jsx)(x,{data:F}),"\n",(0,a.jsx)(t.h2,{id:"dropdown-shadow",children:"Dropdown shadow"}),"\n",(0,a.jsx)(x,{data:_}),"\n",(0,a.jsx)(w,{component:"MultiSelect"}),"\n",(0,a.jsx)(x,{data:L}),"\n",(0,a.jsx)(t.h2,{id:"input-props",children:"Input props"}),"\n",(0,a.jsx)(S,{component:"MultiSelect",element:"input"}),"\n",(0,a.jsx)(x,{data:$}),"\n",(0,a.jsx)(t.h2,{id:"read-only",children:"Read only"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:"readOnly"})," to make the input read only. When ",(0,a.jsx)(t.code,{children:"readOnly"})," is set,\n",(0,a.jsx)(t.code,{children:"MultiSelect"})," will not show suggestions and will not call ",(0,a.jsx)(t.code,{children:"onChange"})," function."]}),"\n",(0,a.jsx)(x,{data:H}),"\n",(0,a.jsx)(t.h2,{id:"disabled",children:"Disabled"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:"disabled"})," to disable the input. When ",(0,a.jsx)(t.code,{children:"disabled"})," is set,\nuser cannot interact with the input and ",(0,a.jsx)(t.code,{children:"MultiSelect"})," will not show suggestions."]}),"\n",(0,a.jsx)(x,{data:G}),"\n",(0,a.jsx)(t.h2,{id:"error-state",children:"Error state"}),"\n",(0,a.jsx)(x,{data:U}),"\n",(0,a.jsx)(M,{component:"MultiSelect"}),"\n",(0,a.jsx)(x,{data:Z}),"\n",(0,a.jsx)(j,{component:"MultiSelect",refType:"input"}),"\n",(0,a.jsx)(y,{component:"MultiSelect"}),"\n",(0,a.jsxs)(t.p,{children:["To set ",(0,a.jsx)(t.code,{children:"aria-label"})," on the clear button, use ",(0,a.jsx)(t.code,{children:"clearButtonProps"}),". Note that it is required\nonly when ",(0,a.jsx)(t.code,{children:"clearable"})," is set."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { MultiSelect } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <MultiSelect\n      data={[]}\n      clearable\n      clearButtonProps={{\n        'aria-label': 'Clear input',\n      }}\n    />\n  );\n}\n"})})]})}function ea(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(et,{...e,children:(0,a.jsx)(eo,{...e})})}function er(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},87186:(e,t,o)=>{"use strict";o.d(t,{A:()=>a});var a=(0,o(73366).A)("outline","adjustments","IconAdjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},80502:(e,t,o)=>{"use strict";o.d(t,{A:()=>a});var a=(0,o(73366).A)("outline","arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},89689:(e,t,o)=>{"use strict";o.d(t,{A:()=>a});var a=(0,o(73366).A)("outline","arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},32653:(e,t,o)=>{"use strict";o.d(t,{A:()=>a});var a=(0,o(73366).A)("outline","at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},61584:(e,t,o)=>{"use strict";o.d(t,{A:()=>a});var a=(0,o(73366).A)("outline","calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},91133:(e,t,o)=>{"use strict";o.d(t,{A:()=>a});var a=(0,o(73366).A)("outline","code","IconCode",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},30838:(e,t,o)=>{"use strict";o.d(t,{A:()=>a});var a=(0,o(73366).A)("outline","components","IconComponents",[["path",{d:"M3 12l3 3l3 -3l-3 -3z",key:"svg-0"}],["path",{d:"M15 12l3 3l3 -3l-3 -3z",key:"svg-1"}],["path",{d:"M9 6l3 3l3 -3l-3 -3z",key:"svg-2"}],["path",{d:"M9 18l3 3l3 -3l-3 -3z",key:"svg-3"}]])},11749:(e,t,o)=>{"use strict";o.d(t,{A:()=>a});var a=(0,o(73366).A)("outline","file-text","IconFileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},89843:(e,t,o)=>{"use strict";o.d(t,{A:()=>a});var a=(0,o(73366).A)("outline","license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},9613:(e,t,o)=>{"use strict";o.d(t,{A:()=>a});var a=(0,o(73366).A)("outline","pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},55764:(e,t,o)=>{"use strict";o.d(t,{A:()=>a});var a=(0,o(73366).A)("outline","switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},23232:(e,t,o)=>{"use strict";o.d(t,{$7:()=>n,l$:()=>a,wQ:()=>r});let a=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],r=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],n=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]}},e=>{var t=t=>e(e.s=t);e.O(0,[18675,31791,21971,90636,46593,38792],()=>t(76017)),_N_E=e.O()}]);