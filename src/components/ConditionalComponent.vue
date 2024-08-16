<template>
<div>
  <div v-if="isVisible">
    <p>This is a V-IF element!</p>
  </div>
  <div v-show="isVisible">
    <p>This is a V-SHOW element!</p>
  </div>
  <button @click="toggleVisibility">Toggle Visibility</button>
</div>
</template>

<script >
export default {
  name: 'ConditionalComponent',
  data() {
    return {
      isVisible: true,
    }
  },
  methods: {
    toggleVisibility() {
      this.isVisible = !this.isVisible;
    }
  }
}
</script>


<style scoped>

</style>