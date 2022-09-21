import { createRouter, createWebHistory } from "vue-router";
import loginPage from "./login-page.vue";
import registerPage from "./register-page.vue"
import mainPage from "./main-page.vue"

const router = createRouter({
    routes:[
        {
            path:"/",
            component: loginPage
        },
        {
            path:"/register",
            component: registerPage
        },
        {
            path:"/account",
            component: mainPage
        }
    ],
    history: createWebHistory()
})

export default router;