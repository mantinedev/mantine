import { logos } from './assets';
import { LogoAsset } from './LogoAsset/LogoAsset';
import classes from './LogoAssets.module.css';

export function LogoAssets() {
  const items = logos.map((logo) => (
    <LogoAsset key={logo.fileName} className={classes.asset} {...logo} />
  ));
  return <div className={classes.root}>{items}</div>;
}
