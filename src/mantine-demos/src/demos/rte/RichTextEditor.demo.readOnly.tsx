import React, { useState } from 'react';
import { SSRWrapper } from './_SSRWrapper';

export const html = `
<p>This editor is <b>read only</b></p>
`;

const code = `
<RichTextEditor readOnly id="rte" {...otherProps} />
`;

function Demo(props: any) {
  const [value, onChange] = useState(html);
  return <SSRWrapper readOnly value={value} onChange={onChange} stickyOffset={60} {...props} />;
}

export const readOnly: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
