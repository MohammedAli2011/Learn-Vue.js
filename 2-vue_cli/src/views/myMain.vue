<template>
  <div class="my_main">
    <h1>hello world this is my main page</h1>
    <sts
      :inActive="active"
      :students="students"
      @updateActive="changeActive($event)"
    />

    <hr />

    <sts
      :inActive="active"
      :students="students"
      @updateActive="changeActive($event)"
    />
  </div>
</template>

<script>
import sts from "@/components/stShow.vue";

export default {
  name: "MyMain",

  components: {
    sts,
  },

  data() {
    return {
      students: ["Mohammed", "Ahmed", "Ali"],
      active: true,
    };
  },

  methods: {
    changeActive(data) {
      this.active = data;
    },
  },
};
</script>

<style lang="scss" scoped>
.my_main {
  h1 {
    color: green;
  }

  p {
    color: #ddd;
  }
}
</style>
