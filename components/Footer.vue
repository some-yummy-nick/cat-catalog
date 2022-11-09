<template>
  <footer class="footer">
    <div class="container">
      <div class="wrapper">
        <div class="name">
          Шаймарданов Марат Рифарович
        </div>
        <div class="link">
          <a href="https://github.com/some-yummy-nick/cat-catalog" target="_blank">https://github.com/some-yummy-nick/cat-catalog</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped lang="scss">
.footer {
  padding: 30px 0;
  border-top: 1px solid var(--primary);
}

.wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

@media screen and (max-width: 767px) {
  .footer {
    padding: 20px 0;
  }

  .wrapper {
    align-items: flex-start;
  }

  .name {
    margin-bottom: 20px;
  }
}
</style>