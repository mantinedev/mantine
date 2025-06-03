export interface PasswordToggleIconProps {
  reveal: boolean;
}

export type PasswordInputVisibilityToggleIcon = React.FC<PasswordToggleIconProps>;

export function PasswordToggleIcon({ reveal }: PasswordToggleIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      style={{ width: 'var(--psi-icon-size)', height: 'var(--psi-icon-size)' }}
    >
      {reveal ? (
        <>
          <path fill="none" d="M0 0h256v256H0z" />
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
            d="M48 40l160 176M154.91 157.6a40 40 0 01-53.82-59.2M135.53 88.71a40 40 0 0132.3 35.53"
          />
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
            d="M208.61 169.1C230.41 149.58 240 128 240 128s-32-72-112-72a126 126 0 00-20.68 1.68M74 68.6C33.23 89.24 16 128 16 128s32 72 112 72a118.05 118.05 0 0054-12.6"
          />
        </>
      ) : (
        <>
          <path fill="none" d="M0 0h256v256H0z" />
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
            d="M128 56c-80 0-112 72-112 72s32 72 112 72 112-72 112-72-32-72-112-72z"
          />
          <circle
            cx="128"
            cy="128"
            r="40"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          />
        </>
      )}
    </svg>
  );
}
