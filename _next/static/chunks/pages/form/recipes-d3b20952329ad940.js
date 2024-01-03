(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[59517],{94258:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/form/recipes",function(){return o(7023)}])},7023:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return F}});var r=o(24246),a=o(71670),n=o(27378),l=o(56589),s=o(7033),i=o(94193),m=o(56926);let p=`
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
`,c={type:"code",component:function(){let e=(0,m.c)({initialValues:{email:"",terms:!1}});return(0,n.useEffect)(()=>{new Promise(e=>{setTimeout(()=>e({email:"test@email",terms:!0}),2e3)}).then(t=>{e.setValues(t),e.resetDirty(t)})},[]),n.createElement(l.x,{maw:340,mx:"auto"},n.createElement(s.o,{label:"Email",placeholder:"Email",...e.getInputProps("email")}),n.createElement(i.X,{mt:"sm",label:"I accept terms and conditions",...e.getInputProps("terms",{type:"checkbox"})}))},code:p},d=`
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
`,u={type:"code",component:function(){let e=(0,m.c)({initialValues:{name:"",occupation:""}});return(0,n.useEffect)(()=>{let t=window.localStorage.getItem("user-form");if(t)try{e.setValues(JSON.parse(window.localStorage.getItem("user-form")))}catch(e){console.log("Failed to parse stored value")}},[]),(0,n.useEffect)(()=>{window.localStorage.setItem("user-form",JSON.stringify(e.values))},[e.values]),n.createElement(l.x,{maw:340,mx:"auto"},n.createElement(s.o,{label:"Name",placeholder:"Name",...e.getInputProps("name")}),n.createElement(s.o,{mt:"md",label:"Occupation",placeholder:"Occupation",...e.getInputProps("occupation")}))},code:d};var f=o(54533),v=o(41428),g=o(22971),h=o(62150),b=o(8671),Text=o(26569),E=o(94998);let x=`
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
`,S={type:"code",component:function(){let e=(0,m.c)({initialValues:{employees:[{name:"John Doe",email:"john@mantine.dev"},{name:"Bill Love",email:"bill@mantine.dev"},{name:"Nancy Eagle",email:"nanacy@mantine.dev"},{name:"Lim Notch",email:"lim@mantine.dev"},{name:"Susan Seven",email:"susan@mantine.dev"}]}}),t=e.values.employees.map((t,o)=>n.createElement(f._l,{key:o,index:o,draggableId:o.toString()},t=>n.createElement(g.Z,{ref:t.innerRef,mt:"xs",...t.draggableProps},n.createElement(h.M,{...t.dragHandleProps},n.createElement(v.Z,{size:"1.2rem"})),n.createElement(s.o,{placeholder:"John Doe",...e.getInputProps(`employees.${o}.name`)}),n.createElement(s.o,{placeholder:"example@mail.com",...e.getInputProps(`employees.${o}.email`)}))));return n.createElement(l.x,{maw:500,mx:"auto"},n.createElement(f.Z5,{onDragEnd:({destination:t,source:o})=>t?.index!==void 0&&e.reorderListItem("employees",{from:o.index,to:t?.index})},n.createElement(f.bK,{droppableId:"dnd-list",direction:"vertical"},e=>n.createElement("div",{...e.droppableProps,ref:e.innerRef},t,e.placeholder))),n.createElement(g.Z,{justify:"center",mt:"md"},n.createElement(b.z,{onClick:()=>e.insertListItem("employees",{name:"",email:""})},"Add employee")),n.createElement(Text.x,{size:"sm",fw:500,mt:"md"},"Form values:"),n.createElement(E.E,{block:!0},JSON.stringify(e.values,null,2)))},code:x};var w=o(35292),y=o(25916);let I=`
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
`,C={type:"code",component:function(){let[e,t]=(0,n.useState)(0),o=(0,m.c)({initialValues:{username:"",password:"",name:"",email:"",website:"",github:""},validate:t=>0===e?{username:t.username.trim().length<6?"Username must include at least 6 characters":null,password:t.password.length<6?"Password must include at least 6 characters":null}:1===e?{name:t.name.trim().length<2?"Name must include at least 2 characters":null,email:/^\S+@\S+$/.test(t.email)?null:"Invalid email"}:{}});return n.createElement(n.Fragment,null,n.createElement(w.v,{active:e},n.createElement(w.v.Step,{label:"First step",description:"Profile settings"},n.createElement(s.o,{label:"Username",placeholder:"Username",...o.getInputProps("username")}),n.createElement(y.W,{mt:"md",label:"Password",placeholder:"Password",...o.getInputProps("password")})),n.createElement(w.v.Step,{label:"Second step",description:"Personal information"},n.createElement(s.o,{label:"Name",placeholder:"Name",...o.getInputProps("name")}),n.createElement(s.o,{mt:"md",label:"Email",placeholder:"Email",...o.getInputProps("email")})),n.createElement(w.v.Step,{label:"Final step",description:"Social media"},n.createElement(s.o,{label:"Website",placeholder:"Website",...o.getInputProps("website")}),n.createElement(s.o,{mt:"md",label:"GitHub",placeholder:"GitHub",...o.getInputProps("github")})),n.createElement(w.v.Completed,null,"Completed! Form values:",n.createElement(E.E,{block:!0,mt:"xl"},JSON.stringify(o.values,null,2)))),n.createElement(g.Z,{justify:"flex-end",mt:"xl"},0!==e&&n.createElement(b.z,{variant:"default",onClick:()=>t(e=>e>0?e-1:e)},"Back"),3!==e&&n.createElement(b.z,{onClick:()=>t(e=>o.validate().hasErrors?e:e<3?e+1:e)},"Next step")))},code:I};var P=o(3916),N=o(54568);let D=(0,P.A)(N.us.formRecipes);function k(e){let t={h2:"h2",...(0,a.a)(),...e.components},{Demo:o}=t;return o||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"set-initial-values-with-async-request",children:"Set initial values with async request"}),"\n",(0,r.jsx)(o,{data:c}),"\n",(0,r.jsx)(t.h2,{id:"save-form-values-to-local-storage",children:"Save form values to local storage"}),"\n",(0,r.jsx)(o,{data:u}),"\n",(0,r.jsx)(t.h2,{id:"list-items-reordering",children:"List items reordering"}),"\n",(0,r.jsx)(o,{data:S}),"\n",(0,r.jsx)(t.h2,{id:"form-with-multiple-steps",children:"Form with multiple steps"}),"\n",(0,r.jsx)(o,{data:C})]})}function F(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(D,{...e,children:(0,r.jsx)(k,{...e})})}},62150:function(e,t,o){"use strict";o.d(t,{M:function(){return p}});var r=o(27378),a=o(96739),n=o(6231),l=o(56589),s=o(50332),i={root:"m-4451eb3a"};let m={},p=(0,s.b)((e,t)=>{let o=(0,a.w)("Center",m,e),{classNames:s,className:p,style:c,styles:d,unstyled:u,vars:f,inline:v,...g}=o,h=(0,n.y)({name:"Center",props:o,classes:i,className:p,style:c,classNames:s,styles:d,unstyled:u,vars:f});return r.createElement(l.x,{ref:t,mod:{inline:v},...h("root"),...g})});p.classes=i,p.displayName="@mantine/core/Center"},25916:function(e,t,o){"use strict";o.d(t,{W:function(){return x}});var r=o(27378),a=o(40624),n=o(31002),l=o(58675),s=o(92082),i=o(83453),m=o(5564),p=o(6231),c=o(96739),d=o(55934),u=o(20410),f=o(84246),v=o(42487),g=o(23163),h={root:"m-f61ca620",input:"m-ccf8da4c",innerInput:"m-f2d85dd2",visibilityToggle:"m-b1072d44"};let b={visibilityToggleIcon:({reveal:e})=>r.createElement("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{width:"var(--psi-icon-size)",height:"var(--psi-icon-size)"}},r.createElement("path",{d:e?"M13.3536 2.35355C13.5488 2.15829 13.5488 1.84171 13.3536 1.64645C13.1583 1.45118 12.8417 1.45118 12.6464 1.64645L10.6828 3.61012C9.70652 3.21671 8.63759 3 7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C0.902945 9.08812 2.02314 10.1861 3.36061 10.9323L1.64645 12.6464C1.45118 12.8417 1.45118 13.1583 1.64645 13.3536C1.84171 13.5488 2.15829 13.5488 2.35355 13.3536L4.31723 11.3899C5.29348 11.7833 6.36241 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C14.0971 5.9119 12.9769 4.81391 11.6394 4.06771L13.3536 2.35355ZM9.90428 4.38861C9.15332 4.1361 8.34759 4 7.5 4C4.80285 4 2.52952 5.37816 1.09622 7.50001C1.87284 8.6497 2.89609 9.58106 4.09974 10.1931L9.90428 4.38861ZM5.09572 10.6114L10.9003 4.80685C12.1039 5.41894 13.1272 6.35031 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11C6.65241 11 5.84668 10.8639 5.09572 10.6114Z":"M7.5 11C4.80285 11 2.52952 9.62184 1.09622 7.50001C2.52952 5.37816 4.80285 4 7.5 4C10.1971 4 12.4705 5.37816 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11ZM7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C1.65639 10.2936 4.30786 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C13.3436 4.70638 10.6921 3 7.5 3ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))},E=(0,i.Z)((e,{size:t})=>({root:{"--psi-icon-size":(0,s.ap)(t,"psi-icon-size"),"--psi-button-size":(0,s.ap)(t,"psi-button-size")}})),x=(0,u.d)((e,t)=>{let o=(0,c.w)("PasswordInput",b,e),{classNames:s,className:i,style:u,styles:g,unstyled:x,vars:S,required:w,error:y,leftSection:I,disabled:C,id:P,variant:N,inputContainer:D,description:k,label:F,size:z,errorProps:B,descriptionProps:T,labelProps:V,withAsterisk:_,inputWrapperOrder:L,wrapperProps:j,radius:G,rightSection:Z,rightSectionWidth:O,rightSectionPointerEvents:J,leftSectionWidth:M,visible:A,defaultVisible:R,onVisibilityChange:W,visibilityToggleIcon:H,visibilityToggleButtonProps:$,rightSectionProps:U,leftSectionProps:K,leftSectionPointerEvents:X,...q}=o,Q=(0,n.M)(P),[Y,ee]=(0,l.C)({value:A,defaultValue:R,finalValue:!1,onChange:W}),et=()=>ee(!Y),eo=(0,p.y)({name:"PasswordInput",classes:h,props:o,className:i,style:u,classNames:s,styles:g,unstyled:x,vars:S,varsResolver:E}),{resolvedClassNames:er,resolvedStyles:ea}=(0,m.h)({classNames:s,styles:g,props:o}),{styleProps:en,rest:el}=(0,d.c)(q),es=r.createElement(f.A,{...eo("visibilityToggle"),disabled:C,radius:G,"aria-hidden":!$,tabIndex:-1,...$,variant:"subtle",color:"gray",unstyled:x,onMouseDown:e=>{e.preventDefault(),$?.onMouseDown?.(e),et()},onKeyDown:e=>{$?.onKeyDown?.(e)," "===e.key&&(e.preventDefault(),et())}},r.createElement(H,{reveal:Y}));return r.createElement(v.I.Wrapper,{required:w,id:Q,label:F,error:y,description:k,size:z,classNames:er,styles:ea,__staticSelector:"PasswordInput",errorProps:B,descriptionProps:T,unstyled:x,withAsterisk:_,inputWrapperOrder:L,inputContainer:D,variant:N,labelProps:{...V,htmlFor:Q},...eo("root"),...en,...j},r.createElement(v.I,{component:"div",error:y,leftSection:I,size:z,classNames:{...er,input:(0,a.Z)(h.input,er.input)},styles:ea,radius:G,disabled:C,__staticSelector:"PasswordInput",rightSectionWidth:O,rightSection:Z??es,variant:N,unstyled:x,leftSectionWidth:M,rightSectionPointerEvents:J||"all",rightSectionProps:U,leftSectionProps:K,leftSectionPointerEvents:X,withAria:!1},r.createElement("input",{required:w,"data-invalid":!!y||void 0,"data-with-left-section":!!I||void 0,...eo("innerInput"),disabled:C,id:Q,ref:t,...el,autoComplete:el.autoComplete||"off",type:Y?"text":"password"})))});x.classes={...g.M.classes,...h},x.displayName="@mantine/core/PasswordInput"},35292:function(e,t,o){"use strict";o.d(t,{v:function(){return D}});var r=o(27378),a=o(71078),n=o(92082),l=o(83453),s=o(89738),i=o(34121),m=o(96739),p=o(6231),c=o(56589),d=o(20410),u=o(71656);let[f,v]=(0,u.R)("Stepper component was not found in tree"),g=()=>null;g.displayName="@mantine/core/StepperCompleted";var h=o(2256),b=o(38765),E=o(42029),x=o(88101),S=o(19397),w={root:"m-cbb4ea7e",steps:"m-aaf89d0b",separator:"m-2a371ac9",content:"m-78da155d",step:"m-cbb57068","step--horizontal":"m-f56b1e2c","step--vertical":"m-833edb7e",verticalSeparator:"m-6496b3f3",stepWrapper:"m-818e70b",stepIcon:"m-1959ad01",stepCompletedIcon:"m-a79331dc",stepBody:"m-1956aa2a",stepLabel:"m-12051f6c",stepDescription:"m-164eea74"};let y=(e,t)=>"function"==typeof e?r.createElement(e,{step:t||0}):e,I={withIcon:!0,allowStepClick:!0,iconPosition:"left"},C=(0,d.d)((e,t)=>{let{classNames:o,className:a,style:n,styles:l,vars:i,step:p,state:c,color:d,icon:u,completedIcon:f,progressIcon:g,label:w,description:C,withIcon:P,iconSize:N,loading:D,allowStepClick:k,allowStepSelect:F,iconPosition:z,orientation:B,...T}=(0,m.w)("StepperStep",I,e),V=v(),_=(0,h.rZ)(),L={classNames:o,styles:l},j="stepCompleted"===c?null:"stepProgress"===c?g:u,G={"data-progress":"stepProgress"===c||void 0,"data-completed":"stepCompleted"===c||void 0};return r.createElement(S.k,{...V.getStyles("step",{className:a,style:n,variant:V.orientation,...L}),mod:{"icon-position":z||V.iconPosition,"allow-click":k},ref:t,...G,...T,__vars:{"--step-color":d?(0,s.p)(d,_):void 0},tabIndex:k?0:-1},P&&r.createElement("span",{...V.getStyles("stepWrapper",L)},r.createElement("span",{...V.getStyles("stepIcon",L),...G},r.createElement(x.u,{mounted:"stepCompleted"===c,transition:"pop",duration:200},e=>r.createElement("span",{...V.getStyles("stepCompletedIcon",{style:e,...L})},D?r.createElement(E.a,{color:"var(--mantine-color-white)",size:"calc(var(--stepper-icon-size) / 2)",...V.getStyles("stepLoader",L)}):y(f,p)||r.createElement(b.n,{size:"60%"}))),"stepCompleted"!==c?D?r.createElement(E.a,{...V.getStyles("stepLoader",L),size:"calc(var(--stepper-icon-size) / 2)",color:d}):y(j||u,p):null),"vertical"===B&&r.createElement("span",{...V.getStyles("verticalSeparator",L),"data-active":"stepCompleted"===c||void 0})),(w||C)&&r.createElement("span",{...V.getStyles("stepBody",L),"data-orientation":V.orientation,"data-icon-position":z||V.iconPosition},w&&r.createElement("span",{...V.getStyles("stepLabel",L)},y(w,p)),C&&r.createElement("span",{...V.getStyles("stepDescription",L)},y(C,p))))});C.classes=w,C.displayName="@mantine/core/StepperStep";let P={orientation:"horizontal",iconPosition:"left",allowNextStepsSelect:!0,wrap:!0},N=(0,l.Z)((e,{color:t,iconSize:o,size:r,contentPadding:l,radius:m,autoContrast:p})=>({root:{"--stepper-color":t?(0,s.p)(t,e):void 0,"--stepper-icon-color":p?(0,i.R)({color:t,theme:e}):void 0,"--stepper-icon-size":void 0===o?(0,n.ap)(r,"stepper-icon-size"):(0,a.h)(o),"--stepper-content-padding":(0,n.bG)(l),"--stepper-radius":void 0===m?void 0:(0,n.H5)(m),"--stepper-fz":(0,n.yv)(r),"--stepper-spacing":(0,n.bG)(r)}})),D=(0,d.d)((e,t)=>{let o=(0,m.w)("Stepper",P,e),{classNames:a,className:n,style:l,styles:s,unstyled:i,vars:d,children:u,onStepClick:v,active:h,icon:b,completedIcon:E,progressIcon:x,color:S,iconSize:y,contentPadding:I,orientation:C,iconPosition:D,size:k,radius:F,allowNextStepsSelect:z,wrap:B,...T}=o,V=(0,p.y)({name:"Stepper",classes:w,props:o,className:n,style:l,classNames:a,styles:s,unstyled:i,vars:d,varsResolver:N}),_=r.Children.toArray(u),L=_.filter(e=>e.type!==g),j=_.find(e=>e.type===g),G=L.reduce((e,t,o)=>{let a=h===o?"stepProgress":h>o?"stepCompleted":"stepInactive",n="function"==typeof v&&("boolean"==typeof t.props.allowStepSelect?t.props.allowStepSelect:"stepCompleted"===a||z);return e.push((0,r.cloneElement)(t,{icon:t.props.icon||b||o+1,key:o,step:o,state:a,onClick:()=>n&&v?.(o),allowStepClick:n,completedIcon:t.props.completedIcon||E,progressIcon:t.props.progressIcon||x,color:t.props.color||S,iconSize:y,radius:F,iconPosition:t.props.iconPosition||D,orientation:C,unstyled:i})),"horizontal"===C&&o!==L.length-1&&e.push(r.createElement("div",{...V("separator"),"data-active":o<h||void 0,"data-orientation":C,key:`separator-${o}`})),e},[]),Z=L[h]?.props?.children,O=j?.props?.children,J=h>L.length-1?O:Z;return r.createElement(f,{value:{getStyles:V,orientation:C,iconPosition:D}},r.createElement(c.x,{...V("root"),ref:t,size:k,...T},r.createElement(c.x,{...V("steps"),mod:{orientation:C,"icon-position":D,wrap:B&&"vertical"!==C}},G),J&&r.createElement("div",{...V("content")},J)))});D.classes=w,D.displayName="@mantine/core/Stepper",D.Completed=g,D.Step=C}},function(e){e.O(0,[70846,30370,4038,15819,2775,56926,49774,92888,40179],function(){return e(e.s=94258)}),_N_E=e.O()}]);