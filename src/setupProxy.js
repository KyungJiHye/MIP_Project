//setupProxy.js

import { createProxyMiddleware } from 'http-proxy-middleware';

export default function (app) {
  app.use(
    createProxyMiddleware('/naver', {
      target: 'https://m.search.naver.com',
      pathRewrite: {
        '^/naver': '',
      },
      changeOrigin: true,
    })
  );

  app.use(
    createProxyMiddleware('/다른context', {
      target: 'https://다른호스트',
      pathRewrite: {
        '^/지우려는패스': '',
      },
      changeOrigin: true,
    })
  );
}
