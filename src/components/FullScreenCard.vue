<template>
  <div class="fullScreenCard">
  <b-navbar toggleable="md" type="dark" class="navbar">
    <b-nav-toggle target="nav_collapse"></b-nav-toggle>
    <b-navbar-brand href="/">Hackathoner</b-navbar-brand>
    <b-navbar-brand href="/static/about.html">About</b-navbar-brand>
  </b-navbar>
    <b-row class="maincontent">
        <b-col xl="8" lg="7" md="12" sm="12" >
          <b-card
              :img-src="currentHack.img_link"
              img-alt="Image"
              img-top
              tag="article"
              class="card"
              >
          <p class="card-text">
            <h1>{{currentHack.name}}</h1>
            <div class="description" v-html = "currentHack.full_description"></div>
          </p>
          </b-card>
        </b-col>
        <b-col xl="4" lg="5" md="12" sm="12">
          <calendar
            v-bind:title="currentHack.name"
            v-bind:beginDateTime="currentHack.begin_date + ', ' + currentHack.start_time"
            v-bind:beginDate="currentHack.begin_date"
            v-bind:beginTime="currentHack.start_time"
            v-bind:endDate="currentHack.end_date"
            v-bind:place="currentHack.place"
            v-bind:status="currentHack.status"
            v-bind:officialSite="currentHack.site_link">
          </calendar>

          <div v-if="currentHack.place != 'online'">
            <navigation
              v-bind:coordinateX="currentHack.coordinateX"
              v-bind:coordinateY="currentHack.coordinateY"
              v-bind:place="currentHack.place">
            </navigation>
          </div>


          <share
            v-bind:title="currentHack.name"
            v-bind:place="currentHack.place"
            v-bind:description="currentHack.description"
            v-bind:url="currentPage"
          ></share>
          <!--<feedback></feedback>-->
        </b-col>
    </b-row>
    <footer class="footer"> </footer>
  </div>
</template>

<script>
import Calendar from './Calendar.vue'
import Navigation from './Navigation.vue'
import Feedback from './Feedback.vue'
import Share from './Share.vue'

export default {
  props: ['id'], // from router
  name: 'fullScreenCard',
  components: {
    Calendar,
    Navigation,
    Share,
    Feedback
  },
  computed: {
    currentHack () {
      return this.$store.state.currentHack
    },
    currentPage () {
      let path = this.$route.query.page
      return "hackathoner.ru" + "/#/" + this.id
    }
  },
  methods: {
    getFullPage: function() {
      this.$store.dispatch('getCurrentHack', {byId: this.id})
    }
  },
  created: function(){
    this.getFullPage()
  }
}
</script>

<style scoped>
.maincontent {
  margin: 20px;
}
.card {
  margin-top: 20px;
}
.footer {
  height: 40px;
}
.navbar {
  background-color: #5085A5;
}
.description {
  text-indent: 30px;
  font-size: 20px;
  text-align: justify;
}
</style>
