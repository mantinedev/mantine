(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,721043,e=>{"use strict";var t=e.i(391398),o=e.i(38856),n=e.i(648863),a=e.i(845734);let r={type:"code",component:function(){return(0,t.jsx)(a.Autocomplete,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"]})},code:`
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
`,maxWidth:340,centered:!0},l={type:"code",component:function(){return(0,t.jsx)(a.Autocomplete,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],readOnly:!0})},code:`
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
`,maxWidth:340,centered:!0},i={type:"code",component:function(){return(0,t.jsx)(a.Autocomplete,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],disabled:!0})},code:`
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
`,maxWidth:340,centered:!0},c={type:"configurator",component:function(e){return(0,t.jsx)(a.Autocomplete,{...e,placeholder:"Autocomplete placeholder",data:["React","Angular","Vue","Svelte"]})},code:`
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
`,centered:!0,maxWidth:340,controls:e.i(960831).inputControls},d={type:"code",component:function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.Autocomplete,{label:"Boolean error",placeholder:"Boolean error",error:!0,data:["React","Angular","Vue","Svelte"]}),(0,t.jsx)(a.Autocomplete,{mt:"md",label:"With error message",placeholder:"With error message",error:"Invalid name",data:["React","Angular","Vue","Svelte"]})]})},maxWidth:340,centered:!0,code:`
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
`},s={type:"code",component:function(){return(0,t.jsx)(a.Autocomplete,{label:"Autocomplete",placeholder:"Autocomplete",data:["React","Angular","Vue","Svelte"],success:"Looks good!"})},code:`
import { Autocomplete } from '@mantine/core';

function Demo() {
  return <Autocomplete label="Autocomplete" placeholder="Autocomplete" data={['React', 'Angular', 'Vue', 'Svelte']} success="Looks good!" />;
}
`,maxWidth:340,centered:!0},u=({options:e,search:t})=>{let o=e.filter(e=>e.label.toLowerCase().trim().includes(t.toLowerCase().trim()));return o.sort((e,t)=>e.label.localeCompare(t.label)),o},p={type:"code",component:function(){return(0,t.jsx)(a.Autocomplete,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["4 – React","1 – Angular","3 – Vue","2 – Svelte"],filter:u})},code:`
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
      data={['4 – React', '1 – Angular', '3 – Vue', '2 – Svelte']}
      filter={optionsFilter}
    />
  );
}
`,maxWidth:340,centered:!0},m=({options:e,search:t})=>{let o=t.toLowerCase().trim().split(" ");return e.filter(e=>{let t=e.label.toLowerCase().trim().split(" ");return o.every(e=>t.some(t=>t.includes(e)))})},h={type:"code",component:function(){return(0,t.jsx)(a.Autocomplete,{label:"Your country",placeholder:"Pick value or enter anything",data:["Great Britain","Russian Federation","United States"],filter:m})},code:`
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
`,maxWidth:340,centered:!0},g=`
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
`,x=Array(1e5).fill(0).map((e,t)=>`Option ${t}`),f={type:"code",component:function(){return(0,t.jsx)(a.Autocomplete,{label:"100 000 options autocomplete",placeholder:"Use limit to optimize performance",limit:5,data:x})},code:g,maxWidth:340,centered:!0},v=`
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
`,b=Array(100).fill(0).map((e,t)=>`Option ${t}`),A={type:"code",component:function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.Autocomplete,{label:"With scroll area (default)",placeholder:"Pick value or enter anything",data:b,maxDropdownHeight:200}),(0,t.jsx)(a.Autocomplete,{label:"With native scroll",placeholder:"Pick value or enter anything",data:b,withScrollArea:!1,styles:{dropdown:{maxHeight:200,overflowY:"auto"}},mt:"md"})]})},code:v,maxWidth:340,centered:!0};var j=e.i(123895),y=e.i(766895);let w=`
import { AtIcon } from '@phosphor-icons/react';
import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <Autocomplete
     {{props}}
      leftSection={<AtIcon size={18} />}
      label="Autocomplete"
      description="Description"
      error="Error"
      placeholder="Autocomplete"
      data={['React', 'Angular']}
    />
  );
}
`,S={...y.AutocompleteStylesApi};delete S.selectors.empty;let P={type:"styles-api",data:S,component:function(e){return(0,t.jsx)(a.Autocomplete,{...e,dropdownOpened:!0,leftSection:(0,t.jsx)(j.AtIcon,{size:18}),withAsterisk:!0,label:"Autocomplete",description:"Description",placeholder:"Autocomplete",comboboxProps:{hideDetached:!1},data:[{group:"Frontend",items:["React","Angular"]},{group:"Backend",items:["Node","Django"]}]})},code:w,centered:!0,maxWidth:340},D={type:"code",component:function(){return(0,t.jsx)(a.Autocomplete,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:[{group:"Frontend",items:["React","Angular"]},{group:"Backend",items:["Express","Django"]}]})},code:`
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
`,maxWidth:340,centered:!0},k={type:"code",component:function(){return(0,t.jsx)(a.Autocomplete,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:[{value:"React"},{value:"Angular"},{value:"Vue",disabled:!0},{value:"Svelte",disabled:!0}]})},code:`
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
`,maxWidth:340,centered:!0};var R=e.i(293907);let V={type:"code",component:function(){let e=(0,t.jsx)(R.SquaresFourIcon,{size:16});return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.Autocomplete,{data:["React","Angular","Vue"],leftSectionPointerEvents:"none",leftSection:e,label:"Your favorite library",placeholder:"Your favorite library"}),(0,t.jsx)(a.Autocomplete,{mt:"md",data:["React","Angular","Vue"],rightSectionPointerEvents:"none",rightSection:e,label:"Your favorite library",placeholder:"Your favorite library"})]})},maxWidth:340,centered:!0,code:`
import { Autocomplete } from '@mantine/core';
import { SquaresFourIcon } from '@phosphor-icons/react';

function Demo() {
  const icon = <SquaresFourIcon size={16} />;
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
`};var O=e.i(485108),C=e.i(541772);let T={type:"code",component:function(){let[e,{toggle:o}]=(0,C.useDisclosure)();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(O.Button,{onClick:o,mb:"md",children:"Toggle dropdown"}),(0,t.jsx)(a.Autocomplete,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],dropdownOpened:e})]})},code:`
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
`,maxWidth:340,centered:!0},Y={type:"code",component:function(){return(0,t.jsx)(a.Autocomplete,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],comboboxProps:{position:"top",middlewares:{flip:!1,shift:!1}}})},code:`
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
`,maxWidth:340,centered:!0},F={type:"code",component:function(){return(0,t.jsx)(a.Autocomplete,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],comboboxProps:{transitionProps:{transition:"pop",duration:200}}})},code:`
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
`,maxWidth:340,centered:!0},W={type:"code",component:function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.Autocomplete,{label:"Zero padding",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],comboboxProps:{dropdownPadding:0}}),(0,t.jsx)(a.Autocomplete,{mt:"md",label:"10px padding",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],comboboxProps:{dropdownPadding:10}})]})},code:`
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
`,maxWidth:340,centered:!0},z={type:"code",component:function(){return(0,t.jsx)(a.Autocomplete,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],comboboxProps:{shadow:"md"}})},code:`
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
`,maxWidth:340,centered:!0};var B=e.i(392862);let I={type:"code",code:`
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
`,centered:!0,component:function(){return(0,t.jsxs)(B.Popover,{width:300,position:"bottom",withArrow:!0,shadow:"md",children:[(0,t.jsx)(B.Popover.Target,{children:(0,t.jsx)(O.Button,{children:"Toggle popover"})}),(0,t.jsx)(B.Popover.Dropdown,{children:(0,t.jsx)(a.Autocomplete,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],comboboxProps:{withinPortal:!1}})})]})}};var E=e.i(141806),M=e.i(725695),_=e.i(883364);let L={"Emily Johnson":{image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png",email:"emily92@gmail.com"},"Ava Rodriguez":{image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png",email:"ava_rose@gmail.com"},"Olivia Chen":{image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png",email:"livvy_globe@gmail.com"},"Ethan Barnes":{image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png",email:"ethan_explorer@gmail.com"},"Mason Taylor":{image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png",email:"mason_musician@gmail.com"}},H=({option:e})=>(0,t.jsxs)(M.Group,{gap:"sm",children:[(0,t.jsx)(E.Avatar,{src:L[e.value].image,size:36,radius:"xl"}),(0,t.jsxs)("div",{children:[(0,t.jsx)(_.Text,{size:"sm",children:e.value}),(0,t.jsx)(_.Text,{size:"xs",opacity:.5,children:L[e.value].email})]})]}),U={type:"code",component:function(){return(0,t.jsx)(a.Autocomplete,{data:["Emily Johnson","Ava Rodriguez","Olivia Chen","Ethan Barnes","Mason Taylor"],renderOption:H,maxDropdownHeight:300,label:"Employee of the month",placeholder:"Search for employee"})},code:`
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
`,centered:!0,maxWidth:340,defaultExpanded:!1},N={type:"code",component:function(){return(0,t.jsx)(a.Autocomplete,{clearable:!0,defaultValue:"React",data:["React","Angular"],label:"Clearable autocomplete",placeholder:"Clearable autocomplete"})},code:`
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
`,maxWidth:340,centered:!0};var G=e.i(931882),$=e.i(671640);let q={type:"code",component:function(){return(0,t.jsxs)($.Stack,{children:[(0,t.jsx)(a.Autocomplete,{label:"clearSectionMode='both' (default)",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],defaultValue:"React",clearable:!0,rightSection:(0,t.jsx)(G.CaretDownIcon,{size:16}),clearSectionMode:"both"}),(0,t.jsx)(a.Autocomplete,{label:"clearSectionMode='rightSection'",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],defaultValue:"React",clearable:!0,rightSection:(0,t.jsx)(G.CaretDownIcon,{size:16}),clearSectionMode:"rightSection"}),(0,t.jsx)(a.Autocomplete,{label:"clearSectionMode='clear'",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],defaultValue:"React",clearable:!0,rightSection:(0,t.jsx)(G.CaretDownIcon,{size:16}),clearSectionMode:"clear"})]})},code:`
import { CaretDownIcon } from '@phosphor-icons/react';
import { Autocomplete, Stack } from '@mantine/core';

function Demo() {
  return (
    <Stack>
      <Autocomplete
        label="clearSectionMode='both' (default)"
        placeholder="Pick value"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        defaultValue="React"
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="both"
      />

      <Autocomplete
        label="clearSectionMode='rightSection'"
        placeholder="Pick value"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        defaultValue="React"
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="rightSection"
      />

      <Autocomplete
        label="clearSectionMode='clear'"
        placeholder="Pick value"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        defaultValue="React"
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="clear"
      />
    </Stack>
  );
}
`,maxWidth:340,centered:!0},X={type:"code",component:function(){return(0,t.jsx)(a.Autocomplete,{label:"Your favorite library",placeholder:"Pick value or enter anything",selectFirstOptionOnChange:!0,data:["React","Angular","Vue","Svelte"]})},code:`
import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <Autocomplete
      label="Your favorite library"
      placeholder="Pick value or enter anything"
      selectFirstOptionOnChange
      data={['React', 'Angular', 'Vue', 'Svelte']}
    />
  );
}
`,maxWidth:340,centered:!0},J={type:"code",component:function(){return(0,t.jsx)(a.Autocomplete,{label:"Your favorite library",placeholder:"Pick value or enter anything",autoSelectOnBlur:!0,data:["React","Angular","Vue","Svelte"]})},code:`
import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <Autocomplete
      label="Your favorite library"
      placeholder="Pick value or enter anything"
      autoSelectOnBlur
      data={['React', 'Angular', 'Vue', 'Svelte']}
    />
  );
}
`,maxWidth:340,centered:!0};var K=e.i(280130);let Z=({options:e,search:t})=>t.trim()?new K.default(e,{keys:["label"],threshold:.3,minMatchCharLength:1}).search(t).map(e=>e.item):e,Q={type:"code",component:function(){return(0,t.jsx)(a.Autocomplete,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte","Ember"],filter:Z})},code:`
import { Autocomplete, ComboboxItem, OptionsFilter } from '@mantine/core';
import Fuse from 'fuse.js';

const optionsFilter: OptionsFilter = ({ options, search }) => {
  if (!search.trim()) {
    return options;
  }

  const fuse = new Fuse(options as ComboboxItem[], {
    keys: ['label'],
    threshold: 0.3,
    minMatchCharLength: 1,
  });

  return fuse.search(search).map((result) => result.item);
};

function Demo() {
  return (
    <Autocomplete
      label="Your favorite library"
      placeholder="Pick value or enter anything"
      data={['React', 'Angular', 'Vue', 'Svelte', 'Ember']}
      filter={optionsFilter}
    />
  );
}
`,maxWidth:340,centered:!0},ee={type:"code",component:function(){return(0,t.jsx)(a.Autocomplete,{placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],loading:!0})},code:`
import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <Autocomplete
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      loading
    />
  );
}
`,centered:!0,maxWidth:340},et=`
import { Autocomplete } from '@mantine/core';

const data = Array(100)
  .fill(0)
  .map((_, index) => \`Option \${index}\`);

function Demo() {
  return (
    <Autocomplete
      label="Fits viewport height"
      placeholder="Pick value"
      data={data}
      floatingHeight="viewport"
    />
  );
}
`,eo=Array(100).fill(0).map((e,t)=>`Option ${t}`),en={type:"code",component:function(){return(0,t.jsx)(a.Autocomplete,{label:"Fits viewport height",placeholder:"Pick value",data:eo,floatingHeight:"viewport"})},code:et,maxWidth:340,centered:!0};var ea=(0,n.__exportAll)({autoSelectOnBlur:()=>J,clearSectionMode:()=>q,clearable:()=>N,configurator:()=>c,disabled:()=>i,disabledOptions:()=>k,dropdownAnimation:()=>F,dropdownOpened:()=>T,dropdownPadding:()=>W,dropdownPosition:()=>Y,dropdownShadow:()=>z,error:()=>d,floatingHeight:()=>en,fuzzySearch:()=>Q,groups:()=>D,limit:()=>f,loading:()=>ee,readOnly:()=>l,renderOption:()=>U,scrollArea:()=>A,search:()=>h,sections:()=>V,selectFirstOptionOnChange:()=>X,sort:()=>p,stylesApi:()=>P,success:()=>s,usage:()=>r,withinPopover:()=>I});e.i(603441);var er=e.i(62558);e.i(457450);var el=e.i(418026);let ei=(0,er.Layout)(el.MDX_DATA.Autocomplete);function ec(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.useMDXComponents)(),...e.components},{ClearSectionMode:a,ComboboxData:r,ComboboxDisclaimer:l,ComboboxFiltering:i,ComboboxLargeData:c,ComboboxProps:d,Demo:s,GetElementRef:u,InputAccessibility:p,InputFeatures:m,InputSections:h,StylesApiSelectors:g}=n;return a||ed("ClearSectionMode",!0),r||ed("ComboboxData",!0),l||ed("ComboboxDisclaimer",!0),i||ed("ComboboxFiltering",!0),c||ed("ComboboxLargeData",!0),d||ed("ComboboxProps",!0),s||ed("Demo",!0),u||ed("GetElementRef",!0),p||ed("InputAccessibility",!0),m||ed("InputFeatures",!0),h||ed("InputSections",!0),g||ed("StylesApiSelectors",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l,{component:"Autocomplete"}),"\n",(0,t.jsx)(n.h2,{id:"not-a-searchable-select",children:"Not a searchable select"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Autocomplete"})," is not a searchable select, it is a text input with suggestions.\nValues are not enforced to be one of the suggestions – users can type anything.\nIf you need a searchable select, use the ",(0,t.jsx)(n.a,{href:"/core/select",children:"Select"})," component instead.\nTo learn more about the differences between ",(0,t.jsx)(n.code,{children:"Autocomplete"})," and ",(0,t.jsx)(n.code,{children:"Select"}),", check the\n",(0,t.jsx)(n.a,{href:"https://help.mantine.dev/q/select-autocomplete-difference",children:"help center article"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Autocomplete"})," provides users with a list of suggestions based on the input,\nhowever users are not limited to suggestions and can type anything."]}),"\n",(0,t.jsx)(s,{data:ea.usage}),"\n",(0,t.jsx)(n.h2,{id:"loading-state",children:"Loading state"}),"\n",(0,t.jsxs)(n.p,{children:["Set ",(0,t.jsx)(n.code,{children:"loading"})," prop to display a loading indicator. By default, the loader is displayed on the right side of the input.\nYou can change the position with the ",(0,t.jsx)(n.code,{children:"loadingPosition"})," prop to ",(0,t.jsx)(n.code,{children:"'left'"})," or ",(0,t.jsx)(n.code,{children:"'right'"}),". This is useful for async operations like API calls, searches, or validations:"]}),"\n",(0,t.jsx)(s,{data:ea.loading}),"\n",(0,t.jsx)(n.h2,{id:"controlled",children:"Controlled"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"Autocomplete"})," value must be a string; other types are not supported.\nThe ",(0,t.jsx)(n.code,{children:"onChange"})," function is called with a string value as a single argument."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Autocomplete } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState('');\n  return <Autocomplete data={[]} value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"uncontrolled",children:"Uncontrolled"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Autocomplete"})," can be used with uncontrolled forms the same way as a native ",(0,t.jsx)(n.code,{children:"input"})," element.\nSet the ",(0,t.jsx)(n.code,{children:"name"})," attribute to include autocomplete value in ",(0,t.jsx)(n.code,{children:"FormData"})," object on form submission.\nTo control the initial value in uncontrolled forms, use the ",(0,t.jsx)(n.code,{children:"defaultValue"})," prop."]}),"\n",(0,t.jsxs)(n.p,{children:["Example usage of uncontrolled ",(0,t.jsx)(n.code,{children:"Autocomplete"})," with ",(0,t.jsx)(n.code,{children:"FormData"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { Autocomplete } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <form\n      onSubmit={(event) => {\n        event.preventDefault();\n        const formData = new FormData(event.currentTarget);\n        console.log('Autocomplete value:', formData.get('country'));\n      }}\n    >\n      <Autocomplete\n        label=\"Select your country\"\n        placeholder=\"Pick one\"\n        name=\"country\"\n        data={['United States', 'Canada', 'Mexico']}\n        defaultValue=\"United States\"\n      />\n      <button type=\"submit\">Submit</button>\n    </form>\n  );\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"select-first-option-on-change",children:"Select first option on change"}),"\n",(0,t.jsxs)(n.p,{children:["Set the ",(0,t.jsx)(n.code,{children:"selectFirstOptionOnChange"})," prop to automatically select the first option in the dropdown when the input value changes.\nThis feature allows users to type a value and immediately press ",(0,t.jsx)(n.code,{children:"Enter"})," to select the first matching option,\nwithout needing to press the arrow down key first."]}),"\n",(0,t.jsx)(s,{data:ea.selectFirstOptionOnChange}),"\n",(0,t.jsx)(n.h2,{id:"autoselectonblur",children:"autoSelectOnBlur"}),"\n",(0,t.jsxs)(n.p,{children:["Set the ",(0,t.jsx)(n.code,{children:"autoSelectOnBlur"})," prop to automatically select the highlighted option when the input loses focus.\nTo see this feature in action: select an option with the up/down arrows, then click outside the input:"]}),"\n",(0,t.jsx)(s,{data:ea.autoSelectOnBlur}),"\n",(0,t.jsx)(r,{component:"Autocomplete"}),"\n",(0,t.jsx)(i,{component:"Autocomplete"}),"\n",(0,t.jsx)(s,{data:ea.search}),"\n",(0,t.jsx)(n.h2,{id:"sort-options",children:"Sort options"}),"\n",(0,t.jsxs)(n.p,{children:["By default, options are sorted by their position in the data array. You can change this behavior\nwith the ",(0,t.jsx)(n.code,{children:"filter"})," function:"]}),"\n",(0,t.jsx)(s,{data:ea.sort}),"\n",(0,t.jsx)(n.h2,{id:"fuzzy-search-with-fusejs",children:"Fuzzy search with fuse.js"}),"\n",(0,t.jsxs)(n.p,{children:["You can implement fuzzy search using the ",(0,t.jsx)(n.a,{href:"https://fusejs.io/",children:"fuse.js"})," library to match options\neven with typos or partial matches:"]}),"\n",(0,t.jsx)(s,{data:ea.fuzzySearch}),"\n",(0,t.jsx)(c,{component:"Autocomplete"}),"\n",(0,t.jsx)(s,{data:ea.limit}),"\n",(0,t.jsx)(n.h2,{id:"renderoption",children:"renderOption"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"renderOption"})," callback allows you to customize option rendering. It is called with an option object.\nThe function must return a React node."]}),"\n",(0,t.jsx)(s,{data:ea.renderOption}),"\n",(0,t.jsx)(n.h2,{id:"nothing-found-message",children:"Nothing found message"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"Autocomplete"})," component does not support a nothing found message. It is designed to\naccept any string as a value, so it does not make sense to show a nothing found message.\nIf you want to limit user input to suggestions, you can use a searchable ",(0,t.jsx)(n.a,{href:"/core/select",children:"Select"}),"\ncomponent instead. To learn more about the differences between ",(0,t.jsx)(n.code,{children:"Autocomplete"})," and ",(0,t.jsx)(n.code,{children:"Select"}),", check the\n",(0,t.jsx)(n.a,{href:"https://help.mantine.dev/q/select-autocomplete-difference",children:"help center article"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"scrollable-dropdown",children:"Scrollable dropdown"}),"\n",(0,t.jsxs)(n.p,{children:["By default, the options list is wrapped with ",(0,t.jsx)(n.a,{href:"/core/scroll-area",children:"ScrollArea.Autosize"}),".\nYou can control the dropdown max-height with the ",(0,t.jsx)(n.code,{children:"maxDropdownHeight"})," prop if you do not change the default settings."]}),"\n",(0,t.jsxs)(n.p,{children:["If you want to use native scrollbars, set ",(0,t.jsx)(n.code,{children:"withScrollArea={false}"}),". Note that in this case,\nyou will need to change the dropdown styles with ",(0,t.jsx)(n.a,{href:"/styles/styles-api",children:"Styles API"}),"."]}),"\n",(0,t.jsx)(s,{data:ea.scrollArea}),"\n",(0,t.jsx)(n.h2,{id:"fit-dropdown-to-viewport-height",children:"Fit dropdown to viewport height"}),"\n",(0,t.jsxs)(n.p,{children:["Set ",(0,t.jsx)(n.code,{children:'floatingHeight="viewport"'})," to make the dropdown grow to fill the available vertical\nspace in the viewport. The ",(0,t.jsx)(n.code,{children:"flip"})," middleware is disabled in this mode – the dropdown\nalways opens in the configured direction and is constrained to the viewport edges instead\nof flipping to the other side. Useful when working with large option lists:"]}),"\n",(0,t.jsx)(s,{data:ea.floatingHeight}),"\n",(0,t.jsx)(n.h2,{id:"group-options",children:"Group options"}),"\n",(0,t.jsx)(s,{data:ea.groups}),"\n",(0,t.jsx)(n.h2,{id:"disabled-options",children:"Disabled options"}),"\n",(0,t.jsx)(n.p,{children:"When an option is disabled, it cannot be selected and is ignored in keyboard navigation."}),"\n",(0,t.jsx)(s,{data:ea.disabledOptions}),"\n",(0,t.jsx)(d,{component:"Autocomplete"}),"\n",(0,t.jsx)(n.h2,{id:"inside-popover",children:"Inside Popover"}),"\n",(0,t.jsxs)(n.p,{children:["To use ",(0,t.jsx)(n.code,{children:"Autocomplete"})," inside popover, you need to set ",(0,t.jsx)(n.code,{children:"withinPortal: false"}),":"]}),"\n",(0,t.jsx)(s,{data:ea.withinPopover}),"\n",(0,t.jsx)(n.h2,{id:"clearable",children:"Clearable"}),"\n",(0,t.jsxs)(n.p,{children:["Set the ",(0,t.jsx)(n.code,{children:"clearable"})," prop to display the clear button in the right section. The button is not displayed\nwhen:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The component does not have a value"}),"\n",(0,t.jsx)(n.li,{children:"The component is disabled"}),"\n",(0,t.jsx)(n.li,{children:"The component is read only"}),"\n"]}),"\n",(0,t.jsx)(s,{data:ea.clearable}),"\n",(0,t.jsx)(a,{}),"\n",(0,t.jsx)(s,{data:ea.clearSectionMode}),"\n",(0,t.jsx)(n.h2,{id:"control-dropdown-opened-state",children:"Control dropdown opened state"}),"\n",(0,t.jsxs)(n.p,{children:["You can control the dropdown opened state with the ",(0,t.jsx)(n.code,{children:"dropdownOpened"})," prop. Additionally,\nyou can use ",(0,t.jsx)(n.code,{children:"onDropdownClose"})," and ",(0,t.jsx)(n.code,{children:"onDropdownOpen"})," to listen to dropdown opened state changes."]}),"\n",(0,t.jsx)(s,{data:ea.dropdownOpened}),"\n",(0,t.jsx)(n.h2,{id:"dropdown-position",children:"Dropdown position"}),"\n",(0,t.jsxs)(n.p,{children:["By default, the dropdown is displayed below the input if there is enough space; otherwise it is displayed above the input.\nYou can change this behavior by setting the ",(0,t.jsx)(n.code,{children:"position"})," and ",(0,t.jsx)(n.code,{children:"middlewares"})," props, which are passed down to the\nunderlying ",(0,t.jsx)(n.a,{href:"/core/popover",children:"Popover"})," component."]}),"\n",(0,t.jsx)(n.p,{children:"Example of dropdown that is always displayed above the input:"}),"\n",(0,t.jsx)(s,{data:ea.dropdownPosition}),"\n",(0,t.jsx)(n.h2,{id:"dropdown-animation",children:"Dropdown animation"}),"\n",(0,t.jsxs)(n.p,{children:["By default, dropdown animations are disabled. To enable them, you can set ",(0,t.jsx)(n.code,{children:"transitionProps"}),",\nwhich will be passed down to the underlying ",(0,t.jsx)(n.a,{href:"/core/transition",children:"Transition"})," component."]}),"\n",(0,t.jsx)(s,{data:ea.dropdownAnimation}),"\n",(0,t.jsx)(n.h2,{id:"dropdown-padding",children:"Dropdown padding"}),"\n",(0,t.jsx)(s,{data:ea.dropdownPadding}),"\n",(0,t.jsx)(n.h2,{id:"dropdown-shadow",children:"Dropdown shadow"}),"\n",(0,t.jsx)(s,{data:ea.dropdownShadow}),"\n",(0,t.jsx)(h,{component:"Autocomplete"}),"\n",(0,t.jsx)(s,{data:ea.sections}),"\n",(0,t.jsx)(n.h2,{id:"input-props",children:"Input props"}),"\n",(0,t.jsx)(m,{component:"Autocomplete",element:"input"}),"\n",(0,t.jsx)(s,{data:ea.configurator}),"\n",(0,t.jsx)(n.h2,{id:"read-only",children:"Read only"}),"\n",(0,t.jsxs)(n.p,{children:["Set ",(0,t.jsx)(n.code,{children:"readOnly"})," to make the input read only. When ",(0,t.jsx)(n.code,{children:"readOnly"})," is set,\n",(0,t.jsx)(n.code,{children:"Autocomplete"})," will not show suggestions and will not call the ",(0,t.jsx)(n.code,{children:"onChange"})," function."]}),"\n",(0,t.jsx)(s,{data:ea.readOnly}),"\n",(0,t.jsx)(n.h2,{id:"disabled",children:"Disabled"}),"\n",(0,t.jsxs)(n.p,{children:["Set ",(0,t.jsx)(n.code,{children:"disabled"})," to disable the input. When ",(0,t.jsx)(n.code,{children:"disabled"})," is set,\nusers cannot interact with the input and ",(0,t.jsx)(n.code,{children:"Autocomplete"})," will not show suggestions."]}),"\n",(0,t.jsx)(s,{data:ea.disabled}),"\n",(0,t.jsx)(n.h2,{id:"error-state",children:"Error state"}),"\n",(0,t.jsx)(s,{data:ea.error}),"\n",(0,t.jsx)(n.h2,{id:"success-state",children:"Success state"}),"\n",(0,t.jsx)(s,{data:ea.success}),"\n",(0,t.jsx)(g,{component:"Autocomplete"}),"\n",(0,t.jsx)(s,{data:ea.stylesApi}),"\n",(0,t.jsx)(u,{component:"Autocomplete",refType:"input"}),"\n",(0,t.jsx)(p,{component:"Autocomplete"})]})}function ed(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}e.s(["default",0,function(e={}){return(0,t.jsx)(ei,{...e,children:(0,t.jsx)(ec,{...e})})}],721043)},243073,(e,t,o)=>{let n="/core/autocomplete";(window.__NEXT_P=window.__NEXT_P||[]).push([n,()=>e.r(721043)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([n])})}]);