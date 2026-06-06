import { MagnifyingGlassIcon } from '@phosphor-icons/react';
import { Button } from '../Button';
import { EmptyState } from './EmptyState';

export default { title: 'EmptyState' };

export function Usage() {
  return (
    <div style={{ padding: 40, maxWidth: 500, margin: 'auto' }}>
      <EmptyState
        icon={<MagnifyingGlassIcon />}
        title="No results found"
        description="Try adjusting your search or filters to find what you are looking for."
      />
    </div>
  );
}

export function Compound() {
  return (
    <div style={{ padding: 40, maxWidth: 500, margin: 'auto' }}>
      <EmptyState>
        <EmptyState.Indicator>
          <MagnifyingGlassIcon />
        </EmptyState.Indicator>
        <EmptyState.Title>No results found</EmptyState.Title>
        <EmptyState.Description>Try adjusting your filters.</EmptyState.Description>
        <EmptyState.Actions>
          <Button variant="default">Reset filters</Button>
          <Button>Create new</Button>
        </EmptyState.Actions>
      </EmptyState>
    </div>
  );
}

export function WithIndicatorBackground() {
  return (
    <div style={{ padding: 40, maxWidth: 500, margin: 'auto' }}>
      <EmptyState
        withIndicatorBackground
        icon={<MagnifyingGlassIcon />}
        title="No results found"
        description="Try adjusting your search or filters."
      />
    </div>
  );
}

export function Variants() {
  return (
    <div style={{ padding: 40, display: 'flex', gap: 40, flexWrap: 'wrap' }}>
      {(['filled', 'light'] as const).map((variant) => (
        <EmptyState
          key={variant}
          variant={variant}
          color="blue"
          icon={<MagnifyingGlassIcon />}
          title={`Variant ${variant}`}
          description="Try adjusting your search or filters."
          style={{ maxWidth: 360 }}
        />
      ))}
    </div>
  );
}

export function Alignment() {
  return (
    <div style={{ padding: 40, maxWidth: 600, display: 'flex', flexDirection: 'column', gap: 40 }}>
      {(['center', 'left', 'right'] as const).map((align) => (
        <EmptyState
          key={align}
          align={align}
          withIndicatorBackground
          icon={<MagnifyingGlassIcon />}
          title={`Align ${align}`}
          description="Try adjusting your search or filters to find what you are looking for."
        >
          <EmptyState.Actions>
            <Button variant="default">Reset filters</Button>
          </EmptyState.Actions>
        </EmptyState>
      ))}
    </div>
  );
}

export function Sizes() {
  return (
    <div style={{ padding: 40, display: 'flex', flexDirection: 'column', gap: 40 }}>
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <EmptyState
          key={size}
          size={size}
          icon={<MagnifyingGlassIcon />}
          title={`Size ${size}`}
          description="Try adjusting your search or filters."
        />
      ))}
    </div>
  );
}

export function Unstyled() {
  return (
    <div style={{ padding: 40, maxWidth: 500, margin: 'auto' }}>
      <EmptyState
        unstyled
        icon={<MagnifyingGlassIcon />}
        title="No results found"
        description="Try adjusting your search or filters."
      />
    </div>
  );
}
