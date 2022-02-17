<template>
  <main class="site-main">
    <section class="news-main">
      <div class="news-home" v-for="(_, index) in 3" :key="index">
        <router-link :to="{name: 'newDetail', params: {id: index} }">
          <card-new
            :title="'Abramóvich revienta la Premier y LaLiga: Koundé y 2 cracks para Tuchel Premier League'"
            :image="'https://www.paralympic.org/sites/default/files/styles/amp_metadata_content_image_min_696px_wide/public/2021-05/rwanda-rio-2016-sitting-volleyball.JPG?itok=KBPLONvY'"
            :league="'LaLiga'"
            :author="'ElUniversal'"
            :date="'12/05/2019'"
          ></card-new>
        </router-link>
      </div>
    </section>
    <div class="old-news">
      <i class="fas fa-volleyball-ball"></i>
      <h3>Ultimas Noticias</h3>
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
    <section class="container">
      <button class="btn-secondary btn-news">Ver mas noticas</button>
    </section>
  </main>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  name: "Home",
  components: {
    CardNew: defineAsyncComponent(() => import("../components/CardNew.vue")),
  },
};
</script>

<style lang="scss" scoped>

.news-main {
  display: grid;
  grid-template-columns: 65% 34%;
  gap: 1em;
  padding: 4em 0;
  min-width: 220px;

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

  @media screen and (max-width: 750px) {
    margin: 1em 0;
    h3 {
      font-size: 1rem;
    }
  }
}

.container {
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
