<template>
<div class="col-xs-12 col-sm-6 col-md-4">
  <div class="col-xs-2 col-sm-1 col-md-1"> </div>
  <div class="col-xs-6 col-sm-3 col-md-2">
    <q-input v-model="query" size="is-large"
             @keyup.enter="filterProducts" placeholder="Search..."
             type="search"
             icon="magnify"
             style="margin-left: 5%; margin-top:1%; margin-right: 5%">
    <q-btn  @click="filterProducts" color="primary" icon="search" />
    </q-input>
    
    
  </div>
  <div>
    
  </div>
  
</div>
    


</template>
<script>
  import _ from 'lodash'
  export default {
    name: "SearchBar",
    data() {
      return {
        query: ''
      }
    },
    watch: {
      query: {
        handler: _.debounce(function () {
          this.filterProducts()
        }, 100)
      }
    },
    methods: {
      filterProducts() {
        this.$store.dispatch('products/filterProducts', this.query)
      }
    }
  }
</script>

<style scoped>
</style>