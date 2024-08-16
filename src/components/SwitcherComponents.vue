<template>
<div>
  <select v-model="currentComponent">
    <option value="one">1</option>
    <option value="two">2</option>
    <option value="three">3</option>
  </select>

  <ComponentOne v-if="currentComponent === 'one'"/>
  <ComponentTwo v-if="currentComponent === 'two'"/>
  <ComponentThree v-if="currentComponent === 'three'"/>
</div>
</template>

<script>
import ComponentOne from './ComponentOne.vue';
import ComponentTwo from './ComponentTwo.vue';
import ComponentThree from './ComponentThree.vue';

export default {
  name: 'SwitcherComponents',
  components: {
    ComponentOne,
    ComponentTwo,
    ComponentThree
  },
  data() {
    return {
      currentComponent: 'one',
    }
  },
}
</script>

<style scoped>

</style>