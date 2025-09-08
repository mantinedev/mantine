(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[48793],{1798:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});let s=(0,n(41495).A)("outline","license","License",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},6620:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});let s=(0,n(41495).A)("outline","code","Code",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},6892:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});let s=(0,n(41495).A)("outline","pencil","Pencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},21923:(e,t,n)=>{"use strict";n.d(t,{g:()=>r});var s=n(6029),o=n(88992),a=n(61087),i=n(57414),d={root:"m_8b35c16f",section:"m_27c75738"};function l(e){return(0,s.jsx)(a.$,{...e,radius:"md",classNames:d})}let r={type:"code",component:function(){return(0,s.jsxs)(i.Y,{children:[(0,s.jsx)(l,{leftSection:"12",rightSection:(0,s.jsx)(o.A,{size:18}),children:"Send files"}),(0,s.jsx)(l,{leftSection:"3",rightSection:(0,s.jsx)(o.A,{size:18}),disabled:!0,children:"Send files"})]})},centered:!0,code:[{fileName:"Demo.module.css",code:`
.root {
  border-top-left-radius: var(--mantine-radius-xl);
  border-bottom-left-radius: var(--mantine-radius-xl);
  padding-left: 4px;

  /* The following styles will be applied only when button is disabled */
  &[data-disabled] {
    /* You can use Mantine PostCSS mixins inside data attributes */
    @mixin light {
      border: 1px solid var(--mantine-color-gray-2);
    }

    @mixin dark {
      border: 1px solid var(--mantine-color-dark-4);
    }

    /* You can target child elements that are inside .root[data-disabled] */
    & .section[data-position='left'] {
      opacity: 0.6;
    }
  }
}

.section {
  /* Apply styles only to left section */
  &[data-position='left'] {
    --section-size: calc(var(--button-height) - 8px);

    background-color: var(--mantine-color-body);
    color: var(--mantine-color-text);
    height: var(--section-size);
    width: var(--section-size);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--mantine-radius-xl);
  }

  &[data-position='right'] {
    @mixin rtl {
      transform: rotate(180deg);
    }
  }
}
`,language:"scss"},{fileName:"Demo.tsx",code:`
import { Button, ButtonProps, Group } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import classes from './Demo.module.css';

function SendFilesButton(props: ButtonProps & React.ComponentPropsWithoutRef<'button'>) {
  return <Button {...props} radius="md" classNames={classes} />;
}

function Demo() {
  return (
    <Group>
      <SendFilesButton
        leftSection="12"
        rightSection={<IconArrowRight size={18} />}
      >
        Send files
      </SendFilesButton>
      <SendFilesButton
        leftSection="3"
        rightSection={<IconArrowRight size={18} />}
        disabled
      >
        Send files
      </SendFilesButton>
    </Group>
  );
}
`,language:"tsx"}]}},24583:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});let s=(0,n(41495).A)("outline","arrow-left","ArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},30788:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>u});var s=n(6029),o=n(16285),a=n(21923),i=n(64107),d=n(96608),l=n(38547),r=n(5262);let c=(0,l.P)(r.XZ.DataAttributes);function h(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"data-attributes",children:"data attributes"}),"\n",(0,s.jsxs)(t.p,{children:["Mantine components use ",(0,s.jsx)(t.code,{children:"data-*"})," attributes to apply styles. These attributes are used as\na modifier to apply styles based on component state. General rule of Mantine components\nstyles: one class with shared styles and any number of ",(0,s.jsx)(t.code,{children:"data-*"})," attributes as modifiers."]}),"\n",(0,s.jsxs)(t.p,{children:["Example of applying styles with ",(0,s.jsx)(t.code,{children:"data-*"})," attributes:"]}),"\n",(0,s.jsx)(n,{data:a.g}),"\n",(0,s.jsx)(t.h2,{id:"data-attributes-values",children:"data attributes values"}),"\n",(0,s.jsxs)(t.p,{children:["Most of the ",(0,s.jsx)(t.code,{children:"data-*"})," attributes do not have associated values, they represent boolean\nstate or a feature. For example, when the ",(0,s.jsx)(t.code,{children:"disabled"})," prop on ",(0,s.jsx)(t.a,{href:"/core/button",children:"Button"})," is set,\nthe ",(0,s.jsx)(t.code,{children:"data-disabled"})," attribute is added to the ",(0,s.jsx)(t.code,{children:"<button />"})," element:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"import { Button } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Button disabled className=\"my-button\">\n      Disabled button\n    </Button>\n  );\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:"Will output the following HTML:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:'<button class="my-button" data-disabled>Disabled button</button>\n'})}),"\n",(0,s.jsx)(t.p,{children:"You can then use this attribute to apply styles to the disabled button:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-css",children:".my-button {\n  color: var(--mantine-color-black);\n\n  &[data-disabled] {\n    color: var(--mantine-color-gray-5);\n  }\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["When the ",(0,s.jsx)(t.code,{children:"disabled"})," prop is not set, then the ",(0,s.jsx)(t.code,{children:"data-disabled"})," attribute is not added to the\nbutton:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:'<button class="my-button">Not disabled button</button>\n'})}),"\n",(0,s.jsxs)(t.p,{children:["In some cases, ",(0,s.jsx)(t.code,{children:"data-*"})," attributes have associated values, for example, a ",(0,s.jsx)(t.a,{href:"/core/button",children:"Button"}),"\ncomponent's ",(0,s.jsx)(t.code,{children:"section"})," element has an associated ",(0,s.jsx)(t.code,{children:"data-position"})," attribute which can be\n",(0,s.jsx)(t.code,{children:"left"})," or ",(0,s.jsx)(t.code,{children:"right"}),". The following example will render two ",(0,s.jsx)(t.code,{children:"section"})," elements, one with\n",(0,s.jsx)(t.code,{children:'data-position="left"'})," and another with ",(0,s.jsx)(t.code,{children:'data-position="right"'}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:'import { Button } from \'@mantine/core\';\n\nfunction Demo() {\n  return (\n    <Button leftSection="L" rightSection="R">\n      Label\n    </Button>\n  );\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"Will output the following HTML:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:'<button>\n  <span class="section" data-position="left">L</span>\n  Label\n  <span class="section" data-position="right">R</span>\n</button>\n'})}),"\n",(0,s.jsx)(t.p,{children:"You can then use this attribute to apply styles to the left and right sections:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-css",children:".section {\n  /* Styles applied to both sections */\n  width: 2rem;\n\n  /* Styles applied only to left section */\n  &[data-position='left'] {\n    background-color: red;\n  }\n\n  /* Styles applied only to right section */\n  &[data-position='right'] {\n    background-color: blue;\n  }\n}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"components-data-attributes-documentation",children:"Components data attributes documentation"}),"\n",(0,s.jsxs)(t.p,{children:["Every component that uses ",(0,s.jsx)(t.code,{children:"data-*"})," attributes has a dedicated section under the ",(0,s.jsx)(t.code,{children:"Styles API"})," tab."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/core/button",children:"Button"})," component ",(0,s.jsx)(t.code,{children:"data-*"})," attributes table:"]}),"\n",(0,s.jsx)(d.xt,{data:i.r,withTableBorder:!1,my:"xl",fixedLayout:!1}),"\n",(0,s.jsx)(t.p,{children:"How to read the table:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"selector"})," column – ",(0,s.jsx)(t.a,{href:"/styles/styles-api",children:"Styles API"})," selector (or multiple selectors) to which data attribute is added"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"attribute"})," column – data attribute name"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"condition"})," column – condition based on which the data attribute is added to the element"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"value"})," column – value of the data attribute"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"mod-prop",children:"mod prop"}),"\n",(0,s.jsxs)(t.p,{children:["All components support ",(0,s.jsx)(t.code,{children:"mod"})," prop, which allows adding data attributes to\nthe root element:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"import { Box } from '@mantine/core';\n\n<Box mod=\"data-button\" />;\n// -> <div data-button />\n\n<Box mod={{ opened: true }} />;\n// -> <div data-opened />\n\n<Box mod={{ opened: false }} />;\n// -> <div />\n\n<Box mod={['button', { opened: true }]} />;\n// -> <div data-button data-opened />\n\n<Box mod={{ orientation: 'horizontal' }} />;\n// -> <div data-orientation=\"horizontal\" />\n"})})]})}function u(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,s.jsx)(c,{...e,children:(0,s.jsx)(h,{...e})})}},34891:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});let s=(0,n(41495).A)("outline","adjustments","Adjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},41949:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});let s=(0,n(41495).A)("outline","calendar","Calendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},61231:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/styles/data-attributes",function(){return n(30788)}])},65433:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});let s=(0,n(41495).A)("outline","switch-2","Switch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},84276:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});let s=(0,n(41495).A)("outline","file-text","FileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},88992:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});let s=(0,n(41495).A)("outline","arrow-right","ArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])}},e=>{e.O(0,[38547,90636,46593,38792],()=>e(e.s=61231)),_N_E=e.O()}]);