export const getFromLocalStorage = (key, defaultValue) => {
  return typeof localStorage !== "undefined" && localStorage.getItem(key)
    ? JSON.parse(localStorage.getItem(key))
    : defaultValue;
};

export const clearLocalStorage = () => {
  return typeof localStorage !== "undefined" && localStorage.clear();
};
