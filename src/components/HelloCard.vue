<template>
  <div class="card" @click="saveRepoToLocalStorage(repository)">
    <router-link to="/myrepo">
      <slot/>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "HelloCard",
  props: ['repository'],
  methods: {
    saveRepoToLocalStorage (rep) {
      localStorage.setItem('repoName', JSON.stringify(rep));
    }
  }
};
</script>