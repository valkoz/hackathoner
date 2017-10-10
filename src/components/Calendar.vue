<template>
  <div class="card-container">
      <b-card title="19 Октября 2017, 18:00"
          sub-title="online"
          tag="article"
          class="card"
          >
      <p class="card-text">
          <h5><b-button>Добавить в Google календарь</b-button></h5>
          <h5>БЦ "Водный". Москва, Головинское шоссе, д.5</h5>
      </p>
      </b-card>
  </div>
</template>

<script>
export default {
  name: 'calendar'
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