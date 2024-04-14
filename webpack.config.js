const path = require('path');
const PugPlugin = require('pug-plugin');

module.exports = {
  output: {
    path: path.join(__dirname, 'dist/'),
  },

  plugins: [
    new PugPlugin({
      // automatically processing all templates in the path
      entry: 'src/views/',
      // - OR - define many pages manually (key is output filename w/o `.html`)
      //entry: {
        // simple page config w/o variables
        //index: 'src/views/index.pug', // => dist/index.html
        // advanced page config with variables
      //},

      js: {
        // JS output filename, used if `inline` option is false (defaults)
        filename: 'js/[name].[contenthash:8].js',
        //inline: true, // inlines JS into HTML
      },
      css: {
        // CSS output filename, used if `inline` option is false (defaults)
        filename: 'css/[name].[contenthash:8].css',
        //inline: true, // inlines CSS into HTML
      },
    })
  ],

  module: {
    rules: [
        
      {
        test: /\.(s?css|sass)$/,
        use: ['css-loader', 'sass-loader']
      },
      {
        test: /\.(ico|png|jp?g|webp|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name].[hash:8][ext][query]',
        },
      },
    ],
  },
};