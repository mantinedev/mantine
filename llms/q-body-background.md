# How can I change body background color?
Use CSS to change body background color

## Change body background with CSS

To change the `body` background color, you can use CSS. To do that, create a `styles.css`
file in your project and import it at the root of your application:

```css
body {
  background-color: #f9f9f9;
}
```

## Change body background with CSS variable

The `--mantine-color-body` CSS variable is used for the body background and
as the background color of some components ([Modal](https://mantine.dev/core/modal/), [Paper](https://mantine.dev/core/paper/), etc.).
To override this variable, create a `styles.css` file in your project and import it at the root of your application:

```scss
:root {
  @mixin light-root {
    --mantine-color-body: #f9f9f9;
  }

  @mixin dark-root {
    --mantine-color-body: #333;
  }
}
```
