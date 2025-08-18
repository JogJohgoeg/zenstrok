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
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background/80" />
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
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed text-foreground/80">
            Where ancient wisdom meets artistic expression. Experience the flowing beauty of 
            traditional Chinese calligraphy infused with the graceful movements of Taichi.
          </p>
          
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