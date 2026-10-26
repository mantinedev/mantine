import classes from './Partners.module.css';

export function Partners() {
  return (
    <div className={classes.root} id="about">
      <p className={classes.intro}>Working alongside</p>
      <div className={classes.list}>
        <a
          className={`${classes.logo} ${classes.lothian}`}
          href="#"
          aria-label="Lothian Waterways Trust"
        >
          <svg viewBox="0 0 48 48" aria-hidden>
            <rect x="4" y="6" width="5" height="34" rx="1" />
            <rect x="39" y="6" width="5" height="34" rx="1" />
            <path d="M9 29 24 17.5 39 29v7L24 24.5 9 36z" />
            <path
              d="M6 44c3-2.4 6-2.4 9 0s6 2.4 9 0 6-2.4 9 0 6 2.4 9 0"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
          <span>
            <b>Lothian</b>
            <span>Waterways Trust</span>
          </span>
        </a>
        <a
          className={`${classes.logo} ${classes.council}`}
          href="#"
          aria-label="Wester Hailes Community Council"
        >
          <svg viewBox="0 0 48 48" aria-hidden>
            <path d="M6 33a18 18 0 0 1 36 0h-6a12 12 0 0 0-24 0z" />
            <rect x="2" y="33" width="44" height="4.5" rx="1" />
            <rect x="9" y="37.5" width="4" height="5" />
            <rect x="35" y="37.5" width="4" height="5" />
            <path d="M15 45h18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          </svg>
          <span>
            <b>Wester Hailes</b>
            <span>Community Council</span>
          </span>
        </a>
        <a
          className={`${classes.logo} ${classes.boatClub}`}
          href="#"
          aria-label="Edinburgh Canal Boat Club"
        >
          <svg viewBox="0 0 48 48" aria-hidden>
            <circle cx="24" cy="24" r="21" fill="none" stroke="currentColor" strokeWidth="3" />
            <path
              fillRule="evenodd"
              d="M10 23.5h27v6H10zm3.5 1.8v2.6h3.5v-2.6zm6 0v2.6h3.5v-2.6zm6 0v2.6h3.5v-2.6z"
            />
            <path d="M6 29.5h36l-2.5 4.5h-31z" />
            <rect x="33.5" y="19" width="2.6" height="4.5" />
            <path d="M9 15v8.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M9 15l6 2.2-6 2.2z" />
            <path
              d="M11 38.5c2.2-1.6 4.4-1.6 6.6 0s4.4 1.6 6.6 0 4.4-1.6 6.6 0"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </svg>
          <span>
            <span>Edinburgh</span>
            <b>Canal Boat Club</b>
          </span>
        </a>
        <a
          className={`${classes.logo} ${classes.heritage}`}
          href="#"
          aria-label="Heritage Crafts Fund"
        >
          <svg viewBox="0 0 48 48" aria-hidden>
            <path fillRule="evenodd" d="M24 3 45 24 24 45 3 24zm0 8L11 24l13 13 13-13z" />
            <path d="M24 18l6 6-6 6-6-6z" />
          </svg>
          <span>
            Heritage
            <br />
            Crafts Fund
          </span>
        </a>
      </div>
    </div>
  );
}
