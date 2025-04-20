
import { Github, MessageSquare, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-8 backdrop-blur-md bg-black/30 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gradient">The Brew Route</h3>
            <p className="text-sm text-muted-foreground">
              A decentralized platform that tracks products from raw materials to consumers,
              ensuring ethical sourcing and reducing counterfeits.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["About", "Features", "How It Works", "For Brands", "For Consumers"].map((item, i) => (
                <li key={i}>
                  <a 
                    href="#" 
                    className="text-sm text-muted-foreground hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-green-400 hover:after:w-full after:transition-all"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-muted-foreground hover:text-white">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-muted-foreground hover:text-white">
                <Github size={18} />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-muted-foreground hover:text-white">
                <MessageSquare size={18} />
              </a>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              © 2025 The Brew Route. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
