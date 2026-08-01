<template>
  <h1>the name is {{ props.userName }} & age is {{ props.userAge }}</h1>
</template>

<script setup>
import { defineProps } from "vue";

let props = defineProps({
  userName: {
    type: String,
    required: true,
  },
  userAge: {
    type: Number,
    required: true,
  },
});
</script>
