import React from 'react';

export type DataTableIconProps = React.ComponentPropsWithoutRef<'svg'>;

const DataTableIcon: React.FC<DataTableIconProps> = ({ style, ...others }) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{
      width: 'var(--table-icon-size)',
      height: 'var(--table-icon-size)',
      ...style,
    }}
    {...others}
  />
);

export const DataTableIconSortSelector: React.FC<DataTableIconProps> = (props) => (
  <DataTableIcon {...props}>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M8 9l4 -4l4 4" />
    <path d="M16 15l-4 4l-4 -4" />
  </DataTableIcon>
);

export const DataTableIconSortAsc: React.FC<DataTableIconProps> = (props) => (
  <DataTableIcon {...props}>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M6 15l6 -6l6 6" />
  </DataTableIcon>
);

export const DataTableIconSortDesc: React.FC<DataTableIconProps> = (props) => (
  <DataTableIcon {...props}>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M6 9l6 6l6 -6" />
  </DataTableIcon>
);
