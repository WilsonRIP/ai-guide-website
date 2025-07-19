import Image from "next/image";

interface Chatbot {
  name: string;
  description: string;
  strengths: string[];
  pricing: string;
  bestFor: string[];
  limitations: string[];
  website: string;
  logo: {
    src: string;
    alt: string;
  };
  color: string;
  developer: string;
}

const chatbots: Chatbot[] = [
  {
    name: "ChatGPT",
    description: "OpenAI's flagship conversational AI featuring the latest o3 and o3-mini reasoning models, with new Operators for autonomous task completion and multimodal capabilities.",
    strengths: [
      "Advanced reasoning with o3 models",
      "Operators for autonomous tasks (Pro)",
      "Multimodal input (text, voice, images)",
      "Strong code generation",
      "Memory and personalization",
      "Extensive plugin ecosystem",
      "Advanced Voice mode"
    ],
    pricing: "Free tier, Plus $20/month, Pro $200/month",
    bestFor: [
      "General productivity and assistance",
      "Code development and debugging",
      "Creative writing and content",
      "Complex reasoning tasks",
      "Autonomous task completion"
    ],
    limitations: [
      "Pro tier is expensive",
      "Can still hallucinate facts",
      "Rate limits on lower tiers",
      "Potential price increases planned"
    ],
    website: "https://chat.openai.com",
    logo: {
      src: "/chatbot-icons/chatgpt-ai-chatbot-icon.png",
      alt: "ChatGPT AI Chatbot Icon"
    },
    color: "#10a37f",
    developer: "OpenAI"
  },
  {
    name: "Claude",
    description: "Anthropic's AI assistant featuring new Claude 4 models (Opus 4 & Sonnet 4) with extended thinking capabilities, massive context windows, and superior coding performance.",
    strengths: [
      "Claude 4 models with extended thinking",
      "Massive context window (1M+ tokens)",
      "Superior coding performance",
      "Strong ethical reasoning",
      "Document analysis excellence",
      "Artifacts for interactive content",
      "Claude Code integration"
    ],
    pricing: "Free tier, Pro $20/month, Max $100-200/month",
    bestFor: [
      "Complex coding projects",
      "Long document analysis",
      "Ethical AI responses",
      "Extended reasoning tasks",
      "Research and analysis"
    ],
    limitations: [
      "Max tier is very expensive",
      "Slower than some competitors",
      "Limited creative output",
      "More conservative responses"
    ],
    website: "https://claude.ai",
    logo: {
      src: "/chatbot-icons/claude-ai-chatbot-icon.png",
      alt: "Claude AI Chatbot Icon"
    },
    color: "#ff7a00",
    developer: "Anthropic"
  },
  {
    name: "Gemini",
    description: "Google's advanced multimodal AI featuring Gemini 2.5 models with Deep Think reasoning, seamless Google services integration, and real-time web access.",
    strengths: [
      "Gemini 2.5 Pro with Deep Think",
      "Real-time web information",
      "Google services integration",
      "Multimodal capabilities",
      "Fast response times",
      "Multiple language support",
      "YouTube and Search integration"
    ],
    pricing: "Free tier, Advanced $20/month",
    bestFor: [
      "Research with web access",
      "Google Workspace integration",
      "Image and video analysis",
      "Real-time information",
      "Multilingual tasks"
    ],
    limitations: [
      "Privacy concerns with Google",
      "Less advanced reasoning than competitors",
      "Limited customization",
      "Newer to the market"
    ],
    website: "https://gemini.google.com",
    logo: {
      src: "/chatbot-icons/gemini-ai-chatbot-icon.png",
      alt: "Gemini AI Chatbot Icon"
    },
    color: "#4285f4",
    developer: "Google"
  },
  {
    name: "Copilot",
    description: "Microsoft's AI assistant with enhanced Copilot Vision, Actions for web tasks, and deep integration across Microsoft 365 and Windows ecosystem.",
    strengths: [
      "Deep Microsoft ecosystem integration",
      "Copilot Vision for screen analysis",
      "Actions for web task automation",
      "Free tier with generous limits",
      "Office 365 productivity features",
      "Image generation with DALL-E",
      "Enhanced search capabilities"
    ],
    pricing: "Free tier, Pro $20/month",
    bestFor: [
      "Microsoft 365 users",
      "Windows productivity",
      "Web research and browsing",
      "Office document creation",
      "Enterprise workflows"
    ],
    limitations: [
      "Best within Microsoft ecosystem",
      "Limited customization options",
      "Fewer advanced features",
      "Less sophisticated than specialized tools"
    ],
    website: "https://copilot.microsoft.com",
    logo: {
      src: "/chatbot-icons/copilot-ai-chatbot-icon.png",
      alt: "Copilot AI Chatbot Icon"
    },
    color: "#0078d4",
    developer: "Microsoft"
  },
  {
    name: "Perplexity",
    description: "AI-powered answer engine with enhanced Sonar models, Enterprise Pro features, and transparent research capabilities with real-time citations.",
    strengths: [
      "Enhanced Sonar reasoning models",
      "Real-time web search with citations",
      "Research-focused interface",
      "Follow-up question suggestions",
      "Academic and Pro search modes",
      "Source transparency",
      "API access included"
    ],
    pricing: "Free tier, Pro $20/month, Enterprise Pro $40/month",
    bestFor: [
      "Research and fact-checking",
      "Academic work and citations",
      "Current events and news",
      "Information verification",
      "Enterprise research teams"
    ],
    limitations: [
      "Less conversational than competitors",
      "Limited creative capabilities",
      "Focus primarily on factual queries",
      "Expensive enterprise pricing"
    ],
    website: "https://perplexity.ai",
    logo: {
      src: "/chatbot-icons/perplexity-ai-chatbot-icon.png",
      alt: "Perplexity AI Chatbot Icon"
    },
    color: "#8b5cf6",
    developer: "Perplexity AI"
  },
  {
    name: "Character.AI",
    description: "Enhanced character creation platform with new image attachments, auto memories, dynamic scenes, and improved chat styles for immersive roleplay experiences.",
    strengths: [
      "Advanced character creation tools",
      "Image attachment support",
      "Auto memories and context retention",
      "Dynamic scenes and scenarios",
      "Multiple chat styles",
      "Strong community features",
      "Improved model quality"
    ],
    pricing: "Free with limits, c.ai+ $9.99/month",
    bestFor: [
      "Creative writing and storytelling",
      "Language learning practice",
      "Entertainment and roleplay",
      "Character development",
      "Interactive fiction"
    ],
    limitations: [
      "Less factual accuracy",
      "Limited business applications",
      "Content filtering can be restrictive",
      "Still in beta development"
    ],
    website: "https://character.ai",
    logo: {
      src: "/chatbot-icons/character-ai-chatbot-icon.png",
      alt: "Character AI Chatbot Icon"
    },
    color: "#6366f1",
    developer: "Character.AI"
  }
];

export default function ChatbotsSection() {
  return (
    <section id="chatbots" className="py-24 px-6 section-gradient-alt relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-32 right-20 w-80 h-80 bg-green-400/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-20 w-96 h-96 bg-indigo-400/30 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center bg-green-50 dark:bg-green-900/20 px-4 py-2 rounded-full mb-6">
            <span className="text-green-600 dark:text-green-400 text-sm font-semibold">🤖 AI Assistants</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold heading-gradient mb-8 text-balance">
            AI Chatbots & Assistants
            <span className="block text-3xl md:text-4xl font-normal text-[var(--foreground)]/60 mt-2">
              2025 Edition
            </span>
          </h2>
          <p className="text-xl text-[var(--foreground)]/70 max-w-4xl mx-auto leading-relaxed text-balance">
            Discover the most advanced AI assistants featuring the latest models, enhanced reasoning capabilities, 
            and cutting-edge features for coding, research, creativity, and productivity in 2025.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {chatbots.map((chatbot, index) => (
            <div 
              key={chatbot.name}
              className="bg-[var(--card-bg)] rounded-3xl p-7 card-hover card-glow animate-bounce-in border border-[var(--border)] relative group"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" 
                   style={{background: `linear-gradient(135deg, ${chatbot.color}20, transparent)`}}></div>
              <div className="flex items-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 rounded-2xl shadow-lg" style={{backgroundColor: `${chatbot.color}20`}}></div>
                  <Image 
                    src={chatbot.logo.src}
                    alt={chatbot.logo.alt}
                    width={56}
                    height={56}
                    className="relative z-10 p-2"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bungee mb-1" style={{color: chatbot.color}}>
                    {chatbot.name}
                  </h3>
                  <p className="text-sm text-[var(--foreground)]/60 font-medium">{chatbot.developer}</p>
                </div>
              </div>

              <p className="text-[var(--foreground)]/80 mb-6 text-sm leading-relaxed">
                {chatbot.description}
              </p>

              <div className="mb-6">
                <div className="bg-[var(--muted)] rounded-xl p-3 flex items-center">
                  <span className="text-lg mr-2">💰</span>
                  <span className="text-sm font-bold text-[var(--foreground)]">{chatbot.pricing}</span>
                </div>
              </div>

              <div className="mb-5">
                <h4 className="font-bold mb-3 text-[var(--foreground)] text-sm flex items-center">
                  <span className="w-5 h-5 rounded-lg mr-2 flex items-center justify-center text-white text-xs" style={{backgroundColor: chatbot.color}}>
                    ⚡
                  </span>
                  Key Strengths
                </h4>
                <div className="space-y-2">
                  {chatbot.strengths.slice(0, 4).map((strength) => (
                    <div key={strength} className="flex items-start p-2 bg-[var(--muted)] rounded-lg hover:bg-[var(--muted)]/80 transition-colors">
                      <span className="w-2 h-2 rounded-full mr-2 flex-shrink-0 mt-1" style={{backgroundColor: chatbot.color}}></span>
                      <span className="text-xs text-[var(--foreground)]/80 font-medium">{strength}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-5">
                <h4 className="font-bold mb-2 text-green-700 dark:text-green-400 text-sm flex items-center">
                  <span className="mr-2">🎯</span>
                  Best For
                </h4>
                <div className="space-y-1">
                  {chatbot.bestFor.map((use) => (
                    <div key={use} className="flex items-start text-xs text-green-800 dark:text-green-300">
                      <span className="text-green-600 mr-2 text-xs flex-shrink-0 font-bold">✓</span>
                      <span className="font-medium">{use}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-bold mb-2 text-amber-700 dark:text-amber-400 text-sm flex items-center">
                  <span className="mr-2">⚠️</span>
                  Considerations
                </h4>
                <div className="space-y-1">
                  {chatbot.limitations.map((limitation) => (
                    <div key={limitation} className="flex items-start text-xs text-amber-800 dark:text-amber-300">
                      <span className="text-amber-600 mr-2 text-xs flex-shrink-0 font-bold">•</span>
                      <span className="font-medium">{limitation}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a 
                href={chatbot.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-3 rounded-2xl font-bold text-white text-sm transition-all transform hover:scale-105 hover:shadow-xl w-full focus-ring"
                style={{backgroundColor: chatbot.color}}
              >
                <span className="mr-2">🚀</span>
                Try {chatbot.name}
                <span className="ml-2">→</span>
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-[var(--card-bg)] rounded-2xl p-6 border border-[var(--border)] max-w-2xl mx-auto">
            <p className="text-sm text-[var(--foreground)]/70 mb-2">
              <span className="font-semibold">📅 Last Updated:</span> June 2025
            </p>
            <p className="text-xs text-[var(--foreground)]/60">
              Features and pricing may vary. Check official websites for the most current details and availability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}