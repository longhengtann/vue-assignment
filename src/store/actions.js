import { api } from "../services/api";

export const getProducts = ({ commit }) => {
  api()
    .get("/products")
    .then(response => {
      console.log("getProducts", response);
      commit("SET_PRODUCTS", response.data);
    });
};

export const getProduct = ({ commit }, productId) => {
  api()
    .get(`/products/${productId}`)
    .then(response => {
      commit("SET_PRODUCT", response.data);
    });
};

export const updateProduct = ({ commit }, productData) => {
  api()
    .put(`/products/${productData.id}`, productData.data)
    .then(response => {
      commit("SET_UPDATED_PRODUCT", response.data);
    });
};

export const createProduct = ({ commit }, productData) => {
  api()
    .post("/products", productData)
    .then(response => {
      commit("SET_CREATED_PRODUCT", response.data);
    });
};
