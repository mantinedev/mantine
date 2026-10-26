import classes from './Message.module.css';

const LINE = { stroke: 'currentColor', strokeWidth: 1.5, fill: 'none' } as const;
const THIN = {
  stroke: 'currentColor',
  strokeWidth: 1,
  fill: 'none',
  strokeDasharray: '3 3',
} as const;

const BOARDS = [
  {
    id: '42A',
    title: 'Wide',
    art: (
      <>
        <path d="M0 52 L140 40" {...LINE} />
        <path d="M8 79 C 40 60 70 56 140 50" {...LINE} strokeDasharray="4 3" />
        <rect x="112" y="18" width="7" height="24" {...LINE} />
        <path d="M110 18h11l-5.5-6z" fill="currentColor" />
        <circle cx="46" cy="58" r="2.5" fill="currentColor" />
        <path d="M46 60.5v7" {...LINE} />
      </>
    ),
  },
  {
    id: '42B',
    title: 'Medium',
    art: (
      <>
        <circle cx="70" cy="26" r="9" {...LINE} />
        <path d="M58 79 C 60 50 80 50 82 79" {...LINE} />
        <path d="M0 64 C 40 58 100 60 140 54" {...THIN} />
        <path d="M96 20 l14 0 M100 26 l14 0" {...LINE} strokeWidth={1.2} />
      </>
    ),
  },
  {
    id: '42C',
    title: 'Close',
    art: (
      <>
        <path d="M0 46 H140" {...LINE} strokeWidth={5} />
        <path d="M50 46 c0-10 4-16 10-16 s8 4 8 8 c4-2 8 0 8 4 c4-1 8 1 8 4" {...LINE} />
        <path d="M60 46 v20 M74 46 v18" {...LINE} />
      </>
    ),
  },
  {
    id: '42D',
    title: 'Reveal',
    art: (
      <>
        <rect x="62" y="14" width="16" height="56" {...LINE} />
        <path d="M60 14h20l-10-10z" fill="currentColor" />
        <path d="M78 18 L140 6 M78 22 L140 30" {...THIN} />
        <path d="M62 18 L0 6 M62 22 L0 30" {...THIN} />
        <path d="M0 72 H140" {...LINE} />
      </>
    ),
  },
];

export function Boards() {
  return (
    <div className={classes.boards}>
      {BOARDS.map((board) => (
        <figure key={board.id} className={classes.board}>
          <svg
            viewBox="0 0 140 79"
            role="img"
            aria-label={`Storyboard ${board.id}, ${board.title}`}
          >
            {board.art}
          </svg>
          <figcaption>
            <b>{board.id}</b>
            <span>{board.title}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
