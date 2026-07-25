import { createRouter, createWebHistory } from "vue-router";
import myMain from "@/views/myMain.vue";
import aboutPage from "@/views/aboutPage.vue";

const routes = [
  {
    name: "home",
    path: "/",
    component: myMain,
    meta: {
      title: "Home",
    },
  },
  {
    name: "aboutPage",
    path: "/about/:username",
    component: aboutPage,
    meta: {
      title: "about",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
