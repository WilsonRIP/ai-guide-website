export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-gradient-to-r from-indigo-600/90 via-purple-600/90 to-pink-600/90 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-white">
              AI Tools Guide
            </h1>
            <span className="hidden sm:block text-sm text-white/70 bg-white/20 px-3 py-1 rounded-full">
              2025 Edition
            </span>
          </div>
          
          <nav className="flex items-center space-x-4">
            <a
              href="#editors"
              className="hidden sm:inline-flex bg-white/20 text-white px-4 py-2 rounded-lg font-medium hover:bg-white/30 transition-all text-sm"
            >
              Code Editors
            </a>
            <a
              href="#chatbots"
              className="hidden sm:inline-flex bg-white/20 text-white px-4 py-2 rounded-lg font-medium hover:bg-white/30 transition-all text-sm"
            >
              AI Chatbots
            </a>
            <a
              href="#voice-ai"
              className="hidden sm:inline-flex bg-white/20 text-white px-4 py-2 rounded-lg font-medium hover:bg-white/30 transition-all text-sm"
            >
              Voice AI
            </a>
            <a
              href="#editors"
              className="sm:hidden bg-white text-indigo-600 px-4 py-2 rounded-lg font-medium hover:bg-white/90 transition-all text-sm"
            >
              Explore Tools
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}