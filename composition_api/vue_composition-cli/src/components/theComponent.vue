<template>
  <h1>the name is Mohammed & age is 15</h1>
  <button @click="emits('handleClick')">click</button>
</template>

<script setup>
import { defineEmits } from "vue";

let emits = defineEmits(["handleClick"]);
// import { defineProps } from "vue";
//
// let props = defineProps({
//   userName: {
//     type: String,
//     required: true,
//   },
//   userAge: {
//     type: Number,
//     required: true,
//   },
// });
</script>
