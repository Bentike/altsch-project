<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome To My Alt School Final Project"/>
  <HelloCard name="Bentike"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HelloCard from './components/HelloCard.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
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
