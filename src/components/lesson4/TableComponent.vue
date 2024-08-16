<template>
<div>
  <div>
    <label>Enter number of rows:
      <input type="number" id="rows" v-model.number="rows" min="1"/>
    </label>
  </div>
  <div>
    <label>Enter number of columns:
      <input type="number" id="columns" v-model.number="columns" min="1"/>
    </label>
  </div>
  <table>
    <tr v-for="row in rows" :key="row">
      <td v-for="col in columns" :key="col">
        {{ row }}, {{ col }}
      </td>
    </tr>
  </table>
</div>
</template>

<script>
export default {
  name: "TableComponent",
  data() {
    return {
      rows: 2,
      columns: 2,
    };
  },
}
</script>

<style scoped>
table {
  margin-top: 20px;
  width: 350px;
  text-align: center;
}

td {
  padding: 10px;
  border: 1px solid black;
}
</style>