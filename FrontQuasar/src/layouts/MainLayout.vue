<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <Toolbar/>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import _ from 'lodash'
import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'
import Toolbar from '../components/Toolbar.vue'
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  components: { Toolbar },
})
</script>
