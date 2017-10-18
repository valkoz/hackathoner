<template>

  <div class="card-container">
      <b-card
          tag="article"
          class="card"
          >
      <p class="card-text">
          <yandex-map 
              :coords="[coordinateX, coordinateY]"
              zoom="16"
              style="width: auto; height: 300px;"
              :cluster-options="{
                1: {clusterDisableClickZoom: true}
              }"
              :controls="['zoomControl']"
              :placemarks="placemarks"  
              map-type="map">
          <ymap-marker 
              marker-type="placemark"
              :coords="[coordinateX, coordinateY]"
              :hint-content="place"
              :icon="{color: '#5085A5'}"
              cluster-name="1"
          ></ymap-marker>

</yandex-map>
      </p>
      </b-card>
  </div>

  
</template>

<script>
export default {
  props: ['coordinateX','coordinateY','place'],
  name: 'navigation'
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
</style>