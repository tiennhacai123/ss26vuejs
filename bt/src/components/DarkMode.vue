<template>
  <div>
    <input type="checkbox" v-model="isDarkMode" @change="toggleDarkMode" />
    <span>{{ isDarkMode ? 'Tối' : 'Sáng' }}</span>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const isDarkMode = computed(() => store.state.darkMode);

const toggleDarkMode = () => {
  store.commit('toggleDarkMode');
};
</script>

<style scoped>
body {
  background-color: #fff;
  color: #000;
}

.dark-mode {
  background-color: #222;
  color: #fff;
}
</style>