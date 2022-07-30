import { IS_AUTH_KEY } from "../constant";
import { getFromLocalStorage } from "../helper/localStorage";

export const auth = ({ next, router }) => {
  const isAuth = getFromLocalStorage(IS_AUTH_KEY);

  if (!isAuth) {
    return router.push("/login");
  }

  return next();
};
