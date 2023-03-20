import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import RepoPage from "@/views/RepoPage.vue";
import SingleRepo from "@/views/SingleRepo";
import NotFound from "@/views/NotFound";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: HomePage,
    },
    {
      path: "/repo",
      name: "RepoPage",
      component: RepoPage,
    },
    {
      path: "/myrepo",
      name: "SingleRepo",
      component: SingleRepo,
    },
    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: NotFound,
    },
  ],
});
createApp(App).use(router).mount("#app");
