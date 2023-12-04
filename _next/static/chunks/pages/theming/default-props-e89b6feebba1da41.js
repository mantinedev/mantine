(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7319],{95457:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/theming/default-props",function(){return o(73637)}])},73637:function(e,n,o){"use strict";o.r(n),o.d(n,{default:function(){return b}});var t=o(24246),r=o(71670),s=o(3916),c=o(30289),i=o(27378),p=o(74369),l=o(8671),u=o(2256),a=o(22971);let d=`
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
`,m=(0,p.j)({components:{Button:l.z.extend({defaultProps:{color:"cyan",variant:"outline"}})}}),h={type:"code",component:function(){return i.createElement(u.M2,{theme:m},i.createElement(a.Z,null,i.createElement(l.z,null,"Default button"),i.createElement(l.z,{color:"red",variant:"filled"},"Button with props")))},centered:!0,code:d};var f=o(96739);let P=`
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
`,x={color:"red"};function v(e){let{color:n,children:o}=(0,f.w)("CustomComponent",x,e);return i.createElement("div",{style:{color:n}},o)}let j=(0,p.j)({components:{CustomComponent:{defaultProps:{color:"green"}}}}),C={type:"code",component:function(){return i.createElement("div",null,i.createElement(v,null,"Default color"),i.createElement(u.M2,{theme:j},i.createElement(v,null,"Provider color"),i.createElement(v,{color:"blue"},"Prop color")))},code:P},M=(0,s.A)(c.us.DefaultProps);function T(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components},{Demo:o}=n;return o||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"default-props",children:"Default props"}),"\n",(0,t.jsxs)(n.p,{children:["You can define default props for every Mantine component by setting ",(0,t.jsx)(n.code,{children:"theme.components"}),".\nThese props will be used by default by all components of your application unless they are overridden by component props:"]}),"\n",(0,t.jsx)(o,{data:h}),"\n",(0,t.jsx)(n.h2,{id:"default-props-with-mantinethemeprovider",children:"Default props with MantineThemeProvider"}),"\n",(0,t.jsxs)(n.p,{children:["You can also use ",(0,t.jsx)(n.code,{children:"MantineThemeProvider"})," to define default props\nfor a part of your application:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import {\n  MantineThemeProvider,\n  Button,\n  createTheme,\n} from '@mantine/core';\n\nconst theme = createTheme({\n  components: {\n    Button: Button.extend({\n      defaultProps: {\n        color: 'cyan',\n        variant: 'outline',\n      },\n    }),\n  },\n});\n\nfunction Demo() {\n  return (\n    <>\n      <MantineThemeProvider theme={theme}>\n        <AppPart />\n      </MantineThemeProvider>\n\n      <AnotherAppPart />\n    </>\n  );\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"default-props-for-compound-components",children:"Default props for compound components"}),"\n",(0,t.jsxs)(n.p,{children:["Some components like ",(0,t.jsx)(n.a,{href:"/core/menu/",children:"Menu"})," and ",(0,t.jsx)(n.a,{href:"/core/tabs/",children:"Tabs"})," have associated compound components:\n",(0,t.jsx)(n.code,{children:"Menu.Item"}),", ",(0,t.jsx)(n.code,{children:"Tabs.List"}),", etc.. You can add default props to these components by omitting the dot from component name:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { MantineProvider, Menu, Tabs } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <MantineProvider\n      theme={{\n        components: {\n          MenuItem: Menu.Item.extend({\n            defaultProps: { color: 'red' },\n          }),\n\n          TabsList: Tabs.List.extend({\n            defaultProps: {\n              justify: 'center',\n            },\n          }),\n        },\n      }}\n    >\n      <App />\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"useprops-hook",children:"useProps hook"}),"\n",(0,t.jsxs)(n.p,{children:["You can use ",(0,t.jsx)(n.code,{children:"useProps"})," hook to add default props support to any custom component.\n",(0,t.jsx)(n.code,{children:"useProps"})," accepts three arguments:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"component name (string) – it is used to connect component with theme"}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"defaultProps"})," – default props on component level – these props are used when default props are not defined on theme"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"props"})," – props passed to component"]}),"\n"]}),"\n",(0,t.jsx)(o,{data:C})]})}function b(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(M,{...e,children:(0,t.jsx)(T,{...e})})}}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=95457)}),_N_E=e.O()}]);