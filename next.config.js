const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

module.exports = {
  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'remote-module',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './hooks': './src/hooks',
          './Timer': './src/components/Timer',
        },
      })
    );

    return config;
  }
}
