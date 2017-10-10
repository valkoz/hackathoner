<template>
  <div class="card-container">
      <b-card :title="title"
          :img-src="imglink"
          img-alt="Image"
          img-top
          tag="article"
          class="card">
      <p class="card-text">
        {{text}}
      </p>
      <router-link :to="id">Узнать подробную информацию</router-link>
      </b-card>
  </div>
</template>

<script>
export default {
  props: ['id', 'imglink', 'text', 'title'],
  name: 'card'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-container {
  margin-top: 20px;
  padding-bottom: 20px;
}
.card {
  margin-top: 0px;
  padding-bottom: 0px;
}
</style>
