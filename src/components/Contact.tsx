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
          
          
          <Card className="shadow-paper border-border/50 bg-card animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-accent">
                客戶評價
              </CardTitle>
              <p className="text-lg font-serif italic text-muted-foreground">
                Write a Review
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Review Form */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="reviewer-name" className="text-foreground">Your Name</Label>
                  <Input id="reviewer-name" placeholder="Enter your name" className="border-border/50 focus:border-accent" />
                </div>
                
                <div className="space-y-2">
                  <Label className="text-foreground">Rating</Label>
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        className="w-6 h-6 text-muted-foreground hover:text-accent transition-colors"
                      >
                        <svg
                          className="w-full h-full fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="review-text" className="text-foreground">Your Review</Label>
                  <Textarea 
                    id="review-text" 
                    placeholder="Share your experience with Taichi calligraphy..." 
                    className="min-h-24 border-border/50 focus:border-accent resize-none" 
                  />
                </div>
                
                <Button className="w-full shadow-ink hover:shadow-paper transition-all duration-300">
                  Submit Review
                </Button>
              </div>

              {/* Divider */}
              <div className="border-t border-border/50 pt-6">
                <h4 className="text-lg font-serif text-accent mb-4">Recent Reviews</h4>
                
                {/* Sample Reviews */}
                <div className="space-y-4">
                  <div className="border-l-4 border-accent pl-4 animate-brushstroke">
                    <p className="text-foreground/90 italic mb-2">
                      "The harmony between Taichi movements and calligraphy strokes creates pure magic. A truly transformative art form."
                    </p>
                    <p className="text-sm text-muted-foreground font-medium">
                      — Sarah Chen, Art Collector
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-accent pl-4 animate-brushstroke">
                    <p className="text-foreground/90 italic mb-2">
                      "Every piece tells a story of balance and flow. The master's technique is extraordinary."
                    </p>
                    <p className="text-sm text-muted-foreground font-medium">
                      — Michael Zhang, Gallery Owner
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-accent pl-4 animate-brushstroke">
                    <p className="text-foreground/90 italic mb-2">
                      "Watching the creation process is meditative. The final artwork carries deep spiritual energy."
                    </p>
                    <p className="text-sm text-muted-foreground font-medium">
                      — Lisa Wang, Meditation Teacher
                    </p>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-border/50 mt-6">
                  <div className="flex items-center justify-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="w-5 h-5 fill-accent text-accent"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-center text-sm text-muted-foreground mt-2">
                    Average rating from our clients
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};