import React, { useState } from 'react';
import { X, User, Lock, Phone, Globe, UserPlus, LogIn, ShieldAlert } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRegisterSubmit: (name: string, phone: string, country: string, password: string) => void;
  onLoginSubmit: (username: string, password: string) => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onRegisterSubmit, onLoginSubmit }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  
  // Login State
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // Register State
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [country, setCountry] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isSignUp) {
      if (!fullName || !phoneNumber || !registerPassword) return;
      onRegisterSubmit(fullName, phoneNumber, country, registerPassword);
    } else {
      if (!loginUsername || !loginPassword) return;
      onLoginSubmit(loginUsername, loginPassword);
    }
    
    // Reset forms (optional, depending on UX preference)
    // setLoginUsername('');
    // setLoginPassword('');
  };

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
    // Reset errors or fields if needed
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-brand-navy/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all animate-in fade-in zoom-in duration-300">
        
        {/* Header */}
        <div className="bg-brand-navy p-6 text-white flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-bold">
              {isSignUp ? 'إنشاء حساب جديد' : 'تسجيل الدخول'}
            </h3>
            <p className="opacity-80 text-sm mt-1">
              {isSignUp ? 'احصل على رقم تعريفي خاص بك فوراً' : 'سجل دخولك لمتابعة استثماراتك'}
            </p>
          </div>
          <button 
            onClick={onClose}
            className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {isSignUp ? (
              // Sign Up Fields
              <>
                <div className="space-y-1">
                  <label className="text-sm font-bold text-gray-700 block">الاسم الثلاثي</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-all outline-none text-right"
                      placeholder="محمد أحمد علي"
                      dir="auto"
                    />
                    <div className="absolute right-4 top-3.5 text-gray-400">
                      <User className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-bold text-gray-700 block">رقم الهاتف</label>
                  <div className="relative">
                    <input 
                      type="tel" 
                      required
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-all outline-none text-right"
                      placeholder="05xxxxxxxx"
                      dir="ltr"
                    />
                    <div className="absolute right-4 top-3.5 text-gray-400">
                      <Phone className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-bold text-gray-700 block">الدولة</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-all outline-none text-right"
                      placeholder="المملكة العربية السعودية"
                      dir="auto"
                    />
                    <div className="absolute right-4 top-3.5 text-gray-400">
                      <Globe className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-bold text-gray-700 block">كلمة المرور</label>
                  <div className="relative">
                    <input 
                      type="password" 
                      required
                      value={registerPassword}
                      onChange={(e) => setRegisterPassword(e.target.value)}
                      className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-all outline-none text-right"
                      placeholder="••••••••"
                      dir="ltr"
                    />
                    <div className="absolute right-4 top-3.5 text-gray-400">
                      <Lock className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </>
            ) : (
              // Login Fields
              <>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 block">الاسم أو الرقم التعريفي (User ID)</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      required
                      value={loginUsername}
                      onChange={(e) => setLoginUsername(e.target.value)}
                      className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-all outline-none text-right"
                      placeholder="مثال: admin أو 1001"
                      dir="auto"
                    />
                    <div className="absolute right-4 top-3.5 text-gray-400">
                      <User className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 block">كلمة المرور</label>
                  <div className="relative">
                    <input 
                      type="password" 
                      required
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-all outline-none text-right"
                      placeholder="••••••••"
                      dir="ltr"
                    />
                    <div className="absolute right-4 top-3.5 text-gray-400">
                      <Lock className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-3 rounded-lg flex items-start gap-2 text-xs text-blue-800">
                  <ShieldAlert className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <p>للدخول إلى لوحة الإدارة، يرجى استخدام بيانات المسؤول المعتمدة.</p>
                </div>
              </>
            )}

            <button 
              type="submit"
              className="w-full bg-brand-navy text-white py-4 rounded-xl font-bold text-lg hover:bg-brand-orange transition-all shadow-lg flex items-center justify-center gap-2"
            >
              {isSignUp ? (
                <>
                   <span>إنشاء الحساب</span>
                   <UserPlus className="w-5 h-5" />
                </>
              ) : (
                <>
                   <span>دخول</span>
                   <LogIn className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          <div className="mt-6 text-center pt-4 border-t border-gray-100">
            <p className="text-sm text-gray-500 mb-2">
              {isSignUp ? 'لديك حساب بالفعل؟' : 'ليس لديك حساب؟'}
            </p>
            <button 
              type="button"
              onClick={toggleMode}
              className="text-brand-navy font-bold hover:text-brand-orange transition-colors flex items-center justify-center gap-2 mx-auto"
            >
              {isSignUp ? (
                <>
                  <LogIn className="w-4 h-4" />
                  <span>تسجيل الدخول</span>
                </>
              ) : (
                <>
                  <UserPlus className="w-4 h-4" />
                  <span>إنشاء حساب جديد</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;