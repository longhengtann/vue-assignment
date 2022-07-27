import { api } from "../services/api";

export const getProducts = async ({ commit }, searchValue) => {
  const response = await api().get(
    `/products?sortBy=createdAt&order=desc&search=${searchValue}`
  );

  commit("SET_PRODUCTS", response.data);
};

export const getProduct = async ({ commit }, productId) => {
  const response = await api().get(`/products/${productId}`);

  commit("SET_PRODUCT", response.data);
};

export const updateProduct = async ({ commit }, productData) => {
  const response = await api().put(
    `/products/${productData.id}`,
    productData.data
  );

  commit("SET_UPDATED_PRODUCT", response.data);
};

export const createProduct = async ({ commit }, productData) => {
  const response = api().post("/products", productData);

  commit("SET_CREATED_PRODUCT", response.data);
};

export const deleteProduct = async ({ commit }, id) => {
  const response = await api().delete(`/products/${id}`);

  commit("SET_DELETED_PRODUCT", response.data);
};
