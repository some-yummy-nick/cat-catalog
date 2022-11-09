<template>
  <div>
    <Input/>
    <Select :options="options"/>
  </div>
</template>

<script>
import data from '~/data/categories.json'
import Select from "~/components/Select";
import Input from "@/components/Input";

export default {
  name: "FilterComponent",
  components: {Input, Select},
  data: () => ({
    options: data.options
  }),
}
</script>

<style scoped lang="scss">

</style>