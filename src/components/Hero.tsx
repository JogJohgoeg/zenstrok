import { Button } from "@/components/ui/button";
import heroImage from "@/assets/calligraphy-1.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/20 via-transparent to-background/30 opacity-80" style={{
          background: `
            radial-gradient(ellipse at top left, hsl(var(--background) / 0.3) 0%, transparent 50%),
            radial-gradient(ellipse at bottom right, hsl(var(--background) / 0.4) 0%, transparent 60%),
            linear-gradient(135deg, hsl(var(--background) / 0.1) 0%, hsl(var(--background) / 0.5) 100%)
          `
        }} />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          {/* Zen Circle and Artistic Elements */}
          <div className="mb-8 flex flex-col items-center space-y-6">
            {/* Main Zen Circle */}
            <div className="relative w-48 h-48 md:w-64 md:h-64">
              <svg 
                viewBox="0 0 200 200" 
                className="w-full h-full animate-brushstroke"
                style={{ filter: 'drop-shadow(0 0 20px hsl(var(--primary) / 0.3))' }}
              >
                <circle
                  cx="100"
                  cy="100"
                  r="85"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="6"
                  strokeLinecap="round"
                  className="text-foreground opacity-90"
                  style={{
                    strokeDasharray: '500 50',
                    strokeDashoffset: '20',
                    filter: 'url(#roughPaper)'
                  }}
                />
                <defs>
                  <filter id="roughPaper">
                    <feTurbulence baseFrequency="0.04" numOctaves="3" result="noise"/>
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="2"/>
                  </filter>
                </defs>
              </svg>
              
              {/* Flowing Strokes */}
              <div className="absolute inset-0 animate-ink-flow">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <path
                    d="M50 150 Q100 50 150 150"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="text-accent opacity-70"
                    style={{ strokeDasharray: '3 6' }}
                  />
                  <path
                    d="M70 60 Q130 120 170 80"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="text-muted-foreground opacity-50"
                    style={{ strokeDasharray: '2 8' }}
                  />
                </svg>
              </div>
            </div>
            
            {/* Minimal Text */}
            <div className="space-y-3">
              <p className="text-sm md:text-base font-serif text-muted-foreground tracking-[0.3em] uppercase">
                Zen • Calligraphy • Flow
              </p>
              <p className="text-lg md:text-xl max-w-xl mx-auto leading-relaxed text-foreground/70 font-light">
                Where mindful brushstrokes meet ancient wisdom
              </p>
            </div>
          </div>
          
          {/* Video Section */}
          <div className="mb-8 animate-fade-in-up">
            <div className="max-w-2xl mx-auto bg-card/80 backdrop-blur-sm rounded-lg p-6 shadow-paper border border-border/50">
              <video 
                className="w-full rounded-lg shadow-ink"
                controls 
                poster={heroImage}
                preload="metadata"
              >
                <source src="/path-to-your-video.mp4" type="video/mp4" />
                <p className="text-muted-foreground text-center py-4">
                  Your browser does not support the video tag. Please upload a video file to showcase your zen calligraphy art.
                </p>
              </video>
              <p className="text-sm text-muted-foreground text-center mt-3 font-serif italic">
                Watch the graceful art of zen calligraphy in motion
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-brushstroke">
            <Button variant="default" size="lg" className="px-8 py-3 text-lg shadow-ink">
              View Gallery
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 text-lg border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-px h-16 bg-gradient-to-b from-accent to-transparent" />
      </div>
    </section>
  );
};