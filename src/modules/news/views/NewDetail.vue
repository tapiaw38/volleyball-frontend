<template>
  <main class="site-main container">
    <div class="new-detail">
      <div class="league">
        <router-link :to="{ name: 'home' }">
          <img src="../../../assets/img/home.png" alt="" />
        </router-link>
        <img src="../../../assets/img/volley.png" alt="">
        <p>{{newDetail?.league?.name}}</p>
      </div>
      <div class="container-image">
        <img
          :src="newDetail.picture ? newDetail.picture : defaultPicture"
          alt=""
        />
      </div>
      <h2 class="new-title">{{newDetail?.title}}</h2>
      <p class="new-subtitle">{{newDetail?.sub_title}}</p>
      <p class="new-body">{{newDetail?.content}}</p>
    </div>
  </main>
</template>

<script>
import { ref, onMounted } from "vue";
import useNews from "../composables/useNews";

import defaultPicture from "../../../assets/img/default_new_picture.jpg";

export default {
  name: "NewDetail",
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const { newById } = useNews();

    let newDetail = ref('null');

    onMounted(() => {
      newDetail.value = newById(props.id);
    });

    return {
      newDetail,
      defaultPicture,
    };
  },
};
</script>

<style lang="scss" scoped>
.new-detail {
  padding-top: 40px;

  @media (max-width: 1200px) {
    padding-top: 30px;
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
