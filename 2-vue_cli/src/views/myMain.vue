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

    <hr />

    <life-cycle />
    <my-Slot>
      <template #myTitle>
        <h1>this is my slot</h1>
      </template>
    </my-Slot>
  </div>
</template>

<script>
import sts from "@/components/stShow.vue";
import lifeCycle from "@/components/lifeCycle.vue";
import mySlot from "@/components/mySlot.vue";

export default {
  name: "MyMain",

  components: {
    sts,
    lifeCycle,
    mySlot,
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
