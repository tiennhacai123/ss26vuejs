<template>
  <div class="register">
    <h2>Register</h2>
    <form @submit.prevent="register">
      <div>
        <label>Email</label>
        <input v-model="email" type="email" required />
      </div>
      <div>
        <label>Password</label>
        <input v-model="password" type="password" required />
      </div>
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const store = useStore();
const router = useRouter();

const register = () => {
  store.dispatch('registerUser', { email: email.value, password: password.value });
  router.push({ name: 'Login' });
};
</script>

<style scoped>
</style>
