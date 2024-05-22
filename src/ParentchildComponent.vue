<template>
    <div>
      <h2>Parent Component</h2>
      <p>Message: {{ message }}</p>
      <ChildComponent :dataFromParent="message" />
    </div>
  </template>
  
  <script>
  import ChildComponent from './ChildComponent.vue';
  
  export default {
    name: 'ParentComponent',
    components: {
      ChildComponent
    },
    data() {
      return {
        message: 'Hello from Parent!'
      }
    }
  }
  </script>
  
  <style scoped>
  h2 {
    color: green;
  }
  </style>
  