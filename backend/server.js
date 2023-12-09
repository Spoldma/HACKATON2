const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const port = process.env.PORT || 8000;
const app = express();

app.use(cors({ origin: 'http://localhost:8080', credentials: true }));
app.use(express.json());
app.options('/api/upload', cors());

// Multer configuration for file upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, 'uploads')); // Set the destination folder for file uploads
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

// File upload endpoint
app.post('/api/upload', upload.single('file'), (req, res) => {
  // File has been uploaded and saved locally
  res.json({ message: 'File uploaded successfully' });
});

// Serve uploaded files as static resources
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Endpoint to get the list of files
app.get('/api/files', (req, res) => {
  const uploadDirectory = path.join(__dirname, 'uploads');

  // Read the contents of the 'uploads' directory
  fs.readdir(uploadDirectory, (err, files) => {
    if (err) {
      console.error('Error reading directory:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      // Send the list of files as a JSON response
      res.json({ files: files });
    }
  });
});

app.listen(port, () => {
  console.log("Server is listening to port " + port);
});