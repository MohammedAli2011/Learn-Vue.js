<template>
  <div class="container">
    <ul class="">
      <li v-for="(student, i) in students" :key="i" class="">{{ student }}</li>
    </ul>
    <button @click="sts.shift()">click</button>

    <br />
    <br />
    <br />

    <p>{{ inActive }}</p>
    <button @click="$emit('updateActive', !this.inActive)">click</button>
  </div>
</template>

<script>
export default {
  // props: ["students"],
  props: {
    students: {
      type: Array,
      required: true,
    },

    inActive: {
      type: Boolean,
      required: true,
    },
  },

  emits: ["updateActive"],

  data() {
    return {
      sts: this.students,
      active: this.inActive,
    };
  },
};
</script>
