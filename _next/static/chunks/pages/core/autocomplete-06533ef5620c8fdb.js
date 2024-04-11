(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[83478],{35661:function(e,t,o){"use strict";o.d(t,{Z:function(){return r}});var r=(0,o(99882).Z)("at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},59384:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/autocomplete",function(){return o(4316)}])},4316:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return eh}});var r=o(52322),n=o(45392),a=o(2784),l=o(75893);let i=`
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
`,c={type:"code",component:function(){return a.createElement(l.F,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"]})},code:i,maxWidth:340,centered:!0},d=`
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
`,s=({options:e,search:t})=>{let o=t.toLowerCase().trim().split(" ");return e.filter(e=>{let t=e.label.toLowerCase().trim().split(" ");return o.every(e=>t.some(t=>t.includes(e)))})},u={type:"code",component:function(){return a.createElement(l.F,{label:"Your country",placeholder:"Pick value or enter anything",data:["Great Britain","Russian Federation","United States"],filter:s})},code:d,maxWidth:340,centered:!0},p=`
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
`,m=({options:e,search:t})=>{let o=e.filter(e=>e.label.toLowerCase().trim().includes(t.toLowerCase().trim()));return o.sort((e,t)=>e.label.localeCompare(t.label)),o},h={type:"code",component:function(){return a.createElement(l.F,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["4 – React","1 – Angular","3 – Vue","2 – Svelte"],filter:m})},code:p,maxWidth:340,centered:!0},g=`
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
`,v=Array(1e5).fill(0).map((e,t)=>`Option ${t}`),f={type:"code",component:function(){return a.createElement(l.F,{label:"100 000 options autocomplete",placeholder:"Use limit to optimize performance",limit:5,data:v})},code:g,maxWidth:340,centered:!0};var b=o(93010),y=o(47100),Text=o(8582);let x=`
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
`,w={"Emily Johnson":{image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png",email:"emily92@gmail.com"},"Ava Rodriguez":{image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png",email:"ava_rose@gmail.com"},"Olivia Chen":{image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png",email:"livvy_globe@gmail.com"},"Ethan Barnes":{image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png",email:"ethan_explorer@gmail.com"},"Mason Taylor":{image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png",email:"mason_musician@gmail.com"}},A=({option:e})=>a.createElement(b.Z,{gap:"sm"},a.createElement(y.q,{src:w[e.value].image,size:36,radius:"xl"}),a.createElement("div",null,a.createElement(Text.x,{size:"sm"},e.value),a.createElement(Text.x,{size:"xs",opacity:.5},w[e.value].email))),E={type:"code",component:function(){return a.createElement(l.F,{data:["Emily Johnson","Ava Rodriguez","Olivia Chen","Ethan Barnes","Mason Taylor"],renderOption:A,maxDropdownHeight:300,label:"Employee of the month",placeholder:"Search for employee"})},code:x,centered:!0,maxWidth:340,defaultExpanded:!1},j=`
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
`,P=Array(100).fill(0).map((e,t)=>`Option ${t}`),C={type:"code",component:function(){return a.createElement(a.Fragment,null,a.createElement(l.F,{label:"With scroll area (default)",placeholder:"Pick value or enter anything",data:P,maxDropdownHeight:200}),a.createElement(l.F,{label:"With native scroll",placeholder:"Pick value or enter anything",data:P,withScrollArea:!1,styles:{dropdown:{maxHeight:200,overflowY:"auto"}},mt:"md"}))},code:j,maxWidth:340,centered:!0},V=`
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
`,S={type:"code",component:function(){return a.createElement(l.F,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:[{group:"Frontend",items:["React","Angular"]},{group:"Backend",items:["Express","Django"]}]})},code:V,maxWidth:340,centered:!0},k=`
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
`,D={type:"code",component:function(){return a.createElement(l.F,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:[{value:"React"},{value:"Angular"},{value:"Vue",disabled:!0},{value:"Svelte",disabled:!0}]})},code:k,maxWidth:340,centered:!0};var R=o(50205),F=o(17115);let O=`
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
`,Y={type:"code",code:O,centered:!0,component:function(){return a.createElement(R.J,{width:300,position:"bottom",withArrow:!0,shadow:"md"},a.createElement(R.J.Target,null,a.createElement(F.z,null,"Toggle popover")),a.createElement(R.J.Dropdown,null,a.createElement(l.F,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],comboboxProps:{withinPortal:!1}})))}};var W=o(3900);let _=`
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
`,z={type:"code",component:function(){let[e,{toggle:t}]=(0,W.q)();return a.createElement(a.Fragment,null,a.createElement(F.z,{onClick:t,mb:"md"},"Toggle dropdown"),a.createElement(l.F,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],dropdownOpened:e}))},code:_,maxWidth:340,centered:!0},I=`
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
`,B={type:"code",component:function(){return a.createElement(l.F,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],comboboxProps:{position:"top",middlewares:{flip:!1,shift:!1}}})},code:I,maxWidth:340,centered:!0},T=`
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
`,Z={type:"code",component:function(){return a.createElement(l.F,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],comboboxProps:{transitionProps:{transition:"pop",duration:200}}})},code:T,maxWidth:340,centered:!0},G=`
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
`,M={type:"code",component:function(){return a.createElement(a.Fragment,null,a.createElement(l.F,{label:"Zero padding",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],comboboxProps:{dropdownPadding:0}}),a.createElement(l.F,{mt:"md",label:"10px padding",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],comboboxProps:{dropdownPadding:10}}))},code:G,maxWidth:340,centered:!0},N=`
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
`,L={type:"code",component:function(){return a.createElement(l.F,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],comboboxProps:{shadow:"md"}})},code:N,maxWidth:340,centered:!0};var H=o(93323),J=o(58898);let $=`
import { Autocomplete, rem } from '@mantine/core';
import { IconComponents } from '@tabler/icons-react';

function Demo() {
  const icon = <IconComponents style={{ width: rem(16), height: rem(16) }} />;
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
`,U={type:"code",component:function(){let e=a.createElement(H.Z,{style:{width:(0,J.h)(16),height:(0,J.h)(16)}});return a.createElement(a.Fragment,null,a.createElement(l.F,{data:["React","Angular","Vue"],leftSectionPointerEvents:"none",leftSection:e,label:"Your favorite library",placeholder:"Your favorite library"}),a.createElement(l.F,{mt:"md",data:["React","Angular","Vue"],rightSectionPointerEvents:"none",rightSection:e,label:"Your favorite library",placeholder:"Your favorite library"}))},maxWidth:340,centered:!0,code:$};var q=o(76528);let X=`
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
`,K={type:"configurator",component:function(e){return a.createElement(l.F,{...e,placeholder:"Autocomplete placeholder",data:["React","Angular","Vue","Svelte"]})},code:X,centered:!0,maxWidth:340,controls:q.pc},Q=`
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
`,ee={type:"code",component:function(){return a.createElement(l.F,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],readOnly:!0})},code:Q,maxWidth:340,centered:!0},et=`
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
`,eo={type:"code",component:function(){return a.createElement(l.F,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],disabled:!0})},code:et,maxWidth:340,centered:!0},er=`
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
`,en={type:"code",component:function(){return a.createElement(a.Fragment,null,a.createElement(l.F,{label:"Boolean error",placeholder:"Boolean error",error:!0,data:["React","Angular","Vue","Svelte"]}),a.createElement(l.F,{mt:"md",label:"With error message",placeholder:"With error message",error:"Invalid name",data:["React","Angular","Vue","Svelte"]}))},maxWidth:340,centered:!0,code:er};var ea=o(35661),el=o(818);let ei=`
import { IconAt } from '@tabler/icons-react';
import { Autocomplete, rem } from '@mantine/core';

function Demo() {
  return (
    <Autocomplete
     {{props}}
      leftSection={<IconAt style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
      label="Autocomplete"
      description="Description"
      error="Error"
      placeholder="Autocomplete"
      data={['React', 'Angular']}
    />
  );
}
`,ec={...el.I};delete ec.selectors.empty;let ed={type:"styles-api",data:ec,component:function(e){return a.createElement(l.F,{...e,dropdownOpened:!0,leftSection:a.createElement(ea.Z,{style:{width:(0,J.h)(18),height:(0,J.h)(18)},stroke:1.5}),withAsterisk:!0,label:"Autocomplete",description:"Description",placeholder:"Autocomplete",data:[{group:"Frontend",items:["React","Angular"]},{group:"Backend",items:["Node","Django"]}]})},code:ei,centered:!0,maxWidth:340};var es=o(79016),eu=o(33638);let ep=(0,es.A)(eu.us.Autocomplete);function em(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...e.components},{ComboboxData:o,ComboboxDisclaimer:a,ComboboxFiltering:l,ComboboxLargeData:i,ComboboxProps:d,Demo:s,GetElementRef:p,InputAccessibility:m,InputFeatures:g,InputSections:v,StylesApiSelectors:b}=t;return o||eg("ComboboxData",!0),a||eg("ComboboxDisclaimer",!0),l||eg("ComboboxFiltering",!0),i||eg("ComboboxLargeData",!0),d||eg("ComboboxProps",!0),s||eg("Demo",!0),p||eg("GetElementRef",!0),m||eg("InputAccessibility",!0),g||eg("InputFeatures",!0),v||eg("InputSections",!0),b||eg("StylesApiSelectors",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a,{component:"Autocomplete"}),"\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Autocomplete"})," provides user a list of suggestions based on the input,\nhowever user is not limited to suggestions and can type anything."]}),"\n",(0,r.jsx)(s,{data:c}),"\n",(0,r.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Autocomplete"})," value must be a string, other types are not supported.\n",(0,r.jsx)(t.code,{children:"onChange"})," function is called with a string value as a single argument."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Autocomplete } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState('');\n  return <Autocomplete data={[]} value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,r.jsx)(o,{component:"Autocomplete"}),"\n",(0,r.jsx)(l,{component:"Autocomplete"}),"\n",(0,r.jsx)(s,{data:u}),"\n",(0,r.jsx)(t.h2,{id:"sort-options",children:"Sort options"}),"\n",(0,r.jsxs)(t.p,{children:["By default, options are sorted by their position in the data array. You can change this behavior\nwith ",(0,r.jsx)(t.code,{children:"filter"})," function:"]}),"\n",(0,r.jsx)(s,{data:h}),"\n",(0,r.jsx)(i,{component:"Autocomplete"}),"\n",(0,r.jsx)(s,{data:f}),"\n",(0,r.jsx)(t.h2,{id:"renderoption",children:"renderOption"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"renderOption"})," callback allows you to customize option rendering. It is called with option object.\nThe function must return a React node."]}),"\n",(0,r.jsx)(s,{data:E}),"\n",(0,r.jsx)(t.h2,{id:"scrollable-dropdown",children:"Scrollable dropdown"}),"\n",(0,r.jsxs)(t.p,{children:["By default, the options list is wrapped with ",(0,r.jsx)(t.a,{href:"/core/scroll-area",children:"ScrollArea.Autosize"}),".\nYou can control dropdown max-height with ",(0,r.jsx)(t.code,{children:"maxDropdownHeight"})," prop if you do not change the default settings."]}),"\n",(0,r.jsxs)(t.p,{children:["If you want to use native scrollbars, set ",(0,r.jsx)(t.code,{children:"withScrollArea={false}"}),". Note that in this case,\nyou will need to change dropdown styles with ",(0,r.jsx)(t.a,{href:"/styles/styles-api",children:"Styles API"}),"."]}),"\n",(0,r.jsx)(s,{data:C}),"\n",(0,r.jsx)(t.h2,{id:"group-options",children:"Group options"}),"\n",(0,r.jsx)(s,{data:S}),"\n",(0,r.jsx)(t.h2,{id:"disabled-options",children:"Disabled options"}),"\n",(0,r.jsx)(t.p,{children:"When option is disabled, it cannot be selected and is ignored in keyboard navigation."}),"\n",(0,r.jsx)(s,{data:D}),"\n",(0,r.jsx)(d,{component:"Autocomplete"}),"\n",(0,r.jsx)(t.h2,{id:"inside-popover",children:"Inside Popover"}),"\n",(0,r.jsxs)(t.p,{children:["To use ",(0,r.jsx)(t.code,{children:"Autocomplete"})," inside popover, you need to set ",(0,r.jsx)(t.code,{children:"withinPortal: false"}),":"]}),"\n",(0,r.jsx)(s,{data:Y}),"\n",(0,r.jsx)(t.h2,{id:"control-dropdown-opened-state",children:"Control dropdown opened state"}),"\n",(0,r.jsxs)(t.p,{children:["You can control dropdown opened state with ",(0,r.jsx)(t.code,{children:"dropdownOpened"})," prop. Additionally,\nyou can use ",(0,r.jsx)(t.code,{children:"onDropdownClose"})," and ",(0,r.jsx)(t.code,{children:"onDropdownOpen"})," to listen to dropdown opened state changes."]}),"\n",(0,r.jsx)(s,{data:z}),"\n",(0,r.jsx)(t.h2,{id:"dropdown-position",children:"Dropdown position"}),"\n",(0,r.jsxs)(t.p,{children:["By default, the dropdown is displayed below the input if there is enough space; otherwise it is displayed above the input.\nYou can change this behavior by setting ",(0,r.jsx)(t.code,{children:"position"})," and ",(0,r.jsx)(t.code,{children:"middlewares"})," props, which are passed down to the\nunderlying ",(0,r.jsx)(t.a,{href:"/core/popover",children:"Popover"})," component."]}),"\n",(0,r.jsx)(t.p,{children:"Example of dropdown that is always displayed above the input:"}),"\n",(0,r.jsx)(s,{data:B}),"\n",(0,r.jsx)(t.h2,{id:"dropdown-animation",children:"Dropdown animation"}),"\n",(0,r.jsxs)(t.p,{children:["By default, dropdown animations are disabled. To enable them, you can set ",(0,r.jsx)(t.code,{children:"transitionProps"}),",\nwhich will be passed down to the underlying ",(0,r.jsx)(t.a,{href:"/core/transition",children:"Transition"})," component."]}),"\n",(0,r.jsx)(s,{data:Z}),"\n",(0,r.jsx)(t.h2,{id:"dropdown-padding",children:"Dropdown padding"}),"\n",(0,r.jsx)(s,{data:M}),"\n",(0,r.jsx)(t.h2,{id:"dropdown-shadow",children:"Dropdown shadow"}),"\n",(0,r.jsx)(s,{data:L}),"\n",(0,r.jsx)(v,{component:"Autocomplete"}),"\n",(0,r.jsx)(s,{data:U}),"\n",(0,r.jsx)(t.h2,{id:"input-props",children:"Input props"}),"\n",(0,r.jsx)(g,{component:"Autocomplete",element:"input"}),"\n",(0,r.jsx)(s,{data:K}),"\n",(0,r.jsx)(t.h2,{id:"read-only",children:"Read only"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"readOnly"})," to make the input read only. When ",(0,r.jsx)(t.code,{children:"readOnly"})," is set,\n",(0,r.jsx)(t.code,{children:"Autocomplete"})," will not show suggestions and will not call ",(0,r.jsx)(t.code,{children:"onChange"})," function."]}),"\n",(0,r.jsx)(s,{data:ee}),"\n",(0,r.jsx)(t.h2,{id:"disabled",children:"Disabled"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"disabled"})," to disable the input. When ",(0,r.jsx)(t.code,{children:"disabled"})," is set,\nuser cannot interact with the input and ",(0,r.jsx)(t.code,{children:"Autocomplete"})," will not show suggestions."]}),"\n",(0,r.jsx)(s,{data:eo}),"\n",(0,r.jsx)(t.h2,{id:"error-state",children:"Error state"}),"\n",(0,r.jsx)(s,{data:en}),"\n",(0,r.jsx)(b,{component:"Autocomplete"}),"\n",(0,r.jsx)(s,{data:ed}),"\n",(0,r.jsx)(p,{component:"Autocomplete",refType:"input"}),"\n",(0,r.jsx)(m,{component:"Autocomplete"})]})}function eh(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(ep,{...e,children:(0,r.jsx)(em,{...e})})}function eg(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},76528:function(e,t,o){"use strict";o.d(t,{Mt:function(){return r},nW:function(){return n},pc:function(){return a}});let r=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],n=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],a=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]},75893:function(e,t,o){"use strict";o.d(t,{F:function(){return v}});var r=o(2784),n=o(66178),a=o(9341),l=o(51477),i=o(38483),c=o(82027),d=o(29995),s=o(77606),u=o(61324),p=o(66958),m=o(56237),h=o(73063);let g={},v=(0,c.d)((e,t)=>{let o=(0,i.w)("Autocomplete",g,e),{classNames:c,styles:v,unstyled:f,vars:b,dropdownOpened:y,defaultDropdownOpened:x,onDropdownClose:w,onDropdownOpen:A,onFocus:E,onBlur:j,onClick:P,onChange:C,data:V,value:S,defaultValue:k,selectFirstOptionOnChange:D,onOptionSubmit:R,comboboxProps:F,readOnly:O,disabled:Y,filter:W,limit:_,withScrollArea:z,maxDropdownHeight:I,size:B,id:T,renderOption:Z,autoComplete:G,scrollAreaProps:M,...N}=o,L=(0,n.M)(T),H=(0,d.R)(V),J=(0,s.g)(H),[$,U]=(0,a.C)({value:S,defaultValue:k,finalValue:"",onChange:C}),q=(0,m.K)({opened:y,defaultOpened:x,onDropdownOpen:A,onDropdownClose:()=>{w?.(),q.resetSelectedOption()}}),{resolvedClassNames:X,resolvedStyles:K}=(0,l.h)({props:o,styles:v,classNames:c});return(0,r.useEffect)(()=>{D&&q.selectFirstOption()},[D,$]),r.createElement(u.h,{store:q,__staticSelector:"Autocomplete",classNames:X,styles:K,unstyled:f,readOnly:O,onOptionSubmit:e=>{R?.(e),U(J[e].label),q.closeDropdown()},size:B,...F},r.createElement(u.h.Target,{autoComplete:G},r.createElement(h.M,{ref:t,...N,size:B,__staticSelector:"Autocomplete",disabled:Y,readOnly:O,value:$,onChange:e=>{U(e.currentTarget.value),q.openDropdown(),D&&q.selectFirstOption()},onFocus:e=>{q.openDropdown(),E?.(e)},onBlur:e=>{q.closeDropdown(),j?.(e)},onClick:e=>{q.openDropdown(),P?.(e)},classNames:X,styles:K,unstyled:f,id:L})),r.createElement(p.r,{data:H,hidden:O||Y,filter:W,search:$,limit:_,hiddenWhenEmpty:!0,withScrollArea:z,maxDropdownHeight:I,unstyled:f,labelId:`${L}-label`,renderOption:Z,scrollAreaProps:M}))});v.classes={...h.M.classes,...u.h.classes},v.displayName="@mantine/core/Autocomplete"},47100:function(e,t,o){"use strict";o.d(t,{q:function(){return x}});var r=o(2784),n=o(91482),a=o(11200),l=o(38483),i=o(62378),c=o(28559),d=o(33502),s=o(82027);let u=(0,r.createContext)(null),p=u.Provider;var m={group:"m_11def92b",root:"m_f85678b6",image:"m_11f8ac07",placeholder:"m_104cd71f"};let h={},g=(0,a.Z)((e,{spacing:t})=>({group:{"--ag-spacing":(0,n.bG)(t)}})),v=(0,s.d)((e,t)=>{let o=(0,l.w)("AvatarGroup",h,e),{classNames:n,className:a,style:d,styles:s,unstyled:u,vars:v,spacing:f,...b}=o,y=(0,i.y)({name:"AvatarGroup",classes:m,props:o,className:a,style:d,classNames:n,styles:s,unstyled:u,vars:v,varsResolver:g,rootSelector:"group"});return r.createElement(p,{value:!0},r.createElement(c.x,{ref:t,...y("group"),...b}))});function f(e){return r.createElement("svg",{...e,"data-avatar-placeholder-icon":!0,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}v.classes=m,v.displayName="@mantine/core/AvatarGroup";let b={},y=(0,a.Z)((e,{size:t,radius:o,variant:r,gradient:a,color:l,autoContrast:i})=>{let c=e.variantColorResolver({color:l||"gray",theme:e,gradient:a,variant:r||"light",autoContrast:i});return{root:{"--avatar-size":(0,n.ap)(t,"avatar-size"),"--avatar-radius":void 0===o?void 0:(0,n.H5)(o),"--avatar-bg":l||r?c.background:void 0,"--avatar-color":l||r?c.color:void 0,"--avatar-bd":l||r?c.border:void 0}}}),x=(0,d.b)((e,t)=>{let o=(0,l.w)("Avatar",b,e),{classNames:n,className:a,style:d,styles:s,unstyled:p,vars:h,src:g,alt:v,radius:x,color:w,gradient:A,imageProps:E,children:j,autoContrast:P,mod:C,...V}=o,S=function(){let e=(0,r.useContext)(u);return{withinGroup:!!e}}(),[k,D]=(0,r.useState)(!g),R=(0,i.y)({name:"Avatar",props:o,classes:m,className:a,style:d,classNames:n,styles:s,unstyled:p,vars:h,varsResolver:y});return(0,r.useEffect)(()=>D(!g),[g]),r.createElement(c.x,{...R("root"),mod:[{"within-group":S.withinGroup},C],ref:t,...V},k?r.createElement("span",{...R("placeholder"),title:v},j||r.createElement(f,null)):r.createElement("img",{...E,...R("image"),src:g,alt:v,onError:e=>{D(!0),E?.onError?.(e)}}))});x.classes=m,x.displayName="@mantine/core/Avatar",x.Group=v},66958:function(e,t,o){"use strict";o.d(t,{r:function(){return s}});var r=o(2784),n=o(40489),a=o(40284),l=o(40200),i=o(61324),c=o(36186),d=o(61271);function Option({data:e,withCheckIcon:t,value:o,checkIconPosition:l,unstyled:s,renderOption:u}){if(!(0,c.f)(e)){var p;let c=(p=e.value,Array.isArray(o)?o.includes(p):o===p),m=t&&c&&r.createElement(a.n,{className:d.Z.optionsDropdownCheckIcon}),h=r.createElement(r.Fragment,null,"left"===l&&m,r.createElement("span",null,e.label),"right"===l&&m);return r.createElement(i.h.Option,{value:e.value,disabled:e.disabled,className:(0,n.Z)({[d.Z.optionsDropdownOption]:!s}),"data-reverse":"right"===l||void 0,"data-checked":c||void 0,"aria-selected":c,active:c},"function"==typeof u?u({option:e,checked:c}):h)}let m=e.items.map(e=>r.createElement(Option,{data:e,value:o,key:e.value,unstyled:s,withCheckIcon:t,checkIconPosition:l,renderOption:u}));return r.createElement(i.h.Group,{label:e.group},m)}function s({data:e,hidden:t,hiddenWhenEmpty:o,filter:n,search:a,limit:d,maxDropdownHeight:s,withScrollArea:u=!0,filterOptions:p=!0,withCheckIcon:m=!1,value:h,checkIconPosition:g,nothingFoundMessage:v,unstyled:f,labelId:b,renderOption:y,scrollAreaProps:x}){!function e(t,o=new Set){if(Array.isArray(t))for(let r of t)if((0,c.f)(r))e(r.items,o);else{if(void 0===r.value)throw Error("[@mantine/core] Each option must have value property");if("string"!=typeof r.value)throw Error(`[@mantine/core] Option value must be a string, other data formats are not supported, got ${typeof r.value}`);if(o.has(r.value))throw Error(`[@mantine/core] Duplicate options are not supported. Option with value "${r.value}" was provided more than once`);o.add(r.value)}}(e);let w="string"==typeof a,A=w?(n||function e({options:t,search:o,limit:r}){let n=o.trim().toLowerCase(),a=[];for(let l=0;l<t.length;l+=1){let i=t[l];if(a.length===r)break;(0,c.f)(i)&&a.push({group:i.group,items:e({options:i.items,search:o,limit:r-a.length})}),!(0,c.f)(i)&&i.label.toLowerCase().includes(n)&&a.push(i)}return a})({options:e,search:p?a:"",limit:d??1/0}):e,E=function(e){if(0===e.length)return!0;for(let t of e)if(!("group"in t)||t.items.length>0)return!1;return!0}(A),j=A.map(e=>r.createElement(Option,{data:e,key:(0,c.f)(e)?e.group:e.value,withCheckIcon:m,value:h,checkIconPosition:g,unstyled:f,renderOption:y}));return r.createElement(i.h.Dropdown,{hidden:t||o&&E},r.createElement(i.h.Options,{labelledBy:b},u?r.createElement(l.x.Autosize,{mah:s??220,type:"scroll",scrollbarSize:"var(--combobox-padding)",offsetScrollbars:"y",...x},j):j,E&&v&&r.createElement(i.h.Empty,null,v)))}},36186:function(e,t,o){"use strict";function r(e){return"group"in e}o.d(t,{f:function(){return r}})},77606:function(e,t,o){"use strict";o.d(t,{g:function(){return function e(t){return t.reduce((t,o)=>"group"in o?{...t,...e(o.items)}:(t[o.value]=o,t),{})}}})},3900:function(e,t,o){"use strict";o.d(t,{q:function(){return n}});var r=o(2784);function n(e=!1,t){let{onOpen:o,onClose:n}=t||{},[a,l]=(0,r.useState)(e),i=(0,r.useCallback)(()=>{l(e=>e||(o?.(),!0))},[o]),c=(0,r.useCallback)(()=>{l(e=>e?(n?.(),!1):e)},[n]),d=(0,r.useCallback)(()=>{a?c():i()},[c,i,a]);return[a,{open:i,close:c,toggle:d}]}}},function(e){e.O(0,[57938,17454,47747,61324,49774,92888,40179],function(){return e(e.s=59384)}),_N_E=e.O()}]);