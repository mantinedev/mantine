import React, { useState } from 'react';
import { SSRWrapper } from './_SSRWrapper';

export const html = `
<h2 class="ql-align-center">Welcome to Mantine Rich Text Editor</h2><p>RichTextEditor component focuses on usability and is designed to be as simple as possible to bring a familiar editing experience to regular users. RichTextEditor is based on <a href="https://quilljs.com/" rel="noopener noreferrer" target="_blank">Quill.js</a> via <a href="https://github.com/zenoamaro/react-quill" rel="noopener noreferrer" target="_blank">react-quill</a> and supports most of its features:</p><ul><li>General text formatting: <strong>bold</strong>, <em>italic</em>, <u>underline</u>, <s>strikethrough</s> </li><li>Headings (h1-h6)</li><li>Sub and super scripts (<sup>&lt;sup /&gt;</sup> and <sub>&lt;sub /&gt;</sub> tags)</li><li>Ordered and bullet lists</li><li>Image and video embeds</li><li>Text align&nbsp;</li></ul><p>But RichTextEditor is not just a wrapper for <a href="https://github.com/zenoamaro/react-quill" rel="noopener noreferrer" target="_blank">react-quill</a>, it comes with a bunch of extra features:</p><ol><li>Seamless integration with your Mantine theme – component will use font-family, font-sizes, spacing and primary color from your custom theme, defined in MantineProvider</li><li>Dark theme support – like any other Mantine component, RichTextEditor supports dark theme out of the box</li><li>Images uploading – specify upload function (S3 or anywhere else) that will be triggered when user pastes or drops image to editor</li><li>Sticky toolbar will be visible when user scrolls</li></ol>
`;

function Demo(props: any) {
  const [value, onChange] = useState(html);
  return <SSRWrapper value={value} onChange={onChange} stickyOffset={60} {...props} />;
}

export const usage: MantineDemo = {
  type: 'demo',
  component: Demo,
  demoProps: {
    inline: true,
  },
};
