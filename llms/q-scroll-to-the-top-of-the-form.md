# How to scroll to the top of the form if the form is submitted with errors?
Learn how to call a function when the form is submitted with errors

## use-form submit handlers

`form.onSubmit` function accepts two functions: the first function is called with valid form values when validation passes,
the second function is called with form errors when validation fails.

## Scroll to the top of the form on submit

Using the second callback of `form.onSubmit` you can scroll to the top of the form.
If your application includes a fixed header (like Mantine Help Center website), use
[scroll-margin](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin) CSS property
to ensure that the form is not hidden behind the header. Note that `scroll-margin` does not
work if the form has `overflow: hidden;` styles or is inside other element that has
`overflow: hidden;` styles.

#### Example: ScrollToTopOfForm

```tsx
function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      email: '',
    },

    validate: {
      name: isNotEmpty('Name is required'),
      email: isEmail('Invalid email'),
    },
  });

  return (
    <form
      id="my-form"
      style={{ scrollMargin: '100px' }}
      onSubmit={form.onSubmit(
        () => {},
        () => {
          document
            .getElementById('my-form')
            ?.scrollIntoView({ block: 'start', behavior: 'smooth' });
        }
      )}
    >
      <TextInput
        withAsterisk
        label="Your name"
        placeholder="Your name"
        key={form.key('name')}
        {...form.getInputProps('name')}
      />

      <TextInput
        withAsterisk
        label="Your email"
        placeholder="your@email.com"
        mt="md"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />

      <Group justify="flex-end" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
```

