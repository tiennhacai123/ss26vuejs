<template>
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>Id</th>
            <th>Tên sản phẩm</th>
            <th>Giá</th>
            <th>Số lượng</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in store.state.products" :key="product.id">
            <td>{{ product.id }}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.price }}</td>
            <td>{{ product.quantity }}</td>
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