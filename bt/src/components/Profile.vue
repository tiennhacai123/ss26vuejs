<template>
  <div>
    <h3>Thông tin cá nhân</h3>
    <p>Id: {{ store.state.users[0].id }}</p>
    <p>Họ và tên: {{ store.state.users[0].name }}</p>
    <p>Giới tính: {{ store.state.users[0].gender }}</p>
    <p>Ngày sinh: {{ store.state.users[0].dateOfBirth }}</p>
    <p>Địa chỉ: {{ store.state.users[0].address }}</p>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'

const store = useStore()

</script>

<style>

</style>