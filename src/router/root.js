import { Suspense, lazy } from "react";
import memberRouter from "./memberRouter";
import serviceRouter from "./serviceRouter";
import Loading from "../components/Spinner/Loading";
import ProtectedRoute from "./ProtectedRoute";

const { createBrowserRouter } = require("react-router-dom");

const Index = lazy(() => import("../pages/IndexPage"));
const Main = lazy(() => import("../pages/MainPage"));
const Service = lazy(() => import("../pages/service/ServicePage"));
const BusinessService = lazy(() => import('../pages/service/BusinessServicePage'));
const Result = lazy(() => import('../pages/service/ResultPage'));
const AboutPage = lazy(() => import("../pages/AboutPage"));
const MyPage = lazy(() => import('../pages/member/Mypage'));
const TestPage = lazy(() => import("../pages/TestPage"));
const TestPage2 = lazy(() => import("../pages/TestPage2"));


const root = createBrowserRouter([

  {
    path: "/",
    element: <Suspense fallback = {<Loading msg={'Loading...'} />}><Index /></Suspense>
  },
  {
    path: "/main",
    element: <Suspense fallback = {<Loading msg={'Loading...'} />}><Main /></Suspense>
  },
  {
    path: "/service",
    element: <Suspense fallback = {<Loading msg={'Loading...'} />}><Service /></Suspense>,
    children: serviceRouter()
  },
  {
    path: "/businessService",
    element: (
      <ProtectedRoute>
        <Suspense fallback = {<Loading msg={'Loading...'} />}><BusinessService /></Suspense>
      </ProtectedRoute>
    ),
    children: serviceRouter()
  },
  {
    path: '/result',
    element: <Suspense fallback = {<Loading msg={'Loading...'} />}><Result /></Suspense>
  },
  {
    path: "/member",
    children: memberRouter()
  },
  {
    path: "/about",
    element: <Suspense fallback = {<Loading msg={'Loading...'} />}><AboutPage /></Suspense>
  },
  {
    path: "/myPage",
    element: <Suspense fallback = {<Loading msg={'Loading...'} />}><MyPage /></Suspense>
  },
  {
    path: "/test",
    element: <Suspense fallback = {<Loading msg={'Loading...'} />}><TestPage /></Suspense>
  },
  {
    path: "/test2",
    element: <Suspense fallback = {<Loading msg={'Loading...'} />}><TestPage2 /></Suspense>
  },

]);

export default root;