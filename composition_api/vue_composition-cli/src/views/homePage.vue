<script setup></script>
<template>
  <!--  <h1>Hello World</h1>-->

  <!--  <p ref="fullName">I am {{ name }} {{ lastName }}</p>-->

  <!--  <button @click="sayHello">say Hello</button>-->

  <!--  <p>{{ incAge }}</p>-->

  <!--  <input id="" v-model="age" name="" type="number" />-->

  <!--  <TheComponent @handle-click="executeClick()" />-->
  <!--  <h2 v-color="'red'">hello</h2>-->
  <!--  :userAge="userage" :userName="firstname"-->

  <h1>{{ counter.value }}</h1>
  <button @click="increase()">increase</button>
  <button @click="decrease()">decrease</button>
</template>

<script setup>
import counterFunc from "@/mixins/counter";

let { counter, increase, decrease } = counterFunc;
// import TheComponent from "@/components/theComponent.vue";
// // import { useRoute, useRouter } from "vue-router";
// // import { ref } from "vue";
//
// // let router = useRouter();
// // let route = useRoute();
// let executeClick = () => {
//   console.log("clicked");
// };
// const vColor = {
//   mounted: (el, data) => {
//     console.log(data.value);
//     console.log(el);
//     el.style.color = `${data.value}`;
//   },
// };

// console.log(router);
// console.log(route);
//
// let firstname = ref("Mohammed");
// let lastName = ref("Ali");
// let userage = ref(15);
// let fullName = ref(1);
// let incAge = computed(() => {
//   return age.value + 5;
// });
//
// setTimeout(() => {
//   console.log(fullName.value);
// }, 2000);
//
// function sayHello() {
//   console.log("hello");
// }
</script>
