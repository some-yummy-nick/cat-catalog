<template>
  <div class="wrapper">
    <Header/>
    <div class="content">
      <Nuxt/>
    </div>
    <Footer class="footer"/>
  </div>
</template>

<script>
import '../styles/globals.scss';
import Header from "~/components/Header";
import Footer from "~/components/Footer";

export default {
  name: "default",
  head: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap'
      }
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
  },
  components: {Header, Footer}
}
</script>

<style scoped lang="scss">
.wrapper {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.content {
  flex-grow: 1;
}

.footer {
  flex: 0 0 auto;
}
</style>