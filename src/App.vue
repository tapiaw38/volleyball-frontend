<template>
  <Header />
  <router-view v-slot="{ Component }">
    <component :is="Component" />
  </router-view>
  <Footer />
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  components: {
    Header: defineAsyncComponent(() => import("./partials/Header.vue")),
    Footer: defineAsyncComponent(() => import("./partials/Footer.vue")),
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  background-color: rgba(179, 169, 169, 0.137);
}
</style>
