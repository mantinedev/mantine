(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[31574],{26049:(e,t,o)=>{"use strict";o.d(t,{C:()=>N});var n=o(6029),r=o(55729),s=o(26082),a=o(14163),i=o(33987),l=o(21351),m=o(70151),p=o(58563),c=o(38919),d=o(15583),u=o(76320),f=o(8411);let[y,h]=(0,o(95681).F)("Stepper component was not found in tree"),x=()=>null;x.displayName="@mantine/core/StepperCompleted";var v=o(49643),g=o(98538),S=o(10109),b=o(89184),I=o(17976),k={root:"m_cbb4ea7e",steps:"m_aaf89d0b",separator:"m_2a371ac9",content:"m_78da155d",step:"m_cbb57068","step--horizontal":"m_f56b1e2c","step--vertical":"m_833edb7e",verticalSeparator:"m_6496b3f3",stepWrapper:"m_818e70b",stepIcon:"m_1959ad01",stepCompletedIcon:"m_a79331dc",stepBody:"m_1956aa2a",stepLabel:"m_12051f6c",stepDescription:"m_164eea74"};let C=(e,t)=>"function"==typeof e?(0,n.jsx)(e,{step:t||0}):e,w={withIcon:!0,allowStepClick:!0,iconPosition:"left"},j=(0,f.P9)((e,t)=>{let{classNames:o,className:r,style:s,styles:a,vars:i,step:m,state:p,color:d,icon:u,completedIcon:f,progressIcon:y,label:x,description:k,withIcon:j,iconSize:P,loading:E,allowStepClick:N,allowStepSelect:_,iconPosition:V,orientation:D,mod:F,...T}=(0,c.Y)("StepperStep",w,e),z=h(),B=(0,v.xd)(),L={classNames:o,styles:a},$="stepCompleted"===p?null:"stepProgress"===p?y:u,G={"data-progress":"stepProgress"===p||void 0,"data-completed":"stepCompleted"===p||void 0};return(0,n.jsxs)(I.N,{...z.getStyles("step",{className:r,style:s,variant:z.orientation,...L}),mod:[{"icon-position":V||z.iconPosition,"allow-click":N},F],ref:t,...G,...T,__vars:{"--step-color":d?(0,l.r)(d,B):void 0},tabIndex:N?0:-1,children:[j&&(0,n.jsxs)("span",{...z.getStyles("stepWrapper",L),children:[(0,n.jsxs)("span",{...z.getStyles("stepIcon",L),...G,children:[(0,n.jsx)(b.e,{mounted:"stepCompleted"===p,transition:"pop",duration:200,children:e=>(0,n.jsx)("span",{...z.getStyles("stepCompletedIcon",{style:e,...L}),children:E?(0,n.jsx)(S.a,{color:"var(--mantine-color-white)",size:"calc(var(--stepper-icon-size) / 2)",...z.getStyles("stepLoader",L)}):C(f,m)||(0,n.jsx)(g.S,{size:"60%"})})}),"stepCompleted"!==p?E?(0,n.jsx)(S.a,{...z.getStyles("stepLoader",L),size:"calc(var(--stepper-icon-size) / 2)",color:d}):C($||u,m):null]}),"vertical"===D&&(0,n.jsx)("span",{...z.getStyles("verticalSeparator",L),"data-active":"stepCompleted"===p||void 0})]}),(x||k)&&(0,n.jsxs)("span",{...z.getStyles("stepBody",L),"data-orientation":z.orientation,"data-icon-position":V||z.iconPosition,children:[x&&(0,n.jsx)("span",{...z.getStyles("stepLabel",L),children:C(x,m)}),k&&(0,n.jsx)("span",{...z.getStyles("stepDescription",L),children:C(k,m)})]})]})});j.classes=k,j.displayName="@mantine/core/StepperStep";let P={orientation:"horizontal",iconPosition:"left",allowNextStepsSelect:!0,wrap:!0},E=(0,i.V)((e,{color:t,iconSize:o,size:n,contentPadding:r,radius:i,autoContrast:c})=>({root:{"--stepper-color":t?(0,l.r)(t,e):void 0,"--stepper-icon-color":(0,p.v)(c,e)?(0,m.w)({color:t,theme:e,autoContrast:c}):void 0,"--stepper-icon-size":void 0===o?(0,a.YC)(n,"stepper-icon-size"):(0,s.D)(o),"--stepper-content-padding":(0,a.GY)(r),"--stepper-radius":void 0===i?void 0:(0,a.nJ)(i),"--stepper-fz":(0,a.ny)(n),"--stepper-spacing":(0,a.GY)(n)}})),N=(0,f.P9)((e,t)=>{let o=(0,c.Y)("Stepper",P,e),{classNames:s,className:a,style:i,styles:l,unstyled:m,vars:p,children:f,onStepClick:h,active:v,icon:g,completedIcon:S,progressIcon:b,color:I,iconSize:C,contentPadding:w,orientation:j,iconPosition:N,size:_,radius:V,allowNextStepsSelect:D,wrap:F,autoContrast:T,attributes:z,...B}=o,L=(0,d.I)({name:"Stepper",classes:k,props:o,className:a,style:i,classNames:s,styles:l,unstyled:m,attributes:z,vars:p,varsResolver:E}),$=r.Children.toArray(f),G=$.filter(e=>e.type!==x),O=$.find(e=>e.type===x),M=G.reduce((e,t,o)=>{let n=v===o?"stepProgress":v>o?"stepCompleted":"stepInactive",s="function"==typeof h&&("boolean"==typeof t.props.allowStepSelect?t.props.allowStepSelect:"stepCompleted"===n||D);return e.push((0,r.cloneElement)(t,{icon:t.props.icon||g||o+1,key:o,step:o,state:n,onClick:()=>s&&h?.(o),allowStepClick:s,completedIcon:t.props.completedIcon||S,progressIcon:t.props.progressIcon||b,color:t.props.color||I,iconSize:C,iconPosition:t.props.iconPosition||N,orientation:j})),"horizontal"===j&&o!==G.length-1&&e.push((0,r.createElement)("div",{...L("separator"),"data-active":o<v||void 0,"data-orientation":j,key:`separator-${o}`})),e},[]),Y=G[v]?.props?.children,J=O?.props?.children,A=v>G.length-1?J:Y;return(0,n.jsx)(y,{value:{getStyles:L,orientation:j,iconPosition:N},children:(0,n.jsxs)(u.a,{...L("root"),ref:t,size:_,...B,children:[(0,n.jsx)(u.a,{...L("steps"),mod:{orientation:j,"icon-position":N,wrap:F&&"vertical"!==j},children:M}),A&&(0,n.jsx)("div",{...L("content"),children:A})]})})});N.classes=k,N.displayName="@mantine/core/Stepper",N.Completed=x,N.Step=j},45761:(e,t,o)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/form/recipes",function(){return o(86574)}])},86574:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>_});var n=o(6029),r=o(16285),s=o(55729),a=o(38774),i=o(4349),l=o(69329);let m={type:"code",component:function(){let e=(0,l.m)({mode:"uncontrolled",initialValues:{email:"",terms:!1}});return(0,s.useEffect)(()=>{new Promise(e=>{setTimeout(()=>e({email:"test@email",terms:!0}),2e3)}).then(t=>{e.setValues(t),e.resetDirty(t)})},[]),(0,n.jsxs)("form",{onSubmit:e.onSubmit(console.log),children:[(0,n.jsx)(a.k,{label:"Email",placeholder:"Email",...e.getInputProps("email")},e.key("email")),(0,n.jsx)(i.S,{mt:"sm",label:"I accept terms and conditions",...e.getInputProps("terms",{type:"checkbox"})},e.key("terms"))]})},code:`
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
`,centered:!0,maxWidth:340};var p=o(76320);let c={type:"code",component:function(){let e=(0,l.m)({mode:"uncontrolled",initialValues:{name:"",occupation:""},onValuesChange:e=>{window.localStorage.setItem("user-form",JSON.stringify(e))}});return(0,s.useEffect)(()=>{if(window.localStorage.getItem("user-form"))try{e.setValues(JSON.parse(window.localStorage.getItem("user-form")))}catch(e){console.log("Failed to parse stored value")}},[]),(0,n.jsxs)(p.a,{maw:340,mx:"auto",children:[(0,n.jsx)(a.k,{label:"Name",placeholder:"Name",...e.getInputProps("name")},e.key("name")),(0,n.jsx)(a.k,{mt:"md",label:"Occupation",placeholder:"Occupation",...e.getInputProps("occupation")},e.key("occupation"))]})},code:`
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
`};var d=o(70047),u=o(17358),f=o(80118),y=o(2485),h=o(57414),x=o(13808),v=o(61087),g=o(8440);function S({id:e,index:t,form:o}){let{attributes:r,listeners:s,setNodeRef:i,transform:l,transition:m}=(0,u.gl)({id:e}),p={transform:f.Ks.Transform.toString(l),transition:m};return(0,n.jsxs)(h.Y,{ref:i,mt:"xs",style:p,...r,children:[(0,n.jsx)(x.o,{...s,children:(0,n.jsx)(y.A,{size:18})}),(0,n.jsx)(a.k,{placeholder:"John Doe",...o.getInputProps(`employees.${t}.name`)},o.key(`employees.${t}.name`)),(0,n.jsx)(a.k,{placeholder:"example@mail.com",...o.getInputProps(`employees.${t}.email`)},o.key(`employees.${t}.email`))]})}let b={type:"code",component:function(){let e=(0,l.m)({mode:"uncontrolled",initialValues:{employees:[{name:"John Doe",email:"john@mantine.dev",key:(0,g.z)()},{name:"Bill Love",email:"bill@mantine.dev",key:(0,g.z)()},{name:"Nancy Eagle",email:"nanacy@mantine.dev",key:(0,g.z)()},{name:"Lim Notch",email:"lim@mantine.dev",key:(0,g.z)()},{name:"Susan Seven",email:"susan@mantine.dev",key:(0,g.z)()}]}}),t=(0,d.FR)((0,d.MS)(d.AN)),o=e.getValues().employees.map(e=>e.key);return(0,n.jsxs)("div",{children:[(0,n.jsx)(d.Mp,{sensors:t,collisionDetection:d.fp,onDragEnd:t=>{let{active:o,over:n}=t;if(n&&o.id!==n.id){let t=e.getValues().employees,r=t.findIndex(e=>e.key===o.id),s=t.findIndex(e=>e.key===n.id);e.setFieldValue("employees",(0,u.be)(t,r,s))}},children:(0,n.jsx)(u.gB,{items:o,strategy:u._G,children:o.map((t,o)=>(0,n.jsx)(S,{id:t,index:o,form:e},t))})}),(0,n.jsx)(h.Y,{justify:"center",mt:"md",children:(0,n.jsx)(v.$,{onClick:()=>e.insertListItem("employees",{name:"",email:"",key:(0,g.z)()}),children:"Add employee"})})]})},code:`
import { Group, TextInput, Button, Center } from '@mantine/core';
import { useForm } from '@mantine/form';
import { randomId } from '@mantine/hooks';
import { IconGripVertical } from '@tabler/icons-react';
import { DndContext, closestCenter, PointerSensor, useSensor, useSensors, DragEndEvent } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

function SortableItem({ id, index, form }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Group ref={setNodeRef} mt="xs" style={style} {...attributes}>
      <Center {...listeners}>
        <IconGripVertical size={18} />
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
  );
}

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

  const sensors = useSensors(useSensor(PointerSensor));

  const items = form.getValues().employees.map((item) => item.key);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const employees = form.getValues().employees;
      const oldIndex = employees.findIndex((e) => e.key === active.id);
      const newIndex = employees.findIndex((e) => e.key === over.id);
      form.setFieldValue(
        'employees',
        arrayMove(employees, oldIndex, newIndex)
      );
    }
  };

  return (
    <div>
      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={items} strategy={verticalListSortingStrategy}>
          {items.map((id, index) => (
            <SortableItem key={id} id={id} index={index} form={form} />
          ))}
        </SortableContext>
      </DndContext>
      <Group justify="center" mt="md">
        <Button onClick={() => form.insertListItem('employees', { name: '', email: '', key: randomId() })}>
          Add employee
        </Button>
      </Group>
    </div>
  );
}
`,centered:!0,maxWidth:440};var I=o(26049),k=o(89009),C=o(1608);let w={type:"code",component:function(){let[e,t]=(0,s.useState)(0),o=(0,l.m)({mode:"uncontrolled",initialValues:{username:"",password:"",name:"",email:"",website:"",github:""},validate:t=>0===e?{username:t.username.trim().length<6?"Username must include at least 6 characters":null,password:t.password.length<6?"Password must include at least 6 characters":null}:1===e?{name:t.name.trim().length<2?"Name must include at least 2 characters":null,email:/^\S+@\S+$/.test(t.email)?null:"Invalid email"}:{}});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(I.C,{active:e,children:[(0,n.jsxs)(I.C.Step,{label:"First step",description:"Profile settings",children:[(0,n.jsx)(a.k,{label:"Username",placeholder:"Username",...o.getInputProps("username")},o.key("username")),(0,n.jsx)(k.y,{mt:"md",label:"Password",placeholder:"Password",...o.getInputProps("password")},o.key("password"))]}),(0,n.jsxs)(I.C.Step,{label:"Second step",description:"Personal information",children:[(0,n.jsx)(a.k,{label:"Name",placeholder:"Name",...o.getInputProps("name")},o.key("name")),(0,n.jsx)(a.k,{mt:"md",label:"Email",placeholder:"Email",...o.getInputProps("email")},o.key("email"))]}),(0,n.jsxs)(I.C.Step,{label:"Final step",description:"Social media",children:[(0,n.jsx)(a.k,{label:"Website",placeholder:"Website",...o.getInputProps("website")},o.key("website")),(0,n.jsx)(a.k,{mt:"md",label:"GitHub",placeholder:"GitHub",...o.getInputProps("github")},o.key("github"))]}),(0,n.jsxs)(I.C.Completed,{children:["Completed! Form values:",(0,n.jsx)(C.C,{block:!0,mt:"xl",children:JSON.stringify(o.getValues(),null,2)})]})]}),(0,n.jsxs)(h.Y,{justify:"flex-end",mt:"xl",children:[0!==e&&(0,n.jsx)(v.$,{variant:"default",onClick:()=>t(e=>e>0?e-1:e),children:"Back"}),3!==e&&(0,n.jsx)(v.$,{onClick:()=>t(e=>o.validate().hasErrors?e:e<3?e+1:e),children:"Next step"})]})]})},code:`
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
`};var j=o(38547),P=o(5262);let E=(0,j.P)(P.XZ.formRecipes);function N(e){let t={h2:"h2",...(0,r.R)(),...e.components},{Demo:o}=t;return o||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"set-initial-values-with-async-request",children:"Set initial values with async request"}),"\n",(0,n.jsx)(o,{data:m}),"\n",(0,n.jsx)(t.h2,{id:"save-form-values-to-local-storage",children:"Save form values to local storage"}),"\n",(0,n.jsx)(o,{data:c}),"\n",(0,n.jsx)(t.h2,{id:"list-items-reordering",children:"List items reordering"}),"\n",(0,n.jsx)(o,{data:b}),"\n",(0,n.jsx)(t.h2,{id:"form-with-multiple-steps",children:"Form with multiple steps"}),"\n",(0,n.jsx)(o,{data:w})]})}function _(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(E,{...e,children:(0,n.jsx)(N,{...e})})}},89009:(e,t,o)=>{"use strict";o.d(t,{y:()=>S});var n=o(6029),r=o(50212),s=o(2011),a=o(7798);o(55729);var i=o(14163),l=o(33987),m=o(38757),p=o(15583),c=o(38919),d=o(59278),u=o(8411),f=o(44572),y=o(29734),h=o(51718),x={root:"m_f61ca620",input:"m_ccf8da4c",innerInput:"m_f2d85dd2",visibilityToggle:"m_b1072d44"};let v={visibilityToggleIcon:({reveal:e})=>(0,n.jsx)("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{width:"var(--psi-icon-size)",height:"var(--psi-icon-size)"},children:(0,n.jsx)("path",{d:e?"M13.3536 2.35355C13.5488 2.15829 13.5488 1.84171 13.3536 1.64645C13.1583 1.45118 12.8417 1.45118 12.6464 1.64645L10.6828 3.61012C9.70652 3.21671 8.63759 3 7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C0.902945 9.08812 2.02314 10.1861 3.36061 10.9323L1.64645 12.6464C1.45118 12.8417 1.45118 13.1583 1.64645 13.3536C1.84171 13.5488 2.15829 13.5488 2.35355 13.3536L4.31723 11.3899C5.29348 11.7833 6.36241 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C14.0971 5.9119 12.9769 4.81391 11.6394 4.06771L13.3536 2.35355ZM9.90428 4.38861C9.15332 4.1361 8.34759 4 7.5 4C4.80285 4 2.52952 5.37816 1.09622 7.50001C1.87284 8.6497 2.89609 9.58106 4.09974 10.1931L9.90428 4.38861ZM5.09572 10.6114L10.9003 4.80685C12.1039 5.41894 13.1272 6.35031 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11C6.65241 11 5.84668 10.8639 5.09572 10.6114Z":"M7.5 11C4.80285 11 2.52952 9.62184 1.09622 7.50001C2.52952 5.37816 4.80285 4 7.5 4C10.1971 4 12.4705 5.37816 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11ZM7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C1.65639 10.2936 4.30786 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C13.3436 4.70638 10.6921 3 7.5 3ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})},g=(0,l.V)((e,{size:t})=>({root:{"--psi-icon-size":(0,i.YC)(t,"psi-icon-size"),"--psi-button-size":(0,i.YC)(t,"psi-button-size")}})),S=(0,u.P9)((e,t)=>{let o=(0,c.Y)("PasswordInput",v,e),{classNames:i,className:l,style:u,styles:h,unstyled:S,vars:b,required:I,error:k,leftSection:C,disabled:w,id:j,variant:P,inputContainer:E,description:N,label:_,size:V,errorProps:D,descriptionProps:F,labelProps:T,withAsterisk:z,inputWrapperOrder:B,wrapperProps:L,radius:$,rightSection:G,rightSectionWidth:O,rightSectionPointerEvents:M,leftSectionWidth:Y,visible:J,defaultVisible:A,onVisibilityChange:W,visibilityToggleIcon:Z,visibilityToggleButtonProps:R,rightSectionProps:U,leftSectionProps:H,leftSectionPointerEvents:K,withErrorStyles:X,mod:q,attributes:Q,...ee}=o,et=(0,s.B)(j),[eo,en]=(0,a.Z)({value:J,defaultValue:A,finalValue:!1,onChange:W}),er=()=>en(!eo),es=(0,p.I)({name:"PasswordInput",classes:x,props:o,className:l,style:u,classNames:i,styles:h,unstyled:S,attributes:Q,vars:b,varsResolver:g}),{resolvedClassNames:ea,resolvedStyles:ei}=(0,m.Y)({classNames:i,styles:h,props:o}),{styleProps:el,rest:em}=(0,d.j)(ee),ep=D?.id||`${et}-error`,ec=F?.id||`${et}-description`,ed=!!k&&"boolean"!=typeof k,eu=!!N,ef=`${ed?ep:""} ${eu?ec:""}`,ey=ef.trim().length>0?ef.trim():void 0,eh=(0,n.jsx)(f.M,{...es("visibilityToggle"),disabled:w,radius:$,"aria-hidden":!R,"aria-pressed":eo,tabIndex:-1,...R,variant:R?.variant??"subtle",color:"gray",unstyled:S,onTouchEnd:e=>{e.preventDefault(),R?.onTouchEnd?.(e),er()},onMouseDown:e=>{e.preventDefault(),R?.onMouseDown?.(e),er()},onKeyDown:e=>{R?.onKeyDown?.(e)," "===e.key&&(e.preventDefault(),er())},children:(0,n.jsx)(Z,{reveal:eo})});return(0,n.jsx)(y.p.Wrapper,{required:I,id:et,label:_,error:k,description:N,size:V,classNames:ea,styles:ei,__staticSelector:"PasswordInput",unstyled:S,withAsterisk:z,inputWrapperOrder:B,inputContainer:E,variant:P,labelProps:{...T,htmlFor:et},descriptionProps:{...F,id:ec},errorProps:{...D,id:ep},mod:q,attributes:Q,...es("root"),...el,...L,children:(0,n.jsx)(y.p,{component:"div",error:k,leftSection:C,size:V,classNames:{...ea,input:(0,r.A)(x.input,ea.input)},styles:ei,radius:$,disabled:w,__staticSelector:"PasswordInput",rightSectionWidth:O,rightSection:G??eh,variant:P,unstyled:S,leftSectionWidth:Y,rightSectionPointerEvents:M||"all",rightSectionProps:U,leftSectionProps:H,leftSectionPointerEvents:K,withAria:!1,withErrorStyles:X,attributes:Q,children:(0,n.jsx)("input",{required:I,"data-invalid":!!k||void 0,"data-with-left-section":!!C||void 0,...es("innerInput"),disabled:w,id:et,ref:t,...em,"aria-describedby":ey,autoComplete:em.autoComplete||"off",type:eo?"text":"password"})})})});S.classes={...h.O.classes,...x},S.displayName="@mantine/core/PasswordInput"}},e=>{e.O(0,[51757,38547,69329,90636,46593,38792],()=>e(e.s=45761)),_N_E=e.O()}]);