import classes from './PageHeaderLink.module.css';

interface PageHeaderLinkProps {
  link?: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

export function PageHeaderLink({ icon, children, link }: PageHeaderLinkProps) {
  const content = link ? (
    <a href={link} target="_blank" className={classes.body} rel="noreferrer">
      <div className={classes.icon}>{icon}</div>
      <div className={classes.content}>{children}</div>
    </a>
  ) : (
    <div className={classes.body}>
      <div className={classes.icon}>{icon}</div>
      <div className={classes.content}>{children}</div>
    </div>
  );

  return <div className={classes.root}>{content}</div>;
}
