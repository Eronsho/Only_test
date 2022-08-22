import { PROFIL_ROUTE, LOGIN_ROUTE } from "./utils/consts";
import Profil from "./page/Profil";
import Auth from "./page/Auth";

export const authRoutes = [
  {
    path: PROFIL_ROUTE,
    Component: Profil,
  },
];
export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
];
