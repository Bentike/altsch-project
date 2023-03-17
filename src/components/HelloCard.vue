<template>
  <div class="card">
     <slot/>
  </div>
</template>

<script>
export default {
  name: "HelloCard",
  props: ["fullname", "url", "name", "id", "branch"]
};
</script>