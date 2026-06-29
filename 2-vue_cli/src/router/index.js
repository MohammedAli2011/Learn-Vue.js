import { createRouter, createWebHashHistory } from "vue-router";
import myMain from "@/views/myMain.vue";
import aboutPage from "@/views/aboutPage.vue";

const routes = [
  {
    name: "home",
    path: "/",
    component: myMain,
  },
  {
    name: "aboutPage",
    path: "/about",
    component: aboutPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
