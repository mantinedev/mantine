"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[59750],{82067:function(e,t,r){r.d(t,{q:function(){return y}});var n=r(52322),l=r(2784),o=r(91482),a=r(11200),i=r(38483),s=r(46690),u=r(28559),d=r(33502),c=r(82027);let p=(0,l.createContext)(null),v=p.Provider;var h={group:"m_11def92b",root:"m_f85678b6",image:"m_11f8ac07",placeholder:"m_104cd71f"};let f={},m=(0,a.Z)((e,{spacing:t})=>({group:{"--ag-spacing":(0,o.bG)(t)}})),g=(0,c.d5)((e,t)=>{let r=(0,i.w)("AvatarGroup",f,e),{classNames:l,className:o,style:a,styles:d,unstyled:c,vars:p,spacing:g,...x}=r,C=(0,s.y)({name:"AvatarGroup",classes:h,props:r,className:o,style:a,classNames:l,styles:d,unstyled:c,vars:p,varsResolver:m,rootSelector:"group"});return(0,n.jsx)(v,{value:!0,children:(0,n.jsx)(u.x,{ref:t,...C("group"),...x})})});function x(e){return(0,n.jsx)("svg",{...e,"data-avatar-placeholder-icon":!0,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}g.classes=h,g.displayName="@mantine/core/AvatarGroup";let C=["blue","cyan","grape","green","indigo","lime","orange","pink","red","teal","violet"],w={},b=(0,a.Z)((e,{size:t,radius:r,variant:n,gradient:l,color:a,autoContrast:i,name:s,allowedInitialsColors:u})=>{let d="initials"===a&&"string"==typeof s?function(e,t=C){let r=Math.abs(function(e){let t=0;for(let r=0;r<e.length;r+=1)t=(t<<5)-t+e.charCodeAt(r)|0;return t}(e))%t.length;return t[r]}(s,u):a,c=e.variantColorResolver({color:d||"gray",theme:e,gradient:l,variant:n||"light",autoContrast:i});return{root:{"--avatar-size":(0,o.ap)(t,"avatar-size"),"--avatar-radius":void 0===r?void 0:(0,o.H5)(r),"--avatar-bg":d||n?c.background:void 0,"--avatar-color":d||n?c.color:void 0,"--avatar-bd":d||n?c.border:void 0}}}),y=(0,d.b)((e,t)=>{let r=(0,i.w)("Avatar",w,e),{classNames:o,className:a,style:d,styles:c,unstyled:v,vars:f,src:m,alt:g,radius:C,color:y,gradient:j,imageProps:D,children:_,autoContrast:P,mod:S,name:k,allowedInitialsColors:M,...E}=r,N={withinGroup:!!(0,l.useContext)(p)},[O,I]=(0,l.useState)(!m),A=(0,s.y)({name:"Avatar",props:r,classes:h,className:a,style:d,classNames:o,styles:c,unstyled:v,vars:f,varsResolver:b});return(0,l.useEffect)(()=>I(!m),[m]),(0,n.jsx)(u.x,{...A("root"),mod:[{"within-group":N.withinGroup},S],ref:t,...E,children:O?(0,n.jsx)("span",{...A("placeholder"),title:g,children:_||"string"==typeof k&&function(e,t=2){let r=e.split(" ");return 1===r.length?e.slice(0,t).toUpperCase():r.map(e=>e[0]).slice(0,t).join("").toUpperCase()}(k)||(0,n.jsx)(x,{})}):(0,n.jsx)("img",{...D,...A("image"),src:m,alt:g,onError:e=>{I(!0),D?.onError?.(e)}})})});y.classes=h,y.displayName="@mantine/core/Avatar",y.Group=g},66958:function(e,t,r){r.d(t,{r:function(){return c}});var n=r(52322),l=r(40489),o=r(40284),a=r(20135),i=r(61324),s=r(36186),u=r(61271);function d({data:e,withCheckIcon:t,value:r,checkIconPosition:a,unstyled:c,renderOption:p}){if(!(0,s.f)(e)){var v;let s=(v=e.value,Array.isArray(r)?r.includes(v):r===v),d=t&&s&&(0,n.jsx)(o.n,{className:u.Z.optionsDropdownCheckIcon}),h=(0,n.jsxs)(n.Fragment,{children:["left"===a&&d,(0,n.jsx)("span",{children:e.label}),"right"===a&&d]});return(0,n.jsx)(i.h.Option,{value:e.value,disabled:e.disabled,className:(0,l.Z)({[u.Z.optionsDropdownOption]:!c}),"data-reverse":"right"===a||void 0,"data-checked":s||void 0,"aria-selected":s,active:s,children:"function"==typeof p?p({option:e,checked:s}):h})}let h=e.items.map(e=>(0,n.jsx)(d,{data:e,value:r,unstyled:c,withCheckIcon:t,checkIconPosition:a,renderOption:p},e.value));return(0,n.jsx)(i.h.Group,{label:e.group,children:h})}function c({data:e,hidden:t,hiddenWhenEmpty:r,filter:l,search:o,limit:u,maxDropdownHeight:c,withScrollArea:p=!0,filterOptions:v=!0,withCheckIcon:h=!1,value:f,checkIconPosition:m,nothingFoundMessage:g,unstyled:x,labelId:C,renderOption:w,scrollAreaProps:b,"aria-label":y}){!function e(t,r=new Set){if(Array.isArray(t))for(let n of t)if((0,s.f)(n))e(n.items,r);else{if(void 0===n.value)throw Error("[@mantine/core] Each option must have value property");if("string"!=typeof n.value)throw Error(`[@mantine/core] Option value must be a string, other data formats are not supported, got ${typeof n.value}`);if(r.has(n.value))throw Error(`[@mantine/core] Duplicate options are not supported. Option with value "${n.value}" was provided more than once`);r.add(n.value)}}(e);let j="string"==typeof o?(l||function e({options:t,search:r,limit:n}){let l=r.trim().toLowerCase(),o=[];for(let a=0;a<t.length;a+=1){let i=t[a];if(o.length===n)break;(0,s.f)(i)&&o.push({group:i.group,items:e({options:i.items,search:r,limit:n-o.length})}),!(0,s.f)(i)&&i.label.toLowerCase().includes(l)&&o.push(i)}return o})({options:e,search:v?o:"",limit:u??1/0}):e,D=function(e){if(0===e.length)return!0;for(let t of e)if(!("group"in t)||t.items.length>0)return!1;return!0}(j),_=j.map(e=>(0,n.jsx)(d,{data:e,withCheckIcon:h,value:f,checkIconPosition:m,unstyled:x,renderOption:w},(0,s.f)(e)?e.group:e.value));return(0,n.jsx)(i.h.Dropdown,{hidden:t||r&&D,children:(0,n.jsxs)(i.h.Options,{labelledBy:C,"aria-label":y,children:[p?(0,n.jsx)(a.x.Autosize,{mah:c??220,type:"scroll",scrollbarSize:"var(--combobox-padding)",offsetScrollbars:"y",...b,children:_}):_,D&&g&&(0,n.jsx)(i.h.Empty,{children:g})]})})}},36186:function(e,t,r){r.d(t,{f:function(){return n}});function n(e){return"group"in e}},77606:function(e,t,r){r.d(t,{g:function(){return function e(t){return t.reduce((t,r)=>"group"in r?{...t,...e(r.items)}:(t[r.value]=r,t),{})}}})},8511:function(e,t,r){r.d(t,{N:function(){return y}});var n=r(52322),l=r(2784),o=r(66178),a=r(9341),i=r(51477),s=r(46690),u=r(38483),d=r(97072),c=r(82027),p=r(29995),v=r(77606),h=r(61324),f=r(66958),m=r(56237),g=r(73063),x=r(45855),C=r(92258),w=r(36186);let b={maxValues:1/0,withCheckIcon:!0,checkIconPosition:"left",hiddenInputValuesDivider:","},y=(0,c.d5)((e,t)=>{let r=(0,u.w)("MultiSelect",b,e),{classNames:c,className:g,style:y,styles:j,unstyled:D,vars:_,size:P,value:S,defaultValue:k,onChange:M,onKeyDown:E,variant:N,data:O,dropdownOpened:I,defaultDropdownOpened:A,onDropdownOpen:z,onDropdownClose:G,selectFirstOptionOnChange:Z,onOptionSubmit:F,comboboxProps:R,filter:B,limit:V,withScrollArea:L,maxDropdownHeight:H,searchValue:$,defaultSearchValue:T,onSearchChange:K,readOnly:U,disabled:q,onFocus:W,onBlur:Y,onPaste:J,radius:Q,rightSection:X,rightSectionWidth:ee,rightSectionPointerEvents:et,rightSectionProps:er,leftSection:en,leftSectionWidth:el,leftSectionPointerEvents:eo,leftSectionProps:ea,inputContainer:ei,inputWrapperOrder:es,withAsterisk:eu,labelProps:ed,descriptionProps:ec,errorProps:ep,wrapperProps:ev,description:eh,label:ef,error:em,maxValues:eg,searchable:ex,nothingFoundMessage:eC,withCheckIcon:ew,checkIconPosition:eb,hidePickedOptions:ey,withErrorStyles:ej,name:eD,form:e_,id:eP,clearable:eS,clearButtonProps:ek,hiddenInputProps:eM,placeholder:eE,hiddenInputValuesDivider:eN,required:eO,mod:eI,renderOption:eA,onRemove:ez,onClear:eG,scrollAreaProps:eZ,...eF}=r,eR=(0,o.M)(eP),eB=(0,p.R)(O),eV=(0,v.g)(eB),eL=(0,m.K)({opened:I,defaultOpened:A,onDropdownOpen:z,onDropdownClose:()=>{G?.(),eL.resetSelectedOption()}}),{styleProps:eH,rest:{type:e$,autoComplete:eT,...eK}}=(0,d.c)(eF),[eU,eq]=(0,a.C)({value:S,defaultValue:k,finalValue:[],onChange:M}),[eW,eY]=(0,a.C)({value:$,defaultValue:T,finalValue:"",onChange:K}),eJ=(0,s.y)({name:"MultiSelect",classes:{},props:r,classNames:c,styles:j,unstyled:D}),{resolvedClassNames:eQ,resolvedStyles:eX}=(0,i.h)({props:r,styles:j,classNames:c}),e0=eU.map((e,t)=>(0,n.jsx)(x.D,{withRemoveButton:!U&&!eV[e]?.disabled,onRemove:()=>{eq(eU.filter(t=>e!==t)),ez?.(e)},unstyled:D,disabled:q,...eJ("pill"),children:eV[e]?.label||e},`${e}-${t}`));(0,l.useEffect)(()=>{Z&&eL.selectFirstOption()},[Z,eU]);let e7=eS&&eU.length>0&&!q&&!U&&(0,n.jsx)(h.h.ClearButton,{size:P,...ek,onClear:()=>{eG?.(),eq([]),eY("")}}),e9=function({data:e,value:t}){let r=t.map(e=>e.trim().toLowerCase());return e.reduce((e,t)=>((0,w.f)(t)?e.push({group:t.group,items:t.items.filter(e=>-1===r.indexOf(e.value.toLowerCase().trim()))}):-1===r.indexOf(t.value.toLowerCase().trim())&&e.push(t),e),[])}({data:eB,value:eU});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(h.h,{store:eL,classNames:eQ,styles:eX,unstyled:D,size:P,readOnly:U,__staticSelector:"MultiSelect",onOptionSubmit:e=>{F?.(e),eY(""),eL.updateSelectedOptionIndex("selected"),eU.includes(eV[e].value)?(eq(eU.filter(t=>t!==eV[e].value)),ez?.(eV[e].value)):eU.length<eg&&eq([...eU,eV[e].value])},...R,children:[(0,n.jsx)(h.h.DropdownTarget,{children:(0,n.jsx)(C.d,{...eH,__staticSelector:"MultiSelect",classNames:eQ,styles:eX,unstyled:D,size:P,className:g,style:y,variant:N,disabled:q,radius:Q,rightSection:X||e7||(0,n.jsx)(h.h.Chevron,{size:P,error:em,unstyled:D}),rightSectionPointerEvents:et||(e7?"all":"none"),rightSectionWidth:ee,rightSectionProps:er,leftSection:en,leftSectionWidth:el,leftSectionPointerEvents:eo,leftSectionProps:ea,inputContainer:ei,inputWrapperOrder:es,withAsterisk:eu,labelProps:ed,descriptionProps:ec,errorProps:ep,wrapperProps:ev,description:eh,label:ef,error:em,multiline:!0,withErrorStyles:ej,__stylesApiProps:{...r,rightSectionPointerEvents:et||(e7?"all":"none"),multiline:!0},pointer:!ex,onClick:()=>ex?eL.openDropdown():eL.toggleDropdown(),"data-expanded":eL.dropdownOpened||void 0,id:eR,required:eO,mod:eI,children:(0,n.jsxs)(x.D.Group,{disabled:q,unstyled:D,...eJ("pillsList"),children:[e0,(0,n.jsx)(h.h.EventsTarget,{autoComplete:eT,children:(0,n.jsx)(C.d.Field,{...eK,ref:t,id:eR,placeholder:eE,type:ex||eE?"visible":"hidden",...eJ("inputField"),unstyled:D,onFocus:e=>{W?.(e),ex&&eL.openDropdown()},onBlur:e=>{Y?.(e),eL.closeDropdown(),eY("")},onKeyDown:e=>{E?.(e)," "!==e.key||ex||(e.preventDefault(),eL.toggleDropdown()),"Backspace"===e.key&&0===eW.length&&eU.length>0&&(ez?.(eU[eU.length-1]),eq(eU.slice(0,eU.length-1)))},value:eW,onChange:e=>{eY(e.currentTarget.value),ex&&eL.openDropdown(),Z&&eL.selectFirstOption()},disabled:q,readOnly:U||!ex,pointer:!ex})})]})})}),(0,n.jsx)(f.r,{data:ey?e9:eB,hidden:U||q,filter:B,search:eW,limit:V,hiddenWhenEmpty:!eC,withScrollArea:L,maxDropdownHeight:H,filterOptions:ex,value:eU,checkIconPosition:eb,withCheckIcon:ew,nothingFoundMessage:eC,unstyled:D,labelId:ef?`${eR}-label`:void 0,"aria-label":ef?void 0:eF["aria-label"],renderOption:eA,scrollAreaProps:eZ})]}),(0,n.jsx)(h.h.HiddenInput,{name:eD,valuesDivider:eN,value:eU,form:e_,disabled:q,...eM})]})});y.classes={...g.M.classes,...h.h.classes},y.displayName="@mantine/core/MultiSelect"},45855:function(e,t,r){r.d(t,{D:function(){return w}});var n=r(52322);r(2784);var l=r(91482),o=r(11200),a=r(38483),i=r(46690),s=r(28559),u=r(82027),d=r(2670),c=r(7450);let[p,v]=(0,r(75336).V)();var h={root:"m_7cda1cd6","root--default":"m_44da308b","root--contrast":"m_e3a01f8",label:"m_1e0e6180",remove:"m_ae386778",group:"m_1dcfd90b"};let f={},m=(0,o.Z)((e,{gap:t},{size:r})=>({group:{"--pg-gap":void 0!==t?(0,l.ap)(t):(0,l.ap)(r,"pg-gap")}})),g=(0,u.d5)((e,t)=>{let r=(0,a.w)("PillGroup",f,e),{classNames:l,className:o,style:u,styles:d,unstyled:v,vars:g,size:x,disabled:C,...w}=r,b=(0,c.D)(),y=b?.size||x||void 0,j=(0,i.y)({name:"PillGroup",classes:h,props:r,className:o,style:u,classNames:l,styles:d,unstyled:v,vars:g,varsResolver:m,stylesCtx:{size:y},rootSelector:"group"});return(0,n.jsx)(p,{value:{size:y,disabled:C},children:(0,n.jsx)(s.x,{ref:t,size:y,...j("group"),...w})})});g.classes=h,g.displayName="@mantine/core/PillGroup";let x={variant:"default"},C=(0,o.Z)((e,{radius:t},{size:r})=>({root:{"--pill-fz":(0,l.ap)(r,"pill-fz"),"--pill-height":(0,l.ap)(r,"pill-height"),"--pill-radius":void 0===t?void 0:(0,l.H5)(t)}})),w=(0,u.d5)((e,t)=>{let r=(0,a.w)("Pill",x,e),{classNames:l,className:o,style:u,styles:p,unstyled:f,vars:m,variant:g,children:w,withRemoveButton:b,onRemove:y,removeButtonProps:j,radius:D,size:_,disabled:P,mod:S,...k}=r,M=v(),E=(0,c.D)(),N=_||M?.size||void 0,O=E?.variant==="filled"?"contrast":g||"default",I=(0,i.y)({name:"Pill",classes:h,props:r,className:o,style:u,classNames:l,styles:p,unstyled:f,vars:m,varsResolver:C,stylesCtx:{size:N}});return(0,n.jsxs)(s.x,{component:"span",ref:t,variant:O,size:N,...I("root",{variant:O}),mod:[{"with-remove":b&&!P,disabled:P||M?.disabled},S],...k,children:[(0,n.jsx)("span",{...I("label"),children:w}),b&&(0,n.jsx)(d.P,{variant:"transparent",radius:D,tabIndex:-1,"aria-hidden":!0,unstyled:f,...j,...I("remove",{className:j?.className,style:j?.style}),onMouseDown:e=>{e.preventDefault(),e.stopPropagation(),j?.onMouseDown?.(e)},onClick:e=>{e.stopPropagation(),y?.(),j?.onClick?.(e)}})]})});w.classes=h,w.displayName="@mantine/core/Pill",w.Group=g},7450:function(e,t,r){r.d(t,{D:function(){return l},H:function(){return n}}),r(2784),r(52322);let[n,l]=(0,r(75336).V)()},92258:function(e,t,r){r.d(t,{d:function(){return g}});var n=r(52322),l=r(2784),o=r(38483),a=r(82027),i=r(73063),s=r(7450),u=r(70837),d=r(46690),c=r(28559),p=r(69349),v={field:"m_45c4369d"};let h={type:"visible"},f=(0,a.d5)((e,t)=>{let r=(0,o.w)("PillsInputField",h,e),{classNames:l,className:a,style:i,styles:f,unstyled:m,vars:g,type:x,disabled:C,id:w,pointer:b,mod:y,...j}=r,D=(0,s.D)(),_=(0,p.D)(),P=(0,d.y)({name:"PillsInputField",classes:v,props:r,className:a,style:i,classNames:l,styles:f,unstyled:m,rootSelector:"field"}),S=C||D?.disabled;return(0,n.jsx)(c.x,{component:"input",ref:(0,u.Yx)(t,D?.fieldRef),"data-type":x,disabled:S,mod:[{disabled:S,pointer:b},y],...P("field"),...j,id:_?.inputId||w,"aria-invalid":D?.hasError,"aria-describedby":_?.describedBy,type:"text",onMouseDown:e=>!b&&e.stopPropagation()})});f.classes=v,f.displayName="@mantine/core/PillsInputField";let m={},g=(0,a.d5)((e,t)=>{let{children:r,onMouseDown:a,onClick:u,size:d,disabled:c,__staticSelector:p,error:v,variant:h,...f}=(0,o.w)("PillsInput",m,e),g=(0,l.useRef)(null);return(0,n.jsx)(s.H,{value:{fieldRef:g,size:d,disabled:c,hasError:!!v,variant:h},children:(0,n.jsx)(i.M,{size:d,error:v,variant:h,component:"div",ref:t,onMouseDown:e=>{e.preventDefault(),a?.(e),g.current?.focus()},onClick:e=>{e.preventDefault(),u?.(e),g.current?.focus()},...f,multiline:!0,disabled:c,__staticSelector:p||"PillsInput",withAria:!1,children:r})})});g.displayName="@mantine/core/PillsInput",g.Field=f}}]);