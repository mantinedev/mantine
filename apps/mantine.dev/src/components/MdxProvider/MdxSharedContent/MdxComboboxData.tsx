import { MdxCodeHighlight } from '../MdxPre/MdxPre';
import { MdxTitle } from '../MdxTitle/MdxTitle';
import { MdxCode, MdxParagraph } from '../MdxTypography/MdxTypography';

interface MdxComboboxDataProps {
  component: string;
}

const getStringArrayCode = (component: string) => `
import { ${component} } from '@mantine/core';

function Demo() {
  return <${component} data={['React', 'Angular']} />;
}
`;

const getArrayCode = (component: string) => `
import { ${component} } from '@mantine/core';

function Demo() {
  return (
    <${component}
      data={[
        { value: 'react', label: 'React' },
        { value: 'ng', label: 'Angular' },
      ]}
    />
  );
}
`;

const getStringGroupsCode = (component: string) => `
import { ${component} } from '@mantine/core';

function Demo() {
  return (
    <${component}
      data={[
        { group: 'Frontend', items: ['React', 'Angular'] },
        { group: 'Backend', items: ['Express', 'Django'] },
      ]}
    />
  );
}
`;

const getGroupsCode = (component: string) => `
import { ${component} } from '@mantine/core';

function Demo() {
  return (
    <${component}
      data={[
        { group: 'Frontend', items: [{ value: 'react', label: 'React' }, { value: 'ng', label: 'Angular' }] },
        { group: 'Backend', items: [{ value: 'express', label: 'Express' }, { value: 'django', label: 'Django' }] },
      ]}
    />
  );
}
`;

export function MdxComboboxData({ component }: MdxComboboxDataProps) {
  const stringDataFormat = component !== 'Autocomplete' && component !== 'TagsInput';
  return (
    <>
      <MdxTitle id="data-formats">Data formats</MdxTitle>
      <MdxParagraph>
        <MdxCode>{component}</MdxCode> <MdxCode>data</MdxCode> prop accepts data in one of the
        following formats:
      </MdxParagraph>

      <MdxParagraph>Array of strings:</MdxParagraph>

      <MdxCodeHighlight language="tsx" code={getStringArrayCode(component)} />

      {stringDataFormat && (
        <>
          <MdxParagraph>
            Array of object with <MdxCode>value</MdxCode>, <MdxCode>label</MdxCode> and optional{' '}
            <MdxCode>disabled</MdxCode> keys:
          </MdxParagraph>
          <MdxCodeHighlight language="tsx" code={getArrayCode(component)} />
        </>
      )}

      <MdxParagraph>Array of groups with string options:</MdxParagraph>
      <MdxCodeHighlight language="tsx" code={getStringGroupsCode(component)} />

      {stringDataFormat && (
        <>
          <MdxParagraph>Array of groups with object options:</MdxParagraph>
          <MdxCodeHighlight language="tsx" code={getGroupsCode(component)} />
        </>
      )}
    </>
  );
}
