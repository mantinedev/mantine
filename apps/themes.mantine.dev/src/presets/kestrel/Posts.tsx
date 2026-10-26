'use client';

import { useState } from 'react';
import { IconLayoutGrid, IconList, IconSearch } from '@tabler/icons-react';
import { ActionIcon, Button, Text, TextInput, Title } from '@mantine/core';
import { AuthorAvatar } from './AuthorAvatar';
import { ContourCover } from './ContourCover';
import { AUTHORS, POSTS, TOPICS } from './data';
import classes from './Posts.module.css';

const PAGE = 8;

type Topic = (typeof TOPICS)[number];
type View = 'list' | 'grid';

export function Posts() {
  const [topic, setTopic] = useState<Topic>('All');
  const [query, setQuery] = useState('');
  const [shown, setShown] = useState(PAGE);
  const [view, setView] = useState<View>('list');

  const needle = query.trim().toLowerCase();
  const matches = POSTS.filter(
    (post) =>
      (topic === 'All' || post.topic === topic) &&
      (!needle || post.title.toLowerCase().includes(needle))
  );
  const visible = matches.slice(0, shown);
  const filtered = topic !== 'All' || needle !== '';

  const selectTopic = (value: Topic) => {
    setTopic(value);
    setShown(PAGE);
  };

  const clear = () => {
    setTopic('All');
    setQuery('');
    setShown(PAGE);
  };

  return (
    <section aria-labelledby="kestrel-posts-title" className={classes.root}>
      <Title order={2} id="kestrel-posts-title" className={classes.hidden}>
        All posts
      </Title>

      <div className={classes.toolbar}>
        <div className={classes.chips} role="group" aria-label="Topic">
          {TOPICS.map((item) => (
            <Button
              key={item}
              variant="default"
              size="xs"
              className={classes.chip}
              aria-pressed={item === topic}
              onClick={() => selectTopic(item)}
              rightSection={
                <span className={classes.count}>
                  {item === 'All' ? POSTS.length : POSTS.filter((p) => p.topic === item).length}
                </span>
              }
            >
              {item}
            </Button>
          ))}
        </div>

        <TextInput
          type="search"
          size="xs"
          className={classes.search}
          placeholder="Search titles"
          aria-label="Search posts by title"
          leftSection={<IconSearch size={16} stroke={1.75} />}
          leftSectionWidth={34}
          value={query}
          onChange={(event) => {
            setQuery(event.currentTarget.value);
            setShown(PAGE);
          }}
        />

        <ActionIcon.Group role="group" aria-label="Layout" className={classes.view}>
          <ActionIcon
            size={34}
            aria-label="List view"
            aria-pressed={view === 'list'}
            onClick={() => setView('list')}
          >
            <IconList size={18} stroke={1.75} />
          </ActionIcon>
          <ActionIcon
            size={34}
            aria-label="Grid view"
            aria-pressed={view === 'grid'}
            onClick={() => setView('grid')}
          >
            <IconLayoutGrid size={18} stroke={1.75} />
          </ActionIcon>
        </ActionIcon.Group>
      </div>

      {filtered && matches.length > 0 && (
        <div className={classes.resultLine}>
          {matches.length} {matches.length === 1 ? 'post' : 'posts'}
          {topic !== 'All' && ` in ${topic}`}
          {needle && ` matching “${query.trim()}”`}
        </div>
      )}

      {matches.length > 0 ? (
        <ul className={classes.posts} data-view={view}>
          {visible.map((post) => (
            <li key={post.title} className={classes.post}>
              {view === 'grid' && (
                <ContourCover
                  seed={post.seed}
                  withRoute={post.topic === 'Mobile'}
                  width={480}
                  height={270}
                  className={classes.thumb}
                />
              )}
              <div className={classes.date}>{post.date}</div>
              <div>
                <Title order={3} className={classes.postTitle}>
                  <a href="#" onClick={(event) => event.preventDefault()}>
                    {post.title}
                  </a>
                </Title>
                <Text className={classes.excerpt}>{post.excerpt}</Text>
                <div className={classes.by}>
                  <AuthorAvatar code={post.author} size={24} className={classes.byAvatar} />
                  <b>{AUTHORS[post.author].name}</b>
                  {view === 'grid' && <span>{post.date}</span>}
                </div>
              </div>
              <div className={classes.side}>
                <span className={classes.topic}>{post.topic}</span>
                <span>{post.minutes} min read</span>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className={classes.empty}>
          <b>No posts match</b>
          <Text size="sm">
            Try another topic, or search for a shorter word like “tiles” or “GPS”.
          </Text>
          <Button variant="default" onClick={clear}>
            Clear filters
          </Button>
        </div>
      )}

      {matches.length > shown && (
        <div className={classes.more}>
          <Button variant="default" onClick={() => setShown((value) => value + 4)}>
            Load more posts
          </Button>
          <span>
            Showing {visible.length} of {matches.length}
          </span>
        </div>
      )}
    </section>
  );
}
