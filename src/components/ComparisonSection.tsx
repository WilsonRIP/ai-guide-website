export default function ComparisonSection() {
  const comparisons = [
    {
      title: "For Beginners",
      description: "Just getting started with AI tools?",
      recommendations: [
        {
          tool: "ChatGPT",
          reason: "User-friendly interface and excellent for learning",
          color: "#10a37f"
        },
        {
          tool: "Cursor",
          reason: "Easy to get started with VS Code familiarity",
          color: "#3b82f6"
        },
        {
          tool: "Replit Ghostwriter",
          reason: "Great for learning and online coding",
          color: "#f59e0b"
        }
      ]
    },
    {
      title: "For Professional Development",
      description: "Need tools for serious coding work?",
      recommendations: [
        {
          tool: "Cursor",
          reason: "Advanced AI integration with professional features",
          color: "#3b82f6"
        },
        {
          tool: "GitHub Copilot",
          reason: "Industry standard with wide IDE support",
          color: "#8b5cf6"
        },
        {
          tool: "Claude",
          reason: "Excellent for code review and analysis",
          color: "#ff7a00"
        }
      ]
    },
    {
      title: "For Research & Learning",
      description: "Need to research and stay updated?",
      recommendations: [
        {
          tool: "Perplexity",
          reason: "Real-time research with cited sources",
          color: "#8b5cf6"
        },
        {
          tool: "Gemini",
          reason: "Google integration and current information",
          color: "#4285f4"
        },
        {
          tool: "Claude",
          reason: "Strong reasoning and analysis capabilities",
          color: "#ff7a00"
        }
      ]
    },
    {
      title: "For Creative Projects",
      description: "Working on creative or experimental projects?",
      recommendations: [
        {
          tool: "ChatGPT",
          reason: "Best for creative writing and brainstorming",
          color: "#10a37f"
        },
        {
          tool: "Character.AI",
          reason: "Great for character development and roleplay",
          color: "#6366f1"
        },
        {
          tool: "Windsurf",
          reason: "Collaborative features for team creativity",
          color: "#10b981"
        }
      ]
    }
  ];

  return (
    <section className="py-20 px-6 bg-[var(--muted)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Which Tools Are Right for You?
          </h2>
          <p className="text-xl text-[var(--foreground)]/70 max-w-3xl mx-auto">
            Find the perfect AI tools based on your specific needs and experience level
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {comparisons.map((comparison, index) => (
            <div 
              key={comparison.title}
              className="bg-[var(--card-bg)] rounded-2xl p-8 card-hover animate-slide-in border border-[var(--border)]"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <h3 className="text-2xl font-bold mb-3 text-[var(--foreground)]">
                {comparison.title}
              </h3>
              <p className="text-[var(--foreground)]/70 mb-6">
                {comparison.description}
              </p>

              <div className="space-y-4">
                {comparison.recommendations.map((rec, recIndex) => (
                  <div 
                    key={rec.tool}
                    className="flex items-start p-4 rounded-lg border border-[var(--border)] hover:shadow-md transition-all"
                    style={{backgroundColor: `${rec.color}10`}}
                  >
                    <div 
                      className="w-3 h-3 rounded-full mt-1 mr-4 flex-shrink-0"
                      style={{backgroundColor: rec.color}}
                    ></div>
                    <div>
                      <h4 className="font-semibold mb-1" style={{color: rec.color}}>
                        {rec.tool}
                      </h4>
                      <p className="text-sm text-[var(--foreground)]/70">
                        {rec.reason}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4 text-[var(--foreground)]">
            Pro Tip: Mix and Match! 🎯
          </h3>
          <p className="text-[var(--foreground)]/70 max-w-2xl mx-auto">
            Most developers use multiple AI tools together. Try combining a code editor like Cursor with 
            a research tool like Perplexity and a chatbot like ChatGPT for the best workflow.
          </p>
        </div>
      </div>
    </section>
  );
} 