<template>
  <div class="fullScreenCard">
    fullScreenCard {{id}} 
    {{currentHack[0].name}}
    {{currentHack[0].description}}
    {{currentHack[0].imglink}}
  </div>
</template>

<script>
export default {
  props: ['id'], // from router
  name: 'fullScreenCard',
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
