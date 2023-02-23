import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import Content from "./Create";
import Settings from "./Settings";
import Home from "./Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "settings",
        element: <Settings />
      },
    ]
  },
]);

export default router;