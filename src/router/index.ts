import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import setting from "../views/setting.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "setting",
    component: setting,
  },
  {
    path: "/users",
    name: "users",
    component: () =>
      import("../views/users.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
