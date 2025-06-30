import React, {lazy, Suspense} from "react";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import RestaurantCard from "./Components/RestaurantCard";


const Grocery = lazy(() => import("./Components/Grocery") );

const AppLayout = () => {


  return (
    <div className="app-layout">
    <Header />
    <div className="main-content">
     <Outlet />
     </div>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading ...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:redId",
        element: <RestaurantCard />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={appRouter} />;
}