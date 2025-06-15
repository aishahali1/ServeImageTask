
import { createServer } from 'http';
import fs from 'fs'
const imagePath = 'image.jpeg'
const server = createServer((req, res) => {
 fs.readFile(imagePath, (err, data) => {
         if (err) {
           res.writeHead(404);
           res.end('Image not found');
           return;
         }
         res.writeHead(200, { 'Content-Type': 'image/jpeg' });
         res.end(data);
        
});
})
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});
