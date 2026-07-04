<!--<template>-->
<!--  <div class="my_main">-->
<!--    <h1>hello world this is my main page</h1>-->
<!--    <sts-->
<!--      :inActive="active"-->
<!--      :students="students"-->
<!--      @updateActive="changeActive($event)"-->
<!--    />-->

<!--    <hr />-->

<!--    <sts-->
<!--      :inActive="active"-->
<!--      :students="students"-->
<!--      @updateActive="changeActive($event)"-->
<!--    />-->

<!--    <hr />-->

<!--    <life-cycle />-->
<!--    <my-Slot name="mySlotOne">-->
<!--      <template #myTitle>-->
<!--        <h1>this is my slot one</h1>-->
<!--      </template>-->
<!--    </my-Slot>-->

<!--    <hr />-->

<!--    <slot-two name="mySlotTwo">-->
<!--      <template #myTitle>-->
<!--        <h1>this is my slot two</h1>-->
<!--      </template>-->
<!--    </slot-two>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import sts from "@/components/stShow.vue";-->
<!--import lifeCycle from "@/components/lifeCycle.vue";-->
<!--import mySlot from "@/components/mySlot.vue";-->
<!--import slotTwo from "@/components/mySlot.vue";-->

<!--export default {-->
<!--  name: "MyMain",-->

<!--  components: {-->
<!--    sts,-->
<!--    lifeCycle,-->
<!--    mySlot,-->
<!--    slotTwo,-->
<!--  },-->

<!--  data() {-->
<!--    return {-->
<!--      students: ["Mohammed", "Ahmed", "Ali"],-->
<!--      active: true,-->
<!--      name: "Ayman",-->
<!--    };-->
<!--  },-->

<!--  methods: {-->
<!--    changeActive(data) {-->
<!--      this.active = data;-->
<!--    },-->
<!--  },-->
<!--};-->
<!--</script>-->

<template>
  <div class="myMain">
    <h1>this is my main page</h1>
    <my-form></my-form>
  </div>
</template>

<script>
import myForm from "./components/myForm";

export default {
  name: "myMain",
  components: { myForm },
};
</script>

<style lang="scss" scoped>
h1 {
  color: green;
}

p {
  color: #ddd;
}
</style>
