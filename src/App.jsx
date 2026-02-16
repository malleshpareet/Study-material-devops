import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Roadmap from './pages/Roadmap';
import Tools from './pages/Tools';
import Projects from './pages/Projects';
import Resources from './pages/Resources';
import Curriculum from './pages/Curriculum';
import Introduction from './pages/Introduction';
import TargetAudience from './pages/TargetAudience';
import RoadmapOverview from './pages/RoadmapOverview';
import LinuxFundamentals from './pages/LinuxFundamentals';
import NetworkingConcepts from './pages/NetworkingConcepts';
import VersionControl from './pages/VersionControl';
import ProgrammingLanguages from './pages/ProgrammingLanguages';
import CloudProviders from './pages/CloudProviders';
import Containerization from './pages/Containerization';
import CICDPipelines from './pages/CICDPipelines';
import ContainerOrchestration from './pages/ContainerOrchestration';
import NetworkingInfraServices from './pages/NetworkingInfraServices';
import ConfigManagement from './pages/ConfigManagement';
import InfrastructureAsCode from './pages/InfrastructureAsCode';
import MonitoringLogging from './pages/MonitoringLogging';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

const AppContent = () => {
  const { pathname } = useLocation();
  const isAuthPage = pathname === '/login' || pathname === '/signup';

  return (
    <div className="bg-[#000] text-white min-h-screen selection:bg-indigo-500/30">
      {!isAuthPage && <Navbar />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/curriculum/:id" element={<Curriculum />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/target-audience" element={<TargetAudience />} />
          <Route path="/roadmap-overview" element={<RoadmapOverview />} />
          <Route path="/linux-fundamentals" element={<LinuxFundamentals />} />
          <Route path="/networking-concepts" element={<NetworkingConcepts />} />
          <Route path="/version-control" element={<VersionControl />} />
          <Route path="/programming-languages" element={<ProgrammingLanguages />} />
          <Route path="/cloud-providers" element={<CloudProviders />} />
          <Route path="/containerization" element={<Containerization />} />
          <Route path="/cicd-pipelines" element={<CICDPipelines />} />
          <Route path="/container-orchestration" element={<ContainerOrchestration />} />
          <Route path="/networking-infra-services" element={<NetworkingInfraServices />} />
          <Route path="/config-management" element={<ConfigManagement />} />
          <Route path="/infrastructure-as-code" element={<InfrastructureAsCode />} />
          <Route path="/monitoring-logging" element={<MonitoringLogging />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </main>
      {!isAuthPage && <Footer />}
    </div>
  );
};

function App() {
  return (
    <AppProvider>
      <Router>
        <ScrollToTop />
        <AppContent />
      </Router>
    </AppProvider>
  );
}

export default App;
