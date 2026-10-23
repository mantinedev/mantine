# Skeleton and loading states

A form that loads its values shows a loading state until they are there, and that state must not
shift the layout when the real inputs appear.

- **Static forms (the fields are known in advance): the skeleton is the form.** One `Skeleton`
  per label (`h={14} w={120}`) and one per input (`h={36}`), in the same `SimpleGrid` / `Stack`
  as the real fields, textareas and matrices with their real height. Loading and loaded
  states have the same height; the user watches values appear in place.
- **Dynamic forms (fields come from the data): a generic set** of three to five label + input
  skeletons is fine, because the final arrangement is unknown.
- Buttons and the unsaved-changes bar are not rendered while loading; the section keeps
  `aria-busy="true"` and a `VisuallyHidden` "Loading …" text.
- Never `LoadingOverlay` over an empty form and never a spinner alone: both collapse the section
  and push the page around when the data lands.

```tsx
function ProfileSkeleton() {
  return (
    <Stack gap="md">
      <SimpleGrid cols={{ base: 1, sm: 2 }}>
        <FieldSkeleton />
        <FieldSkeleton />
      </SimpleGrid>
      <FieldSkeleton inputHeight={90} />
    </Stack>
  );
}

function FieldSkeleton({ inputHeight = 36 }: { inputHeight?: number }) {
  return (
    <Stack gap={6}>
      <Skeleton h={14} w={120} />
      <Skeleton h={inputHeight} />
    </Stack>
  );
}
```
