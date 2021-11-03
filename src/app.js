const httpServer = require('./server/index.js');

httpServer.listen(8080, () => {
    console.log(`Server listening at the port 8080`);
}).on('error', (err) => console.log(err));