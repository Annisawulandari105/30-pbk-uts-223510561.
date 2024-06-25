<template>
    <div>
      <h1>Albums</h1>
      <album-list />
    </div>
  </template>
  
  <script>
  import AlbumList from '../components/AlbumList.vue'
  
  export default {
    components: {
      AlbumList
    }
  }
  </script>
  