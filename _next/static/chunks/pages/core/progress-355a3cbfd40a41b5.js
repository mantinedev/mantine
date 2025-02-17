(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[94201],{31917:(e,r,o)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/progress",function(){return o(67836)}])},67836:(e,r,o)=>{"use strict";o.r(r),o.d(r,{default:()=>C});var t=o(31085),s=o(71184),n=o(44419);let a={type:"configurator",component:function(e){return(0,t.jsx)(n.k,{...e})},code:`
import { Progress } from '@mantine/core';

function Demo() {
  return <Progress{{props}} />;
}
`,centered:!0,maxWidth:400,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"radius",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"size",type:"size",initialValue:"md",libraryValue:"md"},{prop:"value",type:"number",initialValue:50,max:100,min:0,step:10,libraryValue:"__"},{prop:"striped",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"animated",type:"boolean",initialValue:!1,libraryValue:!1}]};var l=o(64397),i=o(2912);let c={type:"code",component:function(){return(0,t.jsxs)(n.k.Root,{size:40,children:[(0,t.jsx)(i.m,{label:"Documents – 33Gb",children:(0,t.jsx)(n.k.Section,{value:33,color:"cyan",children:(0,t.jsx)(n.k.Label,{children:"Documents"})})}),(0,t.jsx)(i.m,{label:"Photos – 28Gb",children:(0,t.jsx)(n.k.Section,{value:28,color:"pink",children:(0,t.jsx)(n.k.Label,{children:"Photos"})})}),(0,t.jsx)(i.m,{label:"Other – 15Gb",children:(0,t.jsx)(n.k.Section,{value:15,color:"orange",children:(0,t.jsx)(n.k.Label,{children:"Other"})})})]})},code:`
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
`};var u=o(14041),d=o(52022);let p={type:"code",component:function(){let[e,r]=(0,u.useState)(50);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.k,{value:e,size:"lg",transitionDuration:200}),(0,t.jsx)(d.$,{onClick:()=>r(100*Math.random()),mt:"md",children:"Set random value"})]})},code:`
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
`,centered:!0,maxWidth:400};var g=o(52404),h=o(56051);let m=[{re:/[0-9]/,label:"Includes number"},{re:/[a-z]/,label:"Includes lowercase letter"},{re:/[A-Z]/,label:"Includes uppercase letter"},{re:/[$&+,:;=?@#|'<>.^*()%!-]/,label:"Includes special symbol"}],x={type:"code",component:function(){let[e,r]=(0,u.useState)(""),o=function(e){if(e.length<5)return 10;let r=e.length>5?0:1;return m.forEach(o=>{o.re.test(e)||(r+=1)}),Math.max(100-100/(m.length+1)*r,10)}(e),s=function(e){switch(!0){case e<30:return"red";case e<50:return"orange";case e<70:return"yellow";default:return"teal"}}(o);return(0,t.jsxs)("div",{children:[(0,t.jsx)(g.y,{value:e,onChange:e=>r(e.currentTarget.value),placeholder:"Enter password",label:"Enter password"}),(0,t.jsxs)(h.Y,{grow:!0,gap:5,mt:"xs",children:[(0,t.jsx)(n.k,{size:"xs",color:s,value:e.length>0?100:0,transitionDuration:0}),(0,t.jsx)(n.k,{size:"xs",color:s,transitionDuration:0,value:o<30?0:100}),(0,t.jsx)(n.k,{size:"xs",color:s,transitionDuration:0,value:o<50?0:100}),(0,t.jsx)(n.k,{size:"xs",color:s,transitionDuration:0,value:o<70?0:100})]})]})},code:`
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
`,centered:!0,maxWidth:340,defaultExpanded:!1};var b=o(73593);let v=`
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
`,P={type:"styles-api",data:b.k,component:function(e){return(0,t.jsx)(n.k.Root,{size:"xl",...e,children:(0,t.jsx)(n.k.Section,{value:35,children:(0,t.jsx)(n.k.Label,{children:"Documents"})})})},code:v,centered:!0,maxWidth:400};var j=o(85954),f=o(38215);let w=(0,j.P)(f.XZ.Progress);function y(e){let r={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components},{Demo:o,StylesApiSelectors:n}=r;return o||S("Demo",!0),n||S("StylesApiSelectors",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(o,{data:a}),"\n",(0,t.jsx)(r.h2,{id:"compound-components",children:"Compound components"}),"\n",(0,t.jsx)(o,{data:l.W}),"\n",(0,t.jsx)(r.h2,{id:"with-tooltips",children:"With tooltips"}),"\n",(0,t.jsx)(o,{data:c}),"\n",(0,t.jsx)(r.h2,{id:"section-width-transition",children:"Section width transition"}),"\n",(0,t.jsxs)(r.p,{children:["Set ",(0,t.jsx)(r.code,{children:"transitionDuration"})," to a number of ms to enable width transition:"]}),"\n",(0,t.jsx)(o,{data:p}),"\n",(0,t.jsx)(r.h2,{id:"example-progress-with-segments",children:"Example: progress with segments"}),"\n",(0,t.jsx)(o,{data:x}),"\n",(0,t.jsx)(n,{component:"Progress"}),"\n",(0,t.jsx)(o,{data:P}),"\n",(0,t.jsx)(r.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["Progress section has ",(0,t.jsx)(r.code,{children:'role="progressbar"'})," attribute"]}),"\n",(0,t.jsxs)(r.li,{children:["Progress section has ",(0,t.jsx)(r.code,{children:"aria-valuenow"})," attribute with current value"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"aria-valuemin"})," and ",(0,t.jsx)(r.code,{children:"aria-valuemax"})," attributes are always set to ",(0,t.jsx)(r.code,{children:"0"})," and ",(0,t.jsx)(r.code,{children:"100"})," as component does not support other values"]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["Set ",(0,t.jsx)(r.code,{children:"aria-label"})," attribute to label progress:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-tsx",children:'import { Progress } from \'@mantine/core\';\n\nfunction Demo() {\n  return <Progress aria-label="Uploading progress" value={10} />;\n}\n\nfunction DemoCompound() {\n  return (\n    <Progress.Root>\n      <Progress.Section aria-label="Uploading progress" value={10} />\n    </Progress.Root>\n  );\n}\n'})})]})}function C(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(w,{...e,children:(0,t.jsx)(y,{...e})})}function S(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},64397:(e,r,o)=>{"use strict";o.d(r,{W:()=>n});var t=o(31085),s=o(44419);let n={type:"code",component:function(){return(0,t.jsxs)(s.k.Root,{size:"xl",children:[(0,t.jsx)(s.k.Section,{value:35,color:"cyan",children:(0,t.jsx)(s.k.Label,{children:"Documents"})}),(0,t.jsx)(s.k.Section,{value:28,color:"pink",children:(0,t.jsx)(s.k.Label,{children:"Photos"})}),(0,t.jsx)(s.k.Section,{value:15,color:"orange",children:(0,t.jsx)(s.k.Label,{children:"Other"})})]})},code:`
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
`}},52404:(e,r,o)=>{"use strict";o.d(r,{y:()=>j});var t=o(31085),s=o(54357),n=o(97567),a=o(82307);o(14041);var l=o(33450),i=o(7098),c=o(36456),u=o(69564),d=o(29686),p=o(18315),g=o(6754),h=o(22962),m=o(34452),x=o(87059),b={root:"m_f61ca620",input:"m_ccf8da4c",innerInput:"m_f2d85dd2",visibilityToggle:"m_b1072d44"};let v={visibilityToggleIcon:({reveal:e})=>(0,t.jsx)("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{width:"var(--psi-icon-size)",height:"var(--psi-icon-size)"},children:(0,t.jsx)("path",{d:e?"M13.3536 2.35355C13.5488 2.15829 13.5488 1.84171 13.3536 1.64645C13.1583 1.45118 12.8417 1.45118 12.6464 1.64645L10.6828 3.61012C9.70652 3.21671 8.63759 3 7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C0.902945 9.08812 2.02314 10.1861 3.36061 10.9323L1.64645 12.6464C1.45118 12.8417 1.45118 13.1583 1.64645 13.3536C1.84171 13.5488 2.15829 13.5488 2.35355 13.3536L4.31723 11.3899C5.29348 11.7833 6.36241 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C14.0971 5.9119 12.9769 4.81391 11.6394 4.06771L13.3536 2.35355ZM9.90428 4.38861C9.15332 4.1361 8.34759 4 7.5 4C4.80285 4 2.52952 5.37816 1.09622 7.50001C1.87284 8.6497 2.89609 9.58106 4.09974 10.1931L9.90428 4.38861ZM5.09572 10.6114L10.9003 4.80685C12.1039 5.41894 13.1272 6.35031 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11C6.65241 11 5.84668 10.8639 5.09572 10.6114Z":"M7.5 11C4.80285 11 2.52952 9.62184 1.09622 7.50001C2.52952 5.37816 4.80285 4 7.5 4C10.1971 4 12.4705 5.37816 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11ZM7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C1.65639 10.2936 4.30786 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C13.3436 4.70638 10.6921 3 7.5 3ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})},P=(0,i.V)((e,{size:r})=>({root:{"--psi-icon-size":(0,l.YC)(r,"psi-icon-size"),"--psi-button-size":(0,l.YC)(r,"psi-button-size")}})),j=(0,g.P9)((e,r)=>{let o=(0,d.Y)("PasswordInput",v,e),{classNames:l,className:i,style:g,styles:x,unstyled:j,vars:f,required:w,error:y,leftSection:C,disabled:S,id:k,variant:D,inputContainer:L,description:z,label:_,size:I,errorProps:V,descriptionProps:E,labelProps:R,withAsterisk:T,inputWrapperOrder:N,wrapperProps:M,radius:Y,rightSection:Z,rightSectionWidth:G,rightSectionPointerEvents:O,leftSectionWidth:W,visible:A,defaultVisible:$,onVisibilityChange:q,visibilityToggleIcon:B,visibilityToggleButtonProps:F,rightSectionProps:U,leftSectionProps:X,leftSectionPointerEvents:K,withErrorStyles:J,mod:H,...Q}=o,ee=(0,n.B)(k),[er,eo]=(0,a.Z)({value:A,defaultValue:$,finalValue:!1,onChange:q}),et=()=>eo(!er),es=(0,u.I)({name:"PasswordInput",classes:b,props:o,className:i,style:g,classNames:l,styles:x,unstyled:j,vars:f,varsResolver:P}),{resolvedClassNames:en,resolvedStyles:ea}=(0,c.Y)({classNames:l,styles:x,props:o}),{styleProps:el,rest:ei}=(0,p.j)(Q),ec=(0,t.jsx)(h.M,{...es("visibilityToggle"),disabled:S,radius:Y,"aria-hidden":!F,tabIndex:-1,...F,variant:F?.variant??"subtle",color:"gray",unstyled:j,onTouchEnd:e=>{e.preventDefault(),F?.onTouchEnd?.(e),et()},onMouseDown:e=>{e.preventDefault(),F?.onMouseDown?.(e),et()},onKeyDown:e=>{F?.onKeyDown?.(e)," "===e.key&&(e.preventDefault(),et())},children:(0,t.jsx)(B,{reveal:er})});return(0,t.jsx)(m.p.Wrapper,{required:w,id:ee,label:_,error:y,description:z,size:I,classNames:en,styles:ea,__staticSelector:"PasswordInput",errorProps:V,descriptionProps:E,unstyled:j,withAsterisk:T,inputWrapperOrder:N,inputContainer:L,variant:D,labelProps:{...R,htmlFor:ee},mod:H,...es("root"),...el,...M,children:(0,t.jsx)(m.p,{component:"div",error:y,leftSection:C,size:I,classNames:{...en,input:(0,s.A)(b.input,en.input)},styles:ea,radius:Y,disabled:S,__staticSelector:"PasswordInput",rightSectionWidth:G,rightSection:Z??ec,variant:D,unstyled:j,leftSectionWidth:W,rightSectionPointerEvents:O||"all",rightSectionProps:U,leftSectionProps:X,leftSectionPointerEvents:K,withAria:!1,withErrorStyles:J,children:(0,t.jsx)("input",{required:w,"data-invalid":!!y||void 0,"data-with-left-section":!!C||void 0,...es("innerInput"),disabled:S,id:ee,ref:r,...ei,autoComplete:ei.autoComplete||"off",type:er?"text":"password"})})})});j.classes={...x.O.classes,...b},j.displayName="@mantine/core/PasswordInput"},44419:(e,r,o)=>{"use strict";o.d(r,{k:()=>k});var t=o(31085);o(14041);var s=o(36456),n=o(29686),a=o(6754),l=o(34056);let[i,c]=(0,o(59852).F)("Progress.Root component was not found in tree");var u={root:"m_db6d6462",section:"m_2242eb65","stripes-animation":"m_81a374bd",label:"m_91e40b74"};let d={},p=(0,a.P9)((e,r)=>{let{classNames:o,className:s,style:a,styles:i,vars:u,...p}=(0,n.Y)("ProgressLabel",d,e),g=c();return(0,t.jsx)(l.a,{ref:r,...g.getStyles("label",{className:s,style:a,classNames:o,styles:i}),...p})});p.classes=u,p.displayName="@mantine/core/ProgressLabel";var g=o(33450),h=o(7098),m=o(69564);let x={},b=(0,h.V)((e,{size:r,radius:o,transitionDuration:t})=>({root:{"--progress-size":(0,g.YC)(r,"progress-size"),"--progress-radius":void 0===o?void 0:(0,g.nJ)(o),"--progress-transition-duration":"number"==typeof t?`${t}ms`:void 0}})),v=(0,a.P9)((e,r)=>{let o=(0,n.Y)("ProgressRoot",x,e),{classNames:s,className:a,style:c,styles:d,unstyled:p,vars:g,autoContrast:h,transitionDuration:v,...P}=o,j=(0,m.I)({name:"Progress",classes:u,props:o,className:a,style:c,classNames:s,styles:d,unstyled:p,vars:g,varsResolver:b});return(0,t.jsx)(i,{value:{getStyles:j,autoContrast:h},children:(0,t.jsx)(l.a,{ref:r,...j("root"),...P})})});v.classes=u,v.displayName="@mantine/core/ProgressRoot";var P=o(51606),j=o(3702),f=o(62554),w=o(92408);let y={withAria:!0},C=(0,a.P9)((e,r)=>{let{classNames:o,className:s,style:a,styles:i,vars:u,value:d,withAria:p,color:g,striped:h,animated:m,mod:x,...b}=(0,n.Y)("ProgressSection",y,e),v=c(),C=(0,w.xd)(),S=p?{role:"progressbar","aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":d,"aria-valuetext":`${d}%`}:{};return(0,t.jsx)(l.a,{ref:r,...v.getStyles("section",{className:s,classNames:o,styles:i,style:a}),...b,...S,mod:[{striped:h||m,animated:m},x],__vars:{"--progress-section-width":`${d}%`,"--progress-section-color":(0,P.r)(g,C),"--progress-label-color":(0,f.v)(v.autoContrast,C)?(0,j.w)({color:g,theme:C,autoContrast:v.autoContrast}):void 0}})});C.classes=u,C.displayName="@mantine/core/ProgressSection";let S={},k=(0,a.P9)((e,r)=>{let o=(0,n.Y)("Progress",S,e),{value:a,classNames:l,styles:i,vars:c,color:u,striped:d,animated:p,"aria-label":g,...h}=o,{resolvedClassNames:m,resolvedStyles:x}=(0,s.Y)({classNames:l,styles:i,props:o});return(0,t.jsx)(v,{ref:r,classNames:m,styles:x,vars:c,...h,children:(0,t.jsx)(C,{value:a,color:u,striped:d,animated:p,"aria-label":g})})});k.classes=u,k.displayName="@mantine/core/Progress",k.Section=C,k.Root=v,k.Label=p}},e=>{var r=r=>e(e.s=r);e.O(0,[67456,39699,68831,90636,46593,38792],()=>r(31917)),_N_E=e.O()}]);