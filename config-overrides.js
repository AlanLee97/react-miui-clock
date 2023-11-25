/* eslint-disable import/no-extraneous-dependencies */
const { merge } = require('webpack-merge');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = function override(config, env) {
  const prodEnv = env === 'production';
  const customConfig = {
    externals: {
      react: 'React',
      'react-dom': 'ReactDOM',
    },
    plugins: [
      prodEnv ? new CompressionPlugin() : undefined
    ]
  };
  const mregedConfig = merge(config, customConfig);
  return mregedConfig;
};
