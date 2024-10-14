<template>
  <div>
    <p>Count: {{ store.state.count }}</p>
    <div>
        <button @click="decrease()">Decrease</button><button @click="increase()">Increase</button>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore()

const decrease = () => {
  store.commit('decrement', {
    amount: 1,
  });
}

const increase = () => {
  store.commit('increment', {
    amount: 1,
  });
}
</script>

<style>

</style>