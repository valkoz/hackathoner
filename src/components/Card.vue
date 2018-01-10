<template>
  <div class="card-container">
      <b-card :title="title"  :img-src="imglink" img-alt="Image"
          img-top tag="article" class="card">
      <p class="card-text"> {{text}} </p>
      <router-link :to="id" style="color: #4d6d9a;">
        <button class="original-button" id="more">
          <span>Подробнее</span>
        </button>
      </router-link>
      </b-card>
  </div>
</template>

<script>
export default {
  props: ['id', 'imglink', 'text', 'title'],
  name: 'card'
}
</script>

<style scoped>
.card-container {
  margin-top: 20px;
  padding-bottom: 20px;
}
.card {
  margin-top: 0px;
  padding-bottom: 0px;
}
#more {
  font-size: 16px;
  float: right;
  margin: 0px;
}
</style>
