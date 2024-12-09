<template>
  <h1>StateGrid!</h1>
  <br>
  <div class="container">
    <div class="columns is-centered">
      <div class="column is-half">
        <GridItem />
      </div>
    </div>

  </div>
  
</template>

<script>
import GridItem from './components/grid-item.vue';
export default {

  name: 'App',
  components: {
    GridItem
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
