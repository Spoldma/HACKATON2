<template>
  <div>
    <form @submit.prevent="uploadFile">
      <input type="file" ref="fileInput" @change="onFileInputChange" />
      <button type="submit">Upload File</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'UploadFile',
  methods: {
    async uploadFile() {
      const fileInput = this.$refs.fileInput;

      if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        await this.sendFile(file);
      } else {
        console.error('No file selected');
      }
    },
    async sendFile(file) {
      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await axios.post('http://localhost:8000/api/upload', formData);

        console.log('File upload successful:', response.data);
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    },
    onFileInputChange(event) {
      // Handle file input change if needed
      console.log('File input changed:', event.target.files);
    },
  },
};
</script>

<style>
/* Your component styles here */
</style>