import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Css/Slide.css";
import "./Css/index.css";
import App from "./Routes/App.jsx";
import hoteStore from "./store/index.js";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Routes/Home.jsx";
import MyBooking from "./Routes/MyBooking.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./Routes/Contact.jsx";
import About from "./Routes/About.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/MyBooking", element: <MyBooking /> },
      { path: "/Hotel", element: <Home /> },
      { path: "/ContactUs", element: <Contact /> },
      { path: "/AboutUs", element: <About /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={hoteStore}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>
);
