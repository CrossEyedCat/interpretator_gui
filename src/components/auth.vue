<template>
  <div>
    <input type="text" placeholder="Логин" v-model="login">
    <input type="password" placeholder="Пароль" v-model="password">
    <button @click="loginUser">Вход</button>
    <button @click="goToRegister">Регистрация</button>
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
    loginUser() {
      // Logic for user login
    },
    goToRegister() {
      // Logic to go to registration page
    }
  }
}
</script>