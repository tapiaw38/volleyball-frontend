<template>
  <main class="site-main">
    <div class="news-list">
      <div class="league">
        <router-link :to="{ name: 'home' }">
          <img src="../../../assets/img/home.png" alt="" />
        </router-link>
        <img src="../../../assets/img/volley.png" alt="" />
        <p>Todas las noticias</p>
      </div>
      <section class="news">
        <template v-for="notice in news" :key="notice.id">
          <router-link :to="{ name: 'newDetail', params: { id: notice.id } }">
            <card-new
              :title="notice.title"
              :image="notice.picture ? notice.picture : defaultPicture"
              :league="notice.league.name"
              :author="'LTV'"
              :date="notice.created"
            ></card-new>
          </router-link>
        </template>
      </section>
    </div>
  </main>
</template>

<script>
import { defineAsyncComponent } from "vue";
import useNews from "../composables/useNews";

import defaultPicture from "../../../assets/img/default_new_picture.jpg";

export default {
  name: "News",
  components: {
    CardNew: defineAsyncComponent(() =>
      import("../../../components/CardNew.vue")
    ),
  },
  setup() {
    const { news } = useNews();
    return {
      news,
      defaultPicture,
    };
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
