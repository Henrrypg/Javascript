<template>
    <div class="fit row wrap justify-center items-baseline content-center">
        <div class=" col-xs-6    ">
            <h2>Register</h2>
            <q-input :value="Email" @input="setEmail" label="Username" />
            <q-input :value="Password" @input="setPassword" type="password" label="Password"/>
            <q-space />
            <q-btn color="green" @click="register" label="Register" style="margin: 1%;"></q-btn>
        </div>

    </div>
</template>

<script>
/* eslint-disable */
  import vue from 'vue'
  import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
  export default {
    methods: {
      ...mapActions('authentication', ['register']),
      ...mapMutations('authentication', [
        'setEmail',
        'setPassword'
      ])
    },
    computed: {
      ...mapState('authentication', [
        'Email',
        'Password'
      ])
    }
  }
</script>
