import { createRouter, createWebHistory } from "vue-router";
import External from "@/components/External.vue";

function openWindow(url) {
  window.open(url, "_blank");
}

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("@/views/Home.vue"),
    },
    {
      path: "/soccer",
      beforeEnter() {
        openWindow("http://olafrv.com/futbol");
      },
      component: External,
    },
    {
      path: "/projects",
      beforeEnter() {
        openWindow("https://github.com/olafrv");
      },
      component: External,
    },
    {
      path: "/trending",
      beforeEnter() {
        openWindow("https://twitter.com/olafrv");
      },
      component: External,
    },
    {
      path: "/resume",
      beforeEnter() {
        openWindow("https://www.linkedin.com/in/olafrv/");
      },
      component: External,
    },
  ],
});
