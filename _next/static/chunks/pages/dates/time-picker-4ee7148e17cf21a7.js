(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[73196],{21333:(e,n,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/dates/time-picker",function(){return t(66639)}])},66639:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>L});var i=t(31085),r=t(71184),o=t(38671);let s={type:"code",component:function(){return(0,i.jsx)(o.A,{label:"Enter time"})},code:`
import { TimePicker } from '@mantine/dates';

function Demo() {
  return <TimePicker label="Enter time" />;
}
`,centered:!0,maxWidth:340},a={type:"code",component:function(){return(0,i.jsx)(o.A,{label:"Enter time",withSeconds:!0})},code:`
import { TimePicker } from '@mantine/dates';

function Demo() {
  return <TimePicker label="Enter time" withSeconds />;
}
`,centered:!0,maxWidth:340},d={type:"code",component:function(){return(0,i.jsx)(o.A,{label:"Enter time",format:"12h"})},code:`
import { TimePicker } from '@mantine/dates';

function Demo() {
  return <TimePicker label="Enter time" format="12h" />;
}
`,centered:!0,maxWidth:340},l={type:"code",component:function(){return(0,i.jsx)(o.A,{label:"Enter time",format:"12h",amPmLabels:{am:"पूर्वाह्न",pm:"अपराह्न"}})},code:`
import { TimePicker } from '@mantine/dates';

function Demo() {
  return (
    <TimePicker label="Enter time" format="12h" amPmLabels={{ am: '\u092A\u0942\u0930\u094D\u0935\u093E\u0939\u094D\u0928', pm: '\u0905\u092A\u0930\u093E\u0939\u094D\u0928' }} />
  );
}
`,centered:!0,maxWidth:340},c={type:"code",component:function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.A,{label:"Enter time (24h format)",min:"10:00",max:"18:30"}),(0,i.jsx)(o.A,{label:"Enter time (12h format)",min:"10:00",max:"18:30",format:"12h",mt:"md"})]})},code:`
import { TimePicker } from '@mantine/dates';

function Demo() {
  return (
    <>
      <TimePicker label="Enter time (24h format)" min="10:00" max="18:30" />
      <TimePicker label="Enter time (12h format)" min="10:00" max="18:30" format="12h" mt="md" />
    </>
  );
}
`,centered:!0,maxWidth:340};var p=t(30283);let m={type:"code",component:function(){return(0,i.jsx)(o.A,{label:"Enter time",withSeconds:!0,withDropdown:!0,hoursStep:1,minutesStep:5,secondsStep:10})},code:`
import { TimePicker } from '@mantine/dates';

function Demo() {
  return (
    <TimePicker
      label="Enter time"
      withSeconds
      withDropdown
      hoursStep={1}
      minutesStep={5}
      secondsStep={10}
    />
  );
}
`,centered:!0,maxWidth:340};var u=t(14041),h=t(59544),f=t(22962);let x={type:"code",component:function(){let[e,n]=(0,u.useState)(!1),[t,r]=(0,u.useState)("");return(0,i.jsx)(o.A,{rightSection:(0,i.jsx)(f.M,{onClick:()=>n(!0),variant:"default",children:(0,i.jsx)(h.A,{size:18,stroke:1.5})}),value:t,onChange:e=>{r(e),""===t&&n(!1)},popoverProps:{opened:e,onChange:e=>!e&&n(!1)}})},code:`
import { useState } from 'react';
import { IconClock } from '@tabler/icons-react';
import { ActionIcon } from '@mantine/core';
import { TimePicker } from '@mantine/dates';

function Demo() {
  const [dropdownOpened, setDropdownOpened] = useState(false);
  const [value, setValue] = useState('');

  return (
    <TimePicker
      rightSection={
        <ActionIcon onClick={() => setDropdownOpened(true)} variant="default">
          <IconClock size={18} stroke={1.5} />
        </ActionIcon>
      }
      value={value}
      onChange={(val) => {
        setValue(val);
        if (value === '') {
          setDropdownOpened(false);
        }
      }}
      popoverProps={{
        opened: dropdownOpened,
        onChange: (_opened) => !_opened && setDropdownOpened(false),
      }}
    />
  );
}
`,centered:!0,maxWidth:340},j={type:"code",component:function(){return(0,i.jsx)(o.A,{label:"Enter time",withDropdown:!0,presets:["12:30","15:45","18:00","20:15","22:30"]})},code:`
import { TimePicker } from '@mantine/dates';

function Demo() {
  return (
    <TimePicker
      label="Enter time"
      withDropdown
      presets={['12:30', '15:45', '18:00', '20:15', '22:30']}
    />
  );
}
`,centered:!0,maxWidth:340},v={type:"code",component:function(){return(0,i.jsx)(o.A,{label:"Enter time",withDropdown:!0,maxDropdownContentHeight:300,presets:[{label:"Morning",values:["06:00","06:30","08:00","08:30","10:00","10:45"]},{label:"Afternoon",values:["12:00","12:30","14:00","14:45","16:00","17:30"]},{label:"Evening",values:["18:00","18:30","20:00","22:00"]}]})},code:`
import { TimePicker } from '@mantine/dates';

function Demo() {
  return (
    <TimePicker
      label="Enter time"
      withDropdown
      maxDropdownContentHeight={300}
      presets={[
        { label: 'Morning', values: ['06:00:00', '08:00:00', '10:00:00'] },
        { label: 'Afternoon', values: ['12:00:00', '14:00:00', '16:00:00'] },
        { label: 'Evening', values: ['18:00:00', '20:00:00', '22:00:00'] },
      ]}
    />
  );
}
`,centered:!0,maxWidth:340};var y=t(32719);let g={type:"code",component:function(){return(0,i.jsx)(o.A,{label:"Enter time",withDropdown:!0,presets:(0,y.z)({startTime:"06:00:00",endTime:"18:00:00",interval:"01:30:00"})})},code:`
import { getTimeRange, TimePicker } from '@mantine/dates';

function Demo() {
  return (
    <TimePicker
      label="Enter time"
      withDropdown
      presets={getTimeRange({ startTime: '06:00:00', endTime: '18:00:00', interval: '01:30:00' })}
    />
  );
}
`,centered:!0,maxWidth:340},w={type:"code",component:function(){return(0,i.jsx)(o.A,{label:"Enter time",withDropdown:!0,popoverProps:{position:"top-start",middlewares:{flip:!1,shift:!1}}})},code:`
import { TimePicker } from '@mantine/dates';

function Demo() {
  return (
    <TimePicker
      label="Enter time"
      withDropdown
      popoverProps={{
        position: 'top-start',
        middlewares: { flip: false, shift: false },
      }}
    />
  );
}
`,centered:!0,maxWidth:340},b={type:"code",component:function(){return(0,i.jsx)(o.A,{label:"Enter time",withDropdown:!0,withSeconds:!0,format:"12h",popoverProps:{width:"target"}})},code:`
import { TimePicker } from '@mantine/dates';

function Demo() {
  return (
    <TimePicker
      label="Enter time"
      withDropdown
      withSeconds
      format="12h"
      popoverProps={{
        width: 'target',
      }}
    />
  );
}
`,centered:!0,maxWidth:340};var k=t(93065),P=t(37905);let T=/^(1[0-2]|0?[1-9]):[0-5][0-9](?::[0-5][0-9])?\s?(AM|PM)$/,M=({time:e})=>{if(!T.test(e))return{hours:null,minutes:null,seconds:null,amPm:null};let[n,t,i]=e.split(":").map(e=>e.replace(/AM|PM/g,"")),r=e.toLowerCase().includes("pm");return{hours:"string"==typeof n?Number(n):null,minutes:"string"==typeof t?Number(t):null,seconds:"string"==typeof i?Number(i):0,amPm:r?"PM":"AM"}},A={type:"code",component:function(){return(0,i.jsxs)("div",{children:[(0,i.jsx)(o.A,{label:"Paste time here",format:"12h",withSeconds:!0,pasteSplit:M}),(0,i.jsxs)(k.E,{mt:"md",children:["Try pasting time in 12h format in any input. For example, try pasting ",(0,i.jsx)(P.C,{children:"12:34 PM"})," ","or ",(0,i.jsx)(P.C,{children:"8:56:45 AM"})]})]})},code:`
import { Code, Text } from '@mantine/core';
import { TimePicker, TimePickerPasteSplit } from '@mantine/dates';

const re = /^(1[0-2]|0?[1-9]):[0-5][0-9](?::[0-5][0-9])?\\s?(AM|PM)$/;

const customPasteSplit: TimePickerPasteSplit = ({ time }) => {
  if (!re.test(time)) {
    return { hours: null, minutes: null, seconds: null, amPm: null };
  }

  const [hours, minutes, second] = time.split(':').map((part) => part.replace(/AM|PM/g, ''));
  const isPm = time.toLowerCase().includes('pm');

  return {
    hours: typeof hours === 'string' ? Number(hours) : null,
    minutes: typeof minutes === 'string' ? Number(minutes) : null,
    seconds: typeof second === 'string' ? Number(second) : 0,
    amPm: isPm ? 'PM' : 'AM',
  };
};

function Demo() {
  return (
    <div>
      <TimePicker label="Paste time here" format="12h" withSeconds pasteSplit={customPasteSplit} />
      <Text mt="md">
        Try pasting time in 12h format in any input. For example, try pasting <Code>12:34 PM</Code>{' '}
        or <Code>8:56:45 AM</Code>
      </Text>
    </div>
  );
}
`,centered:!0,maxWidth:340},D={type:"code",component:function(){return(0,i.jsx)(o.A,{label:"Enter time",clearable:!0,defaultValue:"12:34:44"})},code:`
import { TimePicker } from '@mantine/dates';

function Demo() {
  return <TimePicker label="Enter time" clearable defaultValue="12:34:44" />;
}
`,centered:!0,maxWidth:340},E={type:"code",component:function(){return(0,i.jsx)(o.A,{label:"Enter time",disabled:!0})},code:`
import { TimePicker } from '@mantine/dates';

function Demo() {
  return <TimePicker label="Enter time" disabled />;
}
`,centered:!0,maxWidth:340},S={type:"code",component:function(){return(0,i.jsx)(o.A,{label:"Enter time",defaultValue:"12:45:33",readOnly:!0})},code:`
import { TimePicker } from '@mantine/dates';

function Demo() {
  return <TimePicker label="Enter time" defaultValue="12:45:33" readOnly />;
}
`,centered:!0,maxWidth:340},V={type:"configurator",component:function(e){return(0,i.jsx)(o.A,{withDropdown:!0,...e})},code:`
import { TimePicker } from '@mantine/dates';


function Demo() {
  return (
    <TimePicker
      withDropdown
      {{props}}
    />
  );
}
`,centered:!0,maxWidth:340,controls:t(23232).$7};var C=t(18675),I=t(20017);let R=(0,C.P)(I.XZ.TimePicker);function W(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components},{Demo:t,InputFeatures:o,KeyboardEventsTable:u}=n;return t||N("Demo",!0),o||N("InputFeatures",!0),u||N("KeyboardEventsTable",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"TimePicker"})," component is an alternative to ",(0,i.jsx)(n.a,{href:"/dates/time-input",children:"TimeInput"})," that offers more\nfeatures, it supports 24-hour and 12-hour formats, dropdown with hours, minutes and seconds, and\nmore."]}),"\n",(0,i.jsx)(t,{data:s}),"\n",(0,i.jsx)(n.h2,{id:"controlled",children:"Controlled"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"TimePicker"})," component value is a string in ",(0,i.jsx)(n.code,{children:"hh:mm:ss"})," 24-hour format (for example ",(0,i.jsx)(n.code,{children:"18:34:55"}),").\nEmpty string is used to represent no value. ",(0,i.jsx)(n.code,{children:"onChange"})," function is called only when the entered value is valid.\nThe input value is considered valid in the following cases:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["All inputs are empty. In this case ",(0,i.jsx)(n.code,{children:"onChange"})," is called with an empty string."]}),"\n",(0,i.jsxs)(n.li,{children:["All inputs are filled. For example if ",(0,i.jsx)(n.code,{children:"withSeconds"})," prop is set and the user entered ",(0,i.jsx)(n.code,{children:"12:34:56"}),", ",(0,i.jsx)(n.code,{children:"onChange"})," will be called with ",(0,i.jsx)(n.code,{children:"12:34:56"}),". But if the user entered ",(0,i.jsx)(n.code,{children:"12:34"}),", ",(0,i.jsx)(n.code,{children:"onChange"})," will not be called because seconds value is missing."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { TimePicker } from '@mantine/dates';\n\nfunction Demo() {\n  const [value, setValue] = useState('');\n  return <TimePicker value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"with-seconds",children:"With seconds"}),"\n",(0,i.jsxs)(n.p,{children:["Set ",(0,i.jsx)(n.code,{children:"withSeconds"})," prop to enable seconds input. Note that if this prop is used,\n",(0,i.jsx)(n.code,{children:"onChange"})," is not called until all inputs are filled – it is not possible\nto enter only hours and minutes."]}),"\n",(0,i.jsx)(t,{data:a}),"\n",(0,i.jsx)(n.h2,{id:"12-hour-format",children:"12-hour format"}),"\n",(0,i.jsxs)(n.p,{children:["Set ",(0,i.jsx)(n.code,{children:'format="12h"'})," to use 12-hour format. Note that ",(0,i.jsx)(n.code,{children:"onChange"})," is called only when all inputs are filled\nincluding am/pm input."]}),"\n",(0,i.jsx)(t,{data:d}),"\n",(0,i.jsx)(n.h2,{id:"change-ampm-labels",children:"Change am/pm labels"}),"\n",(0,i.jsxs)(n.p,{children:["To change am/pm labels use ",(0,i.jsx)(n.code,{children:"amPmLabels"})," prop. Example of changing labels to Hindi:"]}),"\n",(0,i.jsx)(t,{data:l}),"\n",(0,i.jsx)(n.h2,{id:"min-and-max-values",children:"Min and max values"}),"\n",(0,i.jsxs)(n.p,{children:["Set ",(0,i.jsx)(n.code,{children:"min"})," and ",(0,i.jsx)(n.code,{children:"max"})," props to limit available time range:"]}),"\n",(0,i.jsx)(t,{data:c}),"\n",(0,i.jsx)(n.h2,{id:"with-dropdown",children:"With dropdown"}),"\n",(0,i.jsxs)(n.p,{children:["Set ",(0,i.jsx)(n.code,{children:"withDropdown"})," prop to display the dropdown with hours, minutes, seconds and am/pm selects.\nBy default, the dropdown is visible when one of the inputs is focused."]}),"\n",(0,i.jsx)(t,{data:p.M}),"\n",(0,i.jsx)(n.h2,{id:"hoursminutesseconds-step",children:"Hours/minutes/seconds step"}),"\n",(0,i.jsxs)(n.p,{children:["Use ",(0,i.jsx)(n.code,{children:"hoursStep"}),", ",(0,i.jsx)(n.code,{children:"minutesStep"})," and ",(0,i.jsx)(n.code,{children:"secondsStep"})," props to control step for each input.\nThese props are used to control value by which the input is incremented or decremented when\nup/down arrow keys are pressed and to generate corresponding values range in the dropdown."]}),"\n",(0,i.jsx)(t,{data:m}),"\n",(0,i.jsx)(n.h2,{id:"control-dropdown-opened-state",children:"Control dropdown opened state"}),"\n",(0,i.jsxs)(n.p,{children:["Use ",(0,i.jsx)(n.code,{children:"popoverProps"})," to pass props down to the underlying ",(0,i.jsx)(n.a,{href:"/core/popover",children:"Popover"})," component:"]}),"\n",(0,i.jsx)(t,{data:x}),"\n",(0,i.jsx)(n.h2,{id:"time-presets",children:"Time presets"}),"\n",(0,i.jsxs)(n.p,{children:["You can define time presets with ",(0,i.jsx)(n.code,{children:"presets"})," prop. Presets are displayed in the dropdown and can be selected by clicking on them.\nTime values for presets should be in ",(0,i.jsx)(n.code,{children:"hh:mm:ss"})," or ",(0,i.jsx)(n.code,{children:"hh:mm"})," 24-hour time format. Presets\ndisplay value is generated based on ",(0,i.jsx)(n.code,{children:"format"}),", ",(0,i.jsx)(n.code,{children:"amPmLabels"})," and ",(0,i.jsx)(n.code,{children:"withSeconds"})," props."]}),"\n",(0,i.jsx)(t,{data:j}),"\n",(0,i.jsx)(n.h2,{id:"time-presets-groups",children:"Time presets groups"}),"\n",(0,i.jsxs)(n.p,{children:["To group presets use an array of objects with ",(0,i.jsx)(n.code,{children:"label"})," and ",(0,i.jsx)(n.code,{children:"values"})," keys:"]}),"\n",(0,i.jsx)(t,{data:v}),"\n",(0,i.jsx)(n.h2,{id:"time-presets-range",children:"Time presets range"}),"\n",(0,i.jsxs)(n.p,{children:["If you need to generate a range of time values, use ",(0,i.jsx)(n.code,{children:"getTimeRange"})," function exported from\n",(0,i.jsx)(n.code,{children:"@mantine/dates"})," package. The function accepts start, end time and interval in ",(0,i.jsx)(n.code,{children:"hh:mm:ss"})," format."]}),"\n",(0,i.jsx)(t,{data:g}),"\n",(0,i.jsx)(n.h2,{id:"dropdown-position",children:"Dropdown position"}),"\n",(0,i.jsxs)(n.p,{children:["By default, the dropdown is displayed below the input if there is enough space; otherwise it is displayed above the input.\nYou can change this behavior by setting ",(0,i.jsx)(n.code,{children:"position"})," and ",(0,i.jsx)(n.code,{children:"middlewares"})," props, which are passed down to the\nunderlying ",(0,i.jsx)(n.a,{href:"/core/popover",children:"Popover"})," component."]}),"\n",(0,i.jsx)(n.p,{children:"Example of dropdown that is always displayed above the input:"}),"\n",(0,i.jsx)(t,{data:w}),"\n",(0,i.jsx)(n.h2,{id:"dropdown-width",children:"Dropdown width"}),"\n",(0,i.jsxs)(n.p,{children:["To change dropdown width, set ",(0,i.jsx)(n.code,{children:"width"})," prop in ",(0,i.jsx)(n.code,{children:"comboboxProps"}),". By default,\ndropdown width is adjusted to fit all content. Example of dropdown width set\nto the input width:"]}),"\n",(0,i.jsx)(t,{data:b}),"\n",(0,i.jsx)(n.h2,{id:"paste-events",children:"Paste events"}),"\n",(0,i.jsxs)(n.p,{children:["By default, ",(0,i.jsx)(n.code,{children:"TimePicker"})," handles only time in 24-hour format (for example ",(0,i.jsx)(n.code,{children:"17:33:43"})," or ",(0,i.jsx)(n.code,{children:"19:22"}),") for paste events.\nWith ",(0,i.jsx)(n.code,{children:"pasteSplit"})," prop you can create a custom paste time parser:"]}),"\n",(0,i.jsx)(t,{data:A}),"\n",(0,i.jsx)(n.h2,{id:"clearable",children:"Clearable"}),"\n",(0,i.jsxs)(n.p,{children:["Set ",(0,i.jsx)(n.code,{children:"clearable"})," prop to display a clear button in the right section of the input.\nThe clear button is visible when at least one of the fields has value."]}),"\n",(0,i.jsx)(t,{data:D}),"\n",(0,i.jsx)(n.h2,{id:"disabled",children:"Disabled"}),"\n",(0,i.jsx)(t,{data:E}),"\n",(0,i.jsx)(n.h2,{id:"read-only",children:"Read only"}),"\n",(0,i.jsx)(t,{data:S}),"\n",(0,i.jsx)(n.h2,{id:"input-props",children:"Input props"}),"\n",(0,i.jsx)(o,{component:"TimePicker",element:"div"}),"\n",(0,i.jsx)(t,{data:V}),"\n",(0,i.jsx)(n.h2,{id:"get-refs-of-inner-inputs",children:"Get refs of inner inputs"}),"\n",(0,i.jsxs)(n.p,{children:["Use ",(0,i.jsx)(n.code,{children:"hoursRef"}),", ",(0,i.jsx)(n.code,{children:"minutesRef"}),", ",(0,i.jsx)(n.code,{children:"secondsRef"})," and ",(0,i.jsx)(n.code,{children:"amPmRef"})," props to get refs of inner inputs:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import { useRef } from 'react';\nimport { TimePicker } from '@mantine/dates';\n\nfunction Demo() {\n  const hoursRef = useRef<HTMLInputElement>(null);\n  const minutesRef = useRef<HTMLInputElement>(null);\n  const secondsRef = useRef<HTMLInputElement>(null);\n  const amPmRef = useRef<HTMLSelectElement>(null);\n\n  return (\n    <TimePicker\n      hoursRef={hoursRef}\n      minutesRef={minutesRef}\n      secondsRef={secondsRef}\n      amPmRef={amPmRef}\n    />\n  );\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"onfocus-and-onblur-events",children:"onFocus and onBlur events"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"onFocus"})," and ",(0,i.jsx)(n.code,{children:"onBlur"})," events are called when the first input is focused and the last input is blurred:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import { TimePicker } from '@mantine/dates';\n\nfunction Demo() {\n  return (\n    <TimePicker\n      onFocus={() => console.log('Focused')}\n      onBlur={() => console.log('Blurred')}\n    />\n  );\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,i.jsx)(n.p,{children:"Set aria labels for hours, minutes, seconds and am/pm inputs and clear button with corresponding props:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:'import { TimePicker } from \'@mantine/dates\';\n\nfunction Demo() {\n  return (\n    <TimePicker\n      hoursInputLabel="Hours"\n      minutesInputLabel="Minutes"\n      secondsInputLabel="Seconds"\n      amPmInputLabel="AM/PM"\n      clearButtonProps={{ \'aria-label\': \'Clear time\' }}\n    />\n  );\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Keyboard interactions:"}),"\n",(0,i.jsx)(u,{data:[{key:"ArrowDown",description:"Decrements current value by step"},{key:"ArrowUp",description:"Increments current value by step"},{key:"Home",description:"Sets current value to min possible value"},{key:"End",description:"Sets current value to max possible value"},{key:"Backspace",description:"Clears current value"},{key:"ArrowRight",description:"Moves focus to the next input"},{key:"ArrowLeft",description:"Moves focus to the previous input"}]})]})}function L(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,i.jsx)(R,{...e,children:(0,i.jsx)(W,{...e})})}function N(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},87186:(e,n,t)=>{"use strict";t.d(n,{A:()=>i});var i=(0,t(73366).A)("outline","adjustments","IconAdjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},80502:(e,n,t)=>{"use strict";t.d(n,{A:()=>i});var i=(0,t(73366).A)("outline","arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},89689:(e,n,t)=>{"use strict";t.d(n,{A:()=>i});var i=(0,t(73366).A)("outline","arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},61584:(e,n,t)=>{"use strict";t.d(n,{A:()=>i});var i=(0,t(73366).A)("outline","calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},59544:(e,n,t)=>{"use strict";t.d(n,{A:()=>i});var i=(0,t(73366).A)("outline","clock","IconClock",[["path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0",key:"svg-0"}],["path",{d:"M12 7v5l3 3",key:"svg-1"}]])},91133:(e,n,t)=>{"use strict";t.d(n,{A:()=>i});var i=(0,t(73366).A)("outline","code","IconCode",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},11749:(e,n,t)=>{"use strict";t.d(n,{A:()=>i});var i=(0,t(73366).A)("outline","file-text","IconFileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},89843:(e,n,t)=>{"use strict";t.d(n,{A:()=>i});var i=(0,t(73366).A)("outline","license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},9613:(e,n,t)=>{"use strict";t.d(n,{A:()=>i});var i=(0,t(73366).A)("outline","pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},55764:(e,n,t)=>{"use strict";t.d(n,{A:()=>i});var i=(0,t(73366).A)("outline","switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},30283:(e,n,t)=>{"use strict";t.d(n,{M:()=>o});var i=t(31085),r=t(38671);let o={type:"code",component:function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.A,{label:"Enter time (24h format)",withSeconds:!0,withDropdown:!0}),(0,i.jsx)(r.A,{label:"Enter time (12h format)",withSeconds:!0,withDropdown:!0,format:"12h",mt:"md"})]})},code:`
import { TimePicker } from '@mantine/dates';

function Demo() {
  return (
    <>
      <TimePicker label="Enter time (24h format)" withSeconds withDropdown />
      <TimePicker label="Enter time (12h format)" withSeconds withDropdown format="12h" mt="md" />
    </>
  );
}
`,centered:!0,maxWidth:340}},23232:(e,n,t)=>{"use strict";t.d(n,{$7:()=>o,l$:()=>i,wQ:()=>r});let i=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],r=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],o=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]},32719:(e,n,t)=>{"use strict";t.d(n,{z:()=>r});var i=t(90729);function r({startTime:e,endTime:n,interval:t}){let r=[],o=(0,i.w)(e),s=(0,i.w)(n),a=(0,i.w)(t);for(let e=o;e<=s;e+=a)r.push((0,i.Y)(e).timeString);return r}}},e=>{var n=n=>e(e.s=n);e.O(0,[18675,38671,90636,46593,38792],()=>n(21333)),_N_E=e.O()}]);