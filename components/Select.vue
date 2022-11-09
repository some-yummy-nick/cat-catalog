<template>
  <label for="select" class="select">
    <input type="radio" name="list" value="not_changed" id="bg" checked />
    <input type="radio" name="list" value="not_changed" id="select">
    <label class="bg" for="bg"></label>
    <span class="items">
        <span class="item" v-for="option of options" :key="option.id">
          <input type="radio" name="list" :value="option.label" :id="'option-'+option.id">
        <label :for="'option-'+option.id">{{ option.label }}</label>
        </span>
        <span id="text">Выберите категорию</span>
      </span>
  </label>
</template>

<script>
export default {
  name: "Select",
  props: [
    'options'
  ],
}
</script>

<style scoped>
.select{
  margin-bottom: 30px;
}

input {
  display: none;
}

#text {
  position: absolute;
  display: block;
  top: 0;
  padding-left: 10px;
}

.select {
  display: inline-block;
  width: 100%;
  height: 34px;
  line-height: 30px;
  position: relative;
}

.select:before {
  content: ">";
  display: inline-block;
  background: white;
  position: absolute;
  right: -5px;
  top: 2px;
  z-index: 3;
  width: 30px;
  height: 26px;
  text-align: center;
  line-height: 26px;
  transform: rotate(90deg);
  cursor: pointer;
}

.select input[name="list"]:not(:checked) ~ #text {
  color: black;
  background: white;
}

.select input[name="list"]:checked ~ #text {
  background: transparent;
  color: transparent;
  z-index: 2;
}

#select:disabled ~ .items #text {
  background: #eee;
}

.items {
  display: block;
  min-height: 30px;
  position: absolute;
  border-bottom: 1px solid  var(--color);
  overflow: hidden;
  width: 100%;
  cursor: pointer;
}

#select:not(:checked) ~ .items {
  height: 30px;
}

.items label {
  border-top: 2px solid #ddd;
  display: none;
  padding-left: 10px;
  background: white;
}

.items label:hover {
  background: #eee;
  cursor: pointer;
}

#select:checked ~ .items {
  padding-top: 30px;
}

#select:checked ~ .items label {
  display: block;
}

.items input:checked + label {
  position: relative;
  z-index: 2;
  display: block !important;
  border: none;
  background: white;
}

#select:checked ~ .bg
{
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 0;
}

</style>