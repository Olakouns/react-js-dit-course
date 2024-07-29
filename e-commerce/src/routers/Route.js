import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import CartPage from "../pages/CartPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '',
          element: <HomePage />
        },
        {
          path: 'products',
          element: <ProductPage />
        },
        {
          path: 'products/:productId',
          element: <ProductDetailPage />
        },
        {
          path: 'cart',
          element: <CartPage />
        }
      ]
    },
  ]);

export default router;