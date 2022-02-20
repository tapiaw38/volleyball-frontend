<template>
  <main class="site-main">
    <div class="news-list">
      <div class="league">
        <router-link :to="{ name: 'home' }">
          <img src="../../../assets/img/home.png" alt="" />
        </router-link>
        <img src="../../../assets/img/volley.png" alt="">
        <p>Todas las noticias</p>
      </div>
      <section class="news">
        <template v-for="(_, index) in 9" :key="index">
          <card-new
            :title="'Abramóvich revienta la Premier y LaLiga: Koundé y 2 cracks para Tuchel Premier League'"
            :image="'https://www.paralympic.org/sites/default/files/styles/amp_metadata_content_image_min_696px_wide/public/2021-05/rwanda-rio-2016-sitting-volleyball.JPG?itok=KBPLONvY'"
            :league="'LaLiga'"
            :author="'ElUniversal'"
            :date="'12/05/2019'"
          ></card-new>
        </template>
      </section>
    </div>
  </main>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  name: "News",
  components: {
    CardNew: defineAsyncComponent(() =>
      import("../../../components/CardNew.vue")
    ),
  },
};
</script>

<style lang="scss" scoped>
.news-list {
  padding-top: 40px;

  @media (max-width: 1200px) {
    padding-top: 30px;
  }
  @media (max-width: 750px) {
    margin-top: 100px;
  }
}
</style>
