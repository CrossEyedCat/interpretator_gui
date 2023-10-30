<template>
  <div>
    <input type="text" placeholder="Логин" v-model="login">
    <input type="password" placeholder="Пароль" v-model="password">
    <button @click="registerUser">Зарегистрироваться</button>
    <button @click="goBack">Назад</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: '',
      password: ''
    };
  },
  methods: {
    registerUser() {
      // Logic for user registration
    },
    goBack() {
      // Logic to go back to the previous page
    }
  }
}
</script>