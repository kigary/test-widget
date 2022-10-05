const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

const isProd = process.env.NODE_ENV === 'production';
const plugins = [];

if (process.env.ANALYZE) {
  plugins.push(new BundleAnalyzerPlugin());
}

module.exports = (options = {}) => ({
  webpack: {
    configure: config => ({
      ...config,
      output: {
        ...config.output,
        publicPath: '/'
      },
      optimization: {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          minChunks: 2,
          maxInitialRequests: Infinity,
          minSize: 0,
        }
      }
    }),
    alias: {},
    plugins
  },
  // Suppress compile errors,
  typescript: {
    enableTypeChecking: false
  },
  // Disable eslint error logs
  eslint: {
    enable: false
  },
  babel: {
    plugins: [
      ...(isProd ? ['react-remove-properties'] : [])
    ]
  },
  plugins: []
});
