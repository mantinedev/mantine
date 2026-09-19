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
