import React, { useState } from 'react';
import { TrendingUp, Instagram, Twitter, MessageCircle, Phone, X, Shield, HelpCircle, FileText, Info } from 'lucide-react';

type ModalType = 'about' | 'packages' | 'faq' | 'privacy' | null;

const Footer: React.FC = () => {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const renderModalContent = () => {
    switch (activeModal) {
      case 'about':
        return (
          <div className="space-y-4">
            <p className="text-gray-600 leading-relaxed text-justify">
              نحن شركة القمة للاستثمار، تأسست عام 2015، ونعمل منذ ذلك الحين على تقديم أفضل الخطط الاستثمارية لعملائنا بطريقة آمنة وشفافة. نفخر بتاريخ طويل من الخبرة والاحترافية، ونسعى باستمرار لتطوير خدماتنا لتلبية احتياجات المستثمرين وضمان تجربة استثمارية مريحة وموثوقة.
            </p>
            <div className="bg-brand-navy/5 p-4 rounded-xl border-r-4 border-brand-orange mt-4">
              <h5 className="font-bold text-brand-navy mb-1 flex items-center gap-2">
                <TrendingUp className="w-4 h-4" /> مقر الشركة:
              </h5>
              <p className="text-sm text-gray-700">المملكة العربية السعودية – الرياض، حي العليا، طريق الملك فهد.</p>
            </div>
          </div>
        );
      case 'packages':
        return (
          <div className="space-y-4">
            <p className="text-gray-600 leading-relaxed text-justify">
              نقدم مجموعة متنوعة من الباقات الاستثمارية المصممة لتلبية مختلف احتياجات عملائنا. بعد الاشتراك بالباقة، يتم ربط الاشتراك بالرقم المسجل على الموقع. يمكنك متابعة أرباحك بسهولة عبر لوحة التحكم الخاصة بك.
            </p>
            <div className="bg-green-50 border border-green-200 p-4 rounded-xl flex items-start gap-3">
              <MessageCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <p className="text-sm text-green-800 font-medium">لأي استفسار أو مشكلة، تواصل معنا مباشرة عبر WhatsApp.</p>
            </div>
          </div>
        );
      case 'faq':
        return (
          <div className="space-y-3">
            {[
              { q: 'كيف أضمن صحة الاشتراك والأرباح؟', a: 'نحن شركة مرخصة ونقدم عقود إلكترونية لضمان حقوق كافة الأطراف.' },
              { q: 'ماذا أفعل إذا واجهت مشكلة في حسابي؟', a: 'يمكنك التواصل مع الدعم الفني المباشر عبر الواتساب لحل أي مشكلة فوراً.' },
              { q: 'هل بياناتي الشخصية آمنة؟', a: 'نعم، نستخدم بروتوكولات تشفير متقدمة لحماية بياناتك ولا نشاركها مع أي طرف ثالث.' },
              { q: 'كيف يمكنني اختيار الباقة المناسبة؟', a: 'راجع صفحة الباقات لمقارنة العوائد، أو تواصل معنا للمساعدة في الاختيار.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                <h5 className="font-bold text-brand-navy text-sm mb-2 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-brand-orange" />
                  {item.q}
                </h5>
                <p className="text-gray-600 text-sm leading-relaxed pr-6 border-r-2 border-gray-200 mr-1">{item.a}</p>
              </div>
            ))}
          </div>
        );
      case 'privacy':
        return (
          <div className="space-y-4">
            <div className="flex justify-center mb-4">
               <Shield className="w-16 h-16 text-brand-navy/10" />
            </div>
            <p className="text-gray-600 leading-relaxed text-justify">
              نحن نحترم خصوصية عملائنا ونلتزم بحماية جميع البيانات الشخصية. يتم استخدام المعلومات فقط لأغراض إدارة الاشتراكات وتحسين تجربة المستخدم، ولا نشارك أي بيانات مع جهات خارجية دون موافقة العميل.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  const getTitle = () => {
     switch(activeModal) {
        case 'about': return 'عن الشركة';
        case 'packages': return 'الباقات والاستثمار';
        case 'faq': return 'الأسئلة الشائعة';
        case 'privacy': return 'سياسة الخصوصية';
        default: return '';
     }
  };

  return (
    <>
      <footer id="contact" className="bg-brand-navy text-white pt-16 pb-8 relative z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            
            {/* Brand Info */}
            <div className="col-span-1 md:col-span-1 space-y-4">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-8 w-8 text-brand-gold" />
                <span className="font-bold text-2xl">القمة للاستثمار</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                شريكك الموثوق في عالم المال والأعمال. نقدم حلولاً استثمارية مبتكرة تضمن لك نمواً مستداماً لرأس المال بأعلى معايير الأمان.
              </p>
              <div className="inline-block bg-white/10 px-3 py-1 rounded text-xs text-brand-gold border border-brand-gold/30">
                ترخيص رقم: 102938475
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-4 text-brand-orange">روابط سريعة</h4>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li>
                  <button onClick={() => setActiveModal('about')} className="hover:text-white hover:translate-x-1 transition-all flex items-center gap-2 w-full text-right">
                    <Info className="w-4 h-4" /> عن الشركة
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveModal('packages')} className="hover:text-white hover:translate-x-1 transition-all flex items-center gap-2 w-full text-right">
                    <TrendingUp className="w-4 h-4" /> الباقات
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveModal('faq')} className="hover:text-white hover:translate-x-1 transition-all flex items-center gap-2 w-full text-right">
                    <HelpCircle className="w-4 h-4" /> الأسئلة الشائعة
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveModal('privacy')} className="hover:text-white hover:translate-x-1 transition-all flex items-center gap-2 w-full text-right">
                    <FileText className="w-4 h-4" /> سياسة الخصوصية
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-lg mb-4 text-brand-orange">تواصل معنا</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>المملكة العربية السعودية، الرياض</li>
                <li>حي العليا، طريق الملك فهد</li>
                <li className="flex items-center justify-end gap-2 text-right">
                  <span dir="ltr">+966 50 000 0000</span>
                  <Phone className="w-4 h-4 text-gray-400" />
                </li>
                <li className="text-right">
                  <a 
                    href="https://wa.me/201555044585" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-end gap-2 hover:text-green-400 transition-colors"
                  >
                    <span dir="ltr">01555044585</span>
                    <MessageCircle className="w-4 h-4 text-green-500" />
                  </a>
                </li>
                <li>info@alqimma-invest.com</li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-bold text-lg mb-4 text-brand-orange">تابعنا</h4>
              <div className="flex gap-4">
                <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-brand-orange transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-brand-orange transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://wa.me/201555044585" className="bg-white/10 p-2 rounded-full hover:bg-brand-orange transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} شركة القمة للاستثمار. جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </footer>

      {/* Modal Overlay */}
      {activeModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
           {/* Backdrop */}
           <div className="absolute inset-0 bg-brand-navy/80 backdrop-blur-sm transition-opacity" onClick={() => setActiveModal(null)}></div>
           
           {/* Content */}
           <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in duration-300">
              <div className="bg-brand-navy p-6 text-white flex justify-between items-center shadow-md">
                 <h3 className="text-xl font-bold">{getTitle()}</h3>
                 <button onClick={() => setActiveModal(null)} className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors">
                   <X className="w-5 h-5" />
                 </button>
              </div>
              <div className="p-8 max-h-[70vh] overflow-y-auto custom-scrollbar">
                 {renderModalContent()}
              </div>
           </div>
        </div>
      )}
    </>
  );
};

export default Footer;