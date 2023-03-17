<template>

<!-- code to store item in localStorage
localStorage.setItem('repoName', JSON.stringify(prop)); -->

<!-- 
 gets repoName from local storage
   const getRepoName = () => {
    return JSON.parse(localStorage.getItem('repoName'));
  } -->

  <!-- fetch Single User Repo -->
  <!-- useEffect(() => {
        fetch(`https://api.github.com/repos/Bentike/${getRepoName()}`)
             .then(res => res.json())
             .then(data => {
                setRepo(data);
                setOwner(data.owner);
            });
    }, []); -->

  <div>
    <h1>List of all my github Repositories</h1>
    <router-link to="/">Home</router-link>
    <div class="repo-wrap">
      <div v-for="repo in repos" :key="repo.id">
          <HelloCard v-bind:repository="repo.name">
            <p><span class="title">Fullname:</span> {{ repo.full_name }}</p>
            <p><span class="title">Url:</span> {{ repo.url }}</p>
            <p><span class="title">Name:</span> {{ repo.name }}</p>
            <p><span class="title">ID:</span> {{ repo.id }}</p>
            <p>
              <span class="title">Default Branch:</span>
              {{ repo.default_branch }}
            </p>
          </HelloCard>
      </div>
    </div>
  </div>
</template>

<script>
import HelloCard from "../components/HelloCard.vue";
export default {
  components: { HelloCard },
  name: "RepoPage",
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
        this.repos = data;
      });
  },
};
</script>

<style>
.repo-wrap {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: #000;
  padding: 30px;
}
.card {
  width: 500px;
  margin: 20px;
  border-radius: 15px;
  background-color: red;
  padding: 20px;
  transition: all ease-in-out 0.2s;
}
.card:hover {
  transform: scale(1.1);
}
.title {
  color: #000;
  font-style: italic;
  font-weight: bold;
}
p {
  color: #fff;
}
</style>
