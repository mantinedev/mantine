import { useRouter } from 'next/router';
import cx from 'clsx';
import { CodeHighlightTabs } from '@mantine/code-highlight';
import { RemoveScroll, Text } from '@mantine/core';
import { getCodeFileIcon } from '@mantinex/dev-icons';
import { FORM_EXAMPLES_COMPONENTS, FormExampleId } from '../examples';
import { FORM_EXAMPLES_DATA } from '../form-examples-data';
import classes from './FormExamplesDemo.module.css';

export function FormExamplesDemo() {
  const router = useRouter();
  const id = router.query.e as FormExampleId;
  const codeData = FORM_EXAMPLES_COMPONENTS[id];
  const metaData = FORM_EXAMPLES_DATA.find((item) => item.id === id);

  if (!codeData || !metaData) {
    return null;
  }

  return (
    <div className={classes.root}>
      <div className={cx(classes.preview, RemoveScroll.classNames.zeroRight)}>
        <div className={classes.header}>
          <Text className={classes.title}>{metaData.name}</Text>
          <Text className={classes.description}>
            {metaData.fullDescription || metaData.description}
          </Text>
        </div>
        <div className={classes.inner}>
          <div
            className={classes.wrapper}
            key={id}
            data-full-width={metaData.fullWidth || undefined}
          >
            <codeData.component />
          </div>
        </div>
      </div>
      <div className={classes.code}>
        <CodeHighlightTabs key={id} code={codeData.code} getFileIcon={getCodeFileIcon} />
      </div>
    </div>
  );
}
