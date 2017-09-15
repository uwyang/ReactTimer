var webpack = require('webpack');

module.exports = {
  entry: [
    //script loader npm module, because webpack might not load them right.
    //load scripts before app.jsx!!!!
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    //let foundation properly attach to jquery method.
    jquery: 'jQuery',
  },
  plugins: [
    new webpack.ProvidePlugin({
      //if you see$, use jquery, etcetc.
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    //alias: tell webpack waht to call components and where they are.
    alias: {
      //remove all app specific aliases.
      Main: 'app/components/Main.jsx',
      applicationStyles: 'app/styles/app.scss',
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  // helps debugging better.
  devtool: 'cheap-module-eval-source-map'
};
