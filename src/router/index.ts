import { createRouter, createWebHashHistory,type RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        name: "home",
        path: "/home",
        component: () => import("@/components/Home.vue"),
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router