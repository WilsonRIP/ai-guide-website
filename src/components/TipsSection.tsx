export default function TipsSection() {
  const tips = [
    {
      title: "Start with Free Tiers",
      description: "Most AI tools offer free tiers. Try them out before committing to paid plans.",
      icon: "💡",
      color: "#3b82f6"
    },
    {
      title: "Use Specific Prompts",
      description: "Be specific in your requests. Instead of 'fix this code', say 'fix the syntax error in line 15'.",
      icon: "🎯",
      color: "#10b981"
    },
    {
      title: "Learn Keyboard Shortcuts",
      description: "Master shortcuts in your AI editor to boost productivity. Cursor and VS Code have excellent shortcuts.",
      icon: "⌨️",
      color: "#8b5cf6"
    },
    {
      title: "Review AI Suggestions",
      description: "Always review AI-generated code. AI tools are powerful but not perfect.",
      icon: "👀",
      color: "#f59e0b"
    },
    {
      title: "Combine Multiple Tools",
      description: "Use different AI tools for different tasks. Research with Perplexity, code with Cursor, chat with ChatGPT.",
      icon: "🔗",
      color: "#ef4444"
    },
    {
      title: "Keep Learning",
      description: "AI tools evolve rapidly. Stay updated with new features and capabilities.",
      icon: "📚",
      color: "#06b6d4"
    }
  ];

  const workflows = [
    {
      title: "Development Workflow",
      steps: [
        "Research problem with Perplexity or Gemini",
        "Code solution with Cursor or GitHub Copilot",
        "Review and refine with Claude",
        "Document with ChatGPT"
      ],
      color: "#3b82f6"
    },
    {
      title: "Learning Workflow",
      steps: [
        "Ask concepts questions to ChatGPT",
        "Practice coding with Replit Ghostwriter",
        "Get code explanations from Claude",
        "Join communities for discussions"
      ],
      color: "#10b981"
    },
    {
      title: "Creative Workflow",
      steps: [
        "Brainstorm ideas with ChatGPT",
        "Develop characters with Character.AI",
        "Code creative projects with Cursor",
        "Share and get feedback"
      ],
      color: "#8b5cf6"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Pro Tips & Best Practices
          </h2>
          <p className="text-xl text-[var(--foreground)]/70 max-w-3xl mx-auto">
            Maximize your productivity with these expert tips for using AI tools effectively
          </p>
        </div>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
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
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-12 text-[var(--foreground)]">
            Recommended Workflows
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workflows.map((workflow, index) => (
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

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 text-center border border-blue-200/20 dark:border-purple-300/20">
          <h3 className="text-2xl font-bold mb-4 text-[var(--foreground)]">
            Ready to Supercharge Your Workflow? 🚀
          </h3>
          <p className="text-[var(--foreground)]/70 mb-6 max-w-2xl mx-auto">
            Start with one tool that matches your needs, then gradually expand your AI toolkit. 
            Remember, the best AI tool is the one you'll actually use consistently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#editors" 
              className="bg-[var(--primary)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[var(--primary-dark)] transition-all transform hover:scale-105"
            >
              Explore Code Editors
            </a>
            <a 
              href="#chatbots" 
              className="bg-[var(--secondary)] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all transform hover:scale-105"
            >
              Try AI Chatbots
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 