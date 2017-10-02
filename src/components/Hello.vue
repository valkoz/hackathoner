<template>
  <div class="hello">
   <b-navbar toggleable="md" type="dark" variant="primary">
  <b-nav-toggle target="nav_collapse"></b-nav-toggle>
  <b-navbar-brand href="#">Hackathoner</b-navbar-brand>
  <b-collapse is-nav id="nav_collapse">
    <b-nav is-nav-bar>
      <b-nav-item href="#">All Hackathons</b-nav-item>
      <b-nav-item href="#">My Hackathons</b-nav-item>
    </b-nav>
    <!-- Right aligned nav items -->
    <b-nav is-nav-bar class="ml-auto">
      <b-nav-form>
        <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
      </b-nav-form>
      <b-nav-item-dropdown right>
        <!-- Using button-content slot -->
        <template slot="button-content">
          <em>User</em>
        </template>
        <b-dropdown-item href="#">Profile</b-dropdown-item>
        <b-dropdown-item href="#">Signout</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-nav>
  </b-collapse>
</b-navbar> 

<b-row class="maincontent">
        <b-col xl="3" lg="4" md="6" sm="12" v-for="hack in hacks">
          <card v-bind:imglink="hack.someLink" 
                v-bind:text="hack.someText" 
                v-bind:title="hack.someTitle"
                v-bind:id="hack.id">        
          </card>
        </b-col>
    </b-row>
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
  margin: 10px;
}
</style>