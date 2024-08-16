<template>
  <div>
    <div v-if="isMessageOne">{{messageOne}}</div>
    <div v-else>{{messageTwo}}</div>

    <button @click="toggleMessage" >Toggle Message</button>
  </div>
</template>

<script>
export default {
  name: 'ToggleComponent',
  data() {
    return {
      isMessageOne: true,
      messageOne: 'This is first message ',
      messageTwo: 'This is second message'
    }
  },
  methods: {
    toggleMessage() {
      this.isMessageOne = !this.isMessageOne;
    }
  }
}
</script>

<style scoped>

</style>