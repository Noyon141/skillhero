import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Calendar, Target, Zap } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-8">
            <Zap className="h-4 w-4" />
            <span className="text-sm font-medium">
              AI-Powered Career Development
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Master Your Career
            </span>
            <br />
            <span className="text-foreground">with AI Guidance</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Input your current skills and desired goals. Get a personalized
            AI-powered career roadmap with timelines, learning modules, and
            curated resources to accelerate your professional growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="text-base px-8 py-6 h-auto">
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-base px-8 py-6 h-auto cursor-pointer"
            >
              <Link href={"/about"}>Learn More</Link>
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto select-none">
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-card/50 border border-border/50 hover:border-primary/30 transition-colors ">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                AI-Powered Analysis
              </h3>
              <p className="text-sm text-muted-foreground">
                Advanced AI analyzes your skills and creates personalized
                learning paths
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-card/50 border border-border/50 hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Timeline Planning</h3>
              <p className="text-sm text-muted-foreground">
                Get realistic timelines and milestones for your career
                progression
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-card/50 border border-border/50 hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Curated Resources</h3>
              <p className="text-sm text-muted-foreground">
                Access handpicked learning modules, courses, and industry
                resources
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                10K+
              </div>
              <div className="text-sm text-muted-foreground">Career Paths</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                50K+
              </div>
              <div className="text-sm text-muted-foreground">Resources</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                95%
              </div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                24/7
              </div>
              <div className="text-sm text-muted-foreground">AI Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl" />
    </section>
  );
};

export default Hero;
