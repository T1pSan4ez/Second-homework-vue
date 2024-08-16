<template>
<div>
  <button @click="saveEvent">Save Event</button>
  <ul>
    <li v-for="time in timeStamp" :key="time">{{ time }}</li>
  </ul>
</div>
</template>

<script>
export default {
  name: "SaveEvent",
  data() {
    return {
      timeStamp: [],
    }
  },
  methods: {
    saveEvent() {
      this.timeStamp.push(new Date().toLocaleString());
    }
  }
}
</script>

<style scoped>

</style>