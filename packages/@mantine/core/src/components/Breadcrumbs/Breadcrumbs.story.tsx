import { Anchor } from '../Anchor';
import { Breadcrumbs } from './Breadcrumbs';

export default { title: 'Breadcrumbs' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <Breadcrumbs>
        <Anchor>Link 1</Anchor>
        <Anchor>Link 2</Anchor>
        <Anchor>Link 3</Anchor>
      </Breadcrumbs>
    </div>
  );
}

export function Unstyled() {
  return (
    <div style={{ padding: 40 }}>
      <Breadcrumbs unstyled>
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </Breadcrumbs>
    </div>
  );
}
