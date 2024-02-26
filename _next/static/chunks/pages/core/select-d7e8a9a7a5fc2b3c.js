(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[75089],{90318:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(54764).Z)("align-center","IconAlignCenter",[["path",{d:"M4 6l16 0",key:"svg-0"}],["path",{d:"M8 12l8 0",key:"svg-1"}],["path",{d:"M6 18l12 0",key:"svg-2"}]])},68577:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(54764).Z)("align-justified","IconAlignJustified",[["path",{d:"M4 6l16 0",key:"svg-0"}],["path",{d:"M4 12l16 0",key:"svg-1"}],["path",{d:"M4 18l12 0",key:"svg-2"}]])},89483:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(54764).Z)("align-left","IconAlignLeft",[["path",{d:"M4 6l16 0",key:"svg-0"}],["path",{d:"M4 12l10 0",key:"svg-1"}],["path",{d:"M4 18l14 0",key:"svg-2"}]])},4861:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(54764).Z)("align-right","IconAlignRight",[["path",{d:"M4 6l16 0",key:"svg-0"}],["path",{d:"M10 12l10 0",key:"svg-1"}],["path",{d:"M6 18l14 0",key:"svg-2"}]])},93693:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(54764).Z)("at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},76623:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/select",function(){return n(16129)}])},16129:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ew}});var o=n(24246),r=n(71670),l=n(27378),a=n(2570);let i=`
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
`,c={type:"code",component:function(){return l.createElement(a.P,{label:"Your favorite library",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"]})},code:i,maxWidth:340,centered:!0},d=`
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
`,s={type:"code",component:function(){return l.createElement(a.P,{label:"Your favorite library",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],defaultValue:"React",clearable:!0})},code:d,maxWidth:340,centered:!0},u=`
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
`,p={type:"code",component:function(){return l.createElement(l.Fragment,null,l.createElement(a.P,{label:"Option can NOT be deselected",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],defaultValue:"React",allowDeselect:!1}),l.createElement(a.P,{label:"Option can be deselected",description:"This is default behavior, click 'React' in the dropdown",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],defaultValue:"React",allowDeselect:!0,mt:"md"}))},code:u,maxWidth:340,centered:!0},h=`
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
`,m={type:"code",component:function(){return l.createElement(a.P,{label:"Your favorite library",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],searchable:!0})},code:h,maxWidth:340,centered:!0},f=`
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
`,b={type:"code",component:function(){return l.createElement(a.P,{label:"Your favorite library",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],searchable:!0,nothingFoundMessage:"Nothing found..."})},code:f,maxWidth:340,centered:!0},g=`
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
`,v={type:"configurator",component:function(e){return l.createElement(a.P,{...e,data:["React","Angular","Svelte","Vue"],dropdownOpened:!0,pb:150,label:"Control check icon",placeholder:"Pick value",defaultValue:"React"})},code:g,centered:!0,maxWidth:340,controls:[{type:"boolean",prop:"withCheckIcon",initialValue:!0,libraryValue:!0},{type:"segmented",prop:"checkIconPosition",initialValue:"left",libraryValue:null,data:["left","right"]}]},x=`
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
`,y=({options:e,search:t})=>{let n=t.toLowerCase().trim().split(" ");return e.filter(e=>{let t=e.label.toLowerCase().trim().split(" ");return n.every(e=>t.some(t=>t.includes(e)))})},S={type:"code",component:function(){return l.createElement(a.P,{label:"Your country",placeholder:"Pick value",data:["Great Britain","Russian Federation","United States"],filter:y,searchable:!0})},code:x,maxWidth:340,centered:!0},w=`
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
`,j=({options:e,search:t})=>{let n=e.filter(e=>e.label.toLowerCase().trim().includes(t.toLowerCase().trim()));return n.sort((e,t)=>e.label.localeCompare(t.label)),n},P={type:"code",component:function(){return l.createElement(a.P,{label:"Your favorite library",placeholder:"Pick value",data:["4 – React","1 – Angular","3 – Vue","2 – Svelte"],filter:j,nothingFoundMessage:"Nothing found...",searchable:!0})},code:w,maxWidth:340,centered:!0},k=`
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
`,V=Array(1e5).fill(0).map((e,t)=>`Option ${t}`),E={type:"code",component:function(){return l.createElement(a.P,{label:"100 000 options autocomplete",placeholder:"Use limit to optimize performance",limit:5,data:V,searchable:!0})},code:k,maxWidth:340,centered:!0};var A=n(64563);let D=`
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
`,R=Array(100).fill(0).map((e,t)=>`Option ${t}`),C={type:"code",component:function(){return l.createElement(l.Fragment,null,l.createElement(a.P,{label:"With scroll area (default)",placeholder:"Pick value",data:R,maxDropdownHeight:200}),l.createElement(a.P,{label:"With native scroll",placeholder:"Pick value",data:R,withScrollArea:!1,styles:{dropdown:{maxHeight:200,overflowY:"auto"}},mt:"md"}))},code:D,maxWidth:340,centered:!0},I=`
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
`,O={type:"code",component:function(){return l.createElement(a.P,{label:"Your favorite library",placeholder:"Pick value",data:[{group:"Frontend",items:["React","Angular"]},{group:"Backend",items:["Express","Django"]}]})},code:I,maxWidth:340,centered:!0},Y=`
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
`,W={type:"code",component:function(){return l.createElement(a.P,{label:"Your favorite library",placeholder:"Pick value",data:[{value:"react",label:"React"},{value:"ng",label:"Angular"},{value:"vue",label:"Vue",disabled:!0},{value:"svelte",label:"Svelte",disabled:!0}]})},code:Y,maxWidth:340,centered:!0};var F=n(63433),N=n(8671);let T=`
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
`,M={type:"code",code:T,centered:!0,component:function(){return l.createElement(F.J,{width:300,position:"bottom",withArrow:!0,shadow:"md"},l.createElement(F.J.Target,null,l.createElement(N.z,null,"Toggle popover")),l.createElement(F.J.Dropdown,null,l.createElement(a.P,{label:"Your favorite library",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],comboboxProps:{withinPortal:!1}})))}};var B=n(87921);let Z=`
import { Select, Button } from '@mantine/core';

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
`,z={type:"code",component:function(){let[e,{toggle:t}]=(0,B.q)();return l.createElement(l.Fragment,null,l.createElement(N.z,{onClick:t,mb:"md"},"Toggle dropdown"),l.createElement(a.P,{label:"Your favorite library",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],dropdownOpened:e}))},code:Z,maxWidth:340,centered:!0},_=`
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
`,L={type:"code",component:function(){return l.createElement(a.P,{label:"Your favorite library",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],comboboxProps:{position:"top",middlewares:{flip:!1,shift:!1}}})},code:_,maxWidth:340,centered:!0};var G={dropdown:"m-f33bcc41",input:"m-37973d9a"};let J=`.dropdown {
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
`,$=`
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
`,q={type:"code",component:function(){return l.createElement(a.P,{label:"Your favorite library",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],classNames:G,comboboxProps:{position:"bottom",middlewares:{flip:!1,shift:!1},offset:0}})},code:[{fileName:"Demo.tsx",code:$,language:"tsx"},{fileName:"Demo.module.css",code:J,language:"scss"}],maxWidth:340,centered:!0},U=`
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
`,H={type:"code",component:function(){return l.createElement(a.P,{label:"Your favorite library",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],comboboxProps:{transitionProps:{transition:"pop",duration:200}}})},code:U,maxWidth:340,centered:!0},X=`
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
`,K={type:"code",component:function(){return l.createElement(l.Fragment,null,l.createElement(a.P,{label:"Zero padding",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],comboboxProps:{dropdownPadding:0}}),l.createElement(a.P,{mt:"md",label:"10px padding",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],comboboxProps:{dropdownPadding:10}}))},code:X,maxWidth:340,centered:!0},Q=`
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
`,ee={type:"code",component:function(){return l.createElement(a.P,{label:"Your favorite library",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],comboboxProps:{shadow:"md"}})},code:Q,maxWidth:340,centered:!0};var et=n(94503),en=n(71078);let eo=`
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
`,er={type:"code",component:function(){let e=l.createElement(et.Z,{style:{width:(0,en.h)(16),height:(0,en.h)(16)}});return l.createElement(l.Fragment,null,l.createElement(a.P,{data:["React","Angular","Vue"],leftSectionPointerEvents:"none",leftSection:e,label:"Your favorite library",placeholder:"Your favorite library"}),l.createElement(a.P,{mt:"md",data:["React","Angular","Vue"],rightSectionPointerEvents:"none",rightSection:e,label:"Your favorite library",placeholder:"Your favorite library"}))},maxWidth:340,centered:!0,code:eo};var el=n(77481);let ea=`
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
`,ei={type:"configurator",component:function(e){return l.createElement(a.P,{...e,placeholder:"Select placeholder",data:["React","Angular","Vue","Svelte"]})},code:ea,centered:!0,maxWidth:340,controls:el.pc},ec=`
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
`,ed={type:"code",component:function(){return l.createElement(a.P,{label:"Your favorite library",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],readOnly:!0})},code:ec,maxWidth:340,centered:!0},es=`
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
`,eu={type:"code",component:function(){return l.createElement(a.P,{label:"Your favorite library",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],disabled:!0})},code:es,maxWidth:340,centered:!0},ep=`
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
`,eh={type:"code",component:function(){return l.createElement(l.Fragment,null,l.createElement(a.P,{label:"Boolean error",placeholder:"Boolean error",error:!0,data:["React","Angular","Vue","Svelte"]}),l.createElement(a.P,{mt:"md",label:"With error message",placeholder:"With error message",error:"Invalid name",data:["React","Angular","Vue","Svelte"]}))},maxWidth:340,centered:!0,code:ep};var em=n(93693),ef=n(61309);let eb=`
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
`,eg={type:"styles-api",data:ef.i,component:function(e){return l.createElement(a.P,{...e,dropdownOpened:!0,leftSection:l.createElement(em.Z,{style:{width:(0,en.h)(18),height:(0,en.h)(18)},stroke:1.5}),withAsterisk:!0,label:"Select",description:"Description",placeholder:"Select",data:[{group:"Frontend",items:["React","Angular"]},{group:"Backend",items:["Node","Django"]}]})},code:eb,centered:!0,maxWidth:340};var ev=n(3916),ex=n(54568);let ey=(0,ev.A)(ex.us.Select);function eS(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components},{ComboboxData:n,ComboboxDisclaimer:l,ComboboxFiltering:a,ComboboxLargeData:i,ComboboxProps:d,Demo:u,GetElementRef:h,InputAccessibility:f,InputFeatures:g,InputSections:x,StylesApiSelectors:y}=t;return n||ej("ComboboxData",!0),l||ej("ComboboxDisclaimer",!0),a||ej("ComboboxFiltering",!0),i||ej("ComboboxLargeData",!0),d||ej("ComboboxProps",!0),u||ej("Demo",!0),h||ej("GetElementRef",!0),f||ej("InputAccessibility",!0),g||ej("InputFeatures",!0),x||ej("InputSections",!0),y||ej("StylesApiSelectors",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l,{component:"Select"}),"\n",(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"Select"})," allows capturing user input based on suggestions from the list.\nUnlike ",(0,o.jsx)(t.a,{href:"/core/autocomplete/",children:"Autocomplete"}),", ",(0,o.jsx)(t.code,{children:"Select"})," does not allow entering custom values."]}),"\n",(0,o.jsx)(u,{data:c}),"\n",(0,o.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"Select"})," value must be a string, other types are not supported.\n",(0,o.jsx)(t.code,{children:"onChange"})," function is called with a string value as a single argument."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Select } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState<string | null>('');\n  return <Select data={[]} value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"onchange-handler",children:"onChange handler"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"onChange"})," is called with two arguments:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"value"})," - string value of the selected option"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"option"})," – selected option object"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"If you prefer object format in state, use second argument of onChange handler:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { ComboboxItem, Select } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState<ComboboxItem | null>(null);\n  return (\n    <Select\n      data={[{ value: 'react', label: 'React library' }]}\n      value={value ? value.value : null}\n      onChange={(_value, option) => setValue(option)}\n    />\n  );\n}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"clearable",children:"Clearable"}),"\n",(0,o.jsxs)(t.p,{children:["Set ",(0,o.jsx)(t.code,{children:"clearable"})," prop to display the clear button in the right section. The button is not displayed\nwhen:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"The component does not have a value"}),"\n",(0,o.jsx)(t.li,{children:"The component is disabled"}),"\n",(0,o.jsx)(t.li,{children:"The component is read only"}),"\n"]}),"\n",(0,o.jsx)(u,{data:s}),"\n",(0,o.jsx)(t.h2,{id:"allow-deselect",children:"Allow deselect"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"allowDeselect"})," prop determines whether the value should be deselected when user clicks on the selected option.\nBy default, ",(0,o.jsx)(t.code,{children:"allowDeselect"})," is ",(0,o.jsx)(t.code,{children:"true"}),":"]}),"\n",(0,o.jsx)(u,{data:p}),"\n",(0,o.jsx)(t.h2,{id:"searchable",children:"Searchable"}),"\n",(0,o.jsxs)(t.p,{children:["Set ",(0,o.jsx)(t.code,{children:"searchable"})," prop to allow filtering options by user input:"]}),"\n",(0,o.jsx)(u,{data:m}),"\n",(0,o.jsx)(t.h2,{id:"controlled-search-value",children:"Controlled search value"}),"\n",(0,o.jsxs)(t.p,{children:["You can control search value with ",(0,o.jsx)(t.code,{children:"searchValue"})," and ",(0,o.jsx)(t.code,{children:"onSearchChange"})," props:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Select } from '@mantine/core';\n\nfunction Demo() {\n  const [searchValue, setSearchValue] = useState('');\n  return (\n    <Select\n      searchable\n      searchValue={searchValue}\n      onSearchChange={setSearchValue}\n      data={[]}\n    />\n  );\n}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"nothing-found",children:"Nothing found"}),"\n",(0,o.jsxs)(t.p,{children:["Set ",(0,o.jsx)(t.code,{children:"nothingFoundMessage"})," prop to display given message when no options match search query.\nIf ",(0,o.jsx)(t.code,{children:"nothingFoundMessage"})," is not set, ",(0,o.jsx)(t.code,{children:"Select"})," dropdown will be hidden when no options match search query.\nThe message is not displayed when trimmed search query is empty."]}),"\n",(0,o.jsx)(u,{data:b}),"\n",(0,o.jsx)(t.h2,{id:"checked-option-icon",children:"Checked option icon"}),"\n",(0,o.jsxs)(t.p,{children:["Set ",(0,o.jsx)(t.code,{children:"checkIconPosition"})," prop to ",(0,o.jsx)(t.code,{children:"left"})," or ",(0,o.jsx)(t.code,{children:"right"})," to control position of check icon in active option.\nTo remove the check icon, set ",(0,o.jsx)(t.code,{children:"withCheckIcon={false}"}),"."]}),"\n",(0,o.jsx)(u,{data:v}),"\n",(0,o.jsx)(n,{component:"Select"}),"\n",(0,o.jsx)(a,{component:"Select"}),"\n",(0,o.jsx)(u,{data:S}),"\n",(0,o.jsx)(t.h2,{id:"sort-options",children:"Sort options"}),"\n",(0,o.jsxs)(t.p,{children:["By default, options are sorted by their position in the data array. You can change this behavior\nwith ",(0,o.jsx)(t.code,{children:"filter"})," function:"]}),"\n",(0,o.jsx)(u,{data:P}),"\n",(0,o.jsx)(i,{component:"Select"}),"\n",(0,o.jsx)(u,{data:E}),"\n",(0,o.jsx)(t.h2,{id:"renderoption",children:"renderOption"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"renderOption"})," callback allows you to customize option rendering. It is called with option object and\nchecked state. The function must return a React node."]}),"\n",(0,o.jsx)(u,{data:A.z}),"\n",(0,o.jsx)(t.h2,{id:"scrollable-dropdown",children:"Scrollable dropdown"}),"\n",(0,o.jsxs)(t.p,{children:["By default, the options list is wrapped with ",(0,o.jsx)(t.a,{href:"/core/scroll-area",children:"ScrollArea.Autosize"}),".\nYou can control dropdown max-height with ",(0,o.jsx)(t.code,{children:"maxDropdownHeight"})," prop if you do not change the default settings."]}),"\n",(0,o.jsxs)(t.p,{children:["If you want to use native scrollbars, set ",(0,o.jsx)(t.code,{children:"withScrollArea={false}"}),". Note that in this case,\nyou will need to change dropdown styles with ",(0,o.jsx)(t.a,{href:"/styles/styles-api",children:"Styles API"}),"."]}),"\n",(0,o.jsx)(u,{data:C}),"\n",(0,o.jsx)(t.h2,{id:"group-options",children:"Group options"}),"\n",(0,o.jsx)(u,{data:O}),"\n",(0,o.jsx)(t.h2,{id:"disabled-options",children:"Disabled options"}),"\n",(0,o.jsx)(t.p,{children:"When option is disabled, it cannot be selected and is ignored in keyboard navigation."}),"\n",(0,o.jsx)(u,{data:W}),"\n",(0,o.jsx)(d,{component:"Select"}),"\n",(0,o.jsx)(t.h2,{id:"inside-popover",children:"Inside Popover"}),"\n",(0,o.jsxs)(t.p,{children:["To use ",(0,o.jsx)(t.code,{children:"Select"})," inside popover, you need to set ",(0,o.jsx)(t.code,{children:"withinPortal: false"}),":"]}),"\n",(0,o.jsx)(u,{data:M}),"\n",(0,o.jsx)(t.h2,{id:"control-dropdown-opened-state",children:"Control dropdown opened state"}),"\n",(0,o.jsxs)(t.p,{children:["You can control dropdown opened state with ",(0,o.jsx)(t.code,{children:"dropdownOpened"})," prop. Additionally,\nyou can use ",(0,o.jsx)(t.code,{children:"onDropdownClose"})," and ",(0,o.jsx)(t.code,{children:"onDropdownOpen"})," to listen to dropdown opened state changes."]}),"\n",(0,o.jsx)(u,{data:z}),"\n",(0,o.jsx)(t.h2,{id:"dropdown-position",children:"Dropdown position"}),"\n",(0,o.jsxs)(t.p,{children:["By default, the dropdown is displayed below the input if there is enough space; otherwise it is displayed above the input.\nYou can change this behavior by setting ",(0,o.jsx)(t.code,{children:"position"})," and ",(0,o.jsx)(t.code,{children:"middlewares"})," props, which are passed down to the\nunderlying ",(0,o.jsx)(t.a,{href:"/core/popover",children:"Popover"})," component."]}),"\n",(0,o.jsx)(t.p,{children:"Example of dropdown that is always displayed above the input:"}),"\n",(0,o.jsx)(u,{data:L}),"\n",(0,o.jsx)(t.h2,{id:"dropdown-offset",children:"Dropdown offset"}),"\n",(0,o.jsxs)(t.p,{children:["To change dropdown offset, set ",(0,o.jsx)(t.code,{children:"offset"})," prop in ",(0,o.jsx)(t.code,{children:"comboboxProps"}),":"]}),"\n",(0,o.jsx)(u,{data:q}),"\n",(0,o.jsx)(t.h2,{id:"dropdown-animation",children:"Dropdown animation"}),"\n",(0,o.jsxs)(t.p,{children:["By default, dropdown animations are disabled. To enable them, you can set ",(0,o.jsx)(t.code,{children:"transitionProps"}),",\nwhich will be passed down to the underlying ",(0,o.jsx)(t.a,{href:"/core/transition",children:"Transition"})," component."]}),"\n",(0,o.jsx)(u,{data:H}),"\n",(0,o.jsx)(t.h2,{id:"dropdown-padding",children:"Dropdown padding"}),"\n",(0,o.jsx)(u,{data:K}),"\n",(0,o.jsx)(t.h2,{id:"dropdown-shadow",children:"Dropdown shadow"}),"\n",(0,o.jsx)(u,{data:ee}),"\n",(0,o.jsx)(x,{component:"Select"}),"\n",(0,o.jsx)(u,{data:er}),"\n",(0,o.jsx)(t.h2,{id:"input-props",children:"Input props"}),"\n",(0,o.jsx)(g,{component:"Select",element:"input"}),"\n",(0,o.jsx)(u,{data:ei}),"\n",(0,o.jsx)(t.h2,{id:"read-only",children:"Read only"}),"\n",(0,o.jsxs)(t.p,{children:["Set ",(0,o.jsx)(t.code,{children:"readOnly"})," to make the input read only. When ",(0,o.jsx)(t.code,{children:"readOnly"})," is set,\n",(0,o.jsx)(t.code,{children:"Select"})," will not show suggestions and will not call ",(0,o.jsx)(t.code,{children:"onChange"})," function."]}),"\n",(0,o.jsx)(u,{data:ed}),"\n",(0,o.jsx)(t.h2,{id:"disabled",children:"Disabled"}),"\n",(0,o.jsxs)(t.p,{children:["Set ",(0,o.jsx)(t.code,{children:"disabled"})," to disable the input. When ",(0,o.jsx)(t.code,{children:"disabled"})," is set,\nuser cannot interact with the input and ",(0,o.jsx)(t.code,{children:"Select"})," will not show suggestions."]}),"\n",(0,o.jsx)(u,{data:eu}),"\n",(0,o.jsx)(t.h2,{id:"error-state",children:"Error state"}),"\n",(0,o.jsx)(u,{data:eh}),"\n",(0,o.jsx)(y,{component:"Select"}),"\n",(0,o.jsx)(u,{data:eg}),"\n",(0,o.jsx)(h,{component:"Select",refType:"input"}),"\n",(0,o.jsx)(f,{component:"Select"}),"\n",(0,o.jsxs)(t.p,{children:["To set ",(0,o.jsx)(t.code,{children:"aria-label"})," on the clear button, use ",(0,o.jsx)(t.code,{children:"clearButtonProps"}),". Note that it is required\nonly when ",(0,o.jsx)(t.code,{children:"clearable"})," is set."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { Select } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Select\n      data={[]}\n      clearable\n      clearButtonProps={{\n        'aria-label': 'Clear input',\n      }}\n    />\n  );\n}\n"})})]})}function ew(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(ey,{...e,children:(0,o.jsx)(eS,{...e})})}function ej(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},64563:function(e,t,n){"use strict";n.d(t,{z:function(){return f}});var o=n(27378),r=n(89483),l=n(90318),a=n(4861),i=n(68577),c=n(16659),d=n(22971),s=n(2570);let u=`
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
`,p={stroke:1.5,color:"currentColor",opacity:.6,size:18},h={left:o.createElement(r.Z,{...p}),center:o.createElement(l.Z,{...p}),right:o.createElement(a.Z,{...p}),justify:o.createElement(i.Z,{...p})},m=({option:e,checked:t})=>o.createElement(d.Z,{flex:"1",gap:"xs"},h[e.value],e.label,t&&o.createElement(c.Z,{style:{marginInlineStart:"auto"},...p})),f={type:"code",component:function(){return o.createElement(s.P,{label:"Select with renderOption",placeholder:"Select text align",data:[{value:"left",label:"Left"},{value:"center",label:"Center"},{value:"right",label:"Right"},{value:"justify",label:"Justify"}],renderOption:m})},code:u,centered:!0,maxWidth:340,defaultExpanded:!1}},77481:function(e,t,n){"use strict";n.d(t,{Mt:function(){return o},nW:function(){return r},pc:function(){return l}});let o=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],r=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],l=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]},81097:function(e,t,n){"use strict";n.d(t,{r:function(){return s}});var o=n(27378),r=n(40624),l=n(38765),a=n(49849),i=n(45608),c=n(61777),d=n(62443);function Option({data:e,withCheckIcon:t,value:n,checkIconPosition:a,unstyled:s,renderOption:u}){if(!(0,c.f)(e)){var p;let c=(p=e.value,Array.isArray(n)?n.includes(p):n===p),h=t&&c&&o.createElement(l.n,{className:d.Z.optionsDropdownCheckIcon}),m=o.createElement(o.Fragment,null,"left"===a&&h,o.createElement("span",null,e.label),"right"===a&&h);return o.createElement(i.h.Option,{value:e.value,disabled:e.disabled,className:(0,r.Z)({[d.Z.optionsDropdownOption]:!s}),"data-reverse":"right"===a||void 0,"data-checked":c||void 0,"aria-selected":c,active:c},"function"==typeof u?u({option:e,checked:c}):m)}let h=e.items.map(e=>o.createElement(Option,{data:e,value:n,key:e.value,unstyled:s,withCheckIcon:t,checkIconPosition:a}));return o.createElement(i.h.Group,{label:e.group},h)}function s({data:e,hidden:t,hiddenWhenEmpty:n,filter:r,search:l,limit:d,maxDropdownHeight:s,withScrollArea:u=!0,filterOptions:p=!0,withCheckIcon:h=!1,value:m,checkIconPosition:f,nothingFoundMessage:b,unstyled:g,labelId:v,renderOption:x}){!function e(t,n=new Set){if(Array.isArray(t))for(let o of t)if((0,c.f)(o))e(o.items,n);else{if(void 0===o.value)throw Error("[@mantine/core] Each option must have value property");if("string"!=typeof o.value)throw Error(`[@mantine/core] Option value must be a string, other data formats are not supported, got ${typeof o.value}`);if(n.has(o.value))throw Error(`[@mantine/core] Duplicate options are not supported. Option with value "${o.value}" was provided more than once`);n.add(o.value)}}(e);let y="string"==typeof l,S=y?(r||function e({options:t,search:n,limit:o}){let r=n.trim().toLowerCase(),l=[];for(let a=0;a<t.length;a+=1){let i=t[a];if(l.length===o)break;(0,c.f)(i)&&l.push({group:i.group,items:e({options:i.items,search:n,limit:o-l.length})}),!(0,c.f)(i)&&i.label.toLowerCase().includes(r)&&l.push(i)}return l})({options:e,search:p?l:"",limit:d??1/0}):e,w=function(e){if(0===e.length)return!0;for(let t of e)if(!("group"in t)||t.items.length>0)return!1;return!0}(S),j=S.map(e=>o.createElement(Option,{data:e,key:(0,c.f)(e)?e.group:e.value,withCheckIcon:h,value:m,checkIconPosition:f,unstyled:g,renderOption:x}));return o.createElement(i.h.Dropdown,{hidden:t||n&&w},o.createElement(i.h.Options,{labelledBy:v},u?o.createElement(a.x.Autosize,{mah:s??220,type:"scroll",scrollbarSize:"var(--combobox-padding)",offsetScrollbars:"y"},j):j,w&&b&&o.createElement(i.h.Empty,null,b)))}},61777:function(e,t,n){"use strict";function o(e){return"group"in e}n.d(t,{f:function(){return o}})},38099:function(e,t,n){"use strict";n.d(t,{g:function(){return function e(t){return t.reduce((t,n)=>"group"in n?{...t,...e(n.items)}:(t[n.value]=n,t),{})}}})},2570:function(e,t,n){"use strict";n.d(t,{P:function(){return b}});var o=n(27378),r=n(31002),l=n(58675),a=n(5564),i=n(96739),c=n(20410),d=n(2161),s=n(38099),u=n(45608),p=n(81097),h=n(54526),m=n(23163);let f={searchable:!1,withCheckIcon:!0,allowDeselect:!0,checkIconPosition:"left"},b=(0,c.d)((e,t)=>{let n=(0,i.w)("Select",f,e),{classNames:c,styles:b,unstyled:g,vars:v,dropdownOpened:x,defaultDropdownOpened:y,onDropdownClose:S,onDropdownOpen:w,onFocus:j,onBlur:P,onClick:k,onChange:V,data:E,value:A,defaultValue:D,selectFirstOptionOnChange:R,onOptionSubmit:C,comboboxProps:I,readOnly:O,disabled:Y,filter:W,limit:F,withScrollArea:N,maxDropdownHeight:T,size:M,searchable:B,rightSection:Z,checkIconPosition:z,withCheckIcon:_,nothingFoundMessage:L,name:G,form:J,searchValue:$,defaultSearchValue:q,onSearchChange:U,allowDeselect:H,error:X,rightSectionPointerEvents:K,id:Q,clearable:ee,clearButtonProps:et,hiddenInputProps:en,renderOption:eo,onClear:er,...el}=n,ea=(0,o.useMemo)(()=>(0,d.R)(E),[E]),ei=(0,o.useMemo)(()=>(0,s.g)(ea),[ea]),ec=(0,r.M)(Q),[ed,es]=(0,l.C)({value:A,defaultValue:D,finalValue:null,onChange:V}),eu="string"==typeof ed?ei[ed]:void 0,[ep,eh]=(0,l.C)({value:$,defaultValue:q,finalValue:eu?eu.label:"",onChange:U}),em=(0,h.K)({opened:x,defaultOpened:y,onDropdownOpen:()=>{w?.(),em.updateSelectedOptionIndex("active",{scrollIntoView:!0})},onDropdownClose:()=>{S?.(),em.resetSelectedOption()}}),{resolvedClassNames:ef,resolvedStyles:eb}=(0,a.h)({props:n,styles:b,classNames:c});(0,o.useEffect)(()=>{R&&em.selectFirstOption()},[R,ed]),(0,o.useEffect)(()=>{null===A&&eh(""),"string"==typeof A&&eu&&eh(eu.label)},[A,eu]);let eg=ee&&!!ed&&!Y&&!O&&o.createElement(u.h.ClearButton,{size:M,...et,onClear:()=>{es(null,null),eh(""),er?.()}});return o.createElement(o.Fragment,null,o.createElement(u.h,{store:em,__staticSelector:"Select",classNames:ef,styles:eb,unstyled:g,readOnly:O,onOptionSubmit:e=>{C?.(e);let t=H&&ei[e].value===ed?null:ei[e],n=t?t.value:null;es(n,t),eh("string"==typeof n&&t?.label||""),em.closeDropdown()},size:M,...I},o.createElement(u.h.Target,{targetType:B?"input":"button"},o.createElement(m.M,{id:ec,ref:t,rightSection:Z||eg||o.createElement(u.h.Chevron,{size:M,error:X,unstyled:g}),rightSectionPointerEvents:K||(eg?"all":"none"),...el,size:M,__staticSelector:"Select",disabled:Y,readOnly:O||!B,value:ep,onChange:e=>{eh(e.currentTarget.value),em.openDropdown(),R&&em.selectFirstOption()},onFocus:e=>{B&&em.openDropdown(),j?.(e)},onBlur:e=>{B&&em.closeDropdown(),eh(null!=ed&&ei[ed]?.label||""),P?.(e)},onClick:e=>{B?em.openDropdown():em.toggleDropdown(),k?.(e)},classNames:ef,styles:eb,unstyled:g,pointer:!B,error:X})),o.createElement(p.r,{data:ea,hidden:O||Y,filter:W,search:ep,limit:F,hiddenWhenEmpty:!B||!L,withScrollArea:N,maxDropdownHeight:T,filterOptions:B&&eu?.label!==ep,value:ed,checkIconPosition:z,withCheckIcon:_,nothingFoundMessage:L,unstyled:g,labelId:`${ec}-label`,renderOption:eo})),o.createElement("input",{type:"hidden",name:G,value:ed||"",form:J,disabled:Y,...en}))});b.classes={...m.M.classes,...u.h.classes},b.displayName="@mantine/core/Select"},87921:function(e,t,n){"use strict";n.d(t,{q:function(){return r}});var o=n(27378);function r(e=!1,t){let{onOpen:n,onClose:r}=t||{},[l,a]=(0,o.useState)(e),i=(0,o.useCallback)(()=>{a(e=>e||(n?.(),!0))},[n]),c=(0,o.useCallback)(()=>{a(e=>e?(r?.(),!1):e)},[r]),d=(0,o.useCallback)(()=>{l?c():i()},[c,i,l]);return[l,{open:i,close:c,toggle:d}]}}},function(e){e.O(0,[30370,15819,2775,45608,49774,92888,40179],function(){return e(e.s=76623)}),_N_E=e.O()}]);