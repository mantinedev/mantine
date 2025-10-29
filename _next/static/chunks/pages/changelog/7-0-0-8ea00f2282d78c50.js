(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9584],{767:(e,n,o)=>{"use strict";o.d(n,{n:()=>i});var r=o(6029),t=o(89238),s=o(37873);let i={type:"code",component:function(){return(0,r.jsx)(t.r,{cols:{base:1,sm:2,lg:5},spacing:{base:10,sm:"xl"},verticalSpacing:{base:"md",sm:"xl"},children:s.A})},code:`
import { SimpleGrid } from '@mantine/core';

function Demo() {
  return (
    <SimpleGrid
      cols={{ base: 1, sm: 2, lg: 5 }}
      spacing={{ base: 10, sm: 'xl' }}
      verticalSpacing={{ base: 'md', sm: 'xl' }}
    >
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </SimpleGrid>
  );
}
`}},5031:(e,n,o)=>{"use strict";o.d(n,{n:()=>i});var r=o(6029),t=o(72055),s=o(84384);let i={type:"code",code:`
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>1</Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>2</Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>3</Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>4</Grid.Col>
    </Grid>
  );
}
`,component:function(){return(0,r.jsxs)(t.x,{children:[(0,r.jsx)(s.I,{span:{base:12,md:6,lg:3},children:"1"}),(0,r.jsx)(s.I,{span:{base:12,md:6,lg:3},children:"2"}),(0,r.jsx)(s.I,{span:{base:12,md:6,lg:3},children:"3"}),(0,r.jsx)(s.I,{span:{base:12,md:6,lg:3},children:"4"})]})}}},9791:(e,n,o)=>{"use strict";o.d(n,{B:()=>i});var r=o(6029),t=o(57414),s=o(61087);let i={type:"code",component:function(){return(0,r.jsxs)(t.Y,{justify:"center",children:[(0,r.jsx)(s.$,{hiddenFrom:"sm",color:"orange",children:"Hidden from sm"}),(0,r.jsx)(s.$,{visibleFrom:"sm",color:"cyan",children:"Visible from sm"}),(0,r.jsx)(s.$,{visibleFrom:"md",color:"pink",children:"Visible from md"})]})},code:`
import { Button, Group } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <Button hiddenFrom="sm" color="orange">
        Hidden from sm
      </Button>
      <Button visibleFrom="sm" color="cyan">
        Visible from sm
      </Button>
      <Button visibleFrom="md" color="pink">
        Visible from md
      </Button>
    </Group>
  );
}
`}},16877:(e,n,o)=>{"use strict";o.d(n,{h:()=>l});var r=o(6029),t=o(45208),s=o(57414),i=o(61087);let l={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.E,{size:"sm",mb:5,fw:500,children:"Filled variant"}),(0,r.jsxs)(s.Y,{children:[(0,r.jsx)(i.$,{color:"cyan",children:"Theme color"}),(0,r.jsx)(i.$,{color:"#1D72FE",children:"Hex color"})]}),(0,r.jsx)(t.E,{size:"sm",mb:5,mt:"md",fw:500,children:"Light variant"}),(0,r.jsxs)(s.Y,{children:[(0,r.jsx)(i.$,{variant:"light",color:"cyan",children:"Theme color"}),(0,r.jsx)(i.$,{variant:"light",color:"#1D72FE",children:"Hex color"})]}),(0,r.jsx)(t.E,{size:"sm",mb:5,mt:"md",fw:500,children:"Outline variant"}),(0,r.jsxs)(s.Y,{children:[(0,r.jsx)(i.$,{variant:"outline",color:"cyan",children:"Theme color"}),(0,r.jsx)(i.$,{variant:"outline",color:"#1D72FE",children:"Hex color"})]})]})},defaultExpanded:!1,code:`
import { Group, Button, Text } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text size="sm" mb={5} fw={500}>
        Filled variant
      </Text>
      <Group>
        <Button color="cyan">Theme color</Button>
        <Button color="#1D72FE">Hex color</Button>
      </Group>

      <Text size="sm" mb={5} mt="md" fw={500}>
        Light variant
      </Text>
      <Group>
        <Button variant="light" color="cyan">
          Theme color
        </Button>
        <Button variant="light" color="#1D72FE">
          Hex color
        </Button>
      </Group>

      <Text size="sm" mb={5} mt="md" fw={500}>
        Outline variant
      </Text>
      <Group>
        <Button variant="outline" color="cyan">
          Theme color
        </Button>
        <Button variant="outline" color="#1D72FE">
          Hex color
        </Button>
      </Group>
    </>
  );
}

`}},19179:(e,n,o)=>{"use strict";o.d(n,{$:()=>l});var r=o(6029),t=o(55377),s=o(57414),i=o(61087);let l={type:"code",component:function(){let{setColorScheme:e,clearColorScheme:n}=(0,t.C)();return(0,r.jsxs)(s.Y,{children:[(0,r.jsx)(i.$,{onClick:()=>e("light"),children:"Light"}),(0,r.jsx)(i.$,{onClick:()=>e("dark"),children:"Dark"}),(0,r.jsx)(i.$,{onClick:()=>e("auto"),children:"Auto"}),(0,r.jsx)(i.$,{onClick:n,children:"Clear"})]})},centered:!0,code:`
import { useMantineColorScheme, Button, Group } from '@mantine/core';

function Demo() {
  const { setColorScheme, clearColorScheme } = useMantineColorScheme();

  return (
    <Group>
      <Button onClick={() => setColorScheme('light')}>Light</Button>
      <Button onClick={() => setColorScheme('dark')}>Dark</Button>
      <Button onClick={() => setColorScheme('auto')}>Auto</Button>
      <Button onClick={clearColorScheme}>Clear</Button>
    </Group>
  );
}
`}},21203:(e,n,o)=>{"use strict";o.d(n,{p:()=>s});var r=o(6029),t=o(4218);let s={type:"code",component:function(){return(0,r.jsx)(t.u,{label:"Press Enter to submit a tag",placeholder:"Pick tag from list",data:["React","Angular","Svelte"]})},code:`
import { TagsInput } from '@mantine/core';

function Demo() {
  return (
    <TagsInput
      label="Press Enter to submit a tag"
      placeholder="Pick tag from list"
      data={['React', 'Angular', 'Svelte']}
    />
  );
}
`,maxWidth:340,centered:!0}},22955:(e,n,o)=>{"use strict";o.d(n,{Q:()=>d});var r=o(6029),t=o(17093),s=o(29734),i=o(49643);let l=`
import { Input, createTheme, MantineProvider } from '@mantine/core';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    Input: Input.extend({ classNames: classes }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Input placeholder="Size XXL" size="xxl" />
      <Input placeholder="Size XXS" size="xxs" mt="md" />
    </MantineProvider>
  );
}
`,a=`
.wrapper {
  &[data-size='xxl'] {
    & .input {
      padding-left: 28px;
      padding-right: 28px;
      height: 68px;
      font-size: 28px;
    }
  }

  &[data-size='xxs'] {
    & .input {
      padding-left: 10px;
      padding-right: 10px;
      height: 28px;
      font-size: 10px;
    }
  }
}
`,c=(0,t.a)({components:{Input:s.p.extend({classNames:{wrapper:"m_b4c95450",input:"m_2be5f2c7"}})}}),d={type:"code",component:function(){return(0,r.jsxs)(i.nW,{theme:c,children:[(0,r.jsx)(s.p,{placeholder:"Size XXL",size:"xxl"}),(0,r.jsx)(s.p,{placeholder:"Size XXS",size:"xxs",mt:"md"})]})},maxWidth:360,centered:!0,code:[{language:"tsx",code:l,fileName:"Demo.tsx"},{language:"scss",code:a,fileName:"Demo.module.css"}]}},28891:(e,n,o)=>{"use strict";o.d(n,{L:()=>d});var r=o(6029),t=o(55729),s=o(79116),i=o(2061),l=o(51718),a=o(29734);let c=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate"],d={type:"code",component:function(){let e=(0,s.B)({onDropdownClose:()=>e.resetSelectedOption()}),[n,o]=(0,t.useState)(null),d=c.map(e=>(0,r.jsx)(i.G.Option,{value:e,children:e},e));return(0,r.jsxs)(i.G,{store:e,onOptionSubmit:n=>{o(n),e.closeDropdown()},children:[(0,r.jsx)(i.G.Target,{children:(0,r.jsx)(l.O,{component:"button",type:"button",pointer:!0,rightSection:(0,r.jsx)(i.G.Chevron,{}),rightSectionPointerEvents:"none",onClick:()=>e.toggleDropdown(),children:n||(0,r.jsx)(a.p.Placeholder,{children:"Pick value"})})}),(0,r.jsx)(i.G.Dropdown,{children:(0,r.jsx)(i.G.Options,{children:d})})]})},maxWidth:340,centered:!0,defaultExpanded:!1,code:`
import { useState } from 'react';
import { Input, InputBase, Combobox, useCombobox } from '@mantine/core';

const groceries = ['\u{1F34E} Apples', '\u{1F34C} Bananas', '\u{1F966} Broccoli', '\u{1F955} Carrots', '\u{1F36B} Chocolate'];

function Demo() {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState<string | null>(null);

  const options = groceries.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={combobox}
      onOptionSubmit={(val) => {
        setValue(val);
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <InputBase
          component="button"
          type="button"
          pointer
          rightSection={<Combobox.Chevron />}
          rightSectionPointerEvents="none"
          onClick={() => combobox.toggleDropdown()}
        >
          {value || <Input.Placeholder>Pick value</Input.Placeholder>}
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
`}},29523:(e,n,o)=>{"use strict";o.d(n,{f:()=>m});var r=o(6029),t=o(50212),s=o(17093),i=o(38774),l=o(49643),a={labelRequired:"m_686577e7",inputError:"m_933d67aa"};let c=`
import cx from 'clsx';
import { MantineProvider, createTheme, TextInput } from '@mantine/core';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    TextInput: TextInput.extend({
      classNames: (_theme, props) => ({
        label: cx({ [classes.labelRequired]: props.required }),
        input: cx({ [classes.inputError]: props.error }),
      }),
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <TextInput required label="Required input" placeholder="Required input" />
      <TextInput error label="Input with error" placeholder="Input with error" mt="md" />
    </MantineProvider>
  );
}
`,d=`
.labelRequired {
  color: var(--mantine-color-red-filled);
}

.inputError {
  background-color: var(--mantine-color-red-light);
}
`,h=(0,s.a)({components:{TextInput:i.k.extend({classNames:(e,n)=>({label:(0,t.A)({[a.labelRequired]:n.required}),input:(0,t.A)({[a.inputError]:n.error})})})}}),m={type:"code",component:function(){return(0,r.jsxs)(l.nW,{theme:h,children:[(0,r.jsx)(i.k,{required:!0,label:"Required input",placeholder:"Required input"}),(0,r.jsx)(i.k,{error:!0,label:"Input with error",placeholder:"Input with error",mt:"md"})]})},code:[{fileName:"Demo.tsx",code:c,language:"tsx"},{fileName:"Demo.module.css",code:d,language:"scss"}]}},37873:(e,n,o)=>{"use strict";o.d(n,{A:()=>c});var r=o(6029),t=o(50212),s=o(76320),i=o(45208),l={item:"m_a4dc100e",label:"m_f6c78959"};function a({className:e,children:n,...o}){return(0,r.jsx)(s.a,{className:(0,t.A)(l.item,e),...o,children:(0,r.jsx)(i.E,{className:l.label,children:n})})}let c=[,,,,,].fill(0).map((e,n)=>(0,r.jsx)(a,{children:n+1},n))},39544:(e,n,o)=>{"use strict";o.d(n,{c:()=>s});var r=o(10109);let t=`
import { Loader } from '@mantine/core';

function Demo() {
  return <Loader{{props}} />;
}
`,s={type:"configurator",component:r.a,code:t,centered:!0,controls:[{type:"color",prop:"color",initialValue:"blue",libraryValue:null},{type:"size",prop:"size",initialValue:"md",libraryValue:"md"},{type:"segmented",prop:"type",data:["oval","bars","dots"],initialValue:"oval",libraryValue:"oval"}]}},44704:(e,n,o)=>{"use strict";o.d(n,{C:()=>i});var r=o(6029),t=o(88186),s=o(38774);let i={type:"configurator",component:function(e){return(0,r.jsxs)(t.L,{legend:"Personal information",...e,children:[(0,r.jsx)(s.k,{label:"Your name",placeholder:"Your name"}),(0,r.jsx)(s.k,{label:"Email",placeholder:"Email",mt:"md"})]})},code:`
import { Fieldset, TextInput } from '@mantine/core';

function Demo() {
  return (
    <Fieldset legend="Personal information"{{props}}>
      <TextInput label="Your name" placeholder="Your name" />
      <TextInput label="Email" placeholder="Email" mt="md" />
    </Fieldset>
  );
}
`,maxWidth:500,centered:!0,controls:[{type:"segmented",prop:"variant",initialValue:"default",libraryValue:"default",data:["default","filled","unstyled"]},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"}]}},46996:(e,n,o)=>{"use strict";o.d(n,{W:()=>d});var r=o(6029),t=o(55729),s=o(41279),i=o(61087),l=o(67666),a=o(33808);let c=["Home","About us","Contacts","Blog","Careers","Terms of service"],d={type:"code",component:function(){let[e,n]=(0,t.useMemo)(l.Z3,[]),[o,d]=(0,t.useState)(""),h=c.filter(e=>e.toLowerCase().includes(o.toLowerCase().trim())).map(e=>(0,r.jsx)(a.L.Action,{label:e},e));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.$,{onClick:n.open,children:"Open spotlight"}),(0,r.jsxs)(a.L.Root,{store:e,query:o,onQueryChange:d,shortcut:null,children:[(0,r.jsx)(a.L.Search,{placeholder:"Search...",leftSection:(0,r.jsx)(s.A,{stroke:1.5})}),(0,r.jsx)(a.L.ActionsList,{children:h.length>0?h:(0,r.jsx)(a.L.Empty,{children:"Nothing found..."})})]})]})},code:`
import { useState } from 'react';
import { Spotlight, spotlight } from '@mantine/spotlight';
import { Button } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

const data = ['Home', 'About us', 'Contacts', 'Blog', 'Careers', 'Terms of service'];

function Demo() {
  const [query, setQuery] = useState('');

  const items = data
    .filter((item) => item.toLowerCase().includes(query.toLowerCase().trim()))
    .map((item) => <Spotlight.Action key={item} label={item} />);

  return (
    <>
      <Button onClick={spotlight.open}>Open spotlight</Button>

      <Spotlight.Root query={query} onQueryChange={setQuery}>
        <Spotlight.Search placeholder="Search..." leftSection={<IconSearch stroke={1.5} />} />
        <Spotlight.ActionsList>
          {items.length > 0 ? items : <Spotlight.Empty>Nothing found...</Spotlight.Empty>}
        </Spotlight.ActionsList>
      </Spotlight.Root>
    </>
  );
}
`,centered:!0}},53751:(e,n,o)=>{"use strict";o.d(n,{Y:()=>r,c:()=>t});let r=[{position:6,mass:12.011,symbol:"C",name:"Carbon"},{position:7,mass:14.007,symbol:"N",name:"Nitrogen"},{position:39,mass:88.906,symbol:"Y",name:"Yttrium"},{position:56,mass:137.33,symbol:"Ba",name:"Barium"},{position:58,mass:140.12,symbol:"Ce",name:"Cerium"}],t=[{position:1,mass:1.008,symbol:"H",name:"Hydrogen"},{position:2,mass:4.0026,symbol:"He",name:"Helium"},{position:3,mass:6.94,symbol:"Li",name:"Lithium"},{position:4,mass:9.0122,symbol:"Be",name:"Beryllium"},{position:5,mass:10.81,symbol:"B",name:"Boron"},{position:6,mass:12.011,symbol:"C",name:"Carbon"},{position:7,mass:14.007,symbol:"N",name:"Nitrogen"},{position:8,mass:15.999,symbol:"O",name:"Oxygen"},{position:9,mass:18.998,symbol:"F",name:"Fluorine"},{position:10,mass:20.18,symbol:"Ne",name:"Neon"},{position:11,mass:22.99,symbol:"Na",name:"Sodium"},{position:12,mass:24.305,symbol:"Mg",name:"Magnesium"},{position:13,mass:26.982,symbol:"Al",name:"Aluminium"},{position:14,mass:28.085,symbol:"Si",name:"Silicon"},{position:15,mass:30.974,symbol:"P",name:"Phosphorus"},{position:16,mass:32.06,symbol:"S",name:"Sulfur"},{position:17,mass:35.45,symbol:"Cl",name:"Chlorine"},{position:18,mass:39.948,symbol:"Ar",name:"Argon"},{position:19,mass:39.098,symbol:"K",name:"Potassium"},{position:20,mass:39.098,symbol:"Ca",name:"Calcium"},{position:21,mass:40.078,symbol:"Sc",name:"Scandium"},{position:22,mass:47.867,symbol:"Ti",name:"Titanium"},{position:23,mass:50.941,symbol:"V",name:"Vanadium"},{position:24,mass:51.996,symbol:"Cr",name:"Chromium"},{position:25,mass:54.938,symbol:"Mn",name:"Manganese"},{position:26,mass:55.845,symbol:"Fe",name:"Iron"},{position:27,mass:58.933,symbol:"Co",name:"Cobalt"},{position:28,mass:58.933,symbol:"Ni",name:"Nickel"},{position:29,mass:63.546,symbol:"Cu",name:"Copper"},{position:30,mass:65.38,symbol:"Zn",name:"Zinc"},{position:31,mass:69.723,symbol:"Ga",name:"Gallium"},{position:32,mass:72.63,symbol:"Ge",name:"Germanium"},{position:33,mass:74.922,symbol:"As",name:"Arsenic"},{position:34,mass:78.971,symbol:"Se",name:"Selenium"},{position:35,mass:79.904,symbol:"Br",name:"Bromine"},{position:36,mass:83.798,symbol:"Kr",name:"Krypton"},{position:37,mass:83.798,symbol:"Rb",name:"Rubidium"},{position:38,mass:87.62,symbol:"Sr",name:"Strontium"},{position:39,mass:88.906,symbol:"Y",name:"Yttrium"},{position:40,mass:91.224,symbol:"Zr",name:"Zirconium"},{position:41,mass:92.906,symbol:"Nb",name:"Niobium"},{position:42,mass:95.95,symbol:"Mo",name:"Molybdenum"},{position:43,mass:98,symbol:"Tc",name:"Technetium"},{position:44,mass:101.07,symbol:"Ru",name:"Ruthenium"},{position:45,mass:102.905,symbol:"Rh",name:"Rhodium"},{position:46,mass:106.42,symbol:"Pd",name:"Palladium"},{position:47,mass:106.42,symbol:"Ag",name:"Silver"},{position:48,mass:112.414,symbol:"Cd",name:"Cadmium"},{position:49,mass:114.818,symbol:"In",name:"Indium"},{position:50,mass:118.71,symbol:"Sn",name:"Tin"},{position:51,mass:121.76,symbol:"Sb",name:"Antimony"},{position:52,mass:127.6,symbol:"Te",name:"Tellurium"},{position:53,mass:126.904,symbol:"I",name:"Iodine"},{position:54,mass:126.904,symbol:"Xe",name:"Xenon"},{position:55,mass:126.904,symbol:"Cs",name:"Cesium"},{position:56,mass:137.33,symbol:"Ba",name:"Barium"},{position:57,mass:138.905,symbol:"La",name:"Lanthanum"},{position:58,mass:140.12,symbol:"Ce",name:"Cerium"},{position:59,mass:140.116,symbol:"Pr",name:"Praseodymium"},{position:60,mass:140.907,symbol:"Nd",name:"Neodymium"},{position:61,mass:144.242,symbol:"Pm",name:"Promethium"},{position:62,mass:145,symbol:"Sm",name:"Samarium"},{position:63,mass:150.36,symbol:"Eu",name:"Europium"},{position:64,mass:151.964,symbol:"Gd",name:"Gadolinium"},{position:65,mass:157.25,symbol:"Tb",name:"Terbium"},{position:66,mass:158.925,symbol:"Dy",name:"Dysprosium"},{position:67,mass:162.5,symbol:"Ho",name:"Holmium"},{position:68,mass:164.93,symbol:"Er",name:"Erbium"},{position:69,mass:167.259,symbol:"Tm",name:"Thulium"}]},63813:(e,n,o)=>{"use strict";o.d(n,{z:()=>i});var r=o(6029),t=o(96556),s=o(38774);let i={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.k,{placeholder:"Error as boolean",label:"Error as boolean",error:!0}),(0,r.jsx)(s.k,{mt:"md",placeholder:"Error as react node",label:"Error as react node",error:"Something went wrong"}),(0,r.jsx)(s.k,{mt:"md",placeholder:"Without error styles on input",label:"Without error styles on input",error:"Something went wrong",withErrorStyles:!1,rightSectionPointerEvents:"none",rightSection:(0,r.jsx)(t.A,{size:20,color:"var(--mantine-color-error)"})})]})},code:`
import { TextInput } from '@mantine/core';
import { IconExclamationCircle } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <TextInput placeholder="Error as boolean" label="Error as boolean" error />
      <TextInput
        mt="md"
        placeholder="Error as react node"
        label="Error as react node"
        error="Something went wrong"
      />

      <TextInput
        mt="md"
        placeholder="Without error styles on input"
        label="Without error styles on input"
        error="Something went wrong"
        withErrorStyles={false}
        rightSectionPointerEvents="none"
        rightSection={
          <IconExclamationCircle
            size={20}
            color="var(--mantine-color-error)"
          />
        }
      />
    </>
  );
}
`,maxWidth:340,centered:!0}},65164:(e,n,o)=>{"use strict";o.d(n,{W:()=>s});var r=o(6029),t=o(74760);let s={type:"code",component:function(){return(0,r.jsxs)(t.k.Root,{size:"xl",children:[(0,r.jsx)(t.k.Section,{value:35,color:"cyan",children:(0,r.jsx)(t.k.Label,{children:"Documents"})}),(0,r.jsx)(t.k.Section,{value:28,color:"pink",children:(0,r.jsx)(t.k.Label,{children:"Photos"})}),(0,r.jsx)(t.k.Section,{value:15,color:"orange",children:(0,r.jsx)(t.k.Label,{children:"Other"})})]})},code:`
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
`}},67658:(e,n,o)=>{"use strict";o.d(n,{_:()=>m});var r=o(6029),t=o(44211),s=o(20931),i=o(2205),l=o(54475),a=o(49643),c=o(57414),d=o(61087);let h=e=>{let n=(0,t.v)(e),o=(0,s.g)({color:e.color||e.theme.primaryColor,theme:e.theme});return o.isThemeColor&&"lime"===o.color&&"filled"===e.variant?{...n,color:"var(--mantine-color-black)",hoverColor:"var(--mantine-color-black)"}:"light"===e.variant?{background:(0,i.B)(o.value,.1),hover:(0,i.B)(o.value,.15),border:`1px solid ${o.value}`,color:(0,l.e)(o.value,.1)}:"danger"===e.variant?{background:"var(--mantine-color-red-9)",hover:"var(--mantine-color-red-8)",color:"var(--mantine-color-white)",border:"none"}:n},m={type:"code",component:function(){return(0,r.jsx)(a.nW,{theme:{variantColorResolver:h},children:(0,r.jsxs)(c.Y,{children:[(0,r.jsx)(d.$,{color:"lime.4",variant:"filled",children:"Lime filled button"}),(0,r.jsx)(d.$,{color:"orange",variant:"light",children:"Orange light button"}),(0,r.jsx)(d.$,{variant:"danger",children:"Danger button"})]})})},centered:!0,code:`
import {
  Button,
  Group,
  MantineProvider,
  defaultVariantColorsResolver,
  VariantColorsResolver,
  parseThemeColor,
  rgba,
  darken,
} from '@mantine/core';

const variantColorResolver: VariantColorsResolver = (input) => {
  const defaultResolvedColors = defaultVariantColorsResolver(input);
  const parsedColor = parseThemeColor({
    color: input.color || input.theme.primaryColor,
    theme: input.theme,
  });

  // Override some properties for variant
  if (parsedColor.isThemeColor && parsedColor.color === 'lime' && input.variant === 'filled') {
    return {
      ...defaultResolvedColors,
      color: 'var(--mantine-color-black)',
      hoverColor: 'var(--mantine-color-black)',
    };
  }

  // Completely override variant
  if (input.variant === 'light') {
    return {
      background: rgba(parsedColor.value, 0.1),
      hover: rgba(parsedColor.value, 0.15),
      border: \`1px solid \${parsedColor.value}\`,
      color: darken(parsedColor.value, 0.1),
    };
  }

  // Add new variants support
  if (input.variant === 'danger') {
    return {
      background: 'var(--mantine-color-red-9)',
      hover: 'var(--mantine-color-red-8)',
      color: 'var(--mantine-color-white)',
      border: 'none',
    };
  }

  return defaultResolvedColors;
};

function Demo() {
  return (
    <MantineProvider theme={{ variantColorResolver }}>
      <Group>
        <Button color="lime.4" variant="filled">
          Lime filled button
        </Button>

        <Button color="orange" variant="light">
          Orange light button
        </Button>

        <Button variant="danger">Danger button</Button>
      </Group>
    </MantineProvider>
  );
}
`}},68886:(e,n,o)=>{"use strict";o.d(n,{j:()=>i});var r=o(6029),t=o(19577),s=o(53751);let i={type:"code",code:`
import { Table } from '@mantine/core';

function Demo() {
  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Element position</Table.Th>
          <Table.Th>Element name</Table.Th>
          <Table.Th>Symbol</Table.Th>
          <Table.Th>Atomic mass</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}
`,component:function(){let e=s.Y.map(e=>(0,r.jsxs)(t.X.Tr,{children:[(0,r.jsx)(t.X.Td,{children:e.position}),(0,r.jsx)(t.X.Td,{children:e.name}),(0,r.jsx)(t.X.Td,{children:e.symbol}),(0,r.jsx)(t.X.Td,{children:e.mass})]},e.name));return(0,r.jsxs)(t.X,{children:[(0,r.jsx)(t.X.Thead,{children:(0,r.jsxs)(t.X.Tr,{children:[(0,r.jsx)(t.X.Th,{children:"Element position"}),(0,r.jsx)(t.X.Th,{children:"Element name"}),(0,r.jsx)(t.X.Th,{children:"Symbol"}),(0,r.jsx)(t.X.Th,{children:"Atomic mass"})]})}),(0,r.jsx)(t.X.Tbody,{children:e})]})}}},70204:(e,n,o)=>{"use strict";o.d(n,{Q:()=>I});var r=o(6029),t=o(55729),s=o(50212),i=o(2027),l=o(38744),a=o(7798),c=o(28136),d=o(18963),h=o(14163),m=o(33987),p=o(38757),u=o(15583),x=o(38919),j=o(8411),f=o(51718),g=o(17976);function b({direction:e,style:n,...o}){return(0,r.jsx)("svg",{style:{width:"var(--ni-chevron-size)",height:"var(--ni-chevron-size)",transform:"up"===e?"rotate(180deg)":void 0,...n},viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",...o,children:(0,r.jsx)("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}var y={root:"m_e2f5cd4e",controls:"m_95e17d22",control:"m_80b4b171"};let v=/^(0\.0*|-0(\.0*)?)$/,w=/^-?0\d+(\.\d+)?\.?$/,S=/\.\d*0$/;function C(e){return"string"==typeof e&&""!==e&&!Number.isNaN(Number(e))}function T(e){return"number"==typeof e?e<Number.MAX_SAFE_INTEGER:""===e||C(e)&&Number(e)<Number.MAX_SAFE_INTEGER}function N(e,n,o){return void 0===e||(void 0===n||e>=n)&&(void 0===o||e<=o)}let P={step:1,clampBehavior:"blur",allowDecimal:!0,allowNegative:!0,withKeyboardEvents:!0,allowLeadingZeros:!0,trimLeadingZeroesOnBlur:!0,startValue:0},k=(0,m.V)((e,{size:n})=>({controls:{"--ni-chevron-size":(0,h.YC)(n,"ni-chevron-size")}})),I=(0,j.P9)((e,n)=>{let o=(0,x.Y)("NumberInput",P,e),{className:h,classNames:m,styles:j,unstyled:I,vars:B,onChange:M,onValueChange:z,value:D,defaultValue:A,max:E,min:L,step:R,hideControls:G,rightSection:F,isAllowed:_,clampBehavior:V,onBlur:$,allowDecimal:X,decimalScale:O,onKeyDown:Y,onKeyDownCapture:H,handlersRef:W,startValue:q,disabled:K,rightSectionPointerEvents:Z,allowNegative:Q,readOnly:U,size:J,rightSectionWidth:ee,stepHoldInterval:en,stepHoldDelay:eo,allowLeadingZeros:er,withKeyboardEvents:et,trimLeadingZeroesOnBlur:es,attributes:ei,...el}=o,ea=(0,u.I)({name:"NumberInput",classes:y,props:o,classNames:m,styles:j,unstyled:I,attributes:ei,vars:B,varsResolver:k}),{resolvedClassNames:ec,resolvedStyles:ed}=(0,p.Y)({classNames:m,styles:j,props:o}),[eh,em]=(0,a.Z)({value:D,defaultValue:A,finalValue:"",onChange:M}),ep=void 0!==eo&&void 0!==en,eu=(0,t.useRef)(null),ex=(0,t.useRef)(null),ej=(0,t.useRef)(0),ef=e=>{let n=String(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return n?Math.max(0,(n[1]?n[1].length:0)-(n[2]?+n[2]:0)):0},eg=e=>{eu.current&&void 0!==e&&eu.current.setSelectionRange(e,e)},eb=(0,t.useRef)(d.l);eb.current=()=>{let e;if(!T(eh))return;let n=Math.max(ef(eh),ef(R)),o=10**n;if(!C(eh)&&("number"!=typeof eh||Number.isNaN(eh)))e=(0,l.q)(q,L,E);else if(void 0!==E){let n=(Math.round(Number(eh)*o)+Math.round(R*o))/o;e=n<=E?n:E}else e=(Math.round(Number(eh)*o)+Math.round(R*o))/o;let r=e.toFixed(n);em(parseFloat(r)),z?.({floatValue:parseFloat(r),formattedValue:r,value:r},{source:"increment"}),setTimeout(()=>eg(eu.current?.value.length),0)};let ey=(0,t.useRef)(d.l);ey.current=()=>{let e;if(!T(eh))return;let n=void 0!==L?L:Q?Number.MIN_SAFE_INTEGER:0,o=Math.max(ef(eh),ef(R)),r=10**o;if(!C(eh)&&"number"!=typeof eh||Number.isNaN(eh))e=(0,l.q)(q,n,E);else{let o=(Math.round(Number(eh)*r)-Math.round(R*r))/r;e=void 0!==n&&o<n?n:o}let t=e.toFixed(o);em(parseFloat(t)),z?.({floatValue:parseFloat(t),formattedValue:t,value:t},{source:"decrement"}),setTimeout(()=>eg(eu.current?.value.length),0)},(0,c.bl)(W,{increment:eb.current,decrement:ey.current});let ev=e=>{e?eb.current?.():ey.current?.(),ej.current+=1},ew=e=>{if(ev(e),ep){let n="number"==typeof en?en:en(ej.current);ex.current=window.setTimeout(()=>ew(e),n)}},eS=(e,n)=>{e.preventDefault(),eu.current?.focus(),ev(n),ep&&(ex.current=window.setTimeout(()=>ew(n),eo))},eC=()=>{ex.current&&window.clearTimeout(ex.current),ex.current=null,ej.current=0},eT=(0,r.jsxs)("div",{...ea("controls"),children:[(0,r.jsx)(g.N,{...ea("control"),tabIndex:-1,"aria-hidden":!0,disabled:K||"number"==typeof eh&&void 0!==E&&eh>=E,mod:{direction:"up"},onMouseDown:e=>e.preventDefault(),onPointerDown:e=>{eS(e,!0)},onPointerUp:eC,onPointerLeave:eC,children:(0,r.jsx)(b,{direction:"up"})}),(0,r.jsx)(g.N,{...ea("control"),tabIndex:-1,"aria-hidden":!0,disabled:K||"number"==typeof eh&&void 0!==L&&eh<=L,mod:{direction:"down"},onMouseDown:e=>e.preventDefault(),onPointerDown:e=>{eS(e,!1)},onPointerUp:eC,onPointerLeave:eC,children:(0,r.jsx)(b,{direction:"down"})})]});return(0,r.jsx)(f.O,{component:i.HG,allowNegative:Q,className:(0,s.A)(y.root,h),size:J,...el,readOnly:U,disabled:K,value:eh,getInputRef:(0,c.pc)(n,eu),onValueChange:(e,n)=>{"event"===n.source&&em(!function(e,n){return("number"==typeof e?e<Number.MAX_SAFE_INTEGER:!Number.isNaN(Number(e)))&&!Number.isNaN(e)&&14>n.toString().replace(".","").length&&""!==n}(e.floatValue,e.value)||v.test(e.value)||er&&w.test(e.value)||S.test(e.value)?e.value:e.floatValue),z?.(e,n)},rightSection:G||U||!T(eh)?F:F||eT,classNames:ec,styles:ed,unstyled:I,__staticSelector:"NumberInput",decimalScale:X?O:0,onKeyDown:e=>{Y?.(e),!U&&et&&("ArrowUp"===e.key&&(e.preventDefault(),eb.current?.()),"ArrowDown"===e.key&&(e.preventDefault(),ey.current?.()))},onKeyDownCapture:e=>{if(H?.(e),"Backspace"===e.key){let n=eu.current;n&&0===n.selectionStart&&n.selectionStart===n.selectionEnd&&(e.preventDefault(),window.setTimeout(()=>eg(0),0))}},rightSectionPointerEvents:Z??(K?"none":void 0),rightSectionWidth:ee??`var(--ni-right-section-width-${J||"sm"})`,allowLeadingZeros:er,onBlur:e=>{let n=eh;"blur"===V&&"number"==typeof n&&(n=(0,l.q)(n,L,E)),es&&"string"==typeof n&&15>ef(n)&&(n=function(e,n,o){let r=e.toString().replace(/^0+(?=\d)/,""),t=parseFloat(r);return Number.isNaN(t)?r:t>Number.MAX_SAFE_INTEGER?void 0!==n?n:r:(0,l.q)(t,o,n)}(n,E,L)),eh!==n&&em(n),$?.(e)},attributes:ei,isAllowed:e=>"strict"===V?_?_(e)&&N(e.floatValue,L,E):N(e.floatValue,L,E):!_||_(e)})});I.classes={...f.O.classes,...y},I.displayName="@mantine/core/NumberInput"},70741:(e,n,o)=>{"use strict";o.d(n,{_:()=>h});var r=o(6029),t=o(17093),s=o(10109),i=o(49643);let l=(0,o(55729).forwardRef)(({style:e,...n},o)=>(0,r.jsx)("svg",{...n,ref:o,style:{width:"var(--loader-size)",height:"var(--loader-size)",stroke:"var(--loader-color)",...e},viewBox:"0 0 45 45",xmlns:"http://www.w3.org/2000/svg",stroke:"#fff",children:(0,r.jsxs)("g",{fill:"none",fillRule:"evenodd",transform:"translate(1 1)",strokeWidth:"2",children:[(0,r.jsxs)("circle",{cx:"22",cy:"22",r:"6",strokeOpacity:"0",children:[(0,r.jsx)("animate",{attributeName:"r",begin:"1.5s",dur:"3s",values:"6;22",calcMode:"linear",repeatCount:"indefinite"}),(0,r.jsx)("animate",{attributeName:"stroke-opacity",begin:"1.5s",dur:"3s",values:"1;0",calcMode:"linear",repeatCount:"indefinite"}),(0,r.jsx)("animate",{attributeName:"stroke-width",begin:"1.5s",dur:"3s",values:"2;0",calcMode:"linear",repeatCount:"indefinite"})]}),(0,r.jsxs)("circle",{cx:"22",cy:"22",r:"6",strokeOpacity:"0",children:[(0,r.jsx)("animate",{attributeName:"r",begin:"3s",dur:"3s",values:"6;22",calcMode:"linear",repeatCount:"indefinite"}),(0,r.jsx)("animate",{attributeName:"stroke-opacity",begin:"3s",dur:"3s",values:"1;0",calcMode:"linear",repeatCount:"indefinite"}),(0,r.jsx)("animate",{attributeName:"stroke-width",begin:"3s",dur:"3s",values:"2;0",calcMode:"linear",repeatCount:"indefinite"})]}),(0,r.jsx)("circle",{cx:"22",cy:"22",r:"8",children:(0,r.jsx)("animate",{attributeName:"r",begin:"0s",dur:"1.5s",values:"6;1;2;3;4;5;6",calcMode:"linear",repeatCount:"indefinite"})})]})})),a=`
import { forwardRef } from 'react';
import { MantineLoaderComponent } from '@mantine/core';

export const RingLoader: MantineLoaderComponent = forwardRef(({ style, ...others }, ref) => (
  <svg
    {...others}
    ref={ref}
    style={{
      width: 'var(--loader-size)',
      height: 'var(--loader-size)',
      stroke: 'var(--loader-color)',
      ...style,
    }}
    viewBox="0 0 45 45"
    xmlns="http://www.w3.org/2000/svg"
    stroke="#fff"
  >
    <g fill="none" fillRule="evenodd" transform="translate(1 1)" strokeWidth="2">
      <circle cx="22" cy="22" r="6" strokeOpacity="0">
        <animate
          attributeName="r"
          begin="1.5s"
          dur="3s"
          values="6;22"
          calcMode="linear"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-opacity"
          begin="1.5s"
          dur="3s"
          values="1;0"
          calcMode="linear"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-width"
          begin="1.5s"
          dur="3s"
          values="2;0"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="22" cy="22" r="6" strokeOpacity="0">
        <animate
          attributeName="r"
          begin="3s"
          dur="3s"
          values="6;22"
          calcMode="linear"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-opacity"
          begin="3s"
          dur="3s"
          values="1;0"
          calcMode="linear"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-width"
          begin="3s"
          dur="3s"
          values="2;0"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="22" cy="22" r="8">
        <animate
          attributeName="r"
          begin="0s"
          dur="1.5s"
          values="6;1;2;3;4;5;6"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </circle>
    </g>
  </svg>
));`,c=`
import { MantineProvider, Loader } from '@mantine/core';
import { RingLoader } from './RingLoader';

const theme = createTheme({
  components: {
    Loader: Loader.extend({
      defaultProps: {
        loaders: { ...Loader.defaultLoaders, ring: RingLoader },
        type: 'ring',
      },
    }),
  },
});

function Demo() {
  return (
    <MantineThemeProvider theme={theme}>
      <Loader />
    </MantineThemeProvider>
  );
}
`,d=(0,t.a)({components:{Loader:s.a.extend({defaultProps:{loaders:{...s.a.defaultLoaders,ring:l},type:"ring"}})}}),h={type:"code",component:function(){return(0,r.jsx)(i.nW,{theme:d,children:(0,r.jsx)(s.a,{})})},centered:!0,code:[{fileName:"Demo.tsx",language:"tsx",code:c},{fileName:"RingLoader.tsx",language:"tsx",code:a}]}},72055:(e,n,o)=>{"use strict";o.d(n,{x:()=>M});var r=o(6029);o(55729);var t=o(33987),s=o(38919),i=o(15583),l=o(71709),a=o(76320),c=o(8411);let[d,h]=(0,o(95681).F)("Grid component was not found in tree");var m=o(50212),p=o(26779),u=o(14989),x=o(42841),j=o(84027),f=o(49643),g=o(52496);let b=(e,n)=>"content"===e?"auto":"auto"===e?"0rem":e?`${100/(n/e)}%`:void 0,y=(e,n,o)=>o||"auto"===e?"100%":"content"===e?"unset":b(e,n),v=(e,n)=>{if(e)return"auto"===e||n?"1":"auto"},w=(e,n)=>0===e?"0":e?`${100/(n/e)}%`:void 0;function S({span:e,order:n,offset:o,selector:t}){let s=(0,f.xd)(),i=h(),l=i.breakpoints||s.breakpoints,a=void 0===(0,j.D)(e)?12:(0,j.D)(e),c=(0,u.J)({"--col-order":(0,j.D)(n)?.toString(),"--col-flex-grow":v(a,i.grow),"--col-flex-basis":b(a,i.columns),"--col-width":"content"===a?"auto":void 0,"--col-max-width":y(a,i.columns,i.grow),"--col-offset":w((0,j.D)(o),i.columns)}),d=(0,p.H)(l).reduce((r,t)=>(r[t]||(r[t]={}),"object"==typeof n&&void 0!==n[t]&&(r[t]["--col-order"]=n[t]?.toString()),"object"==typeof e&&void 0!==e[t]&&(r[t]["--col-flex-grow"]=v(e[t],i.grow),r[t]["--col-flex-basis"]=b(e[t],i.columns),r[t]["--col-width"]="content"===e[t]?"auto":void 0,r[t]["--col-max-width"]=y(e[t],i.columns,i.grow)),"object"==typeof o&&void 0!==o[t]&&(r[t]["--col-offset"]=w(o[t],i.columns)),r),{}),m=(0,x.q)((0,p.H)(d),l).filter(e=>(0,p.H)(d[e.value]).length>0).map(e=>({query:"container"===i.type?`mantine-grid (min-width: ${l[e.value]})`:`(min-width: ${l[e.value]})`,styles:d[e.value]}));return(0,r.jsx)(g.K,{styles:c,media:"container"===i.type?void 0:m,container:"container"===i.type?m:void 0,selector:t})}var C={container:"m_8478a6da",root:"m_410352e9",inner:"m_dee7bd2f",col:"m_96bdd299"};let T={span:12},N=(0,c.P9)((e,n)=>{let{classNames:o,className:t,style:i,styles:c,vars:d,span:p,order:u,offset:x,...j}=(0,s.Y)("GridCol",T,e),f=h(),g=(0,l.C)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(S,{selector:`.${g}`,span:p,order:u,offset:x}),(0,r.jsx)(a.a,{ref:n,...f.getStyles("col",{className:(0,m.A)(t,g),style:i,classNames:o,styles:c}),...j})]})});N.classes=C,N.displayName="@mantine/core/GridCol";var P=o(14163);function k({gutter:e,selector:n,breakpoints:o,type:t}){let s=(0,f.xd)(),i=o||s.breakpoints,l=(0,u.J)({"--grid-gutter":(0,P.GY)((0,j.D)(e))}),a=(0,p.H)(i).reduce((n,o)=>(n[o]||(n[o]={}),"object"==typeof e&&void 0!==e[o]&&(n[o]["--grid-gutter"]=(0,P.GY)(e[o])),n),{}),c=(0,x.q)((0,p.H)(a),i).filter(e=>(0,p.H)(a[e.value]).length>0).map(e=>({query:"container"===t?`mantine-grid (min-width: ${i[e.value]})`:`(min-width: ${i[e.value]})`,styles:a[e.value]}));return(0,r.jsx)(g.K,{styles:l,media:"container"===t?void 0:c,container:"container"===t?c:void 0,selector:n})}let I={gutter:"md",grow:!1,columns:12},B=(0,t.V)((e,{justify:n,align:o,overflow:r})=>({root:{"--grid-justify":n,"--grid-align":o,"--grid-overflow":r}})),M=(0,c.P9)((e,n)=>{let o=(0,s.Y)("Grid",I,e),{classNames:t,className:c,style:h,styles:m,unstyled:p,vars:u,grow:x,gutter:j,columns:f,align:g,justify:b,children:y,breakpoints:v,type:w,attributes:S,...T}=o,N=(0,i.I)({name:"Grid",classes:C,props:o,className:c,style:h,classNames:t,styles:m,unstyled:p,attributes:S,vars:u,varsResolver:B}),P=(0,l.C)();return"container"===w&&v?(0,r.jsxs)(d,{value:{getStyles:N,grow:x,columns:f,breakpoints:v,type:w},children:[(0,r.jsx)(k,{selector:`.${P}`,...o}),(0,r.jsx)("div",{...N("container"),children:(0,r.jsx)(a.a,{ref:n,...N("root",{className:P}),...T,children:(0,r.jsx)("div",{...N("inner"),children:y})})})]}):(0,r.jsxs)(d,{value:{getStyles:N,grow:x,columns:f,breakpoints:v,type:w},children:[(0,r.jsx)(k,{selector:`.${P}`,...o}),(0,r.jsx)(a.a,{ref:n,...N("root",{className:P}),...T,children:(0,r.jsx)("div",{...N("inner"),children:y})})]})});M.classes=C,M.displayName="@mantine/core/Grid",M.Col=N},74812:(e,n,o)=>{"use strict";o.d(n,{K:()=>s});var r=o(6029),t=o(70204);let s={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.Q,{label:"With prefix",placeholder:"Dollars",prefix:"$",defaultValue:100,mb:"md"}),(0,r.jsx)(t.Q,{label:"With suffix",placeholder:"Percents",suffix:"%",defaultValue:100,mt:"md"})]})},code:`
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <NumberInput
        label="With prefix"
        placeholder="Dollars"
        prefix="$"
        defaultValue={100}
        mb="md"
      />
      <NumberInput
        label="With suffix"
        placeholder="Percents"
        suffix="%"
        defaultValue={100}
        mt="md"
      />
    </>
  );
}
`,centered:!0,maxWidth:340}},77519:(e,n,o)=>{"use strict";o.d(n,{f:()=>c});var r=o(6029),t=o(61087),s=o(57414);let i=`
import { Button, PartialVarsResolver, ButtonFactory, Group } from '@mantine/core';

const varsResolver: PartialVarsResolver<ButtonFactory> = (theme, props) => {
  if (props.size === 'xxl') {
    return {
      root: {
        '--button-height': '60px',
        '--button-padding-x': '30px',
        '--button-fz': '24px',
      },
    };
  }

  if (props.size === 'xxs') {
    return {
      root: {
        '--button-height': '24px',
        '--button-padding-x': '10px',
        '--button-fz': '10px',
      },
    };
  }

  return { root: {} };
};

function Demo() {
  return (
    <Group>
      <Button vars={varsResolver} size="xxl">
        XXL Button
      </Button>
      <Button vars={varsResolver} size="xxs">
        XXS Button
      </Button>
    </Group>
  );
}
`,l=`
import { Button, Group, MantineProvider, createTheme } from '@mantine/core';

const theme = createTheme({
  components: {
    Button: Button.extend({
      vars: (theme, props) => {
        if (props.size === 'xxl') {
          return {
            root: {
              '--button-height': '60px',
              '--button-padding-x': '30px',
              '--button-fz': '24px',
            },
          };
        }

        if (props.size === 'xxs') {
          return {
            root: {
              '--button-height': '24px',
              '--button-padding-x': '10px',
              '--button-fz': '10px',
            },
          };
        }

        return { root: {} };
      },
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Group>
        <Button size="xxl">XXL Button</Button>
        <Button size="xxs">XXS Button</Button>
      </Group>
    </MantineProvider>
  );
}
`,a=(e,n)=>"xxl"===n.size?{root:{"--button-height":"60px","--button-padding-x":"30px","--button-fz":"24px"}}:"xxs"===n.size?{root:{"--button-height":"24px","--button-padding-x":"10px","--button-fz":"10px"}}:{root:{}};t.$.extend({vars:(e,n)=>"xxl"===n.size?{root:{"--button-height":"60px","--button-padding-x":"30px","--button-fz":"24px"}}:"xxs"===n.size?{root:{"--button-height":"24px","--button-padding-x":"10px","--button-fz":"10px"}}:{root:{}}});let c={type:"code",component:function(){return(0,r.jsxs)(s.Y,{children:[(0,r.jsx)(t.$,{vars:a,size:"xxl",children:"XXL Button"}),(0,r.jsx)(t.$,{vars:a,size:"xxs",children:"XXS Button"})]})},centered:!0,code:[{code:l,language:"tsx",fileName:"MantineProvider.tsx"},{code:i,language:"tsx",fileName:"Inline.tsx"}]}},83531:(e,n,o)=>{"use strict";o.r(n),o.d(n,{default:()=>A});var r=o(6029),t=o(16285),s=o(61087),i=o(19179),l=o(29523),a=o(77519),c=o(90285),d=o(22955),h=o(67658),m=o(16877),p=o(74812),u=o(39544),x=o(70741),j=o(65164),f=o(68886),g=o(93322),b=o(767),y=o(5031),v=o(94745),w=o(46996),S=o(25461),C=o(95696),T=o(44704),N=o(28891),P=o(21203),k=o(63813),I=o(9791),B=o(38547),M=o(5262);let z=(0,B.P)(M.XZ.Changelog700);function D(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components},{DataTable:o,Demo:B}=n;return o||E("DataTable",!0),B||E("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"migration-to-native-css",children:"Migration to native CSS"}),"\n",(0,r.jsxs)(n.p,{children:["Mantine no longer depends on ",(0,r.jsx)(n.a,{href:"https://emotion.sh/",children:"Emotion"})," for styles generation. All ",(0,r.jsx)(n.code,{children:"@mantine/*"}),"\npackages are now shipped with native CSS files which can be imported from ",(0,r.jsx)(n.code,{children:"@mantine/{package}/styles.css"}),",\nfor example:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import '@mantine/core/styles.css';\n"})}),"\n",(0,r.jsx)(n.p,{children:"This change improves performance, reduces bundle size of the library and allows using Mantine\nin environments where CSS-in-JS is not supported (or supported with limitations), for example,\nNext.js app directory."}),"\n",(0,r.jsx)(n.p,{children:"Important breaking changes:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"createStyles"})," function is no longer available, use ",(0,r.jsx)(n.a,{href:"/styles/css-modules",children:"CSS modules"})," or any other styling solution of your choice instead"]}),"\n",(0,r.jsxs)(n.li,{children:["Components no longer support ",(0,r.jsx)(n.code,{children:"sx"})," prop. You can use ",(0,r.jsx)(n.code,{children:"className"})," or ",(0,r.jsx)(n.code,{children:"style"})," props instead."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"styles"})," prop no longer supports nested selectors"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["It is now recommended to use ",(0,r.jsx)(n.a,{href:"/styles/css-modules",children:"CSS modules"})," to style Mantine components.\nTo update your project to ",(0,r.jsx)(n.a,{href:"/styles/css-modules",children:"CSS modules"}),", follow the ",(0,r.jsx)(n.a,{href:"/guides/6x-to-7x",children:"6.x → 7.x migration guide"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"vanilla-extract-integration",children:"Vanilla extract integration"}),"\n",(0,r.jsxs)(n.p,{children:["If you prefer CSS-in-JS syntax for styling, you can use ",(0,r.jsx)(n.a,{href:"/styles/vanilla-extract",children:"Vanilla extract"}),"\nas a TypeScript CSS preprocessor. You will be able to use most of Mantine styling features\nwith ",(0,r.jsx)(n.a,{href:"/styles/vanilla-extract",children:"Vanilla extract"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"system-color-scheme-support",children:"System color scheme support"}),"\n",(0,r.jsxs)(n.p,{children:["All components now support system color scheme – when ",(0,r.jsx)(n.code,{children:"colorScheme"})," value is ",(0,r.jsx)(n.code,{children:"auto"}),",\ncomponents will use ",(0,r.jsx)(n.code,{children:"prefers-color-scheme"})," media query to determine if the user prefers light or dark color scheme."]}),"\n",(0,r.jsxs)(n.p,{children:["Note that ",(0,r.jsx)(n.code,{children:"auto"})," is not the default value. You need to set it manually to enable system color scheme support\nboth on ",(0,r.jsx)(n.a,{href:"/theming/mantine-provider",children:"MantineProvider"})," and in ",(0,r.jsx)(n.a,{href:"/theming/color-schemes#colorschemescript",children:"ColorSchemeScript"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'import { ColorSchemeScript, MantineProvider } from \'@mantine/core\';\n\nfunction Demo() {\n  return (\n    <>\n      <ColorSchemeScript defaultColorScheme="auto" />\n      <MantineProvider defaultColorScheme="auto">\n        {/* Your app here */}\n      </MantineProvider>\n    </>\n  );\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"built-in-color-scheme-manager",children:"Built-in color scheme manager"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/theming/mantine-provider",children:"MantineProvider"})," now comes with a built-in color scheme manager.\nIt is no longer required to use any other components to set up color scheme logic.\nColor scheme can be changed with ",(0,r.jsx)(n.a,{href:"/theming/color-schemes#use-mantine-color-scheme-hook",children:"useMantineColorScheme hook"}),":"]}),"\n",(0,r.jsx)(B,{data:i.$}),"\n",(0,r.jsx)(n.h2,{id:"css-modules-and-postcss-preset",children:"CSS modules and PostCSS preset"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/styles/css-modules",children:"CSS modules"})," is now the recommended way to style Mantine components,\nalthough it is not required – you can choose any other styling solution of your choice."]}),"\n",(0,r.jsxs)(n.p,{children:["It is also recommended to use ",(0,r.jsx)(n.a,{href:"/styles/postcss-preset",children:"postcss-preset-mantine"}),". It includes\nmixins and functions to simplify styling of Mantine components. ",(0,r.jsx)(n.a,{href:"/styles/postcss-preset",children:"postcss-preset-mantine"}),"\nis included in all templates."]}),"\n",(0,r.jsx)(n.h2,{id:"global-styles",children:"Global styles"}),"\n",(0,r.jsxs)(n.p,{children:["Mantine no longer includes normalize.css. Instead, it uses a bare minimum set of ",(0,r.jsx)(n.a,{href:"/styles/global-styles",children:"global styles"}),".\nThese styles are part of the ",(0,r.jsx)(n.code,{children:"@mantine/core"})," package and are applied automatically when you import\n",(0,r.jsx)(n.code,{children:"@mantine/core/styles.css"})," in your application. Note that these styles cannot be decoupled from the\nrest of the library."]}),"\n",(0,r.jsx)(n.h2,{id:"mantine-as-a-headless-ui-library",children:"Mantine as a headless UI library"}),"\n",(0,r.jsxs)(n.p,{children:["You can now use Mantine as a ",(0,r.jsx)(n.a,{href:"/styles/unstyled",children:"headless"})," library. To achieve that, just do not import\n",(0,r.jsx)(n.code,{children:"@mantine/*/styles.css"})," in your application. Then you will be able to apply styles with\n",(0,r.jsx)(n.a,{href:"/styles/styles-api",children:"Styles API"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"createtheme-function",children:"createTheme function"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"createTheme"})," function is a replacement for ",(0,r.jsx)(n.code,{children:"MantineThemeOverride"})," type. Use it to create a theme\noverride, it will give you autocomplete for all theme properties:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { createTheme, MantineProvider } from '@mantine/core';\n\nconst theme = createTheme({\n  fontFamily: 'sans-serif',\n  primaryColor: 'orange',\n});\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={theme}>\n      {/* Your app here */}\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"components-extend-functions",children:"Components extend functions"}),"\n",(0,r.jsxs)(n.p,{children:["All components that support ",(0,r.jsx)(n.a,{href:"/theming/default-props",children:"default props"})," or ",(0,r.jsx)(n.a,{href:"/styles/styles-api",children:"Styles API"})," now have a static ",(0,r.jsx)(n.code,{children:"extend"})," function which allows getting autocomplete when customizing\n",(0,r.jsx)(n.a,{href:"/theming/default-props",children:"defaultProps"}),", ",(0,r.jsx)(n.a,{href:"/styles/styles-api",children:"classNames and styles"})," of the component\non ",(0,r.jsx)(n.a,{href:"/theming/theme-object",children:"theme"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import {\n  createTheme,\n  MantineProvider,\n  TextInput,\n} from '@mantine/core';\nimport classes from './Demo.module.css';\n\nconst theme = createTheme({\n  components: {\n    TextInput: TextInput.extend({\n      styles: (t, props) => ({\n        input: {\n          fontSize:\n            props.size === 'compact' ? t.fontSizes.sm : undefined,\n        },\n      }),\n      classNames: {\n        root: classes.root,\n        input: classes.input,\n        label: classes.label,\n      },\n\n      defaultProps: {\n        size: 'compact',\n      },\n    }),\n  },\n});\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={theme}>\n      {/* Your app here */}\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"classnames-based-on-component-props",children:"classNames based on component props"}),"\n",(0,r.jsxs)(n.p,{children:["You can now get component props in ",(0,r.jsx)(n.a,{href:"/styles/styles-api",children:"classNames and styles"})," to conditionally apply styles.\nThis feature is a more powerful replacement for styles params."]}),"\n",(0,r.jsx)(B,{data:l.f}),"\n",(0,r.jsx)(n.h2,{id:"components-css-variables",children:"Components CSS variables"}),"\n",(0,r.jsxs)(n.p,{children:["You can now customize components ",(0,r.jsx)(n.a,{href:"/styles/styles-api",children:"CSS variables"})," to change component styles based on its props.\nFor example, it can be used to add new ",(0,r.jsx)(n.a,{href:"/styles/variants-sizes",children:"sizes"}),":"]}),"\n",(0,r.jsx)(B,{data:a.f}),"\n",(0,r.jsx)(n.h2,{id:"new-variants-system",children:"New variants system"}),"\n",(0,r.jsxs)(n.p,{children:["All components now have ",(0,r.jsx)(n.code,{children:"data-variant"})," attribute on the root element, even if the component does not have any predefined variants.\nYou can use it to apply styles to all components of the same type on ",(0,r.jsx)(n.a,{href:"/theming/theme-object",children:"theme"}),":"]}),"\n",(0,r.jsx)(B,{data:c.d}),"\n",(0,r.jsx)(n.h2,{id:"new-sizes-system",children:"New sizes system"}),"\n",(0,r.jsx)(n.p,{children:"There are multiple ways to customize component sizes:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["With ",(0,r.jsx)(n.code,{children:"data-size"})," attribute"]}),"\n",(0,r.jsxs)(n.li,{children:["With component ",(0,r.jsx)(n.a,{href:"/styles/styles-api",children:"CSS variables"})]}),"\n",(0,r.jsxs)(n.li,{children:["With ",(0,r.jsx)(n.a,{href:"/styles/variants-sizes#sizes-with-static-css-variables",children:"static CSS variables"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Example of customizing ",(0,r.jsx)(n.a,{href:"/core/button",children:"Button"})," size with ",(0,r.jsx)(n.code,{children:"data-size"})," attribute:"]}),"\n",(0,r.jsx)(B,{data:d.Q}),"\n",(0,r.jsx)(n.h2,{id:"themevariantcolorresolver",children:"theme.variantColorResolver"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/core/button",children:"Button"}),", ",(0,r.jsx)(n.a,{href:"/core/badge",children:"Badge"}),", ",(0,r.jsx)(n.a,{href:"/core/action-icon",children:"ActionIcon"}),", ",(0,r.jsx)(n.a,{href:"/core/theme-icon",children:"ThemeIcon"})," and other\ncomponents now support custom variants with ",(0,r.jsx)(n.a,{href:"/theming/colors#colors-variant-resolver",children:"variantColorResolver"}),"\n– it supports both changing colors of existing variants and adding new variants."]}),"\n",(0,r.jsx)(B,{data:h._}),"\n",(0,r.jsx)(n.h2,{id:"rem-units-scaling",children:"rem units scaling"}),"\n",(0,r.jsxs)(n.p,{children:["It is now possible to scale ",(0,r.jsx)(n.a,{href:"/styles/rem#rem-units-scaling",children:"rem"})," units. It is useful when you want to change\nfont-size of ",(0,r.jsx)(n.code,{children:"html"}),"/",(0,r.jsx)(n.code,{children:":root"})," element and preserve Mantine components sizes. For example, if you would like to set ",(0,r.jsx)(n.code,{children:"html"})," font-size to ",(0,r.jsx)(n.code,{children:"10px"})," and scale Mantine components accordingly, you need\nto set ",(0,r.jsx)(n.code,{children:"scale"})," to ",(0,r.jsx)(n.code,{children:"1 / (10 / 16)"})," (16 – default font-size) = ",(0,r.jsx)(n.code,{children:"1 / 0.625"})," = ",(0,r.jsx)(n.code,{children:"1.6"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-css",children:":root {\n  font-size: 10px;\n}\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { createTheme, MantineProvider } from '@mantine/core';\n\nconst theme = createTheme({\n  scale: 1.6,\n});\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={theme}>\n      {/* Your app here */}\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"color-prop-improvements",children:"color prop improvements"}),"\n",(0,r.jsxs)(n.p,{children:["All components that support ",(0,r.jsx)(n.code,{children:"color"})," prop now support the following color values:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Key of ",(0,r.jsx)(n.code,{children:"theme.colors"}),", for example, ",(0,r.jsx)(n.code,{children:"blue"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"theme.colors"})," index reference, for example, ",(0,r.jsx)(n.code,{children:"blue.5"})]}),"\n",(0,r.jsxs)(n.li,{children:["Any valid CSS color value, for example, ",(0,r.jsx)(n.code,{children:"#fff"}),", ",(0,r.jsx)(n.code,{children:"rgba(0, 0, 0, 0.5)"}),", ",(0,r.jsx)(n.code,{children:"hsl(0, 0%, 100%)"})]}),"\n"]}),"\n",(0,r.jsx)(B,{data:m.h}),"\n",(0,r.jsx)(n.h2,{id:"components-classes",children:"Components classes"}),"\n",(0,r.jsxs)(n.p,{children:["Classes of each component are now available in ",(0,r.jsx)(n.code,{children:"Component.classes"})," object. For example, you can\nfind ",(0,r.jsx)(n.a,{href:"/core/button",children:"Button"})," classes in ",(0,r.jsx)(n.code,{children:"Button.classes"}),":"]}),"\n",(0,r.jsx)(o,{head:["Key","Class"],data:Object.keys(s.$.classes).map(e=>[e,s.$.classes[e]])}),"\n",(0,r.jsx)(n.p,{children:"You can use these classes to create components with the same styles as Mantine components:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { Button } from '@mantine/core';\n\nfunction Demo() {\n  return <button type=\"button\" className={Button.classes.root} />;\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"theme-object-changes",children:"Theme object changes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"theme.lineHeight"})," is now ",(0,r.jsx)(n.code,{children:"theme.lineHeights"})," – it is now possible to specify multiple line heights. ",(0,r.jsx)(n.code,{children:"theme.lineHeights"})," values are used in the ",(0,r.jsx)(n.a,{href:"/core/text",children:"Text"})," component."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"theme.colorScheme"})," is no longer available, use ",(0,r.jsx)(n.a,{href:"/theming/color-schemes#use-mantine-color-scheme-hook",children:"useMantineColorScheme"})," to get color scheme value"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"theme.dir"})," is no longer needed, direction is now managed by ",(0,r.jsx)(n.a,{href:"/styles/rtl",children:"DirectionProvider"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"theme.loader"})," was removed, you can now configure default loader with ",(0,r.jsx)(n.a,{href:"/theming/default-props",children:"default props"})," of ",(0,r.jsx)(n.a,{href:"/core/loader",children:"Loader"})," component"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"theme.transitionTimingFunction"})," was removed"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"theme.focusRingStyles"})," was replaced with ",(0,r.jsx)(n.code,{children:"theme.focusClassName"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"theme.activeStyles"})," was replaced with ",(0,r.jsx)(n.code,{children:"theme.activeClassName"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"theme.globalStyles"})," was removed"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"theme.fn"})," functions were removed, some of the functions are available as ",(0,r.jsx)(n.a,{href:"/styles/color-functions",children:"standalone utilities"})]}),"\n",(0,r.jsxs)(n.li,{children:["New ",(0,r.jsx)(n.a,{href:"/styles/rem#rem-units-scaling",children:"theme.scale"})," property controls rem units scaling"]}),"\n",(0,r.jsxs)(n.li,{children:["New ",(0,r.jsx)(n.code,{children:"theme.fontSmoothing"})," property determines whether font smoothing styles should be applied to the body element"]}),"\n",(0,r.jsxs)(n.li,{children:["New ",(0,r.jsx)(n.a,{href:"/theming/colors#colors-variant-resolver",children:"theme.variantColorResolver"})," property allows customizing component colors per variant"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"colors-generator",children:"Colors generator"}),"\n",(0,r.jsxs)(n.p,{children:["New ",(0,r.jsx)(n.a,{href:"/theming/colors#colors-generation",children:"@mantine/colors-generator"})," package is now available to generate\ncolor palettes based on single color value. It is also available as ",(0,r.jsx)(n.a,{href:"/colors-generator/",children:"online tool"}),".\nNote that it is usually better to generate colors in advance to avoid contrast issues."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { generateColors } from '@mantine/colors-generator';\nimport { createTheme, MantineProvider } from '@mantine/core';\n\nconst theme = createTheme({\n  colors: {\n    'pale-blue': generateColors('#375EAC'),\n  },\n});\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={theme}>\n      {/* Your app here */}\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"new-setup-for-rtl",children:"New setup for RTL"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"@mantine/core"})," package now exports ",(0,r.jsx)(n.a,{href:"/styles/rtl",children:"DirectionProvider"})," component, which should be used to configure the direction of the application.\n",(0,r.jsx)(n.code,{children:"useDirection"})," hook can be used to toggle direction. All components now include RTL styles by default, it is no\nlonger required to set up additional plugins. See ",(0,r.jsx)(n.a,{href:"/styles/rtl",children:"RTL documentation"})," to learn more."]}),"\n",(0,r.jsx)(n.h2,{id:"react-18-only",children:"React 18+ only"}),"\n",(0,r.jsxs)(n.p,{children:["Starting from version 7.0 Mantine no longer supports older React versions. The minimum supported version is now React 18.\nIt is required because Mantine components now use ",(0,r.jsx)(n.a,{href:"https://react.dev/reference/react/useId",children:"useId"})," and ",(0,r.jsx)(n.a,{href:"https://react.dev/reference/react/useSyncExternalStore",children:"useSyncExternalStore"}),"\nhooks, which are available only in React 18."]}),"\n",(0,r.jsx)(n.h2,{id:"left-and-right-section",children:"left and right section"}),"\n",(0,r.jsxs)(n.p,{children:["Components that previously had ",(0,r.jsx)(n.code,{children:"rightSection"})," and ",(0,r.jsx)(n.code,{children:"icon"})," props, now use ",(0,r.jsx)(n.code,{children:"leftSection"})," instead of ",(0,r.jsx)(n.code,{children:"icon"}),".\nExample of ",(0,r.jsx)(n.a,{href:"/core/button",children:"Button"})," sections:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'import { Button } from \'@mantine/core\';\n\nfunction Demo() {\n  return (\n    <Button leftSection="left" rightSection="right">\n      Label\n    </Button>\n  );\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"numberinput-changes",children:"NumberInput changes"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/core/number-input",children:"NumberInput"})," was migrated to ",(0,r.jsx)(n.a,{href:"https://s-yadav.github.io/react-number-format/",children:"react-number-format"}),".\nIt now supports more features and has improvements in cursor position management.\nDue to migration, some of the props were renamed – follow the ",(0,r.jsx)(n.a,{href:"/core/number-input",children:"documentation"})," to learn about the changes."]}),"\n",(0,r.jsx)(B,{data:p.K}),"\n",(0,r.jsx)(n.h2,{id:"loader-changes",children:"Loader changes"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/core/loader",children:"Loader"})," component is now built with CSS only. This change improves performance and reduces\nHTML output of the component."]}),"\n",(0,r.jsx)(B,{data:u.c}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/theming/theme-object",children:"Theme"})," object no longer supports ",(0,r.jsx)(n.code,{children:"theme.loader"})," property –\nit is also now possible to add custom loaders on ",(0,r.jsx)(n.a,{href:"/theming/theme-object",children:"theme"})," with ",(0,r.jsx)(n.a,{href:"/theming/default-props",children:"default props"}),".\nSpecified ",(0,r.jsx)(n.a,{href:"/core/loader",children:"Loader"})," will be used in all components that use it under the hood (",(0,r.jsx)(n.a,{href:"/core/loading-overlay",children:"LoadingOverlay"}),", ",(0,r.jsx)(n.a,{href:"/core/button",children:"Button"}),", ",(0,r.jsx)(n.a,{href:"/core/action-icon",children:"ActionIcon"}),", ",(0,r.jsx)(n.a,{href:"/core/stepper",children:"Stepper"}),", etc.)."]}),"\n",(0,r.jsx)(B,{data:x._}),"\n",(0,r.jsx)(n.h2,{id:"progress-changes",children:"Progress changes"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/core/progress",children:"Progress"})," component now supports compound components pattern.\nAdvanced features that were previously implemented in ",(0,r.jsx)(n.a,{href:"/core/progress",children:"Progress"})," are now supposed to be implemented with\ncompound components instead."]}),"\n",(0,r.jsx)(B,{data:j.W}),"\n",(0,r.jsx)(n.h2,{id:"table-changes",children:"Table changes"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/core/table",children:"Table"})," component changes:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/styles/styles-api",children:"Styles API"})," support"]}),"\n",(0,r.jsxs)(n.li,{children:["It is now required to use compound components instead of elements: ",(0,r.jsx)(n.code,{children:"Table.Tr"}),", ",(0,r.jsx)(n.code,{children:"Table.Td"}),", etc."]}),"\n",(0,r.jsx)(n.li,{children:"It is now easier to override styles – all styles are added with classes instead of deeply nested selectors on root element"}),"\n",(0,r.jsxs)(n.li,{children:["New props: ",(0,r.jsx)(n.code,{children:"borderColor"}),", ",(0,r.jsx)(n.code,{children:"withRowBorders"}),", ",(0,r.jsx)(n.code,{children:"stripedColor"}),", ",(0,r.jsx)(n.code,{children:"highlightOnHoverColor"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"withBorder"})," prop was renamed to ",(0,r.jsx)(n.code,{children:"withTableBorder"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"fontSize"})," prop was removed, use ",(0,r.jsx)(n.code,{children:"fz"})," ",(0,r.jsx)(n.a,{href:"/styles/style-props",children:"style prop"})," instead"]}),"\n",(0,r.jsxs)(n.li,{children:["New ",(0,r.jsx)(n.code,{children:"Table.ScrollContainer"})," component to create scrollable table"]}),"\n"]}),"\n",(0,r.jsx)(B,{data:f.j}),"\n",(0,r.jsx)(n.h2,{id:"group-changes",children:"Group changes"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/core/group",children:"Group"})," component changes:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"position"})," prop was renamed to ",(0,r.jsx)(n.code,{children:"justify"})," – it now supports all ",(0,r.jsx)(n.code,{children:"justify-content"})," values"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"noWrap"})," prop was replaced with ",(0,r.jsx)(n.code,{children:'wrap="nowrap"'}),", ",(0,r.jsx)(n.code,{children:"wrap"})," prop now supports all ",(0,r.jsx)(n.code,{children:"flex-wrap"})," values"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"spacing"})," prop was replaced with ",(0,r.jsx)(n.code,{children:"gap"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Group"})," now supports new ",(0,r.jsx)(n.code,{children:"preventGrowOverflow"})," prop which allows customizing how group items will behave when they grow larger than their dedicated space"]}),"\n"]}),"\n",(0,r.jsx)(B,{data:g.C}),"\n",(0,r.jsx)(n.h2,{id:"tabs-changes",children:"Tabs changes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Styles API selector ",(0,r.jsx)(n.code,{children:"tabsList"})," renamed to ",(0,r.jsx)(n.code,{children:"list"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"TabProps"})," type was renamed to ",(0,r.jsx)(n.code,{children:"TabsTabProps"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"onTabChange"})," prop was renamed to ",(0,r.jsx)(n.code,{children:"onChange"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Tabs.List"})," ",(0,r.jsx)(n.code,{children:"position"})," prop was renamed to ",(0,r.jsx)(n.code,{children:"justify"}),", it now supports all ",(0,r.jsx)(n.code,{children:"justify-content"})," values"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"button-changes",children:"Button changes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"compact"})," prop was removed, use ",(0,r.jsx)(n.code,{children:'size="compact-XXX"'})," instead"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"leftIcon"})," and ",(0,r.jsx)(n.code,{children:"rightIcon"})," props were renamed to ",(0,r.jsx)(n.code,{children:"leftSection"})," and ",(0,r.jsx)(n.code,{children:"rightSection"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"uppercase"})," prop was removed, use ",(0,r.jsx)(n.code,{children:"tt"})," ",(0,r.jsx)(n.a,{href:"/styles/style-props",children:"style prop"})," instead"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"loaderPosition"})," prop was removed, ",(0,r.jsx)(n.a,{href:"/core/loader",children:"Loader"})," is now always rendered in the center to prevent layout shifts"]}),"\n",(0,r.jsxs)(n.li,{children:["Styles API selectors were changed, see ",(0,r.jsx)(n.a,{href:"/core/button?t=styles-api",children:"Button Styles API"})," documentation for more details"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"appshell-changes",children:"AppShell changes"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/core/app-shell",children:"AppShell"})," component was completely rewritten, it now supports more features:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"AppShell"})," now uses compound components pattern: ",(0,r.jsx)(n.code,{children:"Navbar"}),", ",(0,r.jsx)(n.code,{children:"Aside"}),", ",(0,r.jsx)(n.code,{children:"Header"})," and ",(0,r.jsx)(n.code,{children:"Footer"})," are no longer exported from ",(0,r.jsx)(n.code,{children:"@mantine/core"})," package. Instead, use ",(0,r.jsx)(n.code,{children:"AppShell.Navbar"}),", ",(0,r.jsx)(n.code,{children:"AppShell.Aside"}),", etc."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"AppShell"})," now supports animations when navbar/aside are opened/closed"]}),"\n",(0,r.jsx)(n.li,{children:"Navbar/aside can now be collapsed on desktop – state is handled separately for mobile and desktop"}),"\n",(0,r.jsx)(n.li,{children:"Header/footer can now be collapsed the same way as navbar/aside. For example, the header can be collapsed based on scroll position or direction."}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"AppShell"})," no longer supports ",(0,r.jsx)(n.code,{children:"fixed"})," prop – all components have ",(0,r.jsx)(n.code,{children:"position: fixed"})," styles, static positioning is no longer supported"]}),"\n",(0,r.jsxs)(n.li,{children:["The documentation was updated, it now includes ",(0,r.jsx)(n.a,{href:"/app-shell?e=BasicAppShell",children:"10+ examples on a separate page"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"simplegrid-changes",children:"SimpleGrid changes"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/core/simple-grid",children:"SimpleGrid"})," now uses object format to define grid breakpoints and spacing,\nit works the same way as ",(0,r.jsx)(n.a,{href:"/styles/style-props",children:"style props"}),"."]}),"\n",(0,r.jsx)(B,{data:b.n}),"\n",(0,r.jsx)(n.h2,{id:"grid-changes",children:"Grid changes"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/core/grid",children:"Grid"})," now uses object format in ",(0,r.jsx)(n.code,{children:"gutter"}),", ",(0,r.jsx)(n.code,{children:"offset"}),", ",(0,r.jsx)(n.code,{children:"span"})," and order props,\nall props now work the same way as ",(0,r.jsx)(n.a,{href:"/styles/style-props",children:"style props"}),"."]}),"\n",(0,r.jsx)(B,{data:y.n}),"\n",(0,r.jsx)(n.h2,{id:"image-changes",children:"Image changes"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/core/image",children:"Image"})," component changes:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Image"})," component no longer includes ",(0,r.jsx)(n.code,{children:"figure"})," and other associated elements"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"caption"})," prop is no longer available"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"width"})," and ",(0,r.jsx)(n.code,{children:"height"})," props are replaced with ",(0,r.jsx)(n.code,{children:"w"})," and ",(0,r.jsx)(n.code,{children:"h"})," ",(0,r.jsx)(n.a,{href:"/styles/style-props",children:"style props"})]}),"\n",(0,r.jsx)(n.li,{children:"Placeholder functionality was replaced with fallback image"}),"\n"]}),"\n",(0,r.jsx)(B,{data:v.N}),"\n",(0,r.jsx)(n.h2,{id:"spotlight-changes",children:"Spotlight changes"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/x/spotlight",children:"Spotlight"})," changes:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The logic is no longer based on React context"}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"SpotlightProvider"})," was renamed to ",(0,r.jsx)(n.code,{children:"Spotlight"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"useSpotlight"})," hook was removed, use ",(0,r.jsx)(n.code,{children:"spotlight"})," object instead"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"actions"})," prop now uses a different data format"]}),"\n",(0,r.jsx)(n.li,{children:"It is now possible to have multiple spotlights in the same app"}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Spotlight"})," component now uses compound components pattern for advanced customization"]}),"\n"]}),"\n",(0,r.jsx)(B,{data:w.W}),"\n",(0,r.jsx)(n.h2,{id:"carousel-changes",children:"Carousel changes"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/x/carousel",children:"Carousel"})," now uses object format for responsive values in\n",(0,r.jsx)(n.code,{children:"slideSize"})," and ",(0,r.jsx)(n.code,{children:"slideGap"})," props instead of ",(0,r.jsx)(n.code,{children:"breakpoints"})," prop:"]}),"\n",(0,r.jsx)(B,{data:S.f}),"\n",(0,r.jsx)(n.h2,{id:"mantineprism-deprecation",children:"@mantine/prism deprecation"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"@mantine/prism"})," package was deprecated in favor of ",(0,r.jsx)(n.code,{children:"@mantine/code-highlight"})," package. ",(0,r.jsx)(n.a,{href:"/x/code-highlight",children:"The new package"})," uses ",(0,r.jsx)(n.a,{href:"https://highlightjs.org/",children:"highlight.js"})," instead of ",(0,r.jsx)(n.a,{href:"https://prismjs.com/",children:"Prism"}),"."]}),"\n",(0,r.jsx)(B,{data:C.l}),"\n",(0,r.jsx)(n.h2,{id:"fieldset-component",children:"Fieldset component"}),"\n",(0,r.jsxs)(n.p,{children:["New ",(0,r.jsx)(n.a,{href:"/core/fieldset",children:"Fieldset"})," component:"]}),"\n",(0,r.jsx)(B,{data:T.C}),"\n",(0,r.jsx)(n.h2,{id:"combobox-component",children:"Combobox component"}),"\n",(0,r.jsxs)(n.p,{children:["The new ",(0,r.jsx)(n.a,{href:"/core/combobox",children:"Combobox"})," component allows building custom select, autocomplete, tags input, multiselect and other\nsimilar components. It is used as a base for updated ",(0,r.jsx)(n.a,{href:"/core/autocomplete",children:"Autocomplete"}),", ",(0,r.jsx)(n.a,{href:"/core/select",children:"Select"}),",\n",(0,r.jsx)(n.a,{href:"/core/tags-input",children:"TagsInput"})," and ",(0,r.jsx)(n.a,{href:"/core/multi-select",children:"MultiSelect"})," components."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/core/combobox",children:"Combobox"})," is very flexible and allows you to have full control over the component rendering and logic.\nAdvanced features that were previously implemented in ",(0,r.jsx)(n.a,{href:"/core/autocomplete",children:"Autocomplete"}),", ",(0,r.jsx)(n.a,{href:"/core/select",children:"Select"}),"\nand ",(0,r.jsx)(n.a,{href:"/core/multi-select",children:"MultiSelect"})," are now supposed to be implemented with ",(0,r.jsx)(n.a,{href:"/core/combobox",children:"Combobox"})," instead."]}),"\n",(0,r.jsxs)(n.p,{children:["You can find 50+ ",(0,r.jsx)(n.code,{children:"Combobox"})," examples on ",(0,r.jsx)(n.a,{href:"/combobox",children:"this page"}),"."]}),"\n",(0,r.jsx)(B,{data:N.L}),"\n",(0,r.jsx)(n.h2,{id:"tagsinput-component",children:"TagsInput component"}),"\n",(0,r.jsxs)(n.p,{children:["New ",(0,r.jsx)(n.a,{href:"/core/tags-input",children:"TagsInput"})," component based on ",(0,r.jsx)(n.a,{href:"/core/combobox",children:"Combobox"})," component.\nThe component is similar to ",(0,r.jsx)(n.a,{href:"/core/multi-select",children:"MultiSelect"})," but allows entering custom values."]}),"\n",(0,r.jsx)(B,{data:P.p}),"\n",(0,r.jsx)(n.h2,{id:"witherrorstyles-prop",children:"withErrorStyles prop"}),"\n",(0,r.jsxs)(n.p,{children:["All inputs now support ",(0,r.jsx)(n.code,{children:"withErrorStyles"})," prop, which allows removing error styles from the input.\nIt can be used to apply custom error styles without override, or use other techniques to\nindicate error state. For example, it can be used to render an icon in the right section:"]}),"\n",(0,r.jsx)(B,{data:k.z}),"\n",(0,r.jsx)(n.h2,{id:"hiddenfrom-and-visiblefrom-props",children:"hiddenFrom and visibleFrom props"}),"\n",(0,r.jsxs)(n.p,{children:["All Mantine components now support ",(0,r.jsx)(n.code,{children:"hiddenFrom"})," and ",(0,r.jsx)(n.code,{children:"visibleFrom"})," props.\nThese props accept breakpoint (",(0,r.jsx)(n.code,{children:"xs"}),", ",(0,r.jsx)(n.code,{children:"sm"}),", ",(0,r.jsx)(n.code,{children:"md"}),", ",(0,r.jsx)(n.code,{children:"lg"}),", ",(0,r.jsx)(n.code,{children:"xl"}),") and hide the component when\nviewport width is less than or greater than the specified breakpoint:"]}),"\n",(0,r.jsx)(B,{data:I.B}),"\n",(0,r.jsx)(n.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["New ",(0,r.jsx)(n.a,{href:"/core/visually-hidden",children:"VisuallyHidden"})," component"]}),"\n",(0,r.jsxs)(n.li,{children:["New ",(0,r.jsx)(n.a,{href:"/core/action-icon#actionicongroup",children:"ActionIcon.Group"})," component"]}),"\n",(0,r.jsx)(n.li,{children:"All transitions are now disabled during color scheme change"}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"theme.respectReducedMotion"})," is now set to ",(0,r.jsx)(n.code,{children:"false"})," by default – it caused a lot of confusion for users who did not know about it"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/x/notifications",children:"Notifications system"})," now exports ",(0,r.jsx)(n.code,{children:"notifications.updateState"})," function to update notifications state with a given callback"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/blockquote",children:"Blockquote"})," component has new design"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/breadcrumbs",children:"Breadcrumbs"})," component now supports ",(0,r.jsx)(n.code,{children:"separatorMargin"})," prop"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/tooltip",children:"Tooltip"})," component now supports ",(0,r.jsx)(n.code,{children:"mainAxis"})," and ",(0,r.jsx)(n.code,{children:"crossAxis"})," offset configuration"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/slider",children:"Slider and RangeSlider"})," components ",(0,r.jsx)(n.code,{children:"radius"})," prop now affects thumb as well as track"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/native-select/",children:"NativeSelect"})," component now supports setting options as ",(0,r.jsx)(n.code,{children:"children"})," and options groups"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/anchor",children:"Anchor"})," component now supports ",(0,r.jsx)(n.code,{children:"underline"})," prop which lets you configure how link will be underlined: ",(0,r.jsx)(n.code,{children:"hover"})," (default), ",(0,r.jsx)(n.code,{children:"always"})," or ",(0,r.jsx)(n.code,{children:"never"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/affix",children:"Affix"})," component no longer supports ",(0,r.jsx)(n.code,{children:"target"})," prop, use ",(0,r.jsx)(n.code,{children:"portalProps"})," instead"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/drawer",children:"Drawer"})," component no longer supports ",(0,r.jsx)(n.code,{children:"target"})," prop, use ",(0,r.jsx)(n.code,{children:"portalProps"})," instead: ",(0,r.jsx)(n.code,{children:"portalProps={{ target: '.your-selector' }}"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/container",children:"Container"})," component no longer supports ",(0,r.jsx)(n.code,{children:"sizes"})," prop, use ",(0,r.jsx)(n.a,{href:"/styles/styles-api",children:"CSS variables"})," to customize sizes on ",(0,r.jsx)(n.a,{href:"/theming/theme-object",children:"theme"})," instead"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"useComponentDefaultProps"})," hook was renamed to ",(0,r.jsx)(n.a,{href:"/theming/default-props#useprops-hook",children:"useProps"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"withinPortal"})," prop is now true by default in all overlay components (",(0,r.jsx)(n.a,{href:"/core/popover",children:"Popover"}),", ",(0,r.jsx)(n.a,{href:"/core/hover-card",children:"HoverCard"}),", ",(0,r.jsx)(n.a,{href:"/core/tooltip",children:"Tooltip"}),", etc.)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"AlphaSlider"})," and ",(0,r.jsx)(n.code,{children:"HueSlider"})," components are no longer available, they can be used only as a part of ",(0,r.jsx)(n.a,{href:"/core/color-picker",children:"ColorPicker"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/text",children:"Text"})," default root element is now ",(0,r.jsx)(n.code,{children:"<p />"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/title",children:"Title"})," no longer supports all ",(0,r.jsx)(n.a,{href:"/core/text",children:"Text"})," props, only ",(0,r.jsx)(n.a,{href:"/styles/style-props",children:"style props"})," are available"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"MediaQuery"})," component was removed – use ",(0,r.jsx)(n.a,{href:"/styles/css-modules",children:"CSS modules"})," to apply responsive styles"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/highlight",children:"Highlight"})," component prop ",(0,r.jsx)(n.code,{children:"highlightColor"})," was renamed to ",(0,r.jsx)(n.code,{children:"color"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/tooltip",children:"Tooltip and Tooltip.Floating"})," components no longer support ",(0,r.jsx)(n.code,{children:"width"})," prop, use ",(0,r.jsx)(n.code,{children:"w"})," ",(0,r.jsx)(n.a,{href:"/styles/style-props",children:"style prop"})," instead"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/stack",children:"Stack"})," component ",(0,r.jsx)(n.code,{children:"spacing"})," prop was renamed to ",(0,r.jsx)(n.code,{children:"gap"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/input",children:"Input"})," and other ",(0,r.jsx)(n.code,{children:"Input"})," based components ",(0,r.jsx)(n.code,{children:"icon"})," prop was renamed to ",(0,r.jsx)(n.code,{children:"leftSection"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/loader",children:"Loader"})," component ",(0,r.jsx)(n.code,{children:"variant"})," prop was renamed to ",(0,r.jsx)(n.code,{children:"type"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"@mantine/core"})," package no longer depends on ",(0,r.jsx)(n.a,{href:"https://www.radix-ui.com/docs/primitives/components/scroll-area#scroll-area",children:"Radix UI ScrollArea"}),", ",(0,r.jsx)(n.a,{href:"/core/scroll-area",children:"ScrollArea"})," component is now a native Mantine component – it reduces bundle size, allows setting CSP for styles and improves performance (all styles are now applied with classes instead of inline ",(0,r.jsx)(n.code,{children:"<style />"})," tags)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/overlay",children:"Overlay"})," ",(0,r.jsx)(n.code,{children:"opacity"})," prop was renamed to ",(0,r.jsx)(n.code,{children:"backgroundOpacity"})," to avoid collision with ",(0,r.jsx)(n.code,{children:"opacity"})," ",(0,r.jsx)(n.a,{href:"/styles/style-props",children:"style prop"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/badge",children:"Badge"})," Styles API selectors were changed, see ",(0,r.jsx)(n.a,{href:"/core/badge?t=styles-api",children:"Badge Styles API"})," documentation for more details"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/slider",children:"Slider"})," Styles API selectors were changed, see ",(0,r.jsx)(n.a,{href:"/core/slider?t=styles-api",children:"Slider Styles API"})," documentation for more details"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/text",children:"Text"})," component no longer supports ",(0,r.jsx)(n.code,{children:"underline"}),", ",(0,r.jsx)(n.code,{children:"color"}),", ",(0,r.jsx)(n.code,{children:"strikethrough"}),", ",(0,r.jsx)(n.code,{children:"italic"}),", ",(0,r.jsx)(n.code,{children:"transform"}),", ",(0,r.jsx)(n.code,{children:"align"})," and ",(0,r.jsx)(n.code,{children:"weight"})," prop – use ",(0,r.jsx)(n.a,{href:"/styles/style-props",children:"style props"})," instead"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/portal",children:"Portal"})," component ",(0,r.jsx)(n.code,{children:"innerRef"})," prop was renamed to ",(0,r.jsx)(n.code,{children:"ref"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/scroll-area",children:"ScrollArea"})," now supports ",(0,r.jsx)(n.code,{children:"x"})," and ",(0,r.jsx)(n.code,{children:"y"})," values in ",(0,r.jsx)(n.code,{children:"offsetScrollbars"})," prop"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"TransferList"})," component is no longer available as a part of ",(0,r.jsx)(n.code,{children:"@mantine/core"})," package, instead you can implement it with ",(0,r.jsx)(n.a,{href:"/core/combobox",children:"Combobox"})," component (",(0,r.jsx)(n.a,{href:"/combobox?e=TransferList",children:"example"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/chip",children:"Chip"})," component now supports custom check icon"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/password-input",children:"PasswordInput"})," no longer supports ",(0,r.jsx)(n.code,{children:"visibilityToggleLabel"})," and ",(0,r.jsx)(n.code,{children:"toggleTabIndex"})," props, use ",(0,r.jsx)(n.code,{children:"visibilityToggleButtonProps"})," prop instead"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/stepper",children:"Stepper"})," no longer supports ",(0,r.jsx)(n.code,{children:"breakpoint"})," prop, you can apply responsive styles with Styles API"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/color-input",children:"ColorInput"})," no longer supports ",(0,r.jsx)(n.code,{children:"dropdownZIndex"}),", ",(0,r.jsx)(n.code,{children:"transitionProps"}),", ",(0,r.jsx)(n.code,{children:"withinPortal"}),", ",(0,r.jsx)(n.code,{children:"portalProps"})," and ",(0,r.jsx)(n.code,{children:"shadow"})," props, you can now pass these props with ",(0,r.jsx)(n.code,{children:"popoverProps"})," prop"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/loading-overlay",children:"LoadingOverlay"})," props are now grouped by the component they are passed down to: ",(0,r.jsx)(n.code,{children:"overlayProps"}),", ",(0,r.jsx)(n.code,{children:"loaderProps"})," and ",(0,r.jsx)(n.code,{children:"transitionProps"})," now replace props that were previously passed to ",(0,r.jsx)(n.code,{children:"LoadingOverlay"})," directly"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/x/dropzone",children:"Dropzone"})," component no longer supports ",(0,r.jsx)(n.code,{children:"padding"})," prop, use ",(0,r.jsx)(n.code,{children:"p"})," style prop instead"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/dialog",children:"Dialog"})," component now supports all ",(0,r.jsx)(n.a,{href:"/core/paper",children:"Paper"})," and ",(0,r.jsx)(n.a,{href:"/core/affix",children:"Affix"})," props, ",(0,r.jsx)(n.code,{children:"transitionDuration"}),", ",(0,r.jsx)(n.code,{children:"transition"})," and other transition related props were replaced with ",(0,r.jsx)(n.code,{children:"transitionProps"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/checkbox",children:"Checkbox"}),", ",(0,r.jsx)(n.a,{href:"/core/radio",children:"Radio"}),", ",(0,r.jsx)(n.a,{href:"/core/chip",children:"Chip"})," and ",(0,r.jsx)(n.a,{href:"/core/switch",children:"Switch"})," components now support ",(0,r.jsx)(n.code,{children:"rootRef"})," prop which allows using them with ",(0,r.jsx)(n.a,{href:"/core/tooltip",children:"Tooltip"})," and other similar components"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/grid",children:"Grid"})," no longer has ",(0,r.jsx)(n.code,{children:"overflow: hidden"})," styles by default, you can enable it by setting ",(0,r.jsx)(n.code,{children:"overflow"})," prop to ",(0,r.jsx)(n.code,{children:"hidden"})]}),"\n"]})]})}function A(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(z,{...e,children:(0,r.jsx)(D,{...e})})}function E(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},84384:(e,n,o)=>{"use strict";o.d(n,{I:()=>i});var r=o(6029),t=o(72055),s={col:"m_548ba23a",label:"m_60a4592e"};function i({children:e,...n}){return(0,r.jsx)(t.x.Col,{...n,children:(0,r.jsx)("div",{className:s.col,children:(0,r.jsx)("div",{className:s.label,children:e})})})}},85701:(e,n,o)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/changelog/7-0-0",function(){return o(83531)}])},88186:(e,n,o)=>{"use strict";o.d(n,{L:()=>p});var r=o(6029);o(55729);var t=o(14163),s=o(33987),i=o(38919),l=o(15583),a=o(76320),c=o(8411),d={root:"m_e9408a47","root--default":"m_84c9523a","root--filled":"m_ef274e49","root--unstyled":"m_eda993d3",legend:"m_90794832","legend--unstyled":"m_74ca27fe"};let h={variant:"default"},m=(0,s.V)((e,{radius:n})=>({root:{"--fieldset-radius":void 0===n?void 0:(0,t.nJ)(n)}})),p=(0,c.P9)((e,n)=>{let o=(0,i.Y)("Fieldset",h,e),{classNames:t,className:s,style:c,styles:p,unstyled:u,vars:x,legend:j,variant:f,children:g,attributes:b,...y}=o,v=(0,l.I)({name:"Fieldset",classes:d,props:o,className:s,style:c,classNames:t,styles:p,unstyled:u,attributes:b,vars:x,varsResolver:m});return(0,r.jsxs)(a.a,{component:"fieldset",ref:n,variant:f,...v("root",{variant:f}),...y,children:[j&&(0,r.jsx)("legend",{...v("legend",{variant:f}),children:j}),g]})});p.classes=d,p.displayName="@mantine/core/Fieldset"},90285:(e,n,o)=>{"use strict";o.d(n,{d:()=>i});var r=o(6029),t=o(29734),s={input:"m_93131372"};let i={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{classNames:s,variant:"underline",placeholder:"Underline input"}),(0,r.jsx)(t.p,{classNames:s,variant:"filled",placeholder:"Filled input",mt:"md"})]})},maxWidth:360,centered:!0,code:[{fileName:"Demo.tsx",code:`
import { Input, MantineProvider, createTheme } from '@mantine/core';
import classes from './Demo.module.css';

// It is better to add new variants in theme.components
// This way you will be able to use them in anywhere in the app
const theme = createTheme({
  components: {
    Input: Input.extend({ classNames: classes }),
  }
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Input variant="underline" placeholder="Underline input" />
      <Input variant="filled" placeholder="Filled input" mt="md" />
    </MantineProvider>
  );
}
`,language:"tsx"},{fileName:"Demo.module.css",code:`
.input {
  &[data-variant='underline'] {
    border-bottom: 2px solid;
    border-radius: 0;
    padding-left: 0;
    padding-right: 0;

    @mixin light {
      border-color: var(--mantine-color-gray-3);
    }

    @mixin dark {
      border-color: var(--mantine-color-dark-3);
    }

    &:focus {
      border-color: var(--mantine-color-blue-filled);
    }
  }
}
`,language:"scss"}]}},93322:(e,n,o)=>{"use strict";o.d(n,{C:()=>i});var r=o(6029),t=o(57414),s=o(61087);let i={type:"configurator",component:function(e){return(0,r.jsxs)(t.Y,{...e,children:[(0,r.jsx)(s.$,{variant:"default",children:"First"}),(0,r.jsx)(s.$,{variant:"default",children:"Second"}),(0,r.jsx)(s.$,{variant:"default",children:"Third"})]})},code:`
import { Group, Button } from '@mantine/core';

function Demo() {
  return (
    <Group{{props}}>
      <Button variant="default">First</Button>
      <Button variant="default">Second</Button>
      <Button variant="default">Third</Button>
    </Group>
  );
}
`,controls:[{type:"select",prop:"justify",data:["flex-start","center","space-between","flex-end"],initialValue:"flex-start",libraryValue:"flex-start"},{type:"size",prop:"gap",initialValue:"md",libraryValue:"md"},{type:"boolean",prop:"grow",initialValue:!1,libraryValue:!1}]}},94745:(e,n,o)=>{"use strict";o.d(n,{N:()=>s});var r=o(6029),t=o(4386);let s={type:"code",component:function(){return(0,r.jsx)(t._,{radius:"md",src:null,h:200,fallbackSrc:"https://placehold.co/600x400?text=Placeholder"})},code:`
import { Image } from '@mantine/core';

function Demo() {
  return (
    <Image
      radius="md"
      src={null}
      h={200}
      fallbackSrc="https://placehold.co/600x400?text=Placeholder"
    />
  );
}
`}},95696:(e,n,o)=>{"use strict";o.d(n,{l:()=>d});var r=o(6029),t=o(72567),s=o(6253),i=o(78153);let l=`
function Button() {
  return <button>Click me</button>;
}
`,a=`
.button {
  background-color: transparent;
  color: var(--mantine-color-blue-9);
}
`;function c(e){return e.endsWith(".ts")||e.endsWith(".tsx")?(0,r.jsx)(s.$,{size:14}):e.endsWith(".css")?(0,r.jsx)(i.R,{size:14}):null}let d={type:"code",component:function(){return(0,r.jsx)(t.o,{getFileIcon:c,radius:"md",code:[{fileName:"Button.tsx",code:l,language:"tsx"},{fileName:"Button.module.css",code:a,language:"scss"}]})},code:`
import { CodeHighlightTabs } from '@mantine/code-highlight';
import { TypeScriptIcon, CssIcon } from '@mantinex/dev-icons';

const tsxCode = \`${l}\`;

const cssCode = \`${a}\`;

function getFileIcon(fileName: string) {
  if (fileName.endsWith('.ts') || fileName.endsWith('.tsx')) {
    return <TypeScriptIcon size={14} />;
  }

  if (fileName.endsWith('.css')) {
    return <CssIcon size={14} />;
  }

  return null;
}

function Demo() {
  return (
    <CodeHighlightTabs
      getFileIcon={getFileIcon}
      radius="md"
      code={[
        {
          fileName: 'Button.tsx',
          code: tsxCode,
          language: 'tsx',
        },
        {
          fileName: 'Button.module.css',
          code: cssCode,
          language: 'scss',
        },
      ]}
    />
  );
}
`}},96556:(e,n,o)=>{"use strict";o.d(n,{A:()=>r});let r=(0,o(41495).A)("outline","exclamation-circle","ExclamationCircle",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M12 9v4",key:"svg-1"}],["path",{d:"M12 16v.01",key:"svg-2"}]])}},e=>{e.O(0,[2027,43718,38547,2061,4218,50280,90636,46593,38792],()=>e(e.s=85701)),_N_E=e.O()}]);