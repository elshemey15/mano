import React, { useState } from 'react';
import { PackageItem } from '../types';
import { Check, Star, Zap, Clock, TrendingUp } from 'lucide-react';

interface PackagesProps {
  onSelectPackage: (pkg: PackageItem) => void;
}

const packagesList: PackageItem[] = [
  {
    id: 'bronze',
    name: 'السلة البرونزية',
    price: 100,
    currency: 'ج.م',
    roi: '200%',
    duration: 'شهرية',
    color: 'bg-gradient-to-b from-amber-700 to-amber-900',
    badgeColor: 'text-amber-800 bg-amber-100',
    features: ['عائد شهري ثابت', 'دعم فني عبر الإيميل', 'سحب الأرباح نهاية المدة', 'تقارير مبسطة'],
    description: 'الباقة المثالية للمبتدئين في عالم الاستثمار بأسعار رمزية وعوائد مضمونة.',
    minDeposit: 100
  },
  {
    id: 'silver',
    name: 'السلة الفضية',
    price: 500,
    currency: '$',
    roi: '15%',
    duration: 'شهرية',
    color: 'bg-gradient-to-b from-slate-400 to-slate-600',
    badgeColor: 'text-slate-800 bg-slate-100',
    features: ['عائد شهري ممتاز', 'دعم فني مباشر', 'سحب أسبوعي للأرباح', 'تحليلات سوقية'],
    description: 'توازن مثالي بين السعر والعائد، مصممة للمستثمرين الباحثين عن النمو المستقر.',
    minDeposit: 500
  },
  {
    id: 'gold',
    name: 'السلة الذهبية',
    price: 1000,
    currency: '$',
    roi: '25%',
    duration: 'شهرية',
    color: 'bg-gradient-to-b from-yellow-400 to-yellow-600',
    badgeColor: 'text-yellow-800 bg-yellow-100',
    features: ['أعلى عائد استثماري', 'مدير حساب خاص', 'سحب يومي للأرباح', 'توصيات حصرية'],
    description: 'باقة النخبة للمستثمرين الجادين، تمنحك أقصى درجات الربحية والخدمة المميزة.',
    minDeposit: 1000
  }
];

const Packages: React.FC<PackagesProps> = ({ onSelectPackage }) => {
  const [customAmount, setCustomAmount] = useState<number>(1000);

  const handleCustomSubscribe = () => {
     const pkg: PackageItem = {
        id: 'custom-vip',
        name: 'باقة الـ 24 ساعة السريعة',
        price: customAmount,
        currency: 'ج.م',
        roi: '200%', // 200% profit leads to 300% total return (Principal + Profit)
        duration: '24 ساعة',
        color: 'bg-gradient-to-r from-indigo-600 to-purple-600',
        badgeColor: 'text-indigo-800 bg-indigo-100',
        features: ['عائد 3 أضعاف المبلغ', 'دورة استثمارية 24 ساعة فقط', 'سحب فوري وتلقائي', 'أولوية في التنفيذ'],
        description: `باقة VIP خاصة تتيح لك استثمار ${customAmount} ج.م والحصول على إجمالي ${customAmount * 3} ج.م خلال 24 ساعة فقط.`,
        minDeposit: 100
     };
     onSelectPackage(pkg);
  };

  return (
    <section id="packages" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-navy mb-4">باقات الاستثمار</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">اختر الخطة التي تناسب طموحك المالي وابدأ في تحقيق الأرباح اليوم</p>
        </div>

        {/* Custom Package Calculator Section - VIP 24 Hours */}
        <div className="mb-20 bg-white rounded-3xl shadow-xl border border-indigo-100 overflow-hidden relative transform hover:scale-[1.01] transition-transform duration-500">
            {/* Decorative Top Line */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
            
            <div className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Calculator Controls */}
                <div>
                    <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full font-bold mb-6 border border-indigo-100 animate-pulse">
                        <Zap className="w-5 h-5 fill-current" />
                        <span>باقة الربح السريع VIP</span>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-gray-800 mb-4 leading-tight">
                        ضاعف أموالك <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 text-4xl">3 مرات</span> <br/>
                        خلال 24 ساعة فقط!
                    </h3>
                    
                    <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                        اختر المبلغ الذي تريد استثماره من 100 ج.م حتى 10,000 ج.م باستخدام المؤشر أدناه، وشاهد أرباحك تنمو في وقت قياسي.
                    </p>
                    
                    <div className="space-y-8 bg-gray-50 p-6 rounded-2xl border border-gray-200">
                        <div>
                            <div className="flex justify-between text-sm font-bold text-gray-500 mb-4">
                                <span>حدد مبلغ الاستثمار</span>
                                <span className="text-indigo-600 bg-white px-3 py-1 rounded-lg shadow-sm border border-gray-100">{customAmount} ج.م</span>
                            </div>
                            <input 
                                type="range" 
                                min="100" 
                                max="10000" 
                                step="100"
                                value={customAmount}
                                onChange={(e) => setCustomAmount(Number(e.target.value))}
                                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                            />
                            <div className="flex justify-between text-xs text-gray-400 mt-2 font-medium px-1">
                                <span>100 ج.م</span>
                                <span>10,000 ج.م</span>
                            </div>
                        </div>

                         <div className="flex items-center gap-4">
                            <div className="flex-1 bg-white p-3 rounded-xl border border-gray-200 shadow-inner">
                                <label className="text-xs text-gray-400 font-bold block mb-1">المبلغ المختار (ج.م)</label>
                                <input 
                                    type="number" 
                                    min="100" 
                                    max="10000" 
                                    value={customAmount}
                                    onChange={(e) => {
                                        let val = Number(e.target.value);
                                        if (val > 10000) val = 10000;
                                        setCustomAmount(val);
                                    }}
                                    className="w-full bg-transparent font-bold text-xl text-brand-navy focus:outline-none"
                                />
                            </div>
                         </div>
                    </div>
                </div>

                {/* Result Card */}
                <div className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-2xl p-8 md:p-10 text-white text-center shadow-2xl relative overflow-hidden flex flex-col justify-between h-full min-h-[400px]">
                    {/* Background Effects */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-pink-500/20 rounded-full -ml-16 -mb-16 blur-3xl"></div>
                    
                    <div className="relative z-10">
                        <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-md border border-white/20 shadow-lg">
                            <Clock className="w-10 h-10 text-yellow-300" />
                        </div>
                        
                        <p className="text-indigo-200 font-medium mb-2 uppercase tracking-wide text-sm">العائد المتوقع</p>
                        
                        <div className="text-6xl font-extrabold mb-2 tracking-tight drop-shadow-lg">
                            {customAmount * 3} <span className="text-2xl text-indigo-300">ج.م</span>
                        </div>
                        
                        <div className="flex justify-center items-center gap-2 mb-8">
                            <div className="inline-flex items-center gap-1 bg-green-500/20 text-green-300 px-4 py-1.5 rounded-full text-sm font-bold border border-green-500/30 backdrop-blur-sm">
                                <TrendingUp className="w-4 h-4" />
                                <span>+200% ربح صافي</span>
                            </div>
                            <span className="text-indigo-300 text-sm font-medium">خلال 24 ساعة</span>
                        </div>

                        <div className="space-y-3">
                            <button 
                                onClick={handleCustomSubscribe}
                                className="w-full bg-white text-indigo-900 py-4 rounded-xl font-bold text-lg hover:bg-indigo-50 transition-all shadow-xl hover:shadow-white/20 active:scale-95 flex items-center justify-center gap-2"
                            >
                                <Zap className="w-5 h-5" />
                                اشترك الآن فوراً
                            </button>
                            <p className="text-xs text-indigo-300/60">* تطبق الشروط والأحكام. العائد مضمون بنسبة عالية.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Regular Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {packagesList.map((pkg) => (
            <div key={pkg.id} className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full transform hover:-translate-y-2">
              
              {/* Header Card */}
              <div className={`${pkg.color} p-8 text-center text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/20 rounded-full -mr-10 -mt-10 blur-2xl"></div>
                <div className="relative z-10">
                   {pkg.id === 'gold' && <Star className="w-8 h-8 mx-auto mb-2 text-yellow-200 fill-current animate-pulse" />}
                   <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                   <div className="flex justify-center items-baseline gap-1">
                     <span className="text-5xl font-extrabold">{pkg.currency}{pkg.price}</span>
                   </div>
                   <p className="opacity-90 mt-2 font-medium">عائد {pkg.roi}</p>
                </div>
              </div>

              {/* Body */}
              <div className="p-8 flex-1 flex flex-col">
                <ul className="space-y-4 mb-8 flex-1">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-600">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                        <Check className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => onSelectPackage(pkg)}
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 transform active:scale-95 shadow-md
                    ${pkg.id === 'gold' 
                      ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white hover:from-yellow-600 hover:to-yellow-700 shadow-yellow-200' 
                      : pkg.id === 'silver'
                        ? 'bg-gradient-to-r from-gray-500 to-gray-600 text-white hover:from-gray-600 hover:to-gray-700 shadow-gray-200'
                        : 'bg-gradient-to-r from-brand-navy to-blue-900 text-white hover:from-blue-900 hover:to-black shadow-blue-200'
                    }
                  `}
                >
                  عرض التفاصيل والاشتراك
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;