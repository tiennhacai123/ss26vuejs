<template>
  <div>
    <button @click="toggleLanguage">
      {{ locale === "vi" ? "English" : "Tiếng Việt" }}
    </button>
    <p v-if="locale === 'vi'">Chuyển đổi ngôn ngữ!</p>
    <p v-else>Language Toggles!</p>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const locale = computed(() => store.state.locale);

const toggleLanguage = () => {
  store.commit("setLocale", locale.value === "vi" ? "en" : "vi");
};
</script>