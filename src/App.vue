<template>
  <Header/>
  <router-view v-slot="{ Component }">
      <component :is="Component" />
  </router-view>
  <Footer/>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  components: {
    Header: defineAsyncComponent (() => 
    import("./partials/Header.vue")
    ),
    Footer: defineAsyncComponent (() =>
    import("./partials/Footer.vue")
    ),
  }
};
</script>
