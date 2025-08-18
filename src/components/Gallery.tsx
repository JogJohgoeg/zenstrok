import { Card, CardContent } from "@/components/ui/card";
import calligraphy1 from "@/assets/calligraphy-1.jpg";
import calligraphy2 from "@/assets/calligraphy-2.jpg";
import calligraphy3 from "@/assets/calligraphy-3.jpg";

const artworks = [
  {
    id: 1,
    title: "Flowing Harmony",
    description: "Traditional characters expressing the balance of yin and yang",
    image: calligraphy1,
  },
  {
    id: 2,
    title: "Bamboo Wisdom",
    description: "Poetry written alongside bamboo painting, symbolizing resilience",
    image: calligraphy2,
  },
  {
    id: 3,
    title: "Ancient Verses",
    description: "Classical poetry rendered in elegant brushstrokes",
    image: calligraphy3,
  },
];

export const Gallery = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-chinese font-light mb-6 text-foreground">
            作品欣賞
          </h2>
          <p className="text-xl md:text-2xl font-serif italic mb-4 text-muted-foreground">
            Gallery of Works
          </p>
          <p className="text-lg max-w-2xl mx-auto text-foreground/80">
            Each piece reflects the meditative flow of zen practice, 
            captured in the timeless art of Chinese calligraphy.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.map((artwork, index) => (
            <Card 
              key={artwork.id} 
              className="group overflow-hidden shadow-paper hover:shadow-ink transition-all duration-700 animate-ink-spread bg-card border-border/50"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold mb-2 text-foreground group-hover:text-accent transition-colors duration-300">
                    {artwork.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {artwork.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};