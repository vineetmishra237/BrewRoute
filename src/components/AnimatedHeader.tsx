
import { ArrowRight, QrCode, Shield } from "lucide-react";
import { useEffect, useState } from "react";

export const AnimatedHeader = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <header className="relative border-b border-white/10 bg-black/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className={`${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <div className="flex items-center mb-2">
            <Shield className="mr-2 h-8 w-8 text-green-400 animate-glow" />
            <h1 className="text-4xl font-bold text-gradient">SupplyChainGuard</h1>
          </div>
          
          <p className={`text-muted-foreground mt-2 max-w-xl ${isVisible ? "animate-fade-in delay-200" : "opacity-0"}`}>
            Transparent & Ethical Product Tracking powered by blockchain technology
          </p>
          
          <div className={`flex items-center gap-4 mt-4 ${isVisible ? "animate-fade-in delay-300" : "opacity-0"}`}>
            <div className="flex items-center gap-2 text-green-400">
              <QrCode size={16} />
              <span className="text-sm">Scan product codes</span>
            </div>
            <ArrowRight size={14} className="text-muted-foreground" />
            <div className="flex items-center gap-2 text-green-400">
              <Shield size={16} />
              <span className="text-sm">Verify authenticity</span>
            </div>
            <ArrowRight size={14} className="text-muted-foreground" />
            <div className="flex items-center gap-2 text-green-400">
              <span className="inline-block h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-sm">Trust your purchase</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
