export default function TipsSection() {
  const tips = [
    {
      title: "Start with Free Tiers",
      description: "Most AI tools offer generous free tiers in 2025. Try ChatGPT, Windsurf, and Perplexity free before upgrading to paid plans.",
      icon: "💡",
      color: "#3b82f6"
    },
    {
      title: "Master Reasoning Models",
      description: "Use 'thinking' prompts like 'think step by step' or 'analyze this problem' to activate reasoning modes in Claude 4, o3, and Gemini 2.5.",
      icon: "🧠",
      color: "#10b981"
    },
    {
      title: "Leverage Agent Modes",
      description: "Let AI agents work autonomously on complex tasks. Use Cursor's Agent mode for coding or ChatGPT's Operators for web tasks.",
      icon: "🤖",
      color: "#8b5cf6"
    },
    {
      title: "Be Context-Aware",
      description: "Provide rich context in your prompts. Upload documents to Claude, reference previous conversations, and be specific about your goals.",
      icon: "📋",
      color: "#f59e0b"
    },
    {
      title: "Use Multi-Modal Inputs",
      description: "Don't just type - use voice with ChatGPT, upload images to analyze, and share screens with Copilot Vision for better assistance.",
      icon: "🎭",
      color: "#ef4444"
    },
    {
      title: "Protect Your Privacy",
      description: "Use privacy modes when available, understand data policies, and consider local models for sensitive work. Enable Claude's privacy mode or use private search in Perplexity.",
      icon: "🛡️",
      color: "#06b6d4"
    },
    {
      title: "Build AI Tool Stacks",
      description: "Combine specialized tools: Cursor for coding, Perplexity for research, Claude for analysis. Each excels at different tasks.",
      icon: "🔗",
      color: "#ec4899"
    },
    {
      title: "Optimize for Cost",
      description: "Use free tiers strategically, time usage during off-peak hours for APIs, and choose the right model size for your task complexity.",
      icon: "💰",
      color: "#84cc16"
    }
  ];

  const workflows = [
    {
      title: "Modern Development Workflow",
      steps: [
        "Research with Perplexity's enhanced Sonar models",
        "Code with Cursor's Agent mode or Windsurf's Cascade",
        "Review and debug with Claude 4's superior analysis",
        "Document and explain with ChatGPT's reasoning models",
        "Deploy using integrated CI/CD features"
      ],
      color: "#3b82f6"
    },
    {
      title: "Research & Analysis Workflow",
      steps: [
        "Deep research with Perplexity Enterprise Pro",
        "Analyze large documents with Claude's 1M+ token context",
        "Cross-reference findings with Gemini's real-time data",
        "Synthesize insights using reasoning models",
        "Create reports with cited sources"
      ],
      color: "#10b981"
    },
    {
      title: "Creative Content Workflow",
      steps: [
        "Brainstorm concepts with ChatGPT's advanced reasoning",
        "Develop characters with Character.AI's enhanced features",
        "Create interactive content with Claude's Artifacts",
        "Generate visuals with DALL-E or Midjourney integration",
        "Refine and publish across platforms"
      ],
      color: "#8b5cf6"
    },
    {
      title: "Enterprise Team Workflow",
      steps: [
        "Secure setup with Microsoft Copilot or Claude Enterprise",
        "Collaborative development with shared AI workspaces",
        "Code review using AI-powered analysis tools",
        "Knowledge management with enterprise search",
        "Governance and audit trail monitoring"
      ],
      color: "#f59e0b"
    }
  ];

  const advancedTips = [
    {
      category: "Prompt Engineering 2025",
      tips: [
        "Use role-based prompting: 'Act as a senior developer...'",
        "Request reasoning: 'Show your thinking process'",
        "Set constraints: 'Use only TypeScript, no external libraries'",
        "Ask for alternatives: 'Provide 3 different approaches'"
      ]
    },
    {
      category: "Tool Selection Strategy",
      tips: [
        "Claude 4 for complex coding and large context analysis",
        "ChatGPT o3 for mathematical reasoning and logic problems",
        "Perplexity for research requiring current information",
        "Cursor for professional development with AI assistance"
      ]
    },
    {
      category: "Productivity Hacks",
      tips: [
        "Create custom prompts and save them as templates",
        "Use keyboard shortcuts in AI-enabled editors",
        "Set up automated workflows with API integrations",
        "Monitor your usage to optimize costs and efficiency"
      ]
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            AI Mastery Guide for 2025
          </h2>
          <p className="text-xl text-[var(--foreground)]/70 max-w-3xl mx-auto">
            Master the latest AI tools and techniques with these expert tips for reasoning models, agent workflows, and productivity optimization
          </p>
        </div>

        {/* Essential Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {tips.map((tip, index) => (
            <div 
              key={tip.title}
              className="bg-[var(--card-bg)] rounded-xl p-6 card-hover animate-slide-in border border-[var(--border)]"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">{tip.icon}</span>
                <h3 className="text-lg font-bold" style={{color: tip.color}}>
                  {tip.title}
                </h3>
              </div>
              <p className="text-[var(--foreground)]/70 text-sm leading-relaxed">
                {tip.description}
              </p>
            </div>
          ))}
        </div>

        {/* Workflow Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-[var(--foreground)]">
            Proven AI Workflows for 2025
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {workflows.map((workflow) => (
              <div 
                key={workflow.title}
                className="bg-[var(--card-bg)] rounded-xl p-6 card-hover border border-[var(--border)]"
              >
                <h4 className="text-xl font-bold mb-4" style={{color: workflow.color}}>
                  {workflow.title}
                </h4>
                <div className="space-y-3">
                  {workflow.steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="flex items-start">
                      <div 
                        className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3 mt-0.5 flex-shrink-0"
                        style={{backgroundColor: workflow.color}}
                      >
                        {stepIndex + 1}
                      </div>
                      <p className="text-sm text-[var(--foreground)]/70 leading-relaxed">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Advanced Tips Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-[var(--foreground)]">
            Advanced Techniques
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advancedTips.map((section) => (
              <div 
                key={section.category}
                className="bg-[var(--card-bg)] rounded-xl p-6 border border-[var(--border)]"
              >
                <h4 className="text-lg font-bold mb-4 text-[var(--foreground)]">
                  {section.category}
                </h4>
                <ul className="space-y-3">
                  {section.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start text-sm text-[var(--foreground)]/70">
                      <span className="text-blue-500 mr-2 mt-1 flex-shrink-0">•</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Cost Optimization Guide */}
        <div className="mb-16 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-[var(--foreground)] text-center">
            💡 Cost Optimization Strategy
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-[var(--foreground)] mb-3">Free Tier Maximization:</h4>
              <ul className="text-sm text-[var(--foreground)]/70 space-y-2">
                <li>• Start with ChatGPT Free, Windsurf, and Perplexity</li>
                <li>• Use multiple accounts across different tools</li>
                <li>• Time your usage during off-peak API hours</li>
                <li>• Leverage free GPU credits from providers</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[var(--foreground)] mb-3">Smart Upgrading:</h4>
              <ul className="text-sm text-[var(--foreground)]/70 space-y-2">
                <li>• Upgrade only your most-used tool first</li>
                <li>• Choose annual plans for 15-20% savings</li>
                <li>• Consider team plans for better per-user pricing</li>
                <li>• Monitor usage patterns before committing</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 text-center border border-blue-200/20 dark:border-purple-300/20">
          <h3 className="text-2xl font-bold mb-4 text-[var(--foreground)]">
            Ready to Master AI in 2025? 🚀
          </h3>
          <p className="text-[var(--foreground)]/70 mb-6 max-w-2xl mx-auto">
            The AI landscape has matured significantly. Start with reasoning models, experiment with agent workflows, 
            and build your personalized AI tool stack. The future of productivity is here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#editors" 
              className="bg-[var(--primary)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[var(--primary-dark)] transition-all transform hover:scale-105"
            >
              Start with AI Code Editors
            </a>
            <a 
              href="#chatbots" 
              className="bg-[var(--secondary)] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all transform hover:scale-105"
            >
              Explore AI Assistants
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}