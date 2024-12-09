<template>
    <div @click="toggleState" class="cat">
      
      <p>{{ category }}</p>
    
    </div>
  </template>
  
  <script>
 
  
  
  export default {
  
    name: "category-item",
    components: {
      
    },
    data() {
      return {
        category: "category",
      };
    },
    methods: {
        
    },
    
  };
  </script>
  
  <style scoped>
  .cat {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #3b3b3b;
    border: 1px solid #7e7e7e;
    border-radius: 8px;
    font-size: 18px;
    font-weight: bold;
    height: 150px;
    width: 150px;
  }
  .state-style {
    font-size: 9px;
    font-weight: bold;
    
  }
  </style>