<template>
  <p>upload fila all</p>
    <UploadFile/>
  </template>
  <script>
  import {defineComponent} from "vue";
  import UploadFile from "@/components/UploadFile.vue";

  export default defineComponent({
    components: {UploadFile}
  })
  </script>