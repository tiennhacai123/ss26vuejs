<template>
  <div>
    <p>{{ store.state.randomNumbers }}</p>
    <button @click="generateRandomNumber">Generate Random Number</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const randomNumbers = ref([]);

const generateRandomNumber = () => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  randomNumbers.value.push(randomNumber);
  store.dispatch("generateRandomNumber", randomNumber);
};
</script>