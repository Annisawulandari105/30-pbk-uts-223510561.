<template>
    <div>
      <h3>Child Component</h3>
      <p>Data from Parent: {{ dataFromParent }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ChildComponent',
    props: {
      dataFromParent: {
        type: String,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  h3 {
    color: blue;
  }
  </style>
  