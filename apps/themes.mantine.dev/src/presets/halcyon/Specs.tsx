import { Fragment } from 'react';
import { specs } from './data';
import { SectionHead } from './SectionHead';
import common from './Halcyon.module.css';
import classes from './Specs.module.css';

export function Specs() {
  return (
    <section className={common.section} id="specs" aria-labelledby="hc-specs-title">
      <div className={classes.specs}>
        <SectionHead
          id="hc-specs-title"
          title="Specifications"
          lead="Designed in Edinburgh and made in Portugal from glass, aluminium and wool felt."
        />
        <dl className={classes.list}>
          {specs.map((spec) => (
            <Fragment key={spec.term}>
              <dt>{spec.term}</dt>
              <dd>
                {spec.value}
                {spec.note && <small>{spec.note}</small>}
              </dd>
            </Fragment>
          ))}
        </dl>
      </div>
    </section>
  );
}
