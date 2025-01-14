(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[83478],{59384:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/autocomplete",function(){return o(93482)}])},93482:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return q}});var r=o(52322),n=o(45392),a=o(75893);let l={type:"code",component:function(){return(0,r.jsx)(a.F,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"]})},code:`
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
`,maxWidth:340,centered:!0},i=({options:e,search:t})=>{let o=t.toLowerCase().trim().split(" ");return e.filter(e=>{let t=e.label.toLowerCase().trim().split(" ");return o.every(e=>t.some(t=>t.includes(e)))})},c={type:"code",component:function(){return(0,r.jsx)(a.F,{label:"Your country",placeholder:"Pick value or enter anything",data:["Great Britain","Russian Federation","United States"],filter:i})},code:`
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
`,maxWidth:340,centered:!0},s=({options:e,search:t})=>{let o=e.filter(e=>e.label.toLowerCase().trim().includes(t.toLowerCase().trim()));return o.sort((e,t)=>e.label.localeCompare(t.label)),o},d={type:"code",component:function(){return(0,r.jsx)(a.F,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["4 – React","1 – Angular","3 – Vue","2 – Svelte"],filter:s})},code:`
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
`,maxWidth:340,centered:!0},u=`
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
`,p=Array(1e5).fill(0).map((e,t)=>`Option ${t}`),m={type:"code",component:function(){return(0,r.jsx)(a.F,{label:"100 000 options autocomplete",placeholder:"Use limit to optimize performance",limit:5,data:p})},code:u,maxWidth:340,centered:!0};var h=o(93010),g=o(82067),v=o(8582);let f={"Emily Johnson":{image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png",email:"emily92@gmail.com"},"Ava Rodriguez":{image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png",email:"ava_rose@gmail.com"},"Olivia Chen":{image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png",email:"livvy_globe@gmail.com"},"Ethan Barnes":{image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png",email:"ethan_explorer@gmail.com"},"Mason Taylor":{image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png",email:"mason_musician@gmail.com"}},b=({option:e})=>(0,r.jsxs)(h.Z,{gap:"sm",children:[(0,r.jsx)(g.q,{src:f[e.value].image,size:36,radius:"xl"}),(0,r.jsxs)("div",{children:[(0,r.jsx)(v.x,{size:"sm",children:e.value}),(0,r.jsx)(v.x,{size:"xs",opacity:.5,children:f[e.value].email})]})]}),x={type:"code",component:function(){return(0,r.jsx)(a.F,{data:["Emily Johnson","Ava Rodriguez","Olivia Chen","Ethan Barnes","Mason Taylor"],renderOption:b,maxDropdownHeight:300,label:"Employee of the month",placeholder:"Search for employee"})},code:`
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
`,j=Array(100).fill(0).map((e,t)=>`Option ${t}`),A={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.F,{label:"With scroll area (default)",placeholder:"Pick value or enter anything",data:j,maxDropdownHeight:200}),(0,r.jsx)(a.F,{label:"With native scroll",placeholder:"Pick value or enter anything",data:j,withScrollArea:!1,styles:{dropdown:{maxHeight:200,overflowY:"auto"}},mt:"md"})]})},code:y,maxWidth:340,centered:!0},w={type:"code",component:function(){return(0,r.jsx)(a.F,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:[{group:"Frontend",items:["React","Angular"]},{group:"Backend",items:["Express","Django"]}]})},code:`
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
`,maxWidth:340,centered:!0},C={type:"code",component:function(){return(0,r.jsx)(a.F,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:[{value:"React"},{value:"Angular"},{value:"Vue",disabled:!0},{value:"Svelte",disabled:!0}]})},code:`
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
`,maxWidth:340,centered:!0};var P=o(26972),V=o(39629);let S={type:"code",code:`
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
`,centered:!0,component:function(){return(0,r.jsxs)(P.J,{width:300,position:"bottom",withArrow:!0,shadow:"md",children:[(0,r.jsx)(P.J.Target,{children:(0,r.jsx)(V.z,{children:"Toggle popover"})}),(0,r.jsx)(P.J.Dropdown,{children:(0,r.jsx)(a.F,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],comboboxProps:{withinPortal:!1}})})]})}},D={type:"code",component:function(){return(0,r.jsx)(a.F,{clearable:!0,defaultValue:"React",data:["React","Angular"],label:"Clearable autocomplete",placeholder:"Clearable autocomplete"})},code:`
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
`,maxWidth:340,centered:!0};var k=o(3900);let R={type:"code",component:function(){let[e,{toggle:t}]=(0,k.q)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(V.z,{onClick:t,mb:"md",children:"Toggle dropdown"}),(0,r.jsx)(a.F,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],dropdownOpened:e})]})},code:`
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
`,maxWidth:340,centered:!0},F={type:"code",component:function(){return(0,r.jsx)(a.F,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],comboboxProps:{position:"top",middlewares:{flip:!1,shift:!1}}})},code:`
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
`,maxWidth:340,centered:!0},O={type:"code",component:function(){return(0,r.jsx)(a.F,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],comboboxProps:{transitionProps:{transition:"pop",duration:200}}})},code:`
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
`,maxWidth:340,centered:!0},E={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.F,{label:"Zero padding",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],comboboxProps:{dropdownPadding:0}}),(0,r.jsx)(a.F,{mt:"md",label:"10px padding",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],comboboxProps:{dropdownPadding:10}})]})},code:`
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
`,maxWidth:340,centered:!0},Y={type:"code",component:function(){return(0,r.jsx)(a.F,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],comboboxProps:{shadow:"md"}})},code:`
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
`,maxWidth:340,centered:!0};var W=o(43300);let _={type:"code",component:function(){let e=(0,r.jsx)(W.Z,{size:16});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.F,{data:["React","Angular","Vue"],leftSectionPointerEvents:"none",leftSection:e,label:"Your favorite library",placeholder:"Your favorite library"}),(0,r.jsx)(a.F,{mt:"md",data:["React","Angular","Vue"],rightSectionPointerEvents:"none",rightSection:e,label:"Your favorite library",placeholder:"Your favorite library"})]})},maxWidth:340,centered:!0,code:`
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
`},z={type:"configurator",component:function(e){return(0,r.jsx)(a.F,{...e,placeholder:"Autocomplete placeholder",data:["React","Angular","Vue","Svelte"]})},code:`
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
`,centered:!0,maxWidth:340,controls:o(76528).pc},T={type:"code",component:function(){return(0,r.jsx)(a.F,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],readOnly:!0})},code:`
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
`,maxWidth:340,centered:!0},B={type:"code",component:function(){return(0,r.jsx)(a.F,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],disabled:!0})},code:`
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
`,maxWidth:340,centered:!0},I={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.F,{label:"Boolean error",placeholder:"Boolean error",error:!0,data:["React","Angular","Vue","Svelte"]}),(0,r.jsx)(a.F,{mt:"md",label:"With error message",placeholder:"With error message",error:"Invalid name",data:["React","Angular","Vue","Svelte"]})]})},maxWidth:340,centered:!0,code:`
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
`};var Z=o(89868),M=o(818);let G=`
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
`,N={...M.I};delete N.selectors.empty;let L={type:"styles-api",data:N,component:function(e){return(0,r.jsx)(a.F,{...e,dropdownOpened:!0,leftSection:(0,r.jsx)(Z.Z,{size:18,stroke:1.5}),withAsterisk:!0,label:"Autocomplete",description:"Description",placeholder:"Autocomplete",data:[{group:"Frontend",items:["React","Angular"]},{group:"Backend",items:["Node","Django"]}]})},code:G,centered:!0,maxWidth:340};var H=o(54078),J=o(15019);let U=(0,H.A)(J.us.Autocomplete);function $(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.a)(),...e.components},{ComboboxData:o,ComboboxDisclaimer:a,ComboboxFiltering:i,ComboboxLargeData:s,ComboboxProps:u,Demo:p,GetElementRef:h,InputAccessibility:g,InputFeatures:v,InputSections:f,StylesApiSelectors:b}=t;return o||X("ComboboxData",!0),a||X("ComboboxDisclaimer",!0),i||X("ComboboxFiltering",!0),s||X("ComboboxLargeData",!0),u||X("ComboboxProps",!0),p||X("Demo",!0),h||X("GetElementRef",!0),g||X("InputAccessibility",!0),v||X("InputFeatures",!0),f||X("InputSections",!0),b||X("StylesApiSelectors",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a,{component:"Autocomplete"}),"\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Autocomplete"})," provides user a list of suggestions based on the input,\nhowever user is not limited to suggestions and can type anything."]}),"\n",(0,r.jsx)(p,{data:l}),"\n",(0,r.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Autocomplete"})," value must be a string, other types are not supported.\n",(0,r.jsx)(t.code,{children:"onChange"})," function is called with a string value as a single argument."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Autocomplete } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState('');\n  return <Autocomplete data={[]} value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,r.jsx)(o,{component:"Autocomplete"}),"\n",(0,r.jsx)(i,{component:"Autocomplete"}),"\n",(0,r.jsx)(p,{data:c}),"\n",(0,r.jsx)(t.h2,{id:"sort-options",children:"Sort options"}),"\n",(0,r.jsxs)(t.p,{children:["By default, options are sorted by their position in the data array. You can change this behavior\nwith ",(0,r.jsx)(t.code,{children:"filter"})," function:"]}),"\n",(0,r.jsx)(p,{data:d}),"\n",(0,r.jsx)(s,{component:"Autocomplete"}),"\n",(0,r.jsx)(p,{data:m}),"\n",(0,r.jsx)(t.h2,{id:"renderoption",children:"renderOption"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"renderOption"})," callback allows you to customize option rendering. It is called with option object.\nThe function must return a React node."]}),"\n",(0,r.jsx)(p,{data:x}),"\n",(0,r.jsx)(t.h2,{id:"scrollable-dropdown",children:"Scrollable dropdown"}),"\n",(0,r.jsxs)(t.p,{children:["By default, the options list is wrapped with ",(0,r.jsx)(t.a,{href:"/core/scroll-area",children:"ScrollArea.Autosize"}),".\nYou can control dropdown max-height with ",(0,r.jsx)(t.code,{children:"maxDropdownHeight"})," prop if you do not change the default settings."]}),"\n",(0,r.jsxs)(t.p,{children:["If you want to use native scrollbars, set ",(0,r.jsx)(t.code,{children:"withScrollArea={false}"}),". Note that in this case,\nyou will need to change dropdown styles with ",(0,r.jsx)(t.a,{href:"/styles/styles-api",children:"Styles API"}),"."]}),"\n",(0,r.jsx)(p,{data:A}),"\n",(0,r.jsx)(t.h2,{id:"group-options",children:"Group options"}),"\n",(0,r.jsx)(p,{data:w}),"\n",(0,r.jsx)(t.h2,{id:"disabled-options",children:"Disabled options"}),"\n",(0,r.jsx)(t.p,{children:"When option is disabled, it cannot be selected and is ignored in keyboard navigation."}),"\n",(0,r.jsx)(p,{data:C}),"\n",(0,r.jsx)(u,{component:"Autocomplete"}),"\n",(0,r.jsx)(t.h2,{id:"inside-popover",children:"Inside Popover"}),"\n",(0,r.jsxs)(t.p,{children:["To use ",(0,r.jsx)(t.code,{children:"Autocomplete"})," inside popover, you need to set ",(0,r.jsx)(t.code,{children:"withinPortal: false"}),":"]}),"\n",(0,r.jsx)(p,{data:S}),"\n",(0,r.jsx)(t.h2,{id:"clearable",children:"Clearable"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"clearable"})," prop to display the clear button in the right section. The button is not displayed\nwhen:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"The component does not have a value"}),"\n",(0,r.jsx)(t.li,{children:"The component is disabled"}),"\n",(0,r.jsx)(t.li,{children:"The component is read only"}),"\n"]}),"\n",(0,r.jsx)(p,{data:D}),"\n",(0,r.jsx)(t.h2,{id:"control-dropdown-opened-state",children:"Control dropdown opened state"}),"\n",(0,r.jsxs)(t.p,{children:["You can control dropdown opened state with ",(0,r.jsx)(t.code,{children:"dropdownOpened"})," prop. Additionally,\nyou can use ",(0,r.jsx)(t.code,{children:"onDropdownClose"})," and ",(0,r.jsx)(t.code,{children:"onDropdownOpen"})," to listen to dropdown opened state changes."]}),"\n",(0,r.jsx)(p,{data:R}),"\n",(0,r.jsx)(t.h2,{id:"dropdown-position",children:"Dropdown position"}),"\n",(0,r.jsxs)(t.p,{children:["By default, the dropdown is displayed below the input if there is enough space; otherwise it is displayed above the input.\nYou can change this behavior by setting ",(0,r.jsx)(t.code,{children:"position"})," and ",(0,r.jsx)(t.code,{children:"middlewares"})," props, which are passed down to the\nunderlying ",(0,r.jsx)(t.a,{href:"/core/popover",children:"Popover"})," component."]}),"\n",(0,r.jsx)(t.p,{children:"Example of dropdown that is always displayed above the input:"}),"\n",(0,r.jsx)(p,{data:F}),"\n",(0,r.jsx)(t.h2,{id:"dropdown-animation",children:"Dropdown animation"}),"\n",(0,r.jsxs)(t.p,{children:["By default, dropdown animations are disabled. To enable them, you can set ",(0,r.jsx)(t.code,{children:"transitionProps"}),",\nwhich will be passed down to the underlying ",(0,r.jsx)(t.a,{href:"/core/transition",children:"Transition"})," component."]}),"\n",(0,r.jsx)(p,{data:O}),"\n",(0,r.jsx)(t.h2,{id:"dropdown-padding",children:"Dropdown padding"}),"\n",(0,r.jsx)(p,{data:E}),"\n",(0,r.jsx)(t.h2,{id:"dropdown-shadow",children:"Dropdown shadow"}),"\n",(0,r.jsx)(p,{data:Y}),"\n",(0,r.jsx)(f,{component:"Autocomplete"}),"\n",(0,r.jsx)(p,{data:_}),"\n",(0,r.jsx)(t.h2,{id:"input-props",children:"Input props"}),"\n",(0,r.jsx)(v,{component:"Autocomplete",element:"input"}),"\n",(0,r.jsx)(p,{data:z}),"\n",(0,r.jsx)(t.h2,{id:"read-only",children:"Read only"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"readOnly"})," to make the input read only. When ",(0,r.jsx)(t.code,{children:"readOnly"})," is set,\n",(0,r.jsx)(t.code,{children:"Autocomplete"})," will not show suggestions and will not call ",(0,r.jsx)(t.code,{children:"onChange"})," function."]}),"\n",(0,r.jsx)(p,{data:T}),"\n",(0,r.jsx)(t.h2,{id:"disabled",children:"Disabled"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"disabled"})," to disable the input. When ",(0,r.jsx)(t.code,{children:"disabled"})," is set,\nuser cannot interact with the input and ",(0,r.jsx)(t.code,{children:"Autocomplete"})," will not show suggestions."]}),"\n",(0,r.jsx)(p,{data:B}),"\n",(0,r.jsx)(t.h2,{id:"error-state",children:"Error state"}),"\n",(0,r.jsx)(p,{data:I}),"\n",(0,r.jsx)(b,{component:"Autocomplete"}),"\n",(0,r.jsx)(p,{data:L}),"\n",(0,r.jsx)(h,{component:"Autocomplete",refType:"input"}),"\n",(0,r.jsx)(g,{component:"Autocomplete"})]})}function q(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(U,{...e,children:(0,r.jsx)($,{...e})})}function X(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},89868:function(e,t,o){"use strict";o.d(t,{Z:function(){return r}});var r=(0,o(73681).Z)("outline","at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},76528:function(e,t,o){"use strict";o.d(t,{Mt:function(){return r},nW:function(){return n},pc:function(){return a}});let r=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],n=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],a=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]},75893:function(e,t,o){"use strict";o.d(t,{F:function(){return f}});var r=o(52322),n=o(2784),a=o(66178),l=o(9341),i=o(51477),c=o(38483),s=o(82027),d=o(29995),u=o(77606),p=o(61324),m=o(66958),h=o(56237),g=o(73063);let v={},f=(0,s.d5)((e,t)=>{let o=(0,c.w)("Autocomplete",v,e),{classNames:s,styles:f,unstyled:b,vars:x,dropdownOpened:y,defaultDropdownOpened:j,onDropdownClose:A,onDropdownOpen:w,onFocus:C,onBlur:P,onClick:V,onChange:S,data:D,value:k,defaultValue:R,selectFirstOptionOnChange:F,onOptionSubmit:O,comboboxProps:E,readOnly:Y,disabled:W,filter:_,limit:z,withScrollArea:T,maxDropdownHeight:B,size:I,id:Z,renderOption:M,autoComplete:G,scrollAreaProps:N,onClear:L,clearButtonProps:H,error:J,clearable:U,rightSection:$,...q}=o,X=(0,a.M)(Z),K=(0,d.R)(D),Q=(0,u.g)(K),[ee,et]=(0,l.C)({value:k,defaultValue:R,finalValue:"",onChange:S}),eo=(0,h.K)({opened:y,defaultOpened:j,onDropdownOpen:w,onDropdownClose:()=>{A?.(),eo.resetSelectedOption()}}),{resolvedClassNames:er,resolvedStyles:en}=(0,i.h)({props:o,styles:f,classNames:s});(0,n.useEffect)(()=>{F&&eo.selectFirstOption()},[F,ee]);let ea=(0,r.jsx)(p.h.ClearButton,{...H,onClear:()=>{et(""),L?.()}});return(0,r.jsxs)(p.h,{store:eo,__staticSelector:"Autocomplete",classNames:er,styles:en,unstyled:b,readOnly:Y,onOptionSubmit:e=>{O?.(e),et(Q[e].label),eo.closeDropdown()},size:I,...E,children:[(0,r.jsx)(p.h.Target,{autoComplete:G,children:(0,r.jsx)(g.M,{ref:t,...q,size:I,__staticSelector:"Autocomplete",__clearSection:ea,__clearable:U&&!!ee&&!W&&!Y,rightSection:$,disabled:W,readOnly:Y,value:ee,error:J,onChange:e=>{et(e.currentTarget.value),eo.openDropdown(),F&&eo.selectFirstOption()},onFocus:e=>{eo.openDropdown(),C?.(e)},onBlur:e=>{eo.closeDropdown(),P?.(e)},onClick:e=>{eo.openDropdown(),V?.(e)},classNames:er,styles:en,unstyled:b,id:X})}),(0,r.jsx)(m.r,{data:K,hidden:Y||W,filter:_,search:ee,limit:z,hiddenWhenEmpty:!0,withScrollArea:T,maxDropdownHeight:B,unstyled:b,labelId:q.label?`${X}-label`:void 0,"aria-label":q.label?void 0:q["aria-label"],renderOption:M,scrollAreaProps:N})]})});f.classes={...g.M.classes,...p.h.classes},f.displayName="@mantine/core/Autocomplete"},82067:function(e,t,o){"use strict";o.d(t,{q:function(){return A}});var r=o(52322),n=o(2784),a=o(91482),l=o(11200),i=o(38483),c=o(46690),s=o(28559),d=o(33502),u=o(82027);let p=(0,n.createContext)(null),m=p.Provider;var h={group:"m_11def92b",root:"m_f85678b6",image:"m_11f8ac07",placeholder:"m_104cd71f"};let g={},v=(0,l.Z)((e,{spacing:t})=>({group:{"--ag-spacing":(0,a.bG)(t)}})),f=(0,u.d5)((e,t)=>{let o=(0,i.w)("AvatarGroup",g,e),{classNames:n,className:a,style:l,styles:d,unstyled:u,vars:p,spacing:f,...b}=o,x=(0,c.y)({name:"AvatarGroup",classes:h,props:o,className:a,style:l,classNames:n,styles:d,unstyled:u,vars:p,varsResolver:v,rootSelector:"group"});return(0,r.jsx)(m,{value:!0,children:(0,r.jsx)(s.x,{ref:t,...x("group"),...b})})});function b(e){return(0,r.jsx)("svg",{...e,"data-avatar-placeholder-icon":!0,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}f.classes=h,f.displayName="@mantine/core/AvatarGroup";let x=["blue","cyan","grape","green","indigo","lime","orange","pink","red","teal","violet"],y={},j=(0,l.Z)((e,{size:t,radius:o,variant:r,gradient:n,color:l,autoContrast:i,name:c,allowedInitialsColors:s})=>{let d="initials"===l&&"string"==typeof c?function(e,t=x){let o=Math.abs(function(e){let t=0;for(let o=0;o<e.length;o+=1)t=(t<<5)-t+e.charCodeAt(o)|0;return t}(e))%t.length;return t[o]}(c,s):l,u=e.variantColorResolver({color:d||"gray",theme:e,gradient:n,variant:r||"light",autoContrast:i});return{root:{"--avatar-size":(0,a.ap)(t,"avatar-size"),"--avatar-radius":void 0===o?void 0:(0,a.H5)(o),"--avatar-bg":d||r?u.background:void 0,"--avatar-color":d||r?u.color:void 0,"--avatar-bd":d||r?u.border:void 0}}}),A=(0,d.b)((e,t)=>{let o=(0,i.w)("Avatar",y,e),{classNames:a,className:l,style:d,styles:u,unstyled:m,vars:g,src:v,alt:f,radius:x,color:A,gradient:w,imageProps:C,children:P,autoContrast:V,mod:S,name:D,allowedInitialsColors:k,...R}=o,F={withinGroup:!!(0,n.useContext)(p)},[O,E]=(0,n.useState)(!v),Y=(0,c.y)({name:"Avatar",props:o,classes:h,className:l,style:d,classNames:a,styles:u,unstyled:m,vars:g,varsResolver:j});return(0,n.useEffect)(()=>E(!v),[v]),(0,r.jsx)(s.x,{...Y("root"),mod:[{"within-group":F.withinGroup},S],ref:t,...R,children:O?(0,r.jsx)("span",{...Y("placeholder"),title:f,children:P||"string"==typeof D&&function(e,t=2){let o=e.split(" ");return 1===o.length?e.slice(0,t).toUpperCase():o.map(e=>e[0]).slice(0,t).join("").toUpperCase()}(D)||(0,r.jsx)(b,{})}):(0,r.jsx)("img",{...C,...Y("image"),src:v,alt:f,onError:e=>{E(!0),C?.onError?.(e)}})})});A.classes=h,A.displayName="@mantine/core/Avatar",A.Group=f},66958:function(e,t,o){"use strict";o.d(t,{r:function(){return u}});var r=o(52322),n=o(40489),a=o(40284),l=o(20135),i=o(61324),c=o(36186),s=o(61271);function d({data:e,withCheckIcon:t,value:o,checkIconPosition:l,unstyled:u,renderOption:p}){if(!(0,c.f)(e)){var m;let c=(m=e.value,Array.isArray(o)?o.includes(m):o===m),d=t&&c&&(0,r.jsx)(a.n,{className:s.Z.optionsDropdownCheckIcon}),h=(0,r.jsxs)(r.Fragment,{children:["left"===l&&d,(0,r.jsx)("span",{children:e.label}),"right"===l&&d]});return(0,r.jsx)(i.h.Option,{value:e.value,disabled:e.disabled,className:(0,n.Z)({[s.Z.optionsDropdownOption]:!u}),"data-reverse":"right"===l||void 0,"data-checked":c||void 0,"aria-selected":c,active:c,children:"function"==typeof p?p({option:e,checked:c}):h})}let h=e.items.map(e=>(0,r.jsx)(d,{data:e,value:o,unstyled:u,withCheckIcon:t,checkIconPosition:l,renderOption:p},e.value));return(0,r.jsx)(i.h.Group,{label:e.group,children:h})}function u({data:e,hidden:t,hiddenWhenEmpty:o,filter:n,search:a,limit:s,maxDropdownHeight:u,withScrollArea:p=!0,filterOptions:m=!0,withCheckIcon:h=!1,value:g,checkIconPosition:v,nothingFoundMessage:f,unstyled:b,labelId:x,renderOption:y,scrollAreaProps:j,"aria-label":A}){!function e(t,o=new Set){if(Array.isArray(t))for(let r of t)if((0,c.f)(r))e(r.items,o);else{if(void 0===r.value)throw Error("[@mantine/core] Each option must have value property");if("string"!=typeof r.value)throw Error(`[@mantine/core] Option value must be a string, other data formats are not supported, got ${typeof r.value}`);if(o.has(r.value))throw Error(`[@mantine/core] Duplicate options are not supported. Option with value "${r.value}" was provided more than once`);o.add(r.value)}}(e);let w="string"==typeof a?(n||function e({options:t,search:o,limit:r}){let n=o.trim().toLowerCase(),a=[];for(let l=0;l<t.length;l+=1){let i=t[l];if(a.length===r)break;(0,c.f)(i)&&a.push({group:i.group,items:e({options:i.items,search:o,limit:r-a.length})}),!(0,c.f)(i)&&i.label.toLowerCase().includes(n)&&a.push(i)}return a})({options:e,search:m?a:"",limit:s??1/0}):e,C=function(e){if(0===e.length)return!0;for(let t of e)if(!("group"in t)||t.items.length>0)return!1;return!0}(w),P=w.map(e=>(0,r.jsx)(d,{data:e,withCheckIcon:h,value:g,checkIconPosition:v,unstyled:b,renderOption:y},(0,c.f)(e)?e.group:e.value));return(0,r.jsx)(i.h.Dropdown,{hidden:t||o&&C,children:(0,r.jsxs)(i.h.Options,{labelledBy:x,"aria-label":A,children:[p?(0,r.jsx)(l.x.Autosize,{mah:u??220,type:"scroll",scrollbarSize:"var(--combobox-padding)",offsetScrollbars:"y",...j,children:P}):P,C&&f&&(0,r.jsx)(i.h.Empty,{children:f})]})})}},36186:function(e,t,o){"use strict";function r(e){return"group"in e}o.d(t,{f:function(){return r}})},77606:function(e,t,o){"use strict";o.d(t,{g:function(){return function e(t){return t.reduce((t,o)=>"group"in o?{...t,...e(o.items)}:(t[o.value]=o,t),{})}}})},3900:function(e,t,o){"use strict";o.d(t,{q:function(){return n}});var r=o(2784);function n(e=!1,t){let{onOpen:o,onClose:n}=t||{},[a,l]=(0,r.useState)(e),i=(0,r.useCallback)(()=>{l(e=>e||(o?.(),!0))},[o]),c=(0,r.useCallback)(()=>{l(e=>e?(n?.(),!1):e)},[n]),s=(0,r.useCallback)(()=>{a?c():i()},[c,i,a]);return[a,{open:i,close:c,toggle:s}]}}},function(e){e.O(0,[61177,66748,61639,61324,92888,49774,40179],function(){return e(e.s=59384)}),_N_E=e.O()}]);