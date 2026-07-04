<template>
  <div class="form">
    <form action="">
      <label for="normal"></label>
      <input id="normal" type="text" />

      <label for="lazy"></label>
      <input id="lazy" type="text" />

      <hr />

      <label for="male">Male</label>
      <input id="male" name="" type="radio" value="male" />

      <label for="female">Female</label>
      <input id="female" name="" type="radio" value="female" />

      <hr />

      <label for="football"></label>
      <input id="football" name="" type="checkbox" />

      <label for="tennis"></label>
      <input id="tennis" name="" type="checkbox" />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      student: {
        gender: "",
        sport: false,
        name: "",
      },
    };
  },
};
</script>
