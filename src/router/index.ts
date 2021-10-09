import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Layout from "@/layout/default";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Layout",
    component: Layout,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
