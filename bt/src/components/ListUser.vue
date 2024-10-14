<template>
  <div>
    <table border="1">
      <thead>
        <tr>
          <th>Id</th>
          <th>Tên</th>
          <th>Giới tính</th>
          <th>Ngày sinh</th>
          <th>Địa chỉ</th>
          <th>Chức năng</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in store.state.users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.gender }}</td>
          <td>{{ user.dateOfBirth }}</td>
          <td>{{ user.address }}</td>
          <td>
            <button>Sửa</button>
            <button>Xóa</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore()
</script>

<style>

</style>