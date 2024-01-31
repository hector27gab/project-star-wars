import React from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import Home from "./views/home.jsx";
import { Single } from "./views/single.jsx";
import DetailsC from "./views/detailsC.jsx";
import DetailsP from "./views/detailsP.jsx";
import DetailsS from "./views/detailsS.jsx";
import injectContext from "./store/appContext";

import Navbar from "./component/Navbar.jsx";
import { Footer } from "./component/Footer.jsx";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/characters/:useId" element={<DetailsC />} />
            <Route path="/details/planets/:useId" element={<DetailsP />} />
            <Route path="/details/ships/:useId" element={<DetailsS />} />
            <Route path="/single/:theid" element={<Single />} />
            <Route path="*" element={<h1>Error: Not found</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
