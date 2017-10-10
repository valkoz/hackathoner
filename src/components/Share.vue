<template>
  <div class="card-container">
      <b-card class="card" >
        <p class="card-text">
          <social-sharing url="https://vuejs.org/"
                              title="The Progressive JavaScript Framework"
                              description="Intuitive, Fast and Composable MVVM for building interactive interfaces."
                              quote="Vue is a progressive framework for building user interfaces."
                              hashtags="hackathon"
                              inline-template>
          <div class="share">
              <network network="facebook">
                <icon name="facebook" scale="3" style="margin-left: 10px; margin-right: 10px;"></icon>
              </network>
              <network network="googleplus">
                <icon name="google-plus" scale="3" style="margin-left: 10px; margin-right: 10px;"></icon>
              </network>
              <network network="telegram">
                <icon name="telegram" scale="3" style="margin-left: 10px; margin-right: 10px;"></icon>
              </network>
              <network network="twitter">
                <icon name="twitter" scale="3" style="margin-left: 10px; margin-right: 10px;"></icon>
              </network>
              <network network="vk">
                <icon name="vk" scale="3" style="margin-left: 10px; margin-right: 10px;"></icon>
              </network>
              <network network="whatsapp">
                <icon name="whatsapp" scale="3" style="margin-left: 10px; margin-right: 10px;"></icon>
              </network>
          </div>
        </social-sharing>
        </p>
      </b-card>
  </div>
</template>

<script>
export default {
  name: 'share'
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
.share {
  text-align: center;
}
</style>