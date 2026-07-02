import purgecss from '@fullhuman/postcss-purgecss';

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [
    purgecss({
      content: [
        './src/pages/**/*.{js,jsx,ts,tsx}',
        './src/components/**/*.{js,jsx,ts,tsx}',
        './src/app/**/*.{js,jsx,ts,tsx}',
      ],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
      safelist: ['html', 'body', /^ease-/]
    })
  ]
};

export default config;
