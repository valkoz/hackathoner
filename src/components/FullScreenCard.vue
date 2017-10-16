<template>
  <div class="fullScreenCard">
  <b-navbar toggleable="md" type="dark" variant="primary">
    <b-nav-toggle target="nav_collapse"></b-nav-toggle>
    <b-navbar-brand href="/">Hackathoner</b-navbar-brand>
  </b-navbar>
    <b-row class="maincontent">
        <b-col xl="8" lg="8" md="8" sm="12" >
          <b-card :title="currentHack[0].name"
              :img-src="currentHack[0].img_link"
              img-alt="Image"
              img-top
              tag="article"
              class="card"
              >
          <p class="card-text"> 
            {{currentHack[0].full_description}}
          </p>
          </b-card>
        </b-col>
        <b-col xl="4" lg="4" md="4" sm="12" >
          <calendar 
            v-bind:title="currentHack[0].name"
            v-bind:beginDateTime="currentHack[0].begin_date + ', ' + currentHack[0].start_time"
            v-bind:beginDate="currentHack[0].start_date"
            v-bind:beginTime="currentHack[0].start_time"
            v-bind:endDate="currentHack[0].end_date"
            v-bind:place="currentHack[0].place"
            v-bind:status="currentHack[0].status">
          </calendar>
          <navigation
            v-bind:coordinateX="currentHack[0].coordinateX"
            v-bind:coordinateY="currentHack[0].coordinateY"
            v-bind:place="currentHack[0].place">
          </navigation>
          <share
            v-bind:title="currentHack[0].name"
            v-bind:place="currentHack[0].place"
            v-bind:description="currentHack[0].description"
            v-bind:url="currentPage"
          ></share>
          <feedback></feedback>
        </b-col>
    </b-row>
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
      return this.$route.query.page
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

<style>
.maincontent {
  margin: 20px;
}
.card {
  margin-top: 20px;
}
</style>
