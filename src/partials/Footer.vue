<template>
  <div class="footer">
    <p>Liga Tinogastena de Voley </p>
    <img src="../assets/img/ball.png" alt="volley">
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
.footer {
  position: relative;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  z-index: 4;
  background: white;
  height: 120px;
  background-color: $black;
  color: $white;

  p {
    font-size: 0.9rem;
  }

  img {
    width: 30px;
    margin: 5px;
  }
}
</style>
