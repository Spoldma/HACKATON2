<template>
  <HeaderComp/>
  <div class="home-view">
    <div v-for="file in fileList" :key="file">
      <a :href="`/uploads/${file}`" target="_blank">{{ file }}</a>
    </div>
  </div>
</template>
  <script>
    import HeaderComp from "@/components/HeaderComp.vue"
    export default {
      name: 'HomeView',
      components: {HeaderComp},
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
            const response = await fetch('/api/files'); // Endpoint to get the list of files
            const data = await response.json();
            this.fileList = data.files;
          } catch (error) {
            console.error('Error fetching file list:', error);
          }
        },
      },
    };
  </script>