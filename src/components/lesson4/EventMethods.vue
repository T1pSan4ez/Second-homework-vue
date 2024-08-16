<template>
  <div>
    <h2>Event Methods</h2>
    <form @submit.prevent="checkForm">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="formData.name">
        <span>{{ errors.name }}</span>
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="formData.email">
        <span>{{ errors.email }}</span>
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="formData.password">
        <span>{{ errors.password }}</span>
      </div>
      <button type="submit">Submit</button>
    </form>
    <div v-if="submitted">
      <h2>Form submitted</h2>
      <p>Name: {{ formData.name }}</p>
      <p>Email: {{ formData.email }}</p>
    </div>
    <hr>
    <div>
      <button @click="handleClick">Click</button>
      <div>
        <label for="toggle">Change process:</label>
        <input type="checkbox" id="toggle" v-model="useFirstHandler" />
      </div>
      <p>{{ messageProcess }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventMethods",
  data() {
    return {
      formData: {
        name: "",
        email: "",
        password: "",
      },
      errors: {},
      submitted: false,
      useFirstHandler: true,
      messageProcess: '',
    };
  },
  methods: {
    checkForm() {
      this.errors = {};

      if (!this.formData.name) {
        this.errors.name = "Name required.";
      } else if (this.formData.name.length < 3) {
        this.errors.name = "Name must be at least 3 characters.";
      }

      if (!this.formData.email) {
        this.errors.email = "Email required.";
      } else if (!this.validEmail(this.formData.email)) {
        this.errors.email = "Valid email required.";
      }

      if (!this.formData.password) {
        this.errors.password = "Password required.";
      } else if (this.formData.password.length < 4) {
        this.errors.password = "Password must be at least 4 characters.";
      }

      if (!this.errors.name && !this.errors.email && !this.errors.password) {
        this.submitted = true;
      }
    },
    validEmail(email) {
      let re = /\S+@\S+\.\S+/;
      return re.test(email);
    },
    firstHandler() {
      this.messageProcess = "This is the first handler!";
    },
    secondHandler() {
      this.messageProcess = "This is the second handler!";
    },
    handleClick() {
      if (this.useFirstHandler) {
        this.firstHandler();
      } else {
        this.secondHandler();
      }
    }
  },

}

</script>

<style scoped>
span {
  color: red;
}
</style>