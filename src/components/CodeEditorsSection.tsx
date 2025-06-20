import Image from "next/image";

interface Editor {
  name: string;
  description: string;
  features: string[];
  pricing: string;
  pros: string[];
  cons: string[];
  website: string;
  logo: {
    src: string;
    alt: string;
  };
  color: string;
}

const editors: Editor[] = [
  {
    name: "Cursor",
    description: "An AI-powered code editor built on VS Code with advanced AI capabilities for code generation, debugging, and refactoring.",
    features: [
      "AI-powered code completion",
      "Chat with your codebase",
      "AI code review and suggestions",
      "Multi-file editing",
      "Built on VS Code",
      "Local and cloud AI models"
    ],
    pricing: "Free tier available, Pro at $20/month",
    pros: [
      "Excellent AI integration",
      "VS Code compatibility",
      "Privacy-focused options",
      "Fast and responsive"
    ],
    cons: [
      "Relatively new",
      "Limited free tier",
      "Requires internet for best features"
    ],
    website: "https://cursor.sh",
    logo: {
      src: "/code-editor-icons/cursor-ai-code-editor-icon.png",
      alt: "Cursor AI Code Editor Icon"
    },
    color: "#3b82f6"
  },
  {
    name: "Windsurf",
    description: "Advanced AI development environment with intelligent code assistance and collaborative features for modern development workflows.",
    features: [
      "Real-time AI assistance",
      "Collaborative coding",
      "Smart code generation",
      "Multi-language support",
      "Integrated debugging",
      "Cloud synchronization"
    ],
    pricing: "Free tier available, Premium plans from $15/month",
    pros: [
      "Great collaboration features",
      "Intelligent AI suggestions",
      "Cross-platform support",
      "Good performance"
    ],
    cons: [
      "Newer to market",
      "Learning curve",
      "Internet dependency"
    ],
    website: "https://windsurf.ai",
    logo: {
      src: "/code-editor-icons/windsurf-ai-code-editor-icon.png",
      alt: "Windsurf AI Code Editor Icon"
    },
    color: "#10b981"
  },
  {
    name: "GitHub Copilot",
    description: "AI pair programmer by GitHub and OpenAI that helps you write code faster with AI-powered code suggestions.",
    features: [
      "AI code suggestions",
      "Multi-language support",
      "IDE integrations",
      "Context-aware completions",
      "Documentation generation",
      "Test generation"
    ],
    pricing: "$10/month for individuals, $19/month for business",
    pros: [
      "Excellent AI training",
      "Wide IDE support",
      "Strong community",
      "Reliable performance"
    ],
    cons: [
      "Subscription required",
      "Privacy concerns",
      "Can suggest outdated code"
    ],
    website: "https://github.com/features/copilot",
    logo: {
      src: "/code-editor-icons/github-copilot-ai-code-editor-icon.png",
      alt: "GitHub Copilot Code Editor Icon"
    },
    color: "#8b5cf6"
  },
  {
    name: "Replit Ghostwriter",
    description: "AI-powered coding assistant integrated into Replit's online IDE for collaborative coding and learning.",
    features: [
      "AI code completion",
      "Code explanation",
      "Bug fixing assistance",
      "Code generation",
      "Online IDE integration",
      "Educational features"
    ],
    pricing: "Free tier available, Pro plans from $7/month",
    pros: [
      "Great for learning",
      "Web-based",
      "Educational focus",
      "Collaborative features"
    ],
    cons: [
      "Limited offline capability",
      "Smaller model",
      "Less advanced features"
    ],
    website: "https://replit.com",
    logo: {
      src: "/code-editor-icons/replit-ghostwriter-ai-code-editor-icon.png",
      alt: "Replit Ghostwriter Code Editor Icon"
    },
    color: "#f59e0b"
  }
];

export default function CodeEditorsSection() {
  return (
    <section id="editors" className="py-20 px-6 bg-[var(--muted)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            AI Code Editors
          </h2>
          <p className="text-xl text-[var(--foreground)]/70 max-w-3xl mx-auto">
            Transform your coding experience with these powerful AI-enhanced development environments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {editors.map((editor, index) => (
            <div 
              key={editor.name}
              className="bg-[var(--card-bg)] rounded-2xl p-8 card-hover animate-slide-in border border-[var(--border)]"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="flex items-center mb-6">
                <Image 
                  src={editor.logo.src}
                  alt={editor.logo.alt}
                  className="w-12 h-12 mr-4"
                  width={48}
                  height={48}
                />
                <div>
                  <h3 className="text-2xl font-bold" style={{color: editor.color}}>
                    {editor.name}
                  </h3>
                  <p className="text-[var(--foreground)]/60">{editor.pricing}</p>
                </div>
              </div>

              <p className="text-[var(--foreground)]/80 mb-6 leading-relaxed">
                {editor.description}
              </p>

              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-[var(--foreground)]">Key Features:</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {editor.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-[var(--foreground)]/70">
                      <span className="w-2 h-2 rounded-full mr-3" style={{backgroundColor: editor.color}}></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <h4 className="font-semibold mb-2 text-green-600">Pros:</h4>
                  <ul className="text-sm text-[var(--foreground)]/70 space-y-1">
                    {editor.pros.map((pro) => (
                      <li key={pro} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-red-600">Cons:</h4>
                  <ul className="text-sm text-[var(--foreground)]/70 space-y-1">
                    {editor.cons.map((con) => (
                      <li key={con} className="flex items-start">
                        <span className="text-red-500 mr-2">✗</span>
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <a 
                href={editor.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-lg font-semibold text-white transition-all transform hover:scale-105"
                style={{backgroundColor: editor.color}}
              >
                Visit {editor.name}
                <span className="ml-2">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 