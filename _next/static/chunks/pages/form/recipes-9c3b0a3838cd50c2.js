(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9517],{4327:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/form/recipes",function(){return r(90317)}])},90317:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return en}});var o=r(85893),n=r(11151),a=r(19905),l=r(9904),i=r(67294),s=r(69814),p=r(81110),c=r(50780),m=r(19286),u=Object.defineProperty,d=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,b=(e,t,r)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,y=(e,t)=>{for(var r in t||(t={}))f.call(t,r)&&b(e,r,t[r]);if(d)for(var r of d(t))v.call(t,r)&&b(e,r,t[r]);return e};let g=`
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
`,h={type:"code",component:function(){let e=(0,s.c)({initialValues:{email:"",terms:!1}});return(0,i.useEffect)(()=>{new Promise(e=>{setTimeout(()=>e({email:"test@email",terms:!0}),2e3)}).then(t=>{e.setValues(t),e.resetDirty(t)})},[]),i.createElement(p.x,{maw:340,mx:"auto"},i.createElement(c.o,y({label:"Email",placeholder:"Email"},e.getInputProps("email"))),i.createElement(m.X,y({mt:"sm",label:"I accept terms and conditions"},e.getInputProps("terms",{type:"checkbox"}))))},code:g};var w=Object.defineProperty,S=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,x=(e,t,r)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,I=(e,t)=>{for(var r in t||(t={}))P.call(t,r)&&x(e,r,t[r]);if(S)for(var r of S(t))E.call(t,r)&&x(e,r,t[r]);return e};let C=`
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
`,O={type:"code",component:function(){let e=(0,s.c)({initialValues:{name:"",occupation:""}});return(0,i.useEffect)(()=>{let t=window.localStorage.getItem("user-form");if(t)try{e.setValues(JSON.parse(window.localStorage.getItem("user-form")))}catch(e){console.log("Failed to parse stored value")}},[]),(0,i.useEffect)(()=>{window.localStorage.setItem("user-form",JSON.stringify(e.values))},[e.values]),i.createElement(p.x,{maw:340,mx:"auto"},i.createElement(c.o,I({label:"Name",placeholder:"Name"},e.getInputProps("name"))),i.createElement(c.o,I({mt:"md",label:"Occupation",placeholder:"Occupation"},e.getInputProps("occupation"))))},code:C};var j=r(16262),N=r(39394),D=r(14469),k=r(72039),z=r(53777),T=r(54533),B=r(41428),F=Object.defineProperty,V=Object.defineProperties,_=Object.getOwnPropertyDescriptors,L=Object.getOwnPropertySymbols,G=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable,J=(e,t,r)=>t in e?F(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,M=(e,t)=>{for(var r in t||(t={}))G.call(t,r)&&J(e,r,t[r]);if(L)for(var r of L(t))Z.call(t,r)&&J(e,r,t[r]);return e},W=(e,t)=>V(e,_(t));let A=`
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
          form.reorderListItem('employees', { from: source.index, to: destination?.index! })
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
`,R={type:"code",component:function(){let e=(0,s.c)({initialValues:{employees:[{name:"John Doe",email:"john@mantine.dev"},{name:"Bill Love",email:"bill@mantine.dev"},{name:"Nancy Eagle",email:"nanacy@mantine.dev"},{name:"Lim Notch",email:"lim@mantine.dev"},{name:"Susan Seven",email:"susan@mantine.dev"}]}}),t=e.values.employees.map((t,r)=>i.createElement(T._l,{key:r,index:r,draggableId:r.toString()},t=>i.createElement(j.Z,M({ref:t.innerRef,mt:"xs"},t.draggableProps),i.createElement(N.M,M({},t.dragHandleProps),i.createElement(B.Z,{size:"1.2rem"})),i.createElement(c.o,M({placeholder:"John Doe"},e.getInputProps(`employees.${r}.name`))),i.createElement(c.o,M({placeholder:"example@mail.com"},e.getInputProps(`employees.${r}.email`))))));return i.createElement(p.x,{maw:500,mx:"auto"},i.createElement(T.Z5,{onDragEnd:({destination:t,source:r})=>e.reorderListItem("employees",{from:r.index,to:null==t?void 0:t.index})},i.createElement(T.bK,{droppableId:"dnd-list",direction:"vertical"},e=>i.createElement("div",W(M({},e.droppableProps),{ref:e.innerRef}),t,e.placeholder))),i.createElement(j.Z,{justify:"center",mt:"md"},i.createElement(D.z,{onClick:()=>e.insertListItem("employees",{name:"",email:""})},"Add employee")),i.createElement(k.x,{size:"sm",fw:500,mt:"md"},"Form values:"),i.createElement(z.E,{block:!0},JSON.stringify(e.values,null,2)))},code:A};var H=r(46112),$=r(91361),U=Object.defineProperty,q=Object.getOwnPropertySymbols,K=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable,Q=(e,t,r)=>t in e?U(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Y=(e,t)=>{for(var r in t||(t={}))K.call(t,r)&&Q(e,r,t[r]);if(q)for(var r of q(t))X.call(t,r)&&Q(e,r,t[r]);return e};let ee=`
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
`,et={type:"code",component:function(){let[e,t]=(0,i.useState)(0),r=(0,s.c)({initialValues:{username:"",password:"",name:"",email:"",website:"",github:""},validate:t=>0===e?{username:t.username.trim().length<6?"Username must include at least 6 characters":null,password:t.password.length<6?"Password must include at least 6 characters":null}:1===e?{name:t.name.trim().length<2?"Name must include at least 2 characters":null,email:/^\S+@\S+$/.test(t.email)?null:"Invalid email"}:{}}),o=()=>t(e=>r.validate().hasErrors?e:e<3?e+1:e),n=()=>t(e=>e>0?e-1:e);return i.createElement(i.Fragment,null,i.createElement(H.v,{active:e},i.createElement(H.v.Step,{label:"First step",description:"Profile settings"},i.createElement(c.o,Y({label:"Username",placeholder:"Username"},r.getInputProps("username"))),i.createElement($.W,Y({mt:"md",label:"Password",placeholder:"Password"},r.getInputProps("password")))),i.createElement(H.v.Step,{label:"Second step",description:"Personal information"},i.createElement(c.o,Y({label:"Name",placeholder:"Name"},r.getInputProps("name"))),i.createElement(c.o,Y({mt:"md",label:"Email",placeholder:"Email"},r.getInputProps("email")))),i.createElement(H.v.Step,{label:"Final step",description:"Social media"},i.createElement(c.o,Y({label:"Website",placeholder:"Website"},r.getInputProps("website"))),i.createElement(c.o,Y({mt:"md",label:"GitHub",placeholder:"GitHub"},r.getInputProps("github")))),i.createElement(H.v.Completed,null,"Completed! Form values:",i.createElement(z.E,{block:!0,mt:"xl"},JSON.stringify(r.values,null,2)))),i.createElement(j.Z,{justify:"flex-end",mt:"xl"},0!==e&&i.createElement(D.z,{variant:"default",onClick:n},"Back"),3!==e&&i.createElement(D.z,{onClick:o},"Next step")))},code:ee},er=(0,a.A)(l.us.formRecipes);function eo(e){let t=Object.assign({h2:"h2"},(0,n.ah)(),e.components),{Demo:r}=t;return r||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"set-initial-values-with-async-request",children:"Set initial values with async request"}),"\n",(0,o.jsx)(r,{data:h}),"\n",(0,o.jsx)(t.h2,{id:"save-form-values-to-local-storage",children:"Save form values to local storage"}),"\n",(0,o.jsx)(r,{data:O}),"\n",(0,o.jsx)(t.h2,{id:"list-items-reordering",children:"List items reordering"}),"\n",(0,o.jsx)(r,{data:R}),"\n",(0,o.jsx)(t.h2,{id:"form-with-multiple-steps",children:"Form with multiple steps"}),"\n",(0,o.jsx)(r,{data:et})]})}var en=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(er,Object.assign({},e,{children:(0,o.jsx)(eo,e)}))}},39394:function(e,t,r){"use strict";r.d(t,{M:function(){return y}});var o=r(67294),n={root:"m-4451eb3a"},a=r(70405),l=r(30370),i=r(86109),s=r(81110),p=Object.defineProperty,c=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))m.call(t,r)&&d(e,r,t[r]);if(c)for(var r of c(t))u.call(t,r)&&d(e,r,t[r]);return e},v=(e,t)=>{var r={};for(var o in e)m.call(e,o)&&0>t.indexOf(o)&&(r[o]=e[o]);if(null!=e&&c)for(var o of c(e))0>t.indexOf(o)&&u.call(e,o)&&(r[o]=e[o]);return r};let b={},y=(0,a.b)((e,t)=>{let r=(0,l.w)("Center",b,e),{classNames:a,className:p,style:c,styles:m,unstyled:u,vars:d,inline:y}=r,g=v(r,["classNames","className","style","styles","unstyled","vars","inline"]),h=(0,i.y)({name:"Center",props:r,classes:n,className:p,style:c,classNames:a,styles:m,unstyled:u,vars:d});return o.createElement(s.x,f(f({ref:t,mod:{inline:y}},h("root")),g))});y.classes=n,y.displayName="@mantine/core/Center"},91361:function(e,t,r){"use strict";r.d(t,{W:function(){return k}});var o=r(67294),n=r(40624),a=r(9779),l=r(643);let i=({reveal:e})=>o.createElement("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{width:"var(--psi-icon-size)",height:"var(--psi-icon-size)"}},o.createElement("path",{d:e?"M13.3536 2.35355C13.5488 2.15829 13.5488 1.84171 13.3536 1.64645C13.1583 1.45118 12.8417 1.45118 12.6464 1.64645L10.6828 3.61012C9.70652 3.21671 8.63759 3 7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C0.902945 9.08812 2.02314 10.1861 3.36061 10.9323L1.64645 12.6464C1.45118 12.8417 1.45118 13.1583 1.64645 13.3536C1.84171 13.5488 2.15829 13.5488 2.35355 13.3536L4.31723 11.3899C5.29348 11.7833 6.36241 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C14.0971 5.9119 12.9769 4.81391 11.6394 4.06771L13.3536 2.35355ZM9.90428 4.38861C9.15332 4.1361 8.34759 4 7.5 4C4.80285 4 2.52952 5.37816 1.09622 7.50001C1.87284 8.6497 2.89609 9.58106 4.09974 10.1931L9.90428 4.38861ZM5.09572 10.6114L10.9003 4.80685C12.1039 5.41894 13.1272 6.35031 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11C6.65241 11 5.84668 10.8639 5.09572 10.6114Z":"M7.5 11C4.80285 11 2.52952 9.62184 1.09622 7.50001C2.52952 5.37816 4.80285 4 7.5 4C10.1971 4 12.4705 5.37816 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11ZM7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C1.65639 10.2936 4.30786 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C13.3436 4.70638 10.6921 3 7.5 3ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}));var s={root:"m-f61ca620",input:"m-ccf8da4c",innerInput:"m-f2d85dd2",visibilityToggle:"m-b1072d44"},p=r(89363),c=r(52561),m=r(70097),u=r(3154),d=r(30370),f=r(86109),v=r(28816),b=r(7872),y=r(8586),g=r(48468),h=Object.defineProperty,w=Object.defineProperties,S=Object.getOwnPropertyDescriptors,P=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,I=(e,t,r)=>t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,C=(e,t)=>{for(var r in t||(t={}))E.call(t,r)&&I(e,r,t[r]);if(P)for(var r of P(t))x.call(t,r)&&I(e,r,t[r]);return e},O=(e,t)=>w(e,S(t)),j=(e,t)=>{var r={};for(var o in e)E.call(e,o)&&0>t.indexOf(o)&&(r[o]=e[o]);if(null!=e&&P)for(var o of P(e))0>t.indexOf(o)&&x.call(e,o)&&(r[o]=e[o]);return r};let N={__staticSelector:"PasswordInput",visibilityToggleIcon:i},D=(0,y.Z)((e,{size:t})=>({root:{"--psi-icon-size":(0,g.ap)(t,"psi-icon-size"),"--psi-button-size":(0,g.ap)(t,"psi-button-size")}})),k=(0,u.d)((e,t)=>{let r=(0,d.w)("PasswordInput",N,e),{classNames:i,className:m,style:u,styles:y,unstyled:g,vars:h,required:w,error:S,leftSection:P,disabled:E,id:x,variant:I,inputContainer:k,description:z,label:T,size:B,__staticSelector:F,errorProps:V,descriptionProps:_,labelProps:L,withAsterisk:G,inputWrapperOrder:Z,wrapperProps:J,radius:M,rightSection:W,rightSectionWidth:A,leftSectionWidth:R,visible:H,defaultVisible:$,onVisibilityChange:U,visibilityToggleIcon:q,visibilityToggleButtonProps:K,rightSectionProps:X,leftSectionProps:Q,leftSectionPointerEvents:Y}=r,ee=j(r,["classNames","className","style","styles","unstyled","vars","required","error","leftSection","disabled","id","variant","inputContainer","description","label","size","__staticSelector","errorProps","descriptionProps","labelProps","withAsterisk","inputWrapperOrder","wrapperProps","radius","rightSection","rightSectionWidth","leftSectionWidth","visible","defaultVisible","onVisibilityChange","visibilityToggleIcon","visibilityToggleButtonProps","rightSectionProps","leftSectionProps","leftSectionPointerEvents"]),et=(0,a.M)(x),[er,eo]=(0,l.C)({value:H,defaultValue:$,finalValue:!1,onChange:U}),en=()=>eo(!er),ea=(0,f.y)({name:"PasswordInput",classes:s,props:r,className:m,style:u,classNames:i,styles:y,unstyled:g,vars:h,varsResolver:D}),{resolvedClassNames:el,resolvedStyles:ei}=(0,v.h)({classNames:i,styles:y,props:r}),{styleProps:es,rest:ep}=(0,b.c)(ee),ec=o.createElement(p.A,O(C(O(C({},ea("visibilityToggle")),{radius:M,"aria-hidden":!K,tabIndex:-1}),K),{variant:"subtle",color:"gray",unstyled:g,onMouseDown:e=>{var t;e.preventDefault(),null==(t=null==K?void 0:K.onMouseDown)||t.call(K,e),en()},onKeyDown:e=>{var t;null==(t=null==K?void 0:K.onKeyDown)||t.call(K,e)," "===e.key&&(e.preventDefault(),en())}}),o.createElement(q,{reveal:er}));return o.createElement(c.I.Wrapper,C(C(C({required:w,id:et,label:T,error:S,description:z,size:B,classNames:el,styles:ei,__staticSelector:F,errorProps:V,descriptionProps:_,unstyled:g,withAsterisk:G,inputWrapperOrder:Z,inputContainer:k,variant:I,labelProps:O(C({},L),{htmlFor:et})},ea("root")),es),J),o.createElement(c.I,{component:"div",error:S,leftSection:P,size:B,classNames:O(C({},el),{input:(0,n.Z)(s.input,el.input)}),styles:ei,radius:M,disabled:E,__staticSelector:F,rightSectionWidth:A,rightSection:null!=W?W:ec,variant:I,unstyled:g,leftSectionWidth:R,rightSectionPointerEvents:"all",rightSectionProps:X,leftSectionProps:Q,leftSectionPointerEvents:Y,withAria:!1},o.createElement("input",O(C(O(C({required:w,"data-invalid":!!S||void 0,"data-with-left-section":!!P||void 0},ea("innerInput")),{disabled:E,id:et,ref:t}),ep),{autoComplete:ep.autoComplete||"off",type:er?"text":"password"}))))});k.classes=C(C({},m.M.classes),s),k.displayName="@mantine/core/PasswordInput"},46112:function(e,t,r){"use strict";r.d(t,{v:function(){return $}});var o=r(67294),n=r(45763);let[a,l]=(0,n.R)("Stepper component was not found in tree");var i={root:"m-cbb4ea7e",steps:"m-aaf89d0b",separator:"m-2a371ac9",content:"m-78da155d",step:"m-cbb57068","step--horizontal":"m-f56b1e2c","step--vertical":"m-833edb7e",verticalSeparator:"m-6496b3f3",stepWrapper:"m-818e70b",stepIcon:"m-1959ad01",stepCompletedIcon:"m-a79331dc",stepBody:"m-1956aa2a",stepLabel:"m-12051f6c",stepDescription:"m-164eea74"},s=r(86610),p=r(56338),c=r(77015),m=r(38238),u=r(3154),d=r(30370),f=r(43440),v=r(40184),b=Object.defineProperty,y=Object.defineProperties,g=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,w=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable,P=(e,t,r)=>t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,E=(e,t)=>{for(var r in t||(t={}))w.call(t,r)&&P(e,r,t[r]);if(h)for(var r of h(t))S.call(t,r)&&P(e,r,t[r]);return e},x=(e,t)=>y(e,g(t)),I=(e,t)=>{var r={};for(var o in e)w.call(e,o)&&0>t.indexOf(o)&&(r[o]=e[o]);if(null!=e&&h)for(var o of h(e))0>t.indexOf(o)&&S.call(e,o)&&(r[o]=e[o]);return r};let C=(e,t)=>"function"==typeof e?o.createElement(e,{step:t||0}):e,O={withIcon:!0,allowStepClick:!0,iconPosition:"left"},j=(0,u.d)((e,t)=>{let r=(0,d.w)("StepperStep",O,e),{classNames:n,className:a,style:i,styles:u,vars:b,step:y,state:g,color:h,icon:w,completedIcon:S,progressIcon:P,label:j,description:N,withIcon:D,iconSize:k,loading:z,allowStepClick:T,allowStepSelect:B,iconPosition:F,orientation:V}=r,_=I(r,["classNames","className","style","styles","vars","step","state","color","icon","completedIcon","progressIcon","label","description","withIcon","iconSize","loading","allowStepClick","allowStepSelect","iconPosition","orientation"]),L=l(),G=(0,f.rZ)(),Z={classNames:n,styles:u},J={"data-progress":"stepProgress"===g||void 0,"data-completed":"stepCompleted"===g||void 0};return o.createElement(s.k,x(E(E(x(E({},L.getStyles("step",E({className:a,style:i,variant:L.orientation},Z))),{mod:{"icon-position":F||L.iconPosition,"allow-click":T},ref:t}),J),_),{__vars:{"--step-color":h?(0,v.p)(h,G):void 0},tabIndex:T?0:-1}),D&&o.createElement("span",E({},L.getStyles("stepWrapper",Z)),o.createElement("span",E(E({},L.getStyles("stepIcon",Z)),J),o.createElement(p.u,{mounted:"stepCompleted"===g,transition:"pop",duration:200},e=>o.createElement("span",E({},L.getStyles("stepCompletedIcon",E({style:e},Z))),z?o.createElement(c.a,E({color:"var(--mantine-color-white)",size:"calc(var(--stepper-icon-size) / 2)"},L.getStyles("stepLoader",Z))):C(S,y)||o.createElement(m.n,{size:"60%"}))),"stepCompleted"!==g?z?o.createElement(c.a,x(E({},L.getStyles("stepLoader",Z)),{size:"calc(var(--stepper-icon-size) / 2)",color:h})):C(("stepCompleted"===g?null:"stepProgress"===g?P:w)||w,y):null),"vertical"===V&&o.createElement("span",x(E({},L.getStyles("verticalSeparator",Z)),{"data-active":"stepCompleted"===g||void 0}))),(j||N)&&o.createElement("span",x(E({},L.getStyles("stepBody",Z)),{"data-orientation":L.orientation,"data-icon-position":F||L.iconPosition}),j&&o.createElement("span",E({},L.getStyles("stepLabel",Z)),C(j,y)),N&&o.createElement("span",E({},L.getStyles("stepDescription",Z)),C(N,y))))});j.classes=i,j.displayName="@mantine/core/StepperStep";let N=()=>null;N.displayName="@mantine/core/StepperCompleted";var D=r(86109),k=r(81110),z=r(8586),T=r(48468),B=r(72622),F=Object.defineProperty,V=Object.defineProperties,_=Object.getOwnPropertyDescriptors,L=Object.getOwnPropertySymbols,G=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable,J=(e,t,r)=>t in e?F(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,M=(e,t)=>{for(var r in t||(t={}))G.call(t,r)&&J(e,r,t[r]);if(L)for(var r of L(t))Z.call(t,r)&&J(e,r,t[r]);return e},W=(e,t)=>V(e,_(t)),A=(e,t)=>{var r={};for(var o in e)G.call(e,o)&&0>t.indexOf(o)&&(r[o]=e[o]);if(null!=e&&L)for(var o of L(e))0>t.indexOf(o)&&Z.call(e,o)&&(r[o]=e[o]);return r};let R={orientation:"horizontal",iconPosition:"left",allowNextStepsSelect:!0,wrap:!0},H=(0,z.Z)((e,{color:t,iconSize:r,size:o,contentPadding:n,radius:a})=>({root:{"--stepper-color":t?(0,v.p)(t,e):void 0,"--stepper-icon-size":void 0===r?(0,T.ap)(o,"stepper-icon-size"):(0,B.h)(r),"--stepper-content-padding":(0,T.bG)(n),"--stepper-radius":void 0===a?void 0:(0,T.H5)(a),"--stepper-fz":(0,T.yv)(o),"--stepper-spacing":(0,T.bG)(o)}})),$=(0,u.d)((e,t)=>{var r,n,l;let s=(0,d.w)("Stepper",R,e),{classNames:p,className:c,style:m,styles:u,unstyled:f,vars:v,children:b,onStepClick:y,active:g,icon:h,completedIcon:w,progressIcon:S,color:P,iconSize:E,contentPadding:x,orientation:I,iconPosition:C,size:O,radius:j,allowNextStepsSelect:z,wrap:T}=s,B=A(s,["classNames","className","style","styles","unstyled","vars","children","onStepClick","active","icon","completedIcon","progressIcon","color","iconSize","contentPadding","orientation","iconPosition","size","radius","allowNextStepsSelect","wrap"]),F=(0,D.y)({name:"Stepper",classes:i,props:s,className:c,style:m,classNames:p,styles:u,unstyled:f,vars:v,varsResolver:H}),V=o.Children.toArray(b),_=V.filter(e=>e.type!==N),L=V.find(e=>e.type===N),G=_.reduce((e,t,r)=>{let n=g===r?"stepProgress":g>r?"stepCompleted":"stepInactive",a="function"==typeof y&&("boolean"==typeof t.props.allowStepSelect?t.props.allowStepSelect:"stepCompleted"===n||z);return e.push((0,o.cloneElement)(t,{icon:t.props.icon||h||r+1,key:r,step:r,state:n,onClick:()=>a&&(null==y?void 0:y(r)),allowStepClick:a,completedIcon:t.props.completedIcon||w,progressIcon:t.props.progressIcon||S,color:t.props.color||P,iconSize:E,radius:j,iconPosition:t.props.iconPosition||C,orientation:I,unstyled:f})),"horizontal"===I&&r!==_.length-1&&e.push(o.createElement("div",W(M({},F("separator")),{"data-active":r<g||void 0,"data-orientation":I,key:`separator-${r}`}))),e},[]),Z=null==(n=null==(r=_[g])?void 0:r.props)?void 0:n.children,J=null==(l=null==L?void 0:L.props)?void 0:l.children,$=g>_.length-1?J:Z;return o.createElement(a,{value:{getStyles:F,orientation:I,iconPosition:C}},o.createElement(k.x,M(W(M({},F("root")),{ref:t,size:O}),B),o.createElement(k.x,W(M({},F("steps")),{mod:{orientation:I,"icon-position":C,wrap:T&&"vertical"!==I}}),G),$&&o.createElement("div",M({},F("content")),$)))});$.classes=i,$.displayName="@mantine/core/Stepper",$.Completed=N,$.Step=j}},function(e){e.O(0,[846,1514,8992,178,9814,9774,2888,179],function(){return e(e.s=4327)}),_N_E=e.O()}]);