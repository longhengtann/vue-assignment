import ProductList from "./pages/ProductList.vue";
import ProductCreate from "./pages/ProductCreate.vue";
import ProductEdit from "./pages/ProductEdit.vue";

export default [
  { path: "/products", component: ProductList },
  {
    path: "/products/create",
    component: ProductCreate,
    name: "create-product"
  },
  { path: "/products/:id", component: ProductEdit, name: "product" }
];
