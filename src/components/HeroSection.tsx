'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function HeroSection() {
  const [currentTool, setCurrentTool] = useState(0);

  const tools = [
    {
      name: "Cursor",
      icon: "/code-editor-icons/cursor-ai-code-editor-icon.png",
      color: "#3b82f6",
      category: "Code Editor"
    },
    {
      name: "ChatGPT",
      icon: "/chatbot-icons/chatgpt-ai-chatbot-icon.png",
      color: "#10a37f",
      category: "AI Chatbot"
    },
    {
      name: "Claude",
      icon: "/chatbot-icons/claude-ai-chatbot-icon.png",
      color: "#ff7a00",
      category: "AI Assistant"
    },
    {
      name: "Windsurf",
      icon: "/code-editor-icons/windsurf-ai-code-editor-icon.png",
      color: "#10b981",
      category: "AI IDE"
    },
    {
      name: "Kiro",
      icon: "/code-editor-icons/kiro-ai-code-editor-icon.svg",
      color: "#e11d48",
      category: "AI IDE"
    },
    {
      name: "ElevenLabs",
      icon: "/voice-ai-icons/elevenlabs-icon.png",
      color: "#ff6b35",
      category: "Voice AI"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTool((prev) => (prev + 1) % tools.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [tools.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300/30 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-300/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}>
          <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center p-2">
            <Image
              src="/code-editor-icons/cursor-ai-code-editor-icon.png"
              alt="Cursor icon"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
        </div>
        <div className="absolute top-32 right-32 animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }}>
          <div className="w-12 h-12 bg-green-500/20 rounded-2xl flex items-center justify-center p-2">
            <Image
              src="/chatbot-icons/chatgpt-ai-chatbot-icon.png"
              alt="ChatGPT icon"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
        </div>
        <div className="absolute bottom-32 left-32 animate-bounce" style={{ animationDelay: '2s', animationDuration: '3s' }}>
          <div className="w-12 h-12 bg-purple-500/20 rounded-2xl flex items-center justify-center p-2">
            <Image
              src="/voice-ai-icons/elevenlabs-icon.png"
              alt="ElevenLabs icon"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
        </div>
        <div className="absolute bottom-20 right-20 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3s' }}>
          <div className="w-12 h-12 bg-orange-500/20 rounded-2xl flex items-center justify-center p-2">
            <Image
              src="/code-editor-icons/kiro-ai-code-editor-icon.svg"
              alt="Kiro icon"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-white/20">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Updated for 2025</span>
          </div>

          {/* Main heading */}
          <h1 className="text-6xl md:text-8xl font-bold mb-8 text-balance">
            <span className="heading-gradient">Your Ultimate</span>
            <br />
            <span className="text-slate-800 dark:text-slate-200">AI Tools Guide</span>
          </h1>

          {/* Dynamic subtitle */}
          <div className="text-2xl md:text-3xl font-medium text-slate-600 dark:text-slate-400 mb-8 h-20 flex items-center justify-center">
            <span>Discover the best </span>
            <div className="mx-3 relative flex items-center">
              <div className="relative w-8 h-8 md:w-10 md:h-10 mr-3 transition-all duration-500">
                <Image
                  src={tools[currentTool].icon}
                  alt={`${tools[currentTool].name} icon`}
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
              <div className="flex flex-col items-start">
                <span
                  className="inline-block transition-all duration-500 font-bold text-lg md:text-2xl"
                  style={{ color: tools[currentTool].color }}
                >
                  {tools[currentTool].name}
                </span>
                <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                  {tools[currentTool].category}
                </span>
              </div>
            </div>
            <span> and more</span>
          </div>

          {/* Description */}
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed text-balance">
            Compare features, pricing, and capabilities of the latest AI code editors, chatbots,
            and productivity tools. Make informed decisions with our comprehensive 2025 guide.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="#editors"
              className="btn-primary text-lg px-8 py-4 rounded-2xl hover:scale-105 transition-all duration-300 shadow-xl flex items-center"
            >
              <div className="w-5 h-5 mr-3 relative">
                <Image
                  src="/code-editor-icons/cursor-ai-code-editor-icon.png"
                  alt="Explore icon"
                  fill
                  className="object-contain"
                />
              </div>
              Explore AI Tools
            </a>
            <a
              href="#comparison"
              className="px-8 py-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-slate-700 dark:text-slate-300 rounded-2xl font-semibold hover:bg-white dark:hover:bg-slate-700 transition-all duration-300 border border-slate-200 dark:border-slate-600 hover:scale-105 focus-ring flex items-center"
            >
              <div className="w-5 h-5 mr-3 relative">
                <Image
                  src="/tips-icons/ai-tool-stack-icon.png"
                  alt="Compare icon"
                  fill
                  className="object-contain"
                />
              </div>
              Compare Tools
            </a>
          </div>

          {/* Tool Preview */}
          <div className="mb-12">
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 font-medium">Featured AI Tools</p>
            <div className="flex justify-center items-center space-x-4 flex-wrap gap-2">
              {tools.map((tool, index) => (
                <div
                  key={tool.name}
                  className={`relative w-12 h-12 rounded-xl transition-all duration-300 ${index === currentTool
                      ? 'scale-110 shadow-lg ring-2 ring-white/50'
                      : 'opacity-60 hover:opacity-80'
                    }`}
                  style={{
                    backgroundColor: index === currentTool ? `${tool.color}20` : 'rgba(255,255,255,0.1)'
                  }}
                >
                  <Image
                    src={tool.icon}
                    alt={`${tool.name} icon`}
                    fill
                    className="object-contain p-2 rounded-xl"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-2">20+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">AI Tools Reviewed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-2">2025</div>
              <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">Latest Updates</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-2">100%</div>
              <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">Free Resource</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-2">24/7</div>
              <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">Always Updated</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 dark:border-slate-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 dark:bg-slate-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}