interface AddressBookIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export function AddressBookIcon({ size, style, ...others }: AddressBookIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      style={{ width: size, height: size, ...style }}
      {...others}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M20 6v12a2 2 0 01-2 2H8a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2zM10 16h6" />
      <path d="M11 11a2 2 0 104 0 2 2 0 10-4 0M4 8h3M4 12h3M4 16h3" />
    </svg>
  );
}
