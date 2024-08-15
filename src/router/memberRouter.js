import { lazy, Suspense } from "react";
import Loading from "../components/Spinner/Loading";


const Login = lazy(() => import('../pages/member/LoginPage'));
const Logout = lazy(() => import('../pages/member/LogoutPage'));
const Signup = lazy(() => import('../pages/member/SignupPage'));

export default function memberRouter() {

  return [
    {
      path: "login",
      element: <Suspense fallback = {<Loading msg={'Loading...'} />}><Login /></Suspense>
    },
    {
      path: "logout",
      element: <Suspense fallback = {<Loading msg={'Loading...'} />}><Logout /></Suspense>
    },
    {
      path: "signup",
      element: <Suspense fallback = {<Loading msg={'Loading...'} />}><Signup /></Suspense>
    },

  ];
}
