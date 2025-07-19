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
  }
];

export default function VoiceAISection() {
  return (
    <section id="voice-ai" className="py-20 px-6 bg-[var(--muted)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            AI Voice & Speech Tools - 2025 Edition
          </h2>
          <p className="text-xl text-[var(--foreground)]/70 max-w-3xl mx-auto">
            Transform text into lifelike speech with cutting-edge AI voice generation, cloning, and synthesis tools. 
            Create professional voiceovers, audiobooks, and custom voices with unprecedented quality and control.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {voiceAITools.map((tool, index) => (
            <div 
              key={tool.name}
              className="bg-[var(--card-bg)] rounded-2xl p-6 card-hover animate-slide-in border border-[var(--border)]"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="flex items-center mb-4">
                <Image 
                  src={tool.logo.src}
                  alt={tool.logo.alt}
                  width={48}
                  height={48}
                  className="mr-3 rounded-lg"
                />
                <div>
                  <h3 className="text-xl font-bold" style={{color: tool.color}}>
                    {tool.name}
                  </h3>
                  <p className="text-sm text-[var(--foreground)]/60">{tool.developer}</p>
                </div>
              </div>

              <p className="text-[var(--foreground)]/80 mb-4 text-sm leading-relaxed">
                {tool.description}
              </p>

              <div className="mb-4">
                <p className="text-sm font-semibold text-[var(--foreground)]/70 mb-1">
                  💰 {tool.pricing}
                </p>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold mb-2 text-[var(--foreground)] text-sm">Key Features:</h4>
                <ul className="space-y-1">
                  {tool.features.slice(0, 4).map((feature) => (
                    <li key={feature} className="flex items-center text-xs text-[var(--foreground)]/70">
                      <span className="w-1.5 h-1.5 rounded-full mr-2 flex-shrink-0" style={{backgroundColor: tool.color}}></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold mb-2 text-green-600 text-sm">Pros:</h4>
                <ul className="space-y-1">
                  {tool.pros.slice(0, 3).map((pro) => (
                    <li key={pro} className="flex items-start text-xs text-[var(--foreground)]/70">
                      <span className="text-green-500 mr-2 text-xs flex-shrink-0">✓</span>
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-2 text-amber-600 text-sm">Cons:</h4>
                <ul className="space-y-1">
                  {tool.cons.slice(0, 2).map((con) => (
                    <li key={con} className="flex items-start text-xs text-[var(--foreground)]/70">
                      <span className="text-amber-500 mr-2 text-xs flex-shrink-0">⚠</span>
                      {con}
                    </li>
                  ))}
                </ul>
              </div>

              <a 
                href={tool.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-lg font-semibold text-white text-sm transition-all transform hover:scale-105 w-full justify-center"
                style={{backgroundColor: tool.color}}
              >
                Try {tool.name}
                <span className="ml-2">→</span>
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-[var(--foreground)]/60">
            Information updated as of January 2025. Features and pricing may vary. 
            Check official websites for the most current details and availability.
          </p>
        </div>
      </div>
    </section>
  );
} 