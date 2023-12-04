(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9353],{93693:function(e,t,o){"use strict";o.d(t,{Z:function(){return r}});var r=(0,o(54764).Z)("at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},67361:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/multi-select",function(){return o(89581)}])},89581:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return ew}});var r=o(24246),l=o(71670),n=o(3916),a=o(30289),i=o(27378),c=o(67415);let d=`
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
`,s={type:"code",component:function(){return i.createElement(c.N,{label:"Your favorite libraries",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"]})},code:d,maxWidth:340,centered:!0},u=`
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
`,p={type:"code",component:function(){return i.createElement(c.N,{label:"Your favorite libraries",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],defaultValue:["React"],clearable:!0})},code:u,maxWidth:340,centered:!0},h=`
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
`,m={type:"code",component:function(){return i.createElement(c.N,{label:"Your favorite libraries",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],searchable:!0})},code:h,maxWidth:340,centered:!0},b=`
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
`,f={type:"code",component:function(){return i.createElement(c.N,{label:"Your favorite libraries",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],searchable:!0,nothingFoundMessage:"Nothing found..."})},code:b,maxWidth:340,centered:!0},v=`
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
`,x={type:"configurator",component:function(e){return i.createElement(c.N,{...e,data:["React","Angular","Svelte","Vue"],dropdownOpened:!0,pb:150,label:"Control check icon",placeholder:"Pick value",defaultValue:["React"]})},code:v,centered:!0,maxWidth:340,controls:[{type:"boolean",prop:"withCheckIcon",initialValue:!0,libraryValue:!0},{type:"segmented",prop:"checkIconPosition",initialValue:"left",libraryValue:null,data:["left","right"]}]},g=`
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
`,S={type:"code",component:function(){return i.createElement(c.N,{label:"Your favorite libraries",placeholder:"Select up to 2 libraries",data:["React","Angular","Vue","Svelte"],maxValues:2})},code:g,maxWidth:340,centered:!0},j=`
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
`,y={type:"code",component:function(){return i.createElement(c.N,{label:"Your favorite libraries",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],hidePickedOptions:!0})},code:j,maxWidth:340,centered:!0},w=`
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
`,V=({options:e,search:t})=>{let o=t.toLowerCase().trim().split(" ");return e.filter(e=>{let t=e.label.toLowerCase().trim().split(" ");return o.every(e=>t.some(t=>t.includes(e)))})},M={type:"code",component:function(){return i.createElement(c.N,{label:"What countries have you visited?",placeholder:"Pick values",data:["Great Britain","Russian Federation","United States"],filter:V,searchable:!0})},code:w,maxWidth:340,centered:!0},P=`
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
`,k=({options:e,search:t})=>{let o=e.filter(e=>e.label.toLowerCase().trim().includes(t.toLowerCase().trim()));return o.sort((e,t)=>e.label.localeCompare(t.label)),o},A={type:"code",component:function(){return i.createElement(c.N,{label:"Your favorite libraries",placeholder:"Pick values",data:["4 – React","1 – Angular","3 – Vue","2 – Svelte"],filter:k,searchable:!0})},code:P,maxWidth:340,centered:!0},R=`
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
`,D=Array(1e5).fill(0).map((e,t)=>`Option ${t}`),E={type:"code",component:function(){return i.createElement(c.N,{label:"100 000 options autocomplete",placeholder:"Use limit to optimize performance",limit:5,data:D,searchable:!0})},code:R,maxWidth:340,centered:!0},N=`
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
`,Y=Array(100).fill(0).map((e,t)=>`Option ${t}`),C={type:"code",component:function(){return i.createElement(i.Fragment,null,i.createElement(c.N,{label:"With scroll area (default)",placeholder:"Pick value",data:Y,maxDropdownHeight:200}),i.createElement(c.N,{label:"With native scroll",placeholder:"Pick value",data:Y,withScrollArea:!1,styles:{dropdown:{maxHeight:200,overflowY:"auto"}},mt:"md"}))},code:N,maxWidth:340,centered:!0},W=`
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
`,I={type:"code",component:function(){return i.createElement(c.N,{label:"Your favorite libraries",placeholder:"Pick value",data:[{group:"Frontend",items:["React","Angular"]},{group:"Backend",items:["Express","Django"]}]})},code:W,maxWidth:340,centered:!0},F=`
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
`,O={type:"code",component:function(){return i.createElement(c.N,{label:"Your favorite libraries",placeholder:"Pick value",data:[{value:"react",label:"React"},{value:"ng",label:"Angular"},{value:"vue",label:"Vue",disabled:!0},{value:"svelte",label:"Svelte",disabled:!0}]})},code:F,maxWidth:340,centered:!0};var T=o(63433),B=o(8671);let _=`
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
`,z={type:"code",code:_,centered:!0,component:function(){return i.createElement(T.J,{width:300,position:"bottom",withArrow:!0,shadow:"md"},i.createElement(T.J.Target,null,i.createElement(B.z,null,"Toggle popover")),i.createElement(T.J.Dropdown,null,i.createElement(c.N,{label:"Your favorite libraries",placeholder:"Pick values",data:["React","Angular","Vue","Svelte"],comboboxProps:{withinPortal:!1}})))}};var L=o(87921);let q=`
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
`,H={type:"code",component:function(){let[e,{toggle:t}]=(0,L.q)();return i.createElement(i.Fragment,null,i.createElement(B.z,{onClick:t,mb:"md"},"Toggle dropdown"),i.createElement(c.N,{label:"Your favorite library",placeholder:"Pick values",data:["React","Angular","Vue","Svelte"],dropdownOpened:e}))},code:q,maxWidth:340,centered:!0},Z=`
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
`,U={type:"code",component:function(){return i.createElement(c.N,{label:"Your favorite libraries",placeholder:"Pick values",data:["React","Angular","Vue","Svelte"],comboboxProps:{position:"top",middlewares:{flip:!1,shift:!1}}})},code:Z,maxWidth:340,centered:!0};var G={dropdown:"m-a9824888",input:"m-f5487eb3"};let $=`.dropdown {
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
`,X={type:"code",component:function(){return i.createElement(c.N,{label:"Your favorite library",placeholder:"Pick values",data:["React","Angular","Vue","Svelte"],classNames:G,comboboxProps:{position:"bottom",middlewares:{flip:!1,shift:!1},offset:0}})},code:[{fileName:"Demo.tsx",code:J,language:"tsx"},{fileName:"Demo.module.css",code:$,language:"scss"}],maxWidth:340,centered:!0},K=`
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
`,Q={type:"code",component:function(){return i.createElement(c.N,{label:"Your favorite libraries",placeholder:"Pick values",data:["React","Angular","Vue","Svelte"],comboboxProps:{transitionProps:{transition:"pop",duration:200}}})},code:K,maxWidth:340,centered:!0},ee=`
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
`,et={type:"code",component:function(){return i.createElement(i.Fragment,null,i.createElement(c.N,{label:"Zero padding",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],comboboxProps:{dropdownPadding:0}}),i.createElement(c.N,{mt:"md",label:"10px padding",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],comboboxProps:{dropdownPadding:10}}))},code:ee,maxWidth:340,centered:!0},eo=`
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
`,er={type:"code",component:function(){return i.createElement(c.N,{label:"Your favorite libraries",placeholder:"Pick values",data:["React","Angular","Vue","Svelte"],comboboxProps:{shadow:"md"}})},code:eo,maxWidth:340,centered:!0};var el=o(71078),en=o(94503);let ea=`
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
`,ei={type:"code",component:function(){let e=i.createElement(en.Z,{style:{width:(0,el.h)(16),height:(0,el.h)(16)}});return i.createElement(i.Fragment,null,i.createElement(c.N,{data:["React","Angular","Vue"],leftSectionPointerEvents:"none",leftSection:e,label:"Your favorite libraries",placeholder:"Your favorite libraries"}),i.createElement(c.N,{mt:"md",data:["React","Angular","Vue"],rightSectionPointerEvents:"none",rightSection:e,label:"Your favorite libraries",placeholder:"Your favorite libraries"}))},maxWidth:340,centered:!0,code:ea};var ec=o(77481);let ed=`
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
`,es={type:"configurator",component:function(e){return i.createElement(c.N,{...e,placeholder:"MultiSelect placeholder",data:["React","Angular","Vue","Svelte"]})},code:ed,centered:!0,maxWidth:340,controls:ec.pc},eu=`
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
`,ep={type:"code",component:function(){return i.createElement(c.N,{label:"Your favorite libraries",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],readOnly:!0})},code:eu,maxWidth:340,centered:!0},eh=`
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
`,em={type:"code",component:function(){return i.createElement(c.N,{label:"Your favorite libraries",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],disabled:!0})},code:eh,maxWidth:340,centered:!0},eb=`
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
`,ef={type:"code",component:function(){return i.createElement(i.Fragment,null,i.createElement(c.N,{label:"Boolean error",placeholder:"Boolean error",error:!0,data:["React","Angular","Vue","Svelte"]}),i.createElement(c.N,{mt:"md",label:"With error message",placeholder:"With error message",error:"Invalid name",data:["React","Angular","Vue","Svelte"]}))},maxWidth:340,centered:!0,code:eb};var ev=o(93693),ex=o(7634);let eg=`
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
`,eS={type:"styles-api",data:ex.L,component:function(e){return i.createElement(c.N,{...e,dropdownOpened:!0,leftSection:i.createElement(ev.Z,{style:{width:(0,el.h)(18),height:(0,el.h)(18)},stroke:1.5}),withAsterisk:!0,label:"MultiSelect",description:"Description",placeholder:"MultiSelect",defaultValue:["React","Angular"],data:[{group:"Frontend",items:["React","Angular"]},{group:"Backend",items:["Node","Django"]}]})},code:eg,centered:!0,maxWidth:340},ej=(0,n.A)(a.us.MultiSelect);function ey(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components},{ComboboxData:o,ComboboxDisclaimer:n,ComboboxFiltering:a,ComboboxLargeData:i,ComboboxProps:c,Demo:d,GetElementRef:u,InputAccessibility:h,InputFeatures:b,InputSections:v,StylesApiSelectors:g}=t;return o||eV("ComboboxData",!0),n||eV("ComboboxDisclaimer",!0),a||eV("ComboboxFiltering",!0),i||eV("ComboboxLargeData",!0),c||eV("ComboboxProps",!0),d||eV("Demo",!0),u||eV("GetElementRef",!0),h||eV("InputAccessibility",!0),b||eV("InputFeatures",!0),v||eV("InputSections",!0),g||eV("StylesApiSelectors",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n,{component:"MultiSelect"}),"\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"MultiSelect"})," provides a way to enter multiple values.\n",(0,r.jsx)(t.code,{children:"MultiSelect"})," is similar to ",(0,r.jsx)(t.a,{href:"/core/tags-input",children:"TagsInput"}),", but it does not allow entering custom values."]}),"\n",(0,r.jsx)(d,{data:s}),"\n",(0,r.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"MultiSelect"})," value must be an array of strings, other types are not supported.\n",(0,r.jsx)(t.code,{children:"onChange"})," function is called with an array of strings as a single argument."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { MultiSelect } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState<string[]>([]);\n  return <MultiSelect data={[]} value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"clearable",children:"Clearable"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"clearable"})," prop to display the clear button in the right section. The button is not displayed\nwhen:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"The component does not have a value"}),"\n",(0,r.jsx)(t.li,{children:"The component is disabled"}),"\n",(0,r.jsx)(t.li,{children:"The component is read only"}),"\n"]}),"\n",(0,r.jsx)(d,{data:p}),"\n",(0,r.jsx)(t.h2,{id:"searchable",children:"Searchable"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"searchable"})," prop to allow filtering options by user input:"]}),"\n",(0,r.jsx)(d,{data:m}),"\n",(0,r.jsx)(t.h2,{id:"controlled-search-value",children:"Controlled search value"}),"\n",(0,r.jsxs)(t.p,{children:["You can control search value with ",(0,r.jsx)(t.code,{children:"searchValue"})," and ",(0,r.jsx)(t.code,{children:"onSearchChange"})," props:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { MultiSelect } from '@mantine/core';\n\nfunction Demo() {\n  const [searchValue, setSearchValue] = useState('');\n  return (\n    <MultiSelect\n      searchable\n      searchValue={searchValue}\n      onSearchChange={setSearchValue}\n      data={[]}\n    />\n  );\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"nothing-found",children:"Nothing found"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"nothingFoundMessage"})," prop to display given message when no options match search query.\nIf ",(0,r.jsx)(t.code,{children:"nothingFoundMessage"})," is not set, ",(0,r.jsx)(t.code,{children:"MultiSelect"})," dropdown will be hidden when no options match search query.\nThe message is not displayed when trimmed search query is empty."]}),"\n",(0,r.jsx)(d,{data:f}),"\n",(0,r.jsx)(t.h2,{id:"checked-option-icon",children:"Checked option icon"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"checkIconPosition"})," prop to ",(0,r.jsx)(t.code,{children:"left"})," or ",(0,r.jsx)(t.code,{children:"right"})," to control position of check icon in active option.\nTo remove the check icon, set ",(0,r.jsx)(t.code,{children:"withCheckIcon={false}"}),"."]}),"\n",(0,r.jsx)(d,{data:x}),"\n",(0,r.jsx)(t.h2,{id:"max-selected-values",children:"Max selected values"}),"\n",(0,r.jsxs)(t.p,{children:["You can limit the number of selected values with ",(0,r.jsx)(t.code,{children:"maxValues"})," prop. This will not allow adding more values\nonce the limit is reached."]}),"\n",(0,r.jsx)(d,{data:S}),"\n",(0,r.jsx)(t.h2,{id:"hide-selected-options",children:"Hide selected options"}),"\n",(0,r.jsxs)(t.p,{children:["To remove selected options from the list of available options, set ",(0,r.jsx)(t.code,{children:"hidePickedOptions"})," prop:"]}),"\n",(0,r.jsx)(d,{data:y}),"\n",(0,r.jsx)(o,{component:"MultiSelect"}),"\n",(0,r.jsx)(a,{component:"MultiSelect"}),"\n",(0,r.jsx)(d,{data:M}),"\n",(0,r.jsx)(t.h2,{id:"sort-options",children:"Sort options"}),"\n",(0,r.jsxs)(t.p,{children:["By default, options are sorted by their position in the data array. You can change this behavior\nwith ",(0,r.jsx)(t.code,{children:"filter"})," function:"]}),"\n",(0,r.jsx)(d,{data:A}),"\n",(0,r.jsx)(i,{component:"MultiSelect"}),"\n",(0,r.jsx)(d,{data:E}),"\n",(0,r.jsx)(t.h2,{id:"scrollable-dropdown",children:"Scrollable dropdown"}),"\n",(0,r.jsxs)(t.p,{children:["By default, the options list is wrapped with ",(0,r.jsx)(t.a,{href:"/core/scroll-area",children:"ScrollArea.Autosize"}),".\nYou can control dropdown max-height with ",(0,r.jsx)(t.code,{children:"maxDropdownHeight"})," prop if you do not change the default settings."]}),"\n",(0,r.jsxs)(t.p,{children:["If you want to use native scrollbars, set ",(0,r.jsx)(t.code,{children:"withScrollArea={false}"}),". Note that in this case,\nyou will need to change dropdown styles with ",(0,r.jsx)(t.a,{href:"/styles/styles-api",children:"Styles API"}),"."]}),"\n",(0,r.jsx)(d,{data:C}),"\n",(0,r.jsx)(t.h2,{id:"group-options",children:"Group options"}),"\n",(0,r.jsx)(d,{data:I}),"\n",(0,r.jsx)(t.h2,{id:"disabled-options",children:"Disabled options"}),"\n",(0,r.jsxs)(t.p,{children:["When option is disabled, it cannot be selected and is ignored in keyboard navigation.\nNote that user can still enter disabled option as a value. If you want to prohibit certain values,\nuse controlled component and filter them out in ",(0,r.jsx)(t.code,{children:"onChange"})," function."]}),"\n",(0,r.jsx)(d,{data:O}),"\n",(0,r.jsx)(c,{component:"MultiSelect"}),"\n",(0,r.jsx)(t.h2,{id:"inside-popover",children:"Inside Popover"}),"\n",(0,r.jsxs)(t.p,{children:["To use ",(0,r.jsx)(t.code,{children:"MultiSelect"})," inside popover, you need to set ",(0,r.jsx)(t.code,{children:"withinPortal: false"}),":"]}),"\n",(0,r.jsx)(d,{data:z}),"\n",(0,r.jsx)(t.h2,{id:"control-dropdown-opened-state",children:"Control dropdown opened state"}),"\n",(0,r.jsxs)(t.p,{children:["You can control dropdown opened state with ",(0,r.jsx)(t.code,{children:"dropdownOpened"})," prop. Additionally,\nyou can use ",(0,r.jsx)(t.code,{children:"onDropdownClose"})," and ",(0,r.jsx)(t.code,{children:"onDropdownOpen"})," to listen to dropdown opened state changes."]}),"\n",(0,r.jsx)(d,{data:H}),"\n",(0,r.jsx)(t.h2,{id:"dropdown-position",children:"Dropdown position"}),"\n",(0,r.jsxs)(t.p,{children:["By default, the dropdown is displayed below the input if there is enough space; otherwise it is displayed above the input.\nYou can change this behavior by setting ",(0,r.jsx)(t.code,{children:"position"})," and ",(0,r.jsx)(t.code,{children:"middlewares"})," props, which are passed down to the\nunderlying ",(0,r.jsx)(t.a,{href:"/core/popover",children:"Popover"})," component."]}),"\n",(0,r.jsx)(t.p,{children:"Example of dropdown that is always displayed above the input:"}),"\n",(0,r.jsx)(d,{data:U}),"\n",(0,r.jsx)(t.h2,{id:"dropdown-offset",children:"Dropdown offset"}),"\n",(0,r.jsxs)(t.p,{children:["To change dropdown offset, set ",(0,r.jsx)(t.code,{children:"offset"})," prop in ",(0,r.jsx)(t.code,{children:"comboboxProps"}),":"]}),"\n",(0,r.jsx)(d,{data:X}),"\n",(0,r.jsx)(t.h2,{id:"dropdown-animation",children:"Dropdown animation"}),"\n",(0,r.jsxs)(t.p,{children:["By default, dropdown animations are disabled. To enable them, you can set ",(0,r.jsx)(t.code,{children:"transitionProps"}),",\nwhich will be passed down to the underlying ",(0,r.jsx)(t.a,{href:"/core/transition",children:"Transition"})," component."]}),"\n",(0,r.jsx)(d,{data:Q}),"\n",(0,r.jsx)(t.h2,{id:"dropdown-padding",children:"Dropdown padding"}),"\n",(0,r.jsx)(d,{data:et}),"\n",(0,r.jsx)(t.h2,{id:"dropdown-shadow",children:"Dropdown shadow"}),"\n",(0,r.jsx)(d,{data:er}),"\n",(0,r.jsx)(v,{component:"MultiSelect"}),"\n",(0,r.jsx)(d,{data:ei}),"\n",(0,r.jsx)(t.h2,{id:"input-props",children:"Input props"}),"\n",(0,r.jsx)(b,{component:"MultiSelect",element:"input"}),"\n",(0,r.jsx)(d,{data:es}),"\n",(0,r.jsx)(t.h2,{id:"read-only",children:"Read only"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"readOnly"})," to make the input read only. When ",(0,r.jsx)(t.code,{children:"readOnly"})," is set,\n",(0,r.jsx)(t.code,{children:"MultiSelect"})," will not show suggestions and will not call ",(0,r.jsx)(t.code,{children:"onChange"})," function."]}),"\n",(0,r.jsx)(d,{data:ep}),"\n",(0,r.jsx)(t.h2,{id:"disabled",children:"Disabled"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"disabled"})," to disable the input. When ",(0,r.jsx)(t.code,{children:"disabled"})," is set,\nuser cannot interact with the input and ",(0,r.jsx)(t.code,{children:"MultiSelect"})," will not show suggestions."]}),"\n",(0,r.jsx)(d,{data:em}),"\n",(0,r.jsx)(t.h2,{id:"error-state",children:"Error state"}),"\n",(0,r.jsx)(d,{data:ef}),"\n",(0,r.jsx)(g,{component:"MultiSelect"}),"\n",(0,r.jsx)(d,{data:eS}),"\n",(0,r.jsx)(u,{component:"MultiSelect",refType:"input"}),"\n",(0,r.jsx)(h,{component:"MultiSelect"}),"\n",(0,r.jsxs)(t.p,{children:["To set ",(0,r.jsx)(t.code,{children:"aria-label"})," on the clear button, use ",(0,r.jsx)(t.code,{children:"clearButtonProps"}),". Note that it is required\nonly when ",(0,r.jsx)(t.code,{children:"clearable"})," is set."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { MultiSelect } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <MultiSelect\n      data={[]}\n      clearable\n      clearButtonProps={{\n        'aria-label': 'Clear input',\n      }}\n    />\n  );\n}\n"})})]})}function ew(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(ej,{...e,children:(0,r.jsx)(ey,{...e})})}function eV(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},77481:function(e,t,o){"use strict";o.d(t,{Mt:function(){return r},nW:function(){return l},pc:function(){return n}});let r=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],l=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],n=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]},87921:function(e,t,o){"use strict";o.d(t,{q:function(){return l}});var r=o(27378);function l(e=!1,t){let{onOpen:o,onClose:l}=t||{},[n,a]=(0,r.useState)(e),i=(0,r.useCallback)(()=>{a(e=>e||(o?.(),!0))},[o]),c=(0,r.useCallback)(()=>{a(e=>e?(l?.(),!1):e)},[l]),d=(0,r.useCallback)(()=>{n?c():i()},[c,i,n]);return[n,{open:i,close:c,toggle:d}]}}},function(e){e.O(0,[370,5819,2775,5608,7415,9774,2888,179],function(){return e(e.s=67361)}),_N_E=e.O()}]);