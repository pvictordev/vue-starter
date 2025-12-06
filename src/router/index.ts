import { computed } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { useRootStore } from "@/stores/store";
import Dashboard from "@/domain/account/components/Dashboard.vue";
import Login from "@/domain/account/components/Login.vue";
import ForgotPassword from "@/domain/account/components/ForgotPassword.vue";
import NotFound from "@/domain/system/components/NotFound.vue";

const requiresAuthRoutes = [
  {
    path: "/",
    name: "Home",
    component: Dashboard,
    meta: { requiresAuth: true },
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: { requiresAuth: true },
  },
];
const guestRoutes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: ForgotPassword,
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active-link",
  routes: [...requiresAuthRoutes, ...guestRoutes],
});

// auth guard
router.beforeEach(async (to, from, next) => {
  if (to.matched.some((item) => item.meta.requiresAuth)) {
    try {
      const store = useRootStore();

      const loginStatus = computed(
        () => store.accountStore.getAccountLogin.logged_in
      );
      if (loginStatus.value) {
        next();
        return;
      }
      if (to.name !== "Login") {
        next({ name: "Login" });
        return;
      } else {
        next();
      }
    } catch (error) {
      console.error("Error during route guard execution", error);
    }
  } else {
    next();
  }
});

export default router;
