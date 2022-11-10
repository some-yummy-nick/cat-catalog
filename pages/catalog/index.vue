<template>
  <div class="catalog">
    <div class="container">
      <h1 class="header">Каталог</h1>
      <div class="catalog-wrapper">
        <FilterComponent/>
        <div class="catalog-content">
          <button @click="sort" class="reset-btn sort active">
            <img v-if="order" src="~/assets/sort.svg" alt="sort" width="24" height="24">
            <img v-else src="~/assets/sort-active.svg" alt="sort" width="24" height="24">
            <span class="sort-text">По цене</span>
          </button>
          <Cats/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import FilterComponent from '~/components/Filter';
import Cats from '~/components/Cats';
import {mapGetters} from 'vuex';

export default {
  name: 'index',
  components: {FilterComponent, Cats},
  head: {
    title: 'Каталог'
  },
  computed: {
    ...mapGetters({
      'order': 'cats/getOrder',
    })
  },
  methods: {
    sort() {
      this.$store.dispatch('cats/setOrder')
      this.$store.dispatch('cats/orderCats')
    }
  }
}
</script>

<style scoped lang="scss">
.catalog-wrapper {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-gap: 50px;
}

.header {
  margin-top: 0;
  margin-left: 300px;
  margin-bottom: 45px;
  font-size: 36px;
  font-weight: 400;
}

.sort {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  margin-left: auto;

  img {
    margin-right: 10px;
    filter: var(--color-filter);
  }

  &:hover{
    color: var(--primary);

    img{
      filter: var(--primary-filter);
    }
  }
}

@media screen and (max-width: 767px) {
  .header {
    margin-bottom: 30px;
    margin-left: 0;
  }
  .catalog-wrapper {
    display: block;
  }
}
</style>