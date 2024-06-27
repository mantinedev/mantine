import { TypeScriptCircleIcon } from '@mantinex/dev-icons';
import { MdxInfo } from '../MdxInfo/MdxInfo';
import { MdxLink } from '../MdxLink/MdxLink';
import { MdxCodeHighlight } from '../MdxPre/MdxPre';
import { MdxTitle } from '../MdxTitle/MdxTitle';
import { MdxCode, MdxParagraph } from '../MdxTypography/MdxTypography';

interface MdxPolymorphicProps {
  component: string;
  defaultElement: string;
  changeToElement: string;
  withNext?: string;
  package?: string;
}

function getElementCode(input: MdxPolymorphicProps) {
  return `import { ${input.component} } from '${input.package || '@mantine/core'}';

function Demo() {
  return <${input.component} component="${input.changeToElement}" />;
}
  `;
}

function getNextLinkCode(input: MdxPolymorphicProps) {
  return `import Link from 'next/link';
import { ${input.component} } from '${input.package || '@mantine/core'}';

function Demo() {
  return <${input.component} component={Link} href="/" />;
}`;
}

function getInterfaceCode(input: MdxPolymorphicProps) {
  return `import type { ${input.component}Props, ElementProps } from '${
    input.package || '@mantine/core'
  }';

interface My${input.component}Props extends ${input.component}Props,
  ElementProps<'${input.changeToElement}', keyof ${input.component}Props> {}`;
}

export function MdxPolymorphic(props: MdxPolymorphicProps) {
  return (
    <>
      <MdxTitle id="polymorphic-component">Polymorphic component</MdxTitle>
      <MdxParagraph>
        <MdxCode>{props.component}</MdxCode> is a{' '}
        <MdxLink href="/guides/polymorphic/">polymorphic component</MdxLink> – its default root
        element is <MdxCode>{props.defaultElement}</MdxCode>, but it can be changed to any other
        element or component with <MdxCode>component</MdxCode> prop:
      </MdxParagraph>

      <MdxCodeHighlight code={getElementCode(props)} />
      {props.withNext && (
        <>
          <MdxParagraph>
            You can also use components in <MdxCode>component</MdxCode> prop, for example, Next.js{' '}
            <MdxCode>Link</MdxCode>:
          </MdxParagraph>
          <MdxCodeHighlight code={getNextLinkCode(props)} />
        </>
      )}

      <MdxInfo icon={<TypeScriptCircleIcon size={32} />} color="#3178C6">
        <MdxParagraph>
          <strong>Polymorphic components with TypeScript</strong>
        </MdxParagraph>

        <MdxParagraph>
          Note that polymorphic components props types are different from regular components – they
          do not extend HTML element props of the default element. For example,{' '}
          <MdxCode>{props.component}Props</MdxCode> does not extend{' '}
          <MdxCode>
            React.ComponentPropsWithoutRef{"'<'"}div{"'>'"}
          </MdxCode>{' '}
          although <MdxCode>{props.defaultElement}</MdxCode> is the default element.
        </MdxParagraph>

        <MdxParagraph>
          If you want to create a wrapper for a polymorphic component that is not polymorphic (does
          not support <MdxCode>component</MdxCode> prop), then your component props interface should
          extend HTML element props, for example:{' '}
        </MdxParagraph>

        <MdxCodeHighlight code={getInterfaceCode(props)} />

        <MdxParagraph>
          If you want your component to remain polymorphic after wrapping, use{' '}
          <MdxCode>createPolymorphicComponent</MdxCode> function described in{' '}
          <MdxLink href="/guides/polymorphic/">this guide</MdxLink>.
        </MdxParagraph>
      </MdxInfo>
    </>
  );
}
