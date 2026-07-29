<template>
  <div class="contianer">
    <h1>hello to life cycle</h1>
    <p>this age is: {{ age }}</p>
    <button @click="age++">inc age</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Mohammed",
      age: 15,
    };
  },

  beforeCreate() {
    alert("beforeCreate");
  },

  created() {
    alert("Created");
  },

  beforeMount() {
    alert("beforeMount");
  },

  mounted() {
    alert("Mounted");
  },

  beforeUpdate() {
    alert("beforeUpdate");
  },

  updated() {
    alert("Updated");
  },

  beforeUnmount() {
    alert("beforeUnmount");
  },

  unmounted() {
    alert("Unmounted");
  },
};
</script>
