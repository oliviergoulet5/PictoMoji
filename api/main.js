import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import multer from 'multer';
import crypto from 'crypto';

const HTTP_PORT = process.env.HTTP_PORT || 8080;

const app = express();

const storage = multer.diskStorage({
    destination: '../images',
    filename: (req, file, callback) => {
        crypto.pseudoRandomBytes(16, (err, raw) => {
            if (err) {
                return callback(err);
            }
        
            callback(null, raw.toString('hex') + path.extname(file.originalname));
        });
    }
});

app.post('/', upload.single('img'), (req, res) => {
    if (!req.file) {
        console.error('No file received');
        return res.send({
            success: false
        });
    } else {
        return res.send({
            success: true
        });
    }
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.listen(HTTP_PORT);