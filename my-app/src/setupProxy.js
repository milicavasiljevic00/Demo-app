const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
      '/v1',
      createProxyMiddleware({
        target: 'http://161.35.71.233:3000',
        changeOrigin: true,
      })
    );
  };