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
    <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-gradient">
              AI Tools Guide 2025
            </h3>
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
            <div className="flex space-x-4">
              <a 
                href="https://github.com/WilsonRIP" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                GitHub
              </a>
              <a 
                href="https://www.youtube.com/@wilsonrip" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="YouTube Channel"
              >
                YouTube
              </a>
              <a 
                href="https://www.twitch.tv/wilsoniirip" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Twitch Stream"
              >
                Twitch
              </a>
            </div>
          </div>

          {resources.map((section) => (
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

        <div className="bg-white/10 rounded-lg p-6 mb-8">
          <h4 className="font-semibold mb-3 text-white">
            🔄 Stay Updated
          </h4>
          <p className="text-white/70 text-sm mb-3">
            AI tools evolve rapidly. This guide was last updated in June 2025 with the latest features, pricing, and capabilities.
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="bg-white/20 px-2 py-1 rounded">Reasoning Models</span>
            <span className="bg-white/20 px-2 py-1 rounded">Agent Workflows</span>
            <span className="bg-white/20 px-2 py-1 rounded">Enterprise Features</span>
            <span className="bg-white/20 px-2 py-1 rounded">Privacy Controls</span>
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