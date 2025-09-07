const http = require('http');
const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  res.end(`<!doctype html><html><head><meta charset="utf-8"><title>App</title></head><body><h1>App running</h1><p>Server on port ${port}</p></body></html>`);
});
server.listen(port, () => console.log(`Server listening on ${port}`));
