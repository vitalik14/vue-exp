<template>
  <div id="app">
    <img width="25%" src="./assets/logo.png" /> <HelloWorld /> <About />
    <template>
      <div>
        <v-btn color="success">Success</v-btn>
        <v-btn color="error">Error</v-btn>
        <v-btn color="warning">Warning</v-btn>
        <v-btn color="info">Info</v-btn>
      </div>
    </template>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import About from "./views/about";

export default {
  name: "App",
  components: {
    HelloWorld,
    About
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
