import { createRouter, createWebHistory } from "vue-router";
import myMain from "@/views/myMain.vue";
import aboutPage from "@/views/aboutPage.vue";
import learningPage from "@/views/learningPage.vue";
import wishlistPage from "@/views/wishlistPage.vue";

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
    children: [
      {
        name: "learning",
        path: "learning",
        component: learningPage,
      },

      {
        name: "wishlist",
        path: "wishlist",
        component: wishlistPage,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
