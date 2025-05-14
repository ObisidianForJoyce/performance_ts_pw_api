const { Client } = require('httpolyglot');

const client = new Client();
client.request({
  method: 'POST',
  host: 'api.example.com',
  path: '/endpoint',
  headers: {
    'Content-Type': 'application/json', // 保留大写
    'X-Custom-Header': 'value'
  },
  body: JSON.stringify({ key: 'value' })
}, (res) => {
  res.on('data', (chunk) => console.log(chunk.toString()));
});