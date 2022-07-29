export const SET_PRODUCTS = (state, products) => {
  state.products = products;
};

export const SET_PRODUCT = (state, product) => {
  state.product = product;
};

export const SET_UPDATED_PRODUCT = (state, product) => {
  state.updatedProduct = product;
};

export const SET_CREATED_PRODUCT = (state, product) => {
  state.createdProduct = product;
};

export const SET_DELETED_PRODUCT = (state, product) => {
  state.deletedProduct = product;
};

export const PUSH_NOTIFICATION = (state, notification) => {
  state.notifications.push({
    ...notification,
    id: (Math.random().toString(36) + Date.now().toString(36)).substr(2)
  });
};

export const REMOVE_NOTIFICATION = (state, notificationToRemove) => {
  state.notifications = state.notifications.filter(notification => {
    return notification.id != notificationToRemove.id;
  });
};
