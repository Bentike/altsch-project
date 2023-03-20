<template>
  <div v-if="loading" class="loading"></div>
</template>

<script>
export default {
  name: "LoadingComponent",
  props: { loading: Boolean },
};
</script>

<style>
.loading {
  border: 8px solid red;
  border-radius: 50%;
  border-top: 8px solid blue;
  border-bottom: 8px solid blue;
  width: 30px;
  height: 30px;
  margin: 0 auto;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
}
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
