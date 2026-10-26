'use client';

import { useMemo, useRef, useState } from 'react';
import { Overlay, Transition } from '@mantine/core';
import { useWindowEvent } from '@mantine/hooks';
import { PresetFrame } from '@/components/PresetFrame';
import { PresetProvider } from '@/components/PresetProvider';
import { ArticleList } from './ArticleList';
import { type Article, type ArticleStatus, initialArticles, initialRecipe } from './data';
import { Manuscript } from './Manuscript';
import { Masthead } from './Masthead';
import { PublishPanel } from './PublishPanel';
import { cssVariablesResolver, theme } from './theme';
import classes from './Larder.module.css';

const FONTS_URL =
  'https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:wght@400;500;600;700&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;0,8..60,700;1,8..60,400&display=swap';

type Panel = 'list' | 'publish' | null;

function savedLabel(id: string) {
  return id === 'quince' ? 'Saved 2 minutes ago' : 'Saved';
}

function Editor() {
  const [articles, setArticles] = useState(initialArticles);
  const [recipe, setRecipe] = useState(initialRecipe);
  const [status, setStatus] = useState<ArticleStatus>('draft');
  const [query, setQuery] = useState('');
  const [selectedId, setSelectedId] = useState('quince');
  const [panel, setPanel] = useState<Panel>(null);
  const [saving, setSaving] = useState(false);
  const [saveText, setSaveText] = useState(savedLabel('quince'));
  const [toast, setToast] = useState<string | null>(null);
  const saveTimeout = useRef<number>(undefined);
  const toastTimeout = useRef<number>(undefined);

  const article = useMemo(
    () => articles.find((item) => item.id === selectedId) ?? articles[0],
    [articles, selectedId]
  );

  useWindowEvent('keydown', (event) => {
    if (event.key === 'Escape') {
      setPanel(null);
    }
  });

  const markEdited = () => {
    setSaving(true);
    setSaveText('Saving');
    window.clearTimeout(saveTimeout.current);
    saveTimeout.current = window.setTimeout(() => {
      setSaving(false);
      setSaveText('Saved just now');
    }, 900);
  };

  const showToast = (text: string) => {
    setToast(text);
    window.clearTimeout(toastTimeout.current);
    toastTimeout.current = window.setTimeout(() => setToast(null), 2600);
  };

  const updateArticle = (patch: Partial<Article>, edited = true) => {
    setArticles((current) =>
      current.map((item) => (item.id === article.id ? { ...item, ...patch } : item))
    );
    if (edited) {
      markEdited();
    }
  };

  const selectArticle = (id: string) => {
    window.clearTimeout(saveTimeout.current);
    setSelectedId(id);
    setSaving(false);
    setSaveText(savedLabel(id));
    setPanel(null);
  };

  const togglePanel = (target: Exclude<Panel, null>) =>
    setPanel((current) => (current === target ? null : target));

  return (
    <div className={classes.root} data-panel={panel ?? undefined}>
      <Masthead
        crumb={article.crumb}
        saving={saving}
        saveText={saveText}
        panel={panel}
        onTogglePanel={togglePanel}
      />

      <div className={classes.body}>
        <ArticleList
          articles={articles}
          status={status}
          onStatusChange={setStatus}
          query={query}
          onQueryChange={setQuery}
          selectedId={article.id}
          onSelect={selectArticle}
        />

        <Manuscript
          key={article.id}
          article={article}
          recipe={recipe}
          onRecipeChange={(value) => {
            setRecipe(value);
            markEdited();
          }}
          onArticleChange={updateArticle}
          onEdited={markEdited}
          onToast={showToast}
        />

        <PublishPanel
          article={article}
          onArticleChange={updateArticle}
          onClose={() => setPanel(null)}
          onToast={showToast}
        />
      </div>

      {panel && <Overlay className={classes.scrim} onClick={() => setPanel(null)} zIndex={9} />}

      <Transition mounted={toast !== null} transition="fade-up" duration={140}>
        {(styles) => (
          <div className={classes.toast} style={styles} role="status">
            <span className={classes.toastMark} aria-hidden="true" />
            {toast}
          </div>
        )}
      </Transition>
    </div>
  );
}

export function Larder() {
  return (
    <>
      <link rel="stylesheet" href={FONTS_URL} precedence="default" />
      <PresetProvider theme={theme} cssVariablesResolver={cssVariablesResolver}>
        <PresetFrame>
          <Editor />
        </PresetFrame>
      </PresetProvider>
    </>
  );
}
