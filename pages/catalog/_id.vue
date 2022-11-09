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
        <img v-if="cat.img" :src="cat.img" :alt="cat.title" width="500" height="500" class="img">
        <img v-else src="~/assets/placeholder-image.png" alt="placeholder" width="500" height="500" class="img">
        <div class="desc">
          <div class="title">{{ cat.title }}</div>
          <div class="price" v-if="cat.price">{{ updatePrice(cat.price) }}</div>
          <div class="free" v-else>Бесплатно</div>
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

      img {
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
  max-width: 100%;
  height: auto;
  margin-right: 60px;
  object-fit: cover;
  border-radius: var(--border-radios);
  overflow: hidden;
}

.title,
.price,
.free {
  font-size: 36px;
}

.title {
  margin-bottom: 20px;
}

.free {
  color: var(--primary);
}

@media screen and (max-width: 767px) {
  .cat {
    margin-top: 0;
  }

  .cat-wrapper {
    display: block;
  }

  .title,
  .price,
  .free {
    font-size: 20px;
  }

  .title {
    margin-bottom: 10px;
  }

  .img {
    margin-bottom: 25px;
  }
}
</style>