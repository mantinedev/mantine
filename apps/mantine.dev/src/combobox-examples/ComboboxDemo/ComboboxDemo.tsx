import { useRouter } from 'next/router';
import cx from 'clsx';
import { Badge, RemoveScroll, Text } from '@mantine/core';
import { getCodeFileIcon } from '@mantinex/dev-icons';
import { CodeHighlightTabs } from '@mantinex/shiki';
import { COMBOBOX_EXAMPLES_DATA } from '../combobox-examples-data';
import { COMBOBOX_EXAMPLES_COMPONENTS, ComboboxExampleId } from '../examples';
import classes from './ComboboxDemo.module.css';

export function ComboboxDemo() {
  const router = useRouter();
  const id = router.query.e as ComboboxExampleId;
  const codeData = COMBOBOX_EXAMPLES_COMPONENTS[id];
  const metaData = COMBOBOX_EXAMPLES_DATA.find((item) => item.id === id);

  if (!codeData || !metaData) {
    return null;
  }

  return (
    <div className={classes.root}>
      <div className={cx(classes.preview, RemoveScroll.classNames.zeroRight)}>
        <div className={classes.header}>
          <div className={classes.headerBody}>
            <Text className={classes.title}>{metaData.name}</Text>
            <Text className={classes.description}>
              {metaData.fullDescription || metaData.description}
            </Text>
          </div>

          <Badge variant="light">{metaData.type}</Badge>
        </div>
        <div className={classes.inner}>
          <div className={classes.wrapper}>
            <codeData.component />
          </div>
        </div>
      </div>
      <div className={classes.code}>
        <CodeHighlightTabs code={codeData.code} getFileIcon={getCodeFileIcon} />
      </div>
    </div>
  );
}
