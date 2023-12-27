import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";
import SinglePetView from "./views/SinglePetView.vue";
import NotFoundView from "./views/NotFoundView.vue";
const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
  },
  {
    path: "/pet/:id",
    name: "SinglePet",
    component: SinglePetView,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFoundView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
