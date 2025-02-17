(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[46476],{56189:(e,t,o)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/autocomplete",function(){return o(52912)}])},52912:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>X});var r=o(31085),a=o(71184),n=o(22977);let l={type:"code",component:function(){return(0,r.jsx)(n.j,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"]})},code:`
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
`,maxWidth:340,centered:!0},i=({options:e,search:t})=>{let o=t.toLowerCase().trim().split(" ");return e.filter(e=>{let t=e.label.toLowerCase().trim().split(" ");return o.every(e=>t.some(t=>t.includes(e)))})},c={type:"code",component:function(){return(0,r.jsx)(n.j,{label:"Your country",placeholder:"Pick value or enter anything",data:["Great Britain","Russian Federation","United States"],filter:i})},code:`
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
`,maxWidth:340,centered:!0},s=({options:e,search:t})=>{let o=e.filter(e=>e.label.toLowerCase().trim().includes(t.toLowerCase().trim()));return o.sort((e,t)=>e.label.localeCompare(t.label)),o},d={type:"code",component:function(){return(0,r.jsx)(n.j,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["4 – React","1 – Angular","3 – Vue","2 – Svelte"],filter:s})},code:`
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
`,maxWidth:340,centered:!0},p=`
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
`,u=Array(1e5).fill(0).map((e,t)=>`Option ${t}`),m={type:"code",component:function(){return(0,r.jsx)(n.j,{label:"100 000 options autocomplete",placeholder:"Use limit to optimize performance",limit:5,data:u})},code:p,maxWidth:340,centered:!0};var h=o(56051),g=o(86658),v=o(93065);let b={"Emily Johnson":{image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png",email:"emily92@gmail.com"},"Ava Rodriguez":{image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png",email:"ava_rose@gmail.com"},"Olivia Chen":{image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png",email:"livvy_globe@gmail.com"},"Ethan Barnes":{image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png",email:"ethan_explorer@gmail.com"},"Mason Taylor":{image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png",email:"mason_musician@gmail.com"}},x=({option:e})=>(0,r.jsxs)(h.Y,{gap:"sm",children:[(0,r.jsx)(g.e,{src:b[e.value].image,size:36,radius:"xl"}),(0,r.jsxs)("div",{children:[(0,r.jsx)(v.E,{size:"sm",children:e.value}),(0,r.jsx)(v.E,{size:"xs",opacity:.5,children:b[e.value].email})]})]}),f={type:"code",component:function(){return(0,r.jsx)(n.j,{data:["Emily Johnson","Ava Rodriguez","Olivia Chen","Ethan Barnes","Mason Taylor"],renderOption:x,maxDropdownHeight:300,label:"Employee of the month",placeholder:"Search for employee"})},code:`
import { Autocomplete, AutocompleteProps, Avatar, Group, Text } from '@mantine/core';

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

const renderAutocompleteOption: AutocompleteProps['renderOption'] = ({ option }) => (
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
    <Autocomplete
      data={['Emily Johnson', 'Ava Rodriguez', 'Olivia Chen', 'Ethan Barnes', 'Mason Taylor']}
      renderOption={renderAutocompleteOption}
      maxDropdownHeight={300}
      label="Employee of the month"
      placeholder="Search for employee"
    />
  );
}
`,centered:!0,maxWidth:340,defaultExpanded:!1},y=`
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
`,j=Array(100).fill(0).map((e,t)=>`Option ${t}`),A={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.j,{label:"With scroll area (default)",placeholder:"Pick value or enter anything",data:j,maxDropdownHeight:200}),(0,r.jsx)(n.j,{label:"With native scroll",placeholder:"Pick value or enter anything",data:j,withScrollArea:!1,styles:{dropdown:{maxHeight:200,overflowY:"auto"}},mt:"md"})]})},code:y,maxWidth:340,centered:!0},w={type:"code",component:function(){return(0,r.jsx)(n.j,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:[{group:"Frontend",items:["React","Angular"]},{group:"Backend",items:["Express","Django"]}]})},code:`
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
`,maxWidth:340,centered:!0},C={type:"code",component:function(){return(0,r.jsx)(n.j,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:[{value:"React"},{value:"Angular"},{value:"Vue",disabled:!0},{value:"Svelte",disabled:!0}]})},code:`
import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <Autocomplete
      label="Your favorite library"
      placeholder="Pick value or enter anything"
      data={[
        { value: 'React' },
        { value: 'Angular' },
        { value: 'Vue', disabled: true },
        { value: 'Svelte', disabled: true },
      ]}
    />
  );
}
`,maxWidth:340,centered:!0};var P=o(35764),V=o(52022);let S={type:"code",code:`
import { Popover, Button, Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <Popover width={300} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Autocomplete
          label="Your favorite library"
          placeholder="Pick value or enter anything"
          data={['React', 'Angular', 'Vue', 'Svelte']}
          comboboxProps={{ withinPortal: false }}
        />
      </Popover.Dropdown>
    </Popover>
  );
}
`,centered:!0,component:function(){return(0,r.jsxs)(P.A,{width:300,position:"bottom",withArrow:!0,shadow:"md",children:[(0,r.jsx)(P.A.Target,{children:(0,r.jsx)(V.$,{children:"Toggle popover"})}),(0,r.jsx)(P.A.Dropdown,{children:(0,r.jsx)(n.j,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],comboboxProps:{withinPortal:!1}})})]})}},D={type:"code",component:function(){return(0,r.jsx)(n.j,{clearable:!0,defaultValue:"React",data:["React","Angular"],label:"Clearable autocomplete",placeholder:"Clearable autocomplete"})},code:`
import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <Autocomplete
      clearable
      defaultValue="React"
      data={['React', 'Angular']}
      label="Clearable autocomplete"
      placeholder="Clearable autocomplete"
    />
  );
}
`,maxWidth:340,centered:!0};var k=o(92051);let R={type:"code",component:function(){let[e,{toggle:t}]=(0,k.j)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(V.$,{onClick:t,mb:"md",children:"Toggle dropdown"}),(0,r.jsx)(n.j,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],dropdownOpened:e})]})},code:`
import { Autocomplete, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [dropdownOpened, { toggle }] = useDisclosure();
  return (
    <>
      <Button onClick={toggle} mb="md">
        Toggle dropdown
      </Button>

      <Autocomplete
        label="Your favorite library"
        placeholder="Pick value or enter anything"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        dropdownOpened={dropdownOpened}
      />
    </>
  );
}
`,maxWidth:340,centered:!0},Y={type:"code",component:function(){return(0,r.jsx)(n.j,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],comboboxProps:{position:"top",middlewares:{flip:!1,shift:!1}}})},code:`
import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <Autocomplete
      label="Your favorite library"
      placeholder="Pick value or enter anything"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      comboboxProps={{ position: 'top', middlewares: { flip: false, shift: false } }}
    />
  );
}
`,maxWidth:340,centered:!0},O={type:"code",component:function(){return(0,r.jsx)(n.j,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],comboboxProps:{transitionProps:{transition:"pop",duration:200}}})},code:`
import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <Autocomplete
      label="Your favorite library"
      placeholder="Pick value or enter anything"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      comboboxProps={{ transitionProps: { transition: 'pop', duration: 200 } }}
    />
  );
}
`,maxWidth:340,centered:!0},E={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.j,{label:"Zero padding",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],comboboxProps:{dropdownPadding:0}}),(0,r.jsx)(n.j,{mt:"md",label:"10px padding",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],comboboxProps:{dropdownPadding:10}})]})},code:`
import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <>
      <Autocomplete
        label="Zero padding"
        placeholder="Pick value or enter anything"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        comboboxProps={{ dropdownPadding: 0 }}
      />
      <Autocomplete
        mt="md"
        label="10px padding"
        placeholder="Pick value or enter anything"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        comboboxProps={{ dropdownPadding: 10 }}
      />
    </>
  );
}
`,maxWidth:340,centered:!0},_={type:"code",component:function(){return(0,r.jsx)(n.j,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],comboboxProps:{shadow:"md"}})},code:`
import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <Autocomplete
      label="Your favorite library"
      placeholder="Pick value or enter anything"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      comboboxProps={{ shadow: 'md' }}
    />
  );
}
`,maxWidth:340,centered:!0};var W=o(30838);let z={type:"code",component:function(){let e=(0,r.jsx)(W.A,{size:16});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.j,{data:["React","Angular","Vue"],leftSectionPointerEvents:"none",leftSection:e,label:"Your favorite library",placeholder:"Your favorite library"}),(0,r.jsx)(n.j,{mt:"md",data:["React","Angular","Vue"],rightSectionPointerEvents:"none",rightSection:e,label:"Your favorite library",placeholder:"Your favorite library"})]})},maxWidth:340,centered:!0,code:`
import { Autocomplete } from '@mantine/core';
import { IconComponents } from '@tabler/icons-react';

function Demo() {
  const icon = <IconComponents size={16} />;
  return (
    <>
      <Autocomplete
        data={['React', 'Angular', 'Vue']}
        leftSectionPointerEvents="none"
        leftSection={icon}
        label="Your favorite library"
        placeholder="Your favorite library"
      />
      <Autocomplete
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
`},B={type:"configurator",component:function(e){return(0,r.jsx)(n.j,{...e,placeholder:"Autocomplete placeholder",data:["React","Angular","Vue","Svelte"]})},code:`
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
`,centered:!0,maxWidth:340,controls:o(23232).$7},T={type:"code",component:function(){return(0,r.jsx)(n.j,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],readOnly:!0})},code:`
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
`,maxWidth:340,centered:!0},I={type:"code",component:function(){return(0,r.jsx)(n.j,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],disabled:!0})},code:`
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
`,maxWidth:340,centered:!0},F={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.j,{label:"Boolean error",placeholder:"Boolean error",error:!0,data:["React","Angular","Vue","Svelte"]}),(0,r.jsx)(n.j,{mt:"md",label:"With error message",placeholder:"With error message",error:"Invalid name",data:["React","Angular","Vue","Svelte"]})]})},maxWidth:340,centered:!0,code:`
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
`};var G=o(32653),N=o(5534);let M=`
import { IconAt } from '@tabler/icons-react';
import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <Autocomplete
     {{props}}
      leftSection={<IconAt size={18} stroke={1.5} />}
      label="Autocomplete"
      description="Description"
      error="Error"
      placeholder="Autocomplete"
      data={['React', 'Angular']}
    />
  );
}
`,$={...N.P};delete $.selectors.empty;let L={type:"styles-api",data:$,component:function(e){return(0,r.jsx)(n.j,{...e,dropdownOpened:!0,leftSection:(0,r.jsx)(G.A,{size:18,stroke:1.5}),withAsterisk:!0,label:"Autocomplete",description:"Description",placeholder:"Autocomplete",data:[{group:"Frontend",items:["React","Angular"]},{group:"Backend",items:["Node","Django"]}]})},code:M,centered:!0,maxWidth:340};var Z=o(85954),H=o(38215);let U=(0,Z.P)(H.XZ.Autocomplete);function J(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components},{ComboboxData:o,ComboboxDisclaimer:n,ComboboxFiltering:i,ComboboxLargeData:s,ComboboxProps:p,Demo:u,GetElementRef:h,InputAccessibility:g,InputFeatures:v,InputSections:b,StylesApiSelectors:x}=t;return o||Q("ComboboxData",!0),n||Q("ComboboxDisclaimer",!0),i||Q("ComboboxFiltering",!0),s||Q("ComboboxLargeData",!0),p||Q("ComboboxProps",!0),u||Q("Demo",!0),h||Q("GetElementRef",!0),g||Q("InputAccessibility",!0),v||Q("InputFeatures",!0),b||Q("InputSections",!0),x||Q("StylesApiSelectors",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n,{component:"Autocomplete"}),"\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Autocomplete"})," provides user a list of suggestions based on the input,\nhowever user is not limited to suggestions and can type anything."]}),"\n",(0,r.jsx)(u,{data:l}),"\n",(0,r.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Autocomplete"})," value must be a string, other types are not supported.\n",(0,r.jsx)(t.code,{children:"onChange"})," function is called with a string value as a single argument."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Autocomplete } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState('');\n  return <Autocomplete data={[]} value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,r.jsx)(o,{component:"Autocomplete"}),"\n",(0,r.jsx)(i,{component:"Autocomplete"}),"\n",(0,r.jsx)(u,{data:c}),"\n",(0,r.jsx)(t.h2,{id:"sort-options",children:"Sort options"}),"\n",(0,r.jsxs)(t.p,{children:["By default, options are sorted by their position in the data array. You can change this behavior\nwith ",(0,r.jsx)(t.code,{children:"filter"})," function:"]}),"\n",(0,r.jsx)(u,{data:d}),"\n",(0,r.jsx)(s,{component:"Autocomplete"}),"\n",(0,r.jsx)(u,{data:m}),"\n",(0,r.jsx)(t.h2,{id:"renderoption",children:"renderOption"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"renderOption"})," callback allows you to customize option rendering. It is called with option object.\nThe function must return a React node."]}),"\n",(0,r.jsx)(u,{data:f}),"\n",(0,r.jsx)(t.h2,{id:"scrollable-dropdown",children:"Scrollable dropdown"}),"\n",(0,r.jsxs)(t.p,{children:["By default, the options list is wrapped with ",(0,r.jsx)(t.a,{href:"/core/scroll-area",children:"ScrollArea.Autosize"}),".\nYou can control dropdown max-height with ",(0,r.jsx)(t.code,{children:"maxDropdownHeight"})," prop if you do not change the default settings."]}),"\n",(0,r.jsxs)(t.p,{children:["If you want to use native scrollbars, set ",(0,r.jsx)(t.code,{children:"withScrollArea={false}"}),". Note that in this case,\nyou will need to change dropdown styles with ",(0,r.jsx)(t.a,{href:"/styles/styles-api",children:"Styles API"}),"."]}),"\n",(0,r.jsx)(u,{data:A}),"\n",(0,r.jsx)(t.h2,{id:"group-options",children:"Group options"}),"\n",(0,r.jsx)(u,{data:w}),"\n",(0,r.jsx)(t.h2,{id:"disabled-options",children:"Disabled options"}),"\n",(0,r.jsx)(t.p,{children:"When option is disabled, it cannot be selected and is ignored in keyboard navigation."}),"\n",(0,r.jsx)(u,{data:C}),"\n",(0,r.jsx)(p,{component:"Autocomplete"}),"\n",(0,r.jsx)(t.h2,{id:"inside-popover",children:"Inside Popover"}),"\n",(0,r.jsxs)(t.p,{children:["To use ",(0,r.jsx)(t.code,{children:"Autocomplete"})," inside popover, you need to set ",(0,r.jsx)(t.code,{children:"withinPortal: false"}),":"]}),"\n",(0,r.jsx)(u,{data:S}),"\n",(0,r.jsx)(t.h2,{id:"clearable",children:"Clearable"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"clearable"})," prop to display the clear button in the right section. The button is not displayed\nwhen:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"The component does not have a value"}),"\n",(0,r.jsx)(t.li,{children:"The component is disabled"}),"\n",(0,r.jsx)(t.li,{children:"The component is read only"}),"\n"]}),"\n",(0,r.jsx)(u,{data:D}),"\n",(0,r.jsx)(t.h2,{id:"control-dropdown-opened-state",children:"Control dropdown opened state"}),"\n",(0,r.jsxs)(t.p,{children:["You can control dropdown opened state with ",(0,r.jsx)(t.code,{children:"dropdownOpened"})," prop. Additionally,\nyou can use ",(0,r.jsx)(t.code,{children:"onDropdownClose"})," and ",(0,r.jsx)(t.code,{children:"onDropdownOpen"})," to listen to dropdown opened state changes."]}),"\n",(0,r.jsx)(u,{data:R}),"\n",(0,r.jsx)(t.h2,{id:"dropdown-position",children:"Dropdown position"}),"\n",(0,r.jsxs)(t.p,{children:["By default, the dropdown is displayed below the input if there is enough space; otherwise it is displayed above the input.\nYou can change this behavior by setting ",(0,r.jsx)(t.code,{children:"position"})," and ",(0,r.jsx)(t.code,{children:"middlewares"})," props, which are passed down to the\nunderlying ",(0,r.jsx)(t.a,{href:"/core/popover",children:"Popover"})," component."]}),"\n",(0,r.jsx)(t.p,{children:"Example of dropdown that is always displayed above the input:"}),"\n",(0,r.jsx)(u,{data:Y}),"\n",(0,r.jsx)(t.h2,{id:"dropdown-animation",children:"Dropdown animation"}),"\n",(0,r.jsxs)(t.p,{children:["By default, dropdown animations are disabled. To enable them, you can set ",(0,r.jsx)(t.code,{children:"transitionProps"}),",\nwhich will be passed down to the underlying ",(0,r.jsx)(t.a,{href:"/core/transition",children:"Transition"})," component."]}),"\n",(0,r.jsx)(u,{data:O}),"\n",(0,r.jsx)(t.h2,{id:"dropdown-padding",children:"Dropdown padding"}),"\n",(0,r.jsx)(u,{data:E}),"\n",(0,r.jsx)(t.h2,{id:"dropdown-shadow",children:"Dropdown shadow"}),"\n",(0,r.jsx)(u,{data:_}),"\n",(0,r.jsx)(b,{component:"Autocomplete"}),"\n",(0,r.jsx)(u,{data:z}),"\n",(0,r.jsx)(t.h2,{id:"input-props",children:"Input props"}),"\n",(0,r.jsx)(v,{component:"Autocomplete",element:"input"}),"\n",(0,r.jsx)(u,{data:B}),"\n",(0,r.jsx)(t.h2,{id:"read-only",children:"Read only"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"readOnly"})," to make the input read only. When ",(0,r.jsx)(t.code,{children:"readOnly"})," is set,\n",(0,r.jsx)(t.code,{children:"Autocomplete"})," will not show suggestions and will not call ",(0,r.jsx)(t.code,{children:"onChange"})," function."]}),"\n",(0,r.jsx)(u,{data:T}),"\n",(0,r.jsx)(t.h2,{id:"disabled",children:"Disabled"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"disabled"})," to disable the input. When ",(0,r.jsx)(t.code,{children:"disabled"})," is set,\nuser cannot interact with the input and ",(0,r.jsx)(t.code,{children:"Autocomplete"})," will not show suggestions."]}),"\n",(0,r.jsx)(u,{data:I}),"\n",(0,r.jsx)(t.h2,{id:"error-state",children:"Error state"}),"\n",(0,r.jsx)(u,{data:F}),"\n",(0,r.jsx)(x,{component:"Autocomplete"}),"\n",(0,r.jsx)(u,{data:L}),"\n",(0,r.jsx)(h,{component:"Autocomplete",refType:"input"}),"\n",(0,r.jsx)(g,{component:"Autocomplete"})]})}function X(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(U,{...e,children:(0,r.jsx)(J,{...e})})}function Q(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},32653:(e,t,o)=>{"use strict";o.d(t,{A:()=>r});var r=(0,o(73366).A)("outline","at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},23232:(e,t,o)=>{"use strict";o.d(t,{$7:()=>n,l$:()=>r,wQ:()=>a});let r=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],a=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],n=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]},22977:(e,t,o)=>{"use strict";o.d(t,{j:()=>b});var r=o(31085),a=o(14041),n=o(97567),l=o(82307),i=o(36456),c=o(29686),s=o(6754),d=o(46395),p=o(35213),u=o(31791),m=o(65567),h=o(88559),g=o(87059);let v={},b=(0,s.P9)((e,t)=>{let o=(0,c.Y)("Autocomplete",v,e),{classNames:s,styles:b,unstyled:x,vars:f,dropdownOpened:y,defaultDropdownOpened:j,onDropdownClose:A,onDropdownOpen:w,onFocus:C,onBlur:P,onClick:V,onChange:S,data:D,value:k,defaultValue:R,selectFirstOptionOnChange:Y,onOptionSubmit:O,comboboxProps:E,readOnly:_,disabled:W,filter:z,limit:B,withScrollArea:T,maxDropdownHeight:I,size:F,id:G,renderOption:N,autoComplete:M,scrollAreaProps:$,onClear:L,clearButtonProps:Z,error:H,clearable:U,rightSection:J,...X}=o,Q=(0,n.B)(G),q=(0,d.d)(D),K=(0,p.D)(q),[ee,et]=(0,l.Z)({value:k,defaultValue:R,finalValue:"",onChange:S}),eo=(0,h.B)({opened:y,defaultOpened:j,onDropdownOpen:w,onDropdownClose:()=>{A?.(),eo.resetSelectedOption()}}),{resolvedClassNames:er,resolvedStyles:ea}=(0,i.Y)({props:o,styles:b,classNames:s});(0,a.useEffect)(()=>{Y&&eo.selectFirstOption()},[Y,ee]);let en=(0,r.jsx)(u.G.ClearButton,{...Z,onClear:()=>{et(""),L?.()}});return(0,r.jsxs)(u.G,{store:eo,__staticSelector:"Autocomplete",classNames:er,styles:ea,unstyled:x,readOnly:_,onOptionSubmit:e=>{O?.(e),et(K[e].label),eo.closeDropdown()},size:F,...E,children:[(0,r.jsx)(u.G.Target,{autoComplete:M,children:(0,r.jsx)(g.O,{ref:t,...X,size:F,__staticSelector:"Autocomplete",__clearSection:en,__clearable:U&&!!ee&&!W&&!_,rightSection:J,disabled:W,readOnly:_,value:ee,error:H,onChange:e=>{et(e.currentTarget.value),eo.openDropdown(),Y&&eo.selectFirstOption()},onFocus:e=>{eo.openDropdown(),C?.(e)},onBlur:e=>{eo.closeDropdown(),P?.(e)},onClick:e=>{eo.openDropdown(),V?.(e)},classNames:er,styles:ea,unstyled:x,id:Q})}),(0,r.jsx)(m.i,{data:q,hidden:_||W,filter:z,search:ee,limit:B,hiddenWhenEmpty:!0,withScrollArea:T,maxDropdownHeight:I,unstyled:x,labelId:X.label?`${Q}-label`:void 0,"aria-label":X.label?void 0:X["aria-label"],renderOption:N,scrollAreaProps:$})]})});b.classes={...g.O.classes,...u.G.classes},b.displayName="@mantine/core/Autocomplete"},86658:(e,t,o)=>{"use strict";o.d(t,{e:()=>A});var r=o(31085),a=o(14041),n=o(33450),l=o(7098),i=o(29686),c=o(69564),s=o(34056),d=o(2453),p=o(6754);let u=(0,a.createContext)(null),m=u.Provider;var h={group:"m_11def92b",root:"m_f85678b6",image:"m_11f8ac07",placeholder:"m_104cd71f"};let g={},v=(0,l.V)((e,{spacing:t})=>({group:{"--ag-spacing":(0,n.GY)(t)}})),b=(0,p.P9)((e,t)=>{let o=(0,i.Y)("AvatarGroup",g,e),{classNames:a,className:n,style:l,styles:d,unstyled:p,vars:u,spacing:b,...x}=o,f=(0,c.I)({name:"AvatarGroup",classes:h,props:o,className:n,style:l,classNames:a,styles:d,unstyled:p,vars:u,varsResolver:v,rootSelector:"group"});return(0,r.jsx)(m,{value:!0,children:(0,r.jsx)(s.a,{ref:t,...f("group"),...x})})});function x(e){return(0,r.jsx)("svg",{...e,"data-avatar-placeholder-icon":!0,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}b.classes=h,b.displayName="@mantine/core/AvatarGroup";let f=["blue","cyan","grape","green","indigo","lime","orange","pink","red","teal","violet"],y={},j=(0,l.V)((e,{size:t,radius:o,variant:r,gradient:a,color:l,autoContrast:i,name:c,allowedInitialsColors:s})=>{let d="initials"===l&&"string"==typeof c?function(e,t=f){let o=Math.abs(function(e){let t=0;for(let o=0;o<e.length;o+=1)t=(t<<5)-t+e.charCodeAt(o)|0;return t}(e))%t.length;return t[o]}(c,s):l,p=e.variantColorResolver({color:d||"gray",theme:e,gradient:a,variant:r||"light",autoContrast:i});return{root:{"--avatar-size":(0,n.YC)(t,"avatar-size"),"--avatar-radius":void 0===o?void 0:(0,n.nJ)(o),"--avatar-bg":d||r?p.background:void 0,"--avatar-color":d||r?p.color:void 0,"--avatar-bd":d||r?p.border:void 0}}}),A=(0,d.v)((e,t)=>{let o=(0,i.Y)("Avatar",y,e),{classNames:n,className:l,style:d,styles:p,unstyled:m,vars:g,src:v,alt:b,radius:f,color:A,gradient:w,imageProps:C,children:P,autoContrast:V,mod:S,name:D,allowedInitialsColors:k,...R}=o,Y={withinGroup:!!(0,a.useContext)(u)},[O,E]=(0,a.useState)(!v),_=(0,c.I)({name:"Avatar",props:o,classes:h,className:l,style:d,classNames:n,styles:p,unstyled:m,vars:g,varsResolver:j});return(0,a.useEffect)(()=>E(!v),[v]),(0,r.jsx)(s.a,{..._("root"),mod:[{"within-group":Y.withinGroup},S],ref:t,...R,children:O?(0,r.jsx)("span",{..._("placeholder"),title:b,children:P||"string"==typeof D&&function(e,t=2){let o=e.split(" ");return 1===o.length?e.slice(0,t).toUpperCase():o.map(e=>e[0]).slice(0,t).join("").toUpperCase()}(D)||(0,r.jsx)(x,{})}):(0,r.jsx)("img",{...C,..._("image"),src:v,alt:b,onError:e=>{E(!0),C?.onError?.(e)}})})});A.classes=h,A.displayName="@mantine/core/Avatar",A.Group=b},65567:(e,t,o)=>{"use strict";o.d(t,{i:()=>p});var r=o(31085),a=o(54357),n=o(5583),l=o(37950),i=o(31791),c=o(51513),s=o(51200);function d({data:e,withCheckIcon:t,value:o,checkIconPosition:l,unstyled:p,renderOption:u}){if(!(0,c.c)(e)){var m;let c=(m=e.value,Array.isArray(o)?o.includes(m):o===m),d=t&&c&&(0,r.jsx)(n.S,{className:s.A.optionsDropdownCheckIcon}),h=(0,r.jsxs)(r.Fragment,{children:["left"===l&&d,(0,r.jsx)("span",{children:e.label}),"right"===l&&d]});return(0,r.jsx)(i.G.Option,{value:e.value,disabled:e.disabled,className:(0,a.A)({[s.A.optionsDropdownOption]:!p}),"data-reverse":"right"===l||void 0,"data-checked":c||void 0,"aria-selected":c,active:c,children:"function"==typeof u?u({option:e,checked:c}):h})}let h=e.items.map(e=>(0,r.jsx)(d,{data:e,value:o,unstyled:p,withCheckIcon:t,checkIconPosition:l,renderOption:u},e.value));return(0,r.jsx)(i.G.Group,{label:e.group,children:h})}function p({data:e,hidden:t,hiddenWhenEmpty:o,filter:a,search:n,limit:s,maxDropdownHeight:p,withScrollArea:u=!0,filterOptions:m=!0,withCheckIcon:h=!1,value:g,checkIconPosition:v,nothingFoundMessage:b,unstyled:x,labelId:f,renderOption:y,scrollAreaProps:j,"aria-label":A}){!function e(t,o=new Set){if(Array.isArray(t))for(let r of t)if((0,c.c)(r))e(r.items,o);else{if(void 0===r.value)throw Error("[@mantine/core] Each option must have value property");if("string"!=typeof r.value)throw Error(`[@mantine/core] Option value must be a string, other data formats are not supported, got ${typeof r.value}`);if(o.has(r.value))throw Error(`[@mantine/core] Duplicate options are not supported. Option with value "${r.value}" was provided more than once`);o.add(r.value)}}(e);let w="string"==typeof n?(a||function e({options:t,search:o,limit:r}){let a=o.trim().toLowerCase(),n=[];for(let l=0;l<t.length;l+=1){let i=t[l];if(n.length===r)break;(0,c.c)(i)&&n.push({group:i.group,items:e({options:i.items,search:o,limit:r-n.length})}),!(0,c.c)(i)&&i.label.toLowerCase().includes(a)&&n.push(i)}return n})({options:e,search:m?n:"",limit:s??1/0}):e,C=function(e){if(0===e.length)return!0;for(let t of e)if(!("group"in t)||t.items.length>0)return!1;return!0}(w),P=w.map(e=>(0,r.jsx)(d,{data:e,withCheckIcon:h,value:g,checkIconPosition:v,unstyled:x,renderOption:y},(0,c.c)(e)?e.group:e.value));return(0,r.jsx)(i.G.Dropdown,{hidden:t||o&&C,"data-composed":!0,children:(0,r.jsxs)(i.G.Options,{labelledBy:f,"aria-label":A,children:[u?(0,r.jsx)(l.F.Autosize,{mah:p??220,type:"scroll",scrollbarSize:"var(--combobox-padding)",offsetScrollbars:"y",...j,children:P}):P,C&&b&&(0,r.jsx)(i.G.Empty,{children:b})]})})}},51513:(e,t,o)=>{"use strict";function r(e){return"group"in e}o.d(t,{c:()=>r})},35213:(e,t,o)=>{"use strict";o.d(t,{D:()=>function e(t){return t.reduce((t,o)=>"group"in o?{...t,...e(o.items)}:(t[o.value]=o,t),{})}})},92051:(e,t,o)=>{"use strict";o.d(t,{j:()=>a});var r=o(14041);function a(e=!1,t){let{onOpen:o,onClose:n}=t||{},[l,i]=(0,r.useState)(e),c=(0,r.useCallback)(()=>{i(e=>e||(o?.(),!0))},[o]),s=(0,r.useCallback)(()=>{i(e=>e?(n?.(),!1):e)},[n]),d=(0,r.useCallback)(()=>{l?s():c()},[s,c,l]);return[l,{open:c,close:s,toggle:d}]}}},e=>{var t=t=>e(e.s=t);e.O(0,[67456,39699,68831,31791,90636,46593,38792],()=>t(56189)),_N_E=e.O()}]);