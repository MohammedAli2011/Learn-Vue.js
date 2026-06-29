<template>
  <h1>this is my about page</h1>
  <students :st="students" />
</template>

<script>
import students from "@/components/stShow.vue";
export default {
  name: "MyMain",
  components: {
    students,
  },
  data() {
    return {
      students: ["sabre", "Ayman", "Mohsen"],
    };
  },
};
</script>
