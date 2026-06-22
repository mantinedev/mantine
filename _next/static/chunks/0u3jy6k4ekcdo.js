(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,a)=>{let l={};for(var o in e)t(l,o,{get:e[o],enumerable:!0});return a||t(l,Symbol.toStringTag,{value:"Module"}),l}])},996969,e=>{"use strict";var t=e.i(44091),a=e.i(62904),l=e.i(391466),o=e.i(425254),r=e.i(275519),n=e.i(586488),i=e.i(205764),c=e.i(464224),s=e.i(734858),d=e.i(711976),u=e.i(212491),p=e.i(798270),h=e.i(122057),m=e.i(217633),v=e.i(463112);function g(e){return"string"==typeof e?e.trim().toLowerCase():e}var b=e.i(191788),x=e.i(107315),f=e.i(579560),S=e.i(391398);let j={xs:41,sm:50,md:60,lg:72,xl:89},w={maxValues:1/0,withCheckIcon:!0,checkIconPosition:"left",hiddenInputValuesDivider:",",clearSearchOnChange:!0,openOnFocus:!0,size:"sm"},M=(0,r.genericFactory)(e=>{let r=(0,t.useProps)(["Input","InputWrapper","MultiSelect"],w,e),{classNames:n,className:M,style:y,styles:A,unstyled:V,vars:P,size:D,value:R,defaultValue:k,onChange:C,onKeyDown:E,variant:O,data:F,dropdownOpened:Z,defaultDropdownOpened:I,onDropdownOpen:H,onDropdownClose:T,selectFirstOptionOnChange:W,selectFirstOptionOnDropdownOpen:z,onOptionSubmit:Y,comboboxProps:B,filter:_,limit:L,withScrollArea:N,maxDropdownHeight:G,floatingHeight:$,searchValue:U,defaultSearchValue:J,onSearchChange:q,readOnly:X,disabled:K,onFocus:Q,onBlur:ee,radius:et,rightSection:ea,rightSectionWidth:el,rightSectionPointerEvents:eo,rightSectionProps:er,leftSection:en,leftSectionWidth:ei,leftSectionPointerEvents:ec,leftSectionProps:es,inputContainer:ed,inputWrapperOrder:eu,withAsterisk:ep,labelProps:eh,descriptionProps:em,errorProps:ev,successProps:eg,wrapperProps:eb,description:ex,label:ef,error:eS,success:ej,maxValues:ew,searchable:eM,nothingFoundMessage:ey,withCheckIcon:eA,withAlignedLabels:eV,checkIconPosition:eP,hidePickedOptions:eD,withErrorStyles:eR,withSuccessStyles:ek,name:eC,form:eE,id:eO,clearable:eF,clearSectionMode:eZ,clearButtonProps:eI,hiddenInputProps:eH,placeholder:eT,hiddenInputValuesDivider:eW,required:ez,mod:eY,renderOption:eB,renderPill:e_,onRemove:eL,onClear:eN,onMaxValues:eG,scrollAreaProps:e$,chevronColor:eU,attributes:eJ,clearSearchOnChange:eq,openOnFocus:eX,loading:eK,loadingPosition:eQ,withPillsReorder:e0,...e1}=r,e2=(0,x.useId)(eO),e4=(0,i.getParsedComboboxData)(F),e6=(0,c.getOptionsLockup)(e4),e8=(0,b.useRef)({}),e9=(0,s.useCombobox)({opened:Z,defaultOpened:I,onDropdownOpen:()=>{H?.(),z&&e9.selectFirstOption()},onDropdownClose:()=>{T?.(),e9.resetSelectedOption()}}),{styleProps:e3,rest:{type:e5,autoComplete:e7,...te}}=(0,o.extractStyleProps)(e1),[tt,ta]=(0,f.useUncontrolled)({value:R,defaultValue:k,finalValue:[],onChange:C}),{getPillProps:tl,getListProps:to,handleInputKeyDown:tr}=(0,p.usePillsReorder)({value:tt,onChange:ta,enabled:e0&&!K&&!X}),[tn,ti]=(0,f.useUncontrolled)({value:U,defaultValue:J,finalValue:"",onChange:q}),tc=e=>{ti(e),e9.resetSelectedOption()},ts=(0,l.useStyles)({name:"MultiSelect",classes:{},props:r,classNames:n,styles:A,unstyled:V,attributes:eJ}),{resolvedClassNames:td,resolvedStyles:tu}=(0,a.useResolvedStylesApi)({props:r,styles:A,classNames:n}),tp=tt.map((e,t)=>{let a=e6[`${e}`]||e8.current[`${e}`],l=tl(t);return e_?(0,S.jsx)(b.Fragment,{children:e_({option:a,value:e,onRemove:()=>{ta(tt.filter(t=>e!==t)),eL?.(e)},disabled:K,reorderProps:l})},`${e}-${t}`):(0,S.jsx)(h.Pill,{withRemoveButton:!X&&!e6[`${e}`]?.disabled,onRemove:()=>{ta(tt.filter(t=>e!==t)),eL?.(e)},unstyled:V,disabled:K,...ts("pill"),...l,children:a?.label||e},`${e}-${t}`)});(0,b.useEffect)(()=>{W&&e9.selectFirstOption()},[W,tn]),(0,b.useEffect)(()=>{tt.forEach(e=>{`${e}`in e6&&(e8.current[`${e}`]=e6[`${e}`])})},[e6,tt]);let th=(0,S.jsx)(d.Combobox.ClearButton,{...eI,onClear:()=>{eN?.(),ta([]),tc("")}}),tm=function({data:e,value:t}){let a=t.map(g);return e.reduce((e,t)=>((0,v.isOptionsGroup)(t)?e.push({group:t.group,items:t.items.filter(e=>-1===a.indexOf(g(e.value)))}):-1===a.indexOf(g(t.value))&&e.push(t),e),[])}({data:e4,value:tt}),tv=eF&&tt.length>0&&!K&&!X,tg=tv?{paddingInlineEnd:j[D]??j.sm}:void 0;return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)(d.Combobox,{store:e9,classNames:td,styles:tu,unstyled:V,size:D,readOnly:X,__staticSelector:"MultiSelect",attributes:eJ,floatingHeight:$,onOptionSubmit:e=>{Y?.(e),eq&&tc(""),e9.updateSelectedOptionIndex("selected"),tt.includes(e6[`${e}`].value)?(ta(tt.filter(t=>t!==e6[`${e}`].value)),eL?.(e6[`${e}`].value)):tt.length<ew?ta([...tt,e6[`${e}`].value]):eG?.()},...B,children:[(0,S.jsx)(d.Combobox.DropdownTarget,{children:(0,S.jsx)(m.PillsInput,{...e3,__staticSelector:"MultiSelect",classNames:td,styles:tu,unstyled:V,size:D,className:M,style:y,variant:O,disabled:K,radius:et,__defaultRightSection:(0,S.jsx)(d.Combobox.Chevron,{size:D,error:eS,unstyled:V,color:eU}),__clearSection:th,__clearable:tv,__clearSectionMode:eZ,rightSection:ea,rightSectionPointerEvents:eo||"none",rightSectionWidth:el,rightSectionProps:er,leftSection:en,leftSectionWidth:ei,leftSectionPointerEvents:ec,leftSectionProps:es,loading:eK,loadingPosition:eQ,inputContainer:ed,inputWrapperOrder:eu,withAsterisk:ep,labelProps:eh,descriptionProps:em,errorProps:ev,successProps:eg,wrapperProps:eb,description:ex,label:ef,error:eS,success:ej,withErrorStyles:eR,withSuccessStyles:ek,__stylesApiProps:{...r,rightSectionPointerEvents:eo||"none",multiline:!0},pointer:!eM,onClick:()=>eM?e9.openDropdown():e9.toggleDropdown(),"data-expanded":e9.dropdownOpened||void 0,id:e2,required:ez,mod:eY,attributes:eJ,children:(0,S.jsxs)(h.Pill.Group,{attributes:eJ,disabled:K,unstyled:V,...ts("pillsList",{style:tg}),...to(),children:[tp,(0,S.jsx)(d.Combobox.EventsTarget,{autoComplete:e7,withExpandedAttribute:!0,children:(0,S.jsx)(m.PillsInput.Field,{...te,id:e2,placeholder:eT,type:eM||eT?"visible":"hidden",...ts("inputField"),unstyled:V,onFocus:e=>{Q?.(e),eX&&eM&&e9.openDropdown()},onBlur:e=>{ee?.(e),e9.closeDropdown(),tc("")},onKeyDown:e=>{E?.(e),e.defaultPrevented||(" "!==e.key||eM||(e.preventDefault(),e9.toggleDropdown()),"Backspace"===e.key&&0===tn.length&&tt.length>0&&(eL?.(tt[tt.length-1]),ta(tt.slice(0,tt.length-1))),tr(e))},value:tn,onChange:e=>{tc(e.currentTarget.value),eM&&e9.openDropdown(),W&&e9.selectFirstOption()},disabled:K,readOnly:X||!eM,pointer:!eM})})]})})}),(0,S.jsx)(u.OptionsDropdown,{data:eD?tm:e4,hidden:X||K,filter:_,search:tn,limit:L,hiddenWhenEmpty:!ey,withScrollArea:N,maxDropdownHeight:G,filterOptions:eM,value:tt,checkIconPosition:eP,withCheckIcon:eA,withAlignedLabels:eV,nothingFoundMessage:ey,unstyled:V,labelId:ef?`${e2}-label`:void 0,"aria-label":ef?void 0:e1["aria-label"],renderOption:eB,scrollAreaProps:e$})]}),(0,S.jsx)(d.Combobox.HiddenInput,{name:eC,valuesDivider:eW,value:tt,form:eE,disabled:K,...eH})]})});M.classes={...n.InputBase.classes,...d.Combobox.classes},M.displayName="@mantine/core/MultiSelect",e.s(["MultiSelect",0,M],996969)},141806,e=>{"use strict";var t=e.i(433512),a=e.i(481178),l=e.i(44091),o=e.i(391466),r=e.i(956449),n=e.i(232471),i={group:"m_11def92b",root:"m_f85678b6",image:"m_11f8ac07",placeholder:"m_104cd71f"},c=e.i(275519),s=e.i(191788),d=e.i(391398);let u=(0,s.createContext)({withinGroup:!1}),p=(0,a.createVarsResolver)((e,{spacing:a})=>({group:{"--ag-spacing":(0,t.getSpacing)(a)}})),h=(0,c.factory)(e=>{let t=(0,l.useProps)("AvatarGroup",null,e),{classNames:a,className:r,style:c,styles:s,unstyled:h,vars:m,spacing:v,attributes:g,...b}=t;return(0,d.jsx)(u,{value:{withinGroup:!0},children:(0,d.jsx)(n.Box,{...(0,o.useStyles)({name:"AvatarGroup",classes:i,props:t,className:r,style:c,classNames:a,styles:s,unstyled:h,attributes:g,vars:m,varsResolver:p,rootSelector:"group"})("group"),...b})})});function m(e){return(0,d.jsx)("svg",{...e,"data-avatar-placeholder-icon":!0,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,d.jsx)("path",{d:"M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}h.classes=i,h.varsResolver=p,h.displayName="@mantine/core/AvatarGroup";let v=["blue","cyan","grape","green","indigo","lime","orange","pink","red","teal","violet"],g=(0,a.createVarsResolver)((e,{size:a,radius:l,variant:o,gradient:r,color:n,autoContrast:i,name:c,allowedInitialsColors:s})=>{let d="initials"===n&&"string"==typeof c?function(e,t=v){return t[Math.abs(function(e){let t=0;for(let a=0;a<e.length;a+=1)t=(t<<5)-t+e.charCodeAt(a)|0;return t}(e))%t.length]}(c,s):n,u=e.variantColorResolver({color:d||"gray",theme:e,gradient:r,variant:o||"light",autoContrast:i});return{root:{"--avatar-size":(0,t.getSize)(a,"avatar-size"),"--avatar-radius":void 0===l?void 0:(0,t.getRadius)(l),"--avatar-bg":d||o?u.background:void 0,"--avatar-color":d||o?u.color:void 0,"--avatar-bd":d||o?u.border:void 0}}}),b=(0,r.polymorphicFactory)(e=>{let t=(0,l.useProps)("Avatar",null,e),{classNames:a,className:r,style:c,styles:p,unstyled:h,vars:v,src:b,alt:x,radius:f,color:S,gradient:j,imageProps:w,children:M,autoContrast:y,mod:A,name:V,allowedInitialsColors:P,attributes:D,...R}=t,k=(0,s.use)(u),[C,E]=(0,s.useState)(!b),O=(0,o.useStyles)({name:"Avatar",props:t,classes:i,className:r,style:c,classNames:a,styles:p,unstyled:h,attributes:D,vars:v,varsResolver:g});return(0,s.useEffect)(()=>E(!b),[b]),(0,d.jsx)(n.Box,{...O("root"),mod:[{"within-group":k.withinGroup},A],...R,children:C||!b?(0,d.jsx)("span",{...O("placeholder"),title:x,children:M||"string"==typeof V&&function(e,t=2){let a=e.split(" ");return 1===a.length?e.slice(0,t).toUpperCase():a.map(e=>e[0]).slice(0,t).join("").toUpperCase()}(V)||(0,d.jsx)(m,{})}):(0,d.jsx)("img",{...w,...O("image"),src:b,alt:x,onError:e=>{E(!0),w?.onError?.(e)}})})});b.classes=i,b.varsResolver=g,b.displayName="@mantine/core/Avatar",b.Group=h,e.s(["Avatar",0,b],141806)},541772,e=>{"use strict";var t=e.i(191788);e.s(["useDisclosure",0,function(e=!1,a={}){let[l,o]=(0,t.useState)(e),r=(0,t.useCallback)(()=>{o(e=>e||(a.onOpen?.(),!0))},[a.onOpen]),n=(0,t.useCallback)(()=>{o(e=>e?(a.onClose?.(),!1):e)},[a.onClose]);return[l,{open:r,close:n,toggle:(0,t.useCallback)(()=>{l?n():r()},[n,r,l]),set:o}]}])},931882,e=>{"use strict";var t=e.i(191788),a=e.i(171481);let l=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208,96l-80,80L48,96Z",opacity:"0.2"}),t.createElement("path",{d:"M215.39,92.94A8,8,0,0,0,208,88H48a8,8,0,0,0-5.66,13.66l80,80a8,8,0,0,0,11.32,0l80-80A8,8,0,0,0,215.39,92.94ZM128,164.69,67.31,104H188.69Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M212.24,100.24l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,167.51l75.76-75.75a6,6,0,0,1,8.48,8.48Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M210.83,98.83l-80,80a4,4,0,0,1-5.66,0l-80-80a4,4,0,0,1,5.66-5.66L128,170.34l77.17-77.17a4,4,0,1,1,5.66,5.66Z"}))]]),o=t.forwardRef((e,o)=>t.createElement(a.default,{ref:o,...e,weights:l}));o.displayName="CaretDownIcon",e.s(["CaretDownIcon",0,o],931882)},123895,e=>{"use strict";var t=e.i(191788),a=e.i(171481);let l=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,20a108,108,0,0,0,0,216c22.27,0,45.69-6.73,62.64-18a12,12,0,1,0-13.29-20c-13,8.63-31.89,14-49.35,14a84,84,0,1,1,84-84c0,9.29-1.67,17.08-4.69,21.95-2.64,4.24-6,6.05-11.31,6.05s-8.67-1.81-11.31-6.05c-3-4.87-4.69-12.66-4.69-21.95V88a12,12,0,0,0-23.49-3.46,52,52,0,1,0,8.86,79.57C172.3,174.3,182.81,180,196,180c24.67,0,40-19.92,40-52A108.12,108.12,0,0,0,128,20Zm0,136a28,28,0,1,1,28-28A28,28,0,0,1,128,156Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"}),t.createElement("path",{d:"M128,24a104,104,0,0,0,0,208c21.51,0,44.1-6.48,60.43-17.33a8,8,0,0,0-8.86-13.33C166,210.38,146.21,216,128,216a88,88,0,1,1,88-88c0,26.45-10.88,32-20,32s-20-5.55-20-32V88a8,8,0,0,0-16,0v4.26a48,48,0,1,0,5.93,65.1c6,12,16.35,18.64,30.07,18.64,22.54,0,36-17.94,36-48A104.11,104.11,0,0,0,128,24Zm0,136a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M232,128c0,.51,0,1,0,1.52-.34,14.26-5.63,30.48-28,30.48-23.14,0-28-17.4-28-32V88a8,8,0,0,0-8.53-8A8.17,8.17,0,0,0,160,88.27v4a48,48,0,1,0,6.73,64.05,40.19,40.19,0,0,0,3.38,5C175.48,168,185.71,176,204,176a54.81,54.81,0,0,0,9.22-.75,4,4,0,0,1,4.09,6A104.05,104.05,0,0,1,125.91,232C71.13,230.9,26.2,186.86,24.08,132.11A104,104,0,1,1,232,128ZM96,128a32,32,0,1,0,32-32A32,32,0,0,0,96,128Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,26a102,102,0,0,0,0,204c21.13,0,43.31-6.35,59.32-17a6,6,0,0,0-6.65-10c-13.9,9.25-34.09,15-52.67,15a90,90,0,1,1,90-90c0,29.58-13.78,34-22,34s-22-4.42-22-34V88a6,6,0,0,0-12,0v9a46,46,0,1,0,4.34,56.32C171.76,166.6,182,174,196,174c21.29,0,34-17.2,34-46A102.12,102.12,0,0,0,128,26Zm0,136a34,34,0,1,1,34-34A34,34,0,0,1,128,162Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,24a104,104,0,0,0,0,208c21.51,0,44.1-6.48,60.43-17.33a8,8,0,0,0-8.86-13.33C166,210.38,146.21,216,128,216a88,88,0,1,1,88-88c0,26.45-10.88,32-20,32s-20-5.55-20-32V88a8,8,0,0,0-16,0v4.26a48,48,0,1,0,5.93,65.1c6,12,16.35,18.64,30.07,18.64,22.54,0,36-17.94,36-48A104.11,104.11,0,0,0,128,24Zm0,136a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,28a100,100,0,0,0,0,200c20.76,0,42.52-6.23,58.21-16.66a4,4,0,1,0-4.43-6.67C167.35,214.27,147.24,220,128,220a92,92,0,1,1,92-92c0,31.32-15,36-24,36s-24-4.68-24-36V88a4,4,0,0,0-8,0v14.75a44,44,0,1,0,2.82,45.94C171.46,163.58,181.66,172,196,172c20,0,32-16.45,32-44A100.11,100.11,0,0,0,128,28Zm0,136a36,36,0,1,1,36-36A36,36,0,0,1,128,164Z"}))]]),o=t.forwardRef((e,o)=>t.createElement(a.default,{ref:o,...e,weights:l}));o.displayName="AtIcon",e.s(["AtIcon",0,o],123895)},960831,e=>{"use strict";e.s(["inputControls",0,[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"md",libraryValue:"md"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}],"inputOnlyControls",0,[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"md",libraryValue:"md"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],"inputWrapperOnlyControls",0,[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}]])},293907,e=>{"use strict";var t=e.i(191788),a=e.i(171481);let l=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M100,36H56A20,20,0,0,0,36,56v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V56A20,20,0,0,0,100,36ZM96,96H60V60H96ZM200,36H156a20,20,0,0,0-20,20v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V56A20,20,0,0,0,200,36Zm-4,60H160V60h36Zm-96,40H56a20,20,0,0,0-20,20v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V156A20,20,0,0,0,100,136Zm-4,60H60V160H96Zm104-60H156a20,20,0,0,0-20,20v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V156A20,20,0,0,0,200,136Zm-4,60H160V160h36Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M112,56v48a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8h48A8,8,0,0,1,112,56Zm88-8H152a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V56A8,8,0,0,0,200,48Zm-96,96H56a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V152A8,8,0,0,0,104,144Zm96,0H152a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V152A8,8,0,0,0,200,144Z",opacity:"0.2"}),t.createElement("path",{d:"M200,136H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Zm0,64H152V152h48v48ZM104,40H56A16,16,0,0,0,40,56v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,104,40Zm0,64H56V56h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,64H152V56h48v48Zm-96,32H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm0,64H56V152h48v48Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M120,56v48a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40h48A16,16,0,0,1,120,56Zm80-16H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm-96,96H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm96,0H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M104,42H56A14,14,0,0,0,42,56v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V56A14,14,0,0,0,104,42Zm2,62a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Zm94-62H152a14,14,0,0,0-14,14v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V56A14,14,0,0,0,200,42Zm2,62a2,2,0,0,1-2,2H152a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Zm-98,34H56a14,14,0,0,0-14,14v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V152A14,14,0,0,0,104,138Zm2,62a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V152a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Zm94-62H152a14,14,0,0,0-14,14v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V152A14,14,0,0,0,200,138Zm2,62a2,2,0,0,1-2,2H152a2,2,0,0,1-2-2V152a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M104,40H56A16,16,0,0,0,40,56v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,104,40Zm0,64H56V56h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,64H152V56h48v48Zm-96,32H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm0,64H56V152h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Zm0,64H152V152h48v48Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M104,44H56A12,12,0,0,0,44,56v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V56A12,12,0,0,0,104,44Zm4,60a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V56a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4Zm92-60H152a12,12,0,0,0-12,12v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V56A12,12,0,0,0,200,44Zm4,60a4,4,0,0,1-4,4H152a4,4,0,0,1-4-4V56a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4ZM104,140H56a12,12,0,0,0-12,12v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V152A12,12,0,0,0,104,140Zm4,60a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V152a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4Zm92-60H152a12,12,0,0,0-12,12v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V152A12,12,0,0,0,200,140Zm4,60a4,4,0,0,1-4,4H152a4,4,0,0,1-4-4V152a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4Z"}))]]),o=t.forwardRef((e,o)=>t.createElement(a.default,{ref:o,...e,weights:l}));o.displayName="SquaresFourIcon",e.s(["SquaresFourIcon",0,o],293907)},131022,e=>{"use strict";var t=e.i(648863),a=e.i(996969),l=e.i(391398);let o={type:"code",component:function(){return(0,l.jsx)(a.MultiSelect,{label:"Your favorite libraries",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"]})},code:`
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
`,maxWidth:340,centered:!0},r={type:"code",component:function(){return(0,l.jsx)(a.MultiSelect,{label:"Your favorite libraries",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],searchable:!0})},code:`
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
`,maxWidth:340,centered:!0},n={type:"code",component:function(){return(0,l.jsx)(a.MultiSelect,{label:"Your favorite libraries",placeholder:"Select up to 2 libraries",data:["React","Angular","Vue","Svelte"],maxValues:2})},code:`
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
`,maxWidth:340,centered:!0},i={type:"code",component:function(){return(0,l.jsx)(a.MultiSelect,{label:"Your favorite libraries",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],hidePickedOptions:!0})},code:`
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
`,maxWidth:340,centered:!0},c={type:"code",component:function(){return(0,l.jsx)(a.MultiSelect,{label:"Your favorite libraries",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],searchable:!0,nothingFoundMessage:"Nothing found..."})},code:`
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
`,maxWidth:340,centered:!0},s={type:"configurator",component:function(e){return(0,l.jsx)(a.MultiSelect,{...e,data:["React","Angular","Svelte","Vue"],dropdownOpened:!0,pb:150,label:"Control check icon",placeholder:"Pick value",defaultValue:["React"]})},code:`
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
`,centered:!0,maxWidth:340,controls:[{type:"boolean",prop:"withCheckIcon",initialValue:!0,libraryValue:!0},{type:"boolean",prop:"withAlignedLabels",initialValue:!1,libraryValue:!1},{type:"segmented",prop:"checkIconPosition",initialValue:"left",libraryValue:null,data:["left","right"]}]},d={type:"configurator",component:function(e){return(0,l.jsx)(a.MultiSelect,{...e,placeholder:"MultiSelect placeholder",data:["React","Angular","Vue","Svelte"]})},code:`
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
`,centered:!0,maxWidth:340,controls:e.i(960831).inputControls},u={type:"code",component:function(){return(0,l.jsx)(a.MultiSelect,{label:"Your favorite libraries",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],disabled:!0})},code:`
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
`,maxWidth:340,centered:!0},p={type:"code",component:function(){return(0,l.jsx)(a.MultiSelect,{label:"Your favorite libraries",placeholder:"Pick value",data:[{value:"react",label:"React"},{value:"ng",label:"Angular"},{value:"vue",label:"Vue",disabled:!0},{value:"svelte",label:"Svelte",disabled:!0}]})},code:`
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
`,maxWidth:340,centered:!0},h={type:"code",component:function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.MultiSelect,{label:"Boolean error",placeholder:"Boolean error",error:!0,data:["React","Angular","Vue","Svelte"]}),(0,l.jsx)(a.MultiSelect,{mt:"md",label:"With error message",placeholder:"With error message",error:"Invalid name",data:["React","Angular","Vue","Svelte"]})]})},maxWidth:340,centered:!0,code:`
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
`},m={type:"code",component:function(){return(0,l.jsx)(a.MultiSelect,{label:"Multi Select",placeholder:"Multi Select",data:["React","Angular","Vue","Svelte"],success:"Looks good!"})},code:`
import { MultiSelect } from '@mantine/core';

function Demo() {
  return <MultiSelect label="Multi Select" placeholder="Multi Select" data={['React', 'Angular', 'Vue', 'Svelte']} success="Looks good!" />;
}
`,maxWidth:340,centered:!0},v={type:"code",component:function(){return(0,l.jsx)(a.MultiSelect,{label:"Your favorite libraries",placeholder:"Pick value",data:[{group:"Frontend",items:["React","Angular"]},{group:"Backend",items:["Express","Django"]}]})},code:`
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
`,maxWidth:340,centered:!0},g=`
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
`,b=Array(1e5).fill(0).map((e,t)=>`Option ${t}`),x={type:"code",component:function(){return(0,l.jsx)(a.MultiSelect,{label:"100 000 options autocomplete",placeholder:"Use limit to optimize performance",limit:5,data:b,searchable:!0})},code:g,maxWidth:340,centered:!0},f={type:"code",component:function(){return(0,l.jsx)(a.MultiSelect,{label:"Your favorite libraries",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],readOnly:!0})},code:`
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
`,maxWidth:340,centered:!0},S=`
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
`,j=Array(100).fill(0).map((e,t)=>`Option ${t}`),w={type:"code",component:function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.MultiSelect,{label:"With scroll area (default)",placeholder:"Pick value",data:j,maxDropdownHeight:200}),(0,l.jsx)(a.MultiSelect,{label:"With native scroll",placeholder:"Pick value",data:j,withScrollArea:!1,styles:{dropdown:{maxHeight:200,overflowY:"auto"}},mt:"md"})]})},code:S,maxWidth:340,centered:!0},M=({options:e,search:t})=>{let a=t.toLowerCase().trim().split(" ");return e.filter(e=>{let t=e.label.toLowerCase().trim().split(" ");return a.every(e=>t.some(t=>t.includes(e)))})},y={type:"code",component:function(){return(0,l.jsx)(a.MultiSelect,{label:"What countries have you visited?",placeholder:"Pick values",data:["Great Britain","Russian Federation","United States"],filter:M,searchable:!0})},code:`
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
`,maxWidth:340,centered:!0},A=({options:e,search:t})=>{let a=e.filter(e=>e.label.toLowerCase().trim().includes(t.toLowerCase().trim()));return a.sort((e,t)=>e.label.localeCompare(t.label)),a},V={type:"code",component:function(){return(0,l.jsx)(a.MultiSelect,{label:"Your favorite libraries",placeholder:"Pick values",data:["4 – React","1 – Angular","3 – Vue","2 – Svelte"],filter:A,searchable:!0})},code:`
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
      data={['4 – React', '1 – Angular', '3 – Vue', '2 – Svelte']}
      filter={optionsFilter}
      searchable
    />
  );
}
`,maxWidth:340,centered:!0};var P=e.i(123895),D=e.i(726869);let R=`
import { AtIcon } from '@phosphor-icons/react';
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
     {{props}}
      leftSection={<AtIcon size={18} />}
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
`,k={type:"styles-api",data:D.MultiSelectStylesApi,component:function(e){return(0,l.jsx)(a.MultiSelect,{...e,dropdownOpened:!0,leftSection:(0,l.jsx)(P.AtIcon,{size:18}),withAsterisk:!0,label:"MultiSelect",description:"Description",placeholder:"MultiSelect",defaultValue:["React","Angular"],comboboxProps:{hideDetached:!1},data:[{group:"Frontend",items:["React","Angular"]},{group:"Backend",items:["Node","Django"]}]})},code:R,centered:!0,maxWidth:340},C={type:"code",component:function(){return(0,l.jsx)(a.MultiSelect,{label:"Your favorite libraries",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],defaultValue:["React"],clearable:!0})},code:`
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
`,maxWidth:340,centered:!0};var E=e.i(931882),O=e.i(671640);let F={type:"code",component:function(){return(0,l.jsxs)(O.Stack,{children:[(0,l.jsx)(a.MultiSelect,{label:"clearSectionMode='both' (default)",placeholder:"Pick values",data:["React","Angular","Vue","Svelte"],defaultValue:["React"],clearable:!0,rightSection:(0,l.jsx)(E.CaretDownIcon,{size:16}),clearSectionMode:"both"}),(0,l.jsx)(a.MultiSelect,{label:"clearSectionMode='rightSection'",placeholder:"Pick values",data:["React","Angular","Vue","Svelte"],defaultValue:["React"],clearable:!0,rightSection:(0,l.jsx)(E.CaretDownIcon,{size:16}),clearSectionMode:"rightSection"}),(0,l.jsx)(a.MultiSelect,{label:"clearSectionMode='clear'",placeholder:"Pick values",data:["React","Angular","Vue","Svelte"],defaultValue:["React"],clearable:!0,rightSection:(0,l.jsx)(E.CaretDownIcon,{size:16}),clearSectionMode:"clear"})]})},code:`
import { CaretDownIcon } from '@phosphor-icons/react';
import { MultiSelect, Stack } from '@mantine/core';

function Demo() {
  return (
    <Stack>
      <MultiSelect
        label="clearSectionMode='both' (default)"
        placeholder="Pick values"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        defaultValue={['React']}
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="both"
      />

      <MultiSelect
        label="clearSectionMode='rightSection'"
        placeholder="Pick values"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        defaultValue={['React']}
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="rightSection"
      />

      <MultiSelect
        label="clearSectionMode='clear'"
        placeholder="Pick values"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        defaultValue={['React']}
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="clear"
      />
    </Stack>
  );
}
`,maxWidth:340,centered:!0};var Z=e.i(293907);let I={type:"code",component:function(){let e=(0,l.jsx)(Z.SquaresFourIcon,{size:16});return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.MultiSelect,{data:["React","Angular","Vue"],leftSectionPointerEvents:"none",leftSection:e,label:"Your favorite libraries",placeholder:"Your favorite libraries"}),(0,l.jsx)(a.MultiSelect,{mt:"md",data:["React","Angular","Vue"],rightSectionPointerEvents:"none",rightSection:e,label:"Your favorite libraries",placeholder:"Your favorite libraries"})]})},maxWidth:340,centered:!0,code:`
import { MultiSelect } from '@mantine/core';
import { SquaresFourIcon } from '@phosphor-icons/react';

function Demo() {
  const icon = <SquaresFourIcon size={16} />;
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
`};var H=e.i(485108),T=e.i(541772);let W={type:"code",component:function(){let[e,{toggle:t}]=(0,T.useDisclosure)();return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(H.Button,{onClick:t,mb:"md",children:"Toggle dropdown"}),(0,l.jsx)(a.MultiSelect,{label:"Your favorite library",placeholder:"Pick values",data:["React","Angular","Vue","Svelte"],dropdownOpened:e})]})},code:`
import { MultiSelect, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

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
`,maxWidth:340,centered:!0},z={type:"code",component:function(){return(0,l.jsx)(a.MultiSelect,{label:"Your favorite libraries",placeholder:"Pick values",data:["React","Angular","Vue","Svelte"],comboboxProps:{position:"top",middlewares:{flip:!1,shift:!1}}})},code:`
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
`,maxWidth:340,centered:!0},Y={type:"code",component:function(){return(0,l.jsx)(a.MultiSelect,{label:"Your favorite libraries",placeholder:"Pick values",data:["React","Angular","Vue","Svelte"],comboboxProps:{transitionProps:{transition:"pop",duration:200}}})},code:`
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
`,maxWidth:340,centered:!0},B={type:"code",component:function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.MultiSelect,{label:"Zero padding",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],comboboxProps:{dropdownPadding:0}}),(0,l.jsx)(a.MultiSelect,{mt:"md",label:"10px padding",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],comboboxProps:{dropdownPadding:10}})]})},code:`
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
`,maxWidth:340,centered:!0},_={type:"code",component:function(){return(0,l.jsx)(a.MultiSelect,{label:"Your favorite libraries",placeholder:"Pick values",data:["React","Angular","Vue","Svelte"],comboboxProps:{shadow:"md"}})},code:`
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
`,maxWidth:340,centered:!0};var L=e.i(392862);let N={type:"code",code:`
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
`,centered:!0,component:function(){return(0,l.jsxs)(L.Popover,{width:300,position:"bottom",withArrow:!0,shadow:"md",children:[(0,l.jsx)(L.Popover.Target,{children:(0,l.jsx)(H.Button,{children:"Toggle popover"})}),(0,l.jsx)(L.Popover.Dropdown,{children:(0,l.jsx)(a.MultiSelect,{label:"Your favorite libraries",placeholder:"Pick values",data:["React","Angular","Vue","Svelte"],comboboxProps:{withinPortal:!1}})})]})}};var G={dropdown:"m_a9824888",input:"m_f5487eb3"};let $={type:"code",component:function(){return(0,l.jsx)(a.MultiSelect,{label:"Your favorite library",placeholder:"Pick values",data:["React","Angular","Vue","Svelte"],classNames:G,comboboxProps:{position:"bottom",middlewares:{flip:!1,shift:!1},offset:0}})},code:[{fileName:"Demo.tsx",code:`
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
`,language:"tsx"},{fileName:"Demo.module.css",code:`.dropdown {
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
`,language:"scss"}],maxWidth:340,centered:!0};var U=e.i(141806),J=e.i(725695),q=e.i(883364);let X={"Emily Johnson":{image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png",email:"emily92@gmail.com"},"Ava Rodriguez":{image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png",email:"ava_rose@gmail.com"},"Olivia Chen":{image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png",email:"livvy_globe@gmail.com"},"Ethan Barnes":{image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png",email:"ethan_explorer@gmail.com"},"Mason Taylor":{image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png",email:"mason_musician@gmail.com"}},K=({option:e})=>(0,l.jsxs)(J.Group,{gap:"sm",children:[(0,l.jsx)(U.Avatar,{src:X[e.value].image,size:36,radius:"xl"}),(0,l.jsxs)("div",{children:[(0,l.jsx)(q.Text,{size:"sm",children:e.value}),(0,l.jsx)(q.Text,{size:"xs",opacity:.5,children:X[e.value].email})]})]}),Q={type:"code",component:function(){return(0,l.jsx)(a.MultiSelect,{data:["Emily Johnson","Ava Rodriguez","Olivia Chen","Ethan Barnes","Mason Taylor"],renderOption:K,maxDropdownHeight:300,label:"Employees of the month",placeholder:"Search for employee",hidePickedOptions:!0,searchable:!0})},code:`
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
      hidePickedOptions
      searchable
    />
  );
}
`,centered:!0,maxWidth:340,defaultExpanded:!1};var ee=e.i(122057);let et=`
import { MultiSelect, Pill, Avatar } from '@mantine/core';

const users = [
  { value: 'Emily Johnson', label: 'Emily Johnson', image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png' },
  { value: 'Ava Rodriguez', label: 'Ava Rodriguez', image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png' },
  { value: 'Olivia Chen', label: 'Olivia Chen', image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png' },
  { value: 'Ethan Barnes', label: 'Ethan Barnes', image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png' },
  { value: 'Mason Taylor', label: 'Mason Taylor', image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png' },
];

const usersMap = new Map(users.map((user) => [user.value.toString(), user]));

function Demo() {
  return (
    <MultiSelect
      data={users}
      label="Candidates"
      placeholder="Select candidates"
      defaultValue={['Emily Johnson', 'Ava Rodriguez']}
      renderPill={({ option, onRemove }) => {
        const user = usersMap.get(option?.value.toString());
        return (
          <Pill withRemoveButton onRemove={onRemove}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Avatar src={user?.image} size={16} />
              {option?.label}
            </div>
          </Pill>
        );
      }}
    />
  );
}
`,ea=[{value:"Emily Johnson",label:"Emily Johnson",image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png"},{value:"Ava Rodriguez",label:"Ava Rodriguez",image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"},{value:"Olivia Chen",label:"Olivia Chen",image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png"},{value:"Ethan Barnes",label:"Ethan Barnes",image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"},{value:"Mason Taylor",label:"Mason Taylor",image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"}],el=new Map(ea.map(e=>[e.value.toString(),e])),eo={type:"code",component:function(){return(0,l.jsx)(a.MultiSelect,{data:ea,label:"Candidates",placeholder:"Select candidates",defaultValue:["Emily Johnson","Ava Rodriguez"],renderPill:({option:e,onRemove:t})=>(0,l.jsx)(ee.Pill,{withRemoveButton:!0,onRemove:t,style:{paddingInlineStart:2},children:(0,l.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8},children:[(0,l.jsx)(U.Avatar,{src:el.get(e?.value.toString())?.image,size:16}),e?.label]})})})},code:et,centered:!0,maxWidth:400};var er=e.i(191788);let en={type:"code",component:function(){let[e,t]=(0,er.useState)(["React","Angular","Vue"]);return(0,l.jsx)(a.MultiSelect,{label:"Drag pills to reorder",description:"Selected values can be reordered by dragging pills",placeholder:"Pick value",data:["React","Angular","Vue","Svelte","Solid","Ember"],value:e,onChange:t,withPillsReorder:!0})},code:`
import { useState } from 'react';
import { MultiSelect } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState(['React', 'Angular', 'Vue']);

  return (
    <MultiSelect
      label="Drag pills to reorder"
      description="Selected values can be reordered by dragging pills"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte', 'Solid', 'Ember']}
      value={value}
      onChange={setValue}
      withPillsReorder
    />
  );
}
`,maxWidth:340,centered:!0},ei={type:"code",component:function(){return(0,l.jsx)(a.MultiSelect,{label:"Your favorite libraries",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],comboboxProps:{width:200,position:"bottom-start"}})},code:`
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      comboboxProps={{ width: 200, position: 'bottom-start' }}
    />
  );
}
`,maxWidth:340,centered:!0};var ec=e.i(280130);let es=({options:e,search:t})=>t.trim()?new ec.default(e,{keys:["label"],threshold:.3,minMatchCharLength:1}).search(t).map(e=>e.item):e,ed={type:"code",component:function(){return(0,l.jsx)(a.MultiSelect,{label:"What countries have you visited?",placeholder:"Pick values",data:["Great Britain","Russian Federation","United States","Germany","France"],filter:es,searchable:!0})},code:`
import { MultiSelect, ComboboxItem, OptionsFilter } from '@mantine/core';
import Fuse from 'fuse.js';

const optionsFilter: OptionsFilter = ({ options, search }) => {
  if (!search.trim()) {
    return options;
  }

  const fuse = new Fuse(options as ComboboxItem[], {
    keys: ['label'],
    threshold: 0.3,
    minMatchCharLength: 1,
  });

  return fuse.search(search).map((result) => result.item);
};

function Demo() {
  return (
    <MultiSelect
      label="What countries have you visited?"
      placeholder="Pick values"
      data={['Great Britain', 'Russian Federation', 'United States', 'Germany', 'France']}
      filter={optionsFilter}
      searchable
    />
  );
}
`,maxWidth:340,centered:!0},eu={type:"code",component:function(){return(0,l.jsx)(a.MultiSelect,{placeholder:"Pick values",data:["React","Angular","Vue","Svelte"],loading:!0})},code:`
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      placeholder="Pick values"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      loading
    />
  );
}
`,centered:!0,maxWidth:340},ep=`
import { MultiSelect } from '@mantine/core';

const data = Array(100)
  .fill(0)
  .map((_, index) => \`Option \${index}\`);

function Demo() {
  return (
    <MultiSelect
      label="Fits viewport height"
      placeholder="Pick values"
      data={data}
      floatingHeight="viewport"
    />
  );
}
`,eh=Array(100).fill(0).map((e,t)=>`Option ${t}`),em={type:"code",component:function(){return(0,l.jsx)(a.MultiSelect,{label:"Fits viewport height",placeholder:"Pick values",data:eh,floatingHeight:"viewport"})},code:ep,maxWidth:340,centered:!0};var ev=(0,t.__exportAll)({checkIcon:()=>s,clearSectionMode:()=>F,clearable:()=>C,configurator:()=>d,disabled:()=>u,disabledOptions:()=>p,dragReorder:()=>en,dropdownAnimation:()=>Y,dropdownOffset:()=>$,dropdownOpened:()=>W,dropdownPadding:()=>B,dropdownPosition:()=>z,dropdownShadow:()=>_,dropdownWidth:()=>ei,error:()=>h,floatingHeight:()=>em,fuzzySearch:()=>ed,groups:()=>v,hidePickedOptions:()=>i,limit:()=>x,loading:()=>eu,maxValues:()=>n,nothingFound:()=>c,readOnly:()=>f,renderOption:()=>Q,renderPill:()=>eo,scrollArea:()=>w,search:()=>y,searchable:()=>r,sections:()=>I,sort:()=>V,stylesApi:()=>k,success:()=>m,usage:()=>o,withinPopover:()=>N});e.s(["MultiSelectDemos",0,ev],131022)},214971,e=>{"use strict";var t=e.i(391398),a=e.i(38856),l=e.i(131022);e.i(603441);var o=e.i(62558);e.i(457450);var r=e.i(418026);let n=(0,o.Layout)(r.MDX_DATA.MultiSelect);function i(e){let o={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.useMDXComponents)(),...e.components},{ClearSectionMode:r,ComboboxData:n,ComboboxDisclaimer:i,ComboboxFiltering:s,ComboboxLargeData:d,ComboboxProps:u,Demo:p,GetElementRef:h,InputAccessibility:m,InputFeatures:v,InputSections:g,StylesApiSelectors:b}=o;return r||c("ClearSectionMode",!0),n||c("ComboboxData",!0),i||c("ComboboxDisclaimer",!0),s||c("ComboboxFiltering",!0),d||c("ComboboxLargeData",!0),u||c("ComboboxProps",!0),p||c("Demo",!0),h||c("GetElementRef",!0),m||c("InputAccessibility",!0),v||c("InputFeatures",!0),g||c("InputSections",!0),b||c("StylesApiSelectors",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i,{component:"MultiSelect"}),"\n",(0,t.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"MultiSelect"})," provides a way to enter multiple values.\n",(0,t.jsx)(o.code,{children:"MultiSelect"})," is similar to ",(0,t.jsx)(o.a,{href:"/core/tags-input",children:"TagsInput"}),", but it does not allow entering custom values."]}),"\n",(0,t.jsx)(p,{data:l.MultiSelectDemos.usage}),"\n",(0,t.jsx)(o.h2,{id:"loading-state",children:"Loading state"}),"\n",(0,t.jsxs)(o.p,{children:["Set ",(0,t.jsx)(o.code,{children:"loading"})," prop to display a loading indicator. By default, the loader is displayed on the right side of the input.\nYou can change the position with the ",(0,t.jsx)(o.code,{children:"loadingPosition"})," prop to ",(0,t.jsx)(o.code,{children:"'left'"})," or ",(0,t.jsx)(o.code,{children:"'right'"}),". This is useful for async operations like API calls, searches, or validations:"]}),"\n",(0,t.jsx)(p,{data:l.MultiSelectDemos.loading}),"\n",(0,t.jsx)(o.h2,{id:"controlled",children:"Controlled"}),"\n",(0,t.jsxs)(o.p,{children:["The ",(0,t.jsx)(o.code,{children:"MultiSelect"})," value must be an array of strings; other types are not supported.\nThe ",(0,t.jsx)(o.code,{children:"onChange"})," function is called with an array of strings as a single argument."]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { MultiSelect } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState<string[]>([]);\n  return <MultiSelect data={[]} value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,t.jsx)(o.h2,{id:"clearable",children:"Clearable"}),"\n",(0,t.jsxs)(o.p,{children:["Set the ",(0,t.jsx)(o.code,{children:"clearable"})," prop to display the clear button in the right section. The button is not displayed\nwhen:"]}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:"The component does not have a value"}),"\n",(0,t.jsx)(o.li,{children:"The component is disabled"}),"\n",(0,t.jsx)(o.li,{children:"The component is read only"}),"\n"]}),"\n",(0,t.jsx)(p,{data:l.MultiSelectDemos.clearable}),"\n",(0,t.jsx)(r,{}),"\n",(0,t.jsx)(p,{data:l.MultiSelectDemos.clearSectionMode}),"\n",(0,t.jsx)(o.h2,{id:"searchable",children:"Searchable"}),"\n",(0,t.jsxs)(o.p,{children:["Set the ",(0,t.jsx)(o.code,{children:"searchable"})," prop to allow filtering options by user input:"]}),"\n",(0,t.jsx)(p,{data:l.MultiSelectDemos.searchable}),"\n",(0,t.jsx)(o.h2,{id:"controlled-search-value",children:"Controlled search value"}),"\n",(0,t.jsxs)(o.p,{children:["You can control the search value with the ",(0,t.jsx)(o.code,{children:"searchValue"})," and ",(0,t.jsx)(o.code,{children:"onSearchChange"})," props:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { MultiSelect } from '@mantine/core';\n\nfunction Demo() {\n  const [searchValue, setSearchValue] = useState('');\n  return (\n    <MultiSelect\n      searchable\n      searchValue={searchValue}\n      onSearchChange={setSearchValue}\n      data={[]}\n    />\n  );\n}\n"})}),"\n",(0,t.jsx)(o.h2,{id:"nothing-found",children:"Nothing found"}),"\n",(0,t.jsxs)(o.p,{children:["Set the ",(0,t.jsx)(o.code,{children:"nothingFoundMessage"})," prop to display a given message when no options match the search query\nor there is no data available. If the ",(0,t.jsx)(o.code,{children:"nothingFoundMessage"})," prop is not set, the ",(0,t.jsx)(o.code,{children:"MultiSelect"})," dropdown will be hidden."]}),"\n",(0,t.jsx)(p,{data:l.MultiSelectDemos.nothingFound}),"\n",(0,t.jsx)(o.h2,{id:"checked-option-icon",children:"Checked option icon"}),"\n",(0,t.jsxs)(o.p,{children:["Set ",(0,t.jsx)(o.code,{children:"checkIconPosition"})," prop to ",(0,t.jsx)(o.code,{children:"left"})," or ",(0,t.jsx)(o.code,{children:"right"})," to control position of check icon in active option.\nTo remove the check icon, set ",(0,t.jsx)(o.code,{children:"withCheckIcon={false}"}),". To align unchecked labels with checked ones, set ",(0,t.jsx)(o.code,{children:"withAlignedLabels"})," prop."]}),"\n",(0,t.jsx)(p,{data:l.MultiSelectDemos.checkIcon}),"\n",(0,t.jsx)(o.h2,{id:"max-selected-values",children:"Max selected values"}),"\n",(0,t.jsxs)(o.p,{children:["You can limit the number of selected values with the ",(0,t.jsx)(o.code,{children:"maxValues"})," prop. This will not allow adding more values\nonce the limit is reached."]}),"\n",(0,t.jsx)(p,{data:l.MultiSelectDemos.maxValues}),"\n",(0,t.jsx)(o.h2,{id:"hide-selected-options",children:"Hide selected options"}),"\n",(0,t.jsxs)(o.p,{children:["To remove selected options from the list of available options, set the ",(0,t.jsx)(o.code,{children:"hidePickedOptions"})," prop:"]}),"\n",(0,t.jsx)(p,{data:l.MultiSelectDemos.hidePickedOptions}),"\n",(0,t.jsx)(n,{component:"MultiSelect"}),"\n",(0,t.jsx)(o.h2,{id:"value-type",children:"Value type"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"MultiSelect"})," supports primitive values (strings, numbers, booleans) as value type. ",(0,t.jsx)(o.code,{children:"MultiSelect"})," automatically\ninfers the value type. If you want to set the value type explicitly, pass type argument:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"import { MultiSelect } from '@mantine/core';\n\ntype MultiSelectValue = 'React' | 'Angular' | 'Svelte' | number;\n\nfunction Demo() {\n  return <MultiSelect<MultiSelectValue> data={['React', 'Angular', 'Svelte', 100]} />;\n}\n"})}),"\n",(0,t.jsx)(s,{component:"MultiSelect"}),"\n",(0,t.jsx)(p,{data:l.MultiSelectDemos.search}),"\n",(0,t.jsx)(o.h2,{id:"sort-options",children:"Sort options"}),"\n",(0,t.jsxs)(o.p,{children:["By default, options are sorted by their position in the data array. You can change this behavior\nwith the ",(0,t.jsx)(o.code,{children:"filter"})," function:"]}),"\n",(0,t.jsx)(p,{data:l.MultiSelectDemos.sort}),"\n",(0,t.jsx)(o.h2,{id:"fuzzy-search-with-fusejs",children:"Fuzzy search with fuse.js"}),"\n",(0,t.jsxs)(o.p,{children:["You can implement fuzzy search using the ",(0,t.jsx)(o.a,{href:"https://fusejs.io/",children:"fuse.js"})," library to match options\neven with typos or partial matches:"]}),"\n",(0,t.jsx)(p,{data:l.MultiSelectDemos.fuzzySearch}),"\n",(0,t.jsx)(d,{component:"MultiSelect"}),"\n",(0,t.jsx)(p,{data:l.MultiSelectDemos.limit}),"\n",(0,t.jsx)(o.h2,{id:"renderoption",children:"renderOption"}),"\n",(0,t.jsxs)(o.p,{children:["The ",(0,t.jsx)(o.code,{children:"renderOption"})," callback allows you to customize option rendering. It is called with the option object and\nchecked state. The function must return a React node."]}),"\n",(0,t.jsx)(p,{data:l.MultiSelectDemos.renderOption}),"\n",(0,t.jsx)(o.h2,{id:"renderpill",children:"renderPill"}),"\n",(0,t.jsxs)(o.p,{children:["The ",(0,t.jsx)(o.code,{children:"renderPill"})," callback allows you to customize pill rendering. The function receives the option (that was passed to data), value, onRemove and disabled props. It must return a React node."]}),"\n",(0,t.jsx)(p,{data:l.MultiSelectDemos.renderPill}),"\n",(0,t.jsx)(o.h2,{id:"reorder-pills",children:"Reorder pills"}),"\n",(0,t.jsxs)(o.p,{children:["Set the ",(0,t.jsx)(o.code,{children:"withPillsReorder"})," prop to allow reordering pills. Dropping a pill before or after\nanother pill updates the component value accordingly. Reordering is automatically disabled\nwhen ",(0,t.jsx)(o.code,{children:"disabled"})," or ",(0,t.jsx)(o.code,{children:"readOnly"})," is set."]}),"\n",(0,t.jsx)(o.p,{children:"You can reorder pills with a mouse (drag-and-drop) or keyboard:"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:["Pills are not part of the ",(0,t.jsx)(o.code,{children:"Tab"})," order. With focus on the input, press ",(0,t.jsx)(o.code,{children:"ArrowLeft"})," (when the\ncaret is at the start of the input) to move focus to the last pill."]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"ArrowLeft"})," and ",(0,t.jsx)(o.code,{children:"ArrowRight"})," move focus between pills (RTL-aware). Pressing ",(0,t.jsx)(o.code,{children:"ArrowRight"})," on\nthe last pill returns focus to the input."]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"Alt + ArrowLeft"})," and ",(0,t.jsx)(o.code,{children:"Alt + ArrowRight"})," reorder the focused pill (RTL-aware)."]}),"\n"]}),"\n",(0,t.jsx)(o.p,{children:"Focus follows the moved pill so multiple moves can be chained without re-focusing."}),"\n",(0,t.jsx)(p,{data:l.MultiSelectDemos.dragReorder}),"\n",(0,t.jsxs)(o.p,{children:["If you use a custom pill renderer with the ",(0,t.jsx)(o.code,{children:"renderPill"})," prop, spread the ",(0,t.jsx)(o.code,{children:"reorderProps"})," from\nthe render callback payload onto the focusable pill root element to keep reordering working.\n",(0,t.jsx)(o.code,{children:"reorderProps"})," carries the ",(0,t.jsx)(o.code,{children:"tabIndex"}),", ",(0,t.jsx)(o.code,{children:"data-mantine-pill-index"})," attribute and the keyboard\nhandler that drive keyboard reorder, so it must land on the element the user can focus:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"import { MultiSelect } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <MultiSelect\n      data={['React', 'Angular', 'Vue']}\n      withPillsReorder\n      renderPill={({ value, onRemove, reorderProps }) => (\n        <div {...reorderProps}>\n          {value} <button onClick={onRemove}>×</button>\n        </div>\n      )}\n    />\n  );\n}\n"})}),"\n",(0,t.jsx)(o.h2,{id:"scrollable-dropdown",children:"Scrollable dropdown"}),"\n",(0,t.jsxs)(o.p,{children:["By default, the options list is wrapped with ",(0,t.jsx)(o.a,{href:"/core/scroll-area",children:"ScrollArea.Autosize"}),".\nYou can control the dropdown max-height with the ",(0,t.jsx)(o.code,{children:"maxDropdownHeight"})," prop if you do not change the default settings."]}),"\n",(0,t.jsxs)(o.p,{children:["If you want to use native scrollbars, set ",(0,t.jsx)(o.code,{children:"withScrollArea={false}"}),". Note that in this case,\nyou will need to change the dropdown styles with ",(0,t.jsx)(o.a,{href:"/styles/styles-api",children:"Styles API"}),"."]}),"\n",(0,t.jsx)(p,{data:l.MultiSelectDemos.scrollArea}),"\n",(0,t.jsx)(o.h2,{id:"fit-dropdown-to-viewport-height",children:"Fit dropdown to viewport height"}),"\n",(0,t.jsxs)(o.p,{children:["Set ",(0,t.jsx)(o.code,{children:'floatingHeight="viewport"'})," to make the dropdown grow to fill the available vertical\nspace in the viewport. The ",(0,t.jsx)(o.code,{children:"flip"})," middleware is disabled in this mode – the dropdown\nalways opens in the configured direction and is constrained to the viewport edges instead\nof flipping to the other side. Useful when working with large option lists:"]}),"\n",(0,t.jsx)(p,{data:l.MultiSelectDemos.floatingHeight}),"\n",(0,t.jsx)(o.h2,{id:"group-options",children:"Group options"}),"\n",(0,t.jsx)(p,{data:l.MultiSelectDemos.groups}),"\n",(0,t.jsx)(o.h2,{id:"disabled-options",children:"Disabled options"}),"\n",(0,t.jsxs)(o.p,{children:["When an option is disabled, it cannot be selected and is ignored in keyboard navigation.\nNote that the user can still enter a disabled option as a value. If you want to prohibit certain values,\nuse a controlled component and filter them out in the ",(0,t.jsx)(o.code,{children:"onChange"})," function."]}),"\n",(0,t.jsx)(p,{data:l.MultiSelectDemos.disabledOptions}),"\n",(0,t.jsx)(u,{component:"MultiSelect"}),"\n",(0,t.jsx)(o.h2,{id:"inside-popover",children:"Inside Popover"}),"\n",(0,t.jsxs)(o.p,{children:["To use ",(0,t.jsx)(o.code,{children:"MultiSelect"})," inside popover, you need to set ",(0,t.jsx)(o.code,{children:"withinPortal: false"}),":"]}),"\n",(0,t.jsx)(p,{data:l.MultiSelectDemos.withinPopover}),"\n",(0,t.jsx)(o.h2,{id:"control-dropdown-opened-state",children:"Control dropdown opened state"}),"\n",(0,t.jsxs)(o.p,{children:["You can control the dropdown opened state with the ",(0,t.jsx)(o.code,{children:"dropdownOpened"})," prop. Additionally,\nyou can use ",(0,t.jsx)(o.code,{children:"onDropdownClose"})," and ",(0,t.jsx)(o.code,{children:"onDropdownOpen"})," to listen to dropdown opened state changes."]}),"\n",(0,t.jsx)(p,{data:l.MultiSelectDemos.dropdownOpened}),"\n",(0,t.jsx)(o.h2,{id:"dropdown-position",children:"Dropdown position"}),"\n",(0,t.jsxs)(o.p,{children:["By default, the dropdown is displayed below the input if there is enough space; otherwise it is displayed above the input.\nYou can change this behavior by setting the ",(0,t.jsx)(o.code,{children:"position"})," and ",(0,t.jsx)(o.code,{children:"middlewares"})," props, which are passed down to the\nunderlying ",(0,t.jsx)(o.a,{href:"/core/popover",children:"Popover"})," component."]}),"\n",(0,t.jsx)(o.p,{children:"Example of a dropdown that is always displayed above the input:"}),"\n",(0,t.jsx)(p,{data:l.MultiSelectDemos.dropdownPosition}),"\n",(0,t.jsx)(o.h2,{id:"dropdown-width",children:"Dropdown width"}),"\n",(0,t.jsxs)(o.p,{children:["To change the dropdown width, set the ",(0,t.jsx)(o.code,{children:"width"})," prop in ",(0,t.jsx)(o.code,{children:"comboboxProps"}),". By default,\nthe dropdown width is equal to the input width."]}),"\n",(0,t.jsx)(p,{data:l.MultiSelectDemos.dropdownWidth}),"\n",(0,t.jsx)(o.h2,{id:"dropdown-offset",children:"Dropdown offset"}),"\n",(0,t.jsxs)(o.p,{children:["To change the dropdown offset, set the ",(0,t.jsx)(o.code,{children:"offset"})," prop in ",(0,t.jsx)(o.code,{children:"comboboxProps"}),":"]}),"\n",(0,t.jsx)(p,{data:l.MultiSelectDemos.dropdownOffset}),"\n",(0,t.jsx)(o.h2,{id:"dropdown-animation",children:"Dropdown animation"}),"\n",(0,t.jsxs)(o.p,{children:["By default, dropdown animations are disabled. To enable them, you can set ",(0,t.jsx)(o.code,{children:"transitionProps"}),",\nwhich will be passed down to the underlying ",(0,t.jsx)(o.a,{href:"/core/transition",children:"Transition"})," component."]}),"\n",(0,t.jsx)(p,{data:l.MultiSelectDemos.dropdownAnimation}),"\n",(0,t.jsx)(o.h2,{id:"dropdown-padding",children:"Dropdown padding"}),"\n",(0,t.jsx)(p,{data:l.MultiSelectDemos.dropdownPadding}),"\n",(0,t.jsx)(o.h2,{id:"dropdown-shadow",children:"Dropdown shadow"}),"\n",(0,t.jsx)(p,{data:l.MultiSelectDemos.dropdownShadow}),"\n",(0,t.jsx)(g,{component:"MultiSelect"}),"\n",(0,t.jsx)(p,{data:l.MultiSelectDemos.sections}),"\n",(0,t.jsx)(o.h2,{id:"input-props",children:"Input props"}),"\n",(0,t.jsx)(v,{component:"MultiSelect",element:"input"}),"\n",(0,t.jsx)(p,{data:l.MultiSelectDemos.configurator}),"\n",(0,t.jsx)(o.h2,{id:"read-only",children:"Read only"}),"\n",(0,t.jsxs)(o.p,{children:["Set ",(0,t.jsx)(o.code,{children:"readOnly"})," to make the input read-only. When ",(0,t.jsx)(o.code,{children:"readOnly"})," is set,\n",(0,t.jsx)(o.code,{children:"MultiSelect"})," will not show suggestions and will not call the ",(0,t.jsx)(o.code,{children:"onChange"})," function."]}),"\n",(0,t.jsx)(p,{data:l.MultiSelectDemos.readOnly}),"\n",(0,t.jsx)(o.h2,{id:"disabled",children:"Disabled"}),"\n",(0,t.jsxs)(o.p,{children:["Set ",(0,t.jsx)(o.code,{children:"disabled"})," to disable the input. When ",(0,t.jsx)(o.code,{children:"disabled"})," is set,\nthe user cannot interact with the input and ",(0,t.jsx)(o.code,{children:"MultiSelect"})," will not show suggestions."]}),"\n",(0,t.jsx)(p,{data:l.MultiSelectDemos.disabled}),"\n",(0,t.jsx)(o.h2,{id:"error-state",children:"Error state"}),"\n",(0,t.jsx)(p,{data:l.MultiSelectDemos.error}),"\n",(0,t.jsx)(o.h2,{id:"success-state",children:"Success state"}),"\n",(0,t.jsx)(p,{data:l.MultiSelectDemos.success}),"\n",(0,t.jsx)(b,{component:"MultiSelect"}),"\n",(0,t.jsx)(p,{data:l.MultiSelectDemos.stylesApi}),"\n",(0,t.jsx)(h,{component:"MultiSelect",refType:"input"}),"\n",(0,t.jsx)(m,{component:"MultiSelect"}),"\n",(0,t.jsxs)(o.p,{children:["To set ",(0,t.jsx)(o.code,{children:"aria-label"})," on the clear button, use ",(0,t.jsx)(o.code,{children:"clearButtonProps"}),". Note that it is required\nonly when ",(0,t.jsx)(o.code,{children:"clearable"})," is set."]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"import { MultiSelect } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <MultiSelect\n      data={[]}\n      clearable\n      clearButtonProps={{\n        'aria-label': 'Clear input',\n      }}\n    />\n  );\n}\n"})}),"\n",(0,t.jsx)(o.h2,{id:"backspace-key",children:"Backspace key"}),"\n",(0,t.jsxs)(o.p,{children:["When the search input is empty and the user presses the ",(0,t.jsx)(o.code,{children:"Backspace"})," key, the last selected item is removed. This behavior is built-in and cannot be disabled."]})]})}function c(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}e.s(["default",0,function(e={}){return(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})})}])},140781,(e,t,a)=>{let l="/core/multi-select";(window.__NEXT_P=window.__NEXT_P||[]).push([l,()=>e.r(214971)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([l])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);