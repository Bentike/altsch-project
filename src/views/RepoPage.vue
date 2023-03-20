<template>
  <div>
    <h1>List of all my github Repositories</h1>
    <router-link to="/">Home</router-link>
    <div class="repo-wrap">
      <div v-for="repo in currentRepos" :key="repo.id">
        <HelloCard :repository="repo.name">
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
      <div class="btn-wrap">
         <button class="pagination-btn" :disabled="page<= 1" @click="prevPage">prev</button>
         <button class="pagination-btn"  v-for="(num , idx) in buttons" :key="idx" :disabled="page=== num" @click="page = num">{{ num }}</button>
         <button class="pagination-btn" :disabled="page >= pages" @click="nextPage">next</button>
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
      page: 1,
      per_page: 6
    };
  },
  methods: {
    nextPage() {
      this.page += 1;
    },
    prevPage() {
      this.page -= 1;
    }
  },
  computed: {
    skip() {
      return this.page * this.per_page;
    },
    indexOfFirstRepo() {
      return this.skip - this.per_page;
    },

    currentRepos() {
      return this.repos.slice(this.indexOfFirstRepo, this.skip);
    },
    pages() {
      return this.repos.length / this.per_page;
    },
    buttons() {
      return Array.from({ length: this.pages }, (value, index) => index + 1);
    },
  },
  mounted() {
    fetch("https://api.github.com/users/bentike/repos")
      .then((res) => res.json())
      .then((data) => {
        this.repos = data;
      })
      .catch((err) => console.log("an error occur " + err));
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
  margin: 50px 20px;
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
.btn-wrap{
  padding: 20px;
}
.pagination-btn{
  padding: 10px;
  margin: 10px;
}
</style>
