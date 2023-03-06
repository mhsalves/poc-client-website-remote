const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

module.exports = {
  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'remote-module',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './components': './src/components',
          './hooks': './src/hooks',
        },
      })
    );

    return config;
  }
}
