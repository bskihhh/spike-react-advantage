import baseConfig from './base';

const config = {
  appEnv: 'dev',
  devServer: {
    historyApiFallback: true,
  }
};

export default Object.freeze(Object.assign({}, baseConfig, config));
