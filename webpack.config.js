let webpack = require("webpack");
module.exports = {
   entry: {
      app: './app/main.ts'
    },
    output: {    
      filename: './dist/[name].js'
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin('app','./dist/app.js')
    ],
    watch:false
}