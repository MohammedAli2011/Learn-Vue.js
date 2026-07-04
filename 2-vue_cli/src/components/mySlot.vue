<template>
  <div class="container">
    my name is : {{ name }}
    <slot name="myTitle"></slot>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
};
</script>
