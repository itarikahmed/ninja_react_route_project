/**
 * previously used react router
 * 
 * import { BrowserRouter, Route, Routes, Link, NavLink } from "react-router-dom";
 * 
 function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <h1>JobRouter</h1>
          <Link to="/">Home</Link>
          <NavLink to="about">About</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
 */

//pages

import Home from "../pages/Home";
import About from "../pages/About";

//Layouts

import RootLayout from "../Layouts/RootLayout";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
