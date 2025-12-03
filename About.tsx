import React from 'react';
import { ShieldCheck, Target, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-brand-orange font-bold tracking-wider uppercase text-sm">من نحن</span>
          <h2 className="text-3xl md:text-5xl font-bold text-brand-navy mt-2">تعرف علينا أكثر</h2>
          <div className="w-24 h-1 bg-brand-orange mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed text-justify">
            <p>
              نحن شركة استثمار مرخّصة ومعتمدة من الهيئة المالية، نسعى لتقديم أفضل الخطط الاستثمارية لعملائنا بطريقة آمنة وشفافة. هدفنا هو تمكين كل مستثمر من اختيار الباقة الأنسب له ومتابعة أرباحه بكل سهولة ووضوح.
            </p>
            <p>
              نحن نؤمن بالاحترافية والشفافية، ونعمل باستمرار على تطوير خدماتنا لتلبية احتياجات عملائنا وضمان تجربة استثمارية مريحة وموثوقة.
            </p>
            <div className="bg-brand-navy/5 p-6 rounded-xl border-r-4 border-brand-orange mt-6">
              <p className="font-bold text-brand-navy text-xl">
                 انضم إلينا اليوم واكتشف كيف يمكن لاستثماراتك أن تنمو بثقة واطمئنان.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center text-brand-navy mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-brand-navy mb-2 text-lg">مرخصة ومعتمدة</h4>
              <p className="text-sm text-gray-500 leading-relaxed">نعمل تحت مظلة الهيئة المالية لضمان حقوق المستثمرين بأعلى معايير الأمان.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 sm:mt-8">
              <div className="bg-orange-100 w-12 h-12 rounded-xl flex items-center justify-center text-brand-orange mb-4">
                <Target className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-brand-navy mb-2 text-lg">أهداف واضحة</h4>
              <p className="text-sm text-gray-500 leading-relaxed">تمكين المستثمرين من تحقيق عوائد مستدامة وشفافة تلبي طموحاتهم.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="bg-green-100 w-12 h-12 rounded-xl flex items-center justify-center text-green-600 mb-4">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-brand-navy mb-2 text-lg">نمو مستمر</h4>
              <p className="text-sm text-gray-500 leading-relaxed">خطط استثمارية مدروسة لضمان نمو رأس المال بشكل دوري ومستقر.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;