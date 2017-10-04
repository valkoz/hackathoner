<template>
  <div class="fullScreenCard">
    fullScreenCard {{id}} 
    {{fullPage.name}}
    {{firstHack[0].name}}
  </div>
</template>

<script>
export default {
  props: ['id'], // from Card
  name: 'fullScreenCard',
  data() {
    return {
      fullPage : {
        name: 'uxoft.png',
        description: 'Не',
        imglink: 'HackCV'
      }
    }
  },
  computed: {
    firstHack () {
      return this.$store.state.firstHack
    }
  },
  methods: {
    getFullPage: function() {
      this.$store.dispatch('getFirstHack')
      this.fullPage.name = "kekeek"
    }
  },
  created: function(){
    this.getFullPage()
  }
}
</script>
