import { Sparkline } from '@mantine/charts';
import { Badge, Paper, Progress, Stat, Text } from '@mantine/core';
import { ridesToday } from './data';
import classes from './KpiStrip.module.css';

export function KpiStrip() {
  return (
    <Paper component="section" aria-label="Summary" className={classes.root}>
      <Stat className={classes.kpi} classNames={{ body: classes.body }}>
        <Stat.Label>Rides so far</Stat.Label>
        <div className={classes.row}>
          <Stat.Value>8,642</Stat.Value>
          <Sparkline
            className={classes.spark}
            w={104}
            h={36}
            data={ridesToday}
            color="var(--mantine-primary-color-filled)"
            curveType="linear"
            fillOpacity={0.1}
            strokeWidth={2}
            aria-hidden
          />
        </div>
        <Text size="sm" component="div" className={classes.note}>
          <Stat.Diff value={6.4} formatter={(value) => `${value}%`} /> vs last Tuesday
        </Text>
      </Stat>

      <Stat className={classes.kpi} classNames={{ body: classes.body }}>
        <Stat.Label>Bikes in service</Stat.Label>
        <Stat.Value suffix="of 3,200">2,914</Stat.Value>
        <Progress.Root size={8} className={classes.split} aria-hidden>
          <Progress.Section value={(2140 / 3200) * 100} />
          <Progress.Section value={(774 / 3200) * 100} className={classes.ebikes} />
          <Progress.Section value={(286 / 3200) * 100} className={classes.repair} />
        </Progress.Root>
        <Text size="sm">286 in repair</Text>
      </Stat>

      <Stat className={classes.kpi} classNames={{ body: classes.body }}>
        <Stat.Label>Stations needing a visit</Stat.Label>
        <Stat.Value suffix="of 412">23</Stat.Value>
        <div className={classes.note}>
          <Badge variant="dot" color="red">
            14 empty
          </Badge>
          <Badge variant="dot" color="orange">
            9 full
          </Badge>
        </div>
      </Stat>
    </Paper>
  );
}
