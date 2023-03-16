<template>
  <AllRepos/>
  <HelloCard name="Bentike"/>
</template>

<script>
import AllRepos from './components/AllRepos.vue';
import HelloCard from './components/HelloCard.vue'

export default {
  name: 'App',
  components: {
    AllRepos,
    HelloCard
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
