(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[87319],{79610:function(n,e,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/theming/default-props",function(){return o(63047)}])},63047:function(n,e,o){"use strict";o.r(e),o.d(e,{default:function(){return w}});var t=o(52322),r=o(45392),s=o(60231),i=o(17115),c=o(68755),p=o(93010);let a=`
import { MantineProvider, Button, Group, createTheme } from '@mantine/core';

const theme = createTheme({
  components: {
    Button: Button.extend({
      defaultProps: {
        color: 'cyan',
        variant: 'outline',
      },
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Group>
        <Button>Default button</Button>
        <Button color="red" variant="filled">
          Button with props
        </Button>
      </Group>
    </MantineProvider>
  );
}
`,d=(0,s.j)({components:{Button:i.z.extend({defaultProps:{color:"cyan",variant:"outline"}})}}),u={type:"code",component:function(){return(0,t.jsx)(c.M2,{theme:d,children:(0,t.jsxs)(p.Z,{children:[(0,t.jsx)(i.z,{children:"Default button"}),(0,t.jsx)(i.z,{color:"red",variant:"filled",children:"Button with props"})]})})},centered:!0,code:a};var l=o(38483);let m=`
import { useProps, MantineThemeProvider, createTheme } from '@mantine/core';

interface CustomComponentProps {
  color?: string;
  children?: React.ReactNode;
}

const defaultProps: Partial<CustomComponentProps> = {
  color: 'red',
};

function CustomComponent(props: CustomComponentProps) {
  const { color, children } = useProps('CustomComponent', defaultProps, props);
  return <div style={{ color }}>{children}</div>;
}

const theme = createTheme({
  components: {
    CustomComponent: {
      defaultProps: {
        color: 'green',
      },
    },
  },
});

function Demo() {
  return (
    <div>
      <CustomComponent>Default color</CustomComponent>

      <MantineThemeProvider theme={theme}>
        <CustomComponent>Provider color</CustomComponent>
        <CustomComponent color="blue">Prop color</CustomComponent>
      </MantineThemeProvider>
    </div>
  );
}
`,h={color:"red"};function f(n){let{color:e,children:o}=(0,l.w)("CustomComponent",h,n);return(0,t.jsx)("div",{style:{color:e},children:o})}let x=(0,s.j)({components:{CustomComponent:{defaultProps:{color:"green"}}}}),j={type:"code",component:function(){return(0,t.jsxs)("div",{children:[(0,t.jsx)(f,{children:"Default color"}),(0,t.jsxs)(c.M2,{theme:x,children:[(0,t.jsx)(f,{children:"Provider color"}),(0,t.jsx)(f,{color:"blue",children:"Prop color"})]})]})},code:m};var P=o(25071),v=o(15019);let C=(0,P.A)(v.us.DefaultProps);function b(n){let e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...n.components},{Demo:o}=e;return o||function(n,e){throw Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"default-props",children:"Default props"}),"\n",(0,t.jsxs)(e.p,{children:["You can define default props for every Mantine component by setting ",(0,t.jsx)(e.code,{children:"theme.components"}),".\nThese props will be used by default by all components of your application unless they are overridden by component props:"]}),"\n",(0,t.jsx)(o,{data:u}),"\n",(0,t.jsx)(e.h2,{id:"default-props-with-mantinethemeprovider",children:"Default props with MantineThemeProvider"}),"\n",(0,t.jsxs)(e.p,{children:["You can also use ",(0,t.jsx)(e.code,{children:"MantineThemeProvider"})," to define default props\nfor a part of your application:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-tsx",children:"import {\n  Button,\n  createTheme,\n  MantineThemeProvider,\n} from '@mantine/core';\n\nconst theme = createTheme({\n  components: {\n    Button: Button.extend({\n      defaultProps: {\n        color: 'cyan',\n        variant: 'outline',\n      },\n    }),\n  },\n});\n\nfunction Demo() {\n  return (\n    <>\n      <MantineThemeProvider theme={theme}>\n        {/* Part of the app with theme */}\n      </MantineThemeProvider>\n\n      {/* Another part without theme */}\n    </>\n  );\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"default-props-for-compound-components",children:"Default props for compound components"}),"\n",(0,t.jsxs)(e.p,{children:["Some components like ",(0,t.jsx)(e.a,{href:"/core/menu/",children:"Menu"})," and ",(0,t.jsx)(e.a,{href:"/core/tabs/",children:"Tabs"})," have associated compound components:\n",(0,t.jsx)(e.code,{children:"Menu.Item"}),", ",(0,t.jsx)(e.code,{children:"Tabs.List"}),", etc.. You can add default props to these components by omitting the dot from component name:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-tsx",children:"import {\n  createTheme,\n  MantineProvider,\n  Menu,\n  Tabs,\n} from '@mantine/core';\n\nconst theme = createTheme({\n  components: {\n    MenuItem: Menu.Item.extend({\n      defaultProps: { color: 'red' },\n    }),\n\n    TabsList: Tabs.List.extend({\n      defaultProps: {\n        justify: 'center',\n      },\n    }),\n  },\n});\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={theme}>\n      {/* Your app here */}\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"useprops-hook",children:"useProps hook"}),"\n",(0,t.jsxs)(e.p,{children:["You can use ",(0,t.jsx)(e.code,{children:"useProps"})," hook to add default props support to any custom component.\n",(0,t.jsx)(e.code,{children:"useProps"})," accepts three arguments:"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"component name (string) – it is used to connect component with theme"}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"defaultProps"})," – default props on component level – these props are used when default props are not defined on theme"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"props"})," – props passed to component"]}),"\n"]}),"\n",(0,t.jsx)(o,{data:j}),"\n",(0,t.jsx)(e.h2,{id:"withprops-function",children:"withProps function"}),"\n",(0,t.jsxs)(e.p,{children:["All Mantine components have ",(0,t.jsx)(e.code,{children:"withProps"})," static function that can be used to\nadd default props to the component:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-tsx",children:"import { IMaskInput } from 'react-imask';\nimport { Button, InputBase } from '@mantine/core';\n\nconst LinkButton = Button.withProps({\n  component: 'a',\n  target: '_blank',\n  rel: 'noreferrer',\n  variant: 'subtle',\n});\n\nconst PhoneInput = InputBase.withProps({\n  mask: '+7 (000) 000-0000',\n  component: IMaskInput,\n  label: 'Your phone number',\n  placeholder: 'Your phone number',\n});\n\nfunction Demo() {\n  return (\n    <>\n      {/* You can pass additional props to components created with `withProps` */}\n      <LinkButton href=\"https://mantine.dev\">\n        Mantine website\n      </LinkButton>\n\n      {/* Component props override default props defined in `withProps` */}\n      <PhoneInput placeholder=\"Personal phone\" />\n    </>\n  );\n}\n"})})]})}function w(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(C,{...n,children:(0,t.jsx)(b,{...n})})}}},function(n){n.O(0,[61177,66748,11340,92888,49774,40179],function(){return n(n.s=79610)}),_N_E=n.O()}]);