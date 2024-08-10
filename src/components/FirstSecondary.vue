<script>
export default {
  name: "FirstSecondary",
  props: {
    baseNumber: {
      type: Number,
      required: true,
    },
    basePow: {
      type: Number,
      required: true,
    },
  },
  computed: {
    result() {
      const result = Math.pow(this.baseNumber, this.basePow);
      this.$emit('calculated', result);
      return result;
    }
  }
}
</script>

<template>
  <div>
    <p>{{ baseNumber }} ^ {{ basePow }} = {{ result }}</p>
  </div>
</template>

<style scoped>

</style>