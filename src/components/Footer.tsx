export default function Footer() {
  const currentYear = new Date().getFullYear();

  const resources = [
    {
      title: "AI Code Editors",
      links: [
        { name: "Cursor", url: "https://cursor.sh" },
        { name: "Windsurf", url: "https://windsurf.com" },
        { name: "GitHub Copilot", url: "https://github.com/features/copilot" },
        { name: "Replit AI", url: "https://replit.com" }
      ]
    },
    {
      title: "AI Assistants",
      links: [
        { name: "ChatGPT", url: "https://chat.openai.com" },
        { name: "Claude", url: "https://claude.ai" },
        { name: "Gemini", url: "https://gemini.google.com" },
        { name: "Perplexity", url: "https://perplexity.ai" }
      ]
    },
    {
      title: "Specialized Tools",
      links: [
        { name: "Microsoft Copilot", url: "https://copilot.microsoft.com" },
        { name: "Character.AI", url: "https://character.ai" },
        { name: "DeepSeek", url: "https://chat.deepseek.com" },
        { name: "Anthropic API", url: "https://console.anthropic.com" }
      ]
    }
  ];

  const updates = [
    {
      title: "Latest Updates",
      links: [
        { name: "OpenAI Blog", url: "https://openai.com/blog" },
        { name: "Anthropic News", url: "https://www.anthropic.com/news" },
        { name: "Google AI Updates", url: "https://blog.google/technology/ai/" },
        { name: "GitHub Changelog", url: "https://github.blog/changelog/" }
      ]
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white py-20 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">🤖</span>
              </div>
              <h3 className="text-3xl font-outfit font-bold heading-gradient">
                AI Tools Guide 2025
              </h3>
            </div>
            <p className="text-white/70 mb-6 max-w-md">
              Your comprehensive resource for discovering the latest AI tools with reasoning models, 
              agent capabilities, and cutting-edge features for development, research, and creativity in 2025.
            </p>
            <div className="mb-6">
              <p className="text-white/60 text-sm mb-2">
                🚀 Featured: Claude 4, ChatGPT o3, Gemini 2.5 Deep Think
              </p>
              <p className="text-white/60 text-sm">
                🤖 New: Agent modes, reasoning models, enhanced privacy
              </p>
            </div>
            <div className="flex space-x-3">
              <a 
                href="https://github.com/WilsonRIP" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-xl transition-all duration-200 hover:scale-105 focus-ring"
                aria-label="GitHub Profile"
              >
                <span className="mr-2">🐙</span>
                GitHub
              </a>
              <a 
                href="https://www.youtube.com/@wilsonrip" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-xl transition-all duration-200 hover:scale-105 focus-ring"
                aria-label="YouTube Channel"
              >
                <span className="mr-2">📺</span>
                YouTube
              </a>
              <a 
                href="https://www.twitch.tv/wilsoniirip" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-xl transition-all duration-200 hover:scale-105 focus-ring"
                aria-label="Twitch Stream"
              >
                <span className="mr-2">🎮</span>
                Twitch
              </a>
            </div>
          </div>

          {resources.map((section) => (
            <div key={section.title}>
              <h4 className="font-bold mb-5 text-white text-lg">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 bg-white/40 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {updates.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-4 text-white">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/10">
          <div className="flex items-center mb-4">
            <span className="text-2xl mr-3">🔄</span>
            <h4 className="font-bold text-white text-xl">
              Stay Updated
            </h4>
          </div>
          <p className="text-white/80 mb-4 leading-relaxed">
            AI tools evolve rapidly. This guide was last updated in June 2025 with the latest features, pricing, and capabilities.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            <span className="bg-blue-500/20 text-blue-200 px-3 py-2 rounded-xl border border-blue-400/20">Reasoning Models</span>
            <span className="bg-green-500/20 text-green-200 px-3 py-2 rounded-xl border border-green-400/20">Agent Workflows</span>
            <span className="bg-purple-500/20 text-purple-200 px-3 py-2 rounded-xl border border-purple-400/20">Enterprise Features</span>
            <span className="bg-orange-500/20 text-orange-200 px-3 py-2 rounded-xl border border-orange-400/20">Privacy Controls</span>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm mb-4 md:mb-0">
            © {currentYear} AI Tools Guide. Created by Luke (WilsonRIP). All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a 
              href="https://wilsonriplag.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
            >
              Creator Portfolio
            </a>
            <a 
              href="https://speedtype.net" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
            >
              Speed Type
            </a>
            <span className="text-white/50">•</span>
            <span className="text-white/60">
              Updated June 2025
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}