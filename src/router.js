import { createRouter, createWebHistory } from "vue-router";
import loginPage from "./login-page.vue";
import registerPage from "./register-page.vue"
import mainPage from "./main-page.vue"
import explorePage from "./explore-page.vue"
import profilePage from "./profile-page.vue"

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
        },
        {
            path:"/explore",
            component: explorePage
        },
        {
            path:"/myprofile",
            component: profilePage
        }
    ],
    history: createWebHistory()
})

export default router;