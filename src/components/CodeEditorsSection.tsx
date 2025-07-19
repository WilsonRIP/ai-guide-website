import Image from "next/image";
import React from "react";

interface Editor {
  name: string;
  description: string | React.ReactNode;
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
    description: (
      <>
        The leading AI-powered code editor built on VS Code, valued at over{" "}
        <span className="text-highlight-green">$9 billion</span> in 2025. Features 
        advanced AI capabilities including autonomous agent mode and deep codebase understanding.
      </>
    ),
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
  },
  {
    name: "Kiro",
    description: (
      <>
        The next-generation AI-powered IDE and assistant designed for developers. Features autonomous 
        coding capabilities, intelligent project management, and seamless integration with modern development workflows. 
        Built with <span className="text-highlight-purple">cutting-edge AI technology</span> for 2025.
      </>
    ),
    features: [
      "Autonomous coding and file management",
      "Intelligent project scaffolding",
      "Context-aware code suggestions",
      "Multi-file refactoring capabilities",
      "Built-in terminal and git integration",
      "Real-time collaboration features",
      "Advanced debugging and testing tools",
      "Customizable AI behavior and workflows"
    ],
    pricing: "Free tier available, Pro plans starting soon",
    pros: [
      "Cutting-edge autonomous AI capabilities",
      "Intuitive and modern interface",
      "Excellent context understanding",
      "Strong focus on developer productivity",
      "Active development and innovation",
      "Great performance and responsiveness"
    ],
    cons: [
      "Still in active development",
      "Limited third-party integrations",
      "Learning curve for advanced features",
      "Pricing structure not yet finalized"
    ],
    website: "https://kiro.ai",
    logo: {
      src: "/code-editor-icons/kiro-ai-code-editor-icon.svg",
      alt: "Kiro AI Code Editor Icon"
    },
    color: "#e11d48"
  }
];

export default function CodeEditorsSection() {
  return (
    <section id="editors" className="py-24 px-6 section-gradient relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-full mb-6">
            <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold">💻 Featured Tools</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-outfit font-bold heading-gradient mb-8 text-balance">
            AI Code Editors
            <span className="block text-3xl md:text-4xl font-normal text-[var(--foreground)]/60 mt-2">
              2025 Edition
            </span>
          </h2>
          <p className="text-xl text-[var(--foreground)]/70 max-w-4xl mx-auto leading-relaxed text-balance">
            Transform your coding experience with these cutting-edge AI-enhanced development environments. 
            Updated with the latest features, pricing, and capabilities for 2025.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {editors.map((editor, index) => (
            <div 
              key={editor.name}
              className="bg-[var(--card-bg)] rounded-3xl p-8 card-hover card-glow animate-scale-in border border-[var(--border)] relative group"
              style={{animationDelay: `${index * 0.15}s`}}
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              <div className="flex items-center mb-8">
                <div className="relative">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 shadow-lg"></div>
                  <Image 
                    src={editor.logo.src}
                    alt={editor.logo.alt}
                    className="w-16 h-16 relative z-10 p-2"
                    width={64}
                    height={64}
                  />
                </div>
                <div className="ml-5">
                  <h3 className="text-3xl font-bungee mb-1" style={{color: editor.color}}>
                    {editor.name}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-[var(--foreground)]/60 font-medium">{editor.pricing}</span>
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  </div>
                </div>
              </div>

              <p className="text-[var(--foreground)]/80 mb-8 leading-relaxed font-comic-neue text-lg">
                {editor.description}
              </p>

              <div className="mb-8">
                <h4 className="font-bold mb-4 text-[var(--foreground)] text-lg flex items-center">
                  <span className="w-6 h-6 rounded-lg mr-3 flex items-center justify-center text-white text-sm" style={{backgroundColor: editor.color}}>
                    ✨
                  </span>
                  Key Features
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  {editor.features.map((feature, idx) => (
                    <div key={feature} className="flex items-start p-3 bg-[var(--muted)] rounded-xl hover:bg-[var(--muted)]/80 transition-colors">
                      <span className="w-3 h-3 rounded-full mr-3 flex-shrink-0 mt-1" style={{backgroundColor: editor.color}}></span>
                      <span className="text-sm text-[var(--foreground)]/80 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-2xl">
                  <h4 className="font-bold mb-3 text-green-700 dark:text-green-400 flex items-center">
                    <span className="mr-2">👍</span>
                    Pros
                  </h4>
                  <ul className="space-y-2">
                    {editor.pros.map((pro) => (
                      <li key={pro} className="flex items-start text-sm text-green-800 dark:text-green-300">
                        <span className="text-green-600 mr-2 flex-shrink-0 font-bold">✓</span>
                        <span className="font-medium">{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-2xl">
                  <h4 className="font-bold mb-3 text-amber-700 dark:text-amber-400 flex items-center">
                    <span className="mr-2">⚠️</span>
                    Considerations
                  </h4>
                  <ul className="space-y-2">
                    {editor.cons.map((con) => (
                      <li key={con} className="flex items-start text-sm text-amber-800 dark:text-amber-300">
                        <span className="text-amber-600 mr-2 flex-shrink-0 font-bold">•</span>
                        <span className="font-medium">{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href={editor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center px-6 py-4 rounded-2xl font-bold text-white transition-all transform hover:scale-105 hover:shadow-2xl focus-ring text-center"
                  style={{backgroundColor: editor.color}}
                >
                  <span className="mr-2">🚀</span>
                  Try {editor.name}
                  <span className="ml-2">→</span>
                </a>
                <button className="px-4 py-4 bg-[var(--muted)] hover:bg-[var(--border)] rounded-2xl transition-colors focus-ring">
                  <span className="text-xl">🔖</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-[var(--card-bg)] rounded-2xl p-6 border border-[var(--border)] max-w-2xl mx-auto">
            <p className="text-sm text-[var(--foreground)]/70 mb-2">
              <span className="font-semibold">📅 Last Updated:</span> June 2025
            </p>
            <p className="text-xs text-[var(--foreground)]/60">
              Pricing and features may vary. Check official websites for the most current details.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}