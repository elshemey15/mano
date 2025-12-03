import React from 'react';
import { CheckCircle, ShieldCheck, TrendingUp } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative bg-gradient-to-br from-brand-navy via-blue-900 to-slate-900 text-white overflow-hidden py-20 lg:py-32">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="text-center lg:text-right space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20 backdrop-blur-sm">
              <ShieldCheck className="w-5 h-5 text-brand-gold" />
              <span className="text-sm font-semibold text-brand-gold">شركة مرخصة وموثوقة 100%</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight">
              صحح <span className="text-brand-gold">استثمارك</span> <br />
              مع القمة للاستثمار
            </h1>
            
            <p className="text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              انطلق نحو مستقبل مالي آمن مع باقات استثمارية مدروسة بعناية لتناسب جميع التطلعات. نحن نضمن لك الشفافية والأرباح المستدامة.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#packages" className="bg-gradient-to-r from-brand-orange to-brand-gold text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-orange-500/30 hover:scale-105 transition-all duration-300 text-center">
                ابدأ الاستثمار الآن
              </a>
              <a href="#about" className="bg-white/10 border border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300 text-center flex items-center justify-center">
                تعرف علينا أكثر
              </a>
            </div>

            <div className="pt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>أرباح شهرية</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>دعم 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>سحب فوري</span>
              </div>
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="relative z-10 animate-float">
               {/* Illustration using CSS Shapes/Abstract or Placeholder */}
               <img 
                src="https://picsum.photos/600/500?random=1" 
                alt="Investment Growth" 
                className="rounded-3xl shadow-2xl border-4 border-white/10"
               />
               
               {/* Floating Card Mockup */}
               <div className="absolute -bottom-10 -right-10 bg-white text-gray-800 p-6 rounded-2xl shadow-xl animate-pulse-slow">
                 <div className="flex items-center gap-4 mb-2">
                   <div className="bg-green-100 p-2 rounded-full">
                     <TrendingUp className="w-6 h-6 text-green-600" />
                   </div>
                   <div>
                     <p className="text-sm text-gray-500">الأرباح اليومية</p>
                     <p className="font-bold text-xl text-brand-navy">+ $1,250</p>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;