const ftpClient = require('../utils/ftpClient');

exports.connect = (req, res) => {
    const { host, port, user, password } = req.body;
    ftpClient.connect({
        host: host,
        port: port,
        user: user,
        password: password
    });
    ftpClient.on('ready', () => {
        res.status(200).send('Connected to FTP server');
    });
    ftpClient.on('error', (err) => {
        res.status(500).send('FTP connection error: ' + err.message);
    });
};

exports.upload = (req, res) => {
    const file = req.files.file;
    ftpClient.put(file.data, file.name, (err) => {
        if (err) return res.status(500).send('FTP upload error: ' + err.message);
        res.status(200).send('File uploaded successfully');
    });
};

exports.download = (req, res) => {
    const { filename } = req.query;
    ftpClient.get(filename, (err, stream) => {
        if (err) return res.status(500).send('FTP download error: ' + err.message);
        stream.once('close', () => { ftpClient.end(); });
        stream.pipe(res);
    });
};
