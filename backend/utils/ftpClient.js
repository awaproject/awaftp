const ftp = require('ftp');

const client = new ftp();

client.on('ready', () => {
    console.log('FTP client ready');
});

module.exports = client;
