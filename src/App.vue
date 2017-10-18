<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: justify;
  color: #2c3e50;
  background-color: #DDDDDD;
}

html, body {
    max-width: 100%;
    overflow-x: hidden;
}

h1 {
  text-align: center;
  font-size: 42px;
  margin-bottom: 30px;
}

h2 {
  font-size: 40px;
}
h3 {
  font-size: 26px;
  margin-bottom: 20px;
  margin-top: 20px;
}
.icon {
  color: #5085A5;
}

.original-button {
  background-color: #5085A5;
  color: #ffffff;
  border: none;
  padding: 5px 25px;
  border-radius: 4px;
  margin: 5px;
  font-size: 20px;
  cursor: pointer;
}

.original-button:hover {
    background-color: #31708E; 
    color: white;
}

.original-button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.original-button span:after {
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.original-button:hover span {
  padding-right: 25px;
}

.original-button:hover span:after {
  opacity: 1;
  right: 0;
}
</style>
