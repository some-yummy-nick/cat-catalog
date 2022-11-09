<template>
  <input type="text" :value="search" @input="handleSearch">
</template>

<script>
import {debounce} from '~/helpers'
import {mapGetters} from "vuex";

export default {
  name: "Input",
  computed: {
    ...mapGetters({
     'search': 'cats/getFilteredSearch',
    })
  },
  methods:{
    handleSearch: debounce(function (e) {
      this.$store.dispatch('cats/filterSearch', e.target.value)
    }, 500),
  }
}
</script>

<style scoped>

</style>