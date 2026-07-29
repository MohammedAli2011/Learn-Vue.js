const userMixin = {
  data() {
    return {
      users: [],
    };
  },

  methods: {
    async getStudents() {
      await fetch("https://dummyjson.com/users")
        .then((res) => res.json())
        .then((data) => (this.users = data.users));
    },
  },

  async mounted() {
    await this.getStudents();
  },
};

export default userMixin;
