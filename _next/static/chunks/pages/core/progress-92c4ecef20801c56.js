(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[94201],{31917:(e,r,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/progress",function(){return t(67836)}])},67836:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>w});var s=t(31085),o=t(71184),n=t(44419);let a={type:"configurator",component:function(e){return(0,s.jsx)(n.k,{...e})},code:`
import { Progress } from '@mantine/core';

function Demo() {
  return <Progress{{props}} />;
}
`,centered:!0,maxWidth:400,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"radius",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"size",type:"size",initialValue:"md",libraryValue:"md"},{prop:"value",type:"number",initialValue:50,max:100,min:0,step:10,libraryValue:"__"},{prop:"striped",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"animated",type:"boolean",initialValue:!1,libraryValue:!1}]};var l=t(64397),i=t(2912);let c={type:"code",component:function(){return(0,s.jsxs)(n.k.Root,{size:40,children:[(0,s.jsx)(i.m,{label:"Documents – 33Gb",children:(0,s.jsx)(n.k.Section,{value:33,color:"cyan",children:(0,s.jsx)(n.k.Label,{children:"Documents"})})}),(0,s.jsx)(i.m,{label:"Photos – 28Gb",children:(0,s.jsx)(n.k.Section,{value:28,color:"pink",children:(0,s.jsx)(n.k.Label,{children:"Photos"})})}),(0,s.jsx)(i.m,{label:"Other – 15Gb",children:(0,s.jsx)(n.k.Section,{value:15,color:"orange",children:(0,s.jsx)(n.k.Label,{children:"Other"})})})]})},code:`
import { Progress, Tooltip } from '@mantine/core';

function Demo() {
  return (
    <Progress.Root size={40}>
      <Tooltip label="Documents \u2013 33Gb">
        <Progress.Section value={33} color="cyan">
          <Progress.Label>Documents</Progress.Label>
        </Progress.Section>
      </Tooltip>

      <Tooltip label="Photos \u2013 28Gb">
        <Progress.Section value={28} color="pink">
          <Progress.Label>Photos</Progress.Label>
        </Progress.Section>
      </Tooltip>

      <Tooltip label="Other \u2013 15Gb">
        <Progress.Section value={15} color="orange">
          <Progress.Label>Other</Progress.Label>
        </Progress.Section>
      </Tooltip>
    </Progress.Root>
  );
}
`};var d=t(14041),u=t(52022);let p={type:"code",component:function(){let[e,r]=(0,d.useState)(50);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.k,{value:e,size:"lg",transitionDuration:200}),(0,s.jsx)(u.$,{onClick:()=>r(100*Math.random()),mt:"md",children:"Set random value"})]})},code:`
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
`,centered:!0,maxWidth:400};var h=t(52404),g=t(56051);let v=[{re:/[0-9]/,label:"Includes number"},{re:/[a-z]/,label:"Includes lowercase letter"},{re:/[A-Z]/,label:"Includes uppercase letter"},{re:/[$&+,:;=?@#|'<>.^*()%!-]/,label:"Includes special symbol"}],m={type:"code",component:function(){let[e,r]=(0,d.useState)(""),t=function(e){if(e.length<5)return 10;let r=e.length>5?0:1;return v.forEach(t=>{t.re.test(e)||(r+=1)}),Math.max(100-100/(v.length+1)*r,10)}(e),o=function(e){switch(!0){case e<30:return"red";case e<50:return"orange";case e<70:return"yellow";default:return"teal"}}(t);return(0,s.jsxs)("div",{children:[(0,s.jsx)(h.y,{value:e,onChange:e=>r(e.currentTarget.value),placeholder:"Enter password",label:"Enter password"}),(0,s.jsxs)(g.Y,{grow:!0,gap:5,mt:"xs",children:[(0,s.jsx)(n.k,{size:"xs",color:o,value:e.length>0?100:0,transitionDuration:0}),(0,s.jsx)(n.k,{size:"xs",color:o,transitionDuration:0,value:t<30?0:100}),(0,s.jsx)(n.k,{size:"xs",color:o,transitionDuration:0,value:t<50?0:100}),(0,s.jsx)(n.k,{size:"xs",color:o,transitionDuration:0,value:t<70?0:100})]})]})},code:`
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
`,centered:!0,maxWidth:340,defaultExpanded:!1};var x=t(73593);let b=`
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
`,y={type:"styles-api",data:x.k,component:function(e){return(0,s.jsx)(n.k.Root,{size:"xl",...e,children:(0,s.jsx)(n.k.Section,{value:35,children:(0,s.jsx)(n.k.Label,{children:"Documents"})})})},code:b,centered:!0,maxWidth:400};var P=t(18675),j=t(20017);let k=(0,P.P)(j.XZ.Progress);function f(e){let r={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components},{Demo:t,StylesApiSelectors:n}=r;return t||C("Demo",!0),n||C("StylesApiSelectors",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(t,{data:a}),"\n",(0,s.jsx)(r.h2,{id:"compound-components",children:"Compound components"}),"\n",(0,s.jsx)(t,{data:l.W}),"\n",(0,s.jsx)(r.h2,{id:"with-tooltips",children:"With tooltips"}),"\n",(0,s.jsx)(t,{data:c}),"\n",(0,s.jsx)(r.h2,{id:"section-width-transition",children:"Section width transition"}),"\n",(0,s.jsxs)(r.p,{children:["Set ",(0,s.jsx)(r.code,{children:"transitionDuration"})," to a number of ms to enable width transition:"]}),"\n",(0,s.jsx)(t,{data:p}),"\n",(0,s.jsx)(r.h2,{id:"example-progress-with-segments",children:"Example: progress with segments"}),"\n",(0,s.jsx)(t,{data:m}),"\n",(0,s.jsx)(n,{component:"Progress"}),"\n",(0,s.jsx)(t,{data:y}),"\n",(0,s.jsx)(r.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Progress section has ",(0,s.jsx)(r.code,{children:'role="progressbar"'})," attribute"]}),"\n",(0,s.jsxs)(r.li,{children:["Progress section has ",(0,s.jsx)(r.code,{children:"aria-valuenow"})," attribute with current value"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"aria-valuemin"})," and ",(0,s.jsx)(r.code,{children:"aria-valuemax"})," attributes are always set to ",(0,s.jsx)(r.code,{children:"0"})," and ",(0,s.jsx)(r.code,{children:"100"})," as component does not support other values"]}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["Set ",(0,s.jsx)(r.code,{children:"aria-label"})," attribute to label progress:"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-tsx",children:'import { Progress } from \'@mantine/core\';\n\nfunction Demo() {\n  return <Progress aria-label="Uploading progress" value={10} />;\n}\n\nfunction DemoCompound() {\n  return (\n    <Progress.Root>\n      <Progress.Section aria-label="Uploading progress" value={10} />\n    </Progress.Root>\n  );\n}\n'})})]})}function w(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,s.jsx)(k,{...e,children:(0,s.jsx)(f,{...e})})}function C(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},87186:(e,r,t)=>{"use strict";t.d(r,{A:()=>s});var s=(0,t(73366).A)("outline","adjustments","IconAdjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},80502:(e,r,t)=>{"use strict";t.d(r,{A:()=>s});var s=(0,t(73366).A)("outline","arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},89689:(e,r,t)=>{"use strict";t.d(r,{A:()=>s});var s=(0,t(73366).A)("outline","arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},61584:(e,r,t)=>{"use strict";t.d(r,{A:()=>s});var s=(0,t(73366).A)("outline","calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},91133:(e,r,t)=>{"use strict";t.d(r,{A:()=>s});var s=(0,t(73366).A)("outline","code","IconCode",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},11749:(e,r,t)=>{"use strict";t.d(r,{A:()=>s});var s=(0,t(73366).A)("outline","file-text","IconFileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},89843:(e,r,t)=>{"use strict";t.d(r,{A:()=>s});var s=(0,t(73366).A)("outline","license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},9613:(e,r,t)=>{"use strict";t.d(r,{A:()=>s});var s=(0,t(73366).A)("outline","pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},55764:(e,r,t)=>{"use strict";t.d(r,{A:()=>s});var s=(0,t(73366).A)("outline","switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},64397:(e,r,t)=>{"use strict";t.d(r,{W:()=>n});var s=t(31085),o=t(44419);let n={type:"code",component:function(){return(0,s.jsxs)(o.k.Root,{size:"xl",children:[(0,s.jsx)(o.k.Section,{value:35,color:"cyan",children:(0,s.jsx)(o.k.Label,{children:"Documents"})}),(0,s.jsx)(o.k.Section,{value:28,color:"pink",children:(0,s.jsx)(o.k.Label,{children:"Photos"})}),(0,s.jsx)(o.k.Section,{value:15,color:"orange",children:(0,s.jsx)(o.k.Label,{children:"Other"})})]})},code:`
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
`}},52404:(e,r,t)=>{"use strict";t.d(r,{y:()=>P});var s=t(31085),o=t(54357),n=t(97567),a=t(82307);t(14041);var l=t(33450),i=t(7098),c=t(36456),d=t(69564),u=t(29686),p=t(18315),h=t(6754),g=t(22962),v=t(34452),m=t(87059),x={root:"m_f61ca620",input:"m_ccf8da4c",innerInput:"m_f2d85dd2",visibilityToggle:"m_b1072d44"};let b={visibilityToggleIcon:({reveal:e})=>(0,s.jsx)("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{width:"var(--psi-icon-size)",height:"var(--psi-icon-size)"},children:(0,s.jsx)("path",{d:e?"M13.3536 2.35355C13.5488 2.15829 13.5488 1.84171 13.3536 1.64645C13.1583 1.45118 12.8417 1.45118 12.6464 1.64645L10.6828 3.61012C9.70652 3.21671 8.63759 3 7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C0.902945 9.08812 2.02314 10.1861 3.36061 10.9323L1.64645 12.6464C1.45118 12.8417 1.45118 13.1583 1.64645 13.3536C1.84171 13.5488 2.15829 13.5488 2.35355 13.3536L4.31723 11.3899C5.29348 11.7833 6.36241 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C14.0971 5.9119 12.9769 4.81391 11.6394 4.06771L13.3536 2.35355ZM9.90428 4.38861C9.15332 4.1361 8.34759 4 7.5 4C4.80285 4 2.52952 5.37816 1.09622 7.50001C1.87284 8.6497 2.89609 9.58106 4.09974 10.1931L9.90428 4.38861ZM5.09572 10.6114L10.9003 4.80685C12.1039 5.41894 13.1272 6.35031 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11C6.65241 11 5.84668 10.8639 5.09572 10.6114Z":"M7.5 11C4.80285 11 2.52952 9.62184 1.09622 7.50001C2.52952 5.37816 4.80285 4 7.5 4C10.1971 4 12.4705 5.37816 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11ZM7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C1.65639 10.2936 4.30786 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C13.3436 4.70638 10.6921 3 7.5 3ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})},y=(0,i.V)((e,{size:r})=>({root:{"--psi-icon-size":(0,l.YC)(r,"psi-icon-size"),"--psi-button-size":(0,l.YC)(r,"psi-button-size")}})),P=(0,h.P9)((e,r)=>{let t=(0,u.Y)("PasswordInput",b,e),{classNames:l,className:i,style:h,styles:m,unstyled:P,vars:j,required:k,error:f,leftSection:w,disabled:C,id:M,variant:S,inputContainer:D,description:L,label:z,size:I,errorProps:A,descriptionProps:_,labelProps:V,withAsterisk:R,inputWrapperOrder:E,wrapperProps:T,radius:N,rightSection:Y,rightSectionWidth:Z,rightSectionPointerEvents:$,leftSectionWidth:G,visible:O,defaultVisible:W,onVisibilityChange:q,visibilityToggleIcon:B,visibilityToggleButtonProps:F,rightSectionProps:U,leftSectionProps:X,leftSectionPointerEvents:K,withErrorStyles:J,mod:H,...Q}=t,ee=(0,n.B)(M),[er,et]=(0,a.Z)({value:O,defaultValue:W,finalValue:!1,onChange:q}),es=()=>et(!er),eo=(0,d.I)({name:"PasswordInput",classes:x,props:t,className:i,style:h,classNames:l,styles:m,unstyled:P,vars:j,varsResolver:y}),{resolvedClassNames:en,resolvedStyles:ea}=(0,c.Y)({classNames:l,styles:m,props:t}),{styleProps:el,rest:ei}=(0,p.j)(Q),ec=A?.id||`${ee}-error`,ed=_?.id||`${ee}-description`,eu=!!f&&"boolean"!=typeof f,ep=!!L,eh=`${eu?ec:""} ${ep?ed:""}`,eg=eh.trim().length>0?eh.trim():void 0,ev=(0,s.jsx)(g.M,{...eo("visibilityToggle"),disabled:C,radius:N,"aria-hidden":!F,tabIndex:-1,...F,variant:F?.variant??"subtle",color:"gray",unstyled:P,onTouchEnd:e=>{e.preventDefault(),F?.onTouchEnd?.(e),es()},onMouseDown:e=>{e.preventDefault(),F?.onMouseDown?.(e),es()},onKeyDown:e=>{F?.onKeyDown?.(e)," "===e.key&&(e.preventDefault(),es())},children:(0,s.jsx)(B,{reveal:er})});return(0,s.jsx)(v.p.Wrapper,{required:k,id:ee,label:z,error:f,description:L,size:I,classNames:en,styles:ea,__staticSelector:"PasswordInput",unstyled:P,withAsterisk:R,inputWrapperOrder:E,inputContainer:D,variant:S,labelProps:{...V,htmlFor:ee},descriptionProps:{..._,id:ed},errorProps:{...A,id:ec},mod:H,...eo("root"),...el,...T,children:(0,s.jsx)(v.p,{component:"div",error:f,leftSection:w,size:I,classNames:{...en,input:(0,o.A)(x.input,en.input)},styles:ea,radius:N,disabled:C,__staticSelector:"PasswordInput",rightSectionWidth:Z,rightSection:Y??ev,variant:S,unstyled:P,leftSectionWidth:G,rightSectionPointerEvents:$||"all",rightSectionProps:U,leftSectionProps:X,leftSectionPointerEvents:K,withAria:!1,withErrorStyles:J,children:(0,s.jsx)("input",{required:k,"data-invalid":!!f||void 0,"data-with-left-section":!!w||void 0,...eo("innerInput"),disabled:C,id:ee,ref:r,...ei,"aria-describedby":eg,autoComplete:ei.autoComplete||"off",type:er?"text":"password"})})})});P.classes={...m.O.classes,...x},P.displayName="@mantine/core/PasswordInput"},44419:(e,r,t)=>{"use strict";t.d(r,{k:()=>M});var s=t(31085);t(14041);var o=t(36456),n=t(29686),a=t(6754),l=t(34056);let[i,c]=(0,t(59852).F)("Progress.Root component was not found in tree");var d={root:"m_db6d6462",section:"m_2242eb65","stripes-animation":"m_81a374bd",label:"m_91e40b74"};let u={},p=(0,a.P9)((e,r)=>{let{classNames:t,className:o,style:a,styles:i,vars:d,...p}=(0,n.Y)("ProgressLabel",u,e),h=c();return(0,s.jsx)(l.a,{ref:r,...h.getStyles("label",{className:o,style:a,classNames:t,styles:i}),...p})});p.classes=d,p.displayName="@mantine/core/ProgressLabel";var h=t(33450),g=t(7098),v=t(69564);let m={},x=(0,g.V)((e,{size:r,radius:t,transitionDuration:s})=>({root:{"--progress-size":(0,h.YC)(r,"progress-size"),"--progress-radius":void 0===t?void 0:(0,h.nJ)(t),"--progress-transition-duration":"number"==typeof s?`${s}ms`:void 0}})),b=(0,a.P9)((e,r)=>{let t=(0,n.Y)("ProgressRoot",m,e),{classNames:o,className:a,style:c,styles:u,unstyled:p,vars:h,autoContrast:g,transitionDuration:b,...y}=t,P=(0,v.I)({name:"Progress",classes:d,props:t,className:a,style:c,classNames:o,styles:u,unstyled:p,vars:h,varsResolver:x});return(0,s.jsx)(i,{value:{getStyles:P,autoContrast:g},children:(0,s.jsx)(l.a,{ref:r,...P("root"),...y})})});b.classes=d,b.displayName="@mantine/core/ProgressRoot";var y=t(51606),P=t(3702),j=t(62554),k=t(92408);let f={withAria:!0},w=(0,a.P9)((e,r)=>{let{classNames:t,className:o,style:a,styles:i,vars:d,value:u,withAria:p,color:h,striped:g,animated:v,mod:m,...x}=(0,n.Y)("ProgressSection",f,e),b=c(),w=(0,k.xd)(),C=p?{role:"progressbar","aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":u,"aria-valuetext":`${u}%`}:{};return(0,s.jsx)(l.a,{ref:r,...b.getStyles("section",{className:o,classNames:t,styles:i,style:a}),...x,...C,mod:[{striped:g||v,animated:v},m],__vars:{"--progress-section-width":`${u}%`,"--progress-section-color":(0,y.r)(h,w),"--progress-label-color":(0,j.v)(b.autoContrast,w)?(0,P.w)({color:h,theme:w,autoContrast:b.autoContrast}):void 0}})});w.classes=d,w.displayName="@mantine/core/ProgressSection";let C={},M=(0,a.P9)((e,r)=>{let t=(0,n.Y)("Progress",C,e),{value:a,classNames:l,styles:i,vars:c,color:d,striped:u,animated:p,"aria-label":h,...g}=t,{resolvedClassNames:v,resolvedStyles:m}=(0,o.Y)({classNames:l,styles:i,props:t});return(0,s.jsx)(b,{ref:r,classNames:v,styles:m,vars:c,...g,children:(0,s.jsx)(w,{value:a,color:d,striped:u,animated:p,"aria-label":h})})});M.classes=d,M.displayName="@mantine/core/Progress",M.Section=w,M.Root=b,M.Label=p}},e=>{var r=r=>e(e.s=r);e.O(0,[18675,90636,46593,38792],()=>r(31917)),_N_E=e.O()}]);