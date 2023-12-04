(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3478],{93693:function(e,t,o){"use strict";o.d(t,{Z:function(){return r}});var r=(0,o(54764).Z)("at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},9524:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/autocomplete",function(){return o(64672)}])},64672:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return ei}});var r=o(24246),n=o(71670),a=o(3916),l=o(30289),i=o(27378),c=o(26720);let d=`
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
`,u={type:"code",component:function(){return i.createElement(c.F,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"]})},code:d,maxWidth:340,centered:!0},p=`
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
`,s=({options:e,search:t})=>{let o=t.toLowerCase().trim().split(" ");return e.filter(e=>{let t=e.label.toLowerCase().trim().split(" ");return o.every(e=>t.some(t=>t.includes(e)))})},m={type:"code",component:function(){return i.createElement(c.F,{label:"Your country",placeholder:"Pick value or enter anything",data:["Great Britain","Russian Federation","United States"],filter:s})},code:p,maxWidth:340,centered:!0},h=`
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
`,f=({options:e,search:t})=>{let o=e.filter(e=>e.label.toLowerCase().trim().includes(t.toLowerCase().trim()));return o.sort((e,t)=>e.label.localeCompare(t.label)),o},b={type:"code",component:function(){return i.createElement(c.F,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["4 – React","1 – Angular","3 – Vue","2 – Svelte"],filter:f})},code:h,maxWidth:340,centered:!0},g=`
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
`,y=Array(1e5).fill(0).map((e,t)=>`Option ${t}`),v={type:"code",component:function(){return i.createElement(c.F,{label:"100 000 options autocomplete",placeholder:"Use limit to optimize performance",limit:5,data:y})},code:g,maxWidth:340,centered:!0},x=`
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
`,A=Array(100).fill(0).map((e,t)=>`Option ${t}`),w={type:"code",component:function(){return i.createElement(i.Fragment,null,i.createElement(c.F,{label:"With scroll area (default)",placeholder:"Pick value or enter anything",data:A,maxDropdownHeight:200}),i.createElement(c.F,{label:"With native scroll",placeholder:"Pick value or enter anything",data:A,withScrollArea:!1,styles:{dropdown:{maxHeight:200,overflowY:"auto"}},mt:"md"}))},code:x,maxWidth:340,centered:!0},j=`
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
`,E={type:"code",component:function(){return i.createElement(c.F,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:[{group:"Frontend",items:["React","Angular"]},{group:"Backend",items:["Express","Django"]}]})},code:j,maxWidth:340,centered:!0},P=`
import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <Autocomplete
      label="Your favorite library"
      placeholder="Pick value or enter anything"
      data={[
        { value: 'react', label: 'React' },
        { value: 'ng', label: 'Angular' },
        { value: 'vue', label: 'Vue', disabled: true },
        { value: 'svelte', label: 'Svelte', disabled: true },
      ]}
    />
  );
}
`,V={type:"code",component:function(){return i.createElement(c.F,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:[{value:"react",label:"React"},{value:"ng",label:"Angular"},{value:"vue",label:"Vue",disabled:!0},{value:"svelte",label:"Svelte",disabled:!0}]})},code:P,maxWidth:340,centered:!0};var S=o(63433),k=o(8671);let D=`
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
`,F={type:"code",code:D,centered:!0,component:function(){return i.createElement(S.J,{width:300,position:"bottom",withArrow:!0,shadow:"md"},i.createElement(S.J.Target,null,i.createElement(k.z,null,"Toggle popover")),i.createElement(S.J.Dropdown,null,i.createElement(c.F,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],comboboxProps:{withinPortal:!1}})))}};var R=o(87921);let C=`
import { Autocomplete, Button } from '@mantine/core';

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
`,Y={type:"code",component:function(){let[e,{toggle:t}]=(0,R.q)();return i.createElement(i.Fragment,null,i.createElement(k.z,{onClick:t,mb:"md"},"Toggle dropdown"),i.createElement(c.F,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],dropdownOpened:e}))},code:C,maxWidth:340,centered:!0},W=`
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
`,O={type:"code",component:function(){return i.createElement(c.F,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],comboboxProps:{position:"top",middlewares:{flip:!1,shift:!1}}})},code:W,maxWidth:340,centered:!0},I=`
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
`,B={type:"code",component:function(){return i.createElement(c.F,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],comboboxProps:{transitionProps:{transition:"pop",duration:200}}})},code:I,maxWidth:340,centered:!0},_=`
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
`,z={type:"code",component:function(){return i.createElement(i.Fragment,null,i.createElement(c.F,{label:"Zero padding",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],comboboxProps:{dropdownPadding:0}}),i.createElement(c.F,{mt:"md",label:"10px padding",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],comboboxProps:{dropdownPadding:10}}))},code:_,maxWidth:340,centered:!0},T=`
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
`,N={type:"code",component:function(){return i.createElement(c.F,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],comboboxProps:{shadow:"md"}})},code:T,maxWidth:340,centered:!0};var L=o(71078),Z=o(94503);let $=`
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
`,M={type:"code",component:function(){let e=i.createElement(Z.Z,{style:{width:(0,L.h)(16),height:(0,L.h)(16)}});return i.createElement(i.Fragment,null,i.createElement(c.F,{data:["React","Angular","Vue"],leftSectionPointerEvents:"none",leftSection:e,label:"Your favorite library",placeholder:"Your favorite library"}),i.createElement(c.F,{mt:"md",data:["React","Angular","Vue"],rightSectionPointerEvents:"none",rightSection:e,label:"Your favorite library",placeholder:"Your favorite library"}))},maxWidth:340,centered:!0,code:$};var G=o(77481);let H=`
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
`,U={type:"configurator",component:function(e){return i.createElement(c.F,{...e,placeholder:"Autocomplete placeholder",data:["React","Angular","Vue","Svelte"]})},code:H,centered:!0,maxWidth:340,controls:G.pc},J=`
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
`,q={type:"code",component:function(){return i.createElement(c.F,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],readOnly:!0})},code:J,maxWidth:340,centered:!0},X=`
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
`,K={type:"code",component:function(){return i.createElement(c.F,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],disabled:!0})},code:X,maxWidth:340,centered:!0},Q=`
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
`,ee={type:"code",component:function(){return i.createElement(i.Fragment,null,i.createElement(c.F,{label:"Boolean error",placeholder:"Boolean error",error:!0,data:["React","Angular","Vue","Svelte"]}),i.createElement(c.F,{mt:"md",label:"With error message",placeholder:"With error message",error:"Invalid name",data:["React","Angular","Vue","Svelte"]}))},maxWidth:340,centered:!0,code:Q};var et=o(93693),eo=o(87961);let er=`
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
`,en={type:"styles-api",data:eo.I,component:function(e){return i.createElement(c.F,{...e,dropdownOpened:!0,leftSection:i.createElement(et.Z,{style:{width:(0,L.h)(18),height:(0,L.h)(18)},stroke:1.5}),withAsterisk:!0,label:"Autocomplete",description:"Description",placeholder:"Autocomplete",data:[{group:"Frontend",items:["React","Angular"]},{group:"Backend",items:["Node","Django"]}]})},code:er,centered:!0,maxWidth:340},ea=(0,a.A)(l.us.Autocomplete);function el(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...e.components},{ComboboxData:o,ComboboxDisclaimer:a,ComboboxFiltering:l,ComboboxLargeData:i,ComboboxProps:c,Demo:d,GetElementRef:p,InputAccessibility:s,InputFeatures:h,InputSections:f,StylesApiSelectors:g}=t;return o||ec("ComboboxData",!0),a||ec("ComboboxDisclaimer",!0),l||ec("ComboboxFiltering",!0),i||ec("ComboboxLargeData",!0),c||ec("ComboboxProps",!0),d||ec("Demo",!0),p||ec("GetElementRef",!0),s||ec("InputAccessibility",!0),h||ec("InputFeatures",!0),f||ec("InputSections",!0),g||ec("StylesApiSelectors",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a,{component:"Autocomplete"}),"\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Autocomplete"})," provides user a list of suggestions based on the input,\nhowever user is not limited to suggestions and can type anything."]}),"\n",(0,r.jsx)(d,{data:u}),"\n",(0,r.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Autocomplete"})," value must be a string, other types are not supported.\n",(0,r.jsx)(t.code,{children:"onChange"})," function is called with a string value as a single argument."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Autocomplete } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState('');\n  return <Autocomplete data={[]} value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,r.jsx)(o,{component:"Autocomplete"}),"\n",(0,r.jsx)(l,{component:"Autocomplete"}),"\n",(0,r.jsx)(d,{data:m}),"\n",(0,r.jsx)(t.h2,{id:"sort-options",children:"Sort options"}),"\n",(0,r.jsxs)(t.p,{children:["By default, options are sorted by their position in the data array. You can change this behavior\nwith ",(0,r.jsx)(t.code,{children:"filter"})," function:"]}),"\n",(0,r.jsx)(d,{data:b}),"\n",(0,r.jsx)(i,{component:"Autocomplete"}),"\n",(0,r.jsx)(d,{data:v}),"\n",(0,r.jsx)(t.h2,{id:"scrollable-dropdown",children:"Scrollable dropdown"}),"\n",(0,r.jsxs)(t.p,{children:["By default, the options list is wrapped with ",(0,r.jsx)(t.a,{href:"/core/scroll-area",children:"ScrollArea.Autosize"}),".\nYou can control dropdown max-height with ",(0,r.jsx)(t.code,{children:"maxDropdownHeight"})," prop if you do not change the default settings."]}),"\n",(0,r.jsxs)(t.p,{children:["If you want to use native scrollbars, set ",(0,r.jsx)(t.code,{children:"withScrollArea={false}"}),". Note that in this case,\nyou will need to change dropdown styles with ",(0,r.jsx)(t.a,{href:"/styles/styles-api",children:"Styles API"}),"."]}),"\n",(0,r.jsx)(d,{data:w}),"\n",(0,r.jsx)(t.h2,{id:"group-options",children:"Group options"}),"\n",(0,r.jsx)(d,{data:E}),"\n",(0,r.jsx)(t.h2,{id:"disabled-options",children:"Disabled options"}),"\n",(0,r.jsx)(t.p,{children:"When option is disabled, it cannot be selected and is ignored in keyboard navigation."}),"\n",(0,r.jsx)(d,{data:V}),"\n",(0,r.jsx)(c,{component:"Autocomplete"}),"\n",(0,r.jsx)(t.h2,{id:"inside-popover",children:"Inside Popover"}),"\n",(0,r.jsxs)(t.p,{children:["To use ",(0,r.jsx)(t.code,{children:"Autocomplete"})," inside popover, you need to set ",(0,r.jsx)(t.code,{children:"withinPortal: false"}),":"]}),"\n",(0,r.jsx)(d,{data:F}),"\n",(0,r.jsx)(t.h2,{id:"control-dropdown-opened-state",children:"Control dropdown opened state"}),"\n",(0,r.jsxs)(t.p,{children:["You can control dropdown opened state with ",(0,r.jsx)(t.code,{children:"dropdownOpened"})," prop. Additionally,\nyou can use ",(0,r.jsx)(t.code,{children:"onDropdownClose"})," and ",(0,r.jsx)(t.code,{children:"onDropdownOpen"})," to listen to dropdown opened state changes."]}),"\n",(0,r.jsx)(d,{data:Y}),"\n",(0,r.jsx)(t.h2,{id:"dropdown-position",children:"Dropdown position"}),"\n",(0,r.jsxs)(t.p,{children:["By default, the dropdown is displayed below the input if there is enough space; otherwise it is displayed above the input.\nYou can change this behavior by setting ",(0,r.jsx)(t.code,{children:"position"})," and ",(0,r.jsx)(t.code,{children:"middlewares"})," props, which are passed down to the\nunderlying ",(0,r.jsx)(t.a,{href:"/core/popover",children:"Popover"})," component."]}),"\n",(0,r.jsx)(t.p,{children:"Example of dropdown that is always displayed above the input:"}),"\n",(0,r.jsx)(d,{data:O}),"\n",(0,r.jsx)(t.h2,{id:"dropdown-animation",children:"Dropdown animation"}),"\n",(0,r.jsxs)(t.p,{children:["By default, dropdown animations are disabled. To enable them, you can set ",(0,r.jsx)(t.code,{children:"transitionProps"}),",\nwhich will be passed down to the underlying ",(0,r.jsx)(t.a,{href:"/core/transition",children:"Transition"})," component."]}),"\n",(0,r.jsx)(d,{data:B}),"\n",(0,r.jsx)(t.h2,{id:"dropdown-padding",children:"Dropdown padding"}),"\n",(0,r.jsx)(d,{data:z}),"\n",(0,r.jsx)(t.h2,{id:"dropdown-shadow",children:"Dropdown shadow"}),"\n",(0,r.jsx)(d,{data:N}),"\n",(0,r.jsx)(f,{component:"Autocomplete"}),"\n",(0,r.jsx)(d,{data:M}),"\n",(0,r.jsx)(t.h2,{id:"input-props",children:"Input props"}),"\n",(0,r.jsx)(h,{component:"Autocomplete",element:"input"}),"\n",(0,r.jsx)(d,{data:U}),"\n",(0,r.jsx)(t.h2,{id:"read-only",children:"Read only"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"readOnly"})," to make the input read only. When ",(0,r.jsx)(t.code,{children:"readOnly"})," is set,\n",(0,r.jsx)(t.code,{children:"Autocomplete"})," will not show suggestions and will not call ",(0,r.jsx)(t.code,{children:"onChange"})," function."]}),"\n",(0,r.jsx)(d,{data:q}),"\n",(0,r.jsx)(t.h2,{id:"disabled",children:"Disabled"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"disabled"})," to disable the input. When ",(0,r.jsx)(t.code,{children:"disabled"})," is set,\nuser cannot interact with the input and ",(0,r.jsx)(t.code,{children:"Autocomplete"})," will not show suggestions."]}),"\n",(0,r.jsx)(d,{data:K}),"\n",(0,r.jsx)(t.h2,{id:"error-state",children:"Error state"}),"\n",(0,r.jsx)(d,{data:ee}),"\n",(0,r.jsx)(g,{component:"Autocomplete"}),"\n",(0,r.jsx)(d,{data:en}),"\n",(0,r.jsx)(p,{component:"Autocomplete",refType:"input"}),"\n",(0,r.jsx)(s,{component:"Autocomplete"})]})}function ei(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(ea,{...e,children:(0,r.jsx)(el,{...e})})}function ec(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},77481:function(e,t,o){"use strict";o.d(t,{Mt:function(){return r},nW:function(){return n},pc:function(){return a}});let r=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],n=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],a=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]},26720:function(e,t,o){"use strict";o.d(t,{F:function(){return b}});var r=o(27378),n=o(31002),a=o(58675),l=o(5564),i=o(96739),c=o(20410),d=o(23163),u=o(2161),p=o(38099),s=o(45608),m=o(81097),h=o(54526);let f={},b=(0,c.d)((e,t)=>{let o=(0,i.w)("Autocomplete",f,e),{classNames:c,styles:b,unstyled:g,vars:y,dropdownOpened:v,defaultDropdownOpened:x,onDropdownClose:A,onDropdownOpen:w,onFocus:j,onBlur:E,onClick:P,onChange:V,data:S,value:k,defaultValue:D,selectFirstOptionOnChange:F,onOptionSubmit:R,comboboxProps:C,readOnly:Y,disabled:W,filter:O,limit:I,withScrollArea:B,maxDropdownHeight:_,size:z,id:T,...N}=o,L=(0,n.M)(T),Z=(0,u.R)(S),$=(0,p.g)(Z),[M,G]=(0,a.C)({value:k,defaultValue:D,finalValue:"",onChange:V}),H=(0,h.K)({opened:v,defaultOpened:x,onDropdownOpen:w,onDropdownClose:()=>{A?.(),H.resetSelectedOption()}}),{resolvedClassNames:U,resolvedStyles:J}=(0,l.h)({props:o,styles:b,classNames:c});return(0,r.useEffect)(()=>{F&&H.selectFirstOption()},[F,M]),r.createElement(s.h,{store:H,__staticSelector:"Autocomplete",classNames:U,styles:J,unstyled:g,readOnly:Y,onOptionSubmit:e=>{R?.(e),G($[e].label),H.closeDropdown()},size:z,...C},r.createElement(s.h.Target,null,r.createElement(d.M,{ref:t,...N,size:z,__staticSelector:"Autocomplete",disabled:W,readOnly:Y,value:M,onChange:e=>{G(e.currentTarget.value),H.openDropdown(),F&&H.selectFirstOption()},onFocus:e=>{H.openDropdown(),j?.(e)},onBlur:e=>{H.closeDropdown(),E?.(e)},onClick:e=>{H.openDropdown(),P?.(e)},classNames:U,styles:J,unstyled:g,id:L})),r.createElement(m.r,{data:Z,hidden:Y||W,filter:O,search:M,limit:I,hiddenWhenEmpty:!0,withScrollArea:B,maxDropdownHeight:_,unstyled:g,labelId:`${L}-label`}))});b.classes={...d.M.classes,...s.h.classes},b.displayName="@mantine/core/Autocomplete"},81097:function(e,t,o){"use strict";o.d(t,{r:function(){return p}});var r=o(27378),n=o(40624),a=o(49849),l=o(38765),i=o(45608),c=o(61777),d=o(62443);function u(e,t){return Array.isArray(e)?e.includes(t):e===t}function Option({data:e,withCheckIcon:t,value:o,checkIconPosition:a,unstyled:p}){if(!(0,c.f)(e)){let c=t&&u(o,e.value)&&r.createElement(l.n,{className:d.Z.optionsDropdownCheckIcon});return r.createElement(i.h.Option,{value:e.value,disabled:e.disabled,className:(0,n.Z)({[d.Z.optionsDropdownOption]:!p}),"data-reverse":"right"===a||void 0,"data-checked":u(o,e.value)||void 0,"aria-selected":u(o,e.value)},"left"===a&&c,e.label,"right"===a&&c)}let s=e.items.map(e=>r.createElement(Option,{data:e,value:o,key:e.value,unstyled:p,withCheckIcon:t,checkIconPosition:a}));return r.createElement(i.h.Group,{label:e.group},s)}function p({data:e,hidden:t,hiddenWhenEmpty:o,filter:n,search:l,limit:u,maxDropdownHeight:p,withScrollArea:s=!0,filterOptions:m=!0,withCheckIcon:h=!1,value:f,checkIconPosition:b,nothingFoundMessage:g,unstyled:y,labelId:v}){!function e(t,o=new Set){if(Array.isArray(t))for(let r of t)if((0,c.f)(r))e(r.items,o);else{if(void 0===r.value)throw Error("[@mantine/core] Each option must have value property");if("string"!=typeof r.value)throw Error(`[@mantine/core] Option value must be a string, other data formats are not supported, got ${typeof r.value}`);if(o.has(r.value))throw Error(`[@mantine/core] Duplicate options are not supported. Option with value "${r.value}" was provided more than once`);o.add(r.value)}}(e);let x="string"==typeof l,A=x?(n||function e({options:t,search:o,limit:r}){let n=o.trim().toLowerCase(),a=[];for(let l=0;l<t.length;l+=1){let i=t[l];if(a.length===r)break;(0,c.f)(i)&&a.push({group:i.group,items:e({options:i.items,search:o,limit:r-a.length})}),!(0,c.f)(i)&&i.label.toLowerCase().includes(n)&&a.push(i)}return a})({options:e,search:m?l:"",limit:u??1/0}):e,w=function(e){if(0===e.length)return!0;for(let t of e)if(!("group"in t)||t.items.length>0)return!1;return!0}(A),j=A.map(e=>r.createElement(Option,{data:e,key:(0,c.f)(e)?e.group:e.value,withCheckIcon:h,value:f,checkIconPosition:b,unstyled:y}));return r.createElement(i.h.Dropdown,{hidden:t||o&&w},r.createElement(i.h.Options,{labelledBy:v},s?r.createElement(a.x.Autosize,{mah:p??220,type:"scroll",scrollbarSize:"var(--_combobox-padding)",offsetScrollbars:"y",className:d.Z.optionsDropdownScrollArea},j):j,w&&g&&r.createElement(i.h.Empty,null,g)))}},61777:function(e,t,o){"use strict";function r(e){return"group"in e}o.d(t,{f:function(){return r}})},38099:function(e,t,o){"use strict";o.d(t,{g:function(){return function e(t){return t.reduce((t,o)=>"group"in o?{...t,...e(o.items)}:(t[o.value]=o,t),{})}}})},87921:function(e,t,o){"use strict";o.d(t,{q:function(){return n}});var r=o(27378);function n(e=!1,t){let{onOpen:o,onClose:n}=t||{},[a,l]=(0,r.useState)(e),i=(0,r.useCallback)(()=>{l(e=>e||(o?.(),!0))},[o]),c=(0,r.useCallback)(()=>{l(e=>e?(n?.(),!1):e)},[n]),d=(0,r.useCallback)(()=>{a?c():i()},[c,i,a]);return[a,{open:i,close:c,toggle:d}]}}},function(e){e.O(0,[370,5819,2775,5608,9774,2888,179],function(){return e(e.s=9524)}),_N_E=e.O()}]);