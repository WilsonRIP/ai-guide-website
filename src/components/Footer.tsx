export default function Footer() {
  const currentYear = new Date().getFullYear();

  const resources = [
    {
      title: "Code Editors",
      links: [
        { name: "Cursor", url: "https://cursor.sh" },
        { name: "Windsurf", url: "https://windsurf.ai" },
        { name: "GitHub Copilot", url: "https://github.com/features/copilot" },
        { name: "Replit", url: "https://replit.com" }
      ]
    },
    {
      title: "AI Chatbots",
      links: [
        { name: "ChatGPT", url: "https://chat.openai.com" },
        { name: "Claude", url: "https://claude.ai" },
        { name: "Gemini", url: "https://gemini.google.com" },
        { name: "Perplexity", url: "https://perplexity.ai" }
      ]
    }
  ];

  return (
    <footer className="bg-[var(--foreground)] text-[var(--background)] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-gradient">
              AI Tools Guide
            </h3>
            <p className="text-[var(--background)]/70 mb-6 max-w-md">
              Your comprehensive resource for discovering and comparing the best AI tools 
              for development, research, and creativity.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/WilsonRIP" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[var(--background)]/70 hover:text-[var(--background)] transition-colors"
              >
                GitHub
              </a>
              <a 
                href="https://www.youtube.com/@wilsonrip" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[var(--background)]/70 hover:text-[var(--background)] transition-colors"
              >
                YouTube
              </a>
              <a 
                href="https://www.twitch.tv/wilsoniirip" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[var(--background)]/70 hover:text-[var(--background)] transition-colors"
              >
                Twitch
              </a>
            </div>
          </div>

          {resources.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-4 text-[var(--background)]">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--background)]/70 hover:text-[var(--background)] transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-[var(--background)]/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[var(--background)]/70 text-sm mb-4 md:mb-0">
            © {currentYear} AI Tools Guide. Created by Luke Wilson (WilsonRIP). All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a 
              href="https://wilsonriplag.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[var(--background)]/70 hover:text-[var(--background)] transition-colors"
            >
              Creator Portfolio
            </a>
            <a 
              href="https://speedtype.net" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[var(--background)]/70 hover:text-[var(--background)] transition-colors"
            >
              Speed Type
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 