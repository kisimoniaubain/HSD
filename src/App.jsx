import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingButterfly from './components/FloatingButterfly';
import Home from './pages/Home';
import About from './pages/About';
import WhatWeDo from './pages/WhatWeDo';
import Partnerships from './pages/Partnerships';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import CommunityLearningHubs from './pages/CommunityLearningHubs';
import DigitalSkillsSummits from './pages/DigitalSkillsSummits';
import YouthLeadershipMobilization from './pages/YouthLeadershipMobilization';
import EducatorPartnerships from './pages/EducatorPartnerships';
import GrassrootsInnovationLabs from './pages/GrassrootsInnovationLabs';
import GetInvolved from './pages/GetInvolved';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import Contact from './pages/Contact';
import Donate from './pages/Donate';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

function AppLayout() {
  return (
    <>
      <ScrollToTop />
      <FloatingButterfly />
      <Navbar />
      <main className="page-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/who-we-are" element={<About />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/partnerships" element={<Partnerships />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/community-learning-hubs" element={<CommunityLearningHubs />} />
          <Route path="/projects/digital-skills-summits" element={<DigitalSkillsSummits />} />
          <Route path="/projects/youth-leadership-mobilization" element={<YouthLeadershipMobilization />} />
          <Route path="/projects/educator-partnerships" element={<EducatorPartnerships />} />
          <Route path="/projects/grassroots-innovation-labs" element={<GrassrootsInnovationLabs />} />
          <Route path="/projects/:slug" element={<ProjectDetails />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;
