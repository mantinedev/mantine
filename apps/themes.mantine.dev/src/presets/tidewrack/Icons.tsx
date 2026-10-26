import type { GenreId } from './data';

const GENRE_PATHS: Record<GenreId, React.ReactNode> = {
  folk: <circle cx="6" cy="6" r="5" />,
  indie: <rect x="1.5" y="1.5" width="9" height="9" />,
  electronic: <path d="M6 1l5 9.5H1z" />,
  soul: <path d="M6 .8 11.2 6 6 11.2.8 6z" />,
  hiphop: <path d="M3.2 1h5.6L11.6 6l-2.8 5H3.2L.4 6z" />,
  words: <path d="M1 2h10v6H6l-3 3V8H1z" />,
};

interface GenreIconProps {
  genre: GenreId;
  size?: number;
}

export function GenreIcon({ genre, size = 12 }: GenreIconProps) {
  return (
    <svg
      viewBox="0 0 12 12"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
      style={{ flex: 'none' }}
    >
      {GENRE_PATHS[genre]}
    </svg>
  );
}
