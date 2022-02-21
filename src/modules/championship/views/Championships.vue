<template>
  <main class="site-main container">
    <div class="champion-list">
      <div class="league">
        <router-link :to="{ name: 'home' }">
         <i class="fas fa-home"></i>
        </router-link>
        <i class="fas fa-volleyball-ball"></i>
        <h3>Ligas de Voley y Torneos</h3>
      </div>
      <section class="champion">
        <div
        v-for="champion in championships"
        :key="champion.id"
        class="card-tournament"
        >
          <div class="tournament">
            <img :src="champion.picture ? champion.picture : defaultChampion" alt="" />
            <p>{{champion.name}}</p>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import useChampionship from "../composables/useChampionship";
import defaultChampion from "../../../assets/img/tournament.png";
export default {
  name: "Championships",
  setup() {
    const { championships } = useChampionship();
    return {
      championships,
      defaultChampion,
    };
  },
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
