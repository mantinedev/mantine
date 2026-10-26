'use client';

import { useEffect, useRef, useState } from 'react';
import { IconLink, IconList, IconPhoto, IconQuote } from '@tabler/icons-react';
import { ActionIcon, Textarea } from '@mantine/core';
import { type Article, countWords, formatWordCount, htmlToText, type Recipe } from './data';
import { RecipeBlock } from './RecipeBlock';
import layout from './Larder.module.css';
import classes from './Manuscript.module.css';

type ToolCommand = 'bold' | 'italic' | 'h2' | 'link' | 'quote' | 'list' | 'image';
type PressedState = Partial<Record<ToolCommand, boolean>>;

const ICON_PROPS = { size: 18, stroke: 1.75 };

const IMAGE_HTML =
  '<figure contenteditable="false"><div>Drop an image here</div><figcaption>Add a caption</figcaption></figure><p><br></p>';

interface Tool {
  command: ToolCommand;
  label: string;
  icon: React.ReactNode;
  toggle?: boolean;
}

const TOOLS: (Tool | 'separator')[] = [
  { command: 'bold', label: 'Bold', icon: <b>B</b>, toggle: true },
  {
    command: 'italic',
    label: 'Italic',
    icon: <i className={classes.italic}>I</i>,
    toggle: true,
  },
  { command: 'h2', label: 'Heading', icon: 'H2', toggle: true },
  'separator',
  { command: 'link', label: 'Link', icon: <IconLink {...ICON_PROPS} /> },
  {
    command: 'quote',
    label: 'Pull quote',
    icon: <IconQuote {...ICON_PROPS} />,
    toggle: true,
  },
  {
    command: 'list',
    label: 'Bulleted list',
    icon: <IconList {...ICON_PROPS} />,
    toggle: true,
  },
  {
    command: 'image',
    label: 'Insert image',
    icon: <IconPhoto {...ICON_PROPS} />,
  },
];

function currentBlock() {
  return String(document.queryCommandValue('formatBlock') || '').toLowerCase();
}

interface ManuscriptProps {
  article: Article;
  recipe: Recipe;
  onRecipeChange: (recipe: Recipe) => void;
  onArticleChange: (patch: Partial<Article>) => void;
  onEdited: () => void;
  onToast: (text: string) => void;
}

export function Manuscript({
  article,
  recipe,
  onRecipeChange,
  onArticleChange,
  onEdited,
  onToast,
}: ManuscriptProps) {
  const proseRef = useRef<HTMLDivElement>(null);
  const [body] = useState(article.body);
  const [pressed, setPressed] = useState<PressedState>({});
  const [words, setWords] = useState(() =>
    countWords([article.title, article.standfirst, htmlToText(article.body)].join(' '))
  );

  const recount = (title = article.title, standfirst = article.standfirst) =>
    setWords(countWords([title, standfirst, proseRef.current?.innerText ?? ''].join(' ')));

  const syncTools = () => {
    const block = currentBlock();
    setPressed({
      bold: document.queryCommandState('bold'),
      italic: document.queryCommandState('italic'),
      list: document.queryCommandState('insertUnorderedList'),
      h2: block === 'h2',
      quote: block === 'blockquote',
    });
  };

  useEffect(() => {
    const handleSelectionChange = () => {
      const anchor = document.getSelection()?.anchorNode;
      if (anchor && proseRef.current?.contains(anchor)) {
        syncTools();
      }
    };
    document.addEventListener('selectionchange', handleSelectionChange);
    return () => document.removeEventListener('selectionchange', handleSelectionChange);
  }, []);

  const proseEdited = () => {
    recount();
    onEdited();
  };

  const runTool = (command: ToolCommand) => {
    const prose = proseRef.current;
    const selection = document.getSelection();
    if (!prose || !selection) {
      return;
    }

    if (!selection.anchorNode || !prose.contains(selection.anchorNode)) {
      prose.focus();
      const range = document.createRange();
      range.selectNodeContents(prose);
      range.collapse(false);
      selection.removeAllRanges();
      selection.addRange(range);
    }

    const block = currentBlock();
    if (command === 'bold' || command === 'italic') {
      document.execCommand(command);
    } else if (command === 'h2') {
      document.execCommand('formatBlock', false, block === 'h2' ? 'p' : 'h2');
    } else if (command === 'quote') {
      document.execCommand('formatBlock', false, block === 'blockquote' ? 'p' : 'blockquote');
    } else if (command === 'list') {
      document.execCommand('insertUnorderedList');
    } else if (command === 'link') {
      if (selection.isCollapsed) {
        onToast('Select some text to link');
        return;
      }
      document.execCommand('createLink', false, 'https://larder.co.uk/recipes/quince-jelly');
    } else {
      document.execCommand('insertHTML', false, IMAGE_HTML);
    }

    syncTools();
    proseEdited();
  };

  return (
    <main className={layout.manuscript}>
      <div className={classes.toolbar} role="toolbar" aria-label="Formatting">
        {TOOLS.map((tool, index) =>
          tool === 'separator' ? (
            <span key={index} className={classes.separator} />
          ) : (
            <ActionIcon
              key={tool.command}
              variant="subtle"
              size={32}
              className={classes.tool}
              aria-label={tool.label}
              aria-pressed={tool.toggle ? !!pressed[tool.command] : undefined}
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => runTool(tool.command)}
            >
              {tool.icon}
            </ActionIcon>
          )
        )}
        <span className={classes.count}>{formatWordCount(words)}</span>
      </div>

      <article className={classes.sheet}>
        <div className={classes.kicker}>{article.section}</div>
        <Textarea
          variant="unstyled"
          autosize
          minRows={1}
          aria-label="Title"
          value={article.title}
          onChange={(event) => {
            const title = event.currentTarget.value;
            onArticleChange({ title });
            recount(title);
          }}
          classNames={{ root: classes.titleRoot, input: classes.titleField }}
        />
        <Textarea
          variant="unstyled"
          autosize
          minRows={1}
          aria-label="Standfirst"
          value={article.standfirst}
          onChange={(event) => {
            const standfirst = event.currentTarget.value;
            onArticleChange({ standfirst });
            recount(undefined, standfirst);
          }}
          classNames={{
            root: classes.standfirstRoot,
            input: classes.standfirst,
          }}
        />
        <div className={classes.byline}>
          By <b>{article.author}</b>
          <span>Photographs by Ruth Osei</span>
        </div>
        <div
          ref={proseRef}
          className={classes.prose}
          contentEditable
          role="textbox"
          aria-multiline="true"
          aria-label="Article text"
          tabIndex={0}
          onInput={proseEdited}
          dangerouslySetInnerHTML={{ __html: body }}
        />

        {article.recipe && (
          <RecipeBlock
            recipe={recipe}
            onChange={onRecipeChange}
            onRemove={() => onArticleChange({ recipe: false })}
          />
        )}
      </article>
    </main>
  );
}
