<template>
  <div class="card">
    <router-link to="/myrepo">
      <slot/>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "HelloCard",
  props: ["fullname", "url", "name", "id", "branch"]
};
</script>