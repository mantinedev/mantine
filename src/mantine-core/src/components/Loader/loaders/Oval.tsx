import React from 'react';
import { LoaderProps } from './loader-props';

export function Oval({ size, color, ...others }: LoaderProps) {
  return (
    <svg
      width={`${size}px`}
      height={`${size}px`}
      viewBox="0 0 38 38"
      xmlns="http://www.w3.org/2000/svg"
      stroke={color}
      {...others}
    >
      <g fill="none" fillRule="evenodd">
        <g transform="translate(2.5 2.5)" strokeWidth="5">
          <circle strokeOpacity=".5" cx="16" cy="16" r="16" />
          <path d="M32 16c0-9.94-8.06-16-16-16">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 16 16"
              to="360 16 16"
              dur="1s"
              repeatCount="indefinite"
            />
          </path>
        </g>
      </g>
    </svg>
  );
}
