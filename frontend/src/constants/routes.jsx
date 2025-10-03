import AnimeList from "../views/AnimeList";
import Home from "../views/Home";
import MangaList from "../views/MangaList";

export const routes = [
  { path: "/", element: <Home /> },
  { path: "/anime", element: <AnimeList /> },
  { path: "/manga", element: <MangaList /> },
];
