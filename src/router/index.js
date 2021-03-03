import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/azzista",
    name: "Azzista",
    component: () => import("../views/Azzista.vue"),
  },
  {
    path: "/aprilabank",
    name: "AprilaBank",
    component: () => import("../views/AprilaBank.vue"),
  },
  {
    path: "/crayon",
    name: "Crayon",
    component: () => import("../views/Crayon.vue"),
  },
  {
    path: "/kpmg",
    name: "KPMG",
    component: () => import("../views/KPMG.vue"),
  },
  {
    path: "/kroppskontroll",
    name: "KPMG",
    component: () => import("../views/Kroppskontroll.vue"),
  },
  {
    path: "/orkla",
    name: "Orkla",
    component: () => import("../views/Orkla.vue"),
  },
  {
    path: "/galeriabarwna",
    name: "GaleriaBarwna",
    component: () => import("../views/GaleriaBarwna.vue"),
  },
  {
    path: "/livsglede",
    name: "Livsglede",
    component: () => import("../views/Livsglede.vue"),
  },
  {
    path: "/birdhouse",
    name: "BirdHouse",
    component: () => import("../views/BirdHouse.vue"),
  },
  {
    path: "/conductor",
    name: "Conductor",
    component: () => import("../views/Conductor.vue"),
  },
  {
    path: "/drones",
    name: "Drones",
    component: () => import("../views/Drones.vue"),
  },
  {
    path: "/scale",
    name: "Scale",
    component: () => import("../views/Scale.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
