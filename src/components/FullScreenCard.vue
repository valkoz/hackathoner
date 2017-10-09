<template>
  <div class="fullScreenCard">
  <b-navbar toggleable="md" type="dark" variant="primary">
    <b-nav-toggle target="nav_collapse"></b-nav-toggle>
    <b-navbar-brand href="/">Hackathoner</b-navbar-brand>
  </b-navbar>
    <b-row class="maincontent">
        <b-col xl="8" lg="8" md="8" sm="12" >
          <b-card :title="currentHack[0].name"
              :img-src="currentHack[0].imglink"
              img-alt="Image"
              img-top
              tag="article"
              class="card"
              >
          <p class="card-text">
            fullScreenCard {{id}} 
            {{currentHack[0].description}}
          </p>
          </b-card>
        </b-col>
        <b-col xl="4" lg="4" md="4" sm="12" >
          <calendar></calendar>
          <navigation></navigation>
        </b-col>
    </b-row>
  </div>
</template>

<script>
import Calendar from './Calendar.vue'
import Navigation from './Navigation.vue'

export default {
  props: ['id'], // from router
  name: 'fullScreenCard',
  components: {
    Calendar,
    Navigation,
  },
  computed: {
    currentHack () {
      return this.$store.state.currentHack
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
