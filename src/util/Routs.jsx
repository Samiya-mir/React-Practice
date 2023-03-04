import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import Header from "../components/Header";
import Home from "../pages/Home";
const title = "this is a header";

export const routes = [
  {
    path: "/",
    element: (
      <div>
        <Link to="home">
          <Header title={title} />
        </Link>
        <Footer title={title} />
      </div>
    ),
  },
  {
    path: "/hello",
    element: <div>Hello world! from helo</div>,
  },
  {
    path: "home",
    element: <Home />,
  },
];
