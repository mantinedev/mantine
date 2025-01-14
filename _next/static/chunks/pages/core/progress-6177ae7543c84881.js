(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[32374],{90841:function(e,r,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/progress",function(){return o(62552)}])},62552:function(e,r,o){"use strict";o.r(r),o.d(r,{default:function(){return C}});var t=o(52322),s=o(45392),n=o(45757);let i={type:"configurator",component:function(e){return(0,t.jsx)(n.E,{...e})},code:`
import { Progress } from '@mantine/core';

function Demo() {
  return <Progress{{props}} />;
}
`,centered:!0,maxWidth:400,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"radius",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"size",type:"size",initialValue:"md",libraryValue:"md"},{prop:"value",type:"number",initialValue:50,max:100,min:0,step:10,libraryValue:"__"},{prop:"striped",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"animated",type:"boolean",initialValue:!1,libraryValue:!1}]};var a=o(42407),l=o(893);let c={type:"code",component:function(){return(0,t.jsxs)(n.E.Root,{size:40,children:[(0,t.jsx)(l.u,{label:"Documents – 33Gb",children:(0,t.jsx)(n.E.Section,{value:33,color:"cyan",children:(0,t.jsx)(n.E.Label,{children:"Documents"})})}),(0,t.jsx)(l.u,{label:"Photos – 28Gb",children:(0,t.jsx)(n.E.Section,{value:28,color:"pink",children:(0,t.jsx)(n.E.Label,{children:"Photos"})})}),(0,t.jsx)(l.u,{label:"Other – 15Gb",children:(0,t.jsx)(n.E.Section,{value:15,color:"orange",children:(0,t.jsx)(n.E.Label,{children:"Other"})})})]})},code:`
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
`};var u=o(2784),d=o(39629);let p={type:"code",component:function(){let[e,r]=(0,u.useState)(50);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.E,{value:e,size:"lg",transitionDuration:200}),(0,t.jsx)(d.z,{onClick:()=>r(100*Math.random()),mt:"md",children:"Set random value"})]})},code:`
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
`,centered:!0,maxWidth:400};var g=o(60284),h=o(93010);let m=[{re:/[0-9]/,label:"Includes number"},{re:/[a-z]/,label:"Includes lowercase letter"},{re:/[A-Z]/,label:"Includes uppercase letter"},{re:/[$&+,:;=?@#|'<>.^*()%!-]/,label:"Includes special symbol"}],x={type:"code",component:function(){let[e,r]=(0,u.useState)(""),o=function(e){if(e.length<5)return 10;let r=e.length>5?0:1;return m.forEach(o=>{o.re.test(e)||(r+=1)}),Math.max(100-100/(m.length+1)*r,10)}(e),s=function(e){switch(!0){case e<30:return"red";case e<50:return"orange";case e<70:return"yellow";default:return"teal"}}(o);return(0,t.jsxs)("div",{children:[(0,t.jsx)(g.W,{value:e,onChange:e=>r(e.currentTarget.value),placeholder:"Enter password",label:"Enter password"}),(0,t.jsxs)(h.Z,{grow:!0,gap:5,mt:"xs",children:[(0,t.jsx)(n.E,{size:"xs",color:s,value:e.length>0?100:0,transitionDuration:0}),(0,t.jsx)(n.E,{size:"xs",color:s,transitionDuration:0,value:o<30?0:100}),(0,t.jsx)(n.E,{size:"xs",color:s,transitionDuration:0,value:o<50?0:100}),(0,t.jsx)(n.E,{size:"xs",color:s,transitionDuration:0,value:o<70?0:100})]})]})},code:`
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
`,centered:!0,maxWidth:340,defaultExpanded:!1};var b=o(71506);let v=`
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
`,P={type:"styles-api",data:b.S,component:function(e){return(0,t.jsx)(n.E.Root,{size:"xl",...e,children:(0,t.jsx)(n.E.Section,{value:35,children:(0,t.jsx)(n.E.Label,{children:"Documents"})})})},code:v,centered:!0,maxWidth:400};var j=o(54078),f=o(15019);let w=(0,j.A)(f.us.Progress);function y(e){let r={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components},{Demo:o,StylesApiSelectors:n}=r;return o||S("Demo",!0),n||S("StylesApiSelectors",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(o,{data:i}),"\n",(0,t.jsx)(r.h2,{id:"compound-components",children:"Compound components"}),"\n",(0,t.jsx)(o,{data:a.I}),"\n",(0,t.jsx)(r.h2,{id:"with-tooltips",children:"With tooltips"}),"\n",(0,t.jsx)(o,{data:c}),"\n",(0,t.jsx)(r.h2,{id:"section-width-transition",children:"Section width transition"}),"\n",(0,t.jsxs)(r.p,{children:["Set ",(0,t.jsx)(r.code,{children:"transitionDuration"})," to a number of ms to enable width transition:"]}),"\n",(0,t.jsx)(o,{data:p}),"\n",(0,t.jsx)(r.h2,{id:"example-progress-with-segments",children:"Example: progress with segments"}),"\n",(0,t.jsx)(o,{data:x}),"\n",(0,t.jsx)(n,{component:"Progress"}),"\n",(0,t.jsx)(o,{data:P}),"\n",(0,t.jsx)(r.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["Progress section has ",(0,t.jsx)(r.code,{children:'role="progressbar"'})," attribute"]}),"\n",(0,t.jsxs)(r.li,{children:["Progress section has ",(0,t.jsx)(r.code,{children:"aria-valuenow"})," attribute with current value"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"aria-valuemin"})," and ",(0,t.jsx)(r.code,{children:"aria-valuemax"})," attributes are always set to ",(0,t.jsx)(r.code,{children:"0"})," and ",(0,t.jsx)(r.code,{children:"100"})," as component does not support other values"]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["Set ",(0,t.jsx)(r.code,{children:"aria-label"})," attribute to label progress:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-tsx",children:'import { Progress } from \'@mantine/core\';\n\nfunction Demo() {\n  return <Progress aria-label="Uploading progress" value={10} />;\n}\n\nfunction DemoCompound() {\n  return (\n    <Progress.Root>\n      <Progress.Section aria-label="Uploading progress" value={10} />\n    </Progress.Root>\n  );\n}\n'})})]})}function C(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(w,{...e,children:(0,t.jsx)(y,{...e})})}function S(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},42407:function(e,r,o){"use strict";o.d(r,{I:function(){return n}});var t=o(52322),s=o(45757);let n={type:"code",component:function(){return(0,t.jsxs)(s.E.Root,{size:"xl",children:[(0,t.jsx)(s.E.Section,{value:35,color:"cyan",children:(0,t.jsx)(s.E.Label,{children:"Documents"})}),(0,t.jsx)(s.E.Section,{value:28,color:"pink",children:(0,t.jsx)(s.E.Label,{children:"Photos"})}),(0,t.jsx)(s.E.Section,{value:15,color:"orange",children:(0,t.jsx)(s.E.Label,{children:"Other"})})]})},code:`
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
`}},60284:function(e,r,o){"use strict";o.d(r,{W:function(){return j}});var t=o(52322),s=o(40489),n=o(66178),i=o(9341);o(2784);var a=o(91482),l=o(11200),c=o(51477),u=o(46690),d=o(38483),p=o(97072),g=o(82027),h=o(15981),m=o(89420),x=o(73063),b={root:"m_f61ca620",input:"m_ccf8da4c",innerInput:"m_f2d85dd2",visibilityToggle:"m_b1072d44"};let v={visibilityToggleIcon:({reveal:e})=>(0,t.jsx)("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{width:"var(--psi-icon-size)",height:"var(--psi-icon-size)"},children:(0,t.jsx)("path",{d:e?"M13.3536 2.35355C13.5488 2.15829 13.5488 1.84171 13.3536 1.64645C13.1583 1.45118 12.8417 1.45118 12.6464 1.64645L10.6828 3.61012C9.70652 3.21671 8.63759 3 7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C0.902945 9.08812 2.02314 10.1861 3.36061 10.9323L1.64645 12.6464C1.45118 12.8417 1.45118 13.1583 1.64645 13.3536C1.84171 13.5488 2.15829 13.5488 2.35355 13.3536L4.31723 11.3899C5.29348 11.7833 6.36241 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C14.0971 5.9119 12.9769 4.81391 11.6394 4.06771L13.3536 2.35355ZM9.90428 4.38861C9.15332 4.1361 8.34759 4 7.5 4C4.80285 4 2.52952 5.37816 1.09622 7.50001C1.87284 8.6497 2.89609 9.58106 4.09974 10.1931L9.90428 4.38861ZM5.09572 10.6114L10.9003 4.80685C12.1039 5.41894 13.1272 6.35031 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11C6.65241 11 5.84668 10.8639 5.09572 10.6114Z":"M7.5 11C4.80285 11 2.52952 9.62184 1.09622 7.50001C2.52952 5.37816 4.80285 4 7.5 4C10.1971 4 12.4705 5.37816 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11ZM7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C1.65639 10.2936 4.30786 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C13.3436 4.70638 10.6921 3 7.5 3ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})},P=(0,l.Z)((e,{size:r})=>({root:{"--psi-icon-size":(0,a.ap)(r,"psi-icon-size"),"--psi-button-size":(0,a.ap)(r,"psi-button-size")}})),j=(0,g.d5)((e,r)=>{let o=(0,d.w)("PasswordInput",v,e),{classNames:a,className:l,style:g,styles:x,unstyled:j,vars:f,required:w,error:y,leftSection:C,disabled:S,id:E,variant:D,inputContainer:z,description:L,label:_,size:I,errorProps:R,descriptionProps:V,labelProps:T,withAsterisk:M,inputWrapperOrder:N,wrapperProps:Z,radius:k,rightSection:G,rightSectionWidth:A,rightSectionPointerEvents:O,leftSectionWidth:W,visible:q,defaultVisible:$,onVisibilityChange:B,visibilityToggleIcon:F,visibilityToggleButtonProps:U,rightSectionProps:K,leftSectionProps:X,leftSectionPointerEvents:H,withErrorStyles:J,mod:Q,...Y}=o,ee=(0,n.M)(E),[er,eo]=(0,i.C)({value:q,defaultValue:$,finalValue:!1,onChange:B}),et=()=>eo(!er),es=(0,u.y)({name:"PasswordInput",classes:b,props:o,className:l,style:g,classNames:a,styles:x,unstyled:j,vars:f,varsResolver:P}),{resolvedClassNames:en,resolvedStyles:ei}=(0,c.h)({classNames:a,styles:x,props:o}),{styleProps:ea,rest:el}=(0,p.c)(Y),ec=(0,t.jsx)(h.A,{...es("visibilityToggle"),disabled:S,radius:k,"aria-hidden":!U,tabIndex:-1,...U,variant:U?.variant??"subtle",color:"gray",unstyled:j,onTouchEnd:e=>{e.preventDefault(),U?.onTouchEnd?.(e),et()},onMouseDown:e=>{e.preventDefault(),U?.onMouseDown?.(e),et()},onKeyDown:e=>{U?.onKeyDown?.(e)," "===e.key&&(e.preventDefault(),et())},children:(0,t.jsx)(F,{reveal:er})});return(0,t.jsx)(m.I.Wrapper,{required:w,id:ee,label:_,error:y,description:L,size:I,classNames:en,styles:ei,__staticSelector:"PasswordInput",errorProps:R,descriptionProps:V,unstyled:j,withAsterisk:M,inputWrapperOrder:N,inputContainer:z,variant:D,labelProps:{...T,htmlFor:ee},mod:Q,...es("root"),...ea,...Z,children:(0,t.jsx)(m.I,{component:"div",error:y,leftSection:C,size:I,classNames:{...en,input:(0,s.Z)(b.input,en.input)},styles:ei,radius:k,disabled:S,__staticSelector:"PasswordInput",rightSectionWidth:A,rightSection:G??ec,variant:D,unstyled:j,leftSectionWidth:W,rightSectionPointerEvents:O||"all",rightSectionProps:K,leftSectionProps:X,leftSectionPointerEvents:H,withAria:!1,withErrorStyles:J,children:(0,t.jsx)("input",{required:w,"data-invalid":!!y||void 0,"data-with-left-section":!!C||void 0,...es("innerInput"),disabled:S,id:ee,ref:r,...el,autoComplete:el.autoComplete||"off",type:er?"text":"password"})})})});j.classes={...x.M.classes,...b},j.displayName="@mantine/core/PasswordInput"},45757:function(e,r,o){"use strict";o.d(r,{E:function(){return E}});var t=o(52322);o(2784);var s=o(51477),n=o(38483),i=o(82027),a=o(28559);let[l,c]=(0,o(89106).R)("Progress.Root component was not found in tree");var u={root:"m_db6d6462",section:"m_2242eb65","stripes-animation":"m_81a374bd",label:"m_91e40b74"};let d={},p=(0,i.d5)((e,r)=>{let{classNames:o,className:s,style:i,styles:l,vars:u,...p}=(0,n.w)("ProgressLabel",d,e),g=c();return(0,t.jsx)(a.x,{ref:r,...g.getStyles("label",{className:s,style:i,classNames:o,styles:l}),...p})});p.classes=u,p.displayName="@mantine/core/ProgressLabel";var g=o(91482),h=o(11200),m=o(46690);let x={},b=(0,h.Z)((e,{size:r,radius:o,transitionDuration:t})=>({root:{"--progress-size":(0,g.ap)(r,"progress-size"),"--progress-radius":void 0===o?void 0:(0,g.H5)(o),"--progress-transition-duration":"number"==typeof t?`${t}ms`:void 0}})),v=(0,i.d5)((e,r)=>{let o=(0,n.w)("ProgressRoot",x,e),{classNames:s,className:i,style:c,styles:d,unstyled:p,vars:g,autoContrast:h,transitionDuration:v,...P}=o,j=(0,m.y)({name:"Progress",classes:u,props:o,className:i,style:c,classNames:s,styles:d,unstyled:p,vars:g,varsResolver:b});return(0,t.jsx)(l,{value:{getStyles:j,autoContrast:h},children:(0,t.jsx)(a.x,{ref:r,...j("root"),...P})})});v.classes=u,v.displayName="@mantine/core/ProgressRoot";var P=o(13588),j=o(39568),f=o(90006),w=o(68755);let y={withAria:!0},C=(0,i.d5)((e,r)=>{let{classNames:o,className:s,style:i,styles:l,vars:u,value:d,withAria:p,color:g,striped:h,animated:m,mod:x,...b}=(0,n.w)("ProgressSection",y,e),v=c(),C=(0,w.rZ)(),S=p?{role:"progressbar","aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":d,"aria-valuetext":`${d}%`}:{};return(0,t.jsx)(a.x,{ref:r,...v.getStyles("section",{className:s,classNames:o,styles:l,style:i}),...b,...S,mod:[{striped:h||m,animated:m},x],__vars:{"--progress-section-width":`${d}%`,"--progress-section-color":(0,P.p)(g,C),"--progress-label-color":(0,f.o)(v.autoContrast,C)?(0,j.R)({color:g,theme:C,autoContrast:v.autoContrast}):void 0}})});C.classes=u,C.displayName="@mantine/core/ProgressSection";let S={},E=(0,i.d5)((e,r)=>{let o=(0,n.w)("Progress",S,e),{value:i,classNames:a,styles:l,vars:c,color:u,striped:d,animated:p,"aria-label":g,...h}=o,{resolvedClassNames:m,resolvedStyles:x}=(0,s.h)({classNames:a,styles:l,props:o});return(0,t.jsx)(v,{ref:r,classNames:m,styles:x,vars:c,...h,children:(0,t.jsx)(C,{value:i,color:u,striped:d,animated:p,"aria-label":g})})});E.classes=u,E.displayName="@mantine/core/Progress",E.Section=C,E.Root=v,E.Label=p}},function(e){e.O(0,[61177,66748,61639,92888,49774,40179],function(){return e(e.s=90841)}),_N_E=e.O()}]);