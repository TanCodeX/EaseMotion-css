# Multi-Layer Box Shadow Elevation Scale

A reusable SCSS mixin and utility module that generates smooth, natural-looking multi-layered drop shadows to create a realistic sense of depth and elevation in your UI components.

## What does this do?
Standard CSS box shadows often look harsh or unrealistic when using a single layer. This mixin combines multiple shadow layers (representing the umbra, penumbra, and ambient light) to create ultra-smooth gradients of shadow. It provides a standardized 5-level elevation scale.

## How is it used?
You can use the SCSS mixin directly in your styles or utilize the auto-generated utility classes.

### Parameters
- `$level` (Number): The elevation level between 1 and 5. (Default: `1`)
- `$color` (Color): The base color of the shadow. (Default: `#000000`)
- `$opacity-multiplier` (Number): A multiplier to increase or decrease the overall opacity of the shadow layers. (Default: `1`)

### Mixin Usage
```scss
@import 'multi-layer-box-shadow-elevation-scale';

.card {
  background: white;
  @include ease-elevation(2); // Standard depth
  transition: box-shadow 0.3s ease;
  
  &:hover {
    @include ease-elevation(4, #1a73e8, 1.2); // Colored, higher depth on hover
  }
}
```

### Generated CSS Utility Classes
The partial also generates a set of utility classes for immediate use in HTML:

```css
.ease-elevation-1 { box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05), ... }
.ease-elevation-2 { box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.05), ... }
.ease-elevation-3 { box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05), ... }
.ease-elevation-4 { box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.05), ... }
.ease-elevation-5 { box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.05), ... }
```

HTML Example:
```html
<div class="ease-elevation-3">
  I float above the page!
</div>
```

## Why is it useful?
This module seamlessly integrates into the EaseMotion philosophy by standardizing elevation and depth. By relying on a multi-layered approach, elements look more tactile and modern, directly improving the aesthetic quality of any design system built on top of EaseMotion.
