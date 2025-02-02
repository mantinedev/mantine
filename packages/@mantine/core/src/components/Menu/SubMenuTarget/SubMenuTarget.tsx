import { Popover } from '../../Popover';

interface SubMenuTargetProps {
  children: React.ReactNode;
}

export function SubMenuTarget({ children }: SubMenuTargetProps) {
  return <Popover.Target>{children}</Popover.Target>;
}
