//该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";
import Welcome from '../pages/Welcome.vue'
import Search from '../pages/Search.vue'

// 创建一个路由器
export default new VueRouter({
    routes: [
        {
            path: '/welcome',
            component: Welcome,
        },
        {
            path: '/search',
            component: Search,
        },
    ]
});