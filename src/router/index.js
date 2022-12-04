import { createRouter, createWebHashHistory } from "vue-router"
import HomeView from "@/views/HomeView.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/AboutView.vue")
  },
  {
    path: "/inventory",
    name: "inventory",
    component: () => import("@/views/InventoryView.vue")
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: "active"
})

export default router
