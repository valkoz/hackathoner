<template>
  <div class="card-container">
      <b-card :title="beginDateTime"
          :sub-title="status"
          tag="article"
          class="text-center"
          >
      <p class="card-text">
          <add-to-calendar 
                :title="title" 
                :location="place" 
                :start="beginDate"
                :end="beginDate"
                details="description" 
                inline-template>
            <span>
              <google-calendar id="google-calendar">
                  <h5><b-button>Добавить в Google календарь</b-button></h5>
              </google-calendar>
              <microsoft-calendar id="microsoft-calendar">
                  <h5><b-button>Добавить в Microsoft календарь</b-button></h5>
              </microsoft-calendar>
            </span>
          </add-to-calendar>
          <h5> {{place}} </h5>
      </p>
      </b-card>
  </div>
</template>

<script>
export default {
  props: ['title', 'beginDateTime', 'beginDate', 'beginTime', 'place', 'status'],
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