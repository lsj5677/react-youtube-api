import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DarkModeProvider } from "./context/DarkModeContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NotFound from "./pages/NotFound";
import Root from "./pages/Root";
import VideoDetail from "./pages/VideoDetail";
import Videos from "./pages/Videos";
import { YoutubeApiProvider } from "./context/YoutubeApiContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Videos /> },
      { path: "/videos", element: <Videos /> },
      { path: "/videos/:keyword", element: <Videos /> },
      { path: "/videos/watch/:videoId", element: <VideoDetail /> },
    ],
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <YoutubeApiProvider>
          <RouterProvider router={router} />
        </YoutubeApiProvider>
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

export default App;
