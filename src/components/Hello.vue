<template>
  <div class="hello">
  <b-navbar toggleable="md" type="dark" class="navbar" >
    <b-nav-toggle target="nav_collapse"></b-nav-toggle>
    <b-navbar-brand href="#">Hackathoner</b-navbar-brand>
  </b-navbar> 

<b-row class="maincontent">
        <b-col xl="3" lg="4" md="6" sm="12" v-for="(hack, index) in hacks" :key="hack.hack_name">
          <card v-bind:imglink="hack.img_link" 
                v-bind:text="hack.description"
                v-bind:title="hack.name"
                v-bind:id="index + ''">     <!-- Это костыль, число 2 увеличится при удалении записи!!! надо решать че почем с роутером-->    
          </card>
        </b-col>
    </b-row>
    <footer class="footer"></footer>
  </div>
</template>

<script>
import Card from './Card.vue'

export default {
  name: 'hello',
  components: {
    Card
  },
  computed: {
    hacks () {
      return this.$store.state.hacks
    }
  }
}

</script>

<style>
.maincontent {
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
}
.navbar {
  background-color: #5085A5;
}
</style>