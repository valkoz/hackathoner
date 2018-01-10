<template>
  <div class="card-container">
      <b-card class="card" >
        <p class="card-text">
          <social-sharing :url="url"
                              :title="title"
                              :description="place"
                              :quote="place"
                              inline-template>
          <div class="share">

              <network network="telegram">
                <button class="original-button" style="height: 80px">
                  <icon name="telegram" scale="4" style="margin-left: 10px; margin-right: 10px;"></icon>
                </button>
              </network>

              <network network="twitter">
                <button class="original-button " style="height: 80px">
                  <icon name="twitter" scale="4" style="margin-left: 10px; margin-right: 10px;"></icon>
                </button>
              </network>

              <network network="vk">
                <button class="original-button" style="height: 80px">
                  <icon name="vk" scale="4" style="margin-top: 4px;  margin-left: 10px; margin-right: 10px; "></icon>
                </button>
              </network>

          </div>
        </social-sharing>
        </p>
      </b-card>
  </div>
</template>

<script>
export default {
  props: ['url','title','description','place'],
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

.share-button {
  height: 55px;
}
</style>
