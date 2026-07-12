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

<!--<template>-->
<!--  <div class="myMain">-->
<!--    <h1>this is my main page</h1>-->

<!--    <br />-->
<!--    <br />-->
<!--    <br />-->

<!--    <form action="" @submit.prevent="addStudent">-->
<!--      <div>-->
<!--        <label for="">first Name</label>-->
<!--        <input v-model="user.firstName" type="text" />-->
<!--      </div>-->

<!--      <br />-->

<!--      <div>-->
<!--        <label for="">last Name</label>-->
<!--        <input v-model="user.lastName" type="text" />-->
<!--      </div>-->

<!--      <br />-->

<!--      <div>-->
<!--        <label for="">age</label>-->
<!--        <input id="" v-model="user.age" name="" type="number" />-->
<!--      </div>-->

<!--      <br />-->

<!--      <div>-->
<!--        <label for="">email</label>-->
<!--        <input id="" v-model="user.email" name="" type="email" />-->
<!--      </div>-->

<!--      <br />-->

<!--      <div>-->
<!--        <label for="">role</label>-->
<!--        <input id="" v-model="user.role" name="" type="text" />-->
<!--      </div>-->

<!--      <br />-->

<!--      <div>-->
<!--        <input id="" name="" type="submit" />-->
<!--      </div>-->

<!--      <ul style="list-style: none">-->
<!--        <li v-for="user in this.users" :key="user.id">-->
<!--          <hr />-->

<!--          <div class="name">-->
<!--            <h2 style="color: green">-->
<!--              <span style="color: black">name is :</span>-->
<!--              {{ user.firstName }}-->
<!--              {{ user.lastName }}-->
<!--            </h2>-->
<!--          </div>-->

<!--          <div-->
<!--            class="id"-->
<!--            style="display: flex; justify-content: start; margin-left: 25px"-->
<!--          >-->
<!--            <p style="color: green">-->
<!--              <span style="color: black">id is:</span> {{ user.id }}-->
<!--            </p>-->
<!--          </div>-->

<!--          <div-->
<!--            class="age"-->
<!--            style="display: flex; justify-content: start; margin-left: 25px"-->
<!--          >-->
<!--            <p style="color: green">-->
<!--              <span class="" style="color: black"> age is : </span>-->
<!--              {{ user.age }}-->
<!--            </p>-->
<!--          </div>-->

<!--          <div-->
<!--            class="roles"-->
<!--            style="-->
<!--              margin-left: 25px;-->
<!--              display: flex;-->
<!--              justify-content: start;-->
<!--              align-items: center;-->
<!--            "-->
<!--          >-->
<!--            <p-->
<!--              class=""-->
<!--              style="color: green; display: flex; justify-content: center"-->
<!--            >-->
<!--              <span style="color: black">role is:</span>-->
<!--              <span>{{ user.role }}</span>-->
<!--            </p>-->
<!--          </div>-->

<!--          <hr />-->
<!--        </li>-->
<!--      </ul>-->
<!--    </form>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  name: "myMain",-->

<!--  components: {},-->

<!--  data() {-->
<!--    return {-->
<!--      user: {-->
<!--        firstName: "",-->
<!--        lastName: "",-->
<!--        email: "",-->
<!--        age: "",-->
<!--        role: "",-->
<!--      },-->
<!--      users: [],-->
<!--    };-->
<!--  },-->

<!--  methods: {-->
<!--    async getStudents() {-->
<!--      localStorage.setItem("users", []);-->
<!--      let users = localStorage.getItem("users");-->
<!--      await fetch("https://dummyjson.com/users")-->
<!--        .then((res) => res.json())-->
<!--        .then((data) => (users = data.users));-->
<!--      this.users = users;-->
<!--      this.users === users;-->
<!--    },-->

<!--    async addStudent() {-->
<!--      const dataRequest = {-->
<!--        headers: { "content-type": "application/json" },-->
<!--        method: "POST",-->
<!--        body: JSON.stringify(this.user),-->
<!--      };-->
<!--      await fetch("https://dummyjson.com/users/add", dataRequest)-->
<!--        .then((res) => res.json())-->
<!--        .then((data) => this.users.push(data));-->
<!--      this.user = {-->
<!--        firstName: "",-->
<!--        lastName: "",-->
<!--        email: "",-->
<!--        age: "",-->
<!--        role: "",-->
<!--      };-->
<!--    },-->
<!--  },-->

<!--  async mounted() {-->
<!--    await this.getStudents();-->
<!--  },-->
<!--};-->
<!--</script>-->

<template>
  <h1>this is my main page</h1>

  <div>
    <div class="container">
      <!--suppress VueUnrecognizedDirective -->
      <p v-max-width="1000" class="">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
        architecto, dignissimos, dolores est explicabo illo laboriosam magni
        mollitia repudiandae sit soluta unde? A iure nobis qui quibusdam rem
        temporibus voluptatum!
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
h1 {
  color: green;
}
</style>
