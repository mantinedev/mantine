import classes from './MdxVideo.module.css';

interface VideoProps {
  src: string;
  className?: string;
}

export function MdxVideo({ src }: VideoProps) {
  return <video src={src} className={classes.video} loop autoPlay muted playsInline controls />;
}
