<template>
  <main class="site-main container">
    <div class="champion-list">
      <div class="league">
        <router-link :to="{ name: 'home' }">
          <img src="../../../assets/img/home.png" alt="" />
        </router-link>
        <img src="../../../assets/img/volley.png" alt="">
        <p>Ligas de Voley y Torneos</p>
      </div>
      <section class="champion">
        <div class="card-tournament">
          <div class="tournament">
          <img src="../../../assets/img/tournament.png" alt="">
          <p>Torneo de la Liga</p>
        </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  name: "Championships",
};
</script>

<style lang="scss" scoped>
.champion-list {
  padding-top: 30px;

  @media (max-width: 1200px) {
    padding-top: 30px;
  }
  @media (max-width: 750px) {
    margin-top: 100px;
  }
}

.champion {
  margin-top: 10%;
}

.card-tournament {
  background-color: $white;
  padding: 0 1em 1em 1em;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: left;
}

.tournament {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 80px;
    margin: 5px;
  }

  p {
    font-size: 0.9rem;
    color: $black;
  }
}

</style>
