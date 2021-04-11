const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const proxyMiddleware = createProxyMiddleware({
  target: "https://api.tomorrow.io/v4",
  changeOrigin: true,
  followRedirects: true,
  secure: true,
  pathRewrite: function (path, req) {
    return (
      path +
      (path.indexOf("?") !== -1 ? "&" : "?") +
      "apikey=" +
      process.env.TOMORROW_KEY
    );
  },
  onProxyReq: (proxyReq, req, res) => {
    if (req.body) {
        let bodyData = JSON.stringify(req.body);
        proxyReq.setHeader('Content-Type','application/json');
        proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData));
        proxyReq.write(bodyData);
    }
  },
});

const app = express();
app.use("/", proxyMiddleware);
app.use(express.json());

module.exports = {
  "tomorrow-api-proxy": app,
};
