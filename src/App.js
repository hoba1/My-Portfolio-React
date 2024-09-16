import Header from "./components/Header.jsx";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Loader from "./components/Loader.jsx";
const LazyHome = lazy(() => import("./Pages/Home.jsx"));
const LazyAbout = lazy(() => import("./Pages/About.jsx"));
const LazyProjects = lazy(() => import("./Pages/Projects.jsx"));
const LazyContact = lazy(() => import("./Pages/Contact.jsx"));

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const location = useLocation();

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Suspense fallback={<Loader />}>
        <div className="app">
          <Header />
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.key}>
              <Route
                path="/"
                element={
                  <Suspense fallback={<Loader />}>
                    <LazyHome />
                  </Suspense>
                }
              />
              <Route
                path="/about"
                element={
                  <Suspense fallback={<Loader />}>
                    <LazyAbout />
                  </Suspense>
                }
              />
              <Route
                path="/projects"
                element={
                  <Suspense fallback={<Loader />}>
                    <LazyProjects />
                  </Suspense>
                }
              />
              <Route
                path="/contact"
                element={
                  <Suspense fallback={<Loader />}>
                    <LazyContact />
                  </Suspense>
                }
              />
            </Routes>
          </AnimatePresence>
        </div>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
