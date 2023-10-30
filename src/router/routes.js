import { createRouter, createWebHistory } from 'vue-router';
import AuthenticationPage from '@/components/auth.vue';
import RegistrationPage from '@/components/reg.vue';
import MainPage from '@/components/main.vue';

const routes = [
    { path: '/', component: MainPage },
    { path: '/login', component: AuthenticationPage },
    { path: '/register', component: RegistrationPage },
    // добавьте остальные маршруты здесь
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;