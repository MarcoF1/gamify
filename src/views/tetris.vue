<template>
  <div id="tetris">
    <img alt="Gamify Logo" src="../assets/logo.png" />
    <br />
    <!-- <player
      :stage="stage"
      :keys="{ straight: 32, left: 37, rotate: 38, right: 39, down: 40 }"
      ref="player"
    /> -->
  </div>
</template>

<script>
// import player from "../components/TetrisPlayer.vue";
import stageComputed from "../stageComputed";

export default {
  name: "tetris",
  mixins: [stageComputed],
  data() {
    return {
      stage: {
        cellSize: 30,
        width: 10,
        height: 22,
        blockType: {
          I: [
            [
              [-1, 1],
              [0, 1],
              [1, 1],
              [2, 1],
            ],
            [
              [1, 2],
              [1, 1],
              [1, 0],
              [1, -1],
            ],
            [
              [2, 0],
              [1, 0],
              [0, 0],
              [-1, 0],
            ],
            [
              [0, -1],
              [0, 0],
              [0, 1],
              [0, 2],
            ],
          ],
          O: [
            [
              [0, 0],
              [0, 1],
              [1, 1],
              [1, 0],
            ],
            [
              [0, 1],
              [1, 1],
              [1, 0],
              [0, 0],
            ],
            [
              [1, 1],
              [1, 0],
              [0, 0],
              [0, 1],
            ],
            [
              [1, 0],
              [0, 0],
              [0, 1],
              [1, 1],
            ],
          ],
          T: [
            [
              [0, 1],
              [-1, 0],
              [0, 0],
              [1, 0],
            ],
            [
              [1, 0],
              [0, 1],
              [0, 0],
              [0, -1],
            ],
            [
              [0, -1],
              [1, 0],
              [0, 0],
              [-1, 0],
            ],
            [
              [-1, 0],
              [0, -1],
              [0, 0],
              [0, 1],
            ],
          ],
          S: [
            [
              [0, 1],
              [1, 1],
              [-1, 0],
              [0, 0],
            ],
            [
              [1, 0],
              [1, -1],
              [0, 1],
              [0, 0],
            ],
            [
              [0, -1],
              [-1, -1],
              [1, 0],
              [0, 0],
            ],
            [
              [-1, 0],
              [-1, 1],
              [0, -1],
              [0, 0],
            ],
          ],
          Z: [
            [
              [-1, 1],
              [0, 1],
              [0, 0],
              [1, 0],
            ],
            [
              [1, 1],
              [1, 0],
              [0, 0],
              [0, -1],
            ],
            [
              [1, -1],
              [0, -1],
              [0, 0],
              [-1, 0],
            ],
            [
              [-1, -1],
              [-1, 0],
              [0, 0],
              [0, 1],
            ],
          ],
          J: [
            [
              [-1, 1],
              [-1, 0],
              [0, 0],
              [1, 0],
            ],
            [
              [1, 1],
              [0, 1],
              [0, 0],
              [0, -1],
            ],
            [
              [1, -1],
              [1, 0],
              [0, 0],
              [-1, 0],
            ],
            [
              [-1, -1],
              [0, -1],
              [0, 0],
              [0, 1],
            ],
          ],
          L: [
            [
              [1, 1],
              [1, 0],
              [0, 0],
              [-1, 0],
            ],
            [
              [1, -1],
              [0, -1],
              [0, 0],
              [0, 1],
            ],
            [
              [-1, -1],
              [-1, 0],
              [0, 0],
              [1, 0],
            ],
            [
              [-1, 1],
              [0, 1],
              [0, 0],
              [0, -1],
            ],
          ],
        },
        blocks: ["I", "O", "T", "S", "Z", "J", "L"],
      },
    };
  },
  components: {},
};
</script>

<style scoped>
#tetris {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
