<template>
  <div class="card" @click="getRepo(repository)">
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
    getRepo (rep) {
        console.log(rep);
    }
  }
};
</script>