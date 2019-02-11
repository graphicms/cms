let mix = require('laravel-mix')
let tailwindcss = require('tailwindcss')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
  .js('resources/js/app.js', 'public')
  .extract([
    'vue',
    'vue-router',
    'portal-vue',
    'lodash',
    'moment-timezone',
    'axios',
  ])
  .setPublicPath('public')
  .postCss('resources/css/app.css', 'public', [tailwindcss('tailwind.js')])
  .webpackConfig({
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'resources/js/'),
      },
    },
  })
  .version()