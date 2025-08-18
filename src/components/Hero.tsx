import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-calligraphy.jpg";

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
          <h1 className="text-6xl md:text-8xl font-chinese font-light mb-6 text-foreground tracking-wide">
            太極書法
          </h1>
          <p className="text-2xl md:text-3xl font-serif italic mb-4 text-muted-foreground">
            Taichi Calligraphy Arts
          </p>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed text-foreground/80">
            Where ancient wisdom meets artistic expression. Experience the flowing beauty of 
            traditional Chinese calligraphy infused with the graceful movements of Taichi.
          </p>
          
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
                  Your browser does not support the video tag. Please upload a video file to showcase your Taichi calligraphy art.
                </p>
              </video>
              <p className="text-sm text-muted-foreground text-center mt-3 font-serif italic">
                Watch the graceful art of Taichi calligraphy in motion
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