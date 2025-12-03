import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Wallet, TrendingUp, Clock, ArrowUpRight, CheckCircle, XCircle, Package } from 'lucide-react';
import { User } from '../types';

interface UserDashboardProps {
  user: User;
}

const data = [
  { name: '1', uv: 1000 },
  { name: '5', uv: 1200 },
  { name: '10', uv: 1100 },
  { name: '15', uv: 1500 },
  { name: '20', uv: 1800 },
  { name: '25', uv: 2100 },
  { name: '30', uv: 2500 },
];

const UserDashboard: React.FC<UserDashboardProps> = ({ user }) => {
  return (
    <section id="dashboard" className="py-20 bg-white min-h-[80vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-brand-orange font-bold tracking-wider uppercase text-sm">لوحة التحكم</span>
          <h2 className="text-3xl font-bold text-brand-navy mt-2">بيانات حسابك الشخصي</h2>
        </div>

        {/* Dashboard Container */}
        <div className="bg-gray-50 rounded-3xl border border-gray-200 shadow-2xl overflow-hidden p-6 lg:p-10 max-w-5xl mx-auto">
          
          {/* Dashboard Header */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 pb-6 border-b border-gray-200 bg-white p-6 rounded-2xl shadow-sm">
            <div className="flex items-center gap-4 mb-4 md:mb-0 w-full">
              <div className="w-16 h-16 bg-brand-navy text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                {user.name.charAt(0)}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-xl text-gray-800">{user.name}</h3>
                <div className="flex flex-wrap gap-4 mt-2">
                   <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md text-sm font-mono font-bold">
                     User ID: {user.id}
                   </span>
                   {user.subscriptionStatus === 'active' ? (
                     <span className="bg-green-100 text-green-700 px-3 py-1 rounded-md text-sm font-bold flex items-center gap-1">
                       <CheckCircle className="w-4 h-4" />
                       نشط
                     </span>
                   ) : (
                     <span className="bg-red-100 text-red-700 px-3 py-1 rounded-md text-sm font-bold flex items-center gap-1">
                       <XCircle className="w-4 h-4" />
                       غير مفعل
                     </span>
                   )}
                </div>
              </div>
            </div>
            
            {/* Show Package if Active */}
            {user.subscriptionStatus === 'active' && user.activePackage && (
               <div className="bg-gradient-to-r from-brand-orange to-yellow-500 text-white px-6 py-3 rounded-xl shadow-lg flex items-center gap-3 min-w-[200px] justify-center">
                  <Package className="w-6 h-6" />
                  <div>
                    <p className="text-xs opacity-90">الباقة الحالية</p>
                    <p className="font-bold text-lg">{user.activePackage}</p>
                  </div>
               </div>
            )}
          </div>

          {/* Alert for Inactive Users */}
          {user.subscriptionStatus !== 'active' && (
            <div className="bg-yellow-50 border-r-4 border-yellow-400 p-4 rounded-lg mb-8 text-yellow-800 flex items-start gap-3">
              <Clock className="w-6 h-6 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold">الحساب قيد المراجعة أو غير مفعل</p>
                <p className="text-sm mt-1">يرجى الانتظار حتى تقوم الإدارة بتفعيل باقتك المختارة، أو تواصل معنا عبر واتساب لتسريع العملية.</p>
              </div>
            </div>
          )}

          {/* Stats Cards (Visual Only - Logic requires backend usually, simplified here) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-blue-100 p-3 rounded-xl text-blue-600">
                    <Wallet className="w-6 h-6" />
                  </div>
                </div>
                <p className="text-gray-500 text-sm font-medium">حالة الاشتراك</p>
                <h4 className={`text-xl font-extrabold mt-1 ${user.subscriptionStatus === 'active' ? 'text-green-600' : 'text-red-500'}`}>
                  {user.subscriptionStatus === 'active' ? 'جاري جني الأرباح' : 'معلق'}
                </h4>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-20 h-20 bg-orange-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-orange-100 p-3 rounded-xl text-orange-600">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                </div>
                <p className="text-gray-500 text-sm font-medium">نوع الباقة</p>
                <h4 className="text-xl font-extrabold text-gray-800 mt-1">
                  {user.activePackage || '---'}
                </h4>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-20 h-20 bg-purple-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-purple-100 p-3 rounded-xl text-purple-600">
                    <Clock className="w-6 h-6" />
                  </div>
                </div>
                <p className="text-gray-500 text-sm font-medium">تاريخ التسجيل</p>
                <h4 className="text-lg font-bold text-gray-800 mt-1">{new Date().toLocaleDateString('ar-EG')}</h4>
              </div>
            </div>
          </div>

          {/* Chart Section (Visual Mockup) */}
          {user.subscriptionStatus === 'active' && (
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-6">
                <h4 className="font-bold text-gray-800">تحليل نمو الأرباح (تقديري)</h4>
                <div className="flex items-center gap-2 text-sm text-green-600 font-medium">
                  <ArrowUpRight className="w-4 h-4" />
                  <span>نمو مستمر</span>
                </div>
              </div>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#c05621" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#c05621" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
                    <XAxis dataKey="name" tick={{fontSize: 12}} axisLine={false} tickLine={false} />
                    <YAxis tick={{fontSize: 12}} axisLine={false} tickLine={false} />
                    <Tooltip 
                      contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}} 
                    />
                    <Area type="monotone" dataKey="uv" stroke="#c05621" fillOpacity={1} fill="url(#colorUv)" strokeWidth={3} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
          
        </div>
      </div>
    </section>
  );
};

export default UserDashboard;