(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[46476],{56189:(e,t,o)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/autocomplete",function(){return o(86676)}])},86676:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>ed});var a=o(31085),r=o(71184),n=o(14041),l=o(97567),i=o(82307),s=o(36456),d=o(29686),c=o(6754),p=o(46395),u=o(35213),m=o(31791),h=o(65567),v=o(88559),g=o(87059);let y={},b=(0,c.P9)((e,t)=>{let o=(0,d.Y)("Autocomplete",y,e),{classNames:r,styles:c,unstyled:b,vars:x,dropdownOpened:f,defaultDropdownOpened:A,onDropdownClose:j,onDropdownOpen:w,onFocus:k,onBlur:C,onClick:P,onChange:V,data:S,value:D,defaultValue:R,selectFirstOptionOnChange:M,onOptionSubmit:O,comboboxProps:Y,readOnly:E,disabled:I,filter:z,limit:_,withScrollArea:W,maxDropdownHeight:T,size:B,id:F,renderOption:G,autoComplete:N,scrollAreaProps:L,onClear:$,clearButtonProps:Z,error:H,clearable:U,rightSection:J,...X}=o,Q=(0,l.B)(F),q=(0,p.d)(S),K=(0,u.D)(q),[ee,et]=(0,i.Z)({value:D,defaultValue:R,finalValue:"",onChange:V}),eo=(0,v.B)({opened:f,defaultOpened:A,onDropdownOpen:w,onDropdownClose:()=>{j?.(),eo.resetSelectedOption()}}),ea=e=>{et(e),eo.resetSelectedOption()},{resolvedClassNames:er,resolvedStyles:en}=(0,s.Y)({props:o,styles:c,classNames:r});(0,n.useEffect)(()=>{M&&eo.selectFirstOption()},[M,ee]);let el=(0,a.jsx)(m.G.ClearButton,{...Z,onClear:()=>{ea(""),$?.()}});return(0,a.jsxs)(m.G,{store:eo,__staticSelector:"Autocomplete",classNames:er,styles:en,unstyled:b,readOnly:E,onOptionSubmit:e=>{O?.(e),ea(K[e].label),eo.closeDropdown()},size:B,...Y,children:[(0,a.jsx)(m.G.Target,{autoComplete:N,children:(0,a.jsx)(g.O,{ref:t,...X,size:B,__staticSelector:"Autocomplete",__clearSection:el,__clearable:U&&!!ee&&!I&&!E,rightSection:J,disabled:I,readOnly:E,value:ee,error:H,onChange:e=>{ea(e.currentTarget.value),eo.openDropdown(),M&&eo.selectFirstOption()},onFocus:e=>{eo.openDropdown(),k?.(e)},onBlur:e=>{eo.closeDropdown(),C?.(e)},onClick:e=>{eo.openDropdown(),P?.(e)},classNames:er,styles:en,unstyled:b,id:Q})}),(0,a.jsx)(h.i,{data:q,hidden:E||I,filter:z,search:ee,limit:_,hiddenWhenEmpty:!0,withScrollArea:W,maxDropdownHeight:T,unstyled:b,labelId:X.label?`${Q}-label`:void 0,"aria-label":X.label?void 0:X["aria-label"],renderOption:G,scrollAreaProps:L})]})});b.classes={...g.O.classes,...m.G.classes},b.displayName="@mantine/core/Autocomplete";let x={type:"code",component:function(){return(0,a.jsx)(b,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"]})},code:`
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
`,maxWidth:340,centered:!0},f=({options:e,search:t})=>{let o=t.toLowerCase().trim().split(" ");return e.filter(e=>{let t=e.label.toLowerCase().trim().split(" ");return o.every(e=>t.some(t=>t.includes(e)))})},A={type:"code",component:function(){return(0,a.jsx)(b,{label:"Your country",placeholder:"Pick value or enter anything",data:["Great Britain","Russian Federation","United States"],filter:f})},code:`
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
`,maxWidth:340,centered:!0},j=({options:e,search:t})=>{let o=e.filter(e=>e.label.toLowerCase().trim().includes(t.toLowerCase().trim()));return o.sort((e,t)=>e.label.localeCompare(t.label)),o},w={type:"code",component:function(){return(0,a.jsx)(b,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["4 – React","1 – Angular","3 – Vue","2 – Svelte"],filter:j})},code:`
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
`,maxWidth:340,centered:!0},k=`
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
`,C=Array(1e5).fill(0).map((e,t)=>`Option ${t}`),P={type:"code",component:function(){return(0,a.jsx)(b,{label:"100 000 options autocomplete",placeholder:"Use limit to optimize performance",limit:5,data:C})},code:k,maxWidth:340,centered:!0};var V=o(56051),S=o(86658),D=o(93065);let R={"Emily Johnson":{image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png",email:"emily92@gmail.com"},"Ava Rodriguez":{image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png",email:"ava_rose@gmail.com"},"Olivia Chen":{image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png",email:"livvy_globe@gmail.com"},"Ethan Barnes":{image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png",email:"ethan_explorer@gmail.com"},"Mason Taylor":{image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png",email:"mason_musician@gmail.com"}},M=({option:e})=>(0,a.jsxs)(V.Y,{gap:"sm",children:[(0,a.jsx)(S.e,{src:R[e.value].image,size:36,radius:"xl"}),(0,a.jsxs)("div",{children:[(0,a.jsx)(D.E,{size:"sm",children:e.value}),(0,a.jsx)(D.E,{size:"xs",opacity:.5,children:R[e.value].email})]})]}),O={type:"code",component:function(){return(0,a.jsx)(b,{data:["Emily Johnson","Ava Rodriguez","Olivia Chen","Ethan Barnes","Mason Taylor"],renderOption:M,maxDropdownHeight:300,label:"Employee of the month",placeholder:"Search for employee"})},code:`
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
`,centered:!0,maxWidth:340,defaultExpanded:!1},Y=`
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
`,E=Array(100).fill(0).map((e,t)=>`Option ${t}`),I={type:"code",component:function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(b,{label:"With scroll area (default)",placeholder:"Pick value or enter anything",data:E,maxDropdownHeight:200}),(0,a.jsx)(b,{label:"With native scroll",placeholder:"Pick value or enter anything",data:E,withScrollArea:!1,styles:{dropdown:{maxHeight:200,overflowY:"auto"}},mt:"md"})]})},code:Y,maxWidth:340,centered:!0},z={type:"code",component:function(){return(0,a.jsx)(b,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:[{group:"Frontend",items:["React","Angular"]},{group:"Backend",items:["Express","Django"]}]})},code:`
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
`,maxWidth:340,centered:!0},_={type:"code",component:function(){return(0,a.jsx)(b,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:[{value:"React"},{value:"Angular"},{value:"Vue",disabled:!0},{value:"Svelte",disabled:!0}]})},code:`
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
`,maxWidth:340,centered:!0};var W=o(35764),T=o(52022);let B={type:"code",code:`
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
`,centered:!0,component:function(){return(0,a.jsxs)(W.A,{width:300,position:"bottom",withArrow:!0,shadow:"md",children:[(0,a.jsx)(W.A.Target,{children:(0,a.jsx)(T.$,{children:"Toggle popover"})}),(0,a.jsx)(W.A.Dropdown,{children:(0,a.jsx)(b,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],comboboxProps:{withinPortal:!1}})})]})}},F={type:"code",component:function(){return(0,a.jsx)(b,{clearable:!0,defaultValue:"React",data:["React","Angular"],label:"Clearable autocomplete",placeholder:"Clearable autocomplete"})},code:`
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
`,maxWidth:340,centered:!0};var G=o(92051);let N={type:"code",component:function(){let[e,{toggle:t}]=(0,G.j)();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(T.$,{onClick:t,mb:"md",children:"Toggle dropdown"}),(0,a.jsx)(b,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],dropdownOpened:e})]})},code:`
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
`,maxWidth:340,centered:!0},L={type:"code",component:function(){return(0,a.jsx)(b,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],comboboxProps:{position:"top",middlewares:{flip:!1,shift:!1}}})},code:`
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
`,maxWidth:340,centered:!0},$={type:"code",component:function(){return(0,a.jsx)(b,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],comboboxProps:{transitionProps:{transition:"pop",duration:200}}})},code:`
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
`,maxWidth:340,centered:!0},Z={type:"code",component:function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(b,{label:"Zero padding",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],comboboxProps:{dropdownPadding:0}}),(0,a.jsx)(b,{mt:"md",label:"10px padding",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],comboboxProps:{dropdownPadding:10}})]})},code:`
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
`,maxWidth:340,centered:!0},H={type:"code",component:function(){return(0,a.jsx)(b,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],comboboxProps:{shadow:"md"}})},code:`
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
`,maxWidth:340,centered:!0};var U=o(30838);let J={type:"code",component:function(){let e=(0,a.jsx)(U.A,{size:16});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(b,{data:["React","Angular","Vue"],leftSectionPointerEvents:"none",leftSection:e,label:"Your favorite library",placeholder:"Your favorite library"}),(0,a.jsx)(b,{mt:"md",data:["React","Angular","Vue"],rightSectionPointerEvents:"none",rightSection:e,label:"Your favorite library",placeholder:"Your favorite library"})]})},maxWidth:340,centered:!0,code:`
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
`},X={type:"configurator",component:function(e){return(0,a.jsx)(b,{...e,placeholder:"Autocomplete placeholder",data:["React","Angular","Vue","Svelte"]})},code:`
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
`,centered:!0,maxWidth:340,controls:o(23232).$7},Q={type:"code",component:function(){return(0,a.jsx)(b,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],readOnly:!0})},code:`
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
`,maxWidth:340,centered:!0},q={type:"code",component:function(){return(0,a.jsx)(b,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],disabled:!0})},code:`
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
`,maxWidth:340,centered:!0},K={type:"code",component:function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(b,{label:"Boolean error",placeholder:"Boolean error",error:!0,data:["React","Angular","Vue","Svelte"]}),(0,a.jsx)(b,{mt:"md",label:"With error message",placeholder:"With error message",error:"Invalid name",data:["React","Angular","Vue","Svelte"]})]})},maxWidth:340,centered:!0,code:`
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
`};var ee=o(32653),et=o(5534);let eo=`
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
`,ea={...et.P};delete ea.selectors.empty;let er={type:"styles-api",data:ea,component:function(e){return(0,a.jsx)(b,{...e,dropdownOpened:!0,leftSection:(0,a.jsx)(ee.A,{size:18,stroke:1.5}),withAsterisk:!0,label:"Autocomplete",description:"Description",placeholder:"Autocomplete",data:[{group:"Frontend",items:["React","Angular"]},{group:"Backend",items:["Node","Django"]}]})},code:eo,centered:!0,maxWidth:340};var en=o(18675),el=o(20017);let ei=(0,en.P)(el.XZ.Autocomplete);function es(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components},{ComboboxData:o,ComboboxDisclaimer:n,ComboboxFiltering:l,ComboboxLargeData:i,ComboboxProps:s,Demo:d,GetElementRef:c,InputAccessibility:p,InputFeatures:u,InputSections:m,StylesApiSelectors:h}=t;return o||ec("ComboboxData",!0),n||ec("ComboboxDisclaimer",!0),l||ec("ComboboxFiltering",!0),i||ec("ComboboxLargeData",!0),s||ec("ComboboxProps",!0),d||ec("Demo",!0),c||ec("GetElementRef",!0),p||ec("InputAccessibility",!0),u||ec("InputFeatures",!0),m||ec("InputSections",!0),h||ec("StylesApiSelectors",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n,{component:"Autocomplete"}),"\n",(0,a.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"Autocomplete"})," provides user a list of suggestions based on the input,\nhowever user is not limited to suggestions and can type anything."]}),"\n",(0,a.jsx)(d,{data:x}),"\n",(0,a.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"Autocomplete"})," value must be a string, other types are not supported.\n",(0,a.jsx)(t.code,{children:"onChange"})," function is called with a string value as a single argument."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Autocomplete } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState('');\n  return <Autocomplete data={[]} value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,a.jsx)(o,{component:"Autocomplete"}),"\n",(0,a.jsx)(l,{component:"Autocomplete"}),"\n",(0,a.jsx)(d,{data:A}),"\n",(0,a.jsx)(t.h2,{id:"sort-options",children:"Sort options"}),"\n",(0,a.jsxs)(t.p,{children:["By default, options are sorted by their position in the data array. You can change this behavior\nwith ",(0,a.jsx)(t.code,{children:"filter"})," function:"]}),"\n",(0,a.jsx)(d,{data:w}),"\n",(0,a.jsx)(i,{component:"Autocomplete"}),"\n",(0,a.jsx)(d,{data:P}),"\n",(0,a.jsx)(t.h2,{id:"renderoption",children:"renderOption"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"renderOption"})," callback allows you to customize option rendering. It is called with option object.\nThe function must return a React node."]}),"\n",(0,a.jsx)(d,{data:O}),"\n",(0,a.jsx)(t.h2,{id:"scrollable-dropdown",children:"Scrollable dropdown"}),"\n",(0,a.jsxs)(t.p,{children:["By default, the options list is wrapped with ",(0,a.jsx)(t.a,{href:"/core/scroll-area",children:"ScrollArea.Autosize"}),".\nYou can control dropdown max-height with ",(0,a.jsx)(t.code,{children:"maxDropdownHeight"})," prop if you do not change the default settings."]}),"\n",(0,a.jsxs)(t.p,{children:["If you want to use native scrollbars, set ",(0,a.jsx)(t.code,{children:"withScrollArea={false}"}),". Note that in this case,\nyou will need to change dropdown styles with ",(0,a.jsx)(t.a,{href:"/styles/styles-api",children:"Styles API"}),"."]}),"\n",(0,a.jsx)(d,{data:I}),"\n",(0,a.jsx)(t.h2,{id:"group-options",children:"Group options"}),"\n",(0,a.jsx)(d,{data:z}),"\n",(0,a.jsx)(t.h2,{id:"disabled-options",children:"Disabled options"}),"\n",(0,a.jsx)(t.p,{children:"When option is disabled, it cannot be selected and is ignored in keyboard navigation."}),"\n",(0,a.jsx)(d,{data:_}),"\n",(0,a.jsx)(s,{component:"Autocomplete"}),"\n",(0,a.jsx)(t.h2,{id:"inside-popover",children:"Inside Popover"}),"\n",(0,a.jsxs)(t.p,{children:["To use ",(0,a.jsx)(t.code,{children:"Autocomplete"})," inside popover, you need to set ",(0,a.jsx)(t.code,{children:"withinPortal: false"}),":"]}),"\n",(0,a.jsx)(d,{data:B}),"\n",(0,a.jsx)(t.h2,{id:"clearable",children:"Clearable"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:"clearable"})," prop to display the clear button in the right section. The button is not displayed\nwhen:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"The component does not have a value"}),"\n",(0,a.jsx)(t.li,{children:"The component is disabled"}),"\n",(0,a.jsx)(t.li,{children:"The component is read only"}),"\n"]}),"\n",(0,a.jsx)(d,{data:F}),"\n",(0,a.jsx)(t.h2,{id:"control-dropdown-opened-state",children:"Control dropdown opened state"}),"\n",(0,a.jsxs)(t.p,{children:["You can control dropdown opened state with ",(0,a.jsx)(t.code,{children:"dropdownOpened"})," prop. Additionally,\nyou can use ",(0,a.jsx)(t.code,{children:"onDropdownClose"})," and ",(0,a.jsx)(t.code,{children:"onDropdownOpen"})," to listen to dropdown opened state changes."]}),"\n",(0,a.jsx)(d,{data:N}),"\n",(0,a.jsx)(t.h2,{id:"dropdown-position",children:"Dropdown position"}),"\n",(0,a.jsxs)(t.p,{children:["By default, the dropdown is displayed below the input if there is enough space; otherwise it is displayed above the input.\nYou can change this behavior by setting ",(0,a.jsx)(t.code,{children:"position"})," and ",(0,a.jsx)(t.code,{children:"middlewares"})," props, which are passed down to the\nunderlying ",(0,a.jsx)(t.a,{href:"/core/popover",children:"Popover"})," component."]}),"\n",(0,a.jsx)(t.p,{children:"Example of dropdown that is always displayed above the input:"}),"\n",(0,a.jsx)(d,{data:L}),"\n",(0,a.jsx)(t.h2,{id:"dropdown-animation",children:"Dropdown animation"}),"\n",(0,a.jsxs)(t.p,{children:["By default, dropdown animations are disabled. To enable them, you can set ",(0,a.jsx)(t.code,{children:"transitionProps"}),",\nwhich will be passed down to the underlying ",(0,a.jsx)(t.a,{href:"/core/transition",children:"Transition"})," component."]}),"\n",(0,a.jsx)(d,{data:$}),"\n",(0,a.jsx)(t.h2,{id:"dropdown-padding",children:"Dropdown padding"}),"\n",(0,a.jsx)(d,{data:Z}),"\n",(0,a.jsx)(t.h2,{id:"dropdown-shadow",children:"Dropdown shadow"}),"\n",(0,a.jsx)(d,{data:H}),"\n",(0,a.jsx)(m,{component:"Autocomplete"}),"\n",(0,a.jsx)(d,{data:J}),"\n",(0,a.jsx)(t.h2,{id:"input-props",children:"Input props"}),"\n",(0,a.jsx)(u,{component:"Autocomplete",element:"input"}),"\n",(0,a.jsx)(d,{data:X}),"\n",(0,a.jsx)(t.h2,{id:"read-only",children:"Read only"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:"readOnly"})," to make the input read only. When ",(0,a.jsx)(t.code,{children:"readOnly"})," is set,\n",(0,a.jsx)(t.code,{children:"Autocomplete"})," will not show suggestions and will not call ",(0,a.jsx)(t.code,{children:"onChange"})," function."]}),"\n",(0,a.jsx)(d,{data:Q}),"\n",(0,a.jsx)(t.h2,{id:"disabled",children:"Disabled"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:"disabled"})," to disable the input. When ",(0,a.jsx)(t.code,{children:"disabled"})," is set,\nuser cannot interact with the input and ",(0,a.jsx)(t.code,{children:"Autocomplete"})," will not show suggestions."]}),"\n",(0,a.jsx)(d,{data:q}),"\n",(0,a.jsx)(t.h2,{id:"error-state",children:"Error state"}),"\n",(0,a.jsx)(d,{data:K}),"\n",(0,a.jsx)(h,{component:"Autocomplete"}),"\n",(0,a.jsx)(d,{data:er}),"\n",(0,a.jsx)(c,{component:"Autocomplete",refType:"input"}),"\n",(0,a.jsx)(p,{component:"Autocomplete"})]})}function ed(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(ei,{...e,children:(0,a.jsx)(es,{...e})})}function ec(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},87186:(e,t,o)=>{"use strict";o.d(t,{A:()=>a});var a=(0,o(73366).A)("outline","adjustments","IconAdjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},80502:(e,t,o)=>{"use strict";o.d(t,{A:()=>a});var a=(0,o(73366).A)("outline","arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},89689:(e,t,o)=>{"use strict";o.d(t,{A:()=>a});var a=(0,o(73366).A)("outline","arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},32653:(e,t,o)=>{"use strict";o.d(t,{A:()=>a});var a=(0,o(73366).A)("outline","at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},61584:(e,t,o)=>{"use strict";o.d(t,{A:()=>a});var a=(0,o(73366).A)("outline","calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},91133:(e,t,o)=>{"use strict";o.d(t,{A:()=>a});var a=(0,o(73366).A)("outline","code","IconCode",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},30838:(e,t,o)=>{"use strict";o.d(t,{A:()=>a});var a=(0,o(73366).A)("outline","components","IconComponents",[["path",{d:"M3 12l3 3l3 -3l-3 -3z",key:"svg-0"}],["path",{d:"M15 12l3 3l3 -3l-3 -3z",key:"svg-1"}],["path",{d:"M9 6l3 3l3 -3l-3 -3z",key:"svg-2"}],["path",{d:"M9 18l3 3l3 -3l-3 -3z",key:"svg-3"}]])},11749:(e,t,o)=>{"use strict";o.d(t,{A:()=>a});var a=(0,o(73366).A)("outline","file-text","IconFileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},89843:(e,t,o)=>{"use strict";o.d(t,{A:()=>a});var a=(0,o(73366).A)("outline","license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},9613:(e,t,o)=>{"use strict";o.d(t,{A:()=>a});var a=(0,o(73366).A)("outline","pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},55764:(e,t,o)=>{"use strict";o.d(t,{A:()=>a});var a=(0,o(73366).A)("outline","switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},23232:(e,t,o)=>{"use strict";o.d(t,{$7:()=>n,l$:()=>a,wQ:()=>r});let a=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],r=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],n=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]},86658:(e,t,o)=>{"use strict";o.d(t,{e:()=>j});var a=o(31085),r=o(14041),n=o(33450),l=o(7098),i=o(29686),s=o(69564),d=o(34056),c=o(2453),p=o(6754);let u=(0,r.createContext)(null),m=u.Provider;var h={group:"m_11def92b",root:"m_f85678b6",image:"m_11f8ac07",placeholder:"m_104cd71f"};let v={},g=(0,l.V)((e,{spacing:t})=>({group:{"--ag-spacing":(0,n.GY)(t)}})),y=(0,p.P9)((e,t)=>{let o=(0,i.Y)("AvatarGroup",v,e),{classNames:r,className:n,style:l,styles:c,unstyled:p,vars:u,spacing:y,...b}=o,x=(0,s.I)({name:"AvatarGroup",classes:h,props:o,className:n,style:l,classNames:r,styles:c,unstyled:p,vars:u,varsResolver:g,rootSelector:"group"});return(0,a.jsx)(m,{value:!0,children:(0,a.jsx)(d.a,{ref:t,...x("group"),...b})})});function b(e){return(0,a.jsx)("svg",{...e,"data-avatar-placeholder-icon":!0,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{d:"M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}y.classes=h,y.displayName="@mantine/core/AvatarGroup";let x=["blue","cyan","grape","green","indigo","lime","orange","pink","red","teal","violet"],f={},A=(0,l.V)((e,{size:t,radius:o,variant:a,gradient:r,color:l,autoContrast:i,name:s,allowedInitialsColors:d})=>{let c="initials"===l&&"string"==typeof s?function(e,t=x){let o=Math.abs(function(e){let t=0;for(let o=0;o<e.length;o+=1)t=(t<<5)-t+e.charCodeAt(o)|0;return t}(e))%t.length;return t[o]}(s,d):l,p=e.variantColorResolver({color:c||"gray",theme:e,gradient:r,variant:a||"light",autoContrast:i});return{root:{"--avatar-size":(0,n.YC)(t,"avatar-size"),"--avatar-radius":void 0===o?void 0:(0,n.nJ)(o),"--avatar-bg":c||a?p.background:void 0,"--avatar-color":c||a?p.color:void 0,"--avatar-bd":c||a?p.border:void 0}}}),j=(0,c.v)((e,t)=>{let o=(0,i.Y)("Avatar",f,e),{classNames:n,className:l,style:c,styles:p,unstyled:m,vars:v,src:g,alt:y,radius:x,color:j,gradient:w,imageProps:k,children:C,autoContrast:P,mod:V,name:S,allowedInitialsColors:D,...R}=o,M={withinGroup:!!(0,r.useContext)(u)},[O,Y]=(0,r.useState)(!g),E=(0,s.I)({name:"Avatar",props:o,classes:h,className:l,style:c,classNames:n,styles:p,unstyled:m,vars:v,varsResolver:A});return(0,r.useEffect)(()=>Y(!g),[g]),(0,a.jsx)(d.a,{...E("root"),mod:[{"within-group":M.withinGroup},V],ref:t,...R,children:O||!g?(0,a.jsx)("span",{...E("placeholder"),title:y,children:C||"string"==typeof S&&function(e,t=2){let o=e.split(" ");return 1===o.length?e.slice(0,t).toUpperCase():o.map(e=>e[0]).slice(0,t).join("").toUpperCase()}(S)||(0,a.jsx)(b,{})}):(0,a.jsx)("img",{...k,...E("image"),src:g,alt:y,onError:e=>{Y(!0),k?.onError?.(e)}})})});j.classes=h,j.displayName="@mantine/core/Avatar",j.Group=y},65567:(e,t,o)=>{"use strict";o.d(t,{i:()=>p});var a=o(31085),r=o(54357),n=o(5583),l=o(37950),i=o(31791),s=o(51513),d=o(51200);function c({data:e,withCheckIcon:t,value:o,checkIconPosition:l,unstyled:p,renderOption:u}){if(!(0,s.c)(e)){var m;let s=(m=e.value,Array.isArray(o)?o.includes(m):o===m),c=t&&s&&(0,a.jsx)(n.S,{className:d.A.optionsDropdownCheckIcon}),h=(0,a.jsxs)(a.Fragment,{children:["left"===l&&c,(0,a.jsx)("span",{children:e.label}),"right"===l&&c]});return(0,a.jsx)(i.G.Option,{value:e.value,disabled:e.disabled,className:(0,r.A)({[d.A.optionsDropdownOption]:!p}),"data-reverse":"right"===l||void 0,"data-checked":s||void 0,"aria-selected":s,active:s,children:"function"==typeof u?u({option:e,checked:s}):h})}let h=e.items.map(e=>(0,a.jsx)(c,{data:e,value:o,unstyled:p,withCheckIcon:t,checkIconPosition:l,renderOption:u},e.value));return(0,a.jsx)(i.G.Group,{label:e.group,children:h})}function p({data:e,hidden:t,hiddenWhenEmpty:o,filter:r,search:n,limit:d,maxDropdownHeight:p,withScrollArea:u=!0,filterOptions:m=!0,withCheckIcon:h=!1,value:v,checkIconPosition:g,nothingFoundMessage:y,unstyled:b,labelId:x,renderOption:f,scrollAreaProps:A,"aria-label":j}){!function e(t,o=new Set){if(Array.isArray(t))for(let a of t)if((0,s.c)(a))e(a.items,o);else{if(void 0===a.value)throw Error("[@mantine/core] Each option must have value property");if("string"!=typeof a.value)throw Error(`[@mantine/core] Option value must be a string, other data formats are not supported, got ${typeof a.value}`);if(o.has(a.value))throw Error(`[@mantine/core] Duplicate options are not supported. Option with value "${a.value}" was provided more than once`);o.add(a.value)}}(e);let w="string"==typeof n?(r||function e({options:t,search:o,limit:a}){let r=o.trim().toLowerCase(),n=[];for(let l=0;l<t.length;l+=1){let i=t[l];if(n.length===a)break;(0,s.c)(i)&&n.push({group:i.group,items:e({options:i.items,search:o,limit:a-n.length})}),!(0,s.c)(i)&&i.label.toLowerCase().includes(r)&&n.push(i)}return n})({options:e,search:m?n:"",limit:d??1/0}):e,k=function(e){if(0===e.length)return!0;for(let t of e)if(!("group"in t)||t.items.length>0)return!1;return!0}(w),C=w.map(e=>(0,a.jsx)(c,{data:e,withCheckIcon:h,value:v,checkIconPosition:g,unstyled:b,renderOption:f},(0,s.c)(e)?e.group:e.value));return(0,a.jsx)(i.G.Dropdown,{hidden:t||o&&k,"data-composed":!0,children:(0,a.jsxs)(i.G.Options,{labelledBy:x,"aria-label":j,children:[u?(0,a.jsx)(l.F.Autosize,{mah:p??220,type:"scroll",scrollbarSize:"var(--combobox-padding)",offsetScrollbars:"y",...A,children:C}):C,k&&y&&(0,a.jsx)(i.G.Empty,{children:y})]})})}},51513:(e,t,o)=>{"use strict";function a(e){return"group"in e}o.d(t,{c:()=>a})},35213:(e,t,o)=>{"use strict";o.d(t,{D:()=>function e(t){return t.reduce((t,o)=>"group"in o?{...t,...e(o.items)}:(t[o.value]=o,t),{})}})}},e=>{var t=t=>e(e.s=t);e.O(0,[18675,31791,90636,46593,38792],()=>t(56189)),_N_E=e.O()}]);