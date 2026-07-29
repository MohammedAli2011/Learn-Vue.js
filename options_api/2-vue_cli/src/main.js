import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const vueApp = createApp(App);
vueApp.use(router).mount("#app");

// vueApp.directive("maxWidth", (el, info) => {
//   el.style.maxWidth = info.value + "px";
// });
