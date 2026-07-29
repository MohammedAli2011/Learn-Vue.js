<template>
  <keep-alive>
    <div class="form">
      <form action="" @submit.prevent="makeStudent">
        <!--        <label for="normal">normal</label>-->
        <!--        <input id="normal" v-model="student.name_normal" type="text" />-->

        <!--        <br />-->
        <!--        {{ student.name_normal }}-->
        <!--        <br />-->

        <!--        <label for="lazy">lazy</label>-->
        <!--        <input id="lazy" v-model.lazy="student.name_lazy" type="text" />-->

        <!--        <br />-->
        <!--        {{ student.name_lazy }}-->
        <!--        <br />-->

        <!--        <hr />-->

        <!--        <label for="male">Male</label>-->
        <!--        <input-->
        <!--          id="male"-->
        <!--          v-model="student.gender"-->
        <!--          name=""-->
        <!--          type="radio"-->
        <!--          value="male"-->
        <!--        />-->

        <!--        <br />-->
        <!--        {{ student.gender }}-->
        <!--        <br />-->

        <!--        <label for="female">Female</label>-->
        <!--        <input-->
        <!--          id="female"-->
        <!--          v-model="student.gender"-->
        <!--          name=""-->
        <!--          type="radio"-->
        <!--          value="female"-->
        <!--        />-->

        <!--        <hr />-->

        <!--        <label for="football">Football</label>-->
        <!--        <input-->
        <!--          id="football"-->
        <!--          v-model="student.sports.football"-->
        <!--          name=""-->
        <!--          type="checkbox"-->
        <!--        />-->

        <!--        {{ student.sports.football }}-->

        <!--        <br />-->

        <!--        <label for="tennis">Tennis</label>-->
        <!--        <input-->
        <!--          id="tennis"-->
        <!--          v-model="student.sports.tennis"-->
        <!--          name=""-->
        <!--          type="checkbox"-->
        <!--        />-->

        <!--        <br />-->

        <!--        {{ student.sports.tennis }}-->

        <!--        <br />-->

        <div>
          <label for="">first name</label>
          <input v-model="student.firstName" type="text" />
        </div>

        <br />

        <div>
          <label for="">last name</label>
          <input id="" v-model="student.lastName" name="" type="text" />
        </div>

        <br />

        <div>
          <label for="">age</label>
          <input id="" v-model="student.age" name="" type="number" />
        </div>

        <br />

        <div>
          <label for="">email</label>
          <input id="" v-model="student.email" name="" type="email" />
        </div>

        <br />

        <div>
          <input id="" name="" type="submit" />
        </div>
        <ul>
          <li v-for="(st, i) in this.students" :key="i">
            <p>name is {{ st.name }}</p>
            <p>age is : {{ st.age }}</p>
            <p>email is : {{ st.email }}</p>
          </li>
        </ul>
      </form>
    </div>
  </keep-alive>
</template>

<script>
export default {
  data() {
    return {
      student: {
        // gender: "",
        // name_lazy: "",
        // name_normal: "",
        // sports: {
        //   football: false,
        //   tennis: false,
        // },
        name: "",
        email: "",
        age: "",
      },
      students: [],
    };
  },

  methods: {
    makeStudent() {
      this.students.push(this.student);
      this.student = {
        name: "",
        email: "",
        age: "",
      };
    },
  },
};
</script>
