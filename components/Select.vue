<template>
  <div class="selectWrapper">
    <select class="selectNative js-selectNative" :value="category.label" @change="change" aria-labelledby="jobLabel">
      <option value="sel" disabled="" :selected="!category.label">Выберите категорию</option>
      <option v-for="option of options" :value="option.label" :key="'option-' + option.id">
        {{ option.label }}
      </option>
    </select>
    <div :class="{ isActive: isActive, 'selectCustom js-selectCustom': true }"
         :aria-hidden="!isActive">
      <div :class="{'selectCustom-trigger':true, active:Boolean(category.label)}" @click="toggle">
        {{ category.label || "Выберите категорию" }}
        <img src="~/assets/arrow.svg" width="24" height="24" alt="Стрелка">
      </div>
      <div class="selectCustom-options">
        <div :class="{'selectCustom-option':true, active:option.id === category.id}" v-for="option of options"
             :data-id="option.id" @click="clickOnOption"
             :data-value="option.label"
             :key="'data-option-' + option.id">{{ option.label }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Select",
  data() {
    return {
      isActive: false,
      opened: false,
    }
  },
  computed: {
    ...mapGetters({
      'options': 'cats/getCategories',
      'category': 'cats/getCategory',
    }),
  },
  mounted() {

  },
  methods: {
    toggle() {
      this.isActive = !this.isActive;
      if (this.isActive) {
        this.openSelectCustom()
      } else {
        this.closeSelectCustom()
      }
    },

    openSelectCustom() {

    },

    closeSelectCustom() {
      this.isActive = !this.isActive;
    },

    clickOnOption(e) {
      const label = e.target.dataset.value;
      const id = Number(e.target.dataset.id);
      this.closeSelectCustom()
      this.$store.dispatch('cats/setCategory', {id, label})
    },

    change(e) {
      const label = e.target.value;
      const id = Number(this.options.find(item => item.label === label).id);
      this.$store.dispatch('cats/setCategory', {id, label})
    }
  }
}
</script>

<style scoped lang="scss">
// Both native and custom selects must have the same width/height.
.selectNative,
.selectCustom {
  position: relative;
  width: 100%;
  height: 40px;
}

// Make sure the custom select does not mess with the layout
.selectCustom {
  position: absolute;
  top: 0;
  left: 0;
  display: none;
}

// This media query detects devices where the primary
// input mechanism can hover over elements. (e.g. computers with a mouse)
@media (hover: hover) {
  // Since we are using a mouse, it's safe to show the custom select.
  .selectCustom {
    display: block;
  }

  // In a computer using keyboard? Then let's hide back the custom select
  // while the native one is focused:
  .selectNative:focus + .selectCustom {
    display: none;
  }
}

/* Add the focus states too, They matter, always! */
.selectNative:focus,
.selectCustom.isActive .selectCustom-trigger {
  outline: none;
}

//
// Rest of the styles to create the custom select.
// Just make sure the native and the custom have a similar "box" (the trigger).
//

.select {
  position: relative;
}

.selectLabel {
  display: block;
  font-weight: bold;
  margin-bottom: 0.4rem;
}

.selectWrapper {
  position: relative;
  margin-bottom: 30px;
}

.selectNative,
.selectCustom-trigger {
  background-color: #fff;
  border-bottom: 1px solid var(--color);
}

.selectNative {
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-position-y: 0.8rem;
  padding: 0 0.8rem;
}

.selectCustom {
  &.isActive {
    img {
      transform: rotate(90deg);
    }
  }
}

.selectCustom-trigger {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-left: 15px;
  background-color: #fff;
  cursor: pointer;
  color: rgba(var(--color-rgb), 0.5);

  &.active {
    color: var(--color);
  }

  img {
    transform: rotate(-90deg);
  }
}

.selectCustom-trigger:hover {
  border-color: #8c00ff;
}

.selectCustom-options {
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  width: 100%;
  border: 1px solid var(--color);
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 0 4px #e9e1f8;
  z-index: 1;
  padding: 8px 0;
  display: none;
}

.selectCustom.isActive .selectCustom-options {
  display: block;
}

.selectCustom-option {
  position: relative;
  padding: 8px;
  padding-left: 15px;

  &.active {
    color: var(--primary);
  }
}

.selectCustom-option.isHover,
.selectCustom-option:hover {
  background-color: var(--primary); // contrast AA
  color: white;
  cursor: default;
}

.selectCustom-option:not(:last-of-type)::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>