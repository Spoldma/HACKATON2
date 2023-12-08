<template>
    <form>
      <label for="file-description">File Description:</label>
      <textarea id="file-description" rows="1" cols="25" placeholder="Enter file description"></textarea>
      <label for="file-input">Select a file:</label>
      <input type="file" id="file-input" accept=".jpg, .jpeg, .png .pdf" required>
      <button id="upload-button" onclick="uploadFile()">Upload File</button>
    </form>
</template>
    <script>
      import axios from 'axios';

        export default {
          data() {
            return {
              file: null,
              fileDescription: '',
            };
          },
          methods: {
            handleFileChange(event) {
              this.file = event.target.files[0];
            },
            uploadFile() {
              if (!this.file) {
                alert('Please select a file before uploading.');
                return;
              }

              const formData = new FormData();
              formData.append('file', this.file);
              formData.append('description', this.fileDescription);

              axios.post('http://localhost:3000/upload', formData)
                .then(response => {
                  console.log(response.data);
                  alert('File uploaded successfully!');
                })
                .catch(error => {
                  console.error('Error uploading file:', error);
                  alert('Error uploading file. Please try again.');
                });
            },
          },
        };
    </script>