import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/aprilabank",
    name: "AprilaBank",
    component: () =>
      import("../views/AprilaBank.vue")
  },
  {
    path: "/kpmg",
    name: "KPMG",
    component: () =>
      import("../views/KPMG.vue")
  },
  {
    path: "/orkla",
    name: "Orkla",
    component: () =>
      import("../views/Orkla.vue")
  },
  {
    path: "/galeriabarwna",
    name: "GaleriaBarwna",
    component: () =>
      import("../views/GaleriaBarwna.vue")
  },
  {
    path: "/livsglede",
    name: "Livsglede",
    component: () =>
      import("../views/Livsglede.vue")
  },
  {
    path: "/birdcage",
    name: "BirdCage",
    component: () =>
      import("../views/BirdCage.vue")
  },
  {
    path: "/conductor",
    name: "Conductor",
    component: () =>
      import("../views/Conductor.vue")
  },
  {
    path: "/drones",
    name: "Drones",
    component: () =>
      import("../views/Drones.vue")
  },
  {
    path: "/scale",
    name: "Scale",
    component: () =>
      import("../views/Scale.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
