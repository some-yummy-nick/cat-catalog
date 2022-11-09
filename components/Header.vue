<template>
  <header class="header">
    <div class="container">
      <div class="wrapper">
        <NuxtLink to="/">
          <img src="~/assets/logo.png" alt="Etton" class="logo"/>
        </NuxtLink>
        <div class="links">
          <NuxtLink to="/" class="link">Главная</NuxtLink>
          <NuxtLink to="/catalog" class="link" :class="{'nuxt-link-exact-active': isRouteActive }">Каталог</NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  computed: {
    isRouteActive: function () {
      return this.$nuxt.$route.path.includes("catalog");
    }
  }
}
</script>

<style scoped lang="scss">
.header {
  margin-bottom: 60px;
  padding: 20px 0;
  border-bottom: 1px solid var(--primary);
}

.wrapper {
  display: flex;
  align-items: center;
}

.logo {
  margin-right: 45px;
}

.link {
  border-radius: var(--border-radios);
  background-color: transparent;
  padding: 12px 25px;

  &.nuxt-link-exact-active {
    background-color: var(--primary);
    color: var(--white);
  }

  &:not(:last-child) {
    margin-right: 10px;
  }

  &:hover {
    background-color: rgba(var(--primary-rgb), 0.7);
    color: var(--white);
  }
}

@media screen and (max-width: 767px) {
  .header {
    margin-bottom: 30px;
  }
}
</style>