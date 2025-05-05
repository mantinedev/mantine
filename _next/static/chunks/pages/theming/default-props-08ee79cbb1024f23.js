(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9709],{75269:(e,n,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/theming/default-props",function(){return t(97342)}])},97342:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>P});var o=t(31085),r=t(71184),s=t(12616),a=t(52022),p=t(92408),d=t(56051);let i=`
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
`,c=(0,s.a)({components:{Button:a.$.extend({defaultProps:{color:"cyan",variant:"outline"}})}}),l={type:"code",component:function(){return(0,o.jsx)(p.nW,{theme:c,children:(0,o.jsxs)(d.Y,{children:[(0,o.jsx)(a.$,{children:"Default button"}),(0,o.jsx)(a.$,{color:"red",variant:"filled",children:"Button with props"})]})})},centered:!0,code:i};var h=t(29686);let u=`
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
`,m={color:"red"};function v(e){let{color:n,children:t}=(0,h.Y)("CustomComponent",m,e);return(0,o.jsx)("div",{style:{color:n},children:t})}let f=(0,s.a)({components:{CustomComponent:{defaultProps:{color:"green"}}}}),M={type:"code",component:function(){return(0,o.jsxs)("div",{children:[(0,o.jsx)(v,{children:"Default color"}),(0,o.jsxs)(p.nW,{theme:f,children:[(0,o.jsx)(v,{children:"Provider color"}),(0,o.jsx)(v,{color:"blue",children:"Prop color"})]})]})},code:u};var g=t(18675),y=t(20017);let x=(0,g.P)(y.XZ.DefaultProps);function k(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"default-props",children:"Default props"}),"\n",(0,o.jsxs)(n.p,{children:["You can define default props for every Mantine component by setting ",(0,o.jsx)(n.code,{children:"theme.components"}),".\nThese props will be used by default by all components of your application unless they are overridden by component props:"]}),"\n",(0,o.jsx)(t,{data:l}),"\n",(0,o.jsx)(n.h2,{id:"default-props-with-mantinethemeprovider",children:"Default props with MantineThemeProvider"}),"\n",(0,o.jsxs)(n.p,{children:["You can also use ",(0,o.jsx)(n.code,{children:"MantineThemeProvider"})," to define default props\nfor a part of your application:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import {\n  Button,\n  createTheme,\n  MantineThemeProvider,\n} from '@mantine/core';\n\nconst theme = createTheme({\n  components: {\n    Button: Button.extend({\n      defaultProps: {\n        color: 'cyan',\n        variant: 'outline',\n      },\n    }),\n  },\n});\n\nfunction Demo() {\n  return (\n    <>\n      <MantineThemeProvider theme={theme}>\n        {/* Part of the app with theme */}\n      </MantineThemeProvider>\n\n      {/* Another part without theme */}\n    </>\n  );\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"default-props-for-compound-components",children:"Default props for compound components"}),"\n",(0,o.jsxs)(n.p,{children:["Some components like ",(0,o.jsx)(n.a,{href:"/core/menu/",children:"Menu"})," and ",(0,o.jsx)(n.a,{href:"/core/tabs/",children:"Tabs"})," have associated compound components:\n",(0,o.jsx)(n.code,{children:"Menu.Item"}),", ",(0,o.jsx)(n.code,{children:"Tabs.List"}),", etc.. You can add default props to these components by omitting the dot from component name:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import {\n  createTheme,\n  MantineProvider,\n  Menu,\n  Tabs,\n} from '@mantine/core';\n\nconst theme = createTheme({\n  components: {\n    MenuItem: Menu.Item.extend({\n      defaultProps: { color: 'red' },\n    }),\n\n    TabsList: Tabs.List.extend({\n      defaultProps: {\n        justify: 'center',\n      },\n    }),\n  },\n});\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={theme}>\n      {/* Your app here */}\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"useprops-hook",children:"useProps hook"}),"\n",(0,o.jsxs)(n.p,{children:["You can use ",(0,o.jsx)(n.code,{children:"useProps"})," hook to add default props support to any custom component.\n",(0,o.jsx)(n.code,{children:"useProps"})," accepts three arguments:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"component name (string) – it is used to connect component with theme"}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"defaultProps"})," – default props on component level – these props are used when default props are not defined on theme"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"props"})," – props passed to component"]}),"\n"]}),"\n",(0,o.jsx)(t,{data:M}),"\n",(0,o.jsx)(n.h2,{id:"withprops-function",children:"withProps function"}),"\n",(0,o.jsxs)(n.p,{children:["All Mantine components have ",(0,o.jsx)(n.code,{children:"withProps"})," static function that can be used to\nadd default props to the component:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { IMaskInput } from 'react-imask';\nimport { Button, InputBase } from '@mantine/core';\n\nconst LinkButton = Button.withProps({\n  component: 'a',\n  target: '_blank',\n  rel: 'noreferrer',\n  variant: 'subtle',\n});\n\nconst PhoneInput = InputBase.withProps({\n  mask: '+7 (000) 000-0000',\n  component: IMaskInput,\n  label: 'Your phone number',\n  placeholder: 'Your phone number',\n});\n\nfunction Demo() {\n  return (\n    <>\n      {/* You can pass additional props to components created with `withProps` */}\n      <LinkButton href=\"https://mantine.dev\">\n        Mantine website\n      </LinkButton>\n\n      {/* Component props override default props defined in `withProps` */}\n      <PhoneInput placeholder=\"Personal phone\" />\n    </>\n  );\n}\n"})})]})}function P(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(x,{...e,children:(0,o.jsx)(k,{...e})})}},87186:(e,n,t)=>{"use strict";t.d(n,{A:()=>o});var o=(0,t(73366).A)("outline","adjustments","IconAdjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},80502:(e,n,t)=>{"use strict";t.d(n,{A:()=>o});var o=(0,t(73366).A)("outline","arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},89689:(e,n,t)=>{"use strict";t.d(n,{A:()=>o});var o=(0,t(73366).A)("outline","arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},61584:(e,n,t)=>{"use strict";t.d(n,{A:()=>o});var o=(0,t(73366).A)("outline","calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},91133:(e,n,t)=>{"use strict";t.d(n,{A:()=>o});var o=(0,t(73366).A)("outline","code","IconCode",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},11749:(e,n,t)=>{"use strict";t.d(n,{A:()=>o});var o=(0,t(73366).A)("outline","file-text","IconFileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},89843:(e,n,t)=>{"use strict";t.d(n,{A:()=>o});var o=(0,t(73366).A)("outline","license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},9613:(e,n,t)=>{"use strict";t.d(n,{A:()=>o});var o=(0,t(73366).A)("outline","pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},55764:(e,n,t)=>{"use strict";t.d(n,{A:()=>o});var o=(0,t(73366).A)("outline","switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])}},e=>{var n=n=>e(e.s=n);e.O(0,[18675,90636,46593,38792],()=>n(75269)),_N_E=e.O()}]);