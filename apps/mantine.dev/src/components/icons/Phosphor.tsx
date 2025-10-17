// Icons from https://phosphoricons.com/
// Used on mantine.dev, not installed as a dependency to prevent autocomplete pollution

interface PhosphorIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

function PhosphorIconSvg(props: PhosphorIconProps & { children?: React.ReactNode }) {
  const { size, width, height, ...others } = props;
  const sizeValue = size !== undefined ? size : '1em';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width={width || sizeValue}
      height={height || sizeValue}
      {...others}
    />
  );
}

export function MagnifyingGlassIcon(props: PhosphorIconProps) {
  return (
    <PhosphorIconSvg {...props}>
      <path fill="none" d="M0 0h256v256H0z" />
      <circle
        cx="112"
        cy="112"
        r="80"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        d="M168.57 168.57L224 224"
      />
    </PhosphorIconSvg>
  );
}
