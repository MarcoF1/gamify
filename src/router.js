import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "main",
      component: () => import("./views/Main.vue"),
    },
    {
      path: "/tictactoe",
      name: "tictactoe",
      component: () => import("./views/tictactoe.vue"),
    },
    {
      path: "/tetris",
      name: "tetris",
      component: () => import("./views/tetris.vue"),
    },
  ],
});
