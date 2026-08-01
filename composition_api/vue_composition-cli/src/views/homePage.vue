<template>
  <!--  <h1>Hello World</h1>-->

  <!--  <p ref="fullName">I am {{ name }} {{ lastName }}</p>-->

  <!--  <button @click="sayHello">say Hello</button>-->

  <!--  <p>{{ incAge }}</p>-->

  <!--  <input id="" v-model="age" name="" type="number" />-->

  <TheComponent :userAge="userage" :userName="firstname" />
</template>

<script setup>
import TheComponent from "@/components/theComponent.vue";
import { ref } from "vue";
//
let firstname = ref("Mohammed");
// let lastName = ref("Ali");
let userage = ref(15);
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
