import React, { useState } from 'react';
import { upload, download } from '../services/ftpService';

const FtpManager = () => {
    const [file, setFile] = useState(null);
    const [filename, setFilename] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (file) {
            try {
                await upload(file);
                alert('File uploaded successfully');
            } catch (err) {
                alert('File upload failed: ' + err.message);
            }
        }
    };

    const handleDownload = async () => {
        if (filename) {
            try {
                const response = await download(filename);
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', filename);
                document.body.appendChild(link);
                link.click();
            } catch (err) {
                alert('File download failed: ' + err.message);
            }
        }
    };

    return (
        <div>
            <h2>FTP Manager</h2>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
            <br />
            <input
                type="text"
                value={filename}
                onChange={(e) => setFilename(e.target.value)}
                placeholder="Filename to download"
            />
            <button onClick={handleDownload}>Download</button>
        </div>
    );
};

export default FtpManager;
