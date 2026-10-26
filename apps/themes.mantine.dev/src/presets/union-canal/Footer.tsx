import classes from './Footer.module.css';

const columns = [
  {
    title: 'Get involved',
    links: [
      { label: 'Donate', href: '#donate' },
      { label: 'Volunteer', href: '#volunteer' },
      { label: 'Leave a gift in your will', href: '#' },
    ],
  },
  {
    title: 'About us',
    links: [
      { label: 'Our history', href: '#' },
      { label: 'Trustees and accounts', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
];

export function Footer() {
  return (
    <footer className={classes.root}>
      <div className={classes.brand}>
        <a className={classes.logo} href="#">
          Friends of the Union Canal
        </a>
        <p>
          A volunteer charity looking after the canal between Edinburgh and the Falkirk Wheel since
          1987.
        </p>
      </div>
      {columns.map((column) => (
        <div key={column.title}>
          <h4 className={classes.heading}>{column.title}</h4>
          <ul className={classes.links}>
            {column.links.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <p className={classes.credits}>
        Photos from Wikimedia Commons: Fountainbridge by McPhail (CC0); Wester Hailes by Clive
        Nicholson, Waterwitch by Ian S (both CC BY-SA 2.0, via geograph.org.uk); Kingsknowe by
        Rosser1954 (CC BY-SA 4.0); Edinburgh Quay by Kim Traynor (CC BY-SA 3.0).
      </p>
      <div className={classes.legal}>
        <span>Scottish charity SC041871</span>
        <span>Registered office: 14 Gilmore Park, Edinburgh</span>
      </div>
    </footer>
  );
}
