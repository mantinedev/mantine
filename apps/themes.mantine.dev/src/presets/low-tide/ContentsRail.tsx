import { IconBookmark, IconLink } from '@tabler/icons-react';
import { ActionIcon, TableOfContents } from '@mantine/core';
import { contents } from './data';
import { TextSizeControl } from './ReaderTools';
import classes from './Prose.module.css';

interface ContentsRailProps {
  readingSize: string;
  onReadingSizeChange: (value: string) => void;
  saved: boolean;
  onCopyLink: () => void;
  onToggleSaved: () => void;
}

const ICON_PROPS = { size: 18, stroke: 1.75 };

export function ContentsRail({
  readingSize,
  onReadingSizeChange,
  saved,
  onCopyLink,
  onToggleSaved,
}: ContentsRailProps) {
  return (
    <aside className={classes.rail} aria-label="Contents">
      <p className={classes.railTitle}>In this article</p>
      <TableOfContents
        component="nav"
        aria-label="In this article"
        initialData={contents.map((item) => ({
          depth: 1,
          value: item.label,
          id: item.id,
        }))}
        scrollSpyOptions={{ selector: '[data-lt-heading]', offset: 140 }}
        getControlProps={({ data }) => ({
          component: 'a',
          href: `#${data.id}`,
          children: data.value,
        })}
      />

      <div className={classes.readerTools}>
        <span className={classes.toolLabel}>Text size</span>
        <TextSizeControl value={readingSize} onChange={onReadingSizeChange} />
        <span className={classes.toolLabel}>Share</span>
        <div className={classes.share}>
          <ActionIcon size={34} onClick={onCopyLink} aria-label="Copy link">
            <IconLink {...ICON_PROPS} />
          </ActionIcon>
          <ActionIcon
            size={34}
            variant={saved ? 'filled' : 'default'}
            onClick={onToggleSaved}
            aria-label="Save for later"
            aria-pressed={saved}
          >
            <IconBookmark {...ICON_PROPS} />
          </ActionIcon>
        </div>
      </div>
    </aside>
  );
}
