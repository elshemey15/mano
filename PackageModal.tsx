import React from 'react';
import { PackageItem } from '../types';
import { X, Calculator, ArrowRight, MessageCircle } from 'lucide-react';

interface PackageModalProps {
  pkg: PackageItem | null;
  isOpen: boolean;
  onClose: () => void;
}

const PackageModal: React.FC<PackageModalProps> = ({ pkg, isOpen, onClose }) => {
  if (!isOpen || !pkg) return null;

  // Calculate example profit
  const numericRoi = parseInt(pkg.roi.replace('%', ''));
  const profitAmount = (pkg.price * numericRoi) / 100;
  const totalReturn = pkg.price + profitAmount;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-brand-navy/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden transform transition-all animate-in fade-in zoom-in duration-300">
        
        {/* Header */}
        <div className={`${pkg.color} p-6 text-white flex justify-between items-center`}>
          <div>
            <h3 className="text-2xl font-bold">تفاصيل {pkg.name}</h3>
            <p className="opacity-90 text-sm mt-1">نظرة عامة على العائد المتوقع</p>
          </div>
          <button 
            onClick={onClose}
            className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Body */}
        <div className="p-8 space-y-6">
          
          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
            <p className="text-gray-700 leading-relaxed mb-4 text-center">
              {pkg.description}
            </p>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm">
                <span className="text-gray-500 text-sm">مبلغ الاستثمار:</span>
                <span className="font-bold text-brand-navy text-lg">{pkg.currency}{pkg.price}</span>
              </div>
              <div className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm">
                <span className="text-gray-500 text-sm">نسبة الربح:</span>
                <span className="font-bold text-green-600 text-lg">+{pkg.roi}</span>
              </div>
              
              <div className="border-t border-dashed border-gray-300 my-2"></div>
              
              <div className="flex justify-between items-center bg-brand-navy/5 p-4 rounded-xl border border-brand-navy/10">
                <div className="flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-brand-navy" />
                  <span className="font-bold text-brand-navy">إجمالي العائد المتوقع:</span>
                </div>
                <span className="font-extrabold text-2xl text-brand-orange">{pkg.currency}{totalReturn}</span>
              </div>
            </div>
          </div>

          <p className="text-xs text-center text-gray-400">
            * الأرباح تقديرية وتخضع لشروط وأحكام العقد الاستثماري.
          </p>

          <a 
            href={`https://wa.me/201555044585?text=مرحبا، أود الاشتراك في ${pkg.name} بقيمة ${pkg.price} ${pkg.currency}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-3 bg-green-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition-all shadow-lg hover:shadow-green-500/30"
          >
            <MessageCircle className="w-6 h-6" />
            <span>اشترك الآن عبر واتساب</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PackageModal;