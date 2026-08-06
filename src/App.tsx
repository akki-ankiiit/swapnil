import { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import GoldenSpiralLoader from "@/components/GoldenSpiralLoader";

function ScrollToTop() {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  return null;
}

const lazyWithDelay = (importFunc: () => Promise<any>, delay = 2000) => {
  return lazy(() => {
    return Promise.all([
      importFunc(),
      new Promise(resolve => setTimeout(resolve, delay))
    ]).then(([moduleExports]) => moduleExports);
  });
};

const Home = lazyWithDelay(() => import("@/pages/Home"));
const About = lazyWithDelay(() => import("@/pages/About"));
const Portfolio = lazyWithDelay(() => import("@/pages/Portfolio"));
const ProjectDetail = lazyWithDelay(() => import("@/pages/ProjectDetail"));
const Team = lazyWithDelay(() => import("@/pages/Team"));
const Press = lazyWithDelay(() => import("@/pages/Press"));
const Contact = lazyWithDelay(() => import("@/pages/Contact"));
const PrivacyPolicy = lazyWithDelay(() => import("@/pages/PrivacyPolicy"));
const TermsOfService = lazyWithDelay(() => import("@/pages/TermsOfService"));
const NotFound = lazyWithDelay(() => import("@/pages/NotFound"));

import CustomCursor from "@/components/CustomCursor";
import LenisProvider from "@/components/LenisProvider";
import PetButterfly from "@/components/PetButterfly";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
      <Suspense fallback={<GoldenSpiralLoader />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:slug" element={<ProjectDetail />} />
          <Route path="/team" element={<Team />} />
          <Route path="/press" element={<Press />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <LenisProvider>
        <PetButterfly />
        <CustomCursor />
        <AnimatedRoutes />
      </LenisProvider>
    </BrowserRouter>
  );
}
