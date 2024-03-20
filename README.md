# KMUtils Package
Provides utility classes, fonts sizes and view components that are used in https://kam.insektionen.se/.

`KMUtils` requires TailwindCSS to work. 

# Installation
Since `KMUtils` uses Tailwind utility classes, you will need to enable Tailwind within your NodeJs in your `tailwind.config.js` file.

```JS
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    
    // Add this line to your tailwind.config.js file
    "./node_modules/@ohshitnotgood/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

# Components included
## `Nav`
Displays a transparent responsive nav bar that hides behind a hamburger icon in mobile view.

## `Footer`
Footer accompanies `Nav` meaning you do not need to separately call the `Footer` component. Pass `includeFooter={true}` when calling `Nav`.

## `Breadcrumbs`
Displays breadcrumbs on a page. Default font is a green colour with green right-facing chevrons. Colours cannot be customised but only toggled between light and dark mode.

You do not need to provide location arguments to `Breadcrumbs`; `Breadcrumbs` uses `document.location` object to determine it's location in the site.

## HamburgerIcon
Used by `Nav` to display a hamburger icon in mobile view. Not recommended to be used in a project.

## BlogPost
Displays a blog-style page with title, subtitle, and image. Title and subtitle text appear in a green colour which cannot be changed as of version `0.0.4`.

# Fonts included
## BlogBody
Displays a very dark green text suitable for use for writing text in a blog-style page. Font sizes and font colours cannot be modified using Tailwind.

## BlogSectionHeader
Displays a green bolded text suitable as headers for a section. 

## LargeTitle
Displays a large text suitable for use as a title font. This component is currently being used to display the 'KISTA' text on the homepage.