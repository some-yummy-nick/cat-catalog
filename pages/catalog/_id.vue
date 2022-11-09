<template>
  <div class="cat">
    <div class="container">
      <nuxt-link to="/catalog" class="back">
        <span class="image">
         <img src="~/assets/arrow.svg" width="24" height="24" alt="Назад"/>
        </span>
        <span class="back-text">Вернуться в каталог</span>
      </nuxt-link>
      <div class="cat-wrapper">
        <img v-if="cat.img" :src="cat.img" :alt="cat.title" width="500" height="500"  class="img">
        <img v-else src="~/assets/placeholder-image.png" alt="placeholder" width="500" height="500"  class="img">
        <div class="desc">
          <div class="title">{{ cat.title }}</div>
          <div class="price">{{ updatePrice(cat.price) }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {priceRu} from "~/helpers";

export default {
  name: "_id",
  head() {
    return {
      title: this.cat.title,
    }
  },
  async asyncData({params, store}) {
    let cat = store.state.cats.list.find(item => item.id === Number(params.id));

    return {cat}
  },
  methods: {
    updatePrice(price) {
      return priceRu(price)
    }
  }
}
</script>

<style scoped lang="scss">
.cat {
  margin-top: -30px;
}

.back {
  display: flex;
  align-items: center;
  margin-bottom: 35px;

  &:hover {
    color: var(--primary);

    .image {
      border-color: var(--primary);

      img{
        filter: var(--primary-filter);
      }
    }
  }
}

.image {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  margin-right: 10px;
  border-radius: 100%;
  border: 1px solid var(--color);
  transition: border-color var(--transition-delay);

  img {
    filter: var(--color-filter);
  }
}

.cat-wrapper {
  display: flex;
}

.img {
  position: relative;
  margin-right: 60px;
  object-fit: cover;
  border-radius: var(--border-radios);
  overflow: hidden;

  &:after {
    content: attr(alt);
    font-size: 16px;
    position: absolute;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    text-align: center;
    border: 1px solid rgba(114, 77, 240, 0.3);
    border-radius: var(--border-radios);
  }
}

.title,
.price {
  font-size: 36px;
}

.title {
  margin-bottom: 20px;
}
</style>