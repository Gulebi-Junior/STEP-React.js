import { createBrowserRouter } from "react-router-dom";
import { ErrorPage, MainPage, PostsPage, SinglePostPage } from "./routes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
        errorElement: <ErrorPage />,
        children: [
            { path: "/posts/:postId?", element: <PostsPage /> },
            { path: "/post/:postId", element: <SinglePostPage /> },
        ],
    },
]);

export default router;
