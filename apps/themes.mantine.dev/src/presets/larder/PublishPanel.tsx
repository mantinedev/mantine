'use client';

import { useState } from 'react';
import { IconCalendar, IconClock, IconEye, IconX } from '@tabler/icons-react';
import { ActionIcon, Button, Select, TagsInput, Textarea, TextInput, Title } from '@mantine/core';
import { DatePickerInput, TimeInput } from '@mantine/dates';
import {
  type Article,
  AUTHORS,
  MAX_TAGS,
  SECTIONS,
  SEO_DESCRIPTION,
  SEO_TITLE,
  statusText,
} from './data';
import { StatusMark } from './StatusMark';
import layout from './Larder.module.css';
import classes from './PublishPanel.module.css';

const SEO_TITLE_MAX = 60;
const SEO_DESCRIPTION_MAX = 155;

function Counter({ value, max }: { value: string; max: number }) {
  const over = value.length > max;
  return (
    <span className={classes.counter} data-over={over || undefined}>
      {over ? `${value.length - max} over ${max}` : `${value.length} of ${max}`}
    </span>
  );
}

function truncate(value: string, max: number) {
  return value.length > max ? `${value.slice(0, max - 3)}...` : value;
}

interface PublishPanelProps {
  article: Article;
  onArticleChange: (patch: Partial<Article>, edited?: boolean) => void;
  onClose: () => void;
  onToast: (text: string) => void;
}

export function PublishPanel({ article, onArticleChange, onClose, onToast }: PublishPanelProps) {
  const [date, setDate] = useState<string | null>('2026-11-03');
  const [time, setTime] = useState('07:00');
  const [altText, setAltText] = useState('Four roasted quinces in a dark dish with bay leaves');
  const [seoTitle, setSeoTitle] = useState(SEO_TITLE);
  const [seoDescription, setSeoDescription] = useState(SEO_DESCRIPTION);

  const schedule = () => {
    if (article.status === 'published') {
      onToast('Changes are live');
      return;
    }
    const parsed = new Date(`${date}T${time}`);
    const when = Number.isNaN(parsed.getTime())
      ? 'the chosen time'
      : `${parsed.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' })}, ${time}`;
    onArticleChange({ status: 'scheduled', when: `Out ${when}` }, false);
    onToast(`Scheduled for ${when}`);
  };

  const scheduleLabel =
    article.status === 'published'
      ? 'Update'
      : article.status === 'scheduled'
        ? 'Reschedule'
        : 'Schedule';

  return (
    <aside className={layout.publish} aria-label="Publishing">
      <div className={classes.head}>
        <Title order={2}>Publishing</Title>
        <ActionIcon
          variant="subtle"
          size={30}
          className={classes.close}
          aria-label="Close publishing options"
          onClick={onClose}
        >
          <IconX size={18} stroke={1.75} />
        </ActionIcon>
      </div>

      <div className={classes.scroll}>
        <div className={classes.group}>
          <p className={classes.groupTitle}>Status</p>
          <div className={classes.statusLine}>
            <StatusMark status={article.status} />
            <span>{statusText(article)}</span>
          </div>
          <div className={classes.row}>
            <DatePickerInput
              label="Date"
              value={date}
              onChange={setDate}
              valueFormat="DD.MM.YYYY"
              rightSection={<IconCalendar size={16} stroke={1.75} />}
              rightSectionPointerEvents="none"
              popoverProps={{ position: 'bottom-end' }}
            />
            <TimeInput
              label="Time"
              value={time}
              onChange={(event) => setTime(event.currentTarget.value)}
              rightSection={<IconClock size={16} stroke={1.75} />}
              rightSectionPointerEvents="none"
            />
          </div>
        </div>

        <div className={classes.group}>
          <Select
            label="Section"
            data={SECTIONS}
            value={article.section}
            onChange={(value) => value && onArticleChange({ section: value })}
          />
          <Select
            label="Author"
            data={AUTHORS}
            value={article.author}
            onChange={(value) => value && onArticleChange({ author: value })}
          />
        </div>

        <div className={classes.group}>
          <TagsInput
            label={
              <>
                <span>Tags</span>
                <span className={classes.counter}>
                  {article.tags.length} of {MAX_TAGS}
                </span>
              </>
            }
            placeholder="Add a tag"
            value={article.tags}
            onChange={(tags) =>
              onArticleChange({
                tags: tags
                  .map((tag) => tag.toLowerCase())
                  .filter((tag, index, all) => all.indexOf(tag) === index),
              })
            }
            maxTags={MAX_TAGS}
            onMaxTags={() => onToast('Eight tags is the limit')}
            classNames={{
              label: classes.groupLabel,
              input: classes.tags,
              inputField: classes.tagsField,
              pillsList: classes.tagsList,
            }}
          />
        </div>

        <div className={classes.group}>
          <p className={classes.groupTitle}>Lead image</p>
          <div className={classes.hero} aria-hidden="true">
            <svg viewBox="0 0 120 80">
              <ellipse cx="46" cy="44" rx="22" ry="20" fill="var(--mantine-color-default-border)" />
              <ellipse cx="78" cy="48" rx="19" ry="17" fill="var(--mantine-color-border)" />
              <path
                d="M46 24c0-6 3-10 8-12M78 31c1-5 4-8 9-9"
                stroke="var(--mantine-color-bright)"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
              <path d="M54 12c6-1 10 2 12 6-5 1-9-1-12-6z" fill="var(--mantine-color-bright)" />
            </svg>
            <div className={classes.file}>
              <b>quinces-on-slate.jpg</b>
              <span>2400 × 1600</span>
            </div>
          </div>
          <TextInput
            label="Alt text"
            value={altText}
            onChange={(event) => setAltText(event.currentTarget.value)}
          />
        </div>

        <div className={classes.group}>
          <TextInput
            label={
              <>
                <span>Search title</span>
                <Counter value={seoTitle} max={SEO_TITLE_MAX} />
              </>
            }
            value={seoTitle}
            onChange={(event) => setSeoTitle(event.currentTarget.value)}
            classNames={{ label: classes.groupLabel }}
          />
          <Textarea
            label={
              <>
                <span>Search description</span>
                <Counter value={seoDescription} max={SEO_DESCRIPTION_MAX} />
              </>
            }
            rows={3}
            resize="vertical"
            value={seoDescription}
            onChange={(event) => setSeoDescription(event.currentTarget.value)}
            classNames={{ label: classes.groupLabel }}
          />
          <div className={classes.serp} aria-label="Search result preview">
            <div className={classes.serpUrl}>larder.co.uk/recipes/slow-quinces</div>
            <div className={classes.serpTitle}>{truncate(seoTitle, SEO_TITLE_MAX)}</div>
            <div className={classes.serpDescription}>
              {truncate(seoDescription, SEO_DESCRIPTION_MAX)}
            </div>
          </div>
        </div>
      </div>

      <div className={classes.foot}>
        <Button
          variant="default"
          leftSection={<IconEye size={16} stroke={1.75} />}
          onClick={() => onToast('Preview link copied for the subeditors')}
        >
          Preview
        </Button>
        <Button leftSection={<IconClock size={16} stroke={1.75} />} onClick={schedule}>
          {scheduleLabel}
        </Button>
      </div>
    </aside>
  );
}
