export default function ComparisonSection() {
  const comparisons = [
    {
      title: "For Beginners",
      description: "Just getting started with AI tools?",
      recommendations: [
        {
          tool: "ChatGPT",
          reason: "User-friendly interface with generous free tier and excellent learning support",
          color: "#10a37f"
        },
        {
          tool: "Windsurf",
          reason: "Clean interface with excellent free tier and beginner-friendly features",
          color: "#10b981"
        },
        {
          tool: "Replit AI",
          reason: "Perfect for learning coding with instant setup and collaborative features",
          color: "#f59e0b"
        }
      ]
    },
    {
      title: "For Professional Development",
      description: "Need tools for serious coding and enterprise work?",
      recommendations: [
        {
          tool: "Cursor",
          reason: "Advanced Agent mode, $9B valuation, and cutting-edge AI integration",
          color: "#3b82f6"
        },
        {
          tool: "Claude",
          reason: "Claude 4 models excel at complex coding and extended reasoning tasks",
          color: "#ff7a00"
        },
        {
          tool: "GitHub Copilot",
          reason: "Industry standard with new Agent mode and enterprise features",
          color: "#8b5cf6"
        }
      ]
    },
    {
      title: "For Research & Learning",
      description: "Need to research, analyze, and stay updated?",
      recommendations: [
        {
          tool: "Perplexity",
          reason: "Enhanced Sonar models with real-time citations and Enterprise Pro features",
          color: "#8b5cf6"
        },
        {
          tool: "Claude",
          reason: "Massive context windows and superior analysis with Claude 4 models",
          color: "#ff7a00"
        },
        {
          tool: "Gemini",
          reason: "Gemini 2.5 with Deep Think reasoning and real-time Google integration",
          color: "#4285f4"
        }
      ]
    },
    {
      title: "For Creative Projects",
      description: "Working on creative, experimental, or collaborative projects?",
      recommendations: [
        {
          tool: "ChatGPT",
          reason: "Advanced reasoning models and Operators for autonomous creative tasks",
          color: "#10a37f"
        },
        {
          tool: "Character.AI",
          reason: "Enhanced with image attachments, auto memories, and dynamic scenes",
          color: "#6366f1"
        },
        {
          tool: "Claude",
          reason: "Artifacts feature for interactive content creation and collaboration",
          color: "#ff7a00"
        }
      ]
    },
    {
      title: "For Enterprise Teams",
      description: "Need enterprise-grade security, collaboration, and scalability?",
      recommendations: [
        {
          tool: "Microsoft Copilot",
          reason: "Deep Microsoft 365 integration with enhanced security and governance",
          color: "#0078d4"
        },
        {
          tool: "Claude Max",
          reason: "Enterprise features with customer-managed encryption and priority access",
          color: "#ff7a00"
        },
        {
          tool: "Perplexity Enterprise Pro",
          reason: "Private search, audit logs, and integration with business data sources",
          color: "#8b5cf6"
        }
      ]
    },
    {
      title: "For Budget-Conscious Users",
      description: "Want powerful AI without breaking the bank?",
      recommendations: [
        {
          tool: "Windsurf",
          reason: "Excellent free tier with advanced Cascade Flow system",
          color: "#10b981"
        },
        {
          tool: "ChatGPT Free",
          reason: "Generous free tier with access to GPT-4o and basic features",
          color: "#10a37f"
        },
        {
          tool: "Gemini",
          reason: "Strong free tier with Google integration and real-time information",
          color: "#4285f4"
        }
      ]
    }
  ];

  return (
    <section className="py-20 px-6 bg-[var(--muted)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Which AI Tools Are Right for You in 2025?
          </h2>
          <p className="text-xl text-[var(--foreground)]/70 max-w-3xl mx-auto">
            Find the perfect AI tools based on your specific needs, experience level, and budget
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {comparisons.map((comparison, index) => (
            <div 
              key={comparison.title}
              className="bg-[var(--card-bg)] rounded-2xl p-6 card-hover animate-slide-in border border-[var(--border)]"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <h3 className="text-xl font-bold mb-3 text-[var(--foreground)]">
                {comparison.title}
              </h3>
              <p className="text-[var(--foreground)]/70 mb-6 text-sm">
                {comparison.description}
              </p>

              <div className="space-y-3">
                {comparison.recommendations.map((rec) => (
                  <div 
                    key={rec.tool}
                    className="flex items-start p-3 rounded-lg border border-[var(--border)] hover:shadow-md transition-all"
                    style={{backgroundColor: `${rec.color}10`}}
                  >
                    <div 
                      className="w-2.5 h-2.5 rounded-full mt-1.5 mr-3 flex-shrink-0"
                      style={{backgroundColor: rec.color}}
                    ></div>
                    <div>
                      <h4 className="font-semibold mb-1 text-sm" style={{color: rec.color}}>
                        {rec.tool}
                      </h4>
                      <p className="text-xs text-[var(--foreground)]/70 leading-relaxed">
                        {rec.reason}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 space-y-8">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-[var(--foreground)]">
              Pro Tip: The AI Tool Stack Approach 🎯
            </h3>
            <p className="text-[var(--foreground)]/70 max-w-2xl mx-auto">
              Most professionals use multiple AI tools together. A typical 2025 setup combines a code editor like 
              Cursor, a research tool like Perplexity, and a reasoning assistant like Claude for comprehensive AI-powered workflows.
            </p>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-[var(--foreground)]">
              2025 Trend: Reasoning Models are Game Changers 🧠
            </h3>
            <p className="text-[var(--foreground)]/70 max-w-2xl mx-auto">
              The latest AI models (Claude 4, ChatGPT o3, Gemini 2.5 Deep Think) can now &quot;think&quot; through problems step-by-step, 
              making them dramatically more capable at complex tasks like coding, research, and analysis.
            </p>
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-3 text-[var(--foreground)]">
              Quick Decision Guide 🚀
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold text-[var(--foreground)] mb-2">Start with the free tiers:</p>
                <ul className="text-[var(--foreground)]/70 space-y-1">
                  <li>• ChatGPT Free for general AI assistance</li>
                  <li>• Windsurf for code editing</li>
                  <li>• Perplexity for research</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-[var(--foreground)] mb-2">Upgrade when you need:</p>
                <ul className="text-[var(--foreground)]/70 space-y-1">
                  <li>• More usage limits</li>
                  <li>• Advanced reasoning models</li>
                  <li>• Enterprise features</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}