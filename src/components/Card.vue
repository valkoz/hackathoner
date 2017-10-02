<template>
  <div class="card">
    <div>
      <b-card :title="title"
          :img-src="imglink"
          img-alt="Image"
          img-top
          tag="article"
          >
      <p class="card-text">
        {{text}}
      </p>
      <router-link :to="id">Принять участие</router-link>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id', 'imglink', 'text', 'title'],
  name: 'card',
  data () {
    return {
      id, title, text, imglink //for FullScreenCard 
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  margin-top: 10px
}
</style>
