<template>
    <div>{{ myData }}</div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const myData = ref('Hello, Vue!');
  </script>
  
  <style lang='scss' scoped>
  /* Your scoped styles go here */
  </style>
  