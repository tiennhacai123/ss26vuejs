<template>
  <div>
    <h1>Header</h1>
    <p>Gia tri cua count {{store.state.count}}</p>
    <button @click="increse">Increase</button>
    <p>count lay theo getter: {{store.getters.getCount}}</p>
    <ul>
        <li v-for="todo in store.state.todos" :key="todo.id">{{todo.name}}</li>
    </ul>
    <button @click="getDoneTodo">Lay ra cac cong viec da hoan thanh</button>
    </div>
</template>

<script setup>
import { useStore } from 'vuex';
    const store = useStore();
    console.log("gia tri cua store", store);

    const getDoneTodo = ()=>{
        console.log("Cac cong viec da hoan thanh",store.getters.doneTodo);
    }
    const increse = ()=>{
        store.commit("increaseCount",
            {
                amount:5
            }
        )
    }
</script>

<style>

</style>