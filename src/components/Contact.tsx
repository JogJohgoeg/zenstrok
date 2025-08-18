import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
export const Contact = () => {
  return <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-chinese font-light mb-6 text-foreground">
            聯繫我們
          </h2>
          <p className="text-xl md:text-2xl font-serif italic mb-8 text-muted-foreground">
            Contact & Inquiries
          </p>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Interested in commissioning a piece or learning more about Taichi calligraphy? 
            We would be honored to share this ancient art with you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="shadow-paper border-border/50 bg-card animate-brushstroke">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-accent">
                Get in Touch
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">Name</Label>
                <Input id="name" placeholder="Your name" className="border-border/50 focus:border-accent" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">Email</Label>
                <Input id="email" type="email" placeholder="your.email@example.com" className="border-border/50 focus:border-accent" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground">Message</Label>
                <Textarea id="message" placeholder="Tell us about your interest in Taichi calligraphy..." className="min-h-32 border-border/50 focus:border-accent resize-none" />
              </div>
              
              <Button className="w-full shadow-ink hover:shadow-paper transition-all duration-300">
                Send Message
              </Button>
            </CardContent>
          </Card>
          
          
        </div>
      </div>
    </section>;
};