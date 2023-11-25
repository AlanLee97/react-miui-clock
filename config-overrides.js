/* eslint-disable import/no-extraneous-dependencies */
const { merge } = require('webpack-merge');
const CompressionPlugin = require('compression-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const enableAnalyzer = (process.argv || []).includes('analyzer');

const baseConfig = {
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  }
};

const prodConfig = {
  plugins: [
    new CompressionPlugin(),
    enableAnalyzer ? new BundleAnalyzerPlugin() : undefined
  ]
};

const devConfig = {
  
};

module.exports = function override(config, env) {
  const prodEnv = env === 'production';
  const mregedConfig = merge(config, baseConfig, prodEnv ? prodConfig : devConfig);
  return mregedConfig;
};
