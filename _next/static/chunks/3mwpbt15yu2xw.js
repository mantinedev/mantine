(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,a)=>{let r={};for(var n in e)t(r,n,{get:e[n],enumerable:!0});return a||t(r,Symbol.toStringTag,{value:"Module"}),r}])},788350,e=>{"use strict";var t=e.i(44091),a=e.i(62904),r=e.i(391466),n=e.i(425254),i=e.i(275519),o=e.i(586488),l=e.i(205764),s=e.i(464224),c=e.i(734858),u=e.i(711976),d=e.i(212491),p=e.i(798270),m=e.i(122057),h=e.i(217633),v=e.i(463112);function x({splitChars:e,allowDuplicates:t,maxTags:a,value:r,currentTags:n,isDuplicate:i,onDuplicate:o}){let l=e?r.split(RegExp(`[${e.join("")}]`)).map(e=>e.trim()).filter(e=>""!==e):[r],s=[];if(t)s.push(...n,...l);else for(let e of(s.push(...n),l))(i?e=>i(e,s):e=>s.some(t=>t.toLowerCase()===e.toLowerCase()))(e)?o?.(e):s.push(e);return a?s.slice(0,a):s}var y=e.i(191788),f=e.i(107315),g=e.i(332977),b=e.i(579560),A=e.i(391398);let j={maxTags:1/0,acceptValueOnBlur:!0,splitChars:[","],hiddenInputValuesDivider:",",openOnFocus:!0,size:"sm"},w=(0,i.factory)(e=>{let i=(0,t.useProps)(["Input","InputWrapper","TagsInput"],j,e),{classNames:o,className:w,style:C,styles:S,unstyled:D,vars:P,size:T,value:O,defaultValue:E,onChange:I,onKeyDown:k,maxTags:L,allowDuplicates:B,onDuplicate:N,variant:R,data:_,dropdownOpened:z,defaultDropdownOpened:M,onDropdownOpen:K,onDropdownClose:V,selectFirstOptionOnChange:G,selectFirstOptionOnDropdownOpen:F,onOptionSubmit:Z,comboboxProps:W,filter:$,limit:Y,withScrollArea:J,maxDropdownHeight:U,floatingHeight:X,searchValue:q,defaultSearchValue:H,onSearchChange:Q,readOnly:ee,disabled:et,splitChars:ea,onFocus:er,onBlur:en,onPaste:ei,radius:eo,rightSection:el,rightSectionWidth:es,rightSectionPointerEvents:ec,rightSectionProps:eu,leftSection:ed,leftSectionWidth:ep,leftSectionPointerEvents:em,leftSectionProps:eh,inputContainer:ev,inputWrapperOrder:ex,withAsterisk:ey,required:ef,labelProps:eg,descriptionProps:eb,errorProps:eA,successProps:ej,wrapperProps:ew,description:eC,label:eS,error:eD,success:eP,withErrorStyles:eT,withSuccessStyles:eO,name:eE,form:eI,id:ek,clearable:eL,clearSectionMode:eB,clearButtonProps:eN,hiddenInputProps:eR,hiddenInputValuesDivider:e_,mod:ez,renderOption:eM,renderPill:eK,onRemove:eV,onClear:eG,onMaxTags:eF,scrollAreaProps:eZ,acceptValueOnBlur:eW,isDuplicate:e$,openOnFocus:eY,attributes:eJ,ref:eU,loading:eX,loadingPosition:eq,withPillsReorder:eH,...eQ}=i,e0=(0,f.useId)(ek),e1=(0,l.getParsedComboboxData)(_),e2=(0,s.getOptionsLockup)(e1),e4=(0,y.useRef)(null),e8=(0,g.useMergedRef)(e4,eU),e7=(0,c.useCombobox)({opened:z,defaultOpened:M,onDropdownOpen:()=>{K?.(),F&&e7.selectFirstOption()},onDropdownClose:()=>{V?.(),e7.resetSelectedOption()}}),{styleProps:e3,rest:{type:e9,autoComplete:e6,...e5}}=(0,n.extractStyleProps)(eQ),[te,tt]=(0,b.useUncontrolled)({value:O,defaultValue:E,finalValue:[],onChange:I}),{getPillProps:ta,getListProps:tr,handleInputKeyDown:tn}=(0,p.usePillsReorder)({value:te,onChange:tt,enabled:eH&&!et&&!ee}),[ti,to]=(0,b.useUncontrolled)({value:q,defaultValue:H,finalValue:"",onChange:Q}),tl=e=>{to(e),e7.resetSelectedOption()},ts=(0,r.useStyles)({name:"TagsInput",classes:{},props:i,classNames:o,styles:S,unstyled:D}),{resolvedClassNames:tc,resolvedStyles:tu}=(0,a.useResolvedStylesApi)({props:i,styles:S,classNames:o}),td=e=>{(e$?e$(e,te):te.some(t=>t.toLowerCase()===e.toLowerCase()))&&(N?.(e),!B)?tl(""):te.length>=L?eF?.(e):(Z?.(e),tl(""),e.length>0&&tt([...te,e]))},tp=te.map((e,t)=>{let a=()=>{let a=te.slice();a.splice(t,1),tt(a),eV?.(e)},r=ta(t);return eK?(0,A.jsx)(y.Fragment,{children:eK({option:e2[e]||{value:e,label:e,disabled:!1},value:e,onRemove:a,disabled:et||ee,reorderProps:r})},`${e}-${t}`):(0,A.jsx)(m.Pill,{withRemoveButton:!ee,onRemove:a,unstyled:D,disabled:et,attributes:eJ,...ts("pill"),...r,children:e},`${e}-${t}`)});(0,y.useEffect)(()=>{G&&e7.selectFirstOption()},[G,te,ti]);let tm=(0,A.jsx)(u.Combobox.ClearButton,{...eN,onClear:()=>{tt([]),tl(""),e4.current?.focus(),e7.openDropdown(),eG?.()}});return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)(u.Combobox,{store:e7,classNames:tc,styles:tu,unstyled:D,size:T,readOnly:ee,__staticSelector:"TagsInput",attributes:eJ,floatingHeight:X,onOptionSubmit:e=>{Z?.(e),tl(""),te.length>=L?eF?.(e):tt([...te,e2[e].value]),e7.resetSelectedOption()},...W,children:[(0,A.jsx)(u.Combobox.DropdownTarget,{children:(0,A.jsx)(h.PillsInput,{...e3,__staticSelector:"TagsInput",classNames:tc,styles:tu,unstyled:D,size:T,className:w,style:C,variant:R,disabled:et,radius:eo,rightSection:el,__clearSection:tm,__clearable:eL&&te.length>0&&!et&&!ee,__clearSectionMode:eB,rightSectionWidth:es,rightSectionPointerEvents:ec,rightSectionProps:eu,leftSection:ed,leftSectionWidth:ep,leftSectionPointerEvents:em,leftSectionProps:eh,loading:eX,loadingPosition:eq,inputContainer:ev,inputWrapperOrder:ex,withAsterisk:ey,required:ef,labelProps:eg,descriptionProps:eb,errorProps:eA,successProps:ej,wrapperProps:ew,description:eC,label:eS,error:eD,success:eP,withErrorStyles:eT,withSuccessStyles:eO,__stylesApiProps:{...i,multiline:!0},id:e0,mod:ez,attributes:eJ,children:(0,A.jsxs)(m.Pill.Group,{disabled:et,unstyled:D,...ts("pillsList"),...tr(),children:[tp,(0,A.jsx)(u.Combobox.EventsTarget,{autoComplete:e6,withExpandedAttribute:!0,children:(0,A.jsx)(h.PillsInput.Field,{...e5,ref:e8,...ts("inputField"),unstyled:D,onKeyDown:e=>{if(k?.(e),e.defaultPrevented||e.isPropagationStopped())return;let t=ti.trim(),{length:a}=t;if(ea.includes(e.key)&&a>0&&(tt(x({splitChars:ea,allowDuplicates:B,maxTags:L,value:ti,currentTags:te,isDuplicate:e$,onDuplicate:N})),tl(""),e.preventDefault()),"Enter"===e.key&&a>0&&!e.nativeEvent.isComposing){if(e.preventDefault(),document.querySelector(`#${e7.listId} [data-combobox-option][data-combobox-selected]`))return;td(t)}"Backspace"!==e.key||0!==a||!(te.length>0)||e.nativeEvent.isComposing||ee||(eV?.(te[te.length-1]),tt(te.slice(0,te.length-1))),tn(e)},onFocus:e=>{er?.(e),eY&&e7.openDropdown()},onBlur:e=>{en?.(e),eW&&td(ti),e7.closeDropdown()},onPaste:e=>{ei?.(e),e.preventDefault(),e.clipboardData&&(tt(x({splitChars:ea,allowDuplicates:B,maxTags:L,value:`${ti}${e.clipboardData.getData("text/plain")}`,currentTags:te,isDuplicate:e$,onDuplicate:N})),tl(""))},value:ti,onChange:e=>tl(e.currentTarget.value),required:ef&&0===te.length,disabled:et,readOnly:ee,id:e0})})]})})}),(0,A.jsx)(d.OptionsDropdown,{data:function({data:e,value:t}){let a=t.map(e=>e.trim().toLowerCase());return e.reduce((e,t)=>((0,v.isOptionsGroup)(t)?e.push({group:t.group,items:t.items.filter(e=>-1===a.indexOf(e.label.toLowerCase().trim()))}):-1===a.indexOf(t.label.toLowerCase().trim())&&e.push(t),e),[])}({data:e1,value:te}),hidden:ee||et,filter:$,search:ti,limit:Y,hiddenWhenEmpty:!0,withScrollArea:J,maxDropdownHeight:U,unstyled:D,labelId:eS?`${e0}-label`:void 0,"aria-label":eS?void 0:eQ["aria-label"],renderOption:eM,scrollAreaProps:eZ})]}),(0,A.jsx)(u.Combobox.HiddenInput,{name:eE,form:eI,value:te,valuesDivider:e_,disabled:et,...eR})]})});w.classes={...o.InputBase.classes,...u.Combobox.classes},w.displayName="@mantine/core/TagsInput",e.s(["TagsInput",0,w],788350)},141806,e=>{"use strict";var t=e.i(433512),a=e.i(481178),r=e.i(44091),n=e.i(391466),i=e.i(956449),o=e.i(232471),l={group:"m_11def92b",root:"m_f85678b6",image:"m_11f8ac07",placeholder:"m_104cd71f"},s=e.i(275519),c=e.i(191788),u=e.i(391398);let d=(0,c.createContext)({withinGroup:!1}),p=(0,a.createVarsResolver)((e,{spacing:a})=>({group:{"--ag-spacing":(0,t.getSpacing)(a)}})),m=(0,s.factory)(e=>{let t=(0,r.useProps)("AvatarGroup",null,e),{classNames:a,className:i,style:s,styles:c,unstyled:m,vars:h,spacing:v,attributes:x,...y}=t;return(0,u.jsx)(d,{value:{withinGroup:!0},children:(0,u.jsx)(o.Box,{...(0,n.useStyles)({name:"AvatarGroup",classes:l,props:t,className:i,style:s,classNames:a,styles:c,unstyled:m,attributes:x,vars:h,varsResolver:p,rootSelector:"group"})("group"),...y})})});function h(e){return(0,u.jsx)("svg",{...e,"data-avatar-placeholder-icon":!0,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,u.jsx)("path",{d:"M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}m.classes=l,m.varsResolver=p,m.displayName="@mantine/core/AvatarGroup";let v=["blue","cyan","grape","green","indigo","lime","orange","pink","red","teal","violet"],x=(0,a.createVarsResolver)((e,{size:a,radius:r,variant:n,gradient:i,color:o,autoContrast:l,name:s,allowedInitialsColors:c})=>{let u="initials"===o&&"string"==typeof s?function(e,t=v){return t[Math.abs(function(e){let t=0;for(let a=0;a<e.length;a+=1)t=(t<<5)-t+e.charCodeAt(a)|0;return t}(e))%t.length]}(s,c):o,d=e.variantColorResolver({color:u||"gray",theme:e,gradient:i,variant:n||"light",autoContrast:l});return{root:{"--avatar-size":(0,t.getSize)(a,"avatar-size"),"--avatar-radius":void 0===r?void 0:(0,t.getRadius)(r),"--avatar-bg":u||n?d.background:void 0,"--avatar-color":u||n?d.color:void 0,"--avatar-bd":u||n?d.border:void 0}}}),y=(0,i.polymorphicFactory)(e=>{let t=(0,r.useProps)("Avatar",null,e),{classNames:a,className:i,style:s,styles:p,unstyled:m,vars:v,src:y,alt:f,radius:g,color:b,gradient:A,imageProps:j,children:w,autoContrast:C,mod:S,name:D,allowedInitialsColors:P,attributes:T,...O}=t,E=(0,c.use)(d),[I,k]=(0,c.useState)(!y),L=(0,n.useStyles)({name:"Avatar",props:t,classes:l,className:i,style:s,classNames:a,styles:p,unstyled:m,attributes:T,vars:v,varsResolver:x});return(0,c.useEffect)(()=>k(!y),[y]),(0,u.jsx)(o.Box,{...L("root"),mod:[{"within-group":E.withinGroup},S],...O,children:I||!y?(0,u.jsx)("span",{...L("placeholder"),title:f,children:w||"string"==typeof D&&function(e,t=2){let a=e.split(" ");return 1===a.length?e.slice(0,t).toUpperCase():a.map(e=>e[0]).slice(0,t).join("").toUpperCase()}(D)||(0,u.jsx)(h,{})}):(0,u.jsx)("img",{...j,...L("image"),src:y,alt:f,onError:e=>{k(!0),j?.onError?.(e)}})})});y.classes=l,y.varsResolver=x,y.displayName="@mantine/core/Avatar",y.Group=m,e.s(["Avatar",0,y],141806)},577830,e=>{"use strict";e.s(["gradientControls",0,[{type:"color",prop:"gradientFrom",initialValue:"blue",libraryValue:"__none__"},{type:"color",prop:"gradientTo",initialValue:"cyan",libraryValue:"__none__"},{type:"number",prop:"gradientDegree",initialValue:90,min:0,max:360,libraryValue:"__none__"}]])},153338,e=>{"use strict";e.s(["interactiveVariantsControl",0,{type:"select",prop:"variant",data:["default","filled","light","outline","subtle","transparent","white"],initialValue:"filled",libraryValue:"__none__"},"staticVariantsControl",0,{type:"select",prop:"variant",data:["filled","light","outline","transparent","white","default"],initialValue:"filled",libraryValue:"__none__"}])},471714,e=>{"use strict";var t=e.i(191788),a=e.i(171481);let r=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M243,96a20.33,20.33,0,0,0-17.74-14l-56.59-4.57L146.83,24.62a20.36,20.36,0,0,0-37.66,0L87.35,77.44,30.76,82A20.45,20.45,0,0,0,19.1,117.88l43.18,37.24-13.2,55.7A20.37,20.37,0,0,0,79.57,233L128,203.19,176.43,233a20.39,20.39,0,0,0,30.49-22.15l-13.2-55.7,43.18-37.24A20.43,20.43,0,0,0,243,96ZM172.53,141.7a12,12,0,0,0-3.84,11.86L181.58,208l-47.29-29.08a12,12,0,0,0-12.58,0L74.42,208l12.89-54.4a12,12,0,0,0-3.84-11.86L41.2,105.24l55.4-4.47a12,12,0,0,0,10.13-7.38L128,41.89l21.27,51.5a12,12,0,0,0,10.13,7.38l55.4,4.47Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M229.06,108.79l-48.7,42,14.88,62.79a8.4,8.4,0,0,1-12.52,9.17L128,189.09,73.28,222.74a8.4,8.4,0,0,1-12.52-9.17l14.88-62.79-48.7-42A8.46,8.46,0,0,1,31.73,94L95.64,88.8l24.62-59.6a8.36,8.36,0,0,1,15.48,0l24.62,59.6L224.27,94A8.46,8.46,0,0,1,229.06,108.79Z",opacity:"0.2"}),t.createElement("path",{d:"M239.18,97.26A16.38,16.38,0,0,0,224.92,86l-59-4.76L143.14,26.15a16.36,16.36,0,0,0-30.27,0L90.11,81.23,31.08,86a16.46,16.46,0,0,0-9.37,28.86l45,38.83L53,211.75a16.38,16.38,0,0,0,24.5,17.82L128,198.49l50.53,31.08A16.4,16.4,0,0,0,203,211.75l-13.76-58.07,45-38.83A16.43,16.43,0,0,0,239.18,97.26Zm-15.34,5.47-48.7,42a8,8,0,0,0-2.56,7.91l14.88,62.8a.37.37,0,0,1-.17.48c-.18.14-.23.11-.38,0l-54.72-33.65a8,8,0,0,0-8.38,0L69.09,215.94c-.15.09-.19.12-.38,0a.37.37,0,0,1-.17-.48l14.88-62.8a8,8,0,0,0-2.56-7.91l-48.7-42c-.12-.1-.23-.19-.13-.5s.18-.27.33-.29l63.92-5.16A8,8,0,0,0,103,91.86l24.62-59.61c.08-.17.11-.25.35-.25s.27.08.35.25L153,91.86a8,8,0,0,0,6.75,4.92l63.92,5.16c.15,0,.24,0,.33.29S224,102.63,223.84,102.73Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M237.28,97.87A14.18,14.18,0,0,0,224.76,88l-60.25-4.87-23.22-56.2a14.37,14.37,0,0,0-26.58,0L91.49,83.11,31.24,88a14.18,14.18,0,0,0-12.52,9.89A14.43,14.43,0,0,0,23,113.32L69,152.93l-14,59.25a14.4,14.4,0,0,0,5.59,15,14.1,14.1,0,0,0,15.91.6L128,196.12l51.58,31.71a14.1,14.1,0,0,0,15.91-.6,14.4,14.4,0,0,0,5.59-15l-14-59.25L233,113.32A14.43,14.43,0,0,0,237.28,97.87Zm-12.14,6.37-48.69,42a6,6,0,0,0-1.92,5.92l14.88,62.79a2.35,2.35,0,0,1-.95,2.57,2.24,2.24,0,0,1-2.6.1L131.14,184a6,6,0,0,0-6.28,0L70.14,217.61a2.24,2.24,0,0,1-2.6-.1,2.35,2.35,0,0,1-1-2.57l14.88-62.79a6,6,0,0,0-1.92-5.92l-48.69-42a2.37,2.37,0,0,1-.73-2.65,2.28,2.28,0,0,1,2.07-1.65l63.92-5.16a6,6,0,0,0,5.06-3.69l24.63-59.6a2.35,2.35,0,0,1,4.38,0l24.63,59.6a6,6,0,0,0,5.06,3.69l63.92,5.16a2.28,2.28,0,0,1,2.07,1.65A2.37,2.37,0,0,1,225.14,104.24Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M239.18,97.26A16.38,16.38,0,0,0,224.92,86l-59-4.76L143.14,26.15a16.36,16.36,0,0,0-30.27,0L90.11,81.23,31.08,86a16.46,16.46,0,0,0-9.37,28.86l45,38.83L53,211.75a16.38,16.38,0,0,0,24.5,17.82L128,198.49l50.53,31.08A16.4,16.4,0,0,0,203,211.75l-13.76-58.07,45-38.83A16.43,16.43,0,0,0,239.18,97.26Zm-15.34,5.47-48.7,42a8,8,0,0,0-2.56,7.91l14.88,62.8a.37.37,0,0,1-.17.48c-.18.14-.23.11-.38,0l-54.72-33.65a8,8,0,0,0-8.38,0L69.09,215.94c-.15.09-.19.12-.38,0a.37.37,0,0,1-.17-.48l14.88-62.8a8,8,0,0,0-2.56-7.91l-48.7-42c-.12-.1-.23-.19-.13-.5s.18-.27.33-.29l63.92-5.16A8,8,0,0,0,103,91.86l24.62-59.61c.08-.17.11-.25.35-.25s.27.08.35.25L153,91.86a8,8,0,0,0,6.75,4.92l63.92,5.16c.15,0,.24,0,.33.29S224,102.63,223.84,102.73Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M235.36,98.49A12.21,12.21,0,0,0,224.59,90l-61.47-5L139.44,27.67a12.37,12.37,0,0,0-22.88,0L92.88,85,31.41,90a12.45,12.45,0,0,0-7.07,21.84l46.85,40.41L56.87,212.64a12.35,12.35,0,0,0,18.51,13.49L128,193.77l52.62,32.36a12.12,12.12,0,0,0,13.69-.51,12.28,12.28,0,0,0,4.82-13l-14.32-60.42,46.85-40.41A12.29,12.29,0,0,0,235.36,98.49Zm-8.93,7.26-48.68,42a4,4,0,0,0-1.28,3.95l14.87,62.79a4.37,4.37,0,0,1-1.72,4.65,4.24,4.24,0,0,1-4.81.18L130.1,185.67a4,4,0,0,0-4.2,0L71.19,219.32a4.24,4.24,0,0,1-4.81-.18,4.37,4.37,0,0,1-1.72-4.65L79.53,151.7a4,4,0,0,0-1.28-3.95l-48.68-42A4.37,4.37,0,0,1,28.25,101a4.31,4.31,0,0,1,3.81-3L96,92.79a4,4,0,0,0,3.38-2.46L124,30.73a4.35,4.35,0,0,1,8.08,0l24.62,59.6A4,4,0,0,0,160,92.79l63.9,5.15a4.31,4.31,0,0,1,3.81,3A4.37,4.37,0,0,1,226.43,105.75Z"}))]]),n=t.forwardRef((e,n)=>t.createElement(a.default,{ref:n,...e,weights:r}));n.displayName="StarIcon",e.s(["StarIcon",0,n],471714)},359250,(e,t,a)=>{"use strict";Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),a.maxBy=function(e,t){if(0===e.length)return;let a=e[0],r=t(a);for(let n=1;n<e.length;n++){let i=e[n],o=t(i);o>r&&(r=o,a=i)}return a}},446106,(e,t,a)=>{"use strict";Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});let r=e.r(359250),n=e.r(387022),i=e.r(20972);a.maxBy=function(e,t){if(null!=e)return r.maxBy(Array.from(e),i.iteratee(t??n.identity))}},767577,(e,t,a)=>{t.exports=e.r(446106).maxBy},629566,e=>{"use strict";var t,a=e.i(191788),r=e.i(56206),n=e.i(62037),i=e.i(438596),o=["points","className","baseLinePoints","connectNulls"];function l(){return(l=Object.assign.bind()).apply(null,arguments)}var s=e=>null!=e&&e.x===+e.x&&e.y===+e.y,c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=[[]];e.forEach(e=>{var a=t[t.length-1];s(e)?a&&a.push(e):a&&a.length>0&&t.push([])});var a=e[0],r=t[t.length-1];s(a)&&r&&r.push(a);var n=t[t.length-1];return n&&n.length<=0&&(t=t.slice(0,-1)),t},u=(e,a)=>{var r=c(e);a&&(r=[r.reduce((e,t)=>[...e,...t],[])]);var n=r.map(e=>e.reduce((e,a,r)=>{var n,o;return(0,i.roundTemplateLiteral)(t||(n=["","","",",",""],o||(o=n.slice(0)),t=Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(o)}}))),e,0===r?"M":"L",a.x,a.y)},"")).join("");return 1===r.length?"".concat(n,"Z"):n};e.s(["Polygon",0,e=>{var{points:t,className:i,baseLinePoints:s,connectNulls:c}=e,d=function(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a={};for(var r in e)if(({}).hasOwnProperty.call(e,r)){if(-1!==t.indexOf(r))continue;a[r]=e[r]}return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],-1===t.indexOf(a)&&({}).propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}(e,o);if(!t||!t.length)return null;var p=(0,r.clsx)("recharts-polygon",i);if(s&&s.length){var m,h=d.stroke&&"none"!==d.stroke,v=(m=u(t,c),"".concat("Z"===m.slice(-1)?m.slice(0,-1):m,"L").concat(u(Array.from(s).reverse(),c).slice(1)));return a.createElement("g",{className:p},a.createElement("path",l({},(0,n.svgPropertiesAndEvents)(d),{fill:"Z"===v.slice(-1)?d.fill:"none",stroke:"none",d:v})),h?a.createElement("path",l({},(0,n.svgPropertiesAndEvents)(d),{fill:"none",d:u(t,c)})):null,h?a.createElement("path",l({},(0,n.svgPropertiesAndEvents)(d),{fill:"none",d:u(s,c)})):null)}var x=u(t,c);return a.createElement("path",l({},(0,n.svgPropertiesAndEvents)(d),{fill:"Z"===x.slice(-1)?d.fill:"none",className:p,d:x}))}])},299887,985743,e=>{"use strict";var t=e.i(451400),a=e.i(399479),r=e.i(83727),n=e.i(901841),i=e.i(516257),o=e.i(708248),l=e.i(349229),s=e.i(755335),c=e.i(128991),u=e=>e.graphicalItems.polarItems,d=(0,t.createSelector)([o.pickAxisType,l.pickAxisId],r.itemAxisPredicate),p=(0,t.createSelector)([u,r.selectBaseAxis,d],r.combineGraphicalItemsSettings),m=(0,t.createSelector)([p],r.combineGraphicalItemsData),h=(0,t.createSelector)([m,a.selectChartDataAndAlwaysIgnoreIndexes],r.combineDisplayedData),v=(0,t.createSelector)([h,r.selectBaseAxis,p],r.combineAppliedValues);(0,t.createSelector)([h,r.selectBaseAxis,p],(e,t,a)=>a.length>0?e.flatMap(e=>a.flatMap(a=>{var r;return{value:(0,i.getValueByDataKey)(e,null!=(r=t.dataKey)?r:a.dataKey),errorDomain:[]}})).filter(Boolean):(null==t?void 0:t.dataKey)!=null?e.map(e=>({value:(0,i.getValueByDataKey)(e,t.dataKey),errorDomain:[]})):e.map(e=>({value:e,errorDomain:[]})));var x=()=>void 0,y=(0,t.createSelector)([h,r.selectBaseAxis,p,r.selectAllErrorBarSettings,o.pickAxisType,a.selectChartDataSliceIgnoringIndexes],r.combineDomainOfAllAppliedNumericalValuesIncludingErrorValues),f=(0,t.createSelector)([r.selectBaseAxis,r.selectDomainDefinition,r.selectDomainFromUserPreference,x,y,x,n.selectChartLayout,o.pickAxisType],r.combineNumericalDomain),g=(0,t.createSelector)([r.selectBaseAxis,n.selectChartLayout,h,v,s.selectStackOffsetType,o.pickAxisType,f],r.combineAxisDomain),b=(0,t.createSelector)([g,r.selectRenderableAxisSettings,r.selectRealScaleType],r.combineNiceTicks),A=(0,t.createSelector)([r.selectBaseAxis,g,b,o.pickAxisType],r.combineAxisDomainWithNiceTicks),j=(0,t.createSelector)([r.selectRealScaleType,A],c.combineCheckedDomain);e.s(["selectPolarAppliedValues",0,v,"selectPolarAxisCheckedDomain",0,j,"selectPolarItemsSettings",0,p,"selectPolarNiceTicks",0,b,"selectUnfilteredPolarItems",0,u],299887);var w=e.i(191788),C=e.i(546189),S=e.i(888494),D=e.i(688532),P=e.i(998227),T=e.i(451494),O=e.i(543372),E=e.i(863751);function I(e){var t=(0,O.useAppDispatch)();return(0,w.useEffect)(()=>{t((0,E.updatePolarOptions)(e))},[t,e]),null}var k=e.i(390241),L=e.i(297974),B=e.i(560894),N=["layout"];function R(){return(R=Object.assign.bind()).apply(null,arguments)}function _(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}var z=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?_(Object(a),!0).forEach(function(t){var r,n,i;r=e,n=t,i=a[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var r=a.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(n))in r?Object.defineProperty(r,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[n]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):_(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({accessibilityLayer:!0,stackOffset:"none",barCategoryGap:"10%",barGap:4,margin:{top:5,right:5,bottom:5,left:5},reverseStackOrder:!1,syncMethod:"index",layout:"radial",responsive:!1,cx:"50%",cy:"50%",innerRadius:0,outerRadius:"80%"},B.initialEventSettingsState),M=(0,w.forwardRef)(function(e,t){var a,r=(0,L.resolveDefaultProps)(e.categoricalChartProps,z),{layout:n}=r,i=function(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a={};for(var r in e)if(({}).hasOwnProperty.call(e,r)){if(-1!==t.indexOf(r))continue;a[r]=e[r]}return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],-1===t.indexOf(a)&&({}).propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}(r,N),{chartName:o,defaultTooltipEventType:l,validateTooltipEventTypes:s,tooltipPayloadSearcher:c}=e;return w.createElement(C.RechartsStoreProvider,{preloadedState:{options:{chartName:o,defaultTooltipEventType:l,validateTooltipEventTypes:s,tooltipPayloadSearcher:c,eventEmitter:void 0}},reduxStoreName:null!=(a=r.id)?a:o},w.createElement(S.ChartDataContextProvider,{chartData:r.data}),w.createElement(D.ReportMainChartProps,{layout:n,margin:r.margin}),w.createElement(T.ReportEventSettings,{throttleDelay:r.throttleDelay,throttledEvents:r.throttledEvents}),w.createElement(P.ReportChartProps,{baseValue:void 0,accessibilityLayer:r.accessibilityLayer,barCategoryGap:r.barCategoryGap,maxBarSize:r.maxBarSize,stackOffset:r.stackOffset,barGap:r.barGap,barSize:r.barSize,syncId:r.syncId,syncMethod:r.syncMethod,className:r.className,reverseStackOrder:r.reverseStackOrder}),w.createElement(I,{cx:r.cx,cy:r.cy,startAngle:r.startAngle,endAngle:r.endAngle,innerRadius:r.innerRadius,outerRadius:r.outerRadius}),w.createElement(k.CategoricalChart,R({},i,{ref:t})))});e.s(["PolarChart",0,M,"defaultPolarChartProps",0,z],985743)},42201,e=>{"use strict";var t=e.i(451400),a=e.i(83727),r=e.i(586489),n=e.i(901841),i=e.i(299887),o=e.i(708248),l=e.i(163337),s=e.i(952317),c=(e,t,a)=>{switch(t){case"angleAxis":return(0,r.selectAngleAxis)(e,a);case"radiusAxis":return(0,r.selectRadiusAxis)(e,a);default:throw Error("Unexpected axis type: ".concat(t))}},u=(e,t,a)=>{switch(t){case"angleAxis":return(0,r.selectAngleAxisRangeWithReversed)(e,a);case"radiusAxis":return(0,r.selectRadiusAxisRangeWithReversed)(e,a);default:throw Error("Unexpected axis type: ".concat(t))}},d=(0,t.createSelector)([c,a.selectRealScaleType,i.selectPolarAxisCheckedDomain,u],s.combineConfiguredScale),p=(0,t.createSelector)([d],l.rechartsScaleFactory),m=(0,t.createSelector)([n.selectChartLayout,i.selectPolarAppliedValues,a.selectRenderableAxisSettings,o.pickAxisType],a.combineCategoricalDomain),h=(0,t.createSelector)([n.selectChartLayout,c,a.selectRealScaleType,p,i.selectPolarNiceTicks,u,a.selectDuplicateDomain,m,o.pickAxisType],a.combineAxisTicks),v=(0,t.createSelector)([h],e=>{if(e){var t=new Map;return e.forEach(e=>{var a=(e.coordinate+360)%360;t.has(a)||t.set(a,e)}),Array.from(t.values())}}),x=(0,t.createSelector)([n.selectChartLayout,c,p,u,a.selectDuplicateDomain,m,o.pickAxisType],a.combineGraphicalItemTicks);e.s(["selectPolarAngleAxisTicks",0,v,"selectPolarAxisScale",0,p,"selectPolarAxisTicks",0,h,"selectPolarGraphicalItemAxisTicks",0,x])},313667,908277,e=>{"use strict";e.s(["Scatter",()=>er,"computeScatterPoints",()=>H],313667);var t=e.i(191788),a=e.i(56206),r=e.i(815954),n=e.i(301426),i=e.i(106043),o=e.i(366998),l=e.i(300244),s=e.i(270627),c=e.i(516257),u=e.i(778979),d=e.i(285505),p=e.i(134959),m=["option","isActive"];function h(){return(h=Object.assign.bind()).apply(null,arguments)}function v(e){var{option:a,isActive:r}=e,n=function(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a={};for(var r in e)if(({}).hasOwnProperty.call(e,r)){if(-1!==t.indexOf(r))continue;a[r]=e[r]}return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],-1===t.indexOf(a)&&({}).propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}(e,m);return"string"==typeof a?t.createElement(p.Shape,h({option:t.createElement(d.Symbols,h({type:a},n)),isActive:r,shapeType:"symbols"},n)):t.createElement(p.Shape,h({option:a,isActive:r,shapeType:"symbols"},n))}var x=e.i(616468),y=e.i(128002),f=e.i(170038),g=e.i(777814),b=e.i(451400),A=e.i(399479),j=e.i(83727),w=(0,b.createSelector)([j.selectUnfilteredCartesianItems,(e,t,a,r,n)=>n],(e,t)=>e.filter(e=>"scatter"===e.type).find(e=>e.id===t)),C=(0,b.createSelector)([(e,t,a,r,n,i,o)=>(0,A.selectChartDataWithIndexesIfNotInPanoramaPosition4)(e,void 0,void 0,o),(e,t,a,r,n,i,o)=>(0,j.selectAxisWithScale)(e,"xAxis",t,o),(e,t,a,r,n,i,o)=>(0,j.selectTicksOfGraphicalItem)(e,"xAxis",t,o),(e,t,a,r,n,i,o)=>(0,j.selectAxisWithScale)(e,"yAxis",a,o),(e,t,a,r,n,i,o)=>(0,j.selectTicksOfGraphicalItem)(e,"yAxis",a,o),(e,t,a,r)=>(0,j.selectZAxisWithScale)(e,"zAxis",r,!1),w,(e,t,a,r,n,i)=>i],(e,t,a,r,n,i,o,l)=>{var s,{chartData:c,dataStartIndex:u,dataEndIndex:d}=e;if(null!=o&&null!=(s=(null==o?void 0:o.data)!=null&&o.data.length>0?o.data:null==c?void 0:c.slice(u,d+1))&&null!=t&&null!=r&&null!=a&&null!=n&&(null==a?void 0:a.length)!==0&&(null==n?void 0:n.length)!==0)return H({displayedData:s,xAxis:t,yAxis:r,zAxis:i,scatterSettings:o,xAxisTicks:a,yAxisTicks:n,cells:l})}),S=e.i(543372),D=e.i(662688),P=e.i(281695),T=e.i(836094),O=e.i(258111),E=e.i(3304),I=e.i(297974),k=e.i(768069),L=e.i(436323),B=e.i(883388),N=e.i(355476),R=e.i(901841),_=e.i(561622),z=e.i(446354),M=e.i(547810),K=["id"],V=["onMouseEnter","onClick","onMouseLeave"],G=["animationBegin","animationDuration","animationEasing","hide","isAnimationActive","legendType","lineJointType","lineType","shape","xAxisId","yAxisId","zAxisId"];function F(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a={};for(var r in e)if(({}).hasOwnProperty.call(e,r)){if(-1!==t.indexOf(r))continue;a[r]=e[r]}return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],-1===t.indexOf(a)&&({}).propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function Z(){return(Z=Object.assign.bind()).apply(null,arguments)}function W(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function $(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?W(Object(a),!0).forEach(function(t){var r,n,i;r=e,n=t,i=a[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var r=a.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(n))in r?Object.defineProperty(r,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[n]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):W(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var Y=t.memo(e=>{var{dataKey:a,points:r,stroke:n,strokeWidth:i,fill:o,name:l,hide:s,tooltipType:u,id:d}=e,p={dataDefinedOnItem:null==r?void 0:r.map(e=>e.tooltipPayload),getPosition:e=>{var t;return null==r||null==(t=r[Number(e)])?void 0:t.tooltipPosition},settings:{stroke:n,strokeWidth:i,fill:o,nameKey:void 0,dataKey:a,name:(0,c.getTooltipNameProp)(l,a),hide:s,type:u,color:o,unit:"",graphicalItemId:d}};return t.createElement(y.SetTooltipEntrySettings,{tooltipEntrySettings:p})});function J(e){var a,n,{points:i,props:l}=e,{line:c,lineType:u,lineJointType:d}=l;if(!c)return null;var p=(0,B.svgPropertiesNoEvents)(l),m=(0,B.svgPropertiesNoEventsFromUnknown)(c);if("joint"===u)a=i.map(e=>{var t,a;return{x:null!=(t=e.cx)?t:null,y:null!=(a=e.cy)?a:null}});else if("fitting"===u){var{xmin:h,xmax:v,a:x,b:y}=(0,s.getLinearRegression)(i);a=[{x:h,y:x*h+y},{x:v,y:x*v+y}]}var f=$($($({},p),{},{fill:"none",stroke:p&&p.fill},m),{},{points:a});return n=t.isValidElement(c)?t.cloneElement(c,f):"function"==typeof c?c(f):t.createElement(o.Curve,Z({},f,{type:d})),t.createElement(r.Layer,{className:"recharts-scatter-line",key:"recharts-scatter-line"},n)}function U(e){var{showLabels:a,points:r,children:i}=e,o=(0,R.useViewBox)(),l=(0,t.useMemo)(()=>null==r?void 0:r.map(e=>{var t,a,r={x:null!=(t=e.x)?t:0,y:null!=(a=e.y)?a:0,width:e.width,height:e.height,lowerWidth:e.width,upperWidth:e.width};return $($({},r),{},{value:void 0,payload:e.payload,viewBox:r,parentViewBox:o,fill:void 0})}),[o,r]);return t.createElement(n.CartesianLabelListContextProvider,{value:a?l:void 0},i)}function X(e){var{points:a,allOtherScatterProps:n}=e,{shape:i,activeShape:o,dataKey:l}=n,{id:s}=n,c=F(n,K),d=(0,S.useAppSelector)(P.selectActiveTooltipIndex),{onMouseEnter:p,onClick:m,onMouseLeave:h}=n,y=F(n,V),f=(0,x.useMouseEnterItemDispatch)(p,l,s),g=(0,x.useMouseLeaveItemDispatch)(h),b=(0,x.useMouseClickItemDispatch)(m,l,s);if(!(0,u.isNonEmptyArray)(a))return null;var A=(0,B.svgPropertiesNoEvents)(c);return t.createElement(t.Fragment,null,t.createElement(J,{points:a,props:c}),a.map((e,a)=>{var n=null!=o&&!1!==o,l=n&&d===String(a),c=n&&l?o:i,p=$($($({},A),e),{},{index:a,[O.DATA_ITEM_GRAPHICAL_ITEM_ID_ATTRIBUTE_NAME]:String(s)});return t.createElement(_.ZIndexLayer,{key:"symbol-".concat(null==e?void 0:e.cx,"-").concat(null==e?void 0:e.cy,"-").concat(null==e?void 0:e.size,"-").concat(a),zIndex:l?z.DefaultZIndexes.activeDot:void 0},t.createElement(r.Layer,Z({className:"recharts-scatter-symbol"},(0,u.adaptEventsOfChild)(y,e,a),{onMouseEnter:f(e,a),onMouseLeave:g(e,a),onClick:b(e,a)}),t.createElement(v,Z({option:c,isActive:l},p))))}))}function q(e){var{previousPointsRef:a,props:i}=e,{points:o,isAnimationActive:l,animationBegin:c,animationDuration:u,animationEasing:d}=i,p=a.current,m=(0,E.useAnimationId)(i,"recharts-scatter-"),[h,v]=(0,t.useState)(!1),x=(0,t.useCallback)(()=>{v(!1)},[]),y=(0,t.useCallback)(()=>{v(!0)},[]),f=!h;return t.createElement(U,{showLabels:f,points:o},i.children,t.createElement(N.JavascriptAnimate,{animationId:m,begin:c,duration:u,isActive:l,easing:d,onAnimationEnd:x,onAnimationStart:y,key:m},e=>{var n=1===e?o:null==o?void 0:o.map((t,a)=>{var r=p&&p[a];return r?$($({},t),{},{cx:null==t.cx?void 0:(0,s.interpolate)(r.cx,t.cx,e),cy:null==t.cy?void 0:(0,s.interpolate)(r.cy,t.cy,e),size:(0,s.interpolate)(r.size,t.size,e)}):$($({},t),{},{size:(0,s.interpolate)(0,t.size,e)})});return e>0&&(a.current=n),t.createElement(r.Layer,null,t.createElement(X,{points:n,allOtherScatterProps:i,showLabels:f}))}),t.createElement(n.LabelListFromLabelProp,{label:i.label}))}function H(e){var{displayedData:t,xAxis:a,yAxis:r,zAxis:n,scatterSettings:i,xAxisTicks:o,yAxisTicks:l,cells:u}=e,d=(0,s.isNullish)(a.dataKey)?i.dataKey:a.dataKey,p=(0,s.isNullish)(r.dataKey)?i.dataKey:r.dataKey,m=n&&n.dataKey,h=n?n.range:j.implicitZAxis.range,v=h&&h[0],x=a.scale.bandwidth?a.scale.bandwidth():0,y=r.scale.bandwidth?r.scale.bandwidth():0;return t.map((e,t)=>{var h=(0,c.getValueByDataKey)(e,d),f=(0,c.getValueByDataKey)(e,p),g=!(0,s.isNullish)(m)&&(0,c.getValueByDataKey)(e,m)||"-",b=[{name:(0,s.isNullish)(a.dataKey)?i.name:a.name||String(a.dataKey),unit:a.unit||"",value:h,payload:e,dataKey:d,type:i.tooltipType,graphicalItemId:i.id},{name:(0,s.isNullish)(r.dataKey)?i.name:r.name||String(r.dataKey),unit:r.unit||"",value:f,payload:e,dataKey:p,type:i.tooltipType,graphicalItemId:i.id}];"-"!==g&&null!=n&&b.push({name:n.name||n.dataKey,unit:n.unit||"",value:g,payload:e,dataKey:m,type:i.tooltipType,graphicalItemId:i.id});var A=(0,c.getCateCoordinateOfLine)({axis:a,ticks:o,bandSize:x,entry:e,index:t,dataKey:d}),j=(0,c.getCateCoordinateOfLine)({axis:r,ticks:l,bandSize:y,entry:e,index:t,dataKey:p}),w="-"!==g&&null!=n?n.scale.map(g):v,C=null==w?0:Math.sqrt(Math.max(w,0)/Math.PI);return $($({},e),{},{cx:A,cy:j,x:null==A?void 0:A-C,y:null==j?void 0:j-C,width:2*C,height:2*C,size:w,node:{x:h,y:f,z:g},tooltipPayload:b,tooltipPosition:{x:A,y:j},payload:e},u&&u[t]&&u[t].props)})}var Q=(e,t,a)=>({x:e.cx,y:e.cy,value:"x"===a?Number(e.node.x):Number(e.node.y),errorVal:(0,c.getValueByDataKey)(e,t)});function ee(e){var{hide:n,points:i,className:o,needClip:l,xAxisId:s,yAxisId:c,id:u}=e,d=(0,t.useRef)(null);if(n)return null;var p=(0,a.clsx)("recharts-scatter",o);return t.createElement(_.ZIndexLayer,{zIndex:e.zIndex},t.createElement(r.Layer,{className:p,clipPath:l?"url(#clipPath-".concat(u,")"):void 0,id:u},l&&t.createElement("defs",null,t.createElement(g.GraphicalItemClipPath,{clipPathId:u,xAxisId:s,yAxisId:c})),t.createElement(f.SetErrorBarContext,{xAxisId:s,yAxisId:c,data:i,dataPointFormatter:Q,errorBarOffset:0},t.createElement(r.Layer,{key:"recharts-scatter-symbols"},t.createElement(q,{props:e,previousPointsRef:d})))))}var et={xAxisId:0,yAxisId:0,zAxisId:0,label:!1,line:!1,legendType:"circle",lineType:"joint",lineJointType:"linear",shape:"circle",hide:!1,isAnimationActive:"auto",animationBegin:0,animationDuration:400,animationEasing:"linear",zIndex:z.DefaultZIndexes.scatter};function ea(e){var a=(0,I.resolveDefaultProps)(e,et),{animationBegin:r,animationDuration:n,animationEasing:o,hide:s,isAnimationActive:c,legendType:u,lineJointType:d,lineType:p,shape:m,xAxisId:h,yAxisId:v,zAxisId:x}=a,y=F(a,G),{needClip:f}=(0,g.useNeedsClip)(h,v),b=(0,t.useMemo)(()=>(0,i.findAllByType)(e.children,l.Cell),[e.children]),A=(0,D.useIsPanorama)(),j=(0,S.useAppSelector)(t=>C(t,h,v,x,e.id,b,A));return null==f||null==j?null:t.createElement(t.Fragment,null,t.createElement(Y,{dataKey:e.dataKey,points:j,stroke:e.stroke,strokeWidth:e.strokeWidth,fill:e.fill,name:e.name,hide:e.hide,tooltipType:e.tooltipType,id:e.id}),t.createElement(ee,Z({},y,{xAxisId:h,yAxisId:v,zAxisId:x,lineType:p,lineJointType:d,legendType:u,shape:m,hide:s,isAnimationActive:c,animationBegin:r,animationDuration:n,animationEasing:o,points:j,needClip:f})))}var er=t.memo(function(e){var a=(0,I.resolveDefaultProps)(e,et),r=(0,D.useIsPanorama)();return t.createElement(k.RegisterGraphicalItemId,{id:a.id,type:"scatter"},e=>t.createElement(t.Fragment,null,t.createElement(T.SetLegendPayload,{legendPayload:(e=>{var{dataKey:t,name:a,fill:r,legendType:n,hide:i}=e;return[{inactive:i,dataKey:t,type:n,color:r,value:(0,c.getTooltipNameProp)(a,t),payload:e}]})(a)}),t.createElement(L.SetCartesianGraphicalItem,{type:"scatter",id:e,data:a.data,xAxisId:a.xAxisId,yAxisId:a.yAxisId,zAxisId:a.zAxisId,dataKey:a.dataKey,hide:a.hide,name:a.name,tooltipType:a.tooltipType,isPanorama:r}),t.createElement(ea,Z({},a,{id:e}))))},M.propsAreEqual);er.displayName="Scatter";var en=e.i(471970),ei=e.i(437515),eo=["item"],el=(0,t.forwardRef)((e,a)=>t.createElement(ei.CartesianChart,{chartName:"ScatterChart",defaultTooltipEventType:"item",validateTooltipEventTypes:eo,tooltipPayloadSearcher:en.arrayTooltipSearcher,categoricalChartProps:e,ref:a}));e.s(["ScatterChart",0,el],908277)},19830,216339,e=>{"use strict";var t=e.i(931718),a=e.i(330693),r=e.i(951254),n=e.i(44091),i=e.i(391466),o=e.i(871346),l=e.i(41298),s=e.i(7535),c=e.i(83353),u=e.i(956449),d=e.i(232471);let p={gap:{type:"spacing",property:"gap"},rowGap:{type:"spacing",property:"rowGap"},columnGap:{type:"spacing",property:"columnGap"},align:{type:"identity",property:"alignItems"},justify:{type:"identity",property:"justifyContent"},wrap:{type:"identity",property:"flexWrap"},direction:{type:"identity",property:"flexDirection"}};e.s(["FLEX_STYLE_PROPS_DATA",0,p],216339);var m={root:"m_8bffd616"},h=e.i(391398);let v=(0,u.polymorphicFactory)(e=>{let u=(0,n.useProps)("Flex",null,e),{classNames:v,className:x,style:y,styles:f,unstyled:g,vars:b,gap:A,rowGap:j,columnGap:w,align:C,justify:S,wrap:D,direction:P,attributes:T,...O}=u,E=(0,i.useStyles)({name:"Flex",classes:m,props:u,className:x,style:y,classNames:v,styles:f,unstyled:g,attributes:T,vars:b}),I=(0,r.useMantineTheme)(),k=(0,c.useRandomClassName)(),L=(0,s.parseStyleProps)({styleProps:{gap:A,rowGap:j,columnGap:w,align:C,justify:S,wrap:D,direction:P},theme:I,data:p}),B=(0,a.useMantineDeduplicateInlineStyles)(),N=B&&L.hasResponsiveStyles?(0,l.hashStyleProps)(L.styles,L.media):k;return(0,h.jsxs)(h.Fragment,{children:[L.hasResponsiveStyles&&(0,h.jsx)(o.InlineStyles,{selector:`.${N}`,styles:L.styles,media:L.media,deduplicate:B}),(0,h.jsx)(d.Box,{...E("root",{className:N,style:(0,t.filterProps)(L.inlineStyles)}),...O})]})});v.classes=m,v.displayName="@mantine/core/Flex",e.s(["Flex",0,v],19830)},811527,e=>{"use strict";var t=e.i(648863),a=e.i(191788),r=e.i(232471),n=e.i(485108),i=e.i(470743),o=e.i(34515),l=e.i(391398),s=e.i(196072);let c={in:{opacity:1,transform:"scaleY(1)"},out:{opacity:0,transform:"scaleY(0)"},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},u={type:"code",code:`
import { useState } from 'react';
import { useClickOutside } from '@mantine/hooks';
import { Transition, Paper, Button, Box } from '@mantine/core';

const scaleY = {
  in: { opacity: 1, transform: 'scaleY(1)' },
  out: { opacity: 0, transform: 'scaleY(0)' },
  common: { transformOrigin: 'top' },
  transitionProperty: 'transform, opacity',
};

function Demo() {
  const [opened, setOpened] = useState(false);
  const clickOutsideRef = useClickOutside(() => setOpened(false));

  return (
    <Box
      maw={200}
      pos="relative"
      style={{ display: 'flex', justifyContent: 'center', margin: 'auto' }}
    >
      <Button onClick={() => setOpened(true)}>Open dropdown</Button>
      <Transition
        mounted={opened}
        transition={scaleY}
        duration={200}
        timingFunction="ease"
        keepMounted
      >
        {(transitionStyle) => (
          <Paper
            shadow="md"
            p="xl"
            h={120}
            pos="absolute"
            top={0}
            left={0}
            right={0}
            ref={clickOutsideRef}
            style={{ ...transitionStyle, zIndex: 1 }}
          >
            Dropdown
          </Paper>
        )}
      </Transition>
    </Box>
  );
}`,component:function(){let[e,t]=(0,a.useState)(!1),u=(0,s.useClickOutside)(()=>t(!1));return(0,l.jsxs)(r.Box,{maw:200,pos:"relative",style:{display:"flex",justifyContent:"center",margin:"auto"},children:[(0,l.jsx)(n.Button,{onClick:()=>t(!0),children:"Open dropdown"}),(0,l.jsx)(o.Transition,{mounted:e,transition:c,duration:200,timingFunction:"ease",keepMounted:!0,children:e=>(0,l.jsx)(i.Paper,{shadow:"md",p:"xl",h:120,pos:"absolute",top:0,left:0,right:0,ref:u,style:{...e,zIndex:1},children:"Dropdown"})})]})}};var d=e.i(19830);let p={type:"code",code:`
import { useState } from 'react';
import { Button, Flex, Paper, Transition } from '@mantine/core';

export function Demo() {
  const [opened, setOpened] = useState(false);

  return (
    <Flex maw={200} pos="relative" justify="center" m="auto">
      <Button onClick={() => setOpened(true)}>Open dropdown</Button>

      <Transition mounted={opened} transition="pop" enterDelay={500} exitDelay={300}>
        {(transitionStyle) => (
          <Paper
            shadow="md"
            p="xl"
            h={120}
            pos="absolute"
            inset={0}
            bottom="auto"
            onClick={() => setOpened(false)}
            style={{ ...transitionStyle, zIndex: 1 }}
          >
            Click to close
          </Paper>
        )}
      </Transition>
    </Flex>
  );
}`,component:function(){let[e,t]=(0,a.useState)(!1);return(0,l.jsxs)(d.Flex,{maw:200,pos:"relative",justify:"center",m:"auto",children:[(0,l.jsx)(n.Button,{onClick:()=>t(!0),children:"Open dropdown"}),(0,l.jsx)(o.Transition,{mounted:e,transition:"pop",enterDelay:500,exitDelay:300,children:e=>(0,l.jsx)(i.Paper,{shadow:"md",p:"xl",h:120,pos:"absolute",inset:0,bottom:"auto",onClick:()=>t(!1),style:{...e,zIndex:1},children:"Click here to close"})})]})}};var m=(0,t.__exportAll)({custom:()=>u,delay:()=>p});e.s(["TransitionDemos",0,m],811527)},621333,e=>{"use strict";var t=e.i(648863);let a=["John Doe","Jane Mol","Alex Lump","Sarah Condor","Mike Johnson","Kate Kok","Tom Smith"],r=`const names = [
  'John Doe',
  'Jane Mol',
  'Alex Lump',
  'Sarah Condor',
  'Mike Johnson',
  'Kate Kok',
  'Tom Smith',
];`;var n=e.i(471714),i=e.i(141806),o=e.i(725695),l=e.i(391398);let s={type:"code",code:`
import { Avatar } from '@mantine/core';
import { StarIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <>
      {/* With image */}
      <Avatar src="avatar.png" alt="it's me" />

      {/* Default placeholder */}
      <Avatar radius="xl" />

      {/* Letters with xl radius */}
      <Avatar color="cyan" radius="xl">MK</Avatar>

      {/* Custom placeholder icon */}
      <Avatar color="blue" radius="sm">
        <StarIcon size={20} />
      </Avatar>
    </>
  );
}

`,component:function(){return(0,l.jsxs)(o.Group,{justify:"center",children:[(0,l.jsx)(i.Avatar,{src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png",alt:"it's me"}),(0,l.jsx)(i.Avatar,{radius:"xl"}),(0,l.jsx)(i.Avatar,{color:"cyan",radius:"xl",children:"MK"}),(0,l.jsx)(i.Avatar,{color:"blue",radius:"sm",children:(0,l.jsx)(n.StarIcon,{size:20})})]})}},c={type:"code",code:`
import { Avatar } from '@mantine/core';
import { StarIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <>
      {/* Default placeholder */}
      <Avatar src={null} alt="no image here" />

      {/* Default placeholder with custom color */}
      <Avatar src={null} alt="no image here" color="indigo" />

      {/* Placeholder with initials */}
      <Avatar src={null} alt="Vitaly Rtishchev" color="red">VR</Avatar>

      {/* Placeholder with custom icon */}
      <Avatar color="blue" radius="xl">
        <StarIcon size={20} />
      </Avatar>
    </>
  );
}

`,component:function(){return(0,l.jsxs)(o.Group,{justify:"center",children:[(0,l.jsx)(i.Avatar,{src:null,alt:"no image here"}),(0,l.jsx)(i.Avatar,{src:null,alt:"no image here",color:"indigo"}),(0,l.jsx)(i.Avatar,{src:null,alt:"no image here",color:"red",children:"VR"}),(0,l.jsx)(i.Avatar,{color:"blue",radius:"xl",children:(0,l.jsx)(n.StarIcon,{size:20})})]})}};var u=e.i(153338);let d={type:"configurator",component:i.Avatar,centered:!0,code:`
import { Avatar } from '@mantine/core';

function Demo() {
  return <Avatar{{props}} />;
}
`,controls:[u.staticVariantsControl,{prop:"radius",type:"size",initialValue:"md",libraryValue:"100%"},{prop:"size",type:"size",initialValue:"md",libraryValue:"md"},{prop:"color",type:"color",initialValue:"gray",libraryValue:"gray"},{prop:"src",type:"string",initialValue:"",libraryValue:null}]},p={type:"code",centered:!0,code:`
import { Avatar } from '@mantine/core';

function Demo() {
  return (
    <Avatar
      component="a"
      href="https://github.com/rtivital"
      target="_blank"
      src="avatar.png"
      alt="it's me"
    />
  );
}
`,component:function(){return(0,l.jsx)(i.Avatar,{component:"a",href:"https://github.com/rtivital",target:"_blank",src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png",alt:"it's me"})}},m={type:"code",centered:!0,code:`
import { Avatar } from '@mantine/core';

function Demo() {
  return (
    <Avatar.Group>
      <Avatar src="image.png" />
      <Avatar src="image.png" />
      <Avatar src="image.png" />
      <Avatar>+5</Avatar>
    </Avatar.Group>
  );
}
`,component:function(){return(0,l.jsxs)(i.Avatar.Group,{children:[(0,l.jsx)(i.Avatar,{src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png"}),(0,l.jsx)(i.Avatar,{src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"}),(0,l.jsx)(i.Avatar,{src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png"}),(0,l.jsx)(i.Avatar,{children:"+5"})]})}};var h=e.i(431868);let v={type:"code",centered:!0,code:`
import { Avatar, Tooltip } from '@mantine/core';

function Demo() {
  return (
    <Tooltip.Group openDelay={300} closeDelay={100}>
      <Avatar.Group spacing="sm">
        <Tooltip label="Salazar Troop" withArrow>
          <Avatar src="image.png" radius="xl" />
        </Tooltip>
        <Tooltip label="Bandit Crimes" withArrow>
          <Avatar src="image.png" radius="xl" />
        </Tooltip>
        <Tooltip label="Jane Rata" withArrow>
          <Avatar src="image.png" radius="xl" />
        </Tooltip>
        <Tooltip
          withArrow
          label={
            <>
              <div>John Outcast</div>
              <div>Levi Capitan</div>
            </>
          }
        >
          <Avatar radius="xl">+2</Avatar>
        </Tooltip>
      </Avatar.Group>
    </Tooltip.Group>
  );
}
`,component:function(){return(0,l.jsx)(h.Tooltip.Group,{openDelay:300,closeDelay:100,children:(0,l.jsxs)(i.Avatar.Group,{spacing:"sm",children:[(0,l.jsx)(h.Tooltip,{label:"Salazar Troop",withArrow:!0,children:(0,l.jsx)(i.Avatar,{src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png",radius:"xl"})}),(0,l.jsx)(h.Tooltip,{label:"Bandit Crimes",withArrow:!0,children:(0,l.jsx)(i.Avatar,{src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png",radius:"xl"})}),(0,l.jsx)(h.Tooltip,{label:"Jane Rata",withArrow:!0,children:(0,l.jsx)(i.Avatar,{src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png",radius:"xl"})}),(0,l.jsx)(h.Tooltip,{withArrow:!0,label:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{children:"John Outcast"}),(0,l.jsx)("div",{children:"Levi Capitan"})]}),children:(0,l.jsx)(i.Avatar,{radius:"xl",children:"+2"})})]})})}},x={type:"configurator",component:function(e){return(0,l.jsx)(i.Avatar,{size:"xl",variant:"gradient",gradient:{from:e.gradientFrom,to:e.gradientTo,deg:e.gradientDegree},children:"GR"})},code:e=>`
import { Avatar } from '@mantine/core';

function Demo() {
  return (
    <Avatar
      size="xl"
      variant="gradient"
      gradient={{ from: '${e.gradientFrom}', to: '${e.gradientTo}', deg: ${e.gradientDegree} }}
    >
      GR
    </Avatar>
  );
}
`,centered:!0,controls:e.i(577830).gradientControls},y={type:"code",component:function(){return(0,l.jsx)(o.Group,{children:a.map(e=>(0,l.jsx)(i.Avatar,{name:e,color:"initials"},e))})},code:`
import { Avatar, Group } from '@mantine/core';

${r}

function Demo() {
  const avatars = names.map((name) => <Avatar key={name} name={name} color="initials" />);
  return <Group>{avatars}</Group>;
}
`,centered:!0},f={type:"code",component:function(){return(0,l.jsx)(o.Group,{children:a.map(e=>(0,l.jsx)(i.Avatar,{name:e,color:"initials",allowedInitialsColors:["blue","red"]},e))})},code:`
import { Avatar, Group } from '@mantine/core';

${r}

function Demo() {
  const avatars = names.map((name) => (
    <Avatar key={name} name={name} color="initials" allowedInitialsColors={['blue', 'red']} />
  ));
  return <Group>{avatars}</Group>;
}
`,centered:!0};var g=(0,t.__exportAll)({allowedColors:()=>f,configurator:()=>d,gradient:()=>x,group:()=>m,groupTooltip:()=>v,initials:()=>y,link:()=>p,placeholders:()=>c,usage:()=>s});e.s(["AvatarDemos",0,g],621333)},473045,e=>{"use strict";var t=e.i(648863);let a=[{hour:"08:00",index:1,value:150},{hour:"10:00",index:1,value:180},{hour:"12:00",index:1,value:280},{hour:"14:00",index:1,value:120},{hour:"16:00",index:1,value:380},{hour:"18:00",index:1,value:400},{hour:"20:00",index:1,value:180},{hour:"22:00",index:1,value:100}],r=`
export const data = [
  { hour: '08:00', index: 1, value: 150 },
  { hour: '10:00', index: 1, value: 166 },
  { hour: '12:00', index: 1, value: 170 },
  { hour: '14:00', index: 1, value: 150 },
  { hour: '16:00', index: 1, value: 200 },
  { hour: '18:00', index: 1, value: 400 },
  { hour: '20:00', index: 1, value: 100 },
  { hour: '22:00', index: 1, value: 160 },
];
`;var n=e.i(391398),i=e.i(979298),o=e.i(232471),l=e.i(725695),s=e.i(883364),c=e.i(481178),u=e.i(275519),d=e.i(317477),p=e.i(951254),m=e.i(44091),h=e.i(391466),v=e.i(723451),x=e.i(313667),y=e.i(908277),f=e.i(694713),g=e.i(756902),b=e.i(976835),A=e.i(191788),j=e.i(775538),w=e.i(543372),C=e.i(83727),S=e.i(297974);function D(e){var t=(0,w.useAppDispatch)(),a=(0,A.useRef)(null);return(0,A.useLayoutEffect)(()=>{null===a.current?t((0,j.addZAxis)(e)):a.current!==e&&t((0,j.replaceZAxis)({prev:a.current,next:e})),a.current=e},[e,t]),(0,A.useLayoutEffect)(()=>()=>{a.current&&(t((0,j.removeZAxis)(a.current)),a.current=null)},[t]),null}var P={zAxisId:0,range:C.implicitZAxis.range,scale:C.implicitZAxis.scale,type:C.implicitZAxis.type};function T(e){var t=(0,S.resolveDefaultProps)(e,P);return A.createElement(D,{domain:t.domain,id:t.zAxisId,dataKey:t.dataKey,name:t.name,unit:t.unit,range:t.range,scale:t.scale,type:t.type,allowDuplicatedCategory:C.implicitZAxis.allowDuplicatedCategory,allowDataOverflow:C.implicitZAxis.allowDataOverflow,reversed:C.implicitZAxis.reversed,includeHidden:C.implicitZAxis.includeHidden})}function O({active:e,payload:t,getStyles:a,dataKey:r,valueFormatter:i}){if(e&&t&&t.length){let e=t[0]&&t[0].payload;return(0,n.jsx)("div",{...a("tooltip"),children:(0,n.jsxs)(l.Group,{justify:"space-between",children:[(0,n.jsx)(s.Text,{fz:"sm",children:e[r.x]}),(0,n.jsx)(s.Text,{fz:"sm",children:i?i(e[r.z]):e[r.z]})]})})}return null}T.displayName="ZAxis";let E={color:"blue.6",withTooltip:!0},I=(0,c.createVarsResolver)((e,{textColor:t,gridColor:a})=>({root:{"--chart-text-color":t?(0,d.getThemeColor)(t,e):void 0,"--chart-grid-color":a?(0,d.getThemeColor)(a,e):void 0}})),k=(0,u.factory)(e=>{var t;let a,r=(0,m.useProps)("BubbleChart",E,e),{classNames:l,className:s,style:c,styles:u,unstyled:A,vars:j,data:w,xAxisProps:C,yAxisProps:S,zAxisProps:D,tooltipProps:P,scatterProps:k,color:L,label:B,withTooltip:N,dataKey:R,range:_,valueFormatter:z,attributes:M,...K}=r,V=(0,p.useMantineTheme)(),G=(0,h.useStyles)({name:"BubbleChart",classes:i.default,props:r,className:s,style:c,classNames:l,styles:u,unstyled:A,attributes:M,vars:j,varsResolver:I});return(0,n.jsx)(o.Box,{...G("root"),...K,children:(0,n.jsx)(v.ResponsiveContainer,{children:(0,n.jsxs)(y.ScatterChart,{children:[(0,n.jsx)(g.XAxis,{type:"category",dataKey:R.x,interval:0,tick:{fontSize:12,fill:"currentColor"},tickLine:{transform:"translate(0, -6)",stroke:"currentColor"},stroke:"currentColor",...G("axis"),...C}),(0,n.jsx)(b.YAxis,{type:"number",dataKey:R.y,height:10,...B?void 0:{width:0},tick:!1,tickLine:!1,axisLine:!1,label:{value:B,position:"insideRight",fontSize:12,fill:"currentColor"},...G("axis"),...S}),(0,n.jsx)(T,{type:"number",dataKey:R.z,domain:(t=R.z,[Math.min(...a=w.map(e=>e[t])),Math.max(...a)]),range:_,...D}),N&&(0,n.jsx)(f.Tooltip,{animationDuration:100,isAnimationActive:!1,cursor:{stroke:"var(--chart-grid-color)",strokeWidth:1,strokeDasharray:"3 3"},content:e=>(0,n.jsx)(O,{dataKey:R,active:e.active,payload:e.payload,getStyles:G,valueFormatter:z}),...P}),(0,n.jsx)(x.Scatter,{data:w,fill:(0,d.getThemeColor)(L,V),isAnimationActive:!1,...k})]})})})});k.displayName="@mantine/charts/BubbleChart",k.classes=i.default,k.varsResolver=I;let L={type:"code",component:function(){return(0,n.jsx)(k,{h:60,data:a,range:[16,225],label:"Sales/hour",color:"lime.6",dataKey:{x:"hour",y:"index",z:"value"}})},code:[{code:`
import { BubbleChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BubbleChart
      h={60}
      data={data}
      range={[16, 225]}
      label="Sales/hour"
      color="lime.6"
      dataKey={{ x: 'hour', y: 'index', z: 'value' }}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},B={type:"configurator",component:function(e){return(0,n.jsx)(k,{h:60,data:a,range:[16,225],dataKey:{x:"hour",y:"index",z:"value"},...e})},code:[{code:`
import { BubbleChart } from '@mantine/charts';
import { data } from './data';


function Demo() {
  return (
    <BubbleChart
      h={60}
      data={data}
      range={[16, 225]}
      dataKey={{ x: 'hour', y: 'index', z: 'value' }}
      {{props}}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}],controls:[{type:"color",prop:"color",initialValue:"blue",libraryValue:null}]},N={type:"code",component:function(){return(0,n.jsx)(k,{h:60,data:a,range:[16,225],dataKey:{x:"hour",y:"index",z:"value"},withTooltip:!1})},code:[{code:`
import { BubbleChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BubbleChart
      h={60}
      data={data}
      range={[16, 225]}
      dataKey={{ x: 'hour', y: 'index', z: 'value' }}
      withTooltip={false}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},R={type:"code",component:function(){return(0,n.jsx)(k,{h:60,data:a,range:[16,225],label:"Sales/hour",color:"lime.6",className:"m_c74eb301",dataKey:{x:"hour",y:"index",z:"value"}})},code:[{code:`
import { BubbleChart } from '@mantine/charts';
import { data } from './data';
import classes from './Demo.module.css';

function Demo() {
  return (
    <BubbleChart
      h={60}
      data={data}
      range={[16, 225]}
      label="Sales/hour"
      color="lime.6"
      className={classes.root}
      dataKey={{ x: 'hour', y: 'index', z: 'value' }}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:`
.root {
  @mixin light {
    --chart-grid-color: alpha(var(--mantine-color-black), 0.15);
    --chart-text-color: var(--mantine-color-gray-7);
  }

  @mixin dark {
    --chart-grid-color: alpha(var(--mantine-color-white), 0.15);
    --chart-text-color: var(--mantine-color-dark-0);
  }
}`,language:"scss",fileName:"Demo.module.css"},{code:r,language:"tsx",fileName:"data.ts"}]},_={type:"code",component:function(){return(0,n.jsx)(k,{h:60,data:a,range:[16,225],label:"Sales/hour",color:"var(--scatter-color)",className:"m_5829bd25",dataKey:{x:"hour",y:"index",z:"value"}})},code:[{code:`
import { BubbleChart } from '@mantine/charts';
import { data } from './data';
import classes from './Demo.module.css';

function Demo() {
  return (
    <BubbleChart
      h={60}
      data={data}
      range={[16, 225]}
      label="Sales/hour"
      color="var(--scatter-color)"
      className={classes.root}
      dataKey={{ x: 'hour', y: 'index', z: 'value' }}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:`
.root {
  @mixin light {
    --scatter-color: var(--mantine-color-orange-8);
  }

  @mixin dark {
    --scatter-color: var(--mantine-color-lime-4);
  }
}`,language:"scss",fileName:"Demo.module.css"},{code:r,language:"tsx",fileName:"data.ts"}]},z={type:"code",component:function(){return(0,n.jsx)(k,{h:60,data:a,range:[16,225],label:"Sales/hour",color:"lime.6",dataKey:{x:"hour",y:"index",z:"value"},valueFormatter:e=>`${e.toFixed(2)} USD`})},code:[{code:`
import { BubbleChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BubbleChart
      h={60}
      data={data}
      range={[16, 225]}
      label="Sales/hour"
      color="lime.6"
      dataKey={{ x: 'hour', y: 'index', z: 'value' }}
      valueFormatter={(value) => \`\${value.toFixed(2)} USD\`}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]};var M=(0,t.__exportAll)({color:()=>B,colorSchemeColor:()=>_,gridColor:()=>R,noTooltip:()=>N,usage:()=>L,valueFormatter:()=>z});e.s(["BubbleChartDemos",0,M],473045)},165419,e=>{"use strict";var t=e.i(391398),a=e.i(38856),r=e.i(621333),n=e.i(113997),i=e.i(473045),o=e.i(588741),l=e.i(739317),s=e.i(462419),c=e.i(811527);e.i(603441);var u=e.i(62558);e.i(457450);var d=e.i(418026);let p=(0,u.Layout)(d.MDX_DATA.Changelog7110);function m(e){let u={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.useMDXComponents)(),...e.components},{Demo:d}=u;return d||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u.h2,{id:"withprops-function",children:"withProps function"}),"\n",(0,t.jsxs)(u.p,{children:["All Mantine components now have ",(0,t.jsx)(u.code,{children:"withProps"})," static function that can be used to\nadd default props to the component:"]}),"\n",(0,t.jsx)(u.pre,{children:(0,t.jsx)(u.code,{className:"language-tsx",children:"import { IMaskInput } from 'react-imask';\nimport { Button, InputBase } from '@mantine/core';\n\nconst LinkButton = Button.withProps({\n  component: 'a',\n  target: '_blank',\n  rel: 'noreferrer',\n  variant: 'subtle',\n});\n\nconst PhoneInput = InputBase.withProps({\n  mask: '+7 (000) 000-0000',\n  component: IMaskInput,\n  label: 'Your phone number',\n  placeholder: 'Your phone number',\n});\n\nfunction Demo() {\n  return (\n    <>\n      {/* You can pass additional props to components created with `withProps` */}\n      <LinkButton href=\"https://mantine.dev\">\n        Mantine website\n      </LinkButton>\n\n      {/* Component props override default props defined in `withProps` */}\n      <PhoneInput placeholder=\"Personal phone\" />\n    </>\n  );\n}\n"})}),"\n",(0,t.jsx)(u.h2,{id:"avatar-initials",children:"Avatar initials"}),"\n",(0,t.jsxs)(u.p,{children:[(0,t.jsx)(u.a,{href:"/core/avatar",children:"Avatar"})," component now supports displaying initials with auto generated color based on the given ",(0,t.jsx)(u.code,{children:"name"})," value.\nTo display initials instead of the default placeholder, set ",(0,t.jsx)(u.code,{children:"name"})," prop\nto the name of the person, for example, ",(0,t.jsx)(u.code,{children:'name="John Doe"'}),". If the name\nis set, you can use ",(0,t.jsx)(u.code,{children:'color="initials"'})," to generate color based on the name:"]}),"\n",(0,t.jsx)(d,{data:r.AvatarDemos.initials}),"\n",(0,t.jsx)(u.h2,{id:"bubblechart-component",children:"BubbleChart component"}),"\n",(0,t.jsxs)(u.p,{children:["New ",(0,t.jsx)(u.a,{href:"/charts/bubble-chart",children:"BubbleChart"})," component:"]}),"\n",(0,t.jsx)(d,{data:i.BubbleChartDemos.usage}),"\n",(0,t.jsx)(u.h2,{id:"barchart-waterfall-type",children:"BarChart waterfall type"}),"\n",(0,t.jsxs)(u.p,{children:[(0,t.jsx)(u.a,{href:"/charts/bar-chart",children:"BarChart"})," component now supports ",(0,t.jsx)(u.code,{children:"waterfall"})," type\nwhich is useful for visualizing changes in values over time:"]}),"\n",(0,t.jsx)(d,{data:n.BarChartDemos.waterfall}),"\n",(0,t.jsx)(u.h2,{id:"linechart-gradient-type",children:"LineChart gradient type"}),"\n",(0,t.jsxs)(u.p,{children:[(0,t.jsx)(u.a,{href:"/charts/line-chart",children:"LineChart"})," component now supports ",(0,t.jsx)(u.code,{children:"gradient"})," type\nwhich renders line chart with gradient fill:"]}),"\n",(0,t.jsx)(d,{data:o.LineChartDemos.gradient}),"\n",(0,t.jsx)(u.h2,{id:"right-y-axis",children:"Right Y axis"}),"\n",(0,t.jsxs)(u.p,{children:[(0,t.jsx)(u.a,{href:"/charts/line-chart",children:"LineChart"}),", ",(0,t.jsx)(u.a,{href:"/charts/bar-chart",children:"BarChart"})," and ",(0,t.jsx)(u.a,{href:"/charts/area-chart",children:"AreaChart"})," components\nnow support ",(0,t.jsx)(u.code,{children:"rightYAxis"})," prop which renders additional Y axis on the right side of the chart:"]}),"\n",(0,t.jsx)(d,{data:o.LineChartDemos.rightYAxis}),"\n",(0,t.jsx)(u.h2,{id:"radarchart-legend",children:"RadarChart legend"}),"\n",(0,t.jsxs)(u.p,{children:[(0,t.jsx)(u.a,{href:"/charts/radar-chart",children:"RadarChart"})," component now supports legend:"]}),"\n",(0,t.jsx)(d,{data:l.RadarChartDemos.legend}),"\n",(0,t.jsx)(u.h2,{id:"tagsinput-acceptvalueonblur",children:"TagsInput acceptValueOnBlur"}),"\n",(0,t.jsxs)(u.p,{children:[(0,t.jsx)(u.a,{href:"/core/tags-input",children:"TagsInput"})," component behavior has been changed. Now By default,\nif the user types in a value and blurs the input, the value is added to the list.\nYou can change this behavior by setting ",(0,t.jsx)(u.code,{children:"acceptValueOnBlur"})," to ",(0,t.jsx)(u.code,{children:"false"}),". In this case, the value is added\nonly when the user presses ",(0,t.jsx)(u.code,{children:"Enter"})," or clicks on a suggestion."]}),"\n",(0,t.jsx)(d,{data:s.TagsInputDemos.acceptValueOnBlur}),"\n",(0,t.jsx)(u.h2,{id:"transition-delay",children:"Transition delay"}),"\n",(0,t.jsxs)(u.p,{children:[(0,t.jsx)(u.a,{href:"/core/transition",children:"Transition"})," component now supports ",(0,t.jsx)(u.code,{children:"enterDelay"})," and ",(0,t.jsx)(u.code,{children:"exitDelay"})," props to delay transition start:"]}),"\n",(0,t.jsx)(d,{data:c.TransitionDemos.delay}),"\n",(0,t.jsx)(u.h2,{id:"documentation-updates",children:"Documentation updates"}),"\n",(0,t.jsxs)(u.ul,{children:["\n",(0,t.jsxs)(u.li,{children:["New ",(0,t.jsx)(u.a,{href:"/core/progress/#example-progress-with-segments",children:"segmented progress"})," example has been added to ",(0,t.jsx)(u.code,{children:"Progress"})," component documentation"]}),"\n",(0,t.jsxs)(u.li,{children:[(0,t.jsx)(u.a,{href:"/core/select",children:"Select"}),", ",(0,t.jsx)(u.a,{href:"/core/tags-input",children:"TagsInput"})," and ",(0,t.jsx)(u.a,{href:"/core/multi-select",children:"MultiSelect"})," components documentation now includes additional demo on how to change the dropdown width"]}),"\n",(0,t.jsxs)(u.li,{children:["New ",(0,t.jsx)(u.a,{href:"/dates/date-picker/#exclude-dates",children:"DatePicker"})," example for ",(0,t.jsx)(u.code,{children:"excludeDate"})," prop"]}),"\n"]}),"\n",(0,t.jsx)(u.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,t.jsxs)(u.ul,{children:["\n",(0,t.jsxs)(u.li,{children:[(0,t.jsx)(u.a,{href:"/core/pagination",children:"Pagination"})," component now supports ",(0,t.jsx)(u.code,{children:"hideWithOnePage"})," prop which hides pagination when there is only one page"]}),"\n",(0,t.jsxs)(u.li,{children:[(0,t.jsx)(u.a,{href:"/core/spoiler",children:"Spoiler"})," component now supports controlled expanded state with ",(0,t.jsx)(u.code,{children:"expanded"})," and ",(0,t.jsx)(u.code,{children:"onExpandedChange"})," props"]}),"\n",(0,t.jsxs)(u.li,{children:[(0,t.jsx)(u.a,{href:"/core/burger",children:"Burger"})," component now supports ",(0,t.jsx)(u.code,{children:"lineSize"})," prop to change lines height"]}),"\n",(0,t.jsxs)(u.li,{children:[(0,t.jsx)(u.a,{href:"/dates/calendar",children:"Calendar"}),", ",(0,t.jsx)(u.a,{href:"/dates/date-picker",children:"DatePicker"})," and other similar components now support ",(0,t.jsx)(u.code,{children:"highlightToday"})," prop to highlight today's date"]}),"\n"]})]})}e.s(["default",0,function(e={}){return(0,t.jsx)(p,{...e,children:(0,t.jsx)(m,{...e})})}])},599296,(e,t,a)=>{let r="/changelog/7-11-0";(window.__NEXT_P=window.__NEXT_P||[]).push([r,()=>e.r(165419)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([r])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);