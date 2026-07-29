<template>
  <h1>this is my about page</h1>
  <p>{{ this.$route.params.username }}</p>

  <hr />

  <router-link :to="{ name: 'learning' }">learningPage</router-link>
  <span style="width: 10px; display: inline-block"></span>
  <router-link :to="{ name: 'wishlist' }">wishlistPage</router-link>

  <hr />
  <div class="">
    <router-view />
  </div>
</template>

<script>
export default {};
</script>
