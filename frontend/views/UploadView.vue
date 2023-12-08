<template>
    <HeaderComp/>
    <UploadForm/>
  </template>
  <script>
    import UploadForm from "@/components/UploadForm.vue"
    import HeaderComp from "@/components/HeaderComp.vue"
    export default {
    name: 'UploadView',
    components: {HeaderComp, UploadForm}
  }
  </script>