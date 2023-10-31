<template>
  <div class="login-container">
    <n-input v-model="login" placeholder="Логин" />
    <n-input v-model="password" placeholder="Пароль" type="password" />
    <n-button @click="loginUser" type="primary">Вход</n-button>
    <n-button @click="goToRegister" type="info">Регистрация</n-button>
  </div>
</template>

<script>
import { NInput, NButton } from 'naive-ui';

export default {
  components: {
    NInput,
    NButton,
  },
  data() {
    return {
      login: '',
      password: '',
    };
  },
  methods: {
    loginUser() {
      // Логика входа пользователя
    },
    goToRegister() {
      // Логика перехода на страницу регистрации
    },
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: rgba(126, 120, 120, 0.99);
}

/* Дополнительные стили для компонентов можно добавить здесь */
</style>