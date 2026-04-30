import { useMediaQuery } from './use-media-query';

export default { title: 'useMediaQuery' };

export function Usage() {
  const isSmall = useMediaQuery('(max-width: 600px)');
  const isMedium = useMediaQuery('(min-width: 601px) and (max-width: 1024px)');
  const isLarge = useMediaQuery('(min-width: 1025px)');
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

  return (
    <div style={{ padding: 40 }}>
      <div style={{ fontFamily: 'monospace', lineHeight: 2 }}>
        <div>Small (max-width: 600px): {String(isSmall)}</div>
        <div>Medium (601px - 1024px): {String(isMedium)}</div>
        <div>Large (min-width: 1025px): {String(isLarge)}</div>
        <div>Prefers reduced motion: {String(prefersReducedMotion)}</div>
      </div>
      <p style={{ marginTop: 16 }}>Resize the browser window to see values change.</p>
    </div>
  );
}
