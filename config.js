const development = {
  host: 'http://localhost',
  namespace: 'node-mcu', // For socket.io
  port: 3000
};

const production = {
  host: 'https://nodesocket-tashila.herokuapp.com', // Replace
  namespace: 'node-mcu' // For socket.io
};

const config = process.env.NODE_ENV === 'development' ? development : production;
const port = config.port ? ':' + config.port : '';
const namespace = config.namespace ? config.namespace : '';
const url = config.host + port + '/' + namespace;
config.url = url;

module.exports = config;
