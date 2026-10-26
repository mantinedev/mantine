import { Fragment } from 'react';
import { PEOPLE } from './data';
import classes from './Message.module.css';

const NAMES = Object.values(PEOPLE)
  .filter((person) => !person.app)
  .map((person) => person.name);

const TOKEN = new RegExp(
  `\\*\\*(.+?)\\*\\*|\`(.+?)\`|@(${NAMES.join('|')})|(^|\\s)_(.+?)_(?=\\s|$)`,
  'g'
);

function formatLine(line: string) {
  const nodes: React.ReactNode[] = [];
  let last = 0;

  for (const match of line.matchAll(TOKEN)) {
    const [whole, bold, code, mention, lead, italic] = match;
    const start = match.index ?? 0;
    nodes.push(line.slice(last, start));

    if (bold !== undefined) {
      nodes.push(<b key={start}>{bold}</b>);
    } else if (code !== undefined) {
      nodes.push(<code key={start}>{code}</code>);
    } else if (mention !== undefined) {
      nodes.push(
        <span key={start} className={classes.at}>
          @{mention}
        </span>
      );
    } else {
      nodes.push(lead, <i key={start}>{italic}</i>);
    }

    last = start + whole.length;
  }

  nodes.push(line.slice(last));
  return nodes;
}

export function formatText(text: string) {
  return text.split('\n').map((line, index) => (
    <Fragment key={index}>
      {index > 0 && <br />}
      {formatLine(line)}
    </Fragment>
  ));
}
