<template>
  <main class="site-main">
    <section class="news-main">
      <div class="news-home" v-for="notice in news.slice(0,3)" :key="notice.id">
        <router-link :to="{name: 'newDetail', params: {id: notice.id} }">
          <card-new
            :title="notice.title"
            :image="notice.picture"
            :league="notice.league.name"
            :author="'LTV'"
            :date="notice.created"
          ></card-new>
        </router-link>
      </div>
    </section>
    <div class="old-news">
      <i class="fas fa-volleyball-ball"></i>
      <h3>Ultimas Noticias</h3>
    </div>
    <section class="news">
      <template v-for="notice in news.slice(4,10)" :key="notice.id">
        <router-link :to="{name: 'newDetail', params: {id: notice.id} }">
          <card-new
            :title="notice.title"
            :image="notice.picture"
            :league="notice.league.name"
            :author="'LTV'"
            :date="notice.created"
          ></card-new>
        </router-link>
      </template>
    </section>
    <section class="container-btn">
      <router-link 
        :to="{ name: 'news' }" 
        class="btn-secondary btn-news"
      >
        Ver mas noticas
      </router-link>
    </section>
  </main>
</template>

<script>
import { defineAsyncComponent } from "vue";
import useNews from "../modules/news/composables/useNews";
export default {
  name: "Home",
  components: {
    CardNew: defineAsyncComponent(() => import("../components/CardNew.vue")),
  },
  setup() {
    const { news } = useNews();
    return {
      news,
    };
  },
};
</script>

<style lang="scss" scoped>

.news-main {

  padding-top: 30px;
  display: grid;
  grid-template-columns: 65% 34%;
  gap: 1em;
  min-width: 220px;

  @media (max-width: 1200px) {
    padding-top: 30px;
  }

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
    padding: 2em 0;
  }
}

.news-home:first-child {
  grid-row-start: 1;
  grid-row-end: 3;

}

.news-main .articulo-noticia:nth-child(1) {
  grid-row: span 2;
}

.news-main .articulo-noticia:nth-child(1) h4 {
  font-size: 1.6rem;
}

/** ultimas news **/

.old-news {
  width: 100%;
  padding: 1em 2em;
  background-color: $black;
  color: $white;
  margin: 2em 0;
  text-transform: uppercase;
  border-right: 4px solid $primary;
  border-radius: 15px 0 0 0;
  display: flex;
  align-items: center;
  gap: 1em;
  min-width: 220px;

  @media (max-width: 1200px) {
    width: 90%;
  }

  @media screen and (max-width: 750px) {
    margin: 1em 0;
    width: 30%;
    h3 {
      font-size: 1rem;
    }
  }
}

.container-btn {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.btn-news {
  font-size: 1rem;
  font-weight: 700;
}
</style>
