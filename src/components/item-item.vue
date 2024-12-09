<template>
  <div @click="toggleState" class="item">
    
    <div v-if="state === 'no-input'">
      <p>Before</p>
    </div>
    <div v-else-if="state === 'awaiting'">
      <SearchBar @output="handleSubmit"/>
    </div>
    <div v-else-if="state === 'display'">
      <p class="state-style">{{ USstate }}</p>
    </div>

  
  </div>
</template>

<script>
import SearchBar from './search-bar.vue';


export default {

  name: "Item-item",
  components: {
    SearchBar
  },
  data() {
    return {
      USstate: "SAMPLE",
      state: "no-input",
      inputReceived: false,
      rarity: "",
    };
  },
  methods: {
    handleSubmit(output) {
      this.USstate = output;
    },
      toggleState() {
      if (this.state === "no-input") {
        this.state = "awaiting";
      } else if (this.state === "awaiting" && this.USstate !== "SAMPLE") {
        this.state = "display";





        
      } 
    },
  },
  
};
</script>

<style scoped>
.item {
  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid #7e7e7e;
  font-size: 18px;
  font-weight: bold;
  height: 100px;
  width: 100px;
}
.state-style {
  font-size: 9px;
  font-weight: bold;
  
}
</style>