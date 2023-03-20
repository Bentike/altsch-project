<template>
  <div class="single">
    <h1>More Details About Repository.</h1>
    <div>
      <router-link to="/">Home</router-link> <br /><br />
      <router-link to="/repo">Repos</router-link>
    </div>
    <HelloCard>
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
</template>

<script>
import HelloCard from "../components/HelloCard.vue";
export default {
  name: "SingleRepo",

  components: { HelloCard },

  data() {
    return {
      repo: {},
      owner: {},
    };
  },

  methods: {
    getRepoName() {
      return JSON.parse(localStorage.getItem("repoName"));
    },
  },

  beforeMount() {
    fetch(`https://api.github.com/repos/Bentike/${this.getRepoName()}`)
      .then((res) => res.json())
      .then((data) => {
        this.repo = data;
        this.owner = data.owner;
        console.log(this.owner);
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
