import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Game from "./components/Game";

const router = createBrowserRouter([
  {
    path: "/tic-tac-toe/",
    element: <App />,
  },
  {
    path: "/tic-tac-toe/game",
    element: <Game />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);