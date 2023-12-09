
<template>
  <div>
    <vue-dropzone
      id="fileUpload"
      ref="fileUpload"
      :options="dropzoneOptions"
      @vdropzone-success="onFileUploadSuccess"
    ></vue-dropzone>
  </div>
</template>

<script>
export default {
  name: 'UploadFile',
  data() {
    return {
      dropzoneOptions: {
        url: '/api/upload', // Backend endpoint for file upload
        paramName: 'file',
        maxFilesize: 2, // MB
        clickable: true,
      },
    };
  },
  methods: {
    onFileUploadSuccess(file, response) {
      // Handle successful file upload
      console.log(response);
    },
  },
};
</script>

<style>
/* Your component styles here */
</style>
