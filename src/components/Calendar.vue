<template>
  <div class="card-container">
      <b-card 
          tag="article"
          class="text-center"
          >
      <p class="card-text">
        
          <icon name="calendar" scale="4" class="icon"></icon> 
          <h2>{{beginDate}}</h2>
          <icon name="clock-o" scale="4" class="icon"></icon> 
          <h2>{{beginTime}}</h2>
          <h6>{{status}}</h6>


          <add-to-calendar 
                :title="title" 
                :location="place" 
                :start="new Date()"
                :end="new Date()"
                details="description" 
                inline-template>
            <span>
              <google-calendar id="google-calendar">
                  <button class="original-button" id="gc-button">
                      <span>Добавить в Google календарь</span>
                  </button>
              </google-calendar>
              <microsoft-calendar id="microsoft-calendar">
                  <button class="original-button" id="mc-button">
                    <span>Добавить в Microsoft календарь</span>
                  </button>
              </microsoft-calendar>
            </span>
          </add-to-calendar>
          <h3> {{place}} </h3>
          <a :href="officialSite">
            <button class="original-button" id="of-button">
              <span>Перейти на оффициальный сайт</span>
            </button>
          </a>
      </p>
      </b-card>
  </div>
</template>

<script>
export default {
  props: ['title', 'beginDateTime', 'beginDate', 'beginTime', 'place', 'status', 'officialSite'],
  name: 'calendar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.datetime {
  font-size: 20px;
}
.card-container {
  margin-top: 20px;
  padding-bottom: 20px;
}
.card {
  margin-top: 0px;
  padding-bottom: 0px;
}
.original-button {
  padding: 8px 5px;
}
#gc-button {
  padding: 10px 30px;
}
#mc-button {
  padding: 10px 22px;
}
#of-button {
  padding: 10px 20px;
}


</style>