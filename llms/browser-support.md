# BrowserSupport

# Browser support

Mantine is tested on real devices in the following browsers before each minor and major release: Chrome, Safari, Firefox,
Edge, Safari for iOS, Chrome for Android. Testing in other browsers is not performed.

## Supported browsers

All Mantine components and hooks were tested to work in the following browsers:

* Chromium browsers 108+ – Chrome, Edge, Chrome for Android, etc.
* Firefox 101+
* Safari 15.4+
* IE (any version) is not supported

Browser versions that support [:where selector](https://caniuse.com/mdn-css_selectors_where) and [@layer directive](https://caniuse.com/mdn-css_at-rules_layer)
features that are required for Mantine styles (any versions below may have major issues with styles):

* Chromium browsers 99+ – Chrome, Edge, Chrome for Android, etc.
* Firefox 97+
* Safari 15.4+

## CSS features that contribute to browser support

Mantine components use the following CSS features:

* [:where selector](https://caniuse.com/mdn-css_selectors_where) in all components
* [@layer directive](https://caniuse.com/mdn-css_at-rules_layer) in all styles
* [:has pseudo-class](https://caniuse.com/css-has) in several components for non-critical styles
* [flexbox gap](https://caniuse.com/flexbox-gap) in most components
* [dvh units](https://caniuse.com/mdn-css_types_length_viewport_percentage_units_dynamic) in several components
* [color-mix](https://caniuse.com/mdn-css_types_color_color-mix) function is not used in any components by default, but can be used on your side with [alpha](styles/postcss-preset/#alpha-function) PostCSS function.
* [aspect-ratio](https://caniuse.com/mdn-css_properties_aspect-ratio) CSS property is used in several components
* [container queries](https://caniuse.com/css-container-queries) are used in several components if the option is explicitly enabled via prop

All CSS features listed above are supported in all modern browsers (90% or more of global usage as of January 2024).

If you need to support older browsers, you should:

* check the component `Browser support` section before usage and decide whether this component will work for your case
* install corresponding polyfills that are required for hook/component to work in older browsers
* check that the component works in those browsers on your side (we do not test Mantine in browsers that are older than those that are listed above)

## Polyfills

Mantine does not include any polyfills by default, you should install them manually if you need to support older browsers.
Usually, polyfills are automatically added to the project by your framework bundler (webpack, vite, etc.) based on the browserslist configuration.
