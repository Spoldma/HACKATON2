<template>
  <div class="home-view">
    <div v-for="file in fileList" :key="file">
      <a :href="`/uploads/${file}`" target="_blank">{{ file }}</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileList: [],
    };
  },
  mounted() {
    // Fetch the list of files from the server
    this.fetchFileList();
  },
  methods: {
  async fetchFileList() {
    try {
      const response = await fetch('/api/files'); // Relative URL to the server
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      this.fileList = data.files;
    } catch (error) {
      console.error('Error fetching file list:', error);
      // Handle the error, e.g., display a message to the user
    }
  },
},
};
</script>
