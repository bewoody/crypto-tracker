import { createBrowserRouter } from "react-router-dom";
import App from "./components/App";
import Price from "./components/Price";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";

const router = createBrowserRouter([
  {
    path: "/crypto-tracker",
    element: <App />,
    children: [
      {
        path: "",
        element: <Coins />,
      },
      {
        path: ":coinId",
        element: <Coin />,
        children: [
          {
            path: "price",
          },
          {
            path: "chart",
          },
        ],
      },
    ],
  },
]);

export default router;
