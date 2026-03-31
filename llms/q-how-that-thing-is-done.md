# How is that thing done on the mantine.dev website?
Learn how various elements are implemented on the mantine.dev website

## mantine.dev website

[Mantine documentation](https://mantine.dev) website is built with Next.js and Mantine.
You can find the source code of the website in the [repository](https://github.com/mantinedev/mantine).
If you are interested in how a specific part of the website is implemented, you can browse the source code and learn from it.

## How can I build the same footer?

* Give the footer a fixed position with `position: fixed` and `bottom: 0` properties.
* Create a div element that will contain all content except the footer.
* Set `min-height: 100vh` on the content container to make sure that the footer is always covered by the content.
* Make sure that your content container has a background color.
* Done! You have a footer at the bottom of the page.
