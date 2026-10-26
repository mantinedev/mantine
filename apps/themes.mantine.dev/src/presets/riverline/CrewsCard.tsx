import { Avatar, Badge, Button, Paper, Progress, Text } from '@mantine/core';
import { CardHead } from './CardHead';
import { crews, crewStatus } from './data';
import classes from './Riverline.module.css';

export function CrewsCard() {
  return (
    <Paper component="section" aria-labelledby="crews-title" className={classes.listCard}>
      <CardHead id="crews-title" title="Crews on shift" description="Vans out until 18:00">
        <Button variant="default" size="xs">
          View map
        </Button>
      </CardHead>

      <ul className={classes.list}>
        {crews.map((crew) => (
          <li key={crew.name} className={classes.crew}>
            <Avatar>{crew.initials}</Avatar>
            <div>
              <div className={classes.itemName}>{crew.name}</div>
              <Text size="sm">{crew.van}</Text>
            </div>
            <Badge variant="dot" color={crewStatus[crew.status].color}>
              {crewStatus[crew.status].label}
            </Badge>
            <div className={classes.route}>
              {crew.total ? (
                <>
                  <Progress
                    value={(crew.done / crew.total) * 100}
                    size={8}
                    className={classes.routeProgress}
                  />
                  <span className={classes.routeCount}>
                    {crew.done} of {crew.total} stops
                  </span>
                </>
              ) : (
                <span>{crew.note}</span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </Paper>
  );
}
