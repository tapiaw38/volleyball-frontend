<template>
  <header class="site-header">
    <div class="barra">
      <div class="content-logo">
        <a href=""><img src="../assets/img/logo-liga.jpeg" alt="" /></a>
        <div class="logo">
          <i class="fas fa-volleyball-ball"></i>
          <a href="#">LTV</a>
        </div>
      </div>
      <nav class="site-navigation">
        <li><a href="#">Noticias</a></li>
        <li><a href="#">Ligas</a></li>
        <li><a href="#">Equipos</a></li>
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
          <li><a href="#">Noticias</a></li>
          <li><a href="#">Ligas</a></li>
          <li><a href="#">Equipos</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  setup() {
    const showNavMobile = () => {
      document.querySelector(".mobile-navigation").style.left = 0;
    };

    const closeNavMobile = () => {
      document.querySelector(".mobile-navigation").style.left = "-100%";
    };

    return {
      showNavMobile,
      closeNavMobile,
    };
  },
};
</script>

<style lang="scss" scoped>
/** header **/

.site-header {
  border-bottom: 4px solid $primary;
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
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  img {
    height: 2em;
    width: auto;
    margin: 0.3em;
  }
}

.barra {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 65vw;
  margin: 0 auto;

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
    }
  }
}

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.1em;
  background-color: $primary;
  padding: 0.1em 0.6em;
  border-radius: 15px;
  transition: all 0.8s ease;
}

.logo a {
  color: $black;
  font-weight: 600;
  padding: 0.1em 0.6em;
  border-radius: 15px;
  transition: all 0.8s ease;
}

.logo i {
  transition: all 0.8s ease;
  font-size: 1.2rem;
}

.logo:hover {
  background-color: $primary-hover;
}
.logo:hover a {
  color: $white;
}

.logo:hover i {
  transform: rotate(180deg);
  color: $white;
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

.site-navigation li a {
  padding: 2em 1em;
  color: $black;
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
}
</style>
