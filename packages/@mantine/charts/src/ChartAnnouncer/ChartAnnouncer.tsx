import { useEffect, useState } from 'react';
import get from 'es-toolkit/compat/get';
import { createPortal } from 'react-dom';
import { useActiveTooltipDataPoints, useActiveTooltipLabel } from 'recharts';
import { VisuallyHidden } from '@mantine/core';

interface AnnouncementSeries {
  name: string;
  label?: string;
  unit?: string;
  valueFormatter?: (value: number) => string;
}

interface ChartAnnouncerProps {
  series: AnnouncementSeries[];
  labelKey?: string;
  unit?: string;
  valueFormatter?: (value: number) => string;
}

function ActivePoint({ series, labelKey, valueFormatter, unit }: ChartAnnouncerProps) {
  const point = useActiveTooltipDataPoints<Record<string, unknown>>()?.[0];
  const axisLabel = useActiveTooltipLabel();
  const label = labelKey ? get(point, labelKey) : axisLabel;
  const [announcement, setAnnouncement] = useState('');
  const values = point
    ? series.flatMap((item) => {
        const rawValue = get(point, item.name);
        const value = Array.isArray(rawValue)
          ? rawValue.length === 2 && rawValue.every(Number.isFinite)
            ? rawValue[1] - rawValue[0]
            : undefined
          : rawValue;
        if (typeof value !== 'number' && typeof value !== 'string') {
          return [];
        }

        const formatter = item.valueFormatter ?? valueFormatter;
        const formatted = formatter && typeof value === 'number' ? formatter(value) : value;
        return `${item.label ?? item.name}: ${formatted}${item.unit ?? unit ?? ''}`;
      })
    : [];
  const text = point ? [label, ...values].filter((part) => part != null).join(', ') : '';

  useEffect(() => {
    if (text === announcement) {
      return undefined;
    }

    const timeout = window.setTimeout(() => setAnnouncement(text), announcement ? 100 : 300);
    return () => window.clearTimeout(timeout);
  }, [text, announcement]);

  return announcement;
}

export function ChartAnnouncer(props: ChartAnnouncerProps) {
  const [marker, setMarker] = useState<SVGGElement | null>(null);
  const [active, setActive] = useState(false);
  const surface = marker?.ownerSVGElement;

  useEffect(() => {
    if (!surface) {
      return undefined;
    }

    const focus = () => setActive(surface.matches(':focus-visible'));
    const stop = () => setActive(false);
    const keydown = (event: KeyboardEvent) => {
      if (event.target === surface && ['ArrowLeft', 'ArrowRight', 'Enter'].includes(event.key)) {
        setActive(true);
      }
    };
    surface.addEventListener('focus', focus);
    surface.addEventListener('blur', stop);
    surface.addEventListener('pointermove', stop);
    surface.addEventListener('pointerdown', stop);
    surface.addEventListener('keydown', keydown);
    return () => {
      surface.removeEventListener('focus', focus);
      surface.removeEventListener('blur', stop);
      surface.removeEventListener('pointermove', stop);
      surface.removeEventListener('pointerdown', stop);
      surface.removeEventListener('keydown', keydown);
    };
  }, [surface]);

  return (
    <>
      <g ref={setMarker} aria-hidden />
      {surface?.parentElement &&
        createPortal(
          <VisuallyHidden role="status" aria-atomic="true">
            {active && <ActivePoint {...props} />}
          </VisuallyHidden>,
          surface.parentElement
        )}
    </>
  );
}
