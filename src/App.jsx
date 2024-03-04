import MainLayout from "@components/MainLayout";
import Home from "@views/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: ":id",
          element: <p>Detail</p>,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
