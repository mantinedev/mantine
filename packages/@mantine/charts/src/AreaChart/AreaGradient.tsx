interface AreaGradientProps {
  color: string;
  id: string;
  withGradient: boolean | undefined;
  fillOpacity: number | undefined;
}

export function AreaGradient({ color, id, withGradient, fillOpacity }: AreaGradientProps) {
  return (
    <>
      {withGradient ? (
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity={fillOpacity} />
          <stop offset="100%" stopColor={color} stopOpacity={0.01} />
        </linearGradient>
      ) : (
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop stopColor={color} stopOpacity={fillOpacity ?? 0.2} />
        </linearGradient>
      )}
    </>
  );
}

AreaGradient.displayName = '@mantine/charts/AreaGradient';
