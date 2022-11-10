<template>
  <div class="field">
    <input class="input" type="text" placeholder="Поиск" :value="search" @input="handleSearch">
    <img src="~/assets/search.svg" alt="Поиск" width="24">
  </div>
</template>

<script>
import {debounce} from '~/helpers'
import {mapGetters} from "vuex";

export default {
  name: "Search",
  computed: {
    ...mapGetters({
      'search': 'cats/getFilteredSearch',
    })
  },
  methods: {
    handleSearch: debounce(function (e) {
      if(e.target.value.trim()){
        this.$store.dispatch('cats/filterSearch', e.target.value)
      }
    }, 500),
  }
}
</script>

<style scoped lang="scss">

.field {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  padding-right: 10px;
  border-bottom: 1px solid var(--color);

  img {
    filter: var(--color-filter);
  }
}

.input {
  width: 90%;
  padding: 12px 15px;
  border: none;
  font-size: 16px;
}
</style>