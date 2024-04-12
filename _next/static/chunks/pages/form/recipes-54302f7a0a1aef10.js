(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[59517],{42464:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/form/recipes",function(){return o(87831)}])},87831:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return V}});var n=o(52322),r=o(45392),a=o(2784),l=o(74770),i=o(56159),s=o(59259);let m=`
import { useEffect } from 'react';
import { useForm } from '@mantine/form';
import { TextInput, Checkbox } from '@mantine/core';

interface FormValues {
  email: string;
  terms: boolean;
}

function loadInitialValues(): Promise<FormValues> {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ email: 'test@email', terms: true }), 2000);
  });
}

function Demo() {
  const form = useForm<FormValues>({
    mode: 'uncontrolled',
    initialValues: { email: '', terms: false },
  });

  useEffect(() => {
    loadInitialValues().then((values) => {
      form.setValues(values);
      form.resetDirty(values);
    });
  }, []);

  return (
    <form onSubmit={form.onSubmit(console.log)}>
      <TextInput label="Email" placeholder="Email" {...form.getInputProps('email')} />
      <Checkbox
        mt="sm"
        label="I accept terms and conditions"
        {...form.getInputProps('terms', { type: 'checkbox' })}
      />
    </form>
  );
}
`,p={type:"code",component:function(){let e=(0,s.c)({mode:"uncontrolled",initialValues:{email:"",terms:!1}});return(0,a.useEffect)(()=>{new Promise(e=>{setTimeout(()=>e({email:"test@email",terms:!0}),2e3)}).then(t=>{e.setValues(t),e.resetDirty(t)})},[]),a.createElement("form",{onSubmit:e.onSubmit(console.log)},a.createElement(l.o,{label:"Email",placeholder:"Email",...e.getInputProps("email")}),a.createElement(i.X,{mt:"sm",label:"I accept terms and conditions",...e.getInputProps("terms",{type:"checkbox"})}))},code:m,centered:!0,maxWidth:340};var c=o(28559);let d=`
import { useEffect } from 'react';
import { useForm } from '@mantine/form';
import { TextInput, Box } from '@mantine/core';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { name: '', occupation: '' },
    onValuesChange: (values) => {
      window.localStorage.setItem('user-form', JSON.stringify(values));
    },
  });

  useEffect(() => {
    const storedValue = window.localStorage.getItem('user-form');
    if (storedValue) {
      try {
        form.setValues(JSON.parse(window.localStorage.getItem('user-form')!));
      } catch (e) {
        console.log('Failed to parse stored value');
      }
    }
  }, []);

  return (
    <Box maw={340} mx="auto">
      <TextInput label="Name" placeholder="Name" {...form.getInputProps('name')} />
      <TextInput
        mt="md"
        label="Occupation"
        placeholder="Occupation"
        {...form.getInputProps('occupation')}
      />
    </Box>
  );
}
`,u={type:"code",component:function(){let e=(0,s.c)({mode:"uncontrolled",initialValues:{name:"",occupation:""},onValuesChange:e=>{window.localStorage.setItem("user-form",JSON.stringify(e))}});return(0,a.useEffect)(()=>{let t=window.localStorage.getItem("user-form");if(t)try{e.setValues(JSON.parse(window.localStorage.getItem("user-form")))}catch(e){console.log("Failed to parse stored value")}},[]),a.createElement(c.x,{maw:340,mx:"auto"},a.createElement(l.o,{label:"Name",placeholder:"Name",...e.getInputProps("name")}),a.createElement(l.o,{mt:"md",label:"Occupation",placeholder:"Occupation",...e.getInputProps("occupation")}))},code:d};var f=o(94756),v=o(17789),g=o(93010),h=o(16438),b=o(17115),y=o(73533);let I=`
import { Group, TextInput, Button, Center } from '@mantine/core';
import { useForm } from '@mantine/form';
import { randomId } from '@mantine/hooks';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { IconGripVertical } from '@tabler/icons-react';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      employees: [
        { name: 'John Doe', email: 'john@mantine.dev', key: randomId() },
        { name: 'Bill Love', email: 'bill@mantine.dev', key: randomId() },
        { name: 'Nancy Eagle', email: 'nanacy@mantine.dev', key: randomId() },
        { name: 'Lim Notch', email: 'lim@mantine.dev', key: randomId() },
        { name: 'Susan Seven', email: 'susan@mantine.dev', key: randomId() },
      ],
    },
  });

  const fields = form.getValues().employees.map((item, index) => (
    <Draggable key={item.key} index={index} draggableId={item.key}>
      {(provided) => (
        <Group ref={provided.innerRef} mt="xs" {...provided.draggableProps}>
          <Center {...provided.dragHandleProps}>
            <IconGripVertical size="1.2rem" />
          </Center>
          <TextInput placeholder="John Doe" {...form.getInputProps(\`employees.\${index}.name\`)} />
          <TextInput
            placeholder="example@mail.com"
            {...form.getInputProps(\`employees.\${index}.email\`)}
          />
        </Group>
      )}
    </Draggable>
  ));

  return (
    <div>
      <DragDropContext
        onDragEnd={({ destination, source }) =>
          destination?.index !== undefined && form.reorderListItem('employees', { from: source.index, to: destination.index })
        }
      >
        <Droppable droppableId="dnd-list" direction="vertical">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {fields}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <Group justify="center" mt="md">
        <Button onClick={() => form.insertListItem('employees', { name: '', email: '', key: randomId() })}>
          Add employee
        </Button>
      </Group>
    </div>
  );
}
`,S={type:"code",component:function(){let e=(0,s.c)({mode:"uncontrolled",initialValues:{employees:[{name:"John Doe",email:"john@mantine.dev",key:(0,y.k)()},{name:"Bill Love",email:"bill@mantine.dev",key:(0,y.k)()},{name:"Nancy Eagle",email:"nanacy@mantine.dev",key:(0,y.k)()},{name:"Lim Notch",email:"lim@mantine.dev",key:(0,y.k)()},{name:"Susan Seven",email:"susan@mantine.dev",key:(0,y.k)()}]}}),t=e.getValues().employees.map((t,o)=>a.createElement(f._l,{key:t.key,index:o,draggableId:t.key},t=>a.createElement(g.Z,{ref:t.innerRef,mt:"xs",...t.draggableProps},a.createElement(h.M,{...t.dragHandleProps},a.createElement(v.Z,{size:"1.2rem"})),a.createElement(l.o,{placeholder:"John Doe",...e.getInputProps(`employees.${o}.name`)}),a.createElement(l.o,{placeholder:"example@mail.com",...e.getInputProps(`employees.${o}.email`)}))));return a.createElement("div",null,a.createElement(f.Z5,{onDragEnd:({destination:t,source:o})=>t?.index!==void 0&&e.reorderListItem("employees",{from:o.index,to:t?.index})},a.createElement(f.bK,{droppableId:"dnd-list",direction:"vertical"},e=>a.createElement("div",{...e.droppableProps,ref:e.innerRef},t,e.placeholder))),a.createElement(g.Z,{justify:"center",mt:"md"},a.createElement(b.z,{onClick:()=>e.insertListItem("employees",{name:"",email:"",key:(0,y.k)()})},"Add employee")))},code:I,centered:!0,maxWidth:440};var E=o(6403),C=o(60284),w=o(45909);let x=`
import { useState } from 'react';
import { Stepper, Button, Group, TextInput, PasswordInput, Code } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const [active, setActive] = useState(0);

  const form = useForm({
    initialValues: {
      username: '',
      password: '',
      name: '',
      email: '',
      website: '',
      github: '',
    },

    validate: (values) => {
      if (active === 0) {
        return {
          username:
            values.username.trim().length < 6
              ? 'Username must include at least 6 characters'
              : null,
          password:
            values.password.length < 6 ? 'Password must include at least 6 characters' : null,
        };
      }

      if (active === 1) {
        return {
          name: values.name.trim().length < 2 ? 'Name must include at least 2 characters' : null,
          email: /^\\S+@\\S+$/.test(values.email) ? null : 'Invalid email',
        };
      }

      return {};
    },
  });

  const nextStep = () =>
    setActive((current) => {
      if (form.validate().hasErrors) {
        return current;
      }
      return current < 3 ? current + 1 : current;
    });

  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <>
      <Stepper active={active}>
        <Stepper.Step label="First step" description="Profile settings">
          <TextInput label="Username" placeholder="Username" {...form.getInputProps('username')} />
          <PasswordInput
            mt="md"
            label="Password"
            placeholder="Password"
            {...form.getInputProps('password')}
          />
        </Stepper.Step>

        <Stepper.Step label="Second step" description="Personal information">
          <TextInput label="Name" placeholder="Name" {...form.getInputProps('name')} />
          <TextInput mt="md" label="Email" placeholder="Email" {...form.getInputProps('email')} />
        </Stepper.Step>

        <Stepper.Step label="Final step" description="Social media">
          <TextInput label="Website" placeholder="Website" {...form.getInputProps('website')} />
          <TextInput
            mt="md"
            label="GitHub"
            placeholder="GitHub"
            {...form.getInputProps('github')}
          />
        </Stepper.Step>
        <Stepper.Completed>
          Completed! Form values:
          <Code block mt="xl">
            {JSON.stringify(form.getValues(), null, 2)}
          </Code>
        </Stepper.Completed>
      </Stepper>

      <Group justify="flex-end" mt="xl">
        {active !== 0 && (
          <Button variant="default" onClick={prevStep}>
            Back
          </Button>
        )}
        {active !== 3 && <Button onClick={nextStep}>Next step</Button>}
      </Group>
    </>
  );
}
`,P={type:"code",component:function(){let[e,t]=(0,a.useState)(0),o=(0,s.c)({mode:"uncontrolled",initialValues:{username:"",password:"",name:"",email:"",website:"",github:""},validate:t=>0===e?{username:t.username.trim().length<6?"Username must include at least 6 characters":null,password:t.password.length<6?"Password must include at least 6 characters":null}:1===e?{name:t.name.trim().length<2?"Name must include at least 2 characters":null,email:/^\S+@\S+$/.test(t.email)?null:"Invalid email"}:{}});return a.createElement(a.Fragment,null,a.createElement(E.v,{active:e},a.createElement(E.v.Step,{label:"First step",description:"Profile settings"},a.createElement(l.o,{label:"Username",placeholder:"Username",...o.getInputProps("username")}),a.createElement(C.W,{mt:"md",label:"Password",placeholder:"Password",...o.getInputProps("password")})),a.createElement(E.v.Step,{label:"Second step",description:"Personal information"},a.createElement(l.o,{label:"Name",placeholder:"Name",...o.getInputProps("name")}),a.createElement(l.o,{mt:"md",label:"Email",placeholder:"Email",...o.getInputProps("email")})),a.createElement(E.v.Step,{label:"Final step",description:"Social media"},a.createElement(l.o,{label:"Website",placeholder:"Website",...o.getInputProps("website")}),a.createElement(l.o,{mt:"md",label:"GitHub",placeholder:"GitHub",...o.getInputProps("github")})),a.createElement(E.v.Completed,null,"Completed! Form values:",a.createElement(w.E,{block:!0,mt:"xl"},JSON.stringify(o.getValues(),null,2)))),a.createElement(g.Z,{justify:"flex-end",mt:"xl"},0!==e&&a.createElement(b.z,{variant:"default",onClick:()=>t(e=>e>0?e-1:e)},"Back"),3!==e&&a.createElement(b.z,{onClick:()=>t(e=>o.validate().hasErrors?e:e<3?e+1:e)},"Next step")))},code:x};var k=o(79016),_=o(33638);let N=(0,k.A)(_.us.formRecipes);function D(e){let t={h2:"h2",...(0,r.a)(),...e.components},{Demo:o}=t;return o||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"set-initial-values-with-async-request",children:"Set initial values with async request"}),"\n",(0,n.jsx)(o,{data:p}),"\n",(0,n.jsx)(t.h2,{id:"save-form-values-to-local-storage",children:"Save form values to local storage"}),"\n",(0,n.jsx)(o,{data:u}),"\n",(0,n.jsx)(t.h2,{id:"list-items-reordering",children:"List items reordering"}),"\n",(0,n.jsx)(o,{data:S}),"\n",(0,n.jsx)(t.h2,{id:"form-with-multiple-steps",children:"Form with multiple steps"}),"\n",(0,n.jsx)(o,{data:P})]})}function V(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(N,{...e,children:(0,n.jsx)(D,{...e})})}},16438:function(e,t,o){"use strict";o.d(t,{M:function(){return p}});var n=o(2784),r=o(38483),a=o(62378),l=o(28559),i=o(33502),s={root:"m_4451eb3a"};let m={},p=(0,i.b)((e,t)=>{let o=(0,r.w)("Center",m,e),{classNames:i,className:p,style:c,styles:d,unstyled:u,vars:f,inline:v,mod:g,...h}=o,b=(0,a.y)({name:"Center",props:o,classes:s,className:p,style:c,classNames:i,styles:d,unstyled:u,vars:f});return n.createElement(l.x,{ref:t,mod:[{inline:v},g],...b("root"),...h})});p.classes=s,p.displayName="@mantine/core/Center"},60284:function(e,t,o){"use strict";o.d(t,{W:function(){return I}});var n=o(2784),r=o(40489),a=o(66178),l=o(9341),i=o(91482),s=o(11200),m=o(51477),p=o(62378),c=o(38483),d=o(97072),u=o(82027),f=o(54813),v=o(6941),g=o(73063),h={root:"m_f61ca620",input:"m_ccf8da4c",innerInput:"m_f2d85dd2",visibilityToggle:"m_b1072d44"};let b={visibilityToggleIcon:({reveal:e})=>n.createElement("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{width:"var(--psi-icon-size)",height:"var(--psi-icon-size)"}},n.createElement("path",{d:e?"M13.3536 2.35355C13.5488 2.15829 13.5488 1.84171 13.3536 1.64645C13.1583 1.45118 12.8417 1.45118 12.6464 1.64645L10.6828 3.61012C9.70652 3.21671 8.63759 3 7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C0.902945 9.08812 2.02314 10.1861 3.36061 10.9323L1.64645 12.6464C1.45118 12.8417 1.45118 13.1583 1.64645 13.3536C1.84171 13.5488 2.15829 13.5488 2.35355 13.3536L4.31723 11.3899C5.29348 11.7833 6.36241 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C14.0971 5.9119 12.9769 4.81391 11.6394 4.06771L13.3536 2.35355ZM9.90428 4.38861C9.15332 4.1361 8.34759 4 7.5 4C4.80285 4 2.52952 5.37816 1.09622 7.50001C1.87284 8.6497 2.89609 9.58106 4.09974 10.1931L9.90428 4.38861ZM5.09572 10.6114L10.9003 4.80685C12.1039 5.41894 13.1272 6.35031 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11C6.65241 11 5.84668 10.8639 5.09572 10.6114Z":"M7.5 11C4.80285 11 2.52952 9.62184 1.09622 7.50001C2.52952 5.37816 4.80285 4 7.5 4C10.1971 4 12.4705 5.37816 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11ZM7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C1.65639 10.2936 4.30786 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C13.3436 4.70638 10.6921 3 7.5 3ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))},y=(0,s.Z)((e,{size:t})=>({root:{"--psi-icon-size":(0,i.ap)(t,"psi-icon-size"),"--psi-button-size":(0,i.ap)(t,"psi-button-size")}})),I=(0,u.d)((e,t)=>{let o=(0,c.w)("PasswordInput",b,e),{classNames:i,className:s,style:u,styles:g,unstyled:I,vars:S,required:E,error:C,leftSection:w,disabled:x,id:P,variant:k,inputContainer:_,description:N,label:D,size:V,errorProps:F,descriptionProps:z,labelProps:T,withAsterisk:L,inputWrapperOrder:j,wrapperProps:B,radius:G,rightSection:Z,rightSectionWidth:M,rightSectionPointerEvents:O,leftSectionWidth:W,visible:J,defaultVisible:A,onVisibilityChange:R,visibilityToggleIcon:H,visibilityToggleButtonProps:$,rightSectionProps:U,leftSectionProps:K,leftSectionPointerEvents:X,mod:q,...Q}=o,Y=(0,a.M)(P),[ee,et]=(0,l.C)({value:J,defaultValue:A,finalValue:!1,onChange:R}),eo=()=>et(!ee),en=(0,p.y)({name:"PasswordInput",classes:h,props:o,className:s,style:u,classNames:i,styles:g,unstyled:I,vars:S,varsResolver:y}),{resolvedClassNames:er,resolvedStyles:ea}=(0,m.h)({classNames:i,styles:g,props:o}),{styleProps:el,rest:ei}=(0,d.c)(Q),es=n.createElement(f.A,{...en("visibilityToggle"),disabled:x,radius:G,"aria-hidden":!$,tabIndex:-1,...$,variant:"subtle",color:"gray",unstyled:I,onMouseDown:e=>{e.preventDefault(),$?.onMouseDown?.(e),eo()},onKeyDown:e=>{$?.onKeyDown?.(e)," "===e.key&&(e.preventDefault(),eo())}},n.createElement(H,{reveal:ee}));return n.createElement(v.I.Wrapper,{required:E,id:Y,label:D,error:C,description:N,size:V,classNames:er,styles:ea,__staticSelector:"PasswordInput",errorProps:F,descriptionProps:z,unstyled:I,withAsterisk:L,inputWrapperOrder:j,inputContainer:_,variant:k,labelProps:{...T,htmlFor:Y},mod:q,...en("root"),...el,...B},n.createElement(v.I,{component:"div",error:C,leftSection:w,size:V,classNames:{...er,input:(0,r.Z)(h.input,er.input)},styles:ea,radius:G,disabled:x,__staticSelector:"PasswordInput",rightSectionWidth:M,rightSection:Z??es,variant:k,unstyled:I,leftSectionWidth:W,rightSectionPointerEvents:O||"all",rightSectionProps:U,leftSectionProps:K,leftSectionPointerEvents:X,withAria:!1},n.createElement("input",{required:E,"data-invalid":!!C||void 0,"data-with-left-section":!!w||void 0,...en("innerInput"),disabled:x,id:Y,ref:t,...ei,autoComplete:ei.autoComplete||"off",type:ee?"text":"password"})))});I.classes={...g.M.classes,...h},I.displayName="@mantine/core/PasswordInput"},6403:function(e,t,o){"use strict";o.d(t,{v:function(){return N}});var n=o(2784),r=o(58898),a=o(91482),l=o(11200),i=o(13588),s=o(39568),m=o(90006),p=o(38483),c=o(62378),d=o(28559),u=o(82027),f=o(89106);let[v,g]=(0,f.R)("Stepper component was not found in tree"),h=()=>null;h.displayName="@mantine/core/StepperCompleted";var b=o(68755),y=o(40284),I=o(12491),S=o(96321),E=o(63409),C={root:"m_cbb4ea7e",steps:"m_aaf89d0b",separator:"m_2a371ac9",content:"m_78da155d",step:"m_cbb57068","step--horizontal":"m_f56b1e2c","step--vertical":"m_833edb7e",verticalSeparator:"m_6496b3f3",stepWrapper:"m_818e70b",stepIcon:"m_1959ad01",stepCompletedIcon:"m_a79331dc",stepBody:"m_1956aa2a",stepLabel:"m_12051f6c",stepDescription:"m_164eea74"};let w=(e,t)=>"function"==typeof e?n.createElement(e,{step:t||0}):e,x={withIcon:!0,allowStepClick:!0,iconPosition:"left"},P=(0,u.d)((e,t)=>{let{classNames:o,className:r,style:a,styles:l,vars:s,step:m,state:c,color:d,icon:u,completedIcon:f,progressIcon:v,label:h,description:C,withIcon:P,iconSize:k,loading:_,allowStepClick:N,allowStepSelect:D,iconPosition:V,orientation:F,mod:z,...T}=(0,p.w)("StepperStep",x,e),L=g(),j=(0,b.rZ)(),B={classNames:o,styles:l},G="stepCompleted"===c?null:"stepProgress"===c?v:u,Z={"data-progress":"stepProgress"===c||void 0,"data-completed":"stepCompleted"===c||void 0};return n.createElement(E.k,{...L.getStyles("step",{className:r,style:a,variant:L.orientation,...B}),mod:[{"icon-position":V||L.iconPosition,"allow-click":N},z],ref:t,...Z,...T,__vars:{"--step-color":d?(0,i.p)(d,j):void 0},tabIndex:N?0:-1},P&&n.createElement("span",{...L.getStyles("stepWrapper",B)},n.createElement("span",{...L.getStyles("stepIcon",B),...Z},n.createElement(S.u,{mounted:"stepCompleted"===c,transition:"pop",duration:200},e=>n.createElement("span",{...L.getStyles("stepCompletedIcon",{style:e,...B})},_?n.createElement(I.a,{color:"var(--mantine-color-white)",size:"calc(var(--stepper-icon-size) / 2)",...L.getStyles("stepLoader",B)}):w(f,m)||n.createElement(y.n,{size:"60%"}))),"stepCompleted"!==c?_?n.createElement(I.a,{...L.getStyles("stepLoader",B),size:"calc(var(--stepper-icon-size) / 2)",color:d}):w(G||u,m):null),"vertical"===F&&n.createElement("span",{...L.getStyles("verticalSeparator",B),"data-active":"stepCompleted"===c||void 0})),(h||C)&&n.createElement("span",{...L.getStyles("stepBody",B),"data-orientation":L.orientation,"data-icon-position":V||L.iconPosition},h&&n.createElement("span",{...L.getStyles("stepLabel",B)},w(h,m)),C&&n.createElement("span",{...L.getStyles("stepDescription",B)},w(C,m))))});P.classes=C,P.displayName="@mantine/core/StepperStep";let k={orientation:"horizontal",iconPosition:"left",allowNextStepsSelect:!0,wrap:!0},_=(0,l.Z)((e,{color:t,iconSize:o,size:n,contentPadding:l,radius:p,autoContrast:c})=>({root:{"--stepper-color":t?(0,i.p)(t,e):void 0,"--stepper-icon-color":(0,m.o)(c,e)?(0,s.R)({color:t,theme:e}):void 0,"--stepper-icon-size":void 0===o?(0,a.ap)(n,"stepper-icon-size"):(0,r.h)(o),"--stepper-content-padding":(0,a.bG)(l),"--stepper-radius":void 0===p?void 0:(0,a.H5)(p),"--stepper-fz":(0,a.yv)(n),"--stepper-spacing":(0,a.bG)(n)}})),N=(0,u.d)((e,t)=>{let o=(0,p.w)("Stepper",k,e),{classNames:r,className:a,style:l,styles:i,unstyled:s,vars:m,children:u,onStepClick:f,active:g,icon:b,completedIcon:y,progressIcon:I,color:S,iconSize:E,contentPadding:w,orientation:x,iconPosition:P,size:N,radius:D,allowNextStepsSelect:V,wrap:F,...z}=o,T=(0,c.y)({name:"Stepper",classes:C,props:o,className:a,style:l,classNames:r,styles:i,unstyled:s,vars:m,varsResolver:_}),L=n.Children.toArray(u),j=L.filter(e=>e.type!==h),B=L.find(e=>e.type===h),G=j.reduce((e,t,o)=>{let r=g===o?"stepProgress":g>o?"stepCompleted":"stepInactive",a="function"==typeof f&&("boolean"==typeof t.props.allowStepSelect?t.props.allowStepSelect:"stepCompleted"===r||V);return e.push((0,n.cloneElement)(t,{icon:t.props.icon||b||o+1,key:o,step:o,state:r,onClick:()=>a&&f?.(o),allowStepClick:a,completedIcon:t.props.completedIcon||y,progressIcon:t.props.progressIcon||I,color:t.props.color||S,iconSize:E,radius:D,iconPosition:t.props.iconPosition||P,orientation:x,unstyled:s})),"horizontal"===x&&o!==j.length-1&&e.push(n.createElement("div",{...T("separator"),"data-active":o<g||void 0,"data-orientation":x,key:`separator-${o}`})),e},[]),Z=j[g]?.props?.children,M=B?.props?.children,O=g>j.length-1?M:Z;return n.createElement(v,{value:{getStyles:T,orientation:x,iconPosition:P}},n.createElement(d.x,{...T("root"),ref:t,size:N,...z},n.createElement(d.x,{...T("steps"),mod:{orientation:x,"icon-position":P,wrap:F&&"vertical"!==x}},G),O&&n.createElement("div",{...T("content")},O)))});N.classes=C,N.displayName="@mantine/core/Stepper",N.Completed=h,N.Step=P}},function(e){e.O(0,[4185,57938,70759,17454,47747,59259,49774,92888,40179],function(){return e(e.s=42464)}),_N_E=e.O()}]);