<template>
  <div>
    <p>{{ store.state.company }}</p>
    <button @click="updateCompany()">Change State</button>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore()

function updateCompany() {
  store.commit('updateCompany', {
    amount: 'RikkeiSoft'
  });
}
</script>

<style>

</style>