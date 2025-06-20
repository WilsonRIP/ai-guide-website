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
    <section id="chatbots" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            AI Chatbots & Assistants - 2025 Edition
          </h2>
          <p className="text-xl text-[var(--foreground)]/70 max-w-3xl mx-auto">
            Discover the most advanced AI assistants featuring the latest models, enhanced reasoning capabilities, 
            and cutting-edge features for coding, research, creativity, and productivity in 2025.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {chatbots.map((chatbot, index) => (
            <div 
              key={chatbot.name}
              className="bg-[var(--card-bg)] rounded-2xl p-6 card-hover animate-slide-in border border-[var(--border)]"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="flex items-center mb-4">
                <Image 
                  src={chatbot.logo.src}
                  alt={chatbot.logo.alt}
                  width={48}
                  height={48}
                  className="mr-3"
                />
                <div>
                  <h3 className="text-xl font-bold" style={{color: chatbot.color}}>
                    {chatbot.name}
                  </h3>
                  <p className="text-sm text-[var(--foreground)]/60">{chatbot.developer}</p>
                </div>
              </div>

              <p className="text-[var(--foreground)]/80 mb-4 text-sm leading-relaxed">
                {chatbot.description}
              </p>

              <div className="mb-4">
                <p className="text-sm font-semibold text-[var(--foreground)]/70 mb-1">
                  💰 {chatbot.pricing}
                </p>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold mb-2 text-[var(--foreground)] text-sm">Key Strengths:</h4>
                <ul className="space-y-1">
                  {chatbot.strengths.slice(0, 4).map((strength) => (
                    <li key={strength} className="flex items-center text-xs text-[var(--foreground)]/70">
                      <span className="w-1.5 h-1.5 rounded-full mr-2 flex-shrink-0" style={{backgroundColor: chatbot.color}}></span>
                      {strength}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold mb-2 text-green-600 text-sm">Best For:</h4>
                <ul className="space-y-1">
                  {chatbot.bestFor.map((use) => (
                    <li key={use} className="flex items-start text-xs text-[var(--foreground)]/70">
                      <span className="text-green-500 mr-2 text-xs flex-shrink-0">✓</span>
                      {use}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-2 text-amber-600 text-sm">Limitations:</h4>
                <ul className="space-y-1">
                  {chatbot.limitations.map((limitation) => (
                    <li key={limitation} className="flex items-start text-xs text-[var(--foreground)]/70">
                      <span className="text-amber-500 mr-2 text-xs flex-shrink-0">⚠</span>
                      {limitation}
                    </li>
                  ))}
                </ul>
              </div>

              <a 
                href={chatbot.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-lg font-semibold text-white text-sm transition-all transform hover:scale-105 w-full justify-center"
                style={{backgroundColor: chatbot.color}}
              >
                Try {chatbot.name}
                <span className="ml-2">→</span>
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-[var(--foreground)]/60">
            Information updated as of June 2025. Features and pricing may vary. 
            Check official websites for the most current details and availability.
          </p>
        </div>
      </div>
    </section>
  );
}