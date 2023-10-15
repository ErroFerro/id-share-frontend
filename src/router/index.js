import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../views/homepage.vue"),
    },
    {
      path: "/homepage",
      component: () => import("../views/homepage.vue"),
    },
    {
      path: "/choose",
      component: () => import("../views/choose.vue"),
    },
    {
      path: "/downloader",
      component: () => import("../views/downloader.vue"),
    },
  ],
});
