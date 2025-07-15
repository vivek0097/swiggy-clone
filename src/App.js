import React, {lazy, Suspense, useState, useEffect} from "react";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import RestaurantCard from "./Components/RestaurantCard";
import RestaurantMenu from "./Components/RestaurantMenu";
import UserContext from "./utils/UserContext";


const Grocery = lazy(() => import("./Components/Grocery") );

const AppLayout = () => {
  //authentication ---------------------
  const [userName, setUserName] = useState();
  
  useEffect(() => {
    const data = {
      name:'Vivek Singh'
    }
    setUserName(data.name)
  })

  return (
    <UserContext.Provider value={{loggedInUser:userName}}>
    <div className="app-layout">
    <Header />
    <div className="main-content">
     <Outlet />
     </div>
    </div>
    </UserContext.Provider>
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
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
   
    ],
  },
]);

export default function App() {
  return <RouterProvider router={appRouter} />;
}