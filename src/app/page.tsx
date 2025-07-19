import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import CodeEditorsSection from "../components/CodeEditorsSection";
import ChatbotsSection from "../components/ChatbotsSection";
import VoiceAISection from "../components/VoiceAISection";
import ComparisonSection from "../components/ComparisonSection";
import TipsSection from "../components/TipsSection";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <CodeEditorsSection />
      <ChatbotsSection />
      <VoiceAISection />
      <ComparisonSection />
      <TipsSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
