<!-- src/components/ParentComponent.vue -->
<template>
    <div class="parent">
      <h1>Ini adalah Komponen Induk</h1>
      <ChildComponent message="Pesan dari Komponen Induk" />
    </div>
  </template>
  
  <script>
  import ChildComponent from './ChildComponent.vue';
  
  export default {
    name: 'ParentComponent',
    components: {
      ChildComponent
    }
  }
  </script>
  
  <style scoped>
  .parent {
    border: 1px solid #000;
    padding: 20px;
    margin: 20px;
  }
  </style>
  