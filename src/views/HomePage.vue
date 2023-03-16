<template>
  <div>
    <h1>This is the Home page</h1>
    <p>Click the Repos link to view All my github Repositories</p>
    <router-link to="/repo">Repos</router-link>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      repos: [],
    };
  },
  methods: {},
  mounted() {
    fetch("https://api.github.com/users/bentike/repos")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  },
};
</script>
