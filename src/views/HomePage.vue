<template>
  <div>
    <h1>This is the Home page</h1>
    <p>Click the Repos link to view All my github Repositories</p>
    <div class="repo-wrap">
    <div v-for="repo in repos" :key="repo.id">
      <div class="card">
        <p><span class="title">Fullname:</span> {{ repo.full_name }}</p>
        <p><span class="title">Url:</span> {{ repo.url }}</p>
        <p><span class="title">Name:</span> {{ repo.name }}</p>
        <p><span class="title">ID:</span> {{ repo.id }}</p>
        <p><span class="title">Default Branch:</span> {{ repo.default_branch }}</p>
      </div>
    </div>
    </div>
    <!-- <HelloCard fullname="Ciroma Chuks Adekunle" url="https://bentike@github.com" name="github" id="20" branch="Master"/> -->
    <router-link to="/repo">Repos</router-link>
  </div>
</template>

<script>
// import HelloCard from '../components/HelloCard.vue'
export default {
  name: "HomePage",
  // components:{HelloCard},
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
        console.log(data);
      });
  },
};
</script>

<style>
.repo-wrap{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: #000;
  padding: 30px;
}
 .card{
  width: 500px;
  margin: 20px;
  border-radius: 15px;
  background-color: red;
  padding: 20px;
  transition: all ease-in-out .2s;
 }
 .card:hover{
  transform: scale(1.1); 
 }
 .title{
  color: #000;
  font-style: italic;
  font-weight: bold;
 }
 p{
  color:#fff
 }
</style>