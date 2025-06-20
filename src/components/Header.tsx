export default function Header() {
  return (
    <header className="relative overflow-hidden">
      <div className="gradient-bg py-24 px-6">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI Tools Guide
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Discover the most powerful AI code editors, chatbots, and tools to supercharge your development workflow
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#editors" 
                className="bg-white text-[#667eea] px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-all transform hover:scale-105"
              >
                Explore AI Editors
              </a>
              <a 
                href="#chatbots" 
                className="glass-effect text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all transform hover:scale-105"
              >
                Discover AI Chatbots
              </a>
            </div>
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full animate-pulse-slow"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        </div>
      </div>
    </header>
  );
} 