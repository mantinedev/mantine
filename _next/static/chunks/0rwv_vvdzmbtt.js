(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:"Module"}),r}])},931882,e=>{"use strict";var t=e.i(191788),n=e.i(171481);let r=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208,96l-80,80L48,96Z",opacity:"0.2"}),t.createElement("path",{d:"M215.39,92.94A8,8,0,0,0,208,88H48a8,8,0,0,0-5.66,13.66l80,80a8,8,0,0,0,11.32,0l80-80A8,8,0,0,0,215.39,92.94ZM128,164.69,67.31,104H188.69Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M212.24,100.24l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,167.51l75.76-75.75a6,6,0,0,1,8.48,8.48Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M210.83,98.83l-80,80a4,4,0,0,1-5.66,0l-80-80a4,4,0,0,1,5.66-5.66L128,170.34l77.17-77.17a4,4,0,1,1,5.66,5.66Z"}))]]),i=t.forwardRef((e,i)=>t.createElement(n.default,{ref:i,...e,weights:r}));i.displayName="CaretDownIcon",e.s(["CaretDownIcon",0,i],931882)},960831,e=>{"use strict";e.s(["inputControls",0,[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"md",libraryValue:"md"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}],"inputOnlyControls",0,[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"md",libraryValue:"md"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],"inputWrapperOnlyControls",0,[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}]])},63583,e=>{"use strict";e.s(["padTime",0,function(e){return e<10?`0${e}`:`${e}`}])},242558,e=>{"use strict";e.s(["splitTimeString",0,function(e){let[t=null,n=null,r=null]=e.split(":").map(Number);return{hours:t,minutes:n,seconds:r}}])},866373,e=>{"use strict";var t=e.i(63583),n=e.i(242558),r=e.i(391398);function i({value:e,format:o="24h",amPmLabels:s={am:"AM",pm:"PM"},withSeconds:a=!1}){return(0,r.jsx)(r.Fragment,{children:function({value:e,format:r,amPmLabels:i,withSeconds:o}){let s=(0,n.splitTimeString)("string"==typeof e?e:`${e.getHours()}:${e.getMinutes()}${o?`:${e.getSeconds()}`:""}`);if(null===s.hours||null===s.minutes)return null;if("24h"===r)return`${(0,t.padTime)(s.hours)}:${(0,t.padTime)(s.minutes)}${o?`:${(0,t.padTime)(s.seconds||0)}`:""}`;let a=s.hours>=12;return`${s.hours%12==0?12:s.hours%12}:${(0,t.padTime)(s.minutes)}${o?`:${(0,t.padTime)(s.seconds||0)}`:""} ${a?i.pm:i.am}`}({value:e,format:o,amPmLabels:s,withSeconds:a})})}i.displayName="@mantine/dates/TimeValue",e.s(["TimeValue",0,i],866373)},766202,648448,e=>{"use strict";var t=e.i(242558);e.s(["isSameTime",0,function({time:e,compare:n,withSeconds:r}){let i=(0,t.splitTimeString)(e),o=(0,t.splitTimeString)(n);return r?i.hours===o.hours&&i.minutes===o.minutes&&i.seconds===o.seconds:i.hours===o.hours&&i.minutes===o.minutes}],766202);var n=e.i(63583);e.s(["secondsToTime",0,function(e){let t=Math.floor(e/3600),r=Math.floor(e%3600/60),i=e%60;return{timeString:`${(0,n.padTime)(t)}:${(0,n.padTime)(r)}:${(0,n.padTime)(i)}`,hours:t,minutes:r,seconds:i}},"timeToSeconds",0,function(e){let[t=0,n=0,r=0]=e.split(":").map(Number);return 3600*t+60*n+r}],648448)},779893,e=>{"use strict";var t=e.i(63583),n=e.i(391398),r=e.i(852361);function i({value:e,min:o,max:s,onChange:a,focusable:l,step:c,onNextInput:d,onPreviousInput:m,onFocus:u,readOnly:p,allowTemporaryZero:h=!1,placeholder:f="--",disableAutoAdvance:x=!1,...P}){let j=Number.isFinite(s),g=j?Number(s.toFixed(0)[0]):1/0,v=j?s+1-c:s;return(0,n.jsx)("input",{type:"text",role:"spinbutton","aria-valuemin":o,"aria-valuemax":j?s:void 0,"aria-valuenow":null===e?0:e,"data-empty":null===e||void 0,inputMode:"numeric",placeholder:f,value:null===e?"":(0,t.padTime)(e),onChange:e=>(e=>{if(p)return;let t=e.replace(/\D/g,"");if(""!==t){let n=0;for(let e=0;e<t.length;e+=1){let r=t.charCodeAt(e)-48,i=10*n+r;n=i>s?r:i}let i=h&&0===n&&o>0?0:(0,r.clamp)(n,o,s);a(i),!x&&(i>g||e.startsWith("00"))&&d?.()}})(e.currentTarget.value),onKeyDown:t=>{if(!p){if("0"===t.key||"Num0"===t.key){let{selectionStart:n,selectionEnd:r,value:i}=t.currentTarget,o=i.length>0&&0===n&&r===i.length;0!==e||o||(t.preventDefault(),d?.())}"Home"===t.key&&(t.preventDefault(),a(o)),"End"===t.key&&j&&(t.preventDefault(),a(s)),("Backspace"===t.key||"Delete"===t.key)&&(t.preventDefault(),null!==e?a(null):m?.()),"ArrowRight"===t.key&&(t.preventDefault(),d?.()),"ArrowLeft"===t.key&&(t.preventDefault(),m?.()),"ArrowUp"===t.key&&(t.preventDefault(),a(null===e?o:(0,r.clamp)(e+c,o,v))),"ArrowDown"===t.key&&(t.preventDefault(),a(null===e?j?v:o:(0,r.clamp)(e-c,o,v)))}},onFocus:e=>{e.currentTarget.select(),u?.(e)},onClick:e=>{e.stopPropagation(),e.currentTarget.select()},onMouseDown:e=>e.stopPropagation(),...P})}i.displayName="@mantine/dates/SpinInput";let[o,s]=(0,e.i(386179).createSafeContext)("TimeInput component was not found in the component tree");function a({labels:e,value:t,onChange:r,className:i,style:o,onPreviousInput:l,readOnly:c,onMouseDown:d,onTouchStart:m,inputType:u,...p}){let h=s(),f=n=>{c||("Home"===n.key&&(n.preventDefault(),r(e.am)),"End"===n.key&&(n.preventDefault(),r(e.pm)),("Backspace"===n.key||"Delete"===n.key)&&(n.preventDefault(),null===t?l?.():r(null)),"ArrowLeft"===n.key&&(n.preventDefault(),l?.()),("ArrowUp"===n.key||"ArrowDown"===n.key)&&(n.preventDefault(),r(t===e.am?e.pm:e.am)),"KeyA"===n.code&&(n.preventDefault(),r(e.am)),"KeyP"===n.code&&(n.preventDefault(),r(e.pm)))};if("input"===u){let e=t||"--",s=e.length+1;return(0,n.jsx)("input",{...h.getStyles("field",{className:i,style:o}),value:e,size:s,onChange:e=>!c&&r(e.target.value||null),onClick:e=>e.stopPropagation(),onKeyDown:f,onMouseDown:e=>{e.stopPropagation(),d?.(e)},"data-am-pm":!0,...p})}return(0,n.jsxs)("select",{...h.getStyles("field",{className:i,style:o}),value:t||"",onChange:e=>!c&&r(e.target.value||null),onClick:e=>e.stopPropagation(),onKeyDown:f,onMouseDown:e=>{e.stopPropagation(),d?.(e)},"data-am-pm":!0,...p,children:[(0,n.jsx)("option",{value:"",children:"--"}),(0,n.jsx)("option",{value:e.am,children:e.am}),(0,n.jsx)("option",{value:e.pm,children:e.pm})]})}a.displayName="@mantine/dates/AmPmInput";var l=e.i(284629);function c({value:e,active:r,onSelect:i}){let o=s();return(0,n.jsx)(l.UnstyledButton,{mod:{active:r},onClick:()=>i(e),onMouseDown:e=>e.preventDefault(),"data-value":e,tabIndex:-1,...o.getStyles("control"),children:"number"==typeof e?(0,t.padTime)(e):e})}function d({labels:e,value:t,onSelect:r}){let i=s(),o=[e.am,e.pm].map(e=>(0,n.jsx)(c,{value:e,active:t===e,onSelect:r},e));return(0,n.jsx)("div",{...i.getStyles("controlsList"),children:o})}c.displayName="@mantine/dates/TimeControl",d.displayName="@mantine/dates/AmPmControlsList";var m=e.i(191788),u=e.i(19300);function p({min:e,max:t,step:r,value:i,onSelect:o,reversed:a}){let l=s(),d=(0,m.useRef)(null),h=function(e,t,n){let r=[];for(let i=e;i<=t;i+=n)r.push(i);return r}(e,t,r),f=(a?h.reverse():h).map(e=>(0,n.jsx)(c,{value:e,active:i===e,onSelect:o},e));return(0,m.useEffect)(()=>{null!==i&&requestAnimationFrame(()=>{let e=d.current?.querySelector(`[data-value="${i}"]`);!function(e,t){if(!e||!t)return!1;let n=e.getBoundingClientRect(),r=t.getBoundingClientRect();return n.top>=r.top&&n.bottom<=r.bottom&&n.left>=r.left&&n.right<=r.right}(e,d.current)&&e?.scrollIntoView({block:"nearest"})})},[i]),(0,n.jsx)(u.ScrollArea,{h:l.maxDropdownContentHeight,type:"never",viewportRef:d,...l.getStyles("scrollarea"),...l.scrollAreaProps,children:(0,n.jsx)("div",{...l.getStyles("controlsList"),children:f})})}p.displayName="@mantine/dates/TimeControlsList";var h=e.i(766202),f=e.i(866373);function x({value:e,active:t,onChange:r,format:i,amPmLabels:o,withSeconds:a}){let c=s();return(0,n.jsx)(l.UnstyledButton,{mod:{active:t},onClick:()=>r(e),...c.getStyles("presetControl"),children:(0,n.jsx)(f.TimeValue,{withSeconds:a,value:e,format:i,amPmLabels:o})})}x.displayName="@mantine/dates/TimePresetControl";var P=e.i(140763);function j({value:e,data:t,onChange:r,format:i,amPmLabels:o,withSeconds:a}){let l=s(),c=t.values.map(t=>(0,n.jsx)(x,{value:t,format:i,amPmLabels:o,withSeconds:a,active:(0,h.isSameTime)({time:t,compare:e,withSeconds:a}),onChange:r},t));return(0,n.jsxs)("div",{...l.getStyles("presetsGroup"),children:[(0,n.jsx)("div",{...l.getStyles("presetsGroupLabel"),children:t.label}),(0,n.jsx)(P.SimpleGrid,{cols:a?2:3,spacing:4,children:c})]})}function g({presets:e,format:t,amPmLabels:r,withSeconds:i,value:o,onChange:a}){let l=s();if(0===e.length)return null;if("string"==typeof e[0]){let s=e.map(e=>(0,n.jsx)(x,{value:e,format:t,amPmLabels:r,withSeconds:i,active:(0,h.isSameTime)({time:e,compare:o,withSeconds:i}),onChange:a},e));return(0,n.jsx)(u.ScrollArea.Autosize,{mah:l.maxDropdownContentHeight,type:"never",...l.getStyles("scrollarea"),...l.scrollAreaProps,children:(0,n.jsx)("div",{...l.getStyles("presetsRoot"),children:(0,n.jsx)(P.SimpleGrid,{cols:i?2:3,spacing:4,children:s})})})}let c=e.map((e,s)=>(0,n.jsx)(j,{data:e,value:o,format:t,amPmLabels:r,withSeconds:i,onChange:a},s));return(0,n.jsx)(u.ScrollArea.Autosize,{mah:l.maxDropdownContentHeight,type:"never",...l.getStyles("scrollarea"),...l.scrollAreaProps,children:(0,n.jsx)("div",{...l.getStyles("presetsRoot"),children:c})})}j.displayName="@mantine/dates/TimePresetGroup",g.displayName="@mantine/dates/TimePresets";var v=e.i(648448);function w(e,t,n){let r=(0,v.timeToSeconds)(e),i=t?(0,v.timeToSeconds)(t):-1/0,o=n?(0,v.timeToSeconds)(n):1/0;return(0,v.secondsToTime)(Math.max(i,Math.min(r,o)))}var T=e.i(242558);function b({time:e,format:t,amPmLabels:n}){if(""===e)return{hours:null,minutes:null,seconds:null,amPm:null};let{hours:r,minutes:i,seconds:o}=(0,T.splitTimeString)(e),s={hours:r,minutes:i,seconds:o};return"12h"===t?function({hours:e,minutes:t,seconds:n,amPmLabels:r}){if(null===e)return{hours:null,minutes:null,seconds:null,amPm:null};let i=e>=12?r.pm:r.am;return{hours:e%12==0?12:e%12,minutes:"number"==typeof t?t:null,seconds:"number"==typeof n?n:null,amPm:i}}({...s,amPmLabels:n}):{...s,amPm:null}}function y({hours:e,minutes:n,seconds:r,format:i,withSeconds:o,amPm:s,amPmLabels:a}){return null===e||null===n||o&&null===r?{valid:!1,value:""}:"24h"===i?{valid:!0,value:`${(0,t.padTime)(e)}:${(0,t.padTime)(n)}${o?`:${(0,t.padTime)(r)}`:""}`}:null===s?{valid:!1,value:""}:{valid:!0,value:function({hours:e,minutes:n,seconds:r,amPm:i,amPmLabels:o,withSeconds:s}){let a=e;return i===o.pm&&12!==e?a+=12:i===o.am&&12===e&&(a=0),`${(0,t.padTime)(a)}:${(0,t.padTime)(n)}${s?`:${(0,t.padTime)(r||0)}`:""}`}({hours:e,minutes:n,seconds:r,amPm:s,amPmLabels:a,withSeconds:o})}}var k=e.i(729262),S={fieldsRoot:"m_7a8f1e6d",fieldsGroup:"m_d6bb0a54",controlsList:"m_b97ecb26",controlsListGroup:"m_31fe42f9",dropdown:"m_9c4817c3",control:"m_154c536b",presetControl:"m_7be09d0c",presetsGroup:"m_7d00001d",presetsGroupLabel:"m_d8d918d7",field:"m_6b43ba88"},D=e.i(802046),M=e.i(586488),E=e.i(392862),C=e.i(481178),A=e.i(275519),V=e.i(433512),I=e.i(44091),R=e.i(62904),N=e.i(391466),F=e.i(107315),H=e.i(332977);let _={type:"time",hoursStep:1,minutesStep:1,secondsStep:1,format:"24h",amPmLabels:{am:"AM",pm:"PM"},pasteSplit:b,maxDropdownContentHeight:200,hoursPlaceholder:"--",minutesPlaceholder:"--",secondsPlaceholder:"--",minHoursDigits:2},L=(0,C.createVarsResolver)((e,{size:t})=>({dropdown:{"--control-font-size":(0,V.getFontSize)(t)}})),W=1/0,$=(0,A.factory)(e=>{let r=(0,I.useProps)(["Input","InputWrapper","TimePicker"],_,e),{classNames:s,className:l,style:c,styles:u,unstyled:h,vars:f,onClick:x,type:P,format:j,value:v,defaultValue:T,onChange:C,hoursStep:A,minutesStep:V,secondsStep:$,withSeconds:Z,hoursInputLabel:B,minutesInputLabel:z,secondsInputLabel:O,amPmInputLabel:G,amPmLabels:U,clearable:K,clearSectionMode:X,onMouseDown:q,onFocusCapture:Y,onBlurCapture:J,min:Q,max:ee,popoverProps:et,withDropdown:en,rightSection:er,onFocus:ei,onBlur:eo,clearButtonProps:es,hoursInputProps:ea,minutesInputProps:el,secondsInputProps:ec,amPmSelectProps:ed,readOnly:em,disabled:eu,size:ep,name:eh,form:ef,hiddenInputProps:ex,labelProps:eP,pasteSplit:ej,hoursRef:eg,minutesRef:ev,secondsRef:ew,amPmRef:eT,presets:eb,closeDropdownOnPresetSelect:ey,maxDropdownContentHeight:ek,scrollAreaProps:eS,attributes:eD,reverseTimeControlsList:eM,hoursPlaceholder:eE,minutesPlaceholder:eC,secondsPlaceholder:eA,minHoursDigits:eV,...eI}=r,eR="duration"===P,eN=eR?"24h":j,eF=eR&&"--"===eE?"-".repeat(eV):eE,{resolvedClassNames:eH,resolvedStyles:e_}=(0,R.useResolvedStylesApi)({classNames:s,styles:u,props:r}),eL=(0,N.useStyles)({name:"TimePicker",classes:S,props:r,className:l,style:c,classNames:s,styles:u,unstyled:h,attributes:eD,vars:f,varsResolver:L}),eW=function({value:e,defaultValue:t,onChange:n,format:r,amPmLabels:i,withSeconds:o=!1,min:s,max:a,clearable:l,readOnly:c,disabled:d,pasteSplit:u,type:p}){let h=b({time:e||t||"",amPmLabels:i,format:r}),f=y({hours:h.hours,minutes:h.minutes,seconds:h.seconds,format:r,withSeconds:o,amPm:h.amPm,amPmLabels:i}),x=(0,m.useRef)(!0),P=(0,m.useRef)(!f.valid),[j,g]=(0,m.useState)(h.hours),[v,T]=(0,m.useState)(h.minutes),[S,D]=(0,m.useState)(h.seconds),[M,E]=(0,m.useState)(h.amPm),C=l&&!c&&!d&&(null!==j||null!==v||null!==S||null!==M),A=(0,m.useRef)(null),V=(0,m.useRef)(null),I=(0,m.useRef)(null),R=(0,m.useRef)(null),N=e=>{"hours"===e&&A.current?.focus(),"minutes"===e&&V.current?.focus(),"seconds"===e&&I.current?.focus(),"amPm"===e&&R.current?.focus()},F=(e,t)=>{let s=y({hours:"hours"===e?t:j,minutes:"minutes"===e?t:v,seconds:"seconds"===e?t:S,amPm:"amPm"===e?t:M,format:r,withSeconds:o,amPmLabels:i});s.valid?(x.current=!1,P.current=!1,"hours"===e&&g(t),"minutes"===e&&T(t),"seconds"===e&&D(t),"amPm"===e&&E(t),n?.(s.value)):(x.current=!1,P.current||(n?.(""),P.current=!0))},H=y({hours:j,minutes:v,seconds:S,format:r,withSeconds:o,amPm:M,amPmLabels:i});return(0,k.useDidUpdate)(()=>{if(""===e){x.current=!1,g(null),T(null),D(null),E(null),x.current=!0;return}if(x.current&&"string"==typeof e){let t=b({time:e||"",amPmLabels:i,format:r});g(t.hours),T(t.minutes),D(t.seconds),E(t.amPm)}x.current=!0},[e]),{refs:{hours:A,minutes:V,seconds:I,amPm:R},values:{hours:j,minutes:v,seconds:S,amPm:M},setHours:e=>{let t=e;"12h"===r&&"number"==typeof e&&e>12&&(t=(e-1)%12+1),g(t),F("hours",t),N("hours")},setMinutes:e=>{T(e),F("minutes",e),N("minutes")},setSeconds:e=>{D(e),F("seconds",e),N("seconds")},setAmPm:e=>{E(e),F("amPm",e),N("amPm")},focus:N,clear:()=>{x.current=!1,g(null),T(null),D(null),E(null),n?.(""),P.current=!0,N("hours")},onPaste:e=>{e.preventDefault();let t=(u||b)({time:e.clipboardData.getData("text"),format:r,amPmLabels:i}),l=y({...t,format:r,withSeconds:o,amPmLabels:i});if(l.valid){x.current=!1;let e=w(l.value,s||"00:00:00",a||("duration"===p?void 0:"23:59:59"));n?.(e.timeString),g(t.hours),T(t.minutes),D(t.seconds),E(t.amPm)}},setTimeString:e=>{x.current=!1;let t=b({time:e,amPmLabels:i,format:r});g(t.hours),T(t.minutes),D(t.seconds),E(t.amPm),P.current=!y({...t,format:r,withSeconds:o,amPmLabels:i}).valid,n?.(e)},isClearable:C,hiddenInputValue:H.value}}({value:v,defaultValue:T,onChange:C,format:eN,amPmLabels:U,withSeconds:Z,min:Q,max:ee,clearable:K,disabled:eu,readOnly:em,pasteSplit:ej,type:P}),e$=(0,H.useMergedRef)(eW.refs.hours,eg),eZ=(0,H.useMergedRef)(eW.refs.minutes,ev),eB=(0,H.useMergedRef)(eW.refs.seconds,ew),ez=(0,H.useMergedRef)(eW.refs.amPm,eT),eO=(0,F.useId)(),eG=(0,m.useRef)(!1),[eU,eK]=(0,m.useState)(!1),eX=e=>{eG.current||(eG.current=!0,ei?.(e))};return(0,n.jsx)(o,{value:{getStyles:eL,scrollAreaProps:eS,maxDropdownContentHeight:ek},children:(0,n.jsxs)(E.Popover,{opened:eU,transitionProps:{duration:0},position:"bottom-start",withRoles:!1,disabled:eu||em||!en||eR,...et,children:[(0,n.jsx)(E.Popover.Target,{children:(0,n.jsxs)(M.InputBase,{component:"div",size:ep,disabled:eu,onClick:e=>{x?.(e),eW.focus("hours"),eu||eK(!0)},onMouseDown:e=>{e.preventDefault(),q?.(e)},onFocusCapture:e=>{eK(!0),Y?.(e)},onBlurCapture:e=>{eK(!1),J?.(e)},rightSection:er,__clearSection:(0,n.jsx)(D.CloseButton,{...es,size:ep,onClick:e=>{eW.clear(),es?.onClick?.(e)},onMouseDown:e=>{e.preventDefault(),es?.onMouseDown?.(e)}}),__clearable:eW.isClearable,__clearSectionMode:X,labelProps:{htmlFor:eO,...eP},style:c,className:l,classNames:eH,styles:e_,attributes:eD,__staticSelector:"TimePicker",...eI,children:[(0,n.jsx)("div",{...eL("fieldsRoot"),dir:"ltr",children:(0,n.jsxs)("div",{...eL("fieldsGroup"),onBlur:e=>{if(!e.currentTarget.contains(e.relatedTarget)){let t=y({...eW.values,format:eN,amPmLabels:U,withSeconds:!!Z});if(t.valid&&(Q||ee)){let e=w(t.value,Q,ee);e.timeString!==t.value&&eW.setTimeString(e.timeString)}eG.current=!1,eo?.(e)}},children:[(0,n.jsx)(i,{id:eO,...ea,...eL("field",{className:ea?.className,style:eR?{width:`calc(${Math.max(eV,(0,t.padTime)(eW.values.hours??0).length)}ch + 0.3em)`,...ea?.style}:ea?.style}),value:eW.values.hours,onChange:eW.setHours,onNextInput:()=>eW.focus("minutes"),min:+("12h"===eN),max:eR?W:"12h"===eN?12:23,allowTemporaryZero:"12h"===eN,disableAutoAdvance:eR,focusable:!0,step:A,ref:e$,"aria-label":B,readOnly:em,disabled:eu,onPaste:eW.onPaste,onFocus:e=>{eX(e),ea?.onFocus?.(e)},onBlur:e=>{let t=e.currentTarget.value;"12h"===eN&&(t?parseInt(t,10):null)===0&&eW.setHours(12),ea?.onBlur?.(e)},placeholder:eF}),(0,n.jsx)("span",{children:":"}),(0,n.jsx)(i,{...el,...eL("field",{className:el?.className,style:el?.style}),value:eW.values.minutes,onChange:eW.setMinutes,min:0,max:59,focusable:!0,step:V,ref:eZ,onPreviousInput:()=>eW.focus("hours"),onNextInput:()=>Z?eW.focus("seconds"):eW.focus("amPm"),"aria-label":z,tabIndex:-1,readOnly:em,disabled:eu,onPaste:eW.onPaste,onFocus:e=>{eX(e),el?.onFocus?.(e)},placeholder:eC}),Z&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{children:":"}),(0,n.jsx)(i,{...ec,...eL("field",{className:ec?.className,style:ec?.style}),value:eW.values.seconds,onChange:eW.setSeconds,min:0,max:59,focusable:!0,step:$,ref:eB,onPreviousInput:()=>eW.focus("minutes"),onNextInput:()=>eW.focus("amPm"),"aria-label":O,tabIndex:-1,readOnly:em,disabled:eu,onPaste:eW.onPaste,onFocus:e=>{eX(e),ec?.onFocus?.(e)},placeholder:eA})]}),"12h"===eN&&!eR&&(0,n.jsx)(a,{...ed,inputType:en?"input":"select",labels:U,value:eW.values.amPm,onChange:eW.setAmPm,ref:ez,"aria-label":G,onPreviousInput:()=>Z?eW.focus("seconds"):eW.focus("minutes"),readOnly:em,disabled:eu,tabIndex:-1,onPaste:eW.onPaste,onFocus:e=>{eX(e),ed?.onFocus?.(e)}})]})}),(0,n.jsx)("input",{type:"hidden",name:eh,form:ef,value:eW.hiddenInputValue,...ex})]})}),(0,n.jsx)(E.Popover.Dropdown,{...eL("dropdown"),onMouseDown:e=>e.preventDefault(),children:eb?(0,n.jsx)(g,{value:eW.hiddenInputValue,onChange:e=>{eW.setTimeString(e),ey&&(eK(!1),et?.onChange?.(!1))},format:eN,presets:eb,amPmLabels:U,withSeconds:Z||!1}):(0,n.jsxs)("div",{...eL("controlsListGroup"),children:[(0,n.jsx)(p,{min:+("12h"===eN),max:"12h"===eN?12:23,step:A,value:eW.values.hours,onSelect:eW.setHours,reversed:eM}),(0,n.jsx)(p,{min:0,max:59,step:V,value:eW.values.minutes,onSelect:eW.setMinutes,reversed:eM}),Z&&(0,n.jsx)(p,{min:0,max:59,step:$,value:eW.values.seconds,onSelect:eW.setSeconds,reversed:eM}),"12h"===eN&&(0,n.jsx)(d,{labels:U,value:eW.values.amPm,onSelect:eW.setAmPm})]})})]})})});$.displayName="@mantine/dates/TimePicker",$.classes=S,$.varsResolver=L,e.s(["TimePicker",0,$],779893)},593612,e=>{"use strict";var t=e.i(191788),n=e.i(171481);let r=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm68-84a12,12,0,0,1-12,12H128a12,12,0,0,1-12-12V72a12,12,0,0,1,24,0v44h44A12,12,0,0,1,196,128Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"}),t.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm56,112H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm62-90a6,6,0,0,1-6,6H128a6,6,0,0,1-6-6V72a6,6,0,0,1,12,0v50h50A6,6,0,0,1,190,128Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm60-92a4,4,0,0,1-4,4H128a4,4,0,0,1-4-4V72a4,4,0,0,1,8,0v52h52A4,4,0,0,1,188,128Z"}))]]),i=t.forwardRef((e,i)=>t.createElement(n.default,{ref:i,...e,weights:r}));i.displayName="ClockIcon",e.s(["ClockIcon",0,i],593612)},869921,e=>{"use strict";var t=e.i(648448);e.s(["getTimeRange",0,function({startTime:e,endTime:n,interval:r}){let i=[],o=(0,t.timeToSeconds)(e),s=(0,t.timeToSeconds)(n),a=(0,t.timeToSeconds)(r);for(let e=o;e<=s;e+=a)i.push((0,t.secondsToTime)(e).timeString);return i}])},969233,e=>{"use strict";var t=e.i(648863),n=e.i(391398),r=e.i(779893);let i={type:"code",component:function(){return(0,n.jsx)(r.TimePicker,{label:"Enter time"})},code:`
import { TimePicker } from '@mantine/dates';

function Demo() {
  return <TimePicker label="Enter time" />;
}
`,centered:!0,maxWidth:340},o={type:"code",component:function(){return(0,n.jsx)(r.TimePicker,{label:"Enter time",clearable:!0,defaultValue:"12:34:44"})},code:`
import { TimePicker } from '@mantine/dates';

function Demo() {
  return <TimePicker label="Enter time" clearable defaultValue="12:34:44" />;
}
`,centered:!0,maxWidth:340};var s=e.i(931882),a=e.i(671640);let l={type:"code",component:function(){return(0,n.jsxs)(a.Stack,{children:[(0,n.jsx)(r.TimePicker,{label:"clearSectionMode='both' (default)",defaultValue:"12:30",clearable:!0,rightSection:(0,n.jsx)(s.CaretDownIcon,{size:16}),clearSectionMode:"both"}),(0,n.jsx)(r.TimePicker,{label:"clearSectionMode='rightSection'",defaultValue:"12:30",clearable:!0,rightSection:(0,n.jsx)(s.CaretDownIcon,{size:16}),clearSectionMode:"rightSection"}),(0,n.jsx)(r.TimePicker,{label:"clearSectionMode='clear'",defaultValue:"12:30",clearable:!0,rightSection:(0,n.jsx)(s.CaretDownIcon,{size:16}),clearSectionMode:"clear"})]})},code:`
import { CaretDownIcon } from '@phosphor-icons/react';
import { Stack } from '@mantine/core';
import { TimePicker } from '@mantine/dates';

function Demo() {
  return (
    <Stack>
      <TimePicker
        label="clearSectionMode='both' (default)"
        defaultValue="12:30"
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="both"
      />

      <TimePicker
        label="clearSectionMode='rightSection'"
        defaultValue="12:30"
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="rightSection"
      />

      <TimePicker
        label="clearSectionMode='clear'"
        defaultValue="12:30"
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="clear"
      />
    </Stack>
  );
}
`,maxWidth:340,centered:!0},c={type:"code",component:function(){return(0,n.jsx)(r.TimePicker,{label:"Enter time",disabled:!0})},code:`
import { TimePicker } from '@mantine/dates';

function Demo() {
  return <TimePicker label="Enter time" disabled />;
}
`,centered:!0,maxWidth:340},d={type:"code",component:function(){return(0,n.jsx)(r.TimePicker,{label:"Enter time",defaultValue:"12:45:33",readOnly:!0})},code:`
import { TimePicker } from '@mantine/dates';

function Demo() {
  return <TimePicker label="Enter time" defaultValue="12:45:33" readOnly />;
}
`,centered:!0,maxWidth:340},m={type:"code",component:function(){return(0,n.jsx)(r.TimePicker,{label:"Enter time",withSeconds:!0})},code:`
import { TimePicker } from '@mantine/dates';

function Demo() {
  return <TimePicker label="Enter time" withSeconds />;
}
`,centered:!0,maxWidth:340},u={type:"code",component:function(){return(0,n.jsx)(r.TimePicker,{label:"Enter time",format:"12h"})},code:`
import { TimePicker } from '@mantine/dates';

function Demo() {
  return <TimePicker label="Enter time" format="12h" />;
}
`,centered:!0,maxWidth:340},p={type:"code",component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.TimePicker,{label:"Enter time (24h format)",min:"10:00",max:"18:30"}),(0,n.jsx)(r.TimePicker,{label:"Enter time (12h format)",min:"10:00",max:"18:30",format:"12h",mt:"md"})]})},code:`
import { TimePicker } from '@mantine/dates';

function Demo() {
  return (
    <>
      <TimePicker label="Enter time (24h format)" min="10:00" max="18:30" />
      <TimePicker label="Enter time (12h format)" min="10:00" max="18:30" format="12h" mt="md" />
    </>
  );
}
`,centered:!0,maxWidth:340},h={type:"code",component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.TimePicker,{label:"Enter time (24h format)",withSeconds:!0,withDropdown:!0}),(0,n.jsx)(r.TimePicker,{label:"Enter time (12h format)",withSeconds:!0,withDropdown:!0,format:"12h",mt:"md"})]})},code:`
import { TimePicker } from '@mantine/dates';

function Demo() {
  return (
    <>
      <TimePicker label="Enter time (24h format)" withSeconds withDropdown />
      <TimePicker label="Enter time (12h format)" withSeconds withDropdown format="12h" mt="md" />
    </>
  );
}
`,centered:!0,maxWidth:340},f={type:"code",component:function(){return(0,n.jsx)(r.TimePicker,{label:"Enter time",withSeconds:!0,withDropdown:!0,hoursStep:1,minutesStep:5,secondsStep:10})},code:`
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
`,centered:!0,maxWidth:340},x={type:"code",component:function(){return(0,n.jsx)(r.TimePicker,{label:"Enter time",format:"12h",amPmLabels:{am:"पूर्वाह्न",pm:"अपराह्न"}})},code:`
import { TimePicker } from '@mantine/dates';

function Demo() {
  return (
    <TimePicker label="Enter time" format="12h" amPmLabels={{ am: 'पूर्वाह्न', pm: 'अपराह्न' }} />
  );
}
`,centered:!0,maxWidth:340};var P=e.i(191788),j=e.i(593612),g=e.i(658109);let v={type:"code",component:function(){let[e,t]=(0,P.useState)(!1),[i,o]=(0,P.useState)("");return(0,n.jsx)(r.TimePicker,{withDropdown:!0,rightSection:(0,n.jsx)(g.ActionIcon,{onClick:()=>t(!0),variant:"default",children:(0,n.jsx)(j.ClockIcon,{size:18})}),value:i,onChange:e=>{o(e),""===i&&t(!1)},popoverProps:{opened:e,onChange:e=>!e&&t(!1)}})},code:`
import { useState } from 'react';
import { ClockIcon } from '@phosphor-icons/react';
import { ActionIcon } from '@mantine/core';
import { TimePicker } from '@mantine/dates';

function Demo() {
  const [dropdownOpened, setDropdownOpened] = useState(false);
  const [value, setValue] = useState('');

  return (
    <TimePicker
      withDropdown
      rightSection={
        <ActionIcon onClick={() => setDropdownOpened(true)} variant="default">
          <ClockIcon size={18} />
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
`,centered:!0,maxWidth:340};var w=e.i(301388),T=e.i(883364);let b=/^(1[0-2]|0?[1-9]):[0-5][0-9](?::[0-5][0-9])?\s?(AM|PM)$/,y=({time:e})=>{if(!b.test(e))return{hours:null,minutes:null,seconds:null,amPm:null};let[t,n,r]=e.split(":").map(e=>e.replace(/AM|PM/g,"")),i=e.toLowerCase().includes("pm");return{hours:"string"==typeof t?Number(t):null,minutes:"string"==typeof n?Number(n):null,seconds:"string"==typeof r?Number(r):0,amPm:i?"PM":"AM"}},k={type:"code",component:function(){return(0,n.jsxs)("div",{children:[(0,n.jsx)(r.TimePicker,{label:"Paste time here",format:"12h",withSeconds:!0,pasteSplit:y}),(0,n.jsxs)(T.Text,{mt:"md",children:["Try pasting time in 12h format in any input. For example, try pasting ",(0,n.jsx)(w.Code,{children:"12:34 PM"})," ","or ",(0,n.jsx)(w.Code,{children:"8:56:45 AM"})]})]})},code:`
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
`,centered:!0,maxWidth:340},S={type:"configurator",component:function(e){return(0,n.jsx)(r.TimePicker,{withDropdown:!0,...e})},code:`
import { TimePicker } from '@mantine/dates';


function Demo() {
  return (
    <TimePicker
      withDropdown
      {{props}}
    />
  );
}
`,centered:!0,maxWidth:340,controls:e.i(960831).inputControls},D={type:"code",component:function(){return(0,n.jsx)(r.TimePicker,{label:"Enter time",withDropdown:!0,presets:["12:30","15:45","18:00","20:15","22:30"]})},code:`
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
`,centered:!0,maxWidth:340},M={type:"code",component:function(){return(0,n.jsx)(r.TimePicker,{label:"Enter time",withDropdown:!0,maxDropdownContentHeight:300,presets:[{label:"Morning",values:["06:00","06:30","08:00","08:30","10:00","10:45"]},{label:"Afternoon",values:["12:00","12:30","14:00","14:45","16:00","17:30"]},{label:"Evening",values:["18:00","18:30","20:00","22:00"]}]})},code:`
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
`,centered:!0,maxWidth:340};var E=e.i(869921);let C={type:"code",component:function(){return(0,n.jsx)(r.TimePicker,{label:"Enter time",withDropdown:!0,presets:(0,E.getTimeRange)({startTime:"06:00:00",endTime:"18:00:00",interval:"01:30:00"})})},code:`
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
`,centered:!0,maxWidth:340},A={type:"code",component:function(){return(0,n.jsx)(r.TimePicker,{label:"Enter time",withDropdown:!0,closeDropdownOnPresetSelect:!0,presets:["12:30","15:45","18:00","20:15","22:30"]})},code:`
import { TimePicker } from '@mantine/dates';

function Demo() {
  return (
    <TimePicker
      label="Enter time"
      withDropdown
      closeDropdownOnPresetSelect
      presets={['12:30', '15:45', '18:00', '20:15', '22:30']}
    />
  );
}
`,centered:!0,maxWidth:340},V={type:"code",component:function(){return(0,n.jsx)(r.TimePicker,{label:"Enter time",withDropdown:!0,popoverProps:{position:"top-start",middlewares:{flip:!1,shift:!1}}})},code:`
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
`,centered:!0,maxWidth:340},I={type:"code",component:function(){return(0,n.jsx)(r.TimePicker,{label:"Enter time",withDropdown:!0,withSeconds:!0,format:"12h",popoverProps:{width:"target"}})},code:`
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
`,centered:!0,maxWidth:340},R={type:"code",component:function(){return(0,n.jsx)(r.TimePicker,{label:"Enter time",withSeconds:!0,hoursPlaceholder:"09",minutesPlaceholder:"50",secondsPlaceholder:"11"})},code:`
import { TimePicker } from '@mantine/dates';

function Demo() {
  return (
    <TimePicker label="Enter time" withSeconds hoursPlaceholder="09" minutesPlaceholder="50" secondsPlaceholder="11" />
  );
}
`,centered:!0,maxWidth:340},N={type:"code",component:function(){return(0,n.jsx)(r.TimePicker,{label:"Enter duration",type:"duration",withSeconds:!0})},code:`
import { TimePicker } from '@mantine/dates';

function Demo() {
  return <TimePicker label="Enter duration" type="duration" withSeconds />;
}
`,centered:!0,maxWidth:340},F={type:"code",component:function(){return(0,n.jsx)(r.TimePicker,{label:"Enter duration",type:"duration",withSeconds:!0,minHoursDigits:3})},code:`
import { TimePicker } from '@mantine/dates';

function Demo() {
  return (
    <TimePicker
      label="Enter duration"
      type="duration"
      withSeconds
      minHoursDigits={3}
    />
  );
}
`,centered:!0,maxWidth:340};var H=(0,t.__exportAll)({amPmLabels:()=>x,clearSectionMode:()=>l,clearable:()=>o,closeDropdownOnPresetSelect:()=>A,configurator:()=>S,controlledDropdown:()=>v,disabled:()=>c,dropdownPosition:()=>V,dropdownWidth:()=>I,duration:()=>N,format12h:()=>u,minHoursDigits:()=>F,minMax:()=>p,pasteSplit:()=>k,presets:()=>D,presetsGroups:()=>M,presetsRange:()=>C,readOnly:()=>d,steps:()=>f,usage:()=>i,withDropdown:()=>h,withPlaceholders:()=>R,withSeconds:()=>m});e.s(["TimePickerDemos",0,H],969233)},518614,e=>{"use strict";var t=e.i(391398),n=e.i(38856),r=e.i(969233);e.i(603441);var i=e.i(62558);e.i(457450);var o=e.i(418026);let s=(0,i.Layout)(o.MDX_DATA.TimePicker);function a(e){let i={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.useMDXComponents)(),...e.components},{ClearSectionMode:o,Demo:s,InputFeatures:a,KeyboardEventsTable:c}=i;return o||l("ClearSectionMode",!0),s||l("Demo",!0),a||l("InputFeatures",!0),c||l("KeyboardEventsTable",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.code,{children:"TimePicker"})," component is an alternative to ",(0,t.jsx)(i.a,{href:"/dates/time-input",children:"TimeInput"})," that offers more\nfeatures. It supports 24-hour and 12-hour formats, a dropdown with hours, minutes and seconds, and\nmore."]}),"\n",(0,t.jsx)(s,{data:r.TimePickerDemos.usage}),"\n",(0,t.jsx)(i.h2,{id:"controlled",children:"Controlled"}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.code,{children:"TimePicker"})," component value is a string in ",(0,t.jsx)(i.code,{children:"hh:mm:ss"})," or ",(0,t.jsx)(i.code,{children:"hh:mm"})," 24-hour format (for example ",(0,t.jsx)(i.code,{children:"18:34:55"}),").\nAn empty string is used to represent no value. The ",(0,t.jsx)(i.code,{children:"onChange"})," function is called only when the entered value is valid.\nThe input value is considered valid in the following cases:"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["All inputs are empty. In this case, ",(0,t.jsx)(i.code,{children:"onChange"})," is called with an empty string."]}),"\n",(0,t.jsxs)(i.li,{children:["All inputs are filled. For example, if the ",(0,t.jsx)(i.code,{children:"withSeconds"})," prop is set and the user entered ",(0,t.jsx)(i.code,{children:"12:34:56"}),", ",(0,t.jsx)(i.code,{children:"onChange"})," will be called with ",(0,t.jsx)(i.code,{children:"12:34:56"}),". But if the user entered ",(0,t.jsx)(i.code,{children:"12:34"}),", ",(0,t.jsx)(i.code,{children:"onChange"})," will not be called because the seconds value is missing."]}),"\n"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { TimePicker } from '@mantine/dates';\n\nfunction Demo() {\n  const [value, setValue] = useState('');\n  return <TimePicker value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,t.jsx)(i.h2,{id:"with-seconds",children:"With seconds"}),"\n",(0,t.jsxs)(i.p,{children:["Set the ",(0,t.jsx)(i.code,{children:"withSeconds"})," prop to enable seconds input. Note that if this prop is used,\n",(0,t.jsx)(i.code,{children:"onChange"})," is not called until all inputs are filled – it is not possible\nto enter only hours and minutes."]}),"\n",(0,t.jsx)(s,{data:r.TimePickerDemos.withSeconds}),"\n",(0,t.jsx)(i.h2,{id:"duration-type",children:"Duration type"}),"\n",(0,t.jsxs)(i.p,{children:["Set ",(0,t.jsx)(i.code,{children:'type="duration"'})," to allow entering durations that exceed 24 hours.\nIn this mode, the hours field has no upper limit and the input width adjusts\ndynamically based on the entered value. The ",(0,t.jsx)(i.code,{children:"format"})," prop is ignored (always 24h)\nand the dropdown is disabled."]}),"\n",(0,t.jsx)(s,{data:r.TimePickerDemos.duration}),"\n",(0,t.jsx)(i.h2,{id:"min-hours-digits",children:"Min hours digits"}),"\n",(0,t.jsxs)(i.p,{children:["Use the ",(0,t.jsx)(i.code,{children:"minHoursDigits"})," prop to set the minimum number of digits displayed in the hours input.\nThis prop is only applicable when ",(0,t.jsx)(i.code,{children:'type="duration"'})," is set. By default, the minimum is ",(0,t.jsx)(i.code,{children:"2"}),"."]}),"\n",(0,t.jsx)(s,{data:r.TimePickerDemos.minHoursDigits}),"\n",(0,t.jsx)(i.h2,{id:"12-hour-format",children:"12-hour format"}),"\n",(0,t.jsxs)(i.p,{children:["Set ",(0,t.jsx)(i.code,{children:'format="12h"'})," to use 12-hour format. Note that ",(0,t.jsx)(i.code,{children:"onChange"})," is called only when all inputs are filled,\nincluding the am/pm input."]}),"\n",(0,t.jsx)(s,{data:r.TimePickerDemos.format12h}),"\n",(0,t.jsx)(i.h2,{id:"change-ampm-labels",children:"Change am/pm labels"}),"\n",(0,t.jsxs)(i.p,{children:["To change am/pm labels, use the ",(0,t.jsx)(i.code,{children:"amPmLabels"})," prop. Example of changing labels to Hindi:"]}),"\n",(0,t.jsx)(s,{data:r.TimePickerDemos.amPmLabels}),"\n",(0,t.jsx)(i.h2,{id:"min-and-max-values",children:"Min and max values"}),"\n",(0,t.jsxs)(i.p,{children:["Set the ",(0,t.jsx)(i.code,{children:"min"})," and ",(0,t.jsx)(i.code,{children:"max"})," props to limit the available time range:"]}),"\n",(0,t.jsx)(s,{data:r.TimePickerDemos.minMax}),"\n",(0,t.jsx)(i.h2,{id:"with-dropdown",children:"With dropdown"}),"\n",(0,t.jsxs)(i.p,{children:["Set the ",(0,t.jsx)(i.code,{children:"withDropdown"})," prop to display a dropdown with hours, minutes, seconds and am/pm selects.\nBy default, the dropdown is visible when one of the inputs is focused."]}),"\n",(0,t.jsx)(s,{data:r.TimePickerDemos.withDropdown}),"\n",(0,t.jsx)(i.h2,{id:"hoursminutesseconds-step",children:"Hours/minutes/seconds step"}),"\n",(0,t.jsxs)(i.p,{children:["Use ",(0,t.jsx)(i.code,{children:"hoursStep"}),", ",(0,t.jsx)(i.code,{children:"minutesStep"})," and ",(0,t.jsx)(i.code,{children:"secondsStep"})," props to control step for each input.\nThese props are used to control value by which the input is incremented or decremented when\nup/down arrow keys are pressed and to generate corresponding values range in the dropdown."]}),"\n",(0,t.jsx)(s,{data:r.TimePickerDemos.steps}),"\n",(0,t.jsx)(i.h2,{id:"control-dropdown-opened-state",children:"Control dropdown opened state"}),"\n",(0,t.jsxs)(i.p,{children:["Use ",(0,t.jsx)(i.code,{children:"popoverProps"})," to pass props down to the underlying ",(0,t.jsx)(i.a,{href:"/core/popover",children:"Popover"})," component:"]}),"\n",(0,t.jsx)(s,{data:r.TimePickerDemos.controlledDropdown}),"\n",(0,t.jsx)(i.h2,{id:"time-presets",children:"Time presets"}),"\n",(0,t.jsxs)(i.p,{children:["You can define time presets with ",(0,t.jsx)(i.code,{children:"presets"})," prop. Presets are displayed in the dropdown and can be selected by clicking on them.\nTime values for presets should be in ",(0,t.jsx)(i.code,{children:"hh:mm:ss"})," or ",(0,t.jsx)(i.code,{children:"hh:mm"})," 24-hour time format. Presets\ndisplay value is generated based on ",(0,t.jsx)(i.code,{children:"format"}),", ",(0,t.jsx)(i.code,{children:"amPmLabels"})," and ",(0,t.jsx)(i.code,{children:"withSeconds"})," props."]}),"\n",(0,t.jsx)(s,{data:r.TimePickerDemos.presets}),"\n",(0,t.jsx)(i.h2,{id:"time-presets-groups",children:"Time presets groups"}),"\n",(0,t.jsxs)(i.p,{children:["To group presets use an array of objects with ",(0,t.jsx)(i.code,{children:"label"})," and ",(0,t.jsx)(i.code,{children:"values"})," keys:"]}),"\n",(0,t.jsx)(s,{data:r.TimePickerDemos.presetsGroups}),"\n",(0,t.jsx)(i.h2,{id:"time-presets-range",children:"Time presets range"}),"\n",(0,t.jsxs)(i.p,{children:["If you need to generate a range of time values, use ",(0,t.jsx)(i.code,{children:"getTimeRange"})," function exported from\n",(0,t.jsx)(i.code,{children:"@mantine/dates"})," package. The function accepts start, end time and interval in ",(0,t.jsx)(i.code,{children:"hh:mm:ss"})," format."]}),"\n",(0,t.jsx)(s,{data:r.TimePickerDemos.presetsRange}),"\n",(0,t.jsx)(i.h2,{id:"close-dropdown-on-preset-select",children:"Close dropdown on preset select"}),"\n",(0,t.jsxs)(i.p,{children:["Set ",(0,t.jsx)(i.code,{children:"closeDropdownOnPresetSelect"})," prop to close the dropdown once a value is selected from the presets list:"]}),"\n",(0,t.jsx)(s,{data:r.TimePickerDemos.closeDropdownOnPresetSelect}),"\n",(0,t.jsx)(i.h2,{id:"dropdown-position",children:"Dropdown position"}),"\n",(0,t.jsxs)(i.p,{children:["By default, the dropdown is displayed below the input if there is enough space; otherwise it is displayed above the input.\nYou can change this behavior by setting ",(0,t.jsx)(i.code,{children:"position"})," and ",(0,t.jsx)(i.code,{children:"middlewares"})," props, which are passed down to the\nunderlying ",(0,t.jsx)(i.a,{href:"/core/popover",children:"Popover"})," component."]}),"\n",(0,t.jsx)(i.p,{children:"Example of dropdown that is always displayed above the input:"}),"\n",(0,t.jsx)(s,{data:r.TimePickerDemos.dropdownPosition}),"\n",(0,t.jsx)(i.h2,{id:"dropdown-width",children:"Dropdown width"}),"\n",(0,t.jsxs)(i.p,{children:["To change dropdown width, set ",(0,t.jsx)(i.code,{children:"width"})," prop in ",(0,t.jsx)(i.code,{children:"comboboxProps"}),". By default,\ndropdown width is adjusted to fit all content. Example of dropdown width set\nto the input width:"]}),"\n",(0,t.jsx)(s,{data:r.TimePickerDemos.dropdownWidth}),"\n",(0,t.jsx)(i.h2,{id:"paste-events",children:"Paste events"}),"\n",(0,t.jsxs)(i.p,{children:["By default, ",(0,t.jsx)(i.code,{children:"TimePicker"})," handles only time in 24-hour format (for example ",(0,t.jsx)(i.code,{children:"17:33:43"})," or ",(0,t.jsx)(i.code,{children:"19:22"}),") for paste events.\nWith ",(0,t.jsx)(i.code,{children:"pasteSplit"})," prop you can create a custom paste time parser:"]}),"\n",(0,t.jsx)(s,{data:r.TimePickerDemos.pasteSplit}),"\n",(0,t.jsx)(i.h2,{id:"clearable",children:"Clearable"}),"\n",(0,t.jsxs)(i.p,{children:["Set ",(0,t.jsx)(i.code,{children:"clearable"})," prop to display a clear button in the right section of the input.\nThe clear button is visible when at least one of the fields has value."]}),"\n",(0,t.jsx)(s,{data:r.TimePickerDemos.clearable}),"\n",(0,t.jsx)(o,{}),"\n",(0,t.jsx)(s,{data:r.TimePickerDemos.clearSectionMode}),"\n",(0,t.jsx)(i.h2,{id:"disabled",children:"Disabled"}),"\n",(0,t.jsx)(s,{data:r.TimePickerDemos.disabled}),"\n",(0,t.jsx)(i.h2,{id:"read-only",children:"Read only"}),"\n",(0,t.jsx)(s,{data:r.TimePickerDemos.readOnly}),"\n",(0,t.jsx)(i.h2,{id:"input-props",children:"Input props"}),"\n",(0,t.jsx)(a,{component:"TimePicker",element:"div"}),"\n",(0,t.jsx)(s,{data:r.TimePickerDemos.configurator}),"\n",(0,t.jsx)(i.h2,{id:"get-refs-of-inner-inputs",children:"Get refs of inner inputs"}),"\n",(0,t.jsxs)(i.p,{children:["Use ",(0,t.jsx)(i.code,{children:"hoursRef"}),", ",(0,t.jsx)(i.code,{children:"minutesRef"}),", ",(0,t.jsx)(i.code,{children:"secondsRef"})," and ",(0,t.jsx)(i.code,{children:"amPmRef"})," props to get refs of inner inputs:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-tsx",children:"import { useRef } from 'react';\nimport { TimePicker } from '@mantine/dates';\n\nfunction Demo() {\n  const hoursRef = useRef<HTMLInputElement>(null);\n  const minutesRef = useRef<HTMLInputElement>(null);\n  const secondsRef = useRef<HTMLInputElement>(null);\n  const amPmRef = useRef<HTMLSelectElement>(null);\n\n  return (\n    <TimePicker\n      hoursRef={hoursRef}\n      minutesRef={minutesRef}\n      secondsRef={secondsRef}\n      amPmRef={amPmRef}\n    />\n  );\n}\n"})}),"\n",(0,t.jsx)(i.h2,{id:"onfocus-and-onblur-events",children:"onFocus and onBlur events"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"onFocus"})," and ",(0,t.jsx)(i.code,{children:"onBlur"})," events are called when the first input is focused and the last input is blurred:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-tsx",children:"import { TimePicker } from '@mantine/dates';\n\nfunction Demo() {\n  return (\n    <TimePicker\n      onFocus={() => console.log('Focused')}\n      onBlur={() => console.log('Blurred')}\n    />\n  );\n}\n"})}),"\n",(0,t.jsx)(i.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,t.jsx)(i.p,{children:"Set aria labels for hours, minutes, seconds and am/pm inputs and clear button with corresponding props:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-tsx",children:'import { TimePicker } from \'@mantine/dates\';\n\nfunction Demo() {\n  return (\n    <TimePicker\n      hoursInputLabel="Hours"\n      minutesInputLabel="Minutes"\n      secondsInputLabel="Seconds"\n      amPmInputLabel="AM/PM"\n      clearButtonProps={{ \'aria-label\': \'Clear time\' }}\n    />\n  );\n}\n'})}),"\n",(0,t.jsx)(i.p,{children:"Keyboard interactions:"}),"\n",(0,t.jsx)(c,{data:[{key:"ArrowDown",description:"Decrements current value by step"},{key:"ArrowUp",description:"Increments current value by step"},{key:"Home",description:"Sets current value to min possible value"},{key:"End",description:"Sets current value to max possible value"},{key:"Backspace",description:"Clears current value"},{key:"ArrowRight",description:"Moves focus to the next input"},{key:"ArrowLeft",description:"Moves focus to the previous input"}]})]})}function l(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}e.s(["default",0,function(e={}){return(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})})}])},173033,(e,t,n)=>{let r="/dates/time-picker";(window.__NEXT_P=window.__NEXT_P||[]).push([r,()=>e.r(518614)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([r])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);