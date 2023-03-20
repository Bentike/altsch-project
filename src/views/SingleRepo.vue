<template>
  <div class="single">
    <h1>More Details About Repository.</h1>
    <div>
      <router-link to="/">Home</router-link> <br /><br />
      <router-link to="/repo">Repos</router-link>
    </div>
    <div>
      <LoadingComponent :loading="isLoading" />
    </div>
    <div v-if="!isLoading">
      <HelloCard :repository="repo.name">
        <img :src="owner.avatar_url" alt="owner" class="owner-img" />
        <p><span class="title">Owner:</span> {{ owner.login }}</p>
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
</template>

<script>
import HelloCard from "../components/HelloCard.vue";
import LoadingComponent from "../components/LoadingComponent.vue";
export default {
  name: "SingleRepo",

  components: { HelloCard, LoadingComponent },

  data() {
    return {
      repo: {},
      owner: {},
      isLoading: false,
    };
  },

  methods: {
    getRepoName() {
      return JSON.parse(localStorage.getItem("repoName"));
    },
  },

  beforeMount() {
    this.isLoading = true;
    fetch(`https://api.github.com/repos/Bentike/${this.getRepoName()}`)
      .then((res) => res.json())
      .then((data) => {
        this.isLoading = false;
        this.repo = data;
        this.owner = data.owner;
      })
      .catch((err) => console.log("an error occur " + err));
  },
};
</script>

<style>
.single {
  width: 50%;
  margin: 0 auto;
}
.owner-img {
  width: 200px;
  height: 200px;
}
</style>
