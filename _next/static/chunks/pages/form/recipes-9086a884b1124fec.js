(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9517],{94258:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/form/recipes",function(){return o(7023)}])},7023:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return F}});var a=o(24246),r=o(71670),n=o(3916),l=o(30289),s=o(27378),i=o(56926),m=o(56589),p=o(7033),c=o(94193);let d=`
import { useEffect } from 'react';
import { useForm } from '@mantine/form';
import { TextInput, Checkbox, Box } from '@mantine/core';

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
  const form = useForm<FormValues>({ initialValues: { email: '', terms: false } });

  useEffect(() => {
    loadInitialValues().then((values) => {
      form.setValues(values);
      form.resetDirty(values);
    });
  }, []);

  return (
    <Box maw={320} mx="auto">
      <TextInput label="Email" placeholder="Email" {...form.getInputProps('email')} />
      <Checkbox
        mt="sm"
        label="I accept terms and conditions"
        {...form.getInputProps('terms', { type: 'checkbox' })}
      />
    </Box>
  );
}
`,u={type:"code",component:function(){let e=(0,i.c)({initialValues:{email:"",terms:!1}});return(0,s.useEffect)(()=>{new Promise(e=>{setTimeout(()=>e({email:"test@email",terms:!0}),2e3)}).then(t=>{e.setValues(t),e.resetDirty(t)})},[]),s.createElement(m.x,{maw:340,mx:"auto"},s.createElement(p.o,{label:"Email",placeholder:"Email",...e.getInputProps("email")}),s.createElement(c.X,{mt:"sm",label:"I accept terms and conditions",...e.getInputProps("terms",{type:"checkbox"})}))},code:d},f=`
import { useEffect } from 'react';
import { useForm } from '@mantine/form';
import { TextInput, Box } from '@mantine/core';

function Demo() {
  const form = useForm({ initialValues: { name: '', occupation: '' } });

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

  useEffect(() => {
    window.localStorage.setItem('user-form', JSON.stringify(form.values));
  }, [form.values]);

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
`,v={type:"code",component:function(){let e=(0,i.c)({initialValues:{name:"",occupation:""}});return(0,s.useEffect)(()=>{let t=window.localStorage.getItem("user-form");if(t)try{e.setValues(JSON.parse(window.localStorage.getItem("user-form")))}catch(e){console.log("Failed to parse stored value")}},[]),(0,s.useEffect)(()=>{window.localStorage.setItem("user-form",JSON.stringify(e.values))},[e.values]),s.createElement(m.x,{maw:340,mx:"auto"},s.createElement(p.o,{label:"Name",placeholder:"Name",...e.getInputProps("name")}),s.createElement(p.o,{mt:"md",label:"Occupation",placeholder:"Occupation",...e.getInputProps("occupation")}))},code:f};var g=o(22971),h=o(62150),b=o(8671),Text=o(26569),E=o(94998),x=o(54533),S=o(41428);let w=`
import { Group, TextInput, Box, Text, Code, Button, Center } from '@mantine/core';
import { useForm } from '@mantine/form';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { IconGripVertical } from '@tabler/icons-react';

function Demo() {
  const form = useForm({
    initialValues: {
      employees: [
        { name: 'John Doe', email: 'john@mantine.dev' },
        { name: 'Bill Love', email: 'bill@mantine.dev' },
        { name: 'Nancy Eagle', email: 'nanacy@mantine.dev' },
        { name: 'Lim Notch', email: 'lim@mantine.dev' },
        { name: 'Susan Seven', email: 'susan@mantine.dev' },
      ],
    },
  });

  const fields = form.values.employees.map((_, index) => (
    <Draggable key={index} index={index} draggableId={index.toString()}>
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
    <Box maw={500} mx="auto">
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
        <Button onClick={() => form.insertListItem('employees', { name: '', email: '' })}>
          Add employee
        </Button>
      </Group>

      <Text size="sm" fw={500} mt="md">
        Form values:
      </Text>
      <Code block>{JSON.stringify(form.values, null, 2)}</Code>
    </Box>
  );
}
`,y={type:"code",component:function(){let e=(0,i.c)({initialValues:{employees:[{name:"John Doe",email:"john@mantine.dev"},{name:"Bill Love",email:"bill@mantine.dev"},{name:"Nancy Eagle",email:"nanacy@mantine.dev"},{name:"Lim Notch",email:"lim@mantine.dev"},{name:"Susan Seven",email:"susan@mantine.dev"}]}}),t=e.values.employees.map((t,o)=>s.createElement(x._l,{key:o,index:o,draggableId:o.toString()},t=>s.createElement(g.Z,{ref:t.innerRef,mt:"xs",...t.draggableProps},s.createElement(h.M,{...t.dragHandleProps},s.createElement(S.Z,{size:"1.2rem"})),s.createElement(p.o,{placeholder:"John Doe",...e.getInputProps(`employees.${o}.name`)}),s.createElement(p.o,{placeholder:"example@mail.com",...e.getInputProps(`employees.${o}.email`)}))));return s.createElement(m.x,{maw:500,mx:"auto"},s.createElement(x.Z5,{onDragEnd:({destination:t,source:o})=>t?.index!==void 0&&e.reorderListItem("employees",{from:o.index,to:t?.index})},s.createElement(x.bK,{droppableId:"dnd-list",direction:"vertical"},e=>s.createElement("div",{...e.droppableProps,ref:e.innerRef},t,e.placeholder))),s.createElement(g.Z,{justify:"center",mt:"md"},s.createElement(b.z,{onClick:()=>e.insertListItem("employees",{name:"",email:""})},"Add employee")),s.createElement(Text.x,{size:"sm",fw:500,mt:"md"},"Form values:"),s.createElement(E.E,{block:!0},JSON.stringify(e.values,null,2)))},code:w};var I=o(35292),C=o(25916);let P=`
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
            {JSON.stringify(form.values, null, 2)}
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
`,N={type:"code",component:function(){let[e,t]=(0,s.useState)(0),o=(0,i.c)({initialValues:{username:"",password:"",name:"",email:"",website:"",github:""},validate:t=>0===e?{username:t.username.trim().length<6?"Username must include at least 6 characters":null,password:t.password.length<6?"Password must include at least 6 characters":null}:1===e?{name:t.name.trim().length<2?"Name must include at least 2 characters":null,email:/^\S+@\S+$/.test(t.email)?null:"Invalid email"}:{}});return s.createElement(s.Fragment,null,s.createElement(I.v,{active:e},s.createElement(I.v.Step,{label:"First step",description:"Profile settings"},s.createElement(p.o,{label:"Username",placeholder:"Username",...o.getInputProps("username")}),s.createElement(C.W,{mt:"md",label:"Password",placeholder:"Password",...o.getInputProps("password")})),s.createElement(I.v.Step,{label:"Second step",description:"Personal information"},s.createElement(p.o,{label:"Name",placeholder:"Name",...o.getInputProps("name")}),s.createElement(p.o,{mt:"md",label:"Email",placeholder:"Email",...o.getInputProps("email")})),s.createElement(I.v.Step,{label:"Final step",description:"Social media"},s.createElement(p.o,{label:"Website",placeholder:"Website",...o.getInputProps("website")}),s.createElement(p.o,{mt:"md",label:"GitHub",placeholder:"GitHub",...o.getInputProps("github")})),s.createElement(I.v.Completed,null,"Completed! Form values:",s.createElement(E.E,{block:!0,mt:"xl"},JSON.stringify(o.values,null,2)))),s.createElement(g.Z,{justify:"flex-end",mt:"xl"},0!==e&&s.createElement(b.z,{variant:"default",onClick:()=>t(e=>e>0?e-1:e)},"Back"),3!==e&&s.createElement(b.z,{onClick:()=>t(e=>o.validate().hasErrors?e:e<3?e+1:e)},"Next step")))},code:P},D=(0,n.A)(l.us.formRecipes);function k(e){let t={h2:"h2",...(0,r.a)(),...e.components},{Demo:o}=t;return o||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"set-initial-values-with-async-request",children:"Set initial values with async request"}),"\n",(0,a.jsx)(o,{data:u}),"\n",(0,a.jsx)(t.h2,{id:"save-form-values-to-local-storage",children:"Save form values to local storage"}),"\n",(0,a.jsx)(o,{data:v}),"\n",(0,a.jsx)(t.h2,{id:"list-items-reordering",children:"List items reordering"}),"\n",(0,a.jsx)(o,{data:y}),"\n",(0,a.jsx)(t.h2,{id:"form-with-multiple-steps",children:"Form with multiple steps"}),"\n",(0,a.jsx)(o,{data:N})]})}function F(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(D,{...e,children:(0,a.jsx)(k,{...e})})}},62150:function(e,t,o){"use strict";o.d(t,{M:function(){return p}});var a=o(27378),r=o(96739),n=o(6231),l=o(56589),s=o(50332),i={root:"m-4451eb3a"};let m={},p=(0,s.b)((e,t)=>{let o=(0,r.w)("Center",m,e),{classNames:s,className:p,style:c,styles:d,unstyled:u,vars:f,inline:v,...g}=o,h=(0,n.y)({name:"Center",props:o,classes:i,className:p,style:c,classNames:s,styles:d,unstyled:u,vars:f});return a.createElement(l.x,{ref:t,mod:{inline:v},...h("root"),...g})});p.classes=i,p.displayName="@mantine/core/Center"},25916:function(e,t,o){"use strict";o.d(t,{W:function(){return x}});var a=o(27378),r=o(40624),n=o(31002),l=o(58675),s=o(92082),i=o(83453),m=o(5564),p=o(6231),c=o(96739),d=o(55934),u=o(20410),f=o(23163),v=o(42487),g=o(84246),h={root:"m-f61ca620",input:"m-ccf8da4c",innerInput:"m-f2d85dd2",visibilityToggle:"m-b1072d44"};let b={visibilityToggleIcon:({reveal:e})=>a.createElement("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{width:"var(--psi-icon-size)",height:"var(--psi-icon-size)"}},a.createElement("path",{d:e?"M13.3536 2.35355C13.5488 2.15829 13.5488 1.84171 13.3536 1.64645C13.1583 1.45118 12.8417 1.45118 12.6464 1.64645L10.6828 3.61012C9.70652 3.21671 8.63759 3 7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C0.902945 9.08812 2.02314 10.1861 3.36061 10.9323L1.64645 12.6464C1.45118 12.8417 1.45118 13.1583 1.64645 13.3536C1.84171 13.5488 2.15829 13.5488 2.35355 13.3536L4.31723 11.3899C5.29348 11.7833 6.36241 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C14.0971 5.9119 12.9769 4.81391 11.6394 4.06771L13.3536 2.35355ZM9.90428 4.38861C9.15332 4.1361 8.34759 4 7.5 4C4.80285 4 2.52952 5.37816 1.09622 7.50001C1.87284 8.6497 2.89609 9.58106 4.09974 10.1931L9.90428 4.38861ZM5.09572 10.6114L10.9003 4.80685C12.1039 5.41894 13.1272 6.35031 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11C6.65241 11 5.84668 10.8639 5.09572 10.6114Z":"M7.5 11C4.80285 11 2.52952 9.62184 1.09622 7.50001C2.52952 5.37816 4.80285 4 7.5 4C10.1971 4 12.4705 5.37816 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11ZM7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C1.65639 10.2936 4.30786 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C13.3436 4.70638 10.6921 3 7.5 3ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))},E=(0,i.Z)((e,{size:t})=>({root:{"--psi-icon-size":(0,s.ap)(t,"psi-icon-size"),"--psi-button-size":(0,s.ap)(t,"psi-button-size")}})),x=(0,u.d)((e,t)=>{let o=(0,c.w)("PasswordInput",b,e),{classNames:s,className:i,style:u,styles:f,unstyled:x,vars:S,required:w,error:y,leftSection:I,disabled:C,id:P,variant:N,inputContainer:D,description:k,label:F,size:z,errorProps:B,descriptionProps:T,labelProps:V,withAsterisk:_,inputWrapperOrder:L,wrapperProps:j,radius:G,rightSection:Z,rightSectionWidth:O,rightSectionPointerEvents:J,leftSectionWidth:M,visible:A,defaultVisible:W,onVisibilityChange:R,visibilityToggleIcon:H,visibilityToggleButtonProps:$,rightSectionProps:U,leftSectionProps:K,leftSectionPointerEvents:X,...q}=o,Q=(0,n.M)(P),[Y,ee]=(0,l.C)({value:A,defaultValue:W,finalValue:!1,onChange:R}),et=()=>ee(!Y),eo=(0,p.y)({name:"PasswordInput",classes:h,props:o,className:i,style:u,classNames:s,styles:f,unstyled:x,vars:S,varsResolver:E}),{resolvedClassNames:ea,resolvedStyles:er}=(0,m.h)({classNames:s,styles:f,props:o}),{styleProps:en,rest:el}=(0,d.c)(q),es=a.createElement(g.A,{...eo("visibilityToggle"),disabled:C,radius:G,"aria-hidden":!$,tabIndex:-1,...$,variant:"subtle",color:"gray",unstyled:x,onMouseDown:e=>{e.preventDefault(),$?.onMouseDown?.(e),et()},onKeyDown:e=>{$?.onKeyDown?.(e)," "===e.key&&(e.preventDefault(),et())}},a.createElement(H,{reveal:Y}));return a.createElement(v.I.Wrapper,{required:w,id:Q,label:F,error:y,description:k,size:z,classNames:ea,styles:er,__staticSelector:"PasswordInput",errorProps:B,descriptionProps:T,unstyled:x,withAsterisk:_,inputWrapperOrder:L,inputContainer:D,variant:N,labelProps:{...V,htmlFor:Q},...eo("root"),...en,...j},a.createElement(v.I,{component:"div",error:y,leftSection:I,size:z,classNames:{...ea,input:(0,r.Z)(h.input,ea.input)},styles:er,radius:G,disabled:C,__staticSelector:"PasswordInput",rightSectionWidth:O,rightSection:Z??es,variant:N,unstyled:x,leftSectionWidth:M,rightSectionPointerEvents:J||"all",rightSectionProps:U,leftSectionProps:K,leftSectionPointerEvents:X,withAria:!1},a.createElement("input",{required:w,"data-invalid":!!y||void 0,"data-with-left-section":!!I||void 0,...eo("innerInput"),disabled:C,id:Q,ref:t,...el,autoComplete:el.autoComplete||"off",type:Y?"text":"password"})))});x.classes={...f.M.classes,...h},x.displayName="@mantine/core/PasswordInput"},35292:function(e,t,o){"use strict";o.d(t,{v:function(){return N}});var a=o(27378),r=o(71078),n=o(92082),l=o(83453),s=o(89738),i=o(96739),m=o(6231),p=o(56589),c=o(20410),d=o(2256),u=o(19397),f=o(88101),v=o(42029),g=o(38765),h=o(71656);let[b,E]=(0,h.R)("Stepper component was not found in tree");var x={root:"m-cbb4ea7e",steps:"m-aaf89d0b",separator:"m-2a371ac9",content:"m-78da155d",step:"m-cbb57068","step--horizontal":"m-f56b1e2c","step--vertical":"m-833edb7e",verticalSeparator:"m-6496b3f3",stepWrapper:"m-818e70b",stepIcon:"m-1959ad01",stepCompletedIcon:"m-a79331dc",stepBody:"m-1956aa2a",stepLabel:"m-12051f6c",stepDescription:"m-164eea74"};let S=(e,t)=>"function"==typeof e?a.createElement(e,{step:t||0}):e,w={withIcon:!0,allowStepClick:!0,iconPosition:"left"},y=(0,c.d)((e,t)=>{let{classNames:o,className:r,style:n,styles:l,vars:m,step:p,state:c,color:h,icon:b,completedIcon:x,progressIcon:y,label:I,description:C,withIcon:P,iconSize:N,loading:D,allowStepClick:k,allowStepSelect:F,iconPosition:z,orientation:B,...T}=(0,i.w)("StepperStep",w,e),V=E(),_=(0,d.rZ)(),L={classNames:o,styles:l},j="stepCompleted"===c?null:"stepProgress"===c?y:b,G={"data-progress":"stepProgress"===c||void 0,"data-completed":"stepCompleted"===c||void 0};return a.createElement(u.k,{...V.getStyles("step",{className:r,style:n,variant:V.orientation,...L}),mod:{"icon-position":z||V.iconPosition,"allow-click":k},ref:t,...G,...T,__vars:{"--step-color":h?(0,s.p)(h,_):void 0},tabIndex:k?0:-1},P&&a.createElement("span",{...V.getStyles("stepWrapper",L)},a.createElement("span",{...V.getStyles("stepIcon",L),...G},a.createElement(f.u,{mounted:"stepCompleted"===c,transition:"pop",duration:200},e=>a.createElement("span",{...V.getStyles("stepCompletedIcon",{style:e,...L})},D?a.createElement(v.a,{color:"var(--mantine-color-white)",size:"calc(var(--stepper-icon-size) / 2)",...V.getStyles("stepLoader",L)}):S(x,p)||a.createElement(g.n,{size:"60%"}))),"stepCompleted"!==c?D?a.createElement(v.a,{...V.getStyles("stepLoader",L),size:"calc(var(--stepper-icon-size) / 2)",color:h}):S(j||b,p):null),"vertical"===B&&a.createElement("span",{...V.getStyles("verticalSeparator",L),"data-active":"stepCompleted"===c||void 0})),(I||C)&&a.createElement("span",{...V.getStyles("stepBody",L),"data-orientation":V.orientation,"data-icon-position":z||V.iconPosition},I&&a.createElement("span",{...V.getStyles("stepLabel",L)},S(I,p)),C&&a.createElement("span",{...V.getStyles("stepDescription",L)},S(C,p))))});y.classes=x,y.displayName="@mantine/core/StepperStep";let I=()=>null;I.displayName="@mantine/core/StepperCompleted";let C={orientation:"horizontal",iconPosition:"left",allowNextStepsSelect:!0,wrap:!0},P=(0,l.Z)((e,{color:t,iconSize:o,size:a,contentPadding:l,radius:i})=>({root:{"--stepper-color":t?(0,s.p)(t,e):void 0,"--stepper-icon-size":void 0===o?(0,n.ap)(a,"stepper-icon-size"):(0,r.h)(o),"--stepper-content-padding":(0,n.bG)(l),"--stepper-radius":void 0===i?void 0:(0,n.H5)(i),"--stepper-fz":(0,n.yv)(a),"--stepper-spacing":(0,n.bG)(a)}})),N=(0,c.d)((e,t)=>{let o=(0,i.w)("Stepper",C,e),{classNames:r,className:n,style:l,styles:s,unstyled:c,vars:d,children:u,onStepClick:f,active:v,icon:g,completedIcon:h,progressIcon:E,color:S,iconSize:w,contentPadding:y,orientation:N,iconPosition:D,size:k,radius:F,allowNextStepsSelect:z,wrap:B,...T}=o,V=(0,m.y)({name:"Stepper",classes:x,props:o,className:n,style:l,classNames:r,styles:s,unstyled:c,vars:d,varsResolver:P}),_=a.Children.toArray(u),L=_.filter(e=>e.type!==I),j=_.find(e=>e.type===I),G=L.reduce((e,t,o)=>{let r=v===o?"stepProgress":v>o?"stepCompleted":"stepInactive",n="function"==typeof f&&("boolean"==typeof t.props.allowStepSelect?t.props.allowStepSelect:"stepCompleted"===r||z);return e.push((0,a.cloneElement)(t,{icon:t.props.icon||g||o+1,key:o,step:o,state:r,onClick:()=>n&&f?.(o),allowStepClick:n,completedIcon:t.props.completedIcon||h,progressIcon:t.props.progressIcon||E,color:t.props.color||S,iconSize:w,radius:F,iconPosition:t.props.iconPosition||D,orientation:N,unstyled:c})),"horizontal"===N&&o!==L.length-1&&e.push(a.createElement("div",{...V("separator"),"data-active":o<v||void 0,"data-orientation":N,key:`separator-${o}`})),e},[]),Z=L[v]?.props?.children,O=j?.props?.children,J=v>L.length-1?O:Z;return a.createElement(b,{value:{getStyles:V,orientation:N,iconPosition:D}},a.createElement(p.x,{...V("root"),ref:t,size:k,...T},a.createElement(p.x,{...V("steps"),mod:{orientation:N,"icon-position":D,wrap:B&&"vertical"!==N}},G),J&&a.createElement("div",{...V("content")},J)))});N.classes=x,N.displayName="@mantine/core/Stepper",N.Completed=I,N.Step=y}},function(e){e.O(0,[846,370,4038,5819,2775,6926,9774,2888,179],function(){return e(e.s=94258)}),_N_E=e.O()}]);