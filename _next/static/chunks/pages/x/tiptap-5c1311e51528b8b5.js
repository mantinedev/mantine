(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[58267],{29604:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/x/tiptap",function(){return n(5008)}])},5008:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return z}});var o=n(24246),i=n(71670),r=n(53456),l=n(27378),c=n(86422),a=n(49947),s=n(86873),d=n(98921);let p=`
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
`,h={type:"code",component:function(){let t=(0,a.jE)({extensions:[s.Z,c.Z.configure({placeholder:"This is placeholder"})],content:""});return l.createElement(d.L,{editor:t},l.createElement(d.L.Content,null))},code:p};var x=n(40903),u=n(71493),m=n(51655);let E=`
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
      <RichTextEditor.Toolbar sticky stickyOffset={60}>
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
            <IconColorPicker size="1rem" stroke={1.5} />
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
`,g={type:"code",component:function(){let t=(0,a.jE)({extensions:[s.Z,m.Z,u.I],content:"<p>Apply some colors to this text</p>"});return l.createElement(d.L,{editor:t},l.createElement(d.L.Toolbar,{sticky:!0,stickyOffset:60},l.createElement(d.L.ColorPicker,{colors:["#25262b","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"]}),l.createElement(d.L.ControlsGroup,null,l.createElement(d.L.Control,{interactive:!1},l.createElement(x.Z,{size:"1rem",stroke:1.5})),l.createElement(d.L.Color,{color:"#F03E3E"}),l.createElement(d.L.Color,{color:"#7048E8"}),l.createElement(d.L.Color,{color:"#1098AD"}),l.createElement(d.L.Color,{color:"#37B24D"}),l.createElement(d.L.Color,{color:"#F59F00"})),l.createElement(d.L.UnsetColor,null)),l.createElement(d.L.Content,null))},code:E};var b=n(36667),T=n(49859),f=n(53554);let k=(0,f.B)(),j=`
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
`;k.register("ts",T.Z);let R=`// Valid braces Kata \u2013 https://www.codewars.com/kata/5277c8a221e209d3f6000b56

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
}`.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"),C={type:"code",component:function(){let t=(0,a.jE)({extensions:[s.Z.configure({codeBlock:!1}),b.Z.configure({lowlight:k})],content:`<p>Regular paragraph</p><pre><code>${R}</code></pre>`});return l.createElement(d.L,{editor:t},l.createElement(d.L.Toolbar,null,l.createElement(d.L.ControlsGroup,null,l.createElement(d.L.CodeBlock,null))),l.createElement(d.L.Content,null))},code:j};var L=n(13943),y=n(16541);let w=`
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
`,S={type:"code",component:function(){let t=(0,a.jE)({extensions:[s.Z,y.r],content:"<p>Select some text to see bubble menu</p>"});return l.createElement(d.L,{editor:t},t&&l.createElement(a.NM,{editor:t},l.createElement(d.L.ControlsGroup,null,l.createElement(d.L.Bold,null),l.createElement(d.L.Italic,null),l.createElement(d.L.Link,null))),l.createElement(d.L.Content,null))},code:w},v=`
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
`,I={type:"code",component:function(){let t=(0,a.jE)({extensions:[s.Z,y.r],content:"<p>Enter a new line to see floating menu</p>"});return l.createElement(d.L,{editor:t},t&&l.createElement(a.AH,{editor:t},l.createElement(d.L.ControlsGroup,null,l.createElement(d.L.H1,null),l.createElement(d.L.H2,null),l.createElement(d.L.BulletList,null))),l.createElement(d.L.Content,null))},code:v};var B=n(48112),H=n(47986);let A=`
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
      <IconStar stroke={1.5} size="1rem" />
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
`;function P(){let{editor:t}=(0,H.Y)();return l.createElement(d.L.Control,{onClick:()=>t?.commands.insertContent("⭐"),"aria-label":"Insert star emoji",title:"Insert star emoji"},l.createElement(B.Z,{stroke:1.5,size:"1rem"}))}let G={type:"code",component:function(){let t=(0,a.jE)({extensions:[s.Z],content:"<p>Click control to insert star emoji</p>"});return l.createElement(d.L,{editor:t},l.createElement(d.L.Toolbar,null,l.createElement(P,null)),l.createElement(d.L.Content,null))},code:A};var U=n(52025),Z=n(4014);let K=`
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { RichTextEditor } from '@mantine/tiptap';
import { IconBold, IconItalic } from '@tabler/icons-react';

const BoldIcon = () => <IconBold size="1rem" stroke={3.5} />;
const ItalicIcon = () => <IconItalic size="1rem" stroke={3.5} />;

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
`,M=()=>l.createElement(U.Z,{size:"1rem",stroke:3.5}),F=()=>l.createElement(Z.Z,{size:"1rem",stroke:3.5}),O={type:"code",component:function(){let t=(0,a.jE)({extensions:[s.Z],content:"<p>Customize icons with icon prop</p>"});return l.createElement(d.L,{editor:t},l.createElement(d.L.Toolbar,null,l.createElement(d.L.ControlsGroup,null,l.createElement(d.L.Bold,{icon:M}),l.createElement(d.L.Italic,{icon:F}))),l.createElement(d.L.Content,null))},code:K};var q=n(3916),D=n(54568);let _=(0,q.A)(D.us.TipTap);function N(t){let e={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...t.components},{Demo:n,InstallScript:l}=e;return n||J("Demo",!0),l||J("InstallScript",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h2,{id:"installation",children:"Installation"}),"\n",(0,o.jsx)(e.p,{children:"Install with yarn:"}),"\n",(0,o.jsx)(l,{packages:"@mantine/tiptap @mantine/core @mantine/hooks @tiptap/react @tiptap/pm @tiptap/extension-link @tiptap/starter-kit"}),"\n",(0,o.jsx)(e.p,{children:"After installation import package styles at the root of your application:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-tsx",children:"import '@mantine/tiptap/styles.css';\n"})}),"\n",(0,o.jsx)(e.h2,{id:"tiptap-editor",children:"TipTap editor"}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.code,{children:"@mantine/tiptap"})," provides a UI for ",(0,o.jsx)(e.a,{href:"https://tiptap.dev/",children:"Tiptap"}),". ",(0,o.jsx)(e.code,{children:"RichTextEditor"})," component\nworks with ",(0,o.jsx)(e.a,{href:"https://tiptap.dev/api/editor",children:"Editor"})," instance of tiptap.\nThis means that you have full control over the editor ",(0,o.jsx)(e.a,{href:"https://tiptap.dev/guide/configuration",children:"state and configuration"}),"\nwith ",(0,o.jsx)(e.a,{href:"https://tiptap.dev/installation/react",children:"useEditor hook"}),"."]}),"\n",(0,o.jsxs)(e.p,{children:["In other words, ",(0,o.jsx)(e.code,{children:"RichTextEditor"})," component does not manage state for you,\ncontrols just execute operations on the ",(0,o.jsx)(e.code,{children:"Editor"})," instance. If you want to\nimplement something that is related to state or component value (e.g. controlled mode, value transforms to HTML/Markdown),\nyou should look for documentation on ",(0,o.jsx)(e.a,{href:"https://tiptap.dev/",children:"tiptap.dev"})," website."]}),"\n",(0,o.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(n,{data:r.j}),"\n",(0,o.jsx)(e.h2,{id:"controls-and-extensions",children:"Controls and extensions"}),"\n",(0,o.jsxs)(e.p,{children:["Some controls require installation of additional ",(0,o.jsx)(e.a,{href:"https://tiptap.dev/extensions",children:"Tiptap extensions"}),".\nFor example, if you want to use ",(0,o.jsx)(e.code,{children:"RichTextEditor.Underline"})," control, you will need to install ",(0,o.jsx)(e.code,{children:"@tiptap/extension-underline"})," package:"]}),"\n",(0,o.jsx)(l,{packages:"@tiptap/extension-underline"}),"\n",(0,o.jsxs)(e.p,{children:["Included with ",(0,o.jsx)(e.code,{children:"@tiptap/starter-kit"})," (should be installed by default):"]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.code,{children:"RichTextEditor.H1"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.code,{children:"RichTextEditor.H2"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.code,{children:"RichTextEditor.H3"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.code,{children:"RichTextEditor.H4"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.code,{children:"RichTextEditor.H5"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.code,{children:"RichTextEditor.H6"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.code,{children:"RichTextEditor.BulletList"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.code,{children:"RichTextEditor.OrderedList"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.code,{children:"RichTextEditor.Bold"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.code,{children:"RichTextEditor.Italic"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.code,{children:"RichTextEditor.Strikethrough"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.code,{children:"RichTextEditor.ClearFormatting"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.code,{children:"RichTextEditor.Blockquote"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.code,{children:"RichTextEditor.Code"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.code,{children:"RichTextEditor.CodeBlock"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.code,{children:"RichTextEditor.Hr"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.code,{children:"RichTextEditor.Undo"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.code,{children:"RichTextEditor.Redo"})}),"\n"]}),"\n",(0,o.jsxs)(e.p,{children:["Controls that require ",(0,o.jsx)(e.a,{href:"https://www.npmjs.com/package/@tiptap/extension-link",children:"@tiptap/extension-link"})," extension:"]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.code,{children:"RichTextEditor.Link"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.code,{children:"RichTextEditor.Unlink"})}),"\n"]}),"\n",(0,o.jsxs)(e.p,{children:["Controls that require ",(0,o.jsx)(e.a,{href:"https://www.npmjs.com/package/@tiptap/extension-text-align",children:"@tiptap/extension-text-align"})," extension:"]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.code,{children:"RichTextEditor.AlignLeft"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.code,{children:"RichTextEditor.AlignRight"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.code,{children:"RichTextEditor.AlignCenter"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.code,{children:"RichTextEditor.AlignJustify"})}),"\n"]}),"\n",(0,o.jsxs)(e.p,{children:["Controls that require ",(0,o.jsx)(e.a,{href:"https://www.npmjs.com/package/@tiptap/extension-color",children:"@tiptap/extension-color"})," and ",(0,o.jsx)(e.a,{href:"https://www.npmjs.com/package/@tiptap/extension-text-style",children:"@tiptap/extension-text-style"})," extensions:"]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.code,{children:"RichTextEditor.ColorPicker"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.code,{children:"RichTextEditor.Color"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.code,{children:"RichTextEditor.UnsetColor"})}),"\n"]}),"\n",(0,o.jsx)(e.p,{children:"Other controls with required extensions:"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"RichTextEditor.Underline"})," requires ",(0,o.jsx)(e.a,{href:"https://www.npmjs.com/package/@tiptap/extension-underline",children:"@tiptap/extension-underline"})]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"RichTextEditor.Superscript"})," requires ",(0,o.jsx)(e.a,{href:"https://www.npmjs.com/package/@tiptap/extension-superscript",children:"@tiptap/extension-superscript"})]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"RichTextEditor.Subscript"})," requires ",(0,o.jsx)(e.a,{href:"https://www.npmjs.com/package/@tiptap/extension-subscript",children:"@tiptap/extension-subscript"})]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"RichTextEditor.Highlight"})," requires ",(0,o.jsx)(e.a,{href:"https://www.npmjs.com/package/@tiptap/extension-highlight",children:"@tiptap/extension-highlight"})]}),"\n"]}),"\n",(0,o.jsx)(e.h2,{id:"placeholder",children:"Placeholder"}),"\n",(0,o.jsxs)(e.p,{children:["To use placeholder you will need to install ",(0,o.jsx)(e.a,{href:"https://www.npmjs.com/package/@tiptap/extension-placeholder",children:"@tiptap/extension-placeholder"})," package:"]}),"\n",(0,o.jsx)(l,{packages:"@tiptap/extension-placeholder"}),"\n",(0,o.jsx)(n,{data:h}),"\n",(0,o.jsx)(e.h2,{id:"link-extension",children:"Link extension"}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.code,{children:"@mantine/tiptap"})," provides custom ",(0,o.jsx)(e.code,{children:"Link"})," extension that is required to be used instead of\n",(0,o.jsx)(e.code,{children:"@tiptap/extension-link"})," in order for ",(0,o.jsx)(e.code,{children:"Ctrl + K"})," keyboard shortcut to work:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-tsx",children:"// Use Link extension exported from the @mantine/tiptap package\nimport { useEditor } from '@tiptap/react';\nimport { Link, RichTextEditor } from '@mantine/tiptap';\n\nfunction Demo() {\n  const editor = useEditor({\n    extensions: [\n      Link,\n      // ... other extensions\n    ],\n  });\n\n  return (\n    <RichTextEditor editor={editor}>{/* content */}</RichTextEditor>\n  );\n}\n"})}),"\n",(0,o.jsx)(e.h2,{id:"text-color",children:"Text color"}),"\n",(0,o.jsx)(e.p,{children:"To use text color you will need to install additional packages:"}),"\n",(0,o.jsx)(l,{packages:"@tiptap/extension-color @tiptap/extension-text-style"}),"\n",(0,o.jsx)(e.p,{children:"You can use the following controls to change text color:"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"RichTextEditor.ColorPicker"})," – allows to pick colors from given predefined color swatches and with ",(0,o.jsx)(e.a,{href:"/core/color-picker/",children:"ColorPicker"})," component"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"RichTextEditor.Color"})," – allows to apply given color with one click"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"RichTextEditor.UnsetColor"})," – clears color styles"]}),"\n"]}),"\n",(0,o.jsx)(n,{data:g}),"\n",(0,o.jsx)(e.h2,{id:"code-highlight",children:"Code highlight"}),"\n",(0,o.jsx)(e.p,{children:"To use code highlight you will need to install additional packages:"}),"\n",(0,o.jsx)(l,{packages:"lowlight @tiptap/extension-code-block-lowlight"}),"\n",(0,o.jsx)(n,{data:C}),"\n",(0,o.jsx)(e.h2,{id:"tasks",children:"Tasks"}),"\n",(0,o.jsx)(e.p,{children:"To use tasks you will need to install additional packages:"}),"\n",(0,o.jsx)(l,{packages:"@tiptap/extension-task-item @tiptap/extension-task-list"}),"\n",(0,o.jsx)(n,{data:L.w}),"\n",(0,o.jsx)(e.h2,{id:"typography-styles",children:"Typography styles"}),"\n",(0,o.jsxs)(e.p,{children:["By default, ",(0,o.jsx)(e.code,{children:"RichTextEditor"})," renders content with ",(0,o.jsx)(e.a,{href:"/core/typography-styles-provider/",children:"TypographyStylesProvider"})," and some additional styles.\nYou can disable these styles by setting ",(0,o.jsx)(e.code,{children:"withTypographyStyles={false}"}),":"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-tsx",children:"import { useEditor } from '@tiptap/react';\nimport { RichTextEditor } from '@mantine/tiptap';\n\nfunction Demo() {\n  const editor = useEditor({\n    extensions: [\n      // ... your extensions\n    ],\n  });\n\n  return (\n    <RichTextEditor editor={editor} withTypographyStyles={false}>\n      {/* content */}\n    </RichTextEditor>\n  );\n}\n"})}),"\n",(0,o.jsxs)(e.p,{children:["Then you will be able to add your own styles either with ",(0,o.jsx)(e.a,{href:"/styles/global-styles/",children:"global styles"}),"\nor with ",(0,o.jsx)(e.a,{href:"/styles/styles-api/",children:"Styles API"}),":"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-tsx",children:"// ...\n<RichTextEditor\n  editor={editor}\n  withTypographyStyles={false}\n  styles={{\n    content: {\n      '& p': {\n        color: 'silver',\n      },\n    },\n  }}\n>\n  {/* content */}\n</RichTextEditor>\n"})}),"\n",(0,o.jsx)(e.h2,{id:"bubble-menu",children:"Bubble menu"}),"\n",(0,o.jsxs)(e.p,{children:["You can use ",(0,o.jsx)(e.a,{href:"https://tiptap.dev/api/extensions/bubble-menu",children:"BubbleMenu"})," component\nwith any ",(0,o.jsx)(e.code,{children:"RichTextEditor"})," controls. Bubble menu will appear near a selection of text:"]}),"\n",(0,o.jsx)(n,{data:S}),"\n",(0,o.jsx)(e.h2,{id:"floating-menu",children:"Floating menu"}),"\n",(0,o.jsxs)(e.p,{children:["You can use ",(0,o.jsx)(e.a,{href:"https://tiptap.dev/api/extensions/floating-menu",children:"FloatingMenu"})," component\nwith any ",(0,o.jsx)(e.code,{children:"RichTextEditor"})," controls. Floating menu will appear in an empty line:"]}),"\n",(0,o.jsx)(n,{data:I}),"\n",(0,o.jsx)(e.h2,{id:"sticky-toolbar",children:"Sticky toolbar"}),"\n",(0,o.jsxs)(e.p,{children:["Set ",(0,o.jsx)(e.code,{children:"sticky"})," prop on ",(0,o.jsx)(e.code,{children:"RichTextEditor.Toolbar"})," component to make toolbar sticky,\ncontrol ",(0,o.jsx)(e.code,{children:"top"})," property with ",(0,o.jsx)(e.code,{children:"stickyOffset"}),". For example, on mantine.dev documentation\nwebsite there is a header with ",(0,o.jsx)(e.code,{children:"60px"})," height (converted to rem), in this case we will need to\nset ",(0,o.jsx)(e.code,{children:"stickyOffset={60}"})," to make sticky position correctly with fixed positioned element."]}),"\n",(0,o.jsx)(n,{data:r.j,demoProps:{toggle:!0}}),"\n",(0,o.jsx)(e.h2,{id:"editor-context",children:"Editor context"}),"\n",(0,o.jsxs)(e.p,{children:["Use ",(0,o.jsx)(e.code,{children:"useRichTextEditorContext"})," hook to get ",(0,o.jsx)(e.a,{href:"https://tiptap.dev/api/editor",children:"Editor"})," from\nthe context. This hook can be used to create custom control or run any operations supported\nby the Tiptap ",(0,o.jsx)(e.a,{href:"https://tiptap.dev/api/editor",children:"editor API"}),"."]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-tsx",children:"import { Button } from '@mantine/core';\nimport { useRichTextEditorContext } from '@mantine/tiptap';\n\nfunction Demo() {\n  const { editor } = useRichTextEditorContext();\n  return (\n    <Button\n      onClick={() => editor?.chain().focus().toggleBold().run()}\n    >\n      Make bold\n    </Button>\n  );\n}\n"})}),"\n",(0,o.jsx)(e.h2,{id:"custom-controls",children:"Custom controls"}),"\n",(0,o.jsxs)(e.p,{children:["Use ",(0,o.jsx)(e.code,{children:"RichTextEditor.Control"})," component to create custom controls. It supports all\nprops supported by ",(0,o.jsx)(e.code,{children:"button"})," element and has ",(0,o.jsx)(e.code,{children:"active"})," prop to indicate active state.\nNote that you will need to set ",(0,o.jsx)(e.code,{children:"aria-label"})," attribute to make control visible for screen readers."]}),"\n",(0,o.jsx)(n,{data:G}),"\n",(0,o.jsx)(e.h2,{id:"change-icons",children:"Change icons"}),"\n",(0,o.jsxs)(e.p,{children:["You can change icon of control by setting ",(0,o.jsx)(e.code,{children:"icon"})," prop. It accepts a component\nthat must handle ",(0,o.jsx)(e.code,{children:"size"})," prop:"]}),"\n",(0,o.jsx)(n,{data:O}),"\n",(0,o.jsx)(e.h2,{id:"labels-and-localization",children:"Labels and localization"}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.code,{children:"RichTextEditor"})," supports changing labels for all controls with ",(0,o.jsx)(e.code,{children:"labels"})," prop:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-tsx",children:"import { useEditor } from '@tiptap/react';\nimport { RichTextEditor } from '@mantine/tiptap';\n\nfunction Demo() {\n  const editor = useEditor({\n    extensions: [\n      // ... your extensions\n    ],\n  });\n\n  return (\n    <RichTextEditor\n      editor={editor}\n      labels={{\n        boldControlLabel: 'Make text bold',\n        italicControlLabel: 'Make text bold',\n        // ...other labels\n      }}\n    >\n      {/* content */}\n    </RichTextEditor>\n  );\n}\n"})}),"\n",(0,o.jsxs)(e.p,{children:["Most labels are used to add ",(0,o.jsx)(e.code,{children:"aria-label"})," and ",(0,o.jsx)(e.code,{children:"title"})," attributes to controls, some of the labels\ncan be a function that returns string. If you do not provide all labels, then they will be merged with\nthe default labels."]}),"\n",(0,o.jsx)(e.p,{children:"All available labels:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-tsx",children:"// RichTextEditorLabels type can be imported from @mantine/tiptap package\nexport interface RichTextEditorLabels {\n  /** RichTextEditor.Bold control aria-label */\n  boldControlLabel: string;\n\n  /** RichTextEditor.Hr control aria-label */\n  hrControlLabel: string;\n\n  /** RichTextEditor.Italic control aria-label */\n  italicControlLabel: string;\n\n  /** RichTextEditor.Underline control aria-label */\n  underlineControlLabel: string;\n\n  /** RichTextEditor.Strike control aria-label */\n  strikeControlLabel: string;\n\n  /** RichTextEditor.ClearFormatting control aria-label */\n  clearFormattingControlLabel: string;\n\n  /** RichTextEditor.Link control aria-label */\n  linkControlLabel: string;\n\n  /** RichTextEditor.Unlink control aria-label */\n  unlinkControlLabel: string;\n\n  /** RichTextEditor.BulletList control aria-label */\n  bulletListControlLabel: string;\n\n  /** RichTextEditor.OrderedList control aria-label */\n  orderedListControlLabel: string;\n\n  /** RichTextEditor.H1 control aria-label */\n  h1ControlLabel: string;\n\n  /** RichTextEditor.H2 control aria-label */\n  h2ControlLabel: string;\n\n  /** RichTextEditor.H3 control aria-label */\n  h3ControlLabel: string;\n\n  /** RichTextEditor.H4 control aria-label */\n  h4ControlLabel: string;\n\n  /** RichTextEditor.H5 control aria-label */\n  h5ControlLabel: string;\n\n  /** RichTextEditor.H6 control aria-label */\n  h6ControlLabel: string;\n\n  /** RichTextEditor.Blockquote control aria-label */\n  blockquoteControlLabel: string;\n\n  /** RichTextEditor.AlignLeft control aria-label */\n  alignLeftControlLabel: string;\n\n  /** RichTextEditor.AlignCenter control aria-label */\n  alignCenterControlLabel: string;\n\n  /** RichTextEditor.AlignRight control aria-label */\n  alignRightControlLabel: string;\n\n  /** RichTextEditor.AlignJustify control aria-label */\n  alignJustifyControlLabel: string;\n\n  /** RichTextEditor.Code control aria-label */\n  codeControlLabel: string;\n\n  /** RichTextEditor.CodeBlock control aria-label */\n  codeBlockControlLabel: string;\n\n  /** RichTextEditor.Subscript control aria-label */\n  subscriptControlLabel: string;\n\n  /** RichTextEditor.Superscript control aria-label */\n  superscriptControlLabel: string;\n\n  /** RichTextEditor.ColorPicker control aria-label */\n  colorPickerControlLabel: string;\n\n  /** RichTextEditor.UnsetColor control aria-label */\n  unsetColorControlLabel: string;\n\n  /** RichTextEditor.Highlight control aria-label */\n  highlightControlLabel: string;\n\n  /** RichTextEditor.Undo control aria-label */\n  undoControlLabel: string;\n\n  /** RichTextEditor.Redo control aria-label */\n  redoControlLabel: string;\n\n  /** A function go get RichTextEditor.Color control aria-label based on color that control applies */\n  colorControlLabel: (color: string) => string;\n\n  /** aria-label for link editor url input */\n  linkEditorInputLabel: string;\n\n  /** placeholder for link editor url input */\n  linkEditorInputPlaceholder: string;\n\n  /** Content of external button tooltip in link editor when the link was chosen to open in a new tab */\n  linkEditorExternalLink: string;\n\n  /** Content of external button tooltip in link editor when the link was chosen to open in the same tab */\n  linkEditorInternalLink: string;\n\n  /** Save button content in link editor */\n  linkEditorSave: string;\n\n  /** Cancel button title text in color picker control */\n  colorPickerCancel: string;\n\n  /** Clear button title text in color picker control */\n  colorPickerClear: string;\n\n  /** Color picker button title text in color picker control */\n  colorPickerColorPicker: string;\n\n  /** Palette button title text in color picker control */\n  colorPickerPalette: string;\n\n  /** Save button title text in color picker control */\n  colorPickerSave: string;\n\n  /** aria-label for color palette colors */\n  colorPickerColorLabel: (color: string) => string;\n}\n"})}),"\n",(0,o.jsxs)(e.p,{children:["Default labels (can be imported from ",(0,o.jsx)(e.code,{children:"@mantine/tiptap"})," package):"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-tsx",children:"export const DEFAULT_LABELS: RichTextEditorLabels = {\n  // Controls labels\n  linkControlLabel: 'Link',\n  colorPickerControlLabel: 'Text color',\n  highlightControlLabel: 'Highlight text',\n  colorControlLabel: (color) => `Set text color ${color}`,\n  boldControlLabel: 'Bold',\n  italicControlLabel: 'Italic',\n  underlineControlLabel: 'Underline',\n  strikeControlLabel: 'Strikethrough',\n  clearFormattingControlLabel: 'Clear formatting',\n  unlinkControlLabel: 'Remove link',\n  bulletListControlLabel: 'Bullet list',\n  orderedListControlLabel: 'Ordered list',\n  h1ControlLabel: 'Heading 1',\n  h2ControlLabel: 'Heading 2',\n  h3ControlLabel: 'Heading 3',\n  h4ControlLabel: 'Heading 4',\n  h5ControlLabel: 'Heading 5',\n  h6ControlLabel: 'Heading 6',\n  blockquoteControlLabel: 'Blockquote',\n  alignLeftControlLabel: 'Align text: left',\n  alignCenterControlLabel: 'Align text: center',\n  alignRightControlLabel: 'Align text: right',\n  alignJustifyControlLabel: 'Align text: justify',\n  codeControlLabel: 'Code',\n  codeBlockControlLabel: 'Code block',\n  subscriptControlLabel: 'Subscript',\n  superscriptControlLabel: 'Superscript',\n  unsetColorControlLabel: 'Unset color',\n  hrControlLabel: 'Horizontal line',\n\n  // Link editor\n  linkEditorInputLabel: 'Enter URL',\n  linkEditorInputPlaceholder: 'https://example.com/',\n  linkEditorExternalLink: 'Open link in a new tab',\n  linkEditorInternalLink: 'Open link in the same tab',\n  linkEditorSave: 'Save',\n\n  // Color picker control\n  colorPickerCancel: 'Cancel',\n  colorPickerClear: 'Clear color',\n  colorPickerColorPicker: 'Color picker',\n  colorPickerPalette: 'Color palette',\n  colorPickerSave: 'Save',\n  colorPickerColorLabel: (color) => `Set text color ${color}`,\n};\n"})})]})}function z(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(_,{...t,children:(0,o.jsx)(N,{...t})})}function J(t,e){throw Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}},13943:function(t,e,n){"use strict";n.d(e,{w:function(){return h}});var o=n(27378),i=n(35437),r=n(15714),l=n(49947),c=n(86873),a=n(46586);let s=t=>t.extend({addKeyboardShortcuts:()=>({"Mod-[":({editor:t})=>(t.chain().focus().liftListItem("taskItem").run(),!0),"Mod-]":({editor:t})=>(t.chain().focus().sinkListItem("taskItem").run(),!0)})}).configure({HTMLAttributes:{class:`${a.Z.taskList} mantine-RichTextEditor-taskList`}});var d=n(98921);let p=`
import TaskItem from '@tiptap/extension-task-item';
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
`,h={type:"code",component:function(){let t=(0,l.jE)({extensions:[c.Z,s(r.Z),i.ZP.configure({nested:!0,HTMLAttributes:{class:"test-item"}})],content:`
        <ul data-type="taskList">
          <li data-type="taskItem" data-checked="true">A list item</li>
          <li data-type="taskItem" data-checked="false">And another one</li>
        </ul>
      `});return o.createElement(d.L,{editor:t},o.createElement(d.L.Toolbar,null,o.createElement(d.L.ControlsGroup,null,o.createElement(d.L.TaskList,null),o.createElement(d.L.TaskListLift,null),o.createElement(d.L.TaskListSink,null))),o.createElement(d.L.Content,null))},code:p}},53456:function(t,e,n){"use strict";n.d(e,{j:function(){return u}});var o=n(27378),i=n(61506),r=n(64088),l=n(56437),c=n(16985),a=n(67890),s=n(49947),d=n(86873),p=n(16541),h=n(98921);let x=`
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
      <RichTextEditor.Toolbar sticky stickyOffset={60}>
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
`,u={type:"code",component:function(){let t=(0,s.jE)({extensions:[d.Z,a.Z,p.r,l.Z,r.Z,i.ZP,c.Z.configure({types:["heading","paragraph"]})],content:'<h2 style="text-align: center;">Welcome to Mantine rich text editor</h2><p><code>RichTextEditor</code> component focuses on usability and is designed to be as simple as possible to bring a familiar editing experience to regular users. <code>RichTextEditor</code> is based on <a href="https://tiptap.dev/" rel="noopener noreferrer" target="_blank">Tiptap.dev</a> and supports all of its features:</p><ul><li>General text formatting: <strong>bold</strong>, <em>italic</em>, <u>underline</u>, <s>strike-through</s> </li><li>Headings (h1-h6)</li><li>Sub and super scripts (<sup>&lt;sup /&gt;</sup> and <sub>&lt;sub /&gt;</sub> tags)</li><li>Ordered and bullet lists</li><li>Text align&nbsp;</li><li>And all <a href="https://tiptap.dev/extensions" target="_blank" rel="noopener noreferrer">other extensions</a></li></ul>'});return o.createElement(h.L,{editor:t},o.createElement(h.L.Toolbar,{sticky:!0,stickyOffset:60},o.createElement(h.L.ControlsGroup,null,o.createElement(h.L.Bold,null),o.createElement(h.L.Italic,null),o.createElement(h.L.Underline,null),o.createElement(h.L.Strikethrough,null),o.createElement(h.L.ClearFormatting,null),o.createElement(h.L.Highlight,null),o.createElement(h.L.Code,null)),o.createElement(h.L.ControlsGroup,null,o.createElement(h.L.H1,null),o.createElement(h.L.H2,null),o.createElement(h.L.H3,null),o.createElement(h.L.H4,null)),o.createElement(h.L.ControlsGroup,null,o.createElement(h.L.Blockquote,null),o.createElement(h.L.Hr,null),o.createElement(h.L.BulletList,null),o.createElement(h.L.OrderedList,null),o.createElement(h.L.Subscript,null),o.createElement(h.L.Superscript,null)),o.createElement(h.L.ControlsGroup,null,o.createElement(h.L.Link,null),o.createElement(h.L.Unlink,null)),o.createElement(h.L.ControlsGroup,null,o.createElement(h.L.AlignLeft,null),o.createElement(h.L.AlignCenter,null),o.createElement(h.L.AlignJustify,null),o.createElement(h.L.AlignRight,null)),o.createElement(h.L.ControlsGroup,null,o.createElement(h.L.Undo,null),o.createElement(h.L.Redo,null))),o.createElement(h.L.Content,null))},code:x}},87921:function(t,e,n){"use strict";n.d(e,{q:function(){return i}});var o=n(27378);function i(t=!1,e){let{onOpen:n,onClose:i}=e||{},[r,l]=(0,o.useState)(t),c=(0,o.useCallback)(()=>{l(t=>t||(n?.(),!0))},[n]),a=(0,o.useCallback)(()=>{l(t=>t?(i?.(),!1):t)},[i]),s=(0,o.useCallback)(()=>{r?a():c()},[a,c,r]);return[r,{open:c,close:a,toggle:s}]}},16541:function(t,e,n){"use strict";n.d(e,{r:function(){return i}});var o=n(61165);let i=o.ZP.extend({addKeyboardShortcuts:()=>({"Mod-k":()=>(window.dispatchEvent(new Event("edit-link")),!0)})}).configure({openOnClick:!1})}},function(t){t.O(0,[38345,93883,84101,30370,62535,34553,76068,15819,2775,98921,49774,92888,40179],function(){return t(t.s=29604)}),_N_E=t.O()}]);