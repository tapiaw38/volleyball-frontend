<template>
  <div class="site-main">
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </div>
</template>

<script>
export default {
  name: "NewLayout",
};
</script>

<style lang="scss" scoped></style>
