<template>
  <article class="articulo-noticia">
    <div class="noticia-img">
      <img :src="image" alt="" />
    </div>
    <div class="noticia-texto">
      <p class="liga-2">{{ league }}</p>
      <h4>
        {{ title }}
      </h4>

      <div class="noticia-autor">
        <span>{{ author }} |</span>
        <span> {{ date }}</span>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "CardNew",
  props: {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    league: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.liga-1 {
  background-color: $secondary;
  padding: 0.3em 0.6em;
  border-radius: 33px;
  margin: 1em 0;
}

.liga-2 {
  background-color: $success;
  padding: 0.3em 0.6em;
  border-radius: 33px;
  margin: 1em 0;
}

.articulo-noticia {
  position: relative;
  cursor: pointer;
  &:hover {
    img {
        filter: brightness(70%);
        transition: all .4s ease-out;
    }
  }
}

.noticia-img {
  height: 100%;
  position: relative;
  cursor: pointer;

  img {
    display: block;
    height: 100%;
    object-fit: cover;
    filter: brightness(40%);
  }
}

.noticia-texto {
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  flex-direction: column;
  gap: 0.3em;
  padding: 1em;
  color: $white;
}

.noticia-texto p {
  font-size: 0.8rem;
}

.noticia-texto h4 {
  font-size: 1rem;
  max-width: 50ch;
}

.noticia-autor span {
  font-size: 0.7rem;
}
</style>
