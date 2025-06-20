import Header from "../components/Header";
import CodeEditorsSection from "../components/CodeEditorsSection";
import ChatbotsSection from "../components/ChatbotsSection";
import ComparisonSection from "../components/ComparisonSection";
import TipsSection from "../components/TipsSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <CodeEditorsSection />
      <ChatbotsSection />
      <ComparisonSection />
      <TipsSection />
      <Footer />
    </div>
  );
}
