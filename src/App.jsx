import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Men } from "./components/Men";
import { Women } from './components/Women';
import { Kids } from './components/Kids';
import { SingleProduct } from "./components/SingleProduct";
function App() {
  const Routing = createBrowserRouter([
    {
      basename: "/",
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Men />,
        },
        {
          path : "/women",
          element: <Women />
        },
        {
          path : "/kids",
          element: <Kids />
        },
        {
          path : "/single_product/:id",
          element: <SingleProduct />
        },
      ],
    },
  ]);

  return <RouterProvider router={Routing}></RouterProvider>;
}

export default App;
