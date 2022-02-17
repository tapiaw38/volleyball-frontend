<template>
  <main class="site-main">
    <div class="new-detail">
      <div class="league">
        <router-link :to="{ name: 'home' }">
          <img src="../../../assets/img/home.png" alt="" />
        </router-link>
        <p>La liga</p>
      </div>
      <div class="container-image">
        <img
          src="https://www.paralympic.org/sites/default/files/styles/amp_metadata_content_image_min_696px_wide/public/2021-05/rwanda-rio-2016-sitting-volleyball.JPG?itok=KBPLONvY"
          alt=""
        />
      </div>
      <h2 class="new-title">Titulo de la noticia de voley</h2>
      <p class="new-subtitle">Lorem ipsum, dolor sit amet consectetur!</p>
      <p class="new-body">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem amet error
        atque quibusdam dolorem, laborum esse aspernatur ducimus blanditiis quis
        vel culpa molestiae. Quasi, reprehenderit praesentium? Vel fugit aut
        illo!
      </p>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.new-detail {
  margin-top: 150px;

  @media (max-width: 1200px) {
    margin-top: 150px;
  }
  @media (max-width: 750px) {
    margin-top: 100px;
  }

  .container-image {
    position: relative;
    margin: 0 auto;
    width: 100%;
    height: 30vw;
    overflow: hidden;
  }

  .new-title {
    font-size: 3rem;
    margin-top: 0.2em;
    color: $black;
  }

  .new-subtitle {
    font-size: 1.6rem;
    margin-top: 0em;
    color: $black;
    margin-top: 1em;
  }
  .new-body {
    font-size: 1.2rem;
    margin-top: 0em;
    color: $black;
    margin-top: 1em;
  }
}
</style>
