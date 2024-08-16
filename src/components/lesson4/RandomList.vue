<template>
  <div>
    <div>
      <button @click="addItem">Add element</button>
      <ul>
        <li v-for="(item, index) in items" :key="index" :style="{ backgroundColor: item.color, fontSize: item.fontSize + 'px' }">
          {{ item.text }}
        </li>
      </ul>
    </div>
    <hr>
    <div>
      <button @click="toggleStyles">Змінити стиль</button>
      <div :class="['box', { active: isActive }]"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RandomList",
  data() {
    return {
      items: [],
      isActive: false,
    }
  },
  methods: {
    getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    },
    getRandomFontSize() {
      return Math.floor(Math.random() * (30)) + 14;
    },
    addItem() {
      const newItem = {
        text: `Element ${this.items.length + 1}`,
        color: this.getRandomColor(),
        fontSize: this.getRandomFontSize()
      };
      this.items.push(newItem);
    },

    toggleStyles() {
      this.isActive = !this.isActive;
    }
  },
  created() {
    for (let i = 0; i < 5; i++) {
      this.addItem();
    }
  }
}
</script>


<style scoped>
li {
  max-width: 250px;
  margin-top: 15px;
}

.box {
  margin-top: 15px;
  width: 50px;
  height: 50px;
  border: 1px solid grey;
  background-color: blue;
  transition: all 0.5s ease;
}

.box.active {
  width: 100px;
  height: 100px;
  background-color: yellow;
  transform: translateX(100px) ;
}
</style>