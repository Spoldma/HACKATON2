const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const port = process.env.PORT || 8000;
const app = express();

app.use(cors({ origin: 'http://localhost:8000', credentials: true }));
app.use(express.json());

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
    

app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
  });

app.listen(port, () => {
  console.log("Server is listening to port " + port);
});
