import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import Content from "./Content";
import Settings from "./Settings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Content />
      },
      {
        path: "settings",
        element: <Settings />
      },
    ]
  },
]);

export default router;