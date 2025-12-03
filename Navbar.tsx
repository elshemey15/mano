import React, { useState } from 'react';
import { Menu, X, TrendingUp, User as UserIcon, LogOut } from 'lucide-react';
import { User } from '../types';

interface NavbarProps {
  onLoginClick: () => void;
  user: User | null;
  onLogout?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLoginClick, user, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Define base links available to everyone
  const baseLinks = [
    { name: 'الرئيسية', href: '#hero' },
    { name: 'الباقات', href: '#packages' },
    { name: 'تواصل معنا', href: '#contact' },
  ];

  // Insert Dashboard link only if user is logged in
  // We insert it before "Contact Us" (index 2)
  const navLinks = [...baseLinks];
  if (user) {
    if (user.role === 'admin') {
       // Ideally admin has their own view, but assuming dashboard link implies user panel in prompt context
       // or we just don't show specific section links for admin if dashboard replaces everything.
       // Based on App.tsx, Admin only sees AdminDashboard, so scrolling to #packages/#hero might not work for Admin.
       // However, strictly following request for "User Panel" visibility logic:
    } else {
       navLinks.splice(2, 0, { name: 'لوحة المستخدم', href: '#dashboard' });
    }
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close mobile menu if open
    } else {
      // If element not found (e.g. user logged out but link visible, though we handled that), fallback
      console.warn(`Section ${href} not found`);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="bg-brand-navy p-2 rounded-lg">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-brand-navy leading-none">القمة للاستثمار</span>
              <span className="text-xs text-brand-orange font-semibold tracking-wider">AL-QIMMA INVEST</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 space-x-reverse items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-gray-700 hover:text-brand-orange font-semibold transition-colors duration-200 text-lg"
              >
                {link.name}
              </a>
            ))}
            
            {user ? (
              <div className="flex items-center gap-4 mr-4 border-r border-gray-200 pr-4">
                <div className="flex items-center gap-2 text-brand-navy">
                  <div className="bg-brand-navy/10 p-2 rounded-full">
                    <UserIcon className="w-5 h-5" />
                  </div>
                  <span className="font-bold">{user.name}</span>
                </div>
                {onLogout && (
                  <button 
                    onClick={onLogout}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                    title="تسجيل خروج"
                  >
                    <LogOut className="w-5 h-5" />
                  </button>
                )}
              </div>
            ) : (
              <button 
                onClick={onLoginClick}
                className="bg-brand-navy text-white px-6 py-2 rounded-full font-bold hover:bg-brand-orange transition-colors shadow-lg"
              >
                دخول
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-brand-navy focus:outline-none"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {user && (
              <div className="py-3 border-b border-gray-100 mb-2 flex justify-between items-center">
                 <div className="flex items-center gap-2">
                    <UserIcon className="w-5 h-5 text-brand-navy" />
                    <span className="font-bold text-brand-navy">{user.name}</span>
                 </div>
                 {onLogout && (
                   <button onClick={onLogout} className="text-red-500 text-sm font-bold">خروج</button>
                 )}
              </div>
            )}

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-brand-orange hover:bg-gray-50"
              >
                {link.name}
              </a>
            ))}
            
            {!user && (
               <button 
                 onClick={() => {
                   setIsOpen(false);
                   onLoginClick();
                 }}
                 className="w-full mt-4 bg-brand-navy text-white px-6 py-3 rounded-lg font-bold"
               >
                تسجيل الدخول
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;