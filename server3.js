import { createServer } from 'http';
const server = createServer((req, res) => {
res.writeHead(200, { 'Content-Type': 'text/html' });
res.end('index.html');
        
});
server.listen(5000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:5000');
});