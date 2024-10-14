<template>
  <div class="login">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div>
        <label>Email</label>
        <input v-model="email" type="email" required />
      </div>
      <div>
        <label>Password</label>
        <input v-model="password" type="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';

const email = ref('');
const password = ref('');
const store = useStore();

onMounted(() => {
  const registeredUser = store.getters.getRegisteredUser;
  email.value = registeredUser.email;
  password.value = registeredUser.password;
});

const login = () => {
  if (email.value && password.value) {
    alert('Login successful!');
  } else {
    alert('Please enter valid credentials');
  }
};
</script>

<style scoped>
</style>
