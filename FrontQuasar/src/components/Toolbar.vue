<template>
  <q-toolbar class="bg-primary text-white q-my-md shadow-2" style="margin:0px;">
      <q-separator dark vertical inset />
      <router-link class="nav-link" to="/" style="color: white"><q-btn stretch flat label="Shop"/></router-link>
      <q-input dark dense standout v-model="query" input-class="text-right" class="q-ml-md" >
          <template v-slot:append>
            <q-icon @keyup.enter="filterProducts" v-if="query === ''" name="search" />
            <q-icon v-else name="clear" class="cursor-pointer" @click="query = ''" />
          </template>
        </q-input>
      <q-space />
      <q-separator dark vertical />
      <router-link class="nav-link" to="/register" style="color: white"><q-btn stretch flat label="Register" v-if="!isLoggedIn"/></router-link>
      <q-separator dark vertical/>
      <router-link class="nav-link" to="/login" style="color: white"><q-btn stretch flat label="Login" v-if="!isLoggedIn" /></router-link>
      <q-separator dark vertical />
      <q-btn stretch flat label="Logout" v-if="isLoggedIn" @click="logout" />
    </q-toolbar>
</template>

<script>
/* eslint-disable */
import _ from 'lodash'
import { mapGetters, mapActions } from 'vuex'

import Toolbar from '../components/Toolbar.vue'
import { ref } from '@vue/composition-api'

export default {
  components: { Toolbar },
  data() {
      return {
        query: ''
      }
    },
  methods: {
    ...mapActions('authentication', [
      'logout'
    ]),
    filterProducts() {
        this.$store.dispatch('products/filterProducts', this.query)
      },
    isDisabled() {
      console.log(this.$store.state.searchview)
      return this.$store.state.searchview
    }
  },
  computed: {
      ...mapGetters('authentication', [
          'isLoggedIn'
      ])
  },
  watch: {
    query: {
      handler: _.debounce(function () {
        this.filterProducts()
      }, 100)
    }
    }
}
</script>
