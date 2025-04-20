
import { AnimatedHeader } from "@/components/AnimatedHeader";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { QRScanner } from "@/components/QRScanner";
import { useEffect, useState } from "react";

const Index = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen bg-background ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
      <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1617957718614-13ff25843fe8?q=80&w=2832&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat opacity-10 z-[-1]"></div>
      
      <AnimatedHeader />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <QRScanner />
        <Features />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
