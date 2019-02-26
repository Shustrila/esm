const liveServer = require('live-server');

const params = {
  port: 8181,
  host: '0.0.0.0',
  root: './src',
  open: false,
  file: 'index.html',
  mount: [['/components', './node_modules']],
  logLevel: 2,
};

liveServer.start(params);
