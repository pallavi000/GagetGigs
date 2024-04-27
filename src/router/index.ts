// Composables
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/Home.vue";
import ProductDetail from "../views/ProductDetail.vue";
import NotFound from "../views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/product/:id",
      name: "Product",
      component: () => import("../views/ProductDetail.vue"),
    },
    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: () => import("../views/NotFound.vue"),
    },
  ],
});

export default router;
