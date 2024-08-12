import React, { Suspense, lazy, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurentMenu from "./components/RestaurentMenu";
import Profile from "./components/profile";
import ProfileClass from "./components/ProfileClass";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/userContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";

// import Instamart from "./components/Instamart";

const Instamart = lazy(()=> import("./components/Instamart"));


const AppLayout = () => {
    const [user, setUser] = useState({
        name : "bharat",
        email : "bharat@bharat.com",
    });
    console.log('test');
    return(
        <Provider store={store}>
        <UserContext.Provider value={{
            user: user,
            setUser: setUser,
        }}>
        <Header />
        <Outlet />
        <Footer />
        </UserContext.Provider>
        </Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error />,
        children:[
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
                children: [
                    {
                        path: "profile",
                        element: <Profile name={"ababa"}/>,
                    },
                    {
                        path: "profile",
                        element: <ProfileClass/>,
                    },
                ]
            },
            {
                path: "/contact",
                element: <Contact/>,
            },
            {
                path: "/restaurent/:id",
                element: <RestaurentMenu/>,
            },
            {
                path: "/instamart",
                element: <Suspense fallback={<Shimmer/>}>
                    <Instamart/>
                </Suspense> ,
            },
            {
                path: "/cart",
                element: <Cart/>,
            },
        ],
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);