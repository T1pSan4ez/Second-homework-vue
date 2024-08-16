<template>
  <div class="main-page" :class="currentTheme">
    <h2>Change theme</h2>
    <button @click="toggleTheme">Toggle</button>
    <hr>
    <h2>Lesson 3</h2>
    <hr>
    <Products/>
    <hr>
    <GlobalComponent/>
    <hr>
    <ToggleComponent/>
    <hr>
    <ConditionalComponent/>
    <hr>
    <SwitcherComponents/>
    <hr>
    <AttributesComponent/>
    <hr>
    <h2>Lesson 4</h2>
    <hr>
    <SaveEvent/>
    <hr>
    <EventMethods/>
    <hr>
    <RandomList/>
    <hr>
    <TableComponent/>
    <hr>
    <ObjectList/>
    <hr>
  </div>
</template>

<script>
import Products from "@/components/ProductsComponent.vue";
import GlobalComponent from "@/components/GlobalComponent.vue";
import ToggleComponent from "@/components/ToggleComponent.vue";
import ConditionalComponent from "@/components/ConditionalComponent.vue";
import SwitcherComponents from "@/components/SwitcherComponents.vue";
import AttributesComponent from "@/components/AttributesComponent.vue";
import SaveEvent from "@/components/lesson4/SaveEvent.vue";
import EventMethods from "@/components/lesson4/EventMethods.vue";
import RandomList from "@/components/lesson4/RandomList.vue";
import TableComponent from "@/components/lesson4/TableComponent.vue";
import ObjectList from "@/components/lesson4/ObjectList.vue";

export default {
  name: 'App',
  components: {
    Products,
    GlobalComponent,
    ToggleComponent,
    ConditionalComponent,
    SwitcherComponents,
    AttributesComponent,
    SaveEvent,
    EventMethods,
    RandomList,
    TableComponent,
    ObjectList,

  },
  data() {
    return {
      isDarkTheme: false,
    }
  },
  methods: {
    toggleTheme() {
      this.isDarkTheme = !this.isDarkTheme;
    }
  },
  computed: {
    currentTheme() {
      return this.isDarkTheme ? 'dark-theme' : 'light-theme';
    }
  }
}
</script>

<style>
.main-page {
  padding: 25px;
}

.light-theme {
  background-color: white;
  color: black;
}

.light-theme button {
  background-color: #007bff;
  color: white;
}

.dark-theme {
  background-color: black;
  color: white;

}

.dark-theme button {
  background-color: #e74c3c;
  color: white;
}

</style>
