(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[59353],{35661:function(e,t,a){"use strict";a.d(t,{Z:function(){return o}});var o=(0,a(99882).Z)("at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},92020:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/multi-select",function(){return a(43445)}])},43445:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return eE}});var o=a(52322),n=a(45392),r=a(2784),l=a(8511);let i=`
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
`,c={type:"code",component:function(){return r.createElement(l.N,{label:"Your favorite libraries",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"]})},code:i,maxWidth:340,centered:!0},d=`
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
`,s={type:"code",component:function(){return r.createElement(l.N,{label:"Your favorite libraries",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],defaultValue:["React"],clearable:!0})},code:d,maxWidth:340,centered:!0},u=`
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
`,p={type:"code",component:function(){return r.createElement(l.N,{label:"Your favorite libraries",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],searchable:!0})},code:u,maxWidth:340,centered:!0},m=`
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
`,h={type:"code",component:function(){return r.createElement(l.N,{label:"Your favorite libraries",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],searchable:!0,nothingFoundMessage:"Nothing found..."})},code:m,maxWidth:340,centered:!0},b=`
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
`,v={type:"configurator",component:function(e){return r.createElement(l.N,{...e,data:["React","Angular","Svelte","Vue"],dropdownOpened:!0,pb:150,label:"Control check icon",placeholder:"Pick value",defaultValue:["React"]})},code:b,centered:!0,maxWidth:340,controls:[{type:"boolean",prop:"withCheckIcon",initialValue:!0,libraryValue:!0},{type:"segmented",prop:"checkIconPosition",initialValue:"left",libraryValue:null,data:["left","right"]}]},f=`
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
`,g={type:"code",component:function(){return r.createElement(l.N,{label:"Your favorite libraries",placeholder:"Select up to 2 libraries",data:["React","Angular","Vue","Svelte"],maxValues:2})},code:f,maxWidth:340,centered:!0},x=`
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
`,S={type:"code",component:function(){return r.createElement(l.N,{label:"Your favorite libraries",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],hidePickedOptions:!0})},code:x,maxWidth:340,centered:!0},y=`
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
`,w=({options:e,search:t})=>{let a=t.toLowerCase().trim().split(" ");return e.filter(e=>{let t=e.label.toLowerCase().trim().split(" ");return a.every(e=>t.some(t=>t.includes(e)))})},j={type:"code",component:function(){return r.createElement(l.N,{label:"What countries have you visited?",placeholder:"Pick values",data:["Great Britain","Russian Federation","United States"],filter:w,searchable:!0})},code:y,maxWidth:340,centered:!0},M=`
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
`,V=({options:e,search:t})=>{let a=e.filter(e=>e.label.toLowerCase().trim().includes(t.toLowerCase().trim()));return a.sort((e,t)=>e.label.localeCompare(t.label)),a},P={type:"code",component:function(){return r.createElement(l.N,{label:"Your favorite libraries",placeholder:"Pick values",data:["4 – React","1 – Angular","3 – Vue","2 – Svelte"],filter:V,searchable:!0})},code:M,maxWidth:340,centered:!0},k=`
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
`,A=Array(1e5).fill(0).map((e,t)=>`Option ${t}`),E={type:"code",component:function(){return r.createElement(l.N,{label:"100 000 options autocomplete",placeholder:"Use limit to optimize performance",limit:5,data:A,searchable:!0})},code:k,maxWidth:340,centered:!0};var R=a(93010),D=a(47100),Text=a(8582);let N=`
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
`,Y={"Emily Johnson":{image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png",email:"emily92@gmail.com"},"Ava Rodriguez":{image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png",email:"ava_rose@gmail.com"},"Olivia Chen":{image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png",email:"livvy_globe@gmail.com"},"Ethan Barnes":{image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png",email:"ethan_explorer@gmail.com"},"Mason Taylor":{image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png",email:"mason_musician@gmail.com"}},C=({option:e})=>r.createElement(R.Z,{gap:"sm"},r.createElement(D.q,{src:Y[e.value].image,size:36,radius:"xl"}),r.createElement("div",null,r.createElement(Text.x,{size:"sm"},e.value),r.createElement(Text.x,{size:"xs",opacity:.5},Y[e.value].email))),W={type:"code",component:function(){return r.createElement(l.N,{data:["Emily Johnson","Ava Rodriguez","Olivia Chen","Ethan Barnes","Mason Taylor"],renderOption:C,maxDropdownHeight:300,label:"Employees of the month",placeholder:"Search for employee",hidePickedOptions:!0,searchable:!0})},code:N,centered:!0,maxWidth:340,defaultExpanded:!1},O=`
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
`,T=Array(100).fill(0).map((e,t)=>`Option ${t}`),I={type:"code",component:function(){return r.createElement(r.Fragment,null,r.createElement(l.N,{label:"With scroll area (default)",placeholder:"Pick value",data:T,maxDropdownHeight:200}),r.createElement(l.N,{label:"With native scroll",placeholder:"Pick value",data:T,withScrollArea:!1,styles:{dropdown:{maxHeight:200,overflowY:"auto"}},mt:"md"}))},code:O,maxWidth:340,centered:!0},B=`
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
`,F={type:"code",component:function(){return r.createElement(l.N,{label:"Your favorite libraries",placeholder:"Pick value",data:[{group:"Frontend",items:["React","Angular"]},{group:"Backend",items:["Express","Django"]}]})},code:B,maxWidth:340,centered:!0},_=`
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
`,z={type:"code",component:function(){return r.createElement(l.N,{label:"Your favorite libraries",placeholder:"Pick value",data:[{value:"react",label:"React"},{value:"ng",label:"Angular"},{value:"vue",label:"Vue",disabled:!0},{value:"svelte",label:"Svelte",disabled:!0}]})},code:_,maxWidth:340,centered:!0};var L=a(50205),H=a(17115);let q=`
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
`,G={type:"code",code:q,centered:!0,component:function(){return r.createElement(L.J,{width:300,position:"bottom",withArrow:!0,shadow:"md"},r.createElement(L.J.Target,null,r.createElement(H.z,null,"Toggle popover")),r.createElement(L.J.Dropdown,null,r.createElement(l.N,{label:"Your favorite libraries",placeholder:"Pick values",data:["React","Angular","Vue","Svelte"],comboboxProps:{withinPortal:!1}})))}};var J=a(3900);let Z=`
import { MultiSelect, Button } from '@mantine/core';

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
`,U={type:"code",component:function(){let[e,{toggle:t}]=(0,J.q)();return r.createElement(r.Fragment,null,r.createElement(H.z,{onClick:t,mb:"md"},"Toggle dropdown"),r.createElement(l.N,{label:"Your favorite library",placeholder:"Pick values",data:["React","Angular","Vue","Svelte"],dropdownOpened:e}))},code:Z,maxWidth:340,centered:!0},$=`
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
`,X={type:"code",component:function(){return r.createElement(l.N,{label:"Your favorite libraries",placeholder:"Pick values",data:["React","Angular","Vue","Svelte"],comboboxProps:{position:"top",middlewares:{flip:!1,shift:!1}}})},code:$,maxWidth:340,centered:!0};var K={dropdown:"m_a9824888",input:"m_f5487eb3"};let Q=`.dropdown {
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
`,ee=`
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
`,et={type:"code",component:function(){return r.createElement(l.N,{label:"Your favorite library",placeholder:"Pick values",data:["React","Angular","Vue","Svelte"],classNames:K,comboboxProps:{position:"bottom",middlewares:{flip:!1,shift:!1},offset:0}})},code:[{fileName:"Demo.tsx",code:ee,language:"tsx"},{fileName:"Demo.module.css",code:Q,language:"scss"}],maxWidth:340,centered:!0},ea=`
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
`,eo={type:"code",component:function(){return r.createElement(l.N,{label:"Your favorite libraries",placeholder:"Pick values",data:["React","Angular","Vue","Svelte"],comboboxProps:{transitionProps:{transition:"pop",duration:200}}})},code:ea,maxWidth:340,centered:!0},en=`
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
`,er={type:"code",component:function(){return r.createElement(r.Fragment,null,r.createElement(l.N,{label:"Zero padding",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],comboboxProps:{dropdownPadding:0}}),r.createElement(l.N,{mt:"md",label:"10px padding",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],comboboxProps:{dropdownPadding:10}}))},code:en,maxWidth:340,centered:!0},el=`
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
`,ei={type:"code",component:function(){return r.createElement(l.N,{label:"Your favorite libraries",placeholder:"Pick values",data:["React","Angular","Vue","Svelte"],comboboxProps:{shadow:"md"}})},code:el,maxWidth:340,centered:!0};var ec=a(93323),ed=a(58898);let es=`
import { MultiSelect, rem } from '@mantine/core';
import { IconComponents } from '@tabler/icons-react';

function Demo() {
  const icon = <IconComponents style={{ width: rem(16), height: rem(16) }} />;
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
`,eu={type:"code",component:function(){let e=r.createElement(ec.Z,{style:{width:(0,ed.h)(16),height:(0,ed.h)(16)}});return r.createElement(r.Fragment,null,r.createElement(l.N,{data:["React","Angular","Vue"],leftSectionPointerEvents:"none",leftSection:e,label:"Your favorite libraries",placeholder:"Your favorite libraries"}),r.createElement(l.N,{mt:"md",data:["React","Angular","Vue"],rightSectionPointerEvents:"none",rightSection:e,label:"Your favorite libraries",placeholder:"Your favorite libraries"}))},maxWidth:340,centered:!0,code:es};var ep=a(76528);let em=`
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
`,eh={type:"configurator",component:function(e){return r.createElement(l.N,{...e,placeholder:"MultiSelect placeholder",data:["React","Angular","Vue","Svelte"]})},code:em,centered:!0,maxWidth:340,controls:ep.pc},eb=`
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
`,ev={type:"code",component:function(){return r.createElement(l.N,{label:"Your favorite libraries",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],readOnly:!0})},code:eb,maxWidth:340,centered:!0},ef=`
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
`,eg={type:"code",component:function(){return r.createElement(l.N,{label:"Your favorite libraries",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],disabled:!0})},code:ef,maxWidth:340,centered:!0},ex=`
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
`,eS={type:"code",component:function(){return r.createElement(r.Fragment,null,r.createElement(l.N,{label:"Boolean error",placeholder:"Boolean error",error:!0,data:["React","Angular","Vue","Svelte"]}),r.createElement(l.N,{mt:"md",label:"With error message",placeholder:"With error message",error:"Invalid name",data:["React","Angular","Vue","Svelte"]}))},maxWidth:340,centered:!0,code:ex};var ey=a(35661),ew=a(26999);let ej=`
import { IconAt } from '@tabler/icons-react';
import { MultiSelect, rem } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
     {{props}}
      leftSection={<IconAt style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
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
`,eM={type:"styles-api",data:ew.L,component:function(e){return r.createElement(l.N,{...e,dropdownOpened:!0,leftSection:r.createElement(ey.Z,{style:{width:(0,ed.h)(18),height:(0,ed.h)(18)},stroke:1.5}),withAsterisk:!0,label:"MultiSelect",description:"Description",placeholder:"MultiSelect",defaultValue:["React","Angular"],data:[{group:"Frontend",items:["React","Angular"]},{group:"Backend",items:["Node","Django"]}]})},code:ej,centered:!0,maxWidth:340};var eV=a(79016),eP=a(33638);let ek=(0,eV.A)(eP.us.MultiSelect);function eA(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.a)(),...e.components},{ComboboxData:a,ComboboxDisclaimer:r,ComboboxFiltering:l,ComboboxLargeData:i,ComboboxProps:d,Demo:u,GetElementRef:m,InputAccessibility:b,InputFeatures:f,InputSections:x,StylesApiSelectors:y}=t;return a||eR("ComboboxData",!0),r||eR("ComboboxDisclaimer",!0),l||eR("ComboboxFiltering",!0),i||eR("ComboboxLargeData",!0),d||eR("ComboboxProps",!0),u||eR("Demo",!0),m||eR("GetElementRef",!0),b||eR("InputAccessibility",!0),f||eR("InputFeatures",!0),x||eR("InputSections",!0),y||eR("StylesApiSelectors",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r,{component:"MultiSelect"}),"\n",(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"MultiSelect"})," provides a way to enter multiple values.\n",(0,o.jsx)(t.code,{children:"MultiSelect"})," is similar to ",(0,o.jsx)(t.a,{href:"/core/tags-input",children:"TagsInput"}),", but it does not allow entering custom values."]}),"\n",(0,o.jsx)(u,{data:c}),"\n",(0,o.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"MultiSelect"})," value must be an array of strings, other types are not supported.\n",(0,o.jsx)(t.code,{children:"onChange"})," function is called with an array of strings as a single argument."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { MultiSelect } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState<string[]>([]);\n  return <MultiSelect data={[]} value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"clearable",children:"Clearable"}),"\n",(0,o.jsxs)(t.p,{children:["Set ",(0,o.jsx)(t.code,{children:"clearable"})," prop to display the clear button in the right section. The button is not displayed\nwhen:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"The component does not have a value"}),"\n",(0,o.jsx)(t.li,{children:"The component is disabled"}),"\n",(0,o.jsx)(t.li,{children:"The component is read only"}),"\n"]}),"\n",(0,o.jsx)(u,{data:s}),"\n",(0,o.jsx)(t.h2,{id:"searchable",children:"Searchable"}),"\n",(0,o.jsxs)(t.p,{children:["Set ",(0,o.jsx)(t.code,{children:"searchable"})," prop to allow filtering options by user input:"]}),"\n",(0,o.jsx)(u,{data:p}),"\n",(0,o.jsx)(t.h2,{id:"controlled-search-value",children:"Controlled search value"}),"\n",(0,o.jsxs)(t.p,{children:["You can control search value with ",(0,o.jsx)(t.code,{children:"searchValue"})," and ",(0,o.jsx)(t.code,{children:"onSearchChange"})," props:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { MultiSelect } from '@mantine/core';\n\nfunction Demo() {\n  const [searchValue, setSearchValue] = useState('');\n  return (\n    <MultiSelect\n      searchable\n      searchValue={searchValue}\n      onSearchChange={setSearchValue}\n      data={[]}\n    />\n  );\n}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"nothing-found",children:"Nothing found"}),"\n",(0,o.jsxs)(t.p,{children:["Set ",(0,o.jsx)(t.code,{children:"nothingFoundMessage"})," prop to display given message when no options match search query.\nIf ",(0,o.jsx)(t.code,{children:"nothingFoundMessage"})," is not set, ",(0,o.jsx)(t.code,{children:"MultiSelect"})," dropdown will be hidden when no options match search query.\nThe message is not displayed when trimmed search query is empty."]}),"\n",(0,o.jsx)(u,{data:h}),"\n",(0,o.jsx)(t.h2,{id:"checked-option-icon",children:"Checked option icon"}),"\n",(0,o.jsxs)(t.p,{children:["Set ",(0,o.jsx)(t.code,{children:"checkIconPosition"})," prop to ",(0,o.jsx)(t.code,{children:"left"})," or ",(0,o.jsx)(t.code,{children:"right"})," to control position of check icon in active option.\nTo remove the check icon, set ",(0,o.jsx)(t.code,{children:"withCheckIcon={false}"}),"."]}),"\n",(0,o.jsx)(u,{data:v}),"\n",(0,o.jsx)(t.h2,{id:"max-selected-values",children:"Max selected values"}),"\n",(0,o.jsxs)(t.p,{children:["You can limit the number of selected values with ",(0,o.jsx)(t.code,{children:"maxValues"})," prop. This will not allow adding more values\nonce the limit is reached."]}),"\n",(0,o.jsx)(u,{data:g}),"\n",(0,o.jsx)(t.h2,{id:"hide-selected-options",children:"Hide selected options"}),"\n",(0,o.jsxs)(t.p,{children:["To remove selected options from the list of available options, set ",(0,o.jsx)(t.code,{children:"hidePickedOptions"})," prop:"]}),"\n",(0,o.jsx)(u,{data:S}),"\n",(0,o.jsx)(a,{component:"MultiSelect"}),"\n",(0,o.jsx)(l,{component:"MultiSelect"}),"\n",(0,o.jsx)(u,{data:j}),"\n",(0,o.jsx)(t.h2,{id:"sort-options",children:"Sort options"}),"\n",(0,o.jsxs)(t.p,{children:["By default, options are sorted by their position in the data array. You can change this behavior\nwith ",(0,o.jsx)(t.code,{children:"filter"})," function:"]}),"\n",(0,o.jsx)(u,{data:P}),"\n",(0,o.jsx)(i,{component:"MultiSelect"}),"\n",(0,o.jsx)(u,{data:E}),"\n",(0,o.jsx)(t.h2,{id:"renderoption",children:"renderOption"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"renderOption"})," callback allows you to customize option rendering. It is called with option object and\nchecked state. The function must return a React node."]}),"\n",(0,o.jsx)(u,{data:W}),"\n",(0,o.jsx)(t.h2,{id:"scrollable-dropdown",children:"Scrollable dropdown"}),"\n",(0,o.jsxs)(t.p,{children:["By default, the options list is wrapped with ",(0,o.jsx)(t.a,{href:"/core/scroll-area",children:"ScrollArea.Autosize"}),".\nYou can control dropdown max-height with ",(0,o.jsx)(t.code,{children:"maxDropdownHeight"})," prop if you do not change the default settings."]}),"\n",(0,o.jsxs)(t.p,{children:["If you want to use native scrollbars, set ",(0,o.jsx)(t.code,{children:"withScrollArea={false}"}),". Note that in this case,\nyou will need to change dropdown styles with ",(0,o.jsx)(t.a,{href:"/styles/styles-api",children:"Styles API"}),"."]}),"\n",(0,o.jsx)(u,{data:I}),"\n",(0,o.jsx)(t.h2,{id:"group-options",children:"Group options"}),"\n",(0,o.jsx)(u,{data:F}),"\n",(0,o.jsx)(t.h2,{id:"disabled-options",children:"Disabled options"}),"\n",(0,o.jsxs)(t.p,{children:["When option is disabled, it cannot be selected and is ignored in keyboard navigation.\nNote that user can still enter disabled option as a value. If you want to prohibit certain values,\nuse controlled component and filter them out in ",(0,o.jsx)(t.code,{children:"onChange"})," function."]}),"\n",(0,o.jsx)(u,{data:z}),"\n",(0,o.jsx)(d,{component:"MultiSelect"}),"\n",(0,o.jsx)(t.h2,{id:"inside-popover",children:"Inside Popover"}),"\n",(0,o.jsxs)(t.p,{children:["To use ",(0,o.jsx)(t.code,{children:"MultiSelect"})," inside popover, you need to set ",(0,o.jsx)(t.code,{children:"withinPortal: false"}),":"]}),"\n",(0,o.jsx)(u,{data:G}),"\n",(0,o.jsx)(t.h2,{id:"control-dropdown-opened-state",children:"Control dropdown opened state"}),"\n",(0,o.jsxs)(t.p,{children:["You can control dropdown opened state with ",(0,o.jsx)(t.code,{children:"dropdownOpened"})," prop. Additionally,\nyou can use ",(0,o.jsx)(t.code,{children:"onDropdownClose"})," and ",(0,o.jsx)(t.code,{children:"onDropdownOpen"})," to listen to dropdown opened state changes."]}),"\n",(0,o.jsx)(u,{data:U}),"\n",(0,o.jsx)(t.h2,{id:"dropdown-position",children:"Dropdown position"}),"\n",(0,o.jsxs)(t.p,{children:["By default, the dropdown is displayed below the input if there is enough space; otherwise it is displayed above the input.\nYou can change this behavior by setting ",(0,o.jsx)(t.code,{children:"position"})," and ",(0,o.jsx)(t.code,{children:"middlewares"})," props, which are passed down to the\nunderlying ",(0,o.jsx)(t.a,{href:"/core/popover",children:"Popover"})," component."]}),"\n",(0,o.jsx)(t.p,{children:"Example of dropdown that is always displayed above the input:"}),"\n",(0,o.jsx)(u,{data:X}),"\n",(0,o.jsx)(t.h2,{id:"dropdown-offset",children:"Dropdown offset"}),"\n",(0,o.jsxs)(t.p,{children:["To change dropdown offset, set ",(0,o.jsx)(t.code,{children:"offset"})," prop in ",(0,o.jsx)(t.code,{children:"comboboxProps"}),":"]}),"\n",(0,o.jsx)(u,{data:et}),"\n",(0,o.jsx)(t.h2,{id:"dropdown-animation",children:"Dropdown animation"}),"\n",(0,o.jsxs)(t.p,{children:["By default, dropdown animations are disabled. To enable them, you can set ",(0,o.jsx)(t.code,{children:"transitionProps"}),",\nwhich will be passed down to the underlying ",(0,o.jsx)(t.a,{href:"/core/transition",children:"Transition"})," component."]}),"\n",(0,o.jsx)(u,{data:eo}),"\n",(0,o.jsx)(t.h2,{id:"dropdown-padding",children:"Dropdown padding"}),"\n",(0,o.jsx)(u,{data:er}),"\n",(0,o.jsx)(t.h2,{id:"dropdown-shadow",children:"Dropdown shadow"}),"\n",(0,o.jsx)(u,{data:ei}),"\n",(0,o.jsx)(x,{component:"MultiSelect"}),"\n",(0,o.jsx)(u,{data:eu}),"\n",(0,o.jsx)(t.h2,{id:"input-props",children:"Input props"}),"\n",(0,o.jsx)(f,{component:"MultiSelect",element:"input"}),"\n",(0,o.jsx)(u,{data:eh}),"\n",(0,o.jsx)(t.h2,{id:"read-only",children:"Read only"}),"\n",(0,o.jsxs)(t.p,{children:["Set ",(0,o.jsx)(t.code,{children:"readOnly"})," to make the input read only. When ",(0,o.jsx)(t.code,{children:"readOnly"})," is set,\n",(0,o.jsx)(t.code,{children:"MultiSelect"})," will not show suggestions and will not call ",(0,o.jsx)(t.code,{children:"onChange"})," function."]}),"\n",(0,o.jsx)(u,{data:ev}),"\n",(0,o.jsx)(t.h2,{id:"disabled",children:"Disabled"}),"\n",(0,o.jsxs)(t.p,{children:["Set ",(0,o.jsx)(t.code,{children:"disabled"})," to disable the input. When ",(0,o.jsx)(t.code,{children:"disabled"})," is set,\nuser cannot interact with the input and ",(0,o.jsx)(t.code,{children:"MultiSelect"})," will not show suggestions."]}),"\n",(0,o.jsx)(u,{data:eg}),"\n",(0,o.jsx)(t.h2,{id:"error-state",children:"Error state"}),"\n",(0,o.jsx)(u,{data:eS}),"\n",(0,o.jsx)(y,{component:"MultiSelect"}),"\n",(0,o.jsx)(u,{data:eM}),"\n",(0,o.jsx)(m,{component:"MultiSelect",refType:"input"}),"\n",(0,o.jsx)(b,{component:"MultiSelect"}),"\n",(0,o.jsxs)(t.p,{children:["To set ",(0,o.jsx)(t.code,{children:"aria-label"})," on the clear button, use ",(0,o.jsx)(t.code,{children:"clearButtonProps"}),". Note that it is required\nonly when ",(0,o.jsx)(t.code,{children:"clearable"})," is set."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { MultiSelect } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <MultiSelect\n      data={[]}\n      clearable\n      clearButtonProps={{\n        'aria-label': 'Clear input',\n      }}\n    />\n  );\n}\n"})})]})}function eE(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(ek,{...e,children:(0,o.jsx)(eA,{...e})})}function eR(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},76528:function(e,t,a){"use strict";a.d(t,{Mt:function(){return o},nW:function(){return n},pc:function(){return r}});let o=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],n=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],r=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]},3900:function(e,t,a){"use strict";a.d(t,{q:function(){return n}});var o=a(2784);function n(e=!1,t){let{onOpen:a,onClose:n}=t||{},[r,l]=(0,o.useState)(e),i=(0,o.useCallback)(()=>{l(e=>e||(a?.(),!0))},[a]),c=(0,o.useCallback)(()=>{l(e=>e?(n?.(),!1):e)},[n]),d=(0,o.useCallback)(()=>{r?c():i()},[c,i,r]);return[r,{open:i,close:c,toggle:d}]}}},function(e){e.O(0,[57938,17454,47747,61324,7854,49774,92888,40179],function(){return e(e.s=92020)}),_N_E=e.O()}]);