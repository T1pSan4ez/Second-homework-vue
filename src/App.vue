<script>
import FirstSecondary from "@/components/FirstSecondary.vue";

export default {
  components: {FirstSecondary},
  data() {
    return {
      admin: {
        name: 'Alex',
        surname: 'Glotov',
        age: 23
      },
      selectedYear: "",
      movies: [
        {id: 1, title: "Movie 1", releaseYear: 2020},
        {id: 2, title: "Movie 2", releaseYear: 2014},
        {id: 3, title: "Movie 3", releaseYear: 2008},
        {id: 4, title: "Movie 4", releaseYear: 2001},
      ],
      ageCriteria: '',
      arrayUsers: [
        {id: 1, name: 'Maxim', surname: 'Galushka', age: 53},
        {id: 2, name: 'Ivan', surname: 'Ivanov', age: 30},
        {id: 3, name: 'Maria', surname: 'Petrova', age: 25},
        {id: 4, name: 'Maria', surname: 'SDasdad', age: 25},
        {id: 5, name: 'Maria', surname: 'ASDasd', age: 30}
      ],
      filteredArrayUsers: [],
      filteredMovies: [],
      baseNumber: '',
      basePow: '',
      errorMessage: '',
      reactivePow: null,
      reactiveSumma: null,
      apiData: null,
      arrayPrice: {
        price: 0,
        discount: 10,
        tax: 20
      },
      errorMessage2: '',
    };
  },
  methods: {
    changeUserData() {
      this.admin.name = "Александр";
      this.admin.surname = "Глотов";
      this.admin.age = 24;
    },
    updateUserData(event) {
      this.admin.name = event.target.value;
    },
    checkUserValues() {
      const numberPattern = /^\d+$/;

      if (!numberPattern.test(this.baseNumber) || !numberPattern.test(this.basePow)) {
        this.errorMessage = 'Please check your data';
      } else {
        this.errorMessage = '';
      }
    },
    handleCalculated(result) {
      this.reactivePow = result;
      this.reactiveSumma = result + 100;
    },
    filterByYear(releaseYear) {
      if (releaseYear === '') {
        this.filteredMovies = this.movies;
      } else {
        this.filteredMovies = this.movies.filter(user => user.releaseYear >= Number(releaseYear));
      }
    },
    async fetchApiData() {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/3');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      this.apiData = await response.json();
    },
    async postData (surname) {
      const response = await fetch('https://httpbin.org/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ surname }),
      });
      if (response.ok){
        console.log('Post successful');
      } else {
        console.log('Post error');
      }
    },
  },
  computed: {
    filteredUsers() {
      return this.arrayUsers.filter(user => user.age >= this.ageCriteria);
    },
    combinedData() {
      if (!this.apiData){
        return null;
      }
      return {
        ...this.apiData, adminName: `${this.admin.name} ${this.admin.surname}`
      };
    },
    discountAmount() {
      return (this.arrayPrice.price * this.arrayPrice.discount) / 100;
    },
    priceAfterDiscount() {
      return this.arrayPrice.price - this.discountAmount;
    },
    taxAmount() {
      return (this.priceAfterDiscount * this.arrayPrice.tax) / 100;
    },
    finalPrice() {
      return this.priceAfterDiscount + this.taxAmount;
    }
  },
  watch: {
    admin: {
      handler (newValue, oldValue) {
        console.log("Change admin:");
        console.log("Old data:", oldValue);
        console.log("New data:", newValue);
      },
      deep: true,
      immediate: true,
    },
    "admin.name": {
      handler(newValue, oldValue) {
        console.log(`Changed name from ${oldValue} to ${newValue}`);
      }
    },
    "admin.surname": {
      handler (newValue) {
        this.postData(newValue);
      }
    },
    finalPrice(newValue, oldValue) {
      console.log(`Old price: ${oldValue}. New price: ${newValue}`);
    }
  },
  mounted() {
    this.fetchApiData();
  }
}
</script>

<template>
  <main>
    <div>
      <p>Имя: {{ admin.name }}</p>
      <p>Фамилия: {{ admin.surname }}</p>
      <p>Возраст: {{ admin.age }}</p>
      <button @click="changeUserData">Change admin data</button>
      <hr>
    </div>
    <div>
      <label> Enter name:
        <input type="text" @input="updateUserData">
      </label>
      <hr>
    </div>
    <div>
      <label>Введите год выхода фильма:</label>
      <input type="number" v-model="selectedYear" @input="filterByYear(selectedYear)">
      <ul>
        <li v-for="film in filteredMovies" :key="film.id">
          {{ film.title }} : {{ film.releaseYear }}
        </li>
      </ul>
      <hr>
    </div>
    <div>
      <label>Enter base number:
        <input type="text" v-model.number="baseNumber" @input="checkUserValues">
      </label>
      <label>Enter power:
        <input type="text" v-model.number="basePow" @input="checkUserValues">
      </label>
      <div v-if="errorMessage" id="error-pow">
        {{ errorMessage }}
      </div>
      <div v-else>
        <FirstSecondary :baseNumber="Number(baseNumber)" :basePow="Number(basePow)" @calculated="handleCalculated"/>
      </div>
      <hr>
    </div>
    <div>
      <p v-if="reactiveSumma !== null">{{ reactivePow }} + 100 = {{ reactiveSumma }}</p>
      <hr>
    </div>
    <div>
      <select v-model="ageCriteria">
        <option disabled value="">Select age criteria</option>
        <option value="20">20+</option>
        <option value="30">30+</option>
        <option value="35">35+</option>
      </select>
      <ul>
        <li v-for="user in  filteredUsers" :key="user.id">
          Name: {{ user.name }}, Surname: {{ user.surname }}, Age: {{ user.age }}
        </li>
      </ul>
      <hr>
    </div>
    <div>
      <p v-if="combinedData">API Title: {{ combinedData.title }} ------ Admin: {{ combinedData.adminName }}</p>
      <hr>
    </div>
    <div>
      <h2>Калькулятор стоимости товара с учетом скидки и налогов</h2>
      <label>Введите сумму:
        <input type="number" v-model.number="arrayPrice.price">
      </label>
      <p>Цена товара: {{ arrayPrice.price }} грн</p>
      <p>Скидка: {{ discountAmount }} грн ({{ arrayPrice.discount }}%)</p>
      <p>Цена со скидкой: {{ priceAfterDiscount }} грн</p>
      <p>Налог: {{ taxAmount }} грн ({{ arrayPrice.tax }}%)</p>
      <p>Итоговая стоимость: {{ finalPrice.toFixed(2) }} грн</p>
      <hr>
    </div>
  </main>
</template>

<style scoped>
#error-pow {
  color: red;
}
</style>
