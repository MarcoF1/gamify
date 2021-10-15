<template>
  <div id="main">
    <img alt="Gamify Logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Gamify" />
    <Button msg="Enter" v-on:click.native="enterGames" />
  </div>
</template>

<script>
import Button from "../components/Button.vue";
import HelloWorld from "../components/HelloWorld.vue";

export default {
  name: "Main",
  components: {
    HelloWorld,
    Button,
  },
  methods: {
    enterGames: function() {
      this.$router.push("Games");
    },
  },
};
</script>

<style>
#main {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
