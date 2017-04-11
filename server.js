const express = require('express');
const https = require('https');
const fs = require('fs');
const config = require('getconfig');
const sockets = require('signal-master/sockets');

const sslkey = fs.readFileSync('ssl-key.pem');
const sslcert = fs.readFileSync('ssl-cert.pem')

const options = {
      key: sslkey,
      cert: sslcert
};

const app = express();

const server = https.createServer(options, app).listen(8888);

app.use('/public', express.static('public'));

app.get('/', (req, res) => {
  


}); 


// add this to the end of file
   sockets(server, config);   