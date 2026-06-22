(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,r)=>{let n={};for(var o in e)t(n,o,{get:e[o],enumerable:!0});return r||t(n,Symbol.toStringTag,{value:"Module"}),n}])},541772,e=>{"use strict";var t=e.i(191788);e.s(["useDisclosure",0,function(e=!1,r={}){let[n,o]=(0,t.useState)(e),a=(0,t.useCallback)(()=>{o(e=>e||(r.onOpen?.(),!0))},[r.onOpen]),s=(0,t.useCallback)(()=>{o(e=>e?(r.onClose?.(),!1):e)},[r.onClose]);return[n,{open:a,close:s,toggle:(0,t.useCallback)(()=>{n?s():a()},[s,a,n]),set:o}]}])},960831,e=>{"use strict";e.s(["inputControls",0,[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"md",libraryValue:"md"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}],"inputOnlyControls",0,[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"md",libraryValue:"md"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],"inputWrapperOnlyControls",0,[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}]])},937389,e=>{"use strict";var t=e.i(433512),r=e.i(481178),n=e.i(44091),o=e.i(62904),a=e.i(391466),s=e.i(425254),i=e.i(275519),l=e.i(658109),c=e.i(294788),d=e.i(586488),p=e.i(391398),u={root:"m_f61ca620",input:"m_ccf8da4c",innerInput:"m_f2d85dd2",visibilityToggle:"m_b1072d44"},m=e.i(107315),h=e.i(579560),g=e.i(56206);let b={visibilityToggleIcon:function({reveal:e}){return(0,p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",style:{width:"var(--psi-icon-size)",height:"var(--psi-icon-size)"},children:e?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("path",{fill:"none",d:"M0 0h256v256H0z"}),(0,p.jsx)("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16",d:"M48 40l160 176M154.91 157.6a40 40 0 01-53.82-59.2M135.53 88.71a40 40 0 0132.3 35.53"}),(0,p.jsx)("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16",d:"M208.61 169.1C230.41 149.58 240 128 240 128s-32-72-112-72a126 126 0 00-20.68 1.68M74 68.6C33.23 89.24 16 128 16 128s32 72 112 72a118.05 118.05 0 0054-12.6"})]}):(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("path",{fill:"none",d:"M0 0h256v256H0z"}),(0,p.jsx)("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16",d:"M128 56c-80 0-112 72-112 72s32 72 112 72 112-72 112-72-32-72-112-72z"}),(0,p.jsx)("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})})},size:"sm"},x=(0,r.createVarsResolver)((e,{size:r})=>({root:{"--psi-icon-size":(0,t.getSize)(r,"psi-icon-size"),"--psi-button-size":(0,t.getSize)(r,"psi-button-size")}})),y=(0,i.factory)(e=>{let t=(0,n.useProps)(["Input","InputWrapper","PasswordInput"],b,e),{classNames:r,className:i,style:d,styles:y,unstyled:v,vars:f,required:w,error:I,success:P,leftSection:j,disabled:A,id:V,variant:C,inputContainer:Z,description:E,label:M,size:S,errorProps:L,successProps:k,descriptionProps:z,labelProps:D,withAsterisk:T,inputWrapperOrder:H,wrapperProps:F,radius:_,rightSection:W,rightSectionWidth:R,rightSectionPointerEvents:B,leftSectionWidth:N,visible:q,defaultVisible:O,onVisibilityChange:$,visibilityToggleIcon:X,visibilityToggleButtonProps:Y,rightSectionProps:U,leftSectionProps:K,leftSectionPointerEvents:G,withErrorStyles:J,withSuccessStyles:Q,mod:ee,attributes:et,dir:er,...en}=t,eo=(0,m.useId)(V),[ea,es]=(0,h.useUncontrolled)({value:q,defaultValue:O,finalValue:!1,onChange:$}),ei=(0,a.useStyles)({name:"PasswordInput",classes:u,props:t,className:i,style:d,classNames:r,styles:y,unstyled:v,attributes:et,vars:f,varsResolver:x}),{resolvedClassNames:el,resolvedStyles:ec}=(0,o.useResolvedStylesApi)({classNames:r,styles:y,props:t}),{styleProps:ed,rest:ep}=(0,s.extractStyleProps)(en),eu=L?.id||`${eo}-error`,em=k?.id||`${eo}-success`,eh=z?.id||`${eo}-description`,eg=!!I&&"boolean"!=typeof I,eb=`${eg?eu:""} ${P&&"boolean"!=typeof P&&!eg?em:""} ${E?eh:""}`,ex=eb.trim().length>0?eb.trim():void 0,ey=(0,p.jsx)(l.ActionIcon,{...ei("visibilityToggle"),disabled:A,radius:_,"aria-pressed":ea,tabIndex:-1,"aria-label":"Toggle password visibility",...Y,variant:Y?.variant??"subtle",color:"gray",unstyled:v,onTouchEnd:e=>{e.preventDefault(),Y?.onTouchEnd?.(e),es(!ea)},onMouseDown:e=>{e.preventDefault(),Y?.onMouseDown?.(e),es(!ea)},onKeyDown:e=>{Y?.onKeyDown?.(e)," "===e.key&&(e.preventDefault(),es(!ea))},children:(0,p.jsx)(X,{reveal:ea})});return(0,p.jsx)(c.Input.Wrapper,{required:w,id:eo,label:M,error:I,success:P,description:E,size:S,classNames:el,styles:ec,__staticSelector:"PasswordInput",__stylesApiProps:t,unstyled:v,withAsterisk:T,inputWrapperOrder:H,inputContainer:Z,variant:C,labelProps:{...D,htmlFor:eo},descriptionProps:{...z,id:eh},errorProps:{...L,id:eu},successProps:{...k,id:em},mod:ee,attributes:et,...ei("root"),...ed,...F,children:(0,p.jsx)(c.Input,{component:"div",dir:er,error:I,success:P,leftSection:j,size:S,classNames:{...el,input:(0,g.default)(u.input,el?.input)},styles:ec,radius:_,disabled:A,__staticSelector:"PasswordInput",__stylesApiProps:t,rightSectionWidth:R,rightSection:W??ey,variant:C,unstyled:v,leftSectionWidth:N,rightSectionPointerEvents:B||"all",rightSectionProps:U,leftSectionProps:K,leftSectionPointerEvents:G,withAria:!1,withErrorStyles:J,withSuccessStyles:Q,attributes:et,children:(0,p.jsx)("input",{required:w,"data-invalid":!!I||void 0,"data-with-left-section":!!j||void 0,...ei("innerInput"),disabled:A,id:eo,dir:er,...ep,"aria-describedby":ex,autoComplete:ep.autoComplete||"off",type:ea?"text":"password"})})})});y.classes={...d.InputBase.classes,...u},y.varsResolver=x,y.displayName="@mantine/core/PasswordInput",e.s(["PasswordInput",0,y],937389)},645640,e=>{"use strict";var t=e.i(191788),r=e.i(171481);let n=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208,76H180V56A52,52,0,0,0,76,56V76H48A20,20,0,0,0,28,96V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V96A20,20,0,0,0,208,76ZM100,56a28,28,0,0,1,56,0V76H100ZM204,204H52V100H204Zm-60-52a16,16,0,1,1-16-16A16,16,0,0,1,144,152Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,96V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H208A8,8,0,0,1,216,96Z",opacity:"0.2"}),t.createElement("path",{d:"M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Zm-68-56a12,12,0,1,1-12-12A12,12,0,0,1,140,152Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80Zm-80,84a12,12,0,1,1,12-12A12,12,0,0,1,128,164Zm32-84H96V56a32,32,0,0,1,64,0Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208,82H174V56a46,46,0,0,0-92,0V82H48A14,14,0,0,0,34,96V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V96A14,14,0,0,0,208,82ZM94,56a34,34,0,0,1,68,0V82H94ZM210,208a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V96a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2Zm-72-56a10,10,0,1,1-10-10A10,10,0,0,1,138,152Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Zm-68-56a12,12,0,1,1-12-12A12,12,0,0,1,140,152Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208,84H172V56a44,44,0,0,0-88,0V84H48A12,12,0,0,0,36,96V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V96A12,12,0,0,0,208,84ZM92,56a36,36,0,0,1,72,0V84H92ZM212,208a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V96a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4Zm-76-56a8,8,0,1,1-8-8A8,8,0,0,1,136,152Z"}))]]),o=t.forwardRef((e,o)=>t.createElement(r.default,{ref:o,...e,weights:n}));o.displayName="LockIcon",e.s(["LockIcon",0,o],645640)},869433,e=>{"use strict";var t=e.i(191788),r=e.i(171481);let n=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",opacity:"0.2"}),t.createElement("path",{d:"M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM181.66,170.34a8,8,0,0,1-11.32,11.32L128,139.31,85.66,181.66a8,8,0,0,1-11.32-11.32L116.69,128,74.34,85.66A8,8,0,0,1,85.66,74.34L128,116.69l42.34-42.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M204.24,195.76a6,6,0,1,1-8.48,8.48L128,136.49,60.24,204.24a6,6,0,0,1-8.48-8.48L119.51,128,51.76,60.24a6,6,0,0,1,8.48-8.48L128,119.51l67.76-67.75a6,6,0,0,1,8.48,8.48L136.49,128Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M202.83,197.17a4,4,0,0,1-5.66,5.66L128,133.66,58.83,202.83a4,4,0,0,1-5.66-5.66L122.34,128,53.17,58.83a4,4,0,0,1,5.66-5.66L128,122.34l69.17-69.17a4,4,0,1,1,5.66,5.66L133.66,128Z"}))]]),o=t.forwardRef((e,o)=>t.createElement(r.default,{ref:o,...e,weights:n}));o.displayName="XIcon",e.s(["XIcon",0,o],869433)},424035,e=>{"use strict";var t=e.i(44091),r=e.i(62904),n=e.i(275519),o={root:"m_db6d6462",section:"m_2242eb65","stripes-animation":"m_81a374bd","stripes-animation-vertical":"m_e0fb7a86",label:"m_91e40b74"},a=e.i(232471);let[s,i]=(0,e.i(386179).createSafeContext)("Progress.Root component was not found in tree");var l=e.i(391398);let c=(0,n.factory)(e=>{let{classNames:r,className:n,style:o,styles:s,vars:c,...d}=(0,t.useProps)("ProgressLabel",null,e);return(0,l.jsx)(a.Box,{...i().getStyles("label",{className:n,style:o,classNames:r,styles:s}),...d})});c.classes=o,c.displayName="@mantine/core/ProgressLabel";var d=e.i(433512),p=e.i(481178),u=e.i(391466);let m=(0,p.createVarsResolver)((e,{size:t,radius:r,transitionDuration:n})=>({root:{"--progress-size":(0,d.getSize)(t,"progress-size"),"--progress-radius":void 0===r?void 0:(0,d.getRadius)(r),"--progress-transition-duration":"number"==typeof n?`${n}ms`:void 0}})),h=(0,n.factory)(e=>{let r=(0,t.useProps)("ProgressRoot",null,e),{classNames:n,className:i,style:c,styles:d,unstyled:p,vars:h,autoContrast:g,transitionDuration:b,orientation:x,attributes:y,mod:v,...f}=r,w=(0,u.useStyles)({name:"Progress",classes:o,props:r,className:i,style:c,classNames:n,styles:d,unstyled:p,attributes:y,vars:h,varsResolver:m});return(0,l.jsx)(s,{value:{getStyles:w,autoContrast:g},children:(0,l.jsx)(a.Box,{mod:[{orientation:x},v],...w("root"),...f})})});h.classes=o,h.varsResolver=m,h.displayName="@mantine/core/ProgressRoot";var g=e.i(317477),b=e.i(700145),x=e.i(853487),y=e.i(951254);let v={withAria:!0},f=(0,n.factory)(e=>{let{classNames:r,className:n,style:o,styles:s,vars:c,value:d,withAria:p,color:u,striped:m,animated:h,mod:f,...w}=(0,t.useProps)("ProgressSection",v,e),I=i(),P=(0,y.useMantineTheme)(),j=p?{role:"progressbar","aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":d,"aria-valuetext":`${d}%`}:{};return(0,l.jsx)(a.Box,{...I.getStyles("section",{className:n,classNames:r,styles:s,style:o}),...w,...j,mod:[{striped:m||h,animated:h},f],__vars:{"--progress-section-size":`${d}%`,"--progress-section-color":(0,g.getThemeColor)(u,P),"--progress-label-color":(0,x.getAutoContrastValue)(I.autoContrast,P)?(0,b.getContrastColor)({color:u,theme:P,autoContrast:I.autoContrast}):void 0}})});f.classes=o,f.displayName="@mantine/core/ProgressSection";let w=(0,n.factory)(e=>{let n=(0,t.useProps)("Progress",null,e),{value:o,classNames:a,styles:s,vars:i,color:c,striped:d,animated:p,"aria-label":u,...m}=n,{resolvedClassNames:g,resolvedStyles:b}=(0,r.useResolvedStylesApi)({classNames:a,styles:s,props:n});return(0,l.jsx)(h,{classNames:g,styles:b,vars:i,...m,children:(0,l.jsx)(f,{value:o,color:c,striped:d,animated:p,"aria-label":u})})});w.classes=o,w.displayName="@mantine/core/Progress",w.Section=f,w.Root=h,w.Label=c,e.s(["Progress",0,w],424035)},604955,e=>{"use strict";var t=e.i(191788),r=e.i(171481);let n=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M251,123.13c-.37-.81-9.13-20.26-28.48-39.61C196.63,57.67,164,44,128,44S59.37,57.67,33.51,83.52C14.16,102.87,5.4,122.32,5,123.13a12.08,12.08,0,0,0,0,9.75c.37.82,9.13,20.26,28.49,39.61C59.37,198.34,92,212,128,212s68.63-13.66,94.48-39.51c19.36-19.35,28.12-38.79,28.49-39.61A12.08,12.08,0,0,0,251,123.13Zm-46.06,33C183.47,177.27,157.59,188,128,188s-55.47-10.73-76.91-31.88A130.36,130.36,0,0,1,29.52,128,130.45,130.45,0,0,1,51.09,99.89C72.54,78.73,98.41,68,128,68s55.46,10.73,76.91,31.89A130.36,130.36,0,0,1,226.48,128,130.45,130.45,0,0,1,204.91,156.12ZM128,84a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,84Zm0,64a20,20,0,1,1,20-20A20,20,0,0,1,128,148Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Zm0,112a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",opacity:"0.2"}),t.createElement("path",{d:"M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M245.48,125.57c-.34-.78-8.66-19.23-27.24-37.81C201,70.54,171.38,50,128,50S55,70.54,37.76,87.76c-18.58,18.58-26.9,37-27.24,37.81a6,6,0,0,0,0,4.88c.34.77,8.66,19.22,27.24,37.8C55,185.47,84.62,206,128,206s73-20.53,90.24-37.75c18.58-18.58,26.9-37,27.24-37.8A6,6,0,0,0,245.48,125.57ZM128,194c-31.38,0-58.78-11.42-81.45-33.93A134.77,134.77,0,0,1,22.69,128,134.56,134.56,0,0,1,46.55,95.94C69.22,73.42,96.62,62,128,62s58.78,11.42,81.45,33.94A134.56,134.56,0,0,1,233.31,128C226.94,140.21,195,194,128,194Zm0-112a46,46,0,1,0,46,46A46.06,46.06,0,0,0,128,82Zm0,80a34,34,0,1,1,34-34A34,34,0,0,1,128,162Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M243.66,126.38c-.34-.76-8.52-18.89-26.83-37.2C199.87,72.22,170.7,52,128,52S56.13,72.22,39.17,89.18c-18.31,18.31-26.49,36.44-26.83,37.2a4.08,4.08,0,0,0,0,3.25c.34.77,8.52,18.89,26.83,37.2,17,17,46.14,37.17,88.83,37.17s71.87-20.21,88.83-37.17c18.31-18.31,26.49-36.43,26.83-37.2A4.08,4.08,0,0,0,243.66,126.38Zm-32.7,35c-23.07,23-51,34.62-83,34.62s-59.89-11.65-83-34.62A135.71,135.71,0,0,1,20.44,128,135.69,135.69,0,0,1,45,94.62C68.11,71.65,96,60,128,60s59.89,11.65,83,34.62A135.79,135.79,0,0,1,235.56,128,135.71,135.71,0,0,1,211,161.38ZM128,84a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,84Zm0,80a36,36,0,1,1,36-36A36,36,0,0,1,128,164Z"}))]]),o=t.forwardRef((e,o)=>t.createElement(r.default,{ref:o,...e,weights:n}));o.displayName="EyeIcon",e.s(["EyeIcon",0,o],604955)},100863,e=>{"use strict";var t=e.i(391398),r=e.i(38856),n=e.i(648863),o=e.i(960831),a=e.i(937389);let s={type:"configurator",component:function(e){return(0,t.jsx)(a.PasswordInput,{...e,placeholder:"Input placeholder"})},code:`
import { PasswordInput } from '@mantine/core';


function Demo() {
  return (
    <PasswordInput
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
`,centered:!0,maxWidth:340,controls:o.inputControls};var i=e.i(191788),l=e.i(837048),c=e.i(869433),d=e.i(232471),p=e.i(392862),u=e.i(424035),m=e.i(883364);function h({meets:e,label:r}){return(0,t.jsxs)(m.Text,{c:e?"teal":"red",style:{display:"flex",alignItems:"center"},mt:7,size:"sm",children:[e?(0,t.jsx)(l.CheckIcon,{size:14}):(0,t.jsx)(c.XIcon,{size:14}),(0,t.jsx)(d.Box,{ml:10,children:r})]})}let g=[{re:/[0-9]/,label:"Includes number"},{re:/[a-z]/,label:"Includes lowercase letter"},{re:/[A-Z]/,label:"Includes uppercase letter"},{re:/[$&+,:;=?@#|'<>.^*()%!-]/,label:"Includes special symbol"}],b={type:"code",code:`
import { useState } from 'react';
import { XIcon, CheckIcon } from '@phosphor-icons/react';
import { PasswordInput, Progress, Text, Popover, Box } from '@mantine/core';

function PasswordRequirement({ meets, label }: { meets: boolean; label: string }) {
  return (
    <Text
      c={meets ? 'teal' : 'red'}
      style={{ display: 'flex', alignItems: 'center' }}
      mt={7}
      size="sm"
    >
      {meets ? <CheckIcon size={14} /> : <XIcon size={14} />}
      <Box ml={10}>{label}</Box>
    </Text>
  );
}

const requirements = [
  { re: /[0-9]/, label: 'Includes number' },
  { re: /[a-z]/, label: 'Includes lowercase letter' },
  { re: /[A-Z]/, label: 'Includes uppercase letter' },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: 'Includes special symbol' },
];

function getStrength(password: string) {
  let multiplier = password.length > 5 ? 0 : 1;

  requirements.forEach((requirement) => {
    if (!requirement.re.test(password)) {
      multiplier += 1;
    }
  });

  return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 10);
}

function Demo() {
  const [popoverOpened, setPopoverOpened] = useState(false);
  const [value, setValue] = useState('');
  const checks = requirements.map((requirement, index) => (
    <PasswordRequirement key={index} label={requirement.label} meets={requirement.re.test(value)} />
  ));

  const strength = getStrength(value);
  const color = strength === 100 ? 'teal' : strength > 50 ? 'yellow' : 'red';

  return (
    <Popover opened={popoverOpened} position="bottom" width="target" transitionProps={{ transition: 'pop' }}>
      <Popover.Target>
        <div
          onFocusCapture={() => setPopoverOpened(true)}
          onBlurCapture={() => setPopoverOpened(false)}
        >
          <PasswordInput
            withAsterisk
            label="Your password"
            placeholder="Your password"
            value={value}
            onChange={(event) => setValue(event.currentTarget.value)}
          />
        </div>
      </Popover.Target>
      <Popover.Dropdown>
        <Progress color={color} value={strength} size={5} mb="xs" />
        <PasswordRequirement label="Includes at least 6 characters" meets={value.length > 5} />
        {checks}
      </Popover.Dropdown>
    </Popover>
  );
}
`,component:function(){let e,[r,n]=(0,i.useState)(!1),[o,s]=(0,i.useState)(""),l=g.map((e,r)=>(0,t.jsx)(h,{label:e.label,meets:e.re.test(o)},r)),c=(e=o.length>5?0:1,g.forEach(t=>{t.re.test(o)||(e+=1)}),Math.max(100-100/(g.length+1)*e,10));return(0,t.jsxs)(p.Popover,{opened:r,position:"bottom",width:"target",transitionProps:{transition:"pop"},children:[(0,t.jsx)(p.Popover.Target,{children:(0,t.jsx)("div",{onFocusCapture:()=>n(!0),onBlurCapture:()=>n(!1),children:(0,t.jsx)(a.PasswordInput,{withAsterisk:!0,label:"Your password",placeholder:"Your password",value:o,onChange:e=>s(e.currentTarget.value)})})}),(0,t.jsxs)(p.Popover.Dropdown,{children:[(0,t.jsx)(u.Progress,{color:100===c?"teal":c>50?"yellow":"red",value:c,size:5,mb:"xs"}),(0,t.jsx)(h,{label:"Includes at least 6 characters",meets:o.length>5}),l]})]})},centered:!0,maxWidth:340},x={type:"code",component:function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.PasswordInput,{label:"Boolean error",placeholder:"Boolean error",error:!0}),(0,t.jsx)(a.PasswordInput,{mt:"md",label:"With error message",placeholder:"With error message",error:"Invalid name"})]})},maxWidth:340,centered:!0,code:`
import { PasswordInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <PasswordInput label="Boolean error" placeholder="Boolean error" error />
      <PasswordInput
        mt="md"
        label="With error message"
        placeholder="With error message"
        error="Invalid name"
      />
    </>
  );
}
`},y={type:"code",component:function(){return(0,t.jsx)(a.PasswordInput,{label:"Password Input",placeholder:"Password Input",success:"Looks good!"})},code:`
import { PasswordInput } from '@mantine/core';

function Demo() {
  return <PasswordInput label="Password Input" placeholder="Password Input" success="Looks good!" />;
}
`,maxWidth:340,centered:!0};var v=e.i(604955),f=e.i(171481);let w=new Map([["bold",i.createElement(i.Fragment,null,i.createElement("path",{d:"M56.88,31.93A12,12,0,1,0,39.12,48.07l16,17.65C20.67,88.66,5.72,121.58,5,123.13a12.08,12.08,0,0,0,0,9.75c.37.82,9.13,20.26,28.49,39.61C59.37,198.34,92,212,128,212a131.34,131.34,0,0,0,51-10l20.09,22.1a12,12,0,0,0,17.76-16.14ZM128,188c-29.59,0-55.47-10.73-76.91-31.88A130.69,130.69,0,0,1,29.52,128c5.27-9.31,18.79-29.9,42-44.29l90.09,99.11A109.33,109.33,0,0,1,128,188Zm123-55.12c-.36.81-9,20-28,39.16a12,12,0,1,1-17-16.9A130.48,130.48,0,0,0,226.48,128a130.36,130.36,0,0,0-21.57-28.12C183.46,78.73,157.59,68,128,68c-3.35,0-6.7.14-10,.42a12,12,0,1,1-2-23.91c3.93-.34,8-.51,12-.51,36,0,68.63,13.67,94.49,39.52,19.35,19.35,28.11,38.8,28.48,39.61A12.08,12.08,0,0,1,251,132.88Z"}))],["duotone",i.createElement(i.Fragment,null,i.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Zm0,112a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",opacity:"0.2"}),i.createElement("path",{d:"M53.92,34.62A8,8,0,1,0,42.08,45.38L61.32,66.55C25,88.84,9.38,123.2,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208a127.11,127.11,0,0,0,52.07-10.83l22,24.21a8,8,0,1,0,11.84-10.76Zm47.33,75.84,41.67,45.85a32,32,0,0,1-41.67-45.85ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.16,133.16,0,0,1,25,128c4.69-8.79,19.66-33.39,47.35-49.38l18,19.75a48,48,0,0,0,63.66,70l14.73,16.2A112,112,0,0,1,128,192Zm6-95.43a8,8,0,0,1,3-15.72,48.16,48.16,0,0,1,38.77,42.64,8,8,0,0,1-7.22,8.71,6.39,6.39,0,0,1-.75,0,8,8,0,0,1-8-7.26A32.09,32.09,0,0,0,134,96.57Zm113.28,34.69c-.42.94-10.55,23.37-33.36,43.8a8,8,0,1,1-10.67-11.92A132.77,132.77,0,0,0,231.05,128a133.15,133.15,0,0,0-23.12-30.77C185.67,75.19,158.78,64,128,64a118.37,118.37,0,0,0-19.36,1.57A8,8,0,1,1,106,49.79,134,134,0,0,1,128,48c34.88,0,66.57,13.26,91.66,38.35,18.83,18.83,27.3,37.62,27.65,38.41A8,8,0,0,1,247.31,131.26Z"}))],["fill",i.createElement(i.Fragment,null,i.createElement("path",{d:"M96.68,57.87a4,4,0,0,1,2.08-6.6A130.13,130.13,0,0,1,128,48c34.88,0,66.57,13.26,91.66,38.35,18.83,18.83,27.3,37.62,27.65,38.41a8,8,0,0,1,0,6.5c-.35.79-8.82,19.57-27.65,38.4q-4.28,4.26-8.79,8.07a4,4,0,0,1-5.55-.36ZM213.92,210.62a8,8,0,1,1-11.84,10.76L180,197.13A127.21,127.21,0,0,1,128,208c-34.88,0-66.57-13.26-91.66-38.34C17.51,150.83,9,132.05,8.69,131.26a8,8,0,0,1,0-6.5C9,124,17.51,105.18,36.34,86.35a135,135,0,0,1,25-19.78L42.08,45.38A8,8,0,1,1,53.92,34.62Zm-65.49-48.25-52.69-58a40,40,0,0,0,52.69,58Z"}))],["light",i.createElement(i.Fragment,null,i.createElement("path",{d:"M52.44,36A6,6,0,0,0,43.56,44L64.44,67c-37.28,21.9-53.23,57-53.92,58.57a6,6,0,0,0,0,4.88c.34.77,8.66,19.22,27.24,37.8C55,185.47,84.62,206,128,206a124.91,124.91,0,0,0,52.57-11.25l23,25.29a6,6,0,0,0,8.88-8.08Zm48.62,71.32,45,49.52a34,34,0,0,1-45-49.52ZM128,194c-31.38,0-58.78-11.42-81.45-33.93A134.57,134.57,0,0,1,22.69,128c4.29-8.2,20.1-35.18,50-51.91L92.89,98.3a46,46,0,0,0,61.35,67.48l17.81,19.6A113.47,113.47,0,0,1,128,194Zm6.4-99.4a6,6,0,0,1,2.25-11.79,46.17,46.17,0,0,1,37.15,40.87,6,6,0,0,1-5.42,6.53l-.56,0a6,6,0,0,1-6-5.45A34.1,34.1,0,0,0,134.4,94.6Zm111.08,35.85c-.41.92-10.37,23-32.86,43.12a6,6,0,1,1-8-8.94A134.07,134.07,0,0,0,233.31,128a134.67,134.67,0,0,0-23.86-32.07C186.78,73.42,159.38,62,128,62a120.19,120.19,0,0,0-19.69,1.6,6,6,0,1,1-2-11.83A131.12,131.12,0,0,1,128,50c43.38,0,73,20.54,90.24,37.76,18.58,18.58,26.9,37,27.24,37.81A6,6,0,0,1,245.48,130.45Z"}))],["regular",i.createElement(i.Fragment,null,i.createElement("path",{d:"M53.92,34.62A8,8,0,1,0,42.08,45.38L61.32,66.55C25,88.84,9.38,123.2,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208a127.11,127.11,0,0,0,52.07-10.83l22,24.21a8,8,0,1,0,11.84-10.76Zm47.33,75.84,41.67,45.85a32,32,0,0,1-41.67-45.85ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.16,133.16,0,0,1,25,128c4.69-8.79,19.66-33.39,47.35-49.38l18,19.75a48,48,0,0,0,63.66,70l14.73,16.2A112,112,0,0,1,128,192Zm6-95.43a8,8,0,0,1,3-15.72,48.16,48.16,0,0,1,38.77,42.64,8,8,0,0,1-7.22,8.71,6.39,6.39,0,0,1-.75,0,8,8,0,0,1-8-7.26A32.09,32.09,0,0,0,134,96.57Zm113.28,34.69c-.42.94-10.55,23.37-33.36,43.8a8,8,0,1,1-10.67-11.92A132.77,132.77,0,0,0,231.05,128a133.15,133.15,0,0,0-23.12-30.77C185.67,75.19,158.78,64,128,64a118.37,118.37,0,0,0-19.36,1.57A8,8,0,1,1,106,49.79,134,134,0,0,1,128,48c34.88,0,66.57,13.26,91.66,38.35,18.83,18.83,27.3,37.62,27.65,38.41A8,8,0,0,1,247.31,131.26Z"}))],["thin",i.createElement(i.Fragment,null,i.createElement("path",{d:"M51,37.31A4,4,0,0,0,45,42.69L67.59,67.5C29.34,89,13,124.81,12.34,126.38a4.08,4.08,0,0,0,0,3.25c.34.77,8.52,18.89,26.83,37.2,17,17,46.14,37.17,88.83,37.17a122.59,122.59,0,0,0,53.06-11.69l24,26.38a4,4,0,1,0,5.92-5.38ZM149.1,157.16A36,36,0,0,1,101,104.22ZM128,196c-32,0-59.89-11.65-83-34.62A135.81,135.81,0,0,1,20.44,128c3.65-7.23,20.09-36.81,52.68-54.43l22.45,24.7a44,44,0,0,0,59,64.83l20.89,23A114.94,114.94,0,0,1,128,196Zm6.78-103.36a4,4,0,0,1,1.49-7.86,44.15,44.15,0,0,1,35.54,39.09,4,4,0,0,1-3.61,4.35l-.38,0a4,4,0,0,1-4-3.63A36.1,36.1,0,0,0,134.78,92.64Zm108.88,37c-.41.91-10.2,22.58-32.38,42.45a4,4,0,0,1-2.67,1,4,4,0,0,1-2.67-7A136.71,136.71,0,0,0,235.56,128,136.07,136.07,0,0,0,211,94.62C187.89,71.65,160,60,128,60a122,122,0,0,0-20,1.63,4,4,0,0,1-1.32-7.89A129.3,129.3,0,0,1,128,52c42.7,0,71.87,20.22,88.83,37.18,18.31,18.31,26.49,36.44,26.83,37.2A4.08,4.08,0,0,1,243.66,129.63Z"}))]]),I=i.forwardRef((e,t)=>i.createElement(f.default,{ref:t,...e,weights:w}));I.displayName="EyeSlashIcon";let P=({reveal:e})=>e?(0,t.jsx)(I,{style:{width:"var(--psi-icon-size)",height:"var(--psi-icon-size)"}}):(0,t.jsx)(v.EyeIcon,{style:{width:"var(--psi-icon-size)",height:"var(--psi-icon-size)"}}),j={type:"code",component:function(){return(0,t.jsx)(a.PasswordInput,{maw:320,mx:"auto",label:"Change visibility toggle icon",placeholder:"Change visibility toggle icon",defaultValue:"secret",visibilityToggleIcon:P})},code:`
import { PasswordInput } from '@mantine/core';
import { EyeIcon, EyeSlashIcon } from '@phosphor-icons/react';

const VisibilityToggleIcon = ({ reveal }: { reveal: boolean }) =>
  reveal ? (
    <EyeSlashIcon style={{ width: 'var(--psi-icon-size)', height: 'var(--psi-icon-size)' }} />
  ) : (
    <EyeIcon style={{ width: 'var(--psi-icon-size)', height: 'var(--psi-icon-size)' }} />
  );

function Demo() {
  return (
    <PasswordInput
      maw={320}
      mx="auto"
      label="Change visibility toggle icon"
      placeholder="Change visibility toggle icon"
      defaultValue="secret"
      visibilityToggleIcon={VisibilityToggleIcon}
    />
  );
}
`};var A=e.i(671640),V=e.i(541772);let C={type:"code",component:function(){let[e,{toggle:r}]=(0,V.useDisclosure)(!1);return(0,t.jsxs)(A.Stack,{children:[(0,t.jsx)(a.PasswordInput,{label:"Password",defaultValue:"secret",visible:e,onVisibilityChange:r}),(0,t.jsx)(a.PasswordInput,{label:"Confirm password",defaultValue:"secret",visible:e,onVisibilityChange:r})]})},code:`
import { useDisclosure } from '@mantine/hooks';
import { PasswordInput, Stack } from '@mantine/core';

function Demo() {
  const [visible, { toggle }] = useDisclosure(false);
  return (
    <Stack>
      <PasswordInput
        label="Password"
        defaultValue="secret"
        visible={visible}
        onVisibilityChange={toggle}
      />
      <PasswordInput
        label="Confirm password"
        defaultValue="secret"
        visible={visible}
        onVisibilityChange={toggle}
      />
    </Stack>
  );
}
`,centered:!0,maxWidth:340};var Z=e.i(645640),E=e.i(466200);let M=`
import { LockIcon } from '@phosphor-icons/react';
import { PasswordInput } from '@mantine/core';

function Demo() {
  return (
    <PasswordInput
      label="Label"
      placeholder="PasswordInput"
      description="Description"
      error="Error"
      withAsterisk
      leftSection={<LockIcon size={18} />}
      {{props}}
    />
  );
}
`,S={type:"styles-api",data:E.PasswordInputStylesApi,component:function(e){return(0,t.jsx)(a.PasswordInput,{label:"Label",placeholder:"PasswordInput",description:"Description",error:"Error",withAsterisk:!0,leftSection:(0,t.jsx)(Z.LockIcon,{size:18}),...e})},code:M,centered:!0,maxWidth:340},L={type:"code",component:function(){let e=(0,t.jsx)(Z.LockIcon,{size:18});return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.PasswordInput,{leftSection:e,leftSectionPointerEvents:"none",label:"With left section",placeholder:"With left section"}),(0,t.jsx)(a.PasswordInput,{rightSection:e,label:"With right section",placeholder:"With right section",rightSectionPointerEvents:"none",mt:"md"})]})},code:`
import { PasswordInput } from '@mantine/core';
import { LockIcon } from '@phosphor-icons/react';

function Demo() {
  const icon = <LockIcon size={18} />;

  return (
    <>
      <PasswordInput
        leftSection={icon}
        leftSectionPointerEvents="none"
        label="With left section"
        placeholder="With left section"
      />
      <PasswordInput
        rightSection={icon}
        label="With right section"
        placeholder="With right section"
        rightSectionPointerEvents="none"
        mt="md"
      />
    </>
  );
}
`,centered:!0,maxWidth:340},k={type:"code",component:function(){return(0,t.jsx)(a.PasswordInput,{disabled:!0,label:"Disabled password input",placeholder:"Disabled password input"})},code:`
import { PasswordInput } from '@mantine/core';

function Demo() {
  return (
    <PasswordInput disabled label="Disabled password input" placeholder="Disabled password input" />
  );
}
`,centered:!0,maxWidth:340},z={type:"code",component:function(){return(0,t.jsx)(a.PasswordInput,{placeholder:"Your password",loading:!0})},code:`
import { PasswordInput } from '@mantine/core';

function Demo() {
  return <PasswordInput placeholder="Your password" loading />;
}
`,centered:!0,maxWidth:340};var D=(0,n.__exportAll)({controlledVisibility:()=>C,disabled:()=>k,error:()=>x,loading:()=>z,sections:()=>L,strengthMeter:()=>b,stylesApi:()=>S,success:()=>y,usage:()=>s,visibilityIcon:()=>j});e.i(603441);var T=e.i(62558);e.i(457450);var H=e.i(418026);let F=(0,T.Layout)(H.MDX_DATA.PasswordInput);function _(e){let n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.useMDXComponents)(),...e.components},{Demo:o,GetElementRef:a,InputAccessibility:s,InputFeatures:i,InputSections:l,StylesApiSelectors:c}=n;return o||W("Demo",!0),a||W("GetElementRef",!0),s||W("InputAccessibility",!0),i||W("InputFeatures",!0),l||W("InputSections",!0),c||W("StylesApiSelectors",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(i,{component:"PasswordInput",element:"input"}),"\n",(0,t.jsx)(o,{data:D.usage}),"\n",(0,t.jsx)(n.h2,{id:"loading-state",children:"Loading state"}),"\n",(0,t.jsxs)(n.p,{children:["Set ",(0,t.jsx)(n.code,{children:"loading"})," prop to display a loading indicator. By default, the loader is displayed on the right side of the input.\nYou can change the position with the ",(0,t.jsx)(n.code,{children:"loadingPosition"})," prop to ",(0,t.jsx)(n.code,{children:"'left'"})," or ",(0,t.jsx)(n.code,{children:"'right'"}),". This is useful for async operations like API calls, searches, or validations:"]}),"\n",(0,t.jsx)(o,{data:D.loading}),"\n",(0,t.jsx)(n.h2,{id:"controlled",children:"Controlled"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { PasswordInput } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState('');\n  return (\n    <PasswordInput\n      value={value}\n      onChange={(event) => setValue(event.currentTarget.value)}\n    />\n  );\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"uncontrolled",children:"Uncontrolled"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"PasswordInput"})," can be used with uncontrolled forms the same way as a native ",(0,t.jsx)(n.code,{children:'input[type="password"]'}),".\nSet the ",(0,t.jsx)(n.code,{children:"name"})," attribute to include password input value in ",(0,t.jsx)(n.code,{children:"FormData"})," object on form submission.\nTo control the initial value in uncontrolled forms, use the ",(0,t.jsx)(n.code,{children:"defaultValue"})," prop."]}),"\n",(0,t.jsxs)(n.p,{children:["Example usage of uncontrolled ",(0,t.jsx)(n.code,{children:"PasswordInput"})," with ",(0,t.jsx)(n.code,{children:"FormData"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { PasswordInput } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <form\n      onSubmit={(event) => {\n        event.preventDefault();\n        const formData = new FormData(event.currentTarget);\n        console.log('Password value:', formData.get('password'));\n      }}\n    >\n      <PasswordInput\n        label=\"Enter your password\"\n        name=\"password\"\n      />\n      <button type=\"submit\">Submit</button>\n    </form>\n  );\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"controlled-visibility-toggle",children:"Controlled visibility toggle"}),"\n",(0,t.jsxs)(n.p,{children:["Control the visibility state with the ",(0,t.jsx)(n.code,{children:"visible"})," and ",(0,t.jsx)(n.code,{children:"onVisibilityChange"})," props.\nFor example, the props can be used to sync visibility state between two inputs:"]}),"\n",(0,t.jsx)(o,{data:D.controlledVisibility}),"\n",(0,t.jsx)(n.h2,{id:"change-visibility-toggle-icon",children:"Change visibility toggle icon"}),"\n",(0,t.jsxs)(n.p,{children:["To change the visibility toggle icon, pass a React component that accepts the ",(0,t.jsx)(n.code,{children:"reveal"})," prop to ",(0,t.jsx)(n.code,{children:"visibilityToggleIcon"}),":"]}),"\n",(0,t.jsx)(o,{data:D.visibilityIcon}),"\n",(0,t.jsx)(n.h2,{id:"strength-meter-example",children:"Strength meter example"}),"\n",(0,t.jsxs)(n.p,{children:["Password strength meter example with the ",(0,t.jsx)(n.a,{href:"/core/progress/",children:"Progress"})," and ",(0,t.jsx)(n.a,{href:"/core/popover/",children:"Popover"})," components:"]}),"\n",(0,t.jsx)(o,{data:D.strengthMeter,demoProps:{zIndex:4}}),"\n",(0,t.jsx)(n.h2,{id:"usage-without-visibility-toggle",children:"Usage without visibility toggle"}),"\n",(0,t.jsxs)(n.p,{children:["If you do not need the visibility toggle button, use the ",(0,t.jsx)(n.a,{href:"/core/text-input/",children:"TextInput"})," component instead:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { TextInput } from '@mantine/core';\n\nfunction Demo() {\n  return <TextInput type=\"password\" />;\n}\n"})}),"\n",(0,t.jsx)(l,{component:"PasswordInput"}),"\n",(0,t.jsxs)(n.p,{children:["Note that when the ",(0,t.jsx)(n.code,{children:"rightSection"})," prop is used, the visibility toggle button is not rendered."]}),"\n",(0,t.jsx)(o,{data:D.sections}),"\n",(0,t.jsx)(n.h2,{id:"error-state",children:"Error state"}),"\n",(0,t.jsx)(o,{data:D.error}),"\n",(0,t.jsx)(n.h2,{id:"success-state",children:"Success state"}),"\n",(0,t.jsx)(o,{data:D.success}),"\n",(0,t.jsx)(n.h2,{id:"disabled",children:"Disabled"}),"\n",(0,t.jsxs)(n.p,{children:["When the ",(0,t.jsx)(n.code,{children:"disabled"})," prop is set, the visibility toggle button is hidden:"]}),"\n",(0,t.jsx)(o,{data:D.disabled}),"\n",(0,t.jsx)(c,{component:"PasswordInput"}),"\n",(0,t.jsx)(o,{data:D.stylesApi}),"\n",(0,t.jsx)(a,{component:"PasswordInput",refType:"input"}),"\n",(0,t.jsx)(s,{component:"PasswordInput"}),"\n",(0,t.jsxs)(n.p,{children:["To set ",(0,t.jsx)(n.code,{children:"aria-label"})," on the visibility toggle button, use the ",(0,t.jsx)(n.code,{children:"visibilityToggleButtonProps"})," prop:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { PasswordInput } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <PasswordInput\n      label=\"Password\"\n      visibilityToggleButtonProps={{\n        'aria-label': 'Toggle password visibility',\n      }}\n    />\n  );\n}\n"})})]})}function W(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}e.s(["default",0,function(e={}){return(0,t.jsx)(F,{...e,children:(0,t.jsx)(_,{...e})})}],100863)},388570,(e,t,r)=>{let n="/core/password-input";(window.__NEXT_P=window.__NEXT_P||[]).push([n,()=>e.r(100863)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([n])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);