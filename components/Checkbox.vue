<template>
  <div>
    <label class="checkbox">
      <input type="checkbox" class="checkbox__input" @change="change" :checked="checked" :name="name"/>
      <span class="checkbox__custom">
      <img src="~/assets/check.svg" alt="чекбокс">
    </span>
      <span class="checkbox__block">
    {{ text }}
    </span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'Checkbox',
  props: [
    'text',
    'change',
    'checked',
    'name'
  ]
}
</script>

<style scoped lang="scss">
.checkbox {
  display: flex;
  align-items: center;

  &__input {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;

    &:checked ~ .checkbox__custom {
      background-color: var(--primary);
      border-color: transparent;
    }

    &:checked ~ .checkbox__custom img {
      opacity: 1;
    }

    &:focus-visible ~ .checkbox__block {
      color: var(--primary);
    }
  }

  &__custom {
    display: block;
    width: 20px;
    min-width: 20px;
    height: 20px;
    margin-right: 10px;
    border-radius: 4px;
    overflow: hidden;
    border: 1px solid #E8E9ED;
    transition: background-color var(--transition-delay);

    img {
      position: relative;
      opacity: 0;
      transition: opacity var(--transition-delay);
    }
  }
}

</style>