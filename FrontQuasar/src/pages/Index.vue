<template>
  <div id="App">
    <Search-bar/>
    <br>
    <Products/>
    
  </div>
</template>

<script lang="ts">
import Products from '../components/Products.vue'
import SearchBar from '../components/SearchBar.vue'

  export default {
    name: "App",
    components: {
      Products,
      SearchBar,
    },
  }
</script>
