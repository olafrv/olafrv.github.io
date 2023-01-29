import { createRouter, createWebHistory } from "vue-router";
import ExternalMessage from "@/components/ExternalMessage.vue";

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
      component: ExternalMessage,
    },
    {
      path: "/projects",
      beforeEnter() {
        openWindow("https://github.com/olafrv");
      },
      component: ExternalMessage,
    },
    {
      path: "/trending",
      beforeEnter() {
        openWindow("https://twitter.com/olafrv");
      },
      component: ExternalMessage,
    },
    {
      path: "/resume",
      beforeEnter() {
        openWindow("https://www.linkedin.com/in/olafrv/");
      },
      component: ExternalMessage,
    },
  ],
});
