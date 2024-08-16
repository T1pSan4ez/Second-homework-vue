<template>
<div>
  <ul>
    <li v-for="item in items" :key="item.name">
      <p>{{ item.name }}</p>
      <ul>
        <li v-for="subItem in item.subInformation" :key="subItem">
          {{ subItem }}
        </li>
      </ul>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: "ObjectList",
  data() {
    return {
      items: [
        {
          name: "John",
          subInformation: ["Age: 25", "Student", "City: New York"]
        },
        {
          name: "Jane",
          subInformation: ["Age: 22", "Teacher", "City: Los Angeles"]
        },
        {
          name: "Tom",
          subInformation: ["Age: 30", "Doctor", "City: Chicago"]
        }
      ]
    }
  },
}
</script>

<style scoped>
p {
  font-weight: bold;
}
</style>