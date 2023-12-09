<template>
    <HeaderComp/>
    <UploadFile/>
  </template>
  <script>
    import HeaderComp from "@/components/HeaderComp.vue"
    import UploadFile from "@/components/UploadFile.vue";
    export default {
    name: 'UploadView',
    components: { HeaderComp, UploadFile }
  }
  </script>