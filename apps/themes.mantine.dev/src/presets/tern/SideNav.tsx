import { Badge, NavLink } from '@mantine/core';
import { navGroups, type NavItem } from './data';
import classes from './SideNav.module.css';

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

function NavItemLink({ item, nested }: { item: NavItem; nested?: boolean }) {
  return (
    <NavLink
      href="#"
      label={item.label}
      active={item.active}
      aria-current={item.active ? 'page' : undefined}
      onClick={preventDefault}
      className={nested ? classes.nested : undefined}
      rightSection={
        item.method && (
          <Badge variant="default" className={classes.method}>
            {item.method}
          </Badge>
        )
      }
    />
  );
}

export function SideNav({ className }: { className?: string }) {
  return (
    <nav className={className} aria-label="Documentation">
      {navGroups.map((group) => (
        <NavLink
          key={group.label}
          component="button"
          label={group.label}
          defaultOpened={group.opened}
          childrenOffset="xs"
          className={classes.group}
          classNames={{ collapse: classes.collapse }}
        >
          {group.items.map((item) => (
            <NavItemLink key={item.label} item={item} />
          ))}
          {group.endpoints && (
            <>
              <span className={classes.sub}>Endpoints</span>
              <div className={classes.subList}>
                {group.endpoints.map((item) => (
                  <NavItemLink key={item.label} item={item} nested />
                ))}
              </div>
            </>
          )}
          {group.after?.map((item) => (
            <NavItemLink key={item.label} item={item} />
          ))}
        </NavLink>
      ))}
    </nav>
  );
}
