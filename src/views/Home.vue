<template>
  <main class="site-main">
    <section class="news-main">
      <template v-for="(_, index) in 3" :key="index">
        <card-new
          :title="'Abramóvich revienta la Premier y LaLiga: Koundé y 2 cracks para Tuchel Premier League'"
          :image="'https://www.paralympic.org/sites/default/files/styles/amp_metadata_content_image_min_696px_wide/public/2021-05/rwanda-rio-2016-sitting-volleyball.JPG?itok=KBPLONvY'"
          :league="'LaLiga'"
          :author="'ElUniversal'"
          :date="'12/05/2019'"
        ></card-new>
      </template>
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
/** main **/
.site-main {
  max-width: 65vw;
  margin: 0 auto;
  transition: all 0.3s ease-in-out;

  @media (max-width: 1200px) {
    padding-top: 60px;
  }

  @media (max-width: 768px) {
    padding-top: 70px;
  }
}

.news-main {
  display: grid;
  grid-template-columns: 65% 34%;
  gap: 1em;
  padding: 6em 0;
  min-width: 220px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 3em 0;
  }

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
    padding: 2em 0;
  }
}

.news-main .articulo-noticia:nth-child(1) {
  grid-row: span 2;
}

.news-main .articulo-noticia:nth-child(1) h4 {
  font-size: 1.6rem;
}

/** ultimas news **/

.news {
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1em;
  padding: 0 0 2em 0;
  min-width: 220px;

  .articulo-noticia {
  &:hover {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    transition: all .4s ease-out;
    z-index: 2;
  }
}

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }
}

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
