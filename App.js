import React, { Suspense , lazy, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import { createBrowserRouter, RouterProvider , Outlet} from "react-router-dom";
import Error from "./src/components/Error";
import AboutUs from "./src/components/AboutUs";
import Home from "./src/components/Home";
import Contact from "./src/components/Contact";
import RestaurantMenu from "./src/components/RestaurantMenu";
import Shimmer from "./src/components/Shimmer";
import UserContext from "./src/utils/UserContext";


const Instamart = lazy(()=> import ("./src/components/Instamart"));

const AppLayout = () => {
  const [user, setUser] = useState(
    {
      name: "Harpreet Saini",
      email: "harpreet@gmail.com",
    }

  );
  return (
    <>
    <UserContext.Provider value={{
      users:user,
      setUser:setUser,
      }}>
      <Header />
      <Outlet />
      <Footer />
      </UserContext.Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path:"/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path:"/instamart",
        element: <Suspense fallback = {<Shimmer/>}> <Instamart /> </Suspense>,
      }
    ]
  },
 
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside the root

//async defer
root.render(<RouterProvider router={appRouter} />);
//root.render(<AppLayout />);
