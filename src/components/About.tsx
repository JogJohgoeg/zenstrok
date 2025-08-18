import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  return (
    <section className="py-24 px-6 bg-gradient-paper">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-chinese font-light mb-6 text-foreground">
            關於藝術
          </h2>
          <p className="text-xl md:text-2xl font-serif italic mb-8 text-muted-foreground">
            About the Art
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <Card className="shadow-paper border-border/50 bg-card/80 backdrop-blur-sm animate-brushstroke">
            <CardContent className="p-8">
              <h3 className="text-2xl font-serif font-semibold mb-4 text-accent">
                The Philosophy
              </h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Zenstrok merges meditative zen practice with the ancient art of Chinese brush writing. 
                Each stroke flows like water, each character breathes with mindful presence and 
                spiritual energy.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                This unique approach transforms traditional calligraphy into a moving 
                meditation, where the artist's body, breath, and brush move as one.
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-paper border-border/50 bg-card/80 backdrop-blur-sm animate-brushstroke" style={{ animationDelay: '300ms' }}>
            <CardContent className="p-8">
              <h3 className="text-2xl font-serif font-semibold mb-4 text-accent">
                The Practice
              </h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Before each piece, the artist enters a state of centered calm through 
                zen meditation. This preparation infuses the calligraphy with the essence 
                of balanced energy and mindful presence.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                The result is artwork that carries not just visual beauty, but the 
                spiritual depth of ancient Chinese wisdom and practice.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 text-center">
          <blockquote className="text-xl md:text-2xl font-serif italic text-foreground/70 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            "In the movement of the brush lies the dance of the universe,<br />
            In the flow of ink lives the essence of Tao."
          </blockquote>
          <cite className="block mt-4 text-muted-foreground">
            — Ancient Calligraphy Wisdom
          </cite>
        </div>
      </div>
    </section>
  );
};