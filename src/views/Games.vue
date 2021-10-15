<template>
  <div id="games">
    <img alt="Gamify Logo" src="../assets/logo.png" />
    <tictactoe />
  </div>
</template>

<script>
import tictactoe from "../components/TicTacToe.vue";

export default {
  name: "Main",
  components: {
    tictactoe,
  },
};
</script>

<style>
#games {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
