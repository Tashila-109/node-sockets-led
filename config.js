const development = {
  host: 'http://localhost',
  namespace: 'nodeMCU', // For socket.io
  port: 3000
};

const production = {
  host: 'https://nodesockets-tashila.herokuapp.com', // Replace
  namespace: 'nodeMCU' // For socket.io
};

const config = process.env.NODE_ENV === 'development' ? development : production;
const port = config.port ? ':' + config.port : '';
const namespace = config.namespace ? config.namespace : '';
const url = config.host + port + '/' + namespace;
config.url = url;

module.exports = config;
