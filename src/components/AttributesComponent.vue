<template>
<div>
  <label>
    Disable attribute
    <input type="checkbox" v-model="isDisabled"/>
  </label>

  <label>
    Readonly attribute
    <input type="checkbox" v-model="isReadonly"/>
  </label>

  <input :disabled="isDisabled" :readonly="isReadonly" type="text" placeholder="Enter text here"/>
</div>
</template>

<script>
export default {
  name: 'AttributesComponent',
  data() {
    return {
      isDisabled: false,
      isReadonly: false,

    }
  },
};
</script>


<style scoped>
div {
  display: flex;
  flex-direction: column;
  max-width: 200px;
}
</style>