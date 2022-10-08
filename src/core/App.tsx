import * as Styled from "./styled";
import { Header } from "../components/header/header";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
  Router,
  BrowserRouter,
} from "react-router-dom";
import { Pokedex } from "../pages/pokedex/pokedex.js";
import { Battle } from "../pages/battle/battle";
import { Profile } from "../pages/profile/profile";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Profile />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/pokedex",
      element: <Pokedex />,
    },
    {
      path: "/battle",
      element: <Battle />,
    },
  ]);

  function navigateTo(path: string) {
    router.navigate(path);
  }

  return (
    <Styled.Container>
      <Header navigate={(path) => navigateTo(path)} />
      <RouterProvider router={router} />
    </Styled.Container>
  );
};

export default App;
