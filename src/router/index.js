import { createRouter, createWebHashHistory } from "vue-router";
const TotalPage = () => import("@/views/TotalPage");
const routes = [
  {
    path: "/",
    redirect: "/all",
  },
  {
    path: "/all",
    component: TotalPage,
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
