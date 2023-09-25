(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7319],{33507:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var o=(0,t(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var o=(0,t(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var o=(0,t(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var o=(0,t(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var o=(0,t(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var o=(0,t(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var o=(0,t(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},69575:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/theming/default-props",function(){return t(38165)}])},38165:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return k}});var o=t(85893),r=t(11151),s=t(19905),c=t(9904),a=t(67294),i=t(28120),p=t(14469),l=t(43440),d=t(16262);let u=`
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
`,h=(0,i.j)({components:{Button:p.z.extend({defaultProps:{color:"cyan",variant:"outline"}})}}),m={type:"code",component:function(){return a.createElement(l.M2,{theme:h},a.createElement(d.Z,null,a.createElement(p.z,null,"Default button"),a.createElement(p.z,{color:"red",variant:"filled"},"Button with props")))},centered:!0,code:u};var f=t(30370);let v=`
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
`,M={color:"red"};function y(e){let{color:n,children:t}=(0,f.w)("CustomComponent",M,e);return a.createElement("div",{style:{color:n}},t)}let g=(0,i.j)({components:{CustomComponent:{defaultProps:{color:"green"}}}}),P={type:"code",component:function(){return a.createElement("div",null,a.createElement(y,null,"Default color"),a.createElement(l.M2,{theme:g},a.createElement(y,null,"Provider color"),a.createElement(y,{color:"blue"},"Prop color")))},code:v},x=(0,s.A)(c.us.DefaultProps);function j(e){let n=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",a:"a",ul:"ul",li:"li"},(0,r.ah)(),e.components),{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"default-props",children:"Default props"}),"\n",(0,o.jsxs)(n.p,{children:["You can define default props for every Mantine component by setting ",(0,o.jsx)(n.code,{children:"theme.components"}),".\nThese props will be used by default by all components of your application unless they are overridden by component props:"]}),"\n",(0,o.jsx)(t,{data:m}),"\n",(0,o.jsx)(n.h2,{id:"default-props-with-mantinethemeprovider",children:"Default props with MantineThemeProvider"}),"\n",(0,o.jsxs)(n.p,{children:["You can also use ",(0,o.jsx)(n.code,{children:"MantineThemeProvider"})," to define default props\nfor a part of your application:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { MantineThemeProvider, Button, createTheme } from '@mantine/core';\n\nconst theme = createTheme({\n  components: {\n    Button: Button.extend({\n      defaultProps: {\n        color: 'cyan',\n        variant: 'outline',\n      },\n    }),\n  },\n});\n\nfunction Demo() {\n  return (\n    <>\n      <MantineThemeProvider theme={theme}>\n        <AppPart />\n      </MantineThemeProvider>\n\n      <AnotherAppPart />\n    </>\n  );\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"default-props-for-compound-components",children:"Default props for compound components"}),"\n",(0,o.jsxs)(n.p,{children:["Some components like ",(0,o.jsx)(n.a,{href:"/core/menu/",children:"Menu"})," and ",(0,o.jsx)(n.a,{href:"/core/tabs/",children:"Tabs"})," have associated compound components:\n",(0,o.jsx)(n.code,{children:"Menu.Item"}),", ",(0,o.jsx)(n.code,{children:"Tabs.List"}),", etc.. You can add default props to these components by omitting the dot from component name:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { MantineProvider, Menu, Tabs } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <MantineProvider\n      theme={{\n        components: {\n          MenuItem: Menu.Item.extend({\n            defaultProps: { color: 'red' },\n          }),\n\n          TabsList: Tabs.List.extend({\n            defaultProps: {\n              justify: 'center',\n            },\n          }),\n        },\n      }}\n    >\n      <App />\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"useprops-hook",children:"useProps hook"}),"\n",(0,o.jsxs)(n.p,{children:["You can use ",(0,o.jsx)(n.code,{children:"useProps"})," hook to add default props support to any custom component.\n",(0,o.jsx)(n.code,{children:"useProps"})," accepts three arguments:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"component name (string) – it is used to connect component with theme"}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"defaultProps"})," – default props on component level – these props are used when default props are not defined on theme"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"props"})," – props passed to component"]}),"\n"]}),"\n",(0,o.jsx)(t,{data:P})]})}var k=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(x,Object.assign({},e,{children:(0,o.jsx)(j,e)}))}}},function(e){e.O(0,[8992,178,9774,2888,179],function(){return e(e.s=69575)}),_N_E=e.O()}]);