<template>
  <div class="fullScreenCard">
    fullScreenCard {{id}} 
    {{text}}
    {{title}}
    {{imglink}}
  </div>
</template>

<script>
export default {
   props: ['id', 'title', 'text', 'imglink'], // from Card
  name: 'fullScreenCard',
  data () {
    return {
    }
  }
}
</script>
