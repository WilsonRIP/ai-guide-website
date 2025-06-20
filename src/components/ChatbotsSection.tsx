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
    description: "OpenAI's flagship conversational AI that excels at natural language understanding, code generation, and creative tasks.",
    strengths: [
      "Excellent code generation",
      "Natural conversation",
      "Wide knowledge base",
      "Plugin ecosystem",
      "Image analysis (GPT-4V)",
      "Web browsing capability"
    ],
    pricing: "Free tier available, Plus at $20/month",
    bestFor: [
      "Code explanation and debugging",
      "Creative writing",
      "Problem solving",
      "Learning and education"
    ],
    limitations: [
      "Knowledge cutoff date",
      "Can hallucinate facts",
      "Rate limits on free tier"
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
    description: "Anthropic's AI assistant known for its helpfulness, harmlessness, and honesty. Excellent for analysis and reasoning tasks.",
    strengths: [
      "Strong reasoning abilities",
      "Ethical AI responses",
      "Large context window",
      "Code analysis",
      "Document processing",
      "Mathematical reasoning"
    ],
    pricing: "Free tier available, Pro at $20/month",
    bestFor: [
      "Code review and analysis",
      "Research and analysis",
      "Technical documentation",
      "Complex reasoning tasks"
    ],
    limitations: [
      "Less creative than ChatGPT",
      "Slower response times",
      "Limited availability"
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
    description: "Google's multimodal AI that integrates with Google services and excels at understanding text, images, and code.",
    strengths: [
      "Multimodal capabilities",
      "Google services integration",
      "Real-time information",
      "Multiple languages",
      "Image understanding",
      "Fast responses"
    ],
    pricing: "Free tier available, Advanced at $20/month",
    bestFor: [
      "Research with web access",
      "Image analysis",
      "Google Workspace integration",
      "Multilingual tasks"
    ],
    limitations: [
      "Newer to market",
      "Less coding experience",
      "Privacy concerns"
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
    description: "Microsoft's AI assistant integrated into Microsoft 365 and Edge, powered by OpenAI technology.",
    strengths: [
      "Microsoft integration",
      "Web browsing",
      "Image generation",
      "Office 365 integration",
      "Edge browser features",
      "Free tier generous"
    ],
    pricing: "Free tier available, Pro at $20/month",
    bestFor: [
      "Microsoft ecosystem users",
      "Web research",
      "Office productivity",
      "Creative tasks"
    ],
    limitations: [
      "Limited customization",
      "Microsoft ecosystem focus",
      "Newer AI model"
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
    description: "AI-powered search engine that provides cited answers with real-time web access and research capabilities.",
    strengths: [
      "Real-time web search",
      "Cited sources",
      "Research focused",
      "Follow-up questions",
      "Academic mode",
      "Multiple models"
    ],
    pricing: "Free tier available, Pro at $20/month",
    bestFor: [
      "Research and fact-checking",
      "Current events",
      "Academic work",
      "Information gathering"
    ],
    limitations: [
      "Less conversational",
      "Limited creativity",
      "Focus on factual queries"
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
    description: "Platform for creating and chatting with AI characters, great for roleplay, creative writing, and entertainment.",
    strengths: [
      "Character creation",
      "Roleplay capabilities",
      "Creative conversations",
      "Multiple personalities",
      "Community features",
      "Free to use"
    ],
    pricing: "Free with ads, Plus at $9.99/month",
    bestFor: [
      "Creative writing",
      "Entertainment",
      "Language practice",
      "Character development"
    ],
    limitations: [
      "Less factual accuracy",
      "Limited coding help",
      "Can be inconsistent"
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
            AI Chatbots & Assistants
          </h2>
          <p className="text-xl text-[var(--foreground)]/70 max-w-3xl mx-auto">
            Discover the most capable AI assistants for coding, research, creativity, and problem-solving
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
                      <span className="w-1.5 h-1.5 rounded-full mr-2" style={{backgroundColor: chatbot.color}}></span>
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
                      <span className="text-green-500 mr-2 text-xs">✓</span>
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
                      <span className="text-amber-500 mr-2 text-xs">⚠</span>
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
      </div>
    </section>
  );
} 