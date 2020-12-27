
<template>
  <q-page class="q-pa-md">
    <div class="col-xs-12 col-sm-6 col-md-4">
      <q-carousel
        v-model="slide"
        transition-prev="jump-right"
        transition-next="jump-left"
        swipeable
        animated
        control-color="white"
        prev-icon="arrow_left"
        next-icon="arrow_right"
        navigation-icon="radio_button_unchecked"
        navigation
        padding
        arrows
        height="300px"
        class="bg-purple text-white shadow-1 rounded-borders"
      >
        <q-carousel-slide name="style" class="column no-wrap flex-center">
          <q-icon name="style" size="56px" />
          <div class="q-mt-md text-center">
            {{ "fkahsdfas" }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="tv" class="column no-wrap flex-center">
          <q-icon name="live_tv" size="56px" />
          <div class="q-mt-md text-center">
            {{ "fkahsdfas" }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="layers" class="column no-wrap flex-center">
          <q-icon name="layers" size="56px" />
          <div class="q-mt-md text-center">
            {{ "fkahsdfas" }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="map" class="column no-wrap flex-center">
          <q-icon name="terrain" size="56px" />
          <div class="q-mt-md text-center">
            {{ "fkahsdfas" }}
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
    <div class="q-pa-md">
      <q-card
      class="my-card"
      v-for="product in products" :key="product.id"
      style="margin: 1%; float: left; max-width: 50%;"
      >
      <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
        <div class="absolute-bottom">
          <div class="text-h6">{{product.name}}</div>
          <div class="text-subtitle2">{{product.price}}</div>
        </div>
      </q-img>

      <q-card-actions>
        <q-btn flat>Action 1</q-btn>
        <q-btn flat>Action 2</q-btn>
      </q-card-actions>
    </q-card>
    </div>
  </q-page>
</template>

<script>
/* eslint-disable */
  import vue from 'vue'
  import { mapGetters, mapActions } from 'vuex'

  import product from '../components/Product'
  export default {
    data() {
      return {
        slide: 'style'
      }
    },
    mounted() {
      this.$store.dispatch('products/FetchProducts')
    },
    methods: {
      ...mapActions('products', ['product'])
    },
    computed: {
      ...mapGetters('products', ['products']
      )
    }
  }
</script>
