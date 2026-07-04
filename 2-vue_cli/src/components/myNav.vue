<template>
  <nav class="">
    <div class="logo">
      <img alt="logo" src="@/assets/logo.png" />
    </div>

    <div class="links">
      <ul>
        <li v-for="link in links" :key="link">
          <a href="" title="link">{{ link }}</a>
        </li>
      </ul>
    </div>

    <div class="buttons">
      <button class="" title="btn">logIn</button>
      <button class="" title="btn">signIn</button>
      <button class="" title="btn">logOut</button>
      <button class="" title="btn">signOut</button>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: ["link1", "link2", "link3", "link4", "link5"],
    };
  },
};
</script>

<style lang="scss" scoped>
nav {
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px !important;
  background-color: #ddd;
}

.logo {
  width: 50px;

  img {
    max-width: 100%;
  }
}

.links {
  ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    li {
      a {
        padding: 10px;
        text-decoration: none;
        background-color: #eee;
        margin-left: 5px;
        margin-right: 5px;
        border-radius: 5px;
        border: 1px solid #000;
      }
    }
  }
}

.buttons {
  button {
    padding: 10px;
    margin: 5px;
    border-radius: 5px;
    border: 1px solid #000;
    cursor: pointer;
    background-color: green;
    font-weight: bold;
    color: #fff;
  }
}
</style>
