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
import NotFound from "../pages/NotFound";
import Contact from "../pages/Help/Contact";
import FAQ from "../pages/Help/FAQ";
import Careers, { careersLoader } from "../pages/careers/Careers";
import CareerDetails, {
  careerDetailsLoader,
} from "../pages/careers/CareerDetails";

//Layouts

import RootLayout from "../Layouts/RootLayout";
import HelpLayout from "../Layouts/HelpLayout";
import CareersLayout from "../Layouts/CareersLayout";

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

      <Route path="help" element={<HelpLayout />}>
        <Route path="contact" element={<Contact />} />
        <Route path="faq" element={<FAQ />} />
      </Route>

      <Route path="*" element={<NotFound />} />

      <Route path="careers" element={<CareersLayout />}>
        <Route index element={<Careers />} loader={careersLoader} />
        <Route
          path=":id"
          element={<CareerDetails />}
          loader={careerDetailsLoader}
        />
      </Route>
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
