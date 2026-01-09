(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[46476],{1798:(e,t,o)=>{"use strict";o.d(t,{A:()=>a});let a=(0,o(41495).A)("outline","license","License",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},6620:(e,t,o)=>{"use strict";o.d(t,{A:()=>a});let a=(0,o(41495).A)("outline","code","Code",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},6892:(e,t,o)=>{"use strict";o.d(t,{A:()=>a});let a=(0,o(41495).A)("outline","pencil","Pencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},7221:(e,t,o)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/autocomplete",function(){return o(16205)}])},8268:(e,t,o)=>{"use strict";o.d(t,{A:()=>a});let a=(0,o(41495).A)("outline","at","At",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},9984:(e,t,o)=>{"use strict";function a(e){return"group"in e}o.d(t,{c:()=>a})},11660:(e,t,o)=>{"use strict";o.d(t,{D:()=>function e(t){return t.reduce((t,o)=>"group"in o?{...t,...e(o.items)}:(t[o.value]=o,t),{})}})},16205:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>ep});var a=o(6029),n=o(16285),r=o(55729),l=o(2011),i=o(7798),s=o(38757),c=o(38919),d=o(8411),p=o(1374),u=o(11660),m=o(2061),h=o(19341),g=o(28425),v=o(51718);let y=(0,d.P9)((e,t)=>{let o=(0,c.Y)("Autocomplete",null,e),{classNames:n,styles:d,unstyled:y,vars:b,dropdownOpened:x,defaultDropdownOpened:f,onDropdownClose:A,onDropdownOpen:j,onFocus:w,onBlur:k,onClick:S,onChange:C,data:P,value:V,defaultValue:D,selectFirstOptionOnChange:R,onOptionSubmit:O,comboboxProps:M,readOnly:Y,disabled:E,filter:z,limit:W,withScrollArea:T,maxDropdownHeight:_,size:B,id:F,renderOption:I,autoComplete:G,scrollAreaProps:N,onClear:L,clearButtonProps:$,error:Z,clearable:H,rightSection:U,autoSelectOnBlur:J,attributes:X,...q}=o,Q=(0,l.B)(F),K=(0,p.d)(P),ee=(0,u.D)(K),[et,eo]=(0,i.Z)({value:V,defaultValue:D,finalValue:"",onChange:C}),ea=(0,g.B)({opened:x,defaultOpened:f,onDropdownOpen:j,onDropdownClose:()=>{A?.(),setTimeout(ea.resetSelectedOption,0)}}),en=e=>{eo(e),ea.resetSelectedOption()},{resolvedClassNames:er,resolvedStyles:el}=(0,s.Y)({props:o,styles:d,classNames:n});(0,r.useEffect)(()=>{R&&ea.selectFirstOption()},[R,et]);let ei=(0,a.jsx)(m.G.ClearButton,{...$,onClear:()=>{en(""),L?.()}});return(0,a.jsxs)(m.G,{store:ea,__staticSelector:"Autocomplete",classNames:er,styles:el,unstyled:y,readOnly:Y,size:B,attributes:X,keepMounted:J,onOptionSubmit:e=>{O?.(e),en(ee[e].label),ea.closeDropdown()},...M,children:[(0,a.jsx)(m.G.Target,{autoComplete:G,children:(0,a.jsx)(v.O,{ref:t,...q,size:B,__staticSelector:"Autocomplete",__clearSection:ei,__clearable:H&&!!et&&!E&&!Y,rightSection:U,disabled:E,readOnly:Y,value:et,error:Z,onChange:e=>{en(e.currentTarget.value),ea.openDropdown(),R&&ea.selectFirstOption()},onFocus:e=>{ea.openDropdown(),w?.(e)},onBlur:e=>{J&&ea.clickSelectedOption(),ea.closeDropdown(),k?.(e)},onClick:e=>{ea.openDropdown(),S?.(e)},classNames:er,styles:el,unstyled:y,attributes:X,id:Q})}),(0,a.jsx)(h.i,{data:K,hidden:Y||E,filter:z,search:et,limit:W,hiddenWhenEmpty:!0,withScrollArea:T,maxDropdownHeight:_,unstyled:y,labelId:q.label?`${Q}-label`:void 0,"aria-label":q.label?void 0:q["aria-label"],renderOption:I,scrollAreaProps:N})]})});y.classes={...v.O.classes,...m.G.classes},y.displayName="@mantine/core/Autocomplete";let b={type:"code",component:function(){return(0,a.jsx)(y,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"]})},code:`
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
`,maxWidth:340,centered:!0},x={type:"code",component:function(){return(0,a.jsx)(y,{label:"Your favorite library",placeholder:"Pick value or enter anything",selectFirstOptionOnChange:!0,data:["React","Angular","Vue","Svelte"]})},code:`
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
`,maxWidth:340,centered:!0},f={type:"code",component:function(){return(0,a.jsx)(y,{label:"Your favorite library",placeholder:"Pick value or enter anything",autoSelectOnBlur:!0,data:["React","Angular","Vue","Svelte"]})},code:`
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
`,maxWidth:340,centered:!0},A=({options:e,search:t})=>{let o=t.toLowerCase().trim().split(" ");return e.filter(e=>{let t=e.label.toLowerCase().trim().split(" ");return o.every(e=>t.some(t=>t.includes(e)))})},j={type:"code",component:function(){return(0,a.jsx)(y,{label:"Your country",placeholder:"Pick value or enter anything",data:["Great Britain","Russian Federation","United States"],filter:A})},code:`
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
`,maxWidth:340,centered:!0},w=({options:e,search:t})=>{let o=e.filter(e=>e.label.toLowerCase().trim().includes(t.toLowerCase().trim()));return o.sort((e,t)=>e.label.localeCompare(t.label)),o},k={type:"code",component:function(){return(0,a.jsx)(y,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["4 – React","1 – Angular","3 – Vue","2 – Svelte"],filter:w})},code:`
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
`,maxWidth:340,centered:!0},S=`
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
`,C=Array(1e5).fill(0).map((e,t)=>`Option ${t}`),P={type:"code",component:function(){return(0,a.jsx)(y,{label:"100 000 options autocomplete",placeholder:"Use limit to optimize performance",limit:5,data:C})},code:S,maxWidth:340,centered:!0};var V=o(57414),D=o(92305),R=o(45208);let O={"Emily Johnson":{image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png",email:"emily92@gmail.com"},"Ava Rodriguez":{image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png",email:"ava_rose@gmail.com"},"Olivia Chen":{image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png",email:"livvy_globe@gmail.com"},"Ethan Barnes":{image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png",email:"ethan_explorer@gmail.com"},"Mason Taylor":{image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png",email:"mason_musician@gmail.com"}},M=({option:e})=>(0,a.jsxs)(V.Y,{gap:"sm",children:[(0,a.jsx)(D.e,{src:O[e.value].image,size:36,radius:"xl"}),(0,a.jsxs)("div",{children:[(0,a.jsx)(R.E,{size:"sm",children:e.value}),(0,a.jsx)(R.E,{size:"xs",opacity:.5,children:O[e.value].email})]})]}),Y={type:"code",component:function(){return(0,a.jsx)(y,{data:["Emily Johnson","Ava Rodriguez","Olivia Chen","Ethan Barnes","Mason Taylor"],renderOption:M,maxDropdownHeight:300,label:"Employee of the month",placeholder:"Search for employee"})},code:`
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
`,centered:!0,maxWidth:340,defaultExpanded:!1},E=`
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
`,z=Array(100).fill(0).map((e,t)=>`Option ${t}`),W={type:"code",component:function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(y,{label:"With scroll area (default)",placeholder:"Pick value or enter anything",data:z,maxDropdownHeight:200}),(0,a.jsx)(y,{label:"With native scroll",placeholder:"Pick value or enter anything",data:z,withScrollArea:!1,styles:{dropdown:{maxHeight:200,overflowY:"auto"}},mt:"md"})]})},code:E,maxWidth:340,centered:!0},T={type:"code",component:function(){return(0,a.jsx)(y,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:[{group:"Frontend",items:["React","Angular"]},{group:"Backend",items:["Express","Django"]}]})},code:`
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
`,maxWidth:340,centered:!0},_={type:"code",component:function(){return(0,a.jsx)(y,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:[{value:"React"},{value:"Angular"},{value:"Vue",disabled:!0},{value:"Svelte",disabled:!0}]})},code:`
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
`,maxWidth:340,centered:!0};var B=o(17598),F=o(61087);let I={type:"code",code:`
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
`,centered:!0,component:function(){return(0,a.jsxs)(B.A,{width:300,position:"bottom",withArrow:!0,shadow:"md",children:[(0,a.jsx)(B.A.Target,{children:(0,a.jsx)(F.$,{children:"Toggle popover"})}),(0,a.jsx)(B.A.Dropdown,{children:(0,a.jsx)(y,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],comboboxProps:{withinPortal:!1}})})]})}},G={type:"code",component:function(){return(0,a.jsx)(y,{clearable:!0,defaultValue:"React",data:["React","Angular"],label:"Clearable autocomplete",placeholder:"Clearable autocomplete"})},code:`
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
`,maxWidth:340,centered:!0};var N=o(66438);let L={type:"code",component:function(){let[e,{toggle:t}]=(0,N.j)();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(F.$,{onClick:t,mb:"md",children:"Toggle dropdown"}),(0,a.jsx)(y,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],dropdownOpened:e})]})},code:`
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
`,maxWidth:340,centered:!0},$={type:"code",component:function(){return(0,a.jsx)(y,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],comboboxProps:{position:"top",middlewares:{flip:!1,shift:!1}}})},code:`
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
`,maxWidth:340,centered:!0},Z={type:"code",component:function(){return(0,a.jsx)(y,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],comboboxProps:{transitionProps:{transition:"pop",duration:200}}})},code:`
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
`,maxWidth:340,centered:!0},H={type:"code",component:function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(y,{label:"Zero padding",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],comboboxProps:{dropdownPadding:0}}),(0,a.jsx)(y,{mt:"md",label:"10px padding",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],comboboxProps:{dropdownPadding:10}})]})},code:`
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
`,maxWidth:340,centered:!0},U={type:"code",component:function(){return(0,a.jsx)(y,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],comboboxProps:{shadow:"md"}})},code:`
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
`,maxWidth:340,centered:!0};var J=o(39527);let X={type:"code",component:function(){let e=(0,a.jsx)(J.A,{size:16});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(y,{data:["React","Angular","Vue"],leftSectionPointerEvents:"none",leftSection:e,label:"Your favorite library",placeholder:"Your favorite library"}),(0,a.jsx)(y,{mt:"md",data:["React","Angular","Vue"],rightSectionPointerEvents:"none",rightSection:e,label:"Your favorite library",placeholder:"Your favorite library"})]})},maxWidth:340,centered:!0,code:`
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
`};var q=o(55661);let Q={type:"configurator",component:function(e){return(0,a.jsx)(y,{...e,placeholder:"Autocomplete placeholder",data:["React","Angular","Vue","Svelte"]})},code:`
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
`,centered:!0,maxWidth:340,controls:q.$7},K={type:"code",component:function(){return(0,a.jsx)(y,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],readOnly:!0})},code:`
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
`,maxWidth:340,centered:!0},ee={type:"code",component:function(){return(0,a.jsx)(y,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],disabled:!0})},code:`
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
`,maxWidth:340,centered:!0},et={type:"code",component:function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(y,{label:"Boolean error",placeholder:"Boolean error",error:!0,data:["React","Angular","Vue","Svelte"]}),(0,a.jsx)(y,{mt:"md",label:"With error message",placeholder:"With error message",error:"Invalid name",data:["React","Angular","Vue","Svelte"]})]})},maxWidth:340,centered:!0,code:`
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
`};var eo=o(8268),ea=o(88319);let en=`
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
`,er={...ea.P};delete er.selectors.empty;let el={type:"styles-api",data:er,component:function(e){return(0,a.jsx)(y,{...e,dropdownOpened:!0,leftSection:(0,a.jsx)(eo.A,{size:18,stroke:1.5}),withAsterisk:!0,label:"Autocomplete",description:"Description",placeholder:"Autocomplete",comboboxProps:{hideDetached:!1},data:[{group:"Frontend",items:["React","Angular"]},{group:"Backend",items:["Node","Django"]}]})},code:en,centered:!0,maxWidth:340};var ei=o(38547),es=o(5262);let ec=(0,ei.P)(es.XZ.Autocomplete);function ed(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components},{ComboboxData:o,ComboboxDisclaimer:r,ComboboxFiltering:l,ComboboxLargeData:i,ComboboxProps:s,Demo:c,GetElementRef:d,InputAccessibility:p,InputFeatures:u,InputSections:m,StylesApiSelectors:h}=t;return o||eu("ComboboxData",!0),r||eu("ComboboxDisclaimer",!0),l||eu("ComboboxFiltering",!0),i||eu("ComboboxLargeData",!0),s||eu("ComboboxProps",!0),c||eu("Demo",!0),d||eu("GetElementRef",!0),p||eu("InputAccessibility",!0),u||eu("InputFeatures",!0),m||eu("InputSections",!0),h||eu("StylesApiSelectors",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r,{component:"Autocomplete"}),"\n",(0,a.jsx)(t.h2,{id:"not-a-searchable-select",children:"Not a searchable select"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"Autocomplete"})," is not a searchable select, it is a text input with suggestions.\nValues are not enforced to be one of the suggestions, user can type anything.\nIf you need a searchable select, use ",(0,a.jsx)(t.a,{href:"/core/select",children:"Select"})," component instead.\nTo learn more about the differences between ",(0,a.jsx)(t.code,{children:"Autocomplete"})," and ",(0,a.jsx)(t.code,{children:"Select"}),", check\n",(0,a.jsx)(t.a,{href:"https://help.mantine.dev/q/select-autocomplete-difference",children:"help center article"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"Autocomplete"})," provides user a list of suggestions based on the input,\nhowever user is not limited to suggestions and can type anything."]}),"\n",(0,a.jsx)(c,{data:b}),"\n",(0,a.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"Autocomplete"})," value must be a string, other types are not supported.\n",(0,a.jsx)(t.code,{children:"onChange"})," function is called with a string value as a single argument."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Autocomplete } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState('');\n  return <Autocomplete data={[]} value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,a.jsx)(t.h2,{id:"select-first-option-on-change",children:"Select first option on change"}),"\n",(0,a.jsxs)(t.p,{children:["Set the ",(0,a.jsx)(t.code,{children:"selectFirstOptionOnChange"})," prop to automatically select the first option in the dropdown when the input value changes.\nThis feature allows users to type a value and immediately press ",(0,a.jsx)(t.code,{children:"Enter"})," to select the first matching option,\nwithout needing to press the arrow down key first."]}),"\n",(0,a.jsx)(c,{data:x}),"\n",(0,a.jsx)(t.h2,{id:"autoselectonblur",children:"autoSelectOnBlur"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:"autoSelectOnBlur"})," prop to automatically select the highlighted option when the input loses focus.\nTo see this feature in action: select an option with up/down arrows, then click outside the input:"]}),"\n",(0,a.jsx)(c,{data:f}),"\n",(0,a.jsx)(o,{component:"Autocomplete"}),"\n",(0,a.jsx)(l,{component:"Autocomplete"}),"\n",(0,a.jsx)(c,{data:j}),"\n",(0,a.jsx)(t.h2,{id:"sort-options",children:"Sort options"}),"\n",(0,a.jsxs)(t.p,{children:["By default, options are sorted by their position in the data array. You can change this behavior\nwith ",(0,a.jsx)(t.code,{children:"filter"})," function:"]}),"\n",(0,a.jsx)(c,{data:k}),"\n",(0,a.jsx)(i,{component:"Autocomplete"}),"\n",(0,a.jsx)(c,{data:P}),"\n",(0,a.jsx)(t.h2,{id:"renderoption",children:"renderOption"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"renderOption"})," callback allows you to customize option rendering. It is called with option object.\nThe function must return a React node."]}),"\n",(0,a.jsx)(c,{data:Y}),"\n",(0,a.jsx)(t.h2,{id:"nothing-found-message",children:"Nothing found message"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"Autocomplete"})," component does not support nothing found message. It is designed to\naccept any string as a value, so it does not make sense to show nothing found message.\nIf you want to limit user input to suggestions, you can use searchable ",(0,a.jsx)(t.a,{href:"/core/select",children:"Select"}),"\ncomponent instead. To learn more about the differences between ",(0,a.jsx)(t.code,{children:"Autocomplete"})," and ",(0,a.jsx)(t.code,{children:"Select"}),", check\n",(0,a.jsx)(t.a,{href:"https://help.mantine.dev/q/select-autocomplete-difference",children:"help center article"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"scrollable-dropdown",children:"Scrollable dropdown"}),"\n",(0,a.jsxs)(t.p,{children:["By default, the options list is wrapped with ",(0,a.jsx)(t.a,{href:"/core/scroll-area",children:"ScrollArea.Autosize"}),".\nYou can control dropdown max-height with ",(0,a.jsx)(t.code,{children:"maxDropdownHeight"})," prop if you do not change the default settings."]}),"\n",(0,a.jsxs)(t.p,{children:["If you want to use native scrollbars, set ",(0,a.jsx)(t.code,{children:"withScrollArea={false}"}),". Note that in this case,\nyou will need to change dropdown styles with ",(0,a.jsx)(t.a,{href:"/styles/styles-api",children:"Styles API"}),"."]}),"\n",(0,a.jsx)(c,{data:W}),"\n",(0,a.jsx)(t.h2,{id:"group-options",children:"Group options"}),"\n",(0,a.jsx)(c,{data:T}),"\n",(0,a.jsx)(t.h2,{id:"disabled-options",children:"Disabled options"}),"\n",(0,a.jsx)(t.p,{children:"When option is disabled, it cannot be selected and is ignored in keyboard navigation."}),"\n",(0,a.jsx)(c,{data:_}),"\n",(0,a.jsx)(s,{component:"Autocomplete"}),"\n",(0,a.jsx)(t.h2,{id:"inside-popover",children:"Inside Popover"}),"\n",(0,a.jsxs)(t.p,{children:["To use ",(0,a.jsx)(t.code,{children:"Autocomplete"})," inside popover, you need to set ",(0,a.jsx)(t.code,{children:"withinPortal: false"}),":"]}),"\n",(0,a.jsx)(c,{data:I}),"\n",(0,a.jsx)(t.h2,{id:"clearable",children:"Clearable"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:"clearable"})," prop to display the clear button in the right section. The button is not displayed\nwhen:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"The component does not have a value"}),"\n",(0,a.jsx)(t.li,{children:"The component is disabled"}),"\n",(0,a.jsx)(t.li,{children:"The component is read only"}),"\n"]}),"\n",(0,a.jsx)(c,{data:G}),"\n",(0,a.jsx)(t.h2,{id:"control-dropdown-opened-state",children:"Control dropdown opened state"}),"\n",(0,a.jsxs)(t.p,{children:["You can control dropdown opened state with ",(0,a.jsx)(t.code,{children:"dropdownOpened"})," prop. Additionally,\nyou can use ",(0,a.jsx)(t.code,{children:"onDropdownClose"})," and ",(0,a.jsx)(t.code,{children:"onDropdownOpen"})," to listen to dropdown opened state changes."]}),"\n",(0,a.jsx)(c,{data:L}),"\n",(0,a.jsx)(t.h2,{id:"dropdown-position",children:"Dropdown position"}),"\n",(0,a.jsxs)(t.p,{children:["By default, the dropdown is displayed below the input if there is enough space; otherwise it is displayed above the input.\nYou can change this behavior by setting ",(0,a.jsx)(t.code,{children:"position"})," and ",(0,a.jsx)(t.code,{children:"middlewares"})," props, which are passed down to the\nunderlying ",(0,a.jsx)(t.a,{href:"/core/popover",children:"Popover"})," component."]}),"\n",(0,a.jsx)(t.p,{children:"Example of dropdown that is always displayed above the input:"}),"\n",(0,a.jsx)(c,{data:$}),"\n",(0,a.jsx)(t.h2,{id:"dropdown-animation",children:"Dropdown animation"}),"\n",(0,a.jsxs)(t.p,{children:["By default, dropdown animations are disabled. To enable them, you can set ",(0,a.jsx)(t.code,{children:"transitionProps"}),",\nwhich will be passed down to the underlying ",(0,a.jsx)(t.a,{href:"/core/transition",children:"Transition"})," component."]}),"\n",(0,a.jsx)(c,{data:Z}),"\n",(0,a.jsx)(t.h2,{id:"dropdown-padding",children:"Dropdown padding"}),"\n",(0,a.jsx)(c,{data:H}),"\n",(0,a.jsx)(t.h2,{id:"dropdown-shadow",children:"Dropdown shadow"}),"\n",(0,a.jsx)(c,{data:U}),"\n",(0,a.jsx)(m,{component:"Autocomplete"}),"\n",(0,a.jsx)(c,{data:X}),"\n",(0,a.jsx)(t.h2,{id:"input-props",children:"Input props"}),"\n",(0,a.jsx)(u,{component:"Autocomplete",element:"input"}),"\n",(0,a.jsx)(c,{data:Q}),"\n",(0,a.jsx)(t.h2,{id:"read-only",children:"Read only"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:"readOnly"})," to make the input read only. When ",(0,a.jsx)(t.code,{children:"readOnly"})," is set,\n",(0,a.jsx)(t.code,{children:"Autocomplete"})," will not show suggestions and will not call ",(0,a.jsx)(t.code,{children:"onChange"})," function."]}),"\n",(0,a.jsx)(c,{data:K}),"\n",(0,a.jsx)(t.h2,{id:"disabled",children:"Disabled"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:"disabled"})," to disable the input. When ",(0,a.jsx)(t.code,{children:"disabled"})," is set,\nuser cannot interact with the input and ",(0,a.jsx)(t.code,{children:"Autocomplete"})," will not show suggestions."]}),"\n",(0,a.jsx)(c,{data:ee}),"\n",(0,a.jsx)(t.h2,{id:"error-state",children:"Error state"}),"\n",(0,a.jsx)(c,{data:et}),"\n",(0,a.jsx)(h,{component:"Autocomplete"}),"\n",(0,a.jsx)(c,{data:el}),"\n",(0,a.jsx)(d,{component:"Autocomplete",refType:"input"}),"\n",(0,a.jsx)(p,{component:"Autocomplete"})]})}function ep(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(ec,{...e,children:(0,a.jsx)(ed,{...e})})}function eu(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},19341:(e,t,o)=>{"use strict";o.d(t,{i:()=>p});var a=o(6029),n=o(50212),r=o(98538),l=o(928),i=o(2061),s=o(30157),c=o(9984);function d({data:e,withCheckIcon:t,withAlignedLabels:o,value:l,checkIconPosition:p,unstyled:u,renderOption:m}){if(!(0,c.c)(e)){var h;let c=(h=e.value,Array.isArray(l)?l.includes(h):l===h),d=t&&(c?(0,a.jsx)(r.S,{className:s.A.optionsDropdownCheckIcon}):o?(0,a.jsx)("div",{className:s.A.optionsDropdownCheckPlaceholder}):null),g=(0,a.jsxs)(a.Fragment,{children:["left"===p&&d,(0,a.jsx)("span",{children:e.label}),"right"===p&&d]});return(0,a.jsx)(i.G.Option,{value:e.value,disabled:e.disabled,className:(0,n.A)({[s.A.optionsDropdownOption]:!u}),"data-reverse":"right"===p||void 0,"data-checked":c||void 0,"aria-selected":c,active:c,children:"function"==typeof m?m({option:e,checked:c}):g})}let g=e.items.map(e=>(0,a.jsx)(d,{data:e,value:l,unstyled:u,withCheckIcon:t,withAlignedLabels:o,checkIconPosition:p,renderOption:m},e.value));return(0,a.jsx)(i.G.Group,{label:e.group,children:g})}function p({data:e,hidden:t,hiddenWhenEmpty:o,filter:n,search:r,limit:s,maxDropdownHeight:p,withScrollArea:u=!0,filterOptions:m=!0,withCheckIcon:h=!1,withAlignedLabels:g=!1,value:v,checkIconPosition:y,nothingFoundMessage:b,unstyled:x,labelId:f,renderOption:A,scrollAreaProps:j,"aria-label":w}){!function e(t,o=new Set){if(Array.isArray(t))for(let a of t)if((0,c.c)(a))e(a.items,o);else{if(void 0===a.value)throw Error("[@mantine/core] Each option must have value property");if("string"!=typeof a.value)throw Error(`[@mantine/core] Option value must be a string, other data formats are not supported, got ${typeof a.value}`);if(o.has(a.value))throw Error(`[@mantine/core] Duplicate options are not supported. Option with value "${a.value}" was provided more than once`);o.add(a.value)}}(e);let k="string"==typeof r?(n||function e({options:t,search:o,limit:a}){let n=o.trim().toLowerCase(),r=[];for(let l=0;l<t.length;l+=1){let i=t[l];if(r.length===a)break;(0,c.c)(i)&&r.push({group:i.group,items:e({options:i.items,search:o,limit:a-r.length})}),!(0,c.c)(i)&&i.label.toLowerCase().includes(n)&&r.push(i)}return r})({options:e,search:m?r:"",limit:s??1/0}):e,S=function(e){if(0===e.length)return!0;for(let t of e)if(!("group"in t)||t.items.length>0)return!1;return!0}(k),C=k.map(e=>(0,a.jsx)(d,{data:e,withCheckIcon:h,withAlignedLabels:g,value:v,checkIconPosition:y,unstyled:x,renderOption:A},(0,c.c)(e)?e.group:e.value));return(0,a.jsx)(i.G.Dropdown,{hidden:t||o&&S,"data-composed":!0,children:(0,a.jsxs)(i.G.Options,{labelledBy:f,"aria-label":w,children:[u?(0,a.jsx)(l.F.Autosize,{mah:p??220,type:"scroll",scrollbarSize:"var(--combobox-padding)",offsetScrollbars:"y",...j,children:C}):C,S&&b&&(0,a.jsx)(i.G.Empty,{children:b})]})})}},24583:(e,t,o)=>{"use strict";o.d(t,{A:()=>a});let a=(0,o(41495).A)("outline","arrow-left","ArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},34891:(e,t,o)=>{"use strict";o.d(t,{A:()=>a});let a=(0,o(41495).A)("outline","adjustments","Adjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},39527:(e,t,o)=>{"use strict";o.d(t,{A:()=>a});let a=(0,o(41495).A)("outline","components","Components",[["path",{d:"M3 12l3 3l3 -3l-3 -3z",key:"svg-0"}],["path",{d:"M15 12l3 3l3 -3l-3 -3z",key:"svg-1"}],["path",{d:"M9 6l3 3l3 -3l-3 -3z",key:"svg-2"}],["path",{d:"M9 18l3 3l3 -3l-3 -3z",key:"svg-3"}]])},41949:(e,t,o)=>{"use strict";o.d(t,{A:()=>a});let a=(0,o(41495).A)("outline","calendar","Calendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},55661:(e,t,o)=>{"use strict";o.d(t,{$7:()=>r,l$:()=>a,wQ:()=>n});let a=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],n=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],r=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]},65433:(e,t,o)=>{"use strict";o.d(t,{A:()=>a});let a=(0,o(41495).A)("outline","switch-2","Switch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},84276:(e,t,o)=>{"use strict";o.d(t,{A:()=>a});let a=(0,o(41495).A)("outline","file-text","FileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},88992:(e,t,o)=>{"use strict";o.d(t,{A:()=>a});let a=(0,o(41495).A)("outline","arrow-right","ArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},92305:(e,t,o)=>{"use strict";o.d(t,{e:()=>f});var a=o(6029),n=o(55729),r=o(14163),l=o(33987),i=o(38919),s=o(15583),c=o(76320),d=o(82500),p={group:"m_11def92b",root:"m_f85678b6",image:"m_11f8ac07",placeholder:"m_104cd71f"},u=o(8411);let m=(0,n.createContext)(null),h=m.Provider,g=(0,l.V)((e,{spacing:t})=>({group:{"--ag-spacing":(0,r.GY)(t)}})),v=(0,u.P9)((e,t)=>{let o=(0,i.Y)("AvatarGroup",null,e),{classNames:n,className:r,style:l,styles:d,unstyled:u,vars:m,spacing:v,attributes:y,...b}=o,x=(0,s.I)({name:"AvatarGroup",classes:p,props:o,className:r,style:l,classNames:n,styles:d,unstyled:u,attributes:y,vars:m,varsResolver:g,rootSelector:"group"});return(0,a.jsx)(h,{value:!0,children:(0,a.jsx)(c.a,{ref:t,...x("group"),...b})})});function y(e){return(0,a.jsx)("svg",{...e,"data-avatar-placeholder-icon":!0,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{d:"M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}v.classes=p,v.displayName="@mantine/core/AvatarGroup";let b=["blue","cyan","grape","green","indigo","lime","orange","pink","red","teal","violet"],x=(0,l.V)((e,{size:t,radius:o,variant:a,gradient:n,color:l,autoContrast:i,name:s,allowedInitialsColors:c})=>{let d="initials"===l&&"string"==typeof s?function(e,t=b){let o=Math.abs(function(e){let t=0;for(let o=0;o<e.length;o+=1)t=(t<<5)-t+e.charCodeAt(o)|0;return t}(e))%t.length;return t[o]}(s,c):l,p=e.variantColorResolver({color:d||"gray",theme:e,gradient:n,variant:a||"light",autoContrast:i});return{root:{"--avatar-size":(0,r.YC)(t,"avatar-size"),"--avatar-radius":void 0===o?void 0:(0,r.nJ)(o),"--avatar-bg":d||a?p.background:void 0,"--avatar-color":d||a?p.color:void 0,"--avatar-bd":d||a?p.border:void 0}}}),f=(0,d.v)((e,t)=>{let o=(0,i.Y)("Avatar",null,e),{classNames:r,className:l,style:d,styles:u,unstyled:h,vars:g,src:v,alt:b,radius:f,color:A,gradient:j,imageProps:w,children:k,autoContrast:S,mod:C,name:P,allowedInitialsColors:V,attributes:D,...R}=o,O={withinGroup:!!(0,n.useContext)(m)},[M,Y]=(0,n.useState)(!v),E=(0,s.I)({name:"Avatar",props:o,classes:p,className:l,style:d,classNames:r,styles:u,unstyled:h,attributes:D,vars:g,varsResolver:x});return(0,n.useEffect)(()=>Y(!v),[v]),(0,a.jsx)(c.a,{...E("root"),mod:[{"within-group":O.withinGroup},C],ref:t,...R,children:M||!v?(0,a.jsx)("span",{...E("placeholder"),title:b,children:k||"string"==typeof P&&function(e,t=2){let o=e.split(" ");return 1===o.length?e.slice(0,t).toUpperCase():o.map(e=>e[0]).slice(0,t).join("").toUpperCase()}(P)||(0,a.jsx)(y,{})}):(0,a.jsx)("img",{...w,...E("image"),src:v,alt:b,onError:e=>{Y(!0),w?.onError?.(e)}})})});f.classes=p,f.displayName="@mantine/core/Avatar",f.Group=v}},e=>{e.O(0,[38547,2061,90636,46593,38792],()=>e(e.s=7221)),_N_E=e.O()}]);