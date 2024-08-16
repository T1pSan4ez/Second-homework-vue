<template>
  <div class="main-page">
    <v-container>
      <div>
        <label>Min price
          <input type="number" v-model="minPrice">
        </label>
        <label>Max price
          <input type="number" v-model="maxPrice">
        </label>
      </div>
      <v-row>
        <v-col v-for="product in paginatedProducts" :key="product.id">
          <div>
            {{ product.title }}
          </div>
          <div>
            {{ product.price }}
          </div>
        </v-col>
      </v-row>
    </v-container>
    <div>
      <button id="buttonPag" @click="prevPage" :disabled="currentPage === 1">Prev</button>
      <button id="buttonPag" @click="nextPage" :disabled="currentPage === totalPages">Next</button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
    </div>
  </div>
</template>

<script>
import axiosInstance from "@/services/axios";

export default {
  name: 'ProductsComponent',
  components: {},
  data() {
    return {
      products: [],
      currentPage: 1,
      itemsPerPage: 4,
      minPrice: 1,
      maxPrice: 999,
    }
  },
  methods: {
    getProducts() {

      axiosInstance.get('/products')
          .then(response => {
            this.products = response.data;
          })
          .catch(error => {
            console.error(error);
          });
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.filteredProducts.length / this.itemsPerPage);
    },
    paginatedProducts() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredProducts.slice(start, end);
    },
    filteredProducts() {
      return this.products.filter(product => {
        const price = product.price;
        const meetsMin = this.minPrice === null || price >= this.minPrice;
        const meetsMax = this.maxPrice === null || price <= this.maxPrice;
        return meetsMin && meetsMax;
      });
    },
  },
  mounted() {
    this.getProducts();
  }
}
</script>

<style scoped>
#buttonPag {
  margin-right: 5px;
}
</style>