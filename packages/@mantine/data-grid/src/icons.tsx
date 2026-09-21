const iconSizeStyle = {
  display: 'block',
  width: 'var(--dg-icon-size)',
  height: 'var(--dg-icon-size)',
} as const;

export function SortIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="none"
      stroke="currentColor"
      strokeWidth="24"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={iconSizeStyle}
    >
      <path d="M128 40v176M56 144l72 72 72-72" />
    </svg>
  );
}

interface MenuIconProps {
  path: string;
}

function MenuIcon({ path }: MenuIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        display: 'block',
        width: '1em',
        height: '1em',
        fontSize: 'var(--mantine-font-size-md)',
      }}
    >
      <path d={path} />
    </svg>
  );
}

export const ArrowUpIcon = () => <MenuIcon path="M12 19V5M5 12l7-7 7 7" />;
export const ArrowDownIcon = () => <MenuIcon path="M12 5v14M19 12l-7 7-7-7" />;
export const ArrowLeftIcon = () => <MenuIcon path="M19 12H5M12 19l-7-7 7-7" />;
export const ArrowRightIcon = () => <MenuIcon path="M5 12h14M12 5l7 7-7 7" />;
export const ClearSortIcon = () => <MenuIcon path="M18 6L6 18M6 6l12 12" />;
export const PinIcon = () => (
  <MenuIcon path="M15 4.5l-4 4-4 1.5-1.5 1.5 7 7 1.5-1.5 1.5-4 4-4M9 15l-4.5 4.5M14.5 4l5.5 5.5" />
);
export const PinOffIcon = () => (
  <MenuIcon path="M3 3l18 18M15 4.5l-3.25 3.25M9.18 9.18l-2.18.82-1.5 1.5 7 7 1.5-1.5.82-2.19M14.82 14.82l3.25-3.25M9 15l-4.5 4.5M14.5 4l5.5 5.5" />
);
export const EyeOffIcon = () => (
  <MenuIcon path="M10.585 10.587a2 2 0 0 0 2.829 2.828M16.681 16.673A8.717 8.717 0 0 1 12 18c-3.6 0-6.6-2-9-6 1.272-2.12 2.712-3.678 4.32-4.674m2.86-1.146A9.055 9.055 0 0 1 12 6c3.6 0 6.6 2 9 6-.666 1.11-1.379 2.067-2.138 2.87M3 3l18 18" />
);
export const GroupIcon = () => <MenuIcon path="M4 5h16v4H4zM4 15h16v4H4zM12 9v6" />;
export const UngroupIcon = () => <MenuIcon path="M4 5h16v4H4zM4 15h16v4H4z" />;
export const ResetSizeIcon = () => <MenuIcon path="M7 8l-4 4 4 4M17 8l4 4-4 4M3 12h18" />;

export function ExpandChevron({ expanded }: { expanded: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        display: 'block',
        width: 'var(--dg-icon-size)',
        height: 'var(--dg-icon-size)',
        transform: expanded ? 'rotate(0deg)' : 'rotate(-90deg)',
        transition: 'transform 150ms ease',
      }}
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function GripIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      style={{ display: 'block', width: 'var(--dg-icon-size)', height: 'var(--dg-icon-size)' }}
    >
      <circle cx="9" cy="5" r="1.5" />
      <circle cx="15" cy="5" r="1.5" />
      <circle cx="9" cy="10" r="1.5" />
      <circle cx="15" cy="10" r="1.5" />
      <circle cx="9" cy="15" r="1.5" />
      <circle cx="15" cy="15" r="1.5" />
      <circle cx="9" cy="20" r="1.5" />
      <circle cx="15" cy="20" r="1.5" />
    </svg>
  );
}

export function DefaultUnsortedIcon() {
  return (
    <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" style={iconSizeStyle}>
      <path
        d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function ColumnsIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ display: 'block', width: 'var(--dg-icon-size)', height: 'var(--dg-icon-size)' }}
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M9 3v18" />
      <path d="M15 3v18" />
    </svg>
  );
}

export function KebabIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      style={{
        display: 'block',
        width: 'calc(var(--dg-icon-size) - 0.125rem)',
        height: 'calc(var(--dg-icon-size) - 0.125rem)',
      }}
    >
      <circle cx="8" cy="3" r="1.5" />
      <circle cx="8" cy="8" r="1.5" />
      <circle cx="8" cy="13" r="1.5" />
    </svg>
  );
}

export function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ display: 'block', width: 'var(--dg-icon-size)', height: 'var(--dg-icon-size)' }}
    >
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  );
}

export function DownloadIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ display: 'block', width: 'var(--dg-icon-size)', height: 'var(--dg-icon-size)' }}
    >
      <path d="M12 4v11" />
      <path d="M7 10l5 5 5-5" />
      <path d="M4 19h16" />
    </svg>
  );
}
