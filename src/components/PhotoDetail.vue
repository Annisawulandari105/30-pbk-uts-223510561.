<template>
    <div>
      <q-img :src="photoUrl" />
    </div>
  </template>
  
  <script>
  export default {
    name: 'PhotoDetail',
    props: {
      photoUrl: {
        type: String,
        required: true
      }
    }
  }
  </script>
  