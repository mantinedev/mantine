(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,o)=>{let n={};for(var r in e)t(n,r,{get:e[r],enumerable:!0});return o||t(n,Symbol.toStringTag,{value:"Module"}),n}])},257177,e=>{"use strict";var t=e.i(433512),o=e.i(481178),n=e.i(317477),r=e.i(44091),i=e.i(391466),a=e.i(956449),l=e.i(232471),s={root:"m_347db0ec","root--dot":"m_fbd81e3d",label:"m_5add502a",section:"m_91fdda9b"},c=e.i(391398);let d=(0,o.createVarsResolver)((e,{radius:o,color:r,gradient:i,variant:a,size:l,autoContrast:s,circle:c})=>{let d=e.variantColorResolver({color:r||e.primaryColor,theme:e,gradient:i,variant:a||"filled",autoContrast:s});return{root:{"--badge-height":(0,t.getSize)(l,"badge-height"),"--badge-padding-x":(0,t.getSize)(l,"badge-padding-x"),"--badge-fz":(0,t.getSize)(l,"badge-fz"),"--badge-radius":c||void 0===o?void 0:(0,t.getRadius)(o),"--badge-bg":r||a?d.background:void 0,"--badge-color":r||a?d.color:void 0,"--badge-bd":r||a?d.border:void 0,"--badge-dot-color":"dot"===a?(0,n.getThemeColor)(r,e):void 0}}}),u=(0,a.polymorphicFactory)(e=>{let t=(0,r.useProps)("Badge",null,e),{classNames:o,className:n,style:a,styles:u,unstyled:m,vars:p,radius:h,color:g,gradient:b,leftSection:f,rightSection:x,children:T,variant:v,fullWidth:y,autoContrast:S,circle:C,mod:j,attributes:I,...w}=t,A=(0,i.useStyles)({name:"Badge",props:t,classes:s,className:n,style:a,classNames:o,styles:u,unstyled:m,attributes:I,vars:p,varsResolver:d});return(0,c.jsxs)(l.Box,{variant:v,mod:[{block:y,circle:C,"with-right-section":!!x,"with-left-section":!!f},j],...A("root",{variant:v}),...w,children:[f&&(0,c.jsx)("span",{...A("section"),"data-position":"left",children:f}),(0,c.jsx)("span",{...A("label"),children:T}),x&&(0,c.jsx)("span",{...A("section"),"data-position":"right",children:x})]})});u.classes=s,u.varsResolver=d,u.displayName="@mantine/core/Badge",e.s(["Badge",0,u],257177)},123895,e=>{"use strict";var t=e.i(191788),o=e.i(171481);let n=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,20a108,108,0,0,0,0,216c22.27,0,45.69-6.73,62.64-18a12,12,0,1,0-13.29-20c-13,8.63-31.89,14-49.35,14a84,84,0,1,1,84-84c0,9.29-1.67,17.08-4.69,21.95-2.64,4.24-6,6.05-11.31,6.05s-8.67-1.81-11.31-6.05c-3-4.87-4.69-12.66-4.69-21.95V88a12,12,0,0,0-23.49-3.46,52,52,0,1,0,8.86,79.57C172.3,174.3,182.81,180,196,180c24.67,0,40-19.92,40-52A108.12,108.12,0,0,0,128,20Zm0,136a28,28,0,1,1,28-28A28,28,0,0,1,128,156Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"}),t.createElement("path",{d:"M128,24a104,104,0,0,0,0,208c21.51,0,44.1-6.48,60.43-17.33a8,8,0,0,0-8.86-13.33C166,210.38,146.21,216,128,216a88,88,0,1,1,88-88c0,26.45-10.88,32-20,32s-20-5.55-20-32V88a8,8,0,0,0-16,0v4.26a48,48,0,1,0,5.93,65.1c6,12,16.35,18.64,30.07,18.64,22.54,0,36-17.94,36-48A104.11,104.11,0,0,0,128,24Zm0,136a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M232,128c0,.51,0,1,0,1.52-.34,14.26-5.63,30.48-28,30.48-23.14,0-28-17.4-28-32V88a8,8,0,0,0-8.53-8A8.17,8.17,0,0,0,160,88.27v4a48,48,0,1,0,6.73,64.05,40.19,40.19,0,0,0,3.38,5C175.48,168,185.71,176,204,176a54.81,54.81,0,0,0,9.22-.75,4,4,0,0,1,4.09,6A104.05,104.05,0,0,1,125.91,232C71.13,230.9,26.2,186.86,24.08,132.11A104,104,0,1,1,232,128ZM96,128a32,32,0,1,0,32-32A32,32,0,0,0,96,128Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,26a102,102,0,0,0,0,204c21.13,0,43.31-6.35,59.32-17a6,6,0,0,0-6.65-10c-13.9,9.25-34.09,15-52.67,15a90,90,0,1,1,90-90c0,29.58-13.78,34-22,34s-22-4.42-22-34V88a6,6,0,0,0-12,0v9a46,46,0,1,0,4.34,56.32C171.76,166.6,182,174,196,174c21.29,0,34-17.2,34-46A102.12,102.12,0,0,0,128,26Zm0,136a34,34,0,1,1,34-34A34,34,0,0,1,128,162Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,24a104,104,0,0,0,0,208c21.51,0,44.1-6.48,60.43-17.33a8,8,0,0,0-8.86-13.33C166,210.38,146.21,216,128,216a88,88,0,1,1,88-88c0,26.45-10.88,32-20,32s-20-5.55-20-32V88a8,8,0,0,0-16,0v4.26a48,48,0,1,0,5.93,65.1c6,12,16.35,18.64,30.07,18.64,22.54,0,36-17.94,36-48A104.11,104.11,0,0,0,128,24Zm0,136a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,28a100,100,0,0,0,0,200c20.76,0,42.52-6.23,58.21-16.66a4,4,0,1,0-4.43-6.67C167.35,214.27,147.24,220,128,220a92,92,0,1,1,92-92c0,31.32-15,36-24,36s-24-4.68-24-36V88a4,4,0,0,0-8,0v14.75a44,44,0,1,0,2.82,45.94C171.46,163.58,181.66,172,196,172c20,0,32-16.45,32-44A100.11,100.11,0,0,0,128,28Zm0,136a36,36,0,1,1,36-36A36,36,0,0,1,128,164Z"}))]]),r=t.forwardRef((e,r)=>t.createElement(o.default,{ref:r,...e,weights:n}));r.displayName="AtIcon",e.s(["AtIcon",0,r],123895)},330573,e=>{"use strict";var t=e.i(44091),o=e.i(391466),n=e.i(956449),r=e.i(232471),i={root:"m_4451eb3a"},a=e.i(391398);let l=(0,n.polymorphicFactory)(e=>{let n=(0,t.useProps)("Center",null,e),{classNames:l,className:s,style:c,styles:d,unstyled:u,vars:m,inline:p,mod:h,attributes:g,...b}=n,f=(0,o.useStyles)({name:"Center",props:n,classes:i,className:s,style:c,classNames:l,styles:d,unstyled:u,attributes:g,vars:m});return(0,a.jsx)(r.Box,{mod:[{inline:p},h],...f("root"),...b})});l.classes=i,l.displayName="@mantine/core/Center",e.s(["Center",0,l],330573)},89361,e=>{"use strict";var t=e.i(433512),o=e.i(481178),n=e.i(44091),r=e.i(391466),i=e.i(275519),a=e.i(232471),l={root:"m_e9408a47","root--default":"m_84c9523a","root--filled":"m_ef274e49","root--unstyled":"m_eda993d3",legend:"m_90794832","legend--unstyled":"m_74ca27fe"},s=e.i(391398);let c={variant:"default"},d=(0,o.createVarsResolver)((e,{radius:o})=>({root:{"--fieldset-radius":void 0===o?void 0:(0,t.getRadius)(o)}})),u=(0,i.factory)(e=>{let t=(0,n.useProps)("Fieldset",c,e),{classNames:o,className:i,style:u,styles:m,unstyled:p,vars:h,legend:g,variant:b,children:f,attributes:x,...T}=t,v=(0,r.useStyles)({name:"Fieldset",classes:l,props:t,className:i,style:u,classNames:o,styles:m,unstyled:p,attributes:x,vars:h,varsResolver:d});return(0,s.jsxs)(a.Box,{component:"fieldset",variant:b,...v("root",{variant:b}),...T,children:[g&&(0,s.jsx)("legend",{...v("legend",{variant:b}),children:g}),f]})});u.classes=l,u.varsResolver=d,u.displayName="@mantine/core/Fieldset",e.s(["Fieldset",0,u],89361)},937389,e=>{"use strict";var t=e.i(433512),o=e.i(481178),n=e.i(44091),r=e.i(62904),i=e.i(391466),a=e.i(425254),l=e.i(275519),s=e.i(658109),c=e.i(294788),d=e.i(586488),u=e.i(391398),m={root:"m_f61ca620",input:"m_ccf8da4c",innerInput:"m_f2d85dd2",visibilityToggle:"m_b1072d44"},p=e.i(107315),h=e.i(579560),g=e.i(56206);let b={visibilityToggleIcon:function({reveal:e}){return(0,u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",style:{width:"var(--psi-icon-size)",height:"var(--psi-icon-size)"},children:e?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("path",{fill:"none",d:"M0 0h256v256H0z"}),(0,u.jsx)("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16",d:"M48 40l160 176M154.91 157.6a40 40 0 01-53.82-59.2M135.53 88.71a40 40 0 0132.3 35.53"}),(0,u.jsx)("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16",d:"M208.61 169.1C230.41 149.58 240 128 240 128s-32-72-112-72a126 126 0 00-20.68 1.68M74 68.6C33.23 89.24 16 128 16 128s32 72 112 72a118.05 118.05 0 0054-12.6"})]}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("path",{fill:"none",d:"M0 0h256v256H0z"}),(0,u.jsx)("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16",d:"M128 56c-80 0-112 72-112 72s32 72 112 72 112-72 112-72-32-72-112-72z"}),(0,u.jsx)("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})})},size:"sm"},f=(0,o.createVarsResolver)((e,{size:o})=>({root:{"--psi-icon-size":(0,t.getSize)(o,"psi-icon-size"),"--psi-button-size":(0,t.getSize)(o,"psi-button-size")}})),x=(0,l.factory)(e=>{let t=(0,n.useProps)(["Input","InputWrapper","PasswordInput"],b,e),{classNames:o,className:l,style:d,styles:x,unstyled:T,vars:v,required:y,error:S,success:C,leftSection:j,disabled:I,id:w,variant:A,inputContainer:M,description:D,label:E,size:N,errorProps:B,successProps:G,descriptionProps:P,labelProps:z,withAsterisk:H,inputWrapperOrder:k,wrapperProps:V,radius:F,rightSection:L,rightSectionWidth:Z,rightSectionPointerEvents:_,leftSectionWidth:O,visible:R,defaultVisible:W,onVisibilityChange:$,visibilityToggleIcon:q,visibilityToggleButtonProps:Y,rightSectionProps:Q,leftSectionProps:K,leftSectionPointerEvents:U,withErrorStyles:X,withSuccessStyles:J,mod:ee,attributes:et,dir:eo,...en}=t,er=(0,p.useId)(w),[ei,ea]=(0,h.useUncontrolled)({value:R,defaultValue:W,finalValue:!1,onChange:$}),el=(0,i.useStyles)({name:"PasswordInput",classes:m,props:t,className:l,style:d,classNames:o,styles:x,unstyled:T,attributes:et,vars:v,varsResolver:f}),{resolvedClassNames:es,resolvedStyles:ec}=(0,r.useResolvedStylesApi)({classNames:o,styles:x,props:t}),{styleProps:ed,rest:eu}=(0,a.extractStyleProps)(en),em=B?.id||`${er}-error`,ep=G?.id||`${er}-success`,eh=P?.id||`${er}-description`,eg=!!S&&"boolean"!=typeof S,eb=`${eg?em:""} ${C&&"boolean"!=typeof C&&!eg?ep:""} ${D?eh:""}`,ef=eb.trim().length>0?eb.trim():void 0,ex=(0,u.jsx)(s.ActionIcon,{...el("visibilityToggle"),disabled:I,radius:F,"aria-pressed":ei,tabIndex:-1,"aria-label":"Toggle password visibility",...Y,variant:Y?.variant??"subtle",color:"gray",unstyled:T,onTouchEnd:e=>{e.preventDefault(),Y?.onTouchEnd?.(e),ea(!ei)},onMouseDown:e=>{e.preventDefault(),Y?.onMouseDown?.(e),ea(!ei)},onKeyDown:e=>{Y?.onKeyDown?.(e)," "===e.key&&(e.preventDefault(),ea(!ei))},children:(0,u.jsx)(q,{reveal:ei})});return(0,u.jsx)(c.Input.Wrapper,{required:y,id:er,label:E,error:S,success:C,description:D,size:N,classNames:es,styles:ec,__staticSelector:"PasswordInput",__stylesApiProps:t,unstyled:T,withAsterisk:H,inputWrapperOrder:k,inputContainer:M,variant:A,labelProps:{...z,htmlFor:er},descriptionProps:{...P,id:eh},errorProps:{...B,id:em},successProps:{...G,id:ep},mod:ee,attributes:et,...el("root"),...ed,...V,children:(0,u.jsx)(c.Input,{component:"div",dir:eo,error:S,success:C,leftSection:j,size:N,classNames:{...es,input:(0,g.default)(m.input,es?.input)},styles:ec,radius:F,disabled:I,__staticSelector:"PasswordInput",__stylesApiProps:t,rightSectionWidth:Z,rightSection:L??ex,variant:A,unstyled:T,leftSectionWidth:O,rightSectionPointerEvents:_||"all",rightSectionProps:Q,leftSectionProps:K,leftSectionPointerEvents:U,withAria:!1,withErrorStyles:X,withSuccessStyles:J,attributes:et,children:(0,u.jsx)("input",{required:y,"data-invalid":!!S||void 0,"data-with-left-section":!!j||void 0,...el("innerInput"),disabled:I,id:er,dir:eo,...eu,"aria-describedby":ef,autoComplete:eu.autoComplete||"off",type:ei?"text":"password"})})})});x.classes={...d.InputBase.classes,...m},x.varsResolver=f,x.displayName="@mantine/core/PasswordInput",e.s(["PasswordInput",0,x],937389)},788350,e=>{"use strict";var t=e.i(44091),o=e.i(62904),n=e.i(391466),r=e.i(425254),i=e.i(275519),a=e.i(586488),l=e.i(205764),s=e.i(464224),c=e.i(734858),d=e.i(711976),u=e.i(212491),m=e.i(798270),p=e.i(122057),h=e.i(217633),g=e.i(463112);function b({splitChars:e,allowDuplicates:t,maxTags:o,value:n,currentTags:r,isDuplicate:i,onDuplicate:a}){let l=e?n.split(RegExp(`[${e.join("")}]`)).map(e=>e.trim()).filter(e=>""!==e):[n],s=[];if(t)s.push(...r,...l);else for(let e of(s.push(...r),l))(i?e=>i(e,s):e=>s.some(t=>t.toLowerCase()===e.toLowerCase()))(e)?a?.(e):s.push(e);return o?s.slice(0,o):s}var f=e.i(191788),x=e.i(107315),T=e.i(332977),v=e.i(579560),y=e.i(391398);let S={maxTags:1/0,acceptValueOnBlur:!0,splitChars:[","],hiddenInputValuesDivider:",",openOnFocus:!0,size:"sm"},C=(0,i.factory)(e=>{let i=(0,t.useProps)(["Input","InputWrapper","TagsInput"],S,e),{classNames:a,className:C,style:j,styles:I,unstyled:w,vars:A,size:M,value:D,defaultValue:E,onChange:N,onKeyDown:B,maxTags:G,allowDuplicates:P,onDuplicate:z,variant:H,data:k,dropdownOpened:V,defaultDropdownOpened:F,onDropdownOpen:L,onDropdownClose:Z,selectFirstOptionOnChange:_,selectFirstOptionOnDropdownOpen:O,onOptionSubmit:R,comboboxProps:W,filter:$,limit:q,withScrollArea:Y,maxDropdownHeight:Q,floatingHeight:K,searchValue:U,defaultSearchValue:X,onSearchChange:J,readOnly:ee,disabled:et,splitChars:eo,onFocus:en,onBlur:er,onPaste:ei,radius:ea,rightSection:el,rightSectionWidth:es,rightSectionPointerEvents:ec,rightSectionProps:ed,leftSection:eu,leftSectionWidth:em,leftSectionPointerEvents:ep,leftSectionProps:eh,inputContainer:eg,inputWrapperOrder:eb,withAsterisk:ef,required:ex,labelProps:eT,descriptionProps:ev,errorProps:ey,successProps:eS,wrapperProps:eC,description:ej,label:eI,error:ew,success:eA,withErrorStyles:eM,withSuccessStyles:eD,name:eE,form:eN,id:eB,clearable:eG,clearSectionMode:eP,clearButtonProps:ez,hiddenInputProps:eH,hiddenInputValuesDivider:ek,mod:eV,renderOption:eF,renderPill:eL,onRemove:eZ,onClear:e_,onMaxTags:eO,scrollAreaProps:eR,acceptValueOnBlur:eW,isDuplicate:e$,openOnFocus:eq,attributes:eY,ref:eQ,loading:eK,loadingPosition:eU,withPillsReorder:eX,...eJ}=i,e0=(0,x.useId)(eB),e1=(0,l.getParsedComboboxData)(k),e2=(0,s.getOptionsLockup)(e1),e8=(0,f.useRef)(null),e4=(0,T.useMergedRef)(e8,eQ),e6=(0,c.useCombobox)({opened:V,defaultOpened:F,onDropdownOpen:()=>{L?.(),O&&e6.selectFirstOption()},onDropdownClose:()=>{Z?.(),e6.resetSelectedOption()}}),{styleProps:e3,rest:{type:e5,autoComplete:e7,...e9}}=(0,r.extractStyleProps)(eJ),[te,tt]=(0,v.useUncontrolled)({value:D,defaultValue:E,finalValue:[],onChange:N}),{getPillProps:to,getListProps:tn,handleInputKeyDown:tr}=(0,m.usePillsReorder)({value:te,onChange:tt,enabled:eX&&!et&&!ee}),[ti,ta]=(0,v.useUncontrolled)({value:U,defaultValue:X,finalValue:"",onChange:J}),tl=e=>{ta(e),e6.resetSelectedOption()},ts=(0,n.useStyles)({name:"TagsInput",classes:{},props:i,classNames:a,styles:I,unstyled:w}),{resolvedClassNames:tc,resolvedStyles:td}=(0,o.useResolvedStylesApi)({props:i,styles:I,classNames:a}),tu=e=>{(e$?e$(e,te):te.some(t=>t.toLowerCase()===e.toLowerCase()))&&(z?.(e),!P)?tl(""):te.length>=G?eO?.(e):(R?.(e),tl(""),e.length>0&&tt([...te,e]))},tm=te.map((e,t)=>{let o=()=>{let o=te.slice();o.splice(t,1),tt(o),eZ?.(e)},n=to(t);return eL?(0,y.jsx)(f.Fragment,{children:eL({option:e2[e]||{value:e,label:e,disabled:!1},value:e,onRemove:o,disabled:et||ee,reorderProps:n})},`${e}-${t}`):(0,y.jsx)(p.Pill,{withRemoveButton:!ee,onRemove:o,unstyled:w,disabled:et,attributes:eY,...ts("pill"),...n,children:e},`${e}-${t}`)});(0,f.useEffect)(()=>{_&&e6.selectFirstOption()},[_,te,ti]);let tp=(0,y.jsx)(d.Combobox.ClearButton,{...ez,onClear:()=>{tt([]),tl(""),e8.current?.focus(),e6.openDropdown(),e_?.()}});return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(d.Combobox,{store:e6,classNames:tc,styles:td,unstyled:w,size:M,readOnly:ee,__staticSelector:"TagsInput",attributes:eY,floatingHeight:K,onOptionSubmit:e=>{R?.(e),tl(""),te.length>=G?eO?.(e):tt([...te,e2[e].value]),e6.resetSelectedOption()},...W,children:[(0,y.jsx)(d.Combobox.DropdownTarget,{children:(0,y.jsx)(h.PillsInput,{...e3,__staticSelector:"TagsInput",classNames:tc,styles:td,unstyled:w,size:M,className:C,style:j,variant:H,disabled:et,radius:ea,rightSection:el,__clearSection:tp,__clearable:eG&&te.length>0&&!et&&!ee,__clearSectionMode:eP,rightSectionWidth:es,rightSectionPointerEvents:ec,rightSectionProps:ed,leftSection:eu,leftSectionWidth:em,leftSectionPointerEvents:ep,leftSectionProps:eh,loading:eK,loadingPosition:eU,inputContainer:eg,inputWrapperOrder:eb,withAsterisk:ef,required:ex,labelProps:eT,descriptionProps:ev,errorProps:ey,successProps:eS,wrapperProps:eC,description:ej,label:eI,error:ew,success:eA,withErrorStyles:eM,withSuccessStyles:eD,__stylesApiProps:{...i,multiline:!0},id:e0,mod:eV,attributes:eY,children:(0,y.jsxs)(p.Pill.Group,{disabled:et,unstyled:w,...ts("pillsList"),...tn(),children:[tm,(0,y.jsx)(d.Combobox.EventsTarget,{autoComplete:e7,withExpandedAttribute:!0,children:(0,y.jsx)(h.PillsInput.Field,{...e9,ref:e4,...ts("inputField"),unstyled:w,onKeyDown:e=>{if(B?.(e),e.defaultPrevented||e.isPropagationStopped())return;let t=ti.trim(),{length:o}=t;if(eo.includes(e.key)&&o>0&&(tt(b({splitChars:eo,allowDuplicates:P,maxTags:G,value:ti,currentTags:te,isDuplicate:e$,onDuplicate:z})),tl(""),e.preventDefault()),"Enter"===e.key&&o>0&&!e.nativeEvent.isComposing){if(e.preventDefault(),document.querySelector(`#${e6.listId} [data-combobox-option][data-combobox-selected]`))return;tu(t)}"Backspace"!==e.key||0!==o||!(te.length>0)||e.nativeEvent.isComposing||ee||(eZ?.(te[te.length-1]),tt(te.slice(0,te.length-1))),tr(e)},onFocus:e=>{en?.(e),eq&&e6.openDropdown()},onBlur:e=>{er?.(e),eW&&tu(ti),e6.closeDropdown()},onPaste:e=>{ei?.(e),e.preventDefault(),e.clipboardData&&(tt(b({splitChars:eo,allowDuplicates:P,maxTags:G,value:`${ti}${e.clipboardData.getData("text/plain")}`,currentTags:te,isDuplicate:e$,onDuplicate:z})),tl(""))},value:ti,onChange:e=>tl(e.currentTarget.value),required:ex&&0===te.length,disabled:et,readOnly:ee,id:e0})})]})})}),(0,y.jsx)(u.OptionsDropdown,{data:function({data:e,value:t}){let o=t.map(e=>e.trim().toLowerCase());return e.reduce((e,t)=>((0,g.isOptionsGroup)(t)?e.push({group:t.group,items:t.items.filter(e=>-1===o.indexOf(e.label.toLowerCase().trim()))}):-1===o.indexOf(t.label.toLowerCase().trim())&&e.push(t),e),[])}({data:e1,value:te}),hidden:ee||et,filter:$,search:ti,limit:q,hiddenWhenEmpty:!0,withScrollArea:Y,maxDropdownHeight:Q,unstyled:w,labelId:eI?`${e0}-label`:void 0,"aria-label":eI?void 0:eJ["aria-label"],renderOption:eF,scrollAreaProps:eR})]}),(0,y.jsx)(d.Combobox.HiddenInput,{name:eE,form:eN,value:te,valuesDivider:ek,disabled:et,...eH})]})});C.classes={...a.InputBase.classes,...d.Combobox.classes},C.displayName="@mantine/core/TagsInput",e.s(["TagsInput",0,C],788350)},530514,e=>{"use strict";e.s(["createTheme",0,function(e){return e}])},169972,387136,e=>{"use strict";var t=e.i(191788),o=e.i(171481);let n=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M28,64A12,12,0,0,1,40,52H216a12,12,0,0,1,0,24H40A12,12,0,0,1,28,64Zm12,52H168a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24Zm176,16H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Zm-48,40H40a12,12,0,0,0,0,24H168a12,12,0,0,0,0-24Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,64V168a16,16,0,0,1-16,16H40V64Z",opacity:"0.2"}),t.createElement("path",{d:"M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64Zm8,48H168a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16Zm176,24H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm-48,40H40a8,8,0,0,0,0,16H168a8,8,0,0,0,0-16Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM160,184H64a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16Zm32-32H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16ZM56,112a8,8,0,0,1,8-8h96a8,8,0,0,1,0,16H64A8,8,0,0,1,56,112ZM192,88H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M34,64a6,6,0,0,1,6-6H216a6,6,0,0,1,0,12H40A6,6,0,0,1,34,64Zm6,46H168a6,6,0,0,0,0-12H40a6,6,0,0,0,0,12Zm176,28H40a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12Zm-48,40H40a6,6,0,0,0,0,12H168a6,6,0,0,0,0-12Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64Zm8,48H168a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16Zm176,24H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm-48,40H40a8,8,0,0,0,0,16H168a8,8,0,0,0,0-16Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M36,64a4,4,0,0,1,4-4H216a4,4,0,0,1,0,8H40A4,4,0,0,1,36,64Zm4,44H168a4,4,0,0,0,0-8H40a4,4,0,0,0,0,8Zm176,32H40a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8Zm-48,40H40a4,4,0,0,0,0,8H168a4,4,0,0,0,0-8Z"}))]]),r=t.forwardRef((e,r)=>t.createElement(o.default,{ref:r,...e,weights:n}));r.displayName="TextAlignLeftIcon",e.s(["TextAlignLeftIcon",0,r],169972);let i=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M28,64A12,12,0,0,1,40,52H216a12,12,0,0,1,0,24H40A12,12,0,0,1,28,64ZM216,92H88a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Zm0,40H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Zm0,40H88a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,64V184H56a16,16,0,0,1-16-16V64Z",opacity:"0.2"}),t.createElement("path",{d:"M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64ZM216,96H88a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm0,40H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm0,40H88a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM192,184H96a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16Zm0-32H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Zm0-32H96a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16Zm0-32H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M34,64a6,6,0,0,1,6-6H216a6,6,0,0,1,0,12H40A6,6,0,0,1,34,64ZM216,98H88a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12Zm0,40H40a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12Zm0,40H88a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64ZM216,96H88a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm0,40H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm0,40H88a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M36,64a4,4,0,0,1,4-4H216a4,4,0,0,1,0,8H40A4,4,0,0,1,36,64Zm180,36H88a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8Zm0,40H40a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8Zm0,40H88a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8Z"}))]]),a=t.forwardRef((e,n)=>t.createElement(o.default,{ref:n,...e,weights:i}));a.displayName="TextAlignRightIcon",e.s(["TextAlignRightIcon",0,a],387136)},938528,e=>{"use strict";var t=e.i(648863),o=e.i(232471),n=e.i(391398);let r={type:"code",component:function(){return(0,n.jsxs)(o.Box,{className:"m_3b7b8cc2",children:["Box component with ",(0,n.jsx)("span",{className:"m_b0c0466b",children:"some styles"})]})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { Box } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Box className={classes.box}>
      Box component with <span className={classes.highlight}>some styles</span>
    </Box>
  );
}
`},{fileName:"Demo.module.css",language:"scss",code:`
.box {
  font-size: var(--mantine-font-size-xl);
  text-align: center;
  font-weight: 600;
}

.highlight {
  padding: 4px 10px;
  display: inline-block;
  border-radius: var(--mantine-radius-md);
  background: var(--mantine-color-blue-light);
  color: var(--mantine-color-blue-light-color);
}
`}]};var i=e.i(725695);let a={type:"code",component:function(){return(0,n.jsxs)(i.Group,{children:[(0,n.jsx)("button",{type:"button",className:"mantine-focus-auto",children:"Focus auto"}),(0,n.jsx)("button",{type:"button",className:"mantine-focus-always",children:"Focus always"}),(0,n.jsx)("button",{type:"button",className:"mantine-focus-never",children:"Focus never"}),(0,n.jsx)("button",{type:"button",className:"mantine-active",children:"Active"})]})},code:`
import { Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <button type="button" className="mantine-focus-auto">
        Focus auto
      </button>
      <button type="button" className="mantine-focus-always">
        Focus always
      </button>
      <button type="button" className="mantine-focus-never">
        Focus never
      </button>
      <button type="button" className="mantine-active">
        Active
      </button>
    </Group>
  );
}
`},l={type:"code",component:function(){return(0,n.jsx)("div",{className:"m_f2874dbd",children:"Demo"})},code:[{fileName:"Demo.module.css",code:`
.demo {
  background-color: var(--mantine-color-blue-filled);
  color: var(--mantine-color-white);
  padding: var(--mantine-spacing-md);
  text-align: center;

  @media (min-width: em(750px)) {
    background-color: var(--mantine-color-red-filled);
  }
}
`,language:"scss"},{fileName:"Demo.tsx",code:`
import classes from './Demo.module.css';

function Demo() {
  return <div className={classes.demo}>Demo</div>;
}
`,language:"tsx"}]};var s=e.i(841209);let c={type:"code",component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.TextInput,{size:"xs",hiddenFrom:"sm",label:"My input",placeholder:"My input"}),(0,n.jsx)(s.TextInput,{size:"xl",visibleFrom:"sm",label:"My input",placeholder:"My input"})]})},code:[{fileName:"Demo.tsx",code:`
import { TextInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <TextInput size="xs" hiddenFrom="sm" label="My input" placeholder="My input" />
      <TextInput size="xl" visibleFrom="sm" label="My input" placeholder="My input" />
    </>
  );
}
`,language:"tsx"}]};var d=e.i(485108),u=e.i(431868),m=e.i(779177),p=e.i(839608);let h={type:"code",component:function(){return(0,n.jsx)(u.Tooltip,{label:(0,p.useMediaQuery)(`(max-width: ${(0,m.em)(750)})`)?"Mobile":"Desktop",children:(0,n.jsx)(d.Button,{children:"Hover me"})})},code:`
import { Tooltip, Button, em } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

function Demo() {
  const isMobile = useMediaQuery(\`(max-width: \${em(750)})\`);

  return (
    <Tooltip label={isMobile ? 'Mobile' : 'Desktop'}>
      <Button>Hover me</Button>
    </Tooltip>
  );
}
`};var g=e.i(191788);let b={type:"code",component:function(){let[e,t]=(0,g.useState)(""),[o,r]=(0,g.useState)(!1);return(0,n.jsx)(s.TextInput,{label:"Floating label input",labelProps:{"data-floating":o||e.length>0||void 0},classNames:{root:"m_bf550b40",input:"m_2acd192c",label:"m_2af14056"},onFocus:()=>r(!0),onBlur:()=>r(!1),value:e,onChange:e=>t(e.currentTarget.value)})},maxWidth:360,centered:!0,code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { useState } from 'react';
import { TextInput } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  const [value, setValue] = useState('');
  const [focused, setFocused] = useState(false);
  const floating = focused || value.length > 0 || undefined;

  return (
    <TextInput
      label="Floating label input"
      labelProps={{ 'data-floating': floating }}
      classNames={{
        root: classes.root,
        input: classes.input,
        label: classes.label,
      }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
    />
  );
}
`},{fileName:"Demo.module.css",language:"scss",code:`
.root {
  position: relative;
  margin-top: 5px;
}

.input {
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom-width: 2px;
  border-radius: 0;
  padding-left: 0;
  background-color: var(--mantine-color-body);
}

.label {
  position: absolute;
  z-index: 1;
  pointer-events: none;
  top: 7px;
  color: var(--mantine-color-placeholder);
  font-weight: 400;
  font-size: var(--mantine-font-size-sm);
  transition: color 100ms ease, transform 100ms ease, font-size 100ms ease;

  &[data-floating] {
    transform: translateY(-20px);
    font-size: var(--mantine-font-size-xs);
    color: var(--mantine-color-text);
  }
}
`}]},f={type:"code",component:function(){let e="linear-gradient(45deg, var(--mantine-color-pink-filled) 0%, var(--mantine-color-orange-filled) 50%, var(--mantine-color-yellow-filled) 100%)";return(0,n.jsx)(d.Button,{styles:{root:{padding:2,border:0,backgroundImage:e},inner:{background:"var(--mantine-color-body)",color:"var(--mantine-color-text)",borderRadius:"calc(var(--button-radius) - 2px)",paddingLeft:"var(--mantine-spacing-md)",paddingRight:"var(--mantine-spacing-md)"},label:{backgroundImage:e,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}},children:"Gradient button"})},centered:!0,code:`
import { Button } from '@mantine/core';

function Demo() {
  const gradient =
    'linear-gradient(45deg, var(--mantine-color-pink-filled) 0%, var(--mantine-color-orange-filled) 50%, var(--mantine-color-yellow-filled) 100%)';

  return (
    <Button
      styles={{
        root: {
          padding: 2,
          border: 0,
          backgroundImage: gradient,
        },

        inner: {
          background: 'var(--mantine-color-body)',
          color: 'var(--mantine-color-text)',
          borderRadius: 'calc(var(--button-radius) - 2px)',
          paddingLeft: 'var(--mantine-spacing-md)',
          paddingRight: 'var(--mantine-spacing-md)',
        },

        label: {
          backgroundImage: gradient,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        },
      }}
    >
      Gradient button
    </Button>
  );
}
`},x={type:"code",component:function(){return(0,n.jsx)(o.Box,{w:{base:200,sm:400,lg:500},py:{base:"xs",sm:"md",lg:"xl"},bg:{base:"blue.7",sm:"red.7",lg:"green.7"},c:"#fff",ta:"center",mx:"auto",children:"Box with responsive style props"})},code:`
import { Box } from '@mantine/core';

function Demo() {
  return (
    <Box
      w={{ base: 200, sm: 400, lg: 500 }}
      py={{ base: 'xs', sm: 'md', lg: 'xl' }}
      bg={{ base: 'blue.7', sm: 'red.7', lg: 'green.7' }}
      c="#fff"
      ta="center"
      mx="auto"
    >
      Box with responsive style props
    </Box>
  );
}
`};var T=e.i(169972),v=e.i(387136),y=e.i(658109),S=e.i(323283);let C={type:"code",component:function(){let{toggleDirection:e,dir:t,setDirection:o}=(0,S.useDirection)();return(0,g.useEffect)(()=>()=>o("ltr"),[]),(0,n.jsx)(y.ActionIcon,{onClick:()=>e(),variant:"default",size:"lg",children:"rtl"===t?(0,n.jsx)(T.TextAlignLeftIcon,{}):(0,n.jsx)(v.TextAlignRightIcon,{})})},centered:!0,code:`
import { ActionIcon, useDirection } from '@mantine/core';
import { TextAlignLeftIcon, TextAlignRightIcon } from '@phosphor-icons/react';

function Demo() {
  const { toggleDirection, dir } = useDirection();
  return (
    <ActionIcon onClick={() => toggleDirection()} variant="default" size="lg">
      {dir === 'rtl' ? (
        <TextAlignLeftIcon />
      ) : (
        <TextAlignRightIcon />
      )}
    </ActionIcon>
  );
}
`},j={type:"code",component:function(){return(0,n.jsx)("div",{className:"m_7bd29d5a",children:"Demo"})},code:[{fileName:"Demo.module.css",code:`
.demo {
  text-align: center;
  color: var(--mantine-color-white);
  padding: var(--mantine-spacing-md);

  /* LTR styles */
  background-color: var(--mantine-color-blue-filled);

  @mixin rtl {
    /* RTL styles override LTR styles */
    background-color: var(--mantine-color-red-filled);
  }
}
`,language:"scss"},{fileName:"Demo.tsx",code:`
import classes from './Demo.module.css';

function Demo() {
  return <div className={classes.demo}>Demo</div>;
}
`,language:"tsx"}]};var I={root:"m_8b35c16f",section:"m_27c75738"},w=e.i(858508);function A(e){return(0,n.jsx)(d.Button,{...e,classNames:I})}let M={type:"code",component:function(){return(0,n.jsxs)(i.Group,{children:[(0,n.jsx)(A,{leftSection:"12",rightSection:(0,n.jsx)(w.ArrowRightIcon,{size:18}),children:"Send files"}),(0,n.jsx)(A,{leftSection:"3",rightSection:(0,n.jsx)(w.ArrowRightIcon,{size:18}),disabled:!0,children:"Send files"})]})},centered:!0,code:[{fileName:"Demo.module.css",code:`
.root {
  border-top-left-radius: var(--mantine-radius-xl);
  border-bottom-left-radius: var(--mantine-radius-xl);
  padding-left: 4px;

  /* The following styles will be applied only when button is disabled */
  &[data-disabled] {
    /* You can use Mantine PostCSS mixins inside data attributes */
    @mixin light {
      border: 1px solid var(--mantine-color-gray-2);
    }

    @mixin dark {
      border: 1px solid var(--mantine-color-dark-4);
    }

    /* You can target child elements that are inside .root[data-disabled] */
    & .section[data-position='left'] {
      opacity: 0.6;
    }
  }
}

.section {
  /* Apply styles only to left section */
  &[data-position='left'] {
    --section-size: calc(var(--button-height) - 8px);

    background-color: var(--mantine-color-body);
    color: var(--mantine-color-text);
    height: var(--section-size);
    width: var(--section-size);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--mantine-radius-xl);
  }

  &[data-position='right'] {
    @mixin rtl {
      transform: rotate(180deg);
    }
  }
}
`,language:"scss"},{fileName:"Demo.tsx",code:`
import { Button, ButtonProps, Group } from '@mantine/core';
import { ArrowRightIcon } from '@phosphor-icons/react';
import classes from './Demo.module.css';

function SendFilesButton(props: ButtonProps & React.ComponentProps<'button'>) {
  return <Button {...props} classNames={classes} />;
}

function Demo() {
  return (
    <Group>
      <SendFilesButton
        leftSection="12"
        rightSection={<ArrowRightIcon size={18} />}
      >
        Send files
      </SendFilesButton>
      <SendFilesButton
        leftSection="3"
        rightSection={<ArrowRightIcon size={18} />}
        disabled
      >
        Send files
      </SendFilesButton>
    </Group>
  );
}
`,language:"tsx"}]};var D=e.i(383312);let E={type:"code",component:function(){return(0,n.jsxs)(D.Tabs,{defaultValue:"chat",unstyled:!0,children:[(0,n.jsxs)(D.Tabs.List,{children:[(0,n.jsx)(D.Tabs.Tab,{value:"chat",children:"Chat"}),(0,n.jsx)(D.Tabs.Tab,{value:"gallery",children:"Gallery"}),(0,n.jsx)(D.Tabs.Tab,{value:"account",children:"Account"})]}),(0,n.jsx)(D.Tabs.Panel,{value:"chat",children:"Chat panel"}),(0,n.jsx)(D.Tabs.Panel,{value:"gallery",children:"Gallery panel"}),(0,n.jsx)(D.Tabs.Panel,{value:"account",children:"Account panel"})]})},code:`
import { Tabs } from '@mantine/core';

function Demo() {
  return (
    <Tabs defaultValue="chat" unstyled>
      <Tabs.List>
        <Tabs.Tab value="chat">Chat</Tabs.Tab>
        <Tabs.Tab value="gallery">Gallery</Tabs.Tab>
        <Tabs.Tab value="account">Account</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="chat">Chat panel</Tabs.Panel>
      <Tabs.Panel value="gallery">Gallery panel</Tabs.Panel>
      <Tabs.Panel value="account">Account panel</Tabs.Panel>
    </Tabs>
  );
}
`},N=`
import { Button, PartialVarsResolver, ButtonFactory, Group } from '@mantine/core';

const varsResolver: PartialVarsResolver<ButtonFactory> = (theme, props) => {
  if (props.size === 'xxl') {
    return {
      root: {
        '--button-height': '60px',
        '--button-padding-x': '30px',
        '--button-fz': '24px',
      },
    };
  }

  if (props.size === 'xxs') {
    return {
      root: {
        '--button-height': '24px',
        '--button-padding-x': '10px',
        '--button-fz': '10px',
      },
    };
  }

  return { root: {} };
};

function Demo() {
  return (
    <Group>
      <Button vars={varsResolver} size="xxl">
        XXL Button
      </Button>
      <Button vars={varsResolver} size="xxs">
        XXS Button
      </Button>
    </Group>
  );
}
`,B=`
import { Button, Group, MantineProvider, createTheme } from '@mantine/core';

const theme = createTheme({
  components: {
    Button: Button.extend({
      vars: (theme, props) => {
        if (props.size === 'xxl') {
          return {
            root: {
              '--button-height': '60px',
              '--button-padding-x': '30px',
              '--button-fz': '24px',
            },
          };
        }

        if (props.size === 'xxs') {
          return {
            root: {
              '--button-height': '24px',
              '--button-padding-x': '10px',
              '--button-fz': '10px',
            },
          };
        }

        return { root: {} };
      },
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Group>
        <Button size="xxl">XXL Button</Button>
        <Button size="xxs">XXS Button</Button>
      </Group>
    </MantineProvider>
  );
}
`,G=(e,t)=>"xxl"===t.size?{root:{"--button-height":"60px","--button-padding-x":"30px","--button-fz":"24px"}}:"xxs"===t.size?{root:{"--button-height":"24px","--button-padding-x":"10px","--button-fz":"10px"}}:{root:{}};d.Button.extend({vars:(e,t)=>"xxl"===t.size?{root:{"--button-height":"60px","--button-padding-x":"30px","--button-fz":"24px"}}:"xxs"===t.size?{root:{"--button-height":"24px","--button-padding-x":"10px","--button-fz":"10px"}}:{root:{}}});let P={type:"code",component:function(){return(0,n.jsxs)(i.Group,{children:[(0,n.jsx)(d.Button,{vars:G,size:"xxl",children:"XXL Button"}),(0,n.jsx)(d.Button,{vars:G,size:"xxs",children:"XXS Button"})]})},centered:!0,code:[{code:B,language:"tsx",fileName:"MantineProvider.tsx"},{code:N,language:"tsx",fileName:"Inline.tsx"}]};var z={input:"m_93131372"},H=e.i(294788);let k={type:"code",component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(H.Input,{classNames:z,variant:"underline",placeholder:"Underline input"}),(0,n.jsx)(H.Input,{classNames:z,variant:"filled",placeholder:"Filled input",mt:"md"})]})},maxWidth:360,centered:!0,code:[{fileName:"Demo.tsx",code:`
import { Input, MantineProvider, createTheme } from '@mantine/core';
import classes from './Demo.module.css';

// It is better to add new variants in theme.components
// This way you will be able to use them in anywhere in the app
const theme = createTheme({
  components: {
    Input: Input.extend({ classNames: classes }),
  }
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Input variant="underline" placeholder="Underline input" />
      <Input variant="filled" placeholder="Filled input" mt="md" />
    </MantineProvider>
  );
}
`,language:"tsx"},{fileName:"Demo.module.css",code:`
.input {
  &[data-variant='underline'] {
    border-bottom: 2px solid;
    border-radius: 0;
    padding-left: 0;
    padding-right: 0;

    @mixin light {
      border-color: var(--mantine-color-gray-3);
    }

    @mixin dark {
      border-color: var(--mantine-color-dark-3);
    }

    &:focus {
      border-color: var(--mantine-color-blue-filled);
    }
  }
}
`,language:"scss"}]};var V=e.i(951254),F=e.i(530514);let L=`
import { Input, createTheme, MantineProvider } from '@mantine/core';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    Input: Input.extend({ classNames: classes }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Input placeholder="Size XXL" size="xxl" />
      <Input placeholder="Size XXS" size="xxs" mt="md" />
    </MantineProvider>
  );
}
`,Z=`
.wrapper {
  &[data-size='xxl'] {
    & .input {
      padding-left: 28px;
      padding-right: 28px;
      height: 68px;
      font-size: 28px;
    }
  }

  &[data-size='xxs'] {
    & .input {
      padding-left: 10px;
      padding-right: 10px;
      height: 28px;
      font-size: 10px;
    }
  }
}
`,_=(0,F.createTheme)({components:{Input:H.Input.extend({classNames:{wrapper:"m_b4c95450",input:"m_2be5f2c7"}})}}),O={type:"code",component:function(){return(0,n.jsxs)(V.MantineThemeProvider,{theme:_,children:[(0,n.jsx)(H.Input,{placeholder:"Size XXL",size:"xxl"}),(0,n.jsx)(H.Input,{placeholder:"Size XXS",size:"xxs",mt:"md"})]})},maxWidth:360,centered:!0,code:[{language:"tsx",code:L,fileName:"Demo.tsx"},{language:"scss",code:Z,fileName:"Demo.module.css"}]};var R=e.i(56206);let W=`
import cx from 'clsx';
import { MantineProvider, createTheme, TextInput } from '@mantine/core';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    TextInput: TextInput.extend({
      classNames: (_theme, props) => ({
        label: cx({ [classes.labelRequired]: props.required }),
        input: cx({ [classes.inputError]: props.error }),
      }),
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <TextInput required label="Required input" placeholder="Required input" />
      <TextInput error label="Input with error" placeholder="Input with error" mt="md" />
    </MantineProvider>
  );
}
`,$=`
.labelRequired {
  color: var(--mantine-color-red-filled);
}

.inputError {
  background-color: var(--mantine-color-red-light);
}
`,q=(0,F.createTheme)({components:{TextInput:s.TextInput.extend({classNames:(e,t)=>({label:(0,R.default)({m_686577e7:t.required}),input:(0,R.default)({m_933d67aa:t.error})})})}}),Y={type:"code",component:function(){return(0,n.jsxs)(V.MantineThemeProvider,{theme:q,children:[(0,n.jsx)(s.TextInput,{required:!0,label:"Required input",placeholder:"Required input"}),(0,n.jsx)(s.TextInput,{error:!0,label:"Input with error",placeholder:"Input with error",mt:"md"})]})},code:[{fileName:"Demo.tsx",code:W,language:"tsx"},{fileName:"Demo.module.css",code:$,language:"scss"}]};var Q=e.i(60695);let K={type:"code",component:function(){return(0,g.useEffect)(()=>()=>{document.documentElement.style.fontSize="100%"},[]),(0,n.jsx)(Q.Slider,{defaultValue:100,min:70,max:130,onChange:e=>{document.documentElement.style.fontSize=`${e}%`}})},maxWidth:340,centered:!0,code:`
import { Slider } from '@mantine/core';

function Demo() {
  return (
    <Slider
      defaultValue={100}
      min={70}
      max={130}
      onChange={(value) => {
        document.documentElement.style.fontSize = \`\${value}%\`;
      }}
    />
  );
}
`},U={type:"code",component:function(){return(0,n.jsxs)(i.Group,{justify:"center",children:[(0,n.jsx)(d.Button,{hiddenFrom:"sm",color:"orange",children:"Hidden from sm"}),(0,n.jsx)(d.Button,{visibleFrom:"sm",color:"cyan",children:"Visible from sm"}),(0,n.jsx)(d.Button,{visibleFrom:"md",color:"pink",children:"Visible from md"})]})},code:`
import { Button, Group } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <Button hiddenFrom="sm" color="orange">
        Hidden from sm
      </Button>
      <Button visibleFrom="sm" color="cyan">
        Visible from sm
      </Button>
      <Button visibleFrom="md" color="pink">
        Visible from md
      </Button>
    </Group>
  );
}
`},X={type:"code",centered:!0,component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.Button,{color:"cyan",lightHidden:!0,children:"Visible in dark color scheme only"}),(0,n.jsx)(d.Button,{color:"pink",darkHidden:!0,children:"Visible in light color scheme only"})]})},code:`
import { Button } from '@mantine/core';

function Demo() {
  return (
    <>
      <Button color="cyan" lightHidden>
        Visible in dark color scheme only
      </Button>

      <Button color="pink" darkHidden>
        Visible in light color scheme only
      </Button>
    </>
  );
}
`},J={type:"code",component:function(){return(0,n.jsx)("div",{className:"m_cd12fd1e",children:(0,n.jsx)("div",{className:"m_d4760060",children:"Resize parent element to see container query in action"})})},code:[{code:`.root {
  min-width: 200px;
  max-width: 100%;
  min-height: 120px;
  container-type: inline-size;
  overflow: auto;
  resize: horizontal;
}

.child {
  background-color: var(--mantine-color-dimmed);
  color: var(--mantine-color-white);
  padding: var(--mantine-spacing-md);

  @container (max-width: 500px) {
    background-color: var(--mantine-color-blue-filled);
  }

  @container (max-width: 300px) {
    background-color: var(--mantine-color-red-filled);
  }
}`,language:"scss",fileName:"Demo.module.css"},{code:`
import classes from './Demo.module.css';

function Demo() {
  return (
    <div className={classes.root}>
      <div className={classes.child}>Resize parent element to see container query in action</div>
    </div>
  );
}
`,language:"tsx",fileName:"Demo.tsx"}]},ee=["xs","sm","md","lg","xl"],et={type:"code",component:function(){return(0,n.jsx)(o.Box,{bg:function(e){let t=(0,V.useMantineTheme)();var o=ee[[(0,p.useMediaQuery)(`(min-width: ${t.breakpoints.xs})`,!1,void 0),(0,p.useMediaQuery)(`(min-width: ${t.breakpoints.sm})`,!1,void 0),(0,p.useMediaQuery)(`(min-width: ${t.breakpoints.md})`,!1,void 0),(0,p.useMediaQuery)(`(min-width: ${t.breakpoints.lg})`,!1,void 0),(0,p.useMediaQuery)(`(min-width: ${t.breakpoints.xl})`,!1,void 0)].findLastIndex(e=>e)];if(!o)return e.base;let n=ee.indexOf(o);for(;n>=0;){if(ee[n]in e)return e[ee[n]];n-=1}return e.base}({base:"blue.9",sm:"orange.9",lg:"red.9"}),c:"white",p:"xl",children:"Box with color that changes based on screen size"})},code:`
import { Box, useMatches } from '@mantine/core';

function Demo() {
  const color = useMatches({
    base: 'blue.9',
    sm: 'orange.9',
    lg: 'red.9',
  });

  return (
    <Box bg={color} c="white" p="xl">
      Box with color that changes based on screen size
    </Box>
  );
}
`};var eo=(0,t.__exportAll)({className:()=>r,classNames:()=>b,classNamesProps:()=>Y,containers:()=>J,customVariant:()=>k,dataAttributes:()=>M,dataSize:()=>O,directionControl:()=>C,globalClasses:()=>a,hiddenVisible:()=>U,lightDarkHidden:()=>X,remSlider:()=>K,responsive:()=>l,responsiveStyleProps:()=>x,rtlMixin:()=>j,sizesMedia:()=>c,styles:()=>f,unstyled:()=>E,useMatchesHook:()=>et,useMediaQueryHook:()=>h,vars:()=>P});e.s(["StylesDemos",0,eo],938528)},719834,e=>{"use strict";var t=e.i(191788),o=e.i(171481);let n=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M232.49,215.51,185,168a92.12,92.12,0,1,0-17,17l47.53,47.54a12,12,0,0,0,17-17ZM44,112a68,68,0,1,1,68,68A68.07,68.07,0,0,1,44,112Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M192,112a80,80,0,1,1-80-80A80,80,0,0,1,192,112Z",opacity:"0.2"}),t.createElement("path",{d:"M229.66,218.34,179.6,168.28a88.21,88.21,0,1,0-11.32,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M168,112a56,56,0,1,1-56-56A56,56,0,0,1,168,112Zm61.66,117.66a8,8,0,0,1-11.32,0l-50.06-50.07a88,88,0,1,1,11.32-11.31l50.06,50.06A8,8,0,0,1,229.66,229.66ZM112,184a72,72,0,1,0-72-72A72.08,72.08,0,0,0,112,184Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M228.24,219.76l-51.38-51.38a86.15,86.15,0,1,0-8.48,8.48l51.38,51.38a6,6,0,0,0,8.48-8.48ZM38,112a74,74,0,1,1,74,74A74.09,74.09,0,0,1,38,112Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M226.83,221.17l-52.7-52.7a84.1,84.1,0,1,0-5.66,5.66l52.7,52.7a4,4,0,0,0,5.66-5.66ZM36,112a76,76,0,1,1,76,76A76.08,76.08,0,0,1,36,112Z"}))]]),r=t.forwardRef((e,r)=>t.createElement(o.default,{ref:r,...e,weights:n}));r.displayName="MagnifyingGlassIcon",e.s(["MagnifyingGlassIcon",0,r],719834)},462138,e=>{"use strict";var t=e.i(779177),o=e.i(391398);function n({style:e,size:r=16,...i}){return(0,o.jsx)("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{...e,width:(0,t.rem)(r),height:(0,t.rem)(r),display:"block"},...i,children:(0,o.jsx)("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}n.displayName="@mantine/core/AccordionChevron",e.s(["AccordionChevron",0,n])},541772,e=>{"use strict";var t=e.i(191788);e.s(["useDisclosure",0,function(e=!1,o={}){let[n,r]=(0,t.useState)(e),i=(0,t.useCallback)(()=>{r(e=>e||(o.onOpen?.(),!0))},[o.onOpen]),a=(0,t.useCallback)(()=>{r(e=>e?(o.onClose?.(),!1):e)},[o.onClose]);return[n,{open:i,close:a,toggle:(0,t.useCallback)(()=>{n?a():i()},[a,i,n]),set:r}]}])},477777,430731,637245,225147,811590,426611,32044,446817,e=>{"use strict";var t=e.i(232471);let[o,n]=(0,e.i(386179).createSafeContext)("ModalBase component was not found in tree");var r=e.i(191788),i=e.i(56206),a=e.i(391398);function l({className:e,...o}){let s,c=(s=n(),(0,r.useEffect)(()=>(s.setBodyMounted(!0),()=>s.setBodyMounted(!1)),[]),s.getBodyId()),d=n();return(0,a.jsx)(t.Box,{id:c,className:(0,i.default)({m_5df29311:!d.unstyled},e),...o})}l.displayName="@mantine/core/ModalBaseBody",e.s(["ModalBaseBody",0,l],477777);var s=e.i(802046);function c({className:e,onClick:t,...o}){let r=n();return(0,a.jsx)(s.CloseButton,{...o,onClick:e=>{r.onClose(),t?.(e)},className:(0,i.default)({m_606cb269:!r.unstyled},e),unstyled:r.unstyled})}c.displayName="@mantine/core/ModalBaseCloseButton",e.s(["ModalBaseCloseButton",0,c],430731);var d=e.i(470743),u=e.i(34515),m=e.i(22630);function p({transitionProps:e,className:t,innerProps:o,onKeyDown:r,style:l,ref:s,...c}){let h=n();return(0,a.jsx)(u.Transition,{mounted:h.opened,transition:"pop",...h.transitionProps,onExited:()=>{h.onExitTransitionEnd?.(),h.transitionProps?.onExited?.()},onEntered:()=>{h.onEnterTransitionEnd?.(),h.transitionProps?.onEntered?.()},...e,children:e=>(0,a.jsx)("div",{...o,className:(0,i.default)({m_60c222c7:!h.unstyled},o.className),children:(0,a.jsx)(m.FocusTrap,{active:h.opened&&h.trapFocus,innerRef:s,children:(0,a.jsx)(d.Paper,{...c,component:"section",role:"dialog",tabIndex:-1,"aria-modal":!0,"aria-describedby":h.bodyMounted?h.getBodyId():void 0,"aria-labelledby":h.titleMounted?h.getTitleId():void 0,style:[l,e],className:(0,i.default)({m_fd1ab0aa:!h.unstyled},t),unstyled:h.unstyled,children:c.children})})})})}function h({className:e,...o}){let r=n();return(0,a.jsx)(t.Box,{component:"header",className:(0,i.default)({m_b5489c3c:!r.unstyled},e),...o})}p.displayName="@mantine/core/ModalBaseContent",e.s(["ModalBaseContent",0,p],637245),e.s(["NativeScrollArea",0,function({children:e}){return(0,a.jsx)(a.Fragment,{children:e})}],225147),h.displayName="@mantine/core/ModalBaseHeader",e.s(["ModalBaseHeader",0,h],811590);var g=e.i(476273);let b={duration:200,timingFunction:"ease",transition:"fade"};function f({onClick:e,transitionProps:t,style:o,visible:r,...i}){let l,s=n(),c=(l=n(),{...b,...l.transitionProps,...t});return(0,a.jsx)(u.Transition,{mounted:void 0!==r?r:s.opened,...c,transition:"fade",children:t=>(0,a.jsx)(g.Overlay,{fixed:!0,style:[o,t],zIndex:s.zIndex,unstyled:s.unstyled,onClick:t=>{e?.(t),s.closeOnClickOutside&&s.onClose()},...i})})}f.displayName="@mantine/core/ModalBaseOverlay",e.s(["ModalBaseOverlay",0,f],426611);var x=e.i(749218),T=e.i(433512),v=e.i(164483),y=e.i(779861),S=e.i(484108),C=e.i(107315),j=e.i(133613),I=e.i(865823);function w({keepMounted:e,opened:n,onClose:i,id:l,transitionProps:s,onExitTransitionEnd:c,onEnterTransitionEnd:d,trapFocus:u,closeOnEscape:m,returnFocus:p,closeOnClickOutside:h,withinPortal:g,portalProps:b,lockScroll:f,children:A,zIndex:M,shadow:D,padding:E,__vars:N,unstyled:B,removeScrollProps:G,...P}){let{_id:z,titleMounted:H,bodyMounted:k,shouldLockScroll:V,setTitleMounted:F,setBodyMounted:L}=function({id:e,transitionProps:t,opened:o,trapFocus:n,closeOnEscape:i,onClose:a,returnFocus:l}){let s=(0,C.useId)(e),[c,d]=(0,r.useState)(!1),[u,m]=(0,r.useState)(!1),p=function({opened:e,transitionDuration:t}){let[o,n]=(0,r.useState)(e),i=(0,r.useRef)(-1),a=(0,y.useReducedMotion)()?0:t;return(0,r.useEffect)(()=>(e?(n(!0),window.clearTimeout(i.current)):0===a?n(!1):i.current=window.setTimeout(()=>n(!1),a),()=>window.clearTimeout(i.current)),[e,a]),o}({opened:o,transitionDuration:"number"==typeof t?.duration?t?.duration:200});return(0,j.useWindowEvent)("keydown",e=>{"Escape"===e.key&&i&&!e.isComposing&&o&&e.target?.getAttribute("data-mantine-stop-propagation")!=="true"&&a()},{capture:!0}),(0,S.useFocusReturn)({opened:o,shouldReturnFocus:n&&l}),{_id:s,titleMounted:c,bodyMounted:u,shouldLockScroll:p,setTitleMounted:d,setBodyMounted:m}}({id:l,transitionProps:s,opened:n,trapFocus:u,closeOnEscape:m,onClose:i,returnFocus:p}),{key:Z,..._}=G||{};return(0,a.jsx)(v.OptionalPortal,{...b,withinPortal:g,children:(0,a.jsx)(o,{value:{opened:n,onClose:i,closeOnClickOutside:h,onExitTransitionEnd:c,onEnterTransitionEnd:d,transitionProps:{...s,keepMounted:e},getTitleId:()=>`${z}-title`,getBodyId:()=>`${z}-body`,titleMounted:H,bodyMounted:k,setTitleMounted:F,setBodyMounted:L,trapFocus:u,closeOnEscape:m,zIndex:M,unstyled:B},children:(0,a.jsx)(I.RemoveScroll,{enabled:V&&f,..._,children:(0,a.jsx)(t.Box,{...P,id:z,__vars:{...N,"--mb-z-index":(M||(0,x.getDefaultZIndex)("modal")).toString(),"--mb-shadow":(0,T.getShadow)(D),"--mb-padding":(0,T.getSpacing)(E)},children:A})},Z)})})}function A({className:e,...o}){let l,s=(l=n(),(0,r.useEffect)(()=>(l.setTitleMounted(!0),()=>l.setTitleMounted(!1)),[]),l.getTitleId()),c=n();return(0,a.jsx)(t.Box,{component:"h2",className:(0,i.default)({m_615af6c9:!c.unstyled},e),id:s,...o})}w.displayName="@mantine/core/ModalBase",e.s(["ModalBase",0,w],32044),A.displayName="@mantine/core/ModalBaseTitle",e.s(["ModalBaseTitle",0,A],446817)},424302,e=>{"use strict";var t=e.i(749218),o=e.i(44091),n=e.i(275519),r={root:"m_9df02822",content:"m_54c44539",inner:"m_1f958f16",header:"m_d0e2b9cd"},i=e.i(477777);let[a,l]=(0,e.i(386179).createSafeContext)("Modal component was not found in tree");var s=e.i(391398);let c=(0,n.factory)(e=>{let{classNames:t,className:n,style:r,styles:a,vars:c,...d}=(0,o.useProps)("ModalBody",null,e);return(0,s.jsx)(i.ModalBaseBody,{...l().getStyles("body",{classNames:t,style:r,styles:a,className:n}),...d})});c.classes=r,c.displayName="@mantine/core/ModalBody";var d=e.i(430731);let u=(0,n.factory)(e=>{let{classNames:t,className:n,style:r,styles:i,vars:a,...c}=(0,o.useProps)("ModalCloseButton",null,e);return(0,s.jsx)(d.ModalBaseCloseButton,{...l().getStyles("close",{classNames:t,style:r,styles:i,className:n}),...c})});u.classes=r,u.displayName="@mantine/core/ModalCloseButton";var m=e.i(779177),p=e.i(637245),h=e.i(225147);let g=(0,n.factory)(e=>{let{classNames:t,className:n,style:r,styles:i,vars:a,children:c,__hidden:d,...u}=(0,o.useProps)("ModalContent",null,e),g=l(),b=g.scrollAreaComponent||h.NativeScrollArea;return(0,s.jsx)(p.ModalBaseContent,{...g.getStyles("content",{className:n,style:r,styles:i,classNames:t}),innerProps:g.getStyles("inner",{className:n,style:r,styles:i,classNames:t}),"data-full-screen":g.fullScreen||void 0,"data-modal-content":!0,"data-hidden":d||void 0,...u,children:(0,s.jsx)(b,{style:{maxHeight:g.fullScreen?"100dvh":`calc(100dvh - (${(0,m.rem)(g.yOffset)} * 2))`},children:c})})});g.classes=r,g.displayName="@mantine/core/ModalContent";var b=e.i(811590);let f=(0,n.factory)(e=>{let{classNames:t,className:n,style:r,styles:i,vars:a,...c}=(0,o.useProps)("ModalHeader",null,e);return(0,s.jsx)(b.ModalBaseHeader,{...l().getStyles("header",{classNames:t,style:r,styles:i,className:n}),...c})});f.classes=r,f.displayName="@mantine/core/ModalHeader";var x=e.i(426611);let T=(0,n.factory)(e=>{let{classNames:t,className:n,style:r,styles:i,vars:a,...c}=(0,o.useProps)("ModalOverlay",null,e);return(0,s.jsx)(x.ModalBaseOverlay,{...l().getStyles("overlay",{classNames:t,style:r,styles:i,className:n}),...c})});T.classes=r,T.displayName="@mantine/core/ModalOverlay";var v=e.i(433512),y=e.i(481178),S=e.i(391466),C=e.i(19300),j=e.i(32044);let I={__staticSelector:"Modal",closeOnClickOutside:!0,withinPortal:!0,lockScroll:!0,trapFocus:!0,returnFocus:!0,closeOnEscape:!0,keepMounted:!1,zIndex:(0,t.getDefaultZIndex)("modal"),transitionProps:{duration:200,transition:"fade-down"},yOffset:"5dvh"},w=(0,y.createVarsResolver)((e,{radius:t,size:o,yOffset:n,xOffset:r})=>({root:{"--modal-radius":void 0===t?void 0:(0,v.getRadius)(t),"--modal-size":(0,v.getSize)(o,"modal-size"),"--modal-y-offset":(0,m.rem)(n),"--modal-x-offset":(0,m.rem)(r)}})),A=(0,n.factory)(e=>{let t=(0,o.useProps)("ModalRoot",I,e),{classNames:n,className:i,style:l,styles:c,unstyled:d,vars:u,yOffset:m,scrollAreaComponent:p,radius:h,fullScreen:g,centered:b,xOffset:f,__staticSelector:x,attributes:T,...v}=t,y=(0,S.useStyles)({name:x,classes:r,props:t,className:i,style:l,classNames:n,styles:c,unstyled:d,attributes:T,vars:u,varsResolver:w});return(0,s.jsx)(a,{value:{yOffset:m,scrollAreaComponent:p,getStyles:y,fullScreen:g},children:(0,s.jsx)(j.ModalBase,{...y("root"),"data-full-screen":g||void 0,"data-centered":b||void 0,"data-offset-scrollbars":p===C.ScrollArea.Autosize||void 0,unstyled:d,...v})})});A.classes=r,A.varsResolver=w,A.displayName="@mantine/core/ModalRoot";var M=e.i(191788);let D=(0,M.createContext)(null);function E({children:e}){let[o,n]=(0,M.useState)([]),[r,i]=(0,M.useState)((0,t.getDefaultZIndex)("modal"));return(0,s.jsx)(D,{value:{stack:o,addModal:(e,t)=>{n(t=>[...new Set([...t,e])]),i(e=>"number"==typeof t&&"number"==typeof e?Math.max(e,t):e)},removeModal:e=>n(t=>t.filter(t=>t!==e)),getZIndex:e=>`calc(${r} + ${o.indexOf(e)} + 1)`,currentId:o[o.length-1],maxZIndex:r},children:e})}E.displayName="@mantine/core/ModalStack";var N=e.i(446817);let B=(0,n.factory)(e=>{let{classNames:t,className:n,style:r,styles:i,vars:a,...c}=(0,o.useProps)("ModalTitle",null,e);return(0,s.jsx)(N.ModalBaseTitle,{...l().getStyles("title",{classNames:t,style:r,styles:i,className:n}),...c})});B.classes=r,B.displayName="@mantine/core/ModalTitle";let G={closeOnClickOutside:!0,withinPortal:!0,lockScroll:!0,trapFocus:!0,returnFocus:!0,closeOnEscape:!0,keepMounted:!1,zIndex:(0,t.getDefaultZIndex)("modal"),transitionProps:{duration:200,transition:"fade-down"},withOverlay:!0,withCloseButton:!0},P=(0,n.factory)(e=>{let{title:n,withOverlay:r,overlayProps:i,withCloseButton:a,closeButtonProps:l,children:d,radius:m,opened:p,stackId:h,zIndex:b,...x}=(0,o.useProps)("Modal",G,e),v=(0,M.use)(D),y=!!n||a,S=v&&h?{closeOnEscape:v.currentId===h,trapFocus:v.currentId===h,zIndex:v.getZIndex(h)}:{},C=!1!==r&&(h&&v?v.currentId===h:p);return(0,M.useEffect)(()=>{v&&h&&(p?v.addModal(h,b||(0,t.getDefaultZIndex)("modal")):v.removeModal(h))},[p,h,b]),(0,s.jsxs)(A,{radius:m,opened:p,zIndex:v&&h?v.getZIndex(h):b,...x,...S,children:[r&&(0,s.jsx)(T,{visible:C,transitionProps:v&&h?{duration:0}:void 0,...i}),(0,s.jsxs)(g,{radius:m,__hidden:!!v&&!!h&&!!p&&h!==v.currentId,children:[y&&(0,s.jsxs)(f,{children:[n&&(0,s.jsx)(B,{children:n}),a&&(0,s.jsx)(u,{...l})]}),(0,s.jsx)(c,{children:d})]})]})});P.classes=r,P.displayName="@mantine/core/Modal",P.Root=A,P.Overlay=T,P.Content=g,P.Body=c,P.Header=f,P.Title=B,P.CloseButton=u,P.Stack=E,e.s(["Modal",0,P],424302)},20035,e=>{"use strict";var t=e.i(481178),o=e.i(44091),n=e.i(391466),r=e.i(83353),i=e.i(275519),a=e.i(232471);let[l,s]=(0,e.i(386179).createSafeContext)("Grid component was not found in tree");var c={container:"m_8478a6da",root:"m_410352e9",inner:"m_dee7bd2f",col:"m_96bdd299"},d=e.i(76112),u=e.i(931718),m=e.i(230780),p=e.i(496766),h=e.i(951254),g=e.i(871346),b=e.i(391398);let f=(e,t)=>"content"===e?"auto":"auto"===e?"0rem":e?e===t?"100%":`calc(${100*e/t}% - ${(t-e)/t} * var(--grid-column-gap))`:void 0,x=(e,t,o)=>o||"auto"===e?"100%":"content"===e?"unset":f(e,t),T=(e,t)=>{if(e)return"auto"===e||t?"1":"auto"},v=(e,t)=>0===e?"0":e?`calc(${100*e/t}% + ${e/t} * var(--grid-column-gap))`:void 0;function y({span:e,order:t,offset:o,align:n,selector:r}){let i=(0,h.useMantineTheme)(),a=s(),l=a.breakpoints||i.breakpoints,c=(0,p.getBaseValue)(e),S=void 0===c?12:c,C=(0,u.filterProps)({"--col-order":(0,p.getBaseValue)(t)?.toString(),"--col-flex-grow":T(S,a.grow),"--col-flex-basis":f(S,a.columns),"--col-width":"content"===S?"auto":void 0,"--col-max-width":x(S,a.columns,a.grow),"--col-offset":v((0,p.getBaseValue)(o),a.columns),"--col-align-self":(0,p.getBaseValue)(n)}),j=(0,d.keys)(l).reduce((r,i)=>(r[i]||(r[i]={}),"object"==typeof t&&void 0!==t[i]&&(r[i]["--col-order"]=t[i]?.toString()),"object"==typeof e&&void 0!==e[i]&&(r[i]["--col-flex-grow"]=T(e[i],a.grow),r[i]["--col-flex-basis"]=f(e[i],a.columns),r[i]["--col-width"]="content"===e[i]?"auto":void 0,r[i]["--col-max-width"]=x(e[i],a.columns,a.grow)),"object"==typeof o&&void 0!==o[i]&&(r[i]["--col-offset"]=v(o[i],a.columns)),"object"==typeof n&&void 0!==n[i]&&(r[i]["--col-align-self"]=n[i]),r),{}),I=(0,m.getSortedBreakpoints)((0,d.keys)(j),l).filter(e=>(0,d.keys)(j[e.value]).length>0).map(e=>({query:"container"===a.type?`mantine-grid (min-width: ${l[e.value]})`:`(min-width: ${l[e.value]})`,styles:j[e.value]}));return(0,b.jsx)(g.InlineStyles,{styles:C,media:"container"===a.type?void 0:I,container:"container"===a.type?I:void 0,selector:r})}var S=e.i(56206);let C={span:12},j=(0,i.factory)(e=>{let{classNames:t,className:n,style:i,styles:l,vars:c,span:d,order:u,offset:m,align:p,...h}=(0,o.useProps)("GridCol",C,e),g=s(),f=(0,r.useRandomClassName)();return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(y,{selector:`.${f}`,span:d,order:u,offset:m,align:p}),(0,b.jsx)(a.Box,{...g.getStyles("col",{className:(0,S.default)(n,f),style:i,classNames:t,styles:l}),...h})]})});j.classes=c,j.displayName="@mantine/core/GridCol";var I=e.i(433512);function w({gap:e,rowGap:t,columnGap:o,selector:n,breakpoints:r,type:i}){let a=(0,h.useMantineTheme)(),l=r||a.breakpoints,s=(0,u.filterProps)({"--grid-gap":(0,I.getSpacing)((0,p.getBaseValue)(e)),"--grid-row-gap":(0,I.getSpacing)((0,p.getBaseValue)(t)),"--grid-column-gap":(0,I.getSpacing)((0,p.getBaseValue)(o))}),c=(0,d.keys)(l).reduce((n,r)=>(n[r]||(n[r]={}),"object"==typeof e&&void 0!==e[r]&&(n[r]["--grid-gap"]=(0,I.getSpacing)(e[r])),"object"==typeof t&&void 0!==t[r]&&(n[r]["--grid-row-gap"]=(0,I.getSpacing)(t[r])),"object"==typeof o&&void 0!==o[r]&&(n[r]["--grid-column-gap"]=(0,I.getSpacing)(o[r])),n),{}),f=(0,m.getSortedBreakpoints)((0,d.keys)(c),l).filter(e=>(0,d.keys)(c[e.value]).length>0).map(e=>({query:"container"===i?`mantine-grid (min-width: ${l[e.value]})`:`(min-width: ${l[e.value]})`,styles:c[e.value]}));return(0,b.jsx)(g.InlineStyles,{styles:s,media:"container"===i?void 0:f,container:"container"===i?f:void 0,selector:n})}let A={gap:"md",columns:12},M=(0,t.createVarsResolver)((e,{justify:t,align:o,overflow:n})=>({root:{"--grid-justify":t,"--grid-align":o,"--grid-overflow":n}})),D=(0,i.factory)(e=>{let t=(0,o.useProps)("Grid",A,e),{classNames:i,className:s,style:d,styles:u,unstyled:m,vars:p,grow:h,gap:g,rowGap:f,columnGap:x,columns:T,align:v,justify:y,children:S,breakpoints:C,type:j,attributes:I,...D}=t,E=(0,n.useStyles)({name:"Grid",classes:c,props:t,className:s,style:d,classNames:i,styles:u,unstyled:m,attributes:I,vars:p,varsResolver:M}),N=(0,r.useRandomClassName)();return"container"===j&&C?(0,b.jsxs)(l,{value:{getStyles:E,grow:h,columns:T,breakpoints:C,type:j},children:[(0,b.jsx)(w,{selector:`.${N}`,...t}),(0,b.jsx)("div",{...E("container"),children:(0,b.jsx)(a.Box,{...E("root",{className:N}),...D,children:(0,b.jsx)("div",{...E("inner"),children:S})})})]}):(0,b.jsxs)(l,{value:{getStyles:E,grow:h,columns:T,breakpoints:C,type:j},children:[(0,b.jsx)(w,{selector:`.${N}`,...t}),(0,b.jsx)(a.Box,{...E("root",{className:N}),...D,children:(0,b.jsx)("div",{...E("inner"),children:S})})]})});D.classes=c,D.varsResolver=M,D.displayName="@mantine/core/Grid",D.Col=j,e.s(["Grid",0,D],20035)},463044,e=>{"use strict";let t;var o=e.i(191788),n=e.i(730943);function r(e,t,o){let n,r=o.initialDeps??[],i=!0;function a(){let a=e();return(a.length!==r.length||a.some((e,t)=>r[t]!==e))&&(r=a,n=t(...a),(null==o?void 0:o.onChange)&&!(i&&o.skipInitialOnChange)&&o.onChange(n),i=!1),n}return a.updateDeps=e=>{r=e},a}function i(e,t){if(void 0!==e)return e;throw Error(`Unexpected undefined${t?`: ${t}`:""}`)}e.i(350461);let a=()=>{if(void 0!==t)return t;if("u"<typeof navigator)return t=!1;if(/iP(hone|od|ad)/.test(navigator.userAgent))return t=!0;let e=navigator.maxTouchPoints;return t="MacIntel"===navigator.platform&&void 0!==e&&e>0},l=e=>{let{offsetWidth:t,offsetHeight:o}=e;return{width:t,height:o}},s=e=>e,c=e=>{let t=Math.max(e.startIndex-e.overscan,0),o=Math.min(e.endIndex+e.overscan,e.count-1)-t+1,n=Array(o);for(let e=0;e<o;e++)n[e]=t+e;return n},d=(e,t)=>{let o=e.scrollElement;if(!o)return;let n=e.targetWindow;if(!n)return;let r=e=>{let{width:o,height:n}=e;t({width:Math.round(o),height:Math.round(n)})};if(r(l(o)),!n.ResizeObserver)return()=>{};let i=new n.ResizeObserver(t=>{let n=()=>{let e=t[0];if(null==e?void 0:e.borderBoxSize){let t=e.borderBoxSize[0];if(t)return void r({width:t.inlineSize,height:t.blockSize})}r(l(o))};e.options.useAnimationFrameWithResizeObserver?requestAnimationFrame(n):n()});return i.observe(o,{box:"border-box"}),()=>{i.unobserve(o)}},u={passive:!0},m="u"<typeof window||"onscrollend"in window,p=(e,t)=>((e,t,o)=>{var n,r;let i,a=e.scrollElement;if(!a)return;let l=e.targetWindow;if(!l)return;let s=e.options.useScrollendEvent&&m,c=0,d=s?null:(n=()=>t(c,!1),r=e.options.isScrollingResetDelay,function(...e){l.clearTimeout(i),i=l.setTimeout(()=>n.apply(this,e),r)}),p=e=>()=>{c=o(a),null==d||d(),t(c,e)},h=p(!0),g=p(!1);return a.addEventListener("scroll",h,u),s&&a.addEventListener("scrollend",g,u),()=>{a.removeEventListener("scroll",h),s&&a.removeEventListener("scrollend",g)}})(e,t,t=>{let{horizontal:o,isRtl:n}=e.options;return o?t.scrollLeft*(n&&-1||1):t.scrollTop}),h=(e,t,o)=>{if(o.options.useCachedMeasurements){let t=o.indexFromElement(e),n=o.options.getItemKey(t);return o.itemSizeCache.get(n)??o.options.estimateSize(t)}if(null==t?void 0:t.borderBoxSize){let e=t.borderBoxSize[0];if(e)return Math.round(e[o.options.horizontal?"inlineSize":"blockSize"])}if(!t){let t=o.indexFromElement(e),n=o.options.getItemKey(t),r=o.itemSizeCache.get(n);if(void 0!==r)return r}return e[o.options.horizontal?"offsetWidth":"offsetHeight"]},g=(e,{adjustments:t=0,behavior:o},n)=>{var r,i;null==(i=null==(r=n.scrollElement)?void 0:r.scrollTo)||i.call(r,{[n.options.horizontal?"left":"top"]:e+t,behavior:o})};class b{constructor(e){this.unsubs=[],this.scrollElement=null,this.targetWindow=null,this.isScrolling=!1,this.scrollState=null,this.measurementsCache=[],this._flatMeasurements=null,this.itemSizeCache=new Map,this.itemSizeCacheVersion=0,this.laneAssignments=new Map,this.pendingMin=null,this.prevLanes=void 0,this.lanesChangedFlag=!1,this.lanesSettling=!1,this.pendingScrollAnchor=null,this.scrollRect=null,this.scrollOffset=null,this.scrollDirection=null,this.scrollAdjustments=0,this._iosDeferredAdjustment=0,this._iosTouching=!1,this._iosJustTouchEnded=!1,this._iosTouchEndTimerId=null,this._intendedScrollOffset=null,this.elementsCache=new Map,this.now=()=>{var e,t,o;return(null==(o=null==(t=null==(e=this.targetWindow)?void 0:e.performance)?void 0:t.now)?void 0:o.call(t))??Date.now()},this.observer=(()=>{let e=null,t=()=>e||(this.targetWindow&&this.targetWindow.ResizeObserver?e=new this.targetWindow.ResizeObserver(e=>{e.forEach(e=>{let t=()=>{let t=e.target,o=this.indexFromElement(t);if(!t.isConnected){for(let[e,o]of(this.observer.unobserve(t),this.elementsCache))if(o===t){this.elementsCache.delete(e);break}return}this.shouldMeasureDuringScroll(o)&&this.resizeItem(o,this.options.measureElement(t,e,this))};this.options.useAnimationFrameWithResizeObserver?requestAnimationFrame(t):t()})}):null);return{disconnect:()=>{var o;null==(o=t())||o.disconnect(),e=null},observe:e=>{var o;return null==(o=t())?void 0:o.observe(e,{box:"border-box"})},unobserve:e=>{var o;return null==(o=t())?void 0:o.unobserve(e)}}})(),this.range=null,this.setOptions=e=>{var t,o;let n={debug:!1,initialOffset:0,overscan:1,paddingStart:0,paddingEnd:0,scrollPaddingStart:0,scrollPaddingEnd:0,horizontal:!1,getItemKey:s,rangeExtractor:c,onChange:()=>{},measureElement:h,initialRect:{width:0,height:0},scrollMargin:0,gap:0,indexAttribute:"data-index",initialMeasurementsCache:[],lanes:1,anchorTo:"start",followOnAppend:!1,scrollEndThreshold:1,isScrollingResetDelay:150,enabled:!0,isRtl:!1,useScrollendEvent:!1,useAnimationFrameWithResizeObserver:!1,laneAssignmentMode:"estimate",useCachedMeasurements:!1};for(let t in e){let o=e[t];void 0!==o&&(n[t]=o)}let r=this.options,i=null,a=null,l=!1;if(void 0!==r&&r.enabled&&n.enabled&&"end"===n.anchorTo&&null!==this.scrollElement){let e=r.count,s=n.count,c=this.getMeasurements(),d=e>0?(null==(t=c[0])?void 0:t.key)??r.getItemKey(0):null,u=e>0?(null==(o=c[e-1])?void 0:o.key)??r.getItemKey(e-1):null;if(s!==e||e>0&&s>0&&(n.getItemKey(0)!==d||n.getItemKey(s-1)!==u)){l=!0;let t=e>0?this.getVirtualItemForOffset(this.getScrollOffset())??c[0]:null;t&&(i=[t.key,this.getScrollOffset()-t.start]);let o=!0===n.followOnAppend?"auto":n.followOnAppend||null;o&&s>e&&this.isAtEnd(r.scrollEndThreshold)&&(0===e||n.getItemKey(s-1)!==u)&&(a=o)}}this.options=n,l&&(this.pendingMin=0,this.itemSizeCacheVersion++);let d=!1,u=0;if(i&&null!==this.scrollOffset){let[e,t]=i,o=this.getMeasurements(),{count:n,getItemKey:r}=this.options,a=0;for(;a<n&&r(a)!==e;)a++;if(a<n){let e=o[a];if(e){let o=e.start+t;o!==this.scrollOffset&&(u=o-this.scrollOffset,this.scrollOffset=o,d=!0)}}}(d||a)&&(this.pendingScrollAnchor=[d?i[0]:null,d?i[1]:0,a,u])},this.notify=e=>{var t,o;null==(o=(t=this.options).onChange)||o.call(t,this,e)},this.maybeNotify=r(()=>(this.calculateRange(),[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]),e=>{this.notify(e)},{key:!1,debug:()=>this.options.debug,initialDeps:[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]}),this.cleanup=()=>{this.unsubs.filter(Boolean).forEach(e=>e()),this.unsubs=[],this.observer.disconnect(),null!=this.rafId&&this.targetWindow&&(this.targetWindow.cancelAnimationFrame(this.rafId),this.rafId=null),this.scrollState=null,this.scrollElement=null,this.targetWindow=null},this._didMount=()=>()=>{this.cleanup()},this._willUpdate=()=>{var e;let t=this.options.enabled?this.options.getScrollElement():null;if(this.scrollElement!==t){if(this.cleanup(),!t)return void this.maybeNotify();if(this.scrollElement=t,this.scrollElement&&"ownerDocument"in this.scrollElement?this.targetWindow=this.scrollElement.ownerDocument.defaultView:this.targetWindow=(null==(e=this.scrollElement)?void 0:e.window)??null,this.elementsCache.forEach(e=>{this.observer.observe(e)}),this.unsubs.push(this.options.observeElementRect(this,e=>{this.scrollRect=e,this.maybeNotify()})),this.unsubs.push(this.options.observeElementOffset(this,(e,t)=>{null!==this._intendedScrollOffset&&1.5>Math.abs(e-this._intendedScrollOffset)&&(e=this._intendedScrollOffset),this._intendedScrollOffset=null,this.scrollAdjustments=0,this.scrollDirection=t?this.getScrollOffset()<e?"forward":"backward":null,this.scrollOffset=e,this.isScrolling=t,this._flushIosDeferredIfReady(),this.scrollState&&this.scheduleScrollReconcile(),this.maybeNotify()})),"addEventListener"in this.scrollElement){let e=this.scrollElement,t=()=>{this._iosTouching=!0,this._iosJustTouchEnded=!1,null!==this._iosTouchEndTimerId&&null!=this.targetWindow&&(this.targetWindow.clearTimeout(this._iosTouchEndTimerId),this._iosTouchEndTimerId=null)},o=()=>{this._iosTouching=!1,a()&&null!=this.targetWindow&&(this._iosJustTouchEnded=!0,this._iosTouchEndTimerId=this.targetWindow.setTimeout(()=>{this._iosJustTouchEnded=!1,this._iosTouchEndTimerId=null,this._flushIosDeferredIfReady()},150))};e.addEventListener("touchstart",t,u),e.addEventListener("touchend",o,u),this.unsubs.push(()=>{e.removeEventListener("touchstart",t),e.removeEventListener("touchend",o),null!==this._iosTouchEndTimerId&&null!=this.targetWindow&&(this.targetWindow.clearTimeout(this._iosTouchEndTimerId),this._iosTouchEndTimerId=null)})}this._scrollToOffset(this.getScrollOffset(),{adjustments:void 0,behavior:void 0})}let o=this.pendingScrollAnchor;if(this.pendingScrollAnchor=null,o&&this.scrollElement&&this.options.enabled){let[e,t,n,r]=o;null===e||n||(a()&&(this.isScrolling||this._iosTouching||this._iosJustTouchEnded)?0!==r&&(this._iosDeferredAdjustment+=r):this._scrollToOffset(this.getScrollOffset(),{adjustments:void 0,behavior:void 0})),n&&this.scrollToEnd({behavior:n})}},this._flushIosDeferredIfReady=()=>{if(0===this._iosDeferredAdjustment||this.isScrolling||this._iosTouching||this._iosJustTouchEnded)return;let e=this.getScrollOffset(),t=this.getMaxScrollOffset();if(e<0||e>t)return;let o=this._iosDeferredAdjustment;this._iosDeferredAdjustment=0,this._scrollToOffset(e,{adjustments:this.scrollAdjustments+=o,behavior:void 0})},this.rafId=null,this.getSize=()=>this.options.enabled?(this.scrollRect=this.scrollRect??this.options.initialRect,this.scrollRect[this.options.horizontal?"width":"height"]):(this.scrollRect=null,0),this.getScrollOffset=()=>this.options.enabled?(this.scrollOffset=this.scrollOffset??("function"==typeof this.options.initialOffset?this.options.initialOffset():this.options.initialOffset),this.scrollOffset):(this.scrollOffset=null,0),this.getFurthestMeasurement=(e,t)=>{let o=new Map,n=new Map;for(let r=t-1;r>=0;r--){let t=e[r];if(o.has(t.lane))continue;let i=n.get(t.lane);if(null==i||t.end>i.end?n.set(t.lane,t):t.end<i.end&&o.set(t.lane,!0),o.size===this.options.lanes)break}return n.size===this.options.lanes?Array.from(n.values()).sort((e,t)=>e.end===t.end?e.index-t.index:e.end-t.end)[0]:void 0},this.getMeasurementOptions=r(()=>[this.options.count,this.options.paddingStart,this.options.scrollMargin,this.options.getItemKey,this.options.enabled,this.options.lanes,this.options.laneAssignmentMode],(e,t,o,n,r,i,a)=>(void 0!==this.prevLanes&&this.prevLanes!==i&&(this.lanesChangedFlag=!0),this.prevLanes=i,this.pendingMin=null,{count:e,paddingStart:t,scrollMargin:o,getItemKey:n,enabled:r,lanes:i,laneAssignmentMode:a}),{key:!1}),this.getMeasurements=r(()=>[this.getMeasurementOptions(),this.itemSizeCacheVersion],({count:e,paddingStart:t,scrollMargin:o,getItemKey:n,enabled:r,lanes:i,laneAssignmentMode:a},l)=>{let s=this.itemSizeCache;if(!r)return this.measurementsCache=[],this.itemSizeCache.clear(),this.laneAssignments.clear(),[];if(this.laneAssignments.size>e)for(let t of this.laneAssignments.keys())t>=e&&this.laneAssignments.delete(t);this.lanesChangedFlag&&(this.lanesChangedFlag=!1,this.lanesSettling=!0,this.measurementsCache=[],this.itemSizeCache.clear(),this.laneAssignments.clear(),this.pendingMin=null),0!==this.measurementsCache.length||this.lanesSettling||(this.measurementsCache=this.options.initialMeasurementsCache,this.measurementsCache.forEach(e=>{this.itemSizeCache.set(e.key,e.size)}));let c=this.lanesSettling?0:this.pendingMin??0;if(this.pendingMin=null,this.lanesSettling&&this.measurementsCache.length===e&&(this.lanesSettling=!1),1===i){var d;let r,i=this.options.gap,a=2*e,l=this._flatMeasurements;if(!l||l.length<a){let e=new Float64Array(a);l&&c>0&&e.set(l.subarray(0,2*c)),l=e,this._flatMeasurements=l}if(0===c)r=t+o;else{let e=c-1;r=l[2*e]+l[2*e+1]+i}for(let t=c;t<e;t++){let e=n(t),o=s.get(e),a="number"==typeof o?o:this.options.estimateSize(t);l[2*t]=r,l[2*t+1]=a,r+=a+i}let u=(d=l,new Proxy(Array(e),{get(t,o,r){if("string"==typeof o){let r=o.charCodeAt(0);if(r>=48&&r<=57){let r=+o;if(Number.isInteger(r)&&r>=0&&r<e){let e=t[r];if(!e){let o=d[2*r];e=t[r]={index:r,key:n(r),start:o,size:d[2*r+1],end:o+d[2*r+1],lane:0}}return e}}if("length"===o)return e}return Reflect.get(t,o,r)}}));return this.measurementsCache=u,u}let u=this.measurementsCache.slice(0,c),m=Array(i).fill(void 0);for(let e=0;e<c;e++){let t=u[e];t&&(m[t.lane]=e)}for(let r=c;r<e;r++){let e,i,l=n(r),c=this.laneAssignments.get(r),d="estimate"===a||s.has(l);if(void 0!==c&&this.options.lanes>1){let n=m[e=c],r=void 0!==n?u[n]:void 0;i=r?r.end+this.options.gap:t+o}else{let n=1===this.options.lanes?u[r-1]:this.getFurthestMeasurement(u,r);i=n?n.end+this.options.gap:t+o,e=n?n.lane:r%this.options.lanes,this.options.lanes>1&&d&&this.laneAssignments.set(r,e)}let p=s.get(l),h="number"==typeof p?p:this.options.estimateSize(r),g=i+h;u[r]={index:r,start:i,size:h,end:g,key:l,lane:e},m[e]=r}return this.measurementsCache=u,u},{key:!1,debug:()=>this.options.debug}),this.calculateRange=r(()=>[this.getMeasurements(),this.getSize(),this.getScrollOffset(),this.options.lanes],(e,t,o,n)=>this.range=e.length>0&&t>0?function({measurements:e,outerSize:t,scrollOffset:o,lanes:n,flat:r}){let i=e.length-1,a=r?e=>r[2*e]:t=>e[t].start,l=r?e=>r[2*e]+r[2*e+1]:t=>e[t].end;if(e.length<=n)return{startIndex:0,endIndex:i};let s=f(0,i,a,o),c=s;if(1===n)for(;c<i&&l(c)<o+t;)c++;else if(n>1){let r=Array(n).fill(0);for(;c<i&&r.some(e=>e<o+t);){let t=e[c];r[t.lane]=t.end,c++}let a=Array(n).fill(o+t);for(;s>=0&&a.some(e=>e>=o);){let t=e[s];a[t.lane]=t.start,s--}s=Math.max(0,s-s%n),c=Math.min(i,c+(n-1-c%n))}return{startIndex:s,endIndex:c}}({measurements:e,outerSize:t,scrollOffset:o,lanes:n,flat:1===n&&null!=this._flatMeasurements?this._flatMeasurements:null}):null,{key:!1,debug:()=>this.options.debug}),this.getVirtualIndexes=r(()=>{let e=null,t=null,o=this.calculateRange();return o&&(e=o.startIndex,t=o.endIndex),this.maybeNotify.updateDeps([this.isScrolling,e,t]),[this.options.rangeExtractor,this.options.overscan,this.options.count,e,t]},(e,t,o,n,r)=>null===n||null===r?[]:e({startIndex:n,endIndex:r,overscan:t,count:o}),{key:!1,debug:()=>this.options.debug}),this.indexFromElement=e=>{let t=this.options.indexAttribute,o=e.getAttribute(t);return o?parseInt(o,10):(console.warn(`Missing attribute name '${t}={index}' on measured element.`),-1)},this.shouldMeasureDuringScroll=e=>{var t;if(!this.scrollState||"smooth"!==this.scrollState.behavior)return!0;let o=this.scrollState.index??(null==(t=this.getVirtualItemForOffset(this.scrollState.lastTargetOffset))?void 0:t.index);if(void 0!==o&&this.range){let t=Math.max(this.options.overscan,Math.ceil((this.range.endIndex-this.range.startIndex)/2)),n=Math.max(0,o-t),r=Math.min(this.options.count-1,o+t);return e>=n&&e<=r}return!0},this.measureElement=e=>{if(!e)return void this.elementsCache.forEach((e,t)=>{e.isConnected||(this.observer.unobserve(e),this.elementsCache.delete(t))});let t=this.indexFromElement(e),o=this.options.getItemKey(t),n=this.elementsCache.get(o);n!==e&&(n&&this.observer.unobserve(n),this.observer.observe(e),this.elementsCache.set(o,e)),(!this.isScrolling||this.scrollState)&&this.shouldMeasureDuringScroll(t)&&this.resizeItem(t,this.options.measureElement(e,void 0,this))},this.resizeItem=(e,t)=>{var o,n;let r,i,a;if(e<0||e>=this.options.count)return;let l=this._flatMeasurements;if(1===this.options.lanes&&null!==l)a=this.options.getItemKey(e),i=l[2*e],r=l[2*e+1];else{let t=this.measurementsCache[e];if(!t)return;a=t.key,i=t.start,r=t.size}let s=t-(this.itemSizeCache.get(a)??r);if(0!==s){let l="end"===this.options.anchorTo&&(null==(o=this.scrollState)?void 0:o.behavior)!=="smooth"&&this.getVirtualDistanceFromEnd()<=this.options.scrollEndThreshold,c=l?this.getTotalSize():0,d=(null==(n=this.scrollState)?void 0:n.behavior)!=="smooth"&&(void 0!==this.shouldAdjustScrollPositionOnItemSizeChange?this.shouldAdjustScrollPositionOnItemSizeChange(this.measurementsCache[e]??{index:e,key:a,start:i,size:r,end:i+r,lane:0},s,this):i<this.getScrollOffset()+this.scrollAdjustments&&(!this.itemSizeCache.has(a)||"backward"!==this.scrollDirection));(null===this.pendingMin||e<this.pendingMin)&&(this.pendingMin=e),this.itemSizeCache.set(a,t),this.itemSizeCacheVersion++,l?this.applyScrollAdjustment(this.getTotalSize()-c):d&&this.applyScrollAdjustment(s),this.notify(!1)}},this.getVirtualItems=r(()=>[this.getVirtualIndexes(),this.getMeasurements()],(e,t)=>{let o=[];for(let n=0,r=e.length;n<r;n++){let r=t[e[n]];o.push(r)}return o},{key:!1,debug:()=>this.options.debug}),this.getVirtualItemForOffset=e=>{let t=this.getMeasurements();if(0===t.length)return;let o=this._flatMeasurements,n=1===this.options.lanes&&null!=o,r=f(0,t.length-1,n?e=>o[2*e]:e=>i(t[e]).start,e);return i(t[r])},this.getMaxScrollOffset=()=>{if(!this.scrollElement)return 0;if("scrollHeight"in this.scrollElement)return this.options.horizontal?this.scrollElement.scrollWidth-this.scrollElement.clientWidth:this.scrollElement.scrollHeight-this.scrollElement.clientHeight;{let e=this.scrollElement.document.documentElement;return this.options.horizontal?e.scrollWidth-this.scrollElement.innerWidth:e.scrollHeight-this.scrollElement.innerHeight}},this.getVirtualDistanceFromEnd=()=>Math.max(this.getTotalSize()-this.getSize()-this.getScrollOffset(),0),this.getDistanceFromEnd=()=>Math.max(this.getMaxScrollOffset()-this.getScrollOffset(),0),this.isAtEnd=(e=this.options.scrollEndThreshold)=>this.getDistanceFromEnd()<=e,this.getOffsetForAlignment=(e,t,o=0)=>{if(!this.scrollElement)return 0;let n=this.getSize(),r=this.getScrollOffset();return"auto"===t&&(t=e>=r+n?"end":"start"),"center"===t?e+=(o-n)/2:"end"===t&&(e-=n),Math.max(Math.min(this.getMaxScrollOffset(),e),0)},this.getOffsetForIndex=(e,t="auto")=>{e=Math.max(0,Math.min(e,this.options.count-1));let o=this.getSize(),n=this.getScrollOffset(),r=this.measurementsCache[e];if(!r)return;if("auto"===t)if(r.end>=n+o-this.options.scrollPaddingEnd)t="end";else{if(!(r.start<=n+this.options.scrollPaddingStart))return[n,t];t="start"}if("end"===t&&e===this.options.count-1)return[this.getMaxScrollOffset(),t];let i="end"===t?r.end+this.options.scrollPaddingEnd:r.start-this.options.scrollPaddingStart;return[this.getOffsetForAlignment(i,t,r.size),t]},this.scrollToOffset=(e,{align:t="start",behavior:o="auto"}={})=>{let n=this.getOffsetForAlignment(e,t),r=this.now();this.scrollState={index:null,align:t,behavior:o,startedAt:r,lastTargetOffset:n,stableFrames:0},this._scrollToOffset(n,{adjustments:void 0,behavior:o}),this.scheduleScrollReconcile()},this.scrollToIndex=(e,{align:t="auto",behavior:o="auto"}={})=>{e=Math.max(0,Math.min(e,this.options.count-1));let n=this.getOffsetForIndex(e,t);if(!n)return;let[r,i]=n,a=this.now();this.scrollState={index:e,align:i,behavior:o,startedAt:a,lastTargetOffset:r,stableFrames:0},this._scrollToOffset(r,{adjustments:void 0,behavior:o}),this.scheduleScrollReconcile()},this.scrollBy=(e,{behavior:t="auto"}={})=>{let o=this.getScrollOffset()+e,n=this.now();this.scrollState={index:null,align:"start",behavior:t,startedAt:n,lastTargetOffset:o,stableFrames:0},this._scrollToOffset(o,{adjustments:void 0,behavior:t}),this.scheduleScrollReconcile()},this.scrollToEnd=({behavior:e="auto"}={})=>{this.options.count>0?this.scrollToIndex(this.options.count-1,{align:"end",behavior:e}):this.scrollToOffset(Math.max(this.getTotalSize()-this.getSize(),0),{behavior:e})},this.getTotalSize=()=>{var e;let t,o=this.getMeasurements();if(0===o.length)t=this.options.paddingStart;else if(1===this.options.lanes){let n=o.length-1,r=this._flatMeasurements;t=null!=r?r[2*n]+r[2*n+1]:(null==(e=o[n])?void 0:e.end)??0}else{let e=Array(this.options.lanes).fill(null),n=o.length-1;for(;n>=0&&e.some(e=>null===e);){let t=o[n];null===e[t.lane]&&(e[t.lane]=t.end),n--}t=Math.max(...e.filter(e=>null!==e))}return Math.max(t-this.options.scrollMargin+this.options.paddingEnd,0)},this.takeSnapshot=()=>{let e=[];if(0===this.itemSizeCache.size)return e;for(let t of this.getMeasurements())t&&this.itemSizeCache.has(t.key)&&e.push({index:t.index,key:t.key,start:t.start,size:t.size,end:t.end,lane:t.lane});return e},this._scrollToOffset=(e,{adjustments:t,behavior:o})=>{this._intendedScrollOffset=e+(t??0),this.options.scrollToFn(e,{behavior:o,adjustments:t},this)},this.measure=()=>{this.pendingMin=null,this.itemSizeCache.clear(),this.laneAssignments.clear(),this.itemSizeCacheVersion++,this.notify(!1)},this.setOptions(e)}applyScrollAdjustment(e,t){0!==e&&(a()&&(this.isScrolling||this._iosTouching||this._iosJustTouchEnded)?this._iosDeferredAdjustment+=e:this._scrollToOffset(this.getScrollOffset(),{adjustments:this.scrollAdjustments+=e,behavior:t}))}scheduleScrollReconcile(){if(!this.targetWindow){this.scrollState=null;return}null==this.rafId&&(this.rafId=this.targetWindow.requestAnimationFrame(()=>{this.rafId=null,this.reconcileScroll()}))}reconcileScroll(){if(!this.scrollState||!this.scrollElement)return;if(this.now()-this.scrollState.startedAt>5e3){this.scrollState=null;return}let e=null!=this.scrollState.index?this.getOffsetForIndex(this.scrollState.index,this.scrollState.align):void 0,t=e?e[0]:this.scrollState.lastTargetOffset,o=t!==this.scrollState.lastTargetOffset;if(!o&&1.01>Math.abs(t-this.getScrollOffset())){if(this.scrollState.stableFrames++,this.scrollState.stableFrames>=1){this.getScrollOffset()!==t&&this._scrollToOffset(t,{adjustments:void 0,behavior:"auto"}),this.scrollState=null;return}}else if(this.scrollState.stableFrames=0,o){let e=this.getSize()||600,o=Math.abs(t-this.getScrollOffset()),n="smooth"===this.scrollState.behavior&&o>e;this.scrollState.lastTargetOffset=t,n||(this.scrollState.behavior="auto"),this._scrollToOffset(t,{adjustments:void 0,behavior:n?"smooth":"auto"})}this.scheduleScrollReconcile()}}let f=(e,t,o,n)=>{for(;e<=t;){let r=(e+t)/2|0,i=o(r);if(i<n)e=r+1;else{if(!(i>n))return r;t=r-1}}return e>0?e-1:0},x="u">typeof document?o.useLayoutEffect:o.useEffect;e.s(["useVirtualizer",0,function(e){return function({useFlushSync:e=!0,directDomUpdates:t=!1,directDomUpdatesMode:r="transform",...i}){let a=o.useReducer(e=>e+1,0)[1],l=o.useRef({enabled:t,mode:r,container:null,lastSize:null,lastPositions:new WeakMap,prevRange:null});l.current.enabled=t,l.current.mode=r;let s=e=>{let t=l.current;if(!t.enabled||!t.container)return;let o=e.getTotalSize();if(o!==t.lastSize){t.lastSize=o;let n=e.options.horizontal?"width":"height";t.container.style[n]=`${o}px`}let n=!!e.options.horizontal,r="transform"===t.mode,i=n?"left":"top",a=e.options.scrollMargin;for(let o of e.getVirtualItems()){let l=o.start-a,s=e.elementsCache.get(o.key);s&&t.lastPositions.get(s)!==l&&(t.lastPositions.set(s,l),r?s.style.transform=n?`translate3d(${l}px, 0, 0)`:`translate3d(0, ${l}px, 0)`:s.style[i]=`${l}px`)}},c={...i,onChange:(t,o)=>{var r;let c=l.current,d=!0;if(c.enabled){s(t);let e=t.range,o=c.prevRange;(d=!o||o.isScrolling!==t.isScrolling||o.startIndex!==(null==e?void 0:e.startIndex)||o.endIndex!==(null==e?void 0:e.endIndex))&&(c.prevRange=e?{startIndex:e.startIndex,endIndex:e.endIndex,isScrolling:t.isScrolling}:null)}d&&(e&&o?(0,n.flushSync)(a):a()),null==(r=i.onChange)||r.call(i,t,o)}},[d]=o.useState(()=>{let e=new b(c);return Object.assign(e,{containerRef:t=>{let o=l.current;if(o.container=t,o.lastSize=null,t&&o.enabled){let n=e.getTotalSize();o.lastSize=n;let r=e.options.horizontal?"width":"height";t.style[r]=`${n}px`}}})});return d.setOptions(c),x(()=>d._didMount(),[]),x(()=>d._willUpdate()),x(()=>{s(d)}),d}({observeElementRect:d,observeElementOffset:p,scrollToFn:g,...e})}],463044)},424035,e=>{"use strict";var t=e.i(44091),o=e.i(62904),n=e.i(275519),r={root:"m_db6d6462",section:"m_2242eb65","stripes-animation":"m_81a374bd","stripes-animation-vertical":"m_e0fb7a86",label:"m_91e40b74"},i=e.i(232471);let[a,l]=(0,e.i(386179).createSafeContext)("Progress.Root component was not found in tree");var s=e.i(391398);let c=(0,n.factory)(e=>{let{classNames:o,className:n,style:r,styles:a,vars:c,...d}=(0,t.useProps)("ProgressLabel",null,e);return(0,s.jsx)(i.Box,{...l().getStyles("label",{className:n,style:r,classNames:o,styles:a}),...d})});c.classes=r,c.displayName="@mantine/core/ProgressLabel";var d=e.i(433512),u=e.i(481178),m=e.i(391466);let p=(0,u.createVarsResolver)((e,{size:t,radius:o,transitionDuration:n})=>({root:{"--progress-size":(0,d.getSize)(t,"progress-size"),"--progress-radius":void 0===o?void 0:(0,d.getRadius)(o),"--progress-transition-duration":"number"==typeof n?`${n}ms`:void 0}})),h=(0,n.factory)(e=>{let o=(0,t.useProps)("ProgressRoot",null,e),{classNames:n,className:l,style:c,styles:d,unstyled:u,vars:h,autoContrast:g,transitionDuration:b,orientation:f,attributes:x,mod:T,...v}=o,y=(0,m.useStyles)({name:"Progress",classes:r,props:o,className:l,style:c,classNames:n,styles:d,unstyled:u,attributes:x,vars:h,varsResolver:p});return(0,s.jsx)(a,{value:{getStyles:y,autoContrast:g},children:(0,s.jsx)(i.Box,{mod:[{orientation:f},T],...y("root"),...v})})});h.classes=r,h.varsResolver=p,h.displayName="@mantine/core/ProgressRoot";var g=e.i(317477),b=e.i(700145),f=e.i(853487),x=e.i(951254);let T={withAria:!0},v=(0,n.factory)(e=>{let{classNames:o,className:n,style:r,styles:a,vars:c,value:d,withAria:u,color:m,striped:p,animated:h,mod:v,...y}=(0,t.useProps)("ProgressSection",T,e),S=l(),C=(0,x.useMantineTheme)(),j=u?{role:"progressbar","aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":d,"aria-valuetext":`${d}%`}:{};return(0,s.jsx)(i.Box,{...S.getStyles("section",{className:n,classNames:o,styles:a,style:r}),...y,...j,mod:[{striped:p||h,animated:h},v],__vars:{"--progress-section-size":`${d}%`,"--progress-section-color":(0,g.getThemeColor)(m,C),"--progress-label-color":(0,f.getAutoContrastValue)(S.autoContrast,C)?(0,b.getContrastColor)({color:m,theme:C,autoContrast:S.autoContrast}):void 0}})});v.classes=r,v.displayName="@mantine/core/ProgressSection";let y=(0,n.factory)(e=>{let n=(0,t.useProps)("Progress",null,e),{value:r,classNames:i,styles:a,vars:l,color:c,striped:d,animated:u,"aria-label":m,...p}=n,{resolvedClassNames:g,resolvedStyles:b}=(0,o.useResolvedStylesApi)({classNames:i,styles:a,props:n});return(0,s.jsx)(h,{classNames:g,styles:b,vars:l,...p,children:(0,s.jsx)(v,{value:r,color:c,striped:d,animated:u,"aria-label":m})})});y.classes=r,y.displayName="@mantine/core/Progress",y.Section=v,y.Root=h,y.Label=c,e.s(["Progress",0,y],424035)},699648,267199,e=>{"use strict";let t={" ":"space",ArrowLeft:"arrowleft",ArrowRight:"arrowright",ArrowUp:"arrowup",ArrowDown:"arrowdown",Escape:"escape",Esc:"escape",esc:"escape",Enter:"enter",Tab:"tab",Backspace:"backspace",Delete:"delete",Insert:"insert",Home:"home",End:"end",PageUp:"pageup",PageDown:"pagedown","+":"plus","-":"minus","*":"asterisk","/":"slash"};function o(e){let o=e.replace("Key","").toLowerCase();return t[e]||o}function n(e,t){return n=>{let r,i,a,l;return function(e,t,n){let{alt:r,ctrl:i,meta:a,mod:l,shift:s,key:c}=e,{altKey:d,ctrlKey:u,metaKey:m,shiftKey:p,key:h,code:g}=t;if(r!==d)return!1;if(l){if(!u&&!m)return!1}else if(i!==u||a!==m)return!1;return s===p&&!!c&&(n?o(g)===o(c):o(h??g)===o(c))}((i={alt:(r=e.toLowerCase().split("+").map(e=>e.trim())).includes("alt"),ctrl:r.includes("ctrl"),meta:r.includes("meta"),mod:r.includes("mod"),shift:r.includes("shift")},a=["alt","ctrl","meta","shift","mod"],l=r.find(e=>!a.includes(e)),{...i,key:"[plus]"===l?"+":l}),n,t)}}e.s(["getHotkeyHandler",0,function(e){return t=>{let o="nativeEvent"in t?t.nativeEvent:t;e.forEach(([e,r,i={preventDefault:!0,usePhysicalKeys:!1}])=>{n(e,i.usePhysicalKeys)(o)&&(i.preventDefault&&t.preventDefault(),r(o))})}},"getHotkeyMatcher",0,n],267199);var r=e.i(191788);e.s(["useHotkeys",0,function(e,t=["INPUT","TEXTAREA","SELECT"],o=!1){let i=(0,r.useEffectEvent)(r=>{e.forEach(([e,i,a={preventDefault:!0,usePhysicalKeys:!1}])=>{n(e,a.usePhysicalKeys)(r)&&function(e,t,o=!1){return!(e.target instanceof HTMLElement)||(o?!t.includes(e.target.tagName):!e.target.isContentEditable&&!t.includes(e.target.tagName))}(r,t,o)&&(a.preventDefault&&r.preventDefault(),i(r))})});(0,r.useEffect)(()=>(document.documentElement.addEventListener("keydown",i),()=>document.documentElement.removeEventListener("keydown",i)),[])}],699648)},631730,218066,e=>{"use strict";var t=e.i(852361),o=e.i(561299);let n=e=>(0,o.useStore)(e);function r(e,t){let o=t.getState();t.setState({...o,...e(t.getState())})}function i(e){r(()=>({opened:!0,selected:-1}),e)}function a(e){r(()=>({opened:!1}),e)}function l(e){r(e=>({opened:!e.opened,selected:e.opened?e.selected:-1}),e)}function s(e,t){t.updateState(t=>({...t,selected:e}))}function c(e,t=document){let o=t.querySelector(e);if(o)return o;let n=t instanceof ShadowRoot?t.host.children:t.children;for(let t=0;t<n.length;t+=1){let o=n[t];if(o.shadowRoot){let t=c(e,o.shadowRoot);if(t)return t}let r=c(e,o);if(r)return r}return null}function d(e,o){let n=o.getState(),r=n.listId?c(`#${n.listId}`):null,i=r?.querySelector("[data-selected]"),a=r?.querySelectorAll("[data-action]")??[],l=(0,t.clamp)(-1===e?a.length-1:e===a.length?0:e,0,a.length-1);return i?.removeAttribute("data-selected"),a[l]?.scrollIntoView({block:"nearest"}),a[l]?.setAttribute("data-selected","true"),s(l,o),l}let u={open:i,close:a,toggle:l,updateState:r,setSelectedAction:s,setListId:function(e,t){t.updateState(t=>({...t,listId:e}))},selectAction:d,selectNextAction:function(e){return d(e.getState().selected+1,e)},selectPreviousAction:function(e){return d(e.getState().selected-1,e)},triggerSelectedAction:function(e){let t=e.getState();(t.listId?c(`#${t.listId} [data-selected]`):null)?.click()},registerAction:function(e,t){let o=t.getState();return o.registeredActions.add(e),()=>{o.registeredActions.delete(e)}},setQuery:function(e,t){r(()=>({query:e}),t),Promise.resolve().then(()=>{d(0,t),r(e=>({empty:e.query.trim().length>0&&0===e.registeredActions.size}),t)})},clearSpotlightState:function({clearQuery:e},t){t.updateState(t=>({...t,selected:-1,query:e?"":t.query,empty:!e&&t.empty}))}};function m(){let e=(0,o.createStore)({opened:!1,empty:!1,selected:-1,listId:"",query:"",registeredActions:new Set});return[e,{open:()=>i(e),close:()=>a(e),toggle:()=>l(e)}]}let[p,h]=m(),{open:g,close:b,toggle:f}=h;function x(e){return void 0!==e.group&&Array.isArray(e.actions)}e.s(["createSpotlight",0,m,"spotlight",0,h,"spotlightActions",0,u,"spotlightStore",0,p,"useSpotlight",0,n],218066);var T={root:"m_d2b315db",content:"m_3cd250e0",body:"m_d2abce9b",search:"m_f366a061",actionsList:"m_6e463822",action:"m_d49bb8ef",actionBody:"m_3d475731",actionSection:"m_832642f6",actionLabel:"m_6c2a1345",actionDescription:"m_a6d9d78d",empty:"m_82f78f74",footer:"m_ddcaf054",actionsGroup:"m_5a3e5f7b"};let[v,y]=(0,e.i(386179).createSafeContext)("Spotlight component was not found in tree");var S=e.i(232471),C=e.i(754067),j=e.i(284629),I=e.i(275519),w=e.i(44091),A=e.i(391398);let M={dimmedSections:!0,highlightQuery:!1},D=(0,I.factory)(e=>{let{className:t,style:o,classNames:n,styles:r,id:i,description:a,label:l,leftSection:s,rightSection:c,children:d,dimmedSections:m,highlightQuery:p,highlightColor:h,closeSpotlightOnTrigger:g,onClick:b,onMouseDown:f,keywords:x,vars:T,...v}=(0,w.useProps)("SpotlightAction",M,e),I=y(),D={classNames:n,styles:r},E=p&&"string"==typeof l?(0,A.jsx)(C.Highlight,{component:"span",highlight:I.query,color:h,...I.getStyles("actionLabel",D),children:l}):(0,A.jsx)("span",{...I.getStyles("actionLabel",D),children:l});return(0,A.jsx)(j.UnstyledButton,{"data-action":!0,...I.getStyles("action",{className:t,style:o,...D}),...v,onMouseDown:e=>{e.preventDefault(),f?.(e)},onClick:e=>{b?.(e),(g??I.closeOnActionTrigger)&&u.close(I.store)},tabIndex:-1,children:d||(0,A.jsxs)(A.Fragment,{children:[s&&(0,A.jsx)(S.Box,{component:"span",mod:{position:"left",dimmed:m},...I.getStyles("actionSection",D),children:s}),(0,A.jsxs)("span",{...I.getStyles("actionBody",D),children:[E,(0,A.jsx)("span",{...I.getStyles("actionDescription",D),children:a})]}),c&&(0,A.jsx)(S.Box,{component:"span",mod:{position:"right",dimmed:m},...I.getStyles("actionSection",D),children:c})]})})});D.classes=T,D.displayName="@mantine/spotlight/SpotlightAction";let E=(0,I.factory)(e=>{let{className:t,style:o,styles:n,classNames:r,label:i,children:a,...l}=(0,w.useProps)("SpotlightActionsGroup",null,e);return(0,A.jsx)(S.Box,{...y().getStyles("actionsGroup",{className:t,style:o,classNames:r,styles:n}),...l,__vars:{"--spotlight-label":`'${i?.replace(/\\/g,"\\\\").replace(/'/g,"\\'")}'`},children:a})});E.classes=T,E.displayName="@mantine/core/SpotlightActionsGroup";var N=e.i(19300),B=e.i(191788);let G=(0,I.factory)(e=>{let{className:t,style:o,id:n,children:r,vars:i,classNames:a,styles:l,...s}=(0,w.useProps)("SpotlightActionsList",null,e),c=y(),d=`mantine-${(0,B.useId)().replace(/:/g,"")}`,m=n||d;return(0,B.useEffect)(()=>(u.setListId(m,c.store),()=>u.setListId("",c.store)),[]),(0,A.jsx)(N.ScrollArea.Autosize,{...c.getStyles("actionsList",{className:t,style:o,classNames:a,styles:l}),type:"scroll",scrollbarSize:"var(--spotlight-actions-list-padding)",offsetScrollbars:"y",id:m,...s,children:r})});G.classes=T,G.displayName="@mantine/spotlight/SpotlightActionsList";let P=(0,I.factory)(e=>{let{className:t,style:o,classNames:n,styles:r,...i}=(0,w.useProps)("SpotlightEmpty",null,e);return(0,A.jsx)(S.Box,{...y().getStyles("empty",{classNames:n,styles:r,className:t,style:o}),...i})});P.classes=T,P.displayName="@mantine/spotlight/SpotlightEmpty";let z=(0,I.factory)(e=>{let{className:t,style:o,classNames:n,styles:r,...i}=(0,w.useProps)("SpotlightFooter",null,e);return(0,A.jsx)(S.Box,{...y().getStyles("footer",{className:t,classNames:n,style:o,styles:r}),...i})});z.classes=T,z.displayName="@mantine/spotlight/SpotlightFooter";var H=e.i(729262),k=e.i(699648),V=e.i(424302),F=e.i(749218),L=e.i(779177),Z=e.i(62904),_=e.i(391466);let O={size:600,yOffset:80,zIndex:(0,F.getDefaultZIndex)("max"),overlayProps:{backgroundOpacity:.35,blur:7},transitionProps:{duration:200,transition:"pop"},store:p,clearQueryOnClose:!0,closeOnActionTrigger:!0,shortcut:"mod + K",maxHeight:400},R=(0,I.factory)(e=>{let t=(0,w.useProps)("SpotlightRoot",O,e),{classNames:o,className:r,style:i,styles:a,unstyled:l,vars:s,store:c,children:d,query:m,onQueryChange:p,transitionProps:h,clearQueryOnClose:g,shortcut:b,tagsToIgnore:f,triggerOnContentEditable:x,disabled:y,onSpotlightOpen:S,onSpotlightClose:C,forceOpened:j,closeOnActionTrigger:I,maxHeight:M,scrollable:D,attributes:E,...N}=t,{opened:B,query:G}=n(c),P=e=>{p?.(e),u.setQuery(e,c)},z=(0,_.useStyles)({name:"Spotlight",classes:T,props:t,className:r,style:i,classNames:o,styles:a,unstyled:l,attributes:E}),{resolvedClassNames:F,resolvedStyles:R}=(0,Z.useResolvedStylesApi)({classNames:o,styles:a,props:t});return((0,k.useHotkeys)(function(e,t){if(!e)return[];let o=()=>u.open(t);return Array.isArray(e)?e.map(e=>[e,o]):[[e,o]]}(b,c),f,x),(0,H.useDidUpdate)(()=>{B?S?.():C?.()},[B]),y)?null:(0,A.jsx)(v,{value:{getStyles:z,query:"string"==typeof m?m:G,setQuery:P,store:c,closeOnActionTrigger:I},children:(0,A.jsx)(V.Modal,{...N,withCloseButton:!1,opened:B||!!j,padding:0,onClose:()=>u.close(c),className:r,style:i,classNames:F,styles:R,attributes:E,transitionProps:{...h,onExited:()=>{g&&P(""),u.clearSpotlightState({clearQuery:g},c),h?.onExited?.()}},__vars:{"--spotlight-max-height":D?(0,L.rem)(M):void 0},__staticSelector:"Spotlight","data-scrollable":D||void 0,children:d})})});R.classes=T,R.displayName="@mantine/spotlight/SpotlightRoot";var W=e.i(294788);let $={size:"lg"},q=(0,I.factory)(e=>{let{classNames:t,styles:o,onKeyDown:n,onChange:r,vars:i,value:a,attributes:l,...s}=(0,w.useProps)("SpotlightSearch",$,e),c=y(),d=c.getStyles("search"),[m,p]=(0,B.useState)(!1);return(0,A.jsx)(W.Input,{...d,classNames:[{input:d.className},t],styles:[{input:d.style},o],...s,value:a??c.query,onChange:e=>{c.setQuery(e.currentTarget.value),r?.(e)},onKeyDown:e=>{n?.(e),m||("ArrowDown"===e.nativeEvent.code&&(e.preventDefault(),u.selectNextAction(c.store)),"ArrowUp"===e.nativeEvent.code&&(e.preventDefault(),u.selectPreviousAction(c.store)),("Enter"===e.nativeEvent.code||"NumpadEnter"===e.nativeEvent.code)&&(e.preventDefault(),u.triggerSelectedAction(c.store)))},onCompositionStart:()=>p(!0),onCompositionEnd:()=>p(!1)})});q.classes=T,q.displayName="@mantine/spotlight/SpotlightSearch";var Y=e.i(579560);let Q={size:600,yOffset:80,limit:1/0,zIndex:(0,F.getDefaultZIndex)("max"),overlayProps:{backgroundOpacity:.35,blur:7},transitionProps:{duration:200,transition:"pop"},store:p,filter:(e,t)=>{var o;let n,r,i=e.trim().toLowerCase(),a=[[],[]];return t.reduce((e,t)=>"actions"in t?[...e,...t.actions.map(e=>({...e,group:t.group}))]:[...e,t],[]).forEach(e=>{if(e.label?.toLowerCase().includes(i))a[0].push(e);else{var t;(e.description?.toLowerCase().includes(i)||(Array.isArray(t=e.keywords)?t.map(e=>e.trim()).join(",").toLowerCase().trim():"string"==typeof t?t.toLowerCase().trim():"").includes(i))&&a[1].push(e)}}),o=a.flat(),n={},r=[],o.forEach(e=>{e.group?(n[e.group]||(n[e.group]={pushed:!1,data:{group:e.group,actions:[]}}),n[e.group].data.actions.push(e),n[e.group].pushed||(n[e.group].pushed=!0,r.push(n[e.group].data))):r.push(e)}),r},clearQueryOnClose:!0,closeOnActionTrigger:!0,shortcut:"mod + K"},K=(0,I.factory)(e=>{let{searchProps:t,filter:o,query:n,onQueryChange:r,actions:i,nothingFound:a,highlightQuery:l,limit:s,scrollAreaProps:c,...d}=(0,w.useProps)("Spotlight",Q,e),[u,m]=(0,Y.useUncontrolled)({value:n,defaultValue:"",finalValue:"",onChange:r}),p=(function e(t,o){if(!Array.isArray(t))return[];let n=0;return t.reduce((t,r)=>{if(n>=o)return t;if(x(r)){let i=e(r.actions,o-n);t.push({group:r.group,actions:i}),n+=i.length}else t.push(r),n+=1;return t},[])})(o(u,i),s).map(e=>{if(x(e)){let t=e.actions.map(({id:e,...t})=>(0,A.jsx)(D,{highlightQuery:l,...t},e));return(0,A.jsx)(E,{label:e.group,children:t},e.group)}return(0,A.jsx)(D,{highlightQuery:l,...e},e.id)});return(0,A.jsxs)(R,{...d,query:u,onQueryChange:m,children:[(0,A.jsx)(q,{...t}),p.length>0&&(0,A.jsx)(G,{...c,children:p}),0===p.length&&a&&(0,A.jsx)(P,{children:a})]})});K.classes=T,K.displayName="@mantine/spotlight/Spotlight",K.Search=q,K.ActionsList=G,K.Action=D,K.Empty=P,K.ActionsGroup=E,K.Footer=z,K.Root=R,K.open=h.open,K.close=h.close,K.toggle=h.toggle,e.s(["Spotlight",0,K],631730)},984083,e=>{"use strict";var t=e.i(648863),o=e.i(960831),n=e.i(294788),r=e.i(391398);let i={type:"configurator",component:function(e){return(0,r.jsx)(n.Input,{placeholder:"Input component",...e})},code:`
import { Input } from '@mantine/core';

function Demo() {
  return <Input{{props}} placeholder="Input component" />;
}
`,centered:!0,maxWidth:340,controls:o.inputOnlyControls};var a=e.i(931882);let l={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.Input,{component:"button",pointer:!0,children:"Button input"}),(0,r.jsxs)(n.Input,{component:"select",rightSection:(0,r.jsx)(a.CaretDownIcon,{size:14}),pointer:!0,mt:"md",children:[(0,r.jsx)("option",{value:"1",children:"1"}),(0,r.jsx)("option",{value:"2",children:"2"})]})]})},code:`
import { Input } from '@mantine/core';
import { CaretDownIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <>
      <Input component="button" pointer>
        Button input
      </Input>

      <Input
        component="select"
        rightSection={<CaretDownIcon size={14} />}
        pointer
        mt="md"
      >
        <option value="1">1</option>
        <option value="2">2</option>
      </Input>
    </>
  );
}
`};var s=e.i(191788),c=e.i(123895);let d={type:"code",component:function(){let[e,t]=(0,s.useState)("Clear me");return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.Input,{placeholder:"Your email",leftSection:(0,r.jsx)(c.AtIcon,{size:16})}),(0,r.jsx)(n.Input,{placeholder:"Clearable input",value:e,onChange:e=>t(e.currentTarget.value),rightSectionPointerEvents:"all",mt:"md",rightSection:e?(0,r.jsx)(n.Input.ClearButton,{"aria-label":"Clear input",onClick:()=>t("")}):null})]})},maxWidth:340,centered:!0,code:`
import { useState } from 'react';
import { Input } from '@mantine/core';
import { AtIcon } from '@phosphor-icons/react';

function Demo() {
  const [value, setValue] = useState('Clear me');
  return (
    <>
      <Input placeholder="Your email" leftSection={<AtIcon size={16} />} />
      <Input
        placeholder="Clearable input"
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
        rightSectionPointerEvents="all"
        mt="md"
        rightSection={
          value ? (
            <Input.ClearButton
              aria-label="Clear input"
              onClick={() => setValue('')}
            />
          ) : null
        }
      />
    </>
  );
}
`},u={type:"configurator",component:function(e){return(0,r.jsx)(n.Input.Wrapper,{...e,children:(0,r.jsx)(n.Input,{placeholder:"Input inside Input.Wrapper"})})},code:`
import { Input } from '@mantine/core';

function Wrapper() {
  return (
    <Input.Wrapper{{props}}>
      <Input placeholder="Input inside Input.Wrapper" />
    </Input.Wrapper>
  );
}
`,centered:!0,maxWidth:440,controls:o.inputWrapperOnlyControls};var m=e.i(841209),p=e.i(431868);let h={type:"code",centered:!0,maxWidth:400,component:function(){let[e,t]=(0,s.useState)(!1);return(0,r.jsx)(m.TextInput,{label:"TextInput with tooltip",description:"Tooltip will be relative to the input",placeholder:"Focus me to see tooltip",onFocus:()=>t(!0),onBlur:()=>t(!1),inputContainer:t=>(0,r.jsx)(p.Tooltip,{label:"Additional information",position:"top-start",opened:e,children:t})})},code:`
import { useState } from 'react';
import { TextInput, Tooltip } from '@mantine/core';

function Demo() {
  const [focused, setFocused] = useState(false);

  return (
    <TextInput
      label="TextInput with tooltip"
      description="Tooltip will be relative to the input"
      placeholder="Focus me to see tooltip"
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      inputContainer={(children) => (
        <Tooltip label="Additional information" position="top-start" opened={focused}>
          {children}
        </Tooltip>
      )}
    />
  );
}
`},g={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(m.TextInput,{label:"Custom layout",placeholder:"Custom layout",description:"Description below the input",inputWrapperOrder:["label","error","input","description"]}),(0,r.jsx)(m.TextInput,{mt:"md",label:"Custom layout",placeholder:"Custom layout",description:"Error and description are",error:"both below the input",inputWrapperOrder:["label","input","description","error"]})]})},maxWidth:340,centered:!0,code:`
import { TextInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <TextInput
        label="Custom layout"
        placeholder="Custom layout"
        description="Description below the input"
        inputWrapperOrder={['label', 'error', 'input', 'description']}
      />
      <TextInput
        mt="xl"
        label="Custom layout"
        placeholder="Custom layout"
        description="Error and description are"
        error="both below the input"
        inputWrapperOrder={['label', 'input', 'description', 'error']}
      />
    </>
  );
}
`};var b=e.i(586488);let f={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(b.InputBase,{label:"Your phone",component:"input",placeholder:"Your phone"}),(0,r.jsxs)(b.InputBase,{label:"Custom native select",component:"select",mt:"md",children:[(0,r.jsx)("option",{value:"react",children:"React"}),(0,r.jsx)("option",{value:"react",children:"Angular"}),(0,r.jsx)("option",{value:"svelte",children:"Svelte"})]})]})},maxWidth:340,centered:!0,code:`
import { InputBase } from '@mantine/core';

function Demo() {
  return (
    <>
      <InputBase label="Your phone" component="input" placeholder="Your phone" />

      <InputBase label="Custom native select" component="select" mt="md">
        <option value="react">React</option>
        <option value="react">Angular</option>
        <option value="svelte">Svelte</option>
      </InputBase>
    </>
  );
}
`},x={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.Input.Label,{required:!0,children:"Input label"}),(0,r.jsx)(n.Input.Description,{children:"Input description"}),(0,r.jsx)(n.Input.Error,{children:"Input error"})]})},code:`
import { Input } from '@mantine/core';

function Demo() {
  return (
    <>
      <Input.Label required>Input label</Input.Label>
      <Input.Description>Input description</Input.Description>
      <Input.Error>Input error</Input.Error>
    </>
  );
}
`},T={type:"code",component:function(){return(0,r.jsx)(n.Input,{component:"button",pointer:!0,children:(0,r.jsx)(n.Input.Placeholder,{children:"Placeholder content"})})},maxWidth:340,centered:!0,code:`
import { Input } from '@mantine/core';

function Demo() {
  return (
    <Input component="button" pointer>
      <Input.Placeholder>Placeholder content</Input.Placeholder>
    </Input>
  );
}
`};var v=e.i(951254),y=e.i(856171),S=e.i(530514);let C=`
import { TextInput, NativeSelect, MantineProvider, createTheme, Input } from '@mantine/core';

const theme = createTheme({
  components: {
    Input: Input.extend({
      defaultProps: {
        variant: 'filled',
      },
    }),

    InputWrapper: Input.Wrapper.extend({
      defaultProps: {
        inputWrapperOrder: ['label', 'input', 'description', 'error'],
      },
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <TextInput
        label="Text input"
        placeholder="Text input"
        description="Description below the input"
      />

      <NativeSelect
        mt="md"
        label="Native select"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        description="Description below the input"
      />
    </MantineProvider>
  );
}
`,j=(0,S.createTheme)({components:{Input:n.Input.extend({defaultProps:{variant:"filled"}}),InputWrapper:n.Input.Wrapper.extend({defaultProps:{inputWrapperOrder:["label","input","description","error"]}})}}),I={type:"code",component:function(){return(0,r.jsxs)(v.MantineThemeProvider,{theme:j,children:[(0,r.jsx)(m.TextInput,{label:"Text input",placeholder:"Text input",description:"Description below the input"}),(0,r.jsx)(y.NativeSelect,{mt:"md",label:"Native select",data:["React","Angular","Vue","Svelte"],description:"Description below the input"})]})},centered:!0,maxWidth:340,code:C};var w=e.i(613529);let A=`
import { TextInput, NumberInput, NativeSelect, MantineProvider, createTheme, Input } from '@mantine/core';

const theme = createTheme({
  components: {
    Input: Input.extend({
      defaultProps: {
        size: 'md',
        radius: 'md',
      },
    }),

    InputWrapper: Input.Wrapper.extend({
      defaultProps: {
        withAsterisk: true,
      },
    }),

    NumberInput: NumberInput.extend({
      defaultProps: {
        size: 'lg',
      },
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <TextInput label="Text input" placeholder="Inherits size and radius from Input" />

      <NativeSelect
        mt="md"
        label="Native select"
        data={['React', 'Angular', 'Vue', 'Svelte']}
      />

      <NumberInput mt="md" label="Number input" placeholder="Overrides shared size with lg" />
    </MantineProvider>
  );
}
`,M=(0,S.createTheme)({components:{Input:n.Input.extend({defaultProps:{size:"md",radius:"md"}}),InputWrapper:n.Input.Wrapper.extend({defaultProps:{withAsterisk:!0}}),NumberInput:w.NumberInput.extend({defaultProps:{size:"lg"}})}}),D={type:"code",component:function(){return(0,r.jsxs)(v.MantineThemeProvider,{theme:M,children:[(0,r.jsx)(m.TextInput,{label:"Text input",placeholder:"Inherits size and radius from Input"}),(0,r.jsx)(y.NativeSelect,{mt:"md",label:"Native select",data:["React","Angular","Vue","Svelte"]}),(0,r.jsx)(w.NumberInput,{mt:"md",label:"Number input",placeholder:"Overrides shared size with lg"})]})},centered:!0,maxWidth:340,code:A},E=`
import { TextInput, NativeSelect, MantineProvider, createTheme, Input } from '@mantine/core';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    Input: Input.extend({
      classNames: {
        input: classes.input,
      },
    }),

    InputWrapper: Input.Wrapper.extend({
      classNames: {
        label: classes.label,
      },
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <TextInput label="Text input" placeholder="Text input" />

      <NativeSelect
        mt="md"
        label="Native select"
        data={['React', 'Angular', 'Vue', 'Svelte']}
      />
    </MantineProvider>
  );
}
`,N=`
.label {
  background-color: var(--mantine-color-blue-light);
}

.input {
  border: 1px solid var(--mantine-color-violet-filled);
}
`,B=(0,S.createTheme)({components:{Input:n.Input.extend({classNames:{input:"m_8ca6a3cb"}}),InputWrapper:n.Input.Wrapper.extend({classNames:{label:"m_8ccacaf5"}})}}),G={type:"code",component:function(){return(0,r.jsxs)(v.MantineThemeProvider,{theme:B,children:[(0,r.jsx)(m.TextInput,{label:"Text input",placeholder:"Text input"}),(0,r.jsx)(y.NativeSelect,{mt:"md",label:"Native select",data:["React","Angular","Vue","Svelte"]})]})},centered:!0,maxWidth:340,code:[{fileName:"Demo.tsx",code:E,language:"tsx"},{fileName:"Demo.module.css",code:N,language:"scss"}]};var P={input:"m_4ba3a790"};let z={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.Input,{placeholder:"Regular Input component",classNames:P}),(0,r.jsx)(m.TextInput,{placeholder:"TextInput component",label:"TextInput component",mt:"md",classNames:P})]})},maxWidth:340,centered:!0,code:[{fileName:"Demo.module.css",code:`
.input {
  transition: none;

  &:focus-within {
    outline: 2px solid var(--mantine-color-blue-filled);
    border-color: transparent;
  }
}
`,language:"scss"},{fileName:"Demo.tsx",code:`
import { Input, TextInput } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <>
      <Input placeholder="Regular Input component" classNames={classes} />
      <TextInput
        placeholder="TextInput component"
        label="TextInput component"
        mt="md"
        classNames={classes}
      />
    </>
  );
}
`,language:"tsx"}]};var H=e.i(579668);let k=`
import { Input } from '@mantine/core';

function Demo() {
  const at = <AtIcon size={16} />;
  const chevron = <CaretDownIcon size={16} />;
  return <Input{{props}} placeholder="Input component" leftSection={at} rightSection={chevron} />;
}
`,V={type:"styles-api",data:H.InputStylesApi,component:function(e){return(0,r.jsx)(n.Input,{placeholder:"Input component",leftSection:(0,r.jsx)(c.AtIcon,{size:16}),rightSection:(0,r.jsx)(a.CaretDownIcon,{size:16}),...e})},code:k,centered:!0,maxWidth:340},F=`
import { Input } from '@mantine/core';

function Demo() {
  return <Input.Wrapper{{props}} label="Input label" description="Input description" error="Input error" withAsterisk />;
}
`,L={type:"styles-api",data:H.InputWrapperStylesApi,component:function(e){return(0,r.jsx)(n.Input.Wrapper,{label:"Input label",description:"Input description",error:"Input error",withAsterisk:!0,...e,children:(0,r.jsx)(n.Input,{placeholder:"Input"})})},code:F,centered:!0,maxWidth:340};var Z=e.i(171481);let _=new Map([["bold",s.createElement(s.Fragment,null,s.createElement("path",{d:"M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm-12-80V80a12,12,0,0,1,24,0v52a12,12,0,0,1-24,0Zm28,40a16,16,0,1,1-16-16A16,16,0,0,1,144,172Z"}))],["duotone",s.createElement(s.Fragment,null,s.createElement("path",{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"}),s.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm-8-80V80a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,172Z"}))],["fill",s.createElement(s.Fragment,null,s.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm-8,56a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm8,104a12,12,0,1,1,12-12A12,12,0,0,1,128,184Z"}))],["light",s.createElement(s.Fragment,null,s.createElement("path",{d:"M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm-6-82V80a6,6,0,0,1,12,0v56a6,6,0,0,1-12,0Zm16,36a10,10,0,1,1-10-10A10,10,0,0,1,138,172Z"}))],["regular",s.createElement(s.Fragment,null,s.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm-8-80V80a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,172Z"}))],["thin",s.createElement(s.Fragment,null,s.createElement("path",{d:"M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm-4-84V80a4,4,0,0,1,8,0v56a4,4,0,0,1-8,0Zm12,36a8,8,0,1,1-8-8A8,8,0,0,1,136,172Z"}))]]),O=s.forwardRef((e,t)=>s.createElement(Z.default,{ref:t,...e,weights:_}));O.displayName="WarningCircleIcon";let R={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(m.TextInput,{placeholder:"Error as boolean",label:"Error as boolean",error:!0}),(0,r.jsx)(m.TextInput,{mt:"md",placeholder:"Error as react node",label:"Error as react node",error:"Something went wrong"}),(0,r.jsx)(m.TextInput,{mt:"md",placeholder:"Without error styles on input",label:"Without error styles on input",error:"Something went wrong",withErrorStyles:!1,rightSectionPointerEvents:"none",rightSection:(0,r.jsx)(O,{size:20,color:"var(--mantine-color-error)"})})]})},code:`
import { TextInput } from '@mantine/core';
import { WarningCircleIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <>
      <TextInput placeholder="Error as boolean" label="Error as boolean" error />
      <TextInput
        mt="md"
        placeholder="Error as react node"
        label="Error as react node"
        error="Something went wrong"
      />

      <TextInput
        mt="md"
        placeholder="Without error styles on input"
        label="Without error styles on input"
        error="Something went wrong"
        withErrorStyles={false}
        rightSectionPointerEvents="none"
        rightSection={
          <WarningCircleIcon
            size={20}
            color="var(--mantine-color-error)"
          />
        }
      />
    </>
  );
}
`,maxWidth:340,centered:!0},W={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(m.TextInput,{placeholder:"Success as boolean",label:"Success as boolean",success:!0}),(0,r.jsx)(m.TextInput,{mt:"md",placeholder:"Success as react node",label:"Success as react node",success:"Username is available"})]})},code:`
import { TextInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <TextInput placeholder="Success as boolean" label="Success as boolean" success />
      <TextInput
        mt="md"
        placeholder="Success as react node"
        label="Success as react node"
        success="Username is available"
      />
    </>
  );
}
`,maxWidth:340,centered:!0},$={type:"configurator",component:function(e){let[t,o]=(0,s.useState)("clearable");return(0,r.jsx)(n.Input,{placeholder:"Clearable input",value:t,onChange:e=>o(e.currentTarget.value),rightSection:""!==t?(0,r.jsx)(n.Input.ClearButton,{onClick:()=>o("")}):void 0,rightSectionPointerEvents:"auto",...e})},code:e=>`
import { Input } from '@mantine/core';

function Demo(){
  const [value, setValue] = useState('clearable');

  return (
    <Input
      placeholder="Clearable input"
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
      rightSection={value !== '' ? <Input.ClearButton onClick={() => setValue('')} /> : undefined}
      rightSectionPointerEvents="auto"
      size="${e.size}"
    />
  );
}
`,maxWidth:340,centered:!0,controls:[{type:"size",prop:"size",initialValue:"sm",libraryValue:"__"}]},q={type:"code",component:function(){return(0,r.jsx)(n.Input,{placeholder:"Your email",loading:!0})},code:`
import { Input } from '@mantine/core';

function Demo() {
  return <Input placeholder="Your email" loading />;
}
`,centered:!0,maxWidth:340};var Y=(0,t.__exportAll)({clearButton:()=>$,component:()=>l,compound:()=>x,defaultProps:()=>I,error:()=>R,focusStyles:()=>z,inputBase:()=>f,inputContainer:()=>h,inputWrapperOrder:()=>g,loading:()=>q,placeholder:()=>T,sections:()=>d,sharedDefaultProps:()=>D,sharedStyles:()=>G,stylesApi:()=>V,success:()=>W,usage:()=>i,wrapper:()=>u,wrapperStylesApi:()=>L});e.s(["InputDemos",0,Y],984083)},943618,e=>{"use strict";var t=e.i(44091),o=e.i(391398),n=e.i(728649);function r(e){let{value:r,defaultValue:i,...a}=(0,t.useProps)("NumberFormatter",null,e);return void 0===r?null:(0,o.jsx)(n.NumericFormat,{displayType:"text",value:r,...a})}r.extend=e=>e,r.displayName="@mantine/core/NumberFormatter",e.s(["NumberFormatter",0,r])},214045,e=>{"use strict";var t=e.i(648863);let o=[{position:6,mass:12.011,symbol:"C",name:"Carbon"},{position:7,mass:14.007,symbol:"N",name:"Nitrogen"},{position:39,mass:88.906,symbol:"Y",name:"Yttrium"},{position:56,mass:137.33,symbol:"Ba",name:"Barium"},{position:58,mass:140.12,symbol:"Ce",name:"Cerium"}],n=[{position:1,mass:1.008,symbol:"H",name:"Hydrogen"},{position:2,mass:4.0026,symbol:"He",name:"Helium"},{position:3,mass:6.94,symbol:"Li",name:"Lithium"},{position:4,mass:9.0122,symbol:"Be",name:"Beryllium"},{position:5,mass:10.81,symbol:"B",name:"Boron"},{position:6,mass:12.011,symbol:"C",name:"Carbon"},{position:7,mass:14.007,symbol:"N",name:"Nitrogen"},{position:8,mass:15.999,symbol:"O",name:"Oxygen"},{position:9,mass:18.998,symbol:"F",name:"Fluorine"},{position:10,mass:20.18,symbol:"Ne",name:"Neon"},{position:11,mass:22.99,symbol:"Na",name:"Sodium"},{position:12,mass:24.305,symbol:"Mg",name:"Magnesium"},{position:13,mass:26.982,symbol:"Al",name:"Aluminium"},{position:14,mass:28.085,symbol:"Si",name:"Silicon"},{position:15,mass:30.974,symbol:"P",name:"Phosphorus"},{position:16,mass:32.06,symbol:"S",name:"Sulfur"},{position:17,mass:35.45,symbol:"Cl",name:"Chlorine"},{position:18,mass:39.948,symbol:"Ar",name:"Argon"},{position:19,mass:39.098,symbol:"K",name:"Potassium"},{position:20,mass:39.098,symbol:"Ca",name:"Calcium"},{position:21,mass:40.078,symbol:"Sc",name:"Scandium"},{position:22,mass:47.867,symbol:"Ti",name:"Titanium"},{position:23,mass:50.941,symbol:"V",name:"Vanadium"},{position:24,mass:51.996,symbol:"Cr",name:"Chromium"},{position:25,mass:54.938,symbol:"Mn",name:"Manganese"},{position:26,mass:55.845,symbol:"Fe",name:"Iron"},{position:27,mass:58.933,symbol:"Co",name:"Cobalt"},{position:28,mass:58.933,symbol:"Ni",name:"Nickel"},{position:29,mass:63.546,symbol:"Cu",name:"Copper"},{position:30,mass:65.38,symbol:"Zn",name:"Zinc"},{position:31,mass:69.723,symbol:"Ga",name:"Gallium"},{position:32,mass:72.63,symbol:"Ge",name:"Germanium"},{position:33,mass:74.922,symbol:"As",name:"Arsenic"},{position:34,mass:78.971,symbol:"Se",name:"Selenium"},{position:35,mass:79.904,symbol:"Br",name:"Bromine"},{position:36,mass:83.798,symbol:"Kr",name:"Krypton"},{position:37,mass:83.798,symbol:"Rb",name:"Rubidium"},{position:38,mass:87.62,symbol:"Sr",name:"Strontium"},{position:39,mass:88.906,symbol:"Y",name:"Yttrium"},{position:40,mass:91.224,symbol:"Zr",name:"Zirconium"},{position:41,mass:92.906,symbol:"Nb",name:"Niobium"},{position:42,mass:95.95,symbol:"Mo",name:"Molybdenum"},{position:43,mass:98,symbol:"Tc",name:"Technetium"},{position:44,mass:101.07,symbol:"Ru",name:"Ruthenium"},{position:45,mass:102.905,symbol:"Rh",name:"Rhodium"},{position:46,mass:106.42,symbol:"Pd",name:"Palladium"},{position:47,mass:106.42,symbol:"Ag",name:"Silver"},{position:48,mass:112.414,symbol:"Cd",name:"Cadmium"},{position:49,mass:114.818,symbol:"In",name:"Indium"},{position:50,mass:118.71,symbol:"Sn",name:"Tin"},{position:51,mass:121.76,symbol:"Sb",name:"Antimony"},{position:52,mass:127.6,symbol:"Te",name:"Tellurium"},{position:53,mass:126.904,symbol:"I",name:"Iodine"},{position:54,mass:126.904,symbol:"Xe",name:"Xenon"},{position:55,mass:126.904,symbol:"Cs",name:"Cesium"},{position:56,mass:137.33,symbol:"Ba",name:"Barium"},{position:57,mass:138.905,symbol:"La",name:"Lanthanum"},{position:58,mass:140.12,symbol:"Ce",name:"Cerium"},{position:59,mass:140.116,symbol:"Pr",name:"Praseodymium"},{position:60,mass:140.907,symbol:"Nd",name:"Neodymium"},{position:61,mass:144.242,symbol:"Pm",name:"Promethium"},{position:62,mass:145,symbol:"Sm",name:"Samarium"},{position:63,mass:150.36,symbol:"Eu",name:"Europium"},{position:64,mass:151.964,symbol:"Gd",name:"Gadolinium"},{position:65,mass:157.25,symbol:"Tb",name:"Terbium"},{position:66,mass:158.925,symbol:"Dy",name:"Dysprosium"},{position:67,mass:162.5,symbol:"Ho",name:"Holmium"},{position:68,mass:164.93,symbol:"Er",name:"Erbium"},{position:69,mass:167.259,symbol:"Tm",name:"Thulium"}];var r=e.i(245745),i=e.i(391398);let a={type:"code",code:`
import { Table } from '@mantine/core';

function Demo() {
  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Element position</Table.Th>
          <Table.Th>Element name</Table.Th>
          <Table.Th>Symbol</Table.Th>
          <Table.Th>Atomic mass</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}
`,component:function(){let e=o.map(e=>(0,i.jsxs)(r.Table.Tr,{children:[(0,i.jsx)(r.Table.Td,{children:e.position}),(0,i.jsx)(r.Table.Td,{children:e.name}),(0,i.jsx)(r.Table.Td,{children:e.symbol}),(0,i.jsx)(r.Table.Td,{children:e.mass})]},e.name));return(0,i.jsxs)(r.Table,{children:[(0,i.jsx)(r.Table.Thead,{children:(0,i.jsxs)(r.Table.Tr,{children:[(0,i.jsx)(r.Table.Th,{children:"Element position"}),(0,i.jsx)(r.Table.Th,{children:"Element name"}),(0,i.jsx)(r.Table.Th,{children:"Symbol"}),(0,i.jsx)(r.Table.Th,{children:"Atomic mass"})]})}),(0,i.jsx)(r.Table.Tbody,{children:e})]})}},l={type:"code",code:`
import { Table } from '@mantine/core';

function Demo() {
  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

  const ths = (
    <Table.Tr>
      <Table.Th>Element position</Table.Th>
      <Table.Th>Element name</Table.Th>
      <Table.Th>Symbol</Table.Th>
      <Table.Th>Atomic mass</Table.Th>
    </Table.Tr>
  );

  return (
    <Table captionSide="bottom">
      <Table.Caption>Some elements from periodic table</Table.Caption>
      <Table.Thead>{ths}</Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
      <Table.Tfoot>{ths}</Table.Tfoot>
    </Table>
  );
}
`,component:function(){let e=o.map(e=>(0,i.jsxs)(r.Table.Tr,{children:[(0,i.jsx)(r.Table.Td,{children:e.position}),(0,i.jsx)(r.Table.Td,{children:e.name}),(0,i.jsx)(r.Table.Td,{children:e.symbol}),(0,i.jsx)(r.Table.Td,{children:e.mass})]},e.name)),t=(0,i.jsxs)(r.Table.Tr,{children:[(0,i.jsx)(r.Table.Th,{children:"Element position"}),(0,i.jsx)(r.Table.Th,{children:"Element name"}),(0,i.jsx)(r.Table.Th,{children:"Symbol"}),(0,i.jsx)(r.Table.Th,{children:"Atomic mass"})]});return(0,i.jsxs)(r.Table,{captionSide:"bottom",children:[(0,i.jsx)(r.Table.Caption,{children:"Some elements from the periodic table"}),(0,i.jsx)(r.Table.Thead,{children:t}),(0,i.jsx)(r.Table.Tbody,{children:e}),(0,i.jsx)(r.Table.Tfoot,{children:t})]})}},s={type:"configurator",component:function(e){return(0,i.jsxs)(r.Table,{...e,children:[(0,i.jsx)(r.Table.Thead,{children:(0,i.jsxs)(r.Table.Tr,{children:[(0,i.jsx)(r.Table.Th,{children:"Element position"}),(0,i.jsx)(r.Table.Th,{children:"Element name"}),(0,i.jsx)(r.Table.Th,{children:"Symbol"}),(0,i.jsx)(r.Table.Th,{children:"Atomic mass"})]})}),(0,i.jsx)(r.Table.Tbody,{children:o.map(e=>(0,i.jsxs)(r.Table.Tr,{children:[(0,i.jsx)(r.Table.Td,{children:e.position}),(0,i.jsx)(r.Table.Td,{children:e.name}),(0,i.jsx)(r.Table.Td,{children:e.symbol}),(0,i.jsx)(r.Table.Td,{children:e.mass})]},e.name))})]})},code:`
import { Table } from '@mantine/core';

function Demo() {
  return (
    <Table{{props}}>
      {/* {...rows} */}
    </Table>
  );
}
`,controls:[{prop:"striped",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"highlightOnHover",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"withTableBorder",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"withColumnBorders",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"withRowBorders",type:"boolean",initialValue:!0,libraryValue:!0}]},c={type:"configurator",component:function(e){return(0,i.jsxs)(r.Table,{...e,children:[(0,i.jsx)(r.Table.Thead,{children:(0,i.jsxs)(r.Table.Tr,{children:[(0,i.jsx)(r.Table.Th,{children:"Position"}),(0,i.jsx)(r.Table.Th,{children:"Name"}),(0,i.jsx)(r.Table.Th,{children:"Symbol"})]})}),(0,i.jsx)(r.Table.Tbody,{children:o.map(e=>(0,i.jsxs)(r.Table.Tr,{children:[(0,i.jsx)(r.Table.Td,{children:e.position}),(0,i.jsx)(r.Table.Td,{children:e.name}),(0,i.jsx)(r.Table.Td,{children:e.symbol})]},e.name))})]})},code:`
import { Table } from '@mantine/core';

function Demo() {
  return (
    <Table{{props}}>
      {/* {...rows} */}
    </Table>
  );
}
`,controls:[{prop:"horizontalSpacing",type:"size",libraryValue:"xs",initialValue:"xs"},{prop:"verticalSpacing",type:"size",initialValue:"xs",libraryValue:"xs"}]},d={type:"code",code:`
import { Table } from '@mantine/core';

function Demo() {
  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table.ScrollContainer minWidth={500}>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Element position</Table.Th>
            <Table.Th>Element name</Table.Th>
            <Table.Th>Symbol</Table.Th>
            <Table.Th>Atomic mass</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}
`,component:function(){let e=o.map(e=>(0,i.jsxs)(r.Table.Tr,{children:[(0,i.jsx)(r.Table.Td,{children:e.position}),(0,i.jsx)(r.Table.Td,{children:e.name}),(0,i.jsx)(r.Table.Td,{children:e.symbol}),(0,i.jsx)(r.Table.Td,{children:e.mass})]},e.name));return(0,i.jsx)(r.Table.ScrollContainer,{minWidth:500,children:(0,i.jsxs)(r.Table,{children:[(0,i.jsx)(r.Table.Thead,{children:(0,i.jsxs)(r.Table.Tr,{children:[(0,i.jsx)(r.Table.Th,{children:"Element position"}),(0,i.jsx)(r.Table.Th,{children:"Element name"}),(0,i.jsx)(r.Table.Th,{children:"Symbol"}),(0,i.jsx)(r.Table.Th,{children:"Atomic mass"})]})}),(0,i.jsx)(r.Table.Tbody,{children:e})]})})}},u={type:"code",code:`
import { Table } from '@mantine/core';

function Demo() {
  const rows = elementsLong.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table.ScrollContainer minWidth={500} maxHeight={300}>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Element position</Table.Th>
            <Table.Th>Element name</Table.Th>
            <Table.Th>Symbol</Table.Th>
            <Table.Th>Atomic mass</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}
`,component:function(){let e=n.map(e=>(0,i.jsxs)(r.Table.Tr,{children:[(0,i.jsx)(r.Table.Td,{children:e.position}),(0,i.jsx)(r.Table.Td,{children:e.name}),(0,i.jsx)(r.Table.Td,{children:e.symbol}),(0,i.jsx)(r.Table.Td,{children:e.mass})]},e.name));return(0,i.jsx)(r.Table.ScrollContainer,{minWidth:500,maxHeight:300,children:(0,i.jsxs)(r.Table,{children:[(0,i.jsx)(r.Table.Thead,{children:(0,i.jsxs)(r.Table.Tr,{children:[(0,i.jsx)(r.Table.Th,{children:"Element position"}),(0,i.jsx)(r.Table.Th,{children:"Element name"}),(0,i.jsx)(r.Table.Th,{children:"Symbol"}),(0,i.jsx)(r.Table.Th,{children:"Atomic mass"})]})}),(0,i.jsx)(r.Table.Tbody,{children:e})]})})}},m={type:"code",code:`
import { Table } from '@mantine/core';

function Demo() {
  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table.ScrollContainer minWidth={500} type="native">
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Element position</Table.Th>
            <Table.Th>Element name</Table.Th>
            <Table.Th>Symbol</Table.Th>
            <Table.Th>Atomic mass</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}
`,component:function(){let e=o.map(e=>(0,i.jsxs)(r.Table.Tr,{children:[(0,i.jsx)(r.Table.Td,{children:e.position}),(0,i.jsx)(r.Table.Td,{children:e.name}),(0,i.jsx)(r.Table.Td,{children:e.symbol}),(0,i.jsx)(r.Table.Td,{children:e.mass})]},e.name));return(0,i.jsx)(r.Table.ScrollContainer,{minWidth:500,type:"native",children:(0,i.jsxs)(r.Table,{children:[(0,i.jsx)(r.Table.Thead,{children:(0,i.jsxs)(r.Table.Tr,{children:[(0,i.jsx)(r.Table.Th,{children:"Element position"}),(0,i.jsx)(r.Table.Th,{children:"Element name"}),(0,i.jsx)(r.Table.Th,{children:"Symbol"}),(0,i.jsx)(r.Table.Th,{children:"Atomic mass"})]})}),(0,i.jsx)(r.Table.Tbody,{children:e})]})})}},p={type:"code",code:`
import { Table } from '@mantine/core';

function Demo() {
  const rows = elementsLong.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table.ScrollContainer minWidth={500} maxHeight={300} type="native">
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Element position</Table.Th>
            <Table.Th>Element name</Table.Th>
            <Table.Th>Symbol</Table.Th>
            <Table.Th>Atomic mass</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}
`,component:function(){let e=n.map(e=>(0,i.jsxs)(r.Table.Tr,{children:[(0,i.jsx)(r.Table.Td,{children:e.position}),(0,i.jsx)(r.Table.Td,{children:e.name}),(0,i.jsx)(r.Table.Td,{children:e.symbol}),(0,i.jsx)(r.Table.Td,{children:e.mass})]},e.name));return(0,i.jsx)(r.Table.ScrollContainer,{minWidth:500,maxHeight:300,type:"native",children:(0,i.jsxs)(r.Table,{children:[(0,i.jsx)(r.Table.Thead,{children:(0,i.jsxs)(r.Table.Tr,{children:[(0,i.jsx)(r.Table.Th,{children:"Element position"}),(0,i.jsx)(r.Table.Th,{children:"Element name"}),(0,i.jsx)(r.Table.Th,{children:"Symbol"}),(0,i.jsx)(r.Table.Th,{children:"Atomic mass"})]})}),(0,i.jsx)(r.Table.Tbody,{children:e})]})})}};var h=e.i(191788),g=e.i(37541);let b=[{position:6,mass:12.011,symbol:"C",name:"Carbon"},{position:7,mass:14.007,symbol:"N",name:"Nitrogen"},{position:39,mass:88.906,symbol:"Y",name:"Yttrium"},{position:56,mass:137.33,symbol:"Ba",name:"Barium"},{position:58,mass:140.12,symbol:"Ce",name:"Cerium"}],f={type:"code",component:function(){let[e,t]=(0,h.useState)([]),o=b.map(o=>(0,i.jsxs)(r.Table.Tr,{bg:e.includes(o.position)?"var(--mantine-color-blue-light)":void 0,children:[(0,i.jsx)(r.Table.Td,{children:(0,i.jsx)(g.Checkbox,{"aria-label":"Select row",checked:e.includes(o.position),onChange:n=>t(n.currentTarget.checked?[...e,o.position]:e.filter(e=>e!==o.position))})}),(0,i.jsx)(r.Table.Td,{children:o.position}),(0,i.jsx)(r.Table.Td,{children:o.name}),(0,i.jsx)(r.Table.Td,{children:o.symbol}),(0,i.jsx)(r.Table.Td,{children:o.mass})]},o.name));return(0,i.jsxs)(r.Table,{children:[(0,i.jsx)(r.Table.Thead,{visibleFrom:"sm",children:(0,i.jsxs)(r.Table.Tr,{children:[(0,i.jsx)(r.Table.Th,{}),(0,i.jsx)(r.Table.Th,{children:"Element position"}),(0,i.jsx)(r.Table.Th,{children:"Element name"}),(0,i.jsx)(r.Table.Th,{children:"Symbol"}),(0,i.jsx)(r.Table.Th,{children:"Atomic mass"})]})}),(0,i.jsx)(r.Table.Tbody,{children:o})]})},defaultExpanded:!1,code:`
import { useState } from 'react';
import { Table, Checkbox } from '@mantine/core';

const elements = [
  { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
  { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
  { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
  { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
];

function Demo() {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const rows = elements.map((element) => (
    <Table.Tr
      key={element.name}
      bg={selectedRows.includes(element.position) ? 'var(--mantine-color-blue-light)' : undefined}
    >
      <Table.Td>
        <Checkbox
          aria-label="Select row"
          checked={selectedRows.includes(element.position)}
          onChange={(event) =>
            setSelectedRows(
              event.currentTarget.checked
                ? [...selectedRows, element.position]
                : selectedRows.filter((position) => position !== element.position)
            )
          }
        />
      </Table.Td>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th />
          <Table.Th>Element position</Table.Th>
          <Table.Th>Element name</Table.Th>
          <Table.Th>Symbol</Table.Th>
          <Table.Th>Atomic mass</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}
`},x={caption:"Some elements from the periodic table",head:["Element position","Atomic mass","Symbol","Element name"],body:[[6,12.011,"C","Carbon"],[7,14.007,"N","Nitrogen"],[39,88.906,"Y","Yttrium"],[56,137.33,"Ba","Barium"],[58,140.12,"Ce","Cerium"]]},T={type:"code",component:function(){return(0,i.jsx)(r.Table,{data:x})},code:`
import { Table, TableData } from '@mantine/core';

const tableData: TableData = {
  caption: 'Some elements from periodic table',
  head: ['Element position', 'Atomic mass', 'Symbol', 'Element name'],
  body: [
    [6, 12.011, 'C', 'Carbon'],
    [7, 14.007, 'N', 'Nitrogen'],
    [39, 88.906, 'Y', 'Yttrium'],
    [56, 137.33, 'Ba', 'Barium'],
    [58, 140.12, 'Ce', 'Cerium'],
  ],
};

function Demo() {
  return <Table data={tableData} />;
}
`},v={type:"code",code:`
import { Table } from '@mantine/core';

const elements = [
  { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
  { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
  { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
  { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
];

function Demo() {
  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table stickyHeader stickyHeaderOffset={60}>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Element position</Table.Th>
          <Table.Th>Element name</Table.Th>
          <Table.Th>Symbol</Table.Th>
          <Table.Th>Atomic mass</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
      <Table.Caption>Scroll page to see sticky thead</Table.Caption>
    </Table>
  );
}
`,component:function(){let e=o.map(e=>(0,i.jsxs)(r.Table.Tr,{children:[(0,i.jsx)(r.Table.Td,{children:e.position}),(0,i.jsx)(r.Table.Td,{children:e.name}),(0,i.jsx)(r.Table.Td,{children:e.symbol}),(0,i.jsx)(r.Table.Td,{children:e.mass})]},e.name));return(0,i.jsxs)(r.Table,{stickyHeader:!0,stickyHeaderOffset:"var(--docs-header-height)",children:[(0,i.jsx)(r.Table.Thead,{children:(0,i.jsxs)(r.Table.Tr,{children:[(0,i.jsx)(r.Table.Th,{children:"Element position"}),(0,i.jsx)(r.Table.Th,{children:"Element name"}),(0,i.jsx)(r.Table.Th,{children:"Symbol"}),(0,i.jsx)(r.Table.Th,{children:"Atomic mass"})]})}),(0,i.jsx)(r.Table.Tbody,{children:e}),(0,i.jsx)(r.Table.Caption,{children:"Scroll page to see sticky thead"})]})}},y={type:"code",code:`
import { Table } from '@mantine/core';

export function Demo() {
  return (
    <Table variant="vertical" layout="fixed" withTableBorder>
      <Table.Tbody>
        <Table.Tr>
          <Table.Th w={160}>Epic name</Table.Th>
          <Table.Td>7.x migration</Table.Td>
        </Table.Tr>

        <Table.Tr>
          <Table.Th>Status</Table.Th>
          <Table.Td>Open</Table.Td>
        </Table.Tr>

        <Table.Tr>
          <Table.Th>Total issues</Table.Th>
          <Table.Td>135</Table.Td>
        </Table.Tr>

        <Table.Tr>
          <Table.Th>Total story points</Table.Th>
          <Table.Td>874</Table.Td>
        </Table.Tr>

        <Table.Tr>
          <Table.Th>Last updated at</Table.Th>
          <Table.Td>September 26, 2024 17:41:26</Table.Td>
        </Table.Tr>
      </Table.Tbody>
    </Table>
  );
}
`,component:function(){return(0,i.jsx)(r.Table,{variant:"vertical",layout:"fixed",withTableBorder:!0,children:(0,i.jsxs)(r.Table.Tbody,{children:[(0,i.jsxs)(r.Table.Tr,{children:[(0,i.jsx)(r.Table.Th,{w:160,children:"Epic name"}),(0,i.jsx)(r.Table.Td,{children:"7.x migration"})]}),(0,i.jsxs)(r.Table.Tr,{children:[(0,i.jsx)(r.Table.Th,{children:"Status"}),(0,i.jsx)(r.Table.Td,{children:"Open"})]}),(0,i.jsxs)(r.Table.Tr,{children:[(0,i.jsx)(r.Table.Th,{children:"Total issues"}),(0,i.jsx)(r.Table.Td,{children:"135"})]}),(0,i.jsxs)(r.Table.Tr,{children:[(0,i.jsx)(r.Table.Th,{children:"Total story points"}),(0,i.jsx)(r.Table.Td,{children:"874"})]}),(0,i.jsxs)(r.Table.Tr,{children:[(0,i.jsx)(r.Table.Th,{children:"Last updated at"}),(0,i.jsx)(r.Table.Td,{children:"September 26, 2024 17:41:26"})]})]})})}};var S=e.i(943618);let C=[{product:"Apples",unitsSold:0x83fd3be2},{product:"Oranges",unitsSold:0x25314e33b},{product:"Bananas",unitsSold:0x499602d2},{product:"Pineapples",unitsSold:994881e4},{product:"Pears",unitsSold:0x250195167}],j={type:"configurator",component:function(e){let t=C.map(e=>(0,i.jsxs)(r.Table.Tr,{children:[(0,i.jsx)(r.Table.Td,{children:e.product}),(0,i.jsx)(r.Table.Td,{children:(0,i.jsx)(S.NumberFormatter,{value:e.unitsSold,thousandSeparator:!0})})]},e.product));return(0,i.jsxs)(r.Table,{...e,children:[(0,i.jsx)(r.Table.Thead,{children:(0,i.jsxs)(r.Table.Tr,{children:[(0,i.jsx)(r.Table.Th,{children:"Product"}),(0,i.jsx)(r.Table.Th,{children:"Units sold"})]})}),(0,i.jsx)(r.Table.Tbody,{children:t})]})},code:`
import { NumberFormatter, Table } from '@mantine/core';

const data = [
  { product: 'Apples', unitsSold: 2214411234 },
  { product: 'Oranges', unitsSold: 9983812411 },
  { product: 'Bananas', unitsSold: 1234567890 },
  { product: 'Pineapples', unitsSold: 9948810000 },
  { product: 'Pears', unitsSold: 9933771111 },
];

function Demo() {
  const rows = data.map((item) => (
    <Table.Tr key={item.product}>
      <Table.Td>{item.product}</Table.Td>
      <Table.Td>
        <NumberFormatter value={item.unitsSold} thousandSeparator />
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Table{{props}}>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Product</Table.Th>
          <Table.Th>Units sold</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}
`,controls:[{type:"boolean",prop:"tabularNums",initialValue:!0,libraryValue:!1}]};var I=(0,t.__exportAll)({captions:()=>l,configurator:()=>s,data:()=>T,rowSelection:()=>f,scrollContainer:()=>d,scrollContainerMaxHeight:()=>u,scrollContainerNative:()=>m,scrollContainerNativeMaxHeight:()=>p,spacingConfigurator:()=>c,stickyHeader:()=>v,tabularNums:()=>j,usage:()=>a,vertical:()=>y});e.s(["TableDemos",0,I],214045)},604531,e=>{"use strict";var t=e.i(648863),o=e.i(232471),n=e.i(883364),r=e.i(391398),i=e.i(56206);function a({className:e,children:t,...l}){return(0,r.jsx)(o.Box,{className:(0,i.default)("m_a4dc100e",e),...l,children:(0,r.jsx)(n.Text,{className:"m_f6c78959",children:t})})}let l=[,,,,,].fill(0).map((e,t)=>(0,r.jsx)(a,{children:t+1},t));var s=e.i(140763);let c={type:"configurator",component:function(e){return(0,r.jsx)(s.SimpleGrid,{...e,id:"grid-configurator",children:l})},code:`
import { SimpleGrid } from '@mantine/core';

function Demo() {
  return (
    <SimpleGrid{{props}}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </SimpleGrid>
  )
}
`,controls:[{prop:"cols",type:"number",initialValue:3,min:1,max:6,step:1,libraryValue:"__"},{prop:"spacing",type:"size",initialValue:"md",libraryValue:"md"},{prop:"verticalSpacing",type:"size",initialValue:"md",libraryValue:"md"}]},d={type:"code",component:function(){return(0,r.jsx)(s.SimpleGrid,{cols:{base:1,sm:2,lg:5},spacing:{base:10,sm:"xl"},verticalSpacing:{base:"md",sm:"xl"},children:l})},code:`
import { SimpleGrid } from '@mantine/core';

function Demo() {
  return (
    <SimpleGrid
      cols={{ base: 1, sm: 2, lg: 5 }}
      spacing={{ base: 10, sm: 'xl' }}
      verticalSpacing={{ base: 'md', sm: 'xl' }}
    >
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </SimpleGrid>
  );
}
`},u={type:"code",component:function(){return(0,r.jsx)("div",{style:{resize:"horizontal",overflow:"hidden",maxWidth:"100%"},children:(0,r.jsx)(s.SimpleGrid,{type:"container",cols:{base:1,"300px":2,"500px":5},spacing:{base:10,"300px":"xl"},children:l})})},code:`
import { SimpleGrid } from '@mantine/core';

function Demo() {
  return (
    // Wrapper div is added for demonstration purposes only,
    // it is not required in real projects
    <div style={{ resize: 'horizontal', overflow: 'hidden', maxWidth: '100%' }}>
      <SimpleGrid
        type="container"
        cols={{ base: 1, '300px': 2, '500px': 5 }}
        spacing={{ base: 10, '300px': 'xl' }}
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </SimpleGrid>
    </div>
  );
}
`},m={type:"code",component:function(){return(0,r.jsx)(s.SimpleGrid,{minColWidth:"200px",children:l})},code:`
import { SimpleGrid } from '@mantine/core';

function Demo() {
  return (
    <SimpleGrid minColWidth="200px">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </SimpleGrid>
  );
}
`};var p=e.i(671640);let h=`
import { SimpleGrid } from '@mantine/core';

function Demo() {
  return (
    <>
      {/* auto-fill: empty tracks are preserved, items do not stretch */}
      <SimpleGrid minColWidth="200px" autoFlow="auto-fill">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </SimpleGrid>

      {/* auto-fit: empty tracks are collapsed, items stretch to fill the row */}
      <SimpleGrid minColWidth="200px" autoFlow="auto-fit">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </SimpleGrid>
    </>
  );
}
`,g=[,,,].fill(0).map((e,t)=>(0,r.jsx)(a,{children:t+1},t)),b={type:"code",component:function(){return(0,r.jsxs)(p.Stack,{children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(n.Text,{mb:"xs",fw:500,children:"auto-fill"}),(0,r.jsx)(s.SimpleGrid,{minColWidth:"200px",autoFlow:"auto-fill",children:g})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)(n.Text,{mb:"xs",fw:500,children:"auto-fit"}),(0,r.jsx)(s.SimpleGrid,{minColWidth:"200px",autoFlow:"auto-fit",children:g})]})]})},code:h},f={type:"code",component:function(){return(0,r.jsx)(s.SimpleGrid,{cols:3,autoRows:"minmax(100px, auto)",children:l})},code:`
import { SimpleGrid } from '@mantine/core';

function Demo() {
  return (
    <SimpleGrid cols={3} autoRows="minmax(100px, auto)">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </SimpleGrid>
  );
}
`};var x=(0,t.__exportAll)({autoFlow:()=>b,autoRows:()=>f,container:()=>u,minColWidth:()=>m,responsive:()=>d,usage:()=>c});e.s(["SimpleGridDemos",0,x],604531)},210200,e=>{"use strict";var t=e.i(191788),o=e.i(171481);let n=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,20A108,108,0,0,0,31.85,177.23L21,209.66A20,20,0,0,0,46.34,235l32.43-10.81A108,108,0,1,0,128,20Zm0,192a84,84,0,0,1-42.06-11.27,12,12,0,0,0-6-1.62,12.1,12.1,0,0,0-3.8.62l-29.79,9.93,9.93-29.79a12,12,0,0,0-1-9.81A84,84,0,1,1,128,212Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M224,128A96,96,0,0,1,79.93,211.11h0L42.54,223.58a8,8,0,0,1-10.12-10.12l12.47-37.39h0A96,96,0,1,1,224,128Z",opacity:"0.2"}),t.createElement("path",{d:"M128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M232,128A104,104,0,0,1,79.12,219.82L45.07,231.17a16,16,0,0,1-20.24-20.24l11.35-34.05A104,104,0,1,1,232,128Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,26A102,102,0,0,0,38.35,176.69L26.73,211.56a14,14,0,0,0,17.71,17.71l34.87-11.62A102,102,0,1,0,128,26Zm0,192a90,90,0,0,1-45.06-12.08,6.09,6.09,0,0,0-3-.81,6.2,6.2,0,0,0-1.9.31L40.65,217.88a2,2,0,0,1-2.53-2.53L50.58,178a6,6,0,0,0-.5-4.91A90,90,0,1,1,128,218Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,28A100,100,0,0,0,40.53,176.5l-11.9,35.69a12,12,0,0,0,15.18,15.18l35.69-11.9A100,100,0,1,0,128,28Zm0,192a92,92,0,0,1-46.07-12.35,4.05,4.05,0,0,0-2-.54,3.93,3.93,0,0,0-1.27.21L41.28,219.78a4,4,0,0,1-5.06-5.06l12.46-37.38a4,4,0,0,0-.33-3.27A92,92,0,1,1,128,220Z"}))]]),r=t.forwardRef((e,r)=>t.createElement(o.default,{ref:r,...e,weights:n}));r.displayName="ChatCircleIcon",e.s(["ChatCircleIcon",0,r],210200)},508780,e=>{"use strict";var t=e.i(648863),o=e.i(391398),n=e.i(577824);let r=`
type FilterPropsRes<T extends Record<string, any>> = {
  [Key in keyof T]-?: T[Key] extends undefined ? never : T[Key];
};

export function filterProps<T extends Record<string, any>>(props: T) {
  return Object.keys(props).reduce<FilterPropsRes<T>>((acc, key: keyof T) => {
    if (props[key] !== undefined) {
      acc[key] = props[key];
    }
    return acc;
  }, {} as FilterPropsRes<T>);
}
`,i={type:"code",component:function(){return(0,o.jsx)(n.CodeHighlight,{code:r,language:"tsx",radius:"md"})},code:`
import { CodeHighlight } from '@mantine/code-highlight';

const exampleCode = \`${r}\`;

function Demo() {
  return <CodeHighlight code={exampleCode} language="tsx" radius="md" />;
}
`};var a=e.i(137218);let l=`
import { Group, Button, MantineProvider, createTheme } from '@mantine/core';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    Button: Button.extend({
      classNames: classes,
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Group>
        <Button variant="danger">Danger variant</Button>
        <Button variant="primary">Primary variant</Button>
      </Group>
    </MantineProvider>
  );
}
`,s=`
.root {
  &[data-variant='danger'] {
    background-color: var(--mantine-color-red-9);
    color: var(--mantine-color-red-0);
  }

  &[data-variant='primary'] {
    background: linear-gradient(45deg, #4b6cb7 10%, #253b67 90%);
    color: var(--mantine-color-white);
  }
}
`,c={type:"code",component:function(){return(0,o.jsx)(a.CodeHighlightTabs,{radius:"md",code:[{fileName:"Demo.tsx",code:l,language:"tsx"},{fileName:"Demo.module.css",code:s,language:"scss"}]})},code:[{fileName:"Demo.tsx",code:`
import { CodeHighlightTabs } from '@mantine/code-highlight';
import { tsxCode, cssCode } from './code';

function Demo() {
  return (
    <CodeHighlightTabs
      radius="md"
      code={[
        { fileName: 'Demo.tsx', code: tsxCode, language: 'tsx' },
        { fileName: 'Demo.module.css', code: cssCode, language: 'scss' },
      ]}
    />
  );
}
`,language:"tsx"},{fileName:"code.ts",code:`
export const tsxCode = \`${l}\`;

export const cssCode = \`${s}\`;
`,language:"tsx"}]};var d=e.i(271270),u=e.i(999479);let m=`
function Button() {
  return <button>Click me</button>;
}
`,p=`
.button {
  background-color: transparent;
  color: var(--mantine-color-blue-9);
}
`,h={type:"code",component:function(){return(0,o.jsx)(a.CodeHighlightTabs,{radius:"md",code:[{fileName:"Button.tsx",code:m,language:"tsx",icon:(0,o.jsx)(u.TypeScriptIcon,{size:14})},{fileName:"Button.module.css",code:p,language:"scss",icon:(0,o.jsx)(d.CssIcon,{size:14})}]})},code:`
import { CodeHighlightTabs } from '@mantine/code-highlight';
import { TypeScriptIcon, CssIcon } from '@mantinex/dev-icons';

const tsxCode = \`${m}\`;

const cssCode = \`${p}\`;

function Demo() {
  const tsIcon = <TypeScriptIcon size={14} />;
  const cssIcon = <CssIcon size={14} />;

  return (
    <CodeHighlightTabs
      radius="md"
      code={[
        {
          fileName: 'Button.tsx',
          code: tsxCode,
          language: 'tsx',
          icon: tsIcon,
        },
        {
          fileName: 'Button.module.css',
          code: cssCode,
          language: 'scss',
          icon: cssIcon,
        },
      ]}
    />
  );
}
`},g=`
function Button() {
  return <button>Click me</button>;
}
`,b=`
.button {
  background-color: transparent;
  color: var(--mantine-color-blue-9);
}
`;function f(e){return e.endsWith(".ts")||e.endsWith(".tsx")?(0,o.jsx)(u.TypeScriptIcon,{size:14}):e.endsWith(".css")?(0,o.jsx)(d.CssIcon,{size:14}):null}let x={type:"code",component:function(){return(0,o.jsx)(a.CodeHighlightTabs,{getFileIcon:f,radius:"md",code:[{fileName:"Button.tsx",code:g,language:"tsx"},{fileName:"Button.module.css",code:b,language:"scss"}]})},code:`
import { CodeHighlightTabs } from '@mantine/code-highlight';
import { TypeScriptIcon, CssIcon } from '@mantinex/dev-icons';

const tsxCode = \`${g}\`;

const cssCode = \`${b}\`;

function getFileIcon(fileName: string) {
  if (fileName.endsWith('.ts') || fileName.endsWith('.tsx')) {
    return <TypeScriptIcon size={14} />;
  }

  if (fileName.endsWith('.css')) {
    return <CssIcon size={14} />;
  }

  return null;
}

function Demo() {
  return (
    <CodeHighlightTabs
      getFileIcon={getFileIcon}
      radius="md"
      code={[
        {
          fileName: 'Button.tsx',
          code: tsxCode,
          language: 'tsx',
        },
        {
          fileName: 'Button.module.css',
          code: cssCode,
          language: 'scss',
        },
      ]}
    />
  );
}
`},T=`
import { Group, Button, MantineProvider, createTheme } from '@mantine/core';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    Button: Button.extend({
      classNames: classes,
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Group>
        <Button variant="danger">Danger variant</Button>
        <Button variant="primary">Primary variant</Button>
      </Group>
    </MantineProvider>
  );
}
`,v=`
.root {
  &[data-variant='danger'] {
    background-color: var(--mantine-color-red-9);
    color: var(--mantine-color-red-0);
  }

  &[data-variant='primary'] {
    background: linear-gradient(45deg, #4b6cb7 10%, #253b67 90%);
    color: var(--mantine-color-white);
  }
}
`,y={type:"code",component:function(){return(0,o.jsx)(a.CodeHighlightTabs,{withExpandButton:!0,defaultExpanded:!1,expandCodeLabel:"Show full code",collapseCodeLabel:"Show less",code:[{fileName:"Demo.tsx",code:T,language:"tsx"},{fileName:"Demo.module.css",code:v,language:"scss"}]})},code:[{fileName:"Demo.tsx",code:`
import { CodeHighlightTabs } from '@mantine/code-highlight';
import { tsxCode, cssCode } from './code';

function Demo() {
  return (
    <CodeHighlightTabs
      withExpandButton
      defaultExpanded={false}
      expandLabel="Show full code"
      collapseLabel="Show less"
      code={[
        { fileName: 'Demo.tsx', code: tsxCode, language: 'tsx' },
        { fileName: 'Demo.module.css', code: cssCode, language: 'scss' },
      ]}
    />
  );
}
`,language:"tsx"},{fileName:"code.ts",code:`
export const tsxCode = \`${T}\`;

export const cssCode = \`${v}\`;
`,language:"tsx"}]},S=`
function Button() {
  return <button>Click me</button>;
}
`,C={type:"code",component:function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.CodeHighlight,{code:`// Custom copy label${S}`,language:"tsx",copyLabel:"Copy button code",copiedLabel:"Copied!",radius:"md"}),(0,o.jsx)(n.CodeHighlight,{code:`// Without copy button${S}`,language:"tsx",withCopyButton:!1,mt:"md",radius:"md"})]})},code:`
import { CodeHighlight } from '@mantine/code-highlight';

const exampleCode = \`${S}\`;

function Demo() {
  return (
    <>
      <CodeHighlight
        code={\`// Custom copy label\${exampleCode}\`}
        language="tsx"
        copyLabel="Copy button code"
        copiedLabel="Copied!"
        radius="md"
      />
      <CodeHighlight
        code={\`// Without copy button\${exampleCode}\`}
        language="tsx"
        withCopyButton={false}
        mt="md"
        radius="md"
      />
    </>
  );
}
`};var j=e.i(883364),I=e.i(297800),w=e.i(481178),A=e.i(275519),M=e.i(433512),D=e.i(317477),E=e.i(44091),N=e.i(391466);let B=(0,w.createVarsResolver)((e,{background:t,radius:o})=>({inlineCodeHighlight:{"--ch-background":t?(0,D.getThemeColor)(t,e):void 0,"--ch-radius":void 0!==o?(0,M.getRadius)(o):void 0}})),G=(0,A.factory)(e=>{let t=(0,E.useProps)("InlineCodeHighlight",null,e),{classNames:r,className:i,style:a,styles:l,unstyled:s,vars:c,attributes:d,ref:u,...m}=t,p=(0,N.useStyles)({name:"InlineCodeHighlight",classes:I.default,props:t,className:i,style:a,classNames:r,styles:l,unstyled:s,attributes:d,vars:c,varsResolver:B,rootSelector:"inlineCodeHighlight"});return(0,o.jsx)(n.CodeHighlight,{...m,ref:u,...p("inlineCodeHighlight"),__inline:!0})});G.displayName="@mantine/code-highlight/InlineCodeHighlight",G.classes=I.default,G.varsResolver=B;let P={type:"code",component:function(){return(0,o.jsxs)(j.Text,{children:["You can highlight code inline:"," ",(0,o.jsx)(G,{code:'<InlineCodeHighlight code="" language="tsx" />',language:"tsx",withBorder:!0}),". Is that not cool?"]})},code:`
import { Text } from '@mantine/core';
import { InlineCodeHighlight } from '@mantine/code-highlight';

function Demo() {
  return (
    <Text>
      You can highlight code inline:{' '}
      <InlineCodeHighlight
        code='<InlineCodeHighlight code="" language="tsx" />'
        language="tsx"
        withBorder
      />
      . Is that not cool?
    </Text>
  );
}
`};var z=e.i(210200),H=e.i(191788),k=e.i(171481);let V=new Map([["bold",H.createElement(H.Fragment,null,H.createElement("path",{d:"M225.6,62.65l-88-48.18a19.91,19.91,0,0,0-19.2,0l-88,48.17A20,20,0,0,0,20,80.19v95.62a20,20,0,0,0,10.4,17.55l88,48.17a19.89,19.89,0,0,0,19.2,0l88-48.18A20,20,0,0,0,236,175.81V80.19A20,20,0,0,0,225.6,62.65ZM164,152v47.72l-24,13.14V135.11l72-39.42v22.92l-41.76,22.86A12,12,0,0,0,164,152ZM85.76,141.47,44,118.61V95.69l72,39.42v77.75L92,199.72V152A12,12,0,0,0,85.76,141.47ZM83.14,61.13l39.1,21.4a11.95,11.95,0,0,0,11.52,0l39.1-21.4L199,75.45l-71,38.87L57,75.45ZM128,36.57l19.87,10.88L128,58.33,108.13,47.45ZM44,146l24,13.14v27.47L44,173.44Zm144,40.61V159.11L212,146v27.47Z"}))],["duotone",H.createElement(H.Fragment,null,H.createElement("path",{d:"M32,125.73,80,152v54.84l-43.84-24a8,8,0,0,1-4.16-7ZM176,152v54.84l43.84-24a8,8,0,0,0,4.16-7v-50.1ZM124.16,25l-41,22.46h0L128,72l44.86-24.56L131.84,25A8,8,0,0,0,124.16,25Z",opacity:"0.2"}),H.createElement("path",{d:"M223.68,66.15,135.68,18a15.94,15.94,0,0,0-15.36,0l-88,48.18a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM168,152v50.09l-32,17.52V132.74l80-43.8v32l-43.84,24A8,8,0,0,0,168,152Zm-84.16-7L40,121v-32l80,43.8v86.87L88,202.09V152A8,8,0,0,0,83.84,145Zm-.7-88.41,41,22.45a8,8,0,0,0,7.68,0l41-22.45,34.48,18.87L128,118.88,48.66,75.44ZM128,32h0l28.2,15.44L128,62.89,99.8,47.45ZM40,139.22l32,17.52v36.59L40,175.82Zm144,54.11V156.74l32-17.52v36.6Z"}))],["fill",H.createElement(H.Fragment,null,H.createElement("path",{d:"M229.89,72.25v0l0,0a15.93,15.93,0,0,0-6.18-6.06L135.68,18a15.94,15.94,0,0,0-15.36,0l-88,48.18a15.93,15.93,0,0,0-6.18,6.06l0,0v0A16,16,0,0,0,24,80.18v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,229.89,72.25ZM120,219.61,88,202.09V152a8,8,0,0,0-4.16-7L40,121v-32l80,43.8Zm8-100.73L48.66,75.44,83.14,56.57l41,22.45a8,8,0,0,0,7.68,0l41-22.45,34.48,18.87Zm88,2.1-43.84,24a8,8,0,0,0-4.16,7v50.09l-32,17.52V132.74l80-43.8Z"}))],["light",H.createElement(H.Fragment,null,H.createElement("path",{d:"M222.72,67.91l-88-48.18a13.9,13.9,0,0,0-13.44,0l-88,48.17A14,14,0,0,0,26,80.18v95.64a14,14,0,0,0,7.28,12.28l88,48.17a13.92,13.92,0,0,0,13.44,0l88-48.17A14,14,0,0,0,230,175.82V80.18A14,14,0,0,0,222.72,67.91ZM128,121.16,44.49,75.44,83.14,54.29l42,23a6,6,0,0,0,5.76,0l42-23,38.65,21.15Zm-1-90.91a2,2,0,0,1,1.92,0l31.4,17.2L128,65.16,95.63,47.45ZM38,175.82v-40l36,19.7v41.16L39,177.57A2,2,0,0,1,38,175.82Zm48,27.46V152a6,6,0,0,0-3.12-5.26L38,122.17V85.57l84,46V223ZM134,223V131.56l84-46v36.6l-44.88,24.57A6,6,0,0,0,170,152v51.28Zm83-45.42-35,19.14V155.55l36-19.7v40A2,2,0,0,1,217,177.57Z"}))],["regular",H.createElement(H.Fragment,null,H.createElement("path",{d:"M223.68,66.15,135.68,18a15.94,15.94,0,0,0-15.36,0l-88,48.18a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM168,152v50.09l-32,17.52V132.74l80-43.8v32l-43.84,24A8,8,0,0,0,168,152Zm-84.16-7L40,121v-32l80,43.8v86.87L88,202.09V152A8,8,0,0,0,83.84,145Zm-.7-88.41,41,22.45a8,8,0,0,0,7.68,0l41-22.45,34.48,18.87L128,118.88,48.66,75.44ZM128,32h0l28.2,15.44L128,62.89,99.8,47.45ZM40,139.22l32,17.52v36.59L40,175.82Zm144,54.11V156.74l32-17.52v36.6Z"}))],["thin",H.createElement(H.Fragment,null,H.createElement("path",{d:"M221.76,69.66l-88-48.18a12,12,0,0,0-11.52,0l-88,48.18A12,12,0,0,0,28,80.18v95.64a12,12,0,0,0,6.24,10.52l88,48.18a11.95,11.95,0,0,0,11.52,0l88-48.18A12,12,0,0,0,228,175.82V80.18A12,12,0,0,0,221.76,69.66ZM128,123.44l-87.67-48L83.14,52l42.94,23.5a4,4,0,0,0,3.84,0L172.86,52l42.81,23.43ZM126.08,28.5a3.94,3.94,0,0,1,3.84,0l34.61,19L128,67.44l-36.53-20ZM36,175.82V132.47l40,21.9v45.72L38.08,179.33A4,4,0,0,1,36,175.82Zm48,28.65V152a4,4,0,0,0-2.08-3.51L36,123.35V82.19l88,48.18v96Zm48,21.89v-96l88-48.18v41.16l-45.92,25.14A4,4,0,0,0,172,152v52.47Zm85.92-47L180,200.09V154.37l40-21.9v43.35A4,4,0,0,1,217.92,179.33Z"}))]]),F=H.forwardRef((e,t)=>H.createElement(k.default,{ref:t,...e,weights:V}));F.displayName="CodesandboxLogoIcon";var L=e.i(417063);let Z=`
function greet() {
  return 'Hello, World!';
}
`,_={type:"code",component:function(){return(0,o.jsx)(n.CodeHighlight,{code:Z,language:"tsx",radius:"md",controls:[(0,o.jsx)(L.CodeHighlightControl,{component:"a",href:"https://codesandbox.io",target:"_blank",tooltipLabel:"Open on codesandbox",children:(0,o.jsx)(F,{})},"sandbox"),(0,o.jsx)(L.CodeHighlightControl,{tooltipLabel:"Discuss with GPT",children:(0,o.jsx)(z.ChatCircleIcon,{})},"gpt")]})},code:`
import { CodesandboxLogoIcon, ChatCircleIcon } from '@phosphor-icons/react';
import { CodeHighlight, CodeHighlightControl } from '@mantine/code-highlight';

const exampleCode = \`${Z}\`;

function Demo() {
  return (
    <CodeHighlight
      code={exampleCode}
      language="tsx"
      radius="md"
      controls={[
        <CodeHighlightControl
          component="a"
          href="https://codesandbox.io"
          target="_blank"
          tooltipLabel="Open on codesandbox"
          key="sandbox"
        >
          <CodesandboxLogoIcon />
        </CodeHighlightControl>,
        <CodeHighlightControl tooltipLabel="Discuss with GPT" key="gpt">
          <ChatCircleIcon />
        </CodeHighlightControl>,
      ]}
    />
  );
}
`},O=`
import { Group, Avatar, Text } from '@mantine/core';

interface ItemProps extends React.ComponentProps<'div'> {
  image: string;
  label: string;
  description: string;
}

const SelectItem = ({ image, label, description, ...others }: ItemProps) => (
  <div {...others}>
    <Group noWrap>
      <Avatar src={image} />
      <div>
        <Text size="sm">{label}</Text>
        <Text size="xs" opacity={0.65}>
          {description}
        </Text>
      </div>
    </Group>
  </div>
);
`,R={type:"code",component:function(){return(0,o.jsx)(n.CodeHighlight,{code:O,language:"tsx",withLineNumbers:!0})},code:`
import { CodeHighlight } from '@mantine/code-highlight';

const exampleCode = \`...\`;

function Demo() {
  return <CodeHighlight code={exampleCode} language="tsx" withLineNumbers />;
}
`};var W=(0,t.__exportAll)({copy:()=>C,customControl:()=>_,expand:()=>y,inline:()=>P,lineNumbers:()=>R,tabs:()=>c,tabsGetIcons:()=>x,tabsIcons:()=>h,usage:()=>i});e.s(["CodeHighlightDemos",0,W],508780)},118981,e=>{"use strict";var t=e.i(648863),o=e.i(20035),n=e.i(391398);function r({children:e,...t}){return(0,n.jsx)(o.Grid.Col,{...t,children:(0,n.jsx)("div",{className:"m_548ba23a",children:(0,n.jsx)("div",{className:"m_60a4592e",children:e})})})}let i={type:"code",code:`
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid>
      <Grid.Col span={4}>1</Grid.Col>
      <Grid.Col span={4}>2</Grid.Col>
      <Grid.Col span={4}>3</Grid.Col>
    </Grid>
  );
}
`,component:function(){return(0,n.jsxs)(o.Grid,{children:[(0,n.jsx)(r,{span:4,children:"1"}),(0,n.jsx)(r,{span:4,children:"2"}),(0,n.jsx)(r,{span:4,children:"3"})]})}},a={type:"configurator",component:function(e){return(0,n.jsxs)(o.Grid,{...e,children:[(0,n.jsx)(r,{span:4,children:"1"}),(0,n.jsx)(r,{span:4,children:"2"}),(0,n.jsx)(r,{span:4,children:"3"}),(0,n.jsx)(r,{span:4,children:"4"}),(0,n.jsx)(r,{span:4,children:"5"})]})},code:`
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid{{props}}>
      <Grid.Col span={4}>1</Grid.Col>
      <Grid.Col span={4}>2</Grid.Col>
      <Grid.Col span={4}>3</Grid.Col>
      <Grid.Col span={4}>4</Grid.Col>
      <Grid.Col span={4}>5</Grid.Col>
    </Grid>
  );
}
`,controls:[{prop:"grow",type:"boolean",initialValue:!0,libraryValue:!1},{prop:"gap",type:"size",initialValue:"md",libraryValue:"md"}]},l={type:"code",code:`
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid>
      <Grid.Col span={3}>1</Grid.Col>
      <Grid.Col span={3}>2</Grid.Col>
      <Grid.Col span={3} offset={3}>3</Grid.Col>
    </Grid>
  );
}
`,component:function(){return(0,n.jsxs)(o.Grid,{children:[(0,n.jsx)(r,{span:3,children:"1"}),(0,n.jsx)(r,{span:3,children:"2"}),(0,n.jsx)(r,{span:3,offset:3,children:"3"})]})}},s={type:"code",code:`
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid>
      <Grid.Col span={3} order={{ base: 2, sm: 1, lg: 3 }}>2</Grid.Col>
      <Grid.Col span={3} order={{ base: 3, sm: 2, lg: 2 }}>3</Grid.Col>
      <Grid.Col span={3} order={{ base: 1, sm: 3, lg: 1 }}>1</Grid.Col>
    </Grid>
  );
}
`,component:function(){return(0,n.jsxs)(o.Grid,{children:[(0,n.jsx)(r,{span:3,order:{base:2,sm:1,lg:3},children:"2"}),(0,n.jsx)(r,{span:3,order:{base:3,sm:2,lg:2},children:"3"}),(0,n.jsx)(r,{span:3,order:{base:1,sm:3,lg:1},children:"1"})]})}},c={type:"code",code:`
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid>
      <Grid.Col span={4}>1</Grid.Col>
      <Grid.Col span={4}>2</Grid.Col>
      <Grid.Col span={4}>3</Grid.Col>
      <Grid.Col span={4}>4</Grid.Col>
    </Grid>
  );
}
`,component:function(){return(0,n.jsxs)(o.Grid,{children:[(0,n.jsx)(r,{span:4,children:"1"}),(0,n.jsx)(r,{span:4,children:"2"}),(0,n.jsx)(r,{span:4,children:"3"}),(0,n.jsx)(r,{span:4,children:"4"})]})}},d={type:"configurator",component:function(e){return(0,n.jsxs)(o.Grid,{...e,id:"grid-configurator",children:[(0,n.jsx)(r,{span:3,h:80,children:"1"}),(0,n.jsx)(r,{span:3,h:120,children:"2"}),(0,n.jsx)(r,{span:3,h:100,children:"3"})]})},code:`
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid{{props}}>
      <Grid.Col span={3} h={80}>1</Grid.Col>
      <Grid.Col span={3} h={120}>2</Grid.Col>
      <Grid.Col span={3} h={100}>3</Grid.Col>
    </Grid>
  );
}
`,controls:[{prop:"justify",type:"select",initialValue:"flex-start",libraryValue:"__",data:[{label:"flex-start",value:"flex-start"},{label:"flex-end",value:"flex-end"},{label:"center",value:"center"},{label:"space-between",value:"space-between"},{label:"space-around",value:"space-around"}]},{prop:"align",type:"select",initialValue:"flex-start",libraryValue:"__",data:[{label:"flex-start",value:"flex-start"},{label:"flex-end",value:"flex-end"},{label:"center",value:"center"}]}]},u={type:"code",code:`
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>1</Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>2</Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>3</Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>4</Grid.Col>
    </Grid>
  );
}
`,component:function(){return(0,n.jsxs)(o.Grid,{children:[(0,n.jsx)(r,{span:{base:12,md:6,lg:3},children:"1"}),(0,n.jsx)(r,{span:{base:12,md:6,lg:3},children:"2"}),(0,n.jsx)(r,{span:{base:12,md:6,lg:3},children:"3"}),(0,n.jsx)(r,{span:{base:12,md:6,lg:3},children:"4"})]})}},m={type:"code",code:`
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid columns={24}>
      <Grid.Col span={12}>1</Grid.Col>
      <Grid.Col span={6}>2</Grid.Col>
      <Grid.Col span={6}>3</Grid.Col>
    </Grid>
  );
}
`,component:function(){return(0,n.jsxs)(o.Grid,{columns:24,children:[(0,n.jsx)(r,{span:12,children:"1"}),(0,n.jsx)(r,{span:6,children:"2"}),(0,n.jsx)(r,{span:6,children:"3"})]})}},p={type:"code",code:`
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid>
      <Grid.Col span="auto">1</Grid.Col>
      <Grid.Col span={6}>2</Grid.Col>
      <Grid.Col span="auto">3</Grid.Col>
    </Grid>
  );
}
`,component:function(){return(0,n.jsxs)(o.Grid,{children:[(0,n.jsx)(r,{span:"auto",children:"1"}),(0,n.jsx)(r,{span:6,children:"2"}),(0,n.jsx)(r,{span:"auto",children:"3"})]})}},h={type:"code",code:`
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid>
      <Grid.Col span="content">fit content</Grid.Col>
      <Grid.Col span={6}>2</Grid.Col>
    </Grid>
  );
}
`,component:function(){return(0,n.jsxs)(o.Grid,{children:[(0,n.jsx)(r,{span:"content",children:"fit content"}),(0,n.jsx)(r,{span:6,children:"2"})]})}},g={type:"code",code:`
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid gap={{ base: 5, xs: 'md', md: 'xl', xl: 50 }}>
      <Grid.Col span={4}>1</Grid.Col>
      <Grid.Col span={4}>2</Grid.Col>
      <Grid.Col span={4}>3</Grid.Col>
    </Grid>
  );
}
`,component:function(){return(0,n.jsxs)(o.Grid,{gap:{base:5,xs:"md",md:"xl",xl:50},children:[(0,n.jsx)(r,{span:4,children:"1"}),(0,n.jsx)(r,{span:4,children:"2"}),(0,n.jsx)(r,{span:4,children:"3"})]})}},b={type:"code",code:`
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid gap="md" rowGap="xl" columnGap="sm">
      <Grid.Col span={3}>1</Grid.Col>
      <Grid.Col span={3}>2</Grid.Col>
      <Grid.Col span={3}>3</Grid.Col>
      <Grid.Col span={3}>4</Grid.Col>
      <Grid.Col span={3}>5</Grid.Col>
      <Grid.Col span={3}>6</Grid.Col>
      <Grid.Col span={3}>7</Grid.Col>
      <Grid.Col span={3}>8</Grid.Col>
    </Grid>
  );
}
`,component:function(){return(0,n.jsxs)(o.Grid,{gap:"md",rowGap:"xl",columnGap:"sm",children:[(0,n.jsx)(r,{span:3,children:"1"}),(0,n.jsx)(r,{span:3,children:"2"}),(0,n.jsx)(r,{span:3,children:"3"}),(0,n.jsx)(r,{span:3,children:"4"}),(0,n.jsx)(r,{span:3,children:"5"}),(0,n.jsx)(r,{span:3,children:"6"}),(0,n.jsx)(r,{span:3,children:"7"}),(0,n.jsx)(r,{span:3,children:"8"})]})}},f={type:"code",code:`
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid align="stretch">
      <Grid.Col span={4} align="flex-start">
        <div style={{ height: '100px', background: 'var(--mantine-color-blue-light)' }}>
          flex-start
        </div>
      </Grid.Col>
      <Grid.Col span={4} align="center">
        <div style={{ height: '100px', background: 'var(--mantine-color-blue-light)' }}>
          center
        </div>
      </Grid.Col>
      <Grid.Col span={4} align="flex-end">
        <div style={{ height: '100px', background: 'var(--mantine-color-blue-light)' }}>
          flex-end
        </div>
      </Grid.Col>
    </Grid>
  );
}
`,component:function(){return(0,n.jsxs)(o.Grid,{align:"stretch",children:[(0,n.jsx)(r,{span:4,align:"flex-start",style:{minHeight:"150px"},children:"flex-start"}),(0,n.jsx)(r,{span:4,align:"center",style:{minHeight:"150px"},children:"center"}),(0,n.jsx)(r,{span:4,align:"flex-end",style:{minHeight:"150px"},children:"flex-end"})]})}},x={type:"code",code:`
import { Grid } from '@mantine/core';

function Demo() {
  return (
    // Wrapper div is added for demonstration purposes only.
    // It is not required in real projects.
    <div style={{ resize: 'horizontal', overflow: 'hidden', maxWidth: '100%' }}>
      <Grid
        type="container"
        breakpoints={{ xs: '100px', sm: '200px', md: '300px', lg: '400px', xl: '500px' }}
      >
        <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>1</Grid.Col>
        <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>2</Grid.Col>
        <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>3</Grid.Col>
        <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>4</Grid.Col>
      </Grid>
    </div>
  );
}
`,component:function(){return(0,n.jsx)("div",{style:{resize:"horizontal",overflow:"hidden",maxWidth:"100%"},children:(0,n.jsxs)(o.Grid,{type:"container",breakpoints:{xs:"100px",sm:"200px",md:"300px",lg:"400px",xl:"500px"},children:[(0,n.jsx)(r,{span:{base:12,md:6,lg:3},children:"1"}),(0,n.jsx)(r,{span:{base:12,md:6,lg:3},children:"2"}),(0,n.jsx)(r,{span:{base:12,md:6,lg:3},children:"3"}),(0,n.jsx)(r,{span:{base:12,md:6,lg:3},children:"4"})]})})}};var T=(0,t.__exportAll)({auto:()=>p,columnAlign:()=>f,columns:()=>m,container:()=>x,content:()=>h,flexConfigurator:()=>d,gap:()=>g,growConfigurator:()=>a,offset:()=>l,order:()=>s,responsive:()=>u,rowColumnGap:()=>b,rows:()=>c,usage:()=>i});e.s(["GridDemos",0,T],118981)},68737,e=>{"use strict";var t=e.i(648863),o=e.i(424035),n=e.i(391398);let r={type:"configurator",component:function(e){return(0,n.jsx)(o.Progress,{...e})},code:`
import { Progress } from '@mantine/core';

function Demo() {
  return <Progress{{props}} />;
}
`,centered:!0,maxWidth:400,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"radius",type:"size",initialValue:"md",libraryValue:"md"},{prop:"size",type:"size",initialValue:"md",libraryValue:"md"},{prop:"value",type:"number",initialValue:50,max:100,min:0,step:10,libraryValue:"__"},{prop:"striped",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"animated",type:"boolean",initialValue:!1,libraryValue:!1}]},i={type:"code",component:function(){return(0,n.jsxs)(o.Progress.Root,{size:"xl",children:[(0,n.jsx)(o.Progress.Section,{value:35,color:"cyan",children:(0,n.jsx)(o.Progress.Label,{children:"Documents"})}),(0,n.jsx)(o.Progress.Section,{value:28,color:"pink",children:(0,n.jsx)(o.Progress.Label,{children:"Photos"})}),(0,n.jsx)(o.Progress.Section,{value:15,color:"orange",children:(0,n.jsx)(o.Progress.Label,{children:"Other"})})]})},code:`
import { Progress } from '@mantine/core';

function Demo() {
  return (
    <Progress.Root size="xl">
      <Progress.Section value={35} color="cyan">
        <Progress.Label>Documents</Progress.Label>
      </Progress.Section>
      <Progress.Section value={28} color="pink">
        <Progress.Label>Photos</Progress.Label>
      </Progress.Section>
      <Progress.Section value={15} color="orange">
        <Progress.Label>Other</Progress.Label>
      </Progress.Section>
    </Progress.Root>
  );
}
`};var a=e.i(431868);let l={type:"code",component:function(){return(0,n.jsxs)(o.Progress.Root,{size:40,children:[(0,n.jsx)(a.Tooltip,{label:"Documents – 33Gb",children:(0,n.jsx)(o.Progress.Section,{value:33,color:"cyan",children:(0,n.jsx)(o.Progress.Label,{children:"Documents"})})}),(0,n.jsx)(a.Tooltip,{label:"Photos – 28Gb",children:(0,n.jsx)(o.Progress.Section,{value:28,color:"pink",children:(0,n.jsx)(o.Progress.Label,{children:"Photos"})})}),(0,n.jsx)(a.Tooltip,{label:"Other – 15Gb",children:(0,n.jsx)(o.Progress.Section,{value:15,color:"orange",children:(0,n.jsx)(o.Progress.Label,{children:"Other"})})})]})},code:`
import { Progress, Tooltip } from '@mantine/core';

function Demo() {
  return (
    <Progress.Root size={40}>
      <Tooltip label="Documents – 33Gb">
        <Progress.Section value={33} color="cyan">
          <Progress.Label>Documents</Progress.Label>
        </Progress.Section>
      </Tooltip>

      <Tooltip label="Photos – 28Gb">
        <Progress.Section value={28} color="pink">
          <Progress.Label>Photos</Progress.Label>
        </Progress.Section>
      </Tooltip>

      <Tooltip label="Other – 15Gb">
        <Progress.Section value={15} color="orange">
          <Progress.Label>Other</Progress.Label>
        </Progress.Section>
      </Tooltip>
    </Progress.Root>
  );
}
`};var s=e.i(615169);let c=`
import { Progress } from '@mantine/core';

function Demo() {
  return (
    <Progress.Root size="xl"{{props}}>
      <Progress.Section value={35}>
        <Progress.Label>Documents</Progress.Label>
      </Progress.Section>
    </Progress.Root>
  );
}
`,d={type:"styles-api",data:s.ProgressStylesApi,component:function(e){return(0,n.jsx)(o.Progress.Root,{size:"xl",...e,children:(0,n.jsx)(o.Progress.Section,{value:35,children:(0,n.jsx)(o.Progress.Label,{children:"Documents"})})})},code:c,centered:!0,maxWidth:400};var u=e.i(191788),m=e.i(485108);let p={type:"code",component:function(){let[e,t]=(0,u.useState)(50);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.Progress,{value:e,size:"lg",transitionDuration:200}),(0,n.jsx)(m.Button,{onClick:()=>t(100*Math.random()),mt:"md",children:"Set random value"})]})},code:`
import { useState } from 'react';
import { Button, Progress } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState(50);
  return (
    <>
      <Progress value={value} size="lg" transitionDuration={200} />
      <Button onClick={() => setValue(Math.random() * 100)} mt="md">
        Set random value
      </Button>
    </>
  );
}
`,centered:!0,maxWidth:400};var h=e.i(725695),g=e.i(937389);let b=[{re:/[0-9]/,label:"Includes number"},{re:/[a-z]/,label:"Includes lowercase letter"},{re:/[A-Z]/,label:"Includes uppercase letter"},{re:/[$&+,:;=?@#|'<>.^*()%!-]/,label:"Includes special symbol"}],f={type:"code",component:function(){let[e,t]=(0,u.useState)(""),r=function(e){if(e.length<5)return 10;let t=e.length>5?0:1;return b.forEach(o=>{o.re.test(e)||(t+=1)}),Math.max(100-100/(b.length+1)*t,10)}(e),i=function(e){switch(!0){case e<30:return"red";case e<50:return"orange";case e<70:return"yellow";default:return"teal"}}(r);return(0,n.jsxs)("div",{children:[(0,n.jsx)(g.PasswordInput,{value:e,onChange:e=>t(e.currentTarget.value),placeholder:"Enter password",label:"Enter password"}),(0,n.jsxs)(h.Group,{grow:!0,gap:5,mt:"xs",children:[(0,n.jsx)(o.Progress,{size:"xs",color:i,value:100*(e.length>0),transitionDuration:0}),(0,n.jsx)(o.Progress,{size:"xs",color:i,transitionDuration:0,value:r<30?0:100}),(0,n.jsx)(o.Progress,{size:"xs",color:i,transitionDuration:0,value:r<50?0:100}),(0,n.jsx)(o.Progress,{size:"xs",color:i,transitionDuration:0,value:r<70?0:100})]})]})},code:`
import { useState } from 'react';
import { Group, PasswordInput, Progress } from '@mantine/core';

const requirements = [
  { re: /[0-9]/, label: 'Includes number' },
  { re: /[a-z]/, label: 'Includes lowercase letter' },
  { re: /[A-Z]/, label: 'Includes uppercase letter' },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: 'Includes special symbol' },
];

function getStrength(password: string) {
  if (password.length < 5) {
    return 10;
  }

  let multiplier = password.length > 5 ? 0 : 1;

  requirements.forEach((requirement) => {
    if (!requirement.re.test(password)) {
      multiplier += 1;
    }
  });

  return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 10);
}

function getStrengthColor(strength: number) {
  switch (true) {
    case strength < 30:
      return 'red';
    case strength < 50:
      return 'orange';
    case strength < 70:
      return 'yellow';
    default:
      return 'teal';
  }
}

function Demo() {
  const [value, setValue] = useState('');
  const strength = getStrength(value);
  const color = getStrengthColor(strength);

  return (
    <div>
      <PasswordInput
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
        placeholder="Enter password"
        label="Enter password"
      />

      <Group grow gap={5} mt="xs">
        <Progress
          size="xs"
          color={color}
          value={value.length > 0 ? 100 : 0}
          transitionDuration={0}
        />
        <Progress size="xs" color={color} transitionDuration={0} value={strength < 30 ? 0 : 100} />
        <Progress size="xs" color={color} transitionDuration={0} value={strength < 50 ? 0 : 100} />
        <Progress size="xs" color={color} transitionDuration={0} value={strength < 70 ? 0 : 100} />
      </Group>
    </div>
  );
}
`,centered:!0,maxWidth:340,defaultExpanded:!1},x={type:"code",component:function(){return(0,n.jsxs)(h.Group,{children:[(0,n.jsx)(o.Progress,{value:80,orientation:"vertical",h:200}),(0,n.jsx)(o.Progress,{value:60,color:"orange",size:"xl",orientation:"vertical",h:200,animated:!0}),(0,n.jsxs)(o.Progress.Root,{size:"xl",autoContrast:!0,orientation:"vertical",h:200,children:[(0,n.jsx)(o.Progress.Section,{value:40,color:"lime.4",children:(0,n.jsx)(o.Progress.Label,{children:"Documents"})}),(0,n.jsx)(o.Progress.Section,{value:20,color:"yellow.4",children:(0,n.jsx)(o.Progress.Label,{children:"Apps"})}),(0,n.jsx)(o.Progress.Section,{value:20,color:"cyan.7",children:(0,n.jsx)(o.Progress.Label,{children:"Other"})})]})]})},code:`
import { Progress } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Progress value={80} orientation="vertical" h={200} />
      <Progress value={60} color="orange" size="xl" orientation="vertical" h={200} animated />

      <Progress.Root size="xl" autoContrast orientation="vertical" h={200}>
        <Progress.Section value={40} color="lime.4">
          <Progress.Label>Documents</Progress.Label>
        </Progress.Section>
        <Progress.Section value={20} color="yellow.4">
          <Progress.Label>Apps</Progress.Label>
        </Progress.Section>
        <Progress.Section value={20} color="cyan.7">
          <Progress.Label>Other</Progress.Label>
        </Progress.Section>
      </Progress.Root>
    </Group>
  );
}
`,centered:!0};var T=(0,t.__exportAll)({compound:()=>i,segments:()=>f,stylesApi:()=>d,tooltips:()=>l,transition:()=>p,usage:()=>r,vertical:()=>x});e.s(["ProgressDemos",0,T],68737)},103935,e=>{"use strict";var t=e.i(648863),o=e.i(485108),n=e.i(470743),r=e.i(883364),i=e.i(804052),a=e.i(951254),l=e.i(391398),s=e.i(371542),c=e.i(839608);let d=[{image:"https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",title:"Best forests to visit in North America",category:"nature"},{image:"https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",title:"Hawaii beaches review: better than you think",category:"beach"},{image:"https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",title:"Mountains at night: 12 best locations to enjoy the view",category:"nature"},{image:"https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",title:"Aurora in Norway: when to visit for best experience",category:"nature"},{image:"https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",title:"Best places to visit this winter",category:"tourism"},{image:"https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",title:"Active volcanos reviews: travel at your own risk",category:"nature"}];function u({image:e,title:t,category:a}){return(0,l.jsxs)(n.Paper,{shadow:"md",p:"xl",style:{backgroundImage:`url(${e})`},className:"m_819023b7",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)(r.Text,{className:"m_3481ba25",size:"xs",children:a}),(0,l.jsx)(i.Title,{order:3,className:"m_b1678e91",children:t})]}),(0,l.jsx)(o.Button,{variant:"white",color:"dark",children:"Read article"})]})}let m={type:"code",component:function(e){let t=(0,c.useMediaQuery)(`(max-width: ${(0,a.useMantineTheme)().breakpoints.sm})`),o=d.map(e=>(0,l.jsx)(s.Carousel.Slide,{children:(0,l.jsx)(u,{...e})},e.title));return(0,l.jsx)(s.Carousel,{slideSize:{base:"100%",sm:"50%"},slideGap:{base:"xl",sm:2},emblaOptions:{align:"start",slidesToScroll:t?1:2},...e,children:o})},code:[{fileName:"Demo.tsx",code:`
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { Button, Paper, Title, useMantineTheme, Text } from '@mantine/core';
import classes from './Demo.module.css';

const data = [
  {
    image:
      'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Best forests to visit in North America',
    category: 'nature',
  },
  {
    image:
      'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Hawaii beaches review: better than you think',
    category: 'beach',
  },
  {
    image:
      'https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Mountains at night: 12 best locations to enjoy the view',
    category: 'nature',
  },
  {
    image:
      'https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Aurora in Norway: when to visit for best experience',
    category: 'nature',
  },
  {
    image:
      'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Best places to visit this winter',
    category: 'tourism',
  },
  {
    image:
      'https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Active volcanos reviews: travel at your own risk',
    category: 'nature',
  },
];

interface CardProps {
  image: string;
  title: string;
  category: string;
}

function Card({ image, title, category }: CardProps) {
  return (
    <Paper
      shadow="md"
      p="xl"
      style={{ backgroundImage: \`url(\${image})\` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <Button variant="white" color="dark">
        Read article
      </Button>
    </Paper>
  );
}

function Demo() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(\`(max-width: \${theme.breakpoints.sm})\`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize={{ base: '100%', sm: '50%' }}
      slideGap={{ base: 'xl', sm: 2 }}
      emblaOptions={{ align: 'start', slidesToScroll: mobile ? 1 : 2 }}
    >
      {slides}
    </Carousel>
  );
}
`,language:"tsx"},{fileName:"Demo.module.css",code:`.card {
  height: 440px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background-size: cover;
  background-position: center;
}

.title {
  font-weight: 900;
  color: var(--mantine-color-white);
  line-height: 1.2;
  font-size: 32px;
  margin-top: var(--mantine-spacing-xs);
  cursor: default;
}

.category {
  color: var(--mantine-color-white);
  opacity: 0.7;
  font-weight: 700;
  text-transform: uppercase;
  cursor: default;
}
`,language:"scss"}]};var p=e.i(232471);function h({children:e}){return(0,l.jsx)(p.Box,{style:{backgroundColor:"var(--mantine-color-blue-filled)",color:"var(--mantine-color-white)",height:"100%",width:"100%",display:"flex",justifyContent:"center",alignItems:"center",fontSize:50,fontWeight:"bold"},children:e})}function g({count:e}){return(0,l.jsx)(l.Fragment,{children:Array(e).fill(0).map((e,t)=>(0,l.jsx)(s.Carousel.Slide,{children:(0,l.jsx)(h,{children:t+1})},t))})}let b={type:"code",component:function(){return(0,l.jsx)(s.Carousel,{withIndicators:!0,height:200,children:(0,l.jsx)(g,{count:5})})},code:`
import { Carousel } from '@mantine/carousel';

function Demo() {
  return (
    <Carousel withIndicators height={200}>
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}
`,centered:!0,maxWidth:320},f={type:"code",component:function(){return(0,l.jsx)(s.Carousel,{orientation:"vertical",height:200,withIndicators:!0,children:(0,l.jsx)(g,{count:5})})},code:`
import { Carousel } from '@mantine/carousel';

function Demo() {
  return (
    <Carousel orientation="vertical" height={200} withIndicators>
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}
`,centered:!0,maxWidth:320};var x=e.i(943311),T=e.i(858508);let v={type:"code",component:function(){return(0,l.jsx)(s.Carousel,{height:180,nextControlIcon:(0,l.jsx)(T.ArrowRightIcon,{size:16}),previousControlIcon:(0,l.jsx)(x.ArrowLeftIcon,{size:16}),children:(0,l.jsx)(g,{count:5})})},code:`
import { Carousel } from '@mantine/carousel';
import { ArrowRightIcon, ArrowLeftIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <Carousel
      height={180}
      nextControlIcon={<ArrowRightIcon size={16} />}
      previousControlIcon={<ArrowLeftIcon size={16} />}
    >
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}
`,centered:!0,maxWidth:320},y=["https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png","https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png","https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png","https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png","https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png"];var S=e.i(724288);let C={type:"code",component:function(){return(0,l.jsx)(s.Carousel,{withIndicators:!0,height:200,children:y.map(e=>(0,l.jsx)(s.Carousel.Slide,{children:(0,l.jsx)(S.Image,{src:e})},e))})},code:`
import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';

const images = [
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png',
];

function Demo() {
  const slides = images.map((url) => (
    <Carousel.Slide key={url}>
      <Image src={url} />
    </Carousel.Slide>
  ));

  return (
    <Carousel withIndicators height={200}>
      {slides}
    </Carousel>
  );
}
`,maxWidth:380,centered:!0},j={type:"code",component:function(){return(0,l.jsx)(s.Carousel,{withIndicators:!0,height:200,slideSize:"33.333333%",slideGap:"md",emblaOptions:{loop:!0,align:"start",slidesToScroll:3},children:(0,l.jsx)(g,{count:12})})},code:`
import { Carousel } from '@mantine/carousel';

function Demo() {
  return (
    <Carousel
      withIndicators
      height={200}
      slideSize="33.333333%"
      slideGap="md"
      emblaOptions={{ loop: true, align: 'start', slidesToScroll: 3 }}
    >
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}
`},I={type:"code",component:function(){return(0,l.jsx)(s.Carousel,{withIndicators:!0,height:200,slideSize:{base:"100%",sm:"50%",md:"33.333333%"},slideGap:{base:0,sm:"md"},emblaOptions:{loop:!0,align:"start"},children:(0,l.jsx)(g,{count:6})})},code:`
import { Carousel } from '@mantine/carousel';

function Demo() {
  return (
    <Carousel
      withIndicators
      height={200}
      slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
      slideGap={{ base: 0, sm: 'md' }}
      emblaOptions={{ loop: true, align: 'start' }}
    >
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}
`};var w=e.i(191788);let A={active:!0,breakpoints:{},delay:4e3,jump:!1,playOnInit:!0,stopOnFocusIn:!0,stopOnInteraction:!0,stopOnMouseEnter:!1,stopOnLastSnap:!1,rootNode:null};function M(e={}){let t,o,n,r,i=null,a=0,l=!1,s=!1,c=!1,d=!1;function u(){if(!n){if(h()){c=!0;return}l||o.emit("autoplay:play"),function(){let{ownerWindow:e}=o.internalEngine();e.clearTimeout(a),a=e.setTimeout(T,r[o.selectedScrollSnap()]),i=new Date().getTime(),o.emit("autoplay:timerset")}(),l=!0}}function m(){n||(l&&o.emit("autoplay:stop"),function(){let{ownerWindow:e}=o.internalEngine();e.clearTimeout(a),a=0,i=null,o.emit("autoplay:timerstopped")}(),l=!1)}function p(){if(h())return c=l,m();c&&u()}function h(){let{ownerDocument:e}=o.internalEngine();return"hidden"===e.visibilityState}function g(){s||m()}function b(){s||u()}function f(){s=!0,m()}function x(){s=!1,u()}function T(){let{index:e}=o.internalEngine(),n=e.clone().add(1).get(),r=o.scrollSnapList().length-1,i=t.stopOnLastSnap&&n===r;if(o.canScrollNext()?o.scrollNext(d):o.scrollTo(0,d),o.emit("autoplay:select"),i)return m();u()}return{name:"autoplay",options:e,init:function(i,a){var l,s,c,h;let T,v;o=i;let{mergeOptions:y,optionsAtMedia:S}=a,C=y(A,M.globalOptions);if(t=S(y(C,e)),o.scrollSnapList().length<=1)return;d=t.jump,n=!1,l=o,s=t.delay,T=l.scrollSnapList(),r="number"==typeof s?T.map(()=>s):s(T,l);let{eventStore:j,ownerDocument:I}=o.internalEngine(),w=!!o.internalEngine().options.watchDrag,D=(c=o,h=t.rootNode,v=c.rootNode(),h&&h(v)||v);j.add(I,"visibilitychange",p),w&&o.on("pointerDown",g),w&&!t.stopOnInteraction&&o.on("pointerUp",b),t.stopOnMouseEnter&&j.add(D,"mouseenter",f),t.stopOnMouseEnter&&!t.stopOnInteraction&&j.add(D,"mouseleave",x),t.stopOnFocusIn&&o.on("slideFocusStart",m),t.stopOnFocusIn&&!t.stopOnInteraction&&j.add(o.containerNode(),"focusout",u),t.playOnInit&&u()},destroy:function(){o.off("pointerDown",g).off("pointerUp",b).off("slideFocusStart",m),m(),n=!0,l=!1},play:function(e){void 0!==e&&(d=e),u()},stop:function(){l&&m()},reset:function(){l&&u()},isPlaying:function(){return l},timeUntilNext:function(){return i?r[o.selectedScrollSnap()]-(new Date().getTime()-i):null}}}M.globalOptions=void 0;let D={type:"code",component:function(){let e=(0,w.useRef)(M({delay:1e3}));return(0,l.jsx)(s.Carousel,{withIndicators:!0,height:200,plugins:[e.current],onMouseEnter:e.current.stop,onMouseLeave:()=>e.current.play(),children:(0,l.jsx)(g,{count:5})})},code:`
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';

function Demo() {
  const autoplay = useRef(Autoplay({ delay: 1000 }));

  return (
    <Carousel
      withIndicators
      height={200}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={() => autoplay.current.play()}
    >
      <Slides count={5} />
    </Carousel>
  );
}
`,centered:!0,maxWidth:320},E={type:"code",component:function(){return(0,l.jsx)(s.Carousel,{withIndicators:!0,height:200,slideGap:"md",emblaOptions:{dragFree:!0,align:"start"},children:(0,l.jsx)(g,{count:5})})},code:`
import { Carousel } from '@mantine/carousel';

function Demo() {
  return (
    <Carousel
      withIndicators
      height={200}
      emblaOptions={{ dragFree: true, align: 'start' }}
      slideGap="md"
    >
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}
`,centered:!0,maxWidth:320};var N={indicator:"m_4fe518f6"};let B={type:"code",component:function(){return(0,l.jsx)(s.Carousel,{withIndicators:!0,height:200,classNames:N,children:(0,l.jsx)(g,{count:5})})},code:[{fileName:"Demo.tsx",code:`
import { Carousel } from '@mantine/carousel';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Carousel withIndicators height={200} classNames={classes}>
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}
`,language:"tsx"},{fileName:"Demo.module.css",code:`
.indicator {
  width: 12px;
  height: 4px;
  transition: width 250ms ease;

  &[data-active] {
    width: 40px;
  }
}`,language:"scss"}],centered:!0,maxWidth:320};var G={control:"m_bf2c70c5"};let P={type:"code",component:function(){return(0,l.jsx)(s.Carousel,{height:200,classNames:G,children:(0,l.jsx)(g,{count:5})})},code:[{fileName:"Demo.tsx",code:`
import { Carousel } from '@mantine/carousel';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Carousel height={200} classNames={classes}>
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}
`,language:"tsx"},{fileName:"Demo.module.css",code:`
.control {
  &[data-inactive] {
    opacity: 0;
    cursor: default;
  }
}
`,language:"scss"}],centered:!0,maxWidth:320};var z={controls:"m_78ad357a",root:"m_f45b71a6"};let H={type:"code",component:function(){return(0,l.jsx)(s.Carousel,{height:200,classNames:z,children:(0,l.jsx)(g,{count:5})})},code:[{fileName:"Demo.tsx",code:`
import { Carousel } from '@mantine/carousel';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Carousel height={200} classNames={classes}>
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}
`,language:"tsx"},{fileName:"Demo.module.css",code:`.controls {
  transition: opacity 150ms ease;
  opacity: 0;
}

.root {
  &:hover {
    .controls {
      opacity: 1;
    }
  }
}`,language:"scss"}],centered:!0,maxWidth:320},k={type:"configurator",component:function(e){return(0,l.jsx)(s.Carousel,{height:200,slideSize:"70%",...e,children:(0,l.jsx)(g,{count:5})})},code:`
import { Carousel } from '@mantine/carousel';


function Demo() {
  return (
    <Carousel
      slideSize="70%"
      height={200}
      {{props}}
    >
      {/* ...slides */}
    </Carousel>
  );
}
`,centered:!0,maxWidth:"100%",controls:[{prop:"orientation",type:"segmented",initialValue:"horizontal",libraryValue:"horizontal",data:[{label:"Horizontal",value:"horizontal"},{label:"Vertical",value:"vertical"}]},{prop:"slideGap",type:"size",initialValue:"md",libraryValue:"__"},{prop:"controlsOffset",type:"size",initialValue:"sm",libraryValue:"__"},{prop:"controlSize",type:"number",min:14,max:40,initialValue:26,libraryValue:"__"},{prop:"withControls",type:"boolean",initialValue:!0,libraryValue:"__"},{prop:"withIndicators",type:"boolean",initialValue:!1,libraryValue:"__"}]};var V=e.i(424035);let F={type:"code",component:function(){let[e,t]=(0,w.useState)(0),[o,n]=(0,w.useState)(null),r=(0,w.useCallback)(()=>{o&&t(100*Math.max(0,Math.min(1,o.scrollProgress())))},[o,t]);return(0,w.useEffect)(()=>{o&&(o.on("scroll",r),r())},[o]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.Carousel,{emblaOptions:{dragFree:!0},slideSize:"50%",slideGap:"md",height:200,getEmblaApi:n,initialSlide:2,children:(0,l.jsx)(g,{count:12})}),(0,l.jsx)(V.Progress,{value:e,maw:320,size:"sm",mt:"xl",mx:"auto"})]})},code:`
import { useCallback, useEffect, useState } from 'react';
import { EmblaCarouselType } from 'embla-carousel';
import { Carousel } from '@mantine/carousel';
import { Progress } from '@mantine/core';

function Demo() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [embla, setEmbla] = useState<EmblaCarouselType | null>(null);

  const handleScroll = useCallback(() => {
    if (!embla) {
      return;
    }
    const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
    setScrollProgress(progress * 100);
  }, [embla, setScrollProgress]);

  useEffect(() => {
    if (embla) {
      embla.on('scroll', handleScroll);
      handleScroll();
    }
  }, [embla]);

  return (
    <>
      <Carousel
        emblaOptions={{ dragFree: true }}
        slideSize="50%"
        slideGap="md"
        height={200}
        getEmblaApi={setEmbla}
        initialSlide={2}
      >
        <Slides count={12} />
      </Carousel>
      <Progress value={scrollProgress} maw={320} size="sm" mt="xl" mx="auto" />
    </>
  );
}
`};var L=e.i(583385);let Z=`
import { Carousel } from '@mantine/carousel';

function Demo() {
  return (
    <Carousel withIndicators height={200}{{props}}>
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
    </Carousel>
  );
}
`,_={type:"styles-api",data:L.CarouselStylesApi,component:function(e){return(0,l.jsx)(s.Carousel,{withIndicators:!0,height:200,...e,children:(0,l.jsx)(g,{count:2})})},code:Z,centered:!0,maxWidth:"100%"},O={type:"code",component:function(){return(0,l.jsx)("div",{style:{resize:"horizontal",overflow:"hidden",maxWidth:"100%",minWidth:250,padding:10},children:(0,l.jsx)(s.Carousel,{withIndicators:!0,height:200,type:"container",slideSize:{base:"100%","300px":"50%","500px":"33.333333%"},slideGap:{base:0,"300px":"md","500px":"lg"},emblaOptions:{loop:!0,align:"start"},children:(0,l.jsx)(g,{count:6})})})},code:`
import { Carousel } from '@mantine/carousel';

function Demo() {
  return (
    // Wrapper div is added for demonstration purposes only,
    // It is not required in real projects
    <div
      style={{
        resize: 'horizontal',
        overflow: 'hidden',
        maxWidth: '100%',
        minWidth: 250,
        padding: 10,
      }}
    >
      <Carousel
        withIndicators
        height={200}
        type="container"
        slideSize={{ base: '100%', '300px': '50%', '500px': '33.333333%' }}
        slideGap={{ base: 0, '300px': 'md', '500px': 'lg' }}
        emblaOptions={{ loop: true, align: 'start' }}
      >
        <Carousel.Slide>1</Carousel.Slide>
        <Carousel.Slide>2</Carousel.Slide>
        <Carousel.Slide>3</Carousel.Slide>
        {/* ...other slides */}
      </Carousel>
    </div>
  );
}
`},R={type:"configurator",component:function(e){return(0,l.jsx)(s.Carousel,{height:200,slideSize:"70%",slideGap:"md",emblaOptions:e,children:(0,l.jsx)(g,{count:5})})},code:e=>`
import { Carousel } from '@mantine/carousel';

function Demo() {
  return (
    <Carousel
      slideSize="70%"
      height={200}
      emblaOptions={{
        loop: ${e.loop},
        dragFree: ${e.dragFree},
        align: '${e.align}'
      }}
    >
      {/* ...slides */}
    </Carousel>
  );
}
`,centered:!0,maxWidth:"100%",controls:[{prop:"align",type:"segmented",initialValue:"center",libraryValue:"__",data:[{label:"Start",value:"start"},{label:"Center",value:"center"},{label:"End",value:"end"}]},{prop:"loop",type:"boolean",initialValue:!0,libraryValue:"__"},{prop:"dragFree",type:"boolean",initialValue:!1,libraryValue:"__"}]};var W=(0,t.__exportAll)({autoplay:()=>D,breakpoints:()=>I,cards:()=>m,configurator:()=>k,container:()=>O,controlsHover:()=>H,controlsStyles:()=>P,dragFree:()=>E,emblaOptions:()=>R,icons:()=>v,images:()=>C,indicatorStyles:()=>B,multiple:()=>j,progress:()=>F,stylesApi:()=>_,usage:()=>b,vertical:()=>f});e.s(["CarouselDemos",0,W],103935)},863767,e=>{"use strict";var t=e.i(648863),o=e.i(89361),n=e.i(841209),r=e.i(391398);let i={type:"configurator",component:function(e){return(0,r.jsxs)(o.Fieldset,{legend:"Personal information",...e,children:[(0,r.jsx)(n.TextInput,{label:"Your name",placeholder:"Your name"}),(0,r.jsx)(n.TextInput,{label:"Email",placeholder:"Email",mt:"md"})]})},code:`
import { Fieldset, TextInput } from '@mantine/core';

function Demo() {
  return (
    <Fieldset legend="Personal information"{{props}}>
      <TextInput label="Your name" placeholder="Your name" />
      <TextInput label="Email" placeholder="Email" mt="md" />
    </Fieldset>
  );
}
`,maxWidth:500,centered:!0,controls:[{type:"segmented",prop:"variant",initialValue:"default",libraryValue:"default",data:["default","filled","unstyled"]},{type:"size",prop:"radius",initialValue:"md",libraryValue:"md"}]};var a=e.i(485108),l=e.i(725695);let s={type:"code",component:function(){return(0,r.jsxs)(o.Fieldset,{legend:"Personal information",disabled:!0,children:[(0,r.jsx)(n.TextInput,{label:"Your name",placeholder:"Your name"}),(0,r.jsx)(n.TextInput,{label:"Email",placeholder:"Email",mt:"md"}),(0,r.jsx)(l.Group,{justify:"flex-end",mt:"md",children:(0,r.jsx)(a.Button,{children:"Submit"})})]})},maxWidth:500,centered:!0,code:`
import { Fieldset, TextInput, Button, Group } from '@mantine/core';

function Demo() {
  return (
    <Fieldset legend="Personal information" disabled>
      <TextInput label="Your name" placeholder="Your name" />
      <TextInput label="Email" placeholder="Email" mt="md" />

      <Group justify="flex-end" mt="md">
        <Button>Submit</Button>
      </Group>
    </Fieldset>
  );
}
`};var c=(0,t.__exportAll)({disabled:()=>s,usage:()=>i});e.s(["FieldsetDemos",0,c],863767)},748207,e=>{"use strict";var t=e.i(648863),o=e.i(724288),n=e.i(391398);let r={type:"code",component:function(){return(0,n.jsx)(o.Image,{radius:"md",src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"})},code:`
import { Image } from '@mantine/core';

function Demo() {
  return (
    <Image
      radius="md"
      src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
    />
  );
}
`},i={type:"code",component:function(){return(0,n.jsx)(o.Image,{radius:"md",h:200,src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-10.png"})},code:`
import { Image } from '@mantine/core';

function Demo() {
  return (
    <Image
      radius="md"
      h={200}
      src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-10.png"
    />
  );
}
`},a={type:"code",component:function(){return(0,n.jsx)(o.Image,{radius:"md",h:200,w:"auto",fit:"contain",src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png"})},code:`
import { Image } from '@mantine/core';

function Demo() {
  return (
    <Image
      radius="md"
      h={200}
      w="auto"
      fit="contain"
      src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png"
    />
  );
}
`,centered:!0},l={type:"code",component:function(){return(0,n.jsx)(o.Image,{radius:"md",src:null,h:200,fallbackSrc:"https://placehold.co/600x400?text=Placeholder"})},code:`
import { Image } from '@mantine/core';

function Demo() {
  return (
    <Image
      radius="md"
      src={null}
      h={200}
      fallbackSrc="https://placehold.co/600x400?text=Placeholder"
    />
  );
}
`};var s=(0,t.__exportAll)({contain:()=>a,fallback:()=>l,height:()=>i,usage:()=>r});e.s(["ImageDemos",0,s],748207)},989463,e=>{"use strict";var t=e.i(648863),o=e.i(485108),n=e.i(725695),r=e.i(391398);let i={type:"configurator",component:function(e){return(0,r.jsxs)(n.Group,{...e,children:[(0,r.jsx)(o.Button,{variant:"default",children:"First"}),(0,r.jsx)(o.Button,{variant:"default",children:"Second"}),(0,r.jsx)(o.Button,{variant:"default",children:"Third"})]})},code:`
import { Group, Button } from '@mantine/core';

function Demo() {
  return (
    <Group{{props}}>
      <Button variant="default">First</Button>
      <Button variant="default">Second</Button>
      <Button variant="default">Third</Button>
    </Group>
  );
}
`,controls:[{type:"select",prop:"justify",data:["flex-start","center","space-between","flex-end"],initialValue:"flex-start",libraryValue:"flex-start"},{type:"size",prop:"gap",initialValue:"md",libraryValue:"md"},{type:"boolean",prop:"grow",initialValue:!1,libraryValue:!1}]};var a=e.i(232471),l=e.i(883364);let s={type:"code",component:function(){return(0,r.jsx)(a.Box,{style:{overflow:"hidden"},children:(0,r.jsxs)(a.Box,{maw:500,p:"md",mx:"auto",bg:"var(--mantine-color-blue-light)",children:[(0,r.jsx)(l.Text,{size:"sm",mb:5,children:"preventGrowOverflow: true – each child width is always limited to 33% of parent width (since there are 3 children)"}),(0,r.jsxs)(n.Group,{grow:!0,wrap:"nowrap",children:[(0,r.jsx)(o.Button,{variant:"default",children:"First button"}),(0,r.jsx)(o.Button,{variant:"default",children:"Second button with large content"}),(0,r.jsx)(o.Button,{variant:"default",children:"Third button"})]}),(0,r.jsx)(l.Text,{size:"sm",mb:5,mt:"md",children:"preventGrowOverflow: false – children will grow based on their content, they can take more than 33% of parent width"}),(0,r.jsxs)(n.Group,{grow:!0,preventGrowOverflow:!1,wrap:"nowrap",children:[(0,r.jsx)(o.Button,{variant:"default",children:"First button"}),(0,r.jsx)(o.Button,{variant:"default",children:"Second button with large content"}),(0,r.jsx)(o.Button,{variant:"default",children:"Third button"})]})]})})},code:`
import { Group, Button, Box, Text } from '@mantine/core';

function Demo() {
  return (
    <Box style={{ overflow: 'hidden' }}>
      <Box maw={500} p="md" mx="auto" bg="var(--mantine-color-blue-light)">
        <Text size="sm" mb={5}>
          preventGrowOverflow: true – each child width is always limited to 33% of parent width
          (since there are 3 children)
        </Text>

        <Group grow wrap="nowrap">
          <Button variant="default">First button</Button>
          <Button variant="default">Second button with large content</Button>
          <Button variant="default">Third button</Button>
        </Group>

        <Text size="sm" mb={5} mt="md">
          preventGrowOverflow: false – children will grow based on their content, they can take more
          than 33% of parent width
        </Text>

        <Group grow preventGrowOverflow={false} wrap="nowrap">
          <Button variant="default">First button</Button>
          <Button variant="default">Second button with large content</Button>
          <Button variant="default">Third button</Button>
        </Group>
      </Box>
    </Box>
  );
}
`};var c=(0,t.__exportAll)({preventGrowOverflow:()=>s,usage:()=>i});e.s(["GroupDemos",0,c],989463)},325800,e=>{"use strict";var t=e.i(648863),o=e.i(935769);let n={type:"configurator",component:o.Loader,code:`
import { Loader } from '@mantine/core';

function Demo() {
  return <Loader{{props}} />;
}
`,centered:!0,controls:[{type:"color",prop:"color",initialValue:"blue",libraryValue:null},{type:"size",prop:"size",initialValue:"md",libraryValue:"md"},{type:"segmented",prop:"type",data:["oval","bars","dots"],initialValue:"oval",libraryValue:"oval"}]};var r=e.i(391398);let i=`
import { MantineLoaderComponent } from '@mantine/core';

export const RingLoader: MantineLoaderComponent = ({ style, ...others }) => (
  <svg
    {...others}
    style={{
      width: 'var(--loader-size)',
      height: 'var(--loader-size)',
      stroke: 'var(--loader-color)',
      ...style,
    }}
    viewBox="0 0 45 45"
    xmlns="http://www.w3.org/2000/svg"
    stroke="#fff"
  >
    <g fill="none" fillRule="evenodd" transform="translate(1 1)" strokeWidth="2">
      <circle cx="22" cy="22" r="6" strokeOpacity="0">
        <animate
          attributeName="r"
          begin="1.5s"
          dur="3s"
          values="6;22"
          calcMode="linear"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-opacity"
          begin="1.5s"
          dur="3s"
          values="1;0"
          calcMode="linear"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-width"
          begin="1.5s"
          dur="3s"
          values="2;0"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="22" cy="22" r="6" strokeOpacity="0">
        <animate
          attributeName="r"
          begin="3s"
          dur="3s"
          values="6;22"
          calcMode="linear"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-opacity"
          begin="3s"
          dur="3s"
          values="1;0"
          calcMode="linear"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-width"
          begin="3s"
          dur="3s"
          values="2;0"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="22" cy="22" r="8">
        <animate
          attributeName="r"
          begin="0s"
          dur="1.5s"
          values="6;1;2;3;4;5;6"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </circle>
    </g>
  </svg>
);`;var a=e.i(951254),l=e.i(530514);let s=`
import { MantineProvider, Loader } from '@mantine/core';
import { RingLoader } from './RingLoader';

const theme = createTheme({
  components: {
    Loader: Loader.extend({
      defaultProps: {
        loaders: { ...Loader.defaultLoaders, ring: RingLoader },
        type: 'ring',
      },
    }),
  },
});

function Demo() {
  return (
    <MantineThemeProvider theme={theme}>
      <Loader />
    </MantineThemeProvider>
  );
}
`,c=(0,l.createTheme)({components:{Loader:o.Loader.extend({defaultProps:{loaders:{...o.Loader.defaultLoaders,ring:({style:e,...t})=>(0,r.jsx)("svg",{...t,style:{width:"var(--loader-size)",height:"var(--loader-size)",stroke:"var(--loader-color)",...e},viewBox:"0 0 45 45",xmlns:"http://www.w3.org/2000/svg",stroke:"#fff",children:(0,r.jsxs)("g",{fill:"none",fillRule:"evenodd",transform:"translate(1 1)",strokeWidth:"2",children:[(0,r.jsxs)("circle",{cx:"22",cy:"22",r:"6",strokeOpacity:"0",children:[(0,r.jsx)("animate",{attributeName:"r",begin:"1.5s",dur:"3s",values:"6;22",calcMode:"linear",repeatCount:"indefinite"}),(0,r.jsx)("animate",{attributeName:"stroke-opacity",begin:"1.5s",dur:"3s",values:"1;0",calcMode:"linear",repeatCount:"indefinite"}),(0,r.jsx)("animate",{attributeName:"stroke-width",begin:"1.5s",dur:"3s",values:"2;0",calcMode:"linear",repeatCount:"indefinite"})]}),(0,r.jsxs)("circle",{cx:"22",cy:"22",r:"6",strokeOpacity:"0",children:[(0,r.jsx)("animate",{attributeName:"r",begin:"3s",dur:"3s",values:"6;22",calcMode:"linear",repeatCount:"indefinite"}),(0,r.jsx)("animate",{attributeName:"stroke-opacity",begin:"3s",dur:"3s",values:"1;0",calcMode:"linear",repeatCount:"indefinite"}),(0,r.jsx)("animate",{attributeName:"stroke-width",begin:"3s",dur:"3s",values:"2;0",calcMode:"linear",repeatCount:"indefinite"})]}),(0,r.jsx)("circle",{cx:"22",cy:"22",r:"8",children:(0,r.jsx)("animate",{attributeName:"r",begin:"0s",dur:"1.5s",values:"6;1;2;3;4;5;6",calcMode:"linear",repeatCount:"indefinite"})})]})})},type:"ring"}})}}),d={type:"code",component:function(){return(0,r.jsx)(a.MantineThemeProvider,{theme:c,children:(0,r.jsx)(o.Loader,{})})},centered:!0,code:[{fileName:"Demo.tsx",language:"tsx",code:s},{fileName:"RingLoader.tsx",language:"tsx",code:i}]};var u=e.i(232471),m=e.i(56206);let p=`
import cx from 'clsx';
import { Box, MantineLoaderComponent } from '@mantine/core';
import classes from './CssLoader.module.css';

export const CssLoader: MantineLoaderComponent = ({ className, ...others }) => (
  <Box component="span" className={cx(classes.loader, className)} {...others} />
);
`,h=`
@keyframes loader-animation {
  0% {
    transform: rotateY(0deg);
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }

  50% {
    transform: rotateY(1800deg);
    animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
  }

  100% {
    transform: rotateY(3600deg);
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
}

.loader {
  display: inline-block;
  width: var(--loader-size);
  height: var(--loader-size);
  border-radius: var(--loader-size);
  background: var(--loader-color);
  animation: loader-animation 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
`,g=`
import { MantineProvider, Loader } from '@mantine/core';
import { CssLoader } from './CssLoader';

const theme = createTheme({
  components: {
    Loader: Loader.extend({
      defaultProps: {
        loaders: { ...Loader.defaultLoaders, custom: CssLoader },
        type: 'custom',
      },
    }),
  },
});

function Demo() {
  return (
    <MantineThemeProvider theme={theme}>
      <Loader />
    </MantineThemeProvider>
  );
}
`,b=(0,l.createTheme)({components:{Loader:o.Loader.extend({defaultProps:{loaders:{...o.Loader.defaultLoaders,custom:({className:e,...t})=>(0,r.jsx)(u.Box,{component:"span",className:(0,m.default)("m_25f74dea",e),...t})},type:"custom"}})}}),f={type:"code",component:function(){return(0,r.jsx)(a.MantineThemeProvider,{theme:b,children:(0,r.jsx)(o.Loader,{})})},centered:!0,code:[{fileName:"Demo.tsx",language:"tsx",code:g},{fileName:"CssLoader.tsx",language:"tsx",code:p},{fileName:"CssLoader.module.css",language:"scss",code:h}]},x={type:"configurator",component:function(e){return(0,r.jsx)(o.Loader,{...e})},code:`
import { Loader } from '@mantine/core';

function Demo() {
  return <Loader{{props}} />;
}
`,centered:!0,minHeight:70,controls:[{type:"number",prop:"size",initialValue:30,min:10,max:50,libraryValue:"__none__"}]};var T=(0,t.__exportAll)({configurator:()=>n,cssLoader:()=>f,customType:()=>d,size:()=>x});e.s(["LoaderDemos",0,T],325800)},773141,e=>{"use strict";var t=e.i(191788),o=e.i(171481);let n=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M209.88,69.83A115.19,115.19,0,0,0,128,36h-.41C63.85,36.22,12,88.76,12,153.13V176a20,20,0,0,0,20,20H224a20,20,0,0,0,20-20V152A115.25,115.25,0,0,0,209.88,69.83ZM220,172H127.32l46.44-65A12,12,0,1,0,154.24,93L97.82,172H36V153.13c0-1.72,0-3.43.14-5.13H56a12,12,0,0,0,0-24H40.62c10.91-33.39,40-58.52,75.38-63.21V80a12,12,0,0,0,24,0V60.8A92,92,0,0,1,215.66,124H200a12,12,0,0,0,0,24h19.9c.06,1.33.1,2.66.1,4Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M232,152v24a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V153.13C24,95.65,70.15,48.2,127.63,48A104,104,0,0,1,232,152Z",opacity:"0.2"}),t.createElement("path",{d:"M207.06,72.67A111.24,111.24,0,0,0,128,40h-.4C66.07,40.21,16,91,16,153.13V176a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V152A111.25,111.25,0,0,0,207.06,72.67ZM224,176H119.71l54.76-75.3a8,8,0,0,0-12.94-9.42L99.92,176H32V153.13c0-3.08.15-6.12.43-9.13H56a8,8,0,0,0,0-16H35.27c10.32-38.86,44-68.24,84.73-71.66V80a8,8,0,0,0,16,0V56.33A96.14,96.14,0,0,1,221,128H200a8,8,0,0,0,0,16h23.67c.21,2.65.33,5.31.33,8Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M240,152v24a16,16,0,0,1-16,16H115.93a4,4,0,0,1-3.24-6.35L174.27,101a8.21,8.21,0,0,0-1.37-11.3,8,8,0,0,0-11.37,1.61l-72,99.06A4,4,0,0,1,86.25,192H32a16,16,0,0,1-16-16V153.13c0-1.79,0-3.57.13-5.33a4,4,0,0,1,4-3.8H48a8,8,0,0,0,8-8.53A8.17,8.17,0,0,0,47.73,128H23.92a4,4,0,0,1-3.87-5c12-43.84,49.66-77.13,95.52-82.28a4,4,0,0,1,4.43,4V72a8,8,0,0,0,8.53,8A8.17,8.17,0,0,0,136,71.73V44.67a4,4,0,0,1,4.43-4A112.18,112.18,0,0,1,236.23,123a4,4,0,0,1-3.88,5H208.27a8.17,8.17,0,0,0-8.25,7.47,8,8,0,0,0,8,8.53h27.92a4,4,0,0,1,4,3.86C240,149.23,240,150.61,240,152Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M205.65,74.08A109.26,109.26,0,0,0,128,42h-.39C67.17,42.21,18,92.06,18,153.13V176a14,14,0,0,0,14,14H224a14,14,0,0,0,14-14V152A109.3,109.3,0,0,0,205.65,74.08ZM226,176a2,2,0,0,1-2,2H115.78l57.07-78.47a6,6,0,0,0-9.7-7.06L100.94,178H32a2,2,0,0,1-2-2V153.13A102.36,102.36,0,0,1,30.62,142H56a6,6,0,0,0,0-12H32.71C42.6,88.4,78.53,56.86,122,54.19V80a6,6,0,0,0,12,0V54.19A98.05,98.05,0,0,1,223.53,130H200a6,6,0,0,0,0,12h25.5c.33,3.3.5,6.64.5,10Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M207.06,72.67A111.24,111.24,0,0,0,128,40h-.4C66.07,40.21,16,91,16,153.13V176a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V152A111.25,111.25,0,0,0,207.06,72.67ZM224,176H119.71l54.76-75.3a8,8,0,0,0-12.94-9.42L99.92,176H32V153.13c0-3.08.15-6.12.43-9.13H56a8,8,0,0,0,0-16H35.27c10.32-38.86,44-68.24,84.73-71.66V80a8,8,0,0,0,16,0V56.33A96.14,96.14,0,0,1,221,128H200a8,8,0,0,0,0,16h23.67c.21,2.65.33,5.31.33,8Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M204.23,75.5A107.37,107.37,0,0,0,127.62,44C68.28,44.21,20,93.16,20,153.13V176a12,12,0,0,0,12,12H224a12,12,0,0,0,12-12V152A107.25,107.25,0,0,0,204.23,75.5ZM228,176a4,4,0,0,1-4,4H111.85l59.38-81.65a4,4,0,1,0-6.46-4.7L102,180H32a4,4,0,0,1-4-4V153.13A103.42,103.42,0,0,1,28.84,140H56a4,4,0,0,0,0-8H30.21C39.59,87.66,77.84,53.93,124,52.09V80a4,4,0,0,0,8,0V52.08A100.08,100.08,0,0,1,226,132H200a4,4,0,0,0,0,8h27.29a101.6,101.6,0,0,1,.71,12Z"}))]]),r=t.forwardRef((e,r)=>t.createElement(o.default,{ref:r,...e,weights:n}));r.displayName="GaugeIcon",e.s(["GaugeIcon",0,r],773141)},758373,e=>{"use strict";var t=e.i(191788),o=e.i(171481);let n=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M222.14,105.85l-80-80a20,20,0,0,0-28.28,0l-80,80A19.86,19.86,0,0,0,28,120v96a12,12,0,0,0,12,12h64a12,12,0,0,0,12-12V164h24v52a12,12,0,0,0,12,12h64a12,12,0,0,0,12-12V120A19.86,19.86,0,0,0,222.14,105.85ZM204,204H164V152a12,12,0,0,0-12-12H104a12,12,0,0,0-12,12v52H52V121.65l76-76,76,76Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,120v96H152V152H104v64H40V120a8,8,0,0,1,2.34-5.66l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,216,120Z",opacity:"0.2"}),t.createElement("path",{d:"M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M224,120v96a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8V164a4,4,0,0,0-4-4H108a4,4,0,0,0-4,4v52a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V120a16,16,0,0,1,4.69-11.31l80-80a16,16,0,0,1,22.62,0l80,80A16,16,0,0,1,224,120Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M217.9,110.1l-80-80a14,14,0,0,0-19.8,0l-80,80A13.92,13.92,0,0,0,34,120v96a6,6,0,0,0,6,6h64a6,6,0,0,0,6-6V158h36v58a6,6,0,0,0,6,6h64a6,6,0,0,0,6-6V120A13.92,13.92,0,0,0,217.9,110.1ZM210,210H158V152a6,6,0,0,0-6-6H104a6,6,0,0,0-6,6v58H46V120a2,2,0,0,1,.58-1.42l80-80a2,2,0,0,1,2.84,0l80,80A2,2,0,0,1,210,120Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216.49,111.51l-80-80a12,12,0,0,0-17,0l-80,80A12,12,0,0,0,36,120v96a4,4,0,0,0,4,4h64a4,4,0,0,0,4-4V156h40v60a4,4,0,0,0,4,4h64a4,4,0,0,0,4-4V120A12,12,0,0,0,216.49,111.51ZM212,212H156V152a4,4,0,0,0-4-4H104a4,4,0,0,0-4,4v60H44V120a4,4,0,0,1,1.17-2.83l80-80a4,4,0,0,1,5.66,0l80,80A4,4,0,0,1,212,120Z"}))]]),r=t.forwardRef((e,r)=>t.createElement(o.default,{ref:r,...e,weights:n}));r.displayName="HouseIcon",e.s(["HouseIcon",0,r],758373)},994589,e=>{"use strict";var t=e.i(648863),o=e.i(191788),n=e.i(485108),r=e.i(725695),i=e.i(391398),a=e.i(631730),l=e.i(218066);function s(e){let[t,s]=(0,o.useMemo)(l.createSpotlight,[]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.Group,{justify:"center",children:(0,i.jsx)(n.Button,{onClick:s.open,children:"Open spotlight"})}),(0,i.jsx)(a.Spotlight,{actions:[],store:t,...e})]})}var c=e.i(119004),d=e.i(773141),u=e.i(758373),m=e.i(719834);let p=[{id:"home",label:"Home",description:"Get to home page",onClick:()=>console.log("Home"),leftSection:(0,i.jsx)(u.HouseIcon,{size:24})},{id:"dashboard",label:"Dashboard",description:"Get full information about current system status",onClick:()=>console.log("Dashboard"),leftSection:(0,i.jsx)(d.GaugeIcon,{size:24})},{id:"documentation",label:"Documentation",description:"Visit documentation to lean more about all features",onClick:()=>console.log("Documentation"),leftSection:(0,i.jsx)(c.FileTextIcon,{size:24})}],h={type:"code",component:function(){return(0,i.jsx)(s,{actions:p,nothingFound:"Nothing found...",highlightQuery:!0,shortcut:null,searchProps:{leftSection:(0,i.jsx)(m.MagnifyingGlassIcon,{size:20}),placeholder:"Search..."}})},code:`
import { Button } from '@mantine/core';
import { Spotlight, SpotlightActionData, spotlight } from '@mantine/spotlight';
import { HouseIcon, GaugeIcon, FileTextIcon, MagnifyingGlassIcon } from '@phosphor-icons/react';

const actions: SpotlightActionData[] = [
  {
    id: 'home',
    label: 'Home',
    description: 'Get to home page',
    onClick: () => console.log('Home'),
    leftSection: <HouseIcon size={24} />,
  },
  {
    id: 'dashboard',
    label: 'Dashboard',
    description: 'Get full information about current system status',
    onClick: () => console.log('Dashboard'),
    leftSection: <GaugeIcon size={24} />,
  },
  {
    id: 'documentation',
    label: 'Documentation',
    description: 'Visit documentation to lean more about all features',
    onClick: () => console.log('Documentation'),
    leftSection: <FileTextIcon size={24} />,
  },
];

function Demo() {
  return (
    <>
      <Button onClick={spotlight.open}>Open spotlight</Button>
      <Spotlight
        actions={actions}
        nothingFound="Nothing found..."
        highlightQuery
        searchProps={{
          leftSection: <MagnifyingGlassIcon size={20} />,
          placeholder: 'Search...',
        }}
      />
    </>
  );
}
`},g=["Home","About us","Contacts","Blog","Careers","Terms of service"],b={type:"code",component:function(){let[e,t]=(0,o.useMemo)(l.createSpotlight,[]),[r,s]=(0,o.useState)(""),c=g.filter(e=>e.toLowerCase().includes(r.toLowerCase().trim())).map(e=>(0,i.jsx)(a.Spotlight.Action,{label:e},e));return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.Button,{onClick:t.open,children:"Open spotlight"}),(0,i.jsxs)(a.Spotlight.Root,{store:e,query:r,onQueryChange:s,shortcut:null,children:[(0,i.jsx)(a.Spotlight.Search,{placeholder:"Search...",leftSection:(0,i.jsx)(m.MagnifyingGlassIcon,{})}),(0,i.jsx)(a.Spotlight.ActionsList,{children:c.length>0?c:(0,i.jsx)(a.Spotlight.Empty,{children:"Nothing found..."})})]})]})},code:`
import { useState } from 'react';
import { Spotlight, spotlight } from '@mantine/spotlight';
import { Button } from '@mantine/core';
import { MagnifyingGlassIcon } from '@phosphor-icons/react';

const data = ['Home', 'About us', 'Contacts', 'Blog', 'Careers', 'Terms of service'];

function Demo() {
  const [query, setQuery] = useState('');

  const items = data
    .filter((item) => item.toLowerCase().includes(query.toLowerCase().trim()))
    .map((item) => <Spotlight.Action key={item} label={item} />);

  return (
    <>
      <Button onClick={spotlight.open}>Open spotlight</Button>

      <Spotlight.Root query={query} onQueryChange={setQuery}>
        <Spotlight.Search placeholder="Search..." leftSection={<MagnifyingGlassIcon />} />
        <Spotlight.ActionsList>
          {items.length > 0 ? items : <Spotlight.Empty>Nothing found...</Spotlight.Empty>}
        </Spotlight.ActionsList>
      </Spotlight.Root>
    </>
  );
}
`,centered:!0},f=`
import { Button } from '@mantine/core';
import { Spotlight, SpotlightActionData, spotlight } from '@mantine/spotlight';
import { MagnifyingGlassIcon } from '@phosphor-icons/react';

const actions: SpotlightActionData[] = Array(100)
  .fill(0)
  .map((_, index) => ({
    id: \`action-\${index}\`,
    label: \`Action \${index}\`,
    description: \`Action \${index} description\`,
  }));

function Demo() {
  return (
    <>
      <Button onClick={spotlight.open}>Open spotlight</Button>
      <Spotlight
        actions={actions}
        nothingFound="Nothing found..."
        highlightQuery
        scrollable
        maxHeight={350}
        searchProps={{
          leftSection: <MagnifyingGlassIcon size={20} />,
          placeholder: 'Search...',
        }}
      />
    </>
  );
}
`,x=Array(100).fill(0).map((e,t)=>({id:`action-${t}`,label:`Action ${t}`,description:`Action ${t} description`})),T={type:"code",component:function(){return(0,i.jsx)(s,{actions:x,nothingFound:"Nothing found...",highlightQuery:!0,scrollable:!0,maxHeight:350,shortcut:null,searchProps:{leftSection:(0,i.jsx)(m.MagnifyingGlassIcon,{size:20}),placeholder:"Search..."}})},code:f},v=`
import { Button } from '@mantine/core';
import { Spotlight, SpotlightActionData, spotlight } from '@mantine/spotlight';
import { MagnifyingGlassIcon } from '@phosphor-icons/react';

const actions: SpotlightActionData[] = Array(3000)
  .fill(0)
  .map((_, index) => ({
    id: \`action-\${index}\`,
    label: \`Action \${index}\`,
    description: \`Action \${index} description\`,
  }));

function Demo() {
  return (
    <>
      <Button onClick={spotlight.open}>Open spotlight</Button>
      <Spotlight
        actions={actions}
        nothingFound="Nothing found..."
        highlightQuery
        limit={7}
        searchProps={{
          leftSection: <MagnifyingGlassIcon size={20} />,
          placeholder: 'Search...',
        }}
      />
    </>
  );
}
`,y=Array(3e3).fill(0).map((e,t)=>({id:`action-${t}`,label:`Action ${t}`,description:`Action ${t} description`})),S={type:"code",component:function(){return(0,i.jsx)(s,{actions:y,nothingFound:"Nothing found...",highlightQuery:!0,limit:7,shortcut:null,searchProps:{leftSection:(0,i.jsx)(m.MagnifyingGlassIcon,{size:20}),placeholder:"Search..."}})},code:v};var C=e.i(257177),j=e.i(330573),I=e.i(883364);let w=[{image:"https://img.icons8.com/clouds/256/000000/futurama-bender.png",title:"Bender Bending Rodríguez",description:"Fascinated with cooking, though has no sense of taste",new:!0},{image:"https://img.icons8.com/clouds/256/000000/futurama-mom.png",title:"Carol Miller",description:"One of the richest people on Earth",new:!1},{image:"https://img.icons8.com/clouds/256/000000/homer-simpson.png",title:"Homer Simpson",description:"Overweight, lazy, and often ignorant",new:!1},{image:"https://img.icons8.com/clouds/256/000000/spongebob-squarepants.png",title:"Spongebob Squarepants",description:"Not just a sponge",new:!1}],A={type:"code",component:function(){let[e,t]=(0,o.useMemo)(l.createSpotlight,[]),[s,c]=(0,o.useState)(""),d=w.filter(e=>e.title.toLowerCase().includes(s.toLowerCase().trim())).map(e=>(0,i.jsx)(a.Spotlight.Action,{onClick:()=>console.log(e),children:(0,i.jsxs)(r.Group,{wrap:"nowrap",w:"100%",children:[e.image&&(0,i.jsx)(j.Center,{children:(0,i.jsx)("img",{src:e.image,alt:e.title,width:50,height:50})}),(0,i.jsxs)("div",{style:{flex:1},children:[(0,i.jsx)(I.Text,{children:e.title}),e.description&&(0,i.jsx)(I.Text,{opacity:.6,size:"xs",children:e.description})]}),e.new&&(0,i.jsx)(C.Badge,{variant:"default",children:"new"})]})},e.title));return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.Button,{onClick:t.open,children:"Open spotlight"}),(0,i.jsxs)(a.Spotlight.Root,{store:e,query:s,onQueryChange:c,shortcut:null,children:[(0,i.jsx)(a.Spotlight.Search,{placeholder:"Search...",leftSection:(0,i.jsx)(m.MagnifyingGlassIcon,{})}),(0,i.jsx)(a.Spotlight.ActionsList,{children:d.length>0?d:(0,i.jsx)(a.Spotlight.Empty,{children:"Nothing found..."})})]})]})},code:`
import { useState } from 'react';
import { Spotlight, spotlight } from '@mantine/spotlight';
import { Badge, Button, Center, Group, Text } from '@mantine/core';
import { MagnifyingGlassIcon } from '@phosphor-icons/react';

const data = [
  {
    image: 'https://img.icons8.com/clouds/256/000000/futurama-bender.png',
    title: 'Bender Bending Rodr\xedguez',
    description: 'Fascinated with cooking, though has no sense of taste',
    new: true,
  },

  {
    image: 'https://img.icons8.com/clouds/256/000000/futurama-mom.png',
    title: 'Carol Miller',
    description: 'One of the richest people on Earth',
    new: false,
  },
  {
    image: 'https://img.icons8.com/clouds/256/000000/homer-simpson.png',
    title: 'Homer Simpson',
    description: 'Overweight, lazy, and often ignorant',
    new: false,
  },
  {
    image: 'https://img.icons8.com/clouds/256/000000/spongebob-squarepants.png',
    title: 'Spongebob Squarepants',
    description: 'Not just a sponge',
    new: false,
  },
];

function Demo() {
  const [query, setQuery] = useState('');

  const items = data
  .filter((item) => item.title.toLowerCase().includes(query.toLowerCase().trim()))
  .map((item) => (
    <Spotlight.Action key={item.title} onClick={() => console.log(item)}>
      <Group wrap="nowrap" w="100%">
        {item.image && (
          <Center>
            <img src={item.image} alt={item.title} width={50} height={50} />
          </Center>
        )}

        <div style={{ flex: 1 }}>
          <Text>{item.title}</Text>

          {item.description && (
            <Text opacity={0.6} size="xs">
              {item.description}
            </Text>
          )}
        </div>

        {item.new && <Badge variant="default">new</Badge>}
      </Group>
    </Spotlight.Action>
  ));

  return (
    <>
      <Button onClick={spotlight.open}>Open spotlight</Button>

      <Spotlight.Root query={query} onQueryChange={setQuery}>
        <Spotlight.Search placeholder="Search..." leftSection={<MagnifyingGlassIcon />} />
        <Spotlight.ActionsList>
          {items.length > 0 ? items : <Spotlight.Empty>Nothing found...</Spotlight.Empty>}
        </Spotlight.ActionsList>
      </Spotlight.Root>
    </>
  );
}
`,centered:!0},M=[{group:"Pages",actions:[{id:"home",label:"Home page",description:"Where we present the product"},{id:"careers",label:"Careers page",description:"Where we list open positions"},{id:"about-us",label:"About us page",description:"Where we tell what we do"}]},{group:"Apps",actions:[{id:"svg-compressor",label:"SVG compressor",description:"Compress SVG images"},{id:"base64",label:"Base 64 converter",description:"Convert data to base 64 format"},{id:"fake-data",label:"Fake data generator",description:"Lorem ipsum generator"}]}],D={type:"code",component:function(){return(0,i.jsx)(s,{actions:M,nothingFound:"Nothing found...",highlightQuery:!0,shortcut:null,searchProps:{leftSection:(0,i.jsx)(m.MagnifyingGlassIcon,{size:20}),placeholder:"Search..."}})},code:`
import { Button } from '@mantine/core';
import { Spotlight, SpotlightActionData, SpotlightActionGroupData, spotlight } from '@mantine/spotlight';
import { MagnifyingGlassIcon } from '@phosphor-icons/react';

const actions: (SpotlightActionGroupData | SpotlightActionData)[] = [
  {
    group: 'Pages',
    actions: [
      { id: 'home', label: 'Home page', description: 'Where we present the product' },
      { id: 'careers', label: 'Careers page', description: 'Where we list open positions' },
      { id: 'about-us', label: 'About us page', description: 'Where we tell what we do' },
    ],
  },

  {
    group: 'Apps',
    actions: [
      { id: 'svg-compressor', label: 'SVG compressor', description: 'Compress SVG images' },
      { id: 'base64', label: 'Base 64 converter', description: 'Convert data to base 64 format' },
      { id: 'fake-data', label: 'Fake data generator', description: 'Lorem ipsum generator' },
    ],
  },
];

function Demo() {
  return (
    <>
      <Button onClick={spotlight.open}>Open spotlight</Button>
      <Spotlight
        actions={actions}
        nothingFound="Nothing found..."
        highlightQuery
        searchProps={{
          leftSection: <MagnifyingGlassIcon size={20} />,
          placeholder: 'Search...',
        }}
      />
    </>
  );
}
`};var E=e.i(280130);let N=[{id:"home",label:"Home",description:"Get to home page",onClick:()=>console.log("Home"),leftSection:(0,i.jsx)(u.HouseIcon,{size:24})},{id:"dashboard",label:"Dashboard",description:"Get full information about current system status",onClick:()=>console.log("Dashboard"),leftSection:(0,i.jsx)(d.GaugeIcon,{size:24})},{id:"documentation",label:"Documentation",description:"Visit documentation to learn more about all features",onClick:()=>console.log("Documentation"),leftSection:(0,i.jsx)(c.FileTextIcon,{size:24})},{id:"settings",label:"Settings",description:"Manage application preferences and configurations",onClick:()=>console.log("Settings"),leftSection:(0,i.jsx)(u.HouseIcon,{size:24})}],B=(e,t)=>{if(!e.trim())return t;let o=new E.default(t.reduce((e,t)=>"actions"in t?[...e,...t.actions.map(e=>({...e,group:t.group}))]:[...e,t],[]),{keys:["label","description"],threshold:.3,minMatchCharLength:1}).search(e).map(e=>e.item),n={},r=[];return o.forEach(e=>{e.group?(n[e.group]||(n[e.group]={pushed:!1,data:{group:e.group,actions:[]}}),n[e.group].data.actions.push(e),n[e.group].pushed||(n[e.group].pushed=!0,r.push(n[e.group].data))):r.push(e)}),r},G={type:"code",component:function(){return(0,i.jsx)(s,{actions:N,filter:B,nothingFound:"Nothing found...",highlightQuery:!0,shortcut:null,searchProps:{leftSection:(0,i.jsx)(m.MagnifyingGlassIcon,{size:20}),placeholder:"Search..."}})},code:`
import Fuse from 'fuse.js';
import { Button } from '@mantine/core';
import {
  Spotlight,
  SpotlightActionData,
  SpotlightFilterFunction,
  spotlight,
} from '@mantine/spotlight';
import { HouseIcon, GaugeIcon, FileTextIcon, MagnifyingGlassIcon } from '@phosphor-icons/react';

const actions: SpotlightActionData[] = [
  {
    id: 'home',
    label: 'Home',
    description: 'Get to home page',
    onClick: () => console.log('Home'),
    leftSection: <HouseIcon size={24} />,
  },
  {
    id: 'dashboard',
    label: 'Dashboard',
    description: 'Get full information about current system status',
    onClick: () => console.log('Dashboard'),
    leftSection: <GaugeIcon size={24} />,
  },
  {
    id: 'documentation',
    label: 'Documentation',
    description: 'Visit documentation to learn more about all features',
    onClick: () => console.log('Documentation'),
    leftSection: <FileTextIcon size={24} />,
  },
  {
    id: 'settings',
    label: 'Settings',
    description: 'Manage application preferences and configurations',
    onClick: () => console.log('Settings'),
    leftSection: <HouseIcon size={24} />,
  },
];

const fuzzySearchFilter: SpotlightFilterFunction = (query, searchActions) => {
  if (!query.trim()) {
    return searchActions;
  }

  const flatActions = searchActions.reduce<any[]>((acc, item) => {
    if ('actions' in item) {
      return [...acc, ...item.actions.map((action) => ({ ...action, group: item.group }))];
    }
    return [...acc, item];
  }, []);

  const fuse = new Fuse(flatActions, {
    keys: ['label', 'description'],
    threshold: 0.3,
    minMatchCharLength: 1,
  });

  const results = fuse.search(query).map((result) => result.item);

  const groups: Record<string, any> = {};
  const result: any[] = [];

  results.forEach((action) => {
    if (action.group) {
      if (!groups[action.group]) {
        groups[action.group] = { pushed: false, data: { group: action.group, actions: [] } };
      }
      groups[action.group].data.actions.push(action);
      if (!groups[action.group].pushed) {
        groups[action.group].pushed = true;
        result.push(groups[action.group].data);
      }
    } else {
      result.push(action);
    }
  });

  return result;
};

function Demo() {
  return (
    <>
      <Button onClick={spotlight.open}>Open spotlight</Button>
      <Spotlight
        actions={actions}
        filter={fuzzySearchFilter}
        nothingFound="Nothing found..."
        highlightQuery
        searchProps={{
          leftSection: <MagnifyingGlassIcon size={20} />,
          placeholder: 'Search...',
        }}
      />
    </>
  );
}
`};var P=(0,t.__exportAll)({compound:()=>b,customAction:()=>A,fuzzySearch:()=>G,groups:()=>D,limit:()=>S,scrollable:()=>T,usage:()=>h});e.s(["SpotlightDemos",0,P],994589)},869519,e=>{"use strict";var t=e.i(648863),o=e.i(191788),n=e.i(171481);let r=new Map([["bold",o.createElement(o.Fragment,null,o.createElement("path",{d:"M236,208a12,12,0,0,1-12,12H32a12,12,0,0,1-12-12V48a12,12,0,0,1,24,0V196H224A12,12,0,0,1,236,208ZM116,148a16,16,0,1,0,16-16A16,16,0,0,0,116,148Zm-8-40A16,16,0,1,0,92,92,16,16,0,0,0,108,108ZM76,180a16,16,0,1,0-16-16A16,16,0,0,0,76,180Zm96-48a16,16,0,1,0-16-16A16,16,0,0,0,172,132Zm24-40a16,16,0,1,0-16-16A16,16,0,0,0,196,92Zm-24,72a16,16,0,1,0,16-16A16,16,0,0,0,172,164Z"}))],["duotone",o.createElement(o.Fragment,null,o.createElement("path",{d:"M224,64V208H32V48H208A16,16,0,0,1,224,64Z",opacity:"0.2"}),o.createElement("path",{d:"M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0V200H224A8,8,0,0,1,232,208ZM132,160a12,12,0,1,0-12-12A12,12,0,0,0,132,160Zm-24-56A12,12,0,1,0,96,92,12,12,0,0,0,108,104ZM76,176a12,12,0,1,0-12-12A12,12,0,0,0,76,176Zm96-48a12,12,0,1,0-12-12A12,12,0,0,0,172,128Zm24-40a12,12,0,1,0-12-12A12,12,0,0,0,196,88Zm-20,76a12,12,0,1,0,12-12A12,12,0,0,0,176,164Z"}))],["fill",o.createElement(o.Fragment,null,o.createElement("path",{d:"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM188,72a12,12,0,1,1-12,12A12,12,0,0,1,188,72Zm0,56a12,12,0,1,1-12,12A12,12,0,0,1,188,128Zm-40-16a12,12,0,1,1-12,12A12,12,0,0,1,148,112ZM124,72a12,12,0,1,1-12,12A12,12,0,0,1,124,72Zm-24,56a12,12,0,1,1-12,12A12,12,0,0,1,100,128Zm100,64H56a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0V176H200a8,8,0,0,1,0,16Z"}))],["light",o.createElement(o.Fragment,null,o.createElement("path",{d:"M230,208a6,6,0,0,1-6,6H32a6,6,0,0,1-6-6V48a6,6,0,0,1,12,0V202H224A6,6,0,0,1,230,208Zm-98-50a10,10,0,1,0-10-10A10,10,0,0,0,132,158Zm-24-56A10,10,0,1,0,98,92,10,10,0,0,0,108,102ZM76,174a10,10,0,1,0-10-10A10,10,0,0,0,76,174Zm96-48a10,10,0,1,0-10-10A10,10,0,0,0,172,126Zm24-40a10,10,0,1,0-10-10A10,10,0,0,0,196,86Zm-8,68a10,10,0,1,0,10,10A10,10,0,0,0,188,154Z"}))],["regular",o.createElement(o.Fragment,null,o.createElement("path",{d:"M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0V200H224A8,8,0,0,1,232,208ZM132,160a12,12,0,1,0-12-12A12,12,0,0,0,132,160Zm-24-56A12,12,0,1,0,96,92,12,12,0,0,0,108,104ZM76,176a12,12,0,1,0-12-12A12,12,0,0,0,76,176Zm96-48a12,12,0,1,0-12-12A12,12,0,0,0,172,128Zm24-40a12,12,0,1,0-12-12A12,12,0,0,0,196,88Zm-20,76a12,12,0,1,0,12-12A12,12,0,0,0,176,164Z"}))],["thin",o.createElement(o.Fragment,null,o.createElement("path",{d:"M228,208a4,4,0,0,1-4,4H32a4,4,0,0,1-4-4V48a4,4,0,0,1,8,0V204H224A4,4,0,0,1,228,208Zm-96-52a8,8,0,1,0-8-8A8,8,0,0,0,132,156Zm-24-56a8,8,0,1,0-8-8A8,8,0,0,0,108,100ZM76,172a8,8,0,1,0-8-8A8,8,0,0,0,76,172Zm96-48a8,8,0,1,0-8-8A8,8,0,0,0,172,124Zm24-40a8,8,0,1,0-8-8A8,8,0,0,0,196,84Zm-8,88a8,8,0,1,0-8-8A8,8,0,0,0,188,172Z"}))]]),i=o.forwardRef((e,t)=>o.createElement(n.default,{ref:t,...e,weights:r}));i.displayName="ChartScatterIcon";var a=e.i(613529),l=e.i(391398);let s={type:"code",component:function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.NumberInput,{label:"Hide controls",placeholder:"Hide controls",hideControls:!0}),(0,l.jsx)(a.NumberInput,{label:"Custom right section",placeholder:"Custom right section",mt:"md",rightSection:(0,l.jsx)(i,{}),rightSectionPointerEvents:"none"})]})},code:`
import { NumberInput } from '@mantine/core';
import { ChartScatterIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <>
      <NumberInput label="Hide controls" placeholder="Hide controls" hideControls />
      <NumberInput
        label="Custom right section"
        placeholder="Custom right section"
        mt="md"
        rightSection={<ChartScatterIcon />}
        rightSectionPointerEvents="none"
      />
    </>
  );
}
`,centered:!0,maxWidth:340};var c=e.i(485108),d=e.i(725695);let u={type:"code",component:function(){let e=(0,o.useRef)(null);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.NumberInput,{label:"Click buttons to change value",placeholder:"Click the buttons",handlersRef:e,step:2,min:10,max:20,defaultValue:15}),(0,l.jsxs)(d.Group,{mt:"md",justify:"center",children:[(0,l.jsx)(c.Button,{onClick:()=>e.current?.decrement(),variant:"default",children:"Decrement by 2"}),(0,l.jsx)(c.Button,{onClick:()=>e.current?.increment(),variant:"default",children:"Increment by 2"})]})]})},code:`
import { useRef } from 'react';
import { NumberInput, Group, Button, NumberInputHandlers } from '@mantine/core';

function Demo() {
  const handlersRef = useRef<NumberInputHandlers>(null);
  return (
    <>
      <NumberInput
        label="Click buttons to change value"
        placeholder="Click the buttons"
        handlersRef={handlersRef}
        step={2}
        min={10}
        max={20}
        defaultValue={15}
      />

      <Group mt="md" justify="center">
        <Button onClick={() => handlersRef.current?.decrement()} variant="default">
          Decrement by 2
        </Button>

        <Button onClick={() => handlersRef.current?.increment()} variant="default">
          Increment by 2
        </Button>
      </Group>
    </>
  );
}
`,centered:!0,maxWidth:340},m={type:"code",component:function(){return(0,l.jsx)(a.NumberInput,{label:"Negative number are not allowed",placeholder:"Do not enter negative numbers",allowNegative:!1})},code:`
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <NumberInput
      label="Negative number are not allowed"
      placeholder="Do not enter negative numbers"
      allowNegative={false}
    />
  );
}
`,centered:!0,maxWidth:340},p={type:"code",component:function(){return(0,l.jsx)(a.NumberInput,{label:"You can enter only 2 digits after decimal point",placeholder:"Do not enter more than 2",decimalScale:2})},code:`
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <NumberInput
      label="You can enter only 2 digits after decimal point"
      placeholder="Do not enter more than 2"
      decimalScale={2}
    />
  );
}
`,centered:!0,maxWidth:340},h={type:"code",component:function(){return(0,l.jsx)(a.NumberInput,{label:"Decimals are not allowed",placeholder:"Do not enter decimal numbers",allowDecimal:!1})},code:`
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <NumberInput
      label="Decimals are not allowed"
      placeholder="Do not enter decimal numbers"
      allowDecimal={false}
    />
  );
}
`,centered:!0,maxWidth:340},g={type:"code",component:function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.NumberInput,{label:"Thousands are separated with a comma",placeholder:"Thousands are separated with a comma",thousandSeparator:",",defaultValue:1e6}),(0,l.jsx)(a.NumberInput,{label:"Thousands are separated with a space",placeholder:"Thousands are separated with a space",thousandSeparator:" ",defaultValue:1e6,mt:"md"})]})},code:`
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <NumberInput
        label="Thousands are separated with a comma"
        placeholder="Thousands are separated with a comma"
        thousandSeparator=","
        defaultValue={1_000_000}
      />

      <NumberInput
        label="Thousands are separated with a space"
        placeholder="Thousands are separated with a space"
        thousandSeparator=" "
        defaultValue={1_000_000}
        mt="md"
      />
    </>
  );
}
`,centered:!0,maxWidth:340},b={type:"code",component:function(){return(0,l.jsx)(a.NumberInput,{label:"Custom decimal separator",placeholder:"You can change it",decimalSeparator:",",defaultValue:20.573})},code:`
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <NumberInput
      label="Custom decimal separator"
      placeholder="You can change it"
      decimalSeparator=","
      defaultValue={20.573}
    />
  );
}
`,centered:!0,maxWidth:340},f={type:"code",component:function(){return(0,l.jsx)(a.NumberInput,{label:"Always show 2 digits after decimal point",placeholder:"Do not enter more that 2",decimalScale:2,fixedDecimalScale:!0,defaultValue:2.2})},code:`
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <NumberInput
      label="Always show 2 digits after decimal point"
      placeholder="Do not enter more that 2"
      decimalScale={2}
      fixedDecimalScale
      defaultValue={2.2}
    />
  );
}
`,centered:!0,maxWidth:340},x={type:"code",component:function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.NumberInput,{label:"With prefix",placeholder:"Dollars",prefix:"$",defaultValue:100,mb:"md"}),(0,l.jsx)(a.NumberInput,{label:"With suffix",placeholder:"Percents",suffix:"%",defaultValue:100,mt:"md"})]})},code:`
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <NumberInput
        label="With prefix"
        placeholder="Dollars"
        prefix="$"
        defaultValue={100}
        mb="md"
      />
      <NumberInput
        label="With suffix"
        placeholder="Percents"
        suffix="%"
        defaultValue={100}
        mt="md"
      />
    </>
  );
}
`,centered:!0,maxWidth:340},T={type:"code",component:function(){return(0,l.jsx)(a.NumberInput,{label:"Enter value between 10 and 20",placeholder:"Don't enter more than 20 and less than 10",min:10,max:20})},code:`
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <NumberInput
      label="Enter value between 10 and 20"
      placeholder="Don't enter more than 20 and less than 10"
      min={10}
      max={20}
    />
  );
}
`,centered:!0,maxWidth:340},v={type:"code",component:function(){return(0,l.jsx)(a.NumberInput,{label:"Strict clamping between 0 and 100",placeholder:"Enter a number",clampBehavior:"strict",min:0,max:100})},code:`
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <NumberInput
      label="Strict clamping between 0 and 100"
      placeholder="Enter a number"
      clampBehavior="strict"
      min={0}
      max={100}
    />
  );
}
`,centered:!0,maxWidth:340},y={type:"configurator",component:function(e){return(0,l.jsx)(a.NumberInput,{...e,placeholder:"Input placeholder"})},code:`
import { NumberInput } from '@mantine/core';


function Demo() {
  return (
    <NumberInput
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
`,centered:!0,maxWidth:340,controls:e.i(960831).inputControls},S={type:"code",component:function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.NumberInput,{label:"Boolean error",placeholder:"Boolean error",error:!0}),(0,l.jsx)(a.NumberInput,{mt:"md",label:"With error message",placeholder:"With error message",error:"Invalid name"})]})},maxWidth:340,centered:!0,code:`
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <NumberInput label="Boolean error" placeholder="Boolean error" error />
      <NumberInput
        mt="md"
        label="With error message"
        placeholder="With error message"
        error="Invalid name"
      />
    </>
  );
}
`},C={type:"code",component:function(){return(0,l.jsx)(a.NumberInput,{label:"Number Input",placeholder:"Number Input",success:"Looks good!"})},code:`
import { NumberInput } from '@mantine/core';

function Demo() {
  return <NumberInput label="Number Input" placeholder="Number Input" success="Looks good!" />;
}
`,maxWidth:340,centered:!0},j={type:"code",component:function(){return(0,l.jsx)(a.NumberInput,{disabled:!0,label:"Disabled input",placeholder:"Disabled input"})},maxWidth:340,centered:!0,code:`
import { NumberInput } from '@mantine/core';

function Demo() {
  return <NumberInput disabled label="Disabled input" placeholder="Disabled input" />;
}
`};var I=e.i(123895),w=e.i(858210);let A=`
import { AtIcon } from '@phosphor-icons/react';
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <NumberInput
      label="Label"
      placeholder="NumberInput"
      description="Description"
      error="Error"
      withAsterisk
      leftSection={<AtIcon size={18} />}
      {{props}}
    />
  );
}
`,M={type:"styles-api",data:w.NumberInputStylesApi,component:function(e){return(0,l.jsx)(a.NumberInput,{label:"Label",placeholder:"NumberInput",description:"Description",error:"Error",withAsterisk:!0,leftSection:(0,l.jsx)(I.AtIcon,{size:18}),...e})},code:A,centered:!0,maxWidth:340},D=new Map([["bold",o.createElement(o.Fragment,null,o.createElement("path",{d:"M225.44,120.59l-88-112a12,12,0,0,0-18.88,0l-88,112a12,12,0,0,0,0,14.82l.6.76a3.72,3.72,0,0,0,.44.56l87,110.68a12,12,0,0,0,18.88,0l88-112A12,12,0,0,0,225.44,120.59ZM140,50.7l57.12,72.7-57.12,26Zm-24,98.66-57.12-26L116,50.7Zm0,26.37V205.3l-36.15-46Zm24,0,36.15-16.43L140,205.3Z"}))],["duotone",o.createElement(o.Fragment,null,o.createElement("path",{d:"M216,128,128,240,40,128l88,40Z",opacity:"0.2"}),o.createElement("path",{d:"M222.29,123.06l-88-112a8,8,0,0,0-12.58,0l-88,112a8,8,0,0,0,0,9.88l88,112a8,8,0,0,0,12.58,0l88-112A8,8,0,0,0,222.29,123.06ZM136,39.13l67.42,85.8L136,155.58ZM120,155.58,52.58,124.93,120,39.13Zm0,17.57v43.72l-53.43-68Zm16,0,53.43-24.29-53.43,68Z"}))],["fill",o.createElement(o.Fragment,null,o.createElement("path",{d:"M222.29,123.06l-88-112a8,8,0,0,0-12.58,0l-88,112a8,8,0,0,0,0,9.88l88,112a8,8,0,0,0,12.58,0l88-112A8,8,0,0,0,222.29,123.06ZM136,155.58V39.13l67.42,85.8Zm-16,0L52.58,124.93,120,39.13Zm0,17.57v43.72l-53.43-68Z"}))],["light",o.createElement(o.Fragment,null,o.createElement("path",{d:"M220.72,124.29l-88-112a6,6,0,0,0-9.44,0l-88,112a6,6,0,0,0,0,7.42l88,112a6,6,0,0,0,9.44,0l88-112A6,6,0,0,0,220.72,124.29ZM134,33.35l72.56,92.35-72.56,33ZM122,158.68l-72.56-33L122,33.35Zm0,13.18v50.79l-62.08-79Zm12,0,62.08-28.21-62.08,79Z"}))],["regular",o.createElement(o.Fragment,null,o.createElement("path",{d:"M222.29,123.06l-88-112a8,8,0,0,0-12.58,0l-88,112a8,8,0,0,0,0,9.88l88,112a8,8,0,0,0,12.58,0l88-112A8,8,0,0,0,222.29,123.06ZM136,39.13l67.42,85.8L136,155.58ZM120,155.58,52.58,124.93,120,39.13Zm0,17.57v43.72l-53.43-68Zm16,0,53.43-24.29-53.43,68Z"}))],["thin",o.createElement(o.Fragment,null,o.createElement("path",{d:"M219.15,125.53l-88-112a4,4,0,0,0-6.3,0l-88,112a4,4,0,0,0,0,4.94l88,112a4,4,0,0,0,6.3,0l88-112A4,4,0,0,0,219.15,125.53ZM132,27.57l77.71,98.9L132,161.79Zm-8,134.22L46.29,126.47,124,27.57Zm0,8.79v57.85l-70.72-90Zm8,0,70.72-32.15-70.72,90Z"}))]]),E=o.forwardRef((e,t)=>o.createElement(n.default,{ref:t,...e,weights:D}));E.displayName="CurrencyEthIcon";let N={type:"code",component:function(){let e=(0,l.jsx)(E,{size:20});return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.NumberInput,{leftSection:e,label:"With left section",placeholder:"With left section"}),(0,l.jsx)(a.NumberInput,{rightSection:e,label:"With right section",placeholder:"With right section",mt:"md"})]})},code:`
import { NumberInput } from '@mantine/core';
import { CurrencyEthIcon } from '@phosphor-icons/react';

function Demo() {
  const icon = <CurrencyEthIcon size={20} />;
  return (
    <>
      <NumberInput leftSection={icon} label="With left section" placeholder="With left section" />
      <NumberInput
        rightSection={icon}
        label="With right section"
        placeholder="With right section"
        mt="md"
      />
    </>
  );
}
`,centered:!0,maxWidth:340},B={type:"code",code:`
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <NumberInput
        label="Step on hold"
        description="Step value when clicking and holding increment/decrement buttons"
        stepHoldDelay={500}
        stepHoldInterval={100}
      />

      <NumberInput
        label="Step the value with interval function"
        description="Steps get faster over time when holding the control button"
        stepHoldDelay={500}
        stepHoldInterval={(t) => Math.max(1000 / t ** 2, 25)}
      />
    </>
  );
}
`,component:function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.NumberInput,{label:"Step on hold",description:"Step value when clicking and holding increment/decrement buttons",placeholder:"Hold mouse down on control button",stepHoldDelay:500,stepHoldInterval:100}),(0,l.jsx)(a.NumberInput,{mt:"md",label:"Step the value with interval function",description:"Steps get faster over time when holding the control button",placeholder:"Hold mouse down on control button",stepHoldDelay:500,stepHoldInterval:e=>Math.max(1e3/e**2,25)})]})},centered:!0,maxWidth:340},G={type:"code",component:function(){return(0,l.jsx)(a.NumberInput,{placeholder:"Age",loading:!0})},code:`
import { NumberInput } from '@mantine/core';

function Demo() {
  return <NumberInput placeholder="Age" loading />;
}
`,centered:!0,maxWidth:340},P={type:"code",component:function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.NumberInput,{label:"Leading zeros removed on blur",placeholder:"Type 00100 and click outside",trimLeadingZeroesOnBlur:!0,defaultValue:"00100"}),(0,l.jsx)(a.NumberInput,{label:"Leading zeros preserved",placeholder:"Type 00100 and click outside",trimLeadingZeroesOnBlur:!1,defaultValue:"00100",mt:"md"})]})},code:`
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <NumberInput
        label="Leading zeros removed on blur"
        placeholder="Type 00100 and click outside"
        trimLeadingZeroesOnBlur
        defaultValue="00100"
      />

      <NumberInput
        label="Leading zeros preserved"
        placeholder="Type 00100 and click outside"
        trimLeadingZeroesOnBlur={false}
        defaultValue="00100"
        mt="md"
      />
    </>
  );
}
`,centered:!0,maxWidth:340},z={type:"code",component:function(){let[e,t]=(0,o.useState)(BigInt("12345678901234567890"));return(0,l.jsx)(a.NumberInput,{label:"BigInt value",description:"BigInt mode is inferred from defaultValue/value",value:e,onChange:t,step:BigInt(10),min:BigInt(0),thousandSeparator:",",prefix:"$"})},code:`
import { useState } from 'react';
import { NumberInput } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState<bigint | string>(BigInt('12345678901234567890'));

  return (
    <NumberInput
      label="BigInt value"
      description="BigInt mode is inferred from defaultValue/value"
      value={value}
      onChange={setValue}
      step={BigInt(10)}
      min={BigInt(0)}
      thousandSeparator=","
      prefix="$"
    />
  );
}
`,centered:!0,maxWidth:420};var H=(0,t.__exportAll)({allowDecimal:()=>h,allowNegative:()=>m,bigInt:()=>z,decimalScale:()=>p,decimalSeparator:()=>b,disabled:()=>j,error:()=>S,fixedDecimalScale:()=>f,handlers:()=>u,hold:()=>B,loading:()=>G,minMax:()=>T,prefixSuffix:()=>x,rightSection:()=>s,sections:()=>N,strictClamp:()=>v,stylesApi:()=>M,success:()=>C,thousandsSeparator:()=>g,trimLeadingZeroes:()=>P,usage:()=>y});e.s(["NumberInputDemos",0,H],869519)},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);