(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[49433],{70951:(t,e,o)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/x/tiptap",function(){return o(60738)}])},60738:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>O});var i=o(31085),n=o(71184),r=o(35041),l=o(77542),s=o(81690),c=o(37353),d=o(95062),a=o(10047);let h={type:"code",component:function(){let t=(0,c.hG)({extensions:[d.A,s.A.configure({placeholder:"This is placeholder"})],content:""});return(0,i.jsx)(a.d,{editor:t,children:(0,i.jsx)(a.d.Content,{})})},code:`
import { RichTextEditor } from '@mantine/tiptap';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';

function Demo() {
  const editor = useEditor({
    extensions: [StarterKit, Placeholder.configure({ placeholder: 'This is placeholder' })],
    content: '',
  });

  return (
    <RichTextEditor editor={editor}>
      <RichTextEditor.Content />
    </RichTextEditor>
  );
}
`};var p=o(55090),x=o(21580),u=o(57760);let m={type:"code",component:function(){let t=(0,c.hG)({extensions:[d.A,u.A,x.Q],content:"<p>Apply some colors to this text</p>"});return(0,i.jsxs)(a.d,{editor:t,children:[(0,i.jsxs)(a.d.Toolbar,{sticky:!0,stickyOffset:"var(--docs-header-height)",children:[(0,i.jsx)(a.d.ColorPicker,{colors:["#25262b","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"]}),(0,i.jsxs)(a.d.ControlsGroup,{children:[(0,i.jsx)(a.d.Control,{interactive:!1,children:(0,i.jsx)(p.A,{size:16,stroke:1.5})}),(0,i.jsx)(a.d.Color,{color:"#F03E3E"}),(0,i.jsx)(a.d.Color,{color:"#7048E8"}),(0,i.jsx)(a.d.Color,{color:"#1098AD"}),(0,i.jsx)(a.d.Color,{color:"#37B24D"}),(0,i.jsx)(a.d.Color,{color:"#F59F00"})]}),(0,i.jsx)(a.d.UnsetColor,{})]}),(0,i.jsx)(a.d.Content,{})]})},code:`
import { useEditor } from '@tiptap/react';
import { IconColorPicker } from '@tabler/icons-react';
import { Color } from '@tiptap/extension-color';
import TextStyle from '@tiptap/extension-text-style';
import StarterKit from '@tiptap/starter-kit';
import { RichTextEditor } from '@mantine/tiptap';

function Demo() {
  const editor = useEditor({
    extensions: [StarterKit, TextStyle, Color],
    content: '<p>Apply some colors to this text</p>',
  });

  return (
    <RichTextEditor editor={editor}>
      <RichTextEditor.Toolbar sticky stickyOffset="var(--docs-header-height)">
        <RichTextEditor.ColorPicker
          colors={[
            '#25262b',
            '#868e96',
            '#fa5252',
            '#e64980',
            '#be4bdb',
            '#7950f2',
            '#4c6ef5',
            '#228be6',
            '#15aabf',
            '#12b886',
            '#40c057',
            '#82c91e',
            '#fab005',
            '#fd7e14',
          ]}
        />

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Control interactive={false}>
            <IconColorPicker size={16} stroke={1.5} />
          </RichTextEditor.Control>
          <RichTextEditor.Color color="#F03E3E" />
          <RichTextEditor.Color color="#7048E8" />
          <RichTextEditor.Color color="#1098AD" />
          <RichTextEditor.Color color="#37B24D" />
          <RichTextEditor.Color color="#F59F00" />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.UnsetColor />
      </RichTextEditor.Toolbar>

      <RichTextEditor.Content />
    </RichTextEditor>
  );
}
`};var g=o(93911),j=o(43448);let T=(0,o(25502).$)(),E=`
import { RichTextEditor } from '@mantine/tiptap';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import { createLowlight } from 'lowlight';
import ts from 'highlight.js/lib/languages/typescript';

const lowlight = createLowlight();

// register languages that you are planning to use
lowlight.register({ ts });

function escapeHtml(unsafe: string) {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

const codeExample =
  escapeHtml(\`// Valid braces Kata \u2013 https://www.codewars.com/kata/5277c8a221e209d3f6000b56

const pairs: Record<string, string> = {
  '[': ']',
  '{': '}',
  '(': ')',
};

const openBraces = Object.keys(pairs);

export function validBraces(braces: string) {
  const opened: string[] = [];

  for (let i = 0; i < braces.length; i += 1) {
    const brace = braces[i];

    if (openBraces.includes(brace)) {
      opened.push(brace);
      continue;
    }

    if (pairs[opened[opened.length - 1]] !== brace) {
      return false
    }

    opened.pop();
  }

  return opened.length === 0;
}\`);

function Demo() {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({ codeBlock: false }),
      CodeBlockLowlight.configure({ lowlight }),
    ],
    content: \`<p>Regular paragraph</p><pre><code>\${codeExample}</code></pre>\`,
  });

  return (
    <RichTextEditor editor={editor}>
      <RichTextEditor.Toolbar>
        <RichTextEditor.ControlsGroup>
          <RichTextEditor.CodeBlock />
        </RichTextEditor.ControlsGroup>
      </RichTextEditor.Toolbar>

      <RichTextEditor.Content />
    </RichTextEditor>
  );
}
`;T.register("ts",j.A);let b=`// Valid braces Kata \u2013 https://www.codewars.com/kata/5277c8a221e209d3f6000b56

const pairs: Record<string, string> = {
  '[': ']',
  '{': '}',
  '(': ')',
};

const openBraces = Object.keys(pairs);

export function validBraces(braces: string) {
  const opened: string[] = [];

  for (let i = 0; i < braces.length; i += 1) {
    const brace = braces[i];

    if (openBraces.includes(brace)) {
      opened.push(brace);
      continue;
    }

    if (pairs[opened[opened.length - 1]] !== brace) {
      return false
    }

    opened.pop();
  }

  return opened.length === 0;
}`.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"),f={type:"code",component:function(){let t=(0,c.hG)({extensions:[d.A.configure({codeBlock:!1}),g.A.configure({lowlight:T})],content:`<p>Regular paragraph</p><pre><code>${b}</code></pre>`});return(0,i.jsxs)(a.d,{editor:t,children:[(0,i.jsx)(a.d.Toolbar,{children:(0,i.jsx)(a.d.ControlsGroup,{children:(0,i.jsx)(a.d.CodeBlock,{})})}),(0,i.jsx)(a.d.Content,{})]})},code:E};var R=o(15021),k=o(18036),C=o(14631),L={root:"m_104e00f9"};let y={type:"code",component:function(){let t=(0,c.hG)({extensions:[d.A,C.N],content:`
    <h2>Heading 2</h2>
    <p>Paragraph with <a href="https://mantine.dev">link</a></p>
    `});return(0,i.jsx)(a.d,{editor:t,classNames:L,children:(0,i.jsx)(a.d.Content,{})})},code:[{fileName:"Demo.module.css",code:`.root {
  h2 {
    color: light-dark(var(--mantine-color-gray-6), var(--mantine-color-dark-2));
    font-size: var(--mantine-font-size-xl);
  }

  p {
    font-size: var(--mantine-font-size-lg);
  }

  a {
    color: var(--mantine-color-red-6);
  }
}`,language:"scss"},{fileName:"Demo.tsx",code:`
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { RichTextEditor, Link } from '@mantine/tiptap';
import classes from './Demo.module.css';

function Demo() {
  const editor = useEditor({
    extensions: [StarterKit, Link],
    content: \`
    <h2>Heading 2</h2>
    <p>Paragraph with <a href="https://mantine.dev">link</a></p>
    \`,
  });

  return (
    <RichTextEditor editor={editor} classNames={classes}>
      <RichTextEditor.Content />
    </RichTextEditor>
  );
}

export const typographyStyles: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
`,language:"tsx"}]},w={type:"code",component:function(){let t=(0,c.hG)({extensions:[d.A,C.N],content:"<p>Select some text to see bubble menu</p>"});return(0,i.jsxs)(a.d,{editor:t,children:[t&&(0,i.jsx)(c.mM,{editor:t,children:(0,i.jsxs)(a.d.ControlsGroup,{children:[(0,i.jsx)(a.d.Bold,{}),(0,i.jsx)(a.d.Italic,{}),(0,i.jsx)(a.d.Link,{})]})}),(0,i.jsx)(a.d.Content,{})]})},code:`
import { useEditor, BubbleMenu } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { RichTextEditor, Link } from '@mantine/tiptap';

function Demo() {
  const editor = useEditor({
    extensions: [StarterKit, Link],
    content: '<p>Select some text to see bubble menu</p>',
  });

  return (
    <RichTextEditor editor={editor}>
      {editor && (
        <BubbleMenu editor={editor}>
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Bold />
            <RichTextEditor.Italic />
            <RichTextEditor.Link />
          </RichTextEditor.ControlsGroup>
        </BubbleMenu>
      )}
      <RichTextEditor.Content />
    </RichTextEditor>
  );
}
`},S={type:"code",component:function(){let t=(0,c.hG)({extensions:[d.A,C.N],content:"<p>Enter a new line to see floating menu</p>"});return(0,i.jsxs)(a.d,{editor:t,children:[t&&(0,i.jsx)(c.yQ,{editor:t,children:(0,i.jsxs)(a.d.ControlsGroup,{children:[(0,i.jsx)(a.d.H1,{}),(0,i.jsx)(a.d.H2,{}),(0,i.jsx)(a.d.BulletList,{})]})}),(0,i.jsx)(a.d.Content,{})]})},code:`
import { useEditor, FloatingMenu } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { RichTextEditor, Link } from '@mantine/tiptap';

function Demo() {
  const editor = useEditor({
    extensions: [StarterKit, Link],
    content: '<p>Enter a new line to see floating menu</p>',
  });

  return (
    <RichTextEditor editor={editor}>
      {editor && (
        <FloatingMenu editor={editor}>
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.H1 />
            <RichTextEditor.H2 />
            <RichTextEditor.BulletList />
          </RichTextEditor.ControlsGroup>
        </FloatingMenu>
      )}
      <RichTextEditor.Content />
    </RichTextEditor>
  );
}
`};var v=o(61370),A=o(4825);function I(){let{editor:t}=(0,A.P)();return(0,i.jsx)(a.d.Control,{onClick:()=>t?.commands.insertContent("⭐"),"aria-label":"Insert star emoji",title:"Insert star emoji",children:(0,i.jsx)(v.A,{stroke:1.5,size:16})})}let B={type:"code",component:function(){let t=(0,c.hG)({extensions:[d.A],content:"<p>Click control to insert star emoji</p>"});return(0,i.jsxs)(a.d,{editor:t,children:[(0,i.jsx)(a.d.Toolbar,{children:(0,i.jsx)(I,{})}),(0,i.jsx)(a.d.Content,{})]})},code:`
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { RichTextEditor, useRichTextEditorContext } from '@mantine/tiptap';
import { IconStar } from '@tabler/icons-react';

function InsertStarControl() {
  const { editor } = useRichTextEditorContext();
  return (
    <RichTextEditor.Control
      onClick={() => editor?.commands.insertContent('\u2B50')}
      aria-label="Insert star emoji"
      title="Insert star emoji"
    >
      <IconStar stroke={1.5} size={16} />
    </RichTextEditor.Control>
  );
}

function Demo() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Click control to insert star emoji</p>',
  });

  return (
    <RichTextEditor editor={editor}>
      <RichTextEditor.Toolbar>
        <InsertStarControl />
      </RichTextEditor.Toolbar>

      <RichTextEditor.Content />
    </RichTextEditor>
  );
}
`};var G=o(61683),H=o(21810);let P=()=>(0,i.jsx)(G.A,{size:16,stroke:3.5}),U=()=>(0,i.jsx)(H.A,{size:16,stroke:3.5}),M={type:"code",component:function(){let t=(0,c.hG)({extensions:[d.A],content:"<p>Customize icons with icon prop</p>"});return(0,i.jsxs)(a.d,{editor:t,children:[(0,i.jsx)(a.d.Toolbar,{children:(0,i.jsxs)(a.d.ControlsGroup,{children:[(0,i.jsx)(a.d.Bold,{icon:P}),(0,i.jsx)(a.d.Italic,{icon:U})]})}),(0,i.jsx)(a.d.Content,{})]})},code:`
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { RichTextEditor } from '@mantine/tiptap';
import { IconBold, IconItalic } from '@tabler/icons-react';

const BoldIcon = () => <IconBold size={16} stroke={3.5} />;
const ItalicIcon = () => <IconItalic size={16} stroke={3.5} />;

function Demo() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Customize icons with icon prop</p>',
  });

  return (
    <RichTextEditor editor={editor}>
      <RichTextEditor.Toolbar>
        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Bold icon={BoldIcon} />
          <RichTextEditor.Italic icon={ItalicIcon} />
        </RichTextEditor.ControlsGroup>
      </RichTextEditor.Toolbar>

      <RichTextEditor.Content />
    </RichTextEditor>
  );
}
`};var K=o(18675),D=o(20017);let N=(0,K.P)(D.XZ.TipTap);function F(t){let e={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...t.components},{Demo:o,InstallScript:s}=e;return o||q("Demo",!0),s||q("InstallScript",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(e.p,{children:"Install with yarn:"}),"\n",(0,i.jsx)(s,{packages:"@mantine/tiptap @mantine/core @mantine/hooks @tiptap/react @tiptap/pm @tiptap/extension-link @tiptap/starter-kit"}),"\n",(0,i.jsx)(e.p,{children:"After installation import package styles at the root of your application:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-tsx",children:"import '@mantine/core/styles.css';\n// ‼️ import tiptap styles after core package styles\nimport '@mantine/tiptap/styles.css';\n"})}),"\n",(0,i.jsx)(e.h2,{id:"tiptap-editor",children:"TipTap editor"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"@mantine/tiptap"})," provides a UI for ",(0,i.jsx)(e.a,{href:"https://tiptap.dev/",children:"Tiptap"}),". ",(0,i.jsx)(e.code,{children:"RichTextEditor"})," component\nworks with ",(0,i.jsx)(e.a,{href:"https://tiptap.dev/api/editor",children:"Editor"})," instance of tiptap.\nThis means that you have full control over the editor ",(0,i.jsx)(e.a,{href:"https://tiptap.dev/guide/configuration",children:"state and configuration"}),"\nwith ",(0,i.jsx)(e.a,{href:"https://tiptap.dev/installation/react",children:"useEditor hook"}),"."]}),"\n",(0,i.jsxs)(e.p,{children:["In other words, ",(0,i.jsx)(e.code,{children:"RichTextEditor"})," component does not manage state for you,\ncontrols just execute operations on the ",(0,i.jsx)(e.code,{children:"Editor"})," instance. If you want to\nimplement something that is related to state or component value (for example, controlled mode, value transforms to HTML/Markdown),\nyou should look for documentation on ",(0,i.jsx)(e.a,{href:"https://tiptap.dev/",children:"tiptap.dev"})," website."]}),"\n",(0,i.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(o,{data:r.C}),"\n",(0,i.jsx)(e.h2,{id:"subtle-variant",children:"Subtle variant"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:'variant="subtle"'})," removes borders from the controls groups, makes controls\nlarger and reduces spacing of the toolbar:"]}),"\n",(0,i.jsx)(o,{data:l.f}),"\n",(0,i.jsx)(e.h2,{id:"controlled",children:"Controlled"}),"\n",(0,i.jsxs)(e.p,{children:["To control editor state, create a wrapper component and pass ",(0,i.jsx)(e.code,{children:"onChange"})," handler\nto ",(0,i.jsx)(e.code,{children:"useEditor"})," hook:"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-tsx",children:"import { useEditor } from '@tiptap/react';\nimport StarterKit from '@tiptap/starter-kit';\nimport { RichTextEditor as MantineRichTextEditor } from '@mantine/tiptap';\n\ninterface RichTextEditorProps {\n  value: string;\n  onChange: (value: string) => void;\n}\n\nexport function RichTextEditor({\n  value,\n  onChange,\n}: RichTextEditorProps) {\n  const editor = useEditor({\n    extensions: [StarterKit],\n    content: value,\n    onUpdate: ({ editor }) => {\n      onChange(editor.getHTML());\n    },\n  });\n\n  return (\n    <MantineRichTextEditor editor={editor}>\n      <MantineRichTextEditor.Toolbar>\n        <MantineRichTextEditor.ControlsGroup>\n          <MantineRichTextEditor.Bold />\n          <MantineRichTextEditor.Italic />\n        </MantineRichTextEditor.ControlsGroup>\n      </MantineRichTextEditor.Toolbar>\n\n      <MantineRichTextEditor.Content />\n    </MantineRichTextEditor>\n  );\n}\n"})}),"\n",(0,i.jsx)(e.h2,{id:"controls-and-extensions",children:"Controls and extensions"}),"\n",(0,i.jsxs)(e.p,{children:["Some controls require installation of additional ",(0,i.jsx)(e.a,{href:"https://tiptap.dev/extensions",children:"Tiptap extensions"}),".\nFor example, if you want to use ",(0,i.jsx)(e.code,{children:"RichTextEditor.Underline"})," control, you will need to install ",(0,i.jsx)(e.code,{children:"@tiptap/extension-underline"})," package:"]}),"\n",(0,i.jsx)(s,{packages:"@tiptap/extension-underline"}),"\n",(0,i.jsxs)(e.p,{children:["Included with ",(0,i.jsx)(e.code,{children:"@tiptap/starter-kit"})," (should be installed by default):"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"RichTextEditor.H1"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"RichTextEditor.H2"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"RichTextEditor.H3"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"RichTextEditor.H4"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"RichTextEditor.H5"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"RichTextEditor.H6"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"RichTextEditor.BulletList"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"RichTextEditor.OrderedList"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"RichTextEditor.Bold"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"RichTextEditor.Italic"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"RichTextEditor.Strikethrough"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"RichTextEditor.ClearFormatting"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"RichTextEditor.Blockquote"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"RichTextEditor.Code"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"RichTextEditor.CodeBlock"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"RichTextEditor.Hr"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"RichTextEditor.Undo"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"RichTextEditor.Redo"})}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["Controls that require ",(0,i.jsx)(e.a,{href:"https://www.npmjs.com/package/@tiptap/extension-link",children:"@tiptap/extension-link"})," extension:"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"RichTextEditor.Link"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"RichTextEditor.Unlink"})}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["Controls that require ",(0,i.jsx)(e.a,{href:"https://www.npmjs.com/package/@tiptap/extension-text-align",children:"@tiptap/extension-text-align"})," extension:"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"RichTextEditor.AlignLeft"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"RichTextEditor.AlignRight"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"RichTextEditor.AlignCenter"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"RichTextEditor.AlignJustify"})}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["Controls that require ",(0,i.jsx)(e.a,{href:"https://www.npmjs.com/package/@tiptap/extension-color",children:"@tiptap/extension-color"})," and ",(0,i.jsx)(e.a,{href:"https://www.npmjs.com/package/@tiptap/extension-text-style",children:"@tiptap/extension-text-style"})," extensions:"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"RichTextEditor.ColorPicker"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"RichTextEditor.Color"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"RichTextEditor.UnsetColor"})}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"Other controls with required extensions:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"RichTextEditor.Underline"})," requires ",(0,i.jsx)(e.a,{href:"https://www.npmjs.com/package/@tiptap/extension-underline",children:"@tiptap/extension-underline"})]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"RichTextEditor.Superscript"})," requires ",(0,i.jsx)(e.a,{href:"https://www.npmjs.com/package/@tiptap/extension-superscript",children:"@tiptap/extension-superscript"})]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"RichTextEditor.Subscript"})," requires ",(0,i.jsx)(e.a,{href:"https://www.npmjs.com/package/@tiptap/extension-subscript",children:"@tiptap/extension-subscript"})]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"RichTextEditor.Highlight"})," requires ",(0,i.jsx)(e.a,{href:"https://www.npmjs.com/package/@tiptap/extension-highlight",children:"@tiptap/extension-highlight"})]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"placeholder",children:"Placeholder"}),"\n",(0,i.jsxs)(e.p,{children:["To use placeholder you will need to install ",(0,i.jsx)(e.a,{href:"https://www.npmjs.com/package/@tiptap/extension-placeholder",children:"@tiptap/extension-placeholder"})," package:"]}),"\n",(0,i.jsx)(s,{packages:"@tiptap/extension-placeholder"}),"\n",(0,i.jsx)(o,{data:h}),"\n",(0,i.jsx)(e.h2,{id:"link-extension",children:"Link extension"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"@mantine/tiptap"})," provides custom ",(0,i.jsx)(e.code,{children:"Link"})," extension that is required to be used instead of\n",(0,i.jsx)(e.code,{children:"@tiptap/extension-link"})," in order for ",(0,i.jsx)(e.code,{children:"Ctrl + K"})," keyboard shortcut to work:"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-tsx",children:"// Use Link extension exported from the @mantine/tiptap package\nimport { useEditor } from '@tiptap/react';\nimport { Link, RichTextEditor } from '@mantine/tiptap';\n\nfunction Demo() {\n  const editor = useEditor({\n    extensions: [\n      Link,\n      // ... other extensions\n    ],\n  });\n\n  return (\n    <RichTextEditor editor={editor}>\n      <RichTextEditor.Content />\n    </RichTextEditor>\n  );\n}\n"})}),"\n",(0,i.jsx)(e.h2,{id:"text-color",children:"Text color"}),"\n",(0,i.jsx)(e.p,{children:"To use text color you will need to install additional packages:"}),"\n",(0,i.jsx)(s,{packages:"@tiptap/extension-color @tiptap/extension-text-style"}),"\n",(0,i.jsx)(e.p,{children:"You can use the following controls to change text color:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"RichTextEditor.ColorPicker"})," – allows to pick colors from given predefined color swatches and with ",(0,i.jsx)(e.a,{href:"/core/color-picker/",children:"ColorPicker"})," component"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"RichTextEditor.Color"})," – allows to apply given color with one click"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"RichTextEditor.UnsetColor"})," – clears color styles"]}),"\n"]}),"\n",(0,i.jsx)(o,{data:m}),"\n",(0,i.jsx)(e.h2,{id:"code-highlight",children:"Code highlight"}),"\n",(0,i.jsx)(e.p,{children:"To use code highlight you will need to install additional packages:"}),"\n",(0,i.jsx)(s,{packages:"lowlight @tiptap/extension-code-block-lowlight"}),"\n",(0,i.jsx)(o,{data:f}),"\n",(0,i.jsx)(e.h2,{id:"source-code-mode",children:"Source code mode"}),"\n",(0,i.jsx)(e.p,{children:"You can use the following control to see and edit source code of editor content:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"RichTextEditor.SourceCode"})," – allows switching on/off source code mode"]}),"\n"]}),"\n",(0,i.jsx)(o,{data:R.U}),"\n",(0,i.jsx)(e.h2,{id:"tasks",children:"Tasks"}),"\n",(0,i.jsx)(e.p,{children:"To use tasks you will need to install additional packages:"}),"\n",(0,i.jsx)(s,{packages:"@tiptap/extension-task-item @tiptap/extension-task-list"}),"\n",(0,i.jsx)(o,{data:k.v}),"\n",(0,i.jsx)(e.h2,{id:"typography-styles",children:"Typography styles"}),"\n",(0,i.jsxs)(e.p,{children:["By default, ",(0,i.jsx)(e.code,{children:"RichTextEditor"})," renders content with ",(0,i.jsx)(e.a,{href:"/core/typography/",children:"Typography"})," and some additional styles.\nYou can disable these styles by setting ",(0,i.jsx)(e.code,{children:"withTypographyStyles={false}"}),":"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-tsx",children:"import { useEditor } from '@tiptap/react';\nimport { RichTextEditor } from '@mantine/tiptap';\n\nfunction Demo() {\n  const editor = useEditor({\n    extensions: [\n      // ... your extensions\n    ],\n  });\n\n  return (\n    <RichTextEditor editor={editor} withTypographyStyles={false}>\n      <RichTextEditor.Content />\n    </RichTextEditor>\n  );\n}\n"})}),"\n",(0,i.jsxs)(e.p,{children:["Then you will be able to add your own styles either with ",(0,i.jsx)(e.a,{href:"/styles/global-styles/",children:"global styles"}),"\nor with ",(0,i.jsx)(e.a,{href:"/styles/styles-api/",children:"Styles API"}),":"]}),"\n",(0,i.jsx)(o,{data:y}),"\n",(0,i.jsx)(e.h2,{id:"bubble-menu",children:"Bubble menu"}),"\n",(0,i.jsxs)(e.p,{children:["You can use ",(0,i.jsx)(e.a,{href:"https://tiptap.dev/api/extensions/bubble-menu",children:"BubbleMenu"})," component\nwith any ",(0,i.jsx)(e.code,{children:"RichTextEditor"})," controls. Bubble menu will appear near a selection of text:"]}),"\n",(0,i.jsx)(o,{data:w}),"\n",(0,i.jsx)(e.h2,{id:"floating-menu",children:"Floating menu"}),"\n",(0,i.jsxs)(e.p,{children:["You can use ",(0,i.jsx)(e.a,{href:"https://tiptap.dev/api/extensions/floating-menu",children:"FloatingMenu"})," component\nwith any ",(0,i.jsx)(e.code,{children:"RichTextEditor"})," controls. Floating menu will appear in an empty line:"]}),"\n",(0,i.jsx)(o,{data:S}),"\n",(0,i.jsx)(e.h2,{id:"sticky-toolbar",children:"Sticky toolbar"}),"\n",(0,i.jsxs)(e.p,{children:["Set ",(0,i.jsx)(e.code,{children:"sticky"})," prop on ",(0,i.jsx)(e.code,{children:"RichTextEditor.Toolbar"})," component to make toolbar sticky,\ncontrol ",(0,i.jsx)(e.code,{children:"top"})," property with ",(0,i.jsx)(e.code,{children:"stickyOffset"}),". For example, on mantine.dev documentation\nwebsite there is a header with ",(0,i.jsx)(e.code,{children:"var(--docs-header-height)"})," height, in this case we will need to\nset ",(0,i.jsx)(e.code,{children:'stickyOffset="var(--docs-header-height)"'})," to make sticky position correctly with fixed positioned element."]}),"\n",(0,i.jsx)(o,{data:r.C,demoProps:{toggle:!0}}),"\n",(0,i.jsx)(e.h2,{id:"editor-context",children:"Editor context"}),"\n",(0,i.jsxs)(e.p,{children:["Use ",(0,i.jsx)(e.code,{children:"useRichTextEditorContext"})," hook to get ",(0,i.jsx)(e.a,{href:"https://tiptap.dev/api/editor",children:"Editor"})," from\nthe context. This hook can be used to create custom control or run any operations supported\nby the Tiptap ",(0,i.jsx)(e.a,{href:"https://tiptap.dev/api/editor",children:"editor API"}),"."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-tsx",children:"import { Button } from '@mantine/core';\nimport { useRichTextEditorContext } from '@mantine/tiptap';\n\nfunction Demo() {\n  const { editor } = useRichTextEditorContext();\n  return (\n    <Button\n      onClick={() => editor?.chain().focus().toggleBold().run()}\n    >\n      Make bold\n    </Button>\n  );\n}\n"})}),"\n",(0,i.jsx)(e.h2,{id:"custom-controls",children:"Custom controls"}),"\n",(0,i.jsxs)(e.p,{children:["Use ",(0,i.jsx)(e.code,{children:"RichTextEditor.Control"})," component to create custom controls. It supports all\nprops supported by ",(0,i.jsx)(e.code,{children:"button"})," element and has ",(0,i.jsx)(e.code,{children:"active"})," prop to indicate active state.\nNote that you will need to set ",(0,i.jsx)(e.code,{children:"aria-label"})," attribute to make control visible for screen readers."]}),"\n",(0,i.jsx)(o,{data:B}),"\n",(0,i.jsx)(e.h2,{id:"change-icons",children:"Change icons"}),"\n",(0,i.jsxs)(e.p,{children:["You can change icon of control by setting ",(0,i.jsx)(e.code,{children:"icon"})," prop. It accepts a component\nthat must handle ",(0,i.jsx)(e.code,{children:"size"})," prop:"]}),"\n",(0,i.jsx)(o,{data:M}),"\n",(0,i.jsx)(e.h2,{id:"labels-and-localization",children:"Labels and localization"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"RichTextEditor"})," supports changing labels for all controls with ",(0,i.jsx)(e.code,{children:"labels"})," prop:"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-tsx",children:"import { useEditor } from '@tiptap/react';\nimport { RichTextEditor } from '@mantine/tiptap';\n\nfunction Demo() {\n  const editor = useEditor({\n    extensions: [\n      // ... your extensions\n    ],\n  });\n\n  return (\n    <RichTextEditor\n      editor={editor}\n      labels={{\n        boldControlLabel: 'Make text bold',\n        italicControlLabel: 'Make text bold',\n        // ...other labels\n      }}\n    >\n      <RichTextEditor.Content />\n    </RichTextEditor>\n  );\n}\n"})}),"\n",(0,i.jsxs)(e.p,{children:["Most labels are used to add ",(0,i.jsx)(e.code,{children:"aria-label"})," and ",(0,i.jsx)(e.code,{children:"title"})," attributes to controls, some of the labels\ncan be a function that returns string. If you do not provide all labels, then they will be merged with\nthe default labels."]}),"\n",(0,i.jsx)(e.p,{children:"All available labels:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-tsx",children:"// RichTextEditorLabels type can be imported from @mantine/tiptap package\nexport interface RichTextEditorLabels {\n  /** RichTextEditor.Bold control aria-label */\n  boldControlLabel: string;\n\n  /** RichTextEditor.Hr control aria-label */\n  hrControlLabel: string;\n\n  /** RichTextEditor.Italic control aria-label */\n  italicControlLabel: string;\n\n  /** RichTextEditor.Underline control aria-label */\n  underlineControlLabel: string;\n\n  /** RichTextEditor.Strike control aria-label */\n  strikeControlLabel: string;\n\n  /** RichTextEditor.ClearFormatting control aria-label */\n  clearFormattingControlLabel: string;\n\n  /** RichTextEditor.Link control aria-label */\n  linkControlLabel: string;\n\n  /** RichTextEditor.Unlink control aria-label */\n  unlinkControlLabel: string;\n\n  /** RichTextEditor.BulletList control aria-label */\n  bulletListControlLabel: string;\n\n  /** RichTextEditor.OrderedList control aria-label */\n  orderedListControlLabel: string;\n\n  /** RichTextEditor.H1 control aria-label */\n  h1ControlLabel: string;\n\n  /** RichTextEditor.H2 control aria-label */\n  h2ControlLabel: string;\n\n  /** RichTextEditor.H3 control aria-label */\n  h3ControlLabel: string;\n\n  /** RichTextEditor.H4 control aria-label */\n  h4ControlLabel: string;\n\n  /** RichTextEditor.H5 control aria-label */\n  h5ControlLabel: string;\n\n  /** RichTextEditor.H6 control aria-label */\n  h6ControlLabel: string;\n\n  /** RichTextEditor.Blockquote control aria-label */\n  blockquoteControlLabel: string;\n\n  /** RichTextEditor.AlignLeft control aria-label */\n  alignLeftControlLabel: string;\n\n  /** RichTextEditor.AlignCenter control aria-label */\n  alignCenterControlLabel: string;\n\n  /** RichTextEditor.AlignRight control aria-label */\n  alignRightControlLabel: string;\n\n  /** RichTextEditor.AlignJustify control aria-label */\n  alignJustifyControlLabel: string;\n\n  /** RichTextEditor.Code control aria-label */\n  codeControlLabel: string;\n\n  /** RichTextEditor.CodeBlock control aria-label */\n  codeBlockControlLabel: string;\n\n  /** RichTextEditor.Subscript control aria-label */\n  subscriptControlLabel: string;\n\n  /** RichTextEditor.Superscript control aria-label */\n  superscriptControlLabel: string;\n\n  /** RichTextEditor.ColorPicker control aria-label */\n  colorPickerControlLabel: string;\n\n  /** RichTextEditor.UnsetColor control aria-label */\n  unsetColorControlLabel: string;\n\n  /** RichTextEditor.Highlight control aria-label */\n  highlightControlLabel: string;\n\n  /** RichTextEditor.Undo control aria-label */\n  undoControlLabel: string;\n\n  /** RichTextEditor.Redo control aria-label */\n  redoControlLabel: string;\n\n  /** A function go get RichTextEditor.Color control aria-label based on color that control applies */\n  colorControlLabel: (color: string) => string;\n\n  /** aria-label for link editor url input */\n  linkEditorInputLabel: string;\n\n  /** placeholder for link editor url input */\n  linkEditorInputPlaceholder: string;\n\n  /** Content of external button tooltip in link editor when the link was chosen to open in a new tab */\n  linkEditorExternalLink: string;\n\n  /** Content of external button tooltip in link editor when the link was chosen to open in the same tab */\n  linkEditorInternalLink: string;\n\n  /** Save button content in link editor */\n  linkEditorSave: string;\n\n  /** Cancel button title text in color picker control */\n  colorPickerCancel: string;\n\n  /** Clear button title text in color picker control */\n  colorPickerClear: string;\n\n  /** Color picker button title text in color picker control */\n  colorPickerColorPicker: string;\n\n  /** Palette button title text in color picker control */\n  colorPickerPalette: string;\n\n  /** Save button title text in color picker control */\n  colorPickerSave: string;\n\n  /** aria-label for color palette colors */\n  colorPickerColorLabel: (color: string) => string;\n}\n"})}),"\n",(0,i.jsxs)(e.p,{children:["Default labels (can be imported from ",(0,i.jsx)(e.code,{children:"@mantine/tiptap"})," package):"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-tsx",children:"import { RichTextEditorLabels } from '@mantine/tiptap';\n\nexport const DEFAULT_LABELS: RichTextEditorLabels = {\n  // Controls labels\n  linkControlLabel: 'Link',\n  colorPickerControlLabel: 'Text color',\n  highlightControlLabel: 'Highlight text',\n  colorControlLabel: (color) => `Set text color ${color}`,\n  boldControlLabel: 'Bold',\n  italicControlLabel: 'Italic',\n  underlineControlLabel: 'Underline',\n  strikeControlLabel: 'Strikethrough',\n  clearFormattingControlLabel: 'Clear formatting',\n  unlinkControlLabel: 'Remove link',\n  bulletListControlLabel: 'Bullet list',\n  orderedListControlLabel: 'Ordered list',\n  h1ControlLabel: 'Heading 1',\n  h2ControlLabel: 'Heading 2',\n  h3ControlLabel: 'Heading 3',\n  h4ControlLabel: 'Heading 4',\n  h5ControlLabel: 'Heading 5',\n  h6ControlLabel: 'Heading 6',\n  blockquoteControlLabel: 'Blockquote',\n  alignLeftControlLabel: 'Align text: left',\n  alignCenterControlLabel: 'Align text: center',\n  alignRightControlLabel: 'Align text: right',\n  alignJustifyControlLabel: 'Align text: justify',\n  codeControlLabel: 'Code',\n  codeBlockControlLabel: 'Code block',\n  subscriptControlLabel: 'Subscript',\n  superscriptControlLabel: 'Superscript',\n  unsetColorControlLabel: 'Unset color',\n  hrControlLabel: 'Horizontal line',\n  undoControlLabel: 'Undo',\n  redoControlLabel: 'Redo',\n\n  // Task list\n  tasksControlLabel: 'Task list',\n  tasksSinkLabel: 'Decrease task level',\n  tasksLiftLabel: 'Increase task level',\n\n  // Link editor\n  linkEditorInputLabel: 'Enter URL',\n  linkEditorInputPlaceholder: 'https://example.com/',\n  linkEditorExternalLink: 'Open link in a new tab',\n  linkEditorInternalLink: 'Open link in the same tab',\n  linkEditorSave: 'Save',\n\n  // Color picker control\n  colorPickerCancel: 'Cancel',\n  colorPickerClear: 'Clear color',\n  colorPickerColorPicker: 'Color picker',\n  colorPickerPalette: 'Color palette',\n  colorPickerSave: 'Save',\n  colorPickerColorLabel: (color) => `Set text color ${color}`,\n};\n"})})]})}function O(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,i.jsx)(N,{...t,children:(0,i.jsx)(F,{...t})})}function q(t,e){throw Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}},15021:(t,e,o)=>{"use strict";o.d(e,{U:()=>c});var i=o(31085),n=o(14041),r=o(37353),l=o(95062),s=o(10047);let c={type:"code",component:function(){let[t,e]=(0,n.useState)(!1),o=(0,r.hG)({extensions:[l.A],content:"<p>Source code control example</p><p>New line with <strong>bold text</strong></p><p>New line with <em>italic</em> <em>text</em></p>"});return(0,i.jsxs)(s.d,{editor:o,onSourceCodeTextSwitch:e,children:[(0,i.jsxs)(s.d.Toolbar,{children:[(0,i.jsx)(s.d.ControlsGroup,{children:(0,i.jsx)(s.d.SourceCode,{})}),!t&&(0,i.jsxs)(s.d.ControlsGroup,{children:[(0,i.jsx)(s.d.Blockquote,{}),(0,i.jsx)(s.d.Bold,{}),(0,i.jsx)(s.d.Italic,{}),(0,i.jsx)(s.d.Underline,{}),(0,i.jsx)(s.d.Strikethrough,{}),(0,i.jsx)(s.d.ClearFormatting,{}),(0,i.jsx)(s.d.Highlight,{})]})]}),(0,i.jsx)(s.d.Content,{})]})},code:`
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { RichTextEditor } from '@mantine/tiptap';
import { useState } from 'react';

function Demo() {
  const [isSourceCodeModeActive, onSourceCodeTextSwitch] = useState(false)

  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Source code control example</p><p>New line with <strong>bold text</strong></p><p>New line with <em>italic</em> <em>text</em></p>',
  });

  return (
    <RichTextEditor editor={editor} onSourceCodeTextSwitch={onSourceCodeTextSwitch}>
      <RichTextEditor.Toolbar>
        <RichTextEditor.ControlsGroup>
          <RichTextEditor.SourceCode icon={BoldIcon} />
        </RichTextEditor.ControlsGroup>
        {!isSourceCodeModeActive && (
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Blockquote />
            <RichTextEditor.Bold />
            <RichTextEditor.Italic />
            <RichTextEditor.Underline />
            <RichTextEditor.Strikethrough />
            <RichTextEditor.ClearFormatting />
            <RichTextEditor.Highlight />
          </RichTextEditor.ControlsGroup>
        )}
      </RichTextEditor.Toolbar>

      <RichTextEditor.Content />
    </RichTextEditor>
  );
}
`}},77542:(t,e,o)=>{"use strict";o.d(e,{f:()=>d});var i=o(31085),n=o(18613),r=o(15657),l=o(37353),s=o(95062),c=o(10047);let d={type:"code",component:function(){let t=(0,l.hG)({extensions:[s.A,r.A,n.Ay],content:"<p>Subtle rich text editor variant</p>"});return(0,i.jsxs)(c.d,{editor:t,variant:"subtle",children:[(0,i.jsx)(c.d.Toolbar,{sticky:!0,stickyOffset:"var(--docs-header-height)",children:(0,i.jsxs)(c.d.ControlsGroup,{children:[(0,i.jsx)(c.d.Bold,{}),(0,i.jsx)(c.d.Italic,{}),(0,i.jsx)(c.d.Underline,{}),(0,i.jsx)(c.d.Strikethrough,{}),(0,i.jsx)(c.d.ClearFormatting,{}),(0,i.jsx)(c.d.Highlight,{}),(0,i.jsx)(c.d.Code,{})]})}),(0,i.jsx)(c.d.Content,{})]})},code:`
import Highlight from '@tiptap/extension-highlight';
import Underline from '@tiptap/extension-underline';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { RichTextEditor } from '@mantine/tiptap';

const content = '<p>Subtle rich text editor variant</p>';

function Demo() {
  const editor = useEditor({
    extensions: [StarterKit, Underline, Highlight],
    content,
  });

  return (
    <RichTextEditor editor={editor} variant="subtle">
      <RichTextEditor.Toolbar sticky stickyOffset="var(--docs-header-height)">
        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Bold />
          <RichTextEditor.Italic />
          <RichTextEditor.Underline />
          <RichTextEditor.Strikethrough />
          <RichTextEditor.ClearFormatting />
          <RichTextEditor.Highlight />
          <RichTextEditor.Code />
        </RichTextEditor.ControlsGroup>
      </RichTextEditor.Toolbar>

      <RichTextEditor.Content />
    </RichTextEditor>
  );
}
`}},18036:(t,e,o)=>{"use strict";o.d(e,{v:()=>h});var i=o(31085),n=o(9068),r=o(6581),l=o(37353),s=o(95062),c=o(83667);let d=t=>t.extend({addKeyboardShortcuts:()=>({"Mod-[":({editor:t})=>(t.chain().focus().liftListItem("taskItem").run(),!0),"Mod-]":({editor:t})=>(t.chain().focus().sinkListItem("taskItem").run(),!0)})}).configure({HTMLAttributes:{class:`${c.A.taskList} mantine-RichTextEditor-taskList`}});var a=o(10047);let h={type:"code",component:function(){let t=(0,l.hG)({extensions:[s.A,d(r.A),n.Ay.configure({nested:!0,HTMLAttributes:{class:"test-item"}})],content:`
        <ul data-type="taskList">
          <li data-type="taskItem" data-checked="true">A list item</li>
          <li data-type="taskItem" data-checked="false">And another one</li>
        </ul>
      `});return(0,i.jsxs)(a.d,{editor:t,children:[(0,i.jsx)(a.d.Toolbar,{children:(0,i.jsxs)(a.d.ControlsGroup,{children:[(0,i.jsx)(a.d.TaskList,{}),(0,i.jsx)(a.d.TaskListLift,{}),(0,i.jsx)(a.d.TaskListSink,{})]})}),(0,i.jsx)(a.d.Content,{})]})},code:`
import TaskItem from '@tiptap/extension-task-item';
import TipTapTaskList from '@tiptap/extension-task-list';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { RichTextEditor, getTaskListExtension } from '@mantine/tiptap';

function Demo() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      getTaskListExtension(TipTapTaskList),
      TaskItem.configure({
        nested: true,
        HTMLAttributes: {
          class: 'test-item',
        },
      }),
    ],
    content: \`
        <ul data-type="taskList">
          <li data-type="taskItem" data-checked="true">A list item</li>
          <li data-type="taskItem" data-checked="false">And another one</li>
        </ul>
      \`,
  });

  return (
    <div style={{ padding: 40 }}>
      <RichTextEditor editor={editor}>
        <RichTextEditor.Toolbar>
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.TaskList />
            <RichTextEditor.TaskListLift />
            <RichTextEditor.TaskListSink />
          </RichTextEditor.ControlsGroup>
        </RichTextEditor.Toolbar>

        <RichTextEditor.Content />
      </RichTextEditor>
    </div>
  );
}
`}},35041:(t,e,o)=>{"use strict";o.d(e,{C:()=>x});var i=o(31085),n=o(18613),r=o(30934),l=o(89161),s=o(39188),c=o(15657),d=o(37353),a=o(95062),h=o(14631),p=o(10047);let x={type:"code",component:function({stickyOffset:t="var(--docs-header-height)"}){let e=(0,d.hG)({extensions:[a.A,c.A,h.N,l.A,r.A,n.Ay,s.A.configure({types:["heading","paragraph"]})],content:'<h2 style="text-align: center;">Welcome to Mantine rich text editor</h2><p><code>RichTextEditor</code> component focuses on usability and is designed to be as simple as possible to bring a familiar editing experience to regular users. <code>RichTextEditor</code> is based on <a href="https://tiptap.dev/" rel="noopener noreferrer" target="_blank">Tiptap.dev</a> and supports all of its features:</p><ul><li>General text formatting: <strong>bold</strong>, <em>italic</em>, <u>underline</u>, <s>strike-through</s> </li><li>Headings (h1-h6)</li><li>Sub and super scripts (<sup>&lt;sup /&gt;</sup> and <sub>&lt;sub /&gt;</sub> tags)</li><li>Ordered and bullet lists</li><li>Text align&nbsp;</li><li>And all <a href="https://tiptap.dev/extensions" target="_blank" rel="noopener noreferrer">other extensions</a></li></ul>'});return(0,i.jsxs)(p.d,{editor:e,children:[(0,i.jsxs)(p.d.Toolbar,{sticky:!0,stickyOffset:t,children:[(0,i.jsxs)(p.d.ControlsGroup,{children:[(0,i.jsx)(p.d.Bold,{}),(0,i.jsx)(p.d.Italic,{}),(0,i.jsx)(p.d.Underline,{}),(0,i.jsx)(p.d.Strikethrough,{}),(0,i.jsx)(p.d.ClearFormatting,{}),(0,i.jsx)(p.d.Highlight,{}),(0,i.jsx)(p.d.Code,{})]}),(0,i.jsxs)(p.d.ControlsGroup,{children:[(0,i.jsx)(p.d.H1,{}),(0,i.jsx)(p.d.H2,{}),(0,i.jsx)(p.d.H3,{}),(0,i.jsx)(p.d.H4,{})]}),(0,i.jsxs)(p.d.ControlsGroup,{children:[(0,i.jsx)(p.d.Blockquote,{}),(0,i.jsx)(p.d.Hr,{}),(0,i.jsx)(p.d.BulletList,{}),(0,i.jsx)(p.d.OrderedList,{}),(0,i.jsx)(p.d.Subscript,{}),(0,i.jsx)(p.d.Superscript,{})]}),(0,i.jsxs)(p.d.ControlsGroup,{children:[(0,i.jsx)(p.d.Link,{}),(0,i.jsx)(p.d.Unlink,{})]}),(0,i.jsxs)(p.d.ControlsGroup,{children:[(0,i.jsx)(p.d.AlignLeft,{}),(0,i.jsx)(p.d.AlignCenter,{}),(0,i.jsx)(p.d.AlignJustify,{}),(0,i.jsx)(p.d.AlignRight,{})]}),(0,i.jsxs)(p.d.ControlsGroup,{children:[(0,i.jsx)(p.d.Undo,{}),(0,i.jsx)(p.d.Redo,{})]})]}),(0,i.jsx)(p.d.Content,{})]})},code:`
import { RichTextEditor, Link } from '@mantine/tiptap';
import { useEditor } from '@tiptap/react';
import Highlight from '@tiptap/extension-highlight';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Superscript from '@tiptap/extension-superscript';
import SubScript from '@tiptap/extension-subscript';

const content =
  '<h2 style="text-align: center;">Welcome to Mantine rich text editor</h2><p><code>RichTextEditor</code> component focuses on usability and is designed to be as simple as possible to bring a familiar editing experience to regular users. <code>RichTextEditor</code> is based on <a href="https://tiptap.dev/" rel="noopener noreferrer" target="_blank">Tiptap.dev</a> and supports all of its features:</p><ul><li>General text formatting: <strong>bold</strong>, <em>italic</em>, <u>underline</u>, <s>strike-through</s> </li><li>Headings (h1-h6)</li><li>Sub and super scripts (<sup>&lt;sup /&gt;</sup> and <sub>&lt;sub /&gt;</sub> tags)</li><li>Ordered and bullet lists</li><li>Text align&nbsp;</li><li>And all <a href="https://tiptap.dev/extensions" target="_blank" rel="noopener noreferrer">other extensions</a></li></ul>';

function Demo() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
      Superscript,
      SubScript,
      Highlight,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
    ],
    content,
  });

  return (
    <RichTextEditor editor={editor}>
      <RichTextEditor.Toolbar sticky stickyOffset="var(--docs-header-height)">
        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Bold />
          <RichTextEditor.Italic />
          <RichTextEditor.Underline />
          <RichTextEditor.Strikethrough />
          <RichTextEditor.ClearFormatting />
          <RichTextEditor.Highlight />
          <RichTextEditor.Code />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.H1 />
          <RichTextEditor.H2 />
          <RichTextEditor.H3 />
          <RichTextEditor.H4 />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Blockquote />
          <RichTextEditor.Hr />
          <RichTextEditor.BulletList />
          <RichTextEditor.OrderedList />
          <RichTextEditor.Subscript />
          <RichTextEditor.Superscript />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Link />
          <RichTextEditor.Unlink />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.AlignLeft />
          <RichTextEditor.AlignCenter />
          <RichTextEditor.AlignJustify />
          <RichTextEditor.AlignRight />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Undo />
          <RichTextEditor.Redo />
        </RichTextEditor.ControlsGroup>
      </RichTextEditor.Toolbar>

      <RichTextEditor.Content />
    </RichTextEditor>
  );
}
`}},14631:(t,e,o)=>{"use strict";o.d(e,{N:()=>i});let i=o(35864).Ay.extend({addKeyboardShortcuts:()=>({"Mod-k":()=>(window.dispatchEvent(new Event("edit-link")),!0)})}).configure({openOnClick:!1})}},t=>{var e=e=>t(t.s=e);t.O(0,[90401,59573,16576,8084,87522,24920,18675,10047,90636,46593,38792],()=>e(70951)),_N_E=t.O()}]);