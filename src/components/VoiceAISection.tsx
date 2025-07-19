import Image from "next/image";

interface VoiceAI {
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
  developer: string;
}

const voiceAITools: VoiceAI[] = [
  {
    name: "ElevenLabs",
    description: "Leading AI voice generation platform with ultra-realistic text-to-speech, voice cloning, and multilingual synthesis. Create professional voiceovers and custom voices with advanced emotion control.",
    features: [
      "Ultra-realistic text-to-speech",
      "Voice cloning from samples",
      "Multilingual synthesis (30+ languages)",
      "Emotion and style control",
      "Professional voice library",
      "Real-time voice conversion",
      "API integration",
      "Projects & workspace management"
    ],
    pricing: "Free tier (10 mins/month), Creator $5/month, Pro $22/month",
    pros: [
      "Exceptional voice quality and realism",
      "Quick voice cloning process",
      "Extensive language support",
      "Professional-grade features",
      "Active development and updates",
      "Strong API for integration"
    ],
    cons: [
      "Limited free tier usage",
      "Can be expensive for heavy use",
      "Requires ethical use guidelines",
      "Processing time for complex requests"
    ],
    website: "https://elevenlabs.io",
    logo: {
      src: "/voice-ai-icons/elevenlabs-icon.svg",
      alt: "ElevenLabs Voice AI Icon"
    },
    color: "#ff6b35",
    developer: "ElevenLabs"
  },
  {
    name: "Murf AI",
    description: "Comprehensive AI voice generation studio with 120+ voices in 20+ languages. Perfect for creating professional voiceovers, podcasts, and presentations with advanced editing features.",
    features: [
      "120+ AI voices in 20+ languages",
      "Voice editing and fine-tuning",
      "Background music integration",
      "Team collaboration features",
      "Pronunciation editor",
      "Voice speed and pitch control",
      "Commercial usage rights",
      "Video sync capabilities"
    ],
    pricing: "Free tier available, Basic $19/month, Pro $39/month",
    pros: [
      "Large variety of voices",
      "Professional editing features",
      "Team collaboration tools",
      "Commercial usage included",
      "Good value for money",
      "Easy-to-use interface"
    ],
    cons: [
      "Limited voice cloning features",
      "Some voices sound robotic",
      "Export limitations on free tier",
      "Less realistic than premium competitors"
    ],
    website: "https://murf.ai",
    logo: {
      src: "/voice-ai-icons/murf-ai-icon.svg",
      alt: "Murf AI Voice Generator Icon"
    },
    color: "#4f46e5",
    developer: "Murf AI"
  },
  {
    name: "Speechify",
    description: "AI-powered text-to-speech app with natural-sounding voices and speed reading capabilities. Transform any text into audio with celebrity voices and advanced listening features.",
    features: [
      "Natural AI voices",
      "Speed reading (up to 9x speed)",
      "Celebrity voice options",
      "Text highlighting sync",
      "OCR text scanning",
      "Cross-platform sync",
      "Offline listening",
      "Custom voice speed"
    ],
    pricing: "Free tier available, Premium $11.58/month",
    pros: [
      "Excellent for accessibility",
      "High-speed reading capabilities",
      "Celebrity voice options",
      "Great mobile app",
      "OCR functionality",
      "Cross-device synchronization"
    ],
    cons: [
      "Limited voice customization",
      "Premium required for best features",
      "Occasional pronunciation errors",
      "No voice cloning features"
    ],
    website: "https://speechify.com",
    logo: {
      src: "/voice-ai-icons/speechify-icon.svg",
      alt: "Speechify Text-to-Speech Icon"
    },
    color: "#00d4ff",
    developer: "Speechify"
  },
  {
    name: "Resemble AI",
    description: "Advanced AI voice cloning and synthesis platform with real-time voice conversion and emotion control. Create custom brand voices and dynamic speech generation.",
    features: [
      "Real-time voice cloning",
      "Emotion and style control",
      "Neural speech synthesis",
      "Voice conversion technology",
      "Multilingual synthesis",
      "API and SDK access",
      "Custom voice creation",
      "Enterprise security features"
    ],
    pricing: "Free tier available, Pay-as-you-go, Enterprise plans",
    pros: [
      "High-quality voice cloning",
      "Real-time capabilities",
      "Advanced emotion control",
      "Strong API integration",
      "Enterprise-grade security",
      "Flexible pricing options"
    ],
    cons: [
      "Steep learning curve",
      "Requires technical knowledge",
      "Can be expensive at scale",
      "Limited free tier"
    ],
    website: "https://resemble.ai",
    logo: {
      src: "/voice-ai-icons/resemble-ai-icon.svg",
      alt: "Resemble AI Voice Cloning Icon"
    },
    color: "#6366f1",
    developer: "Resemble AI"
  },
  {
    name: "Synthesia Voice",
    description: "AI voice generation integrated with video creation. Create professional voiceovers for videos with natural-sounding AI voices in multiple languages and accents.",
    features: [
      "AI voices for video creation",
      "Multilingual voice synthesis",
      "Natural pronunciation",
      "Voice synchronization with video",
      "Custom voice training",
      "Professional voice library",
      "SSML support",
      "Enterprise collaboration"
    ],
    pricing: "Personal $22/month, Creator $67/month, Enterprise custom",
    pros: [
      "Seamless video integration",
      "High-quality voice synthesis",
      "Professional voice library",
      "Good for video content creation",
      "Enterprise features available",
      "Regular voice updates"
    ],
    cons: [
      "Primarily video-focused",
      "Expensive for audio-only use",
      "Limited standalone features",
      "Requires video editing knowledge"
    ],
    website: "https://synthesia.io",
    logo: {
      src: "/voice-ai-icons/synthesia-voice-icon.svg",
      alt: "Synthesia Voice AI Icon"
    },
    color: "#ff4785",
    developer: "Synthesia"
  },
  {
    name: "Descript Overdub",
    description: "AI voice cloning technology integrated with audio editing. Create ultra-realistic voice clones for seamless audio editing and podcast production.",
    features: [
      "Ultra-realistic voice cloning",
      "Seamless audio editing integration",
      "Text-based audio editing",
      "Automatic transcription",
      "Voice training from samples",
      "Professional audio quality",
      "Collaboration features",
      "Version control"
    ],
    pricing: "Free tier available, Creator $12/month, Pro $24/month",
    pros: [
      "Excellent voice cloning quality",
      "Integrated editing workflow",
      "Text-based editing approach",
      "Great for podcasting",
      "Professional audio tools",
      "Collaborative features"
    ],
    cons: [
      "Learning curve for editing",
      "Requires voice training time",
      "Limited to audio editing context",
      "Premium features require subscription"
    ],
    website: "https://descript.com",
    logo: {
      src: "/voice-ai-icons/descript-overdub-icon.svg",
      alt: "Descript Overdub Voice AI Icon"
    },
    color: "#0ea5e9",
    developer: "Descript"
  },
  {
    name: "PlayHT",
    description: "Advanced AI voice generator with ultra-realistic speech synthesis and voice cloning. Create professional-quality voiceovers with emotion control and custom voice training.",
    features: [
      "Ultra-realistic AI voices",
      "Instant voice cloning",
      "Emotion and style control",
      "Multi-language support",
      "Real-time voice generation",
      "API integration",
      "Commercial usage rights",
      "Voice speed and pitch control"
    ],
    pricing: "Free tier available, Creator $19/month, Pro $39/month",
    pros: [
      "Exceptional voice quality",
      "Fast voice cloning",
      "Great API documentation",
      "Affordable pricing tiers",
      "Regular feature updates",
      "Good customer support"
    ],
    cons: [
      "Limited free tier minutes",
      "Some voices need improvement",
      "Processing delays during peak times",
      "Limited offline capabilities"
    ],
    website: "https://play.ht",
    logo: {
      src: "/voice-ai-icons/playht-icon.svg",
      alt: "PlayHT Voice AI Icon"
    },
    color: "#7c3aed",
    developer: "PlayHT"
  },
  {
    name: "Lovo AI",
    description: "Professional AI voice generator with 500+ voices in 100+ languages. Perfect for content creators, marketers, and businesses needing high-quality voiceovers at scale.",
    features: [
      "500+ AI voices in 100+ languages",
      "Voice cloning technology",
      "Emotion and emphasis control",
      "Background music integration",
      "Batch processing capabilities",
      "Team collaboration tools",
      "White-label solutions",
      "Advanced pronunciation editor"
    ],
    pricing: "Free tier available, Basic $24/month, Pro $48/month",
    pros: [
      "Massive voice library",
      "Excellent language coverage",
      "Professional editing features",
      "Good for enterprise use",
      "Strong collaboration tools",
      "White-label options available"
    ],
    cons: [
      "Can be expensive for individuals",
      "Interface can be overwhelming",
      "Some voices lack naturalness",
      "Limited voice cloning on lower tiers"
    ],
    website: "https://lovo.ai",
    logo: {
      src: "/voice-ai-icons/lovo-ai-icon.svg",
      alt: "Lovo AI Voice Generator Icon"
    },
    color: "#f97316",
    developer: "Lovo AI"
  }
];

export default function VoiceAISection() {
  return (
    <section id="voice-ai" className="py-24 px-6 section-gradient relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-32 left-20 w-80 h-80 bg-orange-400/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-20 w-96 h-96 bg-cyan-400/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center bg-orange-50 dark:bg-orange-900/20 px-4 py-2 rounded-full mb-6">
            <span className="text-orange-600 dark:text-orange-400 text-sm font-semibold">🎤 Voice AI</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold heading-gradient mb-8 text-balance">
            AI Voice & Speech Tools
            <span className="block text-3xl md:text-4xl font-normal text-[var(--foreground)]/60 mt-2">
              2025 Edition
            </span>
          </h2>
          <p className="text-xl text-[var(--foreground)]/70 max-w-4xl mx-auto leading-relaxed text-balance">
            Transform text into lifelike speech with cutting-edge AI voice generation, cloning, and synthesis tools. 
            Create professional voiceovers, audiobooks, and custom voices with unprecedented quality and control.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {voiceAITools.map((tool, index) => (
            <div 
              key={tool.name}
              className="bg-[var(--card-bg)] rounded-3xl p-7 card-hover card-glow animate-bounce-in border border-[var(--border)] relative group"
              style={{animationDelay: `${index * 0.12}s`}}
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" 
                   style={{background: `linear-gradient(135deg, ${tool.color}20, transparent)`}}></div>
              <div className="flex items-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 rounded-2xl shadow-lg" style={{backgroundColor: `${tool.color}15`}}></div>
                  <div className="relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center" style={{backgroundColor: `${tool.color}10`}}>
                    <span className="text-2xl">🎤</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bungee mb-1" style={{color: tool.color}}>
                    {tool.name}
                  </h3>
                  <p className="text-sm text-[var(--foreground)]/60 font-medium">{tool.developer}</p>
                </div>
              </div>

              <p className="text-[var(--foreground)]/80 mb-6 text-sm leading-relaxed">
                {tool.description}
              </p>

              <div className="mb-6">
                <div className="bg-[var(--muted)] rounded-xl p-3 flex items-center">
                  <span className="text-lg mr-2">💰</span>
                  <span className="text-sm font-bold text-[var(--foreground)]">{tool.pricing}</span>
                </div>
              </div>

              <div className="mb-5">
                <h4 className="font-bold mb-3 text-[var(--foreground)] text-sm flex items-center">
                  <span className="w-5 h-5 rounded-lg mr-2 flex items-center justify-center text-white text-xs" style={{backgroundColor: tool.color}}>
                    🎵
                  </span>
                  Key Features
                </h4>
                <div className="space-y-2">
                  {tool.features.slice(0, 4).map((feature) => (
                    <div key={feature} className="flex items-start p-2 bg-[var(--muted)] rounded-lg hover:bg-[var(--muted)]/80 transition-colors">
                      <span className="w-2 h-2 rounded-full mr-2 flex-shrink-0 mt-1" style={{backgroundColor: tool.color}}></span>
                      <span className="text-xs text-[var(--foreground)]/80 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 mb-6">
                <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-xl">
                  <h4 className="font-bold mb-2 text-green-700 dark:text-green-400 text-sm flex items-center">
                    <span className="mr-2">👍</span>
                    Strengths
                  </h4>
                  <div className="space-y-1">
                    {tool.pros.slice(0, 3).map((pro) => (
                      <div key={pro} className="flex items-start text-xs text-green-800 dark:text-green-300">
                        <span className="text-green-600 mr-2 text-xs flex-shrink-0 font-bold">✓</span>
                        <span className="font-medium">{pro}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/20 p-3 rounded-xl">
                  <h4 className="font-bold mb-2 text-amber-700 dark:text-amber-400 text-sm flex items-center">
                    <span className="mr-2">⚠️</span>
                    Considerations
                  </h4>
                  <div className="space-y-1">
                    {tool.cons.slice(0, 2).map((con) => (
                      <div key={con} className="flex items-start text-xs text-amber-800 dark:text-amber-300">
                        <span className="text-amber-600 mr-2 text-xs flex-shrink-0 font-bold">•</span>
                        <span className="font-medium">{con}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <a 
                href={tool.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-3 rounded-2xl font-bold text-white text-sm transition-all transform hover:scale-105 hover:shadow-xl w-full focus-ring"
                style={{backgroundColor: tool.color}}
              >
                <span className="mr-2">🎤</span>
                Try {tool.name}
                <span className="ml-2">→</span>
              </a>
            </div>
          ))}
        </div>

        {/* 2025 Highlights Section */}
        <div className="mt-16 mb-12">
          <div className="bg-gradient-to-r from-orange-500/10 to-purple-500/10 rounded-3xl p-8 border border-orange-200 dark:border-orange-800">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold heading-gradient mb-4">🚀 2025 Voice AI Breakthroughs</h3>
              <p className="text-[var(--foreground)]/70 max-w-3xl mx-auto">
                The latest advancements in AI voice technology are revolutionizing how we create and interact with audio content.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[var(--card-bg)] rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🧠</span>
                </div>
                <h4 className="font-bold text-[var(--foreground)] mb-2">Neural Voice Synthesis</h4>
                <p className="text-sm text-[var(--foreground)]/70">
                  Advanced neural networks create incredibly realistic voices with natural emotion and intonation.
                </p>
              </div>
              
              <div className="bg-[var(--card-bg)] rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h4 className="font-bold text-[var(--foreground)] mb-2">Real-time Generation</h4>
                <p className="text-sm text-[var(--foreground)]/70">
                  Instant voice generation and cloning with minimal latency for live applications.
                </p>
              </div>
              
              <div className="bg-[var(--card-bg)] rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌍</span>
                </div>
                <h4 className="font-bold text-[var(--foreground)] mb-2">Multilingual Mastery</h4>
                <p className="text-sm text-[var(--foreground)]/70">
                  Support for 100+ languages with native accent and pronunciation accuracy.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-[var(--card-bg)] rounded-2xl p-6 border border-[var(--border)] max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-3">
              <span className="text-2xl mr-2">🎵</span>
              <h4 className="font-bold text-[var(--foreground)]">Voice AI Revolution</h4>
            </div>
            <p className="text-sm text-[var(--foreground)]/70 mb-2">
              <span className="font-semibold">📅 Last Updated:</span> January 2025
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