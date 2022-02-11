<template>
  <Header/>
  <router-view v-slot="{ Component }">
      <component :is="Component" />
  </router-view>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  components: {
    Header: defineAsyncComponent (() => 
    import("./partials/Header.vue")
    ),
  }
};
</script>