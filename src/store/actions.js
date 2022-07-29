import { api } from "../services/api";
import { router } from "../main.js";

export const getProducts = async ({ commit }, searchValue) => {
  const response = await api().get(
    `/products?sortBy=createdAt&order=desc&search=${searchValue}`
  );

  commit("SET_PRODUCTS", response.data);
};

export const getProduct = async ({ commit }, productId) => {
  try {
    const response = await api().get(`/products/${productId}`);

    commit("SET_PRODUCT", response.data);
  } catch (error) {
    commit("PUSH_NOTIFICATION", {
      type: "error",
      message: "Product not found!"
    });
  }
};

export const updateProduct = async ({ commit }, productData) => {
  try {
    const response = await api().put(
      `/products/${productData.id}`,
      productData.data
    );

    commit("SET_UPDATED_PRODUCT", response.data);
    commit("PUSH_NOTIFICATION", {
      type: "success",
      message: "Successfully updated!"
    });
    router.push("/products");
  } catch (error) {
    commit("PUSH_NOTIFICATION", {
      type: "error",
      message: error.response.statusText
    });
  }
};

export const createProduct = async ({ commit }, productData) => {
  try {
    const response = await api().post("/products", productData);

    commit("SET_CREATED_PRODUCT", response.data);
    commit("PUSH_NOTIFICATION", {
      type: "success",
      message: "Successfully created."
    });
    router.push("/products");
  } catch (error) {
    commit("PUSH_NOTIFICATION", {
      type: "error",
      message: "Failed to create product!"
    });
  }
};

export const deleteProduct = async ({ commit }, id) => {
  try {
    const response = await api().delete(`/products/${id}`);

    commit("SET_DELETED_PRODUCT", response.data);
    commit("PUSH_NOTIFICATION", {
      type: "success",
      message: "Successfully deleted!"
    });
  } catch (error) {
    commit("PUSH_NOTIFICATION", {
      type: "error",
      message: "Failed to deleted!"
    });
  }
};

export const addNotification = ({ commit }, notification) => {
  commit("PUSH_NOTIFICATION", notification);
};

export const removeNotification = ({ commit }, notificationToRemove) => {
  commit("REMOVE_NOTIFICATION", notificationToRemove);
};
