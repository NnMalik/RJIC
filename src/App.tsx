import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeSection } from './components/sections/HomeSection';
import { AboutSection } from './components/sections/AboutSection';
import { ToppersSection } from './components/sections/ToppersSection';
import { FacilitiesSection } from './components/sections/FacilitiesSection';
import { ProudAchieversSection } from './components/sections/ProudAchieversSection';
import { NewsCuttingsSection } from './components/sections/NewsCuttingsSection';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <HomeSection />;
      case 'about':
        return <AboutSection />;
      case 'toppers':
        return <ToppersSection />;
      case 'facilities':
        return <FacilitiesSection />;
      case 'achievers':
        return <ProudAchieversSection />;
      case 'news':
        return <NewsCuttingsSection />;
      default:
        return <HomeSection />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header activeSection={activeSection} onSectionChange={setActiveSection} />
      <main className="flex-1">
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
}