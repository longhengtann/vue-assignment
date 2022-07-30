import Vue from "vue";
import VueRouter from "vue-router";
import { auth } from "./middleware/auth";
import ProductList from "./pages/ProductList.vue";
import ProductCreate from "./pages/ProductCreate.vue";
import ProductEdit from "./pages/ProductEdit.vue";
import Login from "./pages/Login.vue";

Vue.use(VueRouter);
const router = new VueRouter({
  routes: [
    {
      path: "/login",
      component: Login
    },
    {
      path: "/products",
      component: ProductList,
      meta: {
        middleware: [auth]
      }
    },
    {
      path: "/products/create",
      component: ProductCreate,
      name: "create-product",
      meta: {
        middleware: [auth]
      }
    },
    {
      path: "/products/:id",
      component: ProductEdit,
      name: "product",
      meta: {
        middleware: [auth]
      }
    }
  ],
  mode: "history"
});

function nextFactory(context, middleware, index) {
  const subsequentMiddleware = middleware[index];
  if (!subsequentMiddleware) return context.next;

  return (...parameters) => {
    context.next(...parameters);
    const nextMiddleware = nextFactory(context, middleware, index + 1);
    subsequentMiddleware({ ...context, next: nextMiddleware });
  };
}

router.beforeEach((to, from, next) => {
  if (to.meta.middleware) {
    const middleware = to.meta.middleware;

    const context = { from, next, router, to };
    const nextMiddleware = nextFactory(context, middleware, 1);

    return middleware[0]({ ...context, next: nextMiddleware });
  }

  return next();
});

export default router;
