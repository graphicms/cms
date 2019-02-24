let mix = require('laravel-mix')
let tailwindcss = require('tailwindcss')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpack = require('webpack');

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
// let name;
// if(mix.config.production) {
//   name = 'js/[name].[chunkhash].js';
// } else {
//   name = 'js/[name].js'
// }
mix
  .js('resources/js/app.js', 'public')
  .js('resources/js/GraphiCore.js', 'public')
  .copy('resources/images', 'public')
  .setPublicPath('public')
  .sass('resources/css/app.scss', 'public/', { implementation: require('node-sass') }).options({
    processCssUrls: false,
    postCss: [tailwindcss('tailwind.js')]
  })
  .extract()
  .webpackConfig({
    externals: {
      jquery: 'jQuery',
      vue: 'Vue'
    },
    plugins: [
      new BundleAnalyzerPlugin(),
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    ],
    output: {
      publicPath: '/cms-assets/',
      // chunkFilename: name,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'resources/js/'),
      },
    },
  })
  .version()
