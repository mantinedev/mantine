(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5348],{71862:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/others/tiptap",function(){return n(47149)}])},47149:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return O}});var o=n(24246),i=n(71670),r=n(3916),l=n(30289),c=n(53456),a=n(27378),s=n(55676),d=n(49947),h=n(86873),p=n(86422);let x=`
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
`,u={type:"code",component:function(){let e=(0,d.jE)({extensions:[h.Z,p.Z.configure({placeholder:"This is placeholder"})],content:""});return a.createElement(s.L,{editor:e},a.createElement(s.L.Content,null))},code:x};var m=n(40903),E=n(71493),b=n(51655);let g=`
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
`,j={type:"code",component:function(){let e=(0,d.jE)({extensions:[h.Z,b.Z,E.I],content:"<p>Apply some colors to this text</p>"});return a.createElement(s.L,{editor:e},a.createElement(s.L.Toolbar,{sticky:!0,stickyOffset:60},a.createElement(s.L.ColorPicker,{colors:["#25262b","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"]}),a.createElement(s.L.ControlsGroup,null,a.createElement(s.L.Control,{interactive:!1},a.createElement(m.Z,{size:"1rem",stroke:1.5})),a.createElement(s.L.Color,{color:"#F03E3E"}),a.createElement(s.L.Color,{color:"#7048E8"}),a.createElement(s.L.Color,{color:"#1098AD"}),a.createElement(s.L.Color,{color:"#37B24D"}),a.createElement(s.L.Color,{color:"#F59F00"})),a.createElement(s.L.UnsetColor,null)),a.createElement(s.L.Content,null))},code:g};var f=n(36667),T=n(53554),C=n(49859);let k=(0,T.B)(),R=`
import { RichTextEditor } from '@mantine/tiptap';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import { lowlight } from 'lowlight';
import tsLanguageSyntax from 'highlight.js/lib/languages/typescript';

// register languages that your are planning to use
lowlight.register('ts', tsLanguageSyntax);

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
`;k.register("ts",C.Z);let L=`// Valid braces Kata \u2013 https://www.codewars.com/kata/5277c8a221e209d3f6000b56

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
}`.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"),y={type:"code",component:function(){let e=(0,d.jE)({extensions:[h.Z.configure({codeBlock:!1}),f.Z.configure({lowlight:k})],content:`<p>Regular paragraph</p><pre><code>${L}</code></pre>`});return a.createElement(s.L,{editor:e},a.createElement(s.L.Toolbar,null,a.createElement(s.L.ControlsGroup,null,a.createElement(s.L.CodeBlock,null))),a.createElement(s.L.Content,null))},code:R};var w=n(16541);let S=`
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
`,v={type:"code",component:function(){let e=(0,d.jE)({extensions:[h.Z,w.r],content:"<p>Select some text to see bubble menu</p>"});return a.createElement(s.L,{editor:e},e&&a.createElement(d.NM,{editor:e},a.createElement(s.L.ControlsGroup,null,a.createElement(s.L.Bold,null),a.createElement(s.L.Italic,null),a.createElement(s.L.Link,null))),a.createElement(s.L.Content,null))},code:S},B=`
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
`,I={type:"code",component:function(){let e=(0,d.jE)({extensions:[h.Z,w.r],content:"<p>Enter a new line to see floating menu</p>"});return a.createElement(s.L,{editor:e},e&&a.createElement(d.AH,{editor:e},a.createElement(s.L.ControlsGroup,null,a.createElement(s.L.H1,null),a.createElement(s.L.H2,null),a.createElement(s.L.BulletList,null))),a.createElement(s.L.Content,null))},code:B};var P=n(47986),H=n(48112);let A=`
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
`;function F(){let{editor:e}=(0,P.Y)();return a.createElement(s.L.Control,{onClick:()=>e?.commands.insertContent("⭐"),"aria-label":"Insert star emoji",title:"Insert star emoji"},a.createElement(H.Z,{stroke:1.5,size:"1rem"}))}let U={type:"code",component:function(){let e=(0,d.jE)({extensions:[h.Z],content:"<p>Click control to insert star emoji</p>"});return a.createElement(s.L,{editor:e},a.createElement(s.L.Toolbar,null,a.createElement(F,null)),a.createElement(s.L.Content,null))},code:A};var q=n(52025),D=n(4014);let K=`
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
`,G=()=>a.createElement(q.Z,{size:"1rem",stroke:3.5}),M=()=>a.createElement(D.Z,{size:"1rem",stroke:3.5}),N={type:"code",component:function(){let e=(0,d.jE)({extensions:[h.Z],content:"<p>Customize icons with icon prop</p>"});return a.createElement(s.L,{editor:e},a.createElement(s.L.Toolbar,null,a.createElement(s.L.ControlsGroup,null,a.createElement(s.L.Bold,{icon:G}),a.createElement(s.L.Italic,{icon:M}))),a.createElement(s.L.Content,null))},code:K},Z=(0,r.A)(l.us.TipTap);function z(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components},{Demo:n,InstallScript:r}=t;return n||_("Demo",!0),r||_("InstallScript",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,o.jsx)(t.p,{children:"Install with yarn:"}),"\n",(0,o.jsx)(r,{packages:"@mantine/tiptap @mantine/core @mantine/hooks @tabler/icons-react @tiptap/react @tiptap/pm @tiptap/extension-link @tiptap/starter-kit"}),"\n",(0,o.jsx)(t.p,{children:"After installation import package styles at the root of your application:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import '@mantine/tiptap/styles.css';\n"})}),"\n",(0,o.jsx)(t.h2,{id:"tiptap-editor",children:"TipTap editor"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"@mantine/tiptap"})," provides a UI for ",(0,o.jsx)(t.a,{href:"https://tiptap.dev/",children:"Tiptap"}),". ",(0,o.jsx)(t.code,{children:"RichTextEditor"})," component\nworks with ",(0,o.jsx)(t.a,{href:"https://tiptap.dev/api/editor",children:"Editor"})," instance of tiptap.\nThis means that you have full control over the editor ",(0,o.jsx)(t.a,{href:"https://tiptap.dev/guide/configuration",children:"state and configuration"}),"\nwith ",(0,o.jsx)(t.a,{href:"https://tiptap.dev/installation/react",children:"useEditor hook"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["In other words, ",(0,o.jsx)(t.code,{children:"RichTextEditor"})," component does not manage state for you,\ncontrols just execute operations on the ",(0,o.jsx)(t.code,{children:"Editor"})," instance. If you want to\nimplement something that is related to state or component value (e.g. controlled mode, value transforms to HTML/Markdown),\nyou should look for documentation on ",(0,o.jsx)(t.a,{href:"https://tiptap.dev/",children:"tiptap.dev"})," website."]}),"\n",(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(n,{data:c.j}),"\n",(0,o.jsx)(t.h2,{id:"controls-and-extensions",children:"Controls and extensions"}),"\n",(0,o.jsxs)(t.p,{children:["Some controls require installation of additional ",(0,o.jsx)(t.a,{href:"https://tiptap.dev/extensions",children:"Tiptap extensions"}),".\nFor example, if you want to use ",(0,o.jsx)(t.code,{children:"RichTextEditor.Underline"})," control, you will need to install ",(0,o.jsx)(t.code,{children:"@tiptap/extension-underline"})," package:"]}),"\n",(0,o.jsx)(r,{packages:"@tiptap/extension-underline"}),"\n",(0,o.jsxs)(t.p,{children:["Included with ",(0,o.jsx)(t.code,{children:"@tiptap/starter-kit"})," (should be installed by default):"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.code,{children:"RichTextEditor.H1"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.code,{children:"RichTextEditor.H2"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.code,{children:"RichTextEditor.H3"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.code,{children:"RichTextEditor.H4"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.code,{children:"RichTextEditor.H5"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.code,{children:"RichTextEditor.H6"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.code,{children:"RichTextEditor.BulletList"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.code,{children:"RichTextEditor.OrderedList"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.code,{children:"RichTextEditor.Bold"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.code,{children:"RichTextEditor.Italic"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.code,{children:"RichTextEditor.Strikethrough"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.code,{children:"RichTextEditor.ClearFormatting"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.code,{children:"RichTextEditor.Blockquote"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.code,{children:"RichTextEditor.Code"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.code,{children:"RichTextEditor.CodeBlock"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.code,{children:"RichTextEditor.Hr"})}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["Controls that require ",(0,o.jsx)(t.a,{href:"https://www.npmjs.com/package/@tiptap/extension-link",children:"@tiptap/extension-link"})," extension:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.code,{children:"RichTextEditor.Link"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.code,{children:"RichTextEditor.Unlink"})}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["Controls that require ",(0,o.jsx)(t.a,{href:"https://www.npmjs.com/package/@tiptap/extension-text-align",children:"@tiptap/extension-text-align"})," extension:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.code,{children:"RichTextEditor.AlignLeft"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.code,{children:"RichTextEditor.AlignRight"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.code,{children:"RichTextEditor.AlignCenter"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.code,{children:"RichTextEditor.AlignJustify"})}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["Controls that require ",(0,o.jsx)(t.a,{href:"https://www.npmjs.com/package/@tiptap/extension-color",children:"@tiptap/extension-color"})," and ",(0,o.jsx)(t.a,{href:"https://www.npmjs.com/package/@tiptap/extension-text-style",children:"@tiptap/extension-text-style"})," extensions:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.code,{children:"RichTextEditor.ColorPicker"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.code,{children:"RichTextEditor.Color"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.code,{children:"RichTextEditor.UnsetColor"})}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Other controls with required extensions:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"RichTextEditor.Underline"})," requires ",(0,o.jsx)(t.a,{href:"https://www.npmjs.com/package/@tiptap/extension-underline",children:"@tiptap/extension-underline"})]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"RichTextEditor.Superscript"})," requires ",(0,o.jsx)(t.a,{href:"https://www.npmjs.com/package/@tiptap/extension-superscript",children:"@tiptap/extension-superscript"})]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"RichTextEditor.Subscript"})," requires ",(0,o.jsx)(t.a,{href:"https://www.npmjs.com/package/@tiptap/extension-subscript",children:"@tiptap/extension-subscript"})]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"RichTextEditor.Highlight"})," requires ",(0,o.jsx)(t.a,{href:"https://www.npmjs.com/package/@tiptap/extension-highlight",children:"@tiptap/extension-highlight"})]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"placeholder",children:"Placeholder"}),"\n",(0,o.jsxs)(t.p,{children:["To use placeholder you will need to install ",(0,o.jsx)(t.a,{href:"https://www.npmjs.com/package/@tiptap/extension-placeholder",children:"@tiptap/extension-placeholder"})," package:"]}),"\n",(0,o.jsx)(r,{packages:"@tiptap/extension-placeholder"}),"\n",(0,o.jsx)(n,{data:u}),"\n",(0,o.jsx)(t.h2,{id:"link-extension",children:"Link extension"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"@mantine/tiptap"})," provides custom ",(0,o.jsx)(t.code,{children:"Link"})," extension that is required to be used instead of\n",(0,o.jsx)(t.code,{children:"@tiptap/extension-link"})," in order for ",(0,o.jsx)(t.code,{children:"Ctrl + K"})," keyboard shortcut to work:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"// Use Link extension exported from the @mantine/tiptap package\nimport { RichTextEditor, Link } from '@mantine/tiptap';\nimport { useEditor } from '@tiptap/react';\n\nfunction Demo() {\n  const editor = useEditor({\n    extensions: [\n      Link,\n      // ... other extensions\n    ],\n  });\n\n  return (\n    <RichTextEditor editor={editor}>{/* content */}</RichTextEditor>\n  );\n}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"text-color",children:"Text color"}),"\n",(0,o.jsx)(t.p,{children:"To use text color you will need to install additional packages:"}),"\n",(0,o.jsx)(r,{packages:"@tiptap/extension-color @tiptap/extension-text-style"}),"\n",(0,o.jsx)(t.p,{children:"You can use the following controls to change text color:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"RichTextEditor.ColorPicker"})," – allows to pick colors from given predefined color swatches and with ",(0,o.jsx)(t.a,{href:"/core/color-picker/",children:"ColorPicker"})," component"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"RichTextEditor.Color"})," – allows to apply given color with one click"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"RichTextEditor.UnsetColor"})," – clears color styles"]}),"\n"]}),"\n",(0,o.jsx)(n,{data:j}),"\n",(0,o.jsx)(t.h2,{id:"code-highlight",children:"Code highlight"}),"\n",(0,o.jsx)(t.p,{children:"To use code highlight you will need to install additional packages:"}),"\n",(0,o.jsx)(r,{packages:"lowlight @tiptap/extension-code-block-lowlight"}),"\n",(0,o.jsx)(n,{data:y}),"\n",(0,o.jsx)(t.h2,{id:"typography-styles",children:"Typography styles"}),"\n",(0,o.jsxs)(t.p,{children:["By default, ",(0,o.jsx)(t.code,{children:"RichTextEditor"})," renders content with ",(0,o.jsx)(t.a,{href:"/core/typography-styles-provider/",children:"TypographyStylesProvider"})," and some additional styles.\nYou can disable these styles by setting ",(0,o.jsx)(t.code,{children:"withTypographyStyles={false}"}),":"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { RichTextEditor } from '@mantine/tiptap';\nimport { useEditor } from '@tiptap/react';\n\nfunction Demo() {\n  const editor = useEditor({\n    extensions: [\n      // ... your extensions\n    ],\n  });\n\n  return (\n    <RichTextEditor editor={editor} withTypographyStyles={false}>\n      {/* content */}\n    </RichTextEditor>\n  );\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Then you will be able to add your own styles either with ",(0,o.jsx)(t.a,{href:"/styles/global-styles/",children:"global styles"}),"\nor with ",(0,o.jsx)(t.a,{href:"/styles/styles-api/",children:"Styles API"}),":"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"// ...\n<RichTextEditor\n  editor={editor}\n  withTypographyStyles={false}\n  styles={{\n    content: {\n      '& p': {\n        color: 'silver',\n      },\n    },\n  }}\n>\n  {/* content */}\n</RichTextEditor>\n"})}),"\n",(0,o.jsx)(t.h2,{id:"bubble-menu",children:"Bubble menu"}),"\n",(0,o.jsxs)(t.p,{children:["You can use ",(0,o.jsx)(t.a,{href:"https://tiptap.dev/api/extensions/bubble-menu",children:"BubbleMenu"})," component\nwith any ",(0,o.jsx)(t.code,{children:"RichTextEditor"})," controls. Bubble menu will appear near a selection of text:"]}),"\n",(0,o.jsx)(n,{data:v}),"\n",(0,o.jsx)(t.h2,{id:"floating-menu",children:"Floating menu"}),"\n",(0,o.jsxs)(t.p,{children:["You can use ",(0,o.jsx)(t.a,{href:"https://tiptap.dev/api/extensions/floating-menu",children:"FloatingMenu"})," component\nwith any ",(0,o.jsx)(t.code,{children:"RichTextEditor"})," controls. Floating menu will appear in an empty line:"]}),"\n",(0,o.jsx)(n,{data:I}),"\n",(0,o.jsx)(t.h2,{id:"sticky-toolbar",children:"Sticky toolbar"}),"\n",(0,o.jsxs)(t.p,{children:["Set ",(0,o.jsx)(t.code,{children:"sticky"})," prop on ",(0,o.jsx)(t.code,{children:"RichTextEditor.Toolbar"})," component to make toolbar sticky,\ncontrol ",(0,o.jsx)(t.code,{children:"top"})," property with ",(0,o.jsx)(t.code,{children:"stickyOffset"}),". For example, on mantine.dev documentation\nwebsite there is a header with ",(0,o.jsx)(t.code,{children:"60px"})," height (converted to rem), in this case we will need to\nset ",(0,o.jsx)(t.code,{children:"stickyOffset={60}"})," to make sticky position correctly with fixed positioned element."]}),"\n",(0,o.jsx)(n,{data:c.j,demoProps:{toggle:!0}}),"\n",(0,o.jsx)(t.h2,{id:"editor-context",children:"Editor context"}),"\n",(0,o.jsxs)(t.p,{children:["Use ",(0,o.jsx)(t.code,{children:"useRichTextEditorContext"})," hook to get ",(0,o.jsx)(t.a,{href:"https://tiptap.dev/api/editor",children:"Editor"})," from\nthe context. This hook can be used to create custom control or run any operations supported\nby the Tiptap ",(0,o.jsx)(t.a,{href:"https://tiptap.dev/api/editor",children:"editor API"}),"."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { useRichTextEditorContext } from '@mantine/tiptap';\nimport { Button } from '@mantine/core';\n\nfunction Demo() {\n  const { editor } = useRichTextEditorContext();\n  return (\n    <Button\n      onClick={() => editor?.chain().focus().toggleBold().run()}\n    >\n      Make bold\n    </Button>\n  );\n}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"custom-controls",children:"Custom controls"}),"\n",(0,o.jsxs)(t.p,{children:["Use ",(0,o.jsx)(t.code,{children:"RichTextEditor.Control"})," component to create custom controls. It supports all\nprops supported by ",(0,o.jsx)(t.code,{children:"button"})," element and has ",(0,o.jsx)(t.code,{children:"active"})," prop to indicate active state.\nNote that you will need to set ",(0,o.jsx)(t.code,{children:"aria-label"})," attribute to make control visible for screen readers."]}),"\n",(0,o.jsx)(n,{data:U}),"\n",(0,o.jsx)(t.h2,{id:"change-icons",children:"Change icons"}),"\n",(0,o.jsxs)(t.p,{children:["You can change icon of control by setting ",(0,o.jsx)(t.code,{children:"icon"})," prop. It accepts a component\nthat must handle ",(0,o.jsx)(t.code,{children:"size"})," prop:"]}),"\n",(0,o.jsx)(n,{data:N}),"\n",(0,o.jsx)(t.h2,{id:"labels-and-localization",children:"Labels and localization"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"RichTextEditor"})," supports changing labels for all controls with ",(0,o.jsx)(t.code,{children:"labels"})," prop:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { RichTextEditor } from '@mantine/tiptap';\nimport { useEditor } from '@tiptap/react';\n\nfunction Demo() {\n  const editor = useEditor({\n    extensions: [\n      // ... your extensions\n    ],\n  });\n\n  return (\n    <RichTextEditor\n      editor={editor}\n      labels={{\n        boldControlLabel: 'Make text bold',\n        italicControlLabel: 'Make text bold',\n        // ...other labels\n      }}\n    >\n      {/* content */}\n    </RichTextEditor>\n  );\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Most labels are used to add ",(0,o.jsx)(t.code,{children:"aria-label"})," and ",(0,o.jsx)(t.code,{children:"title"})," attributes to controls, some of the labels\ncan be a function that returns string. If you do not provide all labels, then they will be merged with\nthe default labels."]}),"\n",(0,o.jsx)(t.p,{children:"All available labels:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"// RichTextEditorLabels type can be imported from @mantine/tiptap package\nexport interface RichTextEditorLabels {\n  /** RichTextEditor.Bold control aria-label */\n  boldControlLabel: string;\n\n  /** RichTextEditor.Hr control aria-label */\n  hrControlLabel: string;\n\n  /** RichTextEditor.Italic control aria-label */\n  italicControlLabel: string;\n\n  /** RichTextEditor.Underline control aria-label */\n  underlineControlLabel: string;\n\n  /** RichTextEditor.Strike control aria-label */\n  strikeControlLabel: string;\n\n  /** RichTextEditor.ClearFormatting control aria-label */\n  clearFormattingControlLabel: string;\n\n  /** RichTextEditor.Link control aria-label */\n  linkControlLabel: string;\n\n  /** RichTextEditor.Unlink control aria-label */\n  unlinkControlLabel: string;\n\n  /** RichTextEditor.BulletList control aria-label */\n  bulletListControlLabel: string;\n\n  /** RichTextEditor.OrderedList control aria-label */\n  orderedListControlLabel: string;\n\n  /** RichTextEditor.H1 control aria-label */\n  h1ControlLabel: string;\n\n  /** RichTextEditor.H2 control aria-label */\n  h2ControlLabel: string;\n\n  /** RichTextEditor.H3 control aria-label */\n  h3ControlLabel: string;\n\n  /** RichTextEditor.H4 control aria-label */\n  h4ControlLabel: string;\n\n  /** RichTextEditor.H5 control aria-label */\n  h5ControlLabel: string;\n\n  /** RichTextEditor.H6 control aria-label */\n  h6ControlLabel: string;\n\n  /** RichTextEditor.Blockquote control aria-label */\n  blockquoteControlLabel: string;\n\n  /** RichTextEditor.AlignLeft control aria-label */\n  alignLeftControlLabel: string;\n\n  /** RichTextEditor.AlignCenter control aria-label */\n  alignCenterControlLabel: string;\n\n  /** RichTextEditor.AlignRight control aria-label */\n  alignRightControlLabel: string;\n\n  /** RichTextEditor.AlignJustify control aria-label */\n  alignJustifyControlLabel: string;\n\n  /** RichTextEditor.Code control aria-label */\n  codeControlLabel: string;\n\n  /** RichTextEditor.CodeBlock control aria-label */\n  codeBlockControlLabel: string;\n\n  /** RichTextEditor.Subscript control aria-label */\n  subscriptControlLabel: string;\n\n  /** RichTextEditor.Superscript control aria-label */\n  superscriptControlLabel: string;\n\n  /** RichTextEditor.ColorPicker control aria-label */\n  colorPickerControlLabel: string;\n\n  /** RichTextEditor.UnsetColor control aria-label */\n  unsetColorControlLabel: string;\n\n  /** RichTextEditor.Highlight control aria-label */\n  highlightControlLabel: string;\n\n  /** A function go get RichTextEditor.Color control aria-label based on color that control applies */\n  colorControlLabel(color: string): string;\n\n  /** aria-label for link editor url input */\n  linkEditorInputLabel: string;\n\n  /** placeholder for link editor url input */\n  linkEditorInputPlaceholder: string;\n\n  /** Content of external button tooltip in link editor when the link was chosen to open in a new tab */\n  linkEditorExternalLink: string;\n\n  /** Content of external button tooltip in link editor when the link was chosen to open in the same tab */\n  linkEditorInternalLink: string;\n\n  /** Save button content in link editor */\n  linkEditorSave: string;\n\n  /** Cancel button title text in color picker control */\n  colorPickerCancel: string;\n\n  /** Clear button title text in color picker control */\n  colorPickerClear: string;\n\n  /** Color picker button title text in color picker control */\n  colorPickerColorPicker: string;\n\n  /** Palette button title text in color picker control */\n  colorPickerPalette: string;\n\n  /** Save button title text in color picker control */\n  colorPickerSave: string;\n\n  /** aria-label for color palette colors */\n  colorPickerColorLabel(color: string): string;\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Default labels (can be imported from ",(0,o.jsx)(t.code,{children:"@mantine/tiptap"})," package):"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"export const DEFAULT_LABELS: RichTextEditorLabels = {\n  // Controls labels\n  linkControlLabel: 'Link',\n  colorPickerControlLabel: 'Text color',\n  highlightControlLabel: 'Highlight text',\n  colorControlLabel: (color) => `Set text color ${color}`,\n  boldControlLabel: 'Bold',\n  italicControlLabel: 'Italic',\n  underlineControlLabel: 'Underline',\n  strikeControlLabel: 'Strikethrough',\n  clearFormattingControlLabel: 'Clear formatting',\n  unlinkControlLabel: 'Remove link',\n  bulletListControlLabel: 'Bullet list',\n  orderedListControlLabel: 'Ordered list',\n  h1ControlLabel: 'Heading 1',\n  h2ControlLabel: 'Heading 2',\n  h3ControlLabel: 'Heading 3',\n  h4ControlLabel: 'Heading 4',\n  h5ControlLabel: 'Heading 5',\n  h6ControlLabel: 'Heading 6',\n  blockquoteControlLabel: 'Blockquote',\n  alignLeftControlLabel: 'Align text: left',\n  alignCenterControlLabel: 'Align text: center',\n  alignRightControlLabel: 'Align text: right',\n  alignJustifyControlLabel: 'Align text: justify',\n  codeControlLabel: 'Code',\n  codeBlockControlLabel: 'Code block',\n  subscriptControlLabel: 'Subscript',\n  superscriptControlLabel: 'Superscript',\n  unsetColorControlLabel: 'Unset color',\n  hrControlLabel: 'Horizontal line',\n\n  // Link editor\n  linkEditorInputLabel: 'Enter URL',\n  linkEditorInputPlaceholder: 'https://example.com/',\n  linkEditorExternalLink: 'Open link in a new tab',\n  linkEditorInternalLink: 'Open link in the same tab',\n  linkEditorSave: 'Save',\n\n  // Color picker control\n  colorPickerCancel: 'Cancel',\n  colorPickerClear: 'Clear color',\n  colorPickerColorPicker: 'Color picker',\n  colorPickerPalette: 'Color palette',\n  colorPickerSave: 'Save',\n  colorPickerColorLabel: (color) => `Set text color ${color}`,\n};\n"})})]})}function O(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(Z,{...e,children:(0,o.jsx)(z,{...e})})}function _(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},87921:function(e,t,n){"use strict";n.d(t,{q:function(){return i}});var o=n(27378);function i(e=!1,t){let{onOpen:n,onClose:i}=t||{},[r,l]=(0,o.useState)(e),c=(0,o.useCallback)(()=>{l(e=>e||(n?.(),!0))},[n]),a=(0,o.useCallback)(()=>{l(e=>e?(i?.(),!1):e)},[i]),s=(0,o.useCallback)(()=>{r?a():c()},[a,c,r]);return[r,{open:c,close:a,toggle:s}]}}},function(e){e.O(0,[8345,370,7732,7304,5819,2775,3456,9774,2888,179],function(){return e(e.s=71862)}),_N_E=e.O()}]);