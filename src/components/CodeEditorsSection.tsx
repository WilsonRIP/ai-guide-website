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
    description: "The leading AI-powered code editor built on VS Code, valued at $9 billion in 2025. Features advanced AI capabilities including autonomous agent mode and deep codebase understanding.",
    features: [
      "AI-powered autocomplete and multi-line edits",
      "Chat with your entire codebase",
      "Autonomous Agent mode for complex tasks",
      "Multi-file editing with context",
      "Built on VS Code with full compatibility",
      "Privacy mode with local processing",
      "Custom .cursorrules for AI behavior",
      "Tab to apply code suggestions"
    ],
    pricing: "Free tier available, Pro at $20/month",
    pros: [
      "Most advanced AI integration available",
      "Excellent VS Code compatibility",
      "Strong privacy controls",
      "Powerful agent mode for automation",
      "Fast and highly responsive",
      "Great community and support"
    ],
    cons: [
      "Can be overwhelming for beginners",
      "Premium features require subscription",
      "Occasional AI suggestion inconsistencies",
      "Interface can get cluttered"
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
    description: "The first agentic IDE by Codeium, featuring the revolutionary Cascade Flow system that provides deep contextual awareness and collaborative AI coding experience.",
    features: [
      "Cascade Flow - agentic AI system",
      "Real-time collaborative coding",
      "Deep contextual awareness",
      "Smart autocomplete and generation",
      "Multi-language support (70+ languages)",
      "Privacy-first approach",
      "Integrated with 40+ IDEs",
      "Live preview and instant deployment"
    ],
    pricing: "Free for individuals, Pro plans from $15/month",
    pros: [
      "Clean and intuitive interface",
      "Excellent free tier",
      "Strong collaborative features",
      "Privacy-focused design",
      "Fast performance",
      "Innovative Cascade Flow system"
    ],
    cons: [
      "Relatively new to market",
      "Limited offline capabilities",
      "Some features still in beta",
      "Learning curve for advanced features"
    ],
    website: "https://windsurf.com",
    logo: {
      src: "/code-editor-icons/windsurf-ai-code-editor-icon.png",
      alt: "Windsurf AI Code Editor Icon"
    },
    color: "#10b981"
  },
  {
    name: "GitHub Copilot",
    description: "Microsoft's flagship AI coding assistant with new 2025 pricing tiers, agent mode, and integration across the entire development lifecycle from code to deployment.",
    features: [
      "AI code completion and suggestions",
      "Copilot Chat in multiple IDEs",
      "Agent mode for autonomous tasks",
      "Multi-model support (GPT-4o, Claude, etc.)",
      "Code review and security scanning",
      "Pull request assistance",
      "CLI integration and mobile support",
      "Enterprise-grade security features"
    ],
    pricing: "Free (limited), Pro $10/month, Pro+ $39/month",
    pros: [
      "Excellent AI model training",
      "Wide IDE and platform support",
      "Strong enterprise features",
      "Active development and updates",
      "Good documentation",
      "Integration with GitHub ecosystem"
    ],
    cons: [
      "Premium requests are limited",
      "Additional costs for advanced models",
      "Privacy concerns for some users",
      "Complex pricing structure"
    ],
    website: "https://github.com/features/copilot",
    logo: {
      src: "/code-editor-icons/github-copilot-ai-code-editor-icon.png",
      alt: "GitHub Copilot Code Editor Icon"
    },
    color: "#8b5cf6"
  },
  {
    name: "Replit AI",
    description: "Integrated AI assistant within Replit's cloud-based IDE, perfect for learning, prototyping, and collaborative development with instant deployment capabilities.",
    features: [
      "Complete Code AI pair programming",
      "Generate Code from natural language",
      "Explain Code functionality",
      "Transform and refactor code",
      "Replit Agent for app building",
      "Real-time collaboration",
      "Instant web deployment",
      "Mobile coding support"
    ],
    pricing: "Free tier available, Core plans from $20/month",
    pros: [
      "Perfect for beginners and education",
      "Instant setup and deployment",
      "Strong collaborative features",
      "Mobile-friendly coding",
      "Great for prototyping",
      "Active learning community"
    ],
    cons: [
      "Cloud-dependent (requires internet)",
      "Limited for complex enterprise projects",
      "Performance constraints on free tier",
      "Less sophisticated than desktop IDEs"
    ],
    website: "https://replit.com",
    logo: {
      src: "/code-editor-icons/replit-ghostwriter-ai-code-editor-icon.png",
      alt: "Replit AI Code Editor Icon"
    },
    color: "#f59e0b"
  }
];

export default function CodeEditorsSection() {
  return (
    <section id="editors" className="py-20 px-6 bg-[var(--muted)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-outfit font-bold text-gradient mb-6">
            AI Code Editors - 2025 Edition
          </h2>
          <p className="text-xl text-[var(--foreground)]/70 max-w-3xl mx-auto">
            Transform your coding experience with these cutting-edge AI-enhanced development environments. 
            Updated with the latest features, pricing, and capabilities for 2025.
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
                <ul className="grid grid-cols-1 gap-2">
                  {editor.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-[var(--foreground)]/70">
                      <span className="w-2 h-2 rounded-full mr-3 flex-shrink-0" style={{backgroundColor: editor.color}}></span>
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
                        <span className="text-green-500 mr-2 flex-shrink-0">✓</span>
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
                        <span className="text-red-500 mr-2 flex-shrink-0">✗</span>
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

        <div className="mt-12 text-center">
          <p className="text-sm text-[var(--foreground)]/60">
            Information updated as of June 2025. Pricing and features may vary. 
            Check official websites for the most current details.
          </p>
        </div>
      </div>
    </section>
  );
}