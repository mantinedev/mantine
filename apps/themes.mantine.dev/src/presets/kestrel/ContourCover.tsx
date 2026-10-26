import { useMemo } from 'react';
import { generateContourMap } from './contour';
import classes from './ContourCover.module.css';

interface ContourCoverProps {
  seed: number;
  withRoute: boolean;
  width: number;
  height: number;
  className?: string;
  label?: string;
}

export function ContourCover({
  seed,
  withRoute,
  width,
  height,
  className,
  label,
}: ContourCoverProps) {
  const map = useMemo(
    () => generateContourMap(seed, withRoute, width, height),
    [seed, withRoute, width, height]
  );

  return (
    <div
      className={className ? `${classes.root} ${className}` : classes.root}
      role={label ? 'img' : undefined}
      aria-label={label}
    >
      <svg
        viewBox={`0 0 ${map.width} ${map.height}`}
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
        className={classes.svg}
      >
        <rect width={map.width} height={map.height} className={classes.relief} />
        <ellipse {...map.lake} className={classes.water} />
        {map.lines.map((line, index) => (
          <path key={index} d={line.d} className={line.index ? classes.indexLine : classes.line} />
        ))}
        {map.route && (
          <>
            <path d={map.route.d} className={classes.route} />
            <circle
              cx={map.route.start[0]}
              cy={map.route.start[1]}
              r={6}
              className={classes.start}
            />
            <circle cx={map.route.end[0]} cy={map.route.end[1]} r={7} className={classes.end} />
          </>
        )}
      </svg>
    </div>
  );
}
