import { IconPlus } from '@tabler/icons-react';
import { Button, NavLink, SegmentedControl, TextInput, Title } from '@mantine/core';
import { type Article, type ArticleStatus, STATUSES } from './data';
import { StatusMark } from './StatusMark';
import classes from './ArticleList.module.css';
import layout from './Larder.module.css';

interface ArticleListProps {
  articles: Article[];
  status: ArticleStatus;
  onStatusChange: (status: ArticleStatus) => void;
  query: string;
  onQueryChange: (query: string) => void;
  selectedId: string;
  onSelect: (id: string) => void;
}

export function ArticleList({
  articles,
  status,
  onStatusChange,
  query,
  onQueryChange,
  selectedId,
  onSelect,
}: ArticleListProps) {
  const search = query.trim().toLowerCase();
  const visible = articles.filter(
    (article) =>
      article.status === status && (!search || article.title.toLowerCase().includes(search))
  );

  return (
    <section className={layout.listPane} aria-label="Articles">
      <div className={classes.top}>
        <div className={classes.titleRow}>
          <Title order={1}>Articles</Title>
          <Button variant="default" size="xs" leftSection={<IconPlus size={16} stroke={1.75} />}>
            New
          </Button>
        </div>
        <TextInput
          type="search"
          placeholder="Search titles"
          aria-label="Search articles"
          value={query}
          onChange={(event) => onQueryChange(event.currentTarget.value)}
        />
        <SegmentedControl
          fullWidth
          aria-label="Status"
          className={classes.status}
          value={status}
          onChange={onStatusChange}
          data={STATUSES.map((item) => ({
            value: item.value,
            label: (
              <>
                {item.label}
                <span className={classes.count}>
                  {articles.filter((article) => article.status === item.value).length}
                </span>
              </>
            ),
          }))}
        />
      </div>

      <ul className={classes.list}>
        {visible.length === 0 ? (
          <li className={classes.empty}>Nothing here. Try another status or clear the search.</li>
        ) : (
          visible.map((article) => (
            <li key={article.id}>
              <NavLink
                component="button"
                variant="rail"
                active={article.id === selectedId}
                aria-current={article.id === selectedId}
                onClick={() => onSelect(article.id)}
                classNames={{
                  root: classes.article,
                  label: classes.articleTitle,
                  description: classes.articleMeta,
                }}
                label={article.title}
                description={
                  <>
                    <StatusMark status={article.status} />
                    <span>
                      {article.section}, {article.when}
                    </span>
                  </>
                }
              />
            </li>
          ))
        )}
      </ul>
    </section>
  );
}
