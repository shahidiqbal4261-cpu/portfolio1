import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../components/common/loading/Loading";

const Home = lazy(() => import("../pages/Home"));
const Main = lazy(() => import("../layouts/Main"));
const NotFound = lazy(() => import("../pages/NotFound"));

const repoName = import.meta.env.BASE_URL ?? "/";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <Suspense fallback={<Loading />}>
          <Main />
        </Suspense>
      ),
      children: [
        { path: "", element: <Home /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ],
  { basename: repoName }
);
