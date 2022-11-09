<template>
  <div class="cat">
    <div class="image-wrapper">
      <img v-if="cat.img" :src="cat.img" :alt="cat.title" width="250" height="220" class="img">
      <img v-else src="~/assets/placeholder-image.png" alt="placeholder" width="250" height="220" class="img">
    </div>
    <div class="desc">
      <div class="name">{{ cat.title }}</div>
      <div class="price" v-if="cat.price">{{ updatePrice(cat.price) }}</div>
      <div class="free" v-else>Бесплатно</div>
    </div>
  </div>
</template>

<script>
import {priceRu} from '~/helpers';

export default {
  name: "Cat",
  props: [
    'cat'
  ],
  methods: {
    updatePrice(price) {
      return priceRu(price)
    }
  }
}
</script>

<style scoped lang="scss">

.image-wrapper {
  position: relative;
  border-radius: 16px 16px 0 0;
  overflow: hidden;
}

.img {
  width: 100%;
  min-height: 220px;
  object-fit: cover;
}

.desc {
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid rgba(114, 77, 240, 0.3);
  border-top: none;
  border-radius: 0 0 16px 16px;
}

.name {
  display: -webkit-box !important;
  min-height: 38px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 15px;
}

.price,
.free{
  font-size: 20px;
  margin-left: auto;
}

.free {
  color: var(--primary);
}
</style>