import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayOut from "./Pages/MainLayOut/MainLayOut";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Portfolio from "./Pages/Portfolio/Portfolio"; 
import Contact from "./Pages/Contact/Contact";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  let routers = createBrowserRouter([
    {
      path: "",
      element: <MainLayOut />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "portfolio", element: <Portfolio /> },
        { path: "contact", element: <Contact /> },


        { path: "*", element: <NotFound /> },

      ]

    },
  ]);
  return <RouterProvider router={routers}></RouterProvider>;
  
}

export default App;
