interface FileIconProps {
  fileName: string | undefined;
  getFileIcon?: ((fileName: string) => React.ReactNode) | undefined;
  fileIcon: React.ReactNode | undefined;
  className?: string | undefined;
  style?: React.CSSProperties;
}

export function FileIcon({ fileIcon, fileName, getFileIcon, className, style }: FileIconProps) {
  if (fileIcon) {
    return (
      <span className={className} style={style}>
        {fileIcon}
      </span>
    );
  }

  if (getFileIcon && fileName) {
    return (
      <span className={className} style={style}>
        {getFileIcon(fileName)}
      </span>
    );
  }

  return null;
}
