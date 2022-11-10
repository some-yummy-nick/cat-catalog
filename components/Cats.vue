<template>
  <div>
    <div v-if="filteredCats.length">
      <transition-group name="flip-list" tag="div" class="cats">
        <div v-for="cat of filteredCats" :key="cat.id">
          <nuxt-link :to="'catalog/' + cat.id">
            <Cat :cat="cat" :key="cat.id"/>
          </nuxt-link>
        </div>
      </transition-group>
    </div>
    <div v-else class="empty">Сожалеем, но таких котиков нет :(</div>
  </div>

</template>

<script>
import {mapGetters} from 'vuex'

import Cat from '~/components/Cat';

export default {
  name: 'Cats',
  components: {Cat},
  computed: {
    ...mapGetters({
      'cats': 'cats/getCats',
      'filteredCats': 'cats/getFilteredCats',
    })
  }
}
</script>

<style scoped lang="scss">
.cats {
  display: grid;
  grid-template-columns:  repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;
  grid-row-gap: 30px;
  margin-bottom: 150px;
}

.flip-list-move {
  transition: transform 1s;
}

.empty{
  font-size: 24px;
}
</style>