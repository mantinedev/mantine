import { useEffect, useState } from 'react';
import { IconX } from '@tabler/icons-react';
import classes from './Banner.module.css';

export interface BannerProps {
  id: string;
  children: React.ReactNode;
}

const STORAGE_KEY = 'mantine-closed-banners';

export function Banner({ id, children }: BannerProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      const parsed = stored ? JSON.parse(stored) : [];
      const closedBanners: string[] = Array.isArray(parsed) ? parsed : [];
      setIsVisible(!closedBanners.includes(id));
    } catch {
      setIsVisible(true);
    }
  }, [id]);

  const handleClose = () => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      const parsed = stored ? JSON.parse(stored) : [];
      const closedBanners: string[] = Array.isArray(parsed) ? parsed : [];
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...closedBanners, id]));
      setIsVisible(false);
    } catch (error) {
      setIsVisible(false);
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className={classes.banner}>
      <div className={classes.content}>{children}</div>
      <button
        type="button"
        className={classes.closeButton}
        onClick={handleClose}
        aria-label="Close banner"
      >
        <IconX />
      </button>
    </div>
  );
}
