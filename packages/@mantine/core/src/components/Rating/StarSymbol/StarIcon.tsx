export function StarIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  const { width, height, style, ...others } = props;
  return (
    <svg
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width, height, ...style }}
      {...others}
    >
      <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
    </svg>
  );
}

StarIcon.displayName = '@mantine/core/StarIcon';
