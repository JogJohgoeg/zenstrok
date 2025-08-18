import { Separator } from "@/components/ui/separator";
export const Footer = () => {
  return <footer className="bg-primary text-primary-foreground py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-chinese font-light mb-4">太極書法</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Preserving and sharing the ancient art of Chinese calligraphy 
              through the mindful practice of Taichi.
            </p>
          </div>
          
          <div className="text-center">
            <h4 className="font-serif font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <a href="#gallery" className="block text-primary-foreground/80 hover:text-accent transition-colors duration-300">
                Gallery
              </a>
              <a href="#about" className="block text-primary-foreground/80 hover:text-accent transition-colors duration-300">
                About
              </a>
              <a href="#contact" className="block text-primary-foreground/80 hover:text-accent transition-colors duration-300">
                Contact
              </a>
            </nav>
          </div>
          
          <div className="text-center md:text-right">
            <h4 className="font-serif font-semibold mb-4">Connect</h4>
            <div className="space-y-2">
              <p className="text-primary-foreground/80">zhuoning293@gmail.com</p>
              
            </div>
          </div>
        </div>
        
        <Separator className="bg-primary-foreground/20 mb-6" />
        
        <div className="text-center text-primary-foreground/60">
          <p className="font-serif">
            © 2024 Taichi Calligraphy Arts. All rights reserved.
          </p>
          <p className="mt-2 text-sm">
            Crafted with reverence for traditional Chinese arts
          </p>
        </div>
      </div>
    </footer>;
};