(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[59517],{42464:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/form/recipes",function(){return o(87831)}])},87831:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return P}});var r=o(52322),n=o(45392),a=o(2784),s=o(74770),l=o(95047),i=o(43092);let p={type:"code",component:function(){let e=(0,i.c)({mode:"uncontrolled",initialValues:{email:"",terms:!1}});return(0,a.useEffect)(()=>{new Promise(e=>{setTimeout(()=>e({email:"test@email",terms:!0}),2e3)}).then(t=>{e.setValues(t),e.resetDirty(t)})},[]),(0,r.jsxs)("form",{onSubmit:e.onSubmit(console.log),children:[(0,r.jsx)(s.o,{label:"Email",placeholder:"Email",...e.getInputProps("email")},e.key("email")),(0,r.jsx)(l.X,{mt:"sm",label:"I accept terms and conditions",...e.getInputProps("terms",{type:"checkbox"})},e.key("terms"))]})},code:`
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
      <TextInput
        label="Email"
        placeholder="Email"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />
      <Checkbox
        mt="sm"
        label="I accept terms and conditions"
        key={form.key('terms')}
        {...form.getInputProps('terms', { type: 'checkbox' })}
      />
    </form>
  );
}
`,centered:!0,maxWidth:340};var m=o(28559);let d={type:"code",component:function(){let e=(0,i.c)({mode:"uncontrolled",initialValues:{name:"",occupation:""},onValuesChange:e=>{window.localStorage.setItem("user-form",JSON.stringify(e))}});return(0,a.useEffect)(()=>{if(window.localStorage.getItem("user-form"))try{e.setValues(JSON.parse(window.localStorage.getItem("user-form")))}catch(e){console.log("Failed to parse stored value")}},[]),(0,r.jsxs)(m.x,{maw:340,mx:"auto",children:[(0,r.jsx)(s.o,{label:"Name",placeholder:"Name",...e.getInputProps("name")},e.key("name")),(0,r.jsx)(s.o,{mt:"md",label:"Occupation",placeholder:"Occupation",...e.getInputProps("occupation")},e.key("occupation"))]})},code:`
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
      <TextInput
        label="Name"
        placeholder="Name"
        key={form.key('name')}
        {...form.getInputProps('name')}
      />
      <TextInput
        mt="md"
        label="Occupation"
        placeholder="Occupation"
        key={form.key('occupation')}
        {...form.getInputProps('occupation')}
      />
    </Box>
  );
}
`};var c=o(94756),u=o(18064),f=o(93010),h=o(16438),v=o(39629),y=o(73533);let x={type:"code",component:function(){let e=(0,i.c)({mode:"uncontrolled",initialValues:{employees:[{name:"John Doe",email:"john@mantine.dev",key:(0,y.k)()},{name:"Bill Love",email:"bill@mantine.dev",key:(0,y.k)()},{name:"Nancy Eagle",email:"nanacy@mantine.dev",key:(0,y.k)()},{name:"Lim Notch",email:"lim@mantine.dev",key:(0,y.k)()},{name:"Susan Seven",email:"susan@mantine.dev",key:(0,y.k)()}]}}),t=e.getValues().employees.map((t,o)=>(0,r.jsx)(c._l,{index:o,draggableId:t.key,children:t=>(0,r.jsxs)(f.Z,{ref:t.innerRef,mt:"xs",...t.draggableProps,children:[(0,r.jsx)(h.M,{...t.dragHandleProps,children:(0,r.jsx)(u.Z,{size:"1.2rem"})}),(0,r.jsx)(s.o,{placeholder:"John Doe",...e.getInputProps(`employees.${o}.name`)},e.key(`employees.${o}.name`)),(0,r.jsx)(s.o,{placeholder:"example@mail.com",...e.getInputProps(`employees.${o}.email`)},e.key(`employees.${o}.email`))]})},t.key));return(0,r.jsxs)("div",{children:[(0,r.jsx)(c.Z5,{onDragEnd:({destination:t,source:o})=>t?.index!==void 0&&e.reorderListItem("employees",{from:o.index,to:t?.index}),children:(0,r.jsx)(c.bK,{droppableId:"dnd-list",direction:"vertical",children:e=>(0,r.jsxs)("div",{...e.droppableProps,ref:e.innerRef,children:[t,e.placeholder]})})}),(0,r.jsx)(f.Z,{justify:"center",mt:"md",children:(0,r.jsx)(v.z,{onClick:()=>e.insertListItem("employees",{name:"",email:"",key:(0,y.k)()}),children:"Add employee"})})]})},code:`
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
          <TextInput
            placeholder="John Doe"
            key={form.key(\`employees.\${index}.name\`)}
            {...form.getInputProps(\`employees.\${index}.name\`)}
          />
          <TextInput
            placeholder="example@mail.com"
            key={form.key(\`employees.\${index}.email\`)}
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
`,centered:!0,maxWidth:440};var g=o(6403),b=o(60284),I=o(45909);let S={type:"code",component:function(){let[e,t]=(0,a.useState)(0),o=(0,i.c)({mode:"uncontrolled",initialValues:{username:"",password:"",name:"",email:"",website:"",github:""},validate:t=>0===e?{username:t.username.trim().length<6?"Username must include at least 6 characters":null,password:t.password.length<6?"Password must include at least 6 characters":null}:1===e?{name:t.name.trim().length<2?"Name must include at least 2 characters":null,email:/^\S+@\S+$/.test(t.email)?null:"Invalid email"}:{}});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(g.v,{active:e,children:[(0,r.jsxs)(g.v.Step,{label:"First step",description:"Profile settings",children:[(0,r.jsx)(s.o,{label:"Username",placeholder:"Username",...o.getInputProps("username")},o.key("username")),(0,r.jsx)(b.W,{mt:"md",label:"Password",placeholder:"Password",...o.getInputProps("password")},o.key("password"))]}),(0,r.jsxs)(g.v.Step,{label:"Second step",description:"Personal information",children:[(0,r.jsx)(s.o,{label:"Name",placeholder:"Name",...o.getInputProps("name")},o.key("name")),(0,r.jsx)(s.o,{mt:"md",label:"Email",placeholder:"Email",...o.getInputProps("email")},o.key("email"))]}),(0,r.jsxs)(g.v.Step,{label:"Final step",description:"Social media",children:[(0,r.jsx)(s.o,{label:"Website",placeholder:"Website",...o.getInputProps("website")},o.key("website")),(0,r.jsx)(s.o,{mt:"md",label:"GitHub",placeholder:"GitHub",...o.getInputProps("github")},o.key("github"))]}),(0,r.jsxs)(g.v.Completed,{children:["Completed! Form values:",(0,r.jsx)(I.E,{block:!0,mt:"xl",children:JSON.stringify(o.getValues(),null,2)})]})]}),(0,r.jsxs)(f.Z,{justify:"flex-end",mt:"xl",children:[0!==e&&(0,r.jsx)(v.z,{variant:"default",onClick:()=>t(e=>e>0?e-1:e),children:"Back"}),3!==e&&(0,r.jsx)(v.z,{onClick:()=>t(e=>o.validate().hasErrors?e:e<3?e+1:e),children:"Next step"})]})]})},code:`
import { useState } from 'react';
import { Stepper, Button, Group, TextInput, PasswordInput, Code } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const [active, setActive] = useState(0);

  const form = useForm({
    mode: 'uncontrolled',
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
          <TextInput
            label="Username"
            placeholder="Username"
            key={form.key('username')}
            {...form.getInputProps('username')}
          />
          <PasswordInput
            mt="md"
            label="Password"
            placeholder="Password"
            key={form.key('password')}
            {...form.getInputProps('password')}
          />
        </Stepper.Step>

        <Stepper.Step label="Second step" description="Personal information">
          <TextInput
            label="Name"
            placeholder="Name"
            key={form.key('name')}
            {...form.getInputProps('name')}
          />
          <TextInput
            mt="md"
            label="Email"
            placeholder="Email"
            key={form.key('email')}
            {...form.getInputProps('email')}
          />
        </Stepper.Step>

        <Stepper.Step label="Final step" description="Social media">
          <TextInput
            label="Website"
            placeholder="Website"
            key={form.key('website')}
            {...form.getInputProps('website')}
          />
          <TextInput
            mt="md"
            label="GitHub"
            placeholder="GitHub"
            key={form.key('github')}
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
`};var k=o(25071),w=o(15019);let C=(0,k.A)(w.us.formRecipes);function j(e){let t={h2:"h2",...(0,n.a)(),...e.components},{Demo:o}=t;return o||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"set-initial-values-with-async-request",children:"Set initial values with async request"}),"\n",(0,r.jsx)(o,{data:p}),"\n",(0,r.jsx)(t.h2,{id:"save-form-values-to-local-storage",children:"Save form values to local storage"}),"\n",(0,r.jsx)(o,{data:d}),"\n",(0,r.jsx)(t.h2,{id:"list-items-reordering",children:"List items reordering"}),"\n",(0,r.jsx)(o,{data:x}),"\n",(0,r.jsx)(t.h2,{id:"form-with-multiple-steps",children:"Form with multiple steps"}),"\n",(0,r.jsx)(o,{data:S})]})}function P(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(C,{...e,children:(0,r.jsx)(j,{...e})})}},60284:function(e,t,o){"use strict";o.d(t,{W:function(){return b}});var r=o(52322),n=o(40489),a=o(66178),s=o(9341);o(2784);var l=o(91482),i=o(11200),p=o(51477),m=o(46690),d=o(38483),c=o(97072),u=o(82027),f=o(15981),h=o(6941),v=o(73063),y={root:"m_f61ca620",input:"m_ccf8da4c",innerInput:"m_f2d85dd2",visibilityToggle:"m_b1072d44"};let x={visibilityToggleIcon:({reveal:e})=>(0,r.jsx)("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{width:"var(--psi-icon-size)",height:"var(--psi-icon-size)"},children:(0,r.jsx)("path",{d:e?"M13.3536 2.35355C13.5488 2.15829 13.5488 1.84171 13.3536 1.64645C13.1583 1.45118 12.8417 1.45118 12.6464 1.64645L10.6828 3.61012C9.70652 3.21671 8.63759 3 7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C0.902945 9.08812 2.02314 10.1861 3.36061 10.9323L1.64645 12.6464C1.45118 12.8417 1.45118 13.1583 1.64645 13.3536C1.84171 13.5488 2.15829 13.5488 2.35355 13.3536L4.31723 11.3899C5.29348 11.7833 6.36241 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C14.0971 5.9119 12.9769 4.81391 11.6394 4.06771L13.3536 2.35355ZM9.90428 4.38861C9.15332 4.1361 8.34759 4 7.5 4C4.80285 4 2.52952 5.37816 1.09622 7.50001C1.87284 8.6497 2.89609 9.58106 4.09974 10.1931L9.90428 4.38861ZM5.09572 10.6114L10.9003 4.80685C12.1039 5.41894 13.1272 6.35031 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11C6.65241 11 5.84668 10.8639 5.09572 10.6114Z":"M7.5 11C4.80285 11 2.52952 9.62184 1.09622 7.50001C2.52952 5.37816 4.80285 4 7.5 4C10.1971 4 12.4705 5.37816 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11ZM7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C1.65639 10.2936 4.30786 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C13.3436 4.70638 10.6921 3 7.5 3ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})},g=(0,i.Z)((e,{size:t})=>({root:{"--psi-icon-size":(0,l.ap)(t,"psi-icon-size"),"--psi-button-size":(0,l.ap)(t,"psi-button-size")}})),b=(0,u.d5)((e,t)=>{let o=(0,d.w)("PasswordInput",x,e),{classNames:l,className:i,style:u,styles:v,unstyled:b,vars:I,required:S,error:k,leftSection:w,disabled:C,id:j,variant:P,inputContainer:_,description:D,label:N,size:E,errorProps:V,descriptionProps:F,labelProps:T,withAsterisk:z,inputWrapperOrder:L,wrapperProps:B,radius:G,rightSection:Z,rightSectionWidth:O,rightSectionPointerEvents:M,leftSectionWidth:W,visible:$,defaultVisible:J,onVisibilityChange:A,visibilityToggleIcon:R,visibilityToggleButtonProps:H,rightSectionProps:U,leftSectionProps:K,leftSectionPointerEvents:X,withErrorStyles:q,mod:Q,...Y}=o,ee=(0,a.M)(j),[et,eo]=(0,s.C)({value:$,defaultValue:J,finalValue:!1,onChange:A}),er=()=>eo(!et),en=(0,m.y)({name:"PasswordInput",classes:y,props:o,className:i,style:u,classNames:l,styles:v,unstyled:b,vars:I,varsResolver:g}),{resolvedClassNames:ea,resolvedStyles:es}=(0,p.h)({classNames:l,styles:v,props:o}),{styleProps:el,rest:ei}=(0,c.c)(Y),ep=(0,r.jsx)(f.A,{...en("visibilityToggle"),disabled:C,radius:G,"aria-hidden":!H,tabIndex:-1,...H,variant:H?.variant??"subtle",color:"gray",unstyled:b,onTouchEnd:e=>{e.preventDefault(),H?.onTouchEnd?.(e),er()},onMouseDown:e=>{e.preventDefault(),H?.onMouseDown?.(e),er()},onKeyDown:e=>{H?.onKeyDown?.(e)," "===e.key&&(e.preventDefault(),er())},children:(0,r.jsx)(R,{reveal:et})});return(0,r.jsx)(h.I.Wrapper,{required:S,id:ee,label:N,error:k,description:D,size:E,classNames:ea,styles:es,__staticSelector:"PasswordInput",errorProps:V,descriptionProps:F,unstyled:b,withAsterisk:z,inputWrapperOrder:L,inputContainer:_,variant:P,labelProps:{...T,htmlFor:ee},mod:Q,...en("root"),...el,...B,children:(0,r.jsx)(h.I,{component:"div",error:k,leftSection:w,size:E,classNames:{...ea,input:(0,n.Z)(y.input,ea.input)},styles:es,radius:G,disabled:C,__staticSelector:"PasswordInput",rightSectionWidth:O,rightSection:Z??ep,variant:P,unstyled:b,leftSectionWidth:W,rightSectionPointerEvents:M||"all",rightSectionProps:U,leftSectionProps:K,leftSectionPointerEvents:X,withAria:!1,withErrorStyles:q,children:(0,r.jsx)("input",{required:S,"data-invalid":!!k||void 0,"data-with-left-section":!!w||void 0,...en("innerInput"),disabled:C,id:ee,ref:t,...ei,autoComplete:ei.autoComplete||"off",type:et?"text":"password"})})})});b.classes={...v.M.classes,...y},b.displayName="@mantine/core/PasswordInput"},6403:function(e,t,o){"use strict";o.d(t,{v:function(){return D}});var r=o(52322),n=o(2784),a=o(58898),s=o(91482),l=o(11200),i=o(13588),p=o(39568),m=o(90006),d=o(38483),c=o(46690),u=o(28559),f=o(82027);let[h,v]=(0,o(89106).R)("Stepper component was not found in tree"),y=()=>null;y.displayName="@mantine/core/StepperCompleted";var x=o(68755),g=o(40284),b=o(12491),I=o(96321),S=o(63409),k={root:"m_cbb4ea7e",steps:"m_aaf89d0b",separator:"m_2a371ac9",content:"m_78da155d",step:"m_cbb57068","step--horizontal":"m_f56b1e2c","step--vertical":"m_833edb7e",verticalSeparator:"m_6496b3f3",stepWrapper:"m_818e70b",stepIcon:"m_1959ad01",stepCompletedIcon:"m_a79331dc",stepBody:"m_1956aa2a",stepLabel:"m_12051f6c",stepDescription:"m_164eea74"};let w=(e,t)=>"function"==typeof e?(0,r.jsx)(e,{step:t||0}):e,C={withIcon:!0,allowStepClick:!0,iconPosition:"left"},j=(0,f.d5)((e,t)=>{let{classNames:o,className:n,style:a,styles:s,vars:l,step:p,state:m,color:c,icon:u,completedIcon:f,progressIcon:h,label:y,description:k,withIcon:j,iconSize:P,loading:_,allowStepClick:D,allowStepSelect:N,iconPosition:E,orientation:V,mod:F,...T}=(0,d.w)("StepperStep",C,e),z=v(),L=(0,x.rZ)(),B={classNames:o,styles:s},G="stepCompleted"===m?null:"stepProgress"===m?h:u,Z={"data-progress":"stepProgress"===m||void 0,"data-completed":"stepCompleted"===m||void 0};return(0,r.jsxs)(S.k,{...z.getStyles("step",{className:n,style:a,variant:z.orientation,...B}),mod:[{"icon-position":E||z.iconPosition,"allow-click":D},F],ref:t,...Z,...T,__vars:{"--step-color":c?(0,i.p)(c,L):void 0},tabIndex:D?0:-1,children:[j&&(0,r.jsxs)("span",{...z.getStyles("stepWrapper",B),children:[(0,r.jsxs)("span",{...z.getStyles("stepIcon",B),...Z,children:[(0,r.jsx)(I.u,{mounted:"stepCompleted"===m,transition:"pop",duration:200,children:e=>(0,r.jsx)("span",{...z.getStyles("stepCompletedIcon",{style:e,...B}),children:_?(0,r.jsx)(b.a,{color:"var(--mantine-color-white)",size:"calc(var(--stepper-icon-size) / 2)",...z.getStyles("stepLoader",B)}):w(f,p)||(0,r.jsx)(g.n,{size:"60%"})})}),"stepCompleted"!==m?_?(0,r.jsx)(b.a,{...z.getStyles("stepLoader",B),size:"calc(var(--stepper-icon-size) / 2)",color:c}):w(G||u,p):null]}),"vertical"===V&&(0,r.jsx)("span",{...z.getStyles("verticalSeparator",B),"data-active":"stepCompleted"===m||void 0})]}),(y||k)&&(0,r.jsxs)("span",{...z.getStyles("stepBody",B),"data-orientation":z.orientation,"data-icon-position":E||z.iconPosition,children:[y&&(0,r.jsx)("span",{...z.getStyles("stepLabel",B),children:w(y,p)}),k&&(0,r.jsx)("span",{...z.getStyles("stepDescription",B),children:w(k,p)})]})]})});j.classes=k,j.displayName="@mantine/core/StepperStep";let P={orientation:"horizontal",iconPosition:"left",allowNextStepsSelect:!0,wrap:!0},_=(0,l.Z)((e,{color:t,iconSize:o,size:r,contentPadding:n,radius:l,autoContrast:d})=>({root:{"--stepper-color":t?(0,i.p)(t,e):void 0,"--stepper-icon-color":(0,m.o)(d,e)?(0,p.R)({color:t,theme:e,autoContrast:d}):void 0,"--stepper-icon-size":void 0===o?(0,s.ap)(r,"stepper-icon-size"):(0,a.h)(o),"--stepper-content-padding":(0,s.bG)(n),"--stepper-radius":void 0===l?void 0:(0,s.H5)(l),"--stepper-fz":(0,s.yv)(r),"--stepper-spacing":(0,s.bG)(r)}})),D=(0,f.d5)((e,t)=>{let o=(0,d.w)("Stepper",P,e),{classNames:a,className:s,style:l,styles:i,unstyled:p,vars:m,children:f,onStepClick:v,active:x,icon:g,completedIcon:b,progressIcon:I,color:S,iconSize:w,contentPadding:C,orientation:j,iconPosition:D,size:N,radius:E,allowNextStepsSelect:V,wrap:F,autoContrast:T,...z}=o,L=(0,c.y)({name:"Stepper",classes:k,props:o,className:s,style:l,classNames:a,styles:i,unstyled:p,vars:m,varsResolver:_}),B=n.Children.toArray(f),G=B.filter(e=>e.type!==y),Z=B.find(e=>e.type===y),O=G.reduce((e,t,o)=>{let r=x===o?"stepProgress":x>o?"stepCompleted":"stepInactive",a="function"==typeof v&&("boolean"==typeof t.props.allowStepSelect?t.props.allowStepSelect:"stepCompleted"===r||V);return e.push((0,n.cloneElement)(t,{icon:t.props.icon||g||o+1,key:o,step:o,state:r,onClick:()=>a&&v?.(o),allowStepClick:a,completedIcon:t.props.completedIcon||b,progressIcon:t.props.progressIcon||I,color:t.props.color||S,iconSize:w,iconPosition:t.props.iconPosition||D,orientation:j})),"horizontal"===j&&o!==G.length-1&&e.push((0,n.createElement)("div",{...L("separator"),"data-active":o<x||void 0,"data-orientation":j,key:`separator-${o}`})),e},[]),M=G[x]?.props?.children,W=Z?.props?.children,$=x>G.length-1?W:M;return(0,r.jsx)(h,{value:{getStyles:L,orientation:j,iconPosition:D},children:(0,r.jsxs)(u.x,{...L("root"),ref:t,size:N,...z,children:[(0,r.jsx)(u.x,{...L("steps"),mod:{orientation:j,"icon-position":D,wrap:F&&"vertical"!==j},children:O}),$&&(0,r.jsx)("div",{...L("content"),children:$})]})})});D.classes=k,D.displayName="@mantine/core/Stepper",D.Completed=y,D.Step=j}},function(e){e.O(0,[4185,61177,8511,66748,11340,43092,92888,49774,40179],function(){return e(e.s=42464)}),_N_E=e.O()}]);