import ProductList from "./ProductList.vue";
import ProductCreate from "./ProductCreate.vue";
import ProductEdit from "./ProductEdit.vue";

export default [
  { path: "/", component: ProductList },
  { path: "/products/create", component: ProductCreate },
  { path: "/products/:id", component: ProductEdit, name: "product" }
];
