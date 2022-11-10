<template>
  <div>
    <button class="btn btn_active filter" @click="showFilter">Фильтры</button>
    <div :class="filterWrapper">
      <Search/>
      <Select/>
      <div class="checkboxes">
        <Checkbox text="Бесплатные" :change="changeFree" :checked="free" class="checkbox" name="free"/>
        <Checkbox text="Не бесплатные" :change="changePriced" :checked="priced" class="checkbox" name="price"/>
      </div>
      <button class="btn btn_active reset-btn" @click="apply">Применить</button>
      <button class="btn reset-btn" @click="clear" v-if="isClear || isApply">Сброс</button>
    </div>
  </div>
</template>

<script>
import Select from '~/components/Select';
import Search from '@/components/Search';
import Checkbox from '~/components/Checkbox';
import {mapGetters} from 'vuex';

export default {
  name: 'FilterComponent',
  components: {Checkbox, Search, Select},
  data: () => ({
    show: false,
  }),
  computed: {
    ...mapGetters({
      'free': 'cats/getFree',
      'priced': 'cats/getPriced',
      'isClear': 'cats/isClear',
      'isApply': 'cats/getApply',
    }),
    filterWrapper() {
      return this.show ? 'filter-wrapper active' : 'filter-wrapper'
    }
  },
  methods: {
    changeFree() {
      this.$store.dispatch('cats/setFree')
    },
    changePriced() {
      this.$store.dispatch('cats/setPriced')
    },
    apply() {
      this.show = !this.show;
      this.$store.dispatch('cats/setApply')
      this.$store.dispatch('cats/filterCats')
    },
    clear() {
      this.show = !this.show;
      this.$store.dispatch('cats/cleanFilter')
      this.$store.dispatch('cats/setApply')
    },
    showFilter() {
      this.show = !this.show;
    }
  }
}
</script>

<style scoped lang="scss">
.checkboxes {
  margin-bottom: 30px;
}

.checkbox:not(:last-child) {
  margin-bottom: 15px;
}

.btn_active {
  margin-bottom: 10px;
}
.filter{
  display: none;
}
@media screen and (max-width: 767px) {
  .filter-wrapper {
    display: none;

    &.active {
      display: block;
    }
  }

  .filter {
    display: block;
    margin-bottom: 30px;
  }
}
</style>