(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,a)=>{let i={};for(var r in e)t(i,r,{get:e[r],enumerable:!0});return a||t(i,Symbol.toStringTag,{value:"Module"}),i}])},931882,e=>{"use strict";var t=e.i(191788),a=e.i(171481);let i=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208,96l-80,80L48,96Z",opacity:"0.2"}),t.createElement("path",{d:"M215.39,92.94A8,8,0,0,0,208,88H48a8,8,0,0,0-5.66,13.66l80,80a8,8,0,0,0,11.32,0l80-80A8,8,0,0,0,215.39,92.94ZM128,164.69,67.31,104H188.69Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M212.24,100.24l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,167.51l75.76-75.75a6,6,0,0,1,8.48,8.48Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M210.83,98.83l-80,80a4,4,0,0,1-5.66,0l-80-80a4,4,0,0,1,5.66-5.66L128,170.34l77.17-77.17a4,4,0,1,1,5.66,5.66Z"}))]]),r=t.forwardRef((e,r)=>t.createElement(a.default,{ref:r,...e,weights:i}));r.displayName="CaretDownIcon",e.s(["CaretDownIcon",0,r],931882)},960831,e=>{"use strict";e.s(["inputControls",0,[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"md",libraryValue:"md"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}],"inputOnlyControls",0,[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"md",libraryValue:"md"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],"inputWrapperOnlyControls",0,[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}]])},896399,e=>{"use strict";var t=e.i(648863),a=e.i(391398),i=e.i(288034);let r={type:"code",centered:!0,maxWidth:400,component:function(){return(0,a.jsx)(i.DateTimePicker,{label:"Pick date and time",placeholder:"Pick date and time"})},code:`
import { DateTimePicker } from '@mantine/dates';

function Demo() {
  return <DateTimePicker label="Pick date and time" placeholder="Pick date and time" />;
}
`},n={type:"code",centered:!0,maxWidth:400,component:function(){return(0,a.jsx)(i.DateTimePicker,{withSeconds:!0,label:"Pick date and time",placeholder:"Pick date and time"})},code:`
import { DateTimePicker } from '@mantine/dates';

function Demo() {
  return <DateTimePicker withSeconds label="Pick date and time" placeholder="Pick date and time" />;
}
`},l={type:"code",centered:!0,maxWidth:400,component:function(){return(0,a.jsx)(i.DateTimePicker,{dropdownType:"modal",label:"Pick date and time",placeholder:"Pick date and time"})},code:`
import { DateTimePicker } from '@mantine/dates';

function Demo() {
  return (
    <DateTimePicker
      dropdownType="modal"
      label="Pick date and time"
      placeholder="Pick date and time"
    />
  );
}
`},o={type:"configurator",component:function(e){return(0,a.jsx)(i.DateTimePicker,{...e,placeholder:"Input placeholder"})},code:`
import { DateTimePicker } from '@mantine/dates';


function Demo() {
  return (
    <DateTimePicker
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
`,centered:!0,maxWidth:400,controls:e.i(960831).inputControls};var d=e.i(494834);let c={type:"code",centered:!0,maxWidth:400,component:function(){return(0,a.jsx)(i.DateTimePicker,{clearable:!0,defaultValue:(0,d.default)().format("YYYY-MM-DD"),label:"Pick date and time",placeholder:"Pick date and time"})},code:`
import dayjs from 'dayjs';
import { DateTimePicker } from '@mantine/dates';

function Demo() {
  return (
    <DateTimePicker
      clearable
      defaultValue={dayjs().format('YYYY-MM-DD')}
      label="Pick date and time"
      placeholder="Pick date and time"
    />
  );
}
`};var m=e.i(931882),s=e.i(671640);let p={type:"code",component:function(){return(0,a.jsxs)(s.Stack,{children:[(0,a.jsx)(i.DateTimePicker,{label:"clearSectionMode='both' (default)",placeholder:"Pick date and time",defaultValue:new Date,clearable:!0,rightSection:(0,a.jsx)(m.CaretDownIcon,{size:16}),clearSectionMode:"both"}),(0,a.jsx)(i.DateTimePicker,{label:"clearSectionMode='rightSection'",placeholder:"Pick date and time",defaultValue:new Date,clearable:!0,rightSection:(0,a.jsx)(m.CaretDownIcon,{size:16}),clearSectionMode:"rightSection"}),(0,a.jsx)(i.DateTimePicker,{label:"clearSectionMode='clear'",placeholder:"Pick date and time",defaultValue:new Date,clearable:!0,rightSection:(0,a.jsx)(m.CaretDownIcon,{size:16}),clearSectionMode:"clear"})]})},code:`
import { CaretDownIcon } from '@phosphor-icons/react';
import { Stack } from '@mantine/core';
import { DateTimePicker } from '@mantine/dates';

function Demo() {
  return (
    <Stack>
      <DateTimePicker
        label="clearSectionMode='both' (default)"
        placeholder="Pick date and time"
        defaultValue={new Date()}
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="both"
      />

      <DateTimePicker
        label="clearSectionMode='rightSection'"
        placeholder="Pick date and time"
        defaultValue={new Date()}
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="rightSection"
      />

      <DateTimePicker
        label="clearSectionMode='clear'"
        placeholder="Pick date and time"
        defaultValue={new Date()}
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="clear"
      />
    </Stack>
  );
}
`,maxWidth:340,centered:!0},u={type:"code",centered:!0,maxWidth:400,component:function(){return(0,a.jsx)(i.DateTimePicker,{valueFormat:"DD MMM YYYY hh:mm A",label:"Pick date and time",placeholder:"Pick date and time"})},code:`
import { DateTimePicker } from '@mantine/dates';

function Demo() {
  return (
    <DateTimePicker
      valueFormat="DD MMM YYYY hh:mm A"
      label="Pick date and time"
      placeholder="Pick date and time"
    />
  );
}
`},h={type:"code",centered:!0,maxWidth:400,component:function(){return(0,a.jsx)(i.DateTimePicker,{valueFormat:e=>(0,d.default)(e).format("dddd, MMMM D [at] h:mm A"),defaultValue:"2024-04-11 14:45:00",label:"Pick date and time",placeholder:"Pick date and time"})},code:`
import dayjs from 'dayjs';
import { DateTimePicker } from '@mantine/dates';

function Demo() {
  return (
    <DateTimePicker
      valueFormat={(date) => dayjs(date).format('dddd, MMMM D [at] h:mm A')}
      defaultValue="2024-04-11 14:45:00"
      label="Pick date and time"
      placeholder="Pick date and time"
    />
  );
}
`},D={type:"code",centered:!0,maxWidth:400,component:function(){return(0,a.jsx)(i.DateTimePicker,{label:"Disabled",placeholder:"Pick date and time",disabled:!0})},code:`
import { DateTimePicker } from '@mantine/dates';

function Demo() {
  return <DateTimePicker label="Disabled" placeholder="Pick date and time" disabled />;
}
`},f={type:"code",centered:!0,maxWidth:400,component:function(){return(0,a.jsx)(i.DateTimePicker,{label:"Pick date and time",placeholder:"Pick date and time",timePickerProps:{withDropdown:!0,popoverProps:{withinPortal:!1},format:"12h"}})},code:`
import { DateTimePicker } from '@mantine/dates';

function Demo() {
  return (
    <DateTimePicker
      label="Pick date and time"
      placeholder="Pick date and time"
      timePickerProps={{
        withDropdown: true,
        popoverProps: { withinPortal: false },
        format: '12h',
      }}
    />
  );
}
`},k={type:"code",centered:!0,maxWidth:400,component:function(){return(0,a.jsx)(i.DateTimePicker,{label:"Pick date and time",placeholder:"Pick date and time",presets:[{value:(0,d.default)().subtract(1,"day").format("YYYY-MM-DD HH:mm:ss"),label:"Yesterday"},{value:(0,d.default)().format("YYYY-MM-DD HH:mm:ss"),label:"Today"},{value:(0,d.default)().add(1,"day").format("YYYY-MM-DD HH:mm:ss"),label:"Tomorrow"},{value:(0,d.default)().add(1,"month").format("YYYY-MM-DD HH:mm:ss"),label:"Next month"},{value:(0,d.default)().add(1,"year").format("YYYY-MM-DD HH:mm:ss"),label:"Next year"},{value:(0,d.default)().subtract(1,"month").format("YYYY-MM-DD HH:mm:ss"),label:"Last month"},{value:(0,d.default)().subtract(1,"year").format("YYYY-MM-DD HH:mm:ss"),label:"Last year"}]})},code:`
import dayjs from 'dayjs';
import { DateTimePicker } from '@mantine/dates';

function Demo() {
  return (
    <DateTimePicker
      label="Pick date and time"
      placeholder="Pick date and time"
      presets={[
        { value: dayjs().subtract(1, 'day').format('YYYY-MM-DD HH:mm:ss'), label: 'Yesterday' },
        { value: dayjs().format('YYYY-MM-DD HH:mm:ss'), label: 'Today' },
        { value: dayjs().add(1, 'day').format('YYYY-MM-DD HH:mm:ss'), label: 'Tomorrow' },
        { value: dayjs().add(1, 'month').format('YYYY-MM-DD HH:mm:ss'), label: 'Next month' },
        { value: dayjs().add(1, 'year').format('YYYY-MM-DD HH:mm:ss'), label: 'Next year' },
        {
          value: dayjs().subtract(1, 'month').format('YYYY-MM-DD HH:mm:ss'),
          label: 'Last month',
        },
        { value: dayjs().subtract(1, 'year').format('YYYY-MM-DD HH:mm:ss'), label: 'Last year' },
      ]}
    />
  );
}
`},P={type:"code",centered:!0,maxWidth:400,component:function(){return(0,a.jsx)(i.DateTimePicker,{type:"range",label:"Pick dates and times range",placeholder:"Pick dates and times range"})},code:`
import { DateTimePicker } from '@mantine/dates';

function Demo() {
  return (
    <DateTimePicker
      type="range"
      label="Pick dates and times range"
      placeholder="Pick dates and times range"
    />
  );
}
`};var b=(0,t.__exportAll)({clearSectionMode:()=>p,clearable:()=>c,configurator:()=>o,disabled:()=>D,format:()=>u,formatFunction:()=>h,modal:()=>l,presets:()=>k,range:()=>P,timePickerProps:()=>f,usage:()=>r,withSeconds:()=>n});e.s(["DateTimePickerDemos",0,b],896399)},958962,e=>{"use strict";var t=e.i(391398),a=e.i(38856),i=e.i(896399);e.i(603441);var r=e.i(62558);e.i(457450);var n=e.i(418026);let l=(0,r.Layout)(n.MDX_DATA.DateTimePicker);function o(e){let r={a:"a",code:"code",h2:"h2",p:"p",...(0,a.useMDXComponents)(),...e.components},{ClearSectionMode:n,Demo:l,GetElementRef:o,InputAccessibility:c,InputFeatures:m}=r;return n||d("ClearSectionMode",!0),l||d("Demo",!0),o||d("GetElementRef",!0),c||d("InputAccessibility",!0),m||d("InputFeatures",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"datepicker-props",children:"DatePicker props"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"DateTimePicker"})," supports most of the ",(0,t.jsx)(r.a,{href:"/dates/date-picker/",children:"DatePicker"})," props.\nRead through the ",(0,t.jsx)(r.a,{href:"/dates/date-picker/",children:"DatePicker"})," documentation to learn about all component features that are not listed on this page."]}),"\n",(0,t.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(l,{data:i.DateTimePickerDemos.usage}),"\n",(0,t.jsx)(r.h2,{id:"range",children:"Range"}),"\n",(0,t.jsxs)(r.p,{children:["Set ",(0,t.jsx)(r.code,{children:'type="range"'})," to allow selecting a date and time range. In range mode,\ntwo time inputs are rendered for start and end times, and a range summary is displayed below:"]}),"\n",(0,t.jsx)(l,{data:i.DateTimePickerDemos.range}),"\n",(0,t.jsx)(r.h2,{id:"with-seconds",children:"With seconds"}),"\n",(0,t.jsx)(l,{data:i.DateTimePickerDemos.withSeconds}),"\n",(0,t.jsx)(r.h2,{id:"presets",children:"Presets"}),"\n",(0,t.jsxs)(r.p,{children:["Use the ",(0,t.jsx)(r.code,{children:"presets"})," prop to add custom date presets. Presets are displayed next to the calendar:"]}),"\n",(0,t.jsx)(l,{data:i.DateTimePickerDemos.presets}),"\n",(0,t.jsx)(r.h2,{id:"timepicker-props",children:"TimePicker props"}),"\n",(0,t.jsxs)(r.p,{children:["You can pass props down to the underlying ",(0,t.jsx)(r.a,{href:"/dates/time-picker/",children:"TimePicker"})," component\nwith the ",(0,t.jsx)(r.code,{children:"timePickerProps"})," prop. Example of enabling dropdown and setting ",(0,t.jsx)(r.code,{children:"12h"})," format\nfor the time picker:"]}),"\n",(0,t.jsx)(l,{data:i.DateTimePickerDemos.timePickerProps}),"\n",(0,t.jsx)(r.h2,{id:"value-format",children:"Value format"}),"\n",(0,t.jsxs)(r.p,{children:["Use the ",(0,t.jsx)(r.code,{children:"valueFormat"})," prop to change the ",(0,t.jsx)(r.a,{href:"https://day.js.org/docs/en/display/format",children:"dayjs format"})," of the value label:"]}),"\n",(0,t.jsx)(l,{data:i.DateTimePickerDemos.format}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"valueFormat"})," also accepts a function that receives the value as a ",(0,t.jsx)(r.code,{children:"YYYY-MM-DD HH:mm:ss"})," string\nand returns a custom formatted value. Use it when the formatting logic cannot be expressed with a\ndayjs format string:"]}),"\n",(0,t.jsx)(l,{data:i.DateTimePickerDemos.formatFunction}),"\n",(0,t.jsx)(r.h2,{id:"disabled-state",children:"Disabled state"}),"\n",(0,t.jsx)(l,{data:i.DateTimePickerDemos.disabled}),"\n",(0,t.jsx)(r.h2,{id:"input-props",children:"Input props"}),"\n",(0,t.jsx)(m,{component:"DateTimePicker",element:"button"}),"\n",(0,t.jsx)(l,{data:i.DateTimePickerDemos.configurator}),"\n",(0,t.jsx)(r.h2,{id:"clearable",children:"Clearable"}),"\n",(0,t.jsxs)(r.p,{children:["Set the ",(0,t.jsx)(r.code,{children:"clearable"})," prop to display a clear button in the right section. Note that if you set the ",(0,t.jsx)(r.code,{children:"rightSection"}),"\nprop, the clear button will not be displayed."]}),"\n",(0,t.jsx)(l,{data:i.DateTimePickerDemos.clearable}),"\n",(0,t.jsx)(n,{}),"\n",(0,t.jsx)(l,{data:i.DateTimePickerDemos.clearSectionMode}),"\n",(0,t.jsx)(r.h2,{id:"open-picker-in-modal",children:"Open picker in modal"}),"\n",(0,t.jsxs)(r.p,{children:["By default, the picker is rendered inside ",(0,t.jsx)(r.a,{href:"/core/popover/",children:"Popover"}),".\nYou can change that to ",(0,t.jsx)(r.a,{href:"/core/modal/",children:"Modal"})," by setting ",(0,t.jsx)(r.code,{children:'dropdownType="modal"'}),":"]}),"\n",(0,t.jsx)(l,{data:i.DateTimePickerDemos.modal}),"\n",(0,t.jsx)(o,{component:"DateTimePicker",refType:"button",package:"@mantine/dates"}),"\n",(0,t.jsx)(c,{component:"DateTimePicker",packageName:"@mantine/dates"})]})}function d(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}e.s(["default",0,function(e={}){return(0,t.jsx)(l,{...e,children:(0,t.jsx)(o,{...e})})}])},824415,(e,t,a)=>{let i="/dates/date-time-picker";(window.__NEXT_P=window.__NEXT_P||[]).push([i,()=>e.r(958962)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([i])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);