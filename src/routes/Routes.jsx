import MainLayout from "../layout/MainLayout";
import Homepages from "../Pages/HomePages/Homepages";
import Books from "../Pages/Books/Books";
import { createBrowserRouter } from "react-router";
import ErrorPages from "./../Pages/ErroPages/ErrorPages";
import BookDetails from "../Pages/Books/BookDetails/BookDetails";
import ReCharts from "../components/Recharts/ReCharts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Homepages />,
      },
      {
        path: "books",
        element: <Books />,
      },
      {
        path: "recharts",
        element: <ReCharts/>,
      },
      {
        path: "/bookDetails/:bookId",
        Component: BookDetails,
        loader: () => fetch("/booksData.json"),
      },
    ],
    errorElement: <ErrorPages />,
  },
]);
