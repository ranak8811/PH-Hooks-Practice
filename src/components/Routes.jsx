import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Posts from "./Posts";
import PostDetails from "./PostDetails";
import Common from "./Common";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Posts></Posts>,
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
      },
      {
        path: "/post/:postId",
        element: <PostDetails></PostDetails>,
        // loader: ({ params }) =>
        //   fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
      },
      {
        path: "/common/:page/:btn?",
        element: <Common></Common>,
      },
    ],
  },
]);

export default router;
