<template>
  <div @click="toggleState" class="item">
    
    <div v-if="!state">
      <p>Before</p>
    </div>
    <div v-else>
      <p class="state-style">{{ USstate }}</p>
    </div>

  
  </div>
</template>

<script>



export default {

  name: "Item-item",
  props: ['USstate'],
  components: {
  },
  data() {
    return {
      state: false,
      inputReceived: false,
      rarity: "",
    };
  },
  methods: {
    
      toggleState() {
      if (this.state) {
        this.state = true;
      }
      else {
        this.state = false;
      }





      } 
    },
  
};
</script>

<style scoped>
.item {
  display: flex;
  align-items: center;
  justify-content: center;

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