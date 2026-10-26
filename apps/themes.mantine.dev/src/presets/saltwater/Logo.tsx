import classes from './Saltwater.module.css';

interface LogoProps {
  withDivider?: boolean;
}

export function Logo({ withDivider }: LogoProps) {
  return (
    <a className={classes.logo} href="#" onClick={(event) => event.preventDefault()}>
      <svg viewBox="0 0 34 34" aria-hidden="true">
        <rect x="1" y="7" width="32" height="20" rx="4" fill="#fff" />
        <circle cx="1" cy="17" r="3.5" fill="var(--sw-band)" />
        <circle cx="33" cy="17" r="3.5" fill="var(--sw-band)" />
        <path
          d="M8 18c2.5-3 5-3 7.5 0s5 3 7.5 0 3.5-2 4-1.5"
          fill="none"
          stroke="#0b4a5a"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        {withDivider && (
          <path d="M24 9.5v15" stroke="#b5c7ca" strokeWidth="1.5" strokeDasharray="2 2" />
        )}
      </svg>
      Saltwater Pass
    </a>
  );
}
