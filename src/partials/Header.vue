<template>
  <header class="site-header">
    <div class="content-barra">
      <div class="barra">
        <div class="content-logo">
          <router-link :to="{ name: 'home' }">
            <img src="../assets/img/logo-liga.png" alt="logo" />
          </router-link>
          <div>

            <p class="logo" href="#">Liga Tinogasteña de Voley</p>
          </div>
        </div>
        <nav class="site-navigation">
          <li>
            <router-link :to="{ name: 'news' }"> Noticias </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'championships' }"> Campeonatos </router-link>
          </li>
          <li></li>
        </nav>

        <a @click="showNavMobile" class="menu_on">
          <span></span>
          <span></span>
          <span></span>
        </a>

        <nav class="mobile-navigation">
          <a @click="closeNavMobile" class="close">X</a>
          <ul>
            <li>
              <router-link :to="{ name: 'home' }"> Inicio </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'news' }"> Noticias </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'championships' }"> Campeonatos </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <transition>
      <div class="content-teams" v-if="isActiveTeam">
        <template v-for="(_, index) in 0" :key="index">
          <a href=""><img src="../assets/img/logo-liga.png" alt="" /></a>
        </template>
      </div>
    </transition>
  </header>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Header",
  setup() {
    let isActiveTeam = ref(true);

    const showNavMobile = () => {
      document.querySelector(".mobile-navigation").style.left = 0;
    };

    const closeNavMobile = () => {
      document.querySelector(".mobile-navigation").style.left = "-100%";
    };

    const onScroll = () => {
      const scroll = window.scrollY;

      if (scroll > 500) {
        isActiveTeam.value = false;
      } else {
        isActiveTeam.value = true;
      }
    };

    window.addEventListener("scroll", onScroll);

    return {
      isActiveTeam,
      showNavMobile,
      closeNavMobile,
    };
  },
};
</script>

<style lang="scss" scoped>
/** header **/

.site-header {
  position: fixed;
  width: 100%;
  z-index: 4;
  background: white;
  top: 0;
  left: 0;
  right: 0;
}

.content-logo {
   display: flex;
    justify-content: center;
    align-items: center;
    gap: .5em;

    padding: .2em .6em;
    border-radius: 33px;
        transition: all .8s ease;
  img {
    height: 2em;
    width: auto;
  }
}

.content-barra {
  width: 100%;
  border-bottom: 3px solid $primary;
}

.barra {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 65vw;
  margin: 0 auto;

  @media (max-width: 1200px) {
    .logo {
      font-size: 0.9rem;
    }
  }

  @media screen and (max-width: 750px) {
    font-size: 1.2rem;
    margin: 0;
    .logo {
      display: none;
    }
    img {
      position: absolute;
      right: 5%;
      top: 0;
      bottom: 0;
      margin: auto;
    }
  }
}

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .5em;
  background-color: var(--primary);
  border-radius:33px;
  transition: all .8s ease;
  font-size: 1.3rem;
  font-weight: 800; 

  padding:  .6em 1em;
}

.logo a {
  color: var(--black);
    font-weight: 600;
    padding: .1em .6em;
    border-radius: 15px;
    transition: all .8s ease;
}

.site-navigation {
  display: flex;
  gap: 0.3em;
  padding: 1.5em;
}

.site-navigation li {
  list-style: none;
  @media screen and (max-width: 750px) {
    display: none;
  }
}

.site-navigation li a:hover {
  color: $primary;
}

.site-navigation li a {
  padding: 2em;
  color: $black;
  font-size: 1rem;
  font-weight: 700;
}

/* content teams */

.content-teams {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
  height: 50px;
  background-color: $black;

  img {
    height: 32px;
    width: auto;
  }

  @media screen and (max-width: 750px) {
    display: none;
  }
}

/* menu mobile */

.menu_on {
  padding-left: 10px;
  cursor: pointer;
  display: none;
  width: 30px;
  height: 20px;
  position: absolute;
  z-index: 2;
  @media screen and (max-width: 750px) {
    display: block;
  }
}

.menu_on span {
  width: 100%;
  height: 4px;
  border-radius: 4px;
  display: block;
  position: absolute;
  background: $black;
  transition: all 0.25s ease;
  transform-origin: 0px 100%;
}

.menu_on span:nth-child(2) {
  top: calc(50% - 2px);
}

.menu_on span:nth-child(3) {
  bottom: 0;
}

.mobile-navigation {
  display: none;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  left: -100%;
  width: 70%;
  z-index: 2;
  padding: 90px 30px 30px;
  background: $black;
  transition: all 0.75s ease;
  font-size: 1.2em;
  overflow-y: auto;

  li {
    list-style: none;
  }

  a {
    display: block;
    text-decoration: none;
    padding: 10px;
    color: $white;
    border-bottom: 2px solid $primary;
    transition: all ease 0.25s;
    &:hover {
      color: rgba(255, 255, 255, 1);
      border-bottom-color: $primary-hover;
    }
  }

  .close {
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 10px;
    border: none;
    font-family: "Courier New", Courier, monospace;
    font-size: 30px;
    font-weight: bolder;
  }

  @media screen and (max-width: 750px) {
    display: block;
  }
}
</style>
