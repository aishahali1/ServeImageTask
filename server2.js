import { createServer } from 'http';
const server = createServer((req, res) => {

         res.writeHead(303, 
          { 
            'Content-Type': 'text/plain',
            location: `https://www.geeksforgeeks.org/node-js/how-to-fetch-images-from-node-js-server/`
          });
        
});
server.listen(4000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:4000');
});