const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.jsx'),
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },{
        test:/\.css$/, 
        use:['style-loader','css-loader'] ,
      },{
        test: /\.(jpe?g|png|gif)$/,
        use: [
          'file-loader',
        ]
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    historyApiFallback: {
      index: 'index.html',
    },
  },
};
