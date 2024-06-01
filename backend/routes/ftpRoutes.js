const express = require('express');
const ftpController = require('../controllers/ftpController');
const multer = require('multer');
const upload = multer();

const router = express.Router();

router.post('/connect', ftpController.connect);
router.post('/upload', upload.single('file'), ftpController.upload);
router.get('/download', ftpController.download);

module.exports = router;
