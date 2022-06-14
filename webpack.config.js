const path = require("path");
const HandlebarsPlugin = require("handlebars-webpack-plugin");

const webpackConfig = {
  mode: 'development',
  devServer: {
    open: true,
    allowedHosts: "all",
    static: [
      {
        directory: path.join(__dirname, 'build/'),
        publicPath: '/',
      },
      {
        directory: path.join(__dirname, 'schema/'),
        publicPath: '/_schema',
      },
    ],
    port: 3200,
    historyApiFallback: true,
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers':
        'X-Requested-With, content-type, Authorization',
    },
  },
  plugins: [
    new HandlebarsPlugin({
      entry: path.join(process.cwd(), "src", "pages", "*.hbs"),
      output: path.join(process.cwd(), "build", "[name].html"),
      data: path.join(__dirname, "schema/mock.json"),
      partials: [path.join(process.cwd(), "src", "components", "*.hbs")],
    }),
  ],
};

module.exports = webpackConfig;
